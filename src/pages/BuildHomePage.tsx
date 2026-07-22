import { usePage } from '../App';
import { ChevronRight, Home, Sword, Star } from 'lucide-react';
import PageLayout from './PageLayout';
import { buildSubSections } from '../data/buildData';
import type { BuildGuide } from '../data/buildData';

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: 'text-green-400',
  Intermediate: 'text-yellow-400',
  Advanced: 'text-red-400',
};

const TIER_COLORS: Record<string, string> = {
  S: 'text-yellow-400',
  A: 'text-purple-400',
  B: 'text-blue-400',
};

export function BuildMiniCard({ build, onClick }: { build: BuildGuide; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer w-full"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
          {build.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors truncate">
              {build.buildName}
            </h4>
            <span className={`text-[9px] font-bold ${TIER_COLORS[build.tier]}`}>{build.tier}-Tier</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-[var(--text-muted)] mb-1">
            <span className={DIFFICULTY_COLORS[build.difficulty]}>{build.difficulty}</span>
            <span>·</span>
            <span>{build.archetype}</span>
          </div>
          <p className="text-[10px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">{build.summary}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

export default function BuildHomePage() {
  const { navigate } = usePage();

  const totalBuilds = buildSubSections.reduce((acc, s) => acc + s.builds.length, 0);
  const sTierBuilds = buildSubSections.flatMap((s) => s.builds).filter((b) => b.tier === 'S').length;

  return (
    <PageLayout
      title="Character Builds"
      subtitle="Complete build guides for every playstyle — S-tier meta builds, beginner-friendly starters, and advanced specialist setups"
      icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Character Builds</span>
      </div>

      {/* Overview Panel */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features a <strong className="text-[var(--text-primary)]">deep character build system</strong> with 162 skills across 4 archetypes 
          (Mage, Ranger, Survivor, Warrior) plus Hybrid combinations. Any player can progress down any pathway — 
          the skill tree is fully interconnected, allowing incredible build diversity. Whether you prefer 
          <strong className="text-[var(--text-primary)]"> ranged dominance</strong>, <strong className="text-[var(--text-primary)]">magical devastation</strong>, 
          <strong className="text-[var(--text-primary)]"> melee carnage</strong>, or <strong className="text-[var(--text-primary)]">indestructible tanking</strong>, 
          there is a build for you.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Beginner Friendly</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Intermediate</span>
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">Advanced</span>
          <span className="px-2 py-1 rounded bg-[var(--text-gold)]/10 text-[var(--text-gold)] border border-[var(--text-gold)]/20">Respec Anytime</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{totalBuilds}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Total Builds</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-yellow-400">{sTierBuilds}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">S-Tier Meta</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">5</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Archetypes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">162</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Total Skills</div>
        </div>
      </div>

      {/* Tier Legend */}
      <div className="game-panel corner-decor p-4 mb-8">
        <h3 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-3 tracking-wider uppercase">Tier Guide</h3>
        <div className="grid grid-cols-3 gap-3 text-[10px]">
          <div className="flex items-start gap-2">
            <Star className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-yellow-400">S-Tier</span>
              <p className="text-[var(--text-muted)] mt-0.5">Meta-defining builds that excel in the current patch. Highest overall performance.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-purple-400">A-Tier</span>
              <p className="text-[var(--text-muted)] mt-0.5">Strong specialist builds. Excellent in their role but may have specific weaknesses.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-400">B-Tier</span>
              <p className="text-[var(--text-muted)] mt-0.5">Niche or fun builds. Viable but outperformed by higher tier options.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Build Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {buildSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('builds', section.id)}
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
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">{section.description}</p>
                <p className="text-[10px] text-[var(--text-gold)] mt-1.5">
                  {section.builds.length} {section.builds.length === 1 ? 'build' : 'builds'}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
