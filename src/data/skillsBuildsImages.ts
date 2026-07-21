// Real game images for Skills & Builds subsections.
// Sources: official Steam screenshots, enshrouded.com official update artwork,
// local gameplay captures, and the local weapon thumbnail library.
// `contain: true` renders item thumbnails uncropped on a dark backdrop.

export interface GalleryImage {
  src: string;
  caption: string;
  contain?: boolean;
}

const B = '/images/beginner';
const G = '/images/guides';
const W = '/images/weapons';
const BD = '/images/builds';

export const skillsImages: Record<string, GalleryImage[]> = {
  'skill-tree-overview': [
    { src: `${G}/skill-tree-full.webp`, caption: 'The full skill constellation — twelve archetypes, freely mixed' },
    { src: `${B}/skill-tree-ui.webp`, caption: 'The Update 8 tree: zoomable, with 80+ upgradeable nodes' },
    { src: `${G}/skill-tree-parry.webp`, caption: 'Every branch feeds into the classless system' },
  ],
  'warrior-archetypes': [
    { src: `${G}/combat-parry.webp`, caption: 'Warriors live on the front line — parry timing is everything' },
    { src: `${G}/volcano-combat.webp`, caption: 'Late-game melee demands heavy armor and heavy commitment' },
    { src: `${W}/barbarian-greatsword.webp`, caption: 'Barbarian Greatsword — iconic two-handed warrior weapon', contain: true },
  ],
  'mage-archetypes': [
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Channeling lightning — mages trade armor for raw elemental power' },
    { src: `${G}/skill-tree-mage.webp`, caption: 'The mage branch: intelligence scaling and spell perks' },
    { src: `${W}/elders-staff.webp`, caption: "Elder's Staff — a classic endgame caster weapon", contain: true },
  ],
  'ranger-archetypes': [
    { src: `${G}/skill-tree-ranger.webp`, caption: 'The ranger branch: dexterity, bows, and mobility' },
    { src: `${W}/composite-bow.webp`, caption: 'Composite Bow — the reliable mid-game ranger workhorse', contain: true },
    { src: `${W}/devilish-bow.webp`, caption: 'Devilish Bow — high-end ranger firepower', contain: true },
  ],
  'recommended-builds': [
    { src: `${BD}/pact-of-the-flame-art.webp`, caption: 'Official artwork: Pact of the Flame — the update that reshaped builds' },
    { src: `${BD}/thralls-of-twilight-art.webp`, caption: 'Official artwork: Thralls of Twilight — gems opened new build paths' },
  ],
};

export const buildsImages: Record<string, GalleryImage[]> = {
  'ranger-sniper': [
    { src: `${B}/glider-mountains-snow.webp`, caption: 'High ground is the sniper’s best friend — position above the fight' },
    { src: `${W}/draconian-bow.webp`, caption: 'Draconian Bow — top-tier sniper bow', contain: true },
    { src: `${W}/brisk-bow.webp`, caption: 'Brisk Bow — fast draw speed for mobile sniping', contain: true },
  ],
  'wizard-mage': [
    { src: `${B}/combat-mage-lightning.webp`, caption: 'Full caster mode — positioning and mana discipline decide everything' },
    { src: `${W}/elders-staff.webp`, caption: "Elder's Staff — the wizard's endgame staple", contain: true },
    { src: `${W}/daryas-staff.webp`, caption: "Darya's Staff — strong mid-game casting option", contain: true },
  ],
  'tank-sword-board': [
    { src: `${G}/combat-parry.webp`, caption: 'The tank’s bread and butter — parry, punish, hold the line' },
    { src: `${W}/aurora-sword.webp`, caption: 'Aurora Sword — reliable one-handed blade for sword & board', contain: true },
    { src: `${W}/dragon-sword.webp`, caption: 'Dragon Sword — endgame tank sidearm', contain: true },
  ],
  'berserker-barbarian': [
    { src: `${G}/volcano-combat.webp`, caption: 'Berserkers thrive where other builds retreat' },
    { src: `${W}/barbarian-greatsword.webp`, caption: 'Barbarian Greatsword — the namesake weapon of this build', contain: true },
    { src: `${W}/fell-thunderbrute-greatsword.webp`, caption: 'Fell Thunderbrute Greatsword — for when subtlety fails', contain: true },
  ],
  'healer-support': [
    { src: `${G}/multiplayer-coop.webp`, caption: 'Healers shine brightest in co-op — keep the party standing' },
    { src: `${W}/blessed-club.webp`, caption: 'Blessed Club — support-friendly one-hander', contain: true },
    { src: `${W}/coiling-wand.webp`, caption: 'Coiling Wand — keeps spells flowing between heals', contain: true },
  ],
  'battlemage-hybrid': [
    { src: `${G}/combat-boss.webp`, caption: 'Hybrids answer every situation — steel up close, spells at range' },
    { src: `${W}/enflamed-sword.webp`, caption: 'Enflamed Sword — melee with built-in elemental punch', contain: true },
    { src: `${W}/crackling-wand.webp`, caption: 'Crackling Wand — the hybrid’s ranged answer', contain: true },
  ],
  'assassin-dual-blades': [
    { src: `${B}/night-monster-fight.webp`, caption: 'Strike from the dark — burst first, ask questions never' },
    { src: `${W}/blink-daggers.webp`, caption: 'Blink Daggers — teleport strikes fit the assassin fantasy', contain: true },
    { src: `${W}/baroness-daggers.webp`, caption: 'Baroness Daggers — fast, lethal dual blades', contain: true },
    { src: `${BD}/thralls-of-twilight-art.webp`, caption: 'Official artwork: the twilight update era of stealth builds' },
  ],
  'ice-mage-crowd-control': [
    { src: `${B}/weather-snow-albaneve.webp`, caption: 'Official artwork: the frozen north, home of every ice mage' },
    { src: `${W}/blizzard-wand.webp`, caption: 'Blizzard Wand — AoE freeze for crowd control', contain: true },
    { src: `${W}/frost-wand.webp`, caption: 'Frost Wand — early game chill application', contain: true },
    { src: `${W}/ice-blade.webp`, caption: 'Ice Blade — frost damage for melee hybrids', contain: true },
  ],
  'multi-shot-bowmaster': [
    { src: `${G}/combat-dodge.webp`, caption: 'Mobility is survival — shoot, dodge, reposition, repeat' },
    { src: `${W}/devilish-bow.webp`, caption: 'Devilish Bow — multi-shot friendly endgame bow', contain: true },
    { src: `${W}/bow-of-the-serpent.webp`, caption: 'Bow of the Serpent — arrows for every occasion', contain: true },
  ],
  'fire-mage-starter': [
    { src: `${B}/campfire-night.webp`, caption: 'Every fire mage’s journey starts at a humble campfire' },
    { src: `${BD}/pact-of-the-flame-art.webp`, caption: 'Official artwork: Pact of the Flame — fire builds’ home update' },
    { src: `${W}/blazing-wand.webp`, caption: 'Blazing Wand — your first fire wand', contain: true },
    { src: `${W}/blackened-staff.webp`, caption: 'Blackened Staff — graduate to full firepower', contain: true },
  ],
  'tank': [
    { src: '/images/beginner/combat-parry.webp', caption: "Tank builds live on perfect parries and huge health pools." },
    { src: '/images/beginner/skill-tree-full.webp', caption: "Invest deep into defense and stamina nodes." },
  ],
  'melee-dps': [
    { src: '/images/beginner/combat-dodge.webp', caption: "Melee DPS builds weave dodges into relentless offense." },
    { src: '/images/beginner/combat-parry.webp', caption: "Parry windows open enemies up for devastating counters." },
  ],
  'ranged-dps': [
    { src: '/images/beginner/skill-tree-ranger.webp', caption: "Ranger nodes maximize bow and crit damage." },
    { src: '/images/beginner/night-monster-fight.webp', caption: "Kite enemies and rain arrows from safe ground." },
  ],
  'magic-dps': [
    { src: '/images/beginner/combat-mage-lightning.webp', caption: "Mage builds melt packs with elemental spells." },
    { src: '/images/beginner/skill-tree-mage.webp', caption: "Stack intelligence and magic-focused nodes." },
  ],
  'support': [
    { src: '/images/beginner/multiplayer-coop.webp', caption: "Support builds keep a full party alive through endgame fights." },
    { src: '/images/beginner/village-npcs.webp', caption: "Buffs, heals, and auras — the backbone of co-op." },
  ],

};
