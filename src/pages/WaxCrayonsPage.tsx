import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const waxCrayons = [
  { 
    id: 'wax-crayon-1', 
    name: 'علبة الوان شمع  OIL PASTELS 12 لون ك', 
    price: 40, 
    image: '/assets/wax-crayon-1.jpg', 
    description: 'ألوان شمع ماوس بوي يبانية  بـ 12 لون زاهي وجودة عالية للأطفال والفنانين',
    brand: 'OIL PASTELS',
    colors: 12
  },
  { 
    id: 'wax-crayon-2', 
    name: 'علبة الوان شمع MOUSEBOY OIL PASTELS 6لون', 
    price: 23, 
    image: '/assets/wax-crayon-2.jpg', 
    description: 'ألوان شمع ماوس بوي عالية الجودة بـ 6 لون مميز وآمنة للاستخدام',
    brand: 'MOUSEBOY OIL PASTELS',
    colors: 6
  },
  { 
    id: 'wax-crayon-3', 
    name: 'ألوان شمع  - 6 لون', 
    price: 25, 
    image: '/assets/wax-crayon-3.jpg', 
    description: 'ألوان شمع اتار المصرية بـ 12 لون أساسي وجودة ممتازة بسعر اقتصادي مناسب للمدارس',
    brand: 'Kubeixiong ',
    colors: 6
  },
];

const WaxCrayonsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ألوان الشمع - كرايونز | تفانين";
    const desc = "تسوق ألوان الشمع (كرايونز) بأفضل الماركات - كرايولا، فابر كاستل، اتار. ألوان شمع آمنة وعالية الجودة للأطفال والفنانين من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

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
          <span className="text-foreground">ألوان الشمع - كرايونز</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان الشمع - كرايونز</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ألوان شمع عالية الجودة وآمنة للأطفال والفنانين من أفضل الماركات العالمية
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-red-700">آمنة للأطفال</h3>
            <p className="text-sm text-red-600">مصنوعة من مواد آمنة وغير سامة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="font-bold mb-2 text-blue-700">ألوان زاهية</h3>
            <p className="text-sm text-blue-600">ألوان مشرقة وواضحة لإبداع أكثر</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-bold mb-2 text-green-700">مقاومة للكسر</h3>
            <p className="text-sm text-green-600">تركيبة قوية تقاوم الكسر والتفتت</p>
          </Card>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Palette className="inline-block mr-3 mb-1" />
          جميع ألوان الشمع
        </h2>

        {/* Products Grid - الآن بجانب بعض */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waxCrayons.map((crayon) => (
            <Card key={crayon.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={crayon.image} 
                    alt={crayon.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    🖍️
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {crayon.brand}
                  </div>
                  
                  {/* Colors Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {crayon.colors} لون
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{crayon.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{crayon.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{crayon.brand}</span></span>
                    <span className="text-muted-foreground">عدد الألوان: <span className="font-bold text-primary">{crayon.colors}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{crayon.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: crayon.id, 
                        name: crayon.name, 
                        price: crayon.price, 
                        image: crayon.image 
                      })}
                    >
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaxCrayonsPage;
