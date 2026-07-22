import { useState, useMemo } from 'react';
import { usePage } from '../App';
import {
  Map, ChevronRight, Home, Search, Castle, Landmark,
  Mountain, Coins, Skull, Shield, Star, Compass, MapPin
} from 'lucide-react';
import PageLayout from './PageLayout';
import SubsectionCards from '../components/SubsectionCards';
import { locationEntries, locationCategories } from '../data/mapDatabaseData';
import type { LocationEntry, LocationCategory } from '../data/mapDatabaseData';
import { mapSubSections } from '../data/mapData';
import { mapImages } from '../data/mapWalkthroughImages';

const CATEGORY_META: Record<LocationCategory, { label: string; icon: React.ReactNode; color: string; badge: string }> = {
  spire:      { label: 'Ancient Spire',    icon: <Castle className="w-3 h-3" />,   color: 'text-yellow-400',  badge: 'bg-yellow-400/10 border-yellow-400/30' },
  hollow:     { label: 'Hollow Halls',     icon: <Skull className="w-3 h-3" />,    color: 'text-purple-400',  badge: 'bg-purple-400/10 border-purple-400/30' },
  vault:      { label: 'Ancient Vault',    icon: <Landmark className="w-3 h-3" />, color: 'text-blue-400',    badge: 'bg-blue-400/10 border-blue-400/30' },
  temple:     { label: 'Temple / Well',    icon: <Landmark className="w-3 h-3" />, color: 'text-teal-400',    badge: 'bg-teal-400/10 border-teal-400/30' },
  settlement: { label: 'Settlement',       icon: <Home className="w-3 h-3" />,     color: 'text-green-400',   badge: 'bg-green-400/10 border-green-400/30' },
  mine:       { label: 'Mine / Quarry',    icon: <Mountain className="w-3 h-3" />, color: 'text-orange-400',  badge: 'bg-orange-400/10 border-orange-400/30' },
  landmark:   { label: 'Landmark',         icon: <MapPin className="w-3 h-3" />,   color: 'text-gray-300',    badge: 'bg-gray-400/10 border-gray-400/30' },
  system:     { label: 'POI System',       icon: <Coins className="w-3 h-3" />,    color: 'text-pink-400',    badge: 'bg-pink-400/10 border-pink-400/30' },
  biome:      { label: 'Biome',            icon: <Mountain className="w-3 h-3" />, color: 'text-emerald-400', badge: 'bg-emerald-400/10 border-emerald-400/30' },
};

function LocationCard({ entry, onOpen }: { entry: LocationEntry; onOpen: (sub: string) => void }) {
  const meta = CATEGORY_META[entry.category];
  return (
    <button
      onClick={() => onOpen(entry.linkSub)}
      className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group text-left w-full ${meta.badge}`}
    >
      <div className="p-3">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors leading-tight">
            {entry.name}
          </h3>
          {entry.levelRange && (
            <span className="text-[9px] font-bold text-[var(--text-gold)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded border border-[var(--border-gold-dim)] flex-shrink-0 ml-2">
              Lv.{entry.levelRange}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`flex items-center gap-1 text-[9px] ${meta.color}`}>
            {meta.icon}
            {meta.label}
          </span>
          <span className="text-[9px] text-[var(--text-muted)]">{entry.region}</span>
        </div>
        <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {entry.desc}
        </p>
        {entry.reward && (
          <div className="flex items-center gap-1 mt-1.5 text-[9px]">
            <Star className="w-2.5 h-2.5 text-yellow-400" />
            <span className="text-[var(--text-muted)]">{entry.reward}</span>
          </div>
        )}
        {entry.source && (
          <div className="flex items-center gap-1 mt-0.5 text-[9px]">
            <MapPin className="w-2.5 h-2.5 text-[var(--text-muted)]" />
            <span className="text-[var(--text-muted)] italic">{entry.source}</span>
          </div>
        )}
      </div>
    </button>
  );
}

export default function MapHomePage() {
  const { navigate } = usePage();

  return (
    <PageLayout
      title="Map & Locations"
      subtitle="Key locations across 6 biomes — Ancient Spires, Hollow Halls, vaults, temples, mines, and settlements"
      icon={<Map className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" /><span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Map & Locations</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Embervale spans <strong className="text-[var(--text-primary)]">6 distinct biomes</strong> from the rolling Springlands 
          to the endgame Veilwater Basin. This database covers{' '}
          <strong className="text-[var(--text-primary)]">{locationEntries.length} key locations</strong> — every Ancient Spire fast-travel point, 
          all 9 Hollow Halls dungeons, every Ancient Vault and Survivor location, and{' '}
          <strong className="text-[var(--text-gold)]">1,017-marker interactive map census</strong>. Pick a biome or guide below — the full searchable location database lives in <strong className="text-[var(--text-primary)]">Map Overview</strong>.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">6 Spires</span>
          <span className="px-2 py-1 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20">9 Hollow Halls</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">6+ Vaults</span>
          <span className="px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">6 Biomes</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">6</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Biomes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-yellow-400">6</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Spires</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">9</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Hollow Halls</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">{locationEntries.length}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Key Locations</div>
        </div>
      </div>

      {/* Biome & guide pages */}
      <SubsectionCards
        page="map"
        sections={mapSubSections}
        images={mapImages}
        heading="Map Guides"
      />
    </PageLayout>
  );
}

/** Full key-location database — lives on the Map Overview sub-page (/map/map-overview) */
export function LocationDatabase() {
  const { navigate } = usePage();
  const [activeCategory, setActiveCategory] = useState<LocationCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = useMemo(() => {
    const spires = locationEntries.filter(e => e.category === 'spire').length;
    const hollowHalls = locationEntries.filter(e => e.category === 'hollow').length;
    const vaults = locationEntries.filter(e => e.category === 'vault').length;
    const biomes = new Set(locationEntries.map(e => e.region)).size;
    return { spires, hollowHalls, vaults, biomes, total: locationEntries.length };
  }, []);

  const filteredEntries = useMemo(() => {
    return locationEntries.filter(entry => {
      const matchesCategory = activeCategory === 'All' || entry.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' ||
        entry.name.toLowerCase().includes(q) ||
        entry.desc.toLowerCase().includes(q) ||
        entry.region.toLowerCase().includes(q) ||
        entry.reward?.toLowerCase().includes(q) ||
        entry.source?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const openEntry = (sub: string) => navigate('map', sub);

  return (
    <div className="mt-8">
      <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] uppercase tracking-wider mb-3">
        Key Locations Database
      </h2>
      {/* Search */}
      <div className="game-panel corner-decor p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search locations, rewards, regions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] rounded pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-gold)]/50"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('All')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-cinzel font-bold uppercase tracking-wider transition-all border
            ${activeCategory === 'All'
              ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold-light)]'
            }`}
        >
          <Compass className="w-3 h-3" />
          All ({locationEntries.length})
        </button>
        {locationCategories.map((cat) => {
          const meta = CATEGORY_META[cat];
          const count = locationEntries.filter(e => e.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-cinzel font-bold uppercase tracking-wider transition-all border
                ${activeCategory === cat
                  ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold-light)]'
                }`}
            >
              {meta.icon}
              {meta.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredEntries.length} of {stats.total} key locations
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredEntries.map(entry => (
          <LocationCard key={entry.id} entry={entry} onOpen={openEntry} />
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Map className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No locations found.</p>
        </div>
      )}
    </div>
  );
}
