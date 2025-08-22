import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// استيراد الصور من مجلد assets
import fountain1Image from '@/assets/fountain-1.jpg';
import fountain2Image from '@/assets/fountain-2.jpg';
import fountain3Image from '@/assets/fountain-3.jpg';
import fountain4Image from '@/assets/fountain-4.jpg';
import fountain5Image from '@/assets/fountain-5.jpg';


const fountainPens = [
  { 
    id: 'fountain-1', 
    name: 'قلم حبر سائل كلاسيكي - ازرق', 
    price: 25, 
    image: fountain1Image, 
    description: 'قلم حبر سائل كلاسيكي للتوقيعات الرسمية' 
  },
  { 
    id: 'fountain-2', 
    name: 'قلم حبر سائل ملون - احمر', 
    price: 25, 
    image: fountain2Image, 
    description: 'قلم حبر سائل ملون للكتابة الأنيقة' 
  },
  { 
    id: 'fountain-3', 
    name: 'مجموعة أقلام حبر سائل -  بور ازرق', 
    price: 12, 
    image: fountain3Image, 
    description: 'مجموعة متنوعة من أقلام الحبر السائل' 
  },

];

const FountainPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الحبر | تفانين";
    const desc = "تسوق أقلام الحبر السائل الكلاسيكية والأقلام التقليدية للخط العربي من تفانين.";
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
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام الحبر</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖋️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الحبر</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام حبر سائل كلاسيكية وأقلام تقليدية للخط العربي بجودة عالية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fountainPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={pen.image} 
                  alt={pen.name} 
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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
      <Footer />
    </div>
  );
};

export default FountainPensPage;
