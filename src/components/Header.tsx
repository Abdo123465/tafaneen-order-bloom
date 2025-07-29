import { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Demo cart count

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "جميع الفئات", href: "/categories" },
    { label: "الكتب", href: "/books" },
    { label: "القرطاسية", href: "/stationery" },
    { label: "كتب الأطفال", href: "/children" },
    { label: "عروض خاصة", href: "/offers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>📞 للطلب: 01234567890</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="btn-whatsapp text-xs h-6"
              >
                <MessageCircle className="h-3 w-3" />
                واتساب
              </Button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>🚚 توصيل مجاني للطلبات أكثر من 100 جنيه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/cff92227-a94e-4017-8547-5a984088ec2e.png" 
                alt="تفانين ستوديو وطباعة" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">تفانين</h1>
              <p className="text-xs text-muted-foreground">ستوديو وطباعة</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن الكتب والقرطاسية..."
                className="pr-10 rounded-xl border-2 focus:border-primary"
                dir="rtl"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -left-2 h-5 w-5 flex items-center justify-center p-0 text-xs badge-new">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Login Button */}
            <Button className="btn-tafaneen hidden md:flex">
              تسجيل الدخول
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex mt-4 gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث عن الكتب والقرطاسية..."
              className="pr-10 rounded-xl border-2 focus:border-primary"
              dir="rtl"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="btn-tafaneen mt-4">
                تسجيل الدخول
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}