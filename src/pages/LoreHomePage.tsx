import { usePage } from '../App';
import { BookOpen, ChevronRight, Home } from 'lucide-react';
import PageLayout from './PageLayout';
import { loreSubSections } from '../data/loreData';

export default function LoreHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Game Lore & Story"
      subtitle="The complete history, mythology, and narrative of Enshrouded"
      icon={<BookOpen className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Game Lore & Story</span>
      </div>

      {/* Introduction */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Enshrouded&apos;s lore is a rich tapestry of tragedy, ambition, and hope. Explore the world of 
          Embervale — a kingdom brought low by the pursuit of power and saved only by the creation of 
          the Flameborn. Choose a topic below to dive deep into the story, characters, and history.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">15</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Lore Topics</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">40+</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Lore Writings</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">10</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">NPCs</div>
        </div>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loreSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('lore', section.id)}
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
