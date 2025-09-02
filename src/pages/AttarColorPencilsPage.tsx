// src/pages/AttarColorPencilsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const attarProducts = [
  { 
    id: 'attar-1', 
    name: 'أقلام ألوان العطار - 12 لون', 
    price: 40, 
    image: '/assets/attar-1.jpg', 
    fallbackEmoji: '🖍️',
    description: 'مجموعة أقلام ألوان خشبية العطار المحلية المتميزة بـ 12 لون',
    rating: 4,
    isPopular: true
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

const AttarColorPencilsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام ألوان العطار | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية من علامة العطار المحلية المتميزة بجودتها وأسعارها المناسبة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/wooden-pencils" className="hover:text-primary">أقلام ألوان الخشب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان العطار</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🇪🇬</div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            أقلام ألوان العطار
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            اكتشف أقلام الألوان الخشبية من علامة العطار المحلية المتميزة بجودتها العالية وأسعارها المناسبة
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">صنع في مصر</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">جودة محلية</h3>
            <p className="text-sm text-muted-foreground">منتج مصري عالي الجودة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold mb-1">أسعار مناسبة</h3>
            <p className="text-sm text-muted-foreground">قيمة ممتازة مقابل السعر</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
            <h3 className="font-semibold mb-1">للجميع</h3>
            <p className="text-sm text-muted-foreground">مناسب للطلاب والهواة</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attarProducts.map((product) => (
            <div key={product.id} className="card-product relative group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {(product as any).isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {product.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
                {(product as any).isNew && (
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
        <div className="mt-16 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن العطار</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            العطار هي علامة تجارية مصرية محلية تأسست منذ عقود، وتعتبر من أشهر علامات الأقلام في مصر.
            تشتهر منتجاتها بالجودة العالية والأسعار المناسبة، مما يجعلها الخيار المفضل للطلاب والأسر المصرية.
            تقدم العطار مجموعة واسعة من أقلام الألوان التي تلبي احتياجات جميع المستخدمين بجودة عالية وأسعار تنافسية.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>صنع في مصر</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>جودة محلية</span>
            </div>
          </div>
        </div>
        
        {/* Back to wooden pencils */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools/wooden-pencils">العودة إلى أقلام ألوان الخشب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttarColorPencilsPage;
