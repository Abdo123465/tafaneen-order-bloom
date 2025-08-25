// src/App.tsx
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
import MechanicalPencilsCategoryPage from "./pages/MechanicalPencilsCategoryPage";
import RotoPensPage from "./pages/RotoPensPage";
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
import PrimaPensPage from "./pages/PrimaPensPage";
import RoxiPensPage from "./pages/RoxiPensPage";
import PensanPensPage from "./pages/PensanPensPage";
import BravoPensPage from "./pages/BravoPensPage";
import FransawyPensPage from "./pages/FransawyPensPage";
import BallpointPenSetsPage from "./pages/BallpointPenSetsPage";
import FaberCastellPencilsPage from "./pages/FaberCastellPencilsPage";
import StarColorPencilsPage from "./pages/StarColorPencilsPage";
import XioosongshuPencilsPage from "./pages/XioosongshuPencilsPage";
import CharcoalPencilsPage from "./pages/CharcoalPencilsPage";
import AltesPencilsPage from "./pages/AltesPencilsPage";
import DeliPencilsPage from "./pages/DeliPencilsPage";
import BedayaPencilsPage from "./pages/BedayaPencilsPage";
import DomsPencilsPage from "./pages/DomsPencilsPage";
import SmartKeepPencilsPage from "./pages/SmartKeepPencilsPage";
import PrimaPencilsPage from "./pages/PrimaPencilsPage";
import BravoPencilsPage from "./pages/BravoPencilsPage";
import SearchPage from "./pages/SearchPage";
import MechanicalPencils05Page from "./pages/MechanicalPencils05Page";
import MechanicalPencils07Page from "./pages/MechanicalPencils07Page";
import MechanicalPencils09Page from "./pages/MechanicalPencils09Page";
// إضافة استيرادات أقلام الألوان الخشبية الجديدة
import GelcyColorPencilsPage from "./pages/GelcyColorPencilsPage";
import DomsColorPencilsPage from "./pages/DomsColorPencilsPage";
import DeliColorPencilsPage from "./pages/DeliColorPencilsPage";
import PowerColorPencilsPage from "./pages/PowerColorPencilsPage";
import FaberCastellColorPencilsPage from "./pages/FaberCastellColorPencilsPage";
import AttarColorPencilsPage from "./pages/AttarColorPencilsPage";
import WaxCrayonsPage from "./pages/WaxCrayonsPage";
import GouacheColorsPage from "./pages/GouacheColorsPage";
// استيراد صفحات ألوان الفلوماستر الجديدة
import FeltTipMarkersPage from "./pages/FeltTipMarkersPage";
import DomsFeltTipMarkersPage from "./pages/DomsFeltTipMarkersPage";
import PrimaFeltTipMarkersPage from "./pages/PrimaFeltTipMarkersPage";

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
              <Route path="/search" element={<SearchPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/pens" element={<PensPage />} />
              <Route path="/pens/pencils" element={<PencilsPage />} />
              <Route path="/pens/pencils/faber-castell" element={<FaberCastellPencilsPage />} />
              <Route path="/pens/pencils/xioosongshu" element={<XioosongshuPencilsPage />} />
              <Route path="/pens/pencils/star-color" element={<StarColorPencilsPage />} />
              <Route path="/pens/pencils/charcoal" element={<CharcoalPencilsPage />} />
              <Route path="/pens/pencils/altes" element={<AltesPencilsPage />} />
              <Route path="/pens/pencils/deli" element={<DeliPencilsPage />} />
              <Route path="/pens/pencils/bedaya" element={<BedayaPencilsPage />} />
              <Route path="/pens/pencils/doms" element={<DomsPencilsPage />} />
              <Route path="/pens/pencils/smart-keep" element={<SmartKeepPencilsPage />} />
              <Route path="/pens/pencils/prima" element={<PrimaPencilsPage />} />
              <Route path="/pens/pencils/bravo" element={<BravoPencilsPage />} />
              <Route path="/pens/ballpoint" element={<BallpointPensPage />} />
              <Route path="/pens/gel" element={<GelPensPage />} />
              <Route path="/pens/roto" element={<RotoPensPage />} />
              <Route path="/pens/fountain" element={<FountainPensPage />} />
              <Route path="/pens/markers" element={<MechanicalPencilsCategoryPage />} />
              <Route path="/pens/markers/mechanical-05" element={<MechanicalPencils05Page />} />
              <Route path="/pens/markers/mechanical-07" element={<MechanicalPencils07Page />} />
              <Route path="/pens/markers/mechanical-09" element={<MechanicalPencils09Page />} />
              <Route path="/pens/calligraphy" element={<CalligraphyPensPage />} />
              <Route path="/pens/correction" element={<CorrectionPensPage />} />
              <Route path="/cutting-pasting-tools" element={<CuttingPastingToolsPage />} />
              <Route path="/cutting-pasting-tools/felt-tip-markers" element={<FeltTipMarkersPage />} />
              <Route path="/cutting-pasting-tools/felt-tip-markers/doms" element={<DomsFeltTipMarkersPage />} />
              <Route path="/cutting-pasting-tools/felt-tip-markers/prima" element={<PrimaFeltTipMarkersPage />} />
              <Route path="/calculators-rulers" element={<CalculatorsRulersPage />} />
              <Route path="/calculators-rulers/scientific-calculator" element={<ScientificCalculatorPage />} />
              <Route path="/calculators-rulers/commercial-calculator" element={<CommercialCalculatorPage />} />
              <Route path="/cutting-pasting-tools/cutting-pasting" element={<CuttingPastingPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils" element={<WoodenPencilsPage />} />
              {/* مسارات أقلام الألوان الخشبية حسب العلامة التجارية */}
              <Route path="/cutting-pasting-tools/wooden-pencils/gelcy" element={<GelcyColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/doms" element={<DomsColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/deli" element={<DeliColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/power" element={<PowerColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/faber-castell" element={<FaberCastellColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/attar" element={<AttarColorPencilsPage />} />
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
              <Route path="/pens/gel" element={<GelPensPage />} />
              <Route path="/pens/roto" element={<RotoPensPage />} />
              <Route path="/pens/prima" element={<PrimaPensPage />} />
              <Route path="/pens/roxi" element={<RoxiPensPage />} />
              <Route path="/pens/pensan" element={<PensanPensPage />} />
              <Route path="/pens/bravo" element={<BravoPensPage />} />
              <Route path="/pens/fransawy" element={<FransawyPensPage />} />
              <Route path="/pens/fountain" element={<FountainPensPage />} />
              <Route path="/pens/ballpoint-sets" element={<BallpointPenSetsPage />} />
              <Route path="/cutting-pasting-tools/wax-crayons" element={<WaxCrayonsPage />} />
              <Route path="/cutting-pasting-tools/gouache-colors" element={<GouacheColorsPage />} />
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
