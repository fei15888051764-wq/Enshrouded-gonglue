import {
  Crosshair, Flame, Shield, Sword, Heart, Zap, Target, Snowflake
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface BuildSkill {
  name: string;
  tree: string;
  description: string;
  priority: 'Core' | 'Important' | 'Optional';
}

export interface BuildWeapon {
  name: string;
  type: string;
  reason: string;
}

export interface BuildArmor {
  name: string;
  type: string;
  reason: string;
}

export interface BuildGuide {
  id: string;
  buildName: string;
  archetype: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tier: 'S' | 'A' | 'B';
  stats: {
    strength: number;
    dexterity: number;
    intelligence: number;
    constitution: number;
    spirit: number;
    endurance: number;
  };
  skills: BuildSkill[];
  weapons: BuildWeapon[];
  armor: BuildArmor[];
  playstyle: string;
  pros: string[];
  cons: string[];
  tips: string[];
  icon: ReactNode;
  summary: string;
}

export interface BuildSubSection {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  builds: BuildGuide[];
}

const PRIORITY_COLORS = {
  Core: 'text-red-400',
  Important: 'text-yellow-400',
  Optional: 'text-gray-400',
};

export function SkillPriorityBadge({ priority }: { priority: BuildSkill['priority'] }) {
  return (
    <span className={`text-[9px] font-bold uppercase tracking-wider ${PRIORITY_COLORS[priority]}`}>
      {priority}
    </span>
  );
}

export function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  const maxVal = 10;
  const pct = Math.min((value / maxVal) * 100, 100);
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-[10px] text-[var(--text-muted)] w-20 text-right">{label}</span>
      <div className="flex-1 h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[10px] font-bold text-[var(--text-primary)] w-4">{value}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// BUILD 1: RANGER / ARCHER
// ═══════════════════════════════════════════════════════════════════

const rangerSniperBuild: BuildGuide = {
  id: 'ranger-sniper',
  buildName: 'Ranger Sniper',
  archetype: 'Archer',
  difficulty: 'Intermediate',
  tier: 'S',
  stats: { strength: 1, dexterity: 10, intelligence: 4, constitution: 4, spirit: 1, endurance: 6 },
  skills: [
    { name: 'Ranger', tree: 'Ranger', description: 'Grants +2 DEX, +2 END, +5 Stamina Recharge, +5% Crit Chance, +5% Crit Damage. The foundation of every archer build.', priority: 'Core' },
    { name: 'Fatal Precision', tree: 'Ranger', description: 'Increases critical hit chance and critical damage. The highest DPS node for archers.', priority: 'Core' },
    { name: 'Multi Shot', tree: 'Ranger', description: 'Fire multiple arrows simultaneously. Clears packs of enemies efficiently when combined with Spread.', priority: 'Core' },
    { name: 'Shell Shock', tree: 'Ranger', description: 'Arrows have a chance to stun enemies on hit. Essential crowd control for tough encounters.', priority: 'Core' },
    { name: 'Chain Reaction', tree: 'Ranger', description: 'Explosive arrows trigger secondary explosions. Synergizes perfectly with explosive arrows for massive AOE.', priority: 'Core' },
    { name: 'Sharpshooter', tree: 'Ranger', description: 'Increases ranged damage and effective range. Stack with Marksman and Sniper for maximum damage.', priority: 'Important' },
    { name: 'Marksman', tree: 'Ranger', description: 'Increases bow damage by a flat percentage. Direct damage boost to all arrow types.', priority: 'Important' },
    { name: 'Ricochets', tree: 'Ranger', description: 'Arrows bounce to nearby enemies after hitting a target. Excellent for clearing clustered mobs.', priority: 'Important' },
    { name: 'Veiled Vigor', tree: 'Ranger', description: 'Grants bonus health based on total Dexterity. Provides survivability without sacrificing damage.', priority: 'Important' },
    { name: 'Dessert Stomach', tree: 'Survivor', description: 'Unlocks an additional food slot. Critical for maintaining multiple stat buffs simultaneously.', priority: 'Important' },
    { name: 'Water Aura', tree: 'Healer', description: 'Passive healing aura based on Intelligence. Provides sustain without using skill slots.', priority: 'Optional' },
    { name: 'Double Jump', tree: 'Survivor', description: 'Allows a second jump while airborne. Essential mobility for kiting and positioning.', priority: 'Core' },
  ],
  weapons: [
    { name: 'Ignited Bow', type: 'Legendary Bow', reason: 'Best fire damage bow. Pairs with fire damage amplifications from consumables and Chain Reaction for massive AOE clear.' },
    { name: 'Avalanche', type: 'Legendary Bow', reason: 'Ice-based legendary bow. Apply Soaked debuff then switch to lightning for devastating combos.' },
    { name: 'Crystal Knives', type: 'Daggers (Secondary)', reason: 'Melee fallback when enemies close the gap. Benefits from shared Dexterity scaling and fast attack speed.' },
  ],
  armor: [
    { name: 'Quetzal Hunter Set', type: 'Medium Armor', reason: 'Best-in-slot archer armor. Provides DEX bonuses and synergizes with ranged damage playstyle.' },
    { name: 'Bloodfeather Set', type: 'Light Armor', reason: 'Alternative for Assassin hybrid play. Boosts critical damage and dagger synergy.' },
    { name: 'Gemini Ring', type: 'Accessory', reason: 'Grants health on critical hits. Combined with weapon leech, provides enough healing to minimize downtime.' },
  ],
  playstyle: 'The Ranger Sniper excels at dealing devastating damage from a safe distance. Open fights from outside enemy aggro range using a fully charged bow shot. Kite between volleys using Double Jump and Updraft to maintain distance. Use Explosive Arrows with Chain Reaction for AOE packs, and switch to precision arrows for single-target burst. When enemies close the gap, swap to daggers for melee combat or use Blink to create space. Keep food buffs active at all times for maximum ranged damage output.',
  pros: [
    'Highest ranged DPS in the game with proper arrow preparation',
    'AOE mastery with Chain Reaction, Ricochets, and Multi Shot',
    'Safe kiting playstyle minimizes damage taken',
    'Dexterity scales both bows and daggers for hybrid versatility',
    'Can open fights from outside enemy aggro range',
  ],
  cons: [
    'Requires constant arrow crafting and resource management',
    'Slow early game until key skills and Eternal Ice Arrow are unlocked',
    'High stamina demand from Blink, Updraft, and continuous shooting',
    'Resource intensive — optimal damage requires stocking Explosive, Shroud, and Stun arrows',
    'Struggles in tight spaces where kiting is limited',
  ],
  tips: [
    'Always craft Explosive Arrows in bulk — they are your primary AOE tool and easier to craft than Tier III variants',
    'Use the Eternal Ice Arrow (infinite use) as your default arrow to save resources on weaker enemies',
    'Pair fire damage amplifications from food buffs with Ignited Bow for maximum damage output',
    'Keep Gemini Ring equipped at all times — the health-on-crit is your primary sustain',
    'Use Double Jump + Updraft to reach high ground and gain an advantage over melee enemies',
    'Combine Multi Shot + Spread + Trigger for overlapping volleys that decimate enemy packs',
    'Invest in Dessert Stomach early for 4 food slots — use constitution, DEX, recovery, and damage buffs simultaneously',
    'For boss fights, use Stun Arrows to interrupt telegraphed attacks and create openings',
  ],
  icon: <Crosshair className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'S-tier ranged DPS. Devastating bow damage from a safe distance with superior AOE clear and hybrid dagger fallback.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 2: WIZARD / MAGE
// ═══════════════════════════════════════════════════════════════════

const wizardBuild: BuildGuide = {
  id: 'wizard-mage',
  buildName: 'Wizard (Glass Cannon)',
  archetype: 'Mage',
  difficulty: 'Advanced',
  tier: 'A',
  stats: { strength: 1, dexterity: 2, intelligence: 10, constitution: 4, spirit: 5, endurance: 3 },
  skills: [
    { name: 'Wizard', tree: 'Wizard', description: 'Core skill that increases magic damage and enables staff specialization. Foundation of all mage builds.', priority: 'Core' },
    { name: 'Mass Destruction', tree: 'Wizard', description: 'Massively increases area-of-effect spell damage. Essential for clearing groups of enemies.', priority: 'Core' },
    { name: 'Radiant Aura', tree: 'Healer', description: 'Passive healing and Shroud resistance. Critical survival tool for the fragile mage archetype.', priority: 'Core' },
    { name: 'Blink', tree: 'Healer', description: 'Teleport dodge replacement. Essential mobility for creating space and escaping melee threats.', priority: 'Core' },
    { name: 'Water Aura', tree: 'Healer', description: 'Passive healing per second based on Intelligence. Provides sustain without dedicating skill slots.', priority: 'Core' },
    { name: 'Arsonist', tree: 'Wizard', description: 'Increases all fire damage by 10%. Stack with Pyromaniac for +30% total fire damage bonus.', priority: 'Important' },
    { name: 'Pyromaniac', tree: 'Wizard', description: 'Further increases all fire damage by 20%. Combined with Arsonist for devastating fire spells.', priority: 'Important' },
    { name: 'Quick Charge', tree: 'Wizard', description: 'Reduces staff spell charge time by 50%. Dramatically improves DPS and gameplay flow.', priority: 'Important' },
    { name: 'This is the Way', tree: 'Wizard', description: 'All magic weapon damage increased by 10%. Flat damage boost to staffs and wands.', priority: 'Important' },
    { name: 'Terror', tree: 'Trickster', description: 'Spell critical hits stun the target for 4 seconds. Excellent crowd control with AOE spells.', priority: 'Important' },
    { name: 'Necromancer', tree: 'Wizard', description: 'Chance to summon a friendly Skull Companion on magic kill. Provides distraction and extra damage.', priority: 'Optional' },
    { name: 'Exalted', tree: 'Battlemage', description: 'Gain 1 Intelligence per 2 Flame Altar levels. Best INT scaling skill for endgame mages.', priority: 'Important' },
  ],
  weapons: [
    { name: 'Eternal Fireball Staff', type: 'Staff with Eternal Spell', reason: 'Primary weapon. Eternal spells have infinite uses (no consumable charges). Fireball provides massive AOE with the right skills.' },
    { name: 'Wand of the Arcane', type: 'Wand', reason: 'Secondary weapon for mana regeneration via Unity skill. Fast attacks with no charge time needed.' },
    { name: 'Staff of Eternal Chain Lightning', type: 'Staff', reason: 'Use against Soaked enemies for devastating lightning combos. The Soaked + Lightning interaction is extremely powerful.' },
  ],
  armor: [
    { name: 'Tidecaller Set', type: 'Light Armor', reason: 'Best armor for pure mages. Provides Intelligence bonuses and enhances Water Aura healing effectiveness.' },
    { name: 'Sage Set', type: 'Medium Armor', reason: 'Alternative with higher armor values. Good for mages who want extra survivability at the cost of some DPS.' },
    { name: 'Gem of Burning', type: 'Gem', reason: 'Slot into armor for additional fire damage amplification. Stacks with Arsonist and Pyromaniac.' },
  ],
  playstyle: 'The Wizard is a glass cannon that prioritizes raw magical damage and AOE spellcasting above all else. Your primary weapon is the Staff, which requires a short charge-up but delivers devastating AOE damage via Eternal Fireball and Chain Lightning. Positioning is everything — stay at range and use Blink to create space when enemies approach. Use Wand attacks to regenerate mana between staff casts via the Unity skill. Keep Water Aura active at all times for passive healing. Against groups, lead with an AOE spell to apply Soaked, then follow with Chain Lightning for devastating combo damage. For single targets, use Acid Bite staff charges for the highest damage output.',
  pros: [
    'Highest sustained magical DPS and best AOE clearing potential',
    'Water Aura + Radiant Aura provide passive healing and Shroud resistance',
    'Can attack from a safe distance with staff spells',
    'Eternal spells remove consumable management for core abilities',
    'Excellent crowd control with Terror (stun on spell crit)',
  ],
  cons: [
    'Extremely fragile — low armor and health pool',
    'Mana management requires frequent wand swapping or potion use',
    'Staff spells require charge-up time, vulnerable to interrupts',
    'Requires excellent positioning and constant mobility via Blink',
    'Depends heavily on skill synergy — underperforms without proper build investment',
  ],
  tips: [
    'Always lead with Wand attacks to regenerate mana before swapping to Staff for big spells',
    'Use Blink liberally — your survival depends on never letting enemies reach melee range',
    'Apply Soaked status first, then use Chain Lightning for devastating combo damage (2x vs Soaked)',
    'Craft Eternal Spell charges as soon as possible to eliminate consumable management',
    'Keep Algae Salad and Herbal Mountain Tea active for mana regeneration and magic damage buffs',
    'Use Terror with AOE spells like Fireball to stun multiple enemies simultaneously',
    'Sleep in a bed before tough fights for the Well Rested buff (doubles health)',
    'Gem every armor piece with Gem of Burning for maximum fire damage output',
  ],
  icon: <Flame className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'Pure magical glass cannon with devastating AOE spells. High risk, high reward playstyle with excellent clearing speed.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 3: TANK (SWORD & BOARD)
// ═══════════════════════════════════════════════════════════════════

const tankBuild: BuildGuide = {
  id: 'tank-sword-board',
  buildName: 'Sword & Board Tank',
  archetype: 'Tank',
  difficulty: 'Beginner',
  tier: 'S',
  stats: { strength: 6, dexterity: 1, intelligence: 2, constitution: 10, spirit: 2, endurance: 4 },
  skills: [
    { name: 'Constitution', tree: 'Tank', description: '+1 Constitution per node. Stack as many as possible for massive HP pool.', priority: 'Core' },
    { name: 'Heavy Plates', tree: 'Tank', description: 'Increases maximum damage mitigation from armor by 10%. Core tanking skill.', priority: 'Core' },
    { name: 'Shiny Plates', tree: 'Tank', description: 'Physical armor gains 10% more armor points. Pairs with Heavy Plates for maximum mitigation.', priority: 'Core' },
    { name: 'Earth Aura', tree: 'Tank', description: 'Reduces all incoming damage by 10%. One of the best damage reduction skills in the game.', priority: 'Core' },
    { name: 'Battle Heal', tree: 'Tank / Barbarian', description: 'Heal 3% max HP on melee critical hit. Primary self-sustain for tank builds.', priority: 'Core' },
    { name: 'Absorb', tree: 'Tank', description: 'Chance to convert magical damage taken into mana. Essential for Shroud exploration.', priority: 'Important' },
    { name: 'Tower', tree: 'Tank', description: 'Having 3+ enemies nearby reduces physical damage taken by 10%. Synergizes with Earth Aura.', priority: 'Important' },
    { name: 'Warden', tree: 'Tank', description: 'Having 3+ enemies nearby reduces magical damage taken by 15%. Synergizes with Tower.', priority: 'Important' },
    { name: 'Thick Skin', tree: 'Tank', description: 'Gain 1 Constitution per 2 Flame Altar levels. Best scaling HP skill for endgame.', priority: 'Important' },
    { name: 'Brute', tree: 'Warrior', description: 'Increases melee damage. Helps offset the tank\'s lower damage output.', priority: 'Important' },
    { name: 'The Warrior\'s Path', tree: 'Warrior', description: '+10% melee damage with all melee weapons. Flat damage boost for sword and shield.', priority: 'Important' },
    { name: 'Vigorous Deflection', tree: 'Tank', description: 'Gain 30 stamina when parrying. Turns successful blocks into offensive opportunities.', priority: 'Optional' },
  ],
  weapons: [
    { name: 'Apex Machete', type: 'One-Handed Sword', reason: 'Highest DPS one-handed sword with bleed and health leech. Paired with shield for maximum survivability.' },
    { name: 'Wand & Shield', type: 'Magic + Shield', reason: 'Secondary weapon for ranged damage and mana regeneration. Allows blocking while casting.' },
    { name: 'Staff with Acid Bite', type: 'Staff', reason: 'Ranged damage option for initiating combat. Acid Bite has the highest damage potential of any staff charge.' },
  ],
  armor: [
    { name: 'Warden Set', type: 'Heavy Armor', reason: 'Best tank armor set. Provides highest physical armor values and pairs perfectly with Heavy Plates skill.' },
    { name: 'Golden Bulwark Set', type: 'Heavy Armor', reason: 'Alternative heavy set with focus on max health and damage reduction. Good for early to mid game.' },
    { name: 'Shield with Cold Composure', type: 'Shield + Gem', reason: 'Cold Composure gem trades movement speed while blocking for massive physical and magical armor boosts.' },
  ],
  playstyle: 'The Sword & Board Tank is the safest and most forgiving build in Enshrouded. Your goal is to absorb hits, control aggro, and outlast your enemies. Use your shield to block and parry incoming attacks — successful parries restore stamina via Vigorous Deflection and open enemies to Merciless Strike finishers. Keep Battle Heal active at all times; every critical hit heals you for 3% of max HP, which adds up quickly with high attack speed swords. Use Earth Aura + Tower + Warden for stacked damage reduction when surrounded. In co-op, position yourself between enemies and your allies to draw aggro. Use Wand and Staff for ranged initiation, then swap to sword and shield when enemies close in. With proper gear, you can face-tank most content without dodging.',
  pros: [
    'Near-immortality with stacked damage reduction (Earth Aura + Heavy Plates + Shiny Plates)',
    'Excellent self-sustain via Battle Heal on critical hits',
    'Beginner-friendly — most forgiving build for learning the game',
    'Scales incredibly well into endgame with Thick Skin Constitution scaling',
    'Essential for co-op groups — draws aggro and protects DPS allies',
    'No consumable management required unlike Archer',
  ],
  cons: [
    'Lower damage output compared to dedicated DPS builds',
    'Slow kills in solo play — fights take longer',
    'Limited ranged options for initiating combat',
    'Requires heavy armor investment — slower movement',
    'Can feel passive and less engaging than high-DPS builds',
  ],
  tips: [
    'Prioritize Constitution over Strength until you have at least 400+ HP',
    'Always keep a shield equipped — the block and parry mechanics are your lifeline',
    'Use the Evasion Attack skill to quickly close gaps to ranged enemies',
    'Stack armor gems (flat damage reduction) on chest and legs for maximum mitigation',
    'Battle Heal is your primary healing source — prioritize critical chance on gear',
    'In co-op, use the Begone! unarmed skill to stun and reposition enemies away from allies',
    'Equip Cold Composure gem on shield for maximum tankiness at the cost of movement speed',
    'Combine Meat Wrap (constitution buff) with Open Sandwich (strength buff) for optimal stats',
  ],
  icon: <Shield className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'S-tier tank with near-immortality. Stacked damage reduction, massive HP pool, and self-sustain via Battle Heal. Best beginner build.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 4: BERSERKER BARBARIAN (MELEE DPS)
// ═══════════════════════════════════════════════════════════════════

const barbarianBuild: BuildGuide = {
  id: 'berserker-barbarian',
  buildName: 'Berserker Barbarian',
  archetype: 'Melee DPS',
  difficulty: 'Intermediate',
  tier: 'A',
  stats: { strength: 10, dexterity: 1, intelligence: 1, constitution: 6, spirit: 1, endurance: 6 },
  skills: [
    { name: 'Barbarian', tree: 'Barbarian', description: 'Core skill that increases Strength and two-handed weapon damage. Foundation of all Barbarian builds.', priority: 'Core' },
    { name: 'Blood Rage', tree: 'Barbarian', description: 'Killing an enemy within 10m grants +20% melee damage for 10 seconds. Keep this buff active at all times.', priority: 'Core' },
    { name: 'Whirlwind Crescendo', tree: 'Barbarian', description: 'Devastating spinning AOE attack. Clears groups of enemies and applies massive stun buildup.', priority: 'Core' },
    { name: 'Relentless', tree: 'Barbarian', description: 'Critical hits with two-handed weapons increase next crit chance by 10%. Chains devastating critical combos.', priority: 'Core' },
    { name: 'Two-Handed Specialization', tree: 'Barbarian', description: 'Increases damage with all two-handed weapons. Flat damage boost for Greatswords, Axes, and Hammers.', priority: 'Core' },
    { name: 'Heavy Hitter', tree: 'Barbarian', description: 'Enemy stun bar fills 20% faster when attacking into their block. Opens enemies to Merciless Strike faster.', priority: 'Important' },
    { name: 'Breach', tree: 'Barbarian', description: 'Breaking an enemy\'s block grants +100% melee damage for 2 seconds. Devastating burst window.', priority: 'Important' },
    { name: 'Titan Edge', tree: 'Barbarian', description: '+15% Greatsword damage for 6 skill points. The highest weapon-specific damage bonus in Update 8.', priority: 'Important' },
    { name: 'Battle Heal', tree: 'Barbarian', description: 'Heal 3% max HP on melee critical hit. Primary sustain — combine with high crit chance.', priority: 'Important' },
    { name: 'Shockwave', tree: 'Barbarian', description: 'Overpowering an enemy triggers a shockwave that stuns nearby enemies. Excellent crowd control.', priority: 'Important' },
    { name: 'Crash Down Attack', tree: 'Athlete', description: 'Mid-air slam attack dealing 50% bonus damage in a small AOE. Great gap closer and opener.', priority: 'Optional' },
    { name: 'Leap Attack', tree: 'Athlete', description: 'Jump attack that closes distance and deals bonus damage. Excellent for engaging ranged enemies.', priority: 'Optional' },
  ],
  weapons: [
    { name: 'Greatsword of the Ancients', type: 'Two-Handed Greatsword', reason: 'Highest single-target melee DPS. Update 8 fixed Greatsword swing animation and buffed Titan Edge skill.' },
    { name: 'War Hammer', type: 'Two-Handed Hammer', reason: 'Highest stun and stagger values. Best for controlling groups and setting up Merciless Strikes.' },
    { name: 'Greatsword Gauntlets', type: 'Gloves (Armor)', reason: 'Not a weapon but essential — provides +21% Greatsword damage. Mandatory for Greatsword Barbarians.' },
  ],
  armor: [
    { name: 'Sunpiercer\'s Set', type: 'Heavy Armor', reason: 'Best armor for Barbarian builds. Provides Strength bonuses and high physical armor values.' },
    { name: 'Berserker Plate Set', type: 'Heavy Armor', reason: 'Alternative with focus on crit chance and damage. Good for maximizing Battle Heal procs.' },
    { name: 'Gem of Bleeding', type: 'Gem', reason: 'Adds bleed damage to attacks. Stacks with Greatsword bleed for massive damage-over-time.' },
  ],
  playstyle: 'The Berserker Barbarian is the most aggressive melee build in Enshrouded, built around massive two-handed weapons and relentless offense. Your core loop is: maintain Blood Rage by killing enemies within 10m for the permanent +20% damage buff, build critical hit chance to proc Battle Heal for self-sustain, and use Whirlwind Crescendo for AOE clears. Open fights with Leap Attack or Crash Down Attack to close the gap, then unleash heavy attacks to fill the enemy stun bar. Once stunned, use Merciless Strike for massive damage. Breach + the 2-second +100% damage window after breaking a block is your primary burst tool. Use Shockwave after overpowering an enemy to stun surrounding mobs. Update 8 made Greatswords the premier weapon choice with the Titan Edge buff and swing animation fix.',
  pros: [
    'Highest physical melee DPS potential in the game',
    'Whirlwind Crescendo provides excellent AOE clearing',
    'Self-sustaining via Battle Heal on critical hits',
    'Simple and satisfying gameplay loop — hit things until they die',
    'Blood Rage is easy to maintain in dense areas for permanent damage buff',
    'No ammo or mana management required',
  ],
  cons: [
    'Requires massive skill point investment — many competing priorities',
    'Vulnerable during slow heavy attack animations',
    'Must stay in melee range at all times — dangerous against certain bosses',
    'Battle Heal nerf in Update 8 (3% down from 5%) reduces sustain',
    'Less mobile than Archer or Mage builds',
    'Whirlwind can drain stamina quickly if not managed',
  ],
  tips: [
    'Always maintain Blood Rage — kill an enemy every 10 seconds to keep the +20% damage buff active',
    'Prioritize critical chance on accessories and weapons to maximize Battle Heal procs',
    'Use Crash Down Attack from elevated positions for bonus damage on engagement',
    'After breaking an enemy block with Breach, unleash your strongest attack during the 2-second +100% damage window',
    'Greatsword Gauntlets are mandatory — they provide +21% Greatsword damage alone',
    'Combine with health leech weapon trait to supplement the nerfed Battle Heal',
    'Use Shockwave after overpowering enemies to stun the entire group, then Whirlwind through them',
    'Grilled Crab Meat and Open Sandwich are your best food buffs for STR and CON',
  ],
  icon: <Sword className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier melee powerhouse with devastating two-handed weapon damage. Whirlwind AOE clears and Breach burst windows define this aggressive build.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 5: HEALER SUPPORT
// ═══════════════════════════════════════════════════════════════════

const healerBuild: BuildGuide = {
  id: 'healer-support',
  buildName: 'Healer Support',
  archetype: 'Support',
  difficulty: 'Intermediate',
  tier: 'A',
  stats: { strength: 1, dexterity: 1, intelligence: 10, constitution: 5, spirit: 8, endurance: 2 },
  skills: [
    { name: 'Healer', tree: 'Healer', description: 'Increases healing spell effectiveness by 10%. The foundation of all healing builds.', priority: 'Core' },
    { name: 'Healer II', tree: 'Healer', description: 'Further increases healing spell effectiveness by 20%. Combined with Healer for +30% total.', priority: 'Core' },
    { name: 'Water Aura', tree: 'Healer', description: 'Allies within 15m regenerate HP per second based on Intelligence. Primary group healing tool.', priority: 'Core' },
    { name: 'Waters of Life', tree: 'Healer', description: 'Additional +1 HP regeneration per Intelligence to Water Aura. Doubles the healing output.', priority: 'Core' },
    { name: 'Life Burst', tree: 'Battlemage', description: 'Killing an enemy heals all allies within 15m for 3x your Intelligence. Burst heal on kills.', priority: 'Core' },
    { name: 'Radiant Aura', tree: 'Healer', description: 'Increases healing effectiveness up to +300 HP at max rank. Essential for dedicated healers.', priority: 'Important' },
    { name: 'Healing Revive', tree: 'Healer', description: 'Revived allies restore 25% max HP. Critical for co-op recovery after allies fall.', priority: 'Important' },
    { name: 'Martyr', tree: 'Healer', description: 'When downed, heal all allies within 15m for 30% max HP. Emergency group save.', priority: 'Optional' },
    { name: 'Blink', tree: 'Healer', description: 'Teleport dodge. Essential for repositioning to stay within 15m of allies.', priority: 'Important' },
    { name: 'Exalted', tree: 'Battlemage', description: 'Gain 1 Intelligence per 2 Flame Altar levels. Best INT scaling for endgame healing.', priority: 'Important' },
    { name: 'Bloodletting', tree: 'Trickster', description: 'Critical hits generate resource orbs. Keeps the team supplied with health and mana orbs.', priority: 'Important' },
    { name: 'Good Metabolism', tree: 'Survivor', description: 'Resource orbs restore 30% instead of 10%. Essential for sustained resource generation.', priority: 'Important' },
  ],
  weapons: [
    { name: 'Oracle\'s Everblue', type: 'Legendary Wand', reason: 'Best healing-focused weapon. Provides mana regeneration and boosts healing spell effectiveness.' },
    { name: 'Staff with Eternal Chain Heal', type: 'Staff', reason: 'Primary group healing tool. Chain Heal bounces between allies and Eternal version has infinite uses.' },
    { name: 'Staff with Eternal Heal Channel', type: 'Staff', reason: 'Sustained single-target healing. Hold to channel continuous healing to a target ally or yourself.' },
  ],
  armor: [
    { name: 'Waveborne Ritualist Set', type: 'Medium Armor', reason: 'Best healer armor. Provides Intelligence and Spirit bonuses while maintaining decent armor values.' },
    { name: 'Sage Set', type: 'Medium Armor', reason: 'Alternative with higher Intelligence bonuses. Amplifies Water Aura healing significantly.' },
    { name: 'Ring of the Ancients', type: 'Accessory', reason: 'Boosts mana regeneration and provides bonus Spirit. Essential for sustained healing output.' },
  ],
  playstyle: 'The Healer Support is a co-op specialist that keeps the team alive through passive and active healing. Your primary role is to stay within 15 meters of allies at all times so Water Aura and Waters of Life provide constant passive regeneration. Use Staff with Eternal Chain Heal for quick group top-ups during combat, and Eternal Heal Channel for sustained healing on critically injured allies. Use Wand attacks between heals to regenerate mana via the Unity skill. Keep moving with Blink to reposition and avoid enemy attacks — your survival is critical to the team. Use Bloodletting + Good Metabolism to generate resource orbs for the team. In emergencies, Martyr provides a group-wide heal if you go down. Remember: you are not a primary damage dealer. Focus on keeping allies alive and let the DPS builds handle offense.',
  pros: [
    'Essential for co-op groups — enables much harder content',
    'Water Aura provides powerful passive healing to all nearby allies',
    'Multiple healing tools for different situations (burst, sustained, passive)',
    'Life Burst turns kills into group healing — rewards assisting with damage',
    'Can still deal respectable magic damage with Intelligence investment',
    'Groups with a dedicated healer can attempt much harder content',
  ],
  cons: [
    'Lower personal damage output compared to Battlemage or Wizard',
    'Mana-intensive — requires frequent wand attacks or potion use',
    'Must stay within 15m of allies — limits positioning options',
    'Less effective in solo play where self-damage is the only concern',
    'Team-dependent — effectiveness scales with group coordination',
    'Requires active resource management to maintain healing output',
  ],
  tips: [
    'Always stay within 15 meters of your allies — this is your Water Aura effective range',
    'Use Eternal Chain Heal for quick burst healing during intense fights',
    'Switch to Wand attacks when mana drops below 50% to regenerate with Unity',
    'Keep Bloodletting active and use AOE spells on objects to generate resource orbs',
    'Prioritize healing the tank/DPS over yourself — use Blink to escape danger',
    'Dessert Stomach is essential for 4 food slots: INT, CON, Spirit, and Recovery buffs',
    'Use Terror (stun on spell crit) with Fireball to crowd control groups',
    'In solo play, focus on Life Burst and self-healing via Water Aura rather than group heals',
  ],
  icon: <Heart className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier co-op essential. Powerful group healing via Water Aura, Chain Heal, and Life Burst. Less effective solo but transformative in groups.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 6: BATTLEMAGE HYBRID
// ═══════════════════════════════════════════════════════════════════

const battlemageBuild: BuildGuide = {
  id: 'battlemage-hybrid',
  buildName: 'Battlemage Hybrid',
  archetype: 'Mage',
  difficulty: 'Intermediate',
  tier: 'A',
  stats: { strength: 4, dexterity: 1, intelligence: 8, constitution: 6, spirit: 4, endurance: 4 },
  skills: [
    { name: 'Wand Master', tree: 'Battlemage', description: '30% chance to spawn double projectiles. Extra projectiles deal 50% damage. Core DPS skill.', priority: 'Core' },
    { name: 'Sting', tree: 'Battlemage', description: 'Repeated wand damage increased by 20%. Stacks with Wand Master for devastating rapid-fire damage.', priority: 'Core' },
    { name: 'Water Aura', tree: 'Healer', description: 'Passive healing per second based on Intelligence. The best survivability skill for any INT build.', priority: 'Core' },
    { name: 'Blink', tree: 'Healer', description: 'Teleport dodge. Essential for closing gaps and escaping danger.', priority: 'Core' },
    { name: 'Arcane Deflection', tree: 'Battlemage', description: 'Gain 20 mana on successful parry. Enables mana sustain while using shield.', priority: 'Important' },
    { name: 'Unity', tree: 'Battlemage', description: 'Wand attacks have 24% chance to recover 4% mana. Primary mana regeneration tool.', priority: 'Important' },
    { name: 'Life Burst', tree: 'Battlemage', description: 'Killing an enemy heals all allies within 15m for 3x Intelligence. Group healing on kills.', priority: 'Important' },
    { name: 'Exalted', tree: 'Battlemage', description: 'Gain 1 Intelligence per 2 Flame Altar levels. Best INT scaling for endgame.', priority: 'Important' },
    { name: 'Arsonist', tree: 'Wizard', description: '+10% fire damage. Stacks with Pyromaniac for devastating fire bursts.', priority: 'Important' },
    { name: 'Earth Aura', tree: 'Tank', description: 'Reduces all incoming damage by 10%. Provides tankiness without heavy armor investment.', priority: 'Important' },
    { name: 'Begone!', tree: 'Trickster', description: 'Magic-powered punch that pushes and stuns foes. Costs 30 mana. Excellent crowd control.', priority: 'Optional' },
    { name: 'Emergency Blink', tree: 'Healer', description: 'Can Blink while stunned to break the stun state. Lifesaver in dangerous situations.', priority: 'Important' },
  ],
  weapons: [
    { name: 'Wand + Shield', type: 'Wand & Shield', reason: 'Primary setup. Wand provides fast, repeatable damage while shield enables blocking and parrying.' },
    { name: 'Staff with Eternal Fireball', type: 'Staff', reason: 'Secondary for AOE clearing. Quick Charge reduces charge time for smoother gameplay.' },
    { name: 'One-Handed Sword (Backup)', type: 'One-Handed Sword', reason: 'Alternative melee option when mana is depleted. Shares Strength scaling with the hybrid build.' },
  ],
  armor: [
    { name: 'Heavy Plate Set', type: 'Heavy Armor', reason: 'Best for frontline Battlemage. High armor values enable face-tanking with passive healing.' },
    { name: 'Mixed Set (Heavy + Medium)', type: 'Mixed Armor', reason: 'Enshrouded has no set bonuses — mix pieces for optimal stats. Prioritize INT and CON bonuses.' },
    { name: 'Ring of Intelligence', type: 'Accessory', reason: 'Flat Intelligence boost. Every point of INT increases wand damage and Water Aura healing.' },
  ],
  playstyle: 'The Battlemage Hybrid is the most versatile build in Enshrouded, combining fast wand attacks with heavy armor durability. Unlike the fragile Wizard, you stay in the frontline wearing plate armor, using your Wand as a rapid-fire weapon and your shield for blocking and parrying. The core loop: use Wand attacks to build Sting stacks for increasing damage, parry with your shield to regain mana via Arcane Deflection, and use Begone! to stun aggressive enemies. Water Aura provides constant passive healing based on your high Intelligence. When facing groups, swap to Staff for Eternal Fireball AOE clears. In co-op, you function as a durable off-healer and sustained DPS. The Battlemage rewards aggressive play — get in the enemy\'s face, block their attacks, and melt them with rapid wand projectiles.',
  pros: [
    'Extremely durable for a mage — wears heavy armor with passive healing',
    'No consumable management needed with Eternal spells and Unity mana regen',
    'Versatile — handles both single-target and AOE situations effectively',
    'Self-sufficient with Water Aura + Life Burst healing',
    'Excellent for solo play — combines damage and survivability',
    'Scales well into endgame with Exalted INT scaling',
  ],
  cons: [
    'Lower burst damage than pure Wizard',
    'Requires frequent weapon swapping for optimal performance',
    'Must invest in both INT and STR, spreading attribute points thin',
    'Wand range is shorter than Staff spells — must play closer to danger',
    'Complex playstyle with many active skills to manage',
  ],
  tips: [
    'Always keep Wand + Shield equipped as your primary — the defensive value of blocking is immense',
    'Parry often — successful parries restore 20 mana via Arcane Deflection',
    'Build Sting stacks rapidly by holding down Wand attack — damage ramps up significantly',
    'Use Begone! (unarmed punch) to interrupt enemy attacks and create breathing room',
    'Swap to Staff only for AOE situations — Wand is your primary single-target DPS',
    'Emergency Blink is essential — it breaks stuns that would otherwise kill you',
    'Prioritize armor pieces with INT and CON bonuses — these are your primary stats',
    'Combine Arsonist + Pyromaniac with fire staff for massive burst damage openings',
  ],
  icon: <Zap className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier hybrid melee mage. Wears heavy armor while dealing rapid wand damage. Best solo build with self-sustain and versatility.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 7: ASSASSIN (BONUS BUILD)
// ═══════════════════════════════════════════════════════════════════

const assassinBuild: BuildGuide = {
  id: 'assassin-dual-blades',
  buildName: 'Assassin Dual Blades',
  archetype: 'Melee DPS',
  difficulty: 'Advanced',
  tier: 'A',
  stats: { strength: 1, dexterity: 10, intelligence: 2, constitution: 4, spirit: 1, endurance: 7 },
  skills: [
    { name: 'Dagger Master', tree: 'Assassin / Ranger', description: 'Increases dagger damage and attack speed. Core skill for all dagger builds.', priority: 'Core' },
    { name: 'Expose Weakness', tree: 'Assassin', description: 'Attacks from behind deal massively increased damage. Defines the backstab playstyle.', priority: 'Core' },
    { name: 'Backstab Mastery', tree: 'Assassin', description: 'Further increases backstab damage multiplier. Combined with Expose Weakness for one-shot potential.', priority: 'Core' },
    { name: 'Poisoned Blades', tree: 'Assassin', description: 'Dagger attacks apply poison damage-over-time. Provides passive damage while repositioning.', priority: 'Core' },
    { name: 'Graceful Stride', tree: 'Assassin', description: 'Increases movement speed while stealthed. Essential for repositioning for backstabs.', priority: 'Important' },
    { name: 'Silent Stride', tree: 'Assassin', description: 'Reduces detection radius while stealthed. Allows approaching enemies undetected.', priority: 'Important' },
    { name: 'Slice and Dice', tree: 'Assassin', description: 'Devastating combo attack with daggers. High burst damage against stunned or unaware targets.', priority: 'Important' },
    { name: 'Updraft', tree: 'Assassin', description: 'Gain height while gliding. Costs 100 mana. Excellent for escaping or reaching advantageous positions.', priority: 'Important' },
    { name: 'Double Jump', tree: 'Survivor', description: 'Second jump while airborne. Core mobility for the assassin playstyle.', priority: 'Core' },
    { name: 'Fatal Precision', tree: 'Ranger', description: 'Increases critical chance and critical damage. Daggers attack fast, proccing crits frequently.', priority: 'Important' },
    { name: 'Battle Heal', tree: 'Barbarian', description: 'Heal on melee critical hits. Combined with fast dagger attacks for frequent healing procs.', priority: 'Important' },
    { name: 'Dessert Stomach', tree: 'Survivor', description: 'Additional food slot. Critical for maintaining DEX, CON, and recovery buffs.', priority: 'Optional' },
  ],
  weapons: [
    { name: 'Crystal Knives', type: 'Legendary Daggers', reason: 'Best daggers in the game. High attack speed and critical chance. Scales purely with Dexterity.' },
    { name: 'Bow (Backup)', type: 'Bow', reason: 'Secondary ranged option. Shares Dexterity scaling with daggers for a unified stat build.' },
    { name: 'Gem of Toxic Betrayal', type: 'Gem', reason: 'Amplifies poison damage from Poisoned Blades. Essential for maximizing DOT output.' },
  ],
  armor: [
    { name: 'Bloodfeather Set', type: 'Light Armor', reason: 'Best armor for Assassin builds. Provides critical damage bonuses and Dexterity scaling.' },
    { name: 'Quetzal Hunter Set', type: 'Medium Armor', reason: 'Alternative with higher armor values. Good for players who want more survivability.' },
    { name: 'Gemini Ring', type: 'Accessory', reason: 'Health on critical hit. Combined with fast dagger attacks, provides immense self-sustain.' },
  ],
  playstyle: 'The Assassin is a high-skill melee build focused on burst damage from stealth and backstabs. Open every fight from stealth by approaching undetected with Silent Stride, then land a Backstab for massive damage multiplication. Use Daggers for their fast attack speed and poison application via Poisoned Blades. After the initial burst, use Double Jump and Updraft to escape, then re-engage from stealth. For enemies that cannot be backstabbed, build up stun with rapid attacks and use Slice and Dice for burst damage. The Bow serves as a ranged fallback that shares Dexterity scaling. Keep Battle Heal active — the fast attack speed of daggers means constant healing from critical hits. In Update 8, the proximity of Fatal Precision and Ranger skills to the dagger tree makes this build incredibly powerful.',
  pros: [
    'Highest burst damage potential via Backstab and Expose Weakness',
    'Dexterity scales both daggers AND bows for hybrid versatility',
    'Poison DOT provides passive damage while repositioning',
    'Incredible mobility with Double Jump, Updraft, and Graceful Stride',
    'Fast dagger attacks proc Battle Heal and critical hits constantly',
    'Stealth gameplay is highly engaging and rewarding',
  ],
  cons: [
    'Requires precise positioning for backstabs — high skill ceiling',
    'Fragile if caught out of position — light armor only',
    'Some enemies cannot be backstabbed, reducing effectiveness',
    'High stamina consumption from constant dodging and double jumping',
    'Stealth approach can be slow compared to face-tanking builds',
    'Requires patience and planning rather than rushing in',
  ],
  tips: [
    'Always open with a Backstab from stealth — it deals 3-5x normal damage',
    'Use Silent Stride + Graceful Stride to approach enemies undetected',
    'After backstabbing, immediately Double Jump away to safety and re-stealth',
    'Apply poison with dagger attacks, then retreat while DOT finishes enemies off',
    'Fatal Precision from the Ranger tree is essential — it is right next to the Assassin tree',
    'Use the Bow to pull enemies one at a time instead of fighting groups head-on',
    'Gemini Ring provides health on crit — with fast daggers, you heal constantly',
    'Stir-Fried Vegetables and Grilled Crab Meat are your best food buffs for DEX and CON',
  ],
  icon: <Target className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier stealth assassin with devastating backstab burst. High mobility and Dexterity-scaled hybrid daggers/bows make this a top-tier advanced build.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 8: ICE MAGE — CROWD CONTROL
// ═══════════════════════════════════════════════════════════════════

const iceMageBuild: BuildGuide = {
  id: 'ice-mage-crowd-control',
  buildName: 'Ice Mage — Crowd Control',
  archetype: 'Mage',
  difficulty: 'Intermediate',
  tier: 'A',
  stats: { strength: 0, dexterity: 4, intelligence: 10, constitution: 4, spirit: 5, endurance: 0 },
  skills: [
    { name: 'Wizard', tree: 'Wizard', description: 'Core skill that increases magic damage and enables staff specialization. Foundation of all mage builds.', priority: 'Core' },
    { name: 'Ice Shield', tree: 'Wizard', description: 'Creates a protective barrier of ice that absorbs incoming damage. Essential survivability for the fragile mage.', priority: 'Core' },
    { name: 'Frostbite', tree: 'Wizard', description: 'Applies a chilling debuff that slows enemy movement and attack speed. Primary crowd control tool.', priority: 'Core' },
    { name: 'Blizzard', tree: 'Wizard', description: 'Devastating AOE ice storm that deals continuous cold damage and applies Frostbite to all enemies caught within.', priority: 'Core' },
    { name: 'Cold Snap', tree: 'Wizard', description: 'Instantly freezes enemies afflicted with Frostbite. Combines with Blizzard for mass crowd control.', priority: 'Core' },
    { name: 'Mass Destruction', tree: 'Wizard', description: 'Massively increases area-of-effect spell damage. Essential for maximizing Blizzard damage output.', priority: 'Important' },
    { name: 'Quick Charge', tree: 'Wizard', description: 'Reduces staff spell charge time by 50%. Dramatically improves DPS and allows faster spell cycling.', priority: 'Important' },
    { name: 'Radiant Aura', tree: 'Healer', description: 'Passive healing and Shroud resistance. Critical survival tool for the fragile mage archetype.', priority: 'Important' },
    { name: 'Blink', tree: 'Healer', description: 'Teleport dodge replacement. Essential mobility for creating space and escaping melee threats.', priority: 'Core' },
    { name: 'Water Aura', tree: 'Healer', description: 'Passive healing per second based on Intelligence. Provides sustain without dedicating skill slots.', priority: 'Important' },
    { name: 'Terror', tree: 'Trickster', description: 'Spell critical hits stun the target for 4 seconds. Excellent crowd control synergy with ice spells.', priority: 'Important' },
    { name: 'Exalted', tree: 'Battlemage', description: 'Gain 1 Intelligence per 2 Flame Altar levels. Best INT scaling skill for endgame ice mages.', priority: 'Important' },
  ],
  weapons: [
    { name: 'Staff of Eternal Blizzard', type: 'Staff with Eternal Spell', reason: 'Primary weapon. Eternal Blizzard has infinite uses — no consumable management needed for your main AOE.' },
    { name: 'Wand of the Frozen North', type: 'Wand', reason: 'Secondary weapon for mana regeneration via Unity. Fast attacks with no charge time for quick Frostbite application.' },
    { name: 'Staff of the Glacial Peak', type: 'Staff', reason: 'Legendary ice staff with bonus cold damage and increased Frostbite duration. Endgame upgrade goal.' },
  ],
  armor: [
    { name: 'Tidecaller Set', type: 'Light Armor', reason: 'Best armor for pure mages. Provides Intelligence bonuses and enhances Water Aura healing effectiveness.' },
    { name: 'Aeromancer Set', type: 'Medium Armor', reason: 'Alternative with higher armor values and cold resistance. Good for ice mages who want extra survivability.' },
    { name: 'Gem of Frost', type: 'Gem', reason: 'Slot into armor for additional ice damage amplification and increased slow potency.' },
  ],
  playstyle: 'The Ice Mage is a crowd control specialist that excels at controlling the battlefield through chilling slows, freezes, and devastating AOE ice storms. Your primary strategy is to maintain distance, apply Frostbite to slow enemies, then use Cold Snap to freeze them solid. Blizzard is your main damage tool — it deals continuous cold damage in a large area and applies Frostbite to everything it touches. Against single targets, use your ice staff charges for high burst damage. Ice Shield absorbs damage when enemies get too close, and Blink provides emergency escape. In groups, your Blizzard + Cold Snap combo can lock down entire packs of enemies, making you invaluable for co-op play. The Water Aura + Radiant Aura combination provides passive healing and Shroud resistance to offset your low armor.',
  pros: [
    'Best crowd control in the game — slows, freezes, and stuns entire groups',
    'Blizzard provides massive AOE damage with continuous cold damage-over-time',
    'Water Aura + Radiant Aura provide passive healing and Shroud resistance',
    'Eternal Blizzard removes consumable management for core AOE ability',
    'Terror adds stun on spell crit for additional crowd control layers',
    'Extremely valuable in co-op — frozen enemies are defenseless for allies',
  ],
  cons: [
    'Extremely fragile — low armor and health pool',
    'Ice damage is lower than fire damage (no Arsonist/Pyromaniac equivalents)',
    'Staff spells require charge-up time, vulnerable to interrupts',
    'Mana management requires frequent wand swapping or potion use',
    'Some enemies are ice-immune or resistant (ice-based creatures)',
    'Requires excellent positioning and constant mobility via Blink',
  ],
  tips: [
    'Always apply Frostbite before using Cold Snap — the freeze only works on chilled enemies',
    'Use Blizzard as your opener against groups — it applies Frostbite to everything in the area',
    'Position yourself on high ground or behind terrain to charge spells safely',
    'Use Blink liberally — your survival depends on never letting enemies reach melee range',
    'Combine Terror with Blizzard for mass stuns on critical hits',
    'Ice Shield has a cooldown — save it for emergencies, not as your primary defense',
    'Craft Eternal Spell charges as soon as possible to eliminate consumable management',
    'Gem every armor piece with Gem of Frost for maximum ice damage and slow potency',
  ],
  icon: <Snowflake className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier crowd control mage. Freezes entire groups with Blizzard + Cold Snap combo. Lower raw damage than fire but superior battlefield control.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 9: MULTI-SHOT BOWMASTER
// ═══════════════════════════════════════════════════════════════════

const multiShotBowmasterBuild: BuildGuide = {
  id: 'multi-shot-bowmaster',
  buildName: 'Multi-Shot Bowmaster',
  archetype: 'Ranger',
  difficulty: 'Intermediate',
  tier: 'A',
  stats: { strength: 0, dexterity: 10, intelligence: 0, constitution: 4, spirit: 5, endurance: 4 },
  skills: [
    { name: 'Ranger', tree: 'Ranger', description: 'Grants +2 DEX, +2 END, +5 Stamina Recharge, +5% Crit Chance, +5% Crit Damage. The foundation of every archer build.', priority: 'Core' },
    { name: 'Multi Shot', tree: 'Ranger', description: 'Fire multiple arrows simultaneously in a spread pattern. The core skill that defines this build.', priority: 'Core' },
    { name: 'Spread', tree: 'Ranger', description: 'Widens the arrow spread of Multi Shot, hitting more enemies in a larger cone. Essential for AOE clearing.', priority: 'Core' },
    { name: 'Trigger', tree: 'Ranger', description: 'Multi Shot arrows trigger on-hit effects twice. Massively increases damage and utility output.', priority: 'Core' },
    { name: 'Ricochet', tree: 'Ranger', description: 'Arrows bounce to nearby enemies after hitting a target. Excellent for clearing clustered mobs.', priority: 'Core' },
    { name: 'Rebound', tree: 'Ranger', description: 'Arrows that miss their target bounce back for a second chance to hit. Reduces wasted shots significantly.', priority: 'Important' },
    { name: 'Fatal Precision', tree: 'Ranger', description: 'Increases critical hit chance and critical damage. The highest DPS node for archers.', priority: 'Important' },
    { name: 'Marksman', tree: 'Ranger', description: 'Increases bow damage by a flat percentage. Direct damage boost to all arrow types.', priority: 'Important' },
    { name: 'Veiled Vigor', tree: 'Ranger', description: 'Grants bonus health based on total Dexterity. Provides survivability without sacrificing damage.', priority: 'Important' },
    { name: 'Shell Shock', tree: 'Ranger', description: 'Arrows have a chance to stun enemies on hit. Adds crowd control to your AOE volleys.', priority: 'Important' },
    { name: 'Dessert Stomach', tree: 'Survivor', description: 'Unlocks an additional food slot. Critical for maintaining multiple stat buffs simultaneously.', priority: 'Important' },
    { name: 'Double Jump', tree: 'Survivor', description: 'Allows a second jump while airborne. Essential mobility for kiting and positioning.', priority: 'Core' },
  ],
  weapons: [
    { name: 'Drak Whistle', type: 'Legendary Bow', reason: 'Best-in-slot bow for Multi-Shot builds. High attack speed and the unique perk synergizes with spread arrow volleys.' },
    { name: 'Aerostriker', type: 'Legendary Bow', reason: 'Alternative legendary bow with bonus projectile speed and damage. Excellent for mid-range engagements.' },
    { name: 'Crystal Knives', type: 'Daggers (Secondary)', reason: 'Melee fallback when enemies close the gap. Benefits from shared Dexterity scaling and fast attack speed.' },
  ],
  armor: [
    { name: 'Quetzal Hunter Set', type: 'Medium Armor', reason: 'Best-in-slot archer armor. Provides DEX bonuses and synergizes with ranged damage playstyle.' },
    { name: 'Bloodfeather Set', type: 'Light Armor', reason: 'Alternative for higher mobility. Boosts critical damage and complements the high-dexterity build.' },
    { name: 'Gemini Ring', type: 'Accessory', reason: 'Grants health on critical hits. With Multi Shot firing many arrows, provides immense self-sustain.' },
  ],
  playstyle: 'The Multi-Shot Bowmaster is an AOE-focused archer build that specializes in clearing large groups of enemies with devastating spread arrow volleys. Your core loop is: position yourself at medium range, fire Multi Shot with Spread for wide cone coverage, and watch arrows bounce between enemies via Ricochet while triggering on-hit effects twice with Trigger. Rebound ensures that even missed arrows find targets. Against tightly packed mobs, a single Multi Shot volley can clear the entire group. Use Double Jump and Updraft to maintain optimal positioning and escape melee threats. Keep Fatal Precision and Marksman active for maximum damage. For single targets, switch to precision shots or use Crystal Knives at close range. This build shines in dense enemy areas where Ricochet and Spread can reach their full potential.',
  pros: [
    'Best AOE clear among all archer builds — Multi Shot + Spread + Ricochet decimates groups',
    'Trigger doubles on-hit effects, massively increasing damage and utility',
    'Rebound reduces wasted arrows, improving ammo efficiency',
    'Dexterity scales both bows and daggers for hybrid versatility',
    'Fast-paced, satisfying gameplay with constant arrow volleys',
    'Strong self-sustain via Gemini Ring health-on-crit with many projectiles',
  ],
  cons: [
    'Lower single-target damage compared to Ranger Sniper',
    'Spread pattern makes long-range precision difficult',
    'High stamina consumption from continuous Multi Shot use',
    'Requires good positioning to maximize spread coverage',
    'Less effective against spread-out enemies where Ricochet cannot chain',
    'Resource intensive — requires stocking many arrows',
  ],
  tips: [
    'Always use Multi Shot + Spread together — the wider cone hits significantly more enemies',
    'Position yourself so enemies are clustered together for maximum Ricochet bounces',
    'Trigger doubles on-hit effects — pair with Shell Shock for double stun chance per volley',
    'Rebound is most effective in enclosed spaces where missed arrows can bounce back',
    'Use Double Jump + Updraft to maintain medium range — too close and Spread is ineffective',
    'Keep Gemini Ring equipped — Multi Shot fires many arrows, each with crit chance',
    'Invest in Dessert Stomach early for 4 food slots: DEX, CON, recovery, and damage buffs',
    'For boss fights, switch to precision shots rather than Spread for concentrated damage',
  ],
  icon: <Crosshair className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'A-tier AOE archer. Multi Shot + Spread + Ricochet clears entire groups. Trigger doubles on-hit effects. Best for dense enemy areas.',
};

// ═══════════════════════════════════════════════════════════════════
// BUILD 10: FIRE MAGE STARTER (BEGINNER)
// ═══════════════════════════════════════════════════════════════════

const fireMageStarterBuild: BuildGuide = {
  id: 'fire-mage-starter',
  buildName: 'Fire Mage Starter',
  archetype: 'Mage',
  difficulty: 'Beginner',
  tier: 'B',
  stats: { strength: 0, dexterity: 0, intelligence: 8, constitution: 6, spirit: 4, endurance: 0 },
  skills: [
    { name: 'Wizard', tree: 'Wizard', description: 'Core skill that increases magic damage and enables staff specialization. Foundation of all mage builds.', priority: 'Core' },
    { name: 'Fireball', tree: 'Wizard', description: 'Launches a explosive fireball that deals AOE fire damage on impact. Your primary damage spell.', priority: 'Core' },
    { name: 'Arsonist', tree: 'Wizard', description: 'Increases all fire damage by 10%. Stack with Pyromaniac for +30% total fire damage bonus.', priority: 'Core' },
    { name: 'Pyromaniac', tree: 'Wizard', description: 'Further increases all fire damage by 20%. Combined with Arsonist for devastating fire spells.', priority: 'Core' },
    { name: 'Flame Ward', tree: 'Wizard', description: 'Creates a protective flame barrier around you that damages nearby enemies. Adds survivability and passive damage.', priority: 'Core' },
    { name: 'Quick Charge', tree: 'Wizard', description: 'Reduces staff spell charge time by 50%. Makes Fireball much more responsive and beginner-friendly.', priority: 'Important' },
    { name: 'Mass Destruction', tree: 'Wizard', description: 'Increases AOE spell damage. Boosts Fireball explosion radius and damage significantly.', priority: 'Important' },
    { name: 'Radiant Aura', tree: 'Healer', description: 'Passive healing and Shroud resistance. Provides survivability without active management.', priority: 'Important' },
    { name: 'Blink', tree: 'Healer', description: 'Teleport dodge replacement. Essential escape tool when enemies get too close.', priority: 'Core' },
    { name: 'Water Aura', tree: 'Healer', description: 'Passive healing per second based on Intelligence. Provides sustain without dedicating skill slots.', priority: 'Important' },
    { name: 'Dessert Stomach', tree: 'Survivor', description: 'Unlocks an additional food slot. Extra food buffs provide more stats and recovery for beginners.', priority: 'Optional' },
    { name: 'This is the Way', tree: 'Wizard', description: 'All magic weapon damage increased by 10%. Flat damage boost to staffs and wands.', priority: 'Important' },
  ],
  weapons: [
    { name: 'Staff of Eternal Fireball', type: 'Staff with Eternal Spell', reason: 'Primary weapon. Eternal Fireball has infinite uses — no consumable management needed. Perfect for beginners.' },
    { name: 'Wand of Embers', type: 'Wand', reason: 'Secondary weapon for mana regeneration via Unity. Fast attacks when Fireball is on cooldown or mana is low.' },
    { name: 'Fire Spike Staff', type: 'Staff', reason: 'Early-game fire staff with bonus fire damage. Easy to craft and upgrade as you progress.' },
  ],
  armor: [
    { name: 'Sage Set', type: 'Medium Armor', reason: 'Best beginner mage armor. Provides Intelligence bonuses while offering decent protection with medium armor values.' },
    { name: 'Warden Set (Mixed)', type: 'Heavy/Medium Mix', reason: 'Higher armor values for survivability. Enshrouded has no set bonuses — mix pieces for optimal stats.' },
    { name: 'Gem of Burning', type: 'Gem', reason: 'Slot into armor for additional fire damage amplification. Stacks with Arsonist and Pyromaniac.' },
  ],
  playstyle: 'The Fire Mage Starter is a beginner-friendly mage build that prioritizes survivability while learning the fundamentals of spellcasting. Unlike the fragile Wizard glass cannon, this build invests more points into Constitution for a larger health pool and uses medium armor for better protection. Your primary weapon is the Staff with Eternal Fireball — it has infinite uses, so you never need to worry about crafting spell charges. The core damage loop is simple: charge and fire Fireball for AOE explosions, then use your Wand for quick attacks while mana regenerates. Arsonist + Pyromaniac provide a massive +30% fire damage bonus passively. Flame Ward adds a protective fire barrier that damages nearby enemies, giving you breathing room when they get close. Water Aura and Radiant Aura provide passive healing without any active management. Blink is your emergency escape — use it when enemies close the distance. This build is forgiving, straightforward, and teaches new players mage fundamentals while keeping them alive.',
  pros: [
    'Beginner-friendly — higher Constitution and medium armor for better survivability',
    'Eternal Fireball has infinite uses — no consumable management',
    'Arsonist + Pyromaniac provide massive +30% fire damage passively',
    'Flame Ward provides both protection and passive damage to nearby enemies',
    'Passive healing via Water Aura + Radiant Aura requires no active management',
    'Simple gameplay loop — charge Fireball, release, repeat',
  ],
  cons: [
    'Lower Intelligence means less damage than optimized Wizard builds',
    'Medium armor reduces mobility compared to light armor mages',
    'Mana pool is smaller due to lower Spirit investment',
    'Less versatile than Battlemage — no melee fallback option',
    'Fire damage is less effective against fire-resistant enemies',
    'Simpler build means less room for skill expression',
  ],
  tips: [
    'Always charge Fireball to at least 75% for maximum damage — fully charged deals massively more damage',
    'Use Flame Ward proactively when enemies approach — it damages and can deter them',
    'Switch to Wand attacks when mana drops below 30% to regenerate with Unity',
    'Blink is your lifeline — save it for emergencies, not for mobility',
    'Craft Eternal Fireball as soon as possible to eliminate consumable worries',
    'Gem armor pieces with Gem of Burning for maximum fire damage output',
    'Keep food buffs active: Intelligence and Constitution foods are your priority',
    'Sleep in a bed before tough fights for the Well Rested buff (doubles health)',
  ],
  icon: <Flame className="w-6 h-6 text-[var(--text-gold)]" />,
  summary: 'B-tier beginner fire mage. Higher survivability with medium armor and Constitution. Eternal Fireball with +30% fire damage. The best mage build for new players.',
};

// ═══════════════════════════════════════════════════════════════════
// EXPORT SUBSECTIONS
// ═══════════════════════════════════════════════════════════════════

export const buildSubSections: BuildSubSection[] = [
  {
    id: 'ranged-dps',
    title: 'Ranged DPS',
    description: 'Bow-based builds that dominate from a distance with superior kiting and AOE potential.',
    icon: <Crosshair className="w-5 h-5 text-green-400" />,
    builds: [rangerSniperBuild, multiShotBowmasterBuild, assassinBuild],
  },
  {
    id: 'magic-dps',
    title: 'Magic DPS',
    description: 'Spellcasters wielding staffs and wands for devastating magical damage and crowd control.',
    icon: <Flame className="w-5 h-5 text-blue-400" />,
    builds: [wizardBuild, iceMageBuild, battlemageBuild, fireMageStarterBuild],
  },
  {
    id: 'melee-dps',
    title: 'Melee DPS',
    description: 'Close-range powerhouses that trade safety for raw damage output and satisfying combat.',
    icon: <Sword className="w-5 h-5 text-red-400" />,
    builds: [barbarianBuild],
  },
  {
    id: 'tank',
    title: 'Tank',
    description: 'Heavily armored frontliners designed to absorb punishment and protect their allies.',
    icon: <Shield className="w-5 h-5 text-yellow-400" />,
    builds: [tankBuild],
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Healers and buffers that enable their team to tackle the hardest content in Embervale.',
    icon: <Heart className="w-5 h-5 text-pink-400" />,
    builds: [healerBuild],
  },
];

export const allBuilds: BuildGuide[] = buildSubSections.flatMap((s) => s.builds);

export function getBuildById(id: string): BuildGuide | undefined {
  return allBuilds.find((b) => b.id === id);
}

export function getBuildsByArchetype(archetype: string): BuildGuide[] {
  return allBuilds.filter((b) => b.archetype === archetype);
}

export function getBuildsByDifficulty(difficulty: string): BuildGuide[] {
  return allBuilds.filter((b) => b.difficulty === difficulty);
}

export function getBuildsByTier(tier: string): BuildGuide[] {
  return allBuilds.filter((b) => b.tier === tier);
}
