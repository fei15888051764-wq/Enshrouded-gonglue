// Real game screenshots for the Game Screenshots section.
// Sources: official Steam store captures (1920x1080, in-engine) + site gameplay library.

import type { GalleryImage } from './skillsBuildsImages';

const S = '/images/screenshots';
const B = '/images/beginner';
const G = '/images/guides';
const L = '/images/lore';
const Q = '/images/quests';
const D = '/images/builds';

export const screenshotsImages: Record<string, GalleryImage[]> = {
  'combat-action': [
    { src: `${S}/combat-fell-magic.webp`, caption: 'Flameborn against a Fell horror — official Update 8 capture' },
    { src: `${S}/night-magic-combat.webp`, caption: 'Aerial strike on a Shroud-born monstrosity' },
    { src: `${B}/combat-dodge.webp`, caption: 'The dodge roll: real i-frames, real stakes' },
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Staves turn the sky into a weapon' },
    { src: `${B}/combat-parry.webp`, caption: 'A perfect parry a heartbeat before the riposte' },
    { src: `${G}/volcano-combat.webp`, caption: 'Kindlewastes duels — heat, ash, and steel' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Night ambush lit only by spell-fire' },
  ],
  'world-biomes': [
    { src: `${S}/sunset-valley-ruins.webp`, caption: 'Golden hour over a ruined Springlands keep' },
    { src: `${S}/night-campfire-meteor.webp`, caption: 'Meteor shower above a night camp' },
    { src: `${S}/mountain-ruins-explore.webp`, caption: 'Highland fortress ruins wrapped in green' },
    { src: `${L}/embervale-landscape.webp`, caption: 'Embervale: beauty and ruin side by side' },
    { src: `${L}/world-of-embervale.webp`, caption: 'Nine biomes, one seamless world' },
    { src: `${L}/ancient-ruins.webp`, caption: 'The Ancients built to last — mostly' },
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Albaneve Summits under fresh snow' },
    { src: `${L}/regions-map.webp`, caption: 'Every vista on this map is a place you can stand' },
  ],
  'base-building': [
    { src: `${S}/base-building-mode.webp`, caption: 'Construction Hammer in action — first walls going up' },
    { src: `${S}/base-interior-design.webp`, caption: 'Furnished interiors with working stations' },
    { src: `${S}/farm-village-animals.webp`, caption: 'A homestead with tamed animals grazing' },
    { src: `${G}/building-house.webp`, caption: 'No structural physics — build what you imagine' },
    { src: `${B}/building-window-frame.webp`, caption: 'Detail pieces turn a box into a home' },
    { src: `${B}/hud-building-quest.webp`, caption: 'Block quests unlock whole construction sets' },
    { src: `${B}/village-npcs.webp`, caption: 'Rescued craftspeople bring a base to life' },
    { src: `${Q}/flame-altar-crafting.webp`, caption: 'Every great base starts inside the Flame Altar radius' },
  ],
  'the-shroud': [
    { src: `${S}/shroud-creature-fog.webp`, caption: 'A Fell beast stalks the grey' },
    { src: `${G}/shroud-gameplay.webp`, caption: 'Inside the fog: meters of visibility, minutes on the timer' },
    { src: `${G}/shroud-wood.webp`, caption: 'Shroud Wood — dangerous to reach, essential to craft' },
    { src: `${L}/shroud.webp`, caption: 'The Shroud rose from the emptied Elixir Wells' },
    { src: `${L}/elixir-well.webp`, caption: 'Greed dug the wells; the fog answered' },
    { src: `${L}/fell-monstrosity.webp`, caption: 'What the Shroud does to living things' },
    { src: `${L}/cinder-vault.webp`, caption: 'Cinder Vaults: the Flameborn\'s long sleep beneath the fog' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The storm-wall at the Shroud\'s edge' },
  ],
  'bosses-enemies': [
    { src: `${S}/boss-boar-lightning.webp`, caption: 'Lightning meets a charging matriarch' },
    { src: `${B}/combat-boss.webp`, caption: 'Boss arenas have the best lighting in the game' },
    { src: `${G}/volcano-combat.webp`, caption: 'Elite fights in the Kindlewastes caldera' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Night hunts — the monsters hold the advantage' },
    { src: `${L}/fell-monstrosity.webp`, caption: 'A Fell monstrosity at full size' },
  ],
  'exploration-glider': [
    { src: `${B}/glide-clouds-sunset.webp`, caption: 'Sunset glide above a sea of clouds' },
    { src: `${G}/glider-flying.webp`, caption: 'The Glider: every cliff is a launch pad' },
    { src: `${B}/glider-mountains-snow.webp`, caption: 'Crossing the Albaneve range by air' },
    { src: `${B}/grappling-hook.webp`, caption: 'The Grappling Hook turns ruins into playgrounds' },
    { src: `${B}/underwater-swim.webp`, caption: 'Underwater dives hide their own rewards' },
    { src: `${G}/night-running.webp`, caption: 'Night sprints between safe flames' },
    { src: `${L}/spire-climb.webp`, caption: 'Ancient Spires: climb high, glide far' },
    { src: `${S}/mountain-ruins-explore.webp`, caption: 'Scaffolding the high ruins for a better view' },
  ],
  'character-gear': [
    { src: `${S}/armor-dye-ui.webp`, caption: 'The dye system: every armor piece, every color' },
    { src: `${S}/gem-socket-ui.webp`, caption: 'Socketing a Gem of Necromancy into a Devilish Bow' },
    { src: `${S}/skill-tree-constellation.webp`, caption: 'The Update 8 skill tree sprawls like a constellation' },
    { src: `${S}/crafting-station-ui.webp`, caption: 'Running an Ectoplasm Press — Purified Slime in progress' },
    { src: `${B}/character-customize.webp`, caption: 'Character creation: your Flameborn, your rules' },
    { src: `${B}/skill-tree-full.webp`, caption: 'Twelve branches deep — plan before you spend' },
    { src: `${B}/skill-tree-mage.webp`, caption: 'The Battlemage constellation up close' },
    { src: `${B}/inventory-backpack.webp`, caption: 'A geared-up Flameborn, ready for the Shroud' },
  ],
  'co-op-multiplayer': [
    { src: `${B}/multiplayer-coop.webp`, caption: 'Fell hunts are safer — and louder — with friends' },
    { src: `${B}/multiplayer-menu.webp`, caption: 'Up to 16 Flameborn share one world' },
    { src: `${S}/combat-fell-magic.webp`, caption: 'Group boss pulls: tanks front, casters spread' },
  ],
  'official-art': [
    { src: `${B}/game-cover.webp`, caption: 'Enshrouded key art — a Flameborn over Embervale' },
    { src: `${D}/pact-of-the-flame-art.webp`, caption: 'Pact of the Flame — official update artwork' },
    { src: `${D}/thralls-of-twilight-art.webp`, caption: 'Thralls of Twilight — official update artwork' },
  ],
};
