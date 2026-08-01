create table public.bug_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_email text not null,
  title text not null,
  description text not null,
  status text not null default 'new' check (status in ('new', 'in_review', 'resolved')),
  created_at timestamptz not null default now()
);

create table public.site_content (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

alter table public.bug_reports enable row level security;
alter table public.site_content enable row level security;

create policy "Allow public insert"
on public.bug_reports
for insert
to anon
with check (true);

create policy "Allow public read"
on public.site_content
for select
to anon
using (true);

-- Note: an "update" policy for authenticated users on bug_reports.status
-- already exists live in Supabase, not yet added here since it's not in use yet.
-- Add to a future migration once status-update flow is actually needed.