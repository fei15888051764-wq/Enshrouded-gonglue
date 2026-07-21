import { usePage } from '../App';
import { ChevronRight, Home, Swords } from 'lucide-react';
import PageLayout from './PageLayout';
import { skillsSubSections } from '../data/skillsData';

export default function SkillsHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Skills & Builds"
      subtitle="The complete skill tree guide — 12 archetypes, 222 nodes, and curated builds for every playstyle"
      icon={<Swords className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Skills & Builds</span>
      </div>

      {/* Introduction */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Enshrouded features a <strong className="text-[var(--text-primary)]">massive interconnected skill tree</strong> with 222 nodes across 12 archetypes. 
          With only 184 maximum skill points, every decision shapes your character. Whether you want to be an unstoppable melee warrior, 
          a devastating spellcaster, or a precision archer — the tree supports every playstyle.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">12</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Archetypes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">222</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Skill Nodes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">184</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Max Points</div>
        </div>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('skills', section.id)}
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
