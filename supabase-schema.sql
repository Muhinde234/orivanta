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
  ('hero_title',       'AXIOM Realty'),
  ('hero_tagline',     'Where Property Meets Professional Expertise'),
  ('hero_body',        'A professional real estate consulting company dedicated to providing reliable and innovative property solutions for individuals, businesses, investors, and institutions.'),
  ('hero_cta_primary', 'Request Consultation'),
  ('hero_cta_secondary','Explore Our Services'),
  ('hero_image',       '/images/1.jpg'),
  ('md_name',          'Daniel NGARUKIYIMANA'),
  ('md_role',          'Founder & Managing Director'),
  ('md_quote',         'Real estate decisions are among the most important financial decisions individuals and organizations make. Our goal is to provide professional knowledge, accurate information, and strategic guidance that enables our clients to make confident decisions.'),
  ('md_body',          'At AXIOM, we are committed to delivering excellence, building trust, and creating sustainable value through professional real estate solutions. We look forward to becoming your trusted partner in real estate.'),
  ('md_photo',         '/images/PXL_20231128_151335702.PORTRAIT~2.jpg'),
  ('team_name',        'Daniel NGARUKIYIMANA'),
  ('team_role',        'Founder & Managing Director'),
  ('team_photo',       '/images/PXL_20231128_151335702.PORTRAIT~2.jpg'),
  ('team_email',       'daniel@axiomrealty.rw'),
  ('team_linkedin',    '#'),
  ('brand_phone',      '+250 XXX XXX XXX'),
  ('brand_email',      'info@axiomrealty.rw'),
  ('brand_address',    'Kigali, Rwanda'),
  ('brand_hours',      'Monday – Friday: 9:00 AM – 5:00 PM')
on conflict (key) do nothing;
