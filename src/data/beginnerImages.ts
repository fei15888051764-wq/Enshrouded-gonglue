// Real game screenshots for Beginner's Guide subsections.
// Sources: official Steam store screenshots, enshrouded.com official update
// artwork, and locally curated gameplay captures. Rendered by SectionGallery
// in BeginnerSubPage — add an entry here and it appears automatically.

export interface SectionImage {
  src: string;
  caption: string;
}

const B = '/images/beginner';

export const beginnerImages: Record<string, SectionImage[]> = {
  'getting-started': [
    { src: `${B}/game-cover.webp`, caption: 'Embervale awaits — the world of Enshrouded' },
    { src: `${B}/character-customize.webp`, caption: 'Character customization and armor tinting are purely cosmetic' },
  ],
  'basic-controls': [
    { src: `${B}/hud-building-quest.webp`, caption: 'The HUD: quest tracker, rested buff, and hotbar at a glance' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Inventory and station crafting interfaces share the same layout' },
  ],
  'first-hour': [
    { src: `${B}/village-npcs.webp`, caption: 'Your first base: rescued NPCs unlock crafting and quests' },
    { src: `${B}/campfire-night.webp`, caption: 'A campfire on your first night grants the Rested buff' },
  ],
  combat: [
    { src: `${B}/combat-dodge.webp`, caption: 'Dodging through an enemy swing — i-frames since Update 8' },
    { src: `${B}/combat-parry.webp`, caption: 'A well-timed parry opens enemies to a counterattack' },
    { src: `${B}/combat-boss.webp`, caption: 'Boss fights test stamina management above all else' },
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Mage combat: channeling lightning from a staff' },
    { src: `${B}/volcano-combat.webp`, caption: 'Late-game fights demand every defensive tool you have' },
  ],
  shroud: [
    { src: `${B}/shroud-gameplay.webp`, caption: 'Inside the Shroud — the timer never stops ticking' },
    { src: `${B}/shroud-wood.webp`, caption: 'Shroud-infested forests hide the best loot in the game' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The Fell thrive in the Shroud — fight or flee, quickly' },
  ],
  'base-building': [
    { src: `${B}/building-house.webp`, caption: 'Every great base starts with four walls inside the altar radius' },
    { src: `${B}/building-window-frame.webp`, caption: 'Placing pieces with the construction hammer' },
  ],
  crafting: [
    { src: `${B}/crafting-axe.webp`, caption: 'Crafting tools at the workbench — your first station' },
    { src: `${B}/crafting-loom.webp`, caption: 'Advanced stations like the Loom come from rescued NPCs' },
  ],
  traversal: [
    { src: `${B}/glider-flying.webp`, caption: 'The glider turns every cliff into a shortcut' },
    { src: `${B}/grappling-hook.webp`, caption: 'The grappling hook swings you across gaps and up walls' },
    { src: `${B}/underwater-swim.webp`, caption: 'Since Update 7, rivers and lakes are traversable too' },
  ],
  skills: [
    { src: `${B}/skill-tree-full.webp`, caption: 'The full skill constellation — twelve archetypes to mix freely' },
    { src: `${B}/skill-tree-ui.webp`, caption: 'Skill tree UI after the Update 8 rework — zoomable, with upgradeable nodes' },
    { src: `${B}/skill-tree-mage.webp`, caption: 'Mage branch: intelligence scaling and spell perks' },
    { src: `${B}/skill-tree-ranger.webp`, caption: 'Ranger branch: dexterity, bows, and mobility' },
    { src: `${B}/skill-tree-parry.webp`, caption: 'Tank branch: defense, parry, and survivability' },
  ],
  food: [
    { src: `${B}/campfire-night.webp`, caption: 'Cooking at a campfire — your first source of food buffs' },
    { src: `${B}/farm-animals.webp`, caption: 'Farm animals provide milk, eggs, and wool for better recipes' },
  ],
  gear: [
    { src: `${B}/inventory-backpack.webp`, caption: 'Keep your inventory lean — stash materials in magic chests' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Socketing a gem into a weapon at the gem forge' },
  ],
  'fast-travel': [
    { src: `${B}/spire-map.webp`, caption: 'Ancient Spires are prime fast-travel points — and glider launch pads' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Gliding from a spire covers huge distances for free' },
  ],
  mistakes: [
    { src: `${B}/night-monster-fight.webp`, caption: 'Wandering at night unprepared — a classic rookie mistake' },
    { src: `${B}/night-running.webp`, caption: 'Know when to run: not every fight is worth taking early' },
  ],
  multiplayer: [
    { src: `${B}/multiplayer-coop.webp`, caption: 'Up to 16 players share a world — and its 10 Flame Altars' },
    { src: `${B}/multiplayer-menu.webp`, caption: 'Hosting and joining games from the main menu' },
    { src: `${B}/village-npcs.webp`, caption: 'A shared base comes alive with friends and rescued NPCs' },
  ],
  'day-night': [
    { src: `${B}/night-running.webp`, caption: 'Night falls fast — torches and shelter are your friends' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Some creatures only come out after dark' },
  ],
  weather: [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: snow rules the Albaneve Summits' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Rain in the lowlands becomes snow at high altitude' },
  ],
  farming: [
    { src: `${B}/farming-seedbed.webp`, caption: 'Seedbeds turn wild plants into farmable crops' },
    { src: `${B}/farm-animals.webp`, caption: 'Tamed animals produce resources passively at your base' },
  ],
  'advanced-building': [
    { src: `${B}/hud-building-quest.webp`, caption: 'The construction hammer: your catalog of every block shape' },
    { src: `${B}/building-window-frame.webp`, caption: 'Detail pieces like window frames sell the fantasy' },
  ],
  difficulty: [
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Menus are controller-friendly across every preset' },
    { src: `${B}/character-customize.webp`, caption: 'UI panels scale cleanly regardless of difficulty settings' },
  ],
  'photo-mode': [
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Golden hour above the clouds — a perfect photo mode spot' },
    { src: `${B}/underwater-swim.webp`, caption: 'Underwater scenes make stunning photo mode subjects' },
  ],
};
