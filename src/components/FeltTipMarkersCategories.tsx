import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Crown } from "lucide-react";

export function FeltTipMarkersCategories() {
  const categories = [
    {
      id: 1,
      name: "أقلام فلوماستر دومز",
      description: "أقلام فلوماستر عالية الجودة من علامة دومز التجارية",
      icon: Star,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      count: "100+ منتج",
      path: "/cutting-pasting-tools/felt-tip-markers/doms"
    },
    {
      id: 2,
      name: "أقلام فلوماستر بريما",
      description: "أقلام فلوماستر مميزة من علامة بريما التجارية",
      icon: Crown,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      count: "150+ منتج",
      path: "/cutting-pasting-tools/felt-tip-markers/prima"
    }
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((category) => {
          const IconComponent = category.icon;
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
                    <Link to={category.path}>تصفح المنتجات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
          <Link to="/cutting-pasting-tools">العودة إلى أدوات القص واللصق والتلوين</Link>
        </Button>
      </div>
    </section>
  );
}
