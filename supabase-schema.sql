-- Run this in your Supabase SQL Editor
-- https://supabase.com/dashboard/project/xrrgvijfetwysgwesxid/sql

create table if not exists cms_content (
  key   text primary key,
  value text not null default ''
);

-- Enable Row Level Security
alter table cms_content enable row level security;

-- Allow public read (so the website can fetch content)
create policy "Public read" on cms_content
  for select using (true);

-- Allow authenticated users to upsert (for the admin panel)
-- Since we use the publishable key on the client, we allow all inserts/updates
-- In production, restrict this to a service role key on a server action
create policy "Allow upsert" on cms_content
  for all using (true) with check (true);

-- Seed default values (optional — the site falls back to hardcoded defaults)
insert into cms_content (key, value) values
  ('hero_title',       'ORIVANTA'),
  ('hero_tagline',     'Where property potential becomes lasting value'),
  ('hero_body',        'A professional real estate consulting company dedicated to providing reliable and innovative property solutions for individuals, businesses, investors, and institutions.'),
  ('hero_cta_primary', 'Request Consultation'),
  ('hero_cta_secondary','Explore Our Services'),
  ('hero_image',       '/images/1.jpg'),
  ('md_name',          'Daniel NGARUKIYIMANA'),
  ('md_role',          'Founder & Managing Director'),
  ('md_quote',         'Real estate decisions are among the most important financial decisions individuals and organizations make. Our goal is to provide professional knowledge, accurate information, and strategic guidance that enables our clients to make confident decisions.'),
  ('md_body',          'At ORIVANTA, we are committed to delivering excellence, building trust, and creating sustainable value through professional real estate solutions. We look forward to becoming your trusted partner in real estate.'),
  ('md_photo',         '/images/PXL_20231128_151335702.PORTRAIT~2.jpg'),
  ('team_name',        'Daniel NGARUKIYIMANA'),
  ('team_role',        'Founder & Managing Director'),
  ('team_photo',       '/images/PXL_20231128_151335702.PORTRAIT~2.jpg'),
  ('team_email',       'olivantaproperty@gmail.com'),
  ('team_linkedin',    '#'),
  ('brand_phone',      '+250 787 072 060'),
  ('brand_email',      'olivantaproperty@gmail.com'),
  ('brand_address',    'KN 82 St, Nyarugenge, NDAMAGE Building, 3rd Floor (opposite T2000 Building), Kigali, Rwanda'),
  ('brand_hours',      'Monday – Friday: 9:00 AM – 5:00 PM')
on conflict (key) do nothing;

-- ─── Property Listings ───────────────────────────────────────────────────────
create table if not exists listings (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text not null unique,
  property_type text not null check (property_type in ('land','house','apartment','commercial','office')),
  purpose       text not null check (purpose in ('sale','rent')),
  price         numeric,
  price_period  text,                    -- e.g. 'month', 'year' — null for sale listings
  currency      text not null default 'RWF',
  location      text not null,
  bedrooms      int,
  bathrooms     int,
  size_value    numeric,
  size_unit     text,                    -- e.g. 'sqm', 'acres', 'ha'
  description   text not null default '',
  cover_image   text,
  images        text[] not null default '{}',
  featured      boolean not null default false,
  status        text not null default 'published' check (status in ('published','draft')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table listings enable row level security;

-- Public read (site fetches this directly with the publishable key)
create policy "Public read listings" on listings
  for select using (true);

-- Allow the admin panel (same publishable key, gated client-side by password) to write
-- In production, restrict this to a service role key on a server action
create policy "Allow listings upsert" on listings
  for all using (true) with check (true);

create index if not exists listings_status_idx on listings (status);
create index if not exists listings_property_type_idx on listings (property_type);
create index if not exists listings_purpose_idx on listings (purpose);
