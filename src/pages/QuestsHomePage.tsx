import { usePage } from '../App';
import { ChevronRight, Home, ScrollText } from 'lucide-react';
import PageLayout from './PageLayout';
import { questsSubSections } from '../data/questsData';

export default function QuestsHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Quests & Missions"
      subtitle="Every quest in Enshrouded — main story, NPC rescues, survivor chains, lore, and item rewards"
      icon={<ScrollText className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Quests & Missions</span>
      </div>

      {/* Introduction */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Enshrouded features a rich quest system with multiple categories. <strong className="text-[var(--text-primary)]">Flameborn Quests</strong> drive the main narrative, 
          while <strong className="text-[var(--text-primary)]">Survivor Quests</strong> unlock the game&apos;s deep crafting systems. <strong className="text-[var(--text-primary)]">Lore Quests</strong> reward exploration, 
          and <strong className="text-[var(--text-primary)]">Item Quests</strong> grant unique equipment. Every quest contributes to your journey through Embervale.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">150+</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Total Quests</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">9</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Categories</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">50+</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Unique Rewards</div>
        </div>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questsSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('quests', section.id)}
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
