// src/pages/Kashakil100SmallSquaresCategoryPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Grid3X3 } from "lucide-react";

const Kashakil100SmallSquaresCategoryPage = () => {
  useEffect(() => {
    document.title = "كشاكيل 100 ورقة مربعات صغيرة | تفانين";
    const desc = "اختر كشكول مربعات صغيرة 100 ورقة المناسب لك من مجموعة متنوعة من الأنواع.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const notebookTypes = [
    {
      id: 1,
      name: "كراسات عادية",
      description: "كشاكيل مربعات صغيرة 100 ورقة بأغلفة بسيطة وأسعار اقتصادية",
      icon: Grid3X3,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      link: "/notebooks/kashakil/100-pages/small-squares/normal"
    },
    {
      id: 2,
      name: "كراسات ديزني",
      description: "كشاكيل مربعات صغيرة 100 ورقة بتصاميم ديزني المحببة للأطفال",
      icon: Grid3X3,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      link: "/notebooks/kashakil/100-pages/small-squares/disney"
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
              <Link to="/notebooks/kashakil" className="hover:text-primary">كشاكيل</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks/kashakil/100-pages" className="hover:text-primary">100 ورقة</Link>
              <span className="mx-2">/</span>
              <span>كراسة مربعات صغيرة</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل 100 ورقة مربعات صغيرة</h1>
            <p className="text-muted-foreground mb-8">اختر نوع الكشكول المناسب لاحتياجاتك من مجموعة متنوعة من الأنواع.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notebookTypes.map((notebook) => {
              const IconComponent = notebook.icon;
              return (
                <Card key={notebook.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${notebook.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h3 className="text-lg font-bold">{notebook.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {notebook.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className={`w-full ${notebook.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                        asChild
                      >
                        <Link to={notebook.link}>
                          عرض المنتجات
                        </Link>
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

export default Kashakil100SmallSquaresCategoryPage;
