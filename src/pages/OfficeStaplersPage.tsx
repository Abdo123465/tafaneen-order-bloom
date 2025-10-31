// src/pages/OfficeStaplersPage.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

const officeStaplersProducts = [
  { 
    id: 'stapler-1', 
    name: 'دباسة مكتبية صغيرة', 
    price: 25, 
    image: '/assets/stapler-1.jpg', 
    description: 'دباسة مكتبية صغيرة الحجم مثالية للاستخدام اليومي',
    brand: 'بريما',
    size: 'صغير',
    capacity: '10 أوراق'
  },
  { 
    id: 'stapler-2', 
    name: 'دباسة مكتبية متوسطة', 
    price: 45, 
    image: '/assets/stapler-2.jpg', 
    description: 'دباسة مكتبية متوسطة الحجم مناسبة للاستخدام المكتبي المكثف',
    brand: 'ديلي',
    size: 'متوسط',
    capacity: '25 ورقة'
  },
  { 
    id: 'stapler-3', 
    name: 'دباسة مكتبية كبيرة', 
    price: 75, 
    image: '/assets/stapler-3.jpg', 
    description: 'دباسة مكتبية كبيرة الحجم مثالية للمكاتب والشركات',
    brand: 'برافو',
    size: 'كبير',
    capacity: '50 ورقة'
  },
  { 
    id: 'stapler-4', 
    name: 'دباسة مكتبية احترافية', 
    price: 120, 
    image: '/assets/stapler-4.jpg', 
    description: 'دباسة مكتبية احترافية متينة للاستخدام المكثف',
    brand: 'نوفي',
    size: 'احترافي',
    capacity: '100 ورقة'
  },
  { 
    id: 'stapler-5', 
    name: 'دباسة مكتبية مكتبي', 
    price: 55, 
    image: '/assets/stapler-5.jpg', 
    description: 'دباسة مكتبية مكتبي أنيقة ومتينة',
    brand: 'بريمو',
    size: 'مكتبي',
    capacity: '30 ورقة'
  },
  { 
    id: 'stapler-6', 
    name: 'دباسة مكتبية قوية', 
    price: 90, 
    image: '/assets/stapler-6.jpg', 
    description: 'دباسة مكتبية قوية متينة للاستخدام الصناعي',
    brand: 'ماستر',
    size: 'قوي',
    capacity: '70 ورقة'
  },
];

const OfficeStaplersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "دباسات مكتبية | تفانين";
    const desc = "تسوق دباسات مكتبية بأحجام مختلفة - صغيرة، متوسطة، كبيرة. دباسات مكتبية عالية الجودة من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">المستلزمات المكتبية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">دباسات مكتبية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">دباسات مكتبية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دباسات بأحجام مختلفة للاستخدام المكتبي
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
            <div className="text-4xl mb-4">📏</div>
            <h3 className="font-bold mb-2 text-gray-700">أحجام متنوعة</h3>
            <p className="text-sm text-gray-600">متوفر بأحجام صغيرة، متوسطة، وكبيرة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-bold mb-2 text-blue-700">متانة عالية</h3>
            <p className="text-sm text-blue-600">مصنوعة من مواد عالية الجودة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="font-bold mb-2 text-green-700">مناسبة للمكاتب</h3>
            <p className="text-sm text-green-600">مثالية للاستخدام اليومي والمكثف</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Package className="inline-block mr-3 mb-1" />
          جميع منتجات الدباسات المكتبية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeStaplersProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📎
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {product.brand}
                  </div>
                  
                  {/* Size Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {product.size}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">السعة: <span className="font-medium text-foreground">{product.capacity}</span></span>
                    <span className="text-muted-foreground">الحجم: <span className="font-bold text-primary">{product.size}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{product.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: product.id, 
                        name: product.name, 
                        price: product.price, 
                        image: product.image 
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
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto ml-4">
            <Link to="/office-supplies">العودة إلى المستلزمات المكتبية</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/">العودة إلى الرئيسية</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default OfficeStaplersPage;
