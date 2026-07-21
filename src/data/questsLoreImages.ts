// Real game images for Quests and Lore & Story sections.

import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const G = '/images/guides';
const W = '/images/weapons';

export const questsImages: Record<string, GalleryImage[]> = {
  'main-story': [
    { src: `${G}/spire-map.webp`, caption: 'The main quest spans every biome and spire in Embervale' },
    { src: `${B}/hud-building-quest.webp`, caption: 'The quest tracker keeps your objectives in sight' },
  ],
  'npc-rescue': [
    { src: `${B}/village-npcs.webp`, caption: 'Ten survivors await rescue — each unlocks crafting' },
    { src: `${G}/night-running.webp`, caption: 'Rescue missions lead into dangerous territory' },
  ],
  'survivor-tools': [
    { src: `${G}/crafting-axe.webp`, caption: 'Tool quests reward the gear that speeds up everything' },
    { src: `${G}/grappling-hook.webp`, caption: 'The grappling hook: earned, not given' },
  ],
  'side-hidden': [
    { src: `${G}/shroud-wood.webp`, caption: 'Hidden quests lurk off the beaten path' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Side content often rewards rare recipes' },
  ],
  'dungeon-quests': [
    { src: `${G}/combat-boss.webp`, caption: 'Dungeon quests end in arena showdowns' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Expect waves, elites, and no easy exits' },
  ],
  'lore-collection': [
    { src: `${G}/inventory-backpack.webp`, caption: 'Lore pages and collectibles fill your journal' },
    { src: `${B}/village-npcs.webp`, caption: 'Collectors trade rewards for your finds' },
  ],
  'item-rewards': [
    { src: `${B}/gem-insert-ui.webp`, caption: 'Quest rewards include gems for your weapons' },
    { src: `${W}/aurora-sword.webp`, caption: 'Aurora Sword — a signature quest reward', contain: true },
  ],
  'bounty-board': [
    { src: `${G}/combat-dodge.webp`, caption: 'Bounties send you hunting elites across the map' },
    { src: `${G}/combat-parry.webp`, caption: 'Bounty targets hit harder than their wild cousins' },
  ],
  'npc-quest-chains': [
    { src: `${B}/village-npcs.webp`, caption: 'Every artisan has a full quest chain to complete' },
    { src: `${B}/campfire-night.webp`, caption: 'Chains deepen your base and your bond with each NPC' },
  ],
  'building-blocks': [
    { src: `${B}/building-window-frame.webp`, caption: 'Block quests unlock entire construction sets' },
    { src: `${G}/building-house.webp`, caption: 'Finish them all for the ultimate builder’s catalog' },
  ],
};

export const loreImages: Record<string, GalleryImage[]> = {
  overview: [
    { src: `${G}/spire-map.webp`, caption: 'Embervale: a fallen kingdom waiting to be remembered' },
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Shroud — the calamity at the heart of the story' },
  ],
  'the-shroud': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Shroud consumes everything it touches' },
    { src: `${G}/shroud-wood.webp`, caption: 'Life inside the grey mutates into something else' },
  ],
  'the-flameborn': [
    { src: `${B}/campfire-night.webp`, caption: 'The Flameborn are reborn through fire' },
    { src: `${B}/village-npcs.webp`, caption: 'Your kind are Embervale’s last hope' },
  ],
  'the-ancients': [
    { src: `${G}/spire-map.webp`, caption: 'The Ancients left spires and ruins across the land' },
    { src: `${B}/building-window-frame.webp`, caption: 'Their architecture outlasted their empire' },
  ],
  'the-elixir': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Elixir: power that birthed the Shroud' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Its remnants still pulse with magic' },
  ],
  'the-flame': [
    { src: `${B}/campfire-night.webp`, caption: 'The Flame is humanity’s answer to the grey' },
    { src: `${G}/building-house.webp`, caption: 'Where the Flame burns, civilization follows' },
  ],
  'ancient-spires': [
    { src: `${G}/spire-map.webp`, caption: 'Eight Ancient Spires pierce the skyline' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Each spire watches over its biome' },
  ],
  'cinder-vault': [
    { src: `${B}/campfire-night.webp`, caption: 'The Cinder Vault — where every Flameborn awakens' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Your story begins in its cold halls' },
  ],
  timeline: [
    { src: `${G}/spire-map.webp`, caption: 'Centuries of ruin, charted across the land' },
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: the frozen chapters of history' },
  ],
  regions: [
    { src: `${B}/glider-mountains-snow.webp`, caption: 'From green valleys to frozen summits' },
    { src: `${B}/underwater-swim.webp`, caption: 'Even the seas hold their own regions' },
  ],
  factions: [
    { src: `${G}/combat-parry.webp`, caption: 'Scavengers, the Fell, and stranger powers vie for Embervale' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Some factions answer to the Shroud itself' },
  ],
  characters: [
    { src: `${B}/village-npcs.webp`, caption: 'Ten survivors carry the story of the fallen kingdom' },
    { src: `${G}/multiplayer-menu.webp`, caption: 'Each has a past worth uncovering' },
  ],
  'the-drak': [
    { src: `${B}/underwater-swim.webp`, caption: 'The Drak haunt the waters of Embervale' },
    { src: `${G}/shroud-wood.webp`, caption: 'Ancient reptiles older than the kingdom itself' },
  ],
  'frozen-frontier': [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: the frozen frontier of Albaneve' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'The coldest chapter of Embervale’s saga' },
  ],
  'lore-library': [
    { src: `${G}/inventory-backpack.webp`, caption: 'Every book and note feeds the library' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Collect them all to piece the story together' },
  ],
};
