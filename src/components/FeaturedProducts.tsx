import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

interface BestSellingProduct {
  id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string | null;
  sales_count: number;
}

export function FeaturedProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [bestSellingProducts, setBestSellingProducts] = useState<BestSellingProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBestSellingProducts();
  }, []);

  const fetchBestSellingProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('product_sales')
        .select('*')
        .gte('sales_count', 3) // Only show products sold 3+ times
        .order('sales_count', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching best selling products:', error);
        return;
      }

      setBestSellingProducts(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: BestSellingProduct) => {
    addItem({
      id: product.product_id,
      name: product.product_name,
      price: product.product_price,
      image: product.product_image || '🛍️'
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `${product.product_name} تم إضافته للسلة`,
    });
  };

  // Don't render anything if no best selling products or still loading
  if (loading || bestSellingProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">المنتجات الأكثر مبيعاً</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            المنتجات المفضلة لدى عملائنا والأكثر شراءً في متجر تفانين
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellingProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-product group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image & Badge */}
              <div className="relative mb-4">
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                  {product.product_image ? (
                    <img 
                      src={product.product_image} 
                      alt={product.product_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling!.textContent = '🛍️';
                      }}
                    />
                  ) : (
                    <span>🛍️</span>
                  )}
                  <span className="hidden">🛍️</span>
                </div>
                
                {/* Sales Count Badge */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    تم بيعه {product.sales_count} مرة
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Title */}
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.product_name}
                  </h3>
                </div>

                {/* Rating - Simulated based on sales */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {Math.min(4.2 + (product.sales_count * 0.1), 5.0).toFixed(1)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.sales_count} عملية شراء)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {product.product_price} ج.م
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full btn-tafaneen group-hover:shadow-elegant"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="ml-2 h-4 w-4" />
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-primary/5">
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}