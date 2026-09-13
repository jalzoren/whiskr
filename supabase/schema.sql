create extension if not exists pgcrypto;

create table if not exists public.cats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  nickname text,
  coat_notes text,
  cover_photo_url text,
  first_seen_at timestamptz default now(),
  sighting_count int default 1
);

create table if not exists public.entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  cat_id uuid references public.cats,
  photo_url text not null,
  lat double precision not null,
  lng double precision not null,
  place_label text,
  vibe text check (vibe in ('chill', 'spicy', 'sleepy', 'mysterious', 'playful')),
  notes text,
  seen_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists public.purr_packs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  entry_id uuid references public.entries,
  asset_url text not null,
  created_at timestamptz default now()
);

create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  key text not null,
  unlocked_at timestamptz default now(),
  unique (user_id, key)
);

create table if not exists public.streaks (
  user_id uuid primary key references auth.users,
  current_len int default 0,
  longest_len int default 0,
  freeze_tokens int default 1,
  last_entry_date date
);

alter table public.cats enable row level security;
alter table public.entries enable row level security;
alter table public.purr_packs enable row level security;
alter table public.badges enable row level security;
alter table public.streaks enable row level security;

create policy "users manage their cats" on public.cats for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage their entries" on public.entries for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage their purr packs" on public.purr_packs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage their badges" on public.badges for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage their streak" on public.streaks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.recompute_streaks()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.streaks (user_id, current_len, longest_len, last_entry_date)
  select user_id, count(distinct seen_at::date), count(distinct seen_at::date), max(seen_at::date)
  from public.entries
  group by user_id
  on conflict (user_id) do update set
    current_len = excluded.current_len,
    longest_len = greatest(public.streaks.longest_len, excluded.longest_len),
    last_entry_date = excluded.last_entry_date;
end;
$$;

-- Run from Supabase Dashboard > SQL Editor after enabling pg_cron:
-- select cron.schedule('whiskr-nightly-streaks', '15 2 * * *', $$select public.recompute_streaks();$$);
