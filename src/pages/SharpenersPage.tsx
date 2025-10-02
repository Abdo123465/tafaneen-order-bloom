// src/pages/SharpenersPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const sharpeners = [
  { 
    id: 'SHARP-001', 
    name: 'براية معدنية صغيرة', 
    price: 3, 
    image: '/assets/sharpener-metal-small.jpg', 
    fallbackEmoji: '✏️',
    description: 'براية معدنية كلاسيكية بحجم صغير، مثالية للحمل',
    brand: 'ستيدلر'
  },
  { 
    id: 'SHARP-002', 
    name: 'براية بلاستيك بحاوية', 
    price: 5, 
    image: '/assets/sharpener-plastic-container.jpg',
    fallbackEmoji: '📦',
    description: 'براية بلاستيكية بحاوية لحفظ البراية، مثالية للمدرسة',
    brand: 'فابر كاستل'
  },
  { 
    id: 'SHARP-003', 
    name: 'براية مزدوجة (حجمين)', 
    price: 6, 
    image: '/assets/sharpener-double.jpg',
    fallbackEmoji: '🔄',
    description: 'براية بفتحتين لأحجام مختلفة من الأقلام',
    brand: 'دومز'
  },
  { 
    id: 'SHARP-004', 
    name: 'براية كهربائية صغيرة', 
    price: 45, 
    image: '/assets/sharpener-electric-small.jpg',
    fallbackEmoji: '⚡',
    description: 'براية كهربائية سريعة وفعالة، تعمل بالبطارية',
    brand: 'ديلي'
  },
  { 
    id: 'SHARP-005', 
    name: 'براية كهربائية كبيرة USB', 
    price: 85, 
    image: '/assets/sharpener-electric-usb.jpg',
    fallbackEmoji: '🔌',
    description: 'براية كهربائية احترافية تعمل بكابل USB للاستخدام المكتبي',
    brand: 'ستيدلر'
  },
  { 
    id: 'SHARP-006', 
    name: 'براية مكتبية يدوية كبيرة', 
    price: 35, 
    image: '/assets/sharpener-manual-desk.jpg',
    fallbackEmoji: '🏢',
    description: 'براية يدوية كبيرة للاستخدام المكتبي مع قاعدة ثابتة',
    brand: 'فابر كاستل'
  },
  { 
    id: 'SHARP-007', 
    name: 'براية ألوان خشبية احترافية', 
    price: 15, 
    image: '/assets/sharpener-art-professional.jpg',
    fallbackEmoji: '🎨',
    description: 'براية مخصصة لأقلام الألوان الخشبية، لا تكسر السن',
    brand: 'ستيدلر'
  },
  { 
    id: 'SHARP-008', 
    name: 'مجموعة برايات (3 قطع)', 
    price: 12, 
    image: '/assets/sharpener-set-3pcs.jpg',
    fallbackEmoji: '🎁',
    description: 'مجموعة من 3 برايات بأحجام وأشكال مختلفة',
    brand: 'بريما'
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

const SharpenersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "البرايات | تفانين";
    const desc = "تسوق برايات عالية الجودة - يدوية وكهربائية بأحجام مختلفة من تفانين.";
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
          <Link to="/erasers-sharpeners" className="hover:text-primary">أساتيك وبرايات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">البرايات</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">✏️</div>
            <Zap className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            البرايات
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            برايات يدوية وكهربائية - اختر ما يناسب احتياجاتك
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة وكفاءة عالية</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">براية سريعة</h3>
            <p className="text-sm text-muted-foreground">تبري بسرعة وكفاءة عالية</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">براية دقيقة</h3>
            <p className="text-sm text-muted-foreground">سن مدبب ومتساوي في كل مرة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-semibold mb-1">متينة وقوية</h3>
            <p className="text-sm text-muted-foreground">شفرات قوية تدوم طويلاً</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharpeners.map((sharpener) => (
            <div key={sharpener.id} className="card-product relative group">
              {/* Brand Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {sharpener.brand}
                </span>
              </div>
              
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={sharpener.image}
                alt={sharpener.name}
                fallbackEmoji={sharpener.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{sharpener.name}</h3>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{sharpener.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{sharpener.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: sharpener.id, 
                    name: sharpener.name, 
                    price: sharpener.price, 
                    image: sharpener.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">أنواع البرايات</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة شاملة من البرايات لتناسب جميع الاحتياجات:
            <br /><br />
            <strong>برايات يدوية:</strong> صغيرة ومحمولة، مثالية للاستخدام اليومي في المدرسة والجامعة.
            <br />
            <strong>برايات كهربائية:</strong> سريعة وفعالة، توفر الوقت والجهد، مثالية للاستخدام المكتبي.
            <br />
            <strong>برايات احترافية:</strong> مخصصة لأقلام الرسم والألوان الخشبية بشفرات دقيقة.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>شفرات حادة</span>
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

export default SharpenersPage;
