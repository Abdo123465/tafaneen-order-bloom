import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Clipboard } from "lucide-react";

const NotebooksMainCategoryPage = () => {
  useEffect(() => {
    document.title = "كشاكيل و كراسات | تفانين";
    const desc = "اختر بين الكراسات والكشاكيل بأنواعها المختلفة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const types = [
    {
      id: 1,
      name: "كراسات",
      description: "كراسات بأحجام مختلفة 28 و 40 ورقة",
      icon: BookOpen,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      path: "/notebooks/krassat",
      count: "10 أنواع متاحة"
    },
    {
      id: 2,
      name: "كشاكيل",
      description: "كشاكيل بأحجام 60 و 80 و 100 ورقة",
      icon: FileText,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      path: "/notebooks/kashakil",
      count: "6 أنواع متاحة"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-8">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">الرئيسية</Link>
              <span className="mx-2">/</span>
              <Link to="/categories" className="hover:text-primary">الفئات</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks" className="hover:text-primary">كشكيل و الكراسات و كشاكيل</Link>
              <span className="mx-2">/</span>
              <span>كشاكيل و كراسات</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل و كراسات</h1>
            <p className="text-muted-foreground mb-8">اختر النوع المناسب من الكراسات أو الكشاكيل حسب احتياجاتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${type.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <div className="text-sm opacity-90 mb-1">{type.count}</div>
                        <h3 className="text-xl font-bold">{type.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {type.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className={`w-full ${type.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={type.path}>تصفح المنتجات</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotebooksMainCategoryPage;
