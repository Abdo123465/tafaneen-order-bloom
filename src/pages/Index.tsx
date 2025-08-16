import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OffersCarousel } from "@/components/OffersCarousel";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Footer } from "@/components/Footer";
import { WhatsAppSubscription } from "@/components/WhatsAppSubscription";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <OffersCarousel />
        <Categories />
        <FeaturedProducts />
        <ProductRecommendations />
        
        {/* WhatsApp Subscription Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                اشترك في النشرة الإخبارية
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                احصل على إشعارات فورية بالمنتجات الجديدة والعروض الحصرية عبر واتساب
              </p>
            </div>
            <WhatsAppSubscription />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
