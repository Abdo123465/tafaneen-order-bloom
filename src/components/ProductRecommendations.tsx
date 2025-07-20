import { useState } from "react";
import { MessageSquare, BookOpen, PenTool, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const chatbotSuggestions = [
  {
    category: "كتب تعليمية",
    icon: GraduationCap,
    color: "bg-book-category",
    items: ["كتب الرياضيات", "كتب العلوم", "كتب اللغة العربية", "كتب التاريخ"]
  },
  {
    category: "قرطاسية مكتبية",
    icon: PenTool,
    color: "bg-stationery-category",
    items: ["أقلام جل", "دفاتر A4", "مجلدات", "أدوات هندسية"]
  },
  {
    category: "كتب الأطفال",
    icon: BookOpen,
    color: "bg-children-category",
    items: ["قصص مصورة", "كتب تلوين", "قصص الأنبياء", "حكايات ما قبل النوم"]
  }
];

const quickQuestions = [
  "أريد كتباً لطفل عمره 8 سنوات",
  "ما أفضل أقلام للرسم الهندسي؟",
  "أحتاج كتب تحضيري للجامعة",
  "قرطاسية مكتبية شاملة"
];

export function ProductRecommendations() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "مرحباً! أنا مساعدك الذكي في تفانين. كيف يمكنني مساعدتك في العثور على الكتب والقرطاسية المناسبة؟"
    }
  ]);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Add user message
      setChatHistory(prev => [...prev, { type: "user", message: userMessage }]);
      
      // Simulate bot response
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          type: "bot",
          message: `بناءً على طلبك "${userMessage}"، أنصحك بهذه المنتجات المميزة. هل تريد مني البحث عن منتجات محددة أخرى؟`
        }]);
      }, 1000);
      
      setUserMessage("");
    }
  };

  const handleQuickQuestion = (question: string) => {
    setChatHistory(prev => [...prev, { type: "user", message: question }]);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: "bot",
        message: "ممتاز! دعني أقترح عليك أفضل المنتجات المناسبة لاحتياجك. يمكنك تصفح الاقتراحات أدناه أو سؤالي عن تفاصيل أكثر."
      }]);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            مساعد المنتجات الذكي
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">اكتشف ما تحتاجه</span> بسهولة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مساعدنا الذكي يساعدك في العثور على الكتب والقرطاسية المناسبة لاحتياجاتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chatbot Interface */}
          <div className="card-tafaneen">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">مساعد تفانين الذكي</h3>
                <p className="text-sm text-muted-foreground">اسأل عن أي منتج تحتاجه</p>
              </div>
            </div>

            {/* Chat History */}
            <div className="bg-muted/30 rounded-xl p-4 h-64 overflow-y-auto mb-4 space-y-3">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      chat.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white text-foreground border'
                    }`}
                  >
                    {chat.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">أسئلة سريعة:</p>
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-right p-2 text-sm bg-muted hover:bg-primary/10 rounded-lg transition-colors border border-transparent hover:border-primary/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="اسأل عن أي منتج تحتاجه..."
                className="text-sm"
                dir="rtl"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="btn-tafaneen">
                إرسال
              </Button>
            </div>
          </div>

          {/* Categories Suggestions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">تصفح حسب الاهتمام</h3>
            
            {chatbotSuggestions.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="card-category"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${category.color} text-white p-3 rounded-xl`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3">{category.category}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.items.map((item, itemIndex) => (
                          <button
                            key={itemIndex}
                            onClick={() => handleQuickQuestion(`أريد ${item}`)}
                            className="text-right p-2 text-sm bg-muted hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}