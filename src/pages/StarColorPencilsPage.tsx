// src/pages/StarColorPencilsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const starColorPencils = [
  { 
    id: 'Start-Color-HB', 
    name: 'قلم رصاص ستار كولور HB', 
    price: 6, 
    image: '/assets/Start-Color-HB.jpg', 
    fallbackEmoji: '✏️',
    description: 'قلم رصاص عالي الجودة من ستار كولور مثالي للاستخدام اليومي',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'star-2', 
    name: 'قلم رصاص ستار كولور 2B', 
    price: 9, 
    image: '/assets/star-2.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ناعم مثالي للرسم والتظليل',
    rating: 4,
    isBestSeller: true
  },
  { 
    id: 'star-3', 
    name: 'مجموعة أقلام ستار كولور الملونة', 
    price: 65, 
    image: '/assets/star-3.jpg',
    fallbackEmoji: '🌈',
    description: 'مجموعة متنوعة من أقلام الرصاص الملونة بجودة عالية',
    rating: 5,
    isNew: true
  },
  { 
    id: 'star-4', 
    name: 'قلم رصاص ستار كولور ميكانيكي', 
    price: 15, 
    image: '/assets/star-4.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ميكانيكي دقيق ومتين',
    rating: 4,
    isPopular: true
  },
  { 
    id: 'star-5', 
    name: 'مجموعة أقلام ستار كولور متدرجة', 
    price: 75, 
    image: '/assets/star-5.jpg',
    fallbackEmoji: '✏️',
    description: 'مجموعة شاملة من أقلام الرصاص بدرجات مختلفة للفنانين',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'star-6', 
    name: 'قلم رصاص ستار كولور 4B', 
    price: 10, 
    image: '/assets/star-6.jpg',
    fallbackEmoji: '✏️',
    description: 'قلم رصاص ناعم جداً للرسم الفني',
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

const StarColorPencilsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام ستار كولور | تفانين";
    const desc = "تسوق أقلام ستار كولور عالية الجودة - مجموعة متنوعة من أقلام الرصاص للكتابة والرسم من تفانين.";
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
          <Link to="/pens/pencils" className="hover:text-primary">أقلام الرصاص</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ستار كولور</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">⭐</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            أقلام ستار كولور
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            جودة استثنائية بأسعار مناسبة - اختيار الطلاب والمحترفين
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة موثوقة</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">✏️</div>
            <h3 className="font-semibold mb-1">جودة عالية</h3>
            <p className="text-sm text-muted-foreground">خامات متينة ومقاومة للكسر</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">للإبداع</h3>
            <p className="text-sm text-muted-foreground">مثالية للرسم والكتابة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold mb-1">قيمة ممتازة</h3>
            <p className="text-sm text-muted-foreground">جودة عالية بأسعار معقولة</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {starColorPencils.map((pencil) => (
            <div key={pencil.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {pencil.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {pencil.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {pencil.isNew && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
              </div>
              
              {/* Product Image مع مكون محسن */}
              <ProductImage 
                src={pencil.image}
                alt={pencil.name}
                fallbackEmoji={pencil.fallbackEmoji}
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{pencil.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(pencil.rating)}
                <span className="text-sm text-muted-foreground mr-1">({pencil.rating}.0)</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pencil.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{pencil.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: pencil.id, 
                    name: pencil.name, 
                    price: pencil.price, 
                    image: pencil.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن ستار كولور</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            ستار كولور هي علامة تجارية متخصصة في تصنيع أقلام الرصاص وأدوات الكتابة عالية الجودة.
            تتميز منتجاتها بالمتانة والجودة العالية مع أسعار مناسبة للجميع، مما يجعلها الخيار المفضل للطلاب والفنانين الهواة.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة معتمدة</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>قيمة استثنائية</span>
            </div>
          </div>
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/pencils">العودة إلى أقلام الرصاص</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StarColorPencilsPage;
