// Map & Locations unified database
// Sources merged & de-duplicated from: enshrouded.wiki.gg (official wiki), pindrop.gg/enshrouded
// (1,017 markers / 43 categories, validated against Update 8 "Forging the Path"),
// hacktheminotaur.com, enshrouded.fandom.com, dotesports.com/enshrouded.
// Where sources disagreed, wiki.gg + PinDrop census (CC BY-SA 4.0) wins.

export interface BiomeEntry {
  id: string;               // matches mapSubSections id
  name: string;
  band: string;             // progression band label
  level: string;
  flame: string;
  danger: 'Low' | 'Medium' | 'High' | 'Extreme' | 'Endgame';
  markers: number;          // PinDrop marker count for the biome
  desc: string;
  reach: { from: string; route: string }[];
  subRegions: { name: string; note: string }[];
  todos: string[];
  topThreat: string;
  factions: { name: string; note: string; threats?: string }[];
  resources: { gather: string; mine: string };
  census: [string, number][];   // [category, count]
  bosses: string[];
  spires: { name: string; desc: string }[];
  hollowHalls: { name: string; status: string; key?: string; quest?: string };
  collectibles: { name: string; count: number; pieces?: string }[];
  armorNote: string;
  connected: { id: string; name: string; level: string }[];
}

export const biomeEntries: BiomeEntry[] = [
  {
    id: 'biome-springlands',
    name: 'Springlands',
    band: 'Starter band',
    level: '1 - 10',
    flame: '1 - 2',
    danger: 'Low',
    markers: 139,
    desc: 'The starter region — verdant lowlands of peaceful woods and meadows where every new Flameborn cuts their teeth before pushing west or north. Contains the Cinder Vault (tutorial) and your first Flame Altar.',
    reach: [
      { from: 'Spawn', route: 'You start here after the intro — no Flame gate. Difficulty scales with distance from your first Flame Altar rather than a hard border.' },
    ],
    subRegions: [
      { name: 'Low Meadows', note: 'Open grassy valley on the eastern/southern edge (Lv 5+) — early resource runs and a second Ancient Spire.' },
    ],
    todos: [
      'Find your first Flame Altar and ignite it to unlock fast travel',
      'Rescue the Blacksmith, Hunter, and Alchemist to seed the crafting tree',
      'Stockpile Resin, Beech Wood, and Plant Fiber for the first gear tier',
      'Clear Bandit Camps for early-game gear chests and Runes',
      'Craft the Glider and Grappling Hook from the Blacksmith line',
    ],
    topThreat: 'Scavenger Matron — humanoid mini-boss that punishes slow rolls. Bring a shield.',
    factions: [
      { name: 'Fell', note: 'Elixir-corrupted humans and beasts — Embervale\'s baseline threat.' },
      { name: 'Scavengers', note: 'Survivors driven feral by Elixir overuse; hold the western camps.' },
      { name: 'Vukah', note: 'Beastmen war-bands at Fort Kelvin and Vukah Ceremony Hill.', threats: 'Vukah Brawler' },
      { name: 'Wildlife', note: 'Hostile fauna roaming the meadows.', threats: 'Wolves, Rats, Spiders, Bats, Hophares' },
      { name: 'Hollow', note: 'Undead lurking in the Necropolis and Hollow Halls.' },
    ],
    resources: {
      gather: 'Plant Fiber, Wood Logs, Twigs, Purple Berries, Resin, Chamomile',
      mine: 'Flintstone, Stone, Salt, Field Stones, Beech Wood',
    },
    census: [
      ['Settlements', 13], ['Flame Shrines', 13], ['Shroud Roots', 6], ['Ancient Vaults', 5],
      ['Night Sanctums', 5], ['Tombs & Temples', 5], ['Elixir Wells', 3], ['Gem Forges', 3],
      ['Mines', 3], ['Ancient Obelisks', 2], ['Shroud Lairs', 2],
    ],
    bosses: ['Fell Thunderbrute', 'Scavenger Matron'],
    spires: [
      { name: 'Ancient Spire — Springlands', desc: 'Just north of where you begin — visible from the first Ancient Vault. Easy climb that teaches grapple mechanics. First priority after the tutorial.' },
      { name: 'Ancient Spire — Low Meadows', desc: 'East of the Springlands along the map\'s southern edge; you may cross a Shrouded area to reach it. Unlocks Low Meadows exploration.' },
    ],
    hollowHalls: { name: 'Springlands Hollow Halls (Necropolis)', status: 'Implemented', key: 'Springlands Bone Key' },
    collectibles: [
      { name: 'Fossils', count: 5, pieces: 'Ammonite Imprint, Big Ammonite, Elevated Sea Urchin, Round Sea Urchin, Sea Urchin Cluster — each near a named landmark (Woodguard, Egerton Salt Mines, Saline Quarry, Low Meadows Spire)' },
    ],
    armorNote: 'Starter sets — Wanderer\'s Boots and early crafted gear.',
    connected: [
      { id: 'biome-revelwood', name: 'Revelwood', level: '10 - 15' },
      { id: 'biome-nomad-highlands', name: 'Nomad Highlands', level: '15 - 20' },
    ],
  },
  {
    id: 'biome-revelwood',
    name: 'Revelwood',
    band: 'Mid band',
    level: '10 - 15',
    flame: '3',
    danger: 'Medium',
    markers: 486,
    desc: 'Dense forest belt where the world opens up — bigger arenas, branching quest hooks, and the first real Shroud incursions. Home to Pikemead\'s Reach, the capital of Embervale.',
    reach: [
      { from: 'Springlands', route: 'Head north across a band of Shroud. Raise Flame to 3 before crossing, or skirt the eastern rim through the Mistbury Catacombs to dodge the deepest Shroud.' },
    ],
    subRegions: [
      { name: 'Blackmire', note: 'Murky swamp (Lv 13–15) through a north-west passage — Vukah territory, poison hazards, and the Bard survivor.' },
    ],
    todos: [
      'Push Flame Level to 3-4 to unlock the next workbench tier',
      'Take down the Fell Wispwyvern at The Pike for rare crafting drops',
      'Clear the Tower of Revelwood for the first proper dungeon loot run',
      'Stockpile Hardwood, Amber and Copper to upgrade armor sets',
      'Rescue the Bard from the Blackmire for music buffs',
    ],
    topThreat: 'Fell Wispwyvern + roaming Hollow Cyclops — both demand piercing or fire damage.',
    factions: [
      { name: 'Scavengers', note: 'Western settlements; acid-cleaver variants.' },
      { name: 'Fell', note: 'Eastern shrouded pockets.', threats: 'Fell Boar, Spitting Plant, Fell Knight' },
      { name: 'Vukah', note: 'Primary faction of the Blackmire swamp.' },
      { name: 'Wildlife', note: 'Forest fauna.', threats: 'Boars, Bats, Spiders, Fae Deer, Mushroom Crabs' },
      { name: 'Blackmire fauna', note: 'Swamp-only threats.', threats: 'Snapjaws, Giant Wasps, Wisps' },
    ],
    resources: {
      gather: 'Azure Russula, Chamomile, Flax, Hardwood',
      mine: 'Amber, Copper Ore, Luminous Growth, Stone, Clay, Limestone',
    },
    census: [
      ['Settlements', 12], ['Flame Shrines', 12], ['Shroud Roots', 8], ['Night Sanctums', 5],
      ['Misc. Dungeons', 4], ['Elixir Wells', 3], ['Farms', 3], ['Gem Forges', 3],
      ['Shroud Lairs', 3], ['Ancient Obelisks', 3], ['Mines', 2], ['Ancient Vaults', 1],
    ],
    bosses: ['Fell Critter Queen', 'Fell Thunderbrute', 'Fell Wispwyvern', 'Hollow Cyclops', 'Scavenger Matron'],
    spires: [
      { name: 'Ancient Spire — Revelwood', desc: 'Along the western edge, overlooking a Shrouded area — a great spot to farm the nearby Scavenger Encampment. Locked doors and platforming sections; top-floor Vicious Vine ambush. Bring a ranged weapon for puzzles.' },
      { name: 'Ancient Spire — Blackmire', desc: 'Sub-biome spire in the swamp. Themed around poison hazards — bring antidotes or stamina-regen food.' },
    ],
    hollowHalls: { name: 'Revelwood Hollow Halls', status: 'Implemented', key: 'Revelwood Bone Key', quest: 'Ectoplasm Press For The Collector' },
    collectibles: [
      { name: 'Fossils', count: 4, pieces: 'Gastropods, Single Gastropod, Trilobite Imprint, Trilobites' },
      { name: 'Queen Pikemead Statue', count: 3, pieces: 'Statue Arm, Statue Base, Statue Bust — assemble for a base decoration' },
      { name: 'Hollow Halls artifacts', count: 3, pieces: 'Dark Crystal Cluster, Large Dark Crystal, Sparkling Dark Crystal' },
    ],
    armorNote: '19 armor pieces sourced here — Guard of the North, Warrior, Archer and Wizard sets.',
    connected: [
      { id: 'biome-springlands', name: 'Springlands', level: '1 - 10' },
      { id: 'biome-nomad-highlands', name: 'Nomad Highlands', level: '15 - 20' },
      { id: 'biome-veilwater', name: 'Veilwater Basin', level: '35 - 45' },
    ],
  },
  {
    id: 'biome-nomad-highlands',
    name: 'Nomad Highlands',
    band: 'Mid-Late band',
    level: '15 - 20',
    flame: '4',
    danger: 'High',
    markers: 324,
    desc: 'Sun-bleached limestone bluffs high above the Shroud, studded with ancient towers. The mid-late grind region where you finalize your build identity. The Pillars of Creation — two massive volcanoes — dominate the skyline.',
    reach: [
      { from: 'Revelwood', route: 'Head southeast.' },
      { from: 'Springlands', route: 'Head northeast via Low Meadows — the direct route crosses deep Shroud, so reach Flame Level 4 first.' },
    ],
    subRegions: [
      { name: 'Umber Hollow', note: 'Central low basin choked with dense Shroud — the Highlands\' hardest pocket. Requires a comfortable Flame timer.' },
    ],
    todos: [
      'Loot the upper Towers for Aureilan armor pieces and rare schematics',
      'Hunt the Vukah Brawler at the Arena for tribal weapon drops',
      'Mine Tin + Copper for Bronze-tier gear',
      'Visit Rattlebleak, Jasper Isles, and Brightwich for quests',
      'Prepare for the jump to Kindlewastes (Flame Lv 5 required)',
    ],
    topThreat: 'Vukah Brawler — high stagger threshold; blunt and cutting dominate.',
    factions: [
      { name: 'Scavengers', note: 'Occupy the highland villages and trade outposts.' },
      { name: 'Vukah', note: 'War camps scattered across the bluffs.' },
      { name: 'Fell', note: 'Shrouded pockets, concentrated in Umber Hollow.', threats: 'Fell Mushroom Crab' },
      { name: 'Wildlife', note: 'Plateau predators.', threats: 'Sabertooth Tiger, Bats, Rats, Spiders' },
      { name: 'Hollow', note: 'Undead at the graveyard and Catacombs.' },
    ],
    resources: {
      gather: 'Aloe, Azure Russula, Bell Pepper, Calla Luna, Rooibos',
      mine: 'Copper Ore, Tin Ore, Limestone, Stone, Fossilized Bone',
    },
    census: [
      ['Settlements', 13], ['Flame Shrines', 13], ['Shroud Roots', 6], ['Night Sanctums', 5],
      ['Elixir Wells', 3], ['Farms', 3], ['Gem Forges', 3], ['Ancient Obelisks', 2],
      ['Mines', 2], ['Shroud Lairs', 2],
    ],
    bosses: ['Fell Critter Queen', 'Fell Monstrosity', 'Fell Thunderbrute', 'Hollow Cyclops', 'Scavenger Matron', 'Vukah Brawler'],
    spires: [
      { name: 'Ancient Spire — Nomad Highlands', desc: 'Just north of Umber Hollow — a fantastic way to farm that high-level Shroud area. Vertical climbing challenges + Vukah-themed traps. Loot benches include Bronze Bars and Fired Brick.' },
    ],
    hollowHalls: { name: 'Nomad Highlands Hollow Halls', status: 'Implemented', key: 'Nomad Highlands Bone Key', quest: 'The Nomad Highlands Hollow Halls (Collector)' },
    collectibles: [
      { name: 'Fossils', count: 4, pieces: 'Dull Shark Tooth, Sharp Shark Tooth, Larger Sea Lily Fossil, Smaller Sea Lily Fossil' },
      { name: 'Hollow Halls artifacts', count: 3, pieces: 'Bejeweled Golden Urn, Foreboding Golden Urn, Inscribed Golden Urn' },
    ],
    armorNote: '15 armor pieces sourced here — Knight, Fowler and Mystic sets.',
    connected: [
      { id: 'biome-springlands', name: 'Springlands', level: '1 - 10' },
      { id: 'biome-revelwood', name: 'Revelwood', level: '10 - 15' },
      { id: 'biome-kindlewastes', name: 'Kindlewastes', level: '20 - 30' },
      { id: 'biome-albaneve', name: 'Albaneve Summits', level: '30 - 40' },
    ],
  },
  {
    id: 'biome-kindlewastes',
    name: 'Kindlewastes',
    band: 'Late band',
    level: '20 - 30',
    flame: '5',
    danger: 'Extreme',
    markers: 262,
    desc: 'Harsh sun-blasted desert stretching east of the Nomad Highlands, split cleanly in two by the Shroud. The highest armor density on the map — most loadouts here carry players through the Albaneve climb.',
    reach: [
      { from: 'Nomad Highlands', route: 'Head east. Raise Flame Level 5 before committing — the region splits into a gentler Northern half (Lv 20–25) and a hotter Southern half (Lv 25–30) divided by the Shroud.' },
    ],
    subRegions: [
      { name: 'Northern Kindlewastes', note: 'Lv 20–25 — the gentler entry half: Vukah camps and the first Sun Temples.' },
      { name: 'Southern Kindlewastes', note: 'Lv 25–30 — hotter, harder, and richer in lapis and sulfur.' },
    ],
    todos: [
      'Farm the Fell Sicklescythe for high-rarity sword drops',
      'Clear all 5 Sun Temples for legendary chests — the best mid-game armor',
      'Mine Iron Ore at Ternion and Ridgeback Mines',
      'Stockpile Coal + Sandstone for endgame fortification',
      'Upgrade to iron-tier gear before pushing to Albaneve',
    ],
    topThreat: 'Fell Sicklescythe — effective vs Cutting/Fire, resists Blunt. Hard-counters tank loadouts.',
    factions: [
      { name: 'Wildlife', note: 'Sun-baked predators and scavenging birds.', threats: 'Draconian Vulture, Scorpion, Dune Armadillo, Bats' },
      { name: 'Fell', note: 'Desert settlements and Fell variants.', threats: 'Fell Draconian Vulture' },
      { name: 'Scavengers', note: 'Occupy the desert villages.' },
      { name: 'Vukah', note: 'Concentrated in the Northern Kindlewastes camps.' },
      { name: 'Hollow', note: 'Guard the East Lapis tomb.' },
    ],
    resources: {
      gather: 'Aloe, Bell Pepper, Kindlewastes Flower, Palm Wood Logs, Saffron',
      mine: 'Iron Ore, Lapislazuli, Sulfur, Sand, Sandstone, Gold',
    },
    census: [
      ['Settlements', 8], ['Flame Shrines', 8], ['Shroud Roots', 6], ['Sun Temples', 5],
      ['Elixir Wells', 4], ['Ancient Obelisks', 2], ['Farms', 2], ['Mines', 2],
    ],
    bosses: ['Fell Critter Queen', 'Fell Monstrosity', 'Fell Sicklescythe', 'Fell Thunderbrute', 'Hollow Cyclops', 'Scavenger Matron', 'Vukah Brawler'],
    spires: [
      { name: 'Ancient Spire — Kindlewastes', desc: 'On the eastern edge of the map — the highest-level tower with challenging enemies. Sand-themed climbing puzzles and shifting sandstorm cover. A Sun Temple sits nearby — fantastic for acquiring gear.' },
    ],
    hollowHalls: { name: 'Kindlewastes Hollow Halls', status: 'Implemented', key: 'Kindlewastes Bone Key', quest: 'The Kindlewastes Hollow Halls (Collector)' },
    collectibles: [
      { name: 'Fossils', count: 3, pieces: 'Crab Fossil, Fish Fossil, Prawn Fossil' },
      { name: 'Hollow Halls artifacts', count: 3, pieces: 'Bound Tome, Mysterious Tome, Tome of Agony' },
    ],
    armorNote: '33 armor pieces sourced here — the densest armor biome: Elite Hollow, Gloom Monarch, Radiant Paladin, Hawk, Eagle Eye, Spellbreaker.',
    connected: [
      { id: 'biome-nomad-highlands', name: 'Nomad Highlands', level: '15 - 20' },
      { id: 'biome-albaneve', name: 'Albaneve Summits', level: '30 - 40' },
    ],
  },
  {
    id: 'biome-albaneve',
    name: 'Albaneve Summits',
    band: 'Late band',
    level: '30 - 40',
    flame: '6 - 8',
    danger: 'Endgame',
    markers: 236,
    desc: 'Frozen alpine peaks added in the Souls of the Frozen Frontier update — dragon territory and the hardest progression band. Dynamic weather: the higher you climb, the colder it gets. Home to Howling Peak, the tallest point in Embervale.',
    reach: [
      { from: 'Kindlewastes', route: 'Head north.' },
      { from: 'Nomad Highlands', route: 'Head north. Pack cold-resistant gear before the ascent; exposure damage stacks with altitude, and Flame Level 6–8 gates the higher peaks toward Howling Peak.' },
    ],
    subRegions: [],
    todos: [
      'Defeat the Cyclops and Fell Cyclops for boss-tier drops',
      'Brave the Fell Dragon Youngling — the unofficial gear-check of the endgame',
      'Harvest Eternal Frost + Coldsteel for top-tier weapons',
      'Build a warm shelter — exposure damage stacks fast at altitude',
      'Tame goats for animal husbandry',
    ],
    topThreat: 'Cyclops + Fell Dragon Youngling — fire damage carries; pack ice resistance gear.',
    factions: [
      { name: 'Fell', note: 'Enhanced Fell variants stalk the peaks — the endgame gear-check.', threats: 'Fell Cyclops, Fell Dragon Youngling' },
      { name: 'Wildlife', note: 'Hardy mountain fauna (goats can be tamed for husbandry).', threats: 'Goats' },
    ],
    resources: {
      gather: 'Archaic Essence, Conifer Logs, Enshrouded Ice, Gentian',
      mine: 'Silver Ore, Obsidian, Amethyst, Coal, Marble',
    },
    census: [
      ['Farms', 8], ['Flame Shrines', 8], ['Shroud Roots', 7], ['Night Sanctums', 5],
      ['Settlements', 4], ['Mines', 4], ['Elixir Wells', 3], ['Gem Forges', 3],
      ['Ancient Obelisks', 2], ['Shroud Lairs', 2],
    ],
    bosses: ['Cyclops', 'Fell Cyclops', 'Fell Dragon Youngling'],
    spires: [
      { name: 'Ancient Spire — Albaneve Summits', desc: 'Alpine spire with ice-themed climbing puzzles — slippery surfaces plus exposure damage. Bring warm gear. Reveals the summit Obelisk network gating Cyclops territory.' },
    ],
    hollowHalls: { name: 'Albaneve Summits Hollow Halls', status: 'Accessible (no teleporter or quest hook yet — expect full support in a future patch)' },
    collectibles: [
      { name: 'Cyclops Skeleton', count: 7, pieces: 'Skull, Torso, Pelvis, Left Arm, Right Arm, Left Leg, Right Leg — assemble the full giant' },
      { name: 'Flame Mosaic', count: 8, pieces: 'Piece I – Piece VIII — ancient Flame artworks in frozen ruins' },
    ],
    armorNote: 'Radiant Paladin Boots & Helmet — plus Lv 43-50 weapon drops (Aurora Sword, Battering Ram Hammer).',
    connected: [
      { id: 'biome-nomad-highlands', name: 'Nomad Highlands', level: '15 - 20' },
      { id: 'biome-kindlewastes', name: 'Kindlewastes', level: '20 - 30' },
      { id: 'biome-veilwater', name: 'Veilwater Basin', level: '35 - 45' },
    ],
  },
  {
    id: 'biome-veilwater',
    name: 'Veilwater Basin',
    band: 'Endgame band',
    level: '35 - 45',
    flame: '8 - 9',
    danger: 'Endgame',
    markers: 267,
    desc: 'Tropical lakes and sandy beaches added in the Wake of the Water update — the true endgame biome with dynamically simulated water, swimming/diving, and fishing. Humid jungle hiding the Fell Critter Queen and the most exotic crafting reagents in Embervale.',
    reach: [
      { from: 'Albaneve Summits', route: 'Descend west out of the Summits.' },
      { from: 'Revelwood', route: 'Push north. The basin fills the north-central lowlands, fed by meltwater from the Summits — it holds Embervale\'s largest clean surface water. Flame Level 8–9 required.' },
    ],
    subRegions: [],
    todos: [
      'Hunt the Fell Critter Queen for legendary mage gear',
      'Catalog rare fauna and harvest exotic alchemy reagents',
      'Reach Flame Level 8-9 to unlock the top crafting workbenches',
      'Craft Swimfins + Diving Helmet before exploring underwater ruins',
      'Close the final Shroud rifts to finish the world map',
    ],
    topThreat: "Two apex threats: the Fell Critter Queen (open world — magic-heavy rotation, spirit resistance mandatory) and Hydrak'Dal, the Vengeance questline boss in a Drak'Dal temple — its head upgrades your Flame to Level 9.",
    factions: [
      { name: 'Draks', note: 'Reptilian temple guardians — hunted for Drak Blood, Claws, Scales, and Teeth.' },
      { name: 'Wildlife', note: 'Coastal fauna, both hostile and peaceful.', threats: 'Crabs, Capybara (peaceful)' },
    ],
    resources: {
      gather: 'Algae, Bamboo Logs, Banana, Coconut, Rice, Passionflower (night only)',
      mine: 'Aquamarine, Gold Ore, Mother-of-Pearl, Tropical Wood',
    },
    census: [
      ["Drak'Dal Temples & Tombs", 7], ['Flame Shrines', 8], ['Shroud Roots', 6], ['Farms', 5],
      ['Night Sanctums', 5], ['Elixir Wells', 3], ['Gem Forges', 3], ['Ancient Obelisks', 2],
      ['Mines', 2], ['Shroud Lairs', 2],
    ],
    bosses: ['Fell Critter Queen', "Hydrak'Dal (Vengeance quest)"],
    spires: [
      { name: 'Ancient Spire — Veilwater Basin', desc: 'The newest spire. Jungle-themed climbing puzzles and dense canopy traversal. Reveals the basin Obelisk network — required for full endgame map coverage. Grants 5 Skill Points, the most of any spire.' },
    ],
    hollowHalls: { name: 'Veilwater Basin Hollow Halls', status: 'Accessible (no teleporter or quest hook yet — expect full support in a future patch)' },
    collectibles: [
      { name: 'Drak Relief', count: 7, pieces: 'Relief I – Relief VII — carved tablets telling the Drak\'s history; some are underwater (Diving Helmet required)' },
    ],
    armorNote: '10 armor pieces sourced here — Bloodfeather set, Diving Helmet, Swimfins, Drakian Boots, Flaming/Frozen Gauntlets.',
    connected: [
      { id: 'biome-revelwood', name: 'Revelwood', level: '10 - 15' },
      { id: 'biome-albaneve', name: 'Albaneve Summits', level: '30 - 40' },
    ],
  },
];

// ---------- Unified location database (drives the MapHomePage browser) ----------

export type LocationCategory =
  | 'biome' | 'spire' | 'hollow' | 'vault' | 'temple'
  | 'settlement' | 'mine' | 'landmark' | 'system';

export interface LocationEntry {
  name: string;
  category: LocationCategory;
  typeLabel: string;    // badge label, e.g. "Ancient Spire"
  biome: string;        // owning biome, or "All Biomes"
  level: string;        // recommended level
  reward: string;       // star line (key reward)
  desc: string;         // short description
  source: string;       // MapPin line — where / how to reach
  linkSub: string;      // mapSubSections id to open on click
}

export const locationCategories: { id: LocationCategory | 'All'; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'biome', label: 'Biomes' },
  { id: 'spire', label: 'Ancient Spires' },
  { id: 'hollow', label: 'Hollow Halls' },
  { id: 'vault', label: 'Ancient Vaults' },
  { id: 'temple', label: 'Sun Temples' },
  { id: 'settlement', label: 'Settlements' },
  { id: 'mine', label: 'Mines' },
  { id: 'landmark', label: 'Landmarks' },
  { id: 'system', label: 'POI Systems' },
];

export const locationEntries: LocationEntry[] = [
  // ---- Biomes (6) ----
  { name: 'Springlands', category: 'biome', typeLabel: 'Biome · Starter', biome: 'South-West Embervale', level: 'Lv 1-10 · Flame 1-2', reward: '139 markers · 2 bosses · 5 Ancient Vaults', desc: 'Verdant lowlands of peaceful woods and meadows — the starting region containing the Cinder Vault and your first Flame Altar.', source: 'You spawn here after the intro; no Flame gate', linkSub: 'biome-springlands' },
  { name: 'Revelwood', category: 'biome', typeLabel: 'Biome · Mid', biome: 'North-West Embervale', level: 'Lv 10-15 · Flame 3', reward: '486 markers · 5 bosses · capital Pikemead\'s Reach', desc: 'Dense forest belt where the world opens up — bigger arenas, branching quests, first real Shroud incursions. Blackmire swamp sub-biome in the north-west.', source: 'North from Springlands across the Shroud band, or via Mistbury Catacombs', linkSub: 'biome-revelwood' },
  { name: 'Nomad Highlands', category: 'biome', typeLabel: 'Biome · Mid-Late', biome: 'Central Embervale', level: 'Lv 15-20 · Flame 4', reward: '324 markers · 6 bosses · Vukah Arena', desc: 'Sun-bleached limestone bluffs high above the Shroud. The mid-late grind region where you finalize your build identity.', source: 'Southeast from Revelwood, or northeast from Low Meadows (deep Shroud)', linkSub: 'biome-nomad-highlands' },
  { name: 'Kindlewastes', category: 'biome', typeLabel: 'Biome · Late', biome: 'Eastern Embervale', level: 'Lv 20-30 · Flame 5', reward: '262 markers · 7 bosses · all 5 Sun Temples', desc: 'Harsh desert split in two by the Shroud — Northern (Lv 20-25) and Southern (Lv 25-30). Highest armor density on the map.', source: 'East from Nomad Highlands; Flame Level 5 required', linkSub: 'biome-kindlewastes' },
  { name: 'Albaneve Summits', category: 'biome', typeLabel: 'Biome · Late', biome: 'Northern Embervale', level: 'Lv 30-40 · Flame 6-8', reward: '236 markers · 3 bosses · Cyclops territory', desc: 'Frozen alpine peaks with dynamic cold weather — the hardest progression band. Home to Howling Peak, the tallest point in Embervale.', source: 'North from Kindlewastes or Nomad Highlands; pack cold resistance', linkSub: 'biome-albaneve' },
  { name: 'Veilwater Basin', category: 'biome', typeLabel: 'Biome · Endgame', biome: 'North-Central Embervale', level: 'Lv 35-45 · Flame 8-9', reward: '267 markers · Fell Critter Queen · Drak materials', desc: 'Tropical lakes and beaches with dynamically simulated water, swimming, diving and fishing. The true endgame biome.', source: 'West from Albaneve Summits, or north from Revelwood', linkSub: 'biome-veilwater' },

  // ---- Ancient Spires (8) ----
  { name: 'Ancient Spire — Springlands', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Springlands', level: 'Lv 1-5', reward: 'Fast Travel + full map reveal', desc: 'Just north of the starting area — visible from the first Ancient Vault. Easy climb that teaches grapple mechanics.', source: 'Central Springlands; first priority after the tutorial', linkSub: 'biome-springlands' },
  { name: 'Ancient Spire — Low Meadows', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Springlands (Low Meadows)', level: 'Lv 5-10', reward: 'Fast Travel + 3 Skill Points', desc: 'Second spire in the southeastern valley; you may cross a Shrouded area to reach it.', source: 'Southern map edge, east of the Springlands', linkSub: 'biome-springlands' },
  { name: 'Ancient Spire — Revelwood', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Revelwood', level: 'Lv 10-15', reward: 'Fast Travel + 3 Skill Points', desc: 'Western edge spire overlooking a Shrouded area. Locked doors, platforming, and a top-floor Vicious Vine ambush. Bring a ranged weapon for puzzles.', source: 'Western Revelwood; farm the nearby Scavenger Encampment', linkSub: 'biome-revelwood' },
  { name: 'Ancient Spire — Blackmire', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Revelwood (Blackmire)', level: 'Lv 13-15', reward: 'Fast Travel + swamp map reveal', desc: 'Sub-biome spire themed around poison hazards — bring antidotes or stamina-regen food.', source: 'North-west passage into the Blackmire swamp', linkSub: 'biome-revelwood' },
  { name: 'Ancient Spire — Nomad Highlands', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Fast Travel + 3 Skill Points', desc: 'Vertical climbing challenges with Vukah-themed traps. Loot benches include Bronze Bars and Fired Brick — worth a sweep each visit.', source: 'Just north of Umber Hollow; ideal Umber Hollow farm base', linkSub: 'biome-nomad-highlands' },
  { name: 'Ancient Spire — Kindlewastes', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Kindlewastes', level: 'Lv 20-30', reward: 'Fast Travel + desert map reveal', desc: 'The highest-level spire, with sand-themed climbing puzzles and shifting sandstorm cover. A Sun Temple sits nearby.', source: 'Eastern edge of the map', linkSub: 'biome-kindlewastes' },
  { name: 'Ancient Spire — Albaneve Summits', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Albaneve Summits', level: 'Lv 30-40', reward: 'Fast Travel + summit map reveal', desc: 'Ice-themed climbing puzzles — slippery surfaces plus exposure damage. Warm gear mandatory.', source: 'Northern peaks; gates the Cyclops territory Obelisk network', linkSub: 'biome-albaneve' },
  { name: 'Ancient Spire — Veilwater Basin', category: 'spire', typeLabel: 'Ancient Spire', biome: 'Veilwater Basin', level: 'Lv 35-45', reward: 'Fast Travel + 5 Skill Points (most of any spire)', desc: 'The newest spire — jungle climbing puzzles and dense canopy traversal. Required for full endgame map coverage.', source: 'Central Veilwater Basin', linkSub: 'biome-veilwater' },

  // ---- Hollow Halls (6) ----
  { name: 'Springlands Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Springlands', level: 'Lv 5-10', reward: 'Ectoplasm, Toxic Slime, Giant Bones', desc: 'Entry-level dungeon instance in the Necropolis. Teaches Hollow Halls mechanics; designed for groups, soloable when well-geared.', source: 'Springlands Bone Key required · Necropolis, eastern Springlands', linkSub: 'biome-springlands' },
  { name: 'Revelwood Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Revelwood', level: 'Lv 10-15', reward: 'Mid-tier legendaries + Collector materials', desc: 'Moderate difficulty with poison traps and Fell enemies. Drops the Dark Crystal artifact set.', source: 'Revelwood Bone Key required · starts the "Ectoplasm Press For The Collector" quest', linkSub: 'biome-revelwood' },
  { name: 'Nomad Highlands Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'High-tier legendaries + Golden Urn artifacts', desc: 'Highland dungeon dropping the Golden Urn artifact set for the Collector.', source: 'Nomad Highlands Bone Key required · Collector quest hook', linkSub: 'biome-nomad-highlands' },
  { name: 'Kindlewastes Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Kindlewastes', level: 'Lv 20-30', reward: 'High-tier legendaries + Tome artifacts', desc: 'Hard desert dungeon dropping the Tome artifact set (Bound, Mysterious, Agony).', source: 'Kindlewastes Bone Key required · Collector quest hook', linkSub: 'biome-kindlewastes' },
  { name: 'Albaneve Summits Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Albaneve Summits', level: 'Lv 30-40', reward: 'Endgame legendaries', desc: 'Frozen dungeon, extreme difficulty. Currently enterable but the teleporter and quest hook are not live yet.', source: 'Northern Albaneve · full support expected in a future patch', linkSub: 'biome-albaneve' },
  { name: 'Veilwater Basin Hollow Halls', category: 'hollow', typeLabel: 'Hollow Halls', biome: 'Veilwater Basin', level: 'Lv 35-45', reward: 'Endgame legendaries + Drak materials', desc: 'The hardest Halls with underwater sections. Currently enterable but the teleporter and quest hook are not live yet.', source: 'Central Veilwater · full support expected in a future patch', linkSub: 'biome-veilwater' },

  // ---- Ancient Vaults (named) ----
  { name: 'Blacksmith Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Springlands', level: 'Lv 2-5', reward: 'Blacksmith NPC → Forge, metal crafting, Glider', desc: 'Rescue Oswald Anders — the single most important rescue in the game. Unlocks the Glider and Grappling Hook line.', source: 'Northeast Springlands; second main quest', linkSub: 'biome-springlands' },
  { name: 'Alchemist Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Springlands', level: 'Lv 3-6', reward: 'Alchemist NPC → potions & magic crafting', desc: 'Unlocks potion brewing, alchemy stations, and magic crafting.', source: 'Southeast Springlands', linkSub: 'biome-springlands' },
  { name: 'Hunter Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Springlands (Low Meadows)', level: 'Lv 5-8', reward: 'Hunter NPC → bows, leatherworking, tanning', desc: 'Unlocks bow crafting and the leather/tanning production line.', source: 'Low Meadows valley', linkSub: 'biome-springlands' },
  { name: 'Carpenter Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Springlands (Low Meadows)', level: 'Lv 5-8', reward: 'Carpenter NPC → advanced woodworking & furniture', desc: 'Unlocks advanced base furniture and woodworking recipes.', source: 'Low Meadows valley', linkSub: 'biome-springlands' },
  { name: 'Farmer Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Springlands', level: 'Lv 4-8', reward: 'Farmer NPC → farming, cooking, seedbeds', desc: 'Unlocks crop farming, seed cultivation, and the cooking line.', source: 'Central Springlands', linkSub: 'biome-springlands' },
  { name: 'Bard Vault', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Revelwood (Blackmire)', level: 'Lv 13-15', reward: 'Bard NPC → music & party buffs', desc: 'Deep within a Blackmire dungeon. Rescue the Bard to unlock music sheets and buffs.', source: 'Blackmire swamp, north-west Revelwood', linkSub: 'biome-revelwood' },
  { name: 'Forgotten Tomb', category: 'vault', typeLabel: 'Ancient Vault', biome: 'Kindlewastes', level: 'Lv 20-30', reward: 'Sandstorm-locked vault loot', desc: 'Sandstorm-locked desert vault — clear it for the Kindlewastes armor set pieces.', source: 'Kindlewastes desert; watch for sandstorm windows', linkSub: 'biome-kindlewastes' },

  // ---- Sun Temples (all 5 in Kindlewastes) ----
  { name: 'Haunted Sun Temple', category: 'temple', typeLabel: 'Sun Temple', biome: 'Kindlewastes', level: 'Lv 20-25', reward: 'Legendary chests · Fell Sicklescythe arena', desc: 'The first Sun Temple most players encounter — the Fell Sicklescythe guards the entrance. Sun Temple Stories quest location.', source: 'Kindlewastes; puzzle lock to enter', linkSub: 'biome-kindlewastes' },
  { name: 'Sun Temples (all 5)', category: 'temple', typeLabel: 'Sun Temple', biome: 'Kindlewastes', level: 'Lv 20-30', reward: '5 legendary chests — best mid-game armor', desc: 'All five Sun Temples sit in the Kindlewastes. Each hides a legendary chest behind puzzle locks — together they carry most players to the Albaneve climb.', source: 'Scattered across Northern & Southern Kindlewastes', linkSub: 'biome-kindlewastes' },

  // ---- Settlements ----
  { name: "Pikemead's Reach", category: 'settlement', typeLabel: 'Settlement · Capital', biome: 'Revelwood', level: 'Lv 10-15', reward: 'Capital city — merchants, quest hub, services', desc: 'The capital of Embervale. Main quest hub with multiple NPCs, shops, and services beneath The Pike.', source: 'Central Revelwood', linkSub: 'biome-revelwood' },
  { name: 'Longkeep', category: 'settlement', typeLabel: 'Settlement', biome: 'Springlands', level: 'Lv 1-5', reward: 'Tutorial quests, lore pages, starting gear', desc: 'The ruined castle where the tutorial takes place — multiple lore pages, quests, and early loot.', source: 'Central Springlands', linkSub: 'biome-springlands' },
  { name: 'Rattlebleak', category: 'settlement', typeLabel: 'Settlement', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Quests, NPCs, merchants', desc: 'Survivor settlement with quest givers and traders.', source: 'Western Nomad Highlands', linkSub: 'biome-nomad-highlands' },
  { name: 'Jasper Isles', category: 'settlement', typeLabel: 'Settlement', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Quests + unique fishing spots', desc: 'Island settlement with unique fishing opportunities.', source: 'Northern Nomad Highlands', linkSub: 'biome-nomad-highlands' },
  { name: 'Brightwich', category: 'settlement', typeLabel: 'Settlement', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Quests, merchants', desc: 'Trading post with connections back to the Springlands.', source: 'Southern Nomad Highlands', linkSub: 'biome-nomad-highlands' },
  { name: 'Polaris Falls', category: 'settlement', typeLabel: 'Settlement', biome: 'Albaneve Summits', level: 'Lv 30-40', reward: 'Quests, NPCs, unique gear', desc: 'Town on the edge of an ice waterfall, filled with Scavengers and unique quest givers.', source: 'Northern Albaneve', linkSub: 'biome-albaneve' },
  { name: 'Everfrore Keep', category: 'settlement', typeLabel: 'Settlement · Fortress', biome: 'Albaneve Summits', level: 'Lv 32-40', reward: 'Endgame quests + dungeon access', desc: 'Frozen fortress settlement — gateway to elite enemies, legendary loot, and a Wall Tapestry collectible.', source: 'Northern Albaneve', linkSub: 'biome-albaneve' },
  { name: 'Wickmouth', category: 'settlement', typeLabel: 'Settlement', biome: 'Albaneve Summits', level: 'Lv 30-38', reward: 'Quests, lore pages, silver chest', desc: 'Small settlement guarded by a Scythesickle Wraith. Silver chest loot.', source: 'Eastern Albaneve', linkSub: 'biome-albaneve' },
  { name: 'Midhollow', category: 'settlement', typeLabel: 'Settlement', biome: 'Albaneve Summits', level: 'Lv 30-36', reward: 'Lore pages, loot', desc: 'Settlement torn apart by Fell and Critters — contains the "Midhollow Is Ripped Apart" lore page.', source: 'Southern Albaneve', linkSub: 'biome-albaneve' },
  { name: 'Fishing Villages', category: 'settlement', typeLabel: 'Settlement', biome: 'Veilwater Basin', level: 'Lv 35-45', reward: 'Fishing quests · Angler NPC', desc: 'Tropical coastal settlements where you meet the Angler and unlock the fishing system.', source: 'Veilwater coastline', linkSub: 'biome-veilwater' },

  // ---- Mines ----
  { name: 'Ternion Mine', category: 'mine', typeLabel: 'Mine', biome: 'Kindlewastes', level: 'Lv 20-25', reward: 'Iron Ore + Lapis Lazuli', desc: 'Large mine with rich iron deposits — essential for mid-tier gear crafting.', source: 'Northern Kindlewastes', linkSub: 'biome-kindlewastes' },
  { name: 'Ridgeback Mine', category: 'mine', typeLabel: 'Mine', biome: 'Kindlewastes', level: 'Lv 25-30', reward: 'Iron Ore + Gold + Sulfur', desc: 'Deeper mine with harder enemies but better rewards.', source: 'Southern Kindlewastes', linkSub: 'biome-kindlewastes' },
  { name: 'Egerton Salt Mines', category: 'mine', typeLabel: 'Mine', biome: 'Springlands', level: 'Lv 3-8', reward: 'Salt + a fossil in a critter nest', desc: 'Early-game salt source; a fossil hides in a critter nest inside.', source: 'Springlands', linkSub: 'biome-springlands' },
  { name: 'Saline Quarry', category: 'mine', typeLabel: 'Mine', biome: 'Springlands (Low Meadows)', level: 'Lv 5-10', reward: 'Salt + fossil site', desc: 'Open quarry about 900m west of the Low Meadows Spire — fossil dig site.', source: 'Low Meadows', linkSub: 'biome-springlands' },

  // ---- Landmarks ----
  { name: 'Cinder Vault', category: 'landmark', typeLabel: 'Landmark · Tutorial', biome: 'Springlands', level: 'Lv 1', reward: 'Starting gear + first quest', desc: 'Where every Flameborn\'s journey begins. Teaches movement, combat, and Shroud mechanics.', source: 'Tutorial spawn area', linkSub: 'biome-springlands' },
  { name: 'The Pike', category: 'landmark', typeLabel: 'Landmark · Tower', biome: 'Revelwood', level: 'Lv 12-15', reward: 'Fell Wispwyvern arena', desc: 'Tower dungeon above Pikemead\'s Reach culminating in the Fell Wispwyvern boss fight.', source: 'Above the capital, central Revelwood', linkSub: 'biome-revelwood' },
  { name: 'Mistbury Catacombs', category: 'landmark', typeLabel: 'Landmark · Crypt', biome: 'Springlands → Revelwood', level: 'Lv 8-12', reward: 'Safe route north avoiding deep Shroud', desc: 'Underground crypt with Hollow enemies — the eastern bypass into Revelwood before Flame Level 3.', source: 'Northern Springlands / eastern rim', linkSub: 'biome-revelwood' },
  { name: 'Pillars of Creation', category: 'landmark', typeLabel: 'Landmark', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Iconic vista + nearby resources', desc: 'Two massive volcanoes that dominate the skyline — visible from across Embervale.', source: 'Central Highlands', linkSub: 'biome-nomad-highlands' },
  { name: 'Umber Hollow', category: 'landmark', typeLabel: 'Landmark · Shroud Basin', biome: 'Nomad Highlands', level: 'Lv 18-20', reward: 'High-tier loot + Shroud Cores', desc: 'Dense pocket of Shroud at the region\'s heart — the Highlands\' hardest pocket. Requires a comfortable Flame timer.', source: 'Central Nomad Highlands; farm via the nearby Spire', linkSub: 'biome-nomad-highlands' },
  { name: 'Vukah Arena', category: 'landmark', typeLabel: 'Landmark · Arena', biome: 'Nomad Highlands', level: 'Lv 15-20', reward: 'Vukah Brawler boss · tribal weapon drops', desc: 'Gladiator pit where the Vukah Brawler awaits — high stagger threshold, blunt and cutting dominate.', source: 'Vukah territory', linkSub: 'biome-nomad-highlands' },
  { name: 'Howling Peak', category: 'landmark', typeLabel: 'Landmark · Highest Point', biome: 'Albaneve Summits', level: 'Lv 38-40', reward: 'Fell Dragon Youngling arena', desc: 'The tallest spot in Embervale. The Fell Dragon Youngling — the unofficial endgame gear-check — is fought here.', source: 'Highest peak; Flame Level 8 gates the ascent', linkSub: 'biome-albaneve' },
  { name: 'Lake Luma', category: 'landmark', typeLabel: 'Landmark · Lake', biome: 'Albaneve Summits', level: 'Lv 30-40', reward: 'Fishing + resources', desc: 'Frozen lake with unique fishing spots and resource nodes.', source: 'Central Albaneve', linkSub: 'biome-albaneve' },
  { name: 'Forge of Obsidia', category: 'landmark', typeLabel: 'Landmark · Forge', biome: 'Albaneve Summits', level: 'Lv 32-40', reward: 'Bellows for the Blast Furnace', desc: 'Ancient forge complex guarding the Blast Furnace crafting station line.', source: 'Albaneve Summits', linkSub: 'biome-albaneve' },
  { name: "Drak'Dal Temples & Tombs", category: 'landmark', typeLabel: 'Landmark · Temples', biome: 'Veilwater Basin', level: 'Lv 38-45', reward: '7 temple/tombs · Drak materials + endgame loot', desc: 'The Drak\'s sacred temple network — seven temples and tombs with the hardest encounters in the game.', source: 'Across Veilwater Basin; several underwater', linkSub: 'biome-veilwater' },
  { name: 'Wildwater Basin', category: 'landmark', typeLabel: 'Landmark · Crossing', biome: 'Albaneve → Veilwater', level: 'Lv 35+', reward: 'Biome transition route', desc: 'Transition point from the frozen peaks down into the tropical basin.', source: 'Western Albaneve', linkSub: 'biome-albaneve' },

  // ---- POI Systems (world-wide overview cards) ----
  { name: 'Elixir Wells (19)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 3-45', reward: '3 Skill Points each — 57 points total', desc: 'Combat challenges built by the Ancients deep beneath the earth. Defeat the guardian to clear the well permanently.', source: 'SP 3 · RW 3 · NH 3 · KW 4 · AL 3 · VW 3', linkSub: 'key-locations' },
  { name: 'Flame Shrines (63)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'All levels', reward: 'Flame Level upgrades — core progression', desc: 'Shrines where the Flame\'s power is felt most strongly. Activating them upgrades your Flame Level and Shroud timer.', source: 'SP 13 · RW 12 · NH 13 · KW 8 · AL 8 · VW 8 (+1 Low Meadows)', linkSub: 'key-locations' },
  { name: 'Shroud Roots (39)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'All levels', reward: '+1 Skill Point each', desc: 'Corrupted growths deep in the Shroud. Destroy every one you find — each grants a skill point.', source: 'SP 6 · RW 8 · NH 6 · KW 6 · AL 7 · VW 6', linkSub: 'key-locations' },
  { name: 'Night Sanctums (30)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 5-45', reward: 'Lore + Shroud Cores + unique loot', desc: 'Lore sanctums with boss arenas — 5 in each biome. Provide lore entries and rare materials.', source: '5 per biome across all 6 biomes', linkSub: 'key-locations' },
  { name: 'Gem Forges (18)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 10-45', reward: 'Socket, upgrade & recycle weapon gems', desc: 'Ancient devices found exclusively inside Shroud Lairs, fueled by Archaic Essence. Higher-tier biomes allow higher max gem levels.', source: '3 per biome, always inside Shroud Lairs', linkSub: 'key-locations' },
  { name: 'Ancient Obelisks (13)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'All levels', reward: 'Reveals nearby Roots, Shrines & POIs', desc: 'Stone monoliths that reveal all nearby Shroud Roots, Flame Shrines, and points of interest on your map. Essential for completionists.', source: 'SP 2 · RW 3 · NH 2 · KW 2 · AL 2 · VW 2', linkSub: 'key-locations' },
  { name: 'Shroud Lairs (13)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 10-45', reward: 'Guaranteed Shroud Cores + Gem Forges', desc: 'Dense Shroud pockets with elite enemies. High risk, but essential for Flame upgrades — and the only place Gem Forges exist.', source: 'Scattered across all biomes', linkSub: 'key-locations' },
  { name: 'Balefires (8)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 5-40', reward: 'Safe rest points + temporary buffs', desc: 'Enemy-controlled structures surrounded by the Shroud. Clear the defenders to extinguish the flames and create a safe respawn zone.', source: 'SP 2 · RW 1 · NH 2 · KW 2 · AL 1', linkSub: 'key-locations' },
  { name: 'Cave Passages (42)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'All levels', reward: 'Ore veins + shortcuts + hidden loot', desc: 'Hidden cave entrances leading to underground areas with rare resources. Look for dark openings in cliff faces.', source: 'Cliff faces across all biomes', linkSub: 'exploration-tips' },
  { name: 'Hidden Tombs (4)', category: 'system', typeLabel: 'POI System', biome: 'All Biomes', level: 'Lv 15-45', reward: 'Legendary loot behind puzzles', desc: 'Secret underground burial chambers requiring puzzle-solving to enter.', source: 'One in each major region', linkSub: 'exploration-tips' },
];
