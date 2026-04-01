const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src/pages');
const DATA_DIR = path.join(__dirname, 'src/data');

const allProducts = new Map();

// Constants found in the code
const CONSTANTS = {
  'PlaceholderImage': '/placeholder.svg'
};

// Helper to resolve image paths
function resolveImagePath(image, importMap) {
  if (!image) return '';
  if (CONSTANTS[image]) return CONSTANTS[image];

  if (typeof image === 'string') {
    if (image.startsWith('/assets/')) return image;
    if (image.startsWith('@/assets/')) return image.replace('@/assets/', '/assets/');
    if (image.startsWith('./')) return image;
  }

  if (importMap && importMap.has(image)) {
    let resolved = importMap.get(image);
    if (resolved.startsWith('@/assets/')) return resolved.replace('@/assets/', '/assets/');
    if (resolved.startsWith('@/')) return resolved.replace('@/', '/src/');
    return resolved;
  }
  return image;
}

function processDataProducts() {
  const filePath = path.join(DATA_DIR, 'products.ts');
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  // Map imports
  const importMap = new Map();
  const importRegex = /import\s+(\w+)\s+from\s+['"](.+?)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    importMap.set(match[1], match[2]);
  }

  // Extract allProducts array content
  const allProductsMatch = /export const allProducts: Product\[\] = \[([\s\S]*?)\];/ .exec(content);
  if (!allProductsMatch) return;

  const arrayContent = allProductsMatch[1];

  // Extract individual objects
  const objRegex = /\{[\s\S]*?id:\s*['"](.+?)['"][\s\S]*?\}/g;
  while ((match = objRegex.exec(arrayContent)) !== null) {
    const objStr = match[0];
    const id = match[1];

    const nameMatch = /name:\s*['"](.+?)['"]/.exec(objStr);
    const name = nameMatch ? nameMatch[1] : '';

    const priceMatch = /price:\s*(\d+)/.exec(objStr);
    const price = priceMatch ? parseInt(priceMatch[1]) : 0;

    const descMatch = /description:\s*['"](.+?)['"]/.exec(objStr);
    const description = descMatch ? descMatch[1] : '';

    const imageMatch = /image:\s*([\w\d]+|['"].+?['"])/.exec(objStr);
    let image = imageMatch ? imageMatch[1].replace(/['"]/g, '') : '';
    image = resolveImagePath(image, importMap);

    const brandMatch = /brand:\s*['"](.+?)['"]/.exec(objStr);
    const brand = brandMatch ? brandMatch[1] : '';

    const categoryMatch = /category:\s*['"](.+?)['"]/.exec(objStr);
    const category = categoryMatch ? categoryMatch[1] : '';

    if (!allProducts.has(id)) {
      allProducts.set(id, { id, name, price, image, description, brand, category });
    }
  }
}

function processGenericFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Find all objects with id, name, price
  const objRegex = /\{[\s\S]*?id:\s*['"](.+?)['"][\s\S]*?\}/g;
  let match;
  while ((match = objRegex.exec(content)) !== null) {
    const objStr = match[0];
    if (objStr.includes('id: string') || objStr.includes('id: "string"')) continue;

    const id = match[1];

    const nameMatch = /name:\s*['"](.+?)['"]/.exec(objStr);
    if (!nameMatch) continue;
    const name = nameMatch[1];

    const priceMatch = /price:\s*(\d+)/.exec(objStr);
    if (!priceMatch) continue;
    const price = parseInt(priceMatch[1]);

    const descMatch = /description:\s*['"](.+?)['"]/.exec(objStr);
    const description = descMatch ? descMatch[1] : '';

    const imageMatch = /image:\s*(['"])(.+?)\1/.exec(objStr);
    let image = imageMatch ? imageMatch[2] : '';

    if (!image) {
       // Fallback for emojis or unquoted strings (variable names)
       const fallbackImageMatch = /image:\s*([^\s,{}]+)/.exec(objStr);
       if (fallbackImageMatch) image = fallbackImageMatch[1].replace(/['"]/g, '');
    }

    const brandMatch = /brand:\s*['"](.+?)['"]/.exec(objStr);
    const brand = brandMatch ? brandMatch[1] : '';

    const categoryMatch = /category:\s*['"](.+?)['"]/.exec(objStr);
    let category = categoryMatch ? categoryMatch[1] : path.basename(filePath, '.tsx').replace('Page', '');

    if (!allProducts.has(id)) {
      allProducts.set(id, { id, name, price, image, description, brand, category });
    }
  }
}

function main() {
  processDataProducts();

  const files = fs.readdirSync(PAGES_DIR);
  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      processGenericFile(path.join(PAGES_DIR, file));
    }
  });

  const staplersPath = path.join(DATA_DIR, 'staplers.ts');
  if (fs.existsSync(staplersPath)) {
    processGenericFile(staplersPath);
  }

  const primaPath = path.join(__dirname, 'src/PrimaPensPage.tsx');
  if (fs.existsSync(primaPath)) {
      processGenericFile(primaPath);
  }

  const productsArray = Array.from(allProducts.values());
  fs.writeFileSync('products.json', JSON.stringify(productsArray, null, 2), 'utf8');
  console.log(`Extracted ${productsArray.length} products to products.json`);
}

main();
