export interface EnemyEntry {
  name: string;
  faction: string;
  type: string;
  level: string;
  biome: string;
  desc: string;
  drops: string;
  weak: string;
  category: string;
}

export const enemyCategories = [
  'Fell',
  'Scavenger',
  'Vukah',
  'Hollow',
  'Wildlife',
  'Drak',
  'Shroud Entity',
] as const;

export const FACTION_COLORS: Record<string, string> = {
  Fell: 'text-purple-400',
  Scavenger: 'text-orange-400',
  Vukah: 'text-green-400',
  Hollow: 'text-blue-400',
  Wildlife: 'text-yellow-400',
  Drak: 'text-teal-400',
  'Shroud Entity': 'text-red-400',
};

export const allEnemies: EnemyEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // FELL — Shroud-corrupted creatures (17 enemies, no bosses)
  // ═══════════════════════════════════════════════════════════
  { name: 'Fell Footsoldier', faction: 'Fell', type: 'Melee', level: '1-10', biome: 'All Shroud areas', desc: 'Basic Fell infantry. Humanoid corrupted by Shroud. Most common enemy type. Attacks with rusty weapons in swarms.', drops: 'Shroud Spores, Torn Cloth, Rusty Sword', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Fell Beetle', faction: 'Fell', type: 'Critter', level: '1-10', biome: 'All Shroud areas', desc: 'Basic Fell creature. Slow but numerous. Often the first enemy encountered by new players.', drops: 'Shroud Spores, Critter Parts', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Red Beetle', faction: 'Fell', type: 'Critter', level: '1-5', biome: 'Springlands', desc: 'Smaller variant of Fell Beetle. Weaker but attacks in larger groups. Common in starter areas.', drops: 'Shroud Spores, Critter Parts', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Exploding Fell Beetle', faction: 'Fell', type: 'Critter', level: '15-25', biome: 'Nomad Highlands, Kindlewastes', desc: 'Self-destructs when close to player. High damage explosion. Kill at range before they get close.', drops: 'Shroud Spores, Black Powder', weak: 'Fire, Ice', category: 'Fell' },
  { name: 'Fell Boar', faction: 'Fell', type: 'Beast', level: '10-15', biome: 'Revelwood, Blackmire', desc: 'Aggressive corrupted boar. Charges at player with surprising speed. Medium threat in groups.', drops: 'Raw Game, Corrupted Boar Tusk', weak: 'Piercing, Fire', category: 'Fell' },
  { name: 'Fell Spitting Plant', faction: 'Fell', type: 'Stationary', level: '10-15', biome: 'Revelwood, mud pits', desc: 'Stationary plant that shoots poison projectiles. Ranged threat that cannot move but has good range.', drops: 'Poison Sack, Shroud Sack', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Fell Knight', faction: 'Fell', type: 'Armored', level: '20-30', biome: 'Kindlewastes', desc: 'Heavily armored Fell warrior. Uses sword and shield effectively. Blocks frontal attacks.', drops: 'Metal Scraps, Corrosive Blood', weak: 'Blunt, Shock', category: 'Fell' },
  { name: 'Fell Commander', faction: 'Fell', type: 'Elite', level: '25-35', biome: 'Kindlewastes, Albaneve', desc: 'Elite Fell unit in full Guard of the North armor. Blocks attacks with shield and commands nearby Fell.', drops: 'Legendary Runes, Corrosive Blood, Gems', weak: 'Blunt, Fire', category: 'Fell' },
  { name: 'Fell Banshee', faction: 'Fell', type: 'Flying', level: '20-35', biome: 'Kindlewastes, Albaneve', desc: 'Flying Fell creature. Screams to disorient player. Uses ranged magic attacks from above.', drops: 'Aerated Banshee Gel, Gems', weak: 'Piercing, Ice', category: 'Fell' },
  { name: 'Fell Draconian Vulture', faction: 'Fell', type: 'Flying', level: '20-30', biome: 'Kindlewastes', desc: 'Corrupted flying vulture. Attacks from above with dive-bomb strikes. Difficult to hit with melee.', drops: 'Raw Bird Meat, Enshrouded Vulture Talon', weak: 'Piercing, Fire', category: 'Fell' },
  { name: 'Fell Mushroom Crab', faction: 'Fell', type: 'Beast', level: '15-20', biome: 'Nomad Highlands', desc: 'Large crab-like creature with mushroom growths on its shell. Slow but hard-hitting melee attacks.', drops: 'Mint Mushroom Meat, Poison Sack', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Fell Cicada', faction: 'Fell', type: 'Flying', level: '5-15', biome: 'Springlands, Nomad Highlands', desc: 'Shroud-corrupted cicada. Flying insect that attacks in swarms during Shroud events. Annoying but weak.', drops: 'Shroud Spores, Bug Dust', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Corrupted Wolf', faction: 'Fell', type: 'Beast', level: '5-15', biome: 'Shroud areas', desc: 'Wolf corrupted by Shroud. More aggressive than normal wolves. Glows with Shroud energy.', drops: 'Raw Wolf Meat, Animal Fur, Shroud Spores', weak: 'Fire, Cutting', category: 'Fell' },
  { name: 'Shroud Wolf', faction: 'Fell', type: 'Beast', level: '15-25', biome: 'Deep Shroud', desc: 'Fully Shroud-corrupted wolf. High damage and speed. Extremely dangerous when encountered in packs.', drops: 'Raw Wolf Meat, Shroud Spores, Animal Fur', weak: 'Fire, Cutting', category: 'Fell' },

  // ═══════════════════════════════════════════════════════════
  // SCAVENGER — Elixir-corrupted humans (8 enemies)
  // ═══════════════════════════════════════════════════════════
  { name: 'Scavenger Berserker', faction: 'Scavenger', type: 'Melee', level: '5-35', biome: 'All regions', desc: 'Dual-wielding melee fighter. Fast attacks. Most common Scavenger type. Rushes player aggressively.', drops: 'Metal Scraps, Torn Cloth, Gems', weak: 'Cutting, Fire', category: 'Scavenger' },
  { name: 'Scavenger Ranged', faction: 'Scavenger', type: 'Ranged', level: '5-30', biome: 'All regions', desc: 'Archer that attacks from distance. Low health but can chip away at your health while berserkers engage.', drops: 'Metal Scraps, Wooden Arrows, Torn Cloth', weak: 'Piercing, Rush and melee', category: 'Scavenger' },
  { name: 'Scavenger Scalper', faction: 'Scavenger', type: 'Melee', level: '5-25', biome: 'All regions', desc: 'Fast dagger wielder. High critical damage. Can burst down low-armor players quickly.', drops: 'Metal Scraps, Torn Cloth, Dagger', weak: 'Blunt, Fire', category: 'Scavenger' },
  { name: 'Scavenger Guard', faction: 'Scavenger', type: 'Armored', level: '10-25', biome: 'Settlements', desc: 'Scavenger defending camps and settlements. Uses shield and spear. Good at blocking attacks.', drops: 'Metal Scraps, Torn Cloth', weak: 'Blunt, Fire', category: 'Scavenger' },
  { name: 'Scavenger Wolf', faction: 'Scavenger', type: 'Beast', level: '5-25', biome: 'All regions', desc: 'Tamed wolf accompanying Scavengers. Fast and aggressive. Often attacks alongside Scavenger masters.', drops: 'Raw Wolf Meat, Animal Fur', weak: 'Cutting, Fire', category: 'Scavenger' },
  { name: 'Elite Scavenger', faction: 'Scavenger', type: 'Elite', level: '20-35', biome: 'All regions (rare)', desc: 'Rare elite version of Scavenger Berserker. Higher health and damage. Gold/unique appearance.', drops: 'Legendary Runes, Metal Scraps, Gems', weak: 'Fire, Cutting', category: 'Scavenger' },

  // ═══════════════════════════════════════════════════════════
  // VUKAH — Ancient beastmen (5 enemies, no boss)
  // ═══════════════════════════════════════════════════════════
  { name: 'Vukah Warrior', faction: 'Vukah', type: 'Melee', level: '10-20', biome: 'Revelwood, Blackmire, Nomad Highlands', desc: 'Basic Vukah foot soldier. Uses primitive clubs and spears. Territorial and aggressive.', drops: 'Animal Fur, Resin, Wooden Club', weak: 'Fire, Cutting', category: 'Vukah' },
  { name: 'Vukah Shaman', faction: 'Vukah', type: 'Mage', level: '12-20', biome: 'Revelwood, Blackmire', desc: 'Magic-using Vukah. Casts spells and buffs allies. High priority target in groups.', drops: 'Resin, Animal Fur, Shroud Spores', weak: 'Piercing, Shock', category: 'Vukah' },
  { name: 'Vukah Berserker', faction: 'Vukah', type: 'Melee', level: '15-25', biome: 'Revelwood, Nomad Highlands', desc: 'Aggressive melee Vukah with high damage output. Fast combo attacks. Difficult to block.', drops: 'Animal Fur, Resin, Gems', weak: 'Blunt, Fire', category: 'Vukah' },
  { name: 'Vukah Spear-thrower', faction: 'Vukah', type: 'Ranged', level: '12-18', biome: 'Blackmire', desc: 'Ranged Vukah that throws spears from distance. Accurate and damaging. Close the gap quickly.', drops: 'Resin, Animal Fur, Wooden Spears', weak: 'Piercing, Rush', category: 'Vukah' },
  { name: 'Vukah Skullguard', faction: 'Vukah', type: 'Armored', level: '15-20', biome: 'Blackmire', desc: 'Heavily armored Vukah wearing large skull masks. High defense. Slow but powerful strikes.', drops: 'Animal Fur, Resin, Metal Scraps', weak: 'Blunt, Shock', category: 'Vukah' },

  // ═══════════════════════════════════════════════════════════
  // HOLLOW — Undead cursed by The Flame (8 enemies, no boss)
  // ═══════════════════════════════════════════════════════════
  { name: 'Hollow Hound', faction: 'Hollow', type: 'Beast', level: '10-30', biome: 'Cemeteries, Catacombs, Hollow Halls', desc: 'Undead dog. Fast and aggressive. Found in all Hollow areas. Often in packs.', drops: 'Bones, Salt, Ectoplasm Fragment', weak: 'Fire, Cutting', category: 'Hollow' },
  { name: 'Hollow Hound Alpha', faction: 'Hollow', type: 'Elite', level: '25-40', biome: 'Hollow Halls endgame', desc: 'Larger, more powerful version of Hollow Hound. Leads packs. High damage and health.', drops: 'Ectoplasm Crystal, Bones, Legendary Runes', weak: 'Fire, Blunt', category: 'Hollow' },
  { name: 'Hollow Skeleton', faction: 'Hollow', type: 'Melee', level: '10-35', biome: 'Cemeteries, Catacombs, Hollow Halls', desc: 'Basic undead warrior. Uses sword and shield. Medium threat. Very common in Hollow areas.', drops: 'Bones, Salt, Ectoplasm Fragment', weak: 'Blunt, Fire', category: 'Hollow' },
  { name: 'Hollow Archer', faction: 'Hollow', type: 'Ranged', level: '15-30', biome: 'Cemeteries, Hollow Halls', desc: 'Undead archer. Shoots arrows from distance. Low health but dangerous in groups.', drops: 'Bones, Salt, Ectoplasm Fragment, Wooden Arrows', weak: 'Fire, Piercing', category: 'Hollow' },
  { name: 'Hollow Reaper', faction: 'Hollow', type: 'Elite', level: '20-35', biome: 'Revelwood Hollow Halls, Albaneve', desc: 'Elite undead with scythe. High damage. Spawns in higher level Hollow Halls. Bleed attacks.', drops: 'Bones, Salt, Ectoplasm Shard, Gems', weak: 'Fire, Blunt', category: 'Hollow' },
  { name: 'Hollow Mage', faction: 'Hollow', type: 'Mage', level: '25-35', biome: 'Hollow Halls, Albaneve', desc: 'Undead spellcaster. Casts ice and dark magic. High magic resistance. Kill from range.', drops: 'Ectoplasm Shard, Shroud Spores, Bones, Gems', weak: 'Shock, Fire', category: 'Hollow' },
  { name: 'Hollow Wraith', faction: 'Hollow', type: 'Elite', level: '25-40', biome: 'Hollow Halls endgame', desc: 'Ghostly apparition. Phases through attacks occasionally. High magic resistance.', drops: 'Ectoplasm Crystal, Bones, Legendary Runes', weak: 'Shock, Fire', category: 'Hollow' },
  { name: 'Shroud Stalker', faction: 'Hollow', type: 'Ambush', level: '20-40', biome: 'Deep Shroud, Hollow Halls', desc: 'Invisible until close. Ambush predator. High burst damage. Use detection or AoE to reveal.', drops: 'Ectoplasm Shard, Shroud Core', weak: 'Shock, Fire', category: 'Hollow' },

  // ═══════════════════════════════════════════════════════════
  // WILDLIFE — Animals (25+ enemies)
  // ═══════════════════════════════════════════════════════════
  // Passive
  { name: 'Goat', faction: 'Wildlife', type: 'Passive', level: '1', biome: 'Springlands, Nomad Highlands', desc: 'Passive herbivore. Runs when approached. Good early food source. Tameable.', drops: 'Raw Lean Meat, Animal Fur', weak: 'N/A', category: 'Wildlife' },
  { name: 'Hophare', faction: 'Wildlife', type: 'Passive', level: '1', biome: 'Springlands', desc: 'Rabbit-like creature. Tameable. Fast and skittish. Cute but provides good meat.', drops: 'Raw Lean Meat, Animal Fur', weak: 'N/A', category: 'Wildlife' },
  { name: 'Fae Deer', faction: 'Wildlife', type: 'Passive', level: '5', biome: 'Revelwood, Blackmire', desc: 'Magical deer with glowing markings. Tameable. Provides milk when tamed.', drops: 'Raw Game, Uncooked Fae Deer Milk', weak: 'N/A', category: 'Wildlife' },
  { name: 'Capybara', faction: 'Wildlife', type: 'Passive', level: '25', biome: 'Veilwater Basin', desc: 'Large friendly rodent. Found near water. Tameable. Very docile.', drops: 'Capybara Bristles, Raw Meat', weak: 'N/A', category: 'Wildlife' },
  { name: 'Flightless Redtail', faction: 'Wildlife', type: 'Passive', level: '10', biome: 'Nomad Highlands', desc: 'Large flightless bird. Tameable. Runs fast when threatened. Good source of eggs.', drops: 'Raw Bird Meat, Feathers, Flightless Redtail Egg', weak: 'N/A', category: 'Wildlife' },
  { name: 'Frizzy Goat', faction: 'Wildlife', type: 'Passive', level: '25', biome: 'Albaneve Summits', desc: 'Mountain goat with frizzy wool. Tameable. Hardy cold-weather animal.', drops: 'Raw Lean Meat, Animal Fur, Frizzy Goat Milk', weak: 'N/A', category: 'Wildlife' },
  { name: 'Yak', faction: 'Wildlife', type: 'Passive', level: '25', biome: 'Albaneve Summits', desc: 'Large mountain bovine. Tameable. Slow but provides abundant resources.', drops: 'Raw Lean Meat, Animal Fur, Yak Milk', weak: 'N/A', category: 'Wildlife' },
  { name: 'Dune Armadillo', faction: 'Wildlife', type: 'Passive', level: '20-25', biome: 'Kindlewastes', desc: 'Armored desert creature. Rolls into ball when threatened. Tameable.', drops: 'Raw Dune Armadillo Meat, Scales', weak: 'N/A', category: 'Wildlife' },
  { name: 'Fire Fly', faction: 'Wildlife', type: 'Passive', level: '1', biome: 'Blackmire, Springlands', desc: 'Bioluminescent flying insect. Passive. Produces Glow Dust when harvested.', drops: 'Glow Dust, Bug Dust', weak: 'N/A', category: 'Wildlife' },
  { name: 'Moth', faction: 'Wildlife', type: 'Passive', level: '1', biome: 'Night areas, Shroud', desc: 'Night-flying insect attracted to light sources. Harmless.', drops: 'Bug Dust, Fur Patch', weak: 'N/A', category: 'Wildlife' },
  // Aggressive
  { name: 'Wolf', faction: 'Wildlife', type: 'Aggressive', level: '3-10', biome: 'Springlands, Nomad Highlands', desc: 'Packs of 3-5. Fast and dangerous for new players. Will chase over long distances.', drops: 'Raw Wolf Meat, Animal Fur, Wolf Fur', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Boar', faction: 'Wildlife', type: 'Aggressive', level: '8-15', biome: 'Revelwood, Blackmire', desc: 'Aggressive wild pig. Charges at player. Medium threat. Good source of meat.', drops: 'Raw Game, Bones, Corrupted Boar Tusk', weak: 'Piercing, Fire', category: 'Wildlife' },
  { name: 'Sabertooth Tiger', faction: 'Wildlife', type: 'Aggressive', level: '15-20', biome: 'Nomad Highlands', desc: 'Powerful predator. High burst damage. Stealth attacks from tall grass.', drops: 'Raw Game, Animal Fur, Sabertooth Fang', weak: 'Fire, Piercing', category: 'Wildlife' },
  { name: 'Draconian Vulture', faction: 'Wildlife', type: 'Flying', level: '20-30', biome: 'Kindlewastes', desc: 'Flying predator in desert. Attacks from above. Difficult to hit with melee.', drops: 'Raw Bird Meat, Enshrouded Vulture Talon, Feathers', weak: 'Piercing, Ice', category: 'Wildlife' },
  { name: 'Scorpion', faction: 'Wildlife', type: 'Aggressive', level: '20-25', biome: 'Kindlewastes', desc: 'Poisonous desert predator. Sting causes poison DOT. Keep antiseptic ready.', drops: 'Venom Stinger, Chitin', weak: 'Fire, Blunt', category: 'Wildlife' },
  { name: 'Snapjaw', faction: 'Wildlife', type: 'Ambush', level: '10-15', biome: 'Blackmire', desc: 'Alligator-like creature in mud/tar pits. Ambush predator. High burst damage.', drops: 'Reptile Hide, Raw Meat', weak: 'Piercing, Shock', category: 'Wildlife' },
  { name: 'Giant Wasp', faction: 'Wildlife', type: 'Flying', level: '10-15', biome: 'Blackmire', desc: 'Flying insect. Poison sting. Attacks in swarms. Dangerous in groups.', drops: 'Bug Dust, Poison Sack', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Mushroom Crab', faction: 'Wildlife', type: 'Aggressive', level: '8-12', biome: 'Revelwood', desc: 'Crab with mushroom growth on shell. Not tameable. Slow but hard-hitting.', drops: 'Mushroom Flesh, Poison Sack', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Spitting Plant', faction: 'Wildlife', type: 'Stationary', level: '8-12', biome: 'Revelwood, mud pits', desc: 'Stationary plant. Shoots poison projectiles. Cannot move. Kill from range.', drops: 'Poison Sack, Shroud Sack', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Bat', faction: 'Wildlife', type: 'Flying', level: '1-10', biome: 'Caves, Cemeteries', desc: 'Flying creature in dark areas. Attacks in groups. Low individual threat.', drops: 'Fur Patch, Bat Wing', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Spider', faction: 'Wildlife', type: 'Aggressive', level: '1-15', biome: 'Crypts, Caves', desc: 'Web-shooting predator. Poison bite. Can slow player with webs.', drops: 'Spider Gland, Critter Parts, String', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Rat', faction: 'Wildlife', type: 'Passive', level: '1-5', biome: 'Ruins, Settlements', desc: 'Small rodent. Mostly passive but can bite if cornered.', drops: 'Raw Lean Meat, Fur Patch', weak: 'Any', category: 'Wildlife' },
  { name: 'Bees', faction: 'Wildlife', type: 'Aggressive', level: '1-5', biome: 'Springlands, meadows', desc: 'Defends hives aggressively. Swarm attacks cause poison. Found near flowers.', drops: 'Honey, Wax, Bug Dust', weak: 'Fire, Cutting', category: 'Wildlife' },
  { name: 'Snow Leopard', faction: 'Wildlife', type: 'Aggressive', level: '25-35', biome: 'Albaneve Summits', desc: 'Elite predator of snowy peaks. Stealth attacks. High burst damage. Extremely dangerous.', drops: 'Raw Game, Animal Fur, Snow Leopard Fang', weak: 'Fire, Piercing', category: 'Wildlife' },
  { name: 'Frost Wisp', faction: 'Wildlife', type: 'Flying', level: '25-35', biome: 'Albaneve Summits', desc: 'Icy variant of Wisp. Splits into multiple hostiles when approached. Frost damage.', drops: 'Frost Essence, Shroud Spores', weak: 'Fire, Shock', category: 'Wildlife' },
  { name: 'Frost Draconian Vulture', faction: 'Wildlife', type: 'Flying', level: '25-35', biome: 'Albaneve Summits', desc: 'Frozen variant of Draconian Vulture. Breathes ice. Highly dangerous.', drops: 'Raw Bird Meat, Frost Vulture Talon, Feathers', weak: 'Fire, Piercing', category: 'Wildlife' },

  // ═══════════════════════════════════════════════════════════
  // DRAK — Reptilian invaders (5 enemies, no boss)
  // ═══════════════════════════════════════════════════════════
  { name: 'Drak Warrior', faction: 'Drak', type: 'Melee', level: '30-35', biome: 'Veilwater Basin', desc: 'Basic Drak foot soldier. Reptilian humanoid. Uses crude weapons. Aggressive and territorial.', drops: 'Drak Blood, Drak Scales, Drak Claws, Raw Meat', weak: 'Ice, Piercing', category: 'Drak' },
  { name: 'Drak Scout', faction: 'Drak', type: 'Ranged', level: '30-35', biome: 'Veilwater Basin', desc: 'Fast Drak reconnaissance unit. Uses hit-and-run tactics. Often signals other Drak to attack.', drops: 'Drak Blood, Drak Scales, Feathers', weak: 'Ice, Cutting', category: 'Drak' },
  { name: 'Drak Shaman', faction: 'Drak', type: 'Mage', level: '32-38', biome: 'Veilwater Basin', desc: 'Drak spellcaster. Casts poison and dark magic. Buffs nearby Drak allies. High priority target.', drops: 'Drak Blood, Drak Scales, Shroud Spores', weak: 'Ice, Shock', category: 'Drak' },
  { name: 'Drak Brute', faction: 'Drak', type: 'Elite', level: '35-40', biome: 'Veilwater Basin', desc: 'Massive hulking Drak. Extreme health and damage. Slow but devastating attacks. Tank of the group.', drops: 'Drak Blood, Drak Scales, Legendary Runes', weak: 'Ice, Blunt', category: 'Drak' },
  { name: 'Drak Elder', faction: 'Drak', type: 'Elite', level: '38-42', biome: 'Veilwater Basin (deep)', desc: 'Ancient Drak leader. Powerful magic and melee. Commands other Drak in combat. Very rare.', drops: 'Drak Blood, Drak Scales, Legendary Runes, Gems', weak: 'Ice, Fire', category: 'Drak' },

  // ═══════════════════════════════════════════════════════════
  // SHROUD ENTITY — Pure Shroud manifestations (2 enemies)
  // ═══════════════════════════════════════════════════════════
  { name: 'Wisp', faction: 'Shroud Entity', type: 'Flying', level: '10-20', biome: 'Blackmire, deep Shroud', desc: 'Floating light that splits into multiple hostile creatures when approached. Surprisingly dangerous.', drops: 'Shroud Spores, Shroud Liquid', weak: 'Fire, Shock', category: 'Shroud Entity' },
  { name: 'Shroud Root', faction: 'Shroud Entity', type: 'Stationary', level: 'Varies', biome: 'All Shroud areas', desc: 'Large pulsating growth in Shroud. Destroying it grants a skill point and reduces local Shroud.', drops: 'Shroud Spores, Shroud Liquid, Skill Point', weak: 'Fire, Cutting', category: 'Shroud Entity' },
];
