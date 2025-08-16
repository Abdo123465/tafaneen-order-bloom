-- Create WhatsApp subscribers table
create table if not exists public.whatsapp_subscribers (
  id uuid primary key default gen_random_uuid(),
  phone text unique not null,
  created_at timestamptz not null default now(),
  active boolean not null default true,
  last_notification_sent timestamptz,
  notification_count integer default 0,
  preferred_categories text[],
  language text default 'ar'
);

-- Create index for phone number
create index if not exists idx_whatsapp_subscribers_phone on public.whatsapp_subscribers(phone);

-- Create index for active subscribers
create index if not exists idx_whatsapp_subscribers_active on public.whatsapp_subscribers(active);

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

-- Create table for tracking notifications
create table if not exists public.whatsapp_notifications (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid references public.whatsapp_subscribers(id) on delete cascade,
  phone text not null,
  message text not null,
  sent_at timestamptz not null default now(),
  status text default 'pending',
  notification_type text not null,
  metadata jsonb
);

-- Create index for notifications
create index if not exists idx_whatsapp_notifications_subscriber on public.whatsapp_notifications(subscriber_id);
create index if not exists idx_whatsapp_notifications_sent_at on public.whatsapp_notifications(sent_at);

-- Enable RLS for notifications table
alter table public.whatsapp_notifications enable row level security;

-- Allow service role full access to notifications
create policy if not exists "Service role full access notifications" on public.whatsapp_notifications
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

