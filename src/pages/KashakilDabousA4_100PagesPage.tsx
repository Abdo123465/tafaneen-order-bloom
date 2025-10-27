import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const KashakilDabousA4_100PagesPage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "كشاكيل دبوس A4 - 100 ورقة | تفانين";
    const desc = "كشاكيل دبوس بحجم A4 - 100 ورقة بأنواع مختلفة";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const products = [
    {
      id: 1,
      name: "كشكول دبوس برافو 100 ق A4",
      price: 55,
      image: "/assets/kashakil-dabous-a4-100-arabic.jpg",
      type: "arabic",
      description: "كشكول دبوس بحجم A4 بسطور عربية - 100 ورقة"
    },
    {
      id: 2,
      name: "كشكول دبوس A4 إنجليزي - 100 ورقة",
      price: 55,
      image: "/assets/kashakil-dabous-a4-100-english.jpg",
      type: "english",
      description: "كشكول دبوس بحجم A4 بسطور إنجليزية - 100 ورقة"
    },

  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تم إضافة ${product.name} إلى سلة التسوق`,
    });
  };

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
              <Link to="/notebooks/main-category" className="hover:text-primary">كشاكيل و كراسات</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks/kashakil-dabous-a4" className="hover:text-primary">كشاكيل دبوس A4</Link>
              <span className="mx-2">/</span>
              <span>100-140 ورقة</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل دبوس A4 - 100 ورقة</h1>
            <p className="text-muted-foreground mb-8">
              مجموعة متنوعة من كشاكيل الدبوس بحجم A4 بـ 100 ورقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {product.price} جنيه
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-[3.5rem]">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price} جنيه
                      </span>
                      
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="gap-2"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        أضف للسلة
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KashakilDabousA4_100PagesPage;
