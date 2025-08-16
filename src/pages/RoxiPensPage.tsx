import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RoxiClassicblueImage from "@/assets/Roxi-Classic-blue.jpg";

const roxiPens = [
  { 
    id: 'Roxi-Classic-blue', 
    name: 'قلم جاف روكسي كلاسيك', 
    price: 7, 
    image: RoxiClassicblueImage, 
    description: 'قلم جاف Roxi Classic باللون الأزرق، كتابة سلسة وجودة عالية' 

];

const RoxiPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام Roxi | تفانين";
    const desc = "تسوق أقلام Roxi وRoxi Classic حبر جاف بألوان متنوعة وجودة عالية من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
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
          <Link to="/pens/ballpoint" className="hover:text-primary">أقلام الجاف</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام Roxi</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام Roxi</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام Roxi وRoxi Classic حبر جاف بألوان متنوعة وجودة عالية للكتابة السلسة والمريحة
          </p>
        </div>

        {/* Featured Roxi Classic Section */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-purple-600">
            ⭐ أقلام Roxi Classic المميزة
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roxiPens.slice(0, 3).map((pen) => (
              <div key={pen.id} className="card-product border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
                <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden relative">
                  <img 
                    src={pen.image} 
                    alt={pen.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Classic
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">{pen.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold text-lg">{pen.price} ج.م</span>
                  <Button 
                    className="btn-tafaneen bg-purple-600 hover:bg-purple-700"
                    onClick={() => addItem({ id: pen.id, name: pen.name, price: pen.price, image: pen.image })}
                  >
                    إضافة للسلة
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام Roxi
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roxiPens.slice(3).map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                <img 
                  src={pen.image} 
                  alt={pen.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pen.id, name: pen.name, price: pen.price, image: pen.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to ballpoint pens */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/ballpoint">العودة إلى أقلام الجاف</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoxiPensPage;
