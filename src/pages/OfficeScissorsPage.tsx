// src/pages/OfficeScissorsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Star, Award, Briefcase, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OfficeScissorsPage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "مقاصات مكتبية | تفانين";
    const desc = "اشترِ مقاصات مكتبية احترافية بأفضل الأسعار. مقاصات عالية الجودة للاستخدام المكتبي والتجاري من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: "/placeholder.svg",
      category: "مقاصات مكتبية"
    });
    
    toast({
      title: "تم إضافة المنتج",
      description: `تم إضافة ${product.name} إلى سلة التسوق`,
      duration: 2000,
    });
  };

  const products = [
    {
      id: "office-scissors-1",
      name: "مقص مكتبي احترافي - ستانلس ستيل",
      price: 25.00,
      originalPrice: 30.00,
      brand: "بروفيشنال",
      description: "مقص مكتبي احترافي من الستانلس ستيل عالي الجودة مع مقبض مريح",
      features: ["ستانلس ستيل", "نصل حاد", "مقبض مريح", "تصميم احترافي"],
      inStock: true,
      rating: 4.8,
      reviews: 245
    },
    {
      id: "office-scissors-2", 
      name: "مقص مكتبي كبير - 8 بوصة",
      price: 35.00,
      originalPrice: 42.00,
      brand: "أوفيس ماستر",
      description: "مقص مكتبي كبير بطول 8 بوصات مثالي لقص الأوراق الكبيرة والمواد المختلفة",
      features: ["8 بوصات", "قبضة مطاطية", "نصل مقوى", "متعدد الاستخدامات"],
      inStock: true,
      rating: 4.6,
      reviews: 178
    },
    {
      id: "office-scissors-3",
      name: "مجموعة مقاصات مكتبية (2 قطعة)",
      price: 45.00,
      originalPrice: 60.00,
      brand: "إكسكيوتيف",
      description: "مجموعة من مقصين مكتبيين بأحجام مختلفة للاستخدام المتنوع في المكتب",
      features: ["حجمين مختلفين", "تصميم أنيق", "جودة ممتازة", "حافظة مجانية"],
      inStock: true,
      rating: 4.9,
      reviews: 312,
      isSet: true
    },
    {
      id: "office-scissors-4",
      name: "مقص مكتبي تيتانيوم مطلي",
      price: 55.00,
      originalPrice: 65.00,
      brand: "تيتان",
      description: "مقص مكتبي مطلي بالتيتانيوم مقاوم للصدأ وسهل التنظيف",
      features: ["مطلي بالتيتانيوم", "مقاوم للصدأ", "سهل التنظيف", "عمر افتراضي طويل"],
      inStock: true,
      rating: 4.7,
      reviews: 189
    },
    {
      id: "office-scissors-5",
      name: "مقص مكتبي مع حامل مكتبي",
      price: 40.00,
      originalPrice: 50.00,
      brand: "ديسك أورجنايزر",
      description: "مقص مكتبي مع حامل مكتبي أنيق للتنظيم والوصول السريع",
      features: ["حامل مكتبي", "تصميم عصري", "سهولة الوصول", "توفير المساحة"],
      inStock: true,
      rating: 4.5,
      reviews: 156
    },
    {
      id: "office-scissors-6",
      name: "مقص مكتبي كهربائي",
      price: 120.00,
      originalPrice: 150.00,
      brand: "إلكترو كت",
      description: "مقص مكتبي كهربائي للاستخدام الكثيف والقص السريع والدقيق",
      features: ["كهربائي", "قص دقيق", "سرعة عالية", "للاستخدام الكثيف"],
      inStock: true,
      rating: 4.8,
      reviews: 98,
      isPremium: true
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/scissors" className="hover:text-primary">المقاصات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مقاصات مكتبية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏢</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">مقاصات مكتبية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مقاصات احترافية للاستخدام المكتبي والتجاري بأعلى معايير الجودة
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-4 bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
            <Award className="h-8 w-8 mx-auto mb-3 text-slate-600" />
            <h3 className="font-bold text-sm text-slate-700">جودة احترافية</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <Briefcase className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold text-sm text-blue-700">للاستخدام المكتبي</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <Scissors className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <h3 className="font-bold text-sm text-green-700">تصميم مريح</h3>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <Star className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font
