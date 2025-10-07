// src/pages/InkPadsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const inkPadProducts = [
  { 
    id: 'ink-1', 
    name: 'حبر ختام ازرق منflower عالي الجودة', 
    price: 30, 
    image: '/assets/stamp-ink-1.jpg', 
    fallbackEmoji: '🖋️',
    description: 'حبر ختام أسود مثالي للاستخدام اليومي في المكاتب والشركات'
  },
];

// مكون خاص لعرض الصور مع fallback
const ProductImage = ({ src, alt, fallbackEmoji, className }: { src: string; alt: string; fallbackEmoji: string; className?: string }) => {
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

const InkPadsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "حبر الأختام | تفانين";
    const desc = "تسوق أفضل أنواع حبر الأختام بألوان متنوعة عالية الجودة - حبر سريع الجفاف ودائم للاستخدام المكتبي والرسمي.";
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
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies/stamps" className="hover:text-primary">الأختام والطوابع</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">حبر الأختام</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🎨</div>
            <Palette className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            حبر الأختام
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            حبر بألوان متنوعة (أسود، أزرق، أحمر، أخضر) - سريع الجفاف - دائم - عبوات إعادة التعبئة
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة عالية وثبات الألوان</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🌈</div>
            <h3 className="font-semibold mb-1 text-sm">ألوان متعددة</h3>
            <p className="text-xs text-muted-foreground">أسود، أزرق، أحمر، أخضر</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1 text-sm">سريع الجفاف</h3>
            <p className="text-xs text-muted-foreground">يجف بسرعة لمنع التلطيخ</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold mb-1 text-sm">حبر دائم</h3>
            <p className="text-xs text-muted-foreground">ثابت ومقاوم للتلاشي</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">♻️</div>
            <h3 className="font-semibold mb-1 text-sm">إعادة التعبئة</h3>
            <p className="text-xs text-muted-foreground">عبوات قابلة لإعادة الملء</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inkPadProducts.map((product) => (
            <div key={product.id} className="card-product relative group">
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={product.image}
                alt={product.name}
                fallbackEmoji={product.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{product.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: product.id, 
                    name: product.name, 
                    price: product.price, 
                    image: product.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن حبر الأختام</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            حبر الأختام الذي نقدمه مصنوع من مواد عالية الجودة تضمن وضوح البصمة وثباتها لفترة طويلة.
            تتوفر لدينا مجموعة متنوعة من الألوان (أسود، أزرق، أحمر، أخضر) لتناسب مختلف الاستخدامات المكتبية.
            جميع منتجاتنا سريعة الجفاف، مقاومة للتلاشي، ومصممة لتعمل بكفاءة مع جميع أنواع الأختام المكتبية.
            نوفر أيضاً عبوات إعادة التعبئة لتوفير التكاليف والحفاظ على البيئة.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>ألوان ثابتة</span>
            </div>
          </div>
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies/stamps">العودة إلى الأختام والطوابع</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InkPadsPage;
