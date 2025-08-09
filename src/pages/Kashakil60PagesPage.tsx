import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Grid3X3, Languages, AlignLeft } from "lucide-react";

const Kashakil60PagesPage = () => {
  useEffect(() => {
    document.title = "كشاكيل 60 ورقة | تفانين";
    const desc = "تصفح مجموعة كشاكيل 60 ورقة بأنواع مختلفة.";
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
      name: "كراسة عربي",
      description: "كشكول مخطط للكتابة العربية",
      icon: Languages,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "كراسة 9 اسطر",
      description: "كشكول بـ 9 أسطر في الصفحة",
      icon: AlignLeft,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600"
    },
    {
      id: 3,
      name: "كراسة مربعات كبيرة",
      description: "كشكول بمربعات كبيرة للرسم والحساب",
      icon: Grid3X3,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      name: "كراسة مربعات صغيرة",
      description: "كشكول بمربعات صغيرة للكتابة الدقيقة",
      icon: Grid3X3,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600"
    },
    {
      id: 5,
      name: "كراسة انجليزي",
      description: "كشكول مخطط للكتابة الإنجليزية",
      icon: Languages,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600"
    },
    {
      id: 6,
      name: "كراسة صفحة و صفحة",
      description: "كشكول بتصميم صفحة وصفحة",
      icon: FileText,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600"
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
              <span>60 ورقة</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل 60 ورقة</h1>
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
                      >
                        إضافة للسلة
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

export default Kashakil60PagesPage;
