import { useState, useMemo } from 'react';
import { usePage } from '../App';
import {
  ChevronRight, Home, Sword, Star, Crosshair, Zap,
  Shield, Target, Clock, Sparkles, Skull
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allWeapons, weaponCategories } from '../data/weaponsDatabaseData';
import type { WeaponEntry } from '../data/weaponsDatabaseData';
import weaponImageMap from '../data/weaponImages.json';

const imageMap = weaponImageMap as Record<string, string>;

function weaponSlug(name: string): string {
  return name.toLowerCase().replace(/['\u2019]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',            border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',           border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',            border: 'border-blue-500/30' },
};

const SCALING_BG: Record<string, string> = {
  STR: 'bg-red-400/10 border-red-400/20 text-red-400',
  DEX: 'bg-green-400/10 border-green-400/20 text-green-400',
  INT: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Daggers': <Crosshair className="w-4 h-4" />,
  'One-handed Swords': <Sword className="w-4 h-4" />,
  'One-handed Axes': <Sword className="w-4 h-4" />,
  'One-handed Clubs': <Shield className="w-4 h-4" />,
  'Two-handed Greatswords': <Sword className="w-4 h-4" />,
  'Two-handed Axes': <Sword className="w-4 h-4" />,
  'Two-handed Hammers': <Shield className="w-4 h-4" />,
  'Two-handed Clubs': <Shield className="w-4 h-4" />,
  'Bows': <Target className="w-4 h-4" />,
  'Throwing Weapons': <Zap className="w-4 h-4" />,
  'Wands': <Zap className="w-4 h-4" />,
  'Staves': <Sparkles className="w-4 h-4" />,
};

/** Stat Row 组件 */
function StatRow({
  icon, label, value, unit, highlight = false, empty = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
  empty?: boolean;
}) {
  if (empty && (value === '-' || value === 0 || value === '')) return null;
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-[var(--text-muted)] w-4 flex-shrink-0">{icon}</span>
      <span className="text-[10px] text-[var(--text-muted)] w-16 flex-shrink-0">{label}</span>
      <span className={`text-[11px] font-bold ${highlight ? 'text-[var(--text-gold)]' : 'text-[var(--text-primary)]'}`}>
        {value}{unit ? <span className="text-[9px] text-[var(--text-muted)] ml-0.5">{unit}</span> : null}
      </span>
    </div>
  );
}

function WeaponCard({ weapon }: { weapon: WeaponEntry }) {
  const imgFile = imageMap[weaponSlug(weapon.name)];
  return (
    <div
      className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${
        weapon.isLegendary ? 'border-yellow-600/40' : RARITY_COLORS[weapon.rarity]?.border || ''
      }`}
    >
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {weapon.isLegendary && <Star className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />}
            <h3 className={`font-cinzel text-xs font-bold truncate ${
              weapon.isLegendary ? 'text-yellow-300' : (RARITY_COLORS[weapon.rarity]?.name || 'text-[var(--text-primary)]')
            }`}>
              {weapon.name}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${RARITY_COLORS[weapon.rarity]?.dot || 'bg-gray-400'}`} />
            <span className={`text-[9px] ${RARITY_COLORS[weapon.rarity]?.name || 'text-[var(--text-muted)]'}`}>{weapon.rarity}</span>
          </div>
        </div>

        {/* Level / Category / Scaling 行 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">
            Lv.{weapon.level}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            {CATEGORY_ICONS[weapon.category]} {weapon.category}
          </span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${SCALING_BG[weapon.scaling] || ''}`}>
            {weapon.scaling}
          </span>
        </div>

        {/* Weapon Thumbnail */}
        {imgFile && (
          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 rounded-lg bg-[var(--bg-secondary)]/70 border border-[var(--border-gold-dim)]/40 p-1.5 flex items-center justify-center overflow-hidden">
              <img
                src={`/images/weapons/${imgFile}`}
                alt={weapon.name}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats Panel - 游戏风格属性面板 */}
      <div className="px-4 pb-2">
        {/* 核心战斗属性 */}
        <div className="bg-[var(--bg-secondary)]/50 rounded border border-[var(--border-gold-dim)]/30 p-2 mb-2">
          <div className="grid grid-cols-2 gap-x-3">
            {/* 通用属性 */}
            {weapon.attackSpeed && weapon.attackSpeed !== '-' && (
              <StatRow
                icon={<Clock className="w-3 h-3" />}
                label="Attack Speed"
                value={weapon.attackSpeed}
                highlight
              />
            )}
            {weapon.parryPower > 0 && (
              <StatRow
                icon={<Shield className="w-3 h-3" />}
                label="Parry Power"
                value={weapon.parryPower}
              />
            )}

            {/* Additional stats from Wiki.gg will be added here */}
          </div>
        </div>

        {/* Damage Type */}
        {weapon.damageType && weapon.damageType !== '-' && (
          <div className="flex items-center gap-2 mb-2 text-[10px]">
            <Skull className="w-3 h-3 text-[var(--text-muted)]" />
            <span className="text-[var(--text-muted)]">Damage Type:</span>
            <span className="text-[var(--text-primary)] font-medium">{weapon.damageType}</span>
          </div>
        )}

        {/* Perks - 完整显示 */}
        {weapon.perks.length > 0 && (
          <div className="mb-2">
            <div className="text-[9px] text-[var(--text-muted)] mb-1 uppercase tracking-wider">Perks</div>
            <div className="flex flex-wrap gap-1">
              {weapon.perks.map((perk) => (
                <span
                  key={perk}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-yellow-400/5 border border-yellow-400/15 text-yellow-400/80"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {weapon.description && (
          <p className="text-[10px] text-[var(--text-secondary)] italic leading-relaxed mb-2 line-clamp-2">
            {weapon.description}
          </p>
        )}

        {/* Location */}
        {weapon.location && (
          <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)]">
            <span className="text-[var(--text-muted)]">📍</span>
            <span className="text-[var(--text-secondary)] ml-1">{weapon.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WeaponsDatabasePage() {
  const { navigate } = usePage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = useMemo(() => {
    const legendary = allWeapons.filter(w => w.isLegendary).length;
    return {
      total: allWeapons.length,
      legendary,
      maxLevel: Math.max(...allWeapons.map(w => w.level)),
      categories: weaponCategories.length,
    };
  }, []);

  const filteredWeapons = useMemo(() => {
    let filtered = allWeapons;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(w => w.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(w =>
        w.name.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q) ||
        w.location.toLowerCase().includes(q)
      );
    }
    return [...filtered].sort((a, b) => {
      if (activeCategory === 'All') {
        const catIndexA = weaponCategories.indexOf(a.category);
        const catIndexB = weaponCategories.indexOf(b.category);
        if (catIndexA !== catIndexB) return catIndexA - catIndexB;
      }
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name);
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    weaponCategories.forEach(cat => {
      counts[cat] = allWeapons.filter(w => w.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <PageLayout
      title="Weapon Database"
      subtitle="Complete catalog of all weapons with full stats, perks, and drop locations"
      icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Weapon Database</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">{stats.total} weapons</strong> across{' '}
          <strong className="text-[var(--text-primary)]">{stats.categories} categories</strong>. Each weapon scales with a core
          attribute — <strong className="text-red-400">STR</strong> for melee,{' '}
          <strong className="text-green-400">DEX</strong> for ranged, <strong className="text-blue-400">INT</strong> for magic.
          Legendary weapons carry named perks that can define your build.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">STR = Melee</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">DEX = Ranged</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">INT = Magic</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
            <Star className="w-2.5 h-2.5 inline" /> = Legendary
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Weapons</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-yellow-400">{stats.legendary}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Legendary</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">{stats.categories}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Categories</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">Lv.{stats.maxLevel}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Max Level</div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search weapons by name, category, or location..."
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
        {weaponCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border flex items-center gap-1 ${
              activeCategory === cat
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
            }`}
          >
            {CATEGORY_ICONS[cat]} {cat} ({categoryCounts[cat]})
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredWeapons.length} of {stats.total} weapons
        {activeCategory !== 'All' && ` in ${activeCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Weapons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredWeapons.map(weapon => (
          <WeaponCard key={weapon.name} weapon={weapon} />
        ))}
      </div>

      {filteredWeapons.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Sword className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No weapons found matching your filters.</p>
        </div>
      )}
    </PageLayout>
  );
}
