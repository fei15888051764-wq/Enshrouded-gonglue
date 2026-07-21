export interface BossEntry {
  name: string;
  faction: string;
  level: string;
  region: string;
  difficulty: string;
  flameAltar: string;
  quest: string;
  desc: string;
  effective: string;
  resisted: string;
  drops: string;
  attacks: string;
  strategy: string;
  category: string;
  respawn: string;
}

export const bossCategories = [
  'Fell',
  'Scavenger',
  'Vukah',
  'Hollow',
  'Cyclops',
  'Drak',
] as const;

export const FACTION_COLORS: Record<string, string> = {
  Fell: 'text-purple-400',
  Scavenger: 'text-orange-400',
  Vukah: 'text-green-400',
  Hollow: 'text-blue-400',
  Cyclops: 'text-cyan-400',
  Drak: 'text-teal-400',
};

export const DIFFICULTY_COLORS: Record<string, { dot: string; text: string; border: string }> = {
  Easy:      { dot: 'bg-green-400',    text: 'text-green-400',    border: 'border-green-500/30' },
  Medium:    { dot: 'bg-yellow-400',   text: 'text-yellow-400',   border: 'border-yellow-500/30' },
  Hard:      { dot: 'bg-orange-400',   text: 'text-orange-400',   border: 'border-orange-500/30' },
  'Very Hard': { dot: 'bg-red-400',    text: 'text-red-400',      border: 'border-red-500/30' },
  Extreme:   { dot: 'bg-red-600',      text: 'text-red-600',      border: 'border-red-700/30' },
};

export const allBosses: BossEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // FELL — 7 bosses (purple, Shroud-corrupted)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Fell Thunderbrute',
    faction: 'Fell', level: '5',
    region: 'Springlands, Low Meadows, Revelwood, Nomad Highlands, Kindlewastes',
    difficulty: 'Medium', flameAltar: '—', quest: '—',
    desc: 'Enshrouded\'s first proper miniboss — a hulking brute posted to guard Elixir Wells and Shroud Roots across nearly every biome. Serves as your first real gear check. Repeatable farmable elite.',
    effective: 'Fire, Shroud', resisted: 'Ice',
    drops: 'Fell Thunderbrute Head, Shroud Core x1, Runes x22, Fell Commander\'s Bow (rare, Ancient Bridge only)',
    attacks: 'Three-hit melee combo ending with ground slam; Lightning-charged slam with massive AoE shockwave; Enrage at 30% HP — attack speed increases significantly',
    strategy: 'Bait a heavy swing, dodge through it, and punish the recovery. Ranged attacks are safest between combos. Use fire arrows from distance. When he raises both arms, dodge sideways immediately.',
    category: 'Fell', respawn: '2-3 in-game hours (~20-30 min real time)',
  },
  {
    name: 'Fell Critter Queen',
    faction: 'Fell', level: '15-25',
    region: 'Revelwood, Nomad Highlands, Kindlewastes',
    difficulty: 'Hard', flameAltar: '—', quest: '—',
    desc: 'A miniboss that defends Elixir Wells, Shroud Roots, and other Shroud points of interest. A repeatable Shroud guardian — expect to fight several.',
    effective: 'Fire', resisted: 'Shroud',
    drops: 'Giant Critter Scales x1-4, Legendary Runes x2-5, Runes x10-20',
    attacks: 'Spawns small Fell critters constantly; Melee swipes with poison claws — applies poison DOT; Ground pound AoE that applies poison',
    strategy: 'Clear smaller critters first, watch the Shroud timer while in the lair. AoE damage is essential — clear adds while damaging the boss. Fire staff with Meteor or greatsword with Whirlwind Crescendo.',
    category: 'Fell', respawn: 'Server/region reset',
  },
  {
    name: 'Fell Wispwyvern',
    faction: 'Fell', level: '15',
    region: 'Revelwood — The Pike, above Pikemead\'s Reach',
    difficulty: 'Hard', flameAltar: 'Lv 3', quest: 'Reach The Capital, Pikemead\'s Reach',
    desc: 'The wyvern nesting at The Pike above Pikemead\'s Reach. Downing it completes the quest and its head feeds the Flame Altar\'s third upgrade.',
    effective: 'Shroud, Fire', resisted: 'Ice',
    drops: 'Fell Wispwyvern Head (Flame Altar Lv 3), Shroud Cores, Legendary Runes, Commander\'s Ring, Key to The Pike',
    attacks: 'Shroud Spray: rains Shroud projectiles on reticle-marked ground; Shroud Breath: frontal cone — roll to flank; Pounce: leaps and slams down; Tail Sweep: melee at rear; Roar to summon Fell Beetles — hit open mouth mid-roar to stun and cancel',
    strategy: 'The roar is your opening: strike its open mouth while summoning to stun and skip the beetle swarm. Stick to flanks, dodge pounce by leaving your marker. Shroud-resistant gear tames the spray chip.',
    category: 'Fell', respawn: 'Quest-locked (one-time)',
  },
  {
    name: 'Fell Monstrosity',
    faction: 'Fell', level: '18',
    region: 'Nomad Highlands, Kindlewastes — beside calcified statues',
    difficulty: 'Hard', flameAltar: 'Lv 4', quest: 'A Black Cauldron For The Alchemist',
    desc: 'A horror stitched together by sorcerer Ikora using Shroud Spores and the Black Cauldron. Its head unlocks the Flame Altar\'s fourth upgrade.',
    effective: 'Fire', resisted: 'Shroud',
    drops: 'Fell Monstrosity Head (Flame Altar Lv 4), Monstrous Ribs x1-3, Shroud Nexus, Legendary Runes, Black Cauldron (Cradle of Dusk only)',
    attacks: 'Shroud Spray: lobs Shroud projectiles at marked ground; Shroud Breath: exhales damage in straight line — strafe out; Ground slam AoE; Spawns Shroud pools that drain health',
    strategy: 'Circle-strafe to dodge Shroud Spray. Never stand in breath lane. Shroud-resistance armor keeps chip damage manageable. Two-handed fire-enchanted weapons are best. Stay mobile — pools expand over time.',
    category: 'Fell', respawn: '2-3 in-game hours',
  },
  {
    name: 'Fell Sicklescythe',
    faction: 'Fell', level: '25',
    region: 'Kindlewastes — Haunted Sun Temple, Hollow Halls',
    difficulty: 'Very Hard', flameAltar: 'Lv 5', quest: 'Sun Temple Stories',
    desc: 'A scythe-limbed Fell boss haunting Shrouded ruins. The most mechanically complex Fell boss. Its head unlocks the Flame Altar\'s fifth upgrade.',
    effective: 'Fire, Shroud', resisted: 'Ice, Blunt',
    drops: 'Fell Sicklescythe Head (Flame Altar Lv 5), Shroud Nexus, Mist of a Fell Sicklescythe x1-3, Legendary Runes x6-8',
    attacks: 'Dual scythe combo (5 hits) — learn rhythm and dodge through; Teleport behind player after 3rd combo — listen for audio cue; Leaves scythe traps on ground in Phase 2; Cloaks in Shroud in Phase 3 — nearly invisible',
    strategy: 'Respect its reach — dodge inside wide scythe swings and punish between. Audio cue for teleport is critical — learn it. Medium armor minimum. Fire AoE attacks to reveal position in Phase 3. First serious gear check.',
    category: 'Fell', respawn: '2-3 in-game hours',
  },
  {
    name: 'Fell Cyclops',
    faction: 'Fell', level: '35',
    region: 'Albaneve Summits — Frozen Elixir Well',
    difficulty: 'Very Hard', flameAltar: 'Lv 6', quest: 'Ignite The Coldest Elixir Well',
    desc: 'A Shroud-corrupted Cyclops guarding a frozen Elixir Well. Same resistance profile as regular Cyclops but far more dangerous. Head unlocks Flame Altar Level 6.',
    effective: 'Fire, Shroud', resisted: 'Blunt, Ice',
    drops: 'Fell Cyclops Head (Flame Altar Lv 6), Enshrouded Cyclops Eye',
    attacks: 'Club swings and stomp AoE; Ice breath in frontal cone; Eye beam — tracking ice laser that freezes after 3 seconds; Phase 3: summons ice pillars blocking movement, eye beam sweeps arena',
    strategy: 'Fire and Shroud Effective, Blunt and Ice Resisted. Lead with fire damage, roll through slow melee, stagger on openings. Fire resistance armor REQUIRED. Stay behind — eye beam only fires forward. Destroy ice pillars in Phase 3 for mobility.',
    category: 'Fell', respawn: 'Quest-locked',
  },
  {
    name: 'Fell Dragon Youngling',
    faction: 'Fell', level: '35',
    region: 'Albaneve Summits — Howling Peak',
    difficulty: 'Extreme', flameAltar: 'Lv 8 (Final)', quest: 'Slaying The Corrupted Beast',
    desc: 'The corrupted beast atop Howling Peak, the highest point in Embervale. The canonical final boss of the main progression. Head unlocks Flame Altar Level 8 (final).',
    effective: 'Shroud, Fire', resisted: 'Ice',
    drops: 'Fell Dragon Youngling Head (Flame Altar Lv 8), 5x Shroud Cores, Legendary Runes, Legendary Weapon (chance)',
    attacks: 'Fell Fire Meteors: spins unleashing meteor wave — can be deflected back; Fell Fire Breath: sweeps left-to-right; Fell Fire Strafe: flies forward breathing fire; Wing Beat: close-range knockback; Summons Fell Draconian Vultures at 50% HP',
    strategy: 'Damage reduced until stunned — build for stagger and unload during grounded windows. Deflect meteors back for stun. When leaning back to breathe fire, run to opposite side. Bring 150-200 Stun Arrows. Fire resistance + warm clothing for altitude.',
    category: 'Fell', respawn: 'Quest-locked',
  },

  // ═══════════════════════════════════════════════════════════
  // SCAVENGER — 2 bosses (orange, human raiders)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Scavenger Matron',
    faction: 'Scavenger', level: '8',
    region: 'Springlands, Revelwood, Nomad Highlands, Kindlewastes',
    difficulty: 'Easy', flameAltar: 'Lv 3', quest: 'The Blacksmith',
    desc: 'A hulking Scavenger matriarch who appears as two forms: the poison-spitting Gorger and the reinforcement-summoning Grizzler. Her head upgrades the Flame Altar to level 3.',
    effective: 'Fire, Cutting', resisted: '—',
    drops: 'Scavenger Matron Head (Flame Altar Lv 3), Blacksmith NPC unlock, Scavenger equipment',
    attacks: 'Gorger: throws poison in three directions; Grizzler: summons Scavenger adds; Heavy melee swipes with slow wind-up',
    strategy: 'Read the variant first. Bring Poison resistance for the Gorger. AoE or fast weapon to clear Grizzler summons. Fight from a perch using ranged attacks — plink her health down before adds become a problem.',
    category: 'Scavenger', respawn: '2-3 in-game hours',
  },
  {
    name: 'Scavenger Tyrant',
    faction: 'Scavenger', level: '25',
    region: 'Albaneve Summits — Forge of Obsidia, Rothstep',
    difficulty: 'Hard', flameAltar: '—', quest: 'A Blast Furnace For The Blacksmith',
    desc: 'A powerful Scavenger leader guarding the Forge of Obsidia. Quest Boss — defeating him is required to obtain the Bellows for crafting the Blast Furnace. Does NOT drop a Flame Altar head.',
    effective: 'Fire', resisted: '—',
    drops: 'Bellows (Blast Furnace crafting), Scavenger equipment, Legendary Runes',
    attacks: 'Heavy melee combo with massive weapon — high stagger; Ground slam AoE that knocks back; Summons Scavenger Berserker and Ranged adds; Enrage at 40% HP — attack speed increases, calls more reinforcements',
    strategy: 'Never trade blows — every hit stuns. Prioritize clearing adds. Fire damage is effective against all Scavenger types. Use shield to block heavy combos. Clear adds first, focus on Tyrant during recovery. Save burst for enrage at 40%.',
    category: 'Scavenger', respawn: 'Quest-locked',
  },

  // ═══════════════════════════════════════════════════════════
  // VUKAH — 1 boss (green, beastmen)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Vukah Brawler',
    faction: 'Vukah', level: '8',
    region: 'Low Meadows, Nomad Highlands, Kindlewastes',
    difficulty: 'Medium', flameAltar: '—', quest: 'Vukah Ceremony',
    desc: 'The champion of the Vukah gladiator pits — a beastman far larger than a common Vukah. Guardians of Ceremony Hill arenas.',
    effective: 'Fire, Shroud', resisted: 'Blunt, Ice',
    drops: 'Vukah Brawler Head, Jezmina\'s Apotheosis (at Vukah Arena), Animal Fur, Resin',
    attacks: 'Two-Hit Chain: heavy blows that stagger on every hit; Leap Rush: leaps into the air and rushes your position when you back off; Heavy melee combos with high stagger',
    strategy: 'Don\'t try to tank — every hit stuns. Dodge the two-hit chain and punish between combos. Backing away invites leap rush, so hold mid-range and re-engage on your terms. Shield + Bleed build works well.',
    category: 'Vukah', respawn: '2-3 in-game hours',
  },

  // ═══════════════════════════════════════════════════════════
  // HOLLOW — 1 boss (blue, undead)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Hollow Cyclops',
    faction: 'Hollow', level: '18',
    region: 'Revelwood, Nomad Highlands, Kindlewastes — Hollow Halls dungeons',
    difficulty: 'Hard', flameAltar: '—', quest: '—',
    desc: 'Cyclops cursed by the Flame and banished to Hollow Halls during King Gormander\'s reign. Guards the final chamber of every Hollow Halls dungeon.',
    effective: 'Blunt', resisted: '—',
    drops: 'Hollow Cyclops Head, Giant Bones, Ectoplasm Shard, Bone Key materials',
    attacks: 'Club Melee: overhead strikes; Thrust: rapid forward jabs — roll sideways; Cleave: wide arcing swing; Stomp: ground impact with left leg; Hollow Breath: frontal Hollow damage',
    strategy: 'Effective vs Blunt — mace or hammer is best. Punish recovery after Cleave and Stomp. Keep Reanimator adds off your back in Hollow Halls runs. Medium armor with mace/shield combo.',
    category: 'Hollow', respawn: 'Hollow Halls reset',
  },

  // ═══════════════════════════════════════════════════════════
  // CYCLOPS — 1 boss (cyan, one-eyed giant)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Cyclops',
    faction: 'Cyclops', level: '30',
    region: 'Albaneve Summits — caves near Everfrore Keep, Howling Peak, Wildwater Basin, Lake Luma',
    difficulty: 'Very Hard', flameAltar: '—', quest: '—',
    desc: 'A one-eyed giant stalking frozen caverns. Five lairs across Albaneve. NOT the Fell Cyclops — this is regular Cyclops, a repeatable hostile fauna.',
    effective: 'Fire, Shroud', resisted: 'Blunt, Ice',
    drops: 'Cyclops Head, Giant Bones, Raw Game, Legendary Runes',
    attacks: 'Heavy slow melee swings with massive club; Stomp AoE that shakes ground; Eye glare — telegraphs charged attack; Blocks narrow cave passages',
    strategy: 'Shruggs off Blunt and Ice but takes extra from Fire and Shroud. Stay mobile between heavy, slow swings. Circle to flank and punish recovery. Fire-enchanted weapons essential. Caves restrict movement — use environment.',
    category: 'Cyclops', respawn: '2-3 in-game hours',
  },

  // ═══════════════════════════════════════════════════════════
  // DRAK — 1 boss (teal, reptilian deity)
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Hydrak\'Dal',
    faction: 'Drak', level: '40+',
    region: 'Veilwater Basin — Drak\'Dal Temple',
    difficulty: 'Extreme', flameAltar: 'Lv 9 (Max)', quest: 'Vengeance',
    desc: 'The endgame boss of the Veilwater Basin update. The hardest encounter in the game, designed for max-level characters with legendary gear. Head unlocks Flame Altar Level 9 — the current maximum.',
    effective: 'Fire, Shroud', resisted: 'Ice',
    drops: 'Hydrak\'Dal Head (Flame Altar Lv 9), Underwater Grappling Hook, Drak materials',
    attacks: 'Ranged earthquake attack — yellow glow beneath signals incoming rocks; Whirlwind AoE in large radius; Yellow glowing hands telegraph attacks 1-2 seconds early; Two crocodile-like Drak adds harass throughout',
    strategy: 'Move constantly. Buff with Elixir and Pray Scroll before entering. Room has four pads for quick movement and mud that slows you. Center pillar can be circled to avoid face-to-face. Range kill adds before boss engages. Double jump key for dodging.',
    category: 'Drak', respawn: 'Quest-locked',
  },
];
