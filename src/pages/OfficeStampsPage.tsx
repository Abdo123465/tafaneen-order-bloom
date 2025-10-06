// src/pages/OfficeStampsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon, Stamp } from "lucide-react";
import { Link } from "react-router-dom";

const stampProducts = [
  { 
    id: 'STAMP-001', 
    name: 'ختم مكتب دائري صغير', 
    price: 45, 
    image: '/assets/stamp-round-small.jpg', 
    fallbackEmoji: '🔵',
    description: 'ختم مكتب دائري صغير مثالي للاستخدام الشخصي',
    brand: 'Doms'
  },
  { 
    id: 'STAMP-002', 
    name: 'ختم مكتب مستطيل متوسط', 
    price: 55, 
    image: '/assets/stamp-rect-medium.jpg',
    fallbackEmoji: '🔲',
    description: 'ختم مكتب مستطيل متوسط للاستخدام التجاري',
    brand: 'Doms'
  },
  { 
    id: 'STAMP-003', 
    name: 'ختم مكتب بيضاوي كبير', 
    price: 65, 
    image: '/assets/stamp-oval-large.jpg',
    fallbackEmoji: '🥚',
    description: 'ختم مكتب بيضاوي كبير للمستندات الرسمية',
    brand: 'Doms'
  },
  { 
    id: 'STAMP-004', 
    name: 'ختم مكتب رقمي', 
    price: 85, 
    image: '/assets/stamp-numbered.jpg',
    fallbackEmoji: '🔢',
    description: 'ختم مكتب رقمي لتسجيل التواريخ والأرقام',
    brand: 'Doms'
  },
  { 
    id: 'STAMP-005', 
    name: 'ختم مكتب اسم', 
    price: 75, 
    image: '/assets/stamp-name.jpg',
    fallbackEmoji: '📝',
    description: 'ختم مكتب مخصص للأسماء والتوقيعات',
    brand: 'Doms'
  },
  { 
    id: 'STAMP-006', 
    name: 'ختم مكتب عنوان', 
    price: 70, 
    image: '/assets/stamp-address.jpg',
    fallbackEmoji: '🏢',
    description: 'ختم مكتب مخصص للعناوين والمراسلات',
    brand: 'Doms'
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
    document.title = "الأختام المكتبية | تفانين";
    const desc = "تسوق أفضل أنواع الأختام المكتبية بأشكال مختلفة (دائرية، مستطيلة، بيضاوية) وأحجام متنوعة (صغيرة، متوسطة، كبيرة) للاستخدام الشخصي والتجاري.";
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
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies/stamps" className="hover:text-primary">الأختام والطوابع</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">الأختام المكتبية</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">🖊️</div>
            <Stamp className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            الأختام المكتبية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            أختام بأشكال مختلفة (دائرية، مستطيلة، بيضاوية) وأحجام متنوعة (صغيرة، متوسطة، كبيرة) للاستخدام الشخصي والتجاري
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">جودة عالية ودقة متناهية</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🔵</div>
            <h3 className="font-semibold mb-1">أشكال متنوعة</h3>
            <p className="text-sm text-muted-foreground">دائرية، مستطيلة، بيضاوية</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-semibold mb-1">أحجام مختلفة</h3>
            <p className="text-sm text-muted-foreground">صغيرة، متوسطة، كبيرة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold mb-1">استخدامات متعددة</h3>
            <p className="text-sm text-muted-foreground">شخصية وتجارية ورسمية</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stampProducts.map((product) => (
            <div key={product.id} className="card-product relative group">
              {/* Brand Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {product.brand}
                </span>
              </div>
              
              {/* Product Image مع مكون محسن */}
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

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن الأختام المكتبية</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة شاملة من الأختام المكتبية عالية الجودة:
            <br /><br />
            <strong>الأختام الدائرية:</strong> مثالية للختمات الشخصية والشعارات.
            <br />
            <strong>الأختام المستطيلة:</strong> مناسبة للمعلومات التفصيلية والعناوين.
            <br />
            <strong>الأختام البيضاوية:</strong> تضفي مظهراً أنيقاً على المستندات الرسمية.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>طبع واضح</span>
            </div>
          </div>
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies/stamps">العودة إلى الأختام والطوابع</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeStampsPage;
