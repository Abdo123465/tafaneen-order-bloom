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
import MarkersPage from "./pages/MarkersPage";
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
import FransawyPenSetsPage from "./pages/FransawyPenSetsPage";

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
              <Route pa
