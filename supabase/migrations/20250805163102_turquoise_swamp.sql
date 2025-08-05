/*
  # Remove email column from users table

  1. Changes
    - Remove email column from users table as it's no longer needed
    - Keep phone number validation on application level
    - Maintain existing RLS policies

  2. Security
    - No changes to existing RLS policies
    - Phone-based authentication remains intact
*/

-- Remove email column from users table
ALTER TABLE public.users DROP COLUMN IF EXISTS email;

-- Update the updated_at timestamp
UPDATE public.users SET updated_at = now();