import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const gouacheColors = [
  { 
    id: 'gouache-1', 
    name: 'علبة ألوان جواش 6 لون - فابر كاستل', 
    price: 80, 
    image: '/assets/gouache-1.jpg', 
    description: 'ألوان جواش عالية الجودة من NIKKI بـ 12 لون زاهي للرسم المائي والأعمال الفنية',
    brand: 'NIKKI',
    colors: 6
  },
  { 
    id: 'gouache-2', 
    name: 'علبة ألوان جواش 12 لون - وينسور ونيوتن', 
    price: 150, 
    image: '/assets/gouache-2.jpg', 
    description: 'ألوان جواش احترافية من NIKKI بـ 12 ألوان أساسية عالية التغطية',
    brand: 'NIKKI',
    colors: 12
  },

];

const GouacheColorsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ألوان الجواش | تفانين";
    const desc = "تسوق ألوان الجواش بأفضل الماركات - فابر كاستل، وينسور ونيوتن، ساكورا. ألوان جواش عالية الجودة للرسم والأعمال الفنية من تفانين.";
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
          <span className="text-foreground">ألوان الجواش</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان الجواش</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ألوان جواش عالية الجودة للرسم المائي والأعمال الفنية من أفضل الماركات العالمية
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <div className="text-4xl mb-4">💧</div>
            <h3 className="font-bold mb-2 text-purple-700">قابلة للمزج بالماء</h3>
            <p className="text-sm text-purple-600">سهلة الاستخدام والتنظيف بالماء</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold mb-2 text-pink-700">تغطية عالية</h3>
            <p className="text-sm text-pink-600">ألوان كثيفة وتغطية ممتازة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <div className="text-4xl mb-4">🖌️</div>
            <h3 className="font-bold mb-2 text-orange-700">للفنانين المحترفين</h3>
            <p className="text-sm text-orange-600">جودة احترافية لأفضل النتائج</p>
          </Card>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Palette className="inline-block mr-3 mb-1" />
          جميع ألوان الجواش
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gouacheColors.map((gouache) => (
            <Card key={gouache.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={gouache.image} 
                    alt={gouache.name}
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
                    {gouache.brand}
                  </div>
                  
                  {/* Colors Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {gouache.colors} لون
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{gouache.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{gouache.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{gouache.brand}</span></span>
                    <span className="text-muted-foreground">عدد الألوان: <span className="font-bold text-primary">{gouache.colors}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{gouache.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: gouache.id, 
                        name: gouache.name, 
                        price: gouache.price, 
                        image: gouache.image 
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

export default GouacheColorsPage;
