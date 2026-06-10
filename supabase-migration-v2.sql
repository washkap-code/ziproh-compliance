-- ═══════════════════════════════════════════════════════════════════
-- Ziproh Compliance — v2.0 migration (SAFE TO RE-RUN)
-- Run this INSTEAD of the full supabase-schema.sql on an existing
-- project. Every statement is idempotent: existing objects are
-- skipped or replaced, never duplicated.
-- ═══════════════════════════════════════════════════════════════════

-- ─── 1. Profile columns: logo + per-org PDF password ─────────────
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS logo_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS pdf_unlock_password TEXT;

-- ─── 2. Policy adoptions ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.policy_adoptions (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id         UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  document_id    TEXT NOT NULL,
  reviewer_name  TEXT NOT NULL,
  reviewer_role  TEXT NOT NULL,
  adopted_at     DATE NOT NULL,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (org_id, document_id)
);

ALTER TABLE public.policy_adoptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Orgs manage own adoptions" ON public.policy_adoptions;
CREATE POLICY "Orgs manage own adoptions" ON public.policy_adoptions
  FOR ALL USING (auth.uid() = org_id);

-- ─── 3. Storage: org-logos bucket ────────────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('org-logos', 'org-logos', true)
ON CONFLICT DO NOTHING;

DROP POLICY IF EXISTS "Authenticated users upload logos" ON storage.objects;
CREATE POLICY "Authenticated users upload logos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Anyone can view logos" ON storage.objects;
CREATE POLICY "Anyone can view logos" ON storage.objects
  FOR SELECT USING (bucket_id = 'org-logos');

DROP POLICY IF EXISTS "Users can update own logos" ON storage.objects;
CREATE POLICY "Users can update own logos" ON storage.objects
  FOR UPDATE USING (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Users can delete own logos" ON storage.objects;
CREATE POLICY "Users can delete own logos" ON storage.objects
  FOR DELETE USING (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);

-- ─── 4. Public certificate verification registry ─────────────────
-- Backs the QR code on training certificates (/verify/[ref]).
-- Exposes ONLY the minimal fields needed to confirm a certificate.
CREATE OR REPLACE VIEW public.certificate_registry AS
SELECT
  tc.certificate_ref,
  tc.training_name,
  tc.module_id,
  tc.provider,
  tc.completed_at,
  (p.first_name || ' ' || p.last_name) AS learner_name,
  p.org_name
FROM public.training_completions tc
JOIN public.profiles p ON p.id = tc.user_id
WHERE tc.certificate_ref IS NOT NULL;

GRANT SELECT ON public.certificate_registry TO anon;
GRANT SELECT ON public.certificate_registry TO authenticated;

-- ─── Done ────────────────────────────────────────────────────────
-- Verify with:
--   SELECT * FROM public.certificate_registry LIMIT 5;
--   SELECT id, public FROM storage.buckets WHERE id = 'org-logos';
