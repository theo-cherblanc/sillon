-- Copie de la mémoire, une ligne par compte.
-- À coller dans l'éditeur SQL Supabase. La clé service ne va pas dans l'app.

create table public.memory (
  user_id uuid primary key references auth.users (id) on delete cascade,
  exported_at bigint not null,
  payload jsonb not null
);

alter table public.memory enable row level security;

create policy "read own memory"
  on public.memory
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "insert own memory"
  on public.memory
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "update own memory"
  on public.memory
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
