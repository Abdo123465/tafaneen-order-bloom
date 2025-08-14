import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import rotoLiquidBallBlueImage from "@/assets/roto-liquid-ball-blue.jpg";
import rotoLiquidBallRedImage from "@/assets/roto-liquid-ball-red.jpg.jpg";
import rotoLiquidBallBlackImage from "@/assets/51HPLTMFlhL.jpg";
import rotoRapidBlueImage from "@/assets/roto-rapid-blue.jpg";
import rotoRapidRedImage from "@/assets/roto-rapid-red.jpg";
import rotoRapidBlackImage from "@/assets/roto-rapid-black.jpg";
import ROTOAEROImage from "@/assets/ROTO-AERO.jpg";
import RotoButterBallImage from "@/assets/Roto-Butter-Ball-blue.jpg";
import RotoButterBallredImage from "@/assets/Roto-Butter-Ball-red.jpg";
import RotoButterBallblackImage from "@/assets/Roto-Butter-Ball-red.jpg";
import ROTOEsayFlowblueImage from "@/assets/ROTO-Esay-Flow-blue.jpg";
import ROTOEsayFlowredImage from "@/assets/ROTO-Esay-Flow-red.jpg";
import ROTOEsayFlowblackImage from "@/assets/ROTO-Esay-Flow-black.jpg";




const rotoPens = [
  { id: 'roto-liquid-ball-blue', name: 'قلم روتو ليكويد بول - أزرق', price: 8, image: rotoLiquidBallBlueImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-liquid-ball-red', name: 'قلم روتو ليكويد بول - أحمر', price: 8, image: rotoLiquidBallRedImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-liquid-ball-black', name: 'قلم روتو ليكويد بول - أسود', price: 8, image: rotoLiquidBallBlackImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-rapid-blue', name: 'قلم روتو رابيد - أزرق', price: 10, image: rotoRapidBlueImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-rapid-red', name: 'قلم روتو رابيد - أحمر', price: 10, image: rotoRapidRedImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-rapid-black', name: 'قلم روتو رابيد - أسود', price: 10, image: rotoRapidBlackImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'ROTO-AERO', name: 'قلم روتو أيرو - ازرق', price: 9, image: ROTOAEROImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Roto-Butter-Ball-blue', name: 'قلم روتو باتر بول أزرق', price: 7, image: RotoButterBallImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Roto-Butter-Ball-red', name: 'قلم روتو باتر بول احمر', price: 7, image: RotoButterBallredImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Roto-Butter-Ball-black', name: 'قلم روتو باتر بول اسود', price: 7, image: RotoButterBallblackImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'ROTO-Esay-Flow-blue', name: 'قلم روتو باتر بول ازرق', price: 7, image: ROTOEsayFlowblueImage, description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'ROTO-Esay-Flow-red', name: 'قلم روتو باتر بول احمر', price: 7, image: ROTOEsayFlowredImage, description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'ROTO-Esay-Flow-black', name: 'قلم روتو باتر بول اسود', price: 7, image: ROTOEsayFlowblackImage, description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'roto-8', name: 'أقلام روتو قابلة لإعادة التعبئة - 3 قطع', price: 75, image: '️', description: 'أقلام روتو صديقة للبيئة قابلة لإعادة التعبئة' },
];

const RotoPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الروتو | تفانين";
    const desc = "تسوق أقلام الروتو عالية الجودة للكتابة السلسة والمريحة من تفانين.";
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
          <span className="text-foreground">أقلام الروتو</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الروتو</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام روتو عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rotoPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {pen.image === '️' || pen.image === '🌈' ? (
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
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RotoPensPage;
