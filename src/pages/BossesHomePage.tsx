import { useMemo } from 'react';
import { usePage } from '../App';
import {
  Crown, ChevronRight, Home, ArrowRight
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allBosses, bossCategories, DIFFICULTY_COLORS, FACTION_COLORS } from '../data/bossesDataUnified';
import type { BossEntry } from '../data/bossesDataUnified';
import SubsectionCards from '../components/SubsectionCards';
import { bossesSubSections } from '../data/bossesData';
import { bossesImages } from '../data/bossesEnemiesImages';

export function BossCard({ boss, onClick }: { boss: BossEntry; onClick: () => void }) {
  const dc = DIFFICULTY_COLORS[boss.difficulty] || DIFFICULTY_COLORS['Hard'];
  const fc = FACTION_COLORS[boss.faction] || 'text-gray-400';
  return (
    <button
      onClick={onClick}
      className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] hover:bg-[var(--bg-secondary)] group text-left w-full ${dc.border}`}
    >
      <div className="p-4">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-cinzel text-xs font-bold text-[var(--text-gold)] truncate group-hover:text-[var(--text-gold-light)] transition-colors">
              {boss.name}
            </h3>
          </div>
          <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 ml-2 mt-0.5" />
        </div>

        {/* Tags Row */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`bg-[var(--bg-secondary)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)] ${fc}`}>
            {boss.faction}
          </span>
          <span className="text-[10px] text-[var(--text-muted)]">Lv.{boss.level}</span>
          <span className={`flex items-center gap-1 text-[10px] ${dc.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dc.dot}`} />
            {boss.difficulty}
          </span>
          {boss.flameAltar && boss.flameAltar !== '—' && (
            <span className="text-[10px] text-[var(--text-gold)] bg-[var(--text-gold)]/10 px-1.5 py-0.5 rounded">
              Flame {boss.flameAltar}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 mb-2">
          {boss.desc}
        </p>

        {/* Effective/Resisted */}
        <div className="flex gap-3 text-[10px]">
          {boss.effective && <span className="text-green-400">Effective: {boss.effective}</span>}
          {boss.resisted && <span className="text-red-400">Resisted: {boss.resisted}</span>}
        </div>
      </div>
    </button>
  );
}

export default function BossesHomePage() {
  const { navigate } = usePage();
  const stats = useMemo(() => {
    const factionCount = new Set(allBosses.map(b => b.faction)).size;
    const flameUpgrades = allBosses.filter(b => b.flameAltar && b.flameAltar !== '—').length;
    const questBosses = allBosses.filter(b => b.quest && b.quest !== '—').length;
    const catCounts: Record<string, number> = {};
    bossCategories.forEach(cat => {
      catCounts[cat] = allBosses.filter(b => b.category === cat).length;
    });
    return {
      total: allBosses.length,
      factions: factionCount,
      flameUpgrades,
      questBosses,
      catCounts,
    };
  }, []);



  return (
    <PageLayout
      title="Bosses"
      subtitle="13 boss encounters across 6 factions — pick a guide below"
      icon={<Crown className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Bosses</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">13 boss encounters</strong> across{' '}
          <strong className="text-[var(--text-primary)]">6 unique factions</strong>. Each faction has distinct 
          attack patterns, damage resistances, and drop tables. Open <strong className="text-[var(--text-gold)]">Boss Overview</strong> for
          the full boss directory, or dive into the progression guides below for strategies and preparation checklists.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Easy</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Medium</span>
          <span className="px-2 py-1 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">Hard</span>
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">Very Hard</span>
          <span className="px-2 py-1 rounded bg-red-600/10 text-red-600 border border-red-600/20">Extreme</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Bosses</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">{stats.factions}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Factions</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.flameUpgrades}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Flame Upgrades</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--accent-green)]">{stats.questBosses}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Quest</div>
        </div>
      </div>

      {/* Boss guide pages */}
      <SubsectionCards
        page="bosses"
        sections={bossesSubSections}
        images={bossesImages}
        heading="Boss Guides"
      />
    </PageLayout>
  );
}
