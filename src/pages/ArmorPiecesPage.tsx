import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { usePage } from '../App';
import {
  Shield, ChevronRight, Home, HardHat, Shirt, Hand,
  PersonStanding, Footprints, Star, MapPin
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allArmorPieces } from '../data/armorPiecesData';
import type { ArmorPieceEntry } from '../data/armorPiecesData';

const armorPieceCategories = ['Helmet', 'Chest', 'Gloves', 'Legs', 'Boots'] as const;

const RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',            border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',           border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',            border: 'border-blue-500/30' },
};

const SLOT_ICONS: Record<string, React.ReactNode> = {
  'Helmet': <HardHat className="w-4 h-4" />,
  'Chest':  <Shirt className="w-4 h-4" />,
  'Gloves': <Hand className="w-4 h-4" />,
  'Legs':   <PersonStanding className="w-4 h-4" />,
  'Boots':  <Footprints className="w-4 h-4" />,
};

function PieceCard({ piece }: { piece: ArmorPieceEntry }) {
  return (
    <div className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${RARITY_COLORS[piece.rarity]?.border || ''}`}>
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-cinzel text-xs font-bold truncate ${RARITY_COLORS[piece.rarity]?.name || 'text-[var(--text-primary)]'}`}>
            {piece.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${RARITY_COLORS[piece.rarity]?.dot || 'bg-gray-400'}`} />
            <span className={`text-[9px] ${RARITY_COLORS[piece.rarity]?.name || 'text-[var(--text-muted)]'}`}>{piece.rarity}</span>
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

const slugifySlot = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const slotFromSlug = (slug?: string) =>
  slug ? armorPieceCategories.find(c => slugifySlot(c) === slug) : undefined;

export default function ArmorPiecesPage() {
  const { navigate } = usePage();
  const { sub } = useParams();
  const routerNavigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeSlot, setActiveSlot] = useState<string>(() => slotFromSlug(sub) ?? 'All');
  // Deep-link support: /armor-pieces?q=<name> prefills the filter (used by global search)
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') ?? '');

  // Slot pages: /armor-pieces/helmet etc. — URL drives the active tab
  useEffect(() => {
    setActiveSlot(slotFromSlug(sub) ?? 'All');
  }, [sub]);

  const selectSlot = (slot: string) => {
    setSearchQuery('');
    routerNavigate(slot === 'All' ? '/armor-pieces' : `/armor-pieces/${slugifySlot(slot)}`);
  };

  const stats = useMemo(() => {
    const rareCount = allArmorPieces.filter(p => p.rarity === 'Rare').length;
    const maxLevel = Math.max(...allArmorPieces.map(p => p.level));
    const slotCounts: Record<string, number> = {};
    armorPieceCategories.forEach(cat => {
      slotCounts[cat] = allArmorPieces.filter(p => p.slot === cat).length;
    });
    return {
      total: allArmorPieces.length,
      rare: rareCount,
      slots: armorPieceCategories.length,
      maxLevel: maxLevel,
      slotCounts,
    };
  }, []);

  const filteredPieces = useMemo(() => {
    let filtered = allArmorPieces;
    if (activeSlot !== 'All') {
      filtered = filtered.filter(p => p.slot === activeSlot);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.slot.toLowerCase().includes(q) ||
        p.effect.toLowerCase().includes(q) ||
        (p.setName && p.setName.toLowerCase().includes(q))
      );
    }
    return [...filtered].sort((a, b) => {
      if (activeSlot === 'All') {
        const slotOrder = ['Helmet', 'Chest', 'Gloves', 'Legs', 'Boots'];
        const slotDiff = slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot);
        if (slotDiff !== 0) return slotDiff;
      }
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name);
    });
  }, [activeSlot, searchQuery]);

  return (
    <PageLayout
      title="Armor Pieces"
      subtitle="Complete catalog of individual armor pieces — helmets, chests, gloves, legs, and boots with full stats"
      icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Armor Pieces</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">{stats.total} individual armor pieces</strong> across{' '}
          <strong className="text-[var(--text-primary)]">5 equipment slots</strong>. Each piece provides{' '}
          <strong className="text-[var(--text-primary)]">Physical Armor</strong> and{' '}
          <strong className="text-[var(--text-primary)]">Magical Armor</strong>, plus unique stat effects. 
          Mix and match pieces from different sets to create your optimal build.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-gray-400/10 text-gray-400 border border-gray-400/20">Common = Starter</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Uncommon = Mid-Tier</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">Rare = Best-in-Slot</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Mix & Match for Builds</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Pieces</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">{stats.rare}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Rare</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.slots}</div>
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
          placeholder="Search armor pieces by name, slot, effect, or set..."
          className="w-full bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] rounded-sm px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-gold)]"
        />
      </div>

      {/* Slot page heading (only on slot sub-pages) */}
      {activeSlot !== 'All' && (
        <div className="game-panel corner-decor p-5 mb-5">
          <h2 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-1">
            {activeSlot} Armor in Enshrouded
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            All {stats.slotCounts[activeSlot]} {activeSlot.toLowerCase()} pieces with armor values, bonus effects, rarities, and set information.
          </p>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => selectSlot('All')}
          className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border ${
            activeSlot === 'All'
              ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
          }`}
        >
          All ({stats.total})
        </button>
        {armorPieceCategories.map(cat => (
          <button
            key={cat}
            onClick={() => selectSlot(cat)}
            className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border flex items-center gap-1 ${
              activeSlot === cat
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
            }`}
          >
            {SLOT_ICONS[cat as keyof typeof SLOT_ICONS]} {cat} ({stats.slotCounts[cat]})
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredPieces.length} of {stats.total} armor pieces
        {activeSlot !== 'All' && ` in ${activeSlot}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredPieces.map(piece => (
          <PieceCard key={piece.name} piece={piece} />
        ))}
      </div>

      {filteredPieces.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Shield className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No armor pieces found matching your filters.</p>
        </div>
      )}
    </PageLayout>
  );
}
