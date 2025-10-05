import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Paperclip, 
  Pin, 
  Layers,
  ArrowRight
} from "lucide-react";

function PaperClipsPage() {
  const categories = [
    {
      id: 1,
      name: "مشابك الأوراق",
      englishName: "Paper Clips",
      description: "مشابك معدنية وبلاستيكية بأحجام مختلفة",
      icon: Paperclip,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      emoji: "📎",
      route: "/office-supplies/clips",
      image: "/assets/clips.jpg" // ضع الصورة في public/assets/clips.jpg
    },
    {
      id: 2,
      name: "دبابيس الكبس",
      englishName: "Push Pins",
      description: "دبابيس كبس للتثبيت والتنظيم",
      icon: Pin,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      emoji: "📌",
      route: "/office-supplies/push-pins",
      image: "/assets/push-pins.jpg" // ضع الصورة في public/assets/push-pins.jpg
    },
    {
      id: 3,
      name: "دبابيس التدبيس",
      englishName: "Staple Pins",
      description: "دبابيس للدباسات بأحجام مختلفة",
      icon: Layers,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      textColor: "text-cyan-600",
      emoji: "📍",
      route: "/office-supplies/staple-pins",
      image: "/assets/staple-pins.jpg" // ضع الصورة في public/assets/staple-pins.jpg
    }
  ];

  useEffect(() => {
    document.title = "مشابك ودبابيس | تفانين";
    const desc = "تسوق مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مشابك ودبابيس</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مشابك ودبابيس</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
              >
                <Link to={category.route} className="block hover:no-underline h-full">
                  <CardContent className="p-0 h-full">
                    <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-4xl mb-3">{category.emoji}</div>
                        <IconComponent className="h-8 w-8 mx-auto mb-3" />
                        <h3 className="text-xl font-bold leading-tight">{category.name}</h3>
                        <p className="text-sm opacity-90 mt-1">{category.englishName}</p>
                      </div>
                    </div>
                    
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // إذا لم تكن الصورة موجودة، استخدم placeholder
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + category.name + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className={`w-full text-center ${category.textColor} border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md`}>
                        تصفح المنتجات
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
        
        {/* Back to Office Supplies */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة إلى مستلزمات المكتب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PaperClipsPage;
