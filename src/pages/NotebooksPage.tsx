import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Clipboard } from "lucide-react";

const NotebooksPage = () => {
  useEffect(() => {
    document.title = "كشكيل و الكراسات و كشاكيل | تفانين";
    const desc = "تصفح مجموعة واسعة من الكراسات والكشاكيل بأنواع وأحجام مختلفة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const subcategories = [
    {
      id: 1,
      name: "كشاكيل و كراسات",
      description: "تصفح جميع أنواع الكراسات والكشاكيل",
      icon: BookOpen,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      path: "/notebooks/main-category"
    },
    {
      id: 2,
      name: "كشاكيل سلك A4",
      description: "كشاكيل سلك بحجم A4 بأحجام مختلفة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      path: "/notebooks/kashakil-silk-a4",
      count: "4 أحجام متاحة"
    },
    {
      id: 3,
      name: "كشاكيل سلك A5",
      description: "كشاكيل سلك بحجم A5 بأحجام مختلفة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      textColor: "text-cyan-600",
      path: "/notebooks/kashakil-silk-a5",
      count: "5 أحجام متاحة"
    },
    {
      id: 4,
      name: "كشاكيل دبوس A4",
      description: "كشاكيل دبوس بحجم A4 بأعداد ورق مختلفة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      path: "/notebooks/kashakil-dabous-a4",
      count: "4 أنواع متاحة"
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
              <span>كشكيل و الكراسات و كشاكيل</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشكيل و الكراسات و كشاكيل</h1>
            <p className="text-muted-foreground mb-8">اختر من مجموعة واسعة من الكراسات والكشاكيل بأنواع وأحجام مختلفة لتلبية جميع احتياجاتك الدراسية والمكتبية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories.map((subcategory) => {
              const IconComponent = subcategory.icon;
              return (
                <Card key={subcategory.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${subcategory.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        {subcategory.count && <div className="text-sm opacity-90 mb-1">{subcategory.count}</div>}
                        <h3 className="text-xl font-bold">{subcategory.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {subcategory.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className={`w-full ${subcategory.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={subcategory.path}>تصفح المنتجات</Link>
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

export default NotebooksPage;
