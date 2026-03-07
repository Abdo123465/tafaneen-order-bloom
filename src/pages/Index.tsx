import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OffersCarousel } from "@/components/OffersCarousel";
import { Categories } from "@/components/Categories";
import { BestProducts } from "@/components/BestProducts";
import { OffersBanner } from "@/components/OffersBanner";
import { LatestProducts } from "@/components/LatestProducts";
import { WhatsAppNotification } from "@/components/WhatsAppNotification";
import { Footer } from "@/components/Footer";
import { WhatsAppChat } from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora Animated Gradient Background */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg aurora-2"></div>
      <div className="aurora-bg aurora-3"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <OffersCarousel />
        <Categories />
        <BestProducts />
        <OffersBanner />
        <LatestProducts />
        <WhatsAppNotification />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
