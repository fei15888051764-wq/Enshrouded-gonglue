import { Camera } from 'lucide-react';
import type { GalleryImage } from '../data/skillsBuildsImages';

// Shared screenshot/item gallery for guide sub-pages.
// `contain` images (item thumbnails) render uncropped on a dark backdrop.
export default function SectionGallery({ images, heading = 'In-Game Gallery', skipFirst = false }: { images?: GalleryImage[]; heading?: string; skipFirst?: boolean }) {
  const shown = skipFirst && images ? images.slice(1) : images;
  if (!shown || shown.length === 0) return null;
  images = shown;
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-3">
        <Camera className="w-4 h-4 text-[var(--text-gold)]" />
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase">{heading}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {images.map((img) => (
          <figure key={img.src} className="game-panel corner-decor overflow-hidden group">
            <div className={`overflow-hidden ${img.contain ? 'bg-[var(--bg-secondary)]/70 flex items-center justify-center p-4' : ''}`}>
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className={img.contain
                  ? 'w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500'
                  : 'w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500'}
              />
            </div>
            <figcaption className="px-3 py-2 text-[10px] text-[var(--text-muted)] leading-snug">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
