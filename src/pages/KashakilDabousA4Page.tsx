// src/pages/KashakilDabousA4Page.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clipboard } from "lucide-react";

const KashakilDabousA4Page = () => {
  useEffect(() => {
    document.title = "كشاكيل دبوس A4 | تفانين";
    const desc = "اختر حجم كشكول الدبوس A4 المناسب لاحتياجاتك.";
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
      name: "كشاكيل دبوس A4 60",
      description: "كشكول دبوس بحجم A4 - 60 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      path: "/notebooks/kashakil-dabous-a4/60-pages"
    },
    {
      id: 2,
      name: "كشاكيل دبوس A4 80",
      description: "كشكول دبوس بحجم A4 - 80 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      path: "/notebooks/kashakil-dabous-a4/80-pages"
    },
    {
      id: 3,
      name: "كشاكيل دبوس A4 100",
      description: "كشكول دبوس بحجم A4 - 100 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600",
      path: "/notebooks/kashakil-dabous-a4/100-pages"
    },
    {
      id: 4,
      name: "كشاكيل دبوس A4 200",
      description: "كشكول دبوس بحجم A4 - 200 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      textColor: "text-amber-600",
      path: "/notebooks/kashakil-dabous-a4/200-pages"
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
              <span>كشاكيل دبوس A4</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل دبوس A4</h1>
            <p className="text-muted-foreground mb-8">اختر حجم كشكول الدبوس A4 المناسب لاحتياجاتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageCounts.map((pageCount) => {
              const IconComponent = pageCount.icon;
              return (
                <Card key={pageCount.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${pageCount.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h3 className="text-lg font-bold">{pageCount.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {pageCount.description}
                      </p>
                      
                      <Link to={pageCount.path}>
                        <Button 
                          variant="outline" 
                          className={`w-full ${pageCount.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                        >
                          عرض المنتجات
                        </Button>
                      </Link>
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

export default KashakilDabousA4Page;
