-- Add a 'role' column to the users table
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';

-- Create a function to check if a user is an admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT role
    FROM public.users
    WHERE user_id = auth.uid()
  ) = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Remove the overly permissive select policy
DROP POLICY IF EXISTS "Anyone can read products" ON public.products;

-- Add policies that require admin privileges for CUD operations
CREATE POLICY "Admins can create products"
ON public.products
FOR INSERT
WITH CHECK (is_admin());

CREATE POLICY "Admins can update products"
ON public.products
FOR UPDATE
USING (is_admin());

CREATE POLICY "Admins can delete products"
ON public.products
FOR DELETE
USING (is_admin());

-- Re-add a policy to allow anyone (including unauthenticated users) to view products
CREATE POLICY "Anyone can read products"
ON public.products
FOR SELECT
USING (true);
