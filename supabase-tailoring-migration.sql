-- ============================================================
-- Care Setting Profile migration (applied 2026-07-15)
-- Parameters used to tailor every policy to the client's business
-- ============================================================
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS service_user_groups TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS nursing_care BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS medication_level TEXT NOT NULL DEFAULT 'administer'
    CHECK (medication_level IN ('none', 'prompt', 'administer', 'full')),
  ADD COLUMN IF NOT EXISTS registered_manager TEXT,
  ADD COLUMN IF NOT EXISTS safeguarding_lead TEXT,
  ADD COLUMN IF NOT EXISTS local_authority TEXT,
  ADD COLUMN IF NOT EXISTS care_profile_completed BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.service_user_groups IS 'e.g. Older adults, Dementia, Learning disabilities, Mental health, Physical disabilities, Children';
COMMENT ON COLUMN public.profiles.medication_level IS 'none = no medication support; prompt = prompting only; administer = staff administer; full = full management incl. controlled drugs';

-- Complex care overlay (applied 2026-07-15): layers clinical content into all policies
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS complex_care BOOLEAN NOT NULL DEFAULT false;
COMMENT ON COLUMN public.profiles.complex_care IS 'Service delivers complex/clinical care (e.g. tracheostomy, PEG, ventilation); layers additional clinical content into all policies';
