import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FolderOpen, 
  FileText, 
  Archive,
  ArrowRight
} from "lucide-react";

function FilesOrganizersPage() {
  const categories = [
    {
      id: 1,
      name: "حافظة كبسولة",
      englishName: "Capsule Folder",
      description: "حافظات كبسولة عملية لتنظيم الأوراق والمستندات",
      icon: FolderOpen,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      emoji: "📁",
      route: "/files-organizers/capsule-folder"
    },
    {
      id: 2,
      name: "حافظة مسطرة",
      englishName: "Ruler Folder",
      description: "حافظات مسطرة مثالية للطلاب والمكاتب",
      icon: FileText,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      emoji: "📋",
      route: "/files-organizers/ruler-folder"
    },
    {
      id: 3,
      name: "حافظة ساسكو",
      englishName: "Sasco Folder",
      description: "حافظات ساسكو عالية الجودة للاستخدام المهني",
      icon: Archive,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      emoji: "🗂️",
      route: "/files-organizers/sasco-folder"
    },
    {
      id: 4,
      name: "هولدر",
      englishName: "Holder",
      description: "هولدرات متنوعة لحفظ وتنظيم الملفات",
      icon: FolderOpen,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      emoji: "📂",
      route: "/files-organizers/holder"
    },
    {
      id: 5,
      name: "حافظة سوستة",
      englishName: "Zipper Folder",
      description: "حافظات بسوستة لحماية إضافية للمستندات المهمة",
      icon: Archive,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      emoji: "🗃️",
      route: "/files-organizers/zipper-folder"
    }
  ];

  useEffect(() => {
    document.title = "منظمات الملفات | تفانين";
    const desc = "اكتشف مجموعة واسعة من منظمات الملفات عالية الجودة من تفانين.";
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
          <span className="text-foreground">منظمات الملفات</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🗂️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">منظمات الملفات</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من منظمات الملفات عالية الجودة
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

export default FilesOrganizersPage;
