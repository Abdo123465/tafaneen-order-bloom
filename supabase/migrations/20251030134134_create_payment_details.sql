-- Create the payment_details table
CREATE TABLE IF NOT EXISTS public.payment_details (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    payment_method TEXT NOT NULL,
    account_details TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial payment details
INSERT INTO public.payment_details (payment_method, account_details, description) VALUES
('Vodafone Cash', '01000000000', 'Please send the payment to this number'),
('InstaPay', 'user@instapay', 'Please use this InstaPay address');
