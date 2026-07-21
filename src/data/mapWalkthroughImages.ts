// Real game images for Map & Locations and Walkthrough sections.
// Biome-accurate where possible: snow for Albaneve, water for Veilwater,
// shroud for Blackmire. Sources: official Steam screenshots + local captures.

import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const G = '/images/guides';

export const mapImages: Record<string, GalleryImage[]> = {
  'map-overview': [
    { src: `${G}/spire-map.webp`, caption: 'The world map: 1,017 markers across 6 handcrafted biomes' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'From green valleys to frozen peaks — one seamless world' },
  ],
  'biome-springlands': [
    { src: `${B}/village-npcs.webp`, caption: 'The Springlands: gentle meadows and your first settlements' },
    { src: `${B}/campfire-night.webp`, caption: 'Starter country — campfires mark safe ground' },
  ],
  'biome-revelwood': [
    { src: `${G}/shroud-wood.webp`, caption: 'Revelwood’s ancient forests hide shrouded hollows' },
    { src: `${G}/night-running.webp`, caption: 'The woods turn dangerous after sundown' },
  ],
  'biome-nomad-highlands': [
    { src: `${G}/glider-flying.webp`, caption: 'Limestone bluffs made for glider travel' },
    { src: `${B}/farm-animals.webp`, caption: 'Highland pastures support farming and livestock' },
  ],
  'biome-kindlewastes': [
    { src: `${G}/volcano-combat.webp`, caption: 'The Kindlewastes: scorched desert and volcanic fury' },
    { src: `${G}/combat-boss.webp`, caption: 'Desert arenas host some of the toughest mid-game fights' },
  ],
  'biome-albaneve': [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: the frozen Albaneve Summits' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Cold mechanics rule these peaks — bring warmth' },
  ],
  'biome-veilwater': [
    { src: `${B}/underwater-swim.webp`, caption: 'Veilwater Basin: the swimmable endgame frontier' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Tropical skies over the water biome' },
  ],
  'key-locations': [
    { src: `${B}/hud-building-quest.webp`, caption: 'Points of interest light up your compass as you explore' },
    { src: `${G}/building-house.webp`, caption: 'Settlements and ruins reward the thorough explorer' },
  ],
  'fast-travel': [
    { src: `${G}/spire-map.webp`, caption: 'Ancient Spires anchor the fast-travel network' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Glide from a spire to cover ground for free' },
  ],
  collectibles: [
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Track your haul — collections live in your inventory tabs' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Weapon gems are among the most prized finds' },
  ],
  'exploration-tips': [
    { src: `${G}/grappling-hook.webp`, caption: 'The grappling hook opens routes legs never could' },
    { src: `${G}/glider-flying.webp`, caption: 'Altitude is currency — climb first, glide everywhere' },
  ],
};

export const walkthroughImages: Record<string, GalleryImage[]> = {
  'starting-out': [
    { src: `${B}/campfire-night.webp`, caption: 'Night one: fire, shelter, and the Rested buff' },
    { src: `${B}/village-npcs.webp`, caption: 'Rescued NPCs turn a camp into a home' },
  ],
  springlands: [
    { src: `${B}/village-npcs.webp`, caption: 'The Springlands chapter — learn the ropes safely' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Quest tracker guides your first objectives' },
  ],
  revelwood: [
    { src: `${G}/shroud-wood.webp`, caption: 'Revelwood raises the stakes under ancient trees' },
    { src: `${G}/night-running.webp`, caption: 'Move carefully through the deep forest' },
  ],
  blackmire: [
    { src: `${G}/shroud-gameplay.webp`, caption: 'Blackmire’s bogs are thick with the Shroud' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'Fell horrors prowl the swamp' },
  ],
  'nomad-highlands': [
    { src: `${G}/glider-flying.webp`, caption: 'The Highlands reward vertical thinking' },
    { src: `${B}/farm-animals.webp`, caption: 'Ranching unlocks here — tame what you find' },
  ],
  kindlewastes: [
    { src: `${G}/volcano-combat.webp`, caption: 'Desert heat and volcanic foes' },
    { src: `${G}/combat-boss.webp`, caption: 'The wastes guard the game’s richest mines' },
  ],
  albaneve: [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: surviving the frozen frontier' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Thin air, deep snow, deadly cold' },
  ],
  veilwater: [
    { src: `${B}/underwater-swim.webp`, caption: 'The final frontier — dive into Veilwater' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Endgame vistas over the basin' },
  ],
  endgame: [
    { src: `${B}/fell-shroud-storm.webp`, caption: 'Endgame: the deepest corruption pushes back hardest' },
    { src: `${G}/volcano-combat.webp`, caption: 'Bring your best — everything here is lethal' },
  ],
  'side-quests': [
    { src: `${B}/village-npcs.webp`, caption: 'NPC questlines fill the space between main quests' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Side content feeds your crafting pipeline' },
  ],
  'tips-tricks': [
    { src: `${G}/combat-dodge.webp`, caption: 'Dodge first, ask questions later' },
    { src: `${G}/glider-flying.webp`, caption: 'The glider is the best escape tool in the game' },
  ],
  'builds-guide': [
    { src: `${G}/skill-tree-full.webp`, caption: 'Plan your constellation before spending points' },
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Every build plays differently — experiment freely' },
  ],
  'flame-altar-guide': [
    { src: `${B}/campfire-night.webp`, caption: 'The Flame Altar is the heart of every base' },
    { src: `${G}/building-house.webp`, caption: 'Upgrade the Flame to expand your build radius' },
  ],
  'hollow-halls-guide': [
    { src: `${G}/combat-boss.webp`, caption: 'The Hollow Halls: six gauntlets of escalating dread' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Bone totems spawn endless waves — destroy them first' },
  ],
};
