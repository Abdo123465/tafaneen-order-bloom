-- Create WhatsApp subscribers table
create table if not exists public.whatsapp_subscribers (
  id uuid primary key default gen_random_uuid(),
  phone text unique not null,
  created_at timestamptz not null default now(),
  active boolean not null default true
);

-- Enable RLS
alter table public.whatsapp_subscribers enable row level security;

-- Allow anonymous insert only (for public subscription form)
create policy if not exists "Allow insert for anon" on public.whatsapp_subscribers
  for insert to anon
  with check (true);

-- Allow read for service role only (not exposed to anon)
create policy if not exists "Service role full access" on public.whatsapp_subscribers
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

