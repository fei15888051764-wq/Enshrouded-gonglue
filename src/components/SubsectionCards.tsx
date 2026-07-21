import { ChevronRight } from 'lucide-react';
import { usePage } from '../App';
import type { GalleryImage } from '../data/skillsBuildsImages';

interface SubItem {
  id: string;
  title: string;
  summary?: string;
  description?: string;
}

/**
 * Card grid linking to a section's dedicated sub-pages.
 * Used on section home pages so every sub-category is a real,
 * shareable link — with a real game screenshot per card.
 */
export default function SubsectionCards({
  page,
  sections,
  images,
  heading = 'In-Depth Guides',
}: {
  page: string;
  sections: SubItem[];
  images: Record<string, GalleryImage[]>;
  heading?: string;
}) {
  const { navigate } = usePage();

  return (
    <div className="mb-8">
      <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] uppercase tracking-wider mb-3">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => {
          const img = images[s.id]?.[0];
          return (
            <button
              key={s.id}
              onClick={() => navigate(page as never, s.id)}
              className="game-panel corner-decor overflow-hidden text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
            >
              {img && (
                <div className="w-full aspect-video overflow-hidden bg-[var(--bg-secondary)]">
                  <img
                    src={img.src}
                    alt={img.caption || s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-gold)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                    {s.summary ?? s.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
