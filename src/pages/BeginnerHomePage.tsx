import { useState } from 'react';
import { usePage } from '../App';
import { Shield, ChevronRight, Home, Search } from 'lucide-react';
import PageLayout from './PageLayout';
import { beginnerSubSections } from '../data/beginnerData';

export default function BeginnerHomePage() {
  const { navigate } = usePage();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = beginnerSubSections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout
      title="Beginner's Guide"
      subtitle="Everything you need to survive your first days in Embervale"
      icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Beginner&apos;s Guide</span>
      </div>

      {/* Introduction */}
      <div className="game-panel corner-decor p-6 mb-6">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Welcome to <strong className="text-[var(--text-primary)]">Embervale</strong> — a vast, dangerous, 
          and beautiful world consumed by the Shroud. As a <strong className="text-[var(--text-gold)]">Flameborn</strong>, 
          you are the last hope for humanity. This guide covers everything from basic controls to advanced 
          traversal and combat techniques. Choose a topic below to get started.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[var(--bg-panel)] border border-[var(--border-gold)]/30 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-gold-light)]"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-3 text-center">
          <div className="text-xl font-cinzel font-bold text-[var(--text-gold)]">20</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Topics</div>
        </div>
        <div className="game-panel corner-decor p-3 text-center">
          <div className="text-xl font-cinzel font-bold text-[var(--text-gold)]">16</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Max Players</div>
        </div>
        <div className="game-panel corner-decor p-3 text-center">
          <div className="text-xl font-cinzel font-bold text-[var(--text-gold)]">12</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Skill Trees</div>
        </div>
        <div className="game-panel corner-decor p-3 text-center">
          <div className="text-xl font-cinzel font-bold text-[var(--text-gold)]">16</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Spires</div>
        </div>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('beginner', section.id)}
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

      {filtered.length === 0 && (
        <div className="game-panel corner-decor p-8 text-center">
          <p className="text-[var(--text-muted)] text-sm">No topics match your search.</p>
        </div>
      )}
    </PageLayout>
  );
}
