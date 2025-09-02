-- Create a simple table to force types regeneration
CREATE TABLE IF NOT EXISTS public.temp_fix (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Drop the temporary table immediately
DROP TABLE IF EXISTS public.temp_fix;