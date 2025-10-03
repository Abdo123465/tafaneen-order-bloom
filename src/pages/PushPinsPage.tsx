// src/pages/PushPinsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const pushPins = [
  { 
    id: 'PUSH-001', 
    name: 'دبابيس كبس ملونة (50 حبة)', 
    price: 13, 
    image: '/assets/push-pins-color.jpg', 
    fallbackEmoji: '📍', 
    description: 'دبابيس كبس ملونة لعدد كبير من الاستخدامات', 
    brand: 'Deli',
    stock: 40,
    rating: 4.3,
    colors: ['أحمر', 'أزرق', 'أخضر', 'أصفر', 'أسود'],
    features: ['رأس دائري ملون', 'إبرة قوية', 'مناسبة للوحات الإعلانية']
  },
  { 
    id: 'PUSH-002', 
    name: 'دبابيس كبس معدني (100 حبة)', 
    price: 27, 
    image: '/assets/push-pins-metal.jpg', 
    fallbackEmoji: '📌', 
    description: 'دبابيس كبس معدنية، متانة أكبر', 
    brand: 'Yalong',
    stock: 25,
    rating: 4.7,
    colors: ['فضي', 'ذهبي'],
    features: ['مظهر احترافي', 'مقاومة للصدأ', 'مناسبة للمكاتب والمعارض']
  },
  {
    id: 'PUSH-003', 
    name: 'دبابيس كبس بلاستيك (30 حبة)', 
    price: 8, 
    image: '/assets/push-pins-plastic.jpg', 
    fallbackEmoji: '🔴', 
    description: 'دبابيس كبس بلاستيكية اقتصادية', 
    brand: 'Deli',
    stock: 60,
    rating: 4.0,
    colors: ['أحمر', 'أزرق', 'أخضر'],
    features: ['رأس بلاستيكي كبير', 'سهلة الإمساك', 'مناسبة للاستخدام المدرسي']
  },
];

const ProductImage = ({ src, alt, fallbackEmoji, className }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-6xl">{fallbackEmoji}</span>
        </div>
      )}
    </div>
  );
};

const PushPinsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "دبابيس كبس | تفانين";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'دبابيس كبس عالية الجودة بتصاميم مختلفة للاستخدام المكتبي والتعليمي');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات مكتبية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">دبابيس كبس</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">📍</div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">دبابيس كبس</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            دبابيس كبس بتصاميم متعددة تناسب جميع احتياجاتك المكتبية والتعليمية
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.3 تقييم</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">جودة مضمونة</span>
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button variant="outline" size="sm">الكل</Button>
          <Button variant="outline" size="sm">Deli</Button>
          <Button variant="outline" size="sm">Yalong</Button>
          <Button variant="outline" size="sm">ملونة</Button>
          <Button variant="outline" size="sm">معدنية</Button>
          <Button variant="outline" size="sm">السعر: من الأقل للأعلى</Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pushPins.map((pin) => (
            <div key={pin.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">{pin.brand}</span>
              </div>
              {pin.stock < 30 && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">متبقي {pin.stock}</span>
                </div>
              )}
              <ProductImage src={pin.image} alt={pin.name} fallbackEmoji={pin.fallbackEmoji} className="mb-4" />
              <h3 className="font-semibold mb-2 line-clamp-2">{pin.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pin.description}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(pin.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-xs text-muted-foreground">({pin.rating})</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {pin.colors.map((color, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{color}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{pin.price} ج.م</span>
                <Button onClick={() => addItem(pin)} size="sm">إضافة للسلة</Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Back Button */}
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة لقسم المستلزمات المكتبية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PushPinsPage;
