// src/pages/OilColorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const oilColors = [
  { 
    id: 'oil-1', 
    name: 'علبة ألوان زيت 12 لون - آرتيست برو', 
    price: 150, 
    image: '/assets/oil-1.jpg', 
    description: 'ألوان زيتية عالية الجودة من آرتيست برو بـ 12 لون أساسي للرسم الاحترافي',
    brand: 'Artist Pro',
    colors: 12
  },
  { 
    id: 'oil-2', 
    name: 'علبة ألوان زيت 18 لون - ماستر آرت', 
    price: 280, 
    image: '/assets/oil-2.jpg', 
    description: 'مجموعة متكاملة من ألوان الزيت من ماستر آرت بـ 18 لون احترافي',
    brand: 'Master Art',
    colors: 18
  },
  { 
    id: 'oil-3', 
    name: 'علبة ألوان زيت 24 لون - فان جوخ', 
    price: 450, 
    image: '/assets/oil-3.jpg', 
    description: 'ألوان زيتية احترافية من فان جوخ بـ 24 لون متنوع للفنانين المحترفين',
    brand: 'Van Gogh',
    colors: 24
  },
  { 
    id: 'oil-4', 
    name: 'أنبوب ألوان زيت 37 مل - ألوان منفردة', 
    price: 35, 
    image: '/assets/oil-4.jpg', 
    description: 'أنابيب ألوان زيت منفردة بحجم 37 مل - ألوان متنوعة',
    brand: 'Mixed Brands',
    colors: 1
  },
  { 
    id: 'oil-5', 
    name: 'مجموعة ألوان زيت مع فرش - ستارتر كيت', 
    price: 220, 
    image: '/assets/oil-5.jpg', 
    description: 'مجموعة كاملة للمبتدئين تحتوي على ألوان زيت وفرش رسم ولوحة ألوان',
    brand: 'Starter Kit',
    colors: 12
  },
  { 
    id: 'oil-6', 
    name: 'علبة ألوان زيت 36 لون - بروفيشنال', 
    price: 680, 
    image: '/assets/oil-6.jpg', 
    description: 'علبة احترافية كاملة من ألوان الزيت بـ 36 لون للفنانين المحترفين',
    brand: 'Professional',
    colors: 36
  }
];

const OilColorsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ألوان الزيت | تفانين";
    const desc = "تسوق ألوان الزيت بأفضل الماركات - فان جوخ، آرتيست برو، ماستر آرت. ألوان زيتية عالية الجودة للرسم الاحترافي من تفانين.";
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
          <span className="text-foreground">ألوان الزيت</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان الزيت</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ألوان زيتية عالية الجودة للرسم الاحترافي من أفضل الماركات العالمية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <div className="text-4xl mb-4">🖌️</div>
            <h3 className="font-bold mb-2 text-orange-700">قوام مثالي</h3>
            <p className="text-sm text-orange-600">قوام ناعم يسهل المزج والطبقات</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold mb-2 text-amber-700">ألوان نابضة</h3>
            <p className="text-sm text-amber-600">ألوان غنية وثابتة لا تتلاشى</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-red-700">جودة احترافية</h3>
            <p className="text-sm text-red-600">مناسبة للفنانين المحترفين والهواة</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Palette className="inline-block mr-3 mb-1" />
          جميع ألوان الزيت
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oilColors.map((oil) => (
            <Card key={oil.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={oil.image} 
                    alt={oil.name}
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
                    {oil.brand}
                  </div>
                  
                  {/* Colors Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {oil.colors > 1 ? `${oil.colors} لون` : 'لون واحد'}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{oil.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{oil.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{oil.brand}</span></span>
                    <span className="text-muted-foreground">
                      {oil.colors > 1 ? `عدد الألوان: ` : 'النوع: '}
                      <span className="font-bold text-primary">
                        {oil.colors > 1 ? oil.colors : 'منفرد'}
                      </span>
                    </span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{oil.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: oil.id, 
                        name: oil.name, 
                        price: oil.price, 
                        image: oil.image 
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

export default OilColorsPage;
