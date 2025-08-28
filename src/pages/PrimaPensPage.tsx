import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import prima25Image from "@/assets/prima-25.jpg";
import PrimaDanteImage from "@/assets/Prima-Dante.jpg";
import PrimaFancyImage from "@/assets/Prima-Fancy.jpg";
import PrimaFinoImage from "@/assets/Prima-Fino.jpg";
import PRIMAFORMAblueImage from "@/assets/PRIMA-FORMA-blue.jpg";
import PRIMAFORMAredImage from "@/assets/PRIMA-FORMA-red.jpg";
import PRIMAFORMAblackImage from "@/assets/PRIMA-FORMA-black.jpg";
import primaforsaImage from "@/assets/prima-forsa.jpg";
import PrimaGentaImage from "@/assets/Prima-Genta.jpg";
import primalinoaImage from "@/assets/prima-lino.jpg";
import PrimaNovaImage from "@/assets/Prima-Nova.jpg";
import PrimaSevenImage from "@/assets/Prima-Seven.jpg"; // إزالة التكرار
import PRIMASOLOImage from "@/assets/PRIMA-SOLO.jpg";
import primatangoImage from "@/assets/prima-tango.jpg";
import primaunoImage from "@/assets/prima-uno.jpg";
import primaVISAImage from "@/assets/prima-VISA.jpg";

// إضافة interface للنوع
interface PenItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const primaPens: PenItem[] = [
  { id: 'prima-25', name: 'قلم بريما 25 ازرق', price: 7, image: prima25Image, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Dante', name: 'قلم بريما دانتي ازرق', price: 12, image: PrimaDanteImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Fancy', name: 'قلم بريما فتنزي ازرق', price: 7, image: PrimaFancyImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Fino', name: 'قلم بريما فينو ازرق', price: 7, image: PrimaFinoImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'PRIMA-FORMA-blue', name: 'قلم بريما فورما ازرق', price: 6, image: PRIMAFORMAblueImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'PRIMA-FORMA-red', name: 'قلم بريما فورما احمر', price: 6, image: PRIMAFORMAredImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'PRIMA-FORMA-black', name: 'قلم بريما فورما اسود', price: 6, image: PRIMAFORMAblackImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'prima-forsa', name: 'قلم بريما فورسا ازرق', price: 6, image: primaforsaImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Genta', name: 'قلم بريما جينتا ازرق', price: 7, image: PrimaGentaImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'prima-lino', name: 'قلم بريما لينو ازرق', price: 7, image: primalinoaImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Nova', name: 'قلم بريما نوفا ازرق', price: 7, image: PrimaNovaImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'Prima-Seven', name: 'قلم بريما سيفين ازرق', price: 7, image: PrimaSevenImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'PRIMA-SOLO', name: 'قلم بريما سولو ازرق', price: 8, image: PRIMASOLOImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'prima-tango', name: 'قلم بريما تانجو ازرق', price: 7, image: primatangoImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'prima-uno', name: 'قلم بريما اونو ازرق', price: 7, image: primaunoImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
  { id: 'prima-VISA', name: 'قلم بريما فيزا ازرق', price: 7, image: primaVISAImage, description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة' },
];

const PrimaPensPage: React.FC = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام بريما | تفانين";
    const desc = "تسوق أقلام بريما عالية الجودة للكتابة السلسة والمريحة من تفانين.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

  const handleAddToCart = (pen: PenItem) => {
    try {
      addItem({ 
        id: pen.id, 
        name: pen.name, 
        price: pen.price, 
        image: pen.image 
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

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
          <span className="text-foreground">أقلام بريما</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام بريما</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام بريما عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {primaPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                <img 
                  src={pen.image} 
                  alt={pen.name} 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback في حالة فشل تحميل الصورة
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '🖊️';
                  }}
                />
              </div>
              <h3 className="font-semibold mb-2">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => handleAddToCart(pen)}
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

export default PrimaPensPage;
