import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

function RulerFolderPage() {
  useEffect(() => {
    document.title = "حافظة مسطرة | منظمات الملفات | تفانين";
    const desc = "تسوق أفضل حافظات المسطرة عالية الجودة مثالية للطلاب والمكاتب لتنظيم الأوراق والمستندات.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
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
          <Link to="/files-organizers" className="hover:text-primary">منظمات الملفات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">حافظة مسطرة</span>
        </nav>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">حافظة مسطرة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            حافظات مسطرة مثالية للطلاب والمكاتب لتنظيم الأوراق بطريقة منظمة وعملية
          </p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-lg font-semibold mb-2">حافظة مسطرة A4</h3>
              <p className="text-muted-foreground text-sm mb-4">حافظة مسطرة بحجم A4 مثالية للأوراق المدرسية</p>
              <div className="text-green-600 font-bold text-lg mb-4">قريباً</div>
              <Button className="w-full" disabled>
                سيتوفر قريباً
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-lg font-semibold mb-2">حافظة مسطرة ملونة</h3>
              <p className="text-muted-foreground text-sm mb-4">حافظات مسطرة بألوان زاهية للطلاب</p>
              <div className="text-green-600 font-bold text-lg mb-4">قريباً</div>
              <Button className="w-full" disabled>
                سيتوفر قريباً
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-lg font-semibold mb-2">حافظة مسطرة بلاستيك</h3>
              <p className="text-muted-foreground text-sm mb-4">حافظة مسطرة من البلاستيك المقوى والمتين</p>
              <div className="text-green-600 font-bold text-lg mb-4">قريباً</div>
              <Button className="w-full" disabled>
                سيتوفر قريباً
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Back to Files Organizers */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/files-organizers">العودة إلى منظمات الملفات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RulerFolderPage;
