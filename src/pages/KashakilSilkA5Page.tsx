import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clipboard } from "lucide-react";

const KashakilSilkA5Page = () => {
  useEffect(() => {
    document.title = "كشاكيل سلك A5 | تفانين";
    const desc = "اختر حجم كشكول السلك A5 المناسب لاحتياجاتك.";
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
      name: "كشاكيل سلك 60",
      description: "كشكول سلك بحجم A5 - 60 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      path: "/notebooks/kashakil-silk-a5/60-pages"
    },
    {
      id: 2,
      name: "كشاكيل سلك 80",
      description: "كشكول سلك بحجم A5 - 80 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      path: "/notebooks/kashakil-silk-a5/80-pages"
    },
    {
      id: 3,
      name: "كشاكيل سلك 100-140",
      description: "كشكول سلك بحجم A5 - 100-140 ورقة",
      icon: Clipboard,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-emerald-600",
      path: "/notebooks/kashakil-silk-a5/100-pages"
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
              <span>كشاكيل سلك A5</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل سلك A5</h1>
            <p className="text-muted-foreground mb-8">اختر حجم كشكول السلك A5 المناسب لاحتياجاتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageCounts.map((pageCount) => {
              const IconComponent = pageCount.icon;
              return (
                <Link to={pageCount.path} key={pageCount.id} className="group block">
                  <Card className="group-hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-1 border-0 overflow-hidden h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className={`${pageCount.color} p-6 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                        <div className="relative z-10">
                          <IconComponent className="h-12 w-12 mb-4" />
                          <h3 className="text-lg font-bold">{pageCount.name}</h3>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                          {pageCount.description}
                        </p>
                        <div className={`text-center font-bold ${pageCount.textColor}`}>
                          عرض المنتجات
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KashakilSilkA5Page;
