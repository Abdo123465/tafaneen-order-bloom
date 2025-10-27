-- Create a table to track product sales
CREATE TABLE public.product_sales (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_price DECIMAL(10,2) NOT NULL,
  product_image TEXT,
  sales_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(product_id)
);

-- Enable Row Level Security
ALTER TABLE public.product_sales ENABLE ROW LEVEL SECURITY;

-- Create policy to allow reading sales data for everyone
CREATE POLICY "Product sales are viewable by everyone" 
ON public.product_sales 
FOR SELECT 
USING (true);

-- Create policy to allow inserting/updating sales data (for backend operations)
CREATE POLICY "Sales data can be updated by system" 
ON public.product_sales 
FOR ALL
USING (true)
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_product_sales_updated_at
BEFORE UPDATE ON public.product_sales
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create or replace function to increment product sales
CREATE OR REPLACE FUNCTION public.increment_product_sales(
  p_product_id TEXT,
  p_product_name TEXT,
  p_product_price DECIMAL(10,2),
  p_product_image TEXT DEFAULT NULL
)
RETURNS void AS $$
BEGIN
  INSERT INTO public.product_sales (product_id, product_name, product_price, product_image, sales_count)
  VALUES (p_product_id, p_product_name, p_product_price, p_product_image, 1)
  ON CONFLICT (product_id) 
  DO UPDATE SET 
    sales_count = product_sales.sales_count + 1,
    updated_at = now();
END;
$$ LANGUAGE plpgsql;