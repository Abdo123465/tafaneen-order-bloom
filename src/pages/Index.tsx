import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OffersCarousel } from "@/components/OffersCarousel";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { LatestProducts } from "@/components/LatestProducts";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      <Header />
      <main className="relative z-10">
        <Hero />

        {/* Playful Divider */}
        <div className="h-12 bg-gradient-to-b from-transparent to-white/5"></div>

        <div className="py-12">
          <Categories />
        </div>

        <FeaturedProducts />

        <div className="py-12">
          <OffersCarousel />
        </div>

        <LatestProducts />
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
