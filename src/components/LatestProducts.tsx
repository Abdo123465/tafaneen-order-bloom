import { Star, ShoppingCart, Heart, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";

const latestProducts = [
  {
    id: 101,
    name: "مجموعة أقلام تلوين احترافية 48 لون",
    author: "فابر كاستيل",
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviews: 45,
    image: "🎨",
    category: "أدوات الرسم",
    isNew: true,
    discount: 18
  },
  {
    id: 102,
    name: "دفتر ملاحظات رقمي ذكي",
    author: "روكيت بوك",
    price: 250,
    originalPrice: 300,
    rating: 4.8,
    reviews: 67,
    image: "📱",
    category: \"دفاتر ومذكرات\",
    isNew: true,
    discount: 17
  },
  {
    id: 103,
    name: "حقيبة مكتبية أنيقة متعددة الجيوب",
    author: "ديلّي",
    price: 145,
    originalPrice: 180,
    rating: 4.7,
    reviews: 89,
    image: "🎒",
    category: "حقائب مكتبية",
    isNew: true,
    discount: 19
  },
  {
    id: 104,
    name: "مصباح مكتبي LED قابل للشحن",
    author: "شاومي",
    price: 95,
    originalPrice: 120,
    rating: 4.6,
    reviews: 123,
    image: "💡",
    category: "إكسسوارات مكتبية",
    isNew: true,
    discount: 21
  },
  {
    id: 105,
    name: "منظم أسطح مكتب دوار 360 درجة",
    author: "أيكيا",
    price: 165,
    originalPrice: 200,
    rating: 4.8,
    reviews: 56,
    image: "🔄",
    category: "منظمات مكتبية",
    isNew: true,
    discount: 18
  },
  {
    id: 106,
    name: "مجموعة ملصقات زخرفية متنوعة",
    author: "ستيشنري كو",
    price: 35,
    originalPrice: 45,
    rating: 4.5,
    reviews: 234,
    image: "✨",
    category: "ملصقات وزخارف",
    isNew: true,
    discount: 22
  }
];

export function LatestProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `${product.name} تم إضافته للسلة`,
    });
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            جديد وصولنا
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">أحدث المنتجات</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أحدث الإضافات إلى مجموعتنا المتنوعة من الأدوات المكتبية والقرطاسية
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts.map((product, index) => (
            <div
              key={product.id}
              className="glass-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image & Badges */}
              <div className="relative mb-4">
                <div className="glass-image aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                  {product.image}
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="badge-new-glass">جديد</Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge className="badge-discount-glass">خصم {product.discount}%</Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8 glass-btn">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 glass-btn">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category */}
                <div className="text-xs text-primary font-medium">
                  {product.category}
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.author}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} تقييم)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {product.price} ج.م
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice} ج.م
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full btn-glass group-hover:shadow-glow"
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
          <Button variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-primary/5 glass-btn">
            عرض كل المنتجات الجديدة
          </Button>
        </div>
      </div>
    </section>
  );
}
