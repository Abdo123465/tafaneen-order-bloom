import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const staplers = [
  { 
    id: 'STAPLER-001', 
    name: 'دباسة مكتبية صغيرة', 
    price: 15, 
    image: '/placeholder.svg', 
    fallbackEmoji: '📎',
    description: 'دباسة صغيرة للاستخدام المكتبي اليومي',
    brand: 'Deli'
  },
  { 
    id: 'STAPLER-002', 
    name: 'دباسة مكتبية متوسطة', 
    price: 25, 
    image: '/placeholder.svg',
    fallbackEmoji: '📌',
    description: 'دباسة متوسطة الحجم قوية ومتينة',
    brand: 'Kangaro'
  },
  { 
    id: 'STAPLER-003', 
    name: 'دباسة مكتبية كبيرة', 
    price: 45, 
    image: '/placeholder.svg',
    fallbackEmoji: '🔨',
    description: 'دباسة كبيرة للمستندات الثقيلة',
    brand: 'Max'
  },
  { 
    id: 'STAPLER-004', 
    name: 'دباسة كهربائية', 
    price: 120, 
    image: '/placeholder.svg',
    fallbackEmoji: '⚡',
    description: 'دباسة كهربائية سريعة وفعالة',
    brand: 'Rapid'
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

export default function StaplersSubPage() {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "الدباسات المكتبية | تفانين";
    const desc = "تسوق دباسات مكتبية عالية الجودة بأحجام مختلفة من تفانين.";
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
          <Link to="/office-supplies/stapler" className="hover:text-primary">دباسات وخرامات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">الدباسات</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            الدباسات المكتبية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            دباسات قوية ومتينة - اختر ما يناسب احتياجاتك
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
            <p className="text-sm text-muted-foreground">تدبيس قوي يدوم طويلاً</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">سريعة وفعالة</h3>
            <p className="text-sm text-muted-foreground">تدبيس سريع وسلس</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">دقيقة ومريحة</h3>
            <p className="text-sm text-muted-foreground">تصميم مريح وسهل الاستخدام</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staplers.map((stapler) => (
            <div key={stapler.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {stapler.brand}
                </span>
              </div>
              
              <ProductImage 
                src={stapler.image}
                alt={stapler.name}
                fallbackEmoji={stapler.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{stapler.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{stapler.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{stapler.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: stapler.id, 
                    name: stapler.name, 
                    price: stapler.price, 
                    image: stapler.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">أنواع الدباسات</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة شاملة من الدباسات لتناسب جميع الاحتياجات المكتبية
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
            <Link to="/office-supplies/stapler">العودة إلى دباسات وخرامات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
