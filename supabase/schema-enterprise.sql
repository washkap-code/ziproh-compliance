-- ─────────────────────────────────────────────────────────────────────────────
-- ENTERPRISE SCHEMA ADDITIONS
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. SITES TABLE (multi-site management for Enterprise orgs)
create table if not exists sites (
  id            uuid primary key default gen_random_uuid(),
  org_id        text not null,          -- matches profiles.org_name
  name          text not null,
  address       text,
  service_type  text,
  regulator     text default 'CQC',
  active        boolean default true,
  created_at    timestamptz default now()
);

alter table sites enable row level security;

create policy "org members can view their sites" on sites
  for select using (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );

create policy "org members can insert sites" on sites
  for insert with check (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );

create policy "org members can update sites" on sites
  for update using (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );

create policy "org members can delete sites" on sites
  for delete using (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );

-- 2. Add site_id to profiles (nullable — existing users unaffected)
alter table profiles add column if not exists site_id uuid references sites(id);

-- 3. Add site_id to audit_results (nullable — existing audits unaffected)
alter table audit_results add column if not exists site_id uuid references sites(id);

-- 4. POLICY ANNOTATIONS TABLE (Enterprise org-specific notes on policies)
create table if not exists policy_annotations (
  id          uuid primary key default gen_random_uuid(),
  org_id      text not null,
  policy_id   text not null,
  content     text not null,
  created_by  text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),
  unique (org_id, policy_id)   -- one annotation per policy per org
);

alter table policy_annotations enable row level security;

create policy "org members can view annotations" on policy_annotations
  for select using (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );

create policy "org members can manage annotations" on policy_annotations
  for all using (
    org_id = (select org_name from profiles where id = auth.uid() limit 1)
  );
