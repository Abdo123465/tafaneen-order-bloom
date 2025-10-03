// src/pages/StaplePinsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const staplePins = [
  { 
    id: 'STAPLE-001', 
    name: 'دبابيس دباسة 24/6', 
    price: 9, 
    image: '/assets/staple-24-6.jpg', 
    fallbackEmoji: '📎', 
    description: 'دبابيس دباسة قياسية 24/6 صلبة التحمل', 
    brand: 'Deli',
    stock: 50,
    rating: 4.5,
    features: ['مناسبة للاستخدام اليومي', 'مقاومة للصدأ', 'مناسبة لجميع الدباسات']
  },
  { 
    id: 'STAPLE-002', 
    name: 'دبابيس دباسة 23/13', 
    price: 20, 
    image: '/assets/staple-23-13.jpg', 
    fallbackEmoji: '🖇️', 
    description: 'دبابيس قوية لأوراق كبيرة', 
    brand: 'COI',
    stock: 30,
    rating: 4.8,
    features: ['قوية ومتينة', 'مناسبة للمستندات السميكة', 'جودة عالية']
  },
  {
    id: 'STAPLE-003', 
    name: 'دبابيس دباسة 10', 
    price: 6, 
    image: '/assets/staple-10.jpg', 
    fallbackEmoji: '📌', 
    description: 'صغيرة - مناسبة للدباسات اليدوية', 
    brand: 'Kangaro',
    stock: 75,
    rating: 4.2,
    features: ['حجم صغير', 'مناسبة للدباسات المصغرة', 'سهلة الاستخدام']
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

const StaplePinsPage = () => {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    document.title = "دبابيس دباسة | تفانين";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'دبابيس دباسة عالية الجودة تناسب جميع الدباسات المكتبية والمدرسية');
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
          <span className="text-foreground">دبابيس دباسة</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">📎</div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">دبابيس دباسة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            دبابيس عالية الجودة تناسب جميع الدباسات المكتبية والمدرسية
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.5 تقييم</span>
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
          <Button variant="outline" size="sm">COI</Button>
          <Button variant="outline" size="sm">Kangaro</Button>
          <Button variant="outline" size="sm">الأكثر مبيعاً</Button>
          <Button variant="outline" size="sm">السعر: من الأقل للأعلى</Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staplePins.map((pin) => (
            <div key={pin.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">{pin.brand}</span>
              </div>
              {pin.stock < 10 && (
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

export default StaplePinsPage;
