// Latest site updates feed — newest entry FIRST.
// The homepage renders at most the first 5 entries; when new content ships,
// prepend a new entry here and the oldest one automatically drops off.

export interface LatestUpdate {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  route: { page: string; sub?: string };
}

export const latestUpdates: LatestUpdate[] = [
  {
    id: 'tips-updates-trouble-armor-galleries',
    category: 'Tips, Updates & Armor',
    title: 'Final Gallery Batch: Tips, Updates, Troubleshooting & Armor',
    summary: 'Every Tips & Tricks, Patch Notes, Troubleshooting and Armor Set page now shows real game imagery — completing galleries across the entire site.',
    date: 'Jul 21, 2026',
    image: '/images/beginner/character-customize.webp',
    route: { page: 'tips', sub: 'beginner-tips' },
  },
  {
    id: 'mechanics-fishing-galleries',
    category: 'Mechanics & Fishing',
    title: 'Galleries Added to Mechanics & Fishing Pages',
    summary: 'All 10 mechanics guides and 9 fishing pages now show real game imagery — shroud survival, combat systems, and the complete angler’s life.',
    date: 'Jul 20, 2026',
    image: '/images/beginner/underwater-swim.webp',
    route: { page: 'fishing', sub: 'getting-started' },
  },
  {
    id: 'quests-lore-galleries',
    category: 'Quests & Lore',
    title: 'Galleries Added to Quests & Lore Pages',
    summary: 'All 10 quest guides and 15 lore chapters now show real game imagery — NPC rescues, dungeon quests, the Shroud, the Ancients, and the Drak.',
    date: 'Jul 20, 2026',
    image: '/images/guides/spire-map.webp',
    route: { page: 'lore', sub: 'the-shroud' },
  },
  {
    id: 'base-crafting-items-galleries',
    category: 'Base, Crafting & Items',
    title: 'Galleries Added to Base, Crafting & Items Pages',
    summary: 'All 26 pages across Base Building, Crafting, and Items now show real game imagery — stations, storage, farming, and material chains.',
    date: 'Jul 20, 2026',
    image: '/images/guides/building-house.webp',
    route: { page: 'base', sub: 'base-overview' },
  },
  {
    id: 'map-walkthrough-galleries',
    category: 'Map & Walkthrough',
    title: 'Galleries Added to Map & Walkthrough Pages',
    summary: 'All 11 map pages and 14 walkthrough chapters now show biome-accurate screenshots — snow for Albaneve, water for Veilwater, shroud for Blackmire.',
    date: 'Jul 20, 2026',
    image: '/images/beginner/glider-mountains-snow.webp',
    route: { page: 'map', sub: 'biome-albaneve' },
  },
  {
    id: 'bosses-enemies-galleries',
    category: 'Bosses & Enemies',
    title: 'Galleries Added to All Boss & Enemy Pages',
    summary: 'All 8 enemy family guides, 6 boss section pages, and 13 individual boss guides now show real combat screenshots matched to each encounter.',
    date: 'Jul 20, 2026',
    image: '/images/guides/combat-boss.webp',
    route: { page: 'bosses', sub: 'fell-dragon-youngling' },
  },
  {
    id: 'skills-builds-galleries',
    category: 'Skills & Builds',
    title: 'Galleries Added to All Skills & Builds Pages',
    summary: 'All 5 Skills guides and 10 character builds now show real game imagery — official artwork, gameplay captures, and weapon thumbnails matched to each build\'s arsenal.',
    date: 'Jul 20, 2026',
    image: '/images/builds/pact-of-the-flame-art.webp',
    route: { page: 'builds', sub: 'berserker-barbarian' },
  },
  {
    id: 'beginner-galleries',
    category: "Beginner's Guide",
    title: 'Real Screenshots Added to All 20 Beginner Guides',
    summary: 'Every Beginner\'s Guide subsection now has an in-game gallery — 51 placements across official Steam screenshots, official update artwork, and curated gameplay captures, all served locally in WebP.',
    date: 'Jul 20, 2026',
    image: '/images/beginner/glide-clouds-sunset.webp',
    route: { page: 'beginner', sub: 'getting-started' },
  },
  {
    id: 'weapon-thumbnails-seo',
    category: 'Weapons Database',
    title: 'Weapon Thumbnails Live + Per-Page SEO Overhaul',
    summary: '206 weapon thumbnails are now displayed directly in the Weapons Database, and every one of the 180+ pages now has its own unique title, description, and canonical URL for search engines.',
    date: 'Jul 20, 2026',
    image: '/images/guides/inventory-backpack.webp',
    route: { page: 'weaponsdb' },
  },
  {
    id: 'troubleshoot-update8',
    category: 'Troubleshooting',
    title: 'Update 8 Migration Issues & Stuck Quest Fixes',
    summary: 'Returning player? Diagnose missing skill points, weaker armor, flooded bases, and shader stutter — plus official workarounds for Treacherous Waters, Mill floodgates, and stuck-in-geometry.',
    date: 'Jul 20, 2026',
    image: '/images/guides/combat-dodge.webp',
    route: { page: 'troubleshoot', sub: 'update8-migration' },
  },
  {
    id: 'mechanics-weather',
    category: 'Game Mechanics',
    title: 'Weather & Environment System Guide',
    summary: 'Dynamic weather decoded — the Wetness debuff, rain stealth bonuses, deep snow slowdown, slippery ice, and body heat management in Albaneve.',
    date: 'Jul 20, 2026',
    image: '/images/guides/glider-mountains.webp',
    route: { page: 'mechanics', sub: 'weather-system' },
  },
  {
    id: 'base-altar-mills',
    category: 'Base Building',
    title: 'Flame Altar Rules + Mills & Power Systems',
    summary: 'The 30-minute rollback rule, the 10-altar cap, sky-base leapfrogging, server permission roles — and how to power the Mill for Iron Dust production.',
    date: 'Jul 20, 2026',
    image: '/images/guides/building-house.webp',
    route: { page: 'base', sub: 'altar-mechanics' },
  },
  {
    id: 'updates-timeline',
    category: 'Patch Notes',
    title: 'Complete Version Timeline + Hotfix Corrections',
    summary: 'Every version from v0.1.0 to v0.9.1.2 in one table — all updates, patches, and 42 hotfixes, with the Hotfix #36 misattribution corrected.',
    date: 'Jul 20, 2026',
    image: '/images/guides/spire-map.webp',
    route: { page: 'updates', sub: 'version-timeline' },
  },
];
