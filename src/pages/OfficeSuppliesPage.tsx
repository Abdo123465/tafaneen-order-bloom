import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Paperclip, Stamp, Pin } from "lucide-react";

const OfficeSuppliesCategories = () => {
  const categories = [
    {
      id: 1,
      name: "دباسات وخرامات",
      englishName: "Staplers & Hole Punchers",
      description: "دباسات وخرامات بأحجام وأنواع مختلفة للمكتب والمدرسة",
      icon: Paperclip,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      count: "150+ منتج",
      path: "/office-supplies/stapler"
    },
    {
      id: 2,
      name: "مشابك ودبابيس",
      englishName: "Paper Clips & Push Pins",
      description: "مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية",
      icon: Pin,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      count: "200+ منتج",
      path: "/office-supplies/paper-clips"
    },
    {
      id: 3,
      name: "أختام وأدوات مكتبية",
      englishName: "Stamps & Office Tools",
      description: "أختام وختامات وأدوات مكتبية متنوعة للاستخدام اليومي",
      icon: Stamp,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      count: "150+ منتج",
      path: "/office-supplies/stamps"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon;
        
        return (
          <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <IconComponent className="h-12 w-12 mb-4" />
                  <div className="text-sm opacity-90 mb-1">{category.count}</div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <Link 
                  to={category.path}
                  className={`block w-full text-center ${category.textColor} border border-current hover:bg-current hover:text-white transition-colors py-2 px-4 rounded-md`}
                >
                  تصفح المنتجات
                </Link>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default function OfficeSuppliesPage() {
  useEffect(() => {
    document.title = "مستلزمات المكتب | تفانين";
    const desc = "اكتشف مجموعة واسعة من مستلزمات المكتب والأدوات الإدارية عالية الجودة من تفانين.";
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
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مستلزمات المكتب</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف مجموعة واسعة من مستلزمات المكتب والأدوات الإدارية عالية الجودة
          </p>
        </div>

        <OfficeSuppliesCategories />
      </main>
      <Footer />
    </div>
  );
}
