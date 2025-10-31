import { Hero } from "@/components/Hero";
import { OffersCarousel } from "@/components/OffersCarousel";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { WhatsAppChat } from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <OffersCarousel />
        <Categories />
        <FeaturedProducts />
        <ProductRecommendations />
      </main>
      <WhatsAppChat />
    </div>
  );
};

export default Index;
