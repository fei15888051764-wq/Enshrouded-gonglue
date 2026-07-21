// Real game images for Base Building, Crafting, and Items sections.

import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const G = '/images/guides';
const W = '/images/weapons';

export const baseImages: Record<string, GalleryImage[]> = {
  'base-overview': [
    { src: `${G}/building-house.webp`, caption: 'Every great base starts inside the Flame Altar radius' },
    { src: `${B}/village-npcs.webp`, caption: 'A living base: walls, workstations, and rescued folk' },
  ],
  'building-blocks': [
    { src: `${B}/building-window-frame.webp`, caption: 'Hundreds of block shapes — detail pieces sell the fantasy' },
    { src: `${B}/hud-building-quest.webp`, caption: 'The construction hammer catalog at work' },
  ],
  'crafting-stations': [
    { src: `${G}/crafting-axe.webp`, caption: 'Stations anchor every production chain' },
    { src: `${G}/crafting-loom.webp`, caption: 'Advanced stations come from rescued craftspeople' },
  ],
  craftspeople: [
    { src: `${B}/village-npcs.webp`, caption: 'Ten rescuable artisans, each unlocking new recipes' },
    { src: `${B}/campfire-night.webp`, caption: 'Sheltered NPCs work faster and offer more' },
  ],
  'comfort-system': [
    { src: `${B}/campfire-night.webp`, caption: 'Comfort starts with fire and a roof' },
    { src: `${G}/building-house.webp`, caption: 'Better furnishings literally make you stronger' },
  ],
  'base-design': [
    { src: `${G}/building-house.webp`, caption: 'No structural physics — design freely, float if you like' },
    { src: `${B}/building-window-frame.webp`, caption: 'Detail work turns a box into a home' },
  ],
  farming: [
    { src: `${G}/farming-seedbed.webp`, caption: 'Seedbeds convert wild plants into farmable crops' },
    { src: `${B}/farm-animals.webp`, caption: 'Sprinklers keep fields watered — watch for floods post-Update 8' },
  ],
  'animal-taming': [
    { src: `${B}/farm-animals.webp`, caption: 'Tamed animals produce resources passively' },
    { src: `${B}/village-npcs.webp`, caption: 'A thriving homestead hums with life' },
  ],
  storage: [
    { src: `${G}/inventory-backpack.webp`, caption: 'Magic Chests are the #1 quality-of-life upgrade' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Stations pull straight from chests — never haul materials' },
  ],
  'altar-mechanics': [
    { src: `${B}/campfire-night.webp`, caption: 'The Flame Altar: builder, respawn point, and respec station' },
    { src: `${G}/spire-map.webp`, caption: 'Budget your 10 altars — they are also fast-travel anchors' },
  ],
  'production-chains': [
    { src: `${G}/crafting-loom.webp`, caption: 'Water wheels and windmills power the late-game Mill' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Plan power before Iron Dust demand spikes' },
  ],
};

export const craftingImages: Record<string, GalleryImage[]> = {
  'npc-artisans': [
    { src: `${B}/village-npcs.webp`, caption: 'Each rescued artisan unlocks a crafting discipline' },
    { src: `${B}/campfire-night.webp`, caption: 'Keep them sheltered — happy artisans craft better' },
  ],
  'crafting-stations': [
    { src: `${G}/crafting-axe.webp`, caption: 'From workbench to forge — the station ladder' },
    { src: `${G}/crafting-loom.webp`, caption: 'The Loom handles fabrics and advanced textiles' },
  ],
  'weapon-recipes': [
    { src: `${W}/barbarian-greatsword.webp`, caption: 'Barbarian Greatsword — crafted two-handed power', contain: true },
    { src: `${W}/draconian-bow.webp`, caption: 'Draconian Bow — top-tier crafted archery', contain: true },
  ],
  'armor-recipes': [
    { src: `${B}/character-customize.webp`, caption: 'Crafted armor sets define your build’s look and stats' },
    { src: `${G}/inventory-backpack.webp`, caption: 'Upgrade in Update 8: armor now levels up with Runes' },
  ],
  'potion-recipes': [
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'The Alchemist’s station brews consumables and elixirs' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Alchemy extends to gems and magical components' },
  ],
  'food-recipes': [
    { src: `${B}/campfire-night.webp`, caption: 'Campfire cooking — your first food buffs' },
    { src: `${B}/farm-animals.webp`, caption: 'Farm ingredients unlock the best recipes' },
  ],
  'material-processing': [
    { src: `${G}/crafting-loom.webp`, caption: 'Raw materials become bars, cloth, and components' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Processing chains feed every recipe in the game' },
  ],
};

export const itemsImages: Record<string, GalleryImage[]> = {
  'materials-overview': [
    { src: `${G}/inventory-backpack.webp`, caption: 'Hundreds of materials — one organized inventory' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Every material has a source and a purpose' },
  ],
  'ores-metals': [
    { src: `${G}/volcano-combat.webp`, caption: 'The richest ore veins hide in the deadliest regions' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Smelt ore into bars at the forge' },
  ],
  'wood-fibers': [
    { src: `${G}/shroud-wood.webp`, caption: 'Shroud Wood: dangerous to reach, essential to craft' },
    { src: `${G}/crafting-axe.webp`, caption: 'Better axes fell better trees' },
  ],
  'fabrics-leather': [
    { src: `${G}/crafting-loom.webp`, caption: 'Linen, leather, and padding for every armor tier' },
    { src: `${B}/character-customize.webp`, caption: 'Fabric quality decides armor quality' },
  ],
  'shroud-alchemy': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'Shroud flora only grows in the grey — bring a timer plan' },
    { src: `${G}/shroud-wood.webp`, caption: 'Alchemy ingredients hide deep in the Shroud' },
  ],
  'food-ingredients': [
    { src: `${B}/farm-animals.webp`, caption: 'Milk, eggs, and honey from your own ranch' },
    { src: `${G}/farming-seedbed.webp`, caption: 'Grow what you cannot gather' },
  ],
  'boss-legendary': [
    { src: `${G}/combat-boss.webp`, caption: 'Boss drops include heads used to strengthen the Flame' },
    { src: `${W}/fell-thunderbrute-greatsword.webp`, caption: 'Fell Thunderbrute Greatsword — legendary boss loot', contain: true },
  ],
  'building-crafting': [
    { src: `${B}/building-window-frame.webp`, caption: 'Building materials: stone, wood, and decorative blocks' },
    { src: `${G}/building-house.webp`, caption: 'Block quests unlock new construction sets' },
  ],
};
