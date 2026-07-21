import type { GalleryImage } from '../data/skillsBuildsImages';

/**
 * Beginner-style hero image shown at the top of every sub-page.
 * Uses the first image of the section's gallery catalog;
 * pair with <SectionGallery skipFirst /> to avoid duplication.
 */
export default function SubPageHero({ images }: { images?: GalleryImage[] }) {
  if (!images || images.length === 0) return null;
  const hero = images[0];
  return (
    <figure className="game-panel corner-decor overflow-hidden mb-6">
      <div className="w-full aspect-[21/9] overflow-hidden bg-[var(--bg-secondary)]">
        <img
          src={hero.src}
          alt={hero.caption}
          loading="eager"
          decoding="async"
          className={`w-full h-full ${hero.contain ? 'object-contain p-6' : 'object-cover'}`}
        />
      </div>
      {hero.caption && (
        <figcaption className="px-4 py-2 text-[10px] text-[var(--text-muted)] border-t border-[var(--border-gold-dim)]/30">
          {hero.caption}
        </figcaption>
      )}
    </figure>
  );
}
