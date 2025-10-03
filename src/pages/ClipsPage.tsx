import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const paperClips = [
  { 
    id: 'CLIP-001', 
    name: 'مشابك ورق معدنية صغيرة', 
    price: 3, 
    image: '/placeholder.svg', 
    fallbackEmoji: '📎',
    description: 'مشابك ورق معدنية صغيرة للاستخدام اليومي',
    brand: 'Deli'
  },
  { 
    id: 'CLIP-002', 
    name: 'مشابك ورق معدنية كبيرة', 
    price: 6, 
    image: '/placeholder.svg',
    fallbackEmoji: '🖇️',
    description: 'مشابك ورق معدنية كبيرة للمستندات الكثيرة',
    brand: 'Deli'
  },
  { 
    id: 'CLIP-003', 
    name: 'مشابك ورق بلاستيكية ملونة', 
    price: 8, 
    image: '/placeholder.svg',
    fallbackEmoji: '🌈',
    description: 'مشابك ورق بلاستيكية بألوان زاهية',
    brand: 'Deli'
  },
  { 
    id: 'CLIP-004', 
    name: 'مشابك ورق مغناطيسية', 
    price: 15, 
    image: '/placeholder.svg',
    fallbackEmoji: '🧲',
    description: 'مشابك ورق مغناطيسية عملية وقوية',
    brand: 'Max'
  },
];

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
        <div className="text-6xl">{fallbackEmoji}</div>
      )}
    </div>
  );
};

export default function ClipsPage() {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "مشابك الأوراق | تفانين";
    const desc = "تسوق مشابك الأوراق المعدنية والبلاستيكية بأحجام مختلفة من تفانين.";
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
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies/paper-clips" className="hover:text-primary">مشابك ودبابيس</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مشابك الأوراق</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            مشابك الأوراق
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            مشابك معدنية وبلاستيكية بأحجام مختلفة - اختر ما يناسب احتياجاتك
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة وكفاءة عالية</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-semibold mb-1">متينة وقوية</h3>
            <p className="text-sm text-muted-foreground">تمسك الأوراق بقوة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">ألوان متعددة</h3>
            <p className="text-sm text-muted-foreground">ألوان زاهية للتنظيم</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">سهلة الاستخدام</h3>
            <p className="text-sm text-muted-foreground">تصميم عملي ومريح</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paperClips.map((clip) => (
            <div key={clip.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {clip.brand}
                </span>
              </div>
              
              <ProductImage 
                src={clip.image}
                alt={clip.name}
                fallbackEmoji={clip.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{clip.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{clip.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{clip.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: clip.id, 
                    name: clip.name, 
                    price: clip.price, 
                    image: clip.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">أنواع مشابك الأوراق</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة شاملة من مشابك الأوراق لتناسب جميع الاحتياجات المكتبية
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>متانة فائقة</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies/paper-clips">العودة إلى مشابك ودبابيس</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
