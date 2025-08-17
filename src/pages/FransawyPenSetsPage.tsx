import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// استورد الصور هنا (ستحتاج لإضافتها في مجلد assets)
// import penSet3ColorsImage from "@/assets/fransawy-pen-set-3-colors.jpg";
// import penSet5ColorsImage from "@/assets/fransawy-pen-set-5-colors.jpg";
// import penSetOfficeImage from "@/assets/fransawy-pen-set-office.jpg";
// import penSetStudentImage from "@/assets/fransawy-pen-set-student.jpg";
// import penSetPremiumImage from "@/assets/fransawy-pen-set-premium.jpg";
// import penSetGiftImage from "@/assets/fransawy-pen-set-gift.jpg";

const fransawyPenSets = [
  // بمجرد إضافة الصور، استبدل الرموز التعبيرية بالصور الحقيقية
  { id: 'fransawy-set-3-colors', name: 'طقم أقلام فرنساوي 3 ألوان', price: 12, image: '📝', description: 'طقم يحتوي على 3 أقلام فرنساوي (أسود، أزرق، أحمر) بجودة عالية' },
  { id: 'fransawy-set-5-colors', name: 'طقم أقلام فرنساوي 5 ألوان', price: 20, image: '🌈', description: 'طقم يحتوي على 5 أقلام فرنساوي بألوان متنوعة للاستخدام المتعدد' },
  { id: 'fransawy-office-set', name: 'طقم أقلام فرنساوي مكتبي', price: 35, image: '💼', description: 'طقم مكتبي فاخر يحتوي على أقلام فرنساوي متنوعة للاستخدام المهني' },
  { id: 'fransawy-student-set', name: 'طقم أقلام فرنساوي للطلاب', price: 15, image: '🎓', description: 'طقم مثالي للطلاب يحتوي على أقلام فرنساوي بألوان مختلفة' },
  { id: 'fransawy-premium-set', name: 'طقم أقلام فرنساوي بريميوم', price: 50, image: '✨', description: 'طقم فاخر من أقلام فرنساوي عالية الجودة في علبة أنيقة' },
  { id: 'fransawy-gift-set', name: 'طقم أقلام فرنساوي هدية', price: 40, image: '🎁', description: 'طقم أقلام فرنساوي في علبة هدايا فاخرة مثالي للإهداء' },
];

const FransawyPenSetsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "طقم أقلام فرنساوي | تفانين";
    const desc = "تسوق طقم أقلام فرنساوي عالية الجودة بألوان متنوعة ومناسبة للإهداء من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    (meta as HTMLMetaElement).setAttribute('content', desc);
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
          <Link to="/pens/fransawy" className="hover:text-primary">أقلام فرنساوي</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">طقم أقلام فرنساوي</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">طقم أقلام فرنساوي</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أطقم أقلام فرنساوي عالية الجودة بألوان متنوعة ومناسبة للإهداء والاستخدام المهني والطلابي
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fransawyPenSets.map((penSet) => (
            <div key={penSet.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {typeof penSet.image === 'string' && penSet.image.includes('.') ? (
                  <img 
                    src={penSet.image} 
                    alt={penSet.name} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  penSet.image
                )}
              </div>
              <h3 className="font-semibold mb-2">{penSet.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{penSet.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{penSet.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: penSet.id, name: penSet.name, price: penSet.price, image: penSet.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/fransawy">العودة إلى أقلام فرنساوي</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FransawyPenSetsPage;
