import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const featuredProducts = [
  {
    id: 1,
    name: "مجموعة أقلام ملونة 24 لون",
    author: "ستيدلر",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 156,
    image: "🖍️",
    category: "أدوات الرسم",
    isNew: true,
    discount: 25
  },
  {
    id: 2,
    name: "دفتر ملاحظات جلد فاخر A5",
    author: "مولسكين",
    price: 85,
    originalPrice: 110,
    rating: 4.9,
    reviews: 89,
    image: "📓",
    category: "دفاتر ومذكرات",
    isNew: true,
    discount: 23
  },
  {
    id: 3,
    name: "آلة حاسبة علمية متقدمة",
    author: "كاسيو",
    price: 120,
    originalPrice: 150,
    rating: 4.7,
    reviews: 203,
    image: "🔢",
    category: "آلات حاسبة",
    isNew: false,
    discount: 20
  },
  {
    id: 4,
    name: "مجموعة مساطر هندسية",
    author: "روتبرينغ",
    price: 35,
    originalPrice: 50,
    rating: 4.6,
    reviews: 78,
    image: "📐",
    category: "أدوات هندسية",
    isNew: false,
    discount: 30
  },
  {
    id: 5,
    name: "طقم أقلام حبر جاف 10 قطع",
    author: "بيك",
    price: 25,
    originalPrice: 35,
    rating: 4.5,
    reviews: 134,
    image: "🖊️",
    category: "أقلام",
    isNew: false,
    discount: 29
  },
  {
    id: 6,
    name: "منظم مكتبي خشبي أنيق",
    author: "أيكيا",
    price: 95,
    originalPrice: 130,
    rating: 4.8,
    reviews: 67,
    image: "🗂️",
    category: "منظمات مكتبية",
    isNew: true,
    discount: 27
  }
];

export function FeaturedProducts() {
  console.log('FeaturedProducts component loading...', { useCart });
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">المنتجات المميزة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أفضل الأدوات المكتبية والقرطاسية المختارة خصيصاً لك
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-product group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image & Badges */}
              <div className="relative mb-4">
                <div className="bg-muted/50 rounded-xl h-48 flex items-center justify-center text-6xl mb-4">
                  {product.image}
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="badge-new">جديد</Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge className="badge-discount">خصم {product.discount}%</Badge>
                  )}
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