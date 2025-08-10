import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Paperclip, 
  Scissors, 
  Pin, 
  Stamp, 
  FileText, 
  SquareStack, 
  MapPin 
} from "lucide-react";

export default function OfficeSuppliesPage() {
  const categories = [
    {
      id: 1,
      name: "دباسة",
      description: "دباسات بأحجام وأنواع مختلفة",
      icon: Paperclip,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      count: "50+ منتج",
      path: "/office-supplies/stapler"
    },
    {
      id: 2,
      name: "خرامة",
      description: "خرامات للأوراق بأحجام مختلفة",
      icon: Scissors,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      count: "30+ منتج",
      path: "/office-supplies/hole-punch"
    },
    {
      id: 3,
      name: "دبابيس دباسة",
      description: "دبابيس للدباسات بأحجام مختلفة",
      icon: Pin,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      count: "40+ منتج",
      path: "/office-supplies/staple-pins"
    },
    {
      id: 4,
      name: "ختامة",
      description: "أختام وختامات مكتبية",
      icon: Stamp,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      count: "25+ منتج",
      path: "/office-supplies/stamps"
    },
    {
      id: 5,
      name: "مشبك ورق",
      description: "مشابك الأوراق المعدنية والبلاستيكية",
      icon: Paperclip,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      count: "60+ منتج",
      path: "/office-supplies/paper-clips"
    },
    {
      id: 6,
      name: "ورق صابون",
      description: "أوراق صابون للتنظيف",
      icon: SquareStack,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      count: "20+ منتج",
      path: "/office-supplies/soap-paper"
    },
    {
      id: 7,
      name: "دبوس كبس",
      description: "دبابيس الكبس والتثبيت",
      icon: MapPin,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      count: "35+ منتج",
      path: "/office-supplies/push-pins"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-primary transition-colors">
              الفئات
            </Link>
            <span>/</span>
            <span className="text-foreground">مستلزمات المكتب</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            مستلزمات المكتب
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            دباسة، خرامة، ممحاة وأدوات مكتبية أخرى
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <IconComponent className="h-12 w-12 mb-4" />
                      <div className="text-sm opacity-90 mb-1">{category.count}</div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                  <div className={`${category.bgColor} p-6`}>
                    <p className={`${category.textColor} mb-4 text-sm leading-relaxed`}>
                      {category.description}
                    </p>
                    <Link to={category.path}>
                      <Button
                        className={`w-full ${category.color} hover:opacity-90 text-white border-0 shadow-lg`}
                        size="lg"
                      >
                        تصفح المنتجات
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
