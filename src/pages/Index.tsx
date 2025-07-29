import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OffersBanner } from "@/components/OffersBanner";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <OffersBanner />
        <Categories />
        <FeaturedProducts />
        <ProductRecommendations />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
