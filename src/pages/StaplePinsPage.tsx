import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Star } from "lucide-react";

export default function StaplePinsPage() {
  const products = [
    {
      id: 1,
      name: "دبابيس دباسة صغيرة 24/6",
      price: "5.00",
      originalPrice: "7.00",
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 42,
      inStock: true
    },
    {
      id: 2,
      name: "دبابيس دباسة متوسطة 26/6",
      price: "8.00",
      originalPrice: "10.00",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 38,
      inStock: true
    },
    {
      id: 3,
      name: "دبابيس دباسة كبيرة 23/8",
      price: "12.00",
      originalPrice: "15.00",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 25,
      inStock: true
    },
    {
      id: 4,
      name: "دبابيس دباسة ثقيلة 23/13",
      price: "18.00",
      originalPrice: "22.00",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 15,
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-primary transition-colors">
              الفئات
            </Link>
            <span>/</span>
            <Link to="/office-supplies" className="hover:text-primary transition-colors">
              مستلزمات المكتب
            </Link>
            <span>/</span>
            <span className="text-foreground">دبابيس دباسة</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            دبابيس دباسة
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            دبابيس للدباسات بأحجام مختلفة
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold">غير متوفر</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price} ج.م</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice} ج.م
                      </span>
                    )}
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "أضف للسلة" : "غير متوفر"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
