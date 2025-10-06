import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Pin } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const paperClipsProducts = [
  {
    id: 'paper-clips-1',
    name: 'مشبك ورق 25 ملي',
    price: 4,
    image: '/assets/paper-clips-metal.jpg',
    description: 'مشبك ورق 25 ملي',
    brand: 'Diamond',
    features: ['مقاومة للصدأ', 'متعددة الأحجام', 'مناسب للأوراق الصغيرة  ', 'مقاس 25مم']
  },
  {
    id: 'paper-clips-2',
    name: 'مشبك ورق 51 ملي',
    price: 9,
    image: '/assets/paper-clips-colored.jpg',
    description: 'مشبك ورق 51 ملي',
    brand: 'Diamond',
    features: [' الون اسود', 'مقاومة للانحناء', ' 51مم', ' مناسب للأوراق الكبيرة']
  },
  {
    id: 'push-pins-1',
    name: 'مشبك ورق 32 ملي ELUCKY 23732',
    price: 6,
    image: '/assets/push-pins-plastic.jpg',
    description: 'مشبك ورق 32 ملي ELUCKY 23732',
    brand: 'Diamond',
    features: [' مشبك معدني ', ' مناسب للأوراق المتوسطة', ' 32مم', 'الون اسود ']
  },
  {
    id: 'push-pins-2',
    name: 'مشبك ورق 41 ملي5/8  ',
    price: 7,
    image: '/assets/push-pins-metal.jpg',
    description: 'مشبك ورق 41 ملي5/8  ',
    brand: 'Diamond',
    features: [' مشبك معدني ', ' مناسب للأوراق المتوسطة', ' 41ملي', 'الون اسود ']
  },
  {
    id: 'staple-pins-1',
    name: 'علبة دبوس مكتب ملون',
    price: 10,
    image: '/assets/staple-pins-standard.jpg',
    description: 'علبة دبوس مكتب ملون',
    brand: ' JZF',
    features: ['رأس ممتاز ', 'سن ثاقب', 'ملون', 'عبوة اقتصادية']
  },
  {
    id: 'staple-pins-2',
    name: 'علبة دبوس مكتب فضي ثقيل Z احمر',
    price: 9,
    image: '/assets/staple-pins-heavy.jpg',
    description: 'علبة دبوس مكتب فضي ثقيل Z احمر',
    brand: 'JZF',
    features: ['دبابيس فضي ', ' رأس معدني', 'عبوة اقتصادية', 'جودة عالية']
  }
  {
    id: 'staple-pins-2',
    name: 'علبة دبوس كليبس ورق 33 مل',
    price: 12,
    image: '/assets/staple-pins.jpg',
    description: 'علبة دبوس كليبس ورق 33 مل',
    brand: 'Tq',
    features: [' نشبك متين ', '  سهل الاستعمال', ' مناسب مع الورق القليل و المتوسط', 'جودة عالية']
  }
];

const PaperClipsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "مشابك ودبابيس | تفانين";
    const desc = "تسوق مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مشابك ودبابيس</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مشابك ودبابيس</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">📎</div>
            <h3 className="font-bold mb-2 text-green-700">جودة عالية</h3>
            <p className="text-sm text-green-600">مشابك ودبابيس مصنوعة من مواد عالية الجودة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold mb-2 text-blue-700">تثبيت آمن</h3>
            <p className="text-sm text-blue-600">تثبيت قوي وآمن للمستندات والأوراق</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-amber-700">تصاميم متنوعة</h3>
            <p className="text-sm text-amber-600">تصاميم وألوان متعددة تناسب جميع الأذواق</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Pin className="inline-block mr-3 mb-1" />
          جميع مشابك ودبابيس الورق
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paperClipsProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📎
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {product.brand}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                  
                  {/* Product Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {product.features.map((feature, index) => (
                        <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{product.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
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
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة إلى مستلزمات المكتب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaperClipsPage;
