// src/pages/KashakilDabousA4_100PagesPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { Link } from "react-router-dom";

const KashakilDabousA4_100PagesPage = () => {
  useEffect(() => {
    document.title = "كشاكيل دبوس A4 - 100 ورقة | تفانين";
    const desc = "تصفح مجموعة كشاكيل الدبوس بحجم A4 - 100 ورقة";
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
              <Link to="/notebooks/kashakil-dabous-a4" className="hover:text-primary">كشاكيل دبوس A4</Link>
              <span className="mx-2">/</span>
              <span>100 ورقة</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل دبوس A4 - 100 ورقة</h1>
            <p className="text-muted-foreground mb-8">كشاكيل دبوس عالية الجودة بحجم A4 مكونة من 100 ورقة</p>
          </div>

          <ProductGrid 
            categoryFilter="kashakil-dabous-a4-100"
            showFilters={true}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KashakilDabousA4_100PagesPage;
