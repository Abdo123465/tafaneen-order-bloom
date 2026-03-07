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
      const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleQuickMessage = (quickMsg: string) => {
    const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(quickMsg)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      {isOpen && (
        <div className="glass-card mb-4 w-80 animate-bounce-in border-whatsapp/20">
          <div className="bg-whatsapp/90 backdrop-blur-md text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black text-lg">دعم تفانين</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-xs font-bold opacity-90">متصل الآن</p>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-5 space-y-6 bg-white/60">
            <div className="text-sm font-bold text-muted-foreground leading-relaxed">
              مرحباً بك في تفانين! 👋 <br/> كيف يمكننا مساعدتك اليوم؟
            </div>

            <div className="space-y-3">
              <p className="text-xs font-black text-primary uppercase tracking-wider">رسائل سريعة:</p>
              <div className="grid gap-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(msg)}
                    className="text-right p-3 text-sm font-medium bg-white/40 hover:bg-whatsapp/10 hover:text-whatsapp rounded-xl transition-all duration-300 border border-transparent hover:border-whatsapp/20"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-black text-primary uppercase tracking-wider">أو اكتب رسالتك:</p>
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="text-sm rounded-xl border-white/40 bg-white/50 focus:bg-white"
                  dir="rtl"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl shadow-lg shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-whatsapp hover:bg-whatsapp/90 text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all duration-500"
        size="icon"
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </Button>

      {!isOpen && (
        <div className="absolute inset-0 bg-whatsapp rounded-2xl animate-ping opacity-20 -z-10"></div>
      )}
    </div>
  );
}
