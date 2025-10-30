-- 1. Enable Row Level Security on the table
ALTER TABLE public.payment_details ENABLE ROW LEVEL SECURITY;

-- 2. Create a policy to allow public read access (SELECT)
CREATE POLICY "Allow public read access"
ON public.payment_details FOR SELECT
USING (
  true -- Condition is always true, allowing access to everyone
);

-- 3. Create policies to deny modification (UPDATE, INSERT, DELETE)

-- 3.1. Deny all updates
CREATE POLICY "Deny all updates"
ON public.payment_details FOR UPDATE
USING (
  false -- Condition is always false, denying any update operation
);

-- 3.2. Deny all inserts
CREATE POLICY "Deny all inserts"
ON public.payment_details FOR INSERT
WITH CHECK (
  false -- Condition is always false, denying any insert operation
);

-- 3.3. Deny all deletes
CREATE POLICY "Deny all deletes"
ON public.payment_details FOR DELETE
USING (
  false -- Condition is always false, denying any delete operation
);
