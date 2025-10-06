import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface StampProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  fallbackEmoji: string;
  description: string;
}

const stampProducts: StampProduct[] = [
  { 
    id: 'stamp-1', 
    name: 'ختم دائري مكتبي', 
    price: 50, 
    image: '/assets/stamp-1.jpg', 
    fallbackEmoji: '🔖',
    description: 'ختم دائري احترافي للاستخدام المكتبي والرسمي'
  },
  { 
    id: 'stamp-2', 
    name: 'ختم مستطيل كبير', 
    price: 65, 
    image: '/assets/stamp-2.jpg', 
    fallbackEmoji: '📋',
    description: 'ختم مستطيل كبير الحجم للعناوين والبيانات'
  },
  { 
    id: 'stamp-3', 
    name: 'ختم تاريخ ورقم', 
    price: 80, 
    image: '/assets/stamp-3.jpg', 
    fallbackEmoji: '📅',
    description: 'ختم متعدد الأغراض بتاريخ ورقم قابل للتعديل'
  },
  { 
    id: 'stamp-4', 
    name: 'ختم توقيع شخصي', 
    price: 55, 
    image: '/assets/stamp-4.jpg', 
    fallbackEmoji: '✍️',
    description: 'ختم مخصص للتوقيع الشخصي بتصميم أنيق'
  },
  { 
    id: 'stamp-5', 
    name: 'ختم شعار الشركة', 
    price: 90, 
    image: '/assets/stamp-5.jpg', 
    fallbackEmoji: '🏢',
    description: 'ختم مخصص لشعار الشركة بجودة عالية'
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

const OfficeStampsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أختام مكتبية | تفانين";
    const desc = "تسوق أفضل أنواع الأختام المكتبية بأشكال وأحجام متنوعة للاستخدام الرسمي من تفانين.";
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
          <span className="text-foreground">أختام مكتبية</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔖</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            أختام مكتبية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            مجموعة متنوعة من الأختام المكتبية بأشكال وأحجام مختلفة للاستخدام الرسمي والتجاري
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">تصميم احترافي</h3>
            <p className="text-sm text-muted-foreground">تصاميم عصرية وأنيقة للاستخدام المهني</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">دقة عالية</h3>
            <p className="text-sm text-muted-foreground">بصمة واضحة ودقيقة في كل استخدام</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-semibold mb-1">جودة متينة</h3>
            <p className="text-sm text-muted-foreground">مصنوعة من مواد عالية الجودة لضمان الاستدامة</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stampProducts.map((product) => (
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
          <h2 className="text-2xl font-bold mb-4">عن الأختام المكتبية</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر مجموعة شاملة من الأختام المكتبية عالية الجودة بتصاميم وأحجام مختلفة.
            جميع أختامنا مصنوعة من مواد متينة تضمن بصمة واضحة ودقيقة مع كل استخدام.
            سواء كنت تحتاج ختم للتوقيع الشخصي، ختم تاريخ، أو ختم لشعار الشركة، لدينا الحل المثالي لاحتياجاتك.
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

export default OfficeStampsPage;
