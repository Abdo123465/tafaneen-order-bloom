import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, PenTool, Star, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const frenchPens = [
  { 
    id: 'french-1', 
    name: 'قلم فرنساوي كلاسيكي أسود', 
    price: 45, 
    image: '/src/assets/french-pen-1.jpg', 
    description: 'قلم فرنساوي كلاسيكي باللون الأسود مع تصميم أنيق',
    features: ['كتابة سلسة', 'تصميم كلاسيكي', 'مقبض مريح'],
    rating: 4.8,
    inStock: true
  },
  { 
    id: 'french-2', 
    name: 'قلم فرنساوي فاخر ذهبي', 
    price: 75, 
    image: '/src/assets/french-pen-2.jpg', 
    description: 'قلم فرنساوي فاخر بتصميم ذهبي أنيق للاستخدام الرسمي',
    features: ['تصميم فاخر', 'لون ذهبي', 'مقبض مريح'],
    rating: 4.9,
    inStock: true
  },
  { 
    id: 'french-3', 
    name: 'قلم فرنساوي ملون - مجموعة 5 قطع', 
    price: 120, 
    image: '/src/assets/french-pen-3.jpg', 
    description: 'مجموعة متنوعة من أقلام فرنساوي ملونة للكتابة الإبداعية',
    features: ['5 ألوان مختلفة', 'كتابة سلسة', 'مقبض مريح'],
    rating: 4.7,
    inStock: true
  },
  { 
    id: 'french-4', 
    name: 'قلم فرنساوي للرسم الفني', 
    price: 55, 
    image: '/src/assets/french-pen-4.jpg', 
    description: 'قلم فرنساوي مخصص للرسم الفني والتصميم',
    features: ['مخصص للرسم', 'خط دقيق', 'مقبض مريح'],
    rating: 4.6,
    inStock: false
  },
  { 
    id: 'french-5', 
    name: 'قلم فرنساوي قابل للمحو', 
    price: 65, 
    image: '/src/assets/french-pen-5.jpg', 
    description: 'قلم فرنساوي قابل للمحو والتصحيح للكتابة الآمنة',
    features: ['قابل للمحو', 'كتابة سلسة', 'مقبض مريح'],
    rating: 4.5,
    inStock: true
  },
  { 
    id: 'french-6', 
    name: 'قلم فرنساوي للخط العربي', 
    price: 85, 
    image: '/src/assets/french-pen-6.jpg', 
    description: 'قلم فرنساوي مخصص للخط العربي والكتابة التقليدية',
    features: ['مخصص للخط العربي', 'تصميم تقليدي', 'مقبض مريح'],
    rating: 4.8,
    inStock: true
  },
];

const FrenchPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام فرنساوي | تفانين";
    const desc = "تسوق أقلام فرنساوي عالية الجودة بألوان متنوعة وتصاميم أنيقة من تفانين.";
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
          <span className="text-foreground">أقلام فرنساوي</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✒️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام فرنساوي</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أقلام فرنساوي عالية الجودة بألوان متنوعة وتصاميم أنيقة للكتابة اليومية والفنية
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>جودة عالية</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>كتابة سلسة</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4 text-green-500" />
              <span>تصاميم أنيقة</span>
            </div>
          </div>
        </div>

        {/* Back to Ballpoint Pens */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <Link to="/pens/ballpoint" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold mb-1">العودة إلى أقلام الجاف</h3>
                <p className="text-white/90">
                  اكتشف المزيد من أنواع أقلام الجاف المختلفة
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام فرنساوي
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frenchPens.map((pen) => (
            <div key={pen.id} className="card-product group">
              <div className="relative">
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">✒️</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {pen.name}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{pen.rating}</span>
                </div>
                
                {/* Stock Status */}
                {!pen.inStock && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    نفذت الكمية
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold mb-2 text-lg">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              
              {/* Features */}
              <div className="mb-3">
                {pen.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  disabled={!pen.inStock}
                  onClick={() => addItem({ 
                    id: pen.id, 
                    name: pen.name, 
                    price: pen.price, 
                    image: '✒️'
                  })}
                >
                  {pen.inStock ? 'إضافة للسلة' : 'نفذت الكمية'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center text-purple-800">
              لماذا تختار أقلام فرنساوي؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-purple-700">المميزات:</h4>
                <ul className="space-y-1 text-sm text-purple-600">
                  <li>• كتابة سلسة ومريحة</li>
                  <li>• تصميم أنيق وعصري</li>
                  <li>• ألوان متنوعة وجذابة</li>
                  <li>• جودة عالية تدوم طويلاً</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-700">الاستخدامات:</h4>
                <ul className="space-y-1 text-sm text-purple-600">
                  <li>• الكتابة اليومية</li>
                  <li>• الرسم الفني</li>
                  <li>• الخط العربي</li>
                  <li>• الأعمال المكتبية</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

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

export default FrenchPensPage;
