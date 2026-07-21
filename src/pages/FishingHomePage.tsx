import { usePage } from '../App';
import { ChevronRight, Home, Anchor } from 'lucide-react';
import PageLayout from './PageLayout';
import { fishingSubSections } from '../data/fishingData';

export default function FishingHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Fishing System"
      subtitle="Rods, bait, fish compendium, locations, and pro tips"
      icon={<Anchor className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" /><span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Fishing System</span>
      </div>

      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Fishing arrived in Enshrouded with the <strong className="text-[var(--text-gold)]">Wake of the Water update (Update 7)</strong>.
          It features <strong className="text-[var(--text-primary)]">5 fishing rods</strong>, <strong className="text-[var(--text-primary)]">11 bait types</strong>,
          and <strong className="text-[var(--text-primary)]">13 fish species</strong> spread across every biome.
          Master fishing to obtain rare crafting materials, powerful food buffs, socketable gems, and wall trophies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fishingSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('fishing', section.id)}
            className="game-panel corner-decor p-5 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
                {section.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-gold)] transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">{section.summary}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
