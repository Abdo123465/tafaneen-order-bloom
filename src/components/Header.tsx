// src/components/Header.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // إضافة useNavigate
import { Search, User, Menu, X, MessageCircle, LogOut, ChevronDown, UserCheck, ShoppingBag, Settings, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cart } from "@/components/Cart";
import { AuthDialog } from "@/components/AuthDialog";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // إضافة هذا السطر

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "جميع الفئات", href: "/categories" },
    { label: "الأقلام", href: "/pens" },
    { label: "الدفاتر", href: "/notebooks" },
    { label: "أدوات الرسم", href: "/art-supplies" },
    { label: "عروض خاصة", href: "/offers" },
  ];

  // معالجة البحث - تم تعديلها
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // توجيه المستخدم إلى صفحة البحث مع تمرير عبارة البحث
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // فتح واتساب
  const openWhatsApp = () => {
    const phoneNumber = "201026274235";
    const message = "مرحباً، أريد الاستفسار عن المنتجات";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // الاتصال بالهاتف
  const callPhone = () => {
    window.open('tel:01026274235', '_self');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <button 
                onClick={callPhone}
                className="hover:underline cursor-pointer flex items-center gap-1"
              >
                📞 للطلب: 01026274235
              </button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="btn-whatsapp text-xs h-6"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-3 w-3" />
                واتساب
              </Button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>🚚 توصيل مجاني للطلبات أكثر من 1000 ج.م</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-red-600">تفانين</h1>
                <div className="bg-white p-1 rounded-lg shadow-lg">
                  <img 
                    src="/lovable-uploads/cff92227-a94e-4017-8547-5a984088ec2e.png" 
                    alt="تفانين ستوديو وطباعة" 
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">للأدوات المكتبية</p>
            </div>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن الأدوات المكتبية والقرطاسية..."
                className="pr-10 rounded-xl border-2 focus:border-primary"
                dir="rtl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
            {/* User Account Icon - Always visible when logged in */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                    <span className="sr-only">حساب المستخدم</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 text-right">
                  <div className="flex items-center gap-3 px-3 py-2 border-b">
                    {user.avatar_url && (
                      <img src={user.avatar_url} alt={user.name} className="h-10 w-10 rounded-full" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="h-4 w-4 ml-2" />
                    حسابي
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <History className="h-4 w-4 ml-2" />
                    طلباتي السابقة
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive cursor-pointer">
                    <LogOut className="h-4 w-4 ml-2" />
                    تسجيل الخروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className=""
                onClick={() => setIsAuthOpen(true)}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">تسجيل الدخول</span>
              </Button>
            )}
            {/* Shopping Cart */}
            <Cart onLoginClick={() => setIsAuthOpen(true)} />
            {/* Login/Logout Button - Desktop only */}
            {user ? (
              <Button 
                className="btn-tafaneen hidden md:flex"
                onClick={logout}
              >
                <LogOut className="h-4 w-4 ml-2" />
                تسجيل الخروج
              </Button>
            ) : (
              <Button 
                className="btn-tafaneen hidden md:flex"
                onClick={() => setIsAuthOpen(true)}
              >
                <User className="h-4 w-4 ml-2" />
                تسجيل الدخول
              </Button>
            )}
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex mt-4 gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث عن الأدوات المكتبية والقرطاسية..."
              className="pr-10 rounded-xl border-2 focus:border-primary"
              dir="rtl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {user ? (
                <div className="mt-4 pt-4 border-t space-y-3">
                  <div className="font-medium text-primary">مرحباً {user.name}</div>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      حسابي
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <History className="h-4 w-4 mr-2" />
                      طلباتي السابقة
                    </Button>
                    <Button 
                      variant="ghost"
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full justify-start text-destructive"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      تسجيل الخروج
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  className="btn-tafaneen mt-4"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <User className="h-4 w-4 ml-2" />
                  تسجيل الدخول
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
      {/* Auth Dialog */}
      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} />
    </header>
  );
}
