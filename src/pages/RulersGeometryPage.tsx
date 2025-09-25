import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

const rulersGeometry = [
  {
    id: 'ruler-1',
    name: 'مسطرة بلاستيك شفافة 30 سم',
    price: 15,
    image: '/assets/ruler-30cm.jpg',
    description: 'مسطرة بلاستيكية شفافة عالية الجودة بقياسات دقيقة',
    brand: 'ستاندارد',
    size: '30 سم'
  },
  {
    id: 'ruler-2',
    name: 'مجموعة أدوات هندسية كاملة',
    price: 85,
    image: '/assets/geometry-set.jpg',
    description: 'مجموعة كاملة تشمل مسطرة، مثلث، منقلة، وبرجل',
    brand: 'هندسي',
    size: 'مجموعة'
  },
  {
    id: 'ruler-3',
    name: 'مسطرة معدنية 50 سم',
    price: 45,
    image: '/assets/metal-ruler-50cm.jpg',
    description: 'مسطرة معدنية قوية ومتينة للاستخدام المهني',
    brand: 'بروفيشنال',
    size: '50 سم'
  },
  {
    id: 'ruler-4',
    name: 'مثلث بلاستيك 45 درجة',
    price: 20,
    image: '/assets/triangle-45.jpg',
    description: 'مثلث بلاستيكي شفاف بزاوية 45 درجة للرسم الهندسي',
    brand: 'ستاندارد',
    size: '25 سم'
  },
  {
    id: 'ruler-5',
    name: 'منقلة دائرية 360 درجة',
    price: 25,
    image: '/assets/protractor-360.jpg',
    description: 'منقلة دائرية كاملة لقياس الزوايا بدقة عالية',
    brand: 'برسيس',
    size: '10 سم'
  },
  {
    id: 'ruler-6',
    name: 'برجل معدني للرسم',
    price: 60,
    image: '/assets/compass-metal.jpg',
    description: 'برجل معدني عالي الجودة لرسم الدوائر والأقواس',
    brand: 'كلاسيك',
    size: 'متوسط'
  },
  {
    id: 'ruler-7',
    name: 'مسطرة مرنة 40 سم',
    price: 30,
    image: '/assets/flexible-ruler.jpg',
    description: 'مسطرة مرنة يمكن ثنيها لرسم المنحنيات',
    brand: 'فليكس',
    size: '40 سم'
  },
  {
    id: 'ruler-8',
    name: 'مثلث متدرج 30-60 درجة',
    price: 18,
    image: '/assets/triangle-30-60.jpg',
    description: 'مثلث بلاستيكي بزوايا 30-60-90 درجة',
    brand: 'ستاندارد',
    size: '20 سم'
  }
];

const RulersGeometryPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "مساطر وأدوات هندسية | تفانين";
    const desc = "تسوق مساطر وأدوات هندسية عالية الجودة - مساطر بلاستيك ومعدن، مثلثات، منقلات، برجل وأدوات القياس من تفانين.";
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
          <span className="text-foreground">مساطر وأدوات هندسية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📏</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مساطر وأدوات هندسية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مساطر، مثلثات، منقلات، وأدوات هندسية دقيقة للطلاب والمهندسين والمهنيين
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-blue-700">قياس دقيق</h3>
            <p className="text-sm text-blue-600">قياسات مطبوعة واضحة ودقيقة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold mb-2 text-green-700">جودة عالية</h3>
            <p className="text-sm text-green-600">مواد متينة ومقاومة للكسر</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-purple-700">تنوع كامل</h3>
            <p className="text-sm text-purple-600">جميع الأدوات الهندسية اللازمة</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Ruler className="inline-block mr-3 mb-1" />
          جميع المساطر والأدوات الهندسية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rulersGeometry.map((ruler) => (
            <Card key={ruler.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={ruler.image} 
                    alt={ruler.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📏
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {ruler.brand}
                  </div>
                  
                  {/* Size Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {ruler.size}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{ruler.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{ruler.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{ruler.brand}</span></span>
                    <span className="text-muted-foreground">
                      الحجم: 
                      <span className="font-bold text-primary">
                        {ruler.size}
                      </span>
                    </span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{ruler.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: ruler.id, 
                        name: ruler.name, 
                        price: ruler.price, 
                        image: ruler.image 
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

export default RulersGeometryPage;