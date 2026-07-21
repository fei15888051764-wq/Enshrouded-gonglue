import { usePage } from '../App';
import { ChevronRight, Sparkles } from 'lucide-react';
import { latestUpdates } from '../data/latestUpdates';

// Renders at most 5 newest entries: 1 featured horizontal card + 4 compact rows.
// Data-driven: prepend a new entry in latestUpdates.ts and the oldest drops off.
export default function LatestUpdates() {
  const { navigate } = usePage();
  const entries = latestUpdates.slice(0, 5);
  if (entries.length === 0) return null;
  const [featured, ...rest] = entries;

  const go = (route: { page: string; sub?: string }) => navigate(route.page, route.sub ?? '');

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[var(--text-gold)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-gold)] font-bold">Fresh Off the Anvil</span>
          </div>
          <h2 className="section-title text-xl md:text-2xl">Latest Updates</h2>
        </div>

        {/* Featured (newest) — horizontal card: image left, text right */}
        <div
          onClick={() => go(featured.route)}
          className="game-panel corner-decor cursor-pointer group overflow-hidden flex flex-col md:flex-row mb-4 animate-fade-in"
        >
          <div className="md:w-[45%] flex-shrink-0 overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              decoding="async"
              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 md:p-6 flex flex-col justify-center min-w-0">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-gold)] font-bold mb-2">
              {featured.category}
            </span>
            <h3 className="font-cinzel text-base md:text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--text-gold)] transition-colors">
              {featured.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-3">
              {featured.summary}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[var(--text-muted)]">{featured.date}</span>
              <span className="text-[10px] text-[var(--text-gold)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Remaining 4 — compact horizontal rows */}
        <div className="space-y-2">
          {rest.map((entry, index) => (
            <div
              key={entry.id}
              onClick={() => go(entry.route)}
              className="game-panel cursor-pointer group flex items-center gap-4 p-3 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.05}s` }}
            >
              <div className="w-20 h-14 flex-shrink-0 rounded overflow-hidden border border-[var(--border-gold-dim)]/40">
                <img
                  src={entry.image}
                  alt={entry.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--text-gold)] font-bold">
                  {entry.category}
                </span>
                <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] truncate group-hover:text-[var(--text-gold)] transition-colors">
                  {entry.title}
                </h4>
                <span className="text-[10px] text-[var(--text-muted)]">{entry.date}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] flex-shrink-0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
