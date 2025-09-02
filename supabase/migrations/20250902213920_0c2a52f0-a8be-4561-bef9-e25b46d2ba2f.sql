-- Force complete types regeneration by adding and removing a simple comment
-- This should trigger a complete refresh of the types file
COMMENT ON TABLE public.users IS 'User data table';