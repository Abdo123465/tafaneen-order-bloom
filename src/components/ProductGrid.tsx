import { useState, useEffect } from "react";
import { ShoppingCart, Filter, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  is_featured: boolean;
  created_at: string;
}

interface ProductGridProps {
  categoryFilter?: string;
  showFilters?: boolean;
  limit?: number;
}

export function ProductGrid({ 
  categoryFilter, 
  showFilters = false,
  limit 
}: ProductGridProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    fetchProducts();
  }, [categoryFilter, sortBy, priceRange]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      let query = supabase
        .from('products')
        .select('*')
        .gte('price', priceRange[0])
        .lte('price', priceRange[1]);

      // Apply category filter if provided
      if (categoryFilter) {
        query = query.eq('category', categoryFilter);
      }

      // Apply sorting
      switch (sortBy) {
        case "price-asc":
          query = query.order('price', { ascending: true });
          break;
        case "price-desc":
          query = query.order('price', { ascending: false });
          break;
        case "name":
          query = query.order('name', { ascending: true });
          break;
        case "newest":
        default:
          query = query.order('created_at', { ascending: false });
          break;
      }

      // Apply limit if provided
      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "خطأ",
          description: "حدث خطأ في تحميل المنتجات",
          variant: "destructive",
        });
        return;
      }

      setProducts(data || []);

      // Calculate max price for the slider
      if (data && data.length > 0) {
        const prices = data.map(p => p.price);
        const max = Math.max(...prices);
        setMaxPrice(Math.ceil(max / 100) * 100); // Round up to nearest 100
        if (priceRange[1] === 1000) {
          setPriceRange([0, max]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ في تحميل المنتجات",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url || '📦'
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `${product.name} تم إضافته للسلة`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      {showFilters && (
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sort By */}
            <div>
              <Label htmlFor="sort" className="text-sm font-medium mb-2 block">
                ترتيب حسب
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort">
                  <SelectValue placeholder="اختر الترتيب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">الأحدث</SelectItem>
                  <SelectItem value="name">الاسم</SelectItem>
                  <SelectItem value="price-asc">السعر: الأقل للأعلى</SelectItem>
                  <SelectItem value="price-desc">السعر: الأعلى للأقل</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="md:col-span-2">
              <Label className="text-sm font-medium mb-2 block">
                نطاق السعر: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </Label>
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                min={0}
                max={maxPrice}
                step={10}
                className="mt-3"
              />
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">جاري تحميل المنتجات...</p>
        </div>
      )}

      {/* No Products Found */}
      {!loading && products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-lg font-semibold mb-2">لا توجد منتجات</h3>
          <p className="text-muted-foreground">
            لم نجد منتجات تطابق معايير البحث الخاصة بك
          </p>
        </div>
      )}

      {/* Products Grid */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card-product group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Product Image */}
              <div className="relative mb-4">
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center overflow-hidden">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'text-6xl';
                          fallback.textContent = '📦';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  ) : (
                    <div className="text-6xl">📦</div>
                  )}
                </div>
                
                {/* Featured Badge */}
                {product.is_featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    مميز
                  </Badge>
                )}

                {/* Quick Add Button - Hidden by default, shown on hover */}
                <Button
                  size="icon"
                  className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-primary hover:bg-primary/90 text-white shadow-lg"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Title */}
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                {product.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                )}

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  
                  <Button 
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-3 w-3 ml-1" />
                    إضافة
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}