import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const quickMessages = [
    "أريد الاستفسار عن كتاب معين",
    "ما هي طرق الدفع المتاحة؟",
    "كم مدة التوصيل؟",
    "هل يوجد خصومات حالياً؟"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/201234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleQuickMessage = (quickMsg: string) => {
    const whatsappUrl = `https://wa.me/201234567890?text=${encodeURIComponent(quickMsg)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-elegant border border-border mb-4 w-80 animate-bounce-in">
          {/* Header */}
          <div className="bg-whatsapp text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">دعم تفانين</h3>
                <p className="text-xs opacity-90">متاح الآن</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="text-sm text-muted-foreground">
              مرحباً! كيف يمكننا مساعدتك اليوم؟
            </div>

            {/* Quick Messages */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">رسائل سريعة:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg)}
                  className="w-full text-right p-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">أو اكتب رسالتك:</p>
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="text-sm"
                  dir="rtl"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-whatsapp w-14 h-14 rounded-full shadow-glow hover:scale-110 transition-all duration-300"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
}