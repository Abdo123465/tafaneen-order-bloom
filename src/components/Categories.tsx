import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { PenTool, Scissors, Calculator, Palette, Archive, Briefcase } from "lucide-react";

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "أقلام ومستلزمات الكتابة",
      description: "أقلام حبر جاف، رصاص، ماركر وقلم رصاص ملون",
      icon: PenTool,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      count: "500+ منتج"
    },
    {
      id: 2,
      name: "أدوات القص واللصق",
      description: "مقصات، لاصق، شريط لاصق وأدوات تجليد",
      icon: Scissors,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      count: "200+ منتج"
    },
    {
      id: 3,
      name: "آلات حاسبة ومساطر",
      description: "آلات حاسبة، مساطر، بوصلة وأدوات هندسية",
      icon: Calculator,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      count: "150+ منتج"
    },
    {
      id: 4,
      name: "ألوان وأدوات الرسم",
      description: "ألوان خشبية، مائية، فرش رسم ولوحات",
      icon: Palette,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      count: "300+ منتج"
    },
    {
      id: 5,
      name: "ملفات ومنظمات",
      description: "ملفات، درج أوراق، منظمات مكتبية وأرشيف",
      icon: Archive,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      count: "250+ منتج"
    },
    {
      id: 6,
      name: "مستلزمات المكتب",
      description: "دباسة، خرامة، ممحاة وأدوات مكتبية أخرى",
      icon: Briefcase,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      count: "400+ منتج"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            فئات الأدوات المكتبية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من الأدوات المكتبية والقرطاسية عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const to = category.name.includes("أقلام") ? "/pens" : 
                      category.name.includes("أدوات القص واللصق") ? "/cutting-pasting-tools" : 
                      category.name.includes("ألوان") ? "/art-supplies" : "/categories";
            return (
              <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <IconComponent className="h-12 w-12 mb-4" />
                      <div className="text-sm opacity-90 mb-1">{category.count}</div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className={`w-full ${category.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                    >
                      <Link to={to}>تصفح المنتجات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-tafaneen text-lg px-8 py-4 h-auto">
            <Link to="/categories">عرض جميع الفئات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
