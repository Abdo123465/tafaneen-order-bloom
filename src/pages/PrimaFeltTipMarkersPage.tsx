// src/pages/PrimaFeltTipMarkersPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const primaMarkers = [
  { 
    id: 'prima-marker-1', 
    name: 'مجموعة أقلام فلوماستر بريما 12 لون', 
    price: 75, 
    image: '/assets/prima-marker-1.jpg', 
    fallbackEmoji: '🖍️',
    description: 'مجموعة أقلام فلوماستر بريما ملونة فاخرة بـ 12 لون',
    rating: 5,
    isPopular: true
  },
  { 
    id: 'prima-marker-2', 
    name: 'مجموعة أقلام فلوماستر بريما 24 لون', 
    price: 140, 
    image: '/assets/prima-marker-2.jpg',
    fallbackEmoji: '🖍️',
    description: 'مجموعة شاملة من أقلام الفلوماستر بريما بـ 24 لون فاخر',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'prima-marker-3', 
    name: 'قلم فلوماستر بريما مائي قابل للغسل', 
    price: 10, 
    image: '/assets/prima-marker-3.jpg',
    fallbackEmoji: '🖍️',
    description: 'قلم فلوماستر بريما مائي سهل الغسل للأطفال',
    rating: 4,
    isNew: true
  },
  { 
    id: 'prima-marker-4', 
    name: 'مجموعة أقلام فلوماستر بريما مائية 6 ألوان', 
    price: 55, 
    image: '/assets/prima-marker-4.jpg',
    fallbackEmoji: '🖍️',
    description: 'أقلام فلوماستر بريما مائية مثالية للرسم والفن',
    rating: 5,
    isPopular: true
  },
  { 
    id: 'prima-marker-5', 
    name: 'قلم فلوماستر بريما دائم', 
    price: 12, 
    image: '/assets/prima-marker-5.jpg',
    fallbackEmoji: '🖍️',
    description: 'قلم فلوماستر بريما ذو حبر دائم لا يمحى',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'prima-marker-6', 
    name: 'مجموعة أقلام تحديد النص بريما 6 ألوان', 
    price: 45, 
    image: '/assets/prima-marker-6.jpg',
    fallbackEmoji: '🖊️',
    description: 'مجموعة أقلام بريما شفافة لتظليل النصوص',
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

const PrimaFeltTipMarkersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام فلوماستر بريما | تفانين";
    const desc = "تسوق أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة من تفانين.";
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
          <span className="text-foreground">أقلام فلوماستر بريما</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🇮🇹</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            أقلام فلوماستر بريما
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">صنع في إيطاليا</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold mb-1">جودة فاخرة</h3>
            <p className="text-sm text-muted-foreground">جودة إيطالية فائقة وتصنيع دقيق</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">ألوان فاخرة</h3>
            <p className="text-sm text-muted-foreground">ألوان غنية وثابتة عالية الجودة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold mb-1">تصميم أنيق</h3>
            <p className="text-sm text-muted-foreground">تصميم إيطالي أنيق وعصري</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaMarkers.map((product) => (
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
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن بريما</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            بريما هي علامة تجارية إيطالية فاخرة تأسست في عام 1920، وتعتبر من أشهر العلامات التجارية في مجال الأدوات المكتبية والفنية.
            تشتهر منتجات بريما بالجودة الفائقة والتصميم الأنيق والابتكار المستمر، مما يجعلها الخيار المفضل للمحترفين والهواة.
            تقدم بريما مجموعة واسعة من أقلام الفلوماستر التي تتميز بالألوان الغنية والجودة العالية.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>صنع في إيطاليا</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>منذ 1920</span>
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

export default PrimaFeltTipMarkersPage;
