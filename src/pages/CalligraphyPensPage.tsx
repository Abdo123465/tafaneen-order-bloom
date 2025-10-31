import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const calligraphyPens = [
  { id: 'calligraphy-1', name: 'قلم خط عربي تقليدي روتو - ازرق', price: 15, image: '/assets/calligraphy-1.jpg', description: 'قلم خط عربي تقليدي للرسم الفني والخط العربي' },
  { id: 'calligraphy-2', name: 'قلم خط عربي تقليدي روتو - اسود', price: 15, image: '/assets/calligraphy-2.jpg', description: 'قلم خط عربي تقليدي للرسم الفني والخط العربي' },
  { id: 'calligraphy-3', name: 'قلم خط تقليدي روتو - احمر', price: 15, image: '/assets/calligraphy-3.jpg', description: 'قلم خط عربي تقليدي للرسم الفني والخط العربي' },
];

const CalligraphyPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الخط | تفانين";
    const desc = "تسوق أقلام الخط العربي وأدوات الخطاطة بجودة عالية من تفانين.";
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
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام الخط</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖌️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الخط</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام خط عربي وأدوات الخطاطة بجودة عالية للكتابة الفنية والرسم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calligraphyPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center mb-4">
                <img 
                  src={pen.image} 
                  alt={pen.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="font-semibold mb-2">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pen.id, name: pen.name, price: pen.price, image: pen.image })}
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
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CalligraphyPensPage;
