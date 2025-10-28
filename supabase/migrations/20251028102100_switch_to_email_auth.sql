-- Drop the existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Alter the users table to use email instead of phone
ALTER TABLE public.users
DROP COLUMN IF EXISTS phone,
ADD COLUMN IF NOT EXISTS email VARCHAR(255) UNIQUE;

-- Create a new trigger function to insert a new user with email
CREATE OR REPLACE FUNCTION public.handle_new_user_email()
RETURNS TRIGGER AS $$ BEGIN
  INSERT INTO public.users (id, email, name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'name');
  RETURN NEW;
END;
 $$ LANGUAGE plpgsql SECURITY DEFINER;
SET search_path = public;

-- Create a new trigger to fire the function after a new user is created in auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_email();
