import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// استيراد الصور
import SetOf8TurkishFluorescentBallpointPens from "@/assets/Set-of-8-Turkish-fluorescent-ballpoint-pens.jpg";

const ballpointPenSets = [
  { 
    id: 'ballpoint-set-1', 
    name: 'طقم أقلام جاف ملونة تركي - 8 قطع', 
    price: 100, 
    image: SetOf8TurkishFluorescentBallpointPens, 
    description: 'طقم من 8 أقلام جاف فلورسنت تركية عالية الجودة' 
  },
  { id: 'ballpoint-set-2', name: 'طقم أقلام جاف أساسية - 12 قطعة', price: 95, image: '🖊️', description: 'طقم أقلام جاف بالألوان الأساسية (أزرق، أسود، أحمر)' },
  { id: 'ballpoint-set-3', name: 'طقم أقلام جاف فاخرة معدنية - 6 قطع', price: 180, image: '🖋️', description: 'طقم أقلام جاف فاخرة بتصميم معدني أنيق في علبة هدايا' },
  { id: 'ballpoint-set-4', name: 'طقم أقلام جاف قابلة للمحو - 8 قطع', price: 120, image: '✏️', description: 'طقم أقلام جاف قابلة للمحو بألوان مختلفة مع ممحاة' },
  { id: 'ballpoint-set-5', name: 'طقم أقلام جاف احترافية - 5 قطع', price: 150, image: '🖊️', description: 'طقم أقلام جاف احترافية للأعمال والمكتب' },
  { id: 'ballpoint-set-6', name: 'طقم أقلام جاف للطلاب - 15 قطعة', price: 75, image: '📚', description: 'طقم كبير من أقلام الجاف مناسب للطلاب والاستخدام اليومي' },
];

const BallpointPenSetsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "طقم أقلام الجاف | تفانين";
    const desc = "تسوق أطقم أقلام الحبر الجاف بألوان متنوعة وجودة عالية من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
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
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens/ballpoint" className="hover:text-primary">أقلام الجاف</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">طقم أقلام الجاف</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">طقم أقلام الجاف</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أطقم أقلام حبر جاف متنوعة وعالية الجودة بأسعار مميزة للاستخدام المنزلي والمكتبي
          </p>
        </div>
        
        {/* فئات أقلام الجاف */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Basic Ballpoint Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <Link to="/pens/ballpoint/basic" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">🖊️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام الجاف الأساسية</h3>
                  <p className="text-white/90">
                    أقلام جاف أساسية بالألوان التقليدية (أزرق، أسود، أحمر)
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Gel Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <Link to="/pens/ballpoint/gel" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">🖋️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام الجيل</h3>
                  <p className="text-white/90">
                    أقلام جيل ذات حبر سلس وكتابة ناعمة
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Erasable Ballpoint Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <Link to="/pens/ballpoint/erasable" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">✏️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام جاف قابلة للمحو</h3>
                  <p className="text-white/90">
                    أقلام جاف فريدة قابلة للمحو بممحاة خاصة
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Luxury Ballpoint Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 text-white">
            <Link to="/pens/ballpoint/luxury" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">🖋️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام جاف فاخرة</h3>
                  <p className="text-white/90">
                    أقلام جاف فاخرة بتصميمات معدنية أنيقة
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Professional Ballpoint Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-red-500 to-orange-600 text-white">
            <Link to="/pens/ballpoint/professional" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">💼</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام جاف احترافية</h3>
                  <p className="text-white/90">
                    أقلام جاف احترافية للأعمال والمكتب
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Student Ballpoint Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-yellow-500 to-amber-600 text-white">
            <Link to="/pens/ballpoint/student" className="block hover:no-underline">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="text-5xl">📚</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">أقلام جاف للطلاب</h3>
                  <p className="text-white/90">
                    أطقم أقلام جاف مناسبة للطلاب والاستخدام اليومي
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أطقم أقلام الجاف
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ballpointPenSets.map((set) => (
            <div key={set.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {typeof set.image === 'string' && set.image.includes('.') ? (
                  <img 
                    src={set.image} 
                    alt={set.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{set.image}</span>
                )}
              </div>
              <h3 className="font-semibold mb-2">{set.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{set.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{set.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: set.id, name: set.name, price: set.price, image: set.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/ballpoint">العودة إلى أقلام الجاف</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BallpointPenSetsPage;
