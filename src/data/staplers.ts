// src/data/staplers.ts

export interface Stapler {
  id: string;
  name: string;
  price: number;
  image: string;
  fallbackEmoji: string;
  description: string;
  brand: string;
  size: string;
  capacity?: string;
}

export const staplers: Stapler[] = [
  { 
    id: 'STAPLER-001', 
    name: 'دباسة مكتبية صغيرة', 
    price: 25, 
    image: '/placeholder.svg', 
    fallbackEmoji: '📎',
    description: 'دباسة مكتبية صغيرة الحجم مثالية للاستخدام اليومي',
    brand: 'Deli',
    size: 'صغير',
    capacity: 'حتى 20 ورقة'
  },
  { 
    id: 'STAPLER-002', 
    name: 'دباسة مكتبية متوسطة', 
    price: 45, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة متوسطة الحجم بسعة تدبيس عالية',
    brand: 'Deli',
    size: 'متوسط',
    capacity: 'حتى 40 ورقة'
  },
  { 
    id: 'STAPLER-003', 
    name: 'دباسة مكتبية كبيرة', 
    price: 85, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة كبيرة احترافية للاستخدام المكثف',
    brand: 'Deli',
    size: 'كبير',
    capacity: 'حتى 60 ورقة'
  },
  { 
    id: 'STAPLER-004', 
    name: 'دباسة مكتبية ميني', 
    price: 18, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة صغيرة جداً سهلة الحمل والاستخدام',
    brand: 'Prima',
    size: 'ميني',
    capacity: 'حتى 10 أوراق'
  },
  { 
    id: 'STAPLER-005', 
    name: 'دباسة مكتبية ثقيلة', 
    price: 120, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة للأعمال الثقيلة والاستخدام المهني',
    brand: 'Deli',
    size: 'كبير جداً',
    capacity: 'حتى 100 ورقة'
  },
  { 
    id: 'STAPLER-006', 
    name: 'دباسة مكتبية ملونة', 
    price: 30, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة بألوان زاهية ومبهجة',
    brand: 'Prima',
    size: 'صغير',
    capacity: 'حتى 20 ورقة'
  },
  { 
    id: 'STAPLER-007', 
    name: 'دباسة طويلة الذراع', 
    price: 95, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة بذراع طويل للوصول إلى منتصف الأوراق',
    brand: 'Deli',
    size: 'متوسط',
    capacity: 'حتى 30 ورقة'
  },
  { 
    id: 'STAPLER-008', 
    name: 'دباسة بدون دبابيس', 
    price: 55, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة صديقة للبيئة لا تحتاج دبابيس',
    brand: 'Deli',
    size: 'صغير',
    capacity: 'حتى 5 أوراق'
  },
  { 
    id: 'STAPLER-009', 
    name: 'دباسة كهربائية', 
    price: 280, 
    image: '/placeholder.svg',
    fallbackEmoji: '📎',
    description: 'دباسة كهربائية احترافية للعمل السريع',
    brand: 'Deli',
    size: 'كبير',
    capacity: 'حتى 80 ورقة'
  },
];
