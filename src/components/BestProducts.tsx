import { Star, ShoppingCart, Heart, Eye, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";

const bestProducts = [
  {
    id: 201,
    name: "مجموعة أقلام احترافية متكاملة",
    author: "ستيدلر",
    price: 95,
    originalPrice: 130,
    rating: 4.9,
    reviews: 342,
    image: "🏆",
    category: "أقلام",
    isNew: false,
    discount: 27,
    sales: 1250
  },
  {
    id: 202,
    name: "دفتر ملاحظات فاخر جلد طبيعي",
    author: "مولسكين",
    price: 145,
    originalPrice: 180,
    rating: 4.8,
    reviews: 289,
    image: "📓",
    category: "دفاتر",
    isNew: false,
    discount: 19,
    sales: 980
  },
  {
    id: 203,
    name: "آلة حاسبة علمية متطورة",
    author: "كاسيو",
    price: 185,
    originalPrice: 230,
    rating: 4.9,
    reviews: 456,
    image: "🔢",
    category: "آلات حاسبة",
    isNew: false,
    discount: 20,
    sales: 875
  },
  {
    id: 204,
    name: "مجموعة أدوات رسم كاملة 72 قطعة",
    author: "فابر كاستيل",
    price: 220,
    originalPrice: 280,
    rating: 4.8,
    reviews: 234,
    image: "🎨",
    category: "أدوات رسم",
    isNew: false,
    discount: 21,
    sales: 765
  },
  {
    id: 205,
    name: "حقيبة مكتبية فاخرة متعددة الاستخدامات",
    author: "ديلّي",
    price: 195,
    originalPrice: 250,
    rating: 4.7,
    reviews: 198,
    image: "🎒",
    category: "حقائب",
    isNew: false,
    discount: 22,
    sales: 654
  },
  {
    id: 206,
    name: "منظم مكتبي ذكي متعدد الوظائف",
    author: "أيكيا",
    price: 125,
    originalPrice: 160,
    rating: 4.8,
    reviews: 312,
    image: "🗂️",
    category: "منظمات",
    isNew: false,
    discount: 22,
    sales: 543
  }
];

export function BestProducts() {
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
            <Trophy className="h-4 w-4" />
            الأكثر مبيعاً
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">أفضل المنتجات</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف منتجاتنا الأفضل والأكثر طلباً بناءً على آراء عملائنا
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestProducts.map((product, index) => (
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
                  <Badge className="badge-discount-glass bg-yellow-500/80 text-white border-white/30">
                    <Trophy className="h-3 w-3 ml-1" />
                    #{index + 1}
                  </Badge>
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

                {/* Rating & Sales */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <span className="text-xs text-primary font-medium">
                    {product.sales} بيع
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
            عرض كل المنتجات الأفضل
          </Button>
        </div>
      </div>
    </section>
  );
}
