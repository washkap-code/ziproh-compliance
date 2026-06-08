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
  conducted_by UUID REFERENCES public.profiles(id),
  conducted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Row Level Security ───────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.read_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uploaded_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audits ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only see/edit their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Read records: users can see their own reads
CREATE POLICY "Users can manage own read records" ON public.read_records
  FOR ALL USING (auth.uid() = user_id);

-- Uploaded docs: org members can see their org's docs
CREATE POLICY "Users can see own org documents" ON public.uploaded_documents
  FOR SELECT USING (auth.uid() = org_id);
CREATE POLICY "Admins can manage org documents" ON public.uploaded_documents
  FOR ALL USING (auth.uid() = org_id);

-- ─── Trigger: auto-create profile on signup ───────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, org_name, service_type, regulator)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'org_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'service_type', ''),
    COALESCE(NEW.raw_user_meta_data->>'regulator', '')
  );
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
