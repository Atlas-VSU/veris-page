create table if not exists team_members (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    title text not null,
    role text not null check (role in ('lead', 'developer', 'qa')),
    year text not null,
    image_url text,
    icon text check(icon is null or icon in ('code', 'terminal', 'database', 'briefcase', 'user-check', 'check-circle')),
   created_at timestamptz not null default now()
);

alter table team_members enable row level security;

create policy "Allow public read access"
    on team_members 
    for select
    to public
    using (true);