import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const KrassatPage = () => {
  useEffect(() => {
    document.title = "كراسات | تفانين";
    const desc = "اختر حجم الكراسة المناسب - 28 أو 40 ورقة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const pageCounts = [
    {
      id: 1,
      name: "28 ورقة",
      description: "كراسات بحجم 28 ورقة - مناسبة للاستخدام اليومي",
      icon: FileText,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      path: "/notebooks/krassat/28-pages",
      count: "10 أنواع"
    },
    {
      id: 2,
      name: "40 ورقة",
      description: "كراسات بحجم 40 ورقة - مناسبة للمشاريع الطويلة",
      icon: FileText,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-emerald-600",
      path: "/notebooks/krassat/40-pages",
      count: "10 أنواع"
    }
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
              <Link to="/notebooks/main-category" className="hover:text-primary">كشاكيل و كراسات</Link>
              <span className="mx-2">/</span>
              <span>كراسات</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كراسات</h1>
            <p className="text-muted-foreground mb-8">اختر حجم الكراسة المناسب لاحتياجاتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageCounts.map((pageCount) => {
              const IconComponent = pageCount.icon;
              return (
                <Card key={pageCount.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${pageCount.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <div className="text-sm opacity-90 mb-1">{pageCount.count}</div>
                        <h3 className="text-xl font-bold">{pageCount.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {pageCount.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className={`w-full ${pageCount.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={pageCount.path}>تصفح المنتجات</Link>
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

export default KrassatPage;
