import { useState, useMemo } from 'react';
import { usePage } from '../App';
import {
  Map, ChevronRight, Home, Star, MapPin, TreePine, TowerControl, Castle,
  Landmark, Mountain, Sun, Snowflake, Droplets, Skull, Gem, Tent, Pickaxe, Layers
} from 'lucide-react';
import PageLayout from './PageLayout';
import { locationEntries, locationCategories } from '../data/mapDatabaseData';
import type { LocationEntry, LocationCategory } from '../data/mapDatabaseData';

/* Category colors — same role as rarity colors on Armor Pieces */
const CATEGORY_COLORS: Record<LocationCategory, { dot: string; name: string; border: string }> = {
  biome:      { dot: 'bg-[var(--text-gold)]', name: 'text-[var(--text-gold)]', border: 'border-[var(--border-gold)]/40' },
  spire:      { dot: 'bg-blue-400',   name: 'text-blue-400',   border: 'border-blue-500/30' },
  hollow:     { dot: 'bg-red-400',    name: 'text-red-400',    border: 'border-red-500/30' },
  vault:      { dot: 'bg-purple-400', name: 'text-purple-400', border: 'border-purple-500/30' },
  temple:     { dot: 'bg-amber-400',  name: 'text-amber-400',  border: 'border-amber-500/30' },
  settlement: { dot: 'bg-yellow-400', name: 'text-yellow-400', border: 'border-yellow-500/30' },
  mine:       { dot: 'bg-gray-400',   name: 'text-gray-300',   border: 'border-gray-500/30' },
  landmark:   { dot: 'bg-orange-400', name: 'text-orange-400', border: 'border-orange-500/30' },
  system:     { dot: 'bg-teal-400',   name: 'text-teal-400',   border: 'border-teal-500/30' },
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  All: <Layers className="w-4 h-4" />,
  biome: <TreePine className="w-4 h-4" />,
  spire: <TowerControl className="w-4 h-4" />,
  hollow: <Castle className="w-4 h-4" />,
  vault: <Gem className="w-4 h-4" />,
  temple: <Sun className="w-4 h-4" />,
  settlement: <Tent className="w-4 h-4" />,
  mine: <Pickaxe className="w-4 h-4" />,
  landmark: <Landmark className="w-4 h-4" />,
  system: <Skull className="w-4 h-4" />,
};

const BIOME_MINI_ICONS: Record<string, React.ReactNode> = {
  'Springlands': <TreePine className="w-3 h-3" />,
  'Revelwood': <TreePine className="w-3 h-3" />,
  'Nomad Highlands': <Mountain className="w-3 h-3" />,
  'Kindlewastes': <Sun className="w-3 h-3" />,
  'Albaneve Summits': <Snowflake className="w-3 h-3" />,
  'Veilwater Basin': <Droplets className="w-3 h-3" />,
};

function biomeMiniIcon(biome: string) {
  for (const key of Object.keys(BIOME_MINI_ICONS)) {
    if (biome.includes(key)) return BIOME_MINI_ICONS[key];
  }
  return <MapPin className="w-3 h-3" />;
}

function LocationCard({ entry, onOpen }: { entry: LocationEntry; onOpen: (sub: string) => void }) {
  const c = CATEGORY_COLORS[entry.category];
  return (
    <button
      onClick={() => onOpen(entry.linkSub)}
      className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group text-left cursor-pointer ${c.border}`}
    >
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-cinzel text-xs font-bold ${c.name} group-hover:brightness-125 transition-all leading-snug`}>
            {entry.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            <span className={`text-[9px] ${c.name}`}>{entry.typeLabel}</span>
          </div>
        </div>

        {/* Level / Biome badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">
            {entry.level}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            {biomeMiniIcon(entry.biome)} {entry.biome}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pb-3">
        {/* Reward */}
        <div className="flex items-start gap-2 mb-2 text-[10px]">
          <Star className="w-3 h-3 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
          <span className="text-[var(--text-gold)] font-medium leading-snug">{entry.reward}</span>
        </div>

        {/* Description */}
        <p className="text-[10px] text-[var(--text-secondary)] italic leading-relaxed mb-2 line-clamp-3">
          {entry.desc}
        </p>

        {/* Source */}
        <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)]">
          <span className="text-[var(--text-muted)]"><MapPin className="w-3 h-3 inline" /></span>
          <span className="text-[var(--text-secondary)] ml-1">{entry.source}</span>
        </div>
      </div>
    </button>
  );
}

export default function MapHomePage() {
  const { navigate } = usePage();
  const [activeCategory, setActiveCategory] = useState<LocationCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = useMemo(() => {
    const catCounts: Record<string, number> = {};
    locationCategories.forEach(cat => {
      if (cat.id !== 'All') {
        catCounts[cat.id] = locationEntries.filter(e => e.category === cat.id).length;
      }
    });
    return {
      total: locationEntries.length,
      biomes: catCounts['biome'] || 0,
      spires: catCounts['spire'] || 0,
      catCounts,
    };
  }, []);

  const filteredEntries = useMemo(() => {
    let filtered = locationEntries;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(e => e.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(e =>
        e.name.toLowerCase().includes(q) ||
        e.biome.toLowerCase().includes(q) ||
        e.typeLabel.toLowerCase().includes(q) ||
        e.reward.toLowerCase().includes(q) ||
        e.desc.toLowerCase().includes(q)
      );
    }
    const catOrder: LocationCategory[] = ['biome', 'spire', 'hollow', 'vault', 'temple', 'settlement', 'mine', 'landmark', 'system'];
    const biomeOrder = ['Springlands', 'Revelwood', 'Nomad Highlands', 'Kindlewastes', 'Albaneve Summits', 'Veilwater Basin'];
    return [...filtered].sort((a, b) => {
      const diff = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
      if (diff !== 0) return diff;
      // Biomes follow progression order; spires follow level order; the rest alphabetical
      if (a.category === 'biome') return biomeOrder.indexOf(a.name) - biomeOrder.indexOf(b.name);
      if (a.category === 'spire') return biomeOrder.findIndex(n => a.biome.includes(n)) - biomeOrder.findIndex(n => b.biome.includes(n));
      return a.name.localeCompare(b.name);
    });
  }, [activeCategory, searchQuery]);

  const openEntry = (sub: string) => navigate('map', sub);

  return (
    <PageLayout
      title="Map & Locations"
      subtitle="All 6 biomes, 1,017 mapped POIs, 8 Ancient Spires, and every dungeon, vault, and landmark in Embervale"
      icon={<Map className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Map & Locations</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Embervale is a handcrafted world spanning <strong className="text-[var(--text-primary)]">6 distinct biomes</strong> from the
          peaceful Springlands to the tropical Veilwater Basin. This database covers{' '}
          <strong className="text-[var(--text-primary)]">{stats.total} key locations</strong> — every Ancient Spire, Hollow Halls,
          Ancient Vault, Sun Temple, settlement, mine, and landmark — cross-referenced against the official wiki and the{' '}
          <strong className="text-[var(--text-gold)]">1,017-marker interactive map census</strong>. Click any card to open its full guide.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Starter → Endgame Lv 1-45</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">8 Spires = Fast Travel</span>
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">12 Named Bosses</span>
          <span className="px-2 py-1 rounded bg-teal-400/10 text-teal-400 border border-teal-400/20">19 Elixir Wells = 57 Skill Points</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">6</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Biomes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">1,017</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Map Markers</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">8</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Ancient Spires</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Key Locations</div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search locations by name, biome, type, or reward..."
          className="w-full bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] rounded-sm px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-gold)]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {locationCategories.map(cat => {
          const count = cat.id === 'All' ? stats.total : (stats.catCounts[cat.id] || 0);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border flex items-center gap-1 ${
                activeCategory === cat.id
                  ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
              }`}
            >
              {CATEGORY_ICONS[cat.id]} {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredEntries.length} of {stats.total} key locations
        {activeCategory !== 'All' && ` in ${locationCategories.find(c => c.id === activeCategory)?.label}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredEntries.map(entry => (
          <LocationCard key={entry.name} entry={entry} onOpen={openEntry} />
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Map className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No locations found matching your filters.</p>
        </div>
      )}

      {/* Guide sections quick nav */}
      <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mb-4">Guide Chapters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'map-overview', label: 'Map Overview', desc: '1,017 markers · 43 categories' },
            { id: 'key-locations', label: 'Key Locations', desc: 'Spires, Halls, Wells, Vaults' },
            { id: 'fast-travel', label: 'Fast Travel', desc: 'Altars, Glider, Grappling Hook' },
            { id: 'collectibles', label: 'Collectibles', desc: 'Fossils, relics, statue sets' },
            { id: 'exploration-tips', label: 'Exploration Tips', desc: 'Shroud, weather, secrets' },
          ].map(g => (
            <button
              key={g.id}
              onClick={() => navigate('map', g.id)}
              className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
            >
              <div className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors flex items-center justify-between">
                {g.label}
                <ChevronRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-gold)]" />
              </div>
              <div className="text-[10px] text-[var(--text-muted)] mt-1">{g.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
