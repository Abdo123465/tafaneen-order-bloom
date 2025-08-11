import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoriesPage from "./pages/CategoriesPage";
import PensPage from "./pages/PensPage";

import OffersPage from "./pages/OffersPage";
import PencilsPage from "./pages/PencilsPage";
import BallpointPensPage from "./pages/BallpointPensPage";
import GelPensPage from "./pages/GelPensPage";
import FountainPensPage from "./pages/FountainPensPage";
import MarkersPage from "./pages/MarkersPage";
import CalligraphyPensPage from "./pages/CalligraphyPensPage";
import CorrectionPensPage from "./pages/CorrectionPensPage";
import CuttingPastingPage from "./pages/CuttingPastingPage";
import WoodenPencilsPage from "./pages/WoodenPencilsPage";
import CuttingPastingToolsPage from "./pages/CuttingPastingToolsPage";
import CalculatorsRulersPage from "./pages/CalculatorsRulersPage";
import ScientificCalculatorPage from "./pages/ScientificCalculatorPage";
import CommercialCalculatorPage from "./pages/CommercialCalculatorPage";
import NotebooksPage from "./pages/NotebooksPage";
import NotebooksMainCategoryPage from "./pages/NotebooksMainCategoryPage";
import KrassatPage from "./pages/KrassatPage";
import KashakilPage from "./pages/KashakilPage";
import Krassat28PagesPage from "./pages/Krassat28PagesPage";
import Krassat40PagesPage from "./pages/Krassat40PagesPage";
import Kashakil60PagesPage from "./pages/Kashakil60PagesPage";
import Kashakil80PagesPage from "./pages/Kashakil80PagesPage";
import Kashakil100PagesPage from "./pages/Kashakil100PagesPage";
import KashakilSilkA4Page from "./pages/KashakilSilkA4Page";
import KashakilSilkA5Page from "./pages/KashakilSilkA5Page";
import OfficeSuppliesPage from "./pages/OfficeSuppliesPage";
import StaplerPage from "./pages/StaplerPage";
import HolePunchPage from "./pages/HolePunchPage";
import StaplePinsPage from "./pages/StaplePinsPage";
import StampsPage from "./pages/StampsPage";
import PaperClipsPage from "./pages/PaperClipsPage";
import SoapPaperPage from "./pages/SoapPaperPage";
import PushPinsPage from "./pages/PushPinsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/pens" element={<PensPage />} />
              <Route path="/pens/pencils" element={<PencilsPage />} />
              <Route path="/pens/ballpoint" element={<BallpointPensPage />} />
              <Route path="/pens/gel" element={<GelPensPage />} />
              <Route path="/pens/fountain" element={<FountainPensPage />} />
              <Route path="/pens/markers" element={<MarkersPage />} />
              <Route path="/pens/calligraphy" element={<CalligraphyPensPage />} />
              <Route path="/pens/correction" element={<CorrectionPensPage />} />

              <Route path="/cutting-pasting-tools" element={<CuttingPastingToolsPage />} />
              <Route path="/calculators-rulers" element={<CalculatorsRulersPage />} />
              <Route path="/calculators-rulers/scientific-calculator" element={<ScientificCalculatorPage />} />
              <Route path="/calculators-rulers/commercial-calculator" element={<CommercialCalculatorPage />} />
              <Route path="/cutting-pasting-tools/cutting-pasting" element={<CuttingPastingPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils" element={<WoodenPencilsPage />} />
              <Route path="/notebooks" element={<NotebooksPage />} />
              <Route path="/notebooks/main-category" element={<NotebooksMainCategoryPage />} />
              <Route path="/notebooks/krassat" element={<KrassatPage />} />
              <Route path="/notebooks/krassat/28-pages" element={<Krassat28PagesPage />} />
              <Route path="/notebooks/krassat/40-pages" element={<Krassat40PagesPage />} />
              <Route path="/notebooks/kashakil" element={<KashakilPage />} />
              <Route path="/notebooks/kashakil/60-pages" element={<Kashakil60PagesPage />} />
              <Route path="/notebooks/kashakil/80-pages" element={<Kashakil80PagesPage />} />
              <Route path="/notebooks/kashakil/100-pages" element={<Kashakil100PagesPage />} />
              <Route path="/notebooks/kashakil-silk-a4" element={<KashakilSilkA4Page />} />
              <Route path="/notebooks/kashakil-silk-a5" element={<KashakilSilkA5Page />} />
              <Route path="/office-supplies" element={<OfficeSuppliesPage />} />
              <Route path="/office-supplies/stapler" element={<StaplerPage />} />
              <Route path="/office-supplies/hole-punch" element={<HolePunchPage />} />
              <Route path="/office-supplies/staple-pins" element={<StaplePinsPage />} />
              <Route path="/office-supplies/stamps" element={<StampsPage />} />
              <Route path="/office-supplies/paper-clips" element={<PaperClipsPage />} />
              <Route path="/office-supplies/soap-paper" element={<SoapPaperPage />} />
              <Route path="/office-supplies/push-pins" element={<PushPinsPage />} />
              <Route path="/offers" element={<OffersPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
وهذا هو الكود لملف src/components/PenCategories.tsx بعد إرجاعه لحالته الأصلية:

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Pencil, 
  PenTool, 
  Brush, 
  Feather, 
  Highlighter, 
  Type,
  Eraser
} from "lucide-react";

export function PenCategories() {
  const penCategories = [
    {
      id: 1,
      name: "أقلام الرصاص",
      description: "أقلام رصاص بدرجات مختلفة HB, 2B, 4B وأقلام ميكانيكية",
      icon: Pencil,
      color: "bg-gradient-to-br from-gray-500 to-gray-600",
      textColor: "text-gray-600",
      bgColor: "bg-gray-50",
      count: "80+ منتج",
      route: "/pens/pencils",
      emoji: "✏️"
    },
    {
      id: 2,
      name: "أقلام الجاف",
      description: "أقلام حبر جاف بألوان متنوعة وجودة عالية",
      icon: PenTool,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      count: "120+ منتج",
      route: "/pens/ballpoint",
      emoji: "🖊️"
    },
    {
      id: 3,
      name: "أقلام الجل",
      description: "أقلام جل ناعمة الكتابة بألوان زاهية ومتنوعة",
      icon: PenTool,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      count: "90+ منتج",
      route: "/pens/gel",
      emoji: "🖋️"
    },
    {
      id: 4,
      name: "أقلام الحبر",
      description: "أقلام حبر سائل وأقلام الخط العربي التقليدية",
      icon: Feather,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      count: "60+ منتج",
      route: "/pens/fountain",
      emoji: "🖋️"
    },
    {
      id: 5,
      name: "أقلام السنون (أقلام التحديد)",
      description: "أقلام تحديد وماركر بأحجام وألوان مختلفة",
      icon: Highlighter,
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      count: "70+ منتج",
      route: "/pens/markers",
      emoji: "🖍️"
    },
    {
      id: 6,
      name: "أقلام الخط",
      description: "أقلام خط عربي وخطاطة بأحجام مختلفة",
      icon: Type,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      count: "45+ منتج",
      route: "/pens/calligraphy",
      emoji: "🖌️"
    },
    {
      id: 7,
      name: "أقلام الكوريكتور (أقلام التصحيح)",
      description: "أقلام تصحيح سائلة وجافة لإخفاء الأخطاء",
      icon: Eraser,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      count: "30+ منتج",
      route: "/pens/correction",
      emoji: "🖊️"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            فئات الأقلام ومستلزمات الكتابة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعة متنوعة من الأقلام المصممة لتلبية جميع احتياجاتك في الكتابة والرسم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {penCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-3">{category.emoji}</div>
                      <IconComponent className="h-8 w-8 mb-2 mx-auto" />
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
                      className={`w-full ${category.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                    >
                      <Link to={category.route}>تصفح المنتجات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
