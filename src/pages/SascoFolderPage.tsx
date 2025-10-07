import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ArrowRight, Archive } from "lucide-react";

const sascoFolders = [
  {
    id: 1,
    name: "حافظة ساسكو A4 احترافية",
    englishName: "Professional A4 Sasco Folder",
    description: "حافظة ساسكو احترافية بحجم A4 للمستندات المهمة",
    price: 35,
    image: "/assets/placeholder-product.jpg"
  },
  {
    id: 2,
    name: "حافظة ساسكو A4 مقواة",
    englishName: "Reinforced A4 Sasco Folder",
    description: "حافظة ساسكو مقواة بحجم A4 للحماية القصوى",
    price: 40,
    image: "/assets/placeholder-product.jpg"
  },
  {
    id: 3,
    name: "حافظة ساسكو A3 متعددة الألوان",
    englishName: "Multi-color A3 Sasco Folder",
    description: "حافظة ساسكو متعددة الألوان بحجم A3 للتصنيف السهل",
    price: 55,
    image: "/assets/placeholder-product.jpg"
  }
];

function SascoFolderPage() {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "حافظة ساسكو | منظمات الملفات | تفانين";
    const desc = "تسوق أفضل حافظات ساسكو عالية الجودة للاستخدام المهني وتنظيم المستندات الرسمية.";
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
          <Link to="/files-organizers" className="hover:text-primary">منظمات الملفات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">حافظة ساسكو</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🗂️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">حافظة ساسكو</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            حافظات ساسكو عالية الجودة للاستخدام المهني وتنظيم المستندات الرسمية
          </p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sascoFolders.map((folder) => (
            <Card key={folder.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={folder.image} 
                    alt={folder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    🗂️
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{folder.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{folder.description}</p>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{folder.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: folder.id, 
                        name: folder.name, 
                        price: folder.price, 
                        image: folder.image 
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
        
        {/* Back to Files Organizers */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/files-organizers">العودة إلى منظمات الملفات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SascoFolderPage;
