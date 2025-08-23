import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const colorPencilBrands = [
  { 
    id: 'gelcy', 
    name: 'أقلام ألوان Gelcy', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Gelcy التجارية المميزة',
    path: '/cutting-pasting-tools/wooden-pencils/gelcy'
  },
  { 
    id: 'doms', 
    name: 'أقلام ألوان DOMS', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة DOMS عالية الجودة',
    path: '/cutting-pasting-tools/wooden-pencils/doms'
  },
  { 
    id: 'deli', 
    name: 'أقلام ألوان Deli', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Deli المعروفة',
    path: '/cutting-pasting-tools/wooden-pencils/deli'
  },
  { 
    id: 'power', 
    name: 'أقلام ألوان Power', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Power القوية',
    path: '/cutting-pasting-tools/wooden-pencils/power'
  },
  { 
    id: 'faber-castell', 
    name: 'أقلام ألوان FABER CASTELL', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة FABER CASTELL الألمانية الفاخرة',
    path: '/cutting-pasting-tools/wooden-pencils/faber-castell'
  },
  { 
    id: 'attar', 
    name: 'أقلام ألوان العطار', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة العطار المحلية المتميزة',
    path: '/cutting-pasting-tools/wooden-pencils/attar'
  },
];

const WoodenPencilsPage = () => {
  useEffect(() => {
    document.title = "أقلام ألوان الخشب | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية عالية الجودة من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان الخشب</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان الخشب</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعة واسعة من أقلام الألوان الخشبية من أفضل العلامات التجارية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPencilBrands.map((brand) => (
            <Link key={brand.id} to={brand.path} className="card-product hover:shadow-lg transition-shadow">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {brand.image}
              </div>
              <h3 className="font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{brand.description}</p>
              <Button className="btn-tafaneen w-full">
                تصفح المنتجات
              </Button>
            </Link>
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

export default WoodenPencilsPage;
