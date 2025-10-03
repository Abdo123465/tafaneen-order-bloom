// src/pages/PaperPunchesPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";

const paperPunchesProducts = [
  { 
    id: 'paper-punch-1', 
    name: 'خرامة ورق صغيرة ثقبين - ديلي', 
    price: 25, 
    image: '/assets/paper-punch-1.jpg', 
    description: 'خرامة ورق صغيرة الحجم بثقبين، مثالية للاستخدام اليومي',
    brand: 'ديلي',
    size: 'صغير',
    holes: 'ثقبين',
    capacity: '10 ورقة'
  },
  { 
    id: 'paper-punch-2', 
    name: 'خرامة ورق متوسطة ثقبين - كانجارو', 
    price: 45, 
    image: '/assets/paper-punch-2.jpg', 
    description: 'خرامة ورق متوسطة الحجم بتصميم عصري وأداء ممتاز',
    brand: 'كانجارو',
    size: 'متوسط',
    holes: 'ثقبين',
    capacity: '20 ورقة'
  },
  { 
    id: 'paper-punch-3', 
    name: 'خرامة ورق كبيرة ثقبين - ديلي', 
    price: 75, 
    image: '/assets/paper-punch-3.jpg', 
    description: 'خرامة ورق كبيرة للاستخدام المكثف في المكاتب',
    brand: 'ديلي',
    size: 'كبير',
    holes: 'ثقبين',
    capacity: '40 ورقة'
  },
  { 
    id: 'paper-punch-4', 
    name: 'خرامة ورق صغيرة ثقب واحد - ماكس', 
    price: 20, 
    image: '/assets/paper-punch-4.jpg', 
    description: 'خرامة ورق بثقب واحد للاستخدامات الخاصة',
    brand: 'ماكس',
    size: 'صغير',
    holes: 'ثقب واحد',
    capacity: '15 ورقة'
  },
  { 
    id: 'paper-punch-5', 
    name: 'خرامة ورق متوسطة ثقبين - SDI', 
    price: 55, 
    image: '/assets/paper-punch-5.jpg', 
    description: 'خرامة ورق بجودة عالية ومقبض مريح',
    brand: 'SDI',
    size: 'متوسط',
    holes: 'ثقبين',
    capacity: '25 ورقة'
  },
  { 
    id: 'paper-punch-6', 
    name: 'خرامة ورق كبيرة ثقبين - كانجارو', 
    price: 85, 
    image: '/assets/paper-punch-6.jpg', 
    description: 'خرامة ورق قوية للمستندات السميكة',
    brand: 'كانجارو',
    size: 'كبير',
    holes: 'ثقبين',
    capacity: '50 ورقة'
  },
  { 
    id: 'paper-punch-7', 
    name: 'خرامة ورق صغيرة أشكال - ديلي', 
    price: 30, 
    image: '/assets/paper-punch-7.jpg', 
    description: 'خرامة ورق بأشكال مختلفة للأعمال الفنية',
    brand: 'ديلي',
    size: 'صغير',
    holes: 'أشكال',
    capacity: '5 ورقة'
  },
  { 
    id: 'paper-punch-8', 
    name: 'خرامة ورق متوسطة 4 ثقوب - ديلي', 
    price: 65, 
    image: '/assets/paper-punch-8.jpg', 
    description: 'خرامة ورق بأربع ثقوب للملفات الخاصة',
    brand: 'ديلي',
    size: 'متوسط',
    holes: '4 ثقوب',
    capacity: '30 ورقة'
  },
  { 
    id: 'paper-punch-9', 
    name: 'خرامة ورق صغيرة ثقبين - بريما', 
    price: 18, 
    image: '/assets/paper-punch-9.jpg', 
    description: 'خرامة ورق اقتصادية بجودة جيدة',
    brand: 'بريما',
    size: 'صغير',
    holes: 'ثقبين',
    capacity: '8 ورقة'
  },
];

const PaperPunchesPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "خرامات ورق | تفانين";
    const desc = "تسوق خرامات ورق بأحجام وأنواع مختلفة - ثقب واحد، ثقبين، أربع ثقوب، وأشكال. خرامات عالية الجودة من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">الأدوات المكتبية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">خرامات ورق</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕳️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">خرامات ورق</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خرامات بأحجام وأنواع مختلفة - ثقب واحد، ثقبين، أربع ثقوب، وأشكال فنية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-orange-700">أنواع متعددة</h3>
            <p className="text-sm text-orange-600">ثقب واحد، ثقبين، وأشكال</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="font-bold mb-2 text-teal-700">سهولة الاستخدام</h3>
            <p className="text-sm text-teal-600">تصميم مريح وعملي</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-bold mb-2 text-red-700">جودة ممتازة</h3>
            <p className="text-sm text-red-600">من أفضل الشركات المصنعة</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Circle className="inline-block mr-3 mb-1" />
          جميع الخرامات
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paperPunchesProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center overflow-hidden">
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
                    🕳️
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {product.holes}
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {product.brand}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                  
                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <span className="text-muted-foreground">الحجم: <span className="font-medium text-foreground">{product.size}</span></span>
                    <span className="text-muted-foreground">النوع: <span className="font-medium text-foreground">{product.holes}</span></span>
                    <span className="text-muted-foreground col-span-2">السعة: <span className="font-medium text-foreground">{product.capacity}</span></span>
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
            <Link to="/office-supplies">العودة إلى الأدوات المكتبية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaperPunchesPage;
