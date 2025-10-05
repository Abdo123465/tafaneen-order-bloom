// قاعدة بيانات شاملة للمنتجات
import Bravo100Image from "@/assets/Bravo-100.jpg";
import Bravo200Image from "@/assets/Bravo-200.jpg";
import Bravo300Image from "@/assets/Bravo-300.jpg";
import BRAVODARKImage from "@/assets/BRAVO-DARK.jpg";
import BravoPlusImage from "@/assets/Bravo-Plus.jpg";

import rotoLiquidBallBlueImage from "@/assets/roto-liquid-ball-blue.jpg";
import rotoLiquidBallRedImage from "@/assets/roto-liquid-ball-red.jpg.jpg";
import rotoLiquidBallBlackImage from "@/assets/51HPLTMFlhL.jpg";
import rotoRapidBlueImage from "@/assets/roto-rapid-blue.jpg";
import rotoRapidRedImage from "@/assets/roto-rapid-red.jpg";
import rotoRapidBlackImage from "@/assets/roto-rapid-black.jpg";
import ROTOAEROImage from "@/assets/ROTO-AERO.jpg";
import RotoButterBallblueImage from "@/assets/Roto-Butter-Ball-blue.jpg";
import RotoButterBallredImage from "@/assets/Roto-Butter-Ball-red.jpg";
import RotoButterBallblackImage from "@/assets/Roto-Butter-Ball-black.jpg";
import ROTOEsayFlowblueImage from "@/assets/ROTO-Esay-Flow-blue.jpg";
import ROTOEsayFlowredImage from "@/assets/ROTO-Esay-Flow-red.jpg";
import ROTOEsayFlowblackImage from "@/assets/ROTO-Esay-Flow-black.jpg";
import RotoGPlusblueImage from "@/assets/Roto-G-Plus-blue.jpg";
import RotoGPlusblackImage from "@/assets/Roto-G-Plus-black.jpg";
import RotoGPlusredImage from "@/assets/Roto-G-Plus-red.jpg";
import RotoGlaseblueImage from "@/assets/Roto-Glase-blue.jpg";
import RotoGlaseblackImage from "@/assets/Roto-Glase-black.jpg";
import RotoGlaseredImage from "@/assets/Roto-Glase-red.jpg";
import RotoPyramidblueImage from "@/assets/Roto-Pyramid-blue.jpg";
import ROTORACERblueImage from "@/assets/ROTO-RACER-blue.jpg";

import prima25Image from "@/assets/prima-25.jpg";
import PrimaDanteImage from "@/assets/Prima-Dante.jpg";
import PrimaFancyImage from "@/assets/Prima-Fancy.jpg";
import PrimaFinoImage from "@/assets/Prima-Fino.jpg";
import PRIMAFORMAblueImage from "@/assets/PRIMA-FORMA-blue.jpg";
import PRIMAFORMAredImage from "@/assets/PRIMA-FORMA-red.jpg";
import PRIMAFORMAblackImage from "@/assets/PRIMA-FORMA-black.jpg";
import primaforsaImage from "@/assets/prima-forsa.jpg";
import PrimaGentaImage from "@/assets/Prima-Genta.jpg";
import primalinoaImage from "@/assets/prima-lino.jpg";
import PrimaNovaImage from "@/assets/Prima-Nova.jpg";
import PrimaSevenImage from "@/assets/Prima-Seven.jpg";
import PRIMASOLOImage from "@/assets/PRIMA-SOLO.jpg";
import primatangoImage from "@/assets/prima-tango.jpg";
import primaunoImage from "@/assets/prima-uno.jpg";
import primaVISAImage from "@/assets/prima-VISA.jpg";

import fransawyBlackImage from "@/assets/fransawy-Black.jpg";
import fransawyBlueImage from "@/assets/fransawy-Blue.jpg";
import fransawyRedImage from "@/assets/fransawy-Red.jpg";

import PENSANMYTECH from "@/assets/PENSAN-MY-TECH-Blue.jpg";
import PENSANMYTECHBlack from "@/assets/PENSAN-MY-TECH-black.jpg";
import PENSANMYTECHRed from "@/assets/PENSAN-MY-TECH-red.jpg";
import PENSANSTARTECH from "@/assets/PENSAN-STAR-TECH.jpg";
import PENSANTR23 from "@/assets/PENSAN-TR-23.jpg";
import PENSANTRIBALL from "@/assets/PENSAN-TRIBALL.jpg";

import RoxiClassicblue from "@/assets/Roxi-Classic-blue.jpg";
import RoxiGold from "@/assets/Roxi-Gold.jpg";
import RoxiH4 from "@/assets/Roxi-H4.jpg";
import RoxiMytech from "@/assets/Roxi-My-tech.jpg";
import PlaceholderImage from '@/assets/placeholder.svg?url';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string | string[];
  brand: string;
  keywords: string[];
  inStock: boolean;
  rating: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isPopular?: boolean;
}

export const allProducts: Product[] = [
  // أقلام برافو
  {
    id: 'Bravo-100',
    name: 'قلم برافو 100 جاف - أزرق',
    description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية',
    price: 8,
    image: Bravo100Image,
    category: 'أقلام',
    brand: 'برافو',
    keywords: ['برافو', 'bravo', 'جاف', 'أزرق', 'كتابة', '100'],
    inStock: true,
    rating: 4.5,
    isPopular: true
  },
  {
    id: 'Bravo-200',
    name: 'قلم برافو جاف 200 - أزرق',
    description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية',
    price: 8,
    image: Bravo200Image,
    category: 'أقلام',
    brand: 'برافو',
    keywords: ['برافو', 'bravo', 'جاف', 'أزرق', 'كتابة', '200'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'Bravo-300',
    name: 'قلم برافو جاف 300 - أزرق',
    description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية',
    price: 8,
    image: Bravo300Image,
    category: 'أقلام',
    brand: 'برافو',
    keywords: ['برافو', 'bravo', 'جاف', 'أزرق', 'كتابة', '300'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'BRAVO-DARK',
    name: 'قلم برافو دارك جاف - أزرق',
    description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية',
    price: 13,
    image: BRAVODARKImage,
    category: 'أقلام',
    brand: 'برافو',
    keywords: ['برافو', 'bravo', 'دارك', 'dark', 'جاف', 'أزرق'],
    inStock: true,
    rating: 4.6,
    isBestSeller: true
  },
  {
    id: 'Bravo-Plus',
    name: 'قلم برافو بلس جاف - أزرق',
    description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية',
    price: 10,
    image: BravoPlusImage,
    category: 'أقلام',
    brand: 'برافو',
    keywords: ['برافو', 'bravo', 'بلس', 'plus', 'جاف', 'أزرق'],
    inStock: true,
    rating: 4.4
  },

  // أقلام روتو
  {
    id: 'roto-liquid-ball-blue',
    name: 'قلم روتو ليكويد بول - أزرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: rotoLiquidBallBlueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ليكويد', 'liquid', 'بول', 'ball', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.7,
    isPopular: true
  },
  {
    id: 'roto-liquid-ball-red',
    name: 'قلم روتو ليكويد بول - أحمر',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: rotoLiquidBallRedImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ليكويد', 'liquid', 'بول', 'ball', 'سائل', 'أحمر'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 'roto-liquid-ball-black',
    name: 'قلم روتو ليكويد بول - أسود',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: rotoLiquidBallBlackImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ليكويد', 'liquid', 'بول', 'ball', 'سائل', 'أسود'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 'roto-rapid-blue',
    name: 'قلم روتو رابيد - أزرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 10,
    image: rotoRapidBlueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'رابيد', 'rapid', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'roto-rapid-red',
    name: 'قلم روتو رابيد - أحمر',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 10,
    image: rotoRapidRedImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'رابيد', 'rapid', 'سائل', 'أحمر'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'roto-rapid-black',
    name: 'قلم روتو رابيد - أسود',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 10,
    image: rotoRapidBlackImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'رابيد', 'rapid', 'سائل', 'أسود'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'ROTO-AERO',
    name: 'قلم روتو أيرو - ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 9,
    image: ROTOAEROImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'أيرو', 'aero', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'Roto-Butter-Ball-blue',
    name: 'قلم روتو باتر بول أزرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoButterBallblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'باتر', 'butter', 'بول', 'ball', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'Roto-Butter-Ball-red',
    name: 'قلم روتو باتر بول احمر',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoButterBallredImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'باتر', 'butter', 'بول', 'ball', 'سائل', 'أحمر'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'Roto-Butter-Ball-black',
    name: 'قلم روتو باتر بول اسود',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoButterBallblackImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'باتر', 'butter', 'بول', 'ball', 'سائل', 'أسود'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'ROTO-Esay-Flow-blue',
    name: 'قلم روتو ايزي فلو ازرق',
    description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: ROTOEsayFlowblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ايزي', 'easy', 'فلو', 'flow', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'ROTO-Esay-Flow-red',
    name: 'قلم روتو ايزي فلو احمر',
    description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: ROTOEsayFlowredImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ايزي', 'easy', 'فلو', 'flow', 'سائل', 'أحمر'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'ROTO-Esay-Flow-black',
    name: 'قلم روتو ايزي فلو اسود',
    description: 'قلم حبر سائل 1.0 مم لكتابة ناعمة ودقيقة',
    price: 8,
    image: ROTOEsayFlowblackImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'ايزي', 'easy', 'فلو', 'flow', 'سائل', 'أسود'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'Roto-G-Plus-blue',
    name: 'قلم روتو جي بلس ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoGPlusblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'جي', 'g', 'بلس', 'plus', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'Roto-Glase-blue',
    name: 'قلم روتو جلاس ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoGlaseblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'جلاس', 'glass', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'Roto-Glase-red',
    name: 'قلم روتو جلاس احمر',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoGlaseredImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'جلاس', 'glass', 'سائل', 'أحمر'],
    inStock: true,
    rating: 3.9
  },
  {
    id: 'Roto-Glase-black',
    name: 'قلم روتو جلاس اسود',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoGlaseblackImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'جلاس', 'glass', 'سائل', 'أسود'],
    inStock: true,
    rating: 3.8
  },
  {
    id: 'Roto-Pyramid-blue',
    name: 'قلم روتو بيراميد ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: RotoPyramidblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'بيراميد', 'pyramid', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'ROTO-RACER-blue',
    name: 'قلم روتو راسير ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: ROTORACERblueImage,
    category: 'أقلام',
    brand: 'روتو',
    keywords: ['روتو', 'roto', 'راسير', 'racer', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.3
  },

  // أقلام بريما
  {
    id: 'prima-25',
    name: 'قلم بريما 25 ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: prima25Image,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'سائل', 'أزرق', '25'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'Prima-Dante',
    name: 'قلم بريما دانتي ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 12,
    image: PrimaDanteImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'دانتي', 'dante', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.6,
    isBestSeller: true
  },
  {
    id: 'Prima-Fancy',
    name: 'قلم بريما فانسي ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: PrimaFancyImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فانسي', 'fancy', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'Prima-Fino',
    name: 'قلم بريما فينو ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: PrimaFinoImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فينو', 'fino', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'PRIMA-FORMA-blue',
    name: 'قلم بريما فورما ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 6,
    image: PRIMAFORMAblueImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فورما', 'forma', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'PRIMA-FORMA-red',
    name: 'قلم بريما فورما احمر',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 6,
    image: PRIMAFORMAredImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فورما', 'forma', 'سائل', 'أحمر'],
    inStock: true,
    rating: 3.9
  },
  {
    id: 'PRIMA-FORMA-black',
    name: 'قلم بريما فورما اسود',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 6,
    image: PRIMAFORMAblackImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فورما', 'forma', 'سائل', 'أسود'],
    inStock: true,
    rating: 3.8
  },
  {
    id: 'prima-forsa',
    name: 'قلم بريما فورسا ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 6,
    image: primaforsaImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فورسا', 'forsa', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'Prima-Genta',
    name: 'قلم بريما جينتا ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: PrimaGentaImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'جينتا', 'genta', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'prima-lino',
    name: 'قلم بريما لينو ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: primalinoaImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'لينو', 'lino', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'Prima-Nova',
    name: 'قلم بريما نوفا ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: PrimaNovaImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'نوفا', 'nova', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'Prima-Seven',
    name: 'قلم بريما سيفين ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: PrimaSevenImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'سيفين', 'seven', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'prima-tango',
    name: 'قلم بريما تانجو ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: primatangoImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'تانجو', 'tango', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'prima-uno',
    name: 'قلم بريما اونو ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: primaunoImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'اونو', 'uno', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'prima-VISA',
    name: 'قلم بريما فيزا ازرق',
    description: 'قلم حبر سائل 0.7 مم لكتابة ناعمة ودقيقة',
    price: 7,
    image: primaVISAImage,
    category: 'أقلام',
    brand: 'بريما',
    keywords: ['بريما', 'prima', 'فيزا', 'visa', 'سائل', 'أزرق'],
    inStock: true,
    rating: 4.2
  },

  // أقلام فرنساوي
  {
    id: 'fransawy-Black',
    name: 'قلم فرنساوي اسود',
    description: 'قلم فرنساوي كلاسيك عالي الجودة باللون الاسود للكتابة الفاخرة',
    price: 5,
    image: fransawyBlackImage,
    category: 'أقلام',
    brand: 'فرنساوي',
    keywords: ['فرنساوي', 'fransawy', 'كلاسيك', 'classic', 'أسود', 'فاخر'],
    inStock: true,
    rating: 4.4,
    isPopular: true
  },
  {
    id: 'fransawy-Blue',
    name: 'قلم فرنساوي كلاسيك ازرق',
    description: 'قلم فرنساوي كلاسيك عالي الجودة باللون الازرق للكتابة الفاخرة',
    price: 5,
    image: fransawyBlueImage,
    category: 'أقلام',
    brand: 'فرنساوي',
    keywords: ['فرنساوي', 'fransawy', 'كلاسيك', 'classic', 'أزرق', 'فاخر'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'fransawy-Red',
    name: 'قلم فرنساوي كلاسيك احمر',
    description: 'قلم فرنساوي كلاسيك عالي الجودة باللون الاحمر للكتابة الفاخرة',
    price: 5,
    image: fransawyRedImage,
    category: 'أقلام',
    brand: 'فرنساوي',
    keywords: ['فرنساوي', 'fransawy', 'كلاسيك', 'classic', 'أحمر', 'فاخر'],
    inStock: true,
    rating: 4.2
  },

  // أقلام بنسان
  {
    id: 'PENSAN-MY-TECH-Blue',
    name: 'قلم بنسان ماي تك ازرق',
    description: 'قلم تقني متطور من بنسان للكتابة المتميزة',
    price: 12,
    image: PENSANMYTECH,
    category: 'أقلام',
    brand: 'بنسان',
    keywords: ['بنسان', 'pensan', 'ماي تك', 'my tech', 'تقني', 'أزرق'],
    inStock: true,
    rating: 4.5,
    isNew: true
  },
  {
    id: 'PENSAN-MY-TECH-black',
    name: 'قلم بنسان ماي تك اسود',
    description: 'قلم تقني متطور من بنسان للكتابة المتميزة',
    price: 12,
    image: PENSANMYTECHBlack,
    category: 'أقلام',
    brand: 'بنسان',
    keywords: ['بنسان', 'pensan', 'ماي تك', 'my tech', 'تقني', 'أسود'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'PENSAN-MY-TECH-red',
    name: 'قلم بنسان ماي تك احمر',
    description: 'قلم تقني متطور من بنسان للكتابة المتميزة',
    price: 12,
    image: PENSANMYTECHRed,
    category: 'أقلام',
    brand: 'بنسان',
    keywords: ['بنسان', 'pensan', 'ماي تك', 'my tech', 'تقني', 'أحمر'],
    inStock: true,
    rating: 4.3
  },

  // أقلام روكسي
  {
    id: 'Roxi-Classic-blue',
    name: 'قلم روكسي كلاسيك ازرق',
    description: 'قلم روكسي كلاسيكي للكتابة اليومية',
    price: 8,
    image: RoxiClassicblue,
    category: 'أقلام',
    brand: 'روكسي',
    keywords: ['روكسي', 'roxi', 'كلاسيك', 'classic', 'أزرق'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'Roxi-Gold',
    name: 'قلم روكسي جولد',
    description: 'قلم روكسي ذهبي فاخر للكتابة المميزة',
    price: 15,
    image: RoxiGold,
    category: 'أقلام',
    brand: 'روكسي',
    keywords: ['روكسي', 'roxi', 'جولد', 'gold', 'ذهبي', 'فاخر'],
    inStock: true,
    rating: 4.6,
    isBestSeller: true
  },
  {
    id: 'Roxi-H4',
    name: 'قلم روكسي H4',
    description: 'قلم روكسي H4 للكتابة الدقيقة',
    price: 10,
    image: RoxiH4,
    category: 'أقلام',
    brand: 'روكسي',
    keywords: ['روكسي', 'roxi', 'h4', 'دقيق'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'Roxi-My-tech',
    name: 'قلم روكسي ماي تك',
    description: 'قلم روكسي تقني متطور',
    price: 12,
    image: RoxiMytech,
    category: 'أقلام',
    brand: 'روكسي',
    keywords: ['روكسي', 'roxi', 'ماي تك', 'my tech', 'تقني'],
    inStock: true,
    rating: 4.4,
    isNew: true
  },

  // البرايات (Sharpeners)
  {
    id: 'SHARP-001',
    name: 'برايه DOMS برطمان',
    description: 'براية Doms كلاسيكية بحجم صغير، مثالية للحمل',
    price: 9,
    image: '/assets/sharpener-metal-small.jpg',
    category: 'برايات',
    brand: 'Doms',
    keywords: ['برايه', 'براية', 'sharpener', 'doms', 'برطمان', 'صغير'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'SHARP-002',
    name: 'برايه برطمان ملون',
    description: 'مع اتنين مخرج براية بلاستيكية بحاوية لحفظ البراية، مثالية للمدرسة',
    price: 22,
    image: '/assets/sharpener-plastic-container.jpg',
    category: 'برايات',
    brand: 'ojieson',
    keywords: ['برايه', 'براية', 'sharpener', 'برطمان', 'ملون', 'بلاستيك', 'مدرسة'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'SHARP-003',
    name: 'برايه بلاستيك DOMS',
    description: 'برايه بلاستيك DOMS',
    price: 9,
    image: '/assets/sharpener-double.jpg',
    category: 'برايات',
    brand: 'دومز',
    keywords: ['برايه', 'براية', 'sharpener', 'doms', 'بلاستيك', 'دومز'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'SHARP-004',
    name: 'برايه على كارت Power شكل مركب 374',
    description: 'برايه على كارت Power شكل مركب 374',
    price: 17,
    image: '/assets/sharpener-electric-small.jpg',
    category: 'برايات',
    brand: 'power',
    keywords: ['برايه', 'براية', 'sharpener', 'power', 'كارت', 'مركب'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'SHARP-005',
    name: 'برايه معدن سلاح EISEN تقليد 2 سلاح',
    description: 'برايه معدن سلاح EISEN تقليد 2 سلاح',
    price: 17,
    image: '/assets/sharpener-electric-usb.jpg',
    category: 'برايات',
    brand: 'EISEN',
    keywords: ['برايه', 'براية', 'sharpener', 'معدن', 'سلاح', 'eisen'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'SHARP-006',
    name: 'برايه برطمان ملون Xiodouxing',
    description: 'برايه برطمان ملون Xiodouxing',
    price: 5,
    image: '/assets/sharpener-manual-desk.jpg',
    category: 'برايات',
    brand: 'Xiodouxing',
    keywords: ['برايه', 'براية', 'sharpener', 'xiodouxing', 'برطمان', 'ملون'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'SHARP-007',
    name: 'برايه ميكي ف علبه',
    description: 'برايه ميكي ف علبه',
    price: 15,
    image: '/assets/sharpener-art-professional.jpg',
    category: 'برايات',
    brand: 'Disney',
    keywords: ['برايه', 'براية', 'sharpener', 'ميكي', 'mickey', 'disney', 'علبة'],
    inStock: true,
    rating: 4.4,
    isPopular: true
  },
  {
    id: 'SHARP-008',
    name: 'برايه هالو كيتي',
    description: 'برايه هالو كيتي',
    price: 15,
    image: '/assets/sharpener-set-3pcs.jpg',
    category: 'برايات',
    brand: 'Hello kitty',
    keywords: ['برايه', 'براية', 'sharpener', 'هالو', 'كيتي', 'hello', 'kitty'],
    inStock: true,
    rating: 4.5,
    isPopular: true
  },

  // الأساتيك (Erasers)
  {
    id: 'ERASER-001',
    name: 'استيكة بيضاء كبيرة',
    description: 'استيكة مطاطية بيضاء عالية الجودة، تمسح بنظافة دون ترك أثر',
    price: 5,
    image: '/assets/eraser-white-large.jpg',
    category: 'أساتيك',
    brand: 'فابر كاستل',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'فابر', 'كاستل', 'faber', 'castell', 'بيضاء', 'كبيرة'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 'ERASER-002',
    name: 'استيكة ملونة صغيرة',
    description: 'استيكة صغيرة بألوان مبهجة، مثالية للأطفال',
    price: 3,
    image: '/assets/eraser-colored-small.jpg',
    category: 'أساتيك',
    brand: 'دومز',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'دومز', 'doms', 'ملونة', 'صغيرة', 'أطفال'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'ERASER-003',
    name: 'استيكة قلم رصاص مع فرشاة',
    description: 'استيكة بتصميم عملي مع فرشاة لإزالة البقايا',
    price: 4,
    image: '/assets/eraser-pencil-brush.jpg',
    category: 'أساتيك',
    brand: 'ستيدلر',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'ستيدلر', 'staedtler', 'فرشاة', 'brush'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'ERASER-004',
    name: 'استيكة ناعمة للرسم',
    description: 'استيكة ناعمة جداً مخصصة للرسم والفنون، لا تتلف الورق',
    price: 8,
    image: '/assets/eraser-soft-art.jpg',
    category: 'أساتيك',
    brand: 'فابر كاستل',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'فابر', 'كاستل', 'رسم', 'art', 'فنون', 'ناعمة'],
    inStock: true,
    rating: 4.6,
    isBestSeller: true
  },
  {
    id: 'ERASER-005',
    name: 'استيكة بلاستيكية شفافة',
    description: 'استيكة بلاستيكية شفافة بتصميم أنيق وعصري',
    price: 6,
    image: '/assets/eraser-plastic-clear.jpg',
    category: 'أساتيك',
    brand: 'بريما',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'بريما', 'prima', 'بلاستيك', 'شفافة'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'ERASER-006',
    name: 'مجموعة أساتيك ملونة (6 قطع)',
    description: 'مجموعة من 6 أساتيك ملونة بأشكال مختلفة',
    price: 15,
    image: '/assets/eraser-set-6pcs.jpg',
    category: 'أساتيك',
    brand: 'ديلي',
    keywords: ['استيكة', 'أستيكة', 'eraser', 'ديلي', 'deli', 'مجموعة', 'set', 'ملونة'],
    inStock: true,
    rating: 4.4,
    isPopular: true
  },

  // المساطر والأدوات الهندسية (Rulers & Geometry)
  {
    id: 'ruler-1',
    name: 'مسطره سيليكون 30 سم 12 hka',
    description: 'مسطرة سيليكون عالية الجودة بقياسات دقيقة',
    price: 13,
    image: '/assets/ruler-30cm.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'flexible ruler',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'سيليكون', 'flexible', '30', 'سم'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'ruler-2',
    name: 'مسطرة بريما فن',
    description: 'مسطرة بريما فن',
    price: 12,
    image: '/assets/geometry-set.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'فن',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'بريما', 'prima', 'فن'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'ruler-3',
    name: 'مسطره سيليكون 20 سم 8 انش',
    description: 'مسطره سيليكون 20 سم 8 انش',
    price: 10,
    image: '/assets/metal-ruler-50cm.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'flexible ruler',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'سيليكون', 'flexible', '20', 'سم', 'انش'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'ruler-4',
    name: 'مسطره بلاستيك شفاف 30 سم بريما',
    description: 'مسطره بلاستيك شفاف 30 سم بريما',
    price: 12,
    image: '/assets/triangle-45.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'بريما',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'بلاستيك', 'شفاف', 'بريما', 'prima', '30'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 'ruler-5',
    name: 'مسطره معدن 30 سم',
    description: 'مسطره معدن 30 سم',
    price: 20,
    image: '/assets/protractor-360.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'معدن',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'معدن', 'metal', '30', 'سم'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'ruler-6',
    name: 'مسطره بلاستيك فسفوري بريما 20 سم',
    description: 'مسطره بلاستيك فسفوري بريما 20 سم 2011',
    price: 7,
    image: '/assets/compass-metal.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'بريما',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'بلاستيك', 'فسفوري', 'بريما', 'prima', '20'],
    inStock: true,
    rating: 4.0
  },
  {
    id: 'ruler-7',
    name: 'طقم هندسي معدن ROXi 36753',
    description: 'طقم هندسي معدن ROXi 36753',
    price: 80,
    image: '/assets/Roxi.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'روكسي',
    keywords: ['طقم', 'هندسي', 'geometry', 'set', 'روكسي', 'roxi', 'معدن'],
    inStock: true,
    rating: 4.7,
    isBestSeller: true
  },
  {
    id: 'ruler-8',
    name: 'مسطره منقله Prima Queen',
    description: 'مسطره منقله Prima Queen',
    price: 7,
    image: '/assets/Prima.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'بريما',
    keywords: ['مسطرة', 'مسطره', 'ruler', 'منقلة', 'protractor', 'بريما', 'prima', 'queen'],
    inStock: true,
    rating: 4.1
  },
  {
    id: 'ruler-9',
    name: 'علبة برجل سنون اندلسيه G3-1999',
    description: 'طقم هندسي 8 قطع 2224',
    price: 60,
    image: '/assets/G3-1999.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'اندلسيه',
    keywords: ['برجل', 'compass', 'طقم', 'هندسي', 'اندلسيه', 'سنون'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 'ruler-10',
    name: 'مثلث كوين',
    description: 'مثلث كوين',
    price: 10,
    image: '/src/assets/Qwen.jpg',
    category: 'مساطر وأدوات هندسية',
    brand: 'كوين',
    keywords: ['مثلث', 'triangle', 'كوين', 'qwen'],
    inStock: true,
    rating: 4.0
  },

  // سكتش كانسون أبيض (Canson Sketch White)
  {
    id: 'canson-sketch-white-1',
    name: 'اسكتش رسم ابيض 25×35 سم 150 جرام TOP',
    description: 'سكتش كانسون أبيض بمقاس A4، مثالي للرسم بالأقلام',
    price: 12,
    image: '/assets/canson-sketch-white-1.jpg',
    category: 'اسكتش كانسون',
    brand: 'TOP',
    keywords: ['اسكتش', 'sketch', 'كانسون', 'canson', 'رسم', 'ابيض', 'white', 'top', '150'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'canson-sketch-white-2',
    name: 'اسكتش رسم الاستاذ ابيض 25× 35 80 جرام 40 ورقه',
    description: 'سكتش كانسون أبيض بمقاس 25×35 سم، مثالي للمشاريع الكبيرة',
    price: 60,
    image: '/assets/canson-sketch-white-2.jpg',
    category: 'اسكتش كانسون',
    brand: 'الاستاذ',
    keywords: ['اسكتش', 'sketch', 'كانسون', 'canson', 'رسم', 'ابيض', 'white', 'استاذ', '80'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'canson-sketch-white-3',
    name: 'اسكتش ابيض 180 جرام Today',
    description: 'سكتش كانسون أبيض بمقاس 22.5×32 سم، مثالي للمشاريع الكبيرة',
    price: 50,
    image: '/assets/canson-sketch-white-3.jpg',
    category: 'اسكتش كانسون',
    brand: 'Today',
    keywords: ['اسكتش', 'sketch', 'كانسون', 'canson', 'رسم', 'ابيض', 'white', 'today', '180'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 'canson-sketch-white-4',
    name: 'اسكتش رسم ابيض 25×35 سم 140جرام بركة',
    description: 'سكتش كانسون أبيض بمقاس 25×35 سم، مثالي للمشاريع الكبيرة',
    price: 50,
    image: "/assets/canson-sketch-white-4'.jpg",
    category: 'اسكتش كانسون',
    brand: 'بركة',
    keywords: ['اسكتش', 'sketch', 'كانسون', 'canson', 'رسم', 'ابيض', 'white', 'بركة', '140'],
    inStock: true,
    rating: 4.2
  },

  // سكتش كانسون ملون (Canson Sketch Colors)
  {
    id: 'canson-sketch-colors-1',
    name: 'اسكتش رسم ملون 25×35 سم 150 جرام TOP',
    description: 'سكتش كانسون ملون بمقاس 25×35، مثالي للمشاريع الفنية الملونة',
    price: 60,
    image: '/assets/canson-sketch-colors-1.jpg',
    category: 'اسكتش كانسون',
    brand: 'TOP',
    keywords: ['اسكتش', 'sketch', 'كانسون', 'canson', 'رسم', 'ملون', 'colors', 'الوان', 'top', '150'],
    inStock: true,
    rating: 4.6,
    isPopular: true
  },

  // الأختام
  {
    id: 'STAMP-001',
    name: 'ختم مكتبي ذاتي',
    description: 'ختم مكتبي ذاتي للاستخدام الإداري',
    price: 25,
    image: PlaceholderImage,
    category: 'أختام',
    brand: 'Deli',
    keywords: ['ختم', 'مكتبي', 'ذاتي', 'deli'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 'STAMP-002',
    name: 'ختم خشبي',
    description: 'ختم خشبي تقليدي عالي الجودة',
    price: 15,
    image: PlaceholderImage,
    category: 'أختام',
    brand: 'Max',
    keywords: ['ختم', 'خشبي', 'max'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 'STAMP-003',
    name: 'ختم تاريخ',
    description: 'ختم تاريخ قابل للتعديل',
    price: 30,
    image: PlaceholderImage,
    category: 'أختام',
    brand: 'Deli',
    keywords: ['ختم', 'تاريخ', 'deli'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 'STAMP-004',
    name: 'ختم شعار الشركة',
    description: 'ختم مخصص لشعار الشركة',
    price: 50,
    image: PlaceholderImage,
    category: 'أختام',
    brand: 'Custom',
    keywords: ['ختم', 'شعار', 'شركة', 'custom'],
    inStock: true,
    rating: 4.6
  },

  // حبر الختامات
  {
    id: 'INK-001',
    name: 'حبر ختامة أسود',
    description: 'حبر ختامة عالي الجودة باللون الأسود',
    price: 15,
    image: PlaceholderImage,
    category: ['حبر ختامة', 'أدوات مكتبية متنوعة'],
    brand: 'Trodat',
    keywords: ['حبر', 'ختامة', 'أسود', 'trodat'],
    inStock: true,
    rating: 4.7
  },
  {
    id: 'INK-002',
    name: 'حبر ختامة أزرق',
    description: 'حبر ختامة عالي الجودة باللون الأزرق',
    price: 15,
    image: PlaceholderImage,
    category: 'حبر ختامة',
    brand: 'Trodat',
    keywords: ['حبر', 'ختامة', 'أزرق', 'trodat'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 'INK-003',
    name: 'حبر ختامة أحمر',
    description: 'حبر ختامة عالي الجودة باللون الأحمر',
    price: 15,
    image: PlaceholderImage,
    category: 'حبر ختامة',
    brand: 'Shiny',
    keywords: ['حبر', 'ختامة', 'أحمر', 'shiny'],
    inStock: true,
    rating: 4.5
  }
];

// دالة البحث الذكية
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  return allProducts.filter(product => {
    // البحث في الاسم
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    
    // البحث في الوصف
    const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
    
    // البحث في العلامة التجارية
    const brandMatch = product.brand.toLowerCase().includes(searchTerm);
    
    // البحث في الكلمات المفتاحية
    const keywordsMatch = product.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm)
    );
    
    // البحث في الفئة
    const categoryMatch = Array.isArray(product.category) 
      ? product.category.some(c => c.toLowerCase().includes(searchTerm))
      : product.category.toLowerCase().includes(searchTerm);
    
    return nameMatch || descriptionMatch || brandMatch || keywordsMatch || categoryMatch;
  });
}

// دالة لتصفية المنتجات حسب الفئة
export function filterByCategory(products: Product[], category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(product => {
    if (Array.isArray(product.category)) {
      return product.category.some(c => c.toLowerCase() === category.toLowerCase());
    }
    return product.category.toLowerCase() === category.toLowerCase();
  });
}

// دالة لترتيب المنتجات
export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    default:
      // ترتيب حسب الشعبية والتقييم
      return sorted.sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        if (a.isBestSeller && !b.isBestSeller) return -1;
        if (!a.isBestSeller && b.isBestSeller) return 1;
        return b.rating - a.rating;
      });
  }
}

// دالة للحصول على الفئات الفريدة
export function getUniqueCategories(): string[] {
  const categories = allProducts.flatMap(product => 
    Array.isArray(product.category) ? product.category : [product.category]
  );
  return ['all', ...Array.from(new Set(categories))];
}

// دالة للحصول على العلامات التجارية الفريدة
export function getUniqueBrands(): string[] {
  const brands = allProducts.map(product => product.brand);
  return Array.from(new Set(brands));
}
