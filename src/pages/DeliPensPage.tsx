// src/pages/DeliPensPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const deliPens = [
  { 
    id: 'Deli-Gel', 
    name: 'قلم جيل Deli', 
    price: 15, 
    image: '/assets/Deli-Gel.jpg', 
    fallbackEmoji: '🖊️',
    description: 'قلم جيل عالي الجودة من Deli مثالي للاستخدام اليومي',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'Deli-Ballpoint', 
    name: 'قلم حبر جاف Deli', 
    price: 12, 
    image: '/assets/Deli-Ballpoint.jpg',
    fallbackEmoji: '🖊️',
    description: 'قلم حبر جاف ناعم مثالي للكتابة السلسة',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'Deli-Set', 
    name: 'مجموعة أقلام Deli متعددة الألوان', 
    price: 65, 
    image: '/assets/Deli-Set.jpg',
    fallbackEmoji: '📝',
    description: 'مجموعة شاملة من أقلام Deli بألوان مختلفة',
    rating: 5,
    isNew: true
  },
  { 
    id: 'Deli-Marker', 
    name: 'قلم markers Deli', 
    price: 20, 
    image: '/assets/Deli-Marker.jpg',
    fallbackEmoji: '🖍️',
    description: 'قلم markers عالي الجودة للتظليل والكتابة',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'Deli-Fountain', 
    name: 'قلم حبر سائل Deli', 
    price: 35, 
    image: '/assets/Deli-Fountain.jpg',
    fallbackEmoji: '🖋️',
    description: 'قلم حبر سائل أنيق للكتابة الاحترافية',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'Deli-Mechanical', 
    name: 'قلم رصاص ميكانيكي Deli', 
    price: 18, 
    image: '/assets/Deli-Mechanical.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ميكانيكي دقيق للاستخدام اليومي',
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

const DeliPensPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام Deli | تفانين";
    const desc = "تسوق أقلام Deli عالية الجودة - مجموعة متنوعة من أقلام الجيل والحبر والرصاص من تفانين.";
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
          <span className="text-foreground">أقلام Deli</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🇨🇳</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            أقلام Deli
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            جودة صينية متميزة بأسعار مناسبة - للطلاب والمكاتب
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">علامة تجارية موثوقة</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🏫</div>
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
          {deliPens.map((pen) => (
            <div key={pen.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {pen.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {pen.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {pen.isNew && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
              </div>
              
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={pen.image}
                alt={pen.name}
                fallbackEmoji={pen.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{pen.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(pen.rating)}
                <span className="text-sm text-muted-foreground mr-1">({pen.rating}.0)</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pen.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: pen.id, 
                    name: pen.name, 
                    price: pen.price, 
                    image: pen.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Info */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن Deli</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Deli هي علامة تجارية صينية رائدة في مجال أدوات الكتابة والمكتبية.
            تشتهر منتجاتها بالجودة العالية والتصميم العملي والأسعار التنافسية.
            تقدم Deli مجموعة واسعة من الأقلام والأدوات المكتبية التي تلبي احتياجات الطلاب والمهنيين على حد سواء.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>مصمم للإنتاجية</span>
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
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliPensPage;
