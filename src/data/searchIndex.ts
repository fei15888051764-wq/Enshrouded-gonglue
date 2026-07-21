// Global search index — auto-generated from the site's actual data files.
// Covers: all 20 sections, every subsection page, all 345 weapons,
// all armor sets, and all 13 boss detail pages.
// New content added to any *SubSections data file becomes searchable
// automatically — this index never goes stale.

import Fuse, { type FuseResult } from 'fuse.js';

import { armorSubSections, sTierArmor, aTierArmor, bTierArmor, cTierArmor } from './armorData';
import { baseSubSections } from './baseData';
import { beginnerSubSections } from './beginnerData';
import { bossesSubSections } from './bossesData';
import { buildSubSections } from './buildData';
import { craftingSubSections } from './craftingData';
import { enemiesSubSections } from './enemiesData';
import { fishingSubSections } from './fishingData';
import { itemsSubSections } from './itemsData';
import { loreSubSections } from './loreData';
import { mapSubSections } from './mapData';
import { mechanicsSubSections } from './mechanicsData';
import { questsSubSections } from './questsData';
import { skillsSubSections } from './skillsData';
import { tipsSubSections } from './tipsData';
import { troubleshootSubSections } from './troubleshootData';
import { updatesSubSections } from './updatesData';
import { walkthroughSubSections } from './walkthroughData';
import { bossDetails } from './bossDetailData';
import weaponsData from './weapons.json';
import { weaponCategories } from './weaponsDatabaseData';
import { allArmorPieces } from './armorPiecesData';

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  keywords: string[];
  route: { page: string; sub?: string };
  /** Direct path (used for query-string deep links, e.g. prefiltered weapon DB) */
  href?: string;
}

interface SubEntry { id: string; title: string; summary?: string; description?: string }

const SECTION_NAMES: Record<string, string> = {
  beginner: "Beginner's Guide",
  skills: 'Skills & Builds',
  builds: 'Character Builds',
  weaponsdb: 'Weapons',
  'armor-pieces': 'Armor Pieces',
  armor: 'Armor Sets',
  items: 'Items & Materials',
  crafting: 'Crafting',
  bosses: 'Bosses',
  enemies: 'Enemies',
  map: 'Map & Locations',
  quests: 'Quests',
  lore: 'Lore & Story',
  walkthrough: 'Walkthrough',
  tips: 'Tips & Tricks',
  updates: 'Patch Notes',
  fishing: 'Fishing',
  base: 'Base Building',
  mechanics: 'Game Mechanics',
  troubleshoot: 'Troubleshooting',
  screenshots: 'Game Screenshots',
};

const groups: [string, SubEntry[]][] = [
  ['beginner', beginnerSubSections],
  ['skills', skillsSubSections],
  ['builds', buildSubSections],
  ['armor', armorSubSections],
  ['items', itemsSubSections],
  ['crafting', craftingSubSections],
  ['bosses', bossesSubSections],
  ['enemies', enemiesSubSections],
  ['map', mapSubSections],
  ['quests', questsSubSections],
  ['lore', loreSubSections],
  ['walkthrough', walkthroughSubSections],
  ['tips', tipsSubSections],
  ['updates', updatesSubSections],
  ['fishing', fishingSubSections],
  ['base', baseSubSections],
  ['mechanics', mechanicsSubSections],
  ['troubleshoot', troubleshootSubSections],
];

// Extra per-section vocabulary so gamer terms hit the right section
const SECTION_KEYWORDS: Record<string, string[]> = {
  troubleshoot: ['fix', 'error', 'crash', 'bug', 'problem', 'not working', 'help'],
  tips: ['tip', 'trick', 'secret', 'guide', 'how to'],
  bosses: ['boss', 'fight', 'how to beat', 'strategy', 'loot'],
  weaponsdb: ['weapon', 'damage', 'stats', 'legendary'],
  updates: ['patch', 'update', 'version', 'changelog', 'hotfix'],
  beginner: ['beginner', 'new player', 'start', 'first', 'early game'],
  builds: ['build', 'class', 'best build', 'meta'],
  skills: ['skill', 'skill tree', 'talent', 'respec'],
  fishing: ['fish', 'fishing', 'rod', 'bait'],
  base: ['base', 'building', 'build base', 'flame altar'],
  mechanics: ['mechanic', 'system', 'how does', 'shroud'],
  map: ['map', 'location', 'where', 'biome', 'region'],
  quests: ['quest', 'mission', 'story'],
  lore: ['lore', 'story', 'history'],
  items: ['item', 'material', 'ore', 'where to find'],
  crafting: ['craft', 'crafting', 'recipe', 'station'],
  screenshots: ['screenshot', 'screenshots', 'photo', 'picture', 'image', 'gallery', 'wallpaper', 'photo mode', 'camera'],
  enemies: ['enemy', 'creature', 'monster', 'mob'],
  armor: ['armor', 'armour', 'set', 'gear', 'defense'],
  walkthrough: ['walkthrough', 'chapter', 'progression', 'guide'],
};

function words(title: string): string[] {
  return title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 2);
}

function unique(list: string[]): string[] {
  return [...new Set(list)];
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const humanize = (slug: string) =>
  slug.split('-').map((w) => (w ? w[0].toUpperCase() + w.slice(1) : '')).join(' ');

/* ---------- Section entries (the 20 home cards + info pages) ---------- */
const sectionEntries: SearchItem[] = [
  ...Object.entries(SECTION_NAMES).map(([page, name]) => ({
    id: `section-${page}`,
    title: name,
    category: 'Section',
    description: `${name} — complete Enshrouded guide section`,
    keywords: unique([name.toLowerCase(), page, ...(SECTION_KEYWORDS[page] ?? [])]),
    route: { page },
  })),
  {
    id: 'section-weaponsdb',
    title: 'Weapons Database',
    category: 'Section',
    description: 'All 345 weapons with stats, scaling, perks, and locations',
    keywords: ['weapon database', 'all weapons', 'weapon list', 'legendary weapons', ...(SECTION_KEYWORDS.weaponsdb ?? [])],
    route: { page: 'weaponsdb' },
  },
  {
    id: 'section-armor-pieces',
    title: 'Armor Pieces Database',
    category: 'Section',
    description: 'Every individual armor piece — helmets, chests, gloves, legs, boots, shields',
    keywords: ['armor pieces', 'helmet', 'chest', 'gloves', 'boots', 'shield', 'armor database'],
    route: { page: 'armor-pieces' },
  },
];

/* ---------- Subsection entries (every guide page) ---------- */
const subEntries: SearchItem[] = groups.flatMap(([page, subs]) =>
  subs.map((s) => ({
    id: `${page}-${s.id}`,
    title: s.title,
    category: SECTION_NAMES[page] ?? page,
    description: s.summary ?? s.description ?? `${s.title} — Enshrouded guide`,
    keywords: unique([...words(s.title), ...(SECTION_KEYWORDS[page] ?? [])]),
    route: { page, sub: s.id },
  }))
);

/* ---------- Weapon entries (all 345) ---------- */
interface WeaponRow {
  name: string;
  category: string;
  level: number;
  rarity: string;
  location?: string;
  description?: string;
}

const weaponEntries: SearchItem[] = (weaponsData as WeaponRow[]).map((w) => ({
  id: `weapon-${slugify(w.name)}`,
  title: w.name,
  category: 'Weapons',
  description: `${w.rarity} ${w.category} · Lv ${w.level}${w.location ? ` · ${w.location}` : ''}`,
  keywords: unique([
    ...words(w.name),
    w.category.toLowerCase(),
    w.rarity.toLowerCase(),
    'weapon',
    ...(w.location ? words(w.location) : []),
  ]),
  route: { page: 'weaponsdb' },
  href: `/weaponsdb?q=${encodeURIComponent(w.name)}`,
}));

/* ---------- Armor set entries (all tiers) ---------- */
interface ArmorSetRow { id: string; name: string; tier: string }

const armorSetEntries: SearchItem[] = [
  ...sTierArmor, ...aTierArmor, ...bTierArmor, ...cTierArmor,
].map((a: ArmorSetRow) => ({
  id: `armorset-${a.id}`,
  title: a.name,
  category: 'Armor Sets',
  description: `${a.tier}-Tier armor set — pieces, bonuses, and where to find it`,
  keywords: unique([...words(a.name), 'armor', 'set', a.tier.toLowerCase() + '-tier', 'gear']),
  route: { page: 'armor', sub: a.id },
}));

/* ---------- Weapon category pages (/weaponsdb/<cat>) ---------- */
const weaponCatEntries: SearchItem[] = weaponCategories.map((cat) => ({
  id: `weaponcat-${slugify(cat)}`,
  title: `${cat} — Weapon Category`,
  category: 'Weapons',
  description: `All ${cat.toLowerCase()} in Enshrouded with stats, scaling, and locations`,
  keywords: unique([...words(cat), 'weapons', 'list', 'best']),
  route: { page: 'weaponsdb' },
  href: `/weaponsdb/${slugify(cat)}`,
}));

/* ---------- Armor slot pages + every armor piece ---------- */
const ARMOR_SLOTS = ['Helmet', 'Chest', 'Gloves', 'Legs', 'Boots'];

const armorSlotEntries: SearchItem[] = ARMOR_SLOTS.map((slot) => ({
  id: `armorslot-${slugify(slot)}`,
  title: `${slot} Armor — Slot`,
  category: 'Armor Pieces',
  description: `All ${slot.toLowerCase()} armor pieces in Enshrouded with stats and effects`,
  keywords: unique([...words(slot), 'armor', 'list', 'best']),
  route: { page: 'armor-pieces' },
  href: `/armor-pieces/${slugify(slot)}`,
}));

interface ArmorPieceRow {
  name: string;
  slot: string;
  rarity: string;
  level: number;
  setName?: string;
  effect?: string;
}

const armorPieceEntries: SearchItem[] = (allArmorPieces as ArmorPieceRow[]).map((p) => ({
  id: `armorpiece-${slugify(p.name)}`,
  title: p.name,
  category: 'Armor Pieces',
  description: `${p.rarity} ${p.slot} · Lv ${p.level}${p.setName ? ` · ${p.setName}` : ''}`,
  keywords: unique([
    ...words(p.name),
    p.slot.toLowerCase(),
    p.rarity.toLowerCase(),
    'armor',
    ...(p.setName ? words(p.setName) : []),
  ]),
  route: { page: 'armor-pieces' },
  href: `/armor-pieces?q=${encodeURIComponent(p.name)}`,
}));

/* ---------- Boss entries (all 13 detail pages) ---------- */
const bossEntries: SearchItem[] = Object.keys(bossDetails).map((key) => {
  const name = (bossDetails as Record<string, { name?: string }>)[key]?.name ?? humanize(key);
  return {
    id: `boss-${key}`,
    title: name,
    category: 'Bosses',
    description: `${name} boss guide — location, mechanics, weaknesses, strategy, and loot`,
    keywords: unique([...words(name), 'boss', 'how to beat', 'fight', 'strategy', 'loot']),
    route: { page: 'bosses', sub: key },
  };
});

export const searchIndex: SearchItem[] = [
  ...sectionEntries,
  ...subEntries,
  ...weaponCatEntries,
  ...weaponEntries,
  ...armorSlotEntries,
  ...armorPieceEntries,
  ...armorSetEntries,
  ...bossEntries,
];

/* ---------- Shared Fuse instance + helper ---------- */
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.45 },
    { name: 'keywords', weight: 0.25 },
    { name: 'description', weight: 0.2 },
    { name: 'category', weight: 0.1 },
  ],
  threshold: 0.32,
  includeScore: true,
  minMatchCharLength: 2,
});

export function siteSearch(query: string, limit = 12): FuseResult<SearchItem>[] {
  const q = query.trim();
  if (q.length < 2) return [];
  return fuse.search(q).slice(0, limit);
}
