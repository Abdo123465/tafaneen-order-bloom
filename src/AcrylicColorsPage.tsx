// src/pages/AcrylicColorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const acrylicColors = [
  { 
    id: 'acrylic-1', 
    name: 'علبة ألوان أكريليك 12 لون - فابر كاستل', 
    price: 120, 
    image: '/assets/acrylic-1.jpg', 
    description: 'ألوان أكريليك عالية الجودة من فابر كاستل بـ 12 لون أساسي للرسم على جميع الأسطح',
    brand: 'فابر كاستل',
    colors: 12
  },
  { 
    id: 'acrylic-2', 
    name: 'علبة ألوان أكريليك 24 لون - ديلي', 
    price: 180, 
    image: '/assets/acrylic-2.jpg', 
    description: 'مجموعة متكاملة من ألوان الأكريليك من ديلي بـ 24 لون احترافي',
    brand: 'ديلي',
    colors: 24
  },
  { 
    id: 'acrylic-3', 
    name: 'علبة ألوان أكريليك 36 لون - بريمو', 
    price: 250, 
    image: '/assets/acrylic-3.jpg', 
    description: 'ألوان أكريليك احترافية من بريمو بـ 36 لون متنوع للفنانين المحترفين',
    brand: 'بريمو',
    colors: 36
  },
  { 
    id: 'acrylic-4', 
    name: 'علبة ألوان أكريليك 6 لون - ستار كولور', 
    price: 65, 
    image: '/assets/acrylic-4.jpg', 
    description: 'مجموعة بداية مثالية من ألوان الأكريليك من ستار كولور بـ 6 ألوان أساسية',
    brand: 'ستار كولور',
    colors: 6
  },
  { 
    id: 'acrylic-5', 
    name: 'علبة ألوان أكريليك 18 لون - ألتيز', 
    price: 150, 
    image: '/assets/acrylic-5.jpg', 
    description: 'ألوان أكريليك متوازنة من ألتيز بـ 18 لون مع تغطية ممتازة',
    brand: 'ألتيز',
    colors: 18
  },
  { 
    id: 'acrylic-6', 
    name: 'علبة ألوان أكريليك 12 لون - دومز', 
    price: 95, 
    image: '/assets/acrylic-6.jpg', 
    description: 'ألوان أكريليك جافة سريع من دومز بـ 12 لون زاهي ومشرق',
    brand: 'دومز',
    colors: 12
  },
];

const AcrylicColorsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ألوان الأكريليك | تفانين";
    const desc = "تسوق ألوان الأكريليك بأفضل الماركات - فابر كاستل، ديلي، بريمو، ستار كولور. ألوان أكريليك عالية الجودة للرسم على جميع الأسطح من تفانين.";
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
          <span className="text-foreground">ألوان الأكريليك</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان الأكريليك</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ألوان أكريليك عالية الجودة للرسم على جميع الأسطح من أفضل الماركات العالمية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">🖌️</div>
            <h3 className="font-bold mb-2 text-blue-700">جفاف سريع</h3>
            <p className="text-sm text-blue-600">تجف بسرعة لتمنع تلطيخ اللوحة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold mb-2 text-green-700">تغطية ممتازة</h3>
            <p className="text-sm text-green-600">تغطية قوية وثبات الألوان</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="font-bold mb-2 text-amber-700">مناسبة لجميع الأسطح</h3>
            <p className="text-sm text-amber-600">قابلة للاستخدام على القماش والخشب وغيرها</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Palette className="inline-block mr-3 mb-1" />
          جميع ألوان الأكريليك
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {acrylicColors.map((acrylic) => (
            <Card key={acrylic.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={acrylic.image} 
                    alt={acrylic.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    🎨
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {acrylic.brand}
                  </div>
                  
                  {/* Colors Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {acrylic.colors} لون
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{acrylic.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{acrylic.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{acrylic.brand}</span></span>
                    <span className="text-muted-foreground">عدد الألوان: <span className="font-bold text-primary">{acrylic.colors}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{acrylic.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: acrylic.id, 
                        name: acrylic.name, 
                        price: acrylic.price, 
                        image: acrylic.image 
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

export default AcrylicColorsPage;
