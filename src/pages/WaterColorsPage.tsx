// src/pages/WaterColorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const waterColors = [
  { 
    id: 'watercolor-1', 
    name: 'علبة الوان مياه حجر 16 لون kaidisi', 
    price: 35, 
    image: '/assets/watercolor-1.jpg', 
    description: 'ألوان مائية عالية الجودة من kaidisi بـ 16 لون شفاف وزاهي للرسم الفني',
    brand: 'kaidisi',
    colors: 16
  },
  { 
    id: 'watercolor-2', 
    name: 'بالتة الوان مائية بيضاوي ص ', 
    price: 30, 
    image: '/assets/watercolor-2.jpg', 
    description: 'بالتة الوان مائية بيضاوي ص',
    brand: '',
    colors: 12
  },
  { 
    id: 'watercolor-3', 
    name: ' علبة الوان حجر 12 لون وسط بارزه', 
    price: 22, 
    image: '/assets/watercolor-3.jpg', 
    description: 'ألوان مائية  بـ 12 لون مناسبة للمبتدئين ',
    brand: '',
    colors: 12
  },
 
];

const WaterColorsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ألوان مية (مائية) | تفانين";
    const desc = "تسوق ألوان مية (مائية) بأفضل الماركات - فابر كاستل، ديلي، بريمو، وين ساو. ألوان مائية عالية الجودة للرسم الفني من تفانين.";
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
          <span className="text-foreground">ألوان مية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💧</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان مية (ألوان مائية)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ألوان مائية عالية الجودة للرسم الفني والإبداع من أفضل الماركات العالمية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">💧</div>
            <h3 className="font-bold mb-2 text-blue-700">شفافية عالية</h3>
            <p className="text-sm text-blue-600">ألوان شفافة تمتزج بسهولة مع الماء</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="font-bold mb-2 text-green-700">قابلية المزج</h3>
            <p className="text-sm text-green-600">سهولة في المزج لإنتاج درجات لونية متنوعة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-amber-700">للرسم الفني</h3>
            <p className="text-sm text-amber-600">مثالية للرسم على الورق والكانفاس</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Droplets className="inline-block mr-3 mb-1" />
          جميع ألوان المية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waterColors.map((watercolor) => (
            <Card key={watercolor.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={watercolor.image} 
                    alt={watercolor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    💧
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {watercolor.brand}
                  </div>
                  
                  {/* Colors Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {watercolor.colors} لون
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{watercolor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{watercolor.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{watercolor.brand}</span></span>
                    <span className="text-muted-foreground">عدد الألوان: <span className="font-bold text-primary">{watercolor.colors}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{watercolor.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: watercolor.id, 
                        name: watercolor.name, 
                        price: watercolor.price, 
                        image: watercolor.image 
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

export default WaterColorsPage;
