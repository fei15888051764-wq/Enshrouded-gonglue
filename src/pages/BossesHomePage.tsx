import { useState, useMemo } from 'react';
import { usePage } from '../App';
import {
  Crown, ChevronRight, Home, Skull, Swords,
  Flame, Star, Zap, ArrowRight
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allBosses, bossCategories, DIFFICULTY_COLORS, FACTION_COLORS } from '../data/bossesDataUnified';
import type { BossEntry } from '../data/bossesDataUnified';
import { getBossDetailKey } from '../data/bossDetailData';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Fell': <Skull className="w-4 h-4" />,
  'Scavenger': <Swords className="w-4 h-4" />,
  'Vukah': <Flame className="w-4 h-4" />,
  'Hollow': <Star className="w-4 h-4" />,
  'Cyclops': <Zap className="w-4 h-4" />,
  'Drak': <Crown className="w-4 h-4" />,
};

function BossCard({ boss, onClick }: { boss: BossEntry; onClick: () => void }) {
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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredBosses = useMemo(() => {
    let filtered = allBosses;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(b => b.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.faction.toLowerCase().includes(q) ||
        b.region.toLowerCase().includes(q) ||
        b.desc.toLowerCase().includes(q) ||
        b.effective.toLowerCase().includes(q)
      );
    }
    return [...filtered].sort((a, b) => {
      const levelA = parseInt(a.level.split('-')[0]) || 0;
      const levelB = parseInt(b.level.split('-')[0]) || 0;
      return levelA - levelB;
    });
  }, [activeCategory, searchQuery]);

  const handleBossClick = (boss: BossEntry) => {
    const key = getBossDetailKey(boss.name);
    navigate('bosses', key);
  };

  return (
    <PageLayout
      title="Bosses"
      subtitle="13 boss encounters across 6 factions — click any card for full details"
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
          attack patterns, damage resistances, and drop tables. Click any boss card below to view full 
          details including attack patterns, combat strategy, preparation checklist, and damage resistance charts.
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

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search bosses by name, faction, region, or damage type..."
          className="w-full bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] rounded-sm px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-gold)]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border ${
            activeCategory === 'All'
              ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
          }`}
        >
          All ({stats.total})
        </button>
        {bossCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border flex items-center gap-1 ${
              activeCategory === cat
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
            }`}
          >
            {CATEGORY_ICONS[cat]} {cat} ({stats.catCounts[cat]})
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredBosses.length} of {stats.total} bosses
        {activeCategory !== 'All' && ` in ${activeCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredBosses.map(boss => (
          <BossCard key={boss.name} boss={boss} onClick={() => handleBossClick(boss)} />
        ))}
      </div>

      {filteredBosses.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Skull className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No bosses found matching your filters.</p>
        </div>
      )}
    </PageLayout>
  );
}
