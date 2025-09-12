// src/pages/SmallDrawingNotebookPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";

const smallNotebooks = [
  { 
    id: 'small-sketch-1', 
    name: 'كراسة رسم ص ديزني بركه', 
    price: 18, 
    image: '/assets/small-sketch-1.jpg', 
    description: 'كراسة رسم بحجم 24.5 X 17.5 مدمجة وسهلة الحمل، بغلاف ملون جذاب، مثالية للرسم السريع والمذكرات الفنية',
    brand: 'بركه',
    pages: 18,
    size: '24.5 X 17.5',
    paperWeight: '80 جرام'
  },
  { 
    id: 'small-sketch-2', 
    name: 'كراسة رسم اولاد غريب ص 16 ق', 
    price: 15, 
    image: '/assets/small-sketch-2.jpg', 
    description: 'كراسة رسم جيبية صغيرة الحجم، مثالية للسفر والرسم في أي مكان، حجم مناسب لحقيبة اليد',
    brand: 'اولاد غريب',
    pages: 40,
    size: '12x17 سم',
    paperWeight: '80 جرام'
  },
 
];

const SmallDrawingNotebookPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "كراسة رسم صغيرة | تفانين";
    const desc = "تسوق كراسات الرسم الصغيرة والجيبية بأحجام مختلفة A5, A6. كراسات رسم مدمجة وسهلة الحمل للفنانين المتنقلين من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">كراسة رسم صغيرة</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📔</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسة رسم صغيرة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كراسات رسم صغيرة ومدمجة، مثالية للحمل والرسم في أي مكان وفي أي وقت
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="text-4xl mb-4">🎒</div>
            <h3 className="font-bold mb-2 text-pink-700">سهلة الحمل</h3>
            <p className="text-sm text-pink-600">أحجام مدمجة تناسب الحقيبة والجيب للرسم أثناء التنقل</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2 text-cyan-700">رسم سريع</h3>
            <p className="text-sm text-cyan-600">مثالية للرسومات السريعة والملاحظات الفنية الفورية</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="font-bold mb-2 text-amber-700">مناسبة للهدايا</h3>
            <p className="text-sm text-amber-600">حجم مناسب كهدية لطيفة للأطفال والفنانين المبتدئين</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Circle className="inline-block mr-3 mb-1" />
          جميع كراسات الرسم الصغيرة
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {smallNotebooks.map((notebook) => (
            <Card key={notebook.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-40 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={notebook.image} 
                    alt={notebook.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-5xl hidden">
                    📔
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {notebook.brand}
                  </div>
                  
                  {/* Size Badge */}
                  <div className="absolute top-2 left-2 bg-primary text-white rounded-full px-2 py-1 text-xs font-bold">
                    {notebook.size}
                  </div>
                  
                  {/* Pages Badge */}
                  <div className="absolute bottom-2 right-2 bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {notebook.pages} ورقة
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 text-right leading-relaxed line-clamp-2">{notebook.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed text-right line-clamp-2">{notebook.description}</p>
                  
                  {/* Product Details */}
                  <div className="space-y-1 mb-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الحجم:</span>
                      <span className="font-bold text-primary">{notebook.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الأوراق:</span>
                      <span className="font-medium text-foreground">{notebook.pages}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الوزن:</span>
                      <span className="font-medium text-foreground">{notebook.paperWeight}</span>
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-primary font-bold text-lg">{notebook.price} ج.م</span>
                    <Button 
                      size="sm"
                      className="btn-tafaneen px-3 text-xs"
                      onClick={() => addItem({ 
                        id: notebook.id, 
                        name: notebook.name, 
                        price: notebook.price, 
                        image: notebook.image 
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
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmallDrawingNotebookPage;
