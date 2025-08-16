import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// يمكنك إضافة الصور هنا عندما تكون متوفرة
// import roxiBlueImage from "@/assets/roxi-blue.jpg";
// import roxiRedImage from "@/assets/roxi-red.jpg";
// import roxiBlackImage from "@/assets/roxi-black.jpg";

const roxiPens = [
  { id: 'roxi-blue', name: 'قلم روكسي أزرق', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roxi-red', name: 'قلم روكسي أحمر', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roxi-black', name: 'قلم روكسي أسود', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roxi-green', name: 'قلم روكسي أخضر', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roxi-purple', name: 'قلم روكسي بنفسجي', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roxi-pack-5', name: 'عبوة أقلام روكسي - 5 قطع', price: 35, image: '📦', description: 'عبوة تحتوي على 5 أقلام روكسي بألوان متنوعة' },
];

const RoxiPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام روكسي | تفانين";
    const desc = "تسوق أقلام روكسي عالية الجودة للكتابة السلسة والمريحة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    (meta as HTMLMetaElement).setAttribute('content', desc);
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
          <span className="text-foreground">أقلام روكسي</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام روكسي</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام روكسي عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roxiPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {typeof pen.image === 'string' && pen.image.includes('.') ? (
                  <img 
                    src={pen.image} 
                    alt={pen.name} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  pen.image
                )}
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
            <Link to="/pens/ballpoint">العودة إلى أقلام الجاف</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoxiPensPage;
