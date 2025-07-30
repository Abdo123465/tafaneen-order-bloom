import { useState } from "react";
import { ShoppingCart, MapPin, Truck, MessageCircle, Download, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { downloadInvoice } from "@/utils/pdfGenerator";
import { useToast } from "@/hooks/use-toast";

export function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount, clearCart } = useCart();
  const [showOptions, setShowOptions] = useState(false);
  const [showPickupOptions, setShowPickupOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const cartCount = getItemCount();
  const totalPrice = getTotalPrice();

  const generateInvoiceNumber = () => {
    return `TF-${Date.now().toString().slice(-8)}`;
  };

  const handleWhatsAppNotification = () => {
    const orderSummary = items.map(item => 
      `${item.name} - الكمية: ${item.quantity} - السعر: ${item.price * item.quantity} جنيه`
    ).join('\n');
    
    const message = `مرحباً، أريد تأكيد طلبية الاستلام من المكتبة:\n\n${orderSummary}\n\nالإجمالي: ${totalPrice} جنيه\n\nشكراً لكم.`;
    const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال الطلب",
      description: "تم فتح واتساب لإرسال تفاصيل الطلب",
    });
  };

  const handleDownloadInvoice = () => {
    if (items.length === 0) {
      toast({
        title: "السلة فارغة",
        description: "يرجى إضافة منتجات للسلة أولاً",
        variant: "destructive",
      });
      return;
    }

    const invoiceData = {
      items,
      totalPrice,
      invoiceNumber: generateInvoiceNumber(),
      date: new Date().toLocaleDateString('ar-EG'),
    };

    downloadInvoice(invoiceData);
    
    toast({
      title: "تم تحميل الفاتورة",
      description: "يمكنك الآن إرسالها عبر واتساب",
    });

    // Open WhatsApp with invoice message
    setTimeout(() => {
      const message = "مرحباً، تم تحميل الفاتورة وسأقوم بإرسالها الآن. شكراً لكم.";
      const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const handleDeliveryOption = () => {
    const orderSummary = items.map(item => 
      `${item.name} - الكمية: ${item.quantity} - السعر: ${item.price * item.quantity} جنيه`
    ).join('\n');
    
    const message = `مرحباً، أريد طلب توصيل للمنزل:\n\n${orderSummary}\n\nالإجمالي: ${totalPrice} جنيه\n\nيرجى تأكيد الطلب وتحديد وقت التوصيل. شكراً لكم.`;
    const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال طلب التوصيل",
      description: "تم فتح واتساب لتأكيد طلب التوصيل",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -left-2 h-5 w-5 flex items-center justify-center p-0 text-xs badge-new">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-right">سلة التسوق</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>السلة فارغة</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="flex-1 text-right">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.price} جنيه</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>الإجمالي: {totalPrice} جنيه</span>
              </div>
              
              {/* Main Options */}
              {!showOptions && !showPickupOptions && (
                <div className="space-y-2">
                  <Button 
                    className="w-full btn-tafaneen"
                    onClick={() => setShowOptions(true)}
                  >
                    إتمام الطلب
                  </Button>
                </div>
              )}
              
              {/* Delivery/Pickup Options */}
              {showOptions && !showPickupOptions && (
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={() => setShowPickupOptions(true)}
                  >
                    <MapPin className="h-4 w-4" />
                    استلام من المكتبة
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={handleDeliveryOption}
                  >
                    <Truck className="h-4 w-4" />
                    توصيل
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowOptions(false)}
                  >
                    <X className="h-4 w-4 ml-2" />
                    رجوع
                  </Button>
                </div>
              )}
              
              {/* Pickup Sub-options */}
              {showPickupOptions && (
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2 bg-whatsapp text-white hover:bg-whatsapp/90"
                    onClick={handleWhatsAppNotification}
                  >
                    <MessageCircle className="h-4 w-4" />
                    إرسال الإشعار عبر واتساب
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={handleDownloadInvoice}
                  >
                    <Download className="h-4 w-4" />
                    تنزيل الفاتورة وإرسالها عبر واتساب
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowPickupOptions(false)}
                  >
                    <X className="h-4 w-4 ml-2" />
                    رجوع
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}