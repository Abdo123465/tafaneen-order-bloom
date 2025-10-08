// src/pages/KrassatPage.tsx
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
    const desc = "اختر حجم الكراسة المناسب - 28 أو 40 ورقة أو 9 أسطر.";
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
    },
    {
      id: 3,
      name: "9 أسطر",
      description: "كراسات إنجليزي 9 أسطر - مناسبة للكتابة الواضحة",
      icon: FileText,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      path: "/notebooks/krassat/28-pages/9-lines",
      count: "8 أنواع"
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
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسات</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">اختر حجم الكراسة المناسب لاحتياجاتك من مجموعتنا المتنوعة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pageCounts.map((pageCount) => {
              const IconComponent = pageCount.icon;
              return (
                <Card key={pageCount.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className={`${pageCount.color} p-8 text-white relative overflow-hidden flex-grow`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-16 w-16 mb-6" />
                        <div className="text-base opacity-90 mb-2">{pageCount.count}</div>
                        <h3 className="text-2xl font-bold">{pageCount.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                        {pageCount.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className={`w-full py-3 text-base font-medium ${pageCount.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={pageCount.path}>تصفح المنتجات</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* قسم كراسات مربعات كبيرة */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3">كراسات مربعات كبيرة</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">اختر نوع الكراسة المناسب - عادي أو ديزني بتصاميم مميزة</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 text-white relative overflow-hidden flex-grow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <FileText className="h-16 w-16 mb-6" />
                      <div className="text-base opacity-90 mb-2">5 أنواع</div>
                      <h3 className="text-2xl font-bold">مربعات كبيرة عادي</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      كراسات مربعات كبيرة عادية بألوان مختلفة، مناسبة للاستخدام اليومي في المدرسة والجامعة
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full py-3 text-base font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Link to="/notebooks/krassat/28-pages/normal">تصفح المنتجات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-8 text-white relative overflow-hidden flex-grow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <FileText className="h-16 w-16 mb-6" />
                      <div className="text-base opacity-90 mb-2">3 أنواع</div>
                      <h3 className="text-2xl font-bold">مربعات كبيرة ديزني</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      كراسات مربعات كبيرة ديزني بتصاميم مميزة، تحبب الأطفال في الدراسة وتجعل التعلم ممتعًا
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full py-3 text-base font-medium text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                    >
                      <Link to="/notebooks/krassat/28-pages/disney">تصفح المنتجات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KrassatPage;
