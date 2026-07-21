import {
  Sword, Zap, Crosshair, TreePine, Star
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

function InfoBox({ title, children, type = 'info' }: { title: string; children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const colors = {
    info: { border: 'border-[#6a9ad0]', bg: 'bg-[#6a9ad0]/5', icon: 'text-[#6a9ad0]' },
    warning: { border: 'border-orange-400', bg: 'bg-orange-400/5', icon: 'text-orange-400' },
    tip: { border: 'border-[var(--accent-green)]', bg: 'bg-[var(--accent-green)]/5', icon: 'text-[var(--accent-green)]' },
  };
  const c = colors[type];
  return (
    <div className={`${c.bg} border-l-2 ${c.border} pl-4 py-3 pr-3 rounded-r my-4`}>
      <h4 className={`font-cinzel text-xs font-bold ${c.icon} mb-2 tracking-wider uppercase`}>{title}</h4>
      <div className="text-xs text-[var(--text-secondary)] leading-relaxed">{children}</div>
    </div>
  );
}

function SkillNode({ name, cost, desc }: { name: string; cost: number; desc: string }) {
  return (
    <div className="game-panel corner-decor p-2.5 mb-1.5 flex items-start gap-2.5">
      <div className="flex-shrink-0 w-7 h-7 bg-[var(--bg-secondary)] rounded border border-[var(--border-gold)]/20 flex items-center justify-center">
        <span className="text-[9px] font-bold text-[var(--text-gold)]">{cost}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{name}</h4>
        <p className="text-[9px] text-[var(--text-secondary)]">{desc}</p>
      </div>
    </div>
  );
}

function SkillList({ items }: { items: { name: string; cost: number; desc: string }[] }) {
  return (
    <div className="space-y-1">
      {items.map((s) => (
        <SkillNode key={s.name} name={s.name} cost={s.cost} desc={s.desc} />
      ))}
    </div>
  );
}

function BuildCard({ name, tier, level, flame, points, desc, skills, weapons, armor, food, tips }: {
  name: string; tier: string; level: string; flame: string; points: string; desc: string;
  skills: string[]; weapons: string; armor: string; food: string; tips: string;
}) {
  const tierColors: Record<string, string> = {
    'S': 'text-yellow-400 border-yellow-400/30',
    'A': 'text-purple-400 border-purple-400/30',
    'B': 'text-blue-400 border-blue-400/30',
    'C': 'text-gray-400 border-gray-400/30',
  };
  const tc = tierColors[tier] || tierColors['B'];
  return (
    <div className="game-panel corner-decor p-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">{name}</h4>
        <span className={`text-xs font-bold px-2 py-0.5 rounded border ${tc}`}>Tier {tier}</span>
      </div>
      <div className="flex gap-3 text-[10px] text-[var(--text-muted)] mb-2">
        <span>Level: {level}</span>
        <span>Flame: {flame}</span>
        <span>Points: {points}</span>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mb-3">{desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        <div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Key Skills</div>
          <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
            {skills.map((s) => <li key={s}>• {s}</li>)}
          </ul>
        </div>
        <div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Gear</div>
          <div className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Weapon:</strong> {weapons}</div>
          <div className="text-xs text-[var(--text-secondary)] mt-1"><strong className="text-[var(--text-primary)]">Armor:</strong> {armor}</div>
          <div className="text-xs text-[var(--text-secondary)] mt-1"><strong className="text-[var(--text-primary)]">Food:</strong> {food}</div>
        </div>
      </div>
      <div className="text-xs text-orange-400 mt-2"><strong>Tip:</strong> {tips}</div>
    </div>
  );
}


const core_skills_skills = [
  { name: 'Lumberjack', cost: 1, desc: 'Tools deal 10% increased damage against wood. Includes trees and wooden terrain.' },
  { name: 'Felling Axe Specialization', cost: 3, desc: 'Unlocks Special Abilities of Felling Axes. Press [R] to unleash after generating enough Focus.' },
  { name: 'Focus', cost: 0, desc: 'Generate Focus by attacking. Focus is used to trigger Special Abilities of weapons.' },
  { name: 'Quality Gear', cost: 2, desc: 'Tools have a 20% chance to restore 1 durability on hit.' },
  { name: 'Miner', cost: 4, desc: 'When mining resources, 10% chance to get one additional resource.' },
  { name: 'Mason', cost: 2, desc: 'Pickaxe deals 30% more damage against stone objects, including resource veins.' },
  { name: 'Power Parry', cost: 2, desc: 'Enemy Stun Bar gain from parries increased by 30%.' },
  { name: 'Merciless Attack', cost: 2, desc: 'Press [E] to deal massive damage to an overpowered enemy. Fill stun bar by attacking while they block or parrying.' },
  { name: 'Saviour', cost: 2, desc: 'Only need 3 seconds instead of 6 to revive an ally.' },
  { name: 'Well Rested', cost: 1, desc: 'Base duration for Rested buff increased by 5 minutes. Increase Comfort to further extend.' },
  { name: 'Backstab Damage', cost: 2, desc: 'Increase damage dealt from behind by 25%.' },
  { name: 'Sneak Attack', cost: 3, desc: 'Sneak up to an unsuspecting enemy and press [E]. Deals +900% increased damage.' },
  { name: 'Opportunity', cost: 3, desc: 'Increases multiplier of Merciless Attack and Sneak Attack by 100%.' },
  { name: 'Fisherman\'s Resolve', cost: 5, desc: 'Increases Fishing Endurance by 30% for extended battles with hooked fish.' },
  { name: 'Giant Slayer Hook', cost: 5, desc: 'Use Grappling Hook to pull yourself towards large enemies during combat.' },
  { name: 'Grounding Hook', cost: 2, desc: 'Use Grappling Hook to pull flying enemies towards you during combat.' },
  { name: 'Good Metabolism', cost: 2, desc: 'Increases health restored from healing orbs and potions.' },
  { name: 'Counterstrike', cost: 3, desc: '20% chance to reflect 50% of incoming damage back at attacker as magical strike.' },
];

const ranger_skills = [
  { name: 'Dexterity', cost: 1, desc: '+1 Dexterity. Bow and Dagger damage +5% per point.' },
  { name: 'Marksman', cost: 2, desc: 'All damage with ranged weapons +10%.' },
  { name: 'Counter Battery', cost: 2, desc: '+15% damage to ranged enemies.' },
  { name: 'Eagles Bane', cost: 3, desc: 'Damage against flying enemies +30%.' },
  { name: 'Bee Sting', cost: 3, desc: 'Drawing bow while in air slows fall. Each shot gives small push for more air time. Cost: 10 stamina/sec.' },
  { name: 'Sharpshooter', cost: 2, desc: 'All ranged damage +20%.' },
  { name: 'Skill Shot', cost: 3, desc: 'Damage to enemy heads +20%.' },
  { name: 'Multi Shot', cost: 3, desc: '20% chance to spawn flurry of arrows with regular arrows. Costs additional arrows.' },
  { name: 'Multi Shot Spread', cost: 4, desc: '25% chance to spawn additional projectile from Multi Shot flurry. Does not subtract ammo.' },
  { name: 'Multi Shot Trigger', cost: 3, desc: 'ALL arrows (including special) can trigger Multi Shot. Special projectiles subtract from ammo.' },
  { name: 'Ranger', cost: 4, desc: '+2 END, +2 DEX, +5 Stamina Recharge, +5% Crit Chance, +5% Crit Damage.' },
];

const assassin_skills = [
  { name: 'Dexterity', cost: 1, desc: '+1 Dexterity. Bow and Dagger damage +5% per point.' },
  { name: 'Airborne', cost: 2, desc: 'Gliders consume 30% less stamina.' },
  { name: 'Endurance', cost: 1, desc: '+1 Endurance. +10 Stamina per point.' },
  { name: 'Sniper', cost: 2, desc: 'Critical hit chance +10% with ranged weapons.' },
  { name: 'Vitality Surge', cost: 3, desc: 'Critical strike with ranged weapon restores 5 stamina.' },
  { name: 'Blessed Arrows', cost: 3, desc: 'Critical hit with bow regenerates 20 mana.' },
  { name: 'Bounty Bonanza', cost: 3, desc: 'Defeating Fell enemy with headshot gives group +5 XP.' },
  { name: 'Shell Shock', cost: 3, desc: 'Infuse ranged explosives with mana. Stun enemies up to 1 sec. Cost: 5 mana per enemy.' },
  { name: 'Ricochets', cost: 4, desc: 'For every target hit with Exploding Arrow, damage +1%.' },
  { name: 'Graceful Stride', cost: 5, desc: 'Gain 1 DEX for every 2 Flame levels.' },
  { name: 'Chain Reaction', cost: 5, desc: 'Enemies hit with Exploding Arrow have 20% chance to trigger secondary explosion (50% damage).' },
  { name: 'Silent Stride', cost: 3, desc: 'Movement speed while sneaking increased.' },
  { name: 'Updraft', cost: 4, desc: 'Jump while gliding for height boost. Once per flight. Cost: 100 Mana.' },
];

const beastmaster_skills = [
  { name: 'Tame Beast', cost: 3, desc: 'Convert wild animals to allies.' },
  { name: 'Pack Leader', cost: 3, desc: 'Pets deal more damage.' },
  { name: 'Beast Bond', cost: 3, desc: 'Share buffs with pets.' },
  { name: 'Call of the Wild', cost: 4, desc: 'Summon temporary spirit animal.' },
  { name: 'Feral Rage', cost: 4, desc: 'Pets enrage at low health, dealing +30% damage.' },
  { name: 'Poison Resistance', cost: 2, desc: 'Reduces poison damage from Shroud and enemies.' },
];

const survivor_skills = [
  { name: 'Double Jump', cost: 4, desc: 'Second jump in mid-air. Essential for all builds.' },
  { name: 'Airborne', cost: 2, desc: 'Gliders consume 30% less stamina.' },
  { name: 'Updraft', cost: 4, desc: 'Jump while gliding for height boost. Once per flight. Cost: 100 Mana.' },
  { name: 'Runner', cost: 3, desc: 'Sprint speed +15%. Stamina drain while sprinting -20%.' },
  { name: 'Well Rested', cost: 1, desc: 'Rested buff duration +5 minutes.' },
  { name: 'Miner', cost: 4, desc: '10% chance for additional resource when mining.' },
  { name: 'Lumberjack', cost: 1, desc: 'Tools deal +10% damage against wood.' },
  { name: 'Mason', cost: 2, desc: 'Pickaxe deals +30% damage against stone.' },
  { name: 'Good Metabolism', cost: 2, desc: 'More health from healing orbs and potions.' },
  { name: 'Comfort', cost: 2, desc: 'Comfort bonus from beds and furniture increased.' },
  { name: 'Climbing Speed', cost: 2, desc: 'Climb ropes and ladders 30% faster.' },
  { name: 'Swimmer', cost: 3, desc: 'Swim 25% faster. Diving stamina drain -30%.' },
  { name: 'Trader', cost: 2, desc: 'Buy items 15% cheaper. Sell items for 15% more.' },
  { name: 'Comfort', cost: 2, desc: 'Comfort bonus from beds and furniture increased by 20%.' },
];

const wizard_skills = [
  { name: 'Intelligence', cost: 1, desc: '+1 Intelligence. Magic damage +5% per point.' },
  { name: 'Spell Mastery', cost: 2, desc: '+10% spell damage per rank.' },
  { name: 'Mana Pool', cost: 2, desc: '+30 maximum mana.' },
  { name: 'Quick Charge', cost: 3, desc: 'Faster staff charge time.' },
  { name: 'Elemental Fury: Fire', cost: 3, desc: 'Fire spell damage +20%. Burn duration +2s.' },
  { name: 'Elemental Fury: Ice', cost: 3, desc: 'Ice spell damage +20%. Freeze chance +15%.' },
  { name: 'Elemental Fury: Lightning', cost: 3, desc: 'Lightning spell damage +20%. Chain hit +1 target.' },
  { name: 'Arcane Barrage', cost: 4, desc: 'Staff attacks fire multiple piercing projectiles.' },
  { name: 'Arsonist', cost: 2, desc: 'Fire damage +25%. Fireball explosion radius +30%.' },
  { name: 'Meteor', cost: 5, desc: 'Summon devastating meteor. Massive AOE fire damage.' },
  { name: 'Blink', cost: 4, desc: 'Teleport short distance. Replaces dodge roll. Cost: 30 Mana.' },
  { name: 'Mana Regeneration', cost: 3, desc: 'Mana regeneration +25% out of combat.' },
  { name: 'Spell Pierce', cost: 4, desc: 'Spells can pierce through 1 additional enemy.' },
  { name: 'Combo Caster', cost: 3, desc: 'Successful spell hits reduce next spell\'s charge time by 15%.' },
];

const battlemage_skills = [
  { name: 'Intelligence', cost: 1, desc: '+1 Intelligence. Magic damage +5% per point.' },
  { name: 'Unity', cost: 3, desc: 'Wand damage has 24% chance to recover 4% mana.' },
  { name: 'Wand Master', cost: 3, desc: '30% chance to spawn additional wand projectile (50% damage).' },
  { name: 'Sting', cost: 3, desc: 'Repeated wand damage +20%.' },
  { name: 'Eternal Spark', cost: 3, desc: 'Wand projectiles 25% chance not to consume durability.' },
  { name: 'Life Burst', cost: 4, desc: 'Killing enemy with magic weapon heals allies within 15m (3× INT).' },
  { name: 'Spirit', cost: 1, desc: '+1 Spirit. +20 Mana per point.' },
  { name: 'Life Essences', cost: 5, desc: 'Maximum health increased 5× by Intelligence attribute.' },
  { name: 'Arcane Deflection', cost: 3, desc: 'Gain 20 mana on successful parry.' },
  { name: 'Evasion Attack', cost: 4, desc: 'Melee evade attack dashes towards enemy. Cost: 20 Stamina.' },
  { name: 'Battle Heal', cost: 3, desc: 'Critical damage with melee weapon heals 5% max health.' },
  { name: 'Bloodletting', cost: 3, desc: 'Critical hit with magical weapon: 50% chance to spawn 2 resource orbs.' },
  { name: 'Blood Magic', cost: 4, desc: 'Below 20% mana: restore up to 25% mana at cost of 1 health per mana. CD: 2 min.' },
  { name: 'Flame Weapon', cost: 3, desc: 'Enchant melee weapon with fire damage.' },
  { name: 'Thunder Strike', cost: 4, desc: 'Lightning melee burst damage on charged attack.' },
];

const healer_skills = [
  { name: 'Spirit', cost: 1, desc: '+1 Spirit. +20 Mana per point.' },
  { name: 'Water Aura', cost: 3, desc: 'Regenerate health over time for self and nearby allies.' },
  { name: 'Waters of Life', cost: 4, desc: 'Powerful burst heal.' },
  { name: 'Healing Wave', cost: 4, desc: 'AOE team heal.' },
  { name: 'Revitalize', cost: 3, desc: 'Faster health regeneration for allies.' },
  { name: 'Cleanse', cost: 3, desc: 'Remove debuffs and status effects.' },
  { name: 'Martyr', cost: 5, desc: 'Sacrifice health to heal allies. Powerful emergency heal.' },
  { name: 'Blink', cost: 4, desc: 'Teleport short distance. Replaces dodge roll.' },
  { name: 'Battle Heal', cost: 3, desc: 'Critical melee damage heals 5% max health.' },
];

const trickster_skills = [
  { name: 'Intelligence', cost: 1, desc: '+1 Intelligence. Magic damage +5% per point.' },
  { name: 'Frost Nova', cost: 3, desc: 'Freeze enemies in AOE radius.' },
  { name: 'Blink', cost: 4, desc: 'Teleport short distance. Replaces dodge roll.' },
  { name: 'Confusion', cost: 4, desc: 'Enemies attack each other.' },
  { name: 'Gravity Well', cost: 4, desc: 'Pull enemies together into one spot.' },
  { name: 'Time Warp', cost: 5, desc: 'Slow enemy movement and attacks in AOE.' },
  { name: 'Begone!', cost: 3, desc: 'Mana-cost punch that stuns targets. Emergency button.' },
  { name: 'Counterstrike', cost: 3, desc: '20% chance to reflect 50% incoming damage.' },
];

const warrior_skills = [
  { name: 'Constitution', cost: 1, desc: '+1 Constitution. +50 Health per point.' },
  { name: 'The Warrior\'s Path', cost: 2, desc: 'Melee weapon damage +10%.' },
  { name: 'Strength', cost: 1, desc: '+1 Strength. Melee damage +5% per point.' },
  { name: 'Thrust', cost: 2, desc: 'Piercing melee damage +10%.' },
  { name: 'Brute', cost: 2, desc: 'Blunt melee damage +10%.' },
  { name: 'Slasher', cost: 2, desc: 'Cutting melee damage +10%.' },
  { name: 'Hammer Time', cost: 3, desc: 'Blunt melee damage +20%.' },
  { name: 'Pierce', cost: 3, desc: 'Piercing melee damage +20%.' },
  { name: 'Butcher', cost: 3, desc: 'Cutting melee damage +20%.' },
  { name: 'Veteran', cost: 4, desc: 'Melee critical hit chance +10%.' },
  { name: 'Titan Edge', cost: 4, desc: 'Greatsword damage +10%.' },
  { name: 'Swift Blades', cost: 5, desc: 'Attack faster with one-handed swords and axes.' },
  { name: 'Feast', cost: 3, desc: 'Meat increases health by additional 15%.' },
  { name: 'Steadfast', cost: 3, desc: 'Defeating enemy with melee restores 1 weapon durability.' },
  { name: 'Weapon Bond', cost: 3, desc: 'Current weapon gains +5% damage. Bonus increases the longer you use the same weapon type.' },
  { name: 'Second Wind', cost: 3, desc: 'When health drops below 20%, gain +30 stamina and +10% damage for 10 seconds. CD: 60s.' },
];

const tank_skills = [
  { name: 'Constitution', cost: 1, desc: '+1 Constitution. +50 Health per point.' },
  { name: 'Shiny Plates', cost: 2, desc: 'Physical armor rating +10%.' },
  { name: 'Shield Mastery', cost: 3, desc: 'Improved block and parry efficiency.' },
  { name: 'Iron Will', cost: 3, desc: 'Damage reduction while blocking.' },
  { name: 'Defensive Stance', cost: 3, desc: 'Trade damage for defense.' },
  { name: 'Counterstrike', cost: 3, desc: '20% chance to reflect 50% incoming damage.' },
  { name: 'Purification', cost: 3, desc: 'Defeating Shroud foe with melee replenishes +5s Shroud Time.' },
  { name: 'Brute', cost: 2, desc: 'Blunt melee damage +10%.' },
  { name: 'Evasion Attack', cost: 4, desc: 'Melee evade attack dashes to enemy. Cost: 20 Stamina.' },
  { name: 'Battle Heal', cost: 3, desc: 'Critical melee damage heals 5% max health.' },
  { name: 'Bloodletting', cost: 3, desc: 'Critical magical hit: 50% chance to spawn 2 resource orbs.' },
  { name: 'Blood Magic', cost: 4, desc: 'Below 20% mana: restore 25% mana at cost of health. CD: 2 min.' },
];

const barbarian_skills = [
  { name: 'Strength', cost: 1, desc: '+1 Strength. Melee damage +5% per point.' },
  { name: 'Heavy Handed', cost: 2, desc: 'Enemy stun bar +20% when attacking into their block.' },
  { name: 'Relentless', cost: 5, desc: 'Critical damage with 2H weapon: +10% crit chance for next hit.' },
  { name: 'Breach', cost: 3, desc: 'Overpowered enemy suffers +100% melee damage for 3s.' },
  { name: 'Shockwave', cost: 3, desc: 'Parry or overpower triggers shockwave pushing back enemies.' },
  { name: 'Constitution', cost: 1, desc: '+1 Constitution. +50 Health per point.' },
  { name: 'Heavy Specialization', cost: 5, desc: 'Attack faster with Two-Handed weapons.' },
  { name: 'Whirlwind Crescendo', cost: 5, desc: '2H weapon: whirl attack at end of combo. Cost: 75 Stamina.' },
  { name: 'Barbarian', cost: 5, desc: 'Gain 1 Strength per 2 Flame levels.' },
  { name: 'Blood Rage', cost: 5, desc: 'Enemy killed within 10m: melee damage +20% for 10s.' },
  { name: 'Bash', cost: 5, desc: 'Parry bashes enemy for 20 blunt damage. Scales with Strength.' },
  { name: 'Wet Dog', cost: 4, desc: 'Wet/Soaked debuffs reduced: Stamina -20% instead of -30%.' },
  { name: 'Soaked Dog', cost: 2, desc: 'Wet/Soaked debuffs further reduced: Stamina -10% instead of -20%.' },
  { name: 'Splash Dash', cost: 5, desc: 'Evasive dash while swimming or diving. Cost: 40 Stamina.' },
  { name: 'Absorb', cost: 3, desc: '10% chance to generate 1 mana per health lost from magic damage.' },
  { name: 'Snap', cost: 4, desc: 'Restore 10% mana when triggering Merciless Attack.' },
  { name: 'Soul Leech', cost: 4, desc: 'Killing enemy with melee: allies within 15m gain 20 mana.' },
];

const athlete_skills = [
  { name: 'Crash Down Attack', cost: 3, desc: 'Jump attack during descent. +50% weapon damage in small AOE. Cost: 35-60 Stamina.' },
  { name: 'Upwards Slash Attack', cost: 3, desc: 'Upward strike during jump ascent. Closes distance on flying enemies. Cost: 25 Stamina.' },
  { name: 'Kick', cost: 3, desc: 'Kick while blocking. Massive stun bar fill + push back. Scales with DEX.' },
  { name: 'Vigorous Deflection', cost: 2, desc: 'Gain 30 stamina when parrying.' },
  { name: 'Second Wind', cost: 3, desc: 'Faster stamina regeneration in combat.' },
  { name: 'Dodge Mastery', cost: 3, desc: 'Extended dodge iframes.' },
  { name: 'Lightfoot', cost: 3, desc: 'Move faster while attacking.' },
  { name: 'Combat Roll', cost: 3, desc: 'Attack immediately after dodging.' },
  { name: 'Runner', cost: 3, desc: 'Sprint speed +15%. Sprint stamina drain -20%.' },
];


export const skillsSubSections: SubSection[] = [
  {
    id: 'skill-tree-overview',
    title: 'Skill Tree Overview',
    icon: <TreePine className="w-5 h-5" />,
    summary: 'Complete skill tree with 162 skills across 4 archetypes, 12 sub-trees. 184 max skill points.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">162 skills</strong> organized across 
          <strong className="text-[var(--text-primary)]"> 4 base archetypes</strong> (Mage, Ranger, Survivor, Warrior) with 
          <strong className="text-[var(--text-primary)]"> 12 sub-trees</strong>. Your build is determined by where you spend your 
          <strong className="text-[var(--text-gold)]"> 184 maximum skill points</strong>.
        </p>

        <InfoBox title="Skill Point Sources (Verified)" type="info">
          <ul className="space-y-1">
            <li>• <strong>Leveling:</strong> 2 points per level × 44 levels = 88 points</li>
            <li>• <strong>Shroud Roots:</strong> 1 point each × 39 total = 39 points</li>
            <li>• <strong>Elixir Wells:</strong> 3 points each × 19 total = 57 points</li>
            <li>• <strong className="text-[var(--text-gold)]">Total Maximum: 184 points</strong></li>
          </ul>
        </InfoBox>

        <InfoBox title="Respec System (Verified)" type="tip">
          Reset at any <strong>Flame Altar</strong>. Cost: <strong>Goo + biome-tier materials</strong> (NOT Runes per point). 
          No cooldown, no level penalty. Experiment freely — you can try every build on one character.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Four Archetypes</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="game-panel corner-decor p-3 border-l-2 border-red-500">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Warrior (Melee)</h4>
            <p className="text-xs text-[var(--text-secondary)]">45 skills. Sub-trees: Warrior, Tank, Barbarian, Athlete. Scales with STR + CON.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-500">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Mage (Magic)</h4>
            <p className="text-xs text-[var(--text-secondary)]">50 skills. Sub-trees: Wizard, Battlemage, Healer, Trickster. Scales with INT + SPI.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-500">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Ranger (Ranged)</h4>
            <p className="text-xs text-[var(--text-secondary)]">53 skills. Sub-trees: Ranger, Assassin, Beastmaster, Survivor. Scales with DEX + END.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-500">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Survivor (Utility)</h4>
            <p className="text-xs text-[var(--text-secondary)]">14 skills. Traversal, crafting, gathering. Every build should grab Double Jump + Updraft.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Core Skills (Universal)</h3>
        <SkillList items={core_skills_skills} />
      </div>
    ),
  },
  {
    id: 'warrior-archetypes',
    title: 'Warrior Archetypes',
    icon: <Sword className="w-5 h-5" />,
    summary: 'Warrior, Tank, Barbarian, Athlete — 45 melee skills in the red wing.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Warrior archetype has <strong className="text-[var(--text-primary)]">45 skills</strong> across 4 sub-trees. 
          All scale primarily with <strong className="text-red-400">Strength</strong> (+5% melee damage/point) and 
          <strong className="text-green-400"> Constitution</strong> (+50 health/point).
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Warrior (14 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Core melee DPS. Sword/axe specialization, combo damage, crit.</p>
        <SkillList items={warrior_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Tank (12 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Survivability specialist. Block, parry, damage reduction.</p>
        <SkillList items={tank_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Barbarian (17 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Two-handed weapon master. Heavy attacks, bleed, rage.</p>
        <SkillList items={barbarian_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Athlete (9 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Mobility warrior. Jump attacks, kicks, stamina.</p>
        <SkillList items={athlete_skills} />
      </div>
    ),
  },
  {
    id: 'mage-archetypes',
    title: 'Mage Archetypes',
    icon: <Zap className="w-5 h-5" />,
    summary: 'Wizard, Battlemage, Healer, Trickster — 50 magic skills in the blue wing.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Mage archetype has <strong className="text-[var(--text-primary)]">50 skills</strong> across 4 sub-trees. 
          Scales with <strong className="text-blue-400">Intelligence</strong> (+5% magic damage/point) and 
          <strong className="text-purple-400"> Spirit</strong> (+20 mana/point).
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Wizard (14 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Pure spellcaster. Fire/ice/lightning, mana pool, spell damage.</p>
        <SkillList items={wizard_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Battlemage (15 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Melee-magic hybrid. Wand + melee combo, mana leech, sustain.</p>
        <SkillList items={battlemage_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Healer (9 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Support specialist. Healing, buffs, cleanse. Essential for co-op.</p>
        <SkillList items={healer_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Trickster (8 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Crowd control. Freeze, slow, gravity, confusion.</p>
        <SkillList items={trickster_skills} />

        <InfoBox title="Mage Combat Tips" type="tip">
          Staff: Hold LMB to charge. Full charge = max damage. Early release = faster DPS but less damage. 
          Fireball charges fast, Ice Bolt medium, Lightning Strike slow but devastating. 
          Always pair INT with SPI — spells are useless without mana.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'ranger-archetypes',
    title: 'Ranger Archetypes',
    icon: <Crosshair className="w-5 h-5" />,
    summary: 'Ranger, Assassin, Beastmaster, Survivor — 53 ranged/survival skills in the green wing.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Ranger archetype has <strong className="text-[var(--text-primary)]">53 skills</strong> across 4 sub-trees. 
          Scales with <strong className="text-green-400">Dexterity</strong> (+5% bow/dagger damage/point) and 
          <strong className="text-yellow-400"> Endurance</strong> (+10 stamina/point).
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Ranger (11 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Bow specialist. Multi Shot, crit, headshot damage.</p>
        <SkillList items={ranger_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Assassin (13 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Stealth burst DPS. Backstab, poison, daggers.</p>
        <SkillList items={assassin_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Beastmaster (6 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Companion handler. Tame beasts, pet buffs, summon.</p>
        <SkillList items={beastmaster_skills} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-2">Survivor (14 skills)</h3>
        <p className="text-xs text-[var(--text-muted)] mb-2">Utility and traversal. Double Jump, Updraft, crafting.</p>
        <SkillList items={survivor_skills} />

        <InfoBox title="Traversal Trio — Pick These First" type="tip">
          Every build should grab <strong>Double Jump</strong> (4pt) → <strong>Updraft</strong> (4pt) → <strong>Airborne</strong> (2pt). 
          These 10 points transform exploration. Get them before committing to any damage archetype.
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'recommended-builds',
    title: 'Recommended Builds',
    icon: <Star className="w-5 h-5" />,
    summary: '15 curated builds ranked S/A/B tier — from beginner starters to endgame meta.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong className="text-[var(--text-primary)]">15 curated builds</strong> ranked by tier — S (meta-defining), 
          A (strong/specialist), B (niche/fun). All builds include skill picks, weapon recommendations, armor, food, and tips.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">S-Tier — Meta Defining</h3>

        <BuildCard
          name="Ranger Sniper"
          tier="S"
          level="15-30"
          flame="4-6"
          points="13"
          desc="Long-range DPS that opens fights from outside aggro. Stack Marksman + Sharpshooter + Sniper, pair with Runner for kiting. The safest endgame build."
          skills={['Marksman (max)', 'Sharpshooter (max)', 'Sniper (max)', 'Multi Shot (max)', 'Eagle Eye (max)', 'Runner (max)', 'Airborne (max)']}
          weapons="Legendary bow (Forsaken or Draconian Bow)"
          armor="Light hide armor with DEX bonuses"
          food="Meat skewers (+STR) + Berry juice (stamina)"
          tips="Always fight from elevation. Pre-charge Sniper headshot before engaging. Updraft + Glider to reposition."
        />

        <BuildCard
          name="Sword & Board Tank"
          tier="S"
          level="20-35"
          flame="5-7"
          points="18"
          desc="Near-immortality through shield blocking and parrying. The recommended build for new solo players."
          skills={['Shield Mastery (max)', 'Iron Will (max)', 'Counterstrike (max)', 'Shiny Plates (max)', 'Brute (max)', 'Battle Heal (max)']}
          weapons="One-handed sword + legendary shield"
          armor="Heavy plate with CON and block bonuses"
          food="Heavy meat stews (+CON) + Bread"
          tips="Block every attack. Parry at white flash. Counterstrike after parry for massive damage. You cannot die if you block."
        />

        <BuildCard
          name="Endgame Meta — 184 pts"
          tier="S"
          level="45"
          flame="8-9"
          points="47"
          desc="The most powerful build at cap. Battlemage core with Healer + Barbarian splice. Pushes the 184-point limit with max DPS and self-sustain."
          skills={['Spellblade (max)', 'Arcane Shield (max)', 'Mana Leech (max)', 'Flame Weapon (max)', 'Water Aura (max)', 'Battle Heal (max)', 'Berserker Rage (3/3)', 'Bleed Mastery (max)', 'Shockwave (max)']}
          weapons="Legendary greatsword + fire staff"
          armor="Heavy plate with fire resistance"
          food="Fire resist potions + Health regen food"
          tips="Open with staff charge, close for melee, heal with Battle Heal below 50%. This build never dies and kills everything."
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">A-Tier — Strong Specialists</h3>

        <BuildCard
          name="Battlemage Hybrid"
          tier="A"
          level="25-40"
          flame="6-8"
          points="18"
          desc="Melee mage that ditches the staff and stays in plate. INT + STR core, Arsonist + Thunder for burst, Battle Heal + Heavy Plates for staying power."
          skills={['Unity (max)', 'Wand Master (max)', 'Flame Weapon (max)', 'Thunder Strike (max)', 'Battle Heal (max)', 'Arcane Deflection (max)', 'Evasion Attack (max)']}
          weapons="Fire wand + one-handed melee weapon"
          armor="Medium armor with INT and fire bonuses"
          food="Intellect tea (+INT) + Meat"
          tips="Cast Flame Weapon, close for melee. Wand attacks restore mana. Heal on crits. Most flexible build in the game."
        />

        <BuildCard
          name="Fire Mage Starter"
          tier="A"
          level="10-25"
          flame="3-5"
          points="14"
          desc="Pure caster opener leaning into fire damage and survivability. Picks up Arsonist + early defensive resistances."
          skills={['Spell Mastery (max)', 'Fireball (max)', 'Arsonist (max)', 'Mana Pool (max)', 'Elemental Fury: Fire (max)', 'Quick Charge (max)']}
          weapons="Fire staff + wand backup"
          armor="Light cloth with INT and mana bonuses"
          food="Mana regen tea + Intellect berries"
          tips="Stay at max range. Use terrain for cover. When OOM, switch to wand. Never let enemies close — you die in 2 hits."
        />

        <BuildCard
          name="Ice Mage — Crowd Control"
          tier="A"
          level="15-35"
          flame="4-7"
          points="18"
          desc="Freeze and slow enemies. Frost Nova + Gravity Well groups enemies, Ice Bolt + Time Warp controls the battlefield."
          skills={['Frost Nova (max)', 'Ice Bolt (max)', 'Time Warp (max)', 'Gravity Well (max)', 'Elemental Fury: Ice (max)', 'Blink (max)']}
          weapons="Ice staff + ice wand"
          armor="Medium armor with ice resistance"
          food="Ice resist potions + Stamina food"
          tips="Group enemies with Gravity Well, freeze with Frost Nova, then unload. Extremely powerful in co-op. Solo requires careful mana."
        />

        <BuildCard
          name="Assassin Dual Blades"
          tier="A"
          level="20-40"
          flame="4-7"
          points="15"
          desc="Stealth burst DPS. Backstab Mastery + Poisoned Blades + Shadow Step. Delete single targets in seconds."
          skills={['Backstab Mastery (max)', 'Poisoned Blades (max)', 'Shadow Step (max)', 'Silent Stride (max)', 'Sneak Attack (max)', 'Opportunity (max)']}
          weapons="Legendary daggers (dual wield)"
          armor="Light leather with crit and DEX bonuses"
          food="Critical hit food + Dexterity tea"
          tips="Crouch to stealth. Approach from behind. Backstab → Poison → normal attacks. Shadow Step away if spotted. Never fight groups head-on."
        />

        <BuildCard
          name="Berserker Barbarian"
          tier="A"
          level="20-40"
          flame="5-7"
          points="20"
          desc="2-hander tornado. Barbarian + Blood Rage drive damage uphill the longer the fight runs. Whirlwind Crescendo + Relentless keep the chain going."
          skills={['Whirlwind Crescendo (max)', 'Heavy Specialization (max)', 'Blood Rage (max)', 'Relentless (max)', 'Breach (max)', 'Shockwave (max)', 'Barbarian (max)']}
          weapons="Legendary greatsword or 2H hammer"
          armor="Heavy plate with STR and crit bonuses"
          food="Strength meat (+STR) + Health stews"
          tips="Time your heavy attacks carefully — long wind-ups but devastating damage. Whirlwind at end of combo for AOE. Kill fast to keep Blood Rage active."
        />

        <BuildCard
          name="Multi-Shot Bowmaster"
          tier="A"
          level="20-35"
          flame="4-6"
          points="16"
          desc="Volley archer that clears packs. Multi Shot + Spread + Trigger overlap. Ricochets chain into secondary targets. Best AOE build."
          skills={['Multi Shot (max)', 'Multi Shot Spread (max)', 'Multi Shot Trigger (max)', 'Ricochets (max)', 'Marksman (max)', 'Sharpshooter (max)']}
          weapons="Fast-draw bow with high arrow speed"
          armor="Medium armor with stamina regen"
          food="Stamina regen food + Dexterity tea"
          tips="Group enemies tight, fire Multi Shot. Arrows ricochet between targets for massive AOE. Best for Hollow Halls and dense camps."
        />

        <BuildCard
          name="Healer Support"
          tier="A"
          level="30-45"
          flame="6-8"
          points="17"
          desc="Pure support for co-op groups. Heals, buffs, crowd control. Not recommended for solo but makes 4-player groups unstoppable."
          skills={['Water Aura (max)', 'Waters of Life (max)', 'Healing Wave (max)', 'Revitalize (max)', 'Cleanse (max)', 'Martyr (max)', 'Frost Nova (max)']}
          weapons="Healing staff + shield"
          armor="Medium armor with SPI and mana bonuses"
          food="Mana regen tea + Spirit food"
          tips="Stay center of group. Keep Water Aura active. Frost Nova when enemies rush. Your DPS teammates will love you. Solo: add Battle Heal."
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">B-Tier — Niche & Fun</h3>

        <BuildCard
          name="Necromancer Glass Cannon"
          tier="B"
          level="25-40"
          flame="5-8"
          points="18"
          desc="High burst magic damage with low survivability. Max INT, max spell damage, zero defense. Kill before being killed."
          skills={['Spell Mastery (max)', 'Meteor (max)', 'Arsonist (max)', 'Mana Pool (max)', 'Spell Pierce (max)', 'Combo Caster (max)']}
          weapons="Legendary fire staff"
          armor="Light cloth with max INT bonuses"
          food="Intellect tea + Mana potions"
          tips="Glass cannon — massive damage, dies in 1-2 hits. Positioning is everything. Use Blink to escape. Only for experienced players."
        />

        <BuildCard
          name="Crafter Survivor"
          tier="B"
          level="Any"
          flame="Any"
          points="10-20"
          desc="Non-combat focused build. Max gathering, crafting, base building. Double Jump + Updraft + all crafting skills."
          skills={['Double Jump (max)', 'Updraft (max)', 'Airborne (max)', 'Miner (max)', 'Lumberjack (max)', 'Mason (max)', 'Quality Gear (max)', 'Good Metabolism (max)']}
          weapons="Any — combat is not the focus"
          armor="Light armor for mobility"
          food="Any — focus on comfort food for Rested buff"
          tips="Take this early regardless of main build. The traversal and crafting skills pay for themselves. Respec into combat build around level 15."
        />

        <BuildCard
          name="Solo Adventurer Hybrid"
          tier="B"
          level="15-35"
          flame="4-6"
          points="15"
          desc="Self-sufficient jack-of-all-trades. Bow for ranged, melee for close, healing for sustain. Jack of all trades, master of none."
          skills={['Marksman (2)', 'Swift Blades (2)', 'Battle Heal (max)', 'Double Jump', 'Water Aura (2)', 'Shiny Plates (max)']}
          weapons="Bow + one-handed sword"
          armor="Medium armor balanced stats"
          food="Balanced diet — mix of stats"
          tips="Flexible but lacks peak power of specialized builds. Good for exploring and learning the game. Respec to specialist at level 30."
        />

        <BuildCard
          name="Co-op Burst DPS"
          tier="B"
          level="25-45"
          flame="6-8"
          points="18"
          desc="The cleanup specialist for Hollow Halls runs. Max AOE spell damage. Healer keeps you alive, you delete everything."
          skills={['Meteor (max)', 'Fireball (max)', 'Spell Mastery (max)', 'Arsonist (max)', 'Mana Pool (max)', 'Blink (max)']}
          weapons="Legendary fire staff"
          armor="Light cloth with INT bonuses"
          food="Mana regen + Intellect food"
          tips="Wait for Tank to aggro, then unload AOE. Position behind Tank. Never pull aggro — you cannot take hits. Coordinate with Healer."
        />

        <BuildCard
          name="F2P Starter — First 10 Levels"
          tier="B"
          level="1-10"
          flame="1-2"
          points="10-15"
          desc="Safe spec for fresh saves. Covers any combat path while you decide your archetype."
          skills={['Double Jump', 'Airborne', 'Constitution +2', 'Endurance +2', 'Well Rested', 'Counterstrike']}
          weapons="Whatever you find — sword and bow recommended"
          armor="Ragged set → Adventurer set"
          food="Basic cooked meat + berries"
          tips="Do not commit yet. Grab utility nodes and basic stats. Decide archetype around level 10 when you reach Revelwood."
        />

        <InfoBox title="Build Experimentation" type="tip">
          Respec costs only <strong>Goo + biome materials</strong> at the Flame Altar — very cheap. 
          You can try every build on this list with one character. The best build is the one that matches YOUR playstyle.
        </InfoBox>
      </div>
    ),
  },
];
