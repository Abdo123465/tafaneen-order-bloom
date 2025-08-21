// src/pages/SmartKeepPencilsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const smartKeepPencils = [
  { 
    id: 'kL-6500', 
    name: 'قلم رصاص Smart Keep ', 
    price: 7, 
    image: '/assets/kL-6500.jpg', 
    fallbackEmoji: '✏️',
    description: 'قلم رصاص عالي الجودة من Smart Keep مثالي للاستخدام اليومي',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'SmartKeep-2B', 
    name: 'قلم رصاص Smart Keep 2B', 
    price: 9, 
    image: '/assets/SmartKeep-2B.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ناعم مثالي للرسم والتظليل',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'SmartKeep-Set', 
    name: 'مجموعة أقلام رصاص Smart Keep متدرجة', 
    price: 58, 
    image: '/assets/SmartKeep-Set.jpg',
    fallbackEmoji: '📐',
    description: 'مجموعة شاملة من أقلام الرصاص بدرجات مختلفة (6B-6H)',
    rating: 5,
    isNew: true
  },
  { 
    id: 'SmartKeep-Mechanical', 
    name: 'قلم رصاص ميكانيكي Smart Keep 0.7 مم', 
    price: 19, 
    image: '/assets/SmartKeep-Mechanical.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ميكانيكي بدقة عالية للكتابة الدقيقة',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'SmartKeep-Drawing', 
    name: 'قلم رصاص Smart Keep للرسم 4B', 
    price: 11, 
    image: '/assets/SmartKeep-Drawing.jpg',
    fallbackEmoji: '🎨',
    description: 'قلم رصاص ناعم جداً للرسم الفني المتقدم',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'SmartKeep-Color', 
    name: 'مجموعة أقلام رصاص ملونة Smart Keep', 
    price: 88, 
    image: '/assets/SmartKeep-Color.jpg',
    fallbackEmoji: '🌈',
    description: 'أقلام رصاص ملونة بألوان زاهية وجودة عالية - 24 لون',
    rating: 4,
    isNew: true
  },
];

// مكون خاص لعرض الصور مع fallback
const ProductImage = ({ src, alt, fallbackEmoji, className }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  return (
    <div className={`bg-white rounded-xl aspect-square flex items-center justify-center overflow-hidden border border-gray-100 group-hover:shadow-md transition-shadow ${className}`}>
      {!imageError ? (
        <>
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <ImageIcon className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <img 
            src={src}
            alt={alt}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </>
      ) : (
        // Fallback - عرض الإيموجي إذا فشل تحميل الصورة
        <div className="text-6xl">{fallbackEmoji}</div>
      )}
    </div>
  );
};

const SmartKeepPencilsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام Smart Keep | تفانين";
    const desc = "تسوق أقلام Smart Keep عالية الجودة - مجموعة متنوعة من أقلام الرصاص للكتابة والرسم من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens/pencils" className="hover:text-primary">أقلام الرصاص</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام Smart Keep</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🇹🇷</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            أقلام Smart Keep
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            جودة تركية مميزة بأسعار تنافسية - الخيار المفضل للمدارس والمكاتب
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">صنع في تركيا</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-semibold mb-1">للطلاب</h3>
            <p className="text-sm text-muted-foreground">مثالي للاستخدام المدرسي والجامعي</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold mb-1">للمكاتب</h3>
            <p className="text-sm text-muted-foreground">احترافي للاستخدام اليومي في العمل</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold mb-1">قيمة ممتازة</h3>
            <p className="text-sm text-muted-foreground">جودة عالية بأسعار معقولة</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smartKeepPencils.map((pencil) => (
            <div key={pencil.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {pencil.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {pencil.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {pencil.isNew && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
              </div>
              
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={pencil.image}
                alt={pencil.name}
                fallbackEmoji={pencil.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{pencil.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(pencil.rating)}
                <span className="text-sm text-muted-foreground mr-1">({pencil.rating}.0)</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pencil.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{pencil.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: pencil.id, 
                    name: pencil.name, 
                    price: pencil.price, 
                    image: pencil.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Info */}
        <div className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن Smart Keep</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Smart Keep هي علامة تجارية تركية رائدة في مجال أدوات الكتابة والقرطاسية.
            تشتهر منتجاتها بالجودة العالية والتصميم العملي والأسعار التنافسية.
            تقدم Smart Keep مجموعة واسعة من أقلام الرصاص التي تلبي احتياجات الطلاب والمهنيين في جميع أنحاء العالم.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>صنع في تركيا</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>جودة معتمدة</span>
            </div>
          </div>
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/pencils">العودة إلى أقلام الرصاص</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmartKeepPencilsPage;
