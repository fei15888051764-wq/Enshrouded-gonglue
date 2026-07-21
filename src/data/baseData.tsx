import { Home, Hammer, Wrench, Users, Sofa, Warehouse, Sprout, PawPrint, Package, Factory, Flame } from 'lucide-react';
import type { ReactNode } from 'react';

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

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

export const baseSubSections: SubSection[] = [
  {
    id: 'base-overview',
    title: 'Base Overview',
    icon: <Home className="w-5 h-5" />,
    summary: 'Flame Altar system, 9 upgrade levels, base placement, and the Comfort/Rested buff system.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Base building in Enshrouded revolves around the <strong className="text-[var(--text-gold)]">Flame Altar</strong> — 
          your base's core that defines build radius, enables fast travel, and protects against enemy spawns. 
          A well-designed base with high <strong className="text-[var(--text-primary)]">Comfort</strong> provides powerful 
          rested buffs that boost stamina and regeneration for over an hour.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
          <StatCard number="9" label="Flame Levels" color="gold" />
          <StatCard number="44+" label="Building Blocks" color="blue" />
          <StatCard number="8" label="Roof Types" color="green" />
          <StatCard number="19" label="Crafting Stations" color="purple" />
          <StatCard number="8" label="Craftspeople NPCs" color="orange" />
          <StatCard number="69" label="Max Comfort" color="red" />
          <StatCard number="3" label="Altar Upgrades" color="gold" />
          <StatCard number="10" label="Max Altars (Lv 9)" color="blue" />
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Flame Altar — The Heart of Your Base</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Crafted with <strong>5 Stone</strong> in your inventory crafting menu</li>
            <li>• Cannot be placed inside the Shroud — needs flat, obstacle-free ground</li>
            <li>• Defines your <strong>build radius</strong> — all construction must be within its borders</li>
            <li>• Acts as a <strong>Fast Travel point</strong> on the world map</li>
            <li>• <strong>Enemies cannot spawn</strong> inside the Flame Altar radius</li>
            <li>• You can place <strong>multiple Flame Altars</strong> across the map (up to 10 at max level)</li>
            <li>• Cannot be moved — must destroy ("Extinguish Flame") and rebuild elsewhere</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Flame Altar Upgrade Levels</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Level</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Shroud Time</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Max Altars</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Passage Lv</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Key Material</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Lv 1 (Start)</td><td>5 min</td><td>2</td><td>1</td><td className="text-[var(--text-muted)]">—</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Lv 2</td><td>6 min</td><td>4</td><td>2</td><td className="text-red-400">Fell Thunderbrute Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Lv 3</td><td>7 min</td><td>6</td><td>3</td><td className="text-red-400">Scavenger Matron Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Lv 4</td><td>8 min</td><td>7</td><td>4</td><td className="text-red-400">Fell Wispwyvern Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Lv 5</td><td>9 min</td><td>8</td><td>5</td><td className="text-red-400">Fell Monstrosity Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Lv 6</td><td>10 min</td><td>8</td><td>6</td><td className="text-red-400">Fell Sicklescythe Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Lv 7</td><td>11 min</td><td>10</td><td>7</td><td className="text-red-400">Fell Cyclops Head</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Lv 8</td><td>12 min</td><td>10</td><td>8</td><td className="text-red-400">Fell Dragon Youngling Head</td></tr>
              <tr><td className="py-1.5 font-bold text-red-500">Lv 9</td><td>~15 min</td><td>10</td><td>9</td><td className="text-red-400">Hydrak'Dal Head</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Altar Build Size Upgrades" type="info">
          The Flame Altar has <strong>TWO separate upgrade tracks</strong>:
          <br/><br/>
          <strong>Track 1 — Strengthen the Flame (9 levels):</strong> Increases Shroud survival time, max altars, and Shroud passage level. Requires boss heads.
          <br/><br/>
          <strong>Track 2 — Expand Altar Area (4 levels):</strong> Increases buildable footprint size.
          <strong>Lv 1:</strong> 40³ | <strong>Lv 2:</strong> 80³ (1 Shroud Core) | <strong>Lv 3:</strong> 120³ (5 Shroud Cores, requires Flame Lv 2) | <strong>Lv 4:</strong> 160³ (5 Shroud Nexus, requires Flame Lv 3).
          <br/><br/>
          Both tracks are independent — you can max one without the other. Most players only need Area Lv 2 for a main base. Max buildable footprint at Area Lv 4 is 160x160x160.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Comfort & Rested Buff System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Comfort</strong> determines how long your <strong>Rested buff</strong> lasts</li>
            <li>• Rested buff = <strong>+Max Stamina</strong> and <strong>+Stamina Regeneration</strong></li>
            <li>• To get Rested: be <strong>Sheltered</strong> (under roof) + <strong>Warm</strong> (near fire) + <strong>Comfortable</strong> (furniture)</li>
            <li>• <strong>Max Comfort: 69</strong> → Rested buff lasts <strong>1 hour 14 minutes</strong></li>
            <li>• Each Comfort point = +1 minute of Rested duration</li>
            <li>• <strong>Well Rested</strong> skill adds +5 minutes</li>
            <li>• Musical instruments add +2 minutes</li>
            <li>• Sleep in a bed to pass time at <strong>60x speed</strong></li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Best Base Locations</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Springlands — First Base</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Place on high ground just outside the Shroud. Close to wood, stone, plants. Near Braelyn Bridge (Blacksmith). Safe and resource-rich. Best for learning the building system.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Revelwood — Second Base</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Central location with access to forests, ruins, and Spire travel. Good midpoint for harder routes. Place near Pikemead's Reach for quest access.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Nomad Highlands — Advanced Hub</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Central position between multiple biome lanes. Best for late-game when you need access to everything. Requires strong Flame Level and gear.</p>
          </div>
        </div>

        <InfoBox title="Base Location Tips" type="tip">
          1) High ground beats low ground — better visibility, easier glider launches 2) Stay just outside the Shroud for safety 3) Ensure flat terrain for easy building 4) Place near roads for the "On the Road" stamina buff 5) Keep storage near crafting stations 6) Build a rooftop platform for glider takeoffs 7) Light all paths and stairs for night navigation
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'building-blocks',
    title: 'Building Blocks',
    icon: <Hammer className="w-5 h-5" />,
    summary: '44+ building blocks, 8 roof types, 4 road types — unlock methods and materials.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">44+ building blocks</strong>, 
          <strong className="text-[var(--text-primary)]"> 8 roof types</strong>, and <strong className="text-[var(--text-primary)]">4 road types</strong>. 
          Blocks are crafted at the <strong>Workbench</strong> and placed with the <strong>Construction Hammer</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Core Building Tools</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <div className="space-y-2">
            <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Construction Hammer:</strong> 1 Stone — manual craft. Hold it and press Tab to enter Building Mode. Use Alt to switch piece categories. Left-click to place, R to rotate.</div>
            <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Workbench:</strong> 3 String + 8 Wood Logs — crafts all blocks, furniture, and stations. Also repairs gear instantly.</div>
            <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Pickaxe:</strong> Removes terrain voxels (dirt, stone). Also used for mining ore veins.</div>
            <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Flatten Tool:</strong> Smooths terrain to create flat building surfaces.</div>
            <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Raise Tool:</strong> Adds terrain material back to fill holes or create elevations.</div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Wood Blocks (10)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Block</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Rough Wood Block</td><td>Chop Wood</td><td>2 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Refined Wood Block</td><td>Craft Wood Planks</td><td>15 Wood Planks + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Shroud Wood Block</td><td>Chop Shroud Wood</td><td>10 Shroud Wood</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Tarred Wood Block</td><td>Craft Tar</td><td>10 Wood Logs + 5 Tar</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Conifer Wood Block</td><td>Get Conifer Logs</td><td>10 Conifer Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Palm Wood Block</td><td>Mine Palm Wood</td><td>7 Palm Wood Logs + 3 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Half-Timbered Block</td><td>Find in Diadwyn</td><td>10 Clay + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Plaited Block</td><td>Abandoned Vukah Village</td><td>10 Twigs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Brick-Timbered Block</td><td>Fort Kelvin</td><td>10 Fired Brick + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Vukah Temple Stones</td><td>Vukah Treetop Settlement</td><td>2 Dirt + 10 Stone</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Stone Blocks (16)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Block</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Rough Stone Block</td><td>Mine Stone</td><td>2 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Regular Stone Block</td><td>Ruined Bridge</td><td>15 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Roughly Cut Stone Block</td><td>Netherton quest</td><td>10 Stone + 1 Rubble</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Weathered Stone Block</td><td>Bramblespine Boneyard</td><td>10 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Rough Flintstone Block</td><td>Mine Flintstone</td><td>10 Flintstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Refined Stone Block</td><td>Get Masonry Tools</td><td>10 Limestone + 10 Flintstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Fancy Stone Block</td><td>Raven's Keep</td><td>10 Limestone + 3 Wood Planks</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Highly Polished Stone Block</td><td>Scavenger Matron drop</td><td>30 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Limestone Block</td><td>Caravan Raid quest</td><td>10 Limestone + 4 Dirt</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Granite Block</td><td>Get Granite</td><td>10 Granite</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Polished Granite Block</td><td>Gateway Outpost "Bora"</td><td>20 Granite</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Red Marble Block</td><td>Revelwood Hollow Halls</td><td>10 Red Marble Fragment</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Rough Sandstone Block</td><td>Mine Sandstone</td><td>10 Sandstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Regular Sandstone Block</td><td>Mine Sandstone</td><td>10 Sandstone + 2 Clay</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Refined Sandstone Block</td><td>Mine Sandstone</td><td>10 Sandstone + 2 Clay + 2 Sand + 1 Indigo Plant</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Mixed Sandstone Block</td><td>Scavenger Outpost</td><td>5 Limestone + 10 Sandstone</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Specialty Blocks (12)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Block</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Fired Bricks Block</td><td>Get Fired Bricks</td><td>10 Fired Bricks</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Castle Wall Block</td><td>Fortification quest</td><td>5 Dirt + 20 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">City Wall Block</td><td>A Tower to the Stars quest</td><td>10 Stone + 2 Dirt</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Desert City Wall Block</td><td>Emily Fray's Tavern quest</td><td>30 Sandstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Desert Temple Block</td><td>Sun Temple (Deepcut)</td><td>20 Sandstone + 2 Indigo Plant</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Ectoplasm Block</td><td>Nomad Highlands Hollow Halls</td><td>5 Ectoplasm Shard + 5 Flintstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Hollow Halls Block</td><td>Springlands Hollow Halls</td><td>5 Stone + 1 Tar</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Mycelium Overgrown Block</td><td>Mine Mycelium</td><td>10 Stone + 5 Mycelium</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Obsidian Block</td><td>Forge of Obsidia</td><td>20 Obsidian + 20 Silver Bars</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Well Block</td><td>Carpenter quest</td><td>10 Sandstone + 5 Shroud Liquid</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Blue Luminescent Block</td><td>Get Luminous Growth</td><td>5 Luminous Growth + 5 Stone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">White Luminescent Block</td><td>Get White Glowing Substance</td><td>5 Stone + 5 White Glowing Substance</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Metal Blocks (6)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Block</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Copper Block</td><td>Get Copper Bars</td><td>1 Copper Bar + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Bronze Block</td><td>Get Bronze Bars</td><td>1 Bronze Bar + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Iron Block</td><td>Get Iron Bars</td><td>1 Iron Bar + 5 Wood Logs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Metal Block</td><td>Find Metal Sheets</td><td>1 Metal Sheet + 5 Wood Logs</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Roof Blocks (8)</h3>
        <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
          <div>• <strong>Plant Fiber Roof Block:</strong> 5 Plant Fiber — starting roof, rustic thatch look</div>
          <div>• <strong>Wood Shingle Roof Block:</strong> Wood-based, cleaner appearance</div>
          <div>• <strong>Clay Tile Roof Block:</strong> Fired clay — sturdy Mediterranean style</div>
          <div>• <strong>Slate Roof Block:</strong> Stone-based — heavy, durable</div>
          <div>• <strong>Thatch Roof Block:</strong> Plant fiber — tropical/rustic look</div>
          <div>• <strong>Metal Roof Block:</strong> Metal sheets — industrial appearance</div>
          <div>• <strong>Palm Thatch Roof:</strong> Palm wood — tropical style (Veilwater)</div>
          <div>• <strong>Shroud Wood Roof:</strong> Shroud Wood — dark, mysterious appearance</div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Road Blocks (4)</h3>
        <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
          <div>• <strong>Dirt Road Block:</strong> Basic path — 2 Dirt</div>
          <div>• <strong>Stone Road Block:</strong> Clean path — 5 Stone</div>
          <div>• <strong>Brick Road Block:</strong> Fired Brick — elegant city look</div>
          <div>• <strong>Cobblestone Road Block:</strong> Rough stone — medieval aesthetic</div>
        </div>

        <InfoBox title="Block Crafting Tip" type="tip">
          All blocks are crafted at the Workbench — you do NOT need the Blacksmith or Carpenter to make building blocks. Each craft produces 100 blocks. Early game: craft Rough Stone Blocks (2 Stone = 100 blocks) for quick shelter. Late game: mix Refined Stone, Metal, and Obsidian blocks for impressive fortresses.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'crafting-stations',
    title: 'Crafting Stations',
    icon: <Wrench className="w-5 h-5" />,
    summary: '19 specialized crafting stations — from Workbench to Laboratory.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded has <strong className="text-[var(--text-primary)]">19 specialized crafting stations</strong> that unlock 
          as you rescue Craftspeople NPCs and progress. Each station serves a unique function in your base's production pipeline.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Core Stations (Always Available)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Player Crafting (Inventory)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Basic survival items: tools, torches, campfires, Flame Altar. Available from game start. Press 'V' to open.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Workbench</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1"><strong>Cost:</strong> 3 String + 8 Wood Logs | <strong>Crafts:</strong> Building blocks, furniture, decorations, basic stations</p>
            <p className="text-[10px] text-[var(--text-muted)]">The central hub of your base. Also repairs gear instantly when interacted with.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Blacksmith Stations (3)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Charcoal Kiln</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Burns Wood Logs into Charcoal. Essential fuel for the Forge and Smelter.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Forge</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Creates metal sheets from Metal Scraps. Crafts weapons, shields, heavy armor, and tools.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Smelter</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Smelts ore into metal bars: Copper → Bronze → Iron → Steel → Silver. Core of metal progression.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Blast Furnace (Endgame)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Unlocked via Scavenger Tyrant quest. Crafts Steel Bars and legendary metal items.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Alchemist Stations (4)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Mortar</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Grinds herbs and materials into powders. Entry-level alchemy processing.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Grinding Stones</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Converts resources: Bone → Bonemeal, herbs → powders. Material transformation.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Alchemy Station</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Brews potions, health elixirs, mana potions, and buff consumables. Essential for survival.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Laboratory</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Advanced alchemy: Nitrate, Enshrouded Oil, Green Vitriol Powder. Endgame crafting.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Carpenter Stations (3)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Kiln</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Fires clay into Fired Bricks. Also processes ceramics and pottery.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Table Saw</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Cuts Wood Logs into Wood Planks. Essential for refined wood crafting.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Masonry Tools</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Crafts stone blocks, bricks, and refined stone materials.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Hunter Stations (2)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Tanning Station</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Processes animal hides into Leather. Required for leather armor and items.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Loom</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Weaves cloth armor and fabric materials from fibers and animal drops.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Farmer Stations (3)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Cooking Station</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Prepares cooked food, meals, and provisions from raw ingredients.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Seed Bed</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Cultivates seeds, saplings, and plants for farming.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Drying Rack</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Preserves food through drying. Extends food shelf life significantly.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Water Well</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Place in your base to provide a water source for farming and crafting. Refills over time. Multiple wells recommended for large farms.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Specialized Stations (4)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Coloring Station</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Processes dyes and pigments. Colors building blocks, furniture, and decorations.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Oven</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Bakes bread, pastries, and advanced cooked items. Higher-tier food production.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Hand Spindle / Spinning Wheel</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Spins thread and fine textiles from fibers. Upgrades to Spinning Wheel for better quality.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Ectoplasm Press</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Processes Ectoplasm into spirit materials. Used for mystical furniture and collector items.</p>
          </div>
        </div>

        <InfoBox title="Station Layout Tips" type="tip">
          Group stations by workflow: Blacksmith corner (Kiln → Forge → Smelter), Alchemy lab (Mortar → Grinding → Alchemy Station → Laboratory), Carpentry workshop (Table Saw → Kiln), Kitchen (Cooking → Oven → Drying Rack). Place storage chests next to each station group for the materials they use. This cuts crafting time by 50%+.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'craftspeople',
    title: 'Craftspeople NPCs',
    icon: <Users className="w-5 h-5" />,
    summary: '8 Craftspeople NPCs — rescue locations, stations, and what each unlocks.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong className="text-[var(--text-primary)]">8 Craftspeople NPCs</strong> are trapped in Ancient Vaults across Embervale. 
          Rescuing them unlocks specialized crafting stations and recipes. Use the <strong>Summoning Staff</strong> to place them in your base — 
          they need a <strong>roof over their head</strong> and nearby workbenches to function at full capacity.
        </p>

        <div className="space-y-3">
          <div className="game-panel corner-decor p-4 border-l-2 border-orange-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-orange-400">Blacksmith — Oswald Anders</h4>
              <span className="text-[10px] text-green-400">FIRST NPC</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">The most important NPC. Unlocks metal crafting, the Forge, Glider, and Grappling Hook.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — northeast of Springlands, near Braelyn Bridge</div>
              <div><strong>Stations:</strong> Charcoal Kiln, Forge, Smelter, Smithing Tools, Blast Furnace</div>
              <div><strong>Crafts:</strong> Weapons, shields, heavy armor, tools, metal upgrades</div>
              <div><strong>Quest:</strong> Teaches you to craft the Glider after rescue</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-purple-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-purple-400">Alchemist — Balthazar</h4>
              <span className="text-[10px] text-green-400">EARLY GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Brews potions, elixirs, and magical items. Essential for Shroud survival and boss fights.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — southeast Springlands</div>
              <div><strong>Stations:</strong> Mortar, Grinding Stones, Alchemy Station, Laboratory</div>
              <div><strong>Crafts:</strong> Health/Mana potions, buff consumables, magical ammo, mage armor</div>
              <div><strong>Quest:</strong> Points you toward the Collector NPC</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-green-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-green-400">Carpenter — Cade Hawthorn</h4>
              <span className="text-[10px] text-green-400">EARLY GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Woodworking master. Crafts Gliders, Grappling Hooks, furniture, and storage.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — Low Meadows</div>
              <div><strong>Stations:</strong> Kiln, Table Saw, Masonry Tools</div>
              <div><strong>Crafts:</strong> Gliders, Grappling Hooks, furniture, storage chests, decorative items</div>
              <div><strong>Special:</strong> Magic Chest blueprint (items usable for crafting anywhere in base)</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-blue-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-blue-400">Hunter — Athalan Skree</h4>
              <span className="text-[10px] text-green-400">EARLY GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Survival specialist. Crafts bows, traps, leather armor, and hunting gear.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — Low Meadows</div>
              <div><strong>Stations:</strong> Tanning Station, Loom</div>
              <div><strong>Crafts:</strong> Bows, arrows, traps, leather armor, fur clothing</div>
              <div><strong>Special:</strong> Provides better torch crafting recipe</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-yellow-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-yellow-400">Farmer</h4>
              <span className="text-[10px] text-green-400">EARLY GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Agriculture expert. Unlocks farming, cooking, and food processing.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — central Springlands</div>
              <div><strong>Stations:</strong> Cooking Station, Seed Bed, Drying Rack</div>
              <div><strong>Crafts:</strong> Seeds, crops, cooked food, preserved provisions</div>
              <div><strong>Special:</strong> Essential for the three-food-buff system</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-pink-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-pink-400">Bard</h4>
              <span className="text-[10px] text-yellow-400">MID GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Musician and entertainer. Provides party buffs through music.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — Blackmire (Revelwood northwest)</div>
              <div><strong>Stations:</strong> Instrument crafting, performance items</div>
              <div><strong>Crafts:</strong> Musical instruments, bard-specific items</div>
              <div><strong>Buff:</strong> Playing music adds +2 minutes to Rested buff</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-cyan-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-cyan-400">Collector — Alden Crowley</h4>
              <span className="text-[10px] text-yellow-400">MID GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Rare item specialist. Creates mystical furniture and special food.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Hollow Halls dungeon (quest from Alchemist)</div>
              <div><strong>Stations:</strong> Ectoplasm Press</div>
              <div><strong>Crafts:</strong> Mystical furniture sets, special food items, collector pieces</div>
              <div><strong>Special:</strong> High-comfort furniture for maximum Rested buff</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-4 border-l-2 border-teal-400">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-sm font-bold text-teal-400">Angler</h4>
              <span className="text-[10px] text-red-400">LATE GAME</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mb-2">Fishing master. Unlocks the fishing system and aquatic crafting.</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong>Location:</strong> Ancient Vault — Veilwater Basin</div>
              <div><strong>Stations:</strong> Fishing Rod crafting, aquatic items</div>
              <div><strong>Crafts:</strong> Fishing rods, bait, fish-based cooking recipes</div>
              <div><strong>Special:</strong> Required for Veilwater Basin content</div>
            </div>
          </div>
        </div>

        <InfoBox title="NPC Rescue Order Recommendation" type="tip">
          1) <strong>Blacksmith</strong> (essential — unlocks Glider) 2) <strong>Alchemist</strong> (potions for survival) 3) <strong>Carpenter</strong> (better Glider + furniture) 4) <strong>Hunter</strong> (leather armor + bows) 5) <strong>Farmer</strong> (food buffs) 6) <strong>Bard</strong> (music buffs) 7) <strong>Collector</strong> (comfort furniture) 8) <strong>Angler</strong> (fishing — Veilwater only). You can rescue them in any order, but this path maximizes progression speed.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'comfort-system',
    title: 'Comfort System',
    icon: <Sofa className="w-5 h-5" />,
    summary: 'Comfort mechanics, Rested buff, furniture list, and max comfort setup (Level 69).',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-[var(--text-primary)]">Comfort System</strong> is one of Enshrouded's most powerful mechanics. 
          A high-Comfort base grants the <strong className="text-[var(--text-gold)]">Rested buff</strong> that boosts max stamina and 
          regeneration for over an hour — making combat, exploration, and building vastly easier.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">How Comfort Works</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Comfort Level</strong> = sum of all unique furniture comfort values in a shelter</li>
            <li>• Each Comfort point = <strong>+1 minute</strong> of Rested buff duration</li>
            <li>• <strong>Max Comfort: 69</strong> → Rested lasts <strong>1 hour 14 minutes</strong></li>
            <li>• <strong>Well Rested</strong> skill adds +5 minutes flat</li>
            <li>• <strong>Bard instruments</strong> add +2 minutes when played</li>
            <li>• Duplicate furniture types do NOT stack — variety matters!</li>
            <li>• Comfort does <strong>not degrade</strong> over time</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Rested Buff Requirements</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">1. Sheltered (Roof Required)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Must be under a roof. Any roof block qualifies. Open sky = no Rested buff.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">2. Warm (Fire Source)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Must be near a heat source: Campfire, Fireplace, or Flame Altar. Cold = reduced buff.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">3. Comfortable (Furniture)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Must have comfort-granting furniture nearby. More variety = higher comfort = longer buff.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">High-Comfort Furniture List</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Furniture</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Comfort</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Source</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Stone Fireplace</td><td className="text-red-400">8</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Chandelier</td><td className="text-red-400">7</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Banquet Table</td><td className="text-orange-400">6</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Canopy Bed</td><td className="text-orange-400">6</td><td>Carpenter / Collector</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Grandfather Clock</td><td className="text-orange-400">5</td><td>Collector</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Bookshelf</td><td className="text-yellow-400">4</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Dresser</td><td className="text-yellow-400">4</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Weapon Rack</td><td className="text-yellow-400">4</td><td>Blacksmith</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Carpet / Rug</td><td className="text-yellow-400">3</td><td>Loom / Hunter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Chair / Stool</td><td className="text-green-400">2</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Table</td><td className="text-green-400">2</td><td>Carpenter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Wall Banner</td><td className="text-green-400">2</td><td>Hunter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Bed / Cot</td><td className="text-green-400">2-4</td><td>Carpenter / World</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Lantern / Torch</td><td className="text-green-400">1</td><td>Workbench</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Flower Pot</td><td className="text-green-400">1</td><td>Farmer</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Painting / Portrait</td><td className="text-green-400">1</td><td>World / Collector</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Max Comfort Setup (Level 69)</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-2">To achieve the maximum Comfort Level of 69, build a large shelter with one of each high-value furniture piece:</p>
          <div className="text-[10px] text-[var(--text-secondary)] space-y-0.5">
            <div>• Stone Fireplace (8) + Chandelier (7) = 15</div>
            <div>• Banquet Table (6) + Canopy Bed (6) + Grandfather Clock (5) = 17</div>
            <div>• Bookshelf (4) + Dresser (4) + Weapon Rack (4) + Carpet (3) = 15</div>
            <div>• Multiple chairs, tables, banners, beds, lanterns, paintings (~22)</div>
            <div className="text-[var(--text-gold)] font-bold mt-1">Total: 69 Comfort → 1h 14m Rested buff</div>
          </div>
        </div>

        <InfoBox title="Comfort Building Tips" type="tip">
          1) Build ONE of each furniture type — duplicates don't stack 2) Place the Fireplace centrally for heat coverage 3) Hang Chandeliers high for maximum room coverage 4) Collector furniture has the highest comfort values — prioritize rescuing the Collector 5) Use the Bard's instruments for +2 minutes 6) Take the Well Rested skill for +5 minutes 7) A 25-30 Comfort base gives 30+ minutes of Rested — sufficient for most play sessions
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'base-design',
    title: 'Base Design',
    icon: <Warehouse className="w-5 h-5" />,
    summary: 'Structural stability, terrain manipulation, efficient layouts, and design tips.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          A well-designed base isn't just about looks — it's about <strong className="text-[var(--text-primary)]">workflow efficiency</strong>, 
          <strong className="text-[var(--text-primary)]"> structural integrity</strong>, and <strong className="text-[var(--text-primary)]">practical navigation</strong>. 
          Master these systems and your base will serve you from early game to endgame.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Structural Freedom — No Physics System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Unlike Valheim, Enshrouded has NO structural integrity system</strong> — blocks never check for support</li>
            <li>• Floating platforms, cantilevered towers, and upside-down pyramids are all perfectly valid — nothing collapses, ever</li>
            <li>• A stone tower won't fall because you skipped columns; a bridge won't sag because you skipped arches</li>
            <li>• <strong>Pillars, arches, and beams are purely aesthetic</strong> — add them because they look right, not because the game demands it</li>
            <li>• This freedom cuts both ways: builds that defy gravity fool the eye, so visual discipline is on you</li>
            <li>• Sky bases are fully viable — combine with Flame Altar leapfrogging to build at any height</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Terrain Manipulation</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Pickaxe — Remove Terrain</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Mines voxel blocks of dirt, stone, and sand. Also mines ore veins. Changes are permanent and saved.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Flatten Tool — Smooth Surfaces</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Creates flat building surfaces. Essential for foundations and floors. Right-click to flatten an area.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Raise Tool — Add Terrain</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Adds terrain material back. Fills holes, creates elevations, builds up foundation areas.</p>
          </div>
        </div>

        <InfoBox title="Terrain Tips" type="tip">
          Use Flatten Tool to clear a large flat area BEFORE placing your Flame Altar. This makes building infinitely easier. The Pickaxe can carve into mountainsides for cave bases. Terrain changes are PERMANENT on dedicated servers — all players see the same modified landscape.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Efficient Base Layout</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">The Three-Zone System</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Divide your base into three functional zones:</p>
            <div className="text-[10px] text-[var(--text-muted)] space-y-0.5">
              <div><strong className="text-orange-400">Crafting Zone:</strong> All NPCs and their stations in one open hall. Move station-to-station quickly.</div>
              <div><strong className="text-blue-400">Storage Zone:</strong> Labeled chests next to each station group. Ores near Smelter, fabrics near Loom, food near Kitchen.</div>
              <div><strong className="text-green-400">Utility Zone:</strong> Flame Altar central, beds upstairs, rooftop glider platform, farm plots nearby.</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Vertical Design</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Build upward! Ground floor = crafting + storage. Second floor = beds + comfort furniture. Rooftop = glider launch pad + lookout. Basement = farm plots (protected from weather).</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Lighting & Navigation</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Place lanterns on ALL paths and stairs. Light every room. This makes night navigation clean and fast. Use different colored lanterns to mark zones (orange = crafting, blue = storage, green = utility).</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Essential Base Features Checklist</h3>
        <div className="game-panel corner-decor p-4">
          <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
            <div><strong className="text-[var(--text-primary)]">Core:</strong> Flame Altar (central), Workbench, Campfire/Fireplace</div>
            <div><strong className="text-[var(--text-primary)]">Crafting:</strong> All NPC stations grouped by type</div>
            <div><strong className="text-[var(--text-primary)]">Storage:</strong> Labeled chests (Ores, Wood, Food, Gear, Misc)</div>
            <div><strong className="text-[var(--text-primary)]">Comfort:</strong> Bed, fireplace, furniture variety</div>
            <div><strong className="text-[var(--text-primary)]">Defense:</strong> Walls/gates if in hostile area</div>
            <div><strong className="text-[var(--text-primary)]">Travel:</strong> Rooftop glider platform</div>
            <div><strong className="text-[var(--text-primary)]">Farming:</strong> Seed beds, farm plots (ground or basement)</div>
            <div><strong className="text-[var(--text-primary)]">Animals:</strong> Feeders, sleeping spots for pets/farm animals</div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Building Piece Categories</h3>
        <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
          <div>• <strong>Foundations:</strong> 1M, 2M, 4M — base of every structure</div>
          <div>• <strong>Walls:</strong> 1M, 2M, 4M — with or without window/door frames</div>
          <div>• <strong>Roofs:</strong> 1M, 2M, 4M — peaked, flat, corner, ridge pieces</div>
          <div>• <strong>Stairs:</strong> Straight, spiral, ladder — vertical connections</div>
          <div>• <strong>Floors:</strong> 1M, 2M, 4M — indoor flooring</div>
          <div>• <strong>Decorative:</strong> Arches, beams, columns, railings</div>
          <div>• <strong>Doors & Windows:</strong> Various sizes and styles</div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Base Relocation</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)] mb-2">Moving your base is tedious but sometimes necessary. There is <strong>no official "move base" button</strong> — you must do it manually:</p>
          <ol className="space-y-1 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong>Build a new Flame Altar</strong> at the desired location</li>
            <li><strong>Move items manually:</strong> Transfer contents from old chests to your inventory, then place in new chests</li>
            <li><strong>Re-summon NPCs:</strong> Use the Summoning Staff to move Craftspeople to the new base</li>
            <li><strong>Rebuild stations:</strong> Crafting stations must be rebuilt at the new location</li>
            <li><strong>Extinguish old Altar:</strong> Remove the old Flame Altar to free up an altar slot</li>
          </ol>
          <p className="text-xs text-orange-400 mt-2">Tip: Magic Chests make relocation easier — their contents are accessible base-wide. Some players use a "cart" system (multiple trips with full inventory) or ask friends to help carry items on multiplayer servers.</p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Flame Holder</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Cost:</strong> Only <strong>5 Stone</strong> — ultra-cheap</li>
            <li>• <strong>Function:</strong> Creates a temporary respawn point and safe zone</li>
            <li>• <strong>Use case:</strong> Place as checkpoints when exploring dangerous areas</li>
            <li>• <strong>Limitation:</strong> Does NOT enable building — only Flame Altars allow construction</li>
            <li>• <strong>Strategy:</strong> Place before boss fights, Shroud dives, or long expeditions</li>
            <li>• <strong>vs Flame Altar:</strong> Flame Holders are disposable; Altars are permanent base cores</li>
          </ul>
        </div>

        <InfoBox title="Pro Base Design Tips" type="warning">
          1) Leave room to expand — don't build to the edge of your Altar radius 2) Build a second floor EARLY — vertical space is free real estate 3) Use 4M foundations for large rooms — fewer pieces, less building time 4) Place Flame Holders (5 Stone) as checkpoints when exploring dangerous areas 5) Chests outside your Flame Altar radius will reset when you restart — keep everything inside 6) Build bridges between separate structures using beams and walkways 7) Use the Flatten Tool on your roof for a perfect glider launch pad 8) When relocating, move Magic Chests first — their contents transfer with them
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'farming',
    title: 'Farming & Agriculture',
    icon: <Sprout className="w-5 h-5" />,
    summary: 'Complete farming system — crops, soil types, Seedbed, Water Well, and the three-food-buff engine.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Farming turns Enshrouded from a survival grind into a <strong className="text-[var(--text-primary)]">self-sufficient engine</strong>. 
          Once your base produces its own crops, you can keep a stack of stat-boosting meals for every fight, climb, and Shroud dive. 
          The farming system unlocks after rescuing the <strong className="text-[var(--text-gold)]">Farmer NPC (Emily Fray)</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Unlocking Farming</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Complete quest <strong>"Growing Stronger Together"</strong> to rescue the Farmer</li>
            <li>• Farmer location: <strong>Ancient Vault</strong> — Springlands, north of the Springlands Ancient Spire</li>
            <li>• Summon her at your base using the <strong>Summoning Staff</strong></li>
            <li>• She brings: <strong>Seedbed, Cooking Station, Oven, Beehive</strong></li>
            <li>• Craft <strong>Farm Soil</strong> from Springlands Dirt + Bonemeal</li>
            <li>• Build the <strong>Seedbed</strong> using Wood Logs, Metal Scraps, and Farm Soil</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Soil Types (5)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Soil</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Growth Speed</th><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Notes</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Sand</td><td className="text-red-400">Slowest</td><td>Desert areas. Poor growth.</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Dirt</td><td className="text-yellow-400">Slow</td><td>Default ground. Usable but not ideal.</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Potting Soil</td><td className="text-yellow-400">Medium</td><td>Better than dirt. Early game option.</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Farm Soil</td><td className="text-green-400">Fast</td><td>Crafted. Recommended for most crops.</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Fertilized Farm Soil</td><td className="text-green-400">Fastest</td><td>Best soil. Late-game option.</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Planting Process" type="tip">
          1) Harvest wild plants to unlock seedling recipes 2) Craft seedlings at Seedbed (produce + water) 3) Place Farm Soil with Construction Hammer (Terrain tab) 4) Plant seedlings in soil 5) Water if needed (most crops need 1 unit, Taro/Rice need 2) 6) Wait for growth (10 min to 1+ hour depending on crop) 7) Harvest for produce + new seeds
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Crop Categories</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
          <div className="game-panel corner-decor p-2"><div className="font-bold text-red-400">Fruits</div><div>Tomato, Pumpkin, Berry varieties</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-green-400">Vegetables</div><div>Cabbage, Carrot, Onion, Taro</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-yellow-400">Grains</div><div><strong>Wheat</strong> (essential for cooking)</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-purple-400">Herbs</div><div>Various medicinal/crafting herbs</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-blue-400">Tea Plants</div><div>Tea leaves for beverages</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-orange-400">Fiber</div><div><strong>Flax</strong> (essential for Linen)</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-pink-400">Trees</div><div>Saplings for wood production</div></div>
          <div className="game-panel corner-decor p-2"><div className="font-bold text-cyan-400">Water Crops</div><div>Rice (needs 2 water units)</div></div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Water System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Water Well:</strong> Place in your base — provides water for crafting and farming</li>
            <li>• Wells refill over time but have a per-cycle limit</li>
            <li>• High-demand farms need <strong>multiple wells</strong> near planting beds</li>
            <li>• Water is also gathered from world wells and rivers</li>
            <li>• Used for: Seedbed seedling crafting + high-water crops</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Beekeeping</h3>
        <p className="text-xs text-[var(--text-muted)] mb-3">After completing the Farmer's quests, you unlock the <strong className="text-yellow-400">Beehive Smoker</strong> and can craft <strong className="text-yellow-400">Honey Beehives</strong> for your base. This provides a steady, renewable source of Honey and Wax.</p>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Beehive Smoker:</strong> Unlocked via Farmer questline — tool for safely harvesting from beehives</li>
            <li>• <strong>Honey Beehive:</strong> Crafted at Farmer station — place in your base to produce Honey and Wax over time</li>
            <li>• <strong>Production:</strong> Each Beehive generates Honey and Wax periodically</li>
            <li>• <strong>Wild Beehives:</strong> Found on trees in Springlands (near Longkeep) — harvest with Beehive Smoker</li>
            <li>• <strong>Respawn:</strong> Wild beehives respawn daily; crafted beehives produce continuously</li>
            <li>• <strong>Honey uses:</strong> Potions (Health/Mana), cooking recipes, Flame strengthening</li>
            <li>• <strong>Wax uses:</strong> Crafting candles, furniture, alchemical items</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Almanac of Plants and Seedlings</h3>
        <p className="text-xs text-[var(--text-muted)] mb-3">A <strong>reference book</strong> provided by the Farmer that teaches you about the various plants in Embervale and their agricultural properties. Using it helps identify new crops and their growing conditions.</p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Essential Crops Priority</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-400">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Wheat — TOP PRIORITY</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Feeds the widest range of cooking recipes. Bread is the foundation of most meal combinations. Always have Wheat growing.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Flax — CRAFTING ESSENTIAL</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Processed into Linen for armor, bags, and crafting. Non-negotiable for progression.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Vegetables — BUFF FOOD</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Cabbage, Carrot, Onion for stat-boosting meals. The three-food-buff system requires variety.</p>
          </div>
        </div>

        <InfoBox title="Farming Tips" type="tip">
          1) Always keep Flax and Wheat growing — they're crafting staples 2) Stagger planting so something is always ready to harvest 3) Use snapping tool (toggle in bottom right) for fast planting 4) Place Farm Soil inside your base for protection 5) Build farm plots on the ground floor or basement 6) High-water crops (Taro, Rice) should sit closest to wells 7) Reserve dedicated beds for staples, expand into buff foods as build solidifies
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'animal-taming',
    title: 'Animal Taming',
    icon: <PawPrint className="w-5 h-5" />,
    summary: '8 tameable animals, bait crafting, pet system, breeding, and animal products.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">8 tameable animal species</strong> and 
          <strong className="text-[var(--text-primary)]"> 6 unique pets</strong> (3 cats + 3 dogs from quests). Tamed animals provide 
          resources like milk, eggs, and wool, while pets grant a <strong className="text-[var(--text-gold)]">+25 Health buff for 30 minutes</strong> 
          when interacted with.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">How to Tame Animals</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ol className="space-y-1 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong>Craft Bait:</strong> Each animal type requires specific bait (vegetables, grains, berries)</li>
            <li><strong>Find the Animal:</strong> Locate in the wild (see location table below)</li>
            <li><strong>Approach Slowly:</strong> Crouch and move gently — sudden movements scare them</li>
            <li><strong>Place Bait:</strong> Drop bait on the ground near the animal</li>
            <li><strong>Let it Eat:</strong> Wait for the animal to approach and eat the bait</li>
            <li><strong>Pet It:</strong> Press interact to pet while it's eating — tames after 1-3 pets</li>
            <li><strong>Pick Up:</strong> Carry tamed animal to your base and place it</li>
          </ol>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Tameable Animals (8 Species)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Animal</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Location</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Products</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Goat</td><td>Springlands</td><td>Hide, Meat, Bones, <strong className="text-green-400">Milk</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Shaggy Goat</td><td>Albaneve Summits</td><td>Hide, Meat, Bones, <strong className="text-green-400">Milk</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-white">Frizzy Goat</td><td>Albaneve Summits</td><td>Hide, Meat, Bones, <strong className="text-green-400">Milk</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-cyan-400">Yak</td><td>Albaneve Summits</td><td>Hide, Meat, Bones, <strong className="text-blue-400">Wool</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Hophare</td><td>Springlands, Albaneve</td><td>Hide, Meat</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Fae Deer</td><td>Revelwood</td><td>Hide, Bones, <strong className="text-green-400">Milk</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Flightless Redtail</td><td>Nomad Highlands</td><td><strong className="text-yellow-400">Eggs</strong>, Feathers, Meat</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Capybara</td><td>Veilwater Basin</td><td><strong className="text-teal-400">Bristles</strong> (for fishing + armor)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quest Pets (6 Unique)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Cats (3)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Obtained via special quests. Each is unique and cannot be bred.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div>• <strong>Tyger</strong> — Quest reward</div>
              <div>• <strong>Captain Whiskers</strong> — Quest reward</div>
              <div>• <strong>Sapphire</strong> — Quest reward</div>
              <div className="text-green-400 mt-1">Buff when petted: +25 Health for 30 minutes</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Dogs (3)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Obtained via special quests. Each is unique and cannot be bred.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div>• <strong>Ruffles</strong> — Quest reward</div>
              <div>• <strong>Ikko</strong> — Quest reward</div>
              <div>• <strong>Pompom Jr.</strong> — Quest reward</div>
              <div className="text-green-400 mt-1">Buff when petted: +25 Health for 30 minutes</div>
            </div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Breeding System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Build a <strong>Barn</strong> for your animals — they need shelter to breed</li>
            <li>• Place at least <strong>2 animals of the same species</strong> in the barn</li>
            <li>• Feed them regularly with appropriate food</li>
            <li>• Animals will breed over time, producing offspring</li>
            <li>• Offspring grow into adults and can be harvested for resources</li>
            <li>• <strong>Pets (cats/dogs) cannot be bred</strong> — they're unique quest rewards</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Animal Housing Requirements</h3>
        <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
          <div>• <strong>Shelter:</strong> Animals need a roof over their heads (same as NPCs)</div>
          <div>• <strong>Feeder:</strong> Place animal feed in a trough near their sleeping spot</div>
          <div>• <strong>Sleeping Spot:</strong> Animals need a designated resting area</div>
          <div>• <strong>Space:</strong> Don't overcrowd — animals need room to move</div>
          <div>• <strong>Protection:</strong> Keep animals inside your Flame Altar radius</div>
        </div>

        <InfoBox title="Animal Taming Tips" type="tip">
          1) Crouch and approach slowly — running scares animals away 2) Place bait and wait — don't rush the petting 3) Cats are the hardest to tame — be extra patient 4) Build a barn EARLY — breeding takes time 5) Keep Goats for Milk (cooking) and Yaks for Wool (armor) 6) Flightless Redtails provide Eggs — great for cooking buffs 7) Pets despawn at sunrise if not placed safely — keep them in your base
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'storage',
    title: 'Storage System',
    icon: <Package className="w-5 h-5" />,
    summary: '8 chest types, Magic Chest mechanic, backpack upgrades, and inventory management.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Efficient storage is critical for a well-organized base. Enshrouded offers <strong className="text-[var(--text-primary)]">8 chest types</strong> 
          ranging from 16-slot Tiny Chests to 48-slot Huge Magic Chests, plus <strong className="text-[var(--text-gold)]">Magic Chests</strong> that 
          allow base-wide crafting access to their contents.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Regular Chests (4 Tiers)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Chest</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Slots</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Tiny Chest</td><td>16</td><td>3 String + 6 Twigs</td><td>Workbench</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Small Chest</td><td>24</td><td>6 Nails + 6 Wood Logs</td><td>Blacksmith (Nails)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Medium Chest</td><td>32</td><td>8 Nails + 12 Wood Planks + 2 Metal Sheets</td><td>Carpenter + Revelwood</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Large Chest</td><td>40</td><td>16 Nails + 20 Wood Planks + 3 Bronze Bars</td><td>Nomad Highlands (Bronze)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Huge Chest</td><td>48</td><td>8 Nails + 12 Wood Planks + 2 Iron Bars</td><td>Kindlewastes (Iron)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Magic Chests (4 Tiers)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-3">Magic Chests have a <strong className="text-purple-400">glowing blue enchantment</strong>. Items stored inside are treated as if in your active inventory by all crafters within base range — no need to carry materials to stations!</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Magic Chest</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Slots</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Additional Materials</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Small Magic Chest</td><td>24</td><td>Small Chest + 1 Shroud Core</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Medium Magic Chest</td><td>32</td><td>Medium Chest + 2 Shroud Cores + 2 Goo</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Large Magic Chest</td><td>40</td><td>Large Chest + 3 Shroud Cores + 3 Alchemical Base</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Huge Magic Chest</td><td>48</td><td>Huge Chest + 4 Shroud Cores + 4 Shrouded Oil</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Magic Chest Mechanics" type="info">
          Magic Chests allow ALL crafters in your base to use items stored inside as if they were in your personal inventory. This means you can store all your crafting materials in Magic Chests and craft anything without running around grabbing materials. Place Magic Chests centrally near your crafting stations for maximum efficiency. Every base should prioritize crafting Magic Chests as soon as possible.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Backpack Upgrades</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• The <strong>Hunter NPC</strong> crafts backpack upgrades</li>
            <li>• Each upgrade increases inventory by <strong>+8 slots</strong></li>
            <li>• Tiers match chest sizes: 24 → 32 → 40 slots</li>
            <li>• Costs leather and fabric materials</li>
            <li>• <strong>Essential early investment</strong> — more inventory = less running back to base</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Inventory Management Tips</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Chest Organization</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Label chests by content: Ores & Metals, Wood & Building, Food & Cooking, Gear & Weapons, Herbs & Alchemy, Misc. Place near the stations that use those materials.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Quick Deposit</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Press <strong>Shift + R</strong> while a chest is open to auto-deposit all items of the same type already in that chest. Saves massive time on inventory management.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Storage Priority</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">1) Rush Blacksmith for Small Chests (skip Tiny Chests) 2) Get Carpenter for Magic Chests ASAP 3) Upgrade to Large/Huge as you progress 4) Keep one Magic Chest near each crafting station group.</p>
          </div>
        </div>

        <InfoBox title="Storage Pro Tips" type="tip">
          1) Skip Tiny Chests entirely — rush Blacksmith for 24-slot Small Chests 2) Magic Chests are the #1 quality-of-life upgrade in the game 3) Chests outside Flame Altar radius RESET on server restart — keep everything inside! 4) Upgrade backpack from Hunter early — +8 slots per upgrade 5) Use Shift+R quick deposit to save inventory management time 6) Dedicate one Magic Chest to each material type (Ores, Wood, Food, Gear)
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'altar-mechanics',
    title: 'Flame Altar Rules & Limits',
    icon: <Flame className="w-5 h-5" />,
    summary: 'The hard rules every builder must know — the 30-minute rollback, the 10-altar cap, altar leapfrogging, and multiplayer permission roles.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Flame Altar is more than a fast-travel point — it is the legal boundary of everything you build. These are the hard rules the game enforces but never explains in one place.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">The 30-Minute Rollback Rule</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• Only changes made <strong className="text-[var(--text-primary)]">inside an active altar's radius</strong> are permanent</li>
            <li>• Anything built, dug, or placed <strong className="text-[var(--text-primary)]">outside the boundary resets after roughly 30 minutes</strong> — or when the server restarts</li>
            <li>• If your half-finished watchtower vanished overnight, it was sitting just outside the circle</li>
            <li>• Extinguishing (removing) an altar also makes its area's changes non-permanent — never tear down an altar before its replacement covers the same ground</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The 10-Altar Cap</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• A world supports a maximum of <strong className="text-[var(--text-primary)]">10 active Flame Altars</strong> at once — shared across ALL players on the server</li>
            <li>• Your available altar count scales with Flame Level (2 at Flame Lv 1, up to 10 at max level)</li>
            <li>• Budget them: one maxed-out main base + 2-3 biome outposts + a couple in reserve for new territory beats ten tiny camps</li>
            <li>• Small border outposts double as <strong className="text-[var(--text-primary)]">free fast-travel anchors</strong> — most under-prepared deaths happen 10 minutes from the nearest respawn</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Altar Leapfrogging (Sky Base Technique)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            Want a sky base or a build above the normal radius? <strong className="text-[var(--text-primary)]">Leapfrog altars up a slope:</strong> place one altar, build outward to the edge of its range, place the next altar higher, then remove the old one. Slow and altar-hungry, but it is how the community's famous floating castles get made — and with no structural integrity system, nothing you build up there will ever fall down.
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Multiplayer Permission Roles</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-2">Server hosts can password-protect four permission tiers — the difference between a cooperative build and a griefed one:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-red-400">Visitor:</strong> No base changes, no chest access, no world changes — safe default for public servers</li>
            <li><strong className="text-yellow-400">Helper:</strong> Can fight, loot, and explore — but no chests and no base changes</li>
            <li><strong className="text-blue-400">Friend:</strong> Full building and chest access — but cannot add, upgrade, or remove Flame Altars</li>
            <li><strong className="text-green-400">Admin:</strong> Everything, including altar control and kick/ban powers</li>
          </ul>
        </div>

        <InfoBox title="Altar as Utility Hub" type="tip">
          Beyond building, every Flame Altar is also a free respec station (1 Rune per skill point), a heat source for the Rested buff, and a fast-travel point. Placing outposts is never wasted even if you build nothing there.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'production-chains',
    title: 'Mills & Power Systems',
    icon: <Factory className="w-5 h-5" />,
    summary: 'Water wheels, windmills, and force generators — how to power the Mill, unlock Iron Dust production, and automate your material chains.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Some advanced workstations do not run on elbow grease — they need <strong className="text-[var(--text-gold)]">rotational force</strong> from a nearby generator. This system, expanded massively in Wake of the Water, is the backbone of late-game material production.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Force Generators</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Small / Large Water Wheel</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Placed in flowing water to generate force. The most reliable option — pair with the Update 7 water tools (pumps, springs, gates) to create flow exactly where you need it inside your base.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Small Windmill Sails</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">The landlocked alternative — no water required. Ideal for bases on peaks, in the desert, or anywhere plumbing would be a nightmare.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Mill — "Obtaining a Mill" Quest</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li>Speak with the <strong className="text-[var(--text-primary)]">Alchemist</strong> at your base to start the quest (Veilwater Basin progression)</li>
            <li>Travel to the old mill at <strong className="text-[var(--text-primary)]">River Reach</strong> — mind the traps near the entrance and the rats inside</li>
            <li>The mill is still running: fight through to the <strong className="text-[var(--text-primary)]">floodgate controls</strong> and close all <strong className="text-[var(--text-gold)]">three floodgates</strong> to stop the water wheels</li>
            <li>If the quest does not update, reopen and reclose the gates — a known quirk</li>
            <li>Collect the <strong className="text-[var(--text-gold)]">Improved Millstone</strong> from the stopped mill and return to the Alchemist</li>
            <li>Craft the Mill at your base — it only works with a <strong className="text-[var(--text-primary)]">force generator nearby</strong> (water wheel or windmill sails)</li>
          </ol>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Why the Mill Matters</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Iron Dust:</strong> The Mill's primary product — required in large quantities for late-game progression. It crafts slowly, so start production early and let it run</li>
            <li><strong className="text-[var(--text-primary)]">Green Vitriol Dust:</strong> Refined from Iron Dust at the Laboratory — a core material for high-level Flame upgrades (Flame Lv 9 alone needs 60)</li>
            <li><strong className="text-[var(--text-primary)]">Placement tip:</strong> Build your Mill near the water system it draws from but outside your main building — force generators have a proximity radius, and the Mill is bulky</li>
          </ul>
        </div>

        <InfoBox title="Plan Power Before You Need It" type="warning">
          The Mill quest arrives at the same stage of the game where Iron Dust demand spikes. Players who set up a water wheel or windmill early — even before unlocking the Mill — skip the painful "build plumbing while the Alchemist waits" phase entirely.
        </InfoBox>
      </div>
    ),
  },
];
