-- ─────────────────────────────────────────────────────────────────
-- Ziproh Compliance Platform — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ─────────────────────────────────────────────────────────────────

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  org_name TEXT NOT NULL,
  service_type TEXT NOT NULL,
  regulator TEXT NOT NULL,
  plan TEXT NOT NULL DEFAULT 'starter' CHECK (plan IN ('starter', 'professional', 'enterprise')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  subscription_status TEXT NOT NULL DEFAULT 'trialing'
    CHECK (subscription_status IN ('trialing', 'active', 'past_due', 'canceled')),
  trial_ends_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '14 days'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Reading records (tracks who has read which policy)
CREATE TABLE IF NOT EXISTS public.read_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  document_id TEXT NOT NULL,
  read_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, document_id)
);

-- Uploaded documents (org can upload their own)
CREATE TABLE IF NOT EXISTS public.uploaded_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  category TEXT,
  uploaded_by UUID REFERENCES public.profiles(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Staff members (for multi-user orgs)
CREATE TABLE IF NOT EXISTS public.staff_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'staff' CHECK (role IN ('admin', 'manager', 'staff')),
  invited_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'invited' CHECK (status IN ('invited', 'active', 'deactivated')),
  UNIQUE(org_id, email)
);

-- Reading lists (assigned reading for staff)
CREATE TABLE IF NOT EXISTS public.reading_lists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  document_ids TEXT[] NOT NULL DEFAULT '{}',
  assigned_to UUID[] NOT NULL DEFAULT '{}',
  due_date DATE,
  created_by UUID REFERENCES public.profiles(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Audit records
CREATE TABLE IF NOT EXISTS public.audits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  audit_type TEXT NOT NULL DEFAULT 'internal',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'in_progress', 'completed')),
  score INTEGER,
  findings JSONB,
  conducted_by UUID REFERENCES public.profiles(id),
  conducted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Formal policy review records (manager signs off policy annually)
CREATE TABLE IF NOT EXISTS public.policy_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  document_id TEXT NOT NULL,
  reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewer_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved'
    CHECK (status IN ('approved', 'minor_updates', 'requires_revision')),
  notes TEXT,
  next_review_date DATE
);

CREATE INDEX IF NOT EXISTS idx_policy_reviews_user_doc
  ON public.policy_reviews(user_id, document_id);

-- Training completions (CPD record — covers both Ziproh modules and external training)
CREATE TABLE IF NOT EXISTS public.training_completions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  module_id TEXT,                -- e.g. "lrn-001" for Ziproh modules; NULL for external
  training_name TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'Ziproh Training',
  completed_at DATE NOT NULL,
  certificate_ref TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_training_completions_user
  ON public.training_completions(user_id);

-- ─── Row Level Security ───────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.read_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uploaded_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_completions ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only see/edit their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Read records: users can see their own reads
CREATE POLICY "Users can manage own read records" ON public.read_records
  FOR ALL USING (auth.uid() = user_id);

-- Policy reviews: users can manage their own review records
CREATE POLICY "Users can manage own policy reviews" ON public.policy_reviews
  FOR ALL USING (auth.uid() = user_id);

-- Training completions: users manage their own CPD records
CREATE POLICY "Users can manage own training completions" ON public.training_completions
  FOR ALL USING (auth.uid() = user_id);

-- Uploaded docs: org members can see their org's docs
CREATE POLICY "Users can see own org documents" ON public.uploaded_documents
  FOR SELECT USING (auth.uid() = org_id);
CREATE POLICY "Admins can manage org documents" ON public.uploaded_documents
  FOR ALL USING (auth.uid() = org_id);

-- Staff members: org owners can manage their staff; staff can view their own record
CREATE POLICY "Org owners can manage staff" ON public.staff_members
  FOR ALL USING (auth.uid() = org_id);
CREATE POLICY "Staff can view own record" ON public.staff_members
  FOR SELECT USING (auth.uid() = user_id);

-- Reading lists: org owners manage; assigned staff can view
CREATE POLICY "Org owners can manage reading lists" ON public.reading_lists
  FOR ALL USING (auth.uid() = org_id);
CREATE POLICY "Assigned staff can view reading lists" ON public.reading_lists
  FOR SELECT USING (auth.uid() = ANY(assigned_to));

-- Audits: org owners manage their own audits
CREATE POLICY "Org owners can manage audits" ON public.audits
  FOR ALL USING (auth.uid() = org_id);

-- ─── Trigger: auto-create profile on signup ───────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Create the user's own profile
  INSERT INTO public.profiles (id, email, first_name, last_name, org_name, service_type, regulator, plan)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'org_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'service_type', ''),
    COALESCE(NEW.raw_user_meta_data->>'regulator', ''),
    COALESCE(NEW.raw_user_meta_data->>'plan', 'starter')
  );

  -- Auto-link: if this email was invited as a staff member by any org,
  -- set their user_id so the org owner can see their compliance data.
  UPDATE public.staff_members
  SET user_id = NEW.id,
      status  = 'active'
  WHERE email   = NEW.email
    AND user_id IS NULL;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ─── Storage bucket for uploaded documents ────────────────────────
-- Run this separately in Supabase Storage settings, or via:
INSERT INTO storage.buckets (id, name, public)
VALUES ('org-documents', 'org-documents', false)
ON CONFLICT DO NOTHING;

CREATE POLICY "Org members can upload documents" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'org-documents' AND auth.uid() IS NOT NULL);
CREATE POLICY "Org members can view documents" ON storage.objects
  FOR SELECT USING (bucket_id = 'org-documents' AND auth.uid() IS NOT NULL);

-- ─── Audit findings column (added post-launch) ────────────────────
ALTER TABLE public.audits ADD COLUMN IF NOT EXISTS findings JSONB;

-- ─── Feedback surveys ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.feedback_surveys (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id     UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title      TEXT NOT NULL,
  audience   TEXT NOT NULL DEFAULT 'residents'
               CHECK (audience IN ('residents', 'families', 'staff', 'mixed')),
  status     TEXT NOT NULL DEFAULT 'active'
               CHECK (status IN ('active', 'draft', 'closed')),
  closes_at  TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.feedback_surveys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org owners can manage surveys" ON public.feedback_surveys
  FOR ALL USING (auth.uid() = org_id);

-- ─── Feedback responses ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.feedback_responses (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  survey_id    UUID REFERENCES public.feedback_surveys(id) ON DELETE CASCADE NOT NULL,
  org_id       UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  respondent   TEXT NOT NULL DEFAULT 'Anonymous',
  score        INTEGER NOT NULL CHECK (score BETWEEN 1 AND 5),
  comment      TEXT,
  sentiment    TEXT NOT NULL DEFAULT 'neutral'
                 CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  responded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_feedback_responses_survey
  ON public.feedback_responses(survey_id);

ALTER TABLE public.feedback_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org owners can manage responses" ON public.feedback_responses
  FOR ALL USING (auth.uid() = org_id);

-- ─── Profile: logo + PDF password columns (migration) ────────────
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS logo_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS pdf_unlock_password TEXT;

-- ─── Policy adoptions ─────────────────────────────────────────────
-- Orgs formally adopt each policy before it appears on their PDFs.
-- reviewer_name/role/adopted_at appear on the PDF cover page.
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
CREATE POLICY "Orgs manage own adoptions" ON public.policy_adoptions
  FOR ALL USING (auth.uid() = org_id);

-- ─── Supabase Storage: org-logos bucket ──────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('org-logos', 'org-logos', true)
ON CONFLICT DO NOTHING;

CREATE POLICY "Authenticated users upload logos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);
CREATE POLICY "Anyone can view logos" ON storage.objects
  FOR SELECT USING (bucket_id = 'org-logos');
CREATE POLICY "Users can update own logos" ON storage.objects
  FOR UPDATE USING (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);
CREATE POLICY "Users can delete own logos" ON storage.objects
  FOR DELETE USING (bucket_id = 'org-logos' AND auth.uid() IS NOT NULL);

-- ─── Public certificate verification registry ─────────────────────
-- Backs the QR code on training certificates (/verify/[ref]).
-- A SECURITY DEFINER view exposes ONLY the minimal fields needed to
-- confirm a certificate is genuine — nothing else from the tables.
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

-- Allow anonymous lookups (QR scans are unauthenticated)
GRANT SELECT ON public.certificate_registry TO anon;
GRANT SELECT ON public.certificate_registry TO authenticated;
