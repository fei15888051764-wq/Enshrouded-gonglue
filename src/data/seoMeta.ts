// SEO metadata registry — unique title + description for every route.
// Google 2026: unique titles/descriptions per page are ranking-critical.
// Sub-entries are auto-generated from each section's data (title + summary),
// so new subsections get SEO metadata automatically.

import { armorSubSections } from './armorData';
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
import { screenshotsSubSections } from './screenshotsData';
import { skillsSubSections } from './skillsData';
import { tipsSubSections } from './tipsData';
import { troubleshootSubSections } from './troubleshootData';
import { updatesSubSections } from './updatesData';
import { walkthroughSubSections } from './walkthroughData';
import { allWeapons, weaponCategories } from './weaponsDatabaseData';
import { allArmorPieces } from './armorPiecesData';

const weaponCategoryCounts: Record<string, number> = {};
for (const cat of weaponCategories) {
  weaponCategoryCounts[cat] = allWeapons.filter(w => w.category === cat).length;
}
const armorSlotNames = ['Helmet', 'Chest', 'Gloves', 'Legs', 'Boots'];
const armorSlotCounts: Record<string, number> = {};
for (const slot of armorSlotNames) {
  armorSlotCounts[slot] = allArmorPieces.filter(p => p.slot === slot).length;
}

export interface SeoMeta {
  title: string;
  description: string;
}

const SITE = 'Enshrouded Guide';

const sectionMeta: Record<string, SeoMeta> = {
  home: {
    title: `${SITE} — Complete Tips, Builds, Patch Notes & Troubleshooting`,
    description: 'The most complete Enshrouded guide covering beginner tips, combat mastery, base building, crafting, character builds, patch notes, troubleshooting, and more. Updated for Update 8: Forging the Path.',
  },
  about: {
    title: `About the Author | ${SITE}`,
    description: 'About GEBILAOWANG — the player behind the most complete Enshrouded fan guide, and how this site is built and maintained.',
  },
  disclaimer: {
    title: `Disclaimer | ${SITE}`,
    description: 'Legal disclaimer — this is an unofficial fan-made guide. Enshrouded is a trademark of Keen Games GmbH.',
  },
  privacy: {
    title: `Privacy Policy | ${SITE}`,
    description: 'Privacy policy for the Enshrouded Guide fan website.',
  },
  weaponsdb: {
    title: `Weapons Database — All 345 Weapons | ${SITE}`,
    description: 'Every weapon in Enshrouded with stats, scaling, perks, locations, and thumbnails — daggers, swords, greatswords, bows, wands, staves, and more.',
  },
  'armor-pieces': {
    title: `Armor Pieces Database | ${SITE}`,
    description: 'Every armor piece in Enshrouded — stats, set bonuses, locations, and how to get them.',
  },
  lore: { title: `Lore & Story | ${SITE}`, description: 'The complete history and mythology of Embervale — characters, factions, writings, and the story so far.' },
  beginner: { title: `Beginner's Guide | ${SITE}`, description: 'Essential tips, first steps, and survival basics for new Enshrouded players.' },
  quests: { title: `Quests Guide — Main Story & NPC Chains | ${SITE}`, description: 'Every quest in Enshrouded — main story walkthrough, all 10 NPC rescue missions, complete NPC quest chains, and building block quests.' },
  skills: { title: `Skills & Skill Trees | ${SITE}`, description: 'Complete skill tree guide for Enshrouded — all branches, the Update 8 rework, and the best nodes for every class.' },
  items: { title: `Items & Materials Database | ${SITE}`, description: 'Every material in Enshrouded — ores, bars, plants, and crafting components with sources and uses.' },
  crafting: { title: `Crafting Guide | ${SITE}`, description: 'Crafting stations, recipes, and production chains in Enshrouded — from workbench basics to endgame materials.' },
  enemies: { title: `Enemies & Creatures | ${SITE}`, description: 'Every enemy type in Enshrouded — Fell, wildlife, undead, and elite variants with weaknesses and drops.' },
  bosses: { title: `All 12 Bosses | ${SITE}`, description: 'Every named boss in Enshrouded — locations, mechanics, weaknesses, strategies, and loot tables.' },
  map: { title: `Map & Locations | ${SITE}`, description: 'Interactive map guide — all biomes, Ancient Spires, Hollow Halls, temples, points of interest, and fast travel.' },
  base: { title: `Base Building Guide | ${SITE}`, description: 'Flame Altar rules, building blocks, comfort system, mills and power systems, farming, and base design.' },
  mechanics: { title: `Game Mechanics | ${SITE}`, description: 'The Shroud, combat, weather, food buffs, traversal, and every core system in Enshrouded explained.' },
  fishing: { title: `Fishing Guide | ${SITE}`, description: 'Complete fishing guide — rods, bait, all fish species, quest chain, hidden loot pools, and pro strategies.' },
  walkthrough: { title: `Complete Walkthrough | ${SITE}`, description: 'Full game walkthrough — every chapter from the Cinder Vault to Veilwater Basin, plus Flame Altar and Hollow Halls guides.' },
  tips: { title: `Tips & Tricks | ${SITE}`, description: 'Advanced tips and hidden mechanics — Update 8 survival guide, efficiency strategies, and obscure tricks.' },
  updates: { title: `Patch Notes & Update History | ${SITE}`, description: 'Every Enshrouded update and hotfix documented — from Early Access launch to v0.9.1.2, plus the 1.0 roadmap.' },
  troubleshoot: { title: `Troubleshooting & Fixes | ${SITE}`, description: 'Fix crashes, performance issues, multiplayer problems, stuck quests, and Update 8 migration issues.' },
  builds: { title: `Character Builds | ${SITE}`, description: 'Meta builds for every class — warrior, ranger, and mage with skills, gear, and playstyle guides.' },
  armor: { title: `Armor Sets Guide | ${SITE}`, description: 'Every armor set in Enshrouded — set bonuses, stats, and where to find them.' },
  screenshots: { title: `Game Screenshots Gallery | ${SITE}`, description: 'Real in-game Enshrouded screenshots — combat, biomes, base building, bosses, the Shroud, gliding, gear systems, co-op, and official key art.' },
};

// Auto-generate sub-page entries from section data
const groups: [string, { id: string; title: string; summary?: string; description?: string }[]][] = [
  ['armor', armorSubSections],
  ['base', baseSubSections],
  ['beginner', beginnerSubSections],
  ['bosses', bossesSubSections],
  ['builds', buildSubSections],
  ['crafting', craftingSubSections],
  ['enemies', enemiesSubSections],
  ['fishing', fishingSubSections],
  ['items', itemsSubSections],
  ['lore', loreSubSections],
  ['map', mapSubSections],
  ['mechanics', mechanicsSubSections],
  ['quests', questsSubSections],
  ['screenshots', screenshotsSubSections],
  ['skills', skillsSubSections],
  ['tips', tipsSubSections],
  ['troubleshoot', troubleshootSubSections],
  ['updates', updatesSubSections],
  ['walkthrough', walkthroughSubSections],
];

const registry: Record<string, SeoMeta> = {};

/* ---- Weapon category pages: /weaponsdb/<category> ---- */
const CAT_SLUG = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const WEAPON_CAT_SEO: Record<string, string> = {
  Daggers: 'fast DEX-scaling daggers for assassin and rogue builds',
  'One-handed Swords': 'versatile one-handed swords for sword-and-board builds',
  'One-handed Axes': 'brutal one-handed axes for strength builds',
  'One-handed Clubs': 'crushing one-handed clubs and maces',
  'Two-handed Greatswords': 'massive greatswords with high stagger damage',
  'Two-handed Axes': 'massive two-handed axes with cleaving attacks',
  'Two-handed Hammers': 'devastating two-handed war hammers',
  'Two-handed Clubs': 'heavy two-handed clubs for pure strength builds',
  Bows: 'long-range bows for ranger and marksman builds',
  'Throwing Weapons': 'throwing knives and javelins for agile ranged fighters',
  Wands: 'quick-casting magic wands for spell-blade builds',
  Staves: 'elemental magic staves for mage builds',
};
for (const cat of weaponCategories) {
  registry[`/weaponsdb/${CAT_SLUG(cat)}`] = {
    title: `${cat} in Enshrouded — All ${weaponCategoryCounts[cat]} With Stats & Locations | ${SITE}`,
    description: `Every ${cat.toLowerCase().replace(/s$/, '')} in Enshrouded: complete list of ${weaponCategoryCounts[cat]} ${WEAPON_CAT_SEO[cat] ?? cat.toLowerCase()}, with damage, scaling, attack speed, perks, and exact drop locations.`,
  };
}

/* ---- Armor slot pages: /armor-pieces/<slot> ---- */
const SLOT_SEO: Record<string, string> = {
  Helmet: 'helmets and head armor',
  Chest: 'chest armor and chestplates',
  Gloves: 'gloves and gauntlets',
  Legs: 'leg armor and greaves',
  Boots: 'boots and footwear',
};
for (const slot of armorSlotNames) {
  registry[`/armor-pieces/${CAT_SLUG(slot)}`] = {
    title: `${slot} Armor in Enshrouded — All ${armorSlotCounts[slot]} Pieces | ${SITE}`,
    description: `Complete list of ${armorSlotCounts[slot]} ${SLOT_SEO[slot] ?? slot.toLowerCase()} in Enshrouded — armor values, bonus effects, rarities, levels, and which sets they belong to.`,
  };
}

for (const [page, subs] of groups) {
  for (const s of subs) {
    registry[`/${page}/${s.id}`] = {
      title: `${s.title} | ${SITE}`,
      description: s.summary ?? s.description ?? `Complete ${s.title} guide for Enshrouded — strategies, locations, and expert tips.`,
    };
  }
}

export function getSeoMeta(pathname: string): SeoMeta {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return sectionMeta.home;

  if (registry[clean]) return registry[clean];

  const segs = clean.split('/').filter(Boolean);
  if (segs.length === 1 && sectionMeta[segs[0]]) return sectionMeta[segs[0]];

  // Boss detail pages: /bosses/<boss-slug>
  if (segs[0] === 'bosses' && segs[1]) {
    const name = segs[1]
      .split('-')
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(' ');
    return {
      title: `${name} — Boss Guide | ${SITE}`,
      description: `How to beat ${name} in Enshrouded — location, mechanics, weaknesses, strategy, and loot.`,
    };
  }

  return sectionMeta.home;
}
