import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

import FB2BImage from "@/assets/F-B-2B.jpg";


const faberCastellPencils = [
  { 
    id: 'F-B-2B', 
    name: '2B فابر كاستل', 
    price: 12, 
    image: FB2B, 
    description: '2B قلم رصاص احترافي من السلسلة الكلاسيكية بجودة ألمانية فائقة',
    rating: 5,
    isPopular: true
  },
  { 
    id: 'faber-2', 
    name: 'مجموعة فابر كاستل للرسم - 12 قطعة', 
    price: 450, 
    image: '📦', 
    description: 'مجموعة شاملة من أقلام الرصاص بدرجات مختلفة H-8B مع ممحاة ومبراة',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'faber-3', 
    name: 'قلم فابر كاستل 9000 2B للرسم', 
    price: 38, 
    image: '✏️', 
    description: 'قلم رصاص ناعم مثالي للرسم والتظليل الفني المتقدم',
    rating: 5
  },
  { 
    id: 'faber-4', 
    name: 'قلم فابر كاستل ميكانيكي TK-FINE', 
    price: 125, 
    image: '🖊️', 
    description: 'قلم رصاص ميكانيكي احترافي بدقة 0.5 مم وجسم معدني أنيق',
    rating: 4
  },
  { 
    id: 'faber-5', 
    name: 'أقلام فابر كاستل الملونة - 36 لون', 
    price: 580, 
    image: '🌈', 
    description: 'مجموعة أقلام رصاص ملونة بألوان زاهية وثابتة لأعمال فنية رائعة',
    rating: 5,
    isPopular: true
  },
  { 
    id: 'faber-6', 
    name: 'قلم فابر كاستل 9000 4B للفنانين', 
    price: 40, 
    image: '✏️', 
    description: 'قلم رصاص ناعم جداً مخصص للأعمال الفنية والرسم الاحترافي',
    rating: 5
  },
  { 
    id: 'faber-7', 
    name: 'مجموعة فابر كاستل CASTELL 9000 Art Set', 
    price: 750, 
    image: '🎨', 
    description: 'مجموعة فنية شاملة تحتوي على 19 قطعة للرسم الاحترافي',
    rating: 5,
    isBestSeller: true
  },
  { 
    id: 'faber-8', 
    name: 'قلم فابر كاستل GRIP 2001 HB', 
    price: 28, 
    image: '✏️', 
    description: 'قلم رصاص بمقبض مطاطي مريح مع نقاط لمنع الانزلاق',
    rating: 4
  }
];

const FaberCastellPencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام فابر كاستل | تفانين";
    const desc = "تسوق أقلام فابر كاستل الألمانية الأصلية - جودة عالمية لأعمالك الفنية والكتابة من تفانين.";
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
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens/pencils" className="hover:text-primary">أقلام الرصاص</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام فابر كاستل</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-6xl">⭐</div>
            <Award className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            أقلام فابر كاستل
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            جودة ألمانية أصيلة منذ 1761 - اختيار المحترفين والفنانين حول العالم
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">علامة تجارية معتمدة</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🇩🇪</div>
            <h3 className="font-semibold mb-1">صناعة ألمانية</h3>
            <p className="text-sm text-muted-foreground">جودة وتقنية متقدمة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">للمحترفين</h3>
            <p className="text-sm text-muted-foreground">اختيار الفنانين والمصممين</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-semibold mb-1">ضمان الجودة</h3>
            <p className="text-sm text-muted-foreground">منتجات أصلية معتمدة</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faberCastellPencils.map((pencil) => (
            <div key={pencil.id} className="card-product relative">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {pencil.isBestSeller && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
                {pencil.isPopular && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">شائع</span>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {pencil.image}
              </div>
              
              <h3 className="font-semibold mb-2">{pencil.name}</h3>
              
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
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">عن فابر كاستل</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            فابر كاستل هي أقدم شركة مصنعة للأقلام في العالم، تأسست عام 1761 في ألمانيا. 
            تُعرف بجودتها العالية وابتكاراتها المستمرة في مجال أدوات الكتابة والرسم. 
            منتجات فابر كاستل هي الخيار الأول للفنانين والمصممين المحترفين حول العالم.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>260+ عام من الخبرة</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>جودة عالمية معتمدة</span>
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

export default FaberCastellPencilsPage;
