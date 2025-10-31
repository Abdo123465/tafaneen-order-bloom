import { useEffect } from "react";
import { Categories as CategoriesSection } from "@/components/Categories";

const CategoriesPage = () => {
  useEffect(() => {
    document.title = "جميع الفئات | تفانين";
    const desc = "استعرض جميع فئات الأدوات المكتبية والقرطاسية في تفانين.";
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
      <main>
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">جميع الفئات</h1>
          <p className="text-muted-foreground mb-8">اختر الفئة المناسبة لاستكشاف المنتجات.</p>
        </section>
        <CategoriesSection />
      </main>
    </div>
  );
};

export default CategoriesPage;
