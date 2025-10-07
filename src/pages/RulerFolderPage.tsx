import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const rulerFolders = [
  {
    id: 1,
    name: "حافظة مسطرة A4 ملونة",
    englishName: "Colored A4 Ruler Folder",
    description: "حافظة مسطرة بحجم A4 مثالية للطلاب",
    price: 12,
    image: "/assets/placeholder-product.jpg"
  },
  {
    id: 2,
    name: "حافظة مسطرة A4 شفافة",
    englishName: "Transparent A4 Ruler Folder",
    description: "حافظة مسطرة شفافة بحجم A4 لسهولة رؤية المحتويات",
    price: 10,
    image: "/assets/placeholder-product.jpg"
  },
  {
    id: 3,
    name: "حافظة مسطرة A3 بلاستيكية",
    englishName: "Plastic A3 Ruler Folder",
    description: "حافظة مسطرة بلاستيكية مقواة بحجم A3",
    price: 18,
    image: "/assets/placeholder-product.jpg"
  }
];

function RulerFolderPage() {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "حافظة مسطرة | منظمات الملفات | تفانين";
    const desc = "تسوق أفضل حافظات المسطرة عالية الجودة مثالية للطلاب والمكاتب لتنظيم الأوراق والمستندات.";
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
          <span className="text-foreground">حافظة مسطرة</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">حافظة مسطرة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            حافظات مسطرة مثالية للطلاب والمكاتب لتنظيم الأوراق بطريقة منظمة وعملية
          </p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rulerFolders.map((folder) => (
            <Card key={folder.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center overflow-hidden">
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
                    📋
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

export default RulerFolderPage;
