create table if not exists public.template_ideas (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  idea_title text not null,
  category text not null,
  details text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'homepage_newsletter',
  status text not null default 'subscribed',
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
