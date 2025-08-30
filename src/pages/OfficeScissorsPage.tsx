// src/pages/OfficeScissorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Star, Award, Briefcase, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OfficeScissorsPage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "مقاصات مكتبية | تفانين";
    const desc = "اشترِ مقاصات مكتبية احترافية بأفضل الأسعار. مقاصات عالية الجودة للاستخدام المكتبي والتجاري من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: "مقاصات مكتبية"
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `تم إضافة ${product.name} إلى سلة التسوق`,
      duration: 2000,
    });
  };

  const products = [
    {
      id: "office-scissors-1",
      name: "مقص مكتبي احترافي -  مادن",
      price: 30.00,
      brand: "مادن",
      description: "مقص مكتبي احترافي من الستانلس ستيل عالي الجودة مع مقبض مريح",
      features: ["ستانلس ستيل", "نصل حاد", "مقبض مريح", "تصميم احترافي"],
      image: "/assets/office-scissors-1.jpg",
      inStock: true,
      rating: 4.8,
      reviews: 245
    },
    {
      id: "office-scissors-2", 
      name: "كارت 2 مقص",
      price: 75,
      brand: "أوفيس ماستر",
      description: "مقص مكتبي كبير بطول 8 بوصات مثالي لقص الأوراق الكبيرة والمواد المختلفة",
      features: ["8 بوصات", "قبضة مطاطية", "نصل مقوى", "متعدد الاستخدامات"],
      image: "/assets/office-scissors-large.jpg",
      inStock: true,
      rating: 4.6,
      reviews: 178
    },
  
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/scissors" className="hover:text-primary">المقاصات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مقاصات مكتبية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏢</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مقاصات مكتبية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مقاصات احترافية للاستخدام المكتبي والتجاري بأعلى معايير الجودة
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-4 bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
            <Award className="h-8 w-8 mx-auto mb-3 text-slate-600" />
            <h3 className="font-bold text-sm text-slate-700">جودة احترافية</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <Briefcase className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold text-sm text-blue-700">للاستخدام المكتبي</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <Scissors className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <h3 className="font-bold text-sm text-green-700">تصميم مريح</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <Star className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font-bold text-sm text-purple-700">عمر افتراضي طويل</h3>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 p-4 flex items-center justify-center h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  {product.isSet && (
                    <Badge className="absolute top-3 right-3 bg-green-600">مجموعة</Badge>
                  )}
                  {product.isPremium && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-gold-400 to-gold-600">بريميوم</Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                  </div>
                  
                  <h3 className="font-bold mb-2 line-clamp-2 min-h-[3rem] text-sm">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-primary">{product.price.toFixed(2)} ج.م</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back to scissors */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools/scissors">العودة إلى المقاصات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeScissorsPage;
