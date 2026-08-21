import fs from 'fs';
import path from 'path';

const catalogDir = path.join(process.cwd(), 'public', 'Katalog');
const folders = fs.readdirSync(catalogDir).filter(f => fs.statSync(path.join(catalogDir, f)).isDirectory());

const folderMeta = {
  'FotoKatalog_Kairo': {
    title: 'Kairo Fashion Catalog',
    category: 'catalog',
    categoryLabel: 'Foto Katalog',
    description: 'Koleksi foto katalog busana & fashion lookbook untuk Kairo.',
    tags: ['Fashion', 'Catalog', 'Outfit', 'Kairo']
  },
  'FotoKatalog_RNW Hijab': {
    title: 'RNW Hijab Collection',
    category: 'catalog',
    categoryLabel: 'Foto Katalog',
    description: 'Sesi foto katalog hijab & modest fashion modern dari RNW Hijab.',
    tags: ['Hijab', 'Modest Fashion', 'RNW', 'Catalog']
  },
  'Muse_Hananidia_mua': {
    title: 'Hananidia MUA Collaboration',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Portfolio riasan muse bersama Makeup Artist Hananidia.',
    tags: ['Glam Makeup', 'MUA', 'Soft Glam', 'Collaboration']
  },
  'Muse_Laela.makeup': {
    title: 'Laela Makeup Lookbook',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Karya riasan kecantikan flawless dan elegan oleh Laela Makeup.',
    tags: ['Flawless', 'Bridal Glam', 'Laela Makeup', 'Muse']
  },
  'Muse_Laeli.mua': {
    title: 'Laeli MUA Gallery',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Riasan wajah artistik dan glamor hasil kolaborasi dengan Laeli MUA.',
    tags: ['Soft Glam', 'Beauty', 'Laeli MUA', 'Muse']
  },
  'Muse_Lidyarachman_': {
    title: 'Lidya Rachman MUA',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Eksplorasi riasan profesional bersama Lidya Rachman MUA.',
    tags: ['Editorial Makeup', 'Lidya Rachman', 'Portrait', 'Muse']
  },
  'Muse_Makeup_byrisya': {
    title: 'Makeup by Risya',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Tampilan riasan memukau & fresh glow karya Makeup by Risya.',
    tags: ['Fresh Glow', 'Beauty Shoot', 'Risya', 'Muse']
  },
  'Muse_MarwahMakeup': {
    title: 'Marwah Makeup Artistry',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Seni riasan elegan dan klasik dari Marwah Makeup.',
    tags: ['Classic Makeup', 'Marwah Makeup', 'Elegant', 'Muse']
  },
  'Muse_Mezzaluna.makeup': {
    title: 'Mezzaluna Makeup',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Tampilan makeup mempesona dan modern oleh Mezzaluna Makeup.',
    tags: ['Modern Makeup', 'Mezzaluna', 'Glow', 'Muse']
  },
  'Muse_Muezzamakeup': {
    title: 'Muezza Makeup Look',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Model muse untuk karya riasan premium dari Muezza Makeup.',
    tags: ['Premium Makeup', 'Muezza', 'High Glam', 'Muse']
  },
  'Muse_Salmafina.mua': {
    title: 'Salmafina MUA',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Tampilan anggun dan penuh pesona kolaborasi Salmafina MUA.',
    tags: ['Anggun', 'Salmafina', 'MUA', 'Muse']
  },
  'Muse_Tazkhi_adyamakeup': {
    title: 'Tazkhi Adya Makeup',
    category: 'muse',
    categoryLabel: 'Muse MUA',
    description: 'Koleksi riasan kontemporer dan flawless karya Tazkhi Adya MUA.',
    tags: ['Contemporary', 'Flawless', 'Tazkhi Adya', 'Muse']
  },
  'Self_Makeup': {
    title: 'Self Makeup Creations',
    category: 'self',
    categoryLabel: 'Self Makeup',
    description: 'Koleksi eksperimen riasan mandiri (Self Makeup) karya Risa.',
    tags: ['Self Makeup', 'Personal Style', 'Daily Glam', 'Risa']
  }
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const catalogData = folders.map(folderName => {
  const folderPath = path.join(catalogDir, folderName);
  const files = fs.readdirSync(folderPath);
  
  const images = files
    .filter(file => /\.(jpe?g|png|webp|svg)$/i.test(file))
    .map(file => `/Katalog/${folderName}/${file}`);

  const videos = files
    .filter(file => /\.(mp4|webm|mov|mkv)$/i.test(file))
    .map(file => `/Katalog/${folderName}/${file}`);

  const meta = folderMeta[folderName] || {
    title: folderName.replace(/_/g, ' '),
    category: 'other',
    categoryLabel: 'Lainnya',
    description: `Koleksi ${folderName}`,
    tags: [folderName]
  };

  const slug = slugify(folderName);

  return {
    id: slug,
    rawFolderName: folderName,
    title: meta.title,
    category: meta.category,
    categoryLabel: meta.categoryLabel,
    description: meta.description,
    tags: meta.tags,
    coverImage: images[0] || '',
    imagesCount: images.length,
    images: images,
    videosCount: videos.length,
    videos: videos
  };
});

const content = `// Generated automatically by buildCatalogData.mjs
export interface CatalogItem {
  id: string;
  rawFolderName: string;
  title: string;
  category: 'catalog' | 'muse' | 'self';
  categoryLabel: string;
  description: string;
  tags: string[];
  coverImage: string;
  imagesCount: number;
  images: string[];
  videosCount: number;
  videos: string[];
}

export const CATALOG_DATA: CatalogItem[] = ${JSON.stringify(catalogData, null, 2)};

export const CATEGORIES = [
  { id: 'all', label: 'Semua Koleksi' },
  { id: 'catalog', label: 'Foto Katalog' },
  { id: 'muse', label: 'Muse MUA' },
  { id: 'self', label: 'Self Makeup' },
] as const;
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'catalogData.ts'), content);
console.log(`Successfully generated catalogData.ts with ${catalogData.length} folders, ${catalogData.reduce((acc, curr) => acc + curr.imagesCount, 0)} total images, and ${catalogData.reduce((acc, curr) => acc + curr.videosCount, 0)} total videos!`);

