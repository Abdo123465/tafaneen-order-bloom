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
import ArtSuppliesPage from "./pages/ArtSuppliesPage";
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
              <Route path="/art-supplies" element={<ArtSuppliesPage />} />
              <Route path="/cutting-pasting-tools" element={<CuttingPastingToolsPage />} />
              <Route path="/calculators-rulers" element={<CalculatorsRulersPage />} />
              <Route path="/calculators-rulers/scientific-calculator" element={<ScientificCalculatorPage />} />
              <Route path="/calculators-rulers/commercial-calculator" element={<CommercialCalculatorPage />} />
              <Route path="/art-supplies/cutting-pasting" element={<CuttingPastingPage />} />
              <Route path="/art-supplies/wooden-pencils" element={<WoodenPencilsPage />} />
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
