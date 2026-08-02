create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  org_name text not null,
  org_email text not null,
  requester_name text not null,
  student_id text not null,
  tier text not null check (tier in ('basic', 'plus', 'premium')),
  created_at timestamptz not null default now()
);

alter table subscriptions enable row level security;

create policy "Guests can submit subscription requests"
on subscriptions
for insert
to anon
with check (true);