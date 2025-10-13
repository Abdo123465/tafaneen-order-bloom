// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Page imports
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
import RulersGeometryPage from "./pages/RulersGeometryPage";
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
import GelcyColorPencilsPage from "./pages/GelcyColorPencilsPage";
import DomsColorPencilsPage from "./pages/DomsColorPencilsPage";
import DeliColorPencilsPage from "./pages/DeliColorPencilsPage";
import PowerColorPencilsPage from "./pages/PowerColorPencilsPage";
import FaberCastellColorPencilsPage from "./pages/FaberCastellColorPencilsPage";
import AttarColorPencilsPage from "./pages/AttarColorPencilsPage";
import WaxCrayonsPage from "./pages/WaxCrayonsPage";
import GouacheColorsPage from "./pages/GouacheColorsPage";
import FeltTipMarkersPage from "./pages/FeltTipMarkersPage";
import DomsFeltTipMarkersPage from "./pages/DomsFeltTipMarkersPage";
import PrimaFeltTipMarkersPage from "./pages/PrimaFeltTipMarkersPage";
import AcrylicColorsPage from "./pages/AcrylicColorsPage";
import CansonPaperPage from "./pages/CansonPaperPage";
import CansonA4Page from "./pages/CansonA4Page";
import Canson70x50Page from "./pages/Canson70x50Page";
import CansonSketchPage from "./pages/CansonSketchPage";
import CansonSketchColorsPage from "./pages/CansonSketchColorsPage";
import CansonSketchWhitePage from "./pages/CansonSketchWhitePage";
import ScissorsPage from "./pages/ScissorsPage";
import SchoolScissorsPage from "./pages/SchoolScissorsPage";
import OfficeScissorsPage from "./pages/OfficeScissorsPage";
import WaterColorsPage from "./pages/WaterColorsPage";
import OilColorsPage from "./pages/OilColorsPage";
import ColoringBooksPage from "./pages/ColoringBooksPage";
import AdhesiveFoamPage from "./pages/AdhesiveFoamPage";
import AdhesiveFoamA4Page from "./pages/AdhesiveFoamA4Page";
import AdhesiveFoam70x50Page from "./pages/AdhesiveFoam70x50Page";
import GlitterFoamPage from "./pages/GlitterFoamPage";
import GlitterFoamA4Page from "./pages/GlitterFoamA4Page";
import GlitterFoam70x50Page from "./pages/GlitterFoam70x50Page";
import AdhesiveGlitterFoamPage from "./pages/AdhesiveGlitterFoamPage";
import AdhesiveGlitterFoamA4Page from "./pages/AdhesiveGlitterFoamA4Page";
import AdhesiveGlitterFoam70x50Page from "./pages/AdhesiveGlitterFoam70x50Page";
import LargeDrawingNotebookPage from "./pages/LargeDrawingNotebookPage";
import SmallDrawingNotebookPage from "./pages/SmallDrawingNotebookPage";
import ErasersSharpenersPage from "./pages/ErasersSharpenersPage";
import ErasersPage from "./pages/ErasersPage";
import SharpenersPage from "./pages/SharpenersPage";
import OfficeStaplersPage from "./pages/OfficeStaplersPage";
import PaperPunchesPage from "./pages/PaperPunchesPage";
import StaplersPage from "./pages/StaplersPage";
import OfficeStampsPage from "./pages/OfficeStampsPage";
import InkPadsPage from "./pages/InkPadsPage";
import MiscOfficeSuppliesPage from "./pages/MiscOfficeSuppliesPage";
import FilesOrganizersPage from "./pages/FilesOrganizersPage";
import CapsuleFolderPage from "./pages/CapsuleFolderPage";
import RulerFolderPage from "./pages/RulerFolderPage";
import SascoFolderPage from "./pages/SascoFolderPage";
import HolderPage from "./pages/HolderPage";
import ZipperFolderPage from "./pages/ZipperFolderPage";

// Arabic notebooks
import Arabic28CategoryPage from "@/pages/Arabic28CategoryPage";
import ArabicDisneyNotebooksPage from "@/pages/ArabicDisneyNotebooksPage";
import ArabicNormalNotebooksPage from "@/pages/ArabicNormalNotebooksPage";
import Arabic40NormalNotebooksPage from "./pages/Arabic40NormalNotebooksPage";
import Arabic40DisneyNotebooksPage from "./pages/Arabic40DisneyNotebooksPage";

// English notebooks
import English28CategoryPage from "@/pages/English28CategoryPage";
import English40CategoryPage from "@/pages/English40CategoryPage";
import EnglishNormal28Page from "@/pages/EnglishNormal28Page";
import EnglishDisney28Page from "@/pages/EnglishDisney28Page";

// 9-lines notebooks
import English9LinesPage from "@/pages/English9LinesPage";
import EnglishNormal9Page from "@/pages/EnglishNormal9Page";
import EnglishDisney9Page from "@/pages/EnglishDisney9Page";
import English40LinesPage from "@/pages/English40LinesPage";
import English40LinesNormalPage from "@/pages/English40LinesNormalPage";
import English40LinesDisneyPage from "@/pages/English40LinesDisneyPage";

// Large squares notebooks
import LargeSquares28Page from "@/pages/LargeSquares28Page";
import LargeSquaresNormalPage from "@/pages/LargeSquaresNormalPage";
import LargeSquaresDisneyPage from "@/pages/LargeSquaresDisneyPage";
import Arabic40CategoryPage from "./pages/Arabic40CategoryPage";
import LargeSquares40CategoryPage from "./pages/LargeSquares40CategoryPage";
import LargeSquares40NormalPage from "./pages/LargeSquares40NormalPage";
import LargeSquares40DisneyPage from "./pages/LargeSquares40DisneyPage";
import English40NormalPage from "./pages/English40NormalPage";
import English40DisneyPage from "./pages/English40DisneyPage";
// Kashakil 60 Pages - Arabic
import Kashakil60ArabicCategoryPage from "./pages/Kashakil60ArabicCategoryPage";
import Kashakil60ArabicNormalPage from "./pages/Kashakil60ArabicNormalPage";
import Kashakil60ArabicDisneyPage from "./pages/Kashakil60ArabicDisneyPage";
// Kashakil 60 Pages - English
import Kashakil60EnglishCategoryPage from "./pages/Kashakil60EnglishCategoryPage";
import Kashakil60EnglishNormalPage from "./pages/Kashakil60EnglishNormalPage";
import Kashakil60EnglishDisneyPage from "./pages/Kashakil60EnglishDisneyPage";
// Kashakil 60 Pages - 9 Lines
import Kashakil60NineLinesCategoryPage from "./pages/Kashakil60NineLinesCategoryPage";
import Kashakil60NineLinesNormalPage from "./pages/Kashakil60NineLinesNormalPage";
import Kashakil60NineLinesDisneyPage from "./pages/Kashakil60NineLinesDisneyPage";
// Kashakil 60 Pages - Large Squares
import Kashakil60LargeSquaresCategoryPage from "./pages/Kashakil60LargeSquaresCategoryPage";
import Kashakil60LargeSquaresNormalPage from "./pages/Kashakil60LargeSquaresNormalPage";
import Kashakil60LargeSquaresDisneyPage from "./pages/Kashakil60LargeSquaresDisneyPage";
// Kashakil 60 Pages - Small Squares
import Kashakil60SmallSquaresCategoryPage from "./pages/Kashakil60SmallSquaresCategoryPage";
import Kashakil60SmallSquaresNormalPage from "./pages/Kashakil60SmallSquaresNormalPage";
import Kashakil60SmallSquaresDisneyPage from "./pages/Kashakil60SmallSquaresDisneyPage";
// Kashakil 60 Pages - Page by Page
import Kashakil60PageByPageCategoryPage from "./pages/Kashakil60PageByPageCategoryPage";
import Kashakil60PageByPageNormalPage from "./pages/Kashakil60PageByPageNormalPage";
import Kashakil60PageByPageDisneyPage from "./pages/Kashakil60PageByPageDisneyPage";
import Kashakil80ArabicCategoryPage from "./pages/Kashakil80ArabicCategoryPage";
import Kashakil80ArabicNormalPage from "./pages/Kashakil80ArabicNormalPage";
import Kashakil80ArabicDisneyPage from "./pages/Kashakil80ArabicDisneyPage";
import Kashakil80NineLinesCategoryPage from "./pages/Kashakil80NineLinesCategoryPage";
import Kashakil80NineLinesNormalPage from "./pages/Kashakil80NineLinesNormalPage";
import Kashakil80NineLinesDisneyPage from "./pages/Kashakil80NineLinesDisneyPage";
import Kashakil80EnglishCategoryPage from "./pages/Kashakil80EnglishCategoryPage";
import Kashakil80EnglishNormalPage from "./pages/Kashakil80EnglishNormalPage";
import Kashakil80EnglishDisneyPage from "./pages/Kashakil80EnglishDisneyPage";
// Kashakil 80 Pages - Small Squares
import Kashakil80SmallSquaresCategoryPage from "./pages/Kashakil80SmallSquaresCategoryPage";
import Kashakil80SmallSquaresNormalPage from "./pages/Kashakil80SmallSquaresNormalPage";
import Kashakil80SmallSquaresDisneyPage from "./pages/Kashakil80SmallSquaresDisneyPage";

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
              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/offers" element={<OffersPage />} />
              
              {/* Pens & Pencils */}
              <Route path="/pens" element={<PensPage />} />
              <Route path="/pens/pencils" element={<PencilsPage />} />
              <Route path="/pens/ballpoint" element={<BallpointPensPage />} />
              <Route path="/pens/gel" element={<GelPensPage />} />
              <Route path="/pens/roto" element={<RotoPensPage />} />
              <Route path="/pens/fountain" element={<FountainPensPage />} />
              <Route path="/pens/markers" element={<MechanicalPencilsCategoryPage />} />
              <Route path="/pens/calligraphy" element={<CalligraphyPensPage />} />
              <Route path="/pens/correction" element={<CorrectionPensPage />} />
              
              {/* Pen Brands */}
              <Route path="/pens/prima" element={<PrimaPensPage />} />
              <Route path="/pens/roxi" element={<RoxiPensPage />} />
              <Route path="/pens/pensan" element={<PensanPensPage />} />
              <Route path="/pens/bravo" element={<BravoPensPage />} />
              <Route path="/pens/fransawy" element={<FransawyPensPage />} />
              <Route path="/pens/ballpoint-sets" element={<BallpointPenSetsPage />} />
              
              {/* Pencil Brands */}
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
              
              {/* Mechanical Pencils */}
              <Route path="/pens/markers/mechanical-05" element={<MechanicalPencils05Page />} />
              <Route path="/pens/markers/mechanical-07" element={<MechanicalPencils07Page />} />
              <Route path="/pens/markers/mechanical-09" element={<MechanicalPencils09Page />} />
              
              {/* Cutting & Pasting Tools */}
              <Route path="/cutting-pasting-tools" element={<CuttingPastingToolsPage />} />
              <Route path="/cutting-pasting-tools/cutting-pasting" element={<CuttingPastingPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils" element={<WoodenPencilsPage />} />
              
              {/* Color Pencils */}
              <Route path="/cutting-pasting-tools/wooden-pencils/gelcy" element={<GelcyColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/doms" element={<DomsColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/deli" element={<DeliColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/power" element={<PowerColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/faber-castell" element={<FaberCastellColorPencilsPage />} />
              <Route path="/cutting-pasting-tools/wooden-pencils/attar" element={<AttarColorPencilsPage />} />
              
              {/* Art Supplies */}
              <Route path="/cutting-pasting-tools/wax-crayons" element={<WaxCrayonsPage />} />
              <Route path="/cutting-pasting-tools/gouache-colors" element={<GouacheColorsPage />} />
              <Route path="/cutting-pasting-tools/acrylic-colors" element={<AcrylicColorsPage />} />
              <Route path="/cutting-pasting-tools/water-colors" element={<WaterColorsPage />} />
              <Route path="/cutting-pasting-tools/oil-colors" element={<OilColorsPage />} />
              
              {/* Paper & Drawing */}
              <Route path="/cutting-pasting-tools/canson-paper" element={<CansonPaperPage />} />
              <Route path="/cutting-pasting-tools/canson-paper/a4" element={<CansonA4Page />} />
              <Route path="/cutting-pasting-tools/canson-paper/70x50" element={<Canson70x50Page />} />
              <Route path="/cutting-pasting-tools/canson-sketch" element={<CansonSketchPage />} />
              <Route path="/cutting-pasting-tools/canson-sketch/colors" element={<CansonSketchColorsPage />} />
              <Route path="/cutting-pasting-tools/canson-sketch/white" element={<CansonSketchWhitePage />} />
              <Route path="/cutting-pasting-tools/coloring-books" element={<ColoringBooksPage />} />
              <Route path="/cutting-pasting-tools/large-sketch" element={<LargeDrawingNotebookPage />} />
              <Route path="/cutting-pasting-tools/small-sketch" element={<SmallDrawingNotebookPage />} />
              
              {/* Foam Supplies */}
              <Route path="/cutting-pasting-tools/adhesive-foam" element={<AdhesiveFoamPage />} />
              <Route path="/cutting-pasting-tools/adhesive-foam/a4" element={<AdhesiveFoamA4Page />} />
              <Route path="/cutting-pasting-tools/adhesive-foam/70x50" element={<AdhesiveFoam70x50Page />} />
              <Route path="/cutting-pasting-tools/glitter-foam" element={<GlitterFoamPage />} />
              <Route path="/cutting-pasting-tools/glitter-foam/a4" element={<GlitterFoamA4Page />} />
              <Route path="/cutting-pasting-tools/glitter-foam/70x50" element={<GlitterFoam70x50Page />} />
              <Route path="/cutting-pasting-tools/adhesive-glitter-foam" element={<AdhesiveGlitterFoamPage />} />
              <Route path="/cutting-pasting-tools/adhesive-glitter-foam/a4" element={<AdhesiveGlitterFoamA4Page />} />
              <Route path="/cutting-pasting-tools/adhesive-glitter-foam/70x50" element={<AdhesiveGlitterFoam70x50Page />} />
              
              {/* Scissors */}
              <Route path="/cutting-pasting-tools/scissors" element={<ScissorsPage />} />
              <Route path="/cutting-pasting-tools/scissors/school" element={<SchoolScissorsPage />} />
              <Route path="/cutting-pasting-tools/scissors/office" element={<OfficeScissorsPage />} />
              
              {/* Markers */}
              <Route path="/cutting-pasting-tools/felt-tip-markers" element={<FeltTipMarkersPage />} />
              <Route path="/cutting-pasting-tools/felt-tip-markers/doms" element={<DomsFeltTipMarkersPage />} />
              <Route path="/cutting-pasting-tools/felt-tip-markers/prima" element={<PrimaFeltTipMarkersPage />} />
              
              {/* Calculators & Rulers */}
              <Route path="/calculators-rulers" element={<CalculatorsRulersPage />} />
              <Route path="/calculators-rulers/scientific-calculator" element={<ScientificCalculatorPage />} />
              <Route path="/calculators-rulers/commercial-calculator" element={<CommercialCalculatorPage />} />
              <Route path="/calculators-rulers/rulers" element={<RulersGeometryPage />} />
              
              {/* Notebooks */}
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
              
              {/* Arabic Notebooks */}
              <Route path="/notebooks/krassat/28-pages/arabic" element={<Arabic28CategoryPage />} />
              <Route path="/notebooks/krassat/28-pages/arabic-disney" element={<ArabicDisneyNotebooksPage />} />
              <Route path="/notebooks/krassat/28-pages/arabic-normal" element={<ArabicNormalNotebooksPage />} />
              {/* Arabic 40 Pages Notebooks */}
              <Route path="/notebooks/krassat/40-pages/arabic-normal" element={<Arabic40NormalNotebooksPage />} />
              <Route path="/notebooks/krassat/40-pages/arabic-disney" element={<Arabic40DisneyNotebooksPage />} />
              <Route path="/notebooks/krassat/40-pages/arabic" element={<Arabic40CategoryPage />} />
              
              {/* English Notebooks */}
              <Route path="/notebooks/krassat/28-pages/english" element={<English28CategoryPage />} />
              <Route path="/notebooks/krassat/28-pages/english/normal" element={<EnglishNormal28Page />} />
              <Route path="/notebooks/krassat/28-pages/english/disney" element={<EnglishDisney28Page />} />
              <Route path="/notebooks/krassat/40-pages/english" element={<English40CategoryPage />} />
              
              {/* 9-Lines Notebooks */}
              <Route path="/notebooks/krassat/28-pages/9-lines" element={<English9LinesPage />} />
              <Route path="/notebooks/krassat/40-pages/9-lines" element={<English40LinesPage />} />
              <Route path="/notebooks/krassat/28-pages/english/9-lines/normal" element={<EnglishNormal9Page />} />
              <Route path="/notebooks/krassat/28-pages/english/9-lines/disney" element={<EnglishDisney9Page />} />
              <Route path="/notebooks/krassat/40-pages/english/9-lines/normal" element={<English40LinesNormalPage />} />
              <Route path="/notebooks/krassat/40-pages/english/9-lines/disney" element={<English40LinesDisneyPage />} />
              
              {/* Office Supplies */}
              <Route path="/office-supplies" element={<OfficeSuppliesPage />} />
              <Route path="/office-supplies/stapler" element={<StaplerPage />} />
              <Route path="/office-supplies/hole-punch" element={<HolePunchPage />} />
              <Route path="/office-supplies/staple-pins" element={<StaplePinsPage />} />
              <Route path="/office-supplies/stamps" element={<StampsPage />} />
              <Route path="/office-supplies/paper-clips" element={<PaperClipsPage />} />
              <Route path="/office-supplies/soap-paper" element={<SoapPaperPage />} />
              <Route path="/office-supplies/push-pins" element={<PushPinsPage />} />
              <Route path="/office-supplies/office-staplers" element={<OfficeStaplersPage />} />
              <Route path="/office-supplies/paper-punches" element={<PaperPunchesPage />} />
              <Route path="/office-supplies/staplers" element={<StaplersPage />} />
              <Route path="/office-supplies/office-stamps" element={<OfficeStampsPage />} />
              <Route path="/office-supplies/stamps/ink-pads" element={<InkPadsPage />} />
              <Route path="/office-supplies/misc" element={<MiscOfficeSuppliesPage />} />
              
              {/* Files Organizers */}
              <Route path="/files-organizers" element={<FilesOrganizersPage />} />
              <Route path="/files-organizers/capsule-folder" element={<CapsuleFolderPage />} />
              <Route path="/files-organizers/ruler-folder" element={<RulerFolderPage />} />
              <Route path="/files-organizers/sasco-folder" element={<SascoFolderPage />} />
              <Route path="/files-organizers/holder" element={<HolderPage />} />
              <Route path="/files-organizers/zipper-folder" element={<ZipperFolderPage />} />
              
              {/* Erasers & Sharpeners */}
              <Route path="/erasers-sharpeners" element={<ErasersSharpenersPage />} />
              <Route path="/erasers-sharpeners/erasers" element={<ErasersPage />} />
              <Route path="/erasers-sharpeners/sharpeners" element={<SharpenersPage />} />
              {/* English 40 Pages Notebooks */}
              <Route path="/notebooks/krassat/40-pages/english/normal" element={<English40NormalPage />} />
              <Route path="/notebooks/krassat/40-pages/english/disney" element={<English40DisneyPage />} />
              {/* Kashakil 60 Pages - Arabic */}
              <Route path="/notebooks/kashakil/60-pages/arabic" element={<Kashakil60ArabicCategoryPage />} />
              <Route path="/notebooks/kashakil/60-pages/arabic/normal" element={<Kashakil60ArabicNormalPage />} />
              <Route path="/notebooks/kashakil/60-pages/arabic/disney" element={<Kashakil60ArabicDisneyPage />} />
              {/* Kashakil 60 Pages - English */}
              <Route path="/notebooks/kashakil/60-pages/english" element={<Kashakil60EnglishCategoryPage />} />
              <Route path="/notebooks/kashakil/60-pages/english/normal" element={<Kashakil60EnglishNormalPage />} />
              <Route path="/notebooks/kashakil/60-pages/english/disney" element={<Kashakil60EnglishDisneyPage />} />
              {/* Kashakil 60 Pages - 9 Lines */}
              <Route path="/notebooks/kashakil/60-pages/9-lines" element={<Kashakil60NineLinesCategoryPage />} />
              <Route path="/notebooks/kashakil/60-pages/9-lines/normal" element={<Kashakil60NineLinesNormalPage />} />
              <Route path="/notebooks/kashakil/60-pages/9-lines/disney" element={<Kashakil60NineLinesDisneyPage />} />
              {/* Kashakil 60 Pages - Small Squares */}
              <Route path="/notebooks/kashakil/60-pages/small-squares" element={<Kashakil60SmallSquaresCategoryPage />} />
              <Route path="/notebooks/kashakil/60-pages/small-squares/normal" element={<Kashakil60SmallSquaresNormalPage />} />
              <Route path="/notebooks/kashakil/60-pages/small-squares/disney" element={<Kashakil60SmallSquaresDisneyPage />} />
              {/* Kashakil 60 Pages - Page by Page */}
              <Route path="/notebooks/kashakil/60-pages/page-by-page" element={<Kashakil60PageByPageCategoryPage />} />
              <Route path="/notebooks/kashakil/60-pages/page-by-page/normal" element={<Kashakil60PageByPageNormalPage />} />
              <Route path="/notebooks/kashakil/60-pages/page-by-page/disney" element={<Kashakil60PageByPageDisneyPage />} />
              {/* Kashakil 80 Pages - Arabic */}
              <Route path="/notebooks/kashakil/80-pages/arabic" element={<Kashakil80ArabicCategoryPage />} />
              <Route path="/notebooks/kashakil/80-pages/arabic/normal" element={<Kashakil80ArabicNormalPage />} />
              <Route path="/notebooks/kashakil/80-pages/arabic/disney" element={<Kashakil80ArabicDisneyPage />} />
              {/* Kashakil 80 Pages - 9 Lines */}
              <Route path="/notebooks/kashakil/80-pages/9-lines" element={<Kashakil80NineLinesCategoryPage />} />
              <Route path="/notebooks/kashakil/80-pages/9-lines/normal" element={<Kashakil80NineLinesNormalPage />} />
              <Route path="/notebooks/kashakil/80-pages/9-lines/disney" element={<Kashakil80NineLinesDisneyPage />} />
              {/* Kashakil 80 Pages - English */}
              <Route path="/notebooks/kashakil/80-pages/english" element={<Kashakil80EnglishCategoryPage />} />
              <Route path="/notebooks/kashakil/80-pages/english/normal" element={<Kashakil80EnglishNormalPage />} />
              <Route path="/notebooks/kashakil/80-pages/english/disney" element={<Kashakil80EnglishDisneyPage />} />
              {/* Kashakil 80 Pages - Small Squares */}
              <Route path="/notebooks/kashakil/80-pages/small-squares" element={<Kashakil80SmallSquaresCategoryPage />} />
              <Route path="/notebooks/kashakil/80-pages/small-squares/normal" element={<Kashakil80SmallSquaresNormalPage />} />
              <Route path="/notebooks/kashakil/80-pages/small-squares/disney" element={<Kashakil80SmallSquaresDisneyPage />} />
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
