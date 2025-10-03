import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Pin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaperClipsPage() {
  useEffect(() => {
    document.title = "مشابك ودبابيس | تفانين";
    const desc = "تسوق مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  const subcategories = [
    {
      id: 1,
      name: "مشابك الأوراق",
      description: "مشابك معدنية وبلاستيكية بأحجام مختلفة",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      path: "/office-supplies/clips"
    },
    {
      id: 2,
      name: "دبابيس الكبس",
      description: "دبابيس كبس للتثبيت والتنظيم",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      path: "/office-supplies/push-pins"
    },
    {
      id: 3,
      name: "دبابيس التدبيس",
      description: "دبابيس للدباسات بأحجام مختلفة",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      path: "/office-supplies/staple-pins"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مشابك ودبابيس</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مشابك ودبابيس</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مشابك الأوراق ودبابيس الكبس والتثبيت المكتبية
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {subcategories.map((subcategory) => (
            <Card key={subcategory.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
              <Link to={subcategory.path} className="block hover:no-underline h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`${subcategory.color} w-full p-8 rounded-lg mb-4 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <Pin className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{subcategory.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {subcategory.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary mt-auto">
                    <span>تصفح المنتجات</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Back to Office Supplies */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة إلى مستلزمات المكتب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
