import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Stamp } from "lucide-react";
import { Link } from "react-router-dom";

export default function StampsPage() {
  useEffect(() => {
    document.title = "ختامة و حبر ختامة | تفانين";
    const desc = "تصفح مجموعتنا من الأختام المكتبية وأحبار الختامات عالية الجودة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const categories = [
    {
      id: 1,
      name: "أختام",
      description: "أختام مكتبية بأشكال وأحجام متنوعة",
      emoji: "✒️",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      path: "/office-supplies/office-stamps"
    },
    {
      id: 2,
      name: "حبر ختامة",
      description: "أحبار ختامات عالية الجودة بألوان متعددة",
      emoji: "💧",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      textColor: "text-white",
      path: "/office-supplies/stamps/ink-pads"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">ختامة و حبر ختامة</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            ختامة و حبر ختامة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعتنا المتنوعة من الأختام وأحبار الختامات لتلبية جميع احتياجاتك المكتبية.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className={`${category.color} ${category.textColor} p-8`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{category.emoji}</div>
                  <Stamp className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <CardTitle className="text-2xl mb-3">{category.name}</CardTitle>
                  <p className="text-sm opacity-90 leading-relaxed">{category.description}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Button asChild className="w-full">
                  <Link to={category.path}>
                    تصفح المنتجات
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/office-supplies">العودة إلى مستلزمات المكتب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
