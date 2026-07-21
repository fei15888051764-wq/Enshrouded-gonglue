// Real game images for Game Mechanics and Fishing sections.

import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const G = '/images/guides';

export const mechanicsImages: Record<string, GalleryImage[]> = {
  'shroud-system': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Shroud timer never stops — plan every dive' },
    { src: `${G}/shroud-wood.webp`, caption: 'Deeper grey means deadlier air' },
  ],
  'combat-system': [
    { src: `${G}/combat-dodge.webp`, caption: 'Dodge i-frames since Update 8 reward reactive play' },
    { src: `${G}/combat-parry.webp`, caption: 'Parry windows punish the greedy and reward the patient' },
    { src: `${B}/combat-mage-lightning.webp`, caption: 'The Focus bar fuels weapon ultimates' },
  ],
  'food-buffs': [
    { src: `${B}/campfire-night.webp`, caption: 'Cooked food grants health, stamina, and regen buffs' },
    { src: `${B}/farm-animals.webp`, caption: 'The best recipes start at your own ranch' },
  ],
  traversal: [
    { src: `${G}/glider-flying.webp`, caption: 'The glider turns altitude into distance' },
    { src: `${G}/grappling-hook.webp`, caption: 'The grappling hook defies gravity entirely' },
    { src: `${B}/underwater-swim.webp`, caption: 'Swimming arrived with Update 7 — mind your breath' },
  ],
  'water-mechanics': [
    { src: `${B}/underwater-swim.webp`, caption: 'Water is a terrain type, a resource, and a threat' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Veilwater’s seas hide treasure and teeth alike' },
  ],
  'death-respawn': [
    { src: `${B}/campfire-night.webp`, caption: 'Death sends you back to your last Flame Altar' },
    { src: `${G}/night-running.webp`, caption: 'Sometimes the smart move is not dying at all' },
  ],
  multiplayer: [
    { src: `${G}/multiplayer-coop.webp`, caption: 'Up to 16 Flameborn share one world' },
    { src: `${G}/multiplayer-menu.webp`, caption: 'Host, join, and permission roles from the menu' },
  ],
  'leveling-progression': [
    { src: `${G}/skill-tree-full.webp`, caption: 'Leveling feeds the skill constellation' },
    { src: `${B}/skill-tree-ui.webp`, caption: 'Shroud Roots grant bonus skill points — hunt them all' },
  ],
  'difficulty-settings': [
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Every preset remains fully playable end-to-end' },
    { src: `${B}/character-customize.webp`, caption: 'Tune the world to your taste — even weather frequency' },
  ],
  'weather-system': [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: snow rules the high country' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Rain in the valleys becomes snow on the peaks' },
  ],
};

export const fishingImages: Record<string, GalleryImage[]> = {
  'getting-started': [
    { src: `${B}/underwater-swim.webp`, caption: 'The waters of Embervale are teeming — grab a rod' },
    { src: `${B}/hud-building-quest.webp`, caption: 'The Hunter’s "Unknown Waters" quest starts it all' },
  ],
  rods: [
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Every rod is earned through quests, then craftable' },
    { src: `${G}/crafting-axe.webp`, caption: 'The Excellent Rod boasts +55 endurance — the best in game' },
  ],
  bait: [
    { src: `${G}/night-running.webp`, caption: 'Fireflies and moths only appear after dark' },
    { src: `${B}/farm-animals.webp`, caption: 'Frogs are the most valuable wild bait for epic fish' },
  ],
  fish: [
    { src: `${B}/underwater-swim.webp`, caption: 'Species vary by biome — and by bait' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'From common Lakehoppers to legendary Shockfins' },
  ],
  locations: [
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Every biome’s waters hold different catches' },
    { src: `${B}/underwater-swim.webp`, caption: 'Veilwater’s deep pools hide the rarest species' },
  ],
  tips: [
    { src: `${B}/underwater-swim.webp`, caption: 'Endurance decides long fights — bring the right rod' },
    { src: `${G}/inventory-backpack.webp`, caption: 'Salvage your first epic fish — don’t eat it' },
  ],
  rewards: [
    { src: `${B}/campfire-night.webp`, caption: 'Fish cook into powerful health and stamina meals' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Lucky catches include gems and treasure' },
  ],
  'quest-chain': [
    { src: `${B}/village-npcs.webp`, caption: 'Captain Fontane at the Veilwater dock unlocks the best gear' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Four quests, four rods — follow the chain' },
  ],
  'loot-pools': [
    { src: `${B}/underwater-swim.webp`, caption: 'Hidden rod weights decide fish vs. treasure vs. boots' },
    { src: `${G}/inventory-backpack.webp`, caption: 'The infamous Wet Boot — now you know why it happens' },
  ],
};
