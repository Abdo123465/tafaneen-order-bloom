import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
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
        .gte('sales_count', 1)
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
      image: product.product_image || '📦'
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `${product.product_name} تم إضافته للسلة`,
    });
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">المنتجات الأكثر مبيعاً</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              أشهر المنتجات حسب عدد المبيعات
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-product animate-pulse">
                <div className="bg-muted/50 rounded-xl aspect-square mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                  <div className="h-6 bg-muted rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (bestSellingProducts.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">المنتجات الأكثر مبيعاً</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              لا توجد مبيعات حتى الآن. ابدأ بالشراء لترى المنتجات الأكثر مبيعاً هنا!
            </p>
          </div>
        </div>
      </section>
    );
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
            أشهر المنتجات حسب عدد المبيعات في تفانين
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
              {/* Product Image & Badges */}
              <div className="relative mb-4">
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                  {product.product_image ? (
                    <img 
                      src={product.product_image} 
                      alt={product.product_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 items-center justify-center text-6xl ${product.product_image ? 'hidden' : 'flex'}`}>
                    📦
                  </div>
                </div>
                
                {/* Sales Count Badge */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <Badge className="bg-green-500 text-white">
                    {product.sales_count} مبيعة
                  </Badge>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Title */}
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.product_name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    تم بيعه {product.sales_count} مرة
                  </p>
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