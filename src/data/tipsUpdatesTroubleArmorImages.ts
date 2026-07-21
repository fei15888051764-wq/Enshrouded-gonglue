import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const BD = '/images/builds';

/* ---------------- Tips & Tricks (18 sections) ---------------- */
export const tipsImages: Record<string, GalleryImage[]> = {
  'beginner-tips': [
    { src: `${B}/campfire-night.webp`, caption: 'Your first campfire marks a safe respawn point — place it before nightfall.' },
    { src: `${B}/inventory-backpack.webp`, caption: 'Keep your backpack organized early; inventory space fills up fast.' },
  ],
  'combat-tips': [
    { src: `${B}/combat-parry.webp`, caption: 'A well-timed parry staggers enemies and opens them up for a counter.' },
    { src: `${B}/combat-dodge.webp`, caption: 'Dodge-rolling through attacks costs stamina — manage it carefully.' },
  ],
  'exploration': [
    { src: `${B}/glider-flying.webp`, caption: 'The glider turns high ground into fast travel across the valleys.' },
    { src: `${B}/grappling-hook.webp`, caption: 'Grapple points hide shortcuts to chests and secret areas.' },
  ],
  'base-building': [
    { src: `${B}/building-house.webp`, caption: 'Start with a small footprint and expand as your Flame Altar grows.' },
    { src: `${B}/building-window-frame.webp`, caption: 'Snap-based building makes clean walls and window frames easy.' },
  ],
  'crafting-gear': [
    { src: `${B}/crafting-axe.webp`, caption: 'Craft tools at the workbench before heading into tougher biomes.' },
    { src: `${B}/gem-insert-ui.webp`, caption: 'Socket gems into weapons for powerful bonus effects.' },
  ],
  'character-builds': [
    { src: `${B}/skill-tree-full.webp`, caption: 'The full skill tree — plan your path before spending points.' },
    { src: `${B}/character-customize.webp`, caption: 'Respec is cheap: experiment with builds at the Flame Altar.' },
  ],
  'shroud-survival': [
    { src: `${B}/shroud-gameplay.webp`, caption: 'Inside the Shroud your timer ticks down — watch it constantly.' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'Shroud storms and Fell enemies punish the unprepared.' },
  ],
  'farming-efficiency': [
    { src: `${B}/farming-seedbed.webp`, caption: 'Seedbeds turn one plant into many — set up a farm loop early.' },
    { src: `${B}/farm-animals.webp`, caption: 'Tamed animals provide renewable resources at your base.' },
  ],
  'multiplayer': [
    { src: `${B}/multiplayer-coop.webp`, caption: 'Co-op parties of up to 16 can share a world and bases.' },
    { src: `${B}/multiplayer-menu.webp`, caption: 'Join friends through the server browser or direct invite.' },
  ],
  'secrets-easter-eggs': [
    { src: `${B}/spire-map.webp`, caption: 'Ancient spires reveal the map and hide lore collectibles.' },
    { src: `${B}/shroud-wood.webp`, caption: 'Some of the best secrets sit at the bottom of the Shroud.' },
  ],
  'cooking-food': [
    { src: `${B}/campfire-night.webp`, caption: 'Cooking over a campfire unlocks powerful food buffs.' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Stack multiple food buffs by eating different meal types.' },
  ],
  'alchemy-potions': [
    { src: `${B}/village-npcs.webp`, caption: 'Rescue the Alchemist to unlock potion brewing at your base.' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'Potions share cooldowns — pick the right one for the fight.' },
  ],
  'farming-agriculture': [
    { src: `${B}/farming-seedbed.webp`, caption: 'Fertile soil and water keep your crops growing steadily.' },
    { src: `${B}/village-npcs.webp`, caption: 'The Farmer NPC unlocks advanced agriculture recipes.' },
  ],
  'fishing': [
    { src: `${B}/underwater-swim.webp`, caption: 'Wake of the Water added swimming, diving and fishing spots.' },
    { src: `${B}/village-npcs.webp`, caption: 'Unlock the Fisher to get your first rod and bait recipes.' },
  ],
  'update7-water': [
    { src: `${B}/underwater-swim.webp`, caption: 'Update 7 overhauled water: swim, dive and explore sunken ruins.' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'New water biomes pair beautifully with glider travel.' },
  ],
  'update8-forging': [
    { src: `${B}/gem-insert-ui.webp`, caption: 'Update 8 expanded forging with deeper gem socketing options.' },
    { src: `${B}/crafting-axe.webp`, caption: 'Reforging lets you reroll gear stats at the forge.' },
  ],
  'performance': [
    { src: `${B}/night-running.webp`, caption: 'Dense fog and night lighting are the heaviest GPU loads — tune settings here first.' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Volumetric clouds look great but cost frames; lower them for FPS.' },
  ],
  'hidden-mechanics': [
    { src: `${B}/grappling-hook.webp`, caption: 'Grappling mid-glide chains momentum for huge distance gains.' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Night spawns drop rare loot — dangerous but rewarding.' },
  ],
};

/* ---------------- Patch Notes & Updates (12 sections) ---------------- */
export const updatesImages: Record<string, GalleryImage[]> = {
  'early-access-launch': [
    { src: `${B}/game-cover.webp`, caption: 'Enshrouded launched into Steam Early Access in January 2024.' },
    { src: `${B}/campfire-night.webp`, caption: 'The launch version already featured base building and co-op.' },
  ],
  'update1-hollow-halls': [
    { src: `${B}/night-monster-fight.webp`, caption: 'Hollow Halls added instanced dungeon challenges.' },
    { src: `${B}/combat-boss.webp`, caption: 'New boss encounters awaited inside the Halls.' },
  ],
  'update2-melodies-mire': [
    { src: `${B}/shroud-wood.webp`, caption: 'Melodies of the Mire expanded the swampy Blackmire region.' },
    { src: `${B}/village-npcs.webp`, caption: 'New NPCs and quests arrived with the Mire update.' },
  ],
  'back-to-shroud': [
    { src: `${B}/shroud-gameplay.webp`, caption: 'Back to the Shroud reworked Shroud zones and rewards.' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The Fell grew deadlier with new storm events.' },
  ],
  'update3-pact-flame': [
    { src: `${BD}/pact-of-the-flame-art.webp`, caption: 'Official key art for the Pact of the Flame update.' },
    { src: `${B}/volcano-combat.webp`, caption: 'The update pushed players toward fiery endgame zones.' },
  ],
  'update5-frozen-frontier': [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Frozen Frontier opened the snowy Albaneve Summits.' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Gliding across the frozen peaks of the new biome.' },
  ],
  'update6-thralls-twilight': [
    { src: `${BD}/thralls-of-twilight-art.webp`, caption: 'Official key art for Thralls of Twilight.' },
    { src: `${B}/night-running.webp`, caption: 'Twilight zones brought new nocturnal threats.' },
  ],
  'update7-wake-water': [
    { src: `${B}/underwater-swim.webp`, caption: 'Wake of the Water introduced swimming and underwater exploration.' },
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'New coastlines and water biomes to explore.' },
  ],
  'update8-forging-path': [
    { src: `${B}/gem-insert-ui.webp`, caption: 'Forging Path deepened item customization and gem socketing.' },
    { src: `${B}/crafting-axe.webp`, caption: 'The forge became central to endgame gear progression.' },
  ],
  'update4-unmarked': [
    { src: `${B}/spire-map.webp`, caption: 'Update 4 filled in unmarked regions of the world map.' },
    { src: `${B}/glider-flying.webp`, caption: 'New points of interest reward glider exploration.' },
  ],
  'roadmap-future': [
    { src: `${B}/game-cover.webp`, caption: 'Keen Games continues to expand Enshrouded toward 1.0 and beyond.' },
    { src: `${B}/spire-map.webp`, caption: 'The roadmap promises more biomes, quests and systems.' },
  ],
  'version-timeline': [
    { src: `${B}/game-cover.webp`, caption: 'Every major update since Early Access, in one timeline.' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Track which version introduced each feature you use.' },
  ],
};

/* ---------------- Troubleshooting (13 sections) ---------------- */
export const troubleshootImages: Record<string, GalleryImage[]> = {
  'launch-crash': [
    { src: `${B}/game-cover.webp`, caption: 'If Enshrouded crashes on launch, work through the checklist below.' },
    { src: `${B}/hud-building-quest.webp`, caption: 'A clean boot should get you to this screen — here is how.' },
  ],
  'performance-fps': [
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Volumetrics and view distance are the biggest FPS costs.' },
    { src: `${B}/night-running.webp`, caption: 'Night scenes with fog hit the GPU hardest — test settings here.' },
  ],
  'multiplayer-issues': [
    { src: `${B}/multiplayer-coop.webp`, caption: 'Connection problems? These fixes cover most co-op issues.' },
    { src: `${B}/multiplayer-menu.webp`, caption: 'Server browser and NAT settings are the usual culprits.' },
  ],
  'save-data': [
    { src: `${B}/inventory-backpack.webp`, caption: 'Back up your save files before attempting any recovery steps.' },
    { src: `${B}/campfire-night.webp`, caption: 'World and character saves live in separate files — details inside.' },
  ],
  'stuck-freeze': [
    { src: `${B}/grappling-hook.webp`, caption: 'Stuck in terrain? The unstuck options and console commands can help.' },
    { src: `${B}/shroud-gameplay.webp`, caption: 'Freezes in the Shroud often relate to shader compilation.' },
  ],
  'gpu-graphics': [
    { src: `${B}/volcano-combat.webp`, caption: 'Lava and particle-heavy fights stress-test your GPU drivers.' },
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Snow shaders in Albaneve expose outdated driver issues.' },
  ],
  'audio-input': [
    { src: `${B}/village-npcs.webp`, caption: 'Missing NPC voices or input lag? Start with these checks.' },
    { src: `${B}/multiplayer-menu.webp`, caption: 'Voice chat and controller issues are covered step by step.' },
  ],
  'steam-deck-linux': [
    { src: `${B}/game-cover.webp`, caption: 'Enshrouded runs on Steam Deck and Linux via Proton — with tweaks.' },
    { src: `${B}/inventory-crafting-ui.webp`, caption: 'UI scaling and Proton version settings that work best.' },
  ],
  'server-setup': [
    { src: `${B}/multiplayer-menu.webp`, caption: 'Dedicated server setup, ports and config explained.' },
    { src: `${B}/multiplayer-coop.webp`, caption: 'A correctly configured server keeps 16-player co-op smooth.' },
  ],
  'common-errors': [
    { src: `${B}/hud-building-quest.webp`, caption: 'The most common error messages and what they actually mean.' },
    { src: `${B}/inventory-backpack.webp`, caption: 'Quick fixes for inventory, quest and UI glitches.' },
  ],
  'general-maintenance': [
    { src: `${B}/crafting-loom.webp`, caption: 'Routine maintenance: verify files, clear caches, update drivers.' },
    { src: `${B}/building-house.webp`, caption: 'Keep your install healthy to protect long-term bases.' },
  ],
  'update8-migration': [
    { src: `${B}/gem-insert-ui.webp`, caption: 'Update 8 changed forging — migrate old gear with these steps.' },
    { src: `${B}/crafting-axe.webp`, caption: 'Legacy items convert automatically, but check your builds.' },
  ],
  'quest-progression-fixes': [
    { src: `${B}/hud-building-quest.webp`, caption: 'Quest tracker stuck? These fixes restore progression flags.' },
    { src: `${B}/spire-map.webp`, caption: 'Revisit spires and NPCs to re-trigger broken quest states.' },
  ],
};

/* ---------------- Armor sets (keyed by tier) ---------------- */
export const armorTierImages: Record<string, GalleryImage[]> = {
  S: [
    { src: `${B}/combat-boss.webp`, caption: 'S-Tier sets are built for the hardest boss encounters in the game.' },
    { src: `${B}/character-customize.webp`, caption: 'Pair best-in-slot armor with the right skills and gems.' },
  ],
  A: [
    { src: `${B}/combat-parry.webp`, caption: 'A-Tier armor excels in its intended combat role.' },
    { src: `${B}/volcano-combat.webp`, caption: 'Strong specialist sets carry you through endgame zones.' },
  ],
  B: [
    { src: `${B}/combat-dodge.webp`, caption: 'B-Tier sets are reliable mid-game workhorses.' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Solid defense for night hunts and Shroud runs.' },
  ],
  C: [
    { src: `${B}/character-customize.webp`, caption: 'C-Tier starter armor — replace it as you level up.' },
    { src: `${B}/crafting-axe.webp`, caption: 'Early crafting gets you out of starter gear quickly.' },
  ],
};
