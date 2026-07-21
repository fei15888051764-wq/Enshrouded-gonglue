import { usePage } from '../App';
import { ChevronRight, Home, Clock } from 'lucide-react';
import PageLayout from './PageLayout';
import { updatesSubSections } from '../data/updatesData';

export default function UpdatesHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Patch Notes"
      subtitle="Complete Patch Notes — Early Access to Update 8 & 1.0 Roadmap"
      icon={<Clock className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" /><span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Patch Notes</span>
      </div>

      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Complete patch notes guide for Enshrouded. Explore all subsections below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {updatesSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('updates', section.id)}
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
