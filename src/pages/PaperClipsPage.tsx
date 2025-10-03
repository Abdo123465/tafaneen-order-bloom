// src/pages/PaperClipsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const paperClips = [
  { 
    id: 'CLIP-001', 
    name: 'مشبك ورق قياسي (100 حبة)', 
    price: 10, 
    image: '/assets/paper-clip-standard.jpg', 
    fallbackEmoji: '🖇️', 
    description: 'مشابك ورق متينة للحفاظ على ترتيب الملفات', 
    brand: 'Deli',
    stock: 80,
    rating: 4.4,
    size: 'قياسي',
    features: ['مصنوع من الفولاذ المقاوم للصدأ', 'حجم مثالي للمستندات اليومية', 'غير قابل للانزلاق']
  },
  { 
    id: 'CLIP-002', 
    name: 'مشبك ورق ملون (50 حبة)', 
    price: 11, 
    image: '/assets/paper-clip-colored.jpg', 
    fallbackEmoji: '🔗', 
    description: 'مشابك ورق ملونة تضيف لمسة ممتعة', 
    brand: 'COI',
    stock: 45,
    rating: 4.2,
    size: 'قياسي',
    colors: ['أحمر', 'أزرق', 'أخضر', 'أصفر', 'بنفسجي'],
    features: ['ألوان زاهية', 'مثالي للتنظيم حسب الفئات', 'جودة عالية']
  },
  {
    id: 'CLIP-003', 
    name: 'مشبك ورق كبير (30 حبة)', 
    price: 12, 
    image: '/assets/paper-clip-large.jpg', 
    fallbackEmoji: '📎', 
    description: 'مشابك ورق كبيرة للمستندات السميكة', 
    brand: 'Deli',
    stock: 35,
    rating: 4.6,
    size: 'كبير',
    features: ['سعة أكبر للمستندات', 'مصنوع من مادة متينة', 'مثالي للملفات السميكة']
  },
  {
    id: 'CLIP-004', 
    name: 'مشبك ورق على شكل حرف J (40 حبة)', 
    price: 15, 
    image: '/assets/paper-clip-j-shape.jpg', 
    fallbackEmoji: '📌', 
    description: 'مشابك ورق بتصميم حرف J للمستندات المهمة', 
    brand: 'Kangaro',
    stock: 25,
    rating: 4.5,
    size: 'متوسط',
    features: ['تصميم مميز', 'يحافظ على المستندات بشكل آمن', 'سهل الاستخدام']
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

const PaperClipsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "مشابك الورق | تفانين";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'مشابك ورق بأحجام وأشكال مختلفة لتنظيم مستنداتك بشكل احترافي');
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
          <span className="text-foreground">مشابك الورق</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🖇️</div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">مشابك الورق</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            مشابك ورق بأحجام وأشكال مختلفة لتنظيم مستنداتك بشكل احترافي
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.4 تقييم</span>
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
          <Button variant="outline" size="sm">قياسي</Button>
          <Button variant="outline" size="sm">كبير</Button>
          <Button variant="outline" size="sm">ملون</Button>
          <Button variant="outline" size="sm">السعر: من الأقل للأعلى</Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paperClips.map((clip) => (
            <div key={clip.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">{clip.brand}</span>
              </div>
              {clip.stock < 30 && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">متبقي {clip.stock}</span>
                </div>
              )}
              <ProductImage src={clip.image} alt={clip.name} fallbackEmoji={clip.fallbackEmoji} className="mb-4" />
              <h3 className="font-semibold mb-2 line-clamp-2">{clip.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{clip.description}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(clip.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-xs text-muted-foreground">({clip.rating})</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">الحجم: {clip.size}</span>
                {clip.colors && (
                  <div className="flex gap-1">
                    {clip.colors.slice(0, 3).map((color, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{color}</span>
                    ))}
                    {clip.colors.length > 3 && <span className="text-xs bg-gray-100 px-2 py-1 rounded">+{clip.colors.length - 3}</span>}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{clip.price} ج.م</span>
                <Button onClick={() => addItem(clip)} size="sm">إضافة للسلة</Button>
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

export default PaperClipsPage;
