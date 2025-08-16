import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PENSANSTARTECHImage from "@/assets/PENSAN-STAR-TECH.jpg";
import roxiRedImage from "@/assets/roxi-red.jpg";
import roxiBlackImage from "@/assets/roxi-black.jpg";;

const pensanPens = [
  { id: 'PENSAN-STAR-TECH', name: 'قلم بنسان ستار تك أزرق', price: 11, image: 'PENSANSTARTECHImage', description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-office-red', name: 'قلم بنسان أوفيس أحمر', price: 9, image: '🖊️', description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-office-black', name: 'قلم بنسان أوفيس أسود', price: 9, image: '🖊️', description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-my-pen-blue', name: 'قلم بنسان ماي بن أزرق', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-my-pen-red', name: 'قلم بنسان ماي بن أحمر', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-my-pen-black', name: 'قلم بنسان ماي بن أسود', price: 8, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'pensan-global-blue', name: 'قلم بنسان جلوبال أزرق', price: 10, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة فائقة النعومة' },
  { id: 'pensan-global-red', name: 'قلم بنسان جلوبال أحمر', price: 10, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة فائقة النعومة' },
  { id: 'pensan-global-black', name: 'قلم بنسان جلوبال أسود', price: 10, image: '🖊️', description: 'قلم حبر سائل 0.7 مم لكتابة فائقة النعومة' },
  { id: 'pensan-trio-blue', name: 'قلم بنسان تريو أزرق', price: 7, image: '🖊️', description: 'قلم حبر سائل اقتصادي 0.7 مم' },
  { id: 'pensan-trio-red', name: 'قلم بنسان تريو أحمر', price: 7, image: '🖊️', description: 'قلم حبر سائل اقتصادي 0.7 مم' },
  { id: 'pensan-trio-black', name: 'قلم بنسان تريو أسود', price: 7, image: '🖊️', description: 'قلم حبر سائل اقتصادي 0.7 مم' },
  { id: 'pensan-pack-12', name: 'عبوة أقلام بنسان - 12 قلم', price: 90, image: '📦', description: 'عبوة تحتوي على 12 قلم بنسان بألوان متنوعة' },
  { id: 'pensan-pack-6', name: 'عبوة أقلام بنسان - 6 أقلام', price: 48, image: '📦', description: 'عبوة تحتوي على 6 أقلام بنسان بألوان متنوعة' },
];

const PensanPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام بنسان | تفانين";
    const desc = "تسوق أقلام بنسان عالية الجودة للكتابة السلسة والمريحة من تفانين.";
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
          <span className="text-foreground">أقلام بنسان</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام بنسان</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام بنسان عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pensanPens.map((pen) => (
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

export default PensanPensPage;
