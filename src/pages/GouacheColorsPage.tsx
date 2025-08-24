// src/pages/GouacheColorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Brush } from "lucide-react";

function GouacheColorsPage() {
  const gouacheBrands = [
    {
      id: 1,
      name: "ألوان جواش فايبر كاستل",
      englishName: "Faber-Castell Gouache",
      description: "ألوان جواش عالية الجودة من فايبر كاستل",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/faber-castell"
    },
    {
      id: 2,
      name: "ألوان جواش ونزور آند نيوتن",
      englishName: "Winsor & Newton Gouache",
      description: "ألوان جواش احترافية من ونزور آند نيوتن",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/winsor-newton"
    },
    {
      id: 3,
      name: "ألوان جواش رويال تالينز",
      englishName: "Royal Talens Gouache",
      description: "ألوان جواش فنية من رويال تالينز",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/royal-talens"
    },
    {
      id: 4,
      name: "ألوان جواش ساكورا",
      englishName: "Sakura Gouache",
      description: "ألوان جواش يابانية عالية الجودة من ساكورا",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600",
      emoji: "🌸",
      route: "/cutting-pasting-tools/gouache-colors/sakura"
    },
    {
      id: 5,
      name: "ألوان جواش هولباين",
      englishName: "Holbein Gouache",
      description: "ألوان جواش يابانية احترافية من هولباين",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/holbein"
    },
    {
      id: 6,
      name: "ألوان جواش بيلا",
      englishName: "Bella Gouache",
      description: "ألوان جواش اقتصادية وعملية من بيلا",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/bella"
    },
    {
      id: 7,
      name: "ألوان جواش أرتيزا",
      englishName: "Arteza Gouache",
      description: "ألوان جواش متنوعة من أرتيزا",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors/arteza"
    },
    {
      id: 8,
      name: "ألوان جواش مختلطة",
      englishName: "Mixed Gouache Brands",
      description: "مجموعة متنوعة من ماركات ألوان الجواش",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      emoji: "🌈",
      route: "/cutting-pasting-tools/gouache-colors/mixed-brands"
    }
  ];

  useEffect(() => {
    document.title = "ألوان الجواش | أدوات القص واللصق | تفانين";
    const desc = "اكتشف مجموعة واسعة من ألوان الجواش عالية الجودة من أفضل العلامات التجارية العالمية في تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القص واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">ألوان الجواش</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ألوان الجواش</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من ألوان الجواش عالية الجودة من أفضل العلامات التجارية العالمية
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {gouacheBrands.map((brand) => (
            <Card 
              key={brand.id} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
            >
              <Link to={brand.route} className="block hover:no-underline h-full">
                <CardContent className="p-0 h-full">
                  <div className={`${brand.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-3">{brand.emoji}</div>
                      <Brush className="h-8 w-8 mx-auto mb-3" />
                      <h3 className="text-lg font-bold leading-tight">{brand.name}</h3>
                      <p className="text-sm opacity-90 mt-1">{brand.englishName}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {brand.description}
                    </p>
                    
                    <div className={`w-full text-center ${brand.textColor} border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md`}>
                      تصفح المنتجات
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Back to Main Category */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القص واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GouacheColorsPage;
