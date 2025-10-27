
CREATE OR REPLACE FUNCTION public.increment_product_sales(p_product_id integer)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  SET search_path = public;
  UPDATE products
  SET sales_count = sales_count + 1
  WHERE id = p_product_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  SET search_path = public;
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
