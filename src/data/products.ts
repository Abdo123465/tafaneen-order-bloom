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

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
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
    const categoryMatch = product.category.toLowerCase().includes(searchTerm);
    
    return nameMatch || descriptionMatch || brandMatch || keywordsMatch || categoryMatch;
  });
}

// دالة لتصفية المنتجات حسب الفئة
export function filterByCategory(products: Product[], category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
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
  const categories = allProducts.map(product => product.category);
  return ['all', ...Array.from(new Set(categories))];
}

// دالة للحصول على العلامات التجارية الفريدة
export function getUniqueBrands(): string[] {
  const brands = allProducts.map(product => product.brand);
  return Array.from(new Set(brands));
}