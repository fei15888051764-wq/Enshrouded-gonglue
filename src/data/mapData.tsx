import { Map, TowerControl, Navigation, TreePine, Droplets, Mountain, Sun, Snowflake, Compass, Sparkles, Star, MapPin, Swords, Skull, Pickaxe, Leaf, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { usePage } from '../App';
import { biomeEntries } from './mapDatabaseData';
import type { BiomeEntry } from './mapDatabaseData';

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

/* ---------------- shared style helpers (Armor Pieces visual language) ---------------- */

export const DANGER_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Low:     { dot: 'bg-green-400',  name: 'text-green-400',  border: 'border-green-500/30' },
  Medium:  { dot: 'bg-yellow-400', name: 'text-yellow-400', border: 'border-yellow-500/30' },
  High:    { dot: 'bg-orange-400', name: 'text-orange-400', border: 'border-orange-500/30' },
  Extreme: { dot: 'bg-red-400',    name: 'text-red-400',    border: 'border-red-500/30' },
  Endgame: { dot: 'bg-red-600',    name: 'text-red-500',    border: 'border-red-600/30' },
};

function InfoBox({ title, children, type = 'info' }: { title: string; children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const colors = {
    info: { border: 'border-[#6a9ad0]', bg: 'bg-[#6a9ad0]/5', icon: 'text-[#6a9ad0]' },
    warning: { border: 'border-orange-400', bg: 'bg-orange-400/5', icon: 'text-orange-400' },
    tip: { border: 'border-[var(--accent-green)]', bg: 'bg-[var(--accent-green)]/5', icon: 'text-[var(--accent-green)]' },
  };
  const c = colors[type];
  return (
    <div className={`${c.bg} border-l-2 ${c.border} pl-4 py-3 pr-3 rounded-r my-4`}>
      <h4 className={`font-cinzel text-xs font-bold ${c.icon} mb-2 tracking-wider uppercase`}>{title}</h4>
      <div className="text-xs text-[var(--text-secondary)] leading-relaxed">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">{children}</h3>;
}

function StatCard({ number, label, color = 'gold' }: { number: string; label: string; color?: string }) {
  const colorMap: Record<string, string> = {
    gold: 'text-[var(--text-gold)]', blue: 'text-blue-400', green: 'text-green-400',
    red: 'text-red-400', purple: 'text-purple-400', orange: 'text-orange-400',
  };
  return (
    <div className="game-panel corner-decor p-3 text-center">
      <div className={`text-xl font-cinzel font-bold ${colorMap[color] || colorMap.gold}`}>{number}</div>
      <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

/** POI card — same anatomy as the Armor Pieces card */
function POICard({ name, type, location, reward, desc }: {
  name: string; type: string; location: string; reward: string; desc: string;
}) {
  const typeColors: Record<string, { dot: string; name: string }> = {
    'Spire': { dot: 'bg-blue-400', name: 'text-blue-400' },
    'Dungeon': { dot: 'bg-red-400', name: 'text-red-400' },
    'Vault': { dot: 'bg-purple-400', name: 'text-purple-400' },
    'Well': { dot: 'bg-green-400', name: 'text-green-400' },
    'Settlement': { dot: 'bg-yellow-400', name: 'text-yellow-400' },
    'Shrine': { dot: 'bg-orange-400', name: 'text-orange-400' },
    'Temple': { dot: 'bg-amber-400', name: 'text-amber-400' },
    'Mine': { dot: 'bg-gray-400', name: 'text-gray-300' },
    'Cave': { dot: 'bg-cyan-400', name: 'text-cyan-400' },
    'Forge': { dot: 'bg-amber-500', name: 'text-amber-500' },
    'Landmark': { dot: 'bg-orange-300', name: 'text-orange-300' },
  };
  const tc = typeColors[type] || { dot: 'bg-gray-400', name: 'text-gray-400' };
  return (
    <div className="game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] p-4 mb-3">
      <div className="flex items-start justify-between mb-2">
        <h4 className={`font-cinzel text-xs font-bold ${tc.name}`}>{name}</h4>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          <span className={`w-1.5 h-1.5 rounded-full ${tc.dot}`} />
          <span className={`text-[9px] uppercase ${tc.name}`}>{type}</span>
        </div>
      </div>
      <p className="text-[10px] text-[var(--text-secondary)] italic leading-relaxed mb-2">{desc}</p>
      <div className="flex items-center gap-2 mb-2 text-[10px]">
        <Star className="w-3 h-3 text-[var(--text-gold)] flex-shrink-0" />
        <span className="text-[var(--text-gold)] font-medium">{reward}</span>
      </div>
      <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)]">
        <span className="text-[var(--text-muted)]"><MapPin className="w-3 h-3 inline" /></span>
        <span className="text-[var(--text-secondary)] ml-1">{location}</span>
      </div>
    </div>
  );
}

/* ---------------- biome detail page (driven by BiomeEntry) ---------------- */

function BiomeContent({ biome }: { biome: BiomeEntry }) {
  const { navigate } = usePage();
  const dc = DANGER_COLORS[biome.danger];
  return (
    <div>
      {/* Hero card — PieceCard anatomy */}
      <div className={`game-panel corner-decor transition-all mb-6 ${dc.border}`}>
        <div className="p-4 pb-2">
          <div className="flex items-start justify-between mb-2">
            <h3 className={`font-cinzel text-base font-bold ${dc.name}`}>{biome.name}</h3>
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
              <span className={`w-1.5 h-1.5 rounded-full ${dc.dot}`} />
              <span className={`text-[10px] font-bold uppercase ${dc.name}`}>{biome.danger}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">Lv.{biome.level}</span>
            <span className="bg-[var(--bg-secondary)] text-orange-400 px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">Flame {biome.flame}</span>
            <span className="bg-[var(--bg-secondary)] text-blue-400 px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">{biome.markers} markers</span>
            <span className="bg-[var(--bg-secondary)] text-red-400 px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">{biome.bosses.length} bosses</span>
            <span className="text-[9px] text-yellow-400/70 bg-yellow-400/5 px-1.5 py-0.5 rounded border border-yellow-400/10">{biome.band}</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{biome.desc}</p>
          <div className="flex items-center gap-2 mb-1 text-[10px]">
            <Star className="w-3 h-3 text-[var(--text-gold)] flex-shrink-0" />
            <span className="text-[var(--text-gold)] font-medium">{biome.armorNote}</span>
          </div>
        </div>
      </div>

      {/* How to reach */}
      <SectionTitle>How to Reach</SectionTitle>
      <div className="space-y-2">
        {biome.reach.map(r => (
          <div key={r.from} className="game-panel corner-decor p-3 flex items-start gap-3">
            <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)] flex-shrink-0 mt-0.5">{r.from}</span>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{r.route}</p>
          </div>
        ))}
      </div>

      {/* Sub-regions */}
      {biome.subRegions.length > 0 && (
        <>
          <SectionTitle>Sub-Regions</SectionTitle>
          <div className="space-y-2">
            {biome.subRegions.map(s => (
              <div key={s.name} className="game-panel corner-decor p-3 border-l-2 border-l-purple-400/50">
                <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">{s.name}</h4>
                <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* What to do + top threat */}
      <SectionTitle>What to Do in {biome.name}</SectionTitle>
      <div className="game-panel corner-decor p-4 mb-3">
        <ul className="space-y-1.5">
          {biome.todos.map(t => (
            <li key={t} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <InfoBox title="Top Threat" type="warning">{biome.topThreat}</InfoBox>

      {/* Factions */}
      <SectionTitle>Enemies & Factions</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {biome.factions.map(f => (
          <div key={f.name} className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1 flex items-center gap-1.5">
              <Skull className="w-3 h-3" /> {f.name}
            </h4>
            <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{f.note}</p>
            {f.threats && <p className="text-[10px] text-orange-400/90 mt-1"><strong>Notable:</strong> {f.threats}</p>}
          </div>
        ))}
      </div>

      {/* Resources */}
      <SectionTitle>Resources</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-1.5 flex items-center gap-1.5"><Leaf className="w-3 h-3" /> Gather</h4>
          <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{biome.resources.gather}</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-amber-400 mb-1.5 flex items-center gap-1.5"><Pickaxe className="w-3 h-3" /> Mine</h4>
          <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{biome.resources.mine}</p>
        </div>
      </div>

      {/* POI census */}
      <SectionTitle>Points of Interest Census</SectionTitle>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {biome.census.map(([label, count]) => (
          <div key={label} className="game-panel corner-decor p-2.5 text-center">
            <div className="text-lg font-cinzel font-bold text-[var(--text-gold)]">{count}</div>
            <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Spires */}
      <SectionTitle>Ancient Spires ({biome.spires.length})</SectionTitle>
      {biome.spires.map(s => (
        <POICard key={s.name} name={s.name} type="Spire" location={biome.name} reward="Fast Travel + map reveal (Obelisks → Roots → Shrines)" desc={s.desc} />
      ))}

      {/* Hollow Halls */}
      <SectionTitle>Hollow Halls</SectionTitle>
      <POICard
        name={biome.hollowHalls.name}
        type="Dungeon"
        location={biome.hollowHalls.key ? `${biome.hollowHalls.key} required${biome.hollowHalls.quest ? ` · starts "${biome.hollowHalls.quest}"` : ''}` : biome.name}
        reward="Ectoplasm, Toxic Slime, Giant Bones for the Collector"
        desc={biome.hollowHalls.status === 'Implemented'
          ? 'Ancient dungeon complex — designed for group play, soloable when well-geared. Drops unique crafting materials used by the Collector for endgame supplies.'
          : biome.hollowHalls.status}
      />

      {/* Bosses */}
      <SectionTitle>Bosses ({biome.bosses.length})</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {biome.bosses.map(b => (
          <span key={b} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[10px] font-cinzel font-bold bg-red-400/10 text-red-400 border border-red-400/20">
            <Swords className="w-3 h-3" /> {b}
          </span>
        ))}
      </div>

      {/* Collectibles */}
      <SectionTitle>Collectibles</SectionTitle>
      <div className="space-y-2">
        {biome.collectibles.map(c => (
          <div key={c.name} className="game-panel corner-decor p-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-cinzel text-xs font-bold text-lime-400">{c.name}</h4>
              <span className="text-[10px] text-[var(--text-gold)] font-bold">×{c.count}</span>
            </div>
            {c.pieces && <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{c.pieces}</p>}
          </div>
        ))}
      </div>

      {/* Connected biomes */}
      <SectionTitle>Connected Biomes</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {biome.connected.map(cb => (
          <button
            key={cb.id}
            onClick={() => navigate('map', cb.id)}
            className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer flex items-center justify-between"
          >
            <div>
              <div className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors">{cb.name}</div>
              <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Level {cb.level}</div>
            </div>
            <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- sub sections ---------------- */

const BIOME_ICONS: Record<string, ReactNode> = {
  'biome-springlands': <TreePine className="w-5 h-5" />,
  'biome-revelwood': <TreePine className="w-5 h-5" />,
  'biome-nomad-highlands': <Mountain className="w-5 h-5" />,
  'biome-kindlewastes': <Sun className="w-5 h-5" />,
  'biome-albaneve': <Snowflake className="w-5 h-5" />,
  'biome-veilwater': <Droplets className="w-5 h-5" />,
};

const BIOME_TITLES: Record<string, string> = {
  'biome-springlands': 'Springlands',
  'biome-revelwood': 'Revelwood & Blackmire',
  'biome-nomad-highlands': 'Nomad Highlands',
  'biome-kindlewastes': 'Kindlewastes',
  'biome-albaneve': 'Albaneve Summits',
  'biome-veilwater': 'Veilwater Basin',
};

const BIOME_SUMMARIES: Record<string, string> = {
  'biome-springlands': 'Lv 1-10 starter biome — 139 markers, 2 bosses, 5 Ancient Vaults and the Low Meadows.',
  'biome-revelwood': 'Lv 10-15 forest biome — 486 markers, 5 bosses, the capital Pikemead\'s Reach and Blackmire swamp.',
  'biome-nomad-highlands': 'Lv 15-20 limestone bluffs — 324 markers, 6 bosses, Umber Hollow and the Vukah Arena.',
  'biome-kindlewastes': 'Lv 20-30 desert — 262 markers, 7 bosses, all 5 Sun Temples and the richest iron mines.',
  'biome-albaneve': 'Lv 30-40 frozen peaks — 236 markers, Cyclops territory, Howling Peak and dynamic cold.',
  'biome-veilwater': 'Lv 35-45 tropical endgame — 267 markers, swimming & diving, Drak temples and fishing.',
};

const biomeSections: SubSection[] = biomeEntries.map(b => ({
  id: b.id,
  title: BIOME_TITLES[b.id] || b.name,
  icon: BIOME_ICONS[b.id] || <Map className="w-5 h-5" />,
  summary: BIOME_SUMMARIES[b.id] || b.desc,
  content: <BiomeContent biome={b} />,
}));

const overviewSection: SubSection = {
  id: 'map-overview',
  title: 'Map Overview',
  icon: <Map className="w-5 h-5" />,
  summary: 'Complete Embervale world map — 1,017 markers, 43 categories, 6 biomes, progression order.',
  content: (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        Embervale is a <strong className="text-[var(--text-primary)]">handcrafted open world</strong> spanning 6 distinct biomes
        from Level 1 (Springlands) to Level 45 (Veilwater Basin). The interactive-map census tracks
        <strong className="text-[var(--text-gold)]"> 1,017 markers</strong> across <strong className="text-[var(--text-gold)]">43 categories</strong> —
        every Ancient Spire, Flame Shrine, dungeon, settlement, and collectible is documented.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
        <StatCard number="1,017" label="Total Markers" color="gold" />
        <StatCard number="43" label="Categories" color="blue" />
        <StatCard number="6" label="Biomes" color="green" />
        <StatCard number="8" label="Ancient Spires" color="purple" />
        <StatCard number="6" label="Hollow Halls" color="red" />
        <StatCard number="19" label="Elixir Wells" color="orange" />
        <StatCard number="63" label="Flame Shrines" color="gold" />
        <StatCard number="12" label="Named Bosses" color="red" />
      </div>

      <InfoBox title="World Status — July 2026" type="info">
        Current build is <strong>Update 8 "Forging the Path"</strong> (Hotfix #42, v0.9.1.2). Keen Games has dated the
        <strong> 1.0 full release for October 15, 2026</strong>, leaving Early Access on PC and consoles. The Albaneve and
        Veilwater Hollow Halls are enterable but their teleporters and quest hooks go live in a future patch.
      </InfoBox>

      <SectionTitle>Biome Progression Order</SectionTitle>
      <div className="game-panel corner-decor p-4">
        <div className="flex items-center gap-1 text-xs flex-wrap text-[var(--text-secondary)]">
          <span className="text-green-400 font-bold">Springlands<br/><span className="text-[9px] font-normal">Lv 1-10</span></span>
          <span className="text-[var(--text-muted)] mx-1">→</span>
          <span className="text-yellow-400 font-bold">Revelwood<br/><span className="text-[9px] font-normal">Lv 10-15</span></span>
          <span className="text-[var(--text-muted)] mx-1">→</span>
          <span className="text-orange-400 font-bold">Nomad Highlands<br/><span className="text-[9px] font-normal">Lv 15-20</span></span>
          <span className="text-[var(--text-muted)] mx-1">→</span>
          <span className="text-red-400 font-bold">Kindlewastes<br/><span className="text-[9px] font-normal">Lv 20-30</span></span>
          <span className="text-[var(--text-muted)] mx-1">→</span>
          <span className="text-red-600 font-bold">Albaneve<br/><span className="text-[9px] font-normal">Lv 30-40</span></span>
          <span className="text-[var(--text-muted)] mx-1">→</span>
          <span className="text-purple-400 font-bold">Veilwater<br/><span className="text-[9px] font-normal">Lv 35-45</span></span>
        </div>
      </div>

      <InfoBox title="Progression Tips" type="warning">
        Each biome gates on TWO axes: <strong>Character Level</strong> (raw damage/HP) and <strong>Flame Level</strong> (crafting tiers, Shroud timer, portal reach). If a new biome destroys you, return to the previous one — you likely need better gear or a higher Flame Level. The single biggest mistake is rushing ahead.
      </InfoBox>

      <SectionTitle>The 43 Marker Categories</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">
        The interactive map bins 43 categories into six sections — Bosses &amp; Altars, Shrines &amp; Wells, Settlements &amp; POIs, Dungeons &amp; Enemies, Collectibles &amp; Landmarks, and Lore Notes.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-[var(--border-gold)]/20">
              <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Category</th>
              <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Count</th>
              <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Description</th>
            </tr>
          </thead>
          <tbody className="text-[var(--text-secondary)]">
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Bosses</td><td>7</td><td>Boss arenas and encounters</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Flame Shrine</td><td>63</td><td>Flame upgrade shrines</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-pink-400">Night Sanctum</td><td>30</td><td>Lore sanctums with boss arenas</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Ancient Vault</td><td>10</td><td>NPC rescue locations</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-blue-400">Ancient Spire</td><td>8</td><td>Fast travel towers</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Balefire</td><td>8</td><td>Campfire rest points</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-500">Hollow Halls</td><td>6</td><td>Dungeon entrances</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">Sun Temple</td><td>5</td><td>Legendary chest temples — all in Kindlewastes</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-teal-400">Shroud Root</td><td>39</td><td>Skill point sources</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Elixir Well</td><td>19</td><td>Combat challenge wells</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-cyan-400">Ancient Obelisk</td><td>13</td><td>Map reveal pillars</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-600">Village</td><td>53</td><td>Settlements and towns</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-600">Camp</td><td>34</td><td>Enemy camps</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-600">Farm</td><td>25</td><td>Farming areas</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-amber-400">Gem Forge</td><td>18</td><td>Gem crafting stations — inside Shroud Lairs</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-gray-400">Mine</td><td>15</td><td>Ore mining locations</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-600">Enemy Camp</td><td>69</td><td>Hostile encampments</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-cyan-600">Cave Passage</td><td>42</td><td>Cave entrances</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-600">Misc. Dungeon</td><td>26</td><td>Various dungeons</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-emerald-400">Shroud Lair</td><td>13</td><td>Shroud enemy nests</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-stone-400">Hidden Tomb</td><td>4</td><td>Secret tombs</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-lime-400">Fossil</td><td>28</td><td>Collectible fossils</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-indigo-400">Music Sheet</td><td>11</td><td>Bard music sheets</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-rose-400">Cyclops Skeleton</td><td>7</td><td>Giant skeleton remains — all in Albaneve</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-emerald-600">Drak Relief</td><td>7</td><td>Drak carved stones — all in Veilwater</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-300">Flame Mosaic</td><td>8</td><td>Flame artworks — all in Albaneve</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-300">Dragon's Map Piece</td><td>4</td><td>Map fragments</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-300">Queen Pikemead Statue</td><td>3</td><td>Statue pieces — all in Revelwood</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-blue-300">Alchemist's Wall Hanging</td><td>2</td><td>Wall decorations</td></tr>
            <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-300">Wall Tapestry</td><td>2</td><td>Tapestry collectibles</td></tr>
            <tr><td className="py-1.5 font-bold text-green-300">Quest Location</td><td>1</td><td>Special quest spot</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox title="External Interactive Map" type="tip">
        For live in-game coordinates, pair this guide with <strong>PinDrop.gg</strong>'s interactive map — toggle categories, search marker names, mark collectibles as found, and share deep-linked views. Their dataset (1,017 markers, 43 categories) is licensed CC BY-SA 4.0 from the official Enshrouded Wiki and re-validated against Update 8.
      </InfoBox>
    </div>
  ),
};

const keyLocationsSection: SubSection = {
  id: 'key-locations',
  title: 'Key Locations',
  icon: <TowerControl className="w-5 h-5" />,
  summary: 'Ancient Spires, Hollow Halls, Elixir Wells, Ancient Vaults, Sun Temples, and all critical POI systems.',
  content: (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        Embervale's <strong className="text-[var(--text-primary)]">1,017 mapped Points of Interest</strong> fall into distinct
        systems that drive progression. Master these location types and you'll never be lost.
      </p>

      <SectionTitle>Ancient Spires (8 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">
        Teleportation + map-reveal landmarks built by the Ancients. Climbing each spire should be your FIRST priority in a new biome — it reveals nearby Obelisks → Shroud Roots → Flame Shrines. Filled with puzzles, enemies, and high-tier loot; bring a ranged weapon for the tower puzzles. Each also makes a perfect glider launch pad.
      </p>
      <POICard name="Ancient Spire — Springlands" type="Spire" location="Central Springlands, just north of the start" reward="Fast Travel + map reveal" desc="Easy climb that teaches grapple mechanics. First priority after the tutorial." />
      <POICard name="Ancient Spire — Low Meadows" type="Spire" location="Southern map edge, east of Springlands" reward="Fast Travel + 3 Skill Points" desc="Second spire in the southeastern valley; may require a short Shroud crossing." />
      <POICard name="Ancient Spire — Revelwood" type="Spire" location="Western Revelwood" reward="Fast Travel + 3 Skill Points" desc="Locked doors, platforming, and a top-floor Vicious Vine ambush. Overlooks a Scavenger Encampment worth farming." />
      <POICard name="Ancient Spire — Blackmire" type="Spire" location="Blackmire swamp, NW Revelwood" reward="Fast Travel + swamp reveal" desc="Poison-hazard themed — bring antidotes or stamina-regen food." />
      <POICard name="Ancient Spire — Nomad Highlands" type="Spire" location="Just north of Umber Hollow" reward="Fast Travel + 3 Skill Points" desc="Vertical climbs with Vukah traps. Loot benches hold Bronze Bars and Fired Brick." />
      <POICard name="Ancient Spire — Kindlewastes" type="Spire" location="Eastern edge of the map" reward="Fast Travel + desert reveal" desc="Highest-level spire. Sand puzzles and sandstorm cover; a Sun Temple sits nearby." />
      <POICard name="Ancient Spire — Albaneve Summits" type="Spire" location="Northern peaks" reward="Fast Travel + summit reveal" desc="Ice puzzles, slippery surfaces, exposure damage. Warm gear mandatory." />
      <POICard name="Ancient Spire — Veilwater Basin" type="Spire" location="Central Veilwater" reward="Fast Travel + 5 Skill Points (most of any)" desc="The newest spire — jungle canopy traversal. Required for full endgame map coverage." />

      <InfoBox title="Spire Climbing Tips" type="tip">
        Always climb the nearest spire FIRST when entering a new biome — it reveals ALL nearby Obelisks, Shroud Roots, and Flame Shrines. Bring stamina food for long climbs, and glide from the top to reach distant POIs quickly.
      </InfoBox>

      <SectionTitle>Hollow Halls (6 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">
        Ancient dungeon complexes — designed for group play, soloable when well-geared. They drop unique crafting materials (Ectoplasm, Toxic Slime, Giant Bones) used by the <strong>Collector</strong> for endgame supplies. The first four need biome Bone Keys; the newest two are enterable but their teleporter and quest hook aren't live yet.
      </p>
      <POICard name="Springlands Hollow Halls" type="Dungeon" location="Necropolis, eastern Springlands · Springlands Bone Key" reward="Basic legendaries + Collector materials" desc="Entry-level Halls. Teaches the dungeon mechanics; Hollow enemies throughout." />
      <POICard name="Revelwood Hollow Halls" type="Dungeon" location="Central Revelwood · Revelwood Bone Key" reward="Mid-tier legendaries + Dark Crystal artifacts" desc="Poison traps and Fell enemies. Starts the 'Ectoplasm Press For The Collector' quest." />
      <POICard name="Nomad Highlands Hollow Halls" type="Dungeon" location="Nomad Highlands · Bone Key" reward="High-tier legendaries + Golden Urn artifacts" desc="Highland Halls with the Collector quest hook." />
      <POICard name="Kindlewastes Hollow Halls" type="Dungeon" location="Eastern Kindlewastes · Bone Key" reward="High-tier legendaries + Tome artifacts" desc="Hard desert Halls with the Collector quest hook." />
      <POICard name="Albaneve Summits Hollow Halls" type="Dungeon" location="Northern Albaneve · no key quest yet" reward="Endgame legendaries" desc="Frozen extreme-difficulty Halls. Accessible now; teleporter + quest hook arrive in a future patch." />
      <POICard name="Veilwater Basin Hollow Halls" type="Dungeon" location="Central Veilwater · no key quest yet" reward="Endgame legendaries + Drak materials" desc="The hardest Halls with underwater sections. Accessible now; full support in a future patch." />

      <SectionTitle>Elixir Wells (19 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Combat challenges that reward 3 skill points each — 57 points in total. Defeating the well guardian clears the well permanently.</p>
      <div className="grid grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Springlands (3 Wells)</div><div className="text-[10px]">Lv 3-8 • Fell Thunderbrute guardians</div></div>
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Revelwood (3 Wells)</div><div className="text-[10px]">Lv 10-15 • Mixed guardians</div></div>
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Nomad Highlands (3 Wells)</div><div className="text-[10px]">Lv 15-20 • Vukah + Fell guardians</div></div>
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Kindlewastes (4 Wells)</div><div className="text-[10px]">Lv 20-30 • Fell + Shroud guardians</div></div>
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Albaneve Summits (3 Wells)</div><div className="text-[10px]">Lv 30-40 • Frozen Fell guardians</div></div>
        <div className="game-panel corner-decor p-3"><div className="font-bold text-[var(--text-primary)] mb-1">Veilwater Basin (3 Wells)</div><div className="text-[10px]">Lv 35-45 • Endgame guardians</div></div>
      </div>

      <SectionTitle>Ancient Vaults (10 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Underground chambers where core NPCs are sealed. Rescuing them unlocks entire crafting trees — five sit in the Springlands alone.</p>
      <POICard name="Blacksmith Vault" type="Vault" location="Northeast Springlands" reward="Blacksmith NPC + Glider" desc="Oswald Anders. Unlocks metal crafting, the Forge, and the Glider — the most important rescue in the game." />
      <POICard name="Alchemist Vault" type="Vault" location="Southeast Springlands" reward="Alchemist NPC" desc="Unlocks potion brewing and magic crafting." />
      <POICard name="Hunter Vault" type="Vault" location="Low Meadows, Springlands" reward="Hunter NPC" desc="Unlocks bow crafting, leatherworking, and tanning." />
      <POICard name="Carpenter Vault" type="Vault" location="Low Meadows, Springlands" reward="Carpenter NPC" desc="Unlocks advanced woodworking and furniture crafting." />
      <POICard name="Farmer Vault" type="Vault" location="Central Springlands" reward="Farmer NPC" desc="Unlocks farming, cooking, and seed cultivation." />
      <POICard name="Bard Vault" type="Vault" location="Blackmire, Revelwood" reward="Bard NPC" desc="Unlocks music, buffs, and the Bard's special crafting." />
      <POICard name="Forgotten Tomb" type="Vault" location="Kindlewastes desert" reward="Kindlewastes armor set pieces" desc="Sandstorm-locked vault — time your entry between storms." />

      <SectionTitle>Sun Temples (5 Total — all in Kindlewastes)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Ancient temples containing legendary chests with top-tier gear. Each requires puzzle-solving to enter.</p>
      <POICard name="Haunted Sun Temple" type="Temple" location="Kindlewastes" reward="Legendary chests · Fell Sicklescythe" desc="The first Sun Temple most players encounter. The Fell Sicklescythe guards the entrance; Sun Temple Stories quest location." />
      <POICard name="Sun Temples (4 more)" type="Temple" location="Northern & Southern Kindlewastes" reward="Legendary armor + weapons" desc="The remaining four temples hide legendary chests behind fire- and sand-themed puzzle locks. Together they carry most loadouts through the Albaneve climb." />

      <SectionTitle>Ancient Obelisks (13 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Stone monoliths that reveal all nearby Shroud Roots, Flame Shrines, and points of interest on your map. Essential for completionists.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Springlands</div><div>2 Obelisks</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Revelwood</div><div>3 Obelisks</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Nomad Highlands</div><div>2 Obelisks</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Kindlewastes</div><div>2 Obelisks</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Albaneve</div><div>2 Obelisks</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-cyan-400">Veilwater</div><div>2 Obelisks</div></div>
      </div>

      <SectionTitle>Gem Forges (18 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Ancient devices found exclusively inside <strong>Shroud Lairs</strong>, fueled by <strong>Archaic Essence</strong>. Used to insert, extract, upgrade, and recycle <strong>Gems</strong> in weapon sockets. Each biome has 3 with tiered max gem levels.</p>
      <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Springlands (3)</div><div>Max Gem Lv 10-12 • In Shroud Lairs</div></div>
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Revelwood (3)</div><div>Max Gem Lv 12-15 • In Shroud Lairs</div></div>
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Nomad Highlands (3)</div><div>Max Gem Lv 20-22 • Archaic Essence (18)</div></div>
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Kindlewastes (3)</div><div>Max Gem Lv 30-32 • Archaic Essence (25)</div></div>
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Albaneve (3)</div><div>Max Gem Lv 35-38 • Higher-tier essence</div></div>
        <div className="game-panel corner-decor p-2"><div className="font-bold text-amber-400">Veilwater (3)</div><div>Max Gem Lv 40+ • Archaic Essence (40)</div></div>
      </div>

      <SectionTitle>Night Sanctums (30 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Lore sanctums with boss arenas — 5 per biome. Provide lore entries, Shroud Cores, and unique loot.</p>
      <div className="grid grid-cols-3 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Springlands</div><div>5 Sanctums</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Revelwood</div><div>5 Sanctums</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Nomad Highlands</div><div>5 Sanctums</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Kindlewastes</div><div>5 Sanctums</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Albaneve</div><div>5 Sanctums</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-pink-400">Veilwater</div><div>5 Sanctums</div></div>
      </div>

      <SectionTitle>Flame Shrines (63 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Shrines that provide Flame Level upgrades when activated — the primary progression mechanic. Spread across all biomes.</p>
      <div className="grid grid-cols-3 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Springlands</div><div>13 Shrines</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Revelwood</div><div>12 Shrines</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Nomad Highlands</div><div>13 Shrines</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Kindlewastes</div><div>8 Shrines</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Albaneve</div><div>8 Shrines</div></div>
        <div className="game-panel corner-decor p-2 text-center"><div className="font-bold text-orange-400">Veilwater</div><div>8 Shrines</div></div>
      </div>

      <SectionTitle>Balefires (8 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Enemy-controlled structures surrounded by the Shroud. Clearing a Balefire extinguishes the flames and creates a <strong>safe rest point</strong> with a temporary buff and respawn-safe zone.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Springlands (2):</strong> Bandit-controlled structures near camps. Easy to clear.</div>
        <div>• <strong>Revelwood (1):</strong> Scavenger-held balefire in the deeper forest.</div>
        <div>• <strong>Nomad Highlands (2):</strong> Vukah and Scavenger balefires on the plateaus.</div>
        <div>• <strong>Kindlewastes (2):</strong> Desert balefires near Scavenger strongholds.</div>
        <div>• <strong>Albaneve (1):</strong> Frozen balefire guarded by Fell enemies.</div>
      </div>

      <InfoBox title="Location Priority When Entering a New Biome" type="tip">
        1) <strong>Ancient Spire</strong> (climb immediately — reveals map) 2) <strong>Flame Shrines</strong> (upgrade Shroud timer) 3) <strong>Elixir Wells</strong> (skill points) 4) <strong>Shroud Roots</strong> (more skill points) 5) <strong>Hollow Halls</strong> (legendary loot) 6) <strong>Sun Temples</strong> (legendary gear) 7) <strong>Night Sanctums</strong> (lore + loot) 8) <strong>Collectibles</strong> (completion)
      </InfoBox>
    </div>
  ),
};

const fastTravelSection: SubSection = {
  id: 'fast-travel',
  title: 'Fast Travel',
  icon: <Navigation className="w-5 h-5" />,
  summary: 'Fast travel systems — Flame Altars, Ancient Spires, Glider, Grappling Hook, and traversal skills.',
  content: (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        Efficient movement across Embervale requires mastering three systems: <strong className="text-[var(--text-primary)]">Flame Altar teleportation</strong>,
        the <strong className="text-[var(--text-primary)]">Glider</strong>, and the <strong className="text-[var(--text-primary)]">Grappling Hook</strong>.
        Together, they let you traverse the entire map in minutes.
      </p>

      <SectionTitle>Flame Altar Fast Travel</SectionTitle>
      <div className="game-panel corner-decor p-4 mb-3">
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>• Any activated Flame Altar becomes a fast-travel point</li>
          <li>• Open map → click on any activated Altar → teleport instantly</li>
          <li>• <strong className="text-red-400">Limit: 10 Altars per world</strong> — place strategically</li>
          <li>• Teleport is FREE — no cost, no cooldown</li>
          <li>• Best placement: main base + 1 per biome + 1 near boss arenas</li>
          <li>• <strong className="text-[var(--accent-green)]">Flame Holders</strong> are ultra-cheap (5 Stone) checkpoints for dangerous expeditions</li>
        </ul>
      </div>

      <InfoBox title="Optimal Altar Network (10 Slots)" type="tip">
        1) <strong>Main Base</strong> (central Springlands) 2) <strong>Revelwood Hub</strong> (near Pikemead's Reach) 3) <strong>Nomad Highlands</strong> (near Vukah Arena) 4) <strong>Kindlewastes North</strong> (Ternion Mine area) 5) <strong>Kindlewastes South</strong> (Sun Temple area) 6) <strong>Albaneve North</strong> (Howling Peak approach) 7) <strong>Albaneve South</strong> (Cyclops caves) 8) <strong>Veilwater Basin</strong> (Drak'Dal Temple approach) 9) <strong>Boss Farm</strong> (Thunderbrute loop) 10) <strong>Flexible</strong> (current quest objective)
      </InfoBox>

      <SectionTitle>Glider System</SectionTitle>
      <div className="game-panel corner-decor p-4 mb-3">
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>• Unlocked after rescuing the <strong>Blacksmith</strong> and completing his questline</li>
          <li>• Equip in inventory, press jump mid-air to deploy</li>
          <li>• Uses stamina while gliding — plan landing spots</li>
          <li>• <strong className="text-[var(--accent-green)]">Updrafts:</strong> Wind columns that launch you higher. Found near cliffs and peaks.</li>
          <li>• <strong className="text-[var(--accent-green)]">Glider Mastery skill:</strong> Reduces stamina drain by 30%</li>
          <li>• Tip: Jump from high points (Ancient Spires, mountains) to cover massive distances</li>
          <li>• Albaneve has the best updrafts — you can glide for minutes</li>
        </ul>
      </div>

      <SectionTitle>Grappling Hook</SectionTitle>
      <div className="game-panel corner-decor p-4 mb-3">
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>• Unlocked after rescuing the <strong>Blacksmith</strong></li>
          <li>• Aim at glowing grapple points (blue-white shimmer on walls/ledges)</li>
          <li>• Chain grapples together for vertical climbs</li>
          <li>• <strong className="text-[var(--accent-green)]">Grapple Mastery skill:</strong> Faster reel speed, extended range</li>
          <li>• Essential for climbing Ancient Spires and reaching hidden areas</li>
        </ul>
      </div>

      <SectionTitle>Traversal Skills (Skill Tree)</SectionTitle>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Double Jump</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Survivor tree. Allows a second jump in mid-air. Essential for reaching high ledges.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Updraft</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Ranger tree. Glide into updrafts to gain massive height. Albaneve's updrafts become superhighways.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Airborne</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Ranger tree. Reduces fall damage and improves glider control.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Sprint Boost</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Survivor tree. Faster sprint speed and reduced stamina drain.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Swim Speed (Veilwater)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Wake of the Water skill. Faster swimming and reduced stamina drain underwater. Essential for Veilwater Basin.</p>
        </div>
      </div>

      <InfoBox title="Traversal Trio — Essential Skills" type="tip">
        Every player should grab these 3 skills ASAP: <strong>Double Jump</strong> (Survivor tree), <strong>Updraft</strong> (Ranger tree), <strong>Airborne</strong> (Ranger tree). Combined with the Glider, these let you reach nearly any point on the map. Best investment in the entire tree.
      </InfoBox>

      <SectionTitle>Efficient Travel Routes</SectionTitle>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Springlands → Revelwood</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Teleport to Springlands Spire → Glide northeast → Grapple up cliff — or slip through the Mistbury Catacombs to dodge the deep Shroud before Flame 3.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Revelwood → Nomad Highlands</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Teleport to Revelwood Spire → Glide southeast → Follow the mountain pass → Enter Highlands</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Boss Farm Loop (Endgame)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Kindlewastes Altar → Fell Thunderbrute (5 min) → Spire glide to Wispwyvern (10 min) → Fast travel to Critter Queen (5 min) → Repeat. Most efficient Rune farm.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Veilwater Basin → Drak'Dal Temples</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Veilwater Spire → Glide south → Swim/dive with Swimfins + Diving Helmet → Surface at the temple approaches</p>
        </div>
      </div>
    </div>
  ),
};

const collectiblesSection: SubSection = {
  id: 'collectibles',
  title: 'Collectibles',
  icon: <Sparkles className="w-5 h-5" />,
  summary: 'Fossils, music sheets, Cyclops skeleton, Drak reliefs, flame mosaics, statue sets, and more.',
  content: (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        Embervale hides <strong className="text-[var(--text-primary)]">80+ collectibles</strong> across a dozen categories.
        These reward thorough exploration with lore, crafting materials, and decorative items for your base.
      </p>

      <SectionTitle>Fossils (28 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Ancient remains found near water features, rock formations, and named landmarks. Mine them with a pickaxe. Cannot be tracked on the map — use spire reveals and landmark triangulation.</p>
      <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Springlands (5):</strong> Ammonite Imprint, Big Ammonite, Elevated Sea Urchin, Round Sea Urchin, Sea Urchin Cluster — near Woodguard, Egerton Salt Mines, Saline Quarry and the Low Meadows Spire</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Revelwood (4):</strong> Gastropods, Single Gastropod, Trilobite Imprint, Trilobites</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Nomad Highlands (4):</strong> Dull Shark Tooth, Sharp Shark Tooth, Larger Sea Lily Fossil, Smaller Sea Lily Fossil</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Kindlewastes (3):</strong> Crab Fossil, Fish Fossil, Prawn Fossil</div>
      </div>

      <SectionTitle>Queen Pikemead Statue (3 Pieces — Revelwood)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Fragments of a statue of Queen Pikemead. Assemble for a base decoration.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Statue Arm</strong> — Revelwood</div>
        <div>• <strong>Statue Base</strong> — Revelwood</div>
        <div>• <strong>Statue Bust</strong> — Revelwood</div>
      </div>

      <SectionTitle>Cyclops Skeleton (7 Parts — Albaneve Summits)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Massive skeletal remains of an ancient Cyclops. Collect all seven parts to assemble the full giant as a base trophy.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Skull, Torso, Pelvis</strong> — frozen peaks of Albaneve</div>
        <div>• <strong>Left Arm, Right Arm</strong> — frozen peaks of Albaneve</div>
        <div>• <strong>Left Leg, Right Leg</strong> — frozen peaks of Albaneve</div>
      </div>

      <SectionTitle>Drak Reliefs (7 Total — Veilwater Basin)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Carved stone tablets telling the Drak's history, added in Wake of the Water. All seven are in Veilwater Basin.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Relief I–VII:</strong> Found near Drak camps, temples, and ruins throughout the basin</div>
        <div>• Collecting all 7 reveals the Drak civilization's history</div>
        <div>• Some are underwater — Diving Helmet required</div>
      </div>

      <SectionTitle>Flame Mosaics (8 Pieces — Albaneve Summits)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Ancient artworks depicting the Flame's history, hidden in the frozen ruins of the Summits.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Piece I – Piece VIII:</strong> Scattered through Albaneve's frozen ruins and dungeons</div>
      </div>

      <SectionTitle>Hollow Halls Artifact Sets (3 per Halls)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Each implemented Hollow Halls hides a 3-piece artifact set for the Collector.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2"><strong className="text-purple-400">Revelwood:</strong> Dark Crystal Cluster, Large Dark Crystal, Sparkling Dark Crystal</div>
        <div className="game-panel corner-decor p-2"><strong className="text-amber-400">Nomad Highlands:</strong> Bejeweled Golden Urn, Foreboding Golden Urn, Inscribed Golden Urn</div>
        <div className="game-panel corner-decor p-2"><strong className="text-red-400">Kindlewastes:</strong> Bound Tome, Mysterious Tome, Tome of Agony</div>
      </div>

      <SectionTitle>Music Sheets (11 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Collected for the Bard NPC. Unlock new songs that provide party buffs.</p>
      <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Springlands (1):</strong> Hidden in a settlement ruin</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Revelwood (3):</strong> In settlements and ancient ruins</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Nomad Highlands (2):</strong> Found in settlements and caves</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Kindlewastes (2):</strong> Hidden in Sun Temples and camps</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Albaneve (2):</strong> In frozen ruins and settlements</div>
        <div className="game-panel corner-decor p-2"><strong className="text-[var(--text-primary)]">Veilwater (1):</strong> In a tropical settlement</div>
      </div>

      <SectionTitle>Dragon's Map Pieces (4 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Fragments of an ancient dragon map hidden in dungeon end-rooms and boss arenas. Assemble all 4 to reveal a secret location.</p>

      <SectionTitle>Lore Pages (40+ Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Scattered journals, letters, and notes that reveal the history of Embervale, its factions, and the Shroud. Found on tables, corpses, and hidden spots throughout the world.</p>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div><strong className="text-[var(--text-primary)]">The Alchemist's Theories I & II (8 pages):</strong> Shroud, Elixir, and Elixir Well research. Found in labs and vaults.</div>
        <div><strong className="text-[var(--text-primary)]">Love Letter To Queen Jezmina (2 pages):</strong> Romance in the capital. Found in Longkeep and Pikemead's Reach.</div>
        <div><strong className="text-[var(--text-primary)]">Captain's Journal (4 pages):</strong> Military records from the Ancients. Found in camps and ruins.</div>
        <div><strong className="text-[var(--text-primary)]">Wolves at the Door (2 pages):</strong> Wildlife encounters. Found in caves including Wolf Cave.</div>
        <div><strong className="text-[var(--text-primary)]">Derelict Kindlewastes (1 page):</strong> Desert region history. Found in a Sun Temple.</div>
        <div><strong className="text-[var(--text-primary)]">Fisher's Tale (2 pages):</strong> Fishing village lore. Found on piers and in settlements.</div>
        <div><strong className="text-[var(--text-primary)]">Obelisk Research (3 pages):</strong> Ancient technology studies. Found near Obelisks.</div>
        <div><strong className="text-[var(--text-primary)]">The Elixir Thief (3 pages):</strong> Crime stories. Found in cellars and hideouts.</div>
        <div><strong className="text-[var(--text-primary)]">Mysterious Wanderer Sightings (3 pages):</strong> Strange encounters. Found near camps.</div>
        <div><strong className="text-[var(--text-primary)]">Dragon Skeletons (3 pages):</strong> Albaneve discoveries. Found in camps and ruins.</div>
        <div><strong className="text-[var(--text-primary)]">The Honeydews (4 pages):</strong> Nomad Highlands tales. Found in wagons and settlements.</div>
        <div><strong className="text-[var(--text-primary)]">Welcome To Fort Kelvin (3 pages):</strong> Vukah encounters. Found in churches.</div>
      </div>

      <SectionTitle>Blessings (6 Total)</SectionTitle>
      <p className="text-xs text-[var(--text-muted)] mb-3">Ancient totems that grant powerful <strong>30-minute buffs</strong> when interacted with. Essential before boss fights or difficult dungeons.</p>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Vuk'ahrrrrr Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +25 Health, +20% Melee Damage (30 min)</p>
          <p className="text-[10px] text-orange-400">Found on totems at cliff edges overlooking the Shroud, and near cave entrances.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Flame Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +20% Fire Resistance, +15% Stamina Regen (30 min)</p>
          <p className="text-[10px] text-orange-400">Found near Flame Shrines and ancient ruins.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Shroud Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +30% Shroud Timer, +10% Movement Speed in Shroud (30 min)</p>
          <p className="text-[10px] text-orange-400">Found deep within Shroud areas, near Shroud Roots.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Hunter's Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +25% Headshot Damage, +15% Bow Damage (30 min)</p>
          <p className="text-[10px] text-orange-400">Found at Hunter camps and near Ancient Vaults.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Warrior's Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +20% Physical Damage, +10% Damage Reduction (30 min)</p>
          <p className="text-[10px] text-orange-400">Found near boss arenas and combat challenge areas.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-teal-400 mb-1">Wanderer's Blessing</h4>
          <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Effect:</strong> +20% Sprint Speed, -30% Stamina Drain (30 min)</p>
          <p className="text-[10px] text-orange-400">Found at crossroads and near Ancient Spires.</p>
        </div>
      </div>

      <SectionTitle>Wall Decorations (4 Total)</SectionTitle>
      <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
        <div>• <strong>Alchemist's Wall Hanging (Left):</strong> Veilwater Basin — jungle ruin</div>
        <div>• <strong>Alchemist's Wall Hanging (Right):</strong> Albaneve Summits — frozen dungeon</div>
        <div>• <strong>Wall Tapestry (Left):</strong> Albaneve — Everfrore Keep</div>
        <div>• <strong>Wall Tapestry (Right):</strong> Kindlewastes — Sun Temple interior</div>
      </div>

      <InfoBox title="Collectible Completion Tips" type="tip">
        Climb Ancient Spires first — most collectibles sit near named landmarks the spires reveal. Fossils cannot be tracked on any map and must be mined with a pickaxe; triangulate them from landmarks. Drak Reliefs need the Diving Helmet for the underwater ones. Statue, skeleton, mosaic, and relief sets each assemble into a base trophy.
      </InfoBox>
    </div>
  ),
};

const explorationSection: SubSection = {
  id: 'exploration-tips',
  title: 'Exploration Tips',
  icon: <Compass className="w-5 h-5" />,
  summary: 'Master exploration — Shroud survival, hidden areas, resource farming, and completionist strategies.',
  content: (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        Mastering Embervale's exploration systems is as important as combat. The <strong className="text-[var(--text-primary)]">Shroud</strong>,
        <strong className="text-[var(--text-primary)]"> dynamic weather</strong>, and <strong className="text-[var(--text-primary)]">hidden areas</strong>
        reward preparation and punish recklessness.
      </p>

      <SectionTitle>Shroud Survival</SectionTitle>
      <div className="game-panel corner-decor p-4 mb-3">
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>• The Shroud is a toxic fog that drains your health over time</li>
          <li>• <strong>Flame Level</strong> determines your max Shroud survival time (starts at ~2 min)</li>
          <li>• <strong>Flame Shrines</strong> increase your Shroud timer when activated</li>
          <li>• Leaving the Shroud resets the timer — step out briefly to refresh</li>
          <li>• <strong className="text-red-400">Dying in the Shroud</strong> means respawning at your Flame Altar and losing your gravestone location</li>
          <li>• <strong>Shroud Roots</strong> can be destroyed for skill points</li>
          <li>• The Shroud hides the best loot — high risk, high reward</li>
        </ul>
      </div>

      <SectionTitle>Dynamic Weather</SectionTitle>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-cyan-400 mb-1">Cold (Albaneve Summits)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">The higher you climb, the colder it gets — exposure damage stacks with altitude. Counter: warm clothing (Fur Armor or better), spicy stews, heat potions, and a warm shelter.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Heat (Kindlewastes)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Desert heat drains stamina faster; sandstorms lock certain vaults and provide cover at the Kindlewastes Spire. Counter: light armor, water, cooling potions.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Rain (All Biomes)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Reduces visibility, puts out torches. Some enemies are weaker in rain (fire-based Fell).</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Night</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Harder to see, more aggressive enemies. BUT: some resources only spawn at night (Passionflower in Veilwater).</p>
        </div>
      </div>

      <SectionTitle>Hidden Areas & Secrets</SectionTitle>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Cave Passages (42 Total)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Hidden cave entrances lead to underground areas with rare resources and enemies. Look for dark openings in cliff faces. Many contain ore veins and shortcuts.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Hidden Tombs (4 Total)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Secret underground burial chambers with legendary loot. Require puzzle-solving to enter.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Shroud Lairs (13 Total)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Dense Shroud pockets with elite enemies, guaranteed Shroud Cores — and the only places Gem Forges exist. High risk but essential for Flame upgrades.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Underwater Areas (Veilwater)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Sunken temples, ruins, and Clamshell beds. Require Swimfins and Diving Helmet. Some areas have air pockets.</p>
        </div>
      </div>

      <SectionTitle>Resource Farming Routes</SectionTitle>
      <div className="space-y-2">
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Iron Ore Loop</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Kindlewastes: Ternion Mine → Ridgeback Mine → Cave passages → Reset. Best iron-per-hour route.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Shroud Core Farm</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Shroud Lairs → Fell Thunderbrutes → Hollow Halls → Boss farm loop. Most efficient for Flame upgrades.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Legendary Gear Farm</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Sun Temples (5 in Kindlewastes) → Hollow Halls → Night Sanctums. Best gear-per-hour for mid-to-late game.</p>
        </div>
        <div className="game-panel corner-decor p-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Drak Materials (Veilwater)</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">Drak Camps → Drak'Dal Temple area → Underwater ruins. For Drak Blood, Claws, Scales, and Teeth.</p>
        </div>
      </div>

      <InfoBox title="Completionist Checklist" type="tip">
        For 100% world completion: 63 Flame Shrines | 39 Shroud Roots | 19 Elixir Wells | 8 Ancient Spires | 6 Hollow Halls | 5 Sun Temples | 30 Night Sanctums | 13 Ancient Obelisks | 13 Shroud Lairs | 18 Gem Forges | 8 Balefires || Collectibles: 28 Fossils | 11 Music Sheets | 7 Cyclops Skeleton parts | 7 Drak Reliefs | 8 Flame Mosaics | 4 Dragon's Map Pieces | 3 Queen Pikemead Statue pieces | 9 Hollow Halls artifacts | 4 Wall Decorations
      </InfoBox>
    </div>
  ),
};

export const mapSubSections: SubSection[] = [
  overviewSection,
  ...biomeSections,
  keyLocationsSection,
  fastTravelSection,
  collectiblesSection,
  explorationSection,
];
