// src/pages/DomsFeltTipMarkersPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const domsMarkers = [
  { 
    id: 'doms-marker-1', 
    name: 'مجموعة أقلام فلوماستر دومز 12 لون', 
    price: 55, 
    image: '/assets/doms-marker-1.jpg', 
    fallbackEmoji: '🖍️',
    description: 'مجموعة أقلام فلوماستر دومز ملونة عالية الجودة بـ 12 لون',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'doms-marker-2', 
    name: 'مجموعة أقلام فلوماستر دومز 24 لون', 
    price: 95, 
    image: '/assets/doms-marker-2.jpg',
    fallbackEmoji: '🖍️',
    description: 'مجموعة شاملة من أقلام الفلوماستر دومز بـ 24 لون زاهي',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'doms-marker-3', 
    name: 'قلم فلوماستر دومز مائي قابل للغسل', 
    price: 6, 
    image: '/assets/doms-marker-3.jpg',
    fallbackEmoji: '🖍️',
    description: 'قلم فلوماستر دومز مائي سهل الغسل للأطفال',
    rating: 4,
    isNew: true
  },
  { 
    id: 'doms-marker-4', 
    name: 'مجموعة أقلام فلوماستر دومز مائية 6 ألوان', 
    price: 35, 
    image: '/assets/doms-marker-4.jpg',
    fallbackEmoji: '🖍️',
    description: 'أقلام فلوماستر دومز مائية مثالية للرسم والفن',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'doms-marker-5', 
    name: 'قلم فلوماستر دومز دائم', 
    price: 8, 
    image: '/assets/doms-marker-5.jpg',
    fallbackEmoji: '🖍️',
    description: 'قلم فلوماستر دومز ذو حبر دائم لا يمحى',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'doms-marker-6', 
    name: 'مجموعة أقلام تحديد النص دومز 6 ألوان', 
    price: 30, 
    image: '/assets/doms-marker-6.jpg',
    fallbackEmoji: '🖊️',
    description: 'مجموعة أقلام دومز شفافة لتظليل النصوص',
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

const DomsFeltTipMarkersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام فلوماستر دومز | تفانين";
    const desc = "تسوق أقلام فلوماستر دومز الهندية عالية الجودة بأسعار مناسبة من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القص واللصق والتلوين</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/felt-tip-markers" className="hover:text-primary">أقلام الفلوماستر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام فلوماستر دومز</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🇮🇳</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            أقلام فلوماستر دومز
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            أقلام فلوماستر دومز الهندية عالية الجودة بأسعار مناسبة
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">صنع في الهند</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold mb-1">أسعار مناسبة</h3>
            <p className="text-sm text-muted-foreground">جودة عالية بأسعار تناسب الجميع</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌈</div>
            <h3 className="font-semibold mb-1">ألوان زاهية</h3>
            <p className="text-sm text-muted-foreground">ألوان غنية وثابتة عالية الجودة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👍</div>
            <h3 className="font-semibold mb-1">شعبية واسعة</h3>
            <p className="text-sm text-muted-foreground">الخيار المفضل للمدارس والطلاب</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domsMarkers.map((product) => (
            <div key={product.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {product.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {product.isNew && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
              </div>
              
              {/* Product Image */}
              <ProductImage 
                src={product.image}
                alt={product.name}
                fallbackEmoji={product.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-muted-foreground mr-1">({product.rating}.0)</span>
              </div>
              
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
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن دومز</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            دومز هي علامة تجارية هندية رائدة في مجال الأدوات المكتبية والفنية، تأسست في عام 1976.
            تشتهر منتجات دومز بالجودة العالية والأسعار التنافسية، مما يجعلها الخيار المفضل للمدارس والطلاب.
            تقدم دومز مجموعة واسعة من أقلام الفلوماستر التي تتميز بالألوان الزاهية والجودة المتينة.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>صنع في الهند</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>منذ 1976</span>
            </div>
          </div>
        </div>
        
        {/* Back to felt-tip markers */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools/felt-tip-markers">العودة إلى أقلام الفلوماستر</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DomsFeltTipMarkersPage;
