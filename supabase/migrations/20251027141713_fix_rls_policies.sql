-- Drop the existing insecure policies
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;
DROP POLICY IF EXISTS "Users can insert their own data" ON public.users;

-- Add a column to link to the auth.users table, allowing NULLs for the backfill
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id);

-- Backfill the user_id for existing users by matching phone numbers
UPDATE public.users u SET user_id = a.id FROM auth.users a WHERE u.phone = a.phone;

-- Now that we've backfilled, enforce that the user_id is not null
ALTER TABLE public.users ALTER COLUMN user_id SET NOT NULL;

-- Add a unique constraint to ensure a one-to-one mapping
ALTER TABLE public.users ADD CONSTRAINT users_user_id_key UNIQUE (user_id);

-- Create secure RLS policies based on the user_id
CREATE POLICY "Users can view their own data"
ON public.users
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own data"
ON public.users
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own data"
ON public.users
FOR UPDATE
USING (auth.uid() = user_id);
