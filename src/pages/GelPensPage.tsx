import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const gelPenCategories = [
  {
    id: 1,
    name: "أقلام جل ملونة",
    description: "أقلام جل ملونة للكتابة والإبداع",
    image: "🖊️",
    route: "/pens/gel/colored",
    count: "35+ منتج"
  },
  {
    id: 2,
    name: "أقلام جل متوهجة",
    description: "أقلام جل متوهجة للكتابة في الظلام",
    image: "✨",
    route: "/pens/gel/glitter",
    count: "20+ منتج"
  },
  {
    id: 3,
    name: "أقلام جل قابلة للمحو",
    description: "أقلام جل قابلة للمحو للتصحيح السهل",
    image: "🔄",
    route: "/pens/gel/erasable",
    count: "15+ منتج"
  }
];

const GelPensCategoryPage = () => {
  useEffect(() => {
    document.title = "أقلام الجل | تفانين";
    const desc = "تسوق أقلام الجل بأنواعها المختلفة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
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
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام الجل</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الجل</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            أقلام جل ناعمة الكتابة بألوان متنوعة وجودة عالية لتجربة كتابة ممتعة
          </p>
          
          {/* معلومات فابر كاستل */}
          <div className="bg-purple-50 rounded-xl p-6 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🇩🇪</span>
              <h2 className="text-2xl font-bold">فابر كاستل</h2>
            </div>
            <p className="text-lg mb-4">جودة ألمانية أصيلة منذ 1761 - اختيار المحترفين والفنانين حول العالم</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">علامة تجارية معتمدة</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">🇩🇪 صناعة ألمانية</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">جودة وتقنية متقدمة</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">🎨 للمحترفين</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">اختيار الفنانين والمصممين</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">✅ ضمان الجودة</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              فابر كاستل هي أقدم شركة مصنعة للأقلام في العالم، تأسست عام 1761 في ألمانيا. 
              تُعرف بجودتها العالية وابتكاراتها المستمرة في مجال أدوات الكتابة والرسم. 
              منتجات فابر كاستل هي الخيار الأول للفنانين والمصممين المحترفين حول العالم.
            </p>
            <div className="mt-4 font-bold text-purple-800">
              260+ عام من الخبرة | جودة عالمية معتمدة
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gelPenCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3">{category.image}</div>
                    <div className="text-sm opacity-90 mb-1">{category.count}</div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-center">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-center">
                    {category.description}
                  </p>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full text-purple-600 border-current hover:bg-current hover:text-white transition-colors"
                  >
                    <Link to={category.route}>تصفح المنتجات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GelPensCategoryPage;
