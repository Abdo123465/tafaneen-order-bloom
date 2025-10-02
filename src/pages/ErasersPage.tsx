// src/pages/ErasersPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const erasers = [
  { 
    id: 'ERASER-001', 
    name: 'استيكة بيضاء كبيرة', 
    price: 5, 
    image: '/assets/eraser-white-large.jpg', 
    fallbackEmoji: '🧹',
    description: 'استيكة مطاطية بيضاء عالية الجودة، تمسح بنظافة دون ترك أثر',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'ERASER-002', 
    name: 'استيكة ملونة صغيرة', 
    price: 3, 
    image: '/assets/eraser-colored-small.jpg',
    fallbackEmoji: '🌈',
    description: 'استيكة صغيرة بألوان مبهجة، مثالية للأطفال',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'ERASER-003', 
    name: 'استيكة قلم رصاص مع فرشاة', 
    price: 4, 
    image: '/assets/eraser-pencil-brush.jpg',
    fallbackEmoji: '🖌️',
    description: 'استيكة بتصميم عملي مع فرشاة لإزالة البقايا',
    rating: 5,
    isNew: true
  },
  { 
    id: 'ERASER-004', 
    name: 'استيكة ناعمة للرسم', 
    price: 8, 
    image: '/assets/eraser-soft-art.jpg',
    fallbackEmoji: '🎨',
    description: 'استيكة ناعمة جداً مخصصة للرسم والفنون، لا تتلف الورق',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'ERASER-005', 
    name: 'استيكة بلاستيكية شفافة', 
    price: 6, 
    image: '/assets/eraser-plastic-clear.jpg',
    fallbackEmoji: '💎',
    description: 'استيكة بلاستيكية شفافة بتصميم أنيق وعصري',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'ERASER-006', 
    name: 'مجموعة أساتيك ملونة (6 قطع)', 
    price: 15, 
    image: '/assets/eraser-set-6pcs.jpg',
    fallbackEmoji: '🎁',
    description: 'مجموعة من 6 أساتيك ملونة بأشكال مختلفة',
    rating: 5,
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

const ErasersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "الأساتيك | تفانين";
    const desc = "تسوق أساتيك عالية الجودة - مجموعة متنوعة من الأساتيك للمدرسة والرسم من تفانين.";
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
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/erasers-sharpeners" className="hover:text-primary">أساتيك وبرايات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">الأساتيك</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🧹</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            الأساتيك
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            أساتيك عالية الجودة تمسح بنظافة دون ترك أثر - للمدرسة والرسم
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة ممتازة</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold mb-1">مسح نظيف</h3>
            <p className="text-sm text-muted-foreground">تمسح بنظافة دون ترك أي أثر</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">للفنانين</h3>
            <p className="text-sm text-muted-foreground">مناسبة للرسم والفنون</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">للطلاب</h3>
            <p className="text-sm text-muted-foreground">مثالية للاستخدام المدرسي</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {erasers.map((eraser) => (
            <div key={eraser.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {eraser.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {eraser.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {eraser.isNew && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
              </div>
              
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={eraser.image}
                alt={eraser.name}
                fallbackEmoji={eraser.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{eraser.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(eraser.rating)}
                <span className="text-sm text-muted-foreground mr-1">({eraser.rating}.0)</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{eraser.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{eraser.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: eraser.id, 
                    name: eraser.name, 
                    price: eraser.price, 
                    image: eraser.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن الأساتيك</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة متنوعة من الأساتيك عالية الجودة التي تناسب جميع الاحتياجات.
            سواء كنت طالباً أو فناناً، ستجد الاستيكة المثالية التي تمسح بنظافة دون ترك أثر أو إتلاف الورق.
            جميع أساتيكنا مصنوعة من مواد آمنة وصديقة للبيئة.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>آمنة للاستخدام</span>
            </div>
          </div>
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/erasers-sharpeners">العودة إلى أساتيك وبرايات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErasersPage;
