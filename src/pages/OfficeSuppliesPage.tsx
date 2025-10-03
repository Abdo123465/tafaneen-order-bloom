// src/pages/OfficeSuppliesPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

const officeCategories = [
  {
    id: "staplers",
    name: "الدباسات المكتبية",
    description: "دباسات بأحجام مختلفة للاستخدام المكتبي",
    icon: "📎",
    path: "/office-supplies/staplers",
  },
  {
    id: "hole-punch",
    name: "ثاقبات الورق",
    description: "ثاقبات بأحجام متنوعة لتنظيم الأوراق",
    icon: "🕳️",
    path: "/office-supplies/hole-punch",
  },
  {
    id: "staple-pins",
    name: "دبابيس الدباسة",
    description: "دبابيس بأحجام مختلفة لجميع أنواع الدباسات",
    icon: "📌",
    path: "/office-supplies/staple-pins",
  },
  {
    id: "stamps",
    name: "الأختام",
    description: "أختام حبر وأختام رقمية للعمل والمكتب",
    icon: "🏷️",
    path: "/office-supplies/stamps",
  },
  {
    id: "paper-clips",
    name: "مشابك الورق",
    description: "مشابك معدنية وبلاستيكية بتصاميم متنوعة",
    icon: "🖇️",
    path: "/office-supplies/paper-clips",
  },
  {
    id: "soap-paper",
    name: "ورق الصابون",
    description: "ورق صابون عالي الجودة للاستخدام اليومي",
    icon: "🧻",
    path: "/office-supplies/soap-paper",
  },
  {
    id: "push-pins",
    name: "دبابيس التثبيت",
    description: "دبابيس تثبيت ملونة للوحات الإعلانات واللوحات",
    icon: "📍",
    path: "/office-supplies/push-pins",
  },
];

const OfficeSuppliesPage = () => {
  useEffect(() => {
    document.title = "مستلزمات المكتب | تفانين";
    const desc = "تسوق مستلزمات مكتبية متنوعة عالية الجودة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
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
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مستلزمات المكتب</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="h-12 w-12 text-primary" />
            <div className="text-6xl">🏢</div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            مستلزمات المكتب
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاجه لمكتبك من دباسات، ثاقبات، وأدوات تنظيمية بجودة عالية
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeCategories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group block p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{category.icon}</div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/categories">العودة إلى الفئات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeSuppliesPage;
