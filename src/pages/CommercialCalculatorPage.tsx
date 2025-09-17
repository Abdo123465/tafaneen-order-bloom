import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const commercialCalculators = [
  {
    id: 'comm-calc-1',
    name: 'آلة حاسبة تجارية كاسيو DR-120R',
    price: 280,
    originalPrice: 320,
    image: '/assets/casio-dr120r.jpg',
    description: 'آلة حاسبة تجارية مع طباعة للمحلات والمكاتب',
    brand: 'كاسيو',
    features: ['طباعة سطرين', '12 رقم', 'ذاكرة مستقلة', 'حساب الضرائب'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'comm-calc-2',
    name: 'آلة حاسبة مكتبية شارب EL-1197PIII',
    price: 350,
    originalPrice: 400,
    image: '/assets/sharp-el1197.jpg',
    description: 'آلة حاسبة مكتبية متقدمة مع طباعة ملونة',
    brand: 'شارب',
    features: ['طباعة ملونة', '12 رقم', 'سرعة عالية', 'وضع صامت'],
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'comm-calc-3',
    name: 'آلة حاسبة تجارية كانون P1-DHV-3',
    price: 220,
    originalPrice: 260,
    image: '/assets/canon-p1dhv.jpg',
    description: 'آلة حاسبة تجارية موثوقة للاستخدام اليومي',
    brand: 'كانون',
    features: ['طباعة أحادية', '12 رقم', 'حساب التكلفة', 'ذاكرة GT'],
    rating: 4.5,
    reviews: 134
  },
  {
    id: 'comm-calc-4',
    name: 'آلة حاسبة مكتبية كاسيو FR-2650RC',
    price: 450,
    originalPrice: 520,
    image: '/assets/casio-fr2650.jpg',
    description: 'آلة حاسبة احترافية للمحاسبة والمالية',
    brand: 'كاسيو',
    features: ['طباعة سريعة', '12 رقم', 'حساب العملة', 'ذاكرة متعددة'],
    rating: 4.9,
    reviews: 45
  },
  {
    id: 'comm-calc-5',
    name: 'آلة حاسبة تجارية HP 12C',
    price: 380,
    originalPrice: 450,
    image: '/assets/hp-12c.jpg',
    description: 'آلة حاسبة مالية احترافية للمصرفيين',
    brand: 'HP',
    features: ['حسابات مالية', 'RPN', 'برمجة', 'بطارية طويلة'],
    rating: 4.8,
    reviews: 78
  },
  {
    id: 'comm-calc-6',
    name: 'آلة حاسبة مكتبية شارب CS-2635RH',
    price: 180,
    originalPrice: 210,
    image: '/assets/sharp-cs2635.jpg',
    description: 'آلة حاسبة مكتبية أساسية وعملية',
    brand: 'شارب',
    features: ['شاشة كبيرة', '12 رقم', 'أزرار كبيرة', 'تصميم مريح'],
    rating: 4.3,
    reviews: 156
  }
];

const CommercialCalculatorPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "آلة حاسبة محل (تجارية) | تفانين";
    const desc = "تسوق آلات حاسبة تجارية ومكتبية بأفضل الماركات - كاسيو، شارب، كانون، HP. آلات حاسبة تجارية للمحلات والأعمال من تفانين.";
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
          <Link to="/calculators-rulers" className="hover:text-primary">آلات حاسبة ومساطر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">آلة حاسبة محل (تجارية)</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💰</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">آلة حاسبة محل (تجارية)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آلات حاسبة تجارية ومكتبية للمحلات والأعمال التجارية من أفضل الماركات العالمية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🧾</div>
            <h3 className="font-bold mb-2 text-green-700">طباعة فورية</h3>
            <p className="text-sm text-green-600">طباعة سريعة ودقيقة للفواتير والإيصالات</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">🔢</div>
            <h3 className="font-bold mb-2 text-blue-700">دقة حسابية</h3>
            <p className="text-sm text-blue-600">حسابات دقيقة وموثوقة للأعمال التجارية</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="text-4xl mb-4">💱</div>
            <h3 className="font-bold mb-2 text-amber-700">وظائف متقدمة</h3>
            <p className="text-sm text-amber-600">حساب الضرائب والعملات والنسب المئوية</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <DollarSign className="inline-block mr-3 mb-1" />
          جميع الآلات الحاسبة التجارية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialCalculators.map((calculator) => (
            <Card key={calculator.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={calculator.image} 
                    alt={calculator.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    💰
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {calculator.brand}
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                    ★ {calculator.rating}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{calculator.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{calculator.description}</p>
                  
                  {/* Product Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {calculator.features.map((feature, index) => (
                        <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-green-600">{calculator.price} ج.م</span>
                        {calculator.originalPrice && (
                          <span className="text-gray-400 line-through mr-2 text-sm">{calculator.originalPrice} ج.م</span>
                        )}
                      </div>
                      {calculator.originalPrice && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                          وفر {calculator.originalPrice - calculator.price} ج.م
                        </span>
                      )}
                    </div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white w-full"
                      onClick={() => addItem({ 
                        id: calculator.id, 
                        name: calculator.name, 
                        price: calculator.price, 
                        image: calculator.image 
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
            <Link to="/calculators-rulers">العودة إلى آلات حاسبة ومساطر</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommercialCalculatorPage;
