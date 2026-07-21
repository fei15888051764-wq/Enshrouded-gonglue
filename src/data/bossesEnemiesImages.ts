// Real game images for Bosses & Enemies sections.
// Captions stay accurate to what each screenshot actually shows —
// no wrong-image filler. Sources: official Steam screenshots + local captures.

import type { GalleryImage } from './skillsBuildsImages';

const B = '/images/beginner';
const G = '/images/guides';

export const enemiesImages: Record<string, GalleryImage[]> = {
  'enemy-overview': [
    { src: `${G}/combat-boss.webp`, caption: 'Every enemy family has attack patterns worth learning' },
    { src: `${B}/night-monster-fight.webp`, caption: 'Many creatures grow bolder — and deadlier — after dark' },
  ],
  'fell-creatures': [
    { src: `${B}/fell-shroud-storm.webp`, caption: 'A Fell horror stalking its corrupted domain' },
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Shroud is Fell territory — enter prepared' },
    { src: `${G}/shroud-wood.webp`, caption: 'Shroud-infested forests hide the toughest Fell variants' },
  ],
  scavengers: [
    { src: `${G}/combat-parry.webp`, caption: 'Humanoid camps reward patience — bait the swing, parry, punish' },
    { src: `${G}/volcano-combat.webp`, caption: 'Late-game marauder camps hit brutally hard' },
  ],
  vukah: [
    { src: `${B}/night-monster-fight.webp`, caption: 'Beast packs hit fast — never fight them surrounded' },
  ],
  hollow: [
    { src: `${G}/combat-dodge.webp`, caption: 'Undead legions telegraph slowly — dodge through, not away' },
    { src: `${G}/combat-boss.webp`, caption: 'The Hollow guard their halls in overwhelming numbers' },
  ],
  wildlife: [
    { src: `${B}/farm-animals.webp`, caption: 'Passive wildlife can be tamed for your homestead' },
    { src: `${B}/village-npcs.webp`, caption: 'Peaceful creatures share the world with its predators' },
  ],
  drak: [
    { src: `${B}/underwater-swim.webp`, caption: 'A Drak lurking in the depths — the aquatic reptiles of Embervale' },
    { src: `${G}/shroud-wood.webp`, caption: 'Murky wetlands and dark waters shelter the Drak' },
  ],
  'shroud-entities': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'Entities born of the Shroud itself rule the grey zones' },
    { src: `${G}/shroud-wood.webp`, caption: 'Deep Shroud hides entities found nowhere else' },
  ],
};

export const bossesImages: Record<string, GalleryImage[]> = {
  'boss-overview': [
    { src: `${G}/combat-boss.webp`, caption: 'Twelve named bosses guard Embervale’s rarest rewards' },
    { src: `${G}/volcano-combat.webp`, caption: 'Boss arenas escalate from meadows to volcanic peaks' },
  ],
  'early-bosses': [
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The Fell Thunderbrute — most players’ first wall' },
    { src: `${G}/combat-dodge.webp`, caption: 'Early bosses teach the golden rule: dodge, don’t trade' },
  ],
  'mid-bosses': [
    { src: `${B}/night-monster-fight.webp`, caption: 'Mid-game bosses add summons and arena hazards' },
    { src: `${G}/combat-parry.webp`, caption: 'Parry windows stay generous if your timing is honest' },
  ],
  'late-bosses': [
    { src: `${G}/volcano-combat.webp`, caption: 'Late bosses demand upgraded gear and full consumables' },
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Ranged builds trivialize some fights — and suffer in others' },
  ],
  'endgame-bosses': [
    { src: `${B}/underwater-swim.webp`, caption: 'Hydrak’Dal awaits beneath the waves of Veilwater' },
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The Fell Dragon Youngling — the summit of Fell corruption' },
  ],
  'boss-strategies': [
    { src: `${G}/combat-dodge.webp`, caption: 'I-frames since Update 8 make reactive play reliable' },
    { src: `${G}/combat-parry.webp`, caption: 'Learn one move at a time — mastery beats memorization' },
  ],
};

export const bossDetailImages: Record<string, GalleryImage[]> = {
  'fell-thunderbrute': [
    { src: `${B}/fell-shroud-storm.webp`, caption: 'The Fell Thunderbrute — your first skill check' },
    { src: `${G}/combat-dodge.webp`, caption: 'Dodge sideways through the three-hit combo' },
  ],
  'scavenger-matron': [
    { src: `${G}/combat-parry.webp`, caption: 'Her beast handlers telegraph every swing' },
  ],
  'vukah-brawler': [
    { src: `${B}/night-monster-fight.webp`, caption: 'The Brawler’s charge punishes backpedaling' },
  ],
  'fell-critter-queen': [
    { src: `${G}/shroud-gameplay.webp`, caption: 'The Queen nests deep in Fell territory' },
    { src: `${G}/shroud-wood.webp`, caption: 'Expect endless critter adds — bring AoE' },
  ],
  'fell-wispwyvern': [
    { src: `${B}/fell-shroud-storm.webp`, caption: 'An aerial terror of the corrupted skies' },
  ],
  'hollow-cyclops': [
    { src: `${G}/combat-boss.webp`, caption: 'The Hollow Cyclops anchors the Hollow Halls’ gauntlets' },
  ],
  'fell-monstrosity': [
    { src: `${B}/night-monster-fight.webp`, caption: 'The Monstrosity’s glow lights up the night bog' },
  ],
  'fell-sicklescythe': [
    { src: `${G}/shroud-wood.webp`, caption: 'It reaps among the dead trees of the Shroud' },
  ],
  'scavenger-tyrant': [
    { src: `${G}/combat-parry.webp`, caption: 'The Tyrant’s guard breaks under disciplined parries' },
  ],
  cyclops: [
    { src: `${G}/combat-boss.webp`, caption: 'One eye, one rule: stay behind the legs' },
  ],
  'fell-cyclops': [
    { src: `${G}/volcano-combat.webp`, caption: 'The Fell Cyclops burns everything it touches' },
  ],
  'fell-dragon-youngling': [
    { src: `${G}/volcano-combat.webp`, caption: 'Dragon fire in a volcanic arena — bring frost resistance' },
    { src: `${G}/combat-boss.webp`, caption: 'The Youngling’s head upgrades the Flame to level 8' },
  ],
  'hydrak-dal': [
    { src: `${B}/underwater-swim.webp`, caption: 'Hydrak’Dal waits behind the puzzle door of Drak’Dal Temple' },
  ],
};
