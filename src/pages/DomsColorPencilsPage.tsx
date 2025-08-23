import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const domsProducts = [
  { id: 'doms-1', name: 'أقلام ألوان DOMS - 12 لون', price: 30, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية DOMS عالية الجودة بـ 12 لون' },
  { id: 'doms-2', name: 'أقلام ألوان DOMS - 18 لون', price: 42, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية DOMS بـ 18 لون متميز' },
  { id: 'doms-3', name: 'أقلام ألوان DOMS - 24 لون', price: 55, image: '🖍️', description: 'مجموعة شاملة من أقلام ألوان DOMS بـ 24 لون' },
  { id: 'doms-4', name: 'أقلام ألوان DOMS - 36 لون', price: 80, image: '🖍️', description: 'مجموعة كاملة من أقلام ألوان DOMS بـ 36 لون' },
  { id: 'doms-5', name: 'أقلام ألوان DOMS مائية - 12 لون', price: 50, image: '🖍️', description: 'أقلام ألوان DOMS قابلة للذوبان في الماء للفن المائي' },
  { id: 'doms-6', name: 'أقلام ألوان DOMS احترافية - 48 لون', price: 120, image: '🖍️', description: 'مجموعة احترافية من أقلام ألوان DOMS للفنانين' },
];

const DomsColorPencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام ألوان DOMS | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية من علامة DOMS عالية الجودة والمتانة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/wooden-pencils" className="hover:text-primary">أقلام ألوان الخشب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان DOMS</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان DOMS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            استمتع بالرسم مع أقلام الألوان الخشبية من علامة DOMS المعروفة بجودتها العالية ومتانتها
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domsProducts.map((product) => (
            <div key={product.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {product.image}
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{product.
