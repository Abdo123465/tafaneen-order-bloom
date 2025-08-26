// src/pages/CuttingPastingToolsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Scissors, 
  Palette, 
  PenTool, 
  Brush, 
  FileText, 
  Square,
  Sparkles,
  Book,
  Circle,
  ArrowRight
} from "lucide-react";

function CuttingPastingToolsPage() {
  const categories = [
    {
      id: 1,
      name: "قص و لصق",
      englishName: "Cut & Paste",
      documentTitle: "أدوات القص واللصق و تلوين | تفانين",
      description: "أدوات القص واللصق للمدارس والمكاتب",
      icon: Scissors,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      emoji: "✂️",
      route: "/cutting-pasting-tools/cutting-pasting"
    },
    {
      id: 2,
      name: "أقلام ألوان الخشب",
      englishName: "Wooden Colored Pencils",
      description: "أقلام ألوان خشبية عالية الجودة",
      icon: PenTool,
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      emoji: "🖍️",
      route: "/cutting-pasting-tools/wooden-pencils"
    },
    {
      id: 3,
      name: "ألوان الشمع",
      englishName: "Wax Colors/Crayons",
      description: "ألوان شمعية آمنة للأطفال والفنانين",
      icon: Palette,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      emoji: "🖍️",
      route: "/cutting-pasting-tools/wax-crayons"
    },
    {
      id: 4,
      name: "ألوان فلوماستر",
      englishName: "Felt-tip Markers",
      description: "أقلام فلوماستر بألوان متنوعة",
      icon: PenTool,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      emoji: "🖊️",
      route: "/cutting-pasting-tools/felt-tip-markers"
    },
    {
      id: 5,
      name: "ألوان جواش",
      englishName: "Gouache Colors",
      description: "ألوان جواش للرسم الاحترافي",
      icon: Brush,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      emoji: "🎨",
      route: "/cutting-pasting-tools/gouache-colors"
    },
    {
      id: 6,
      name: "ألوان أكريليك",
      englishName: "Acrylic Colors",
      description: "ألوان أكريليك عالية الجودة",
      icon: Brush,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      emoji: "🎨",
      route: "/cutting-pasting-tools/acrylic-colors"
    },
    {
      id: 7,
      name: "كانسون",
      englishName: "Canson Paper",
      description: "ورق كانسون للرسم والفنون",
      icon: FileText,
      color: "bg-gradient-to-br from-gray-500 to-gray-600",
      textColor: "text-gray-600",
      bgColor: "bg-gray-50",
      emoji: "📄",
      route: "/cutting-pasting-tools/canson-paper"
    },
    {
      id: 8,
      name: "مقاصات",
      englishName: "Scissors",
      description: "مقاصات بأحجام وأنواع مختلفة",
      icon: Scissors,
      color: "bg-gradient-to-br from-slate-500 to-slate-600",
      textColor: "text-slate-600",
      bgColor: "bg-slate-50",
      emoji: "✂️",
      route: "/cutting-pasting-tools/scissors"
    },
    {
      id: 9,
      name: "ألوان مية",
      englishName: "Watercolors",
      description: "ألوان مائية للرسم الفني",
      icon: Brush,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      emoji: "💧",
      route: "/cutting-pasting-tools/watercolors"
    },
    {
      id: 10,
      name: "ألوان زيت",
      englishName: "Oil Colors",
      description: "ألوان زيتية للرسم الاحترافي",
      icon: Brush,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      emoji: "🎨",
      route: "/cutting-pasting-tools/oil-colors"
    },
    {
      id: 11,
      name: "كراسات تلوين",
      englishName: "Coloring Books",
      description: "كراسات تلوين للأطفال والكبار",
      icon: Book,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      emoji: "📚",
      route: "/cutting-pasting-tools/coloring-books"
    },
    {
      id: 12,
      name: "فوم عادي",
      englishName: "Regular Foam",
      description: "فوم عادي للأعمال اليدوية",
      icon: Square,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      emoji: "🟦",
      route: "/cutting-pasting-tools/regular-foam"
    },
    {
      id: 13,
      name: "فوم لاصق",
      englishName: "Adhesive Foam",
      description: "فوم لاصق للمشاريع الفنية",
      icon: Square,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      emoji: "🟩",
      route: "/cutting-pasting-tools/adhesive-foam"
    },
    {
      id: 14,
      name: "فوم جليتر",
      englishName: "Glitter Foam",
      description: "فوم جليتر لامع للديكور",
      icon: Sparkles,
      color: "bg-gradient-to-br from-violet-500 to-violet-600",
      textColor: "text-violet-600",
      bgColor: "bg-violet-50",
      emoji: "✨",
      route: "/cutting-pasting-tools/glitter-foam"
    },
    {
      id: 15,
      name: "فوم جليتر لاصق",
      englishName: "Adhesive Glitter Foam",
      description: "فوم جليتر لاصق للأعمال الفنية",
      icon: Sparkles,
      color: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
      textColor: "text-fuchsia-600",
      bgColor: "bg-fuchsia-50",
      emoji: "💫",
      route: "/cutting-pasting-tools/adhesive-glitter-foam"
    },
    {
      id: 16,
      name: "سكتش كانسون",
      englishName: "Canson Sketch",
      description: "دفاتر سكتش كانسون للرسم",
      icon: FileText,
      color: "bg-gradient-to-br from-stone-500 to-stone-600",
      textColor: "text-stone-600",
      bgColor: "bg-stone-50",
      emoji: "📝",
      route: "/cutting-pasting-tools/canson-sketch"
    },
    {
      id: 17,
      name: "سكتش كبير",
      englishName: "Large Sketch",
      description: "دفاتر سكتش بحجم كبير",
      icon: FileText,
      color: "bg-gradient-to-br from-neutral-500 to-neutral-600",
      textColor: "text-neutral-600",
      bgColor: "bg-neutral-50",
      emoji: "📖",
      route: "/cutting-pasting-tools/large-sketch"
    },
    {
      id: 18,
      name: "سكتش صغير",
      englishName: "Small Sketch",
      description: "دفاتر سكتش بحجم صغير",
      icon: Circle,
      color: "bg-gradient-to-br from-zinc-500 to-zinc-600",
      textColor: "text-zinc-600",
      bgColor: "bg-zinc-50",
      emoji: "📔",
      route: "/cutting-pasting-tools/small-sketch"
    }
  ];

  useEffect(() => {
    document.title = "أدوات القص واللصق والتلوين | تفانين";
    const desc = "اكتشف مجموعة واسعة من أدوات القص واللصق والتلوين والمستلزمات الفنية من تفانين.";
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
          <span className="text-foreground">أدوات القص واللصق والتلوين</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أدوات القص واللصق والتلوين</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من أدوات القص واللصق والتلوين والمستلزمات الفنية
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
        
        {/* Back to Categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/categories">العودة إلى جميع الفئات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CuttingPastingToolsPage;
