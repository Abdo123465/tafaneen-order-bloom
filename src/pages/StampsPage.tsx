import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Stamp, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

const subCategories = [
  {
    name: "أختام",
    description: "أختام مكتبية ذاتية وخشبية مخصصة",
    icon: Stamp,
    link: "/office-supplies/office-stamps",
    bgClass: "bg-blue-50",
  },
  {
    name: "حبر ختامة",
    description: "عبوات حبر لجميع أنواع الأختام",
    icon: Droplet,
    link: "/office-supplies/stamps/ink-pads",
    bgClass: "bg-green-50",
  },
];

export default function StampsPage() {
  useEffect(() => {
    document.title = "ختامة و حبر ختامة | تفانين";
    const desc = "تصفح مجموعتنا من الأختام المكتبية وأحبار الختامات عالية الجودة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">ختامة و حبر ختامة</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            ختامة و حبر ختامة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعتنا المتنوعة من الأختام وأحبار الختامات لتلبية جميع احتياجاتك المكتبية.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {subCategories.map((category) => (
            <Link to={category.link} key={category.name} className={`block p-6 rounded-lg ${category.bgClass} hover:shadow-lg transition-shadow`}>
              <div className="flex items-center">
                <category.icon className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
