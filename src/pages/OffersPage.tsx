import { useEffect } from "react";
import { OffersCarousel } from "@/components/OffersCarousel";

const allOffers = [
  { id: 1, image: "/lovable-uploads/f33df929-57a0-4663-b698-3854907c88ed.png", alt: "عرض خصومات الأدوات المكتبية" },
  { id: 2, image: "/lovable-uploads/94a50846-0f45-464f-be83-47941edfe632.png", alt: "خصومات الكتب الخارجية" },
  { id: 3, image: "/lovable-uploads/80a77817-79a7-46da-9034-bacb10dc84fa.png", alt: "خصم الطباعة" },
  { id: 4, image: "/lovable-uploads/ad776173-075e-4f6d-b790-72e729481027.png", alt: "خدمات الكمبيوتر" },
  { id: 5, image: "/lovable-uploads/4f9d357f-2506-4ff3-8279-4e283391b6a7.png", alt: "الاستوديو والطباعة" },
];

const OffersPage = () => {
  useEffect(() => {
    document.title = "العروض الخاصة | تفانين";
    const desc = "اطلع على جميع العروض والخصومات الحالية لدى تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">العروض الخاصة</h1>
          <p className="text-muted-foreground mb-8">تصفح أحدث البانرات والعروض.</p>
        </section>
        <OffersCarousel />
        <section className="container mx-auto px-4 pb-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOffers.map((o) => (
              <div key={o.id} className="overflow-hidden rounded-xl shadow-card">
                <img src={o.image} alt={o.alt} className="w-full h-64 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OffersPage;
