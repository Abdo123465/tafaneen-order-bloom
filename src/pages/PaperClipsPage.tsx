// src/pages/PaperClipsPage.tsx
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star, Award, Image as ImageIcon, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

const paperClips = [
{
id: 'CLIP-001',
name: 'مشابك ورق معدنية صغيرة',
price: 5,
image: '/assets/paper-clips-metal-small.jpg',
fallbackEmoji: '📎',
description: 'مشابك ورق معدنية صغيرة الحجم، مثالية للمستندات اليومية',
brand: 'Deli'
},
{
id: 'CLIP-002',
name: 'مشابك ورق معدنية متوسطة',
price: 7,
image: '/assets/paper-clips-metal-medium.jpg',
fallbackEmoji: '📎',
description: 'مشابك ورق معدنية متوسطة الحجم، مناسبة للمستندات المتوسطة',
brand: 'Deli'
},
{
id: 'CLIP-003',
name: 'مشابك ورق معدنية كبيرة',
price: 10,
image: '/assets/paper-clips-metal-large.jpg',
fallbackEmoji: '📎',
description: 'مشابك ورق معدنية كبيرة الحجم، مثالية للمستندات السميكة',
brand: 'Deli'
},
{
id: 'CLIP-004',
name: 'مشابك ورق بلاستيكية ملونة - صغيرة',
price: 8,
image: '/assets/paper-clips-plastic-small.jpg',
fallbackEmoji: '🔖',
description: 'مشابك ورق بلاستيكية ملونة صغيرة الحجم، مثالية للتنظيم',
brand: 'Prima'
},
{
id: 'CLIP-005',
name: 'مشابك ورق بلاستيكية ملونة - متوسطة',
price: 10,
image: '/assets/paper-clips-plastic-medium.jpg',
fallbackEmoji: '🔖',
description: 'مشابك ورق بلاستيكية ملونة متوسطة الحجم، مناسبة للمستندات المتعددة',
brand: 'Prima'
},
{
id: 'CLIP-006',
name: 'مشابك ورق بلاستيكية ملونة - كبيرة',
price: 12,
image: '/assets/paper-clips-plastic-large.jpg',
fallbackEmoji: '🔖',
description: 'مشابك ورق بلاستيكية ملونة كبيرة الحجم، مثالية للمستندات السميكة',
brand: 'Prima'
},
{
id: 'CLIP-007',
name: 'مشابك ورق على شكل حيوانات',
price: 15,
image: '/assets/paper-clips-animal-shape.jpg',
fallbackEmoji: '🐾',
description: 'مشابك ورق على شكل حيوانات ملونة، مثالية للأطفال والمدارس',
brand: 'Disney'
},
{
id: 'CLIP-008',
name: 'مشابك ورق على شكل قلوب',
price: 15,
image: '/assets/paper-clips-heart-shape.jpg',
fallbackEmoji: '❤️',
description: 'مشابك ورق على شكل قلوب ملونة، مثالية للهدايا والبطاقات',
brand: 'Hello Kitty'
},
{
id: 'CLIP-009',
name: 'مشابك ورق مغناطيسية',
price: 20,
image: '/assets/paper-clips-magnetic.jpg',
fallbackEmoji: '🧲',
description: 'مشابك ورق مغناطيسية، مثالية للثلاجة واللوحات المعدنية',
brand: 'Deli'
},
{
id: 'CLIP-010',
name: 'مشابك ورق حرفية (Decorative)',
price: 18,
image: '/assets/paper-clips-decorative.jpg',
fallbackEmoji: '✨',
description: 'مشابك ورق حرفية مزينة، مثالية للمشاريع الفنية والهدايا',
brand: 'Prima'
},
{
id: 'CLIP-011',
name: 'مشابك ورق معدنية مطلية بالذهب',
price: 25,
image: '/assets/paper-clips-gold.jpg',
fallbackEmoji: '⭐',
description: 'مشابك ورق معدنية مطلية بالذهب، مثالية للمستندات الهامة',
brand: 'Bravo'
},
{
id: 'CLIP-012',
name: 'مشابك ورق معدنية مطلية بالفضة',
price: 25,
image: '/assets/paper-clips-silver.jpg',
fallbackEmoji: '🌟',
description: 'مشابك ورق معدنية مطلية بالفضة، مثالية للمستندات الهامة',
brand: 'Bravo'
},
];

// مكون خاص لعرض الصور مع fallback
const ProductImage = ({ src, alt, fallbackEmoji, className }) => {
const [imageError, setImageError] = useState(false);
const [imageLoading, setImageLoading] = useState(true);

return (
<div className={`bg-white rounded-xl aspect-square flex items-center justify-center overflow-hidden border border-gray-100 group-hover:shadow-md transition-shadow ${className}`}>
{!imageError ? (
<>
{imageLoading && (
<div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
<ImageIcon className="h-8 w-8 text-gray-400" />
</div>
)}
<img
src={src}
alt={alt}
className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
onLoad={() => setImageLoading(false)}
onError={() => {
setImageError(true);
setImageLoading(false);
}}
style={{ display: imageLoading ? 'none' : 'block' }}
/>
</>
) : (
// Fallback - عرض الإيموجي إذا فشل تحميل الصورة
<div className="text-6xl">{fallbackEmoji}</div>
)}
</div>
);
};

const PaperClipsPage = () => {
const { addItem } = useCart();

useEffect(() => {
document.title = "مشابك الأوراق | تفانين";
const desc = "تسوق مشابك الأوراق عالية الجودة - معدنية وبلاستيكية بأحجام مختلفة من تفانين.";
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
<Link to="/categories" className="hover:text-primary">الفئات</Link>
<ArrowRight className="h-4 w-4" />
<Link to="/office-supplies" className="hover:text-primary">الأدوات المكتبية</Link>
<ArrowRight className="h-4 w-4" />
<span className="text-foreground">مشابك الأوراق</span>
</nav>

{/* Hero Section */}
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="text-6xl">📎</div>
<Paperclip className="h-8 w-8 text-blue-500" />
</div>
<h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
مشابك الأوراق
</h1>
<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
مشابك معدنية وبلاستيكية بأحجام مختلفة - اختر ما يناسب احتياجاتك
</p>
<div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
<span className="text-sm font-medium">تنظيم سهل وفعال</span>
</div>
</div>

{/* Features */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-muted/30 rounded-2xl p-6">
<div className="text-center">
<div className="text-3xl mb-2">📎</div>
<h3 className="font-semibold mb-1">تثبيت آمن</h3>
<p className="text-sm text-muted-foreground">تثبيت قوي للمستندات دون إتلافها</p>
</div>
<div className="text-center">
<div className="text-3xl mb-2">🎨</div>
<h3 className="font-semibold mb-1">أشكال وألوان متعددة</h3>
<p className="text-sm text-muted-foreground">تنظيم جذاب ومميز للمستندات</p>
</div>
<div className="text-center">
<div className="text-3xl mb-2">💪</div>
<h3 className="font-semibold mb-1">مادة عالية الجودة</h3>
<p className="text-sm text-muted-foreground">معدنية وبلاستيكية متينة تدوم طويلاً</p>
</div>
</div>

{/* Products Grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{paperClips.map((clip) => (
<div key={clip.id} className="card-product relative group">
{/* Brand Badge */}
<div className="absolute top-3 left-3 z-10">
<span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
{clip.brand}
</span>
</div>

{/* Product Image مع مكون محسن */}
<ProductImage
src={clip.image}
alt={clip.name}
fallbackEmoji={clip.fallbackEmoji}
className="mb-4"
/>

<h3 className="font-semibold mb-2 line-clamp-2">{clip.name}</h3>

<p className="text-sm text-muted-foreground mb-3 line-clamp-2">{clip.description}</p>

<div className="flex items-center justify-between mt-auto">
<span className="text-primary font-bold text-lg">{clip.price} ج.م</span>
<Button
className="btn-tafaneen"
onClick={() => addItem({
id: clip.id,
name: clip.name,
price: clip.price,
image: clip.image
})}
>
إضافة للسلة
</Button>
</div>
</div>
))}
</div>

{/* Info Section */}
<div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
<h2 className="text-2xl font-bold mb-4">أنواع مشابك الأوراق</h2>
<p className="text-muted-foreground max-w-3xl mx-auto mb-6">
نوفر لك مجموعة شاملة من مشابك الأوراق لتناسب جميع الاحتياجات:
<br /><br />
<strong>مشابك معدنية:</strong> متينة وقوية، مثالية للمستندات اليومية والمكتبية.
<br />
<strong>مشابك بلاستيكية:</strong> خفيفة ومتوفرة بألوان متعددة، مثالية للتنظيم والتصنيف.
<br />
<strong>مشابك مزينة:</strong> بأشكال وألوان جذابة، مثالية للمشاريع الفنية والهدايا.
<br />
<strong>مشابك مغناطيسية:</strong> مثالية للثلاجة واللوحات المعدنية لتثبيت الملاحظات.
</p>
<div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
<div className="flex items-center gap-2">
<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
<span>جودة عالية</span>
</div>
<div className="flex items-center gap-2">
<Award className="h-4 w-4" />
<span>تنظيم فعال</span>
</div>
</div>
</div>

{/* Back to categories */}
<div className="text-center mt-12">
<Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
<Link to="/office-supplies">العودة إلى الأدوات المكتبية</Link>
</Button>
</div>
</main>
<Footer />
</div>
);
};

export default PaperClipsPage;
