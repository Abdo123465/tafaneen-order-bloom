// src/pages/LargeDrawingNotebookPage.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const largeNotebooks = [
  { 
    id: 'large-sketch-1', 
    name: 'كراسة رسم مالك 16 ق كبير', 
    price: 17, 
    image: '/assets/large-sketch-1.jpg', 
    description: 'كراسة رسم بحجم 24.5X 34 بغلاف متين، ورق عالي الجودة 60 جرام، مثالية للرسم بالقلم الرصاص والأقلام الملونة',
    brand: 'مالك',
    pages: 12,
    size: '24.5X34',
    paperWeight: '60 جرام'
  },
  { 
    id: 'large-sketch-2', 
    name: 'كراسة رسم اولاد غريب ك 16 ق', 
    price: 20, 
    image: '/assets/large-sketch-2.jpg', 
    description: 'كراسة رسم بحجم 24.5X 34 بغلاف متين، ورق عالي الجودة 60 جرام، مثالية للرسم بالقلم الرصاص والأقلام الملونة',
    brand: 'اولاد غريب',
    pages: 16,
    size: '24.5X34',
    paperWeight: '60 جرام'
  },
 { 
    id: 'large-sketch-3', 
    name: 'كراسة رسم ك ديزني بركه', 
    price: 25, 
    image: '/assets/large-sketch-3.jpg', 
    description: 'كراسة رسم بحجم 24.5X 34 بغلاف متين، ورق عالي الجودة 60 جرام، مثالية للرسم بالقلم الرصاص والأقلام الملونة',
    brand: ' بركة',
    pages: 18,
    size: '24.5X34',
    paperWeight: '60 جرام'
  },
 
];

const LargeDrawingNotebookPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "كراسة رسم كبيرة | تفانين";
    const desc = "تسوق كراسات الرسم الكبيرة بأحجام مختلفة A3, A4 وأوراق عالية الجودة. كراسات رسم للفنانين والطلاب من تفانين.";
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
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">كراسة رسم كبيرة</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسة رسم كبيرة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كراسات رسم كبيرة الحجم بأوراق عالية الجودة لتحقيق أفضل النتائج الفنية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">📏</div>
            <h3 className="font-bold mb-2 text-blue-700">أحجام متنوعة</h3>
            <p className="text-sm text-blue-600">أحجام A3, A4 وأحجام مخصصة للإبداع الواسع</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-bold mb-2 text-green-700">ورق عالي الجودة</h3>
            <p className="text-sm text-green-600">أوراق بأوزان مختلفة من 100-180 جرام</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-purple-700">متعددة الاستخدام</h3>
            <p className="text-sm text-purple-600">مناسبة لجميع أنواع الرسم والتقنيات الفنية</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <FileText className="inline-block mr-3 mb-1" />
          جميع كراسات الرسم الكبيرة
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {largeNotebooks.map((notebook) => (
            <Card key={notebook.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={notebook.image} 
                    alt={notebook.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📖
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {notebook.brand}
                  </div>
                  
                  {/* Size Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {notebook.size}
                  </div>
                  
                  {/* Pages Badge */}
                  <div className="absolute bottom-3 right-3 bg-green-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                    {notebook.pages} ورقة
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{notebook.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{notebook.description}</p>
                  
                  {/* Product Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الماركة:</span>
                      <span className="font-medium text-foreground">{notebook.brand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الحجم:</span>
                      <span className="font-bold text-primary">{notebook.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">عدد الأوراق:</span>
                      <span className="font-medium text-foreground">{notebook.pages} ورقة</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">وزن الورق:</span>
                      <span className="font-medium text-foreground">{notebook.paperWeight}</span>
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{notebook.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: notebook.id, 
                        name: notebook.name, 
                        price: notebook.price, 
                        image: notebook.image 
                      })}
                    >
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LargeDrawingNotebookPage;
