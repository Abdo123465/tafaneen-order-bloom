import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const scientificCalculators = [
  {
    id: 'sci-calc-1',
    name: 'آلة حاسبة علمية كاسيو FX-991ES PLUS',
    price: 120,
    image: '/assets/casio-fx991es.jpg',
    description: 'آلة حاسبة علمية متقدمة مع 417 وظيفة رياضية للطلاب والمهندسين',
    brand: 'كاسيو',
    functions: 417
  },
  {
    id: 'sci-calc-2',
    name: 'آلة حاسبة علمية شارب EL-W506X',
    price: 95,
    image: '/assets/sharp-elw506x.jpg',
    description: 'آلة حاسبة علمية بشاشة كبيرة وواضحة مع وضع الامتحان',
    brand: 'شارب',
    functions: 556
  },
  {
    id: 'sci-calc-3',
    name: 'آلة حاسبة علمية تكساس TI-30X IIS',
    price: 85,
    image: '/assets/texas-ti30x.jpg',
    description: 'آلة حاسبة علمية موثوقة للطلاب مع عرض سطرين وإحصائيات',
    brand: 'تكساس',
    functions: 241
  },
  {
    id: 'sci-calc-4',
    name: 'آلة حاسبة علمية كانون F-789SGA',
    price: 75,
    image: '/assets/canon-f789sga.jpg',
    description: 'آلة حاسبة علمية اقتصادية وعملية مع حماية الغطاء',
    brand: 'كانون',
    functions: 605
  },
  {
    id: 'sci-calc-5',
    name: 'آلة حاسبة علمية HP 35S',
    price: 180,
    image: '/assets/hp-35s.jpg',
    description: 'آلة حاسبة علمية احترافية قابلة للبرمجة مع RPN و Algebraic',
    brand: 'HP',
    functions: 800
  },
  {
    id: 'sci-calc-6',
    name: 'آلة حاسبة علمية كاسيو FX-82MS',
    price: 45,
    image: '/assets/casio-fx82ms.jpg',
    description: 'آلة حاسبة علمية أساسية للطلاب سهلة الاستخدام مع شاشة سطرين',
    brand: 'كاسيو',
    functions: 240
  }
];

const ScientificCalculatorPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "آلة حاسبة علمية | تفانين";
    const desc = "تسوق آلات حاسبة علمية بأفضل الماركات - كاسيو، شارب، تكساس، HP. آلات حاسبة علمية متقدمة للطلاب والمهندسين من تفانين.";
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
          <span className="text-foreground">آلة حاسبة علمية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧮</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">آلة حاسبة علمية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آلات حاسبة علمية متقدمة للطلاب والمهندسين والباحثين من أفضل الماركات العالمية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2 text-blue-700">وظائف متقدمة</h3>
            <p className="text-sm text-blue-600">مئات الوظائف الرياضية والعلمية</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-bold mb-2 text-green-700">شاشة واضحة</h3>
            <p className="text-sm text-green-600">عرض طبيعي وشاشات كبيرة وواضحة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-purple-700">دقة عالية</h3>
            <p className="text-sm text-purple-600">حسابات دقيقة وموثوقة للمحترفين</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Calculator className="inline-block mr-3 mb-1" />
          جميع الآلات الحاسبة العلمية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scientificCalculators.map((calculator) => (
            <Card key={calculator.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
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
                    🧮
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {calculator.brand}
                  </div>
                  
                  {/* Functions Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {calculator.functions} وظيفة
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{calculator.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{calculator.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{calculator.brand}</span></span>
                    <span className="text-muted-foreground">
                      عدد الوظائف: 
                      <span className="font-bold text-primary">
                        {calculator.functions}
                      </span>
                    </span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{calculator.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
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

export default ScientificCalculatorPage;
