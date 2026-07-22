import { Shield, HardHat, Shirt, Hand, PersonStanding, Footprints, Star, MapPin } from 'lucide-react';
import type { ArmorPieceEntry } from '../data/armorPiecesData';

export const slugifySlot = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const ARMOR_RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',            border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',           border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',            border: 'border-blue-500/30' },
};

export const SLOT_ICONS: Record<string, React.ReactNode> = {
  'Helmet': <HardHat className="w-4 h-4" />,
  'Chest':  <Shirt className="w-4 h-4" />,
  'Gloves': <Hand className="w-4 h-4" />,
  'Legs':   <PersonStanding className="w-4 h-4" />,
  'Boots':  <Footprints className="w-4 h-4" />,
};

/** Short blurb per armor slot — shown on hub cards and sub-page headings */
export const SLOT_SUMMARIES: Record<string, string> = {
  'Helmet': 'Helmets and head armor for every build and level range',
  'Chest':  'Chest armor and chestplates — the biggest armor values',
  'Gloves': 'Gloves and gauntlets with precision-focused bonuses',
  'Legs':   'Leg armor and greaves for mobility and defense',
  'Boots':  'Boots and footwear to complete every set',
};

export default function ArmorPieceCard({ piece }: { piece: ArmorPieceEntry }) {
  return (
    <div className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${ARMOR_RARITY_COLORS[piece.rarity]?.border || ''}`}>
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-cinzel text-xs font-bold truncate ${ARMOR_RARITY_COLORS[piece.rarity]?.name || 'text-[var(--text-primary)]'}`}>
            {piece.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${ARMOR_RARITY_COLORS[piece.rarity]?.dot || 'bg-gray-400'}`} />
            <span className={`text-[9px] ${ARMOR_RARITY_COLORS[piece.rarity]?.name || 'text-[var(--text-muted)]'}`}>{piece.rarity}</span>
          </div>
        </div>

        {/* Level / Slot / Set */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">
            Lv.{piece.level}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            {SLOT_ICONS[piece.slot]} {piece.slot}
          </span>
          {piece.setName && (
            <span className="text-[9px] text-yellow-400/70 bg-yellow-400/5 px-1.5 py-0.5 rounded border border-yellow-400/10">
              {piece.setName} Set
            </span>
          )}
        </div>
      </div>

      {/* Stats Panel */}
      <div className="px-4 pb-2">
        <div className="bg-[var(--bg-secondary)]/50 rounded border border-[var(--border-gold-dim)]/30 p-2 mb-2">
          <div className="grid grid-cols-2 gap-x-3">
            <div className="flex items-center gap-2 py-1">
              <span className="text-[var(--text-muted)] w-4 flex-shrink-0"><Shield className="w-3 h-3" /></span>
              <span className="text-[10px] text-[var(--text-muted)] w-16 flex-shrink-0">Phys. Armor</span>
              <span className="text-[11px] font-bold text-[var(--text-primary)]">+{piece.physDef}</span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <span className="text-[var(--text-muted)] w-4 flex-shrink-0"><Shield className="w-3 h-3" /></span>
              <span className="text-[10px] text-[var(--text-muted)] w-16 flex-shrink-0">Magic Defense</span>
              <span className="text-[11px] font-bold text-[var(--text-primary)]">+{piece.magDef}</span>
            </div>
          </div>
        </div>

        {/* Effect */}
        {piece.effect && (
          <div className="flex items-center gap-2 mb-2 text-[10px]">
            <Star className="w-3 h-3 text-[var(--text-gold)]" />
            <span className="text-[var(--text-gold)] font-medium">{piece.effect}</span>
          </div>
        )}

        {/* Description */}
        {piece.description && (
          <p className="text-[10px] text-[var(--text-secondary)] italic leading-relaxed mb-2 line-clamp-2">
            {piece.description}
          </p>
        )}

        {/* Source */}
        {piece.source && (
          <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)]">
            <span className="text-[var(--text-muted)]"><MapPin className="w-3 h-3 inline" /></span>
            <span className="text-[var(--text-secondary)] ml-1">{piece.source}</span>
          </div>
        )}
      </div>
    </div>
  );
}
