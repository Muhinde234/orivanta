-- Run this in your Supabase SQL Editor
-- https://supabase.com/dashboard/project/xrrgvijfetwysgwesxid/sql

create table if not exists cms_content (
  key   text primary key,
  value text not null default ''
);

-- Enable Row Level Security
alter table cms_content enable row level security;

-- Allow public read (so the website can fetch content)
drop policy if exists "Public read" on cms_content;
create policy "Public read" on cms_content
  for select using (true);

-- Allow authenticated users to upsert (for the admin panel)
-- Since we use the publishable key on the client, we allow all inserts/updates
-- In production, restrict this to a service role key on a server action
drop policy if exists "Allow upsert" on cms_content;
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
  ('brand_hours',      'Monday – Friday: 9:00 AM – 7:00 PM')
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
drop policy if exists "Public read listings" on listings;
create policy "Public read listings" on listings
  for select using (true);

-- Allow the admin panel (same publishable key, gated client-side by password) to write
-- In production, restrict this to a service role key on a server action
drop policy if exists "Allow listings upsert" on listings;
create policy "Allow listings upsert" on listings
  for all using (true) with check (true);

create index if not exists listings_status_idx on listings (status);
create index if not exists listings_property_type_idx on listings (property_type);
create index if not exists listings_purpose_idx on listings (purpose);

-- Seed starter listings using the house1–house7 photos in /public/images
insert into listings (title, slug, property_type, purpose, price, price_period, currency, location, bedrooms, bathrooms, size_value, size_unit, description, cover_image, images, featured, status) values
  ('Modern Family House in Kacyiru', 'modern-family-house-kacyiru', 'house', 'sale', 180000000, null, 'RWF', 'Kacyiru, Gasabo, Kigali', 4, 3, 350, 'sqm', 'A beautifully finished modern family home in the heart of Kacyiru, featuring spacious living areas, a private garden, and secure parking. Close to embassies, schools, and shopping centers.', '/images/house1.jpeg', array['/images/house1.jpeg'], true, 'published'),
  ('Cozy 3-Bedroom Home in Kimihurura', 'cozy-home-kimihurura', 'house', 'rent', 1200000, 'month', 'RWF', 'Kimihurura, Gasabo, Kigali', 3, 2, 220, 'sqm', 'A comfortable and well-maintained 3-bedroom house in the sought-after Kimihurura neighborhood, ideal for families or professionals seeking a quiet residential setting close to the city center.', '/images/house2.jpeg', array['/images/house2.jpeg'], false, 'published'),
  ('Spacious Villa in Nyarutarama', 'spacious-villa-nyarutarama', 'house', 'sale', 320000000, null, 'RWF', 'Nyarutarama, Gasabo, Kigali', 5, 4, 480, 'sqm', 'An elegant, spacious villa in prestigious Nyarutarama offering generous living spaces, a landscaped compound, and premium finishes throughout — perfect for discerning buyers.', '/images/house3.jpeg', array['/images/house3.jpeg'], true, 'published'),
  ('Contemporary Home in Kibagabaga', 'contemporary-home-kibagabaga', 'house', 'rent', 900000, 'month', 'RWF', 'Kibagabaga, Gasabo, Kigali', 3, 2, 200, 'sqm', 'A modern, contemporary home in the growing Kibagabaga area, featuring an open-plan layout, natural light throughout, and easy access to main roads.', '/images/house4.jpeg', array['/images/house4.jpeg'], false, 'published'),
  ('Elegant Residence in Gacuriro', 'elegant-residence-gacuriro', 'house', 'sale', 250000000, null, 'RWF', 'Gacuriro, Gasabo, Kigali', 4, 3, 300, 'sqm', 'A well-designed residence in the planned Gacuriro estate, offering quality construction, ample parking, and proximity to international schools and amenities.', '/images/house5.jpeg', array['/images/house5.jpeg'], false, 'published'),
  ('Family House in Kagugu', 'family-house-kagugu', 'house', 'sale', 150000000, null, 'RWF', 'Kagugu, Gasabo, Kigali', 3, 2, 250, 'sqm', 'A practical and comfortable family house in Kagugu, set on a quiet street with good road access, suited to buyers seeking value in a growing neighborhood.', '/images/house6.jpeg', array['/images/house6.jpeg'], false, 'published'),
  ('Modern Bungalow in Rebero', 'modern-bungalow-rebero', 'house', 'rent', 1500000, 'month', 'RWF', 'Rebero, Kicukiro, Kigali', 4, 3, 320, 'sqm', 'A stylish single-story bungalow in the scenic Rebero hills, offering panoramic views, a private compound, and a peaceful setting away from the city bustle.', '/images/house7.jpeg', array['/images/house7.jpeg'], true, 'published')
on conflict (slug) do nothing;

-- ─── Contact Inquiries + Newsletter Subscribers ──────────────────────────────
-- Unlike listings/cms_content (public data by design), these tables hold
-- other people's names, emails, phone numbers, and messages. They must NOT
-- be publicly readable via the anon/publishable key — only insertable.
-- Reading them requires the service role key from a server-side route
-- (see app/api/admin/inquiries and app/api/admin/newsletter).

create table if not exists inquiries (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  phone      text,
  company    text,
  service    text,
  location   text,
  message    text not null,
  is_read    boolean not null default false,
  created_at timestamptz not null default now()
);

alter table inquiries enable row level security;

-- Public can submit an inquiry, but cannot read any (no select policy at all)
drop policy if exists "Public insert inquiries" on inquiries;
create policy "Public insert inquiries" on inquiries
  for insert with check (true);

create table if not exists newsletter_subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

alter table newsletter_subscribers enable row level security;

drop policy if exists "Public insert newsletter" on newsletter_subscribers;
create policy "Public insert newsletter" on newsletter_subscribers
  for insert with check (true);

create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
