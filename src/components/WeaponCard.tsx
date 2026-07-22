import { Sword, Star, Crosshair, Shield, Target, Clock, Sparkles, Skull, Zap } from 'lucide-react';
import type { WeaponEntry } from '../data/weaponsDatabaseData';
import weaponImageMap from '../data/weaponImages.json';

const imageMap = weaponImageMap as Record<string, string>;

export function weaponSlug(name: string): string {
  return name.toLowerCase().replace(/['\u2019]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export const slugifyWeaponCat = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const WEAPON_RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',            border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',           border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',            border: 'border-blue-500/30' },
};

const SCALING_BG: Record<string, string> = {
  STR: 'bg-red-400/10 border-red-400/20 text-red-400',
  DEX: 'bg-green-400/10 border-green-400/20 text-green-400',
  INT: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
};

export const WEAPON_CATEGORY_ICONS: Record<string, React.ReactNode> = {
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

/** Short blurb per weapon category — shown on hub cards and sub-page headings */
export const WEAPON_CATEGORY_SUMMARIES: Record<string, string> = {
  'Daggers': 'Fast DEX-scaling daggers for assassin and rogue builds',
  'One-handed Swords': 'Versatile one-handed swords for sword-and-board builds',
  'One-handed Axes': 'Brutal one-handed axes for strength builds',
  'One-handed Clubs': 'Crushing one-handed clubs and maces',
  'Two-handed Greatswords': 'Massive greatswords with high stagger damage',
  'Two-handed Axes': 'Massive two-handed axes with cleaving attacks',
  'Two-handed Hammers': 'Devastating two-handed war hammers',
  'Two-handed Clubs': 'Heavy two-handed clubs for pure strength builds',
  'Bows': 'Long-range bows for ranger and marksman builds',
  'Throwing Weapons': 'Throwing knives and javelins for agile ranged fighters',
  'Wands': 'Quick-casting magic wands for spell-blade builds',
  'Staves': 'Elemental magic staves for mage builds',
};

/** Stat Row */
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

export default function WeaponCard({ weapon }: { weapon: WeaponEntry }) {
  const imgFile = imageMap[weaponSlug(weapon.name)];
  return (
    <div
      className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${
        weapon.isLegendary ? 'border-yellow-600/40' : WEAPON_RARITY_COLORS[weapon.rarity]?.border || ''
      }`}
    >
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {weapon.isLegendary && <Star className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />}
            <h3 className={`font-cinzel text-xs font-bold truncate ${
              weapon.isLegendary ? 'text-yellow-300' : (WEAPON_RARITY_COLORS[weapon.rarity]?.name || 'text-[var(--text-primary)]')
            }`}>
              {weapon.name}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${WEAPON_RARITY_COLORS[weapon.rarity]?.dot || 'bg-gray-400'}`} />
            <span className={`text-[9px] ${WEAPON_RARITY_COLORS[weapon.rarity]?.name || 'text-[var(--text-muted)]'}`}>{weapon.rarity}</span>
          </div>
        </div>

        {/* Level / Category / Scaling row */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">
            Lv.{weapon.level}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            {WEAPON_CATEGORY_ICONS[weapon.category]} {weapon.category}
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

      {/* Stats Panel */}
      <div className="px-4 pb-2">
        <div className="bg-[var(--bg-secondary)]/50 rounded border border-[var(--border-gold-dim)]/30 p-2 mb-2">
          <div className="grid grid-cols-2 gap-x-3">
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

        {/* Perks */}
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
