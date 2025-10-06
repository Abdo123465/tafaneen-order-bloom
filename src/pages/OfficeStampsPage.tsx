// src/pages/StampInkPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const stampInkProducts = [
  { 
    id: 'ink-1', 
    name: 'حبر ختامه FLOWER', 
    price: 30, 
    image: '/assets/stamp-ink-1.jpg', 
    fallbackEmoji: '🖋️',
    description: 'حبر ختام ازرق مثالي للاستخدام اليومي في المكاتب والشركات'
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

const StampInkPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "حبر الختامة | تفانين";
    const desc = "تسوق أفضل أنواع حبر الختامة عالية الجودة للاستخدام المكتبي والرسمي من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
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
          <Link to="/office-supplies/stamps" className="hover:text-primary">ختامة و حبر ختامة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">حبر الختامة</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖋️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            حبر الختامة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            مجموعة متكاملة من أحبار الختامة عالية الجودة للاستخدام المكتبي والرسمي
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">💧</div>
            <h3 className="font-semibold mb-1">جفاف سريع</h3>
            <p className="text-sm text-muted-foreground">يجف بسرعة لمنع التلطيخ</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌈</div>
            <h3 className="font-semibold mb-1">ألوان ثابتة</h3>
            <p className="text-sm text-muted-foreground">ألوان ثابتة لا تتأثر بالعوامل الجوية</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-semibold mb-1">متعدد الاستخدامات</h3>
            <p className="text-sm text-muted-foreground">يناسب جميع أنواع الأختام المكتبية</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stampInkProducts.map((product) => (
            <div key={product.id} className="card-product relative group">
              {/* Product Image */}
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
        
        {/* Brand Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن أحبار الختامة</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            أحبار الختامة التي نقدمها مصنوعة من مواد عالية الجودة تضمن وضوح البصمة وثباتها لفترة طويلة.
            تتوفر لدينا مجموعة متنوعة من الألوان والأنواع لتناسب مختلف الاستخدامات، سواء للأعمال الرسمية أو الاستخدام اليومي.
            جميع منتجاتنا مقاومة للتلاشي ومصممة لتعمل بكفاءة مع جميع أنواع الأختام المكتبية.
          </p>
        </div>
        
        {/* Back to stamps */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies/stamps">العودة إلى ختامة و حبر ختامة</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StampInkPage;
