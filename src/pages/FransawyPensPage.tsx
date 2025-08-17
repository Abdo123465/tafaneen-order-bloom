import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FransawyBlackImage from "@/assets/fransawy-Black.jpg";
import FransawyBlueImage from "@/assets/fransawy-Blue.jpg";
import FransawyRedImage from "@/assets/fransawy-Red.jpg";

const fransawyPens = [
  { id: 'fransawy-black', name: 'قلم فرنساوي جاف - أسود', price: 12, image: FransawyBlackImage, description: 'قلم حبر جاف 0.7 مم أسود للكتابة اليومية' },
  { id: 'fransawy-blue', name: 'قلم فرنساوي جاف - أزرق', price: 12, image: FransawyBlueImage, description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية' },
  { id: 'fransawy-red', name: 'قلم فرنساوي جاف - أحمر', price: 12, image: FransawyRedImage, description: 'قلم حبر جاف 0.7 مم أحمر للكتابة اليومية' },
];

const FransawyPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام فرنساوي | تفانين";
    const desc = "تسوق أقلام فرنساوي عالية الجودة للكتابة السلسة والمريحة من تفانين.";
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
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام فرنساوي</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام فرنساوي عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة وتصاميم مميزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fransawyPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {pen.image === '🖊️' || pen.image === '🌈' ? (
                  <span>{pen.image}</span>
                ) : (
                  <img 
                    src={pen.image} 
                    alt={pen.name}
                    className="w-full h-full object-cover"
                  />
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

export default FransawyPensPage;
