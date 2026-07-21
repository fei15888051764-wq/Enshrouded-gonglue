import { CloudFog, Zap, Heart, Navigation, Droplets, Skull, Users, Flame, Settings, CloudRain } from 'lucide-react';
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

export const mechanicsSubSections: SubSection[] = [
  {
    id: 'shroud-system',
    title: 'The Shroud',
    icon: <CloudFog className="w-5 h-5" />,
    summary: 'Complete Shroud mechanics — timer, Shroud Passage Level, Shroud Fatigue, Deadly Shroud, survival strategies.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-red-400">Shroud</strong> is Enshrouded's defining mechanic — a toxic purple fog that covers 
          large portions of Embervale. Entering it starts a countdown timer. When the timer hits zero, you die. 
          Mastering Shroud survival is the core skill of the game.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Shroud Timer</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Flame Level</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Base Shroud Time</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Max Altars</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 1</td><td>5 min</td><td>2</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 2</td><td>6 min</td><td>4</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 3</td><td>7 min</td><td>6</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 4</td><td>8 min</td><td>7</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 5</td><td>9 min</td><td>8</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 6</td><td>10 min</td><td>8</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 7</td><td>11 min</td><td>10</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Flame Lv 8</td><td>12 min</td><td>10</td></tr>
              <tr><td className="py-1.5">Flame Lv 9</td><td>~15 min</td><td>10</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Passage Level</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)] mb-2"><strong className="text-red-400">Shroud Passage Level</strong> is a Flame-based progression check. Strengthening the Flame increases both your maximum Shroud time AND your Shroud Passage level, which lets you enter higher-level Shroud areas and places previously blocked by deadly red fog.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• If a route feels like a hard stop because the fog is much harsher — that's a <strong>progression wall</strong>, not a skill check</li>
            <li>• The fix: Strengthen the Flame and come back later</li>
            <li>• Each Flame Level unlocks access to deeper, more dangerous Shroud zones</li>
            <li>• Higher Passage Level = access to better loot, rarer materials, and harder bosses</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Deadly Shroud</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-red-500">
          <p className="text-xs text-[var(--text-secondary)] mb-2"><strong className="text-red-500">Deadly Shroud</strong> is marked by <strong>red fog</strong> instead of purple. It burns through your Shroud time much faster and can kill you in a hurry. If you see red fog ahead, your Flame Level is too low for that area.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Red fog = <strong>do not enter</strong> unless your Flame Level matches the zone</li>
            <li>• Deadly Shroud drains the timer at <strong>3-5x normal speed</strong></li>
            <li>• Some areas transition from Deadly to normal as you raise Flame Level</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Fatigue</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-orange-400">
          <p className="text-xs text-[var(--text-secondary)] mb-2"><strong className="text-orange-400">Shroud Fatigue</strong> is a debuff that reduces your Shroud timer by 5 minutes. It's caused by certain Shroud magic and enemy attacks. Do NOT confuse it with Fell Curse — they are different debuffs.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• If your Shroud timer suddenly feels much tighter than normal, check for a fatigue debuff first</li>
            <li>• <strong>Leave the Shroud</strong> instead of trying to force the route</li>
            <li>• On your next attempt, bring a Shroud-time buff and skip optional loot</li>
            <li>• <strong>Fell Curse</strong> has an Alchemist cure path; Shroud Fatigue does not — prevention is the only answer</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Roots (Essence Wells)</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-purple-400">
          <p className="text-xs text-[var(--text-secondary)] mb-2"><strong className="text-purple-400">Shroud Roots</strong> (also called Essence Wells) are corrupted plant structures found inside Shroud areas. Destroying them is one of the best sources of <strong>skill points</strong> in the game.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Found throughout all Shroud zones — look for glowing purple tendrils</li>
            <li>• <strong>Destroy with an axe</strong> — takes 3-5 hits depending on axe quality</li>
            <li>• Each Shroud Root destroyed grants <strong>1 skill point</strong></li>
            <li>• Destroying a Shroud Root <strong>temporarily clears the Shroud</strong> in a radius around it</li>
            <li>• <strong>Total available:</strong> Over 100 Shroud Roots across Embervale — a major source of the 184 total skill points</li>
            <li>• Prioritize destroying Shroud Roots when entering a new Shroud zone — skill points + safe zone</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Temperature & Frost Resistance</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-cyan-400">
          <p className="text-xs text-[var(--text-secondary)] mb-2">In <strong className="text-cyan-400">Albaneve Summits</strong>, temperatures drop so severely that lack of frost resistance leads to <strong>hypothermia</strong> (near-instant death). Frost Resistance is essential for exploration.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>+1 Frost Resistance = 1 minute 30 seconds</strong> of safe exploration in the cold</li>
            <li>• Without frost resistance, hypothermia kills in <strong>seconds</strong> at high altitudes</li>
            <li>• <strong>Sources:</strong> Armor pieces, rings, consumable food, Hunter's Pocket Heater (crafted item)</li>
            <li>• <strong>Best frost food:</strong> Beef Stew (Raw Fatty Meat + Eggs + Tomatoes + Frizzy Goat Milk)</li>
            <li>• <strong>Hunter's Pocket Heater:</strong> Crafted via Hunter NPC — provides basic frost resistance always</li>
            <li>• Check your frost resistance timer <strong>every minute</strong> at high altitude</li>
            <li>• If frost timer runs out, <strong>quit to menu immediately</strong> rather than dying — this resets your position safely</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Time Boosters</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Shroud Survival Flask</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Alchemist-crafted consumable. Adds +2 minutes to your Shroud timer. Effect stacks up to +10 minutes total. The primary method of extending Shroud time mid-run.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Greater Shroud Survival Flask</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Higher-tier version with longer duration. Crafted at the Laboratory. Essential for endgame Shroud dives.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Skills: Inner Fires & Relentless Flame</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Survivor tree skills that permanently increase Shroud time. Inner Fires adds base time; Relentless Flame reduces Shroud damage taken.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Food: Night Plants</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Certain food items (cooked from Night Plant ingredients) add extra time in the Shroud. Check the Food & Buffs section.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Armor Bonuses</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Certain armor sets (Paladin's Plate, Shroud-resistant gear) provide Shroud time bonuses. Endgame sets can add +2-3 minutes passively.</p>
          </div>
        </div>

        <InfoBox title="Safe Shroud Run Pattern" type="tip">
          At major Shroud objectives like Elixir Wells, find your exit path BEFORE committing. If you spot a Shroud-time refill along the way, remember it and build your route around it. Finish the mission target first; treat extra loot as optional. A simple rule: if you leave with less than 1 minute remaining, the run was too tight. Before trying again, improve one variable: upgrade Flame, take a timer skill, or bring one more consumable. Better prep matters more than riskier combat.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'combat-system',
    title: 'Combat System',
    icon: <Zap className="w-5 h-5" />,
    summary: 'Melee, ranged, magic combat — parrying, blocking, dodging, damage types, stealth, and stagger.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">Souls-like action combat</strong> with three weapon 
          categories and deep defensive mechanics. Timing, positioning, and stamina management are critical.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Melee Combat</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Light Attack:</strong> Fast, chains into combos. Low stamina cost. Main DPS source.</li>
            <li><strong className="text-[var(--text-primary)]">Heavy Attack:</strong> Slow, high damage, high stagger. High stamina cost. Breaks enemy guard.</li>
            <li><strong className="text-[var(--text-primary)]">Parry:</strong> Block just before impact. <strong className="text-white">White flash</strong> = parry window. Negates damage and opens counter-attack.</li>
            <li><strong className="text-red-400">Red glow</strong> = unblockable attack — DODGE, don't block!</li>
            <li><strong className="text-[var(--text-primary)]">Shield Block:</strong> Hold block to reduce damage. Uses stamina. No timing required.</li>
            <li><strong className="text-[var(--text-primary)]">Shield Bash:</strong> Attack while blocking to stagger enemies and interrupt spellcasting.</li>
            <li><strong className="text-[var(--text-primary)]">Kick (Update 7):</strong> Attacking out of block with melee triggers a kick that deals stamina damage and interrupts spellcasting.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Ranged Combat</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Bow Charging:</strong> Hold left-click to draw. Full charge = max damage and arrow speed.</li>
            <li><strong className="text-[var(--text-primary)]">Headshots:</strong> 2-3x damage multiplier. Practice leading moving targets.</li>
            <li><strong className="text-[var(--text-primary)]">Crossbow:</strong> Instant shot, no charge. Slower reload but perfect for hit-and-run.</li>
            <li><strong className="text-[var(--text-primary)]">Arrow Types:</strong> Fire (vs Fell), Poison (DOT), Ice (slow), Explosive (AOE), Stun (stagger build-up).</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Damage Types</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Type</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Strong Against</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Weak Against</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Physical</td><td>Scavengers, Wildlife</td><td>Fell (-20%), Shroud Entities (-50%)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-red-400">Fire</td><td>Fell (+30%), Shroud Entities</td><td>Fire-resistant enemies</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-cyan-400">Ice</td><td>Fast enemies (slows)</td><td>Fell (immune)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-yellow-400">Lightning</td><td>Armored enemies</td><td>Insulated enemies</td></tr>
              <tr><td className="py-1.5 text-green-400">Poison</td><td>Large beasts (DOT stacking)</td><td>Mechanical/undead</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Stealth System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Crouch to enter <strong>stealth mode</strong> — enemies have reduced detection range</li>
            <li>• <strong>Backstab:</strong> Sneak behind an enemy and attack for massive damage (often instant-kill on basic enemies)</li>
            <li>• <strong>Sniper attacks:</strong> From stealth, bow headshots deal bonus damage</li>
            <li>• Noise attracts enemies — running and combat sounds alert nearby foes</li>
            <li>• Stealth is essential for clearing enemy camps without triggering the entire group</li>
            <li>• Some enemy types have better detection — Vukah scouts can spot you from further away</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Armor System & Mixing</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Enshrouded <strong>does NOT have armor set bonuses</strong> — mixing different armor pieces is always viable</li>
            <li>• Each armor piece provides <strong>individual stat bonuses</strong> (HP, defense, resistance, damage)</li>
            <li>• <strong>Common strategy:</strong> Use Blacksmith chest + legs for high HP, then equip class-specific gloves and helmet (Hunter for ranged, Alchemist for magic)</li>
            <li>• Armor weight affects <strong>stamina consumption</strong> — heavy armor drains stamina faster when dodging</li>
            <li>• <strong>Resistance types:</strong> Fire, Ice, Lightning, Poison, Shroud — equip for the biome/enemy you're facing</li>
            <li>• Endgame armor can have <strong>gem sockets</strong> for further customization</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Weapon Durability</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• All <strong>weapons and tools</strong> have a durability meter that degrades with use</li>
            <li>• Durability damage: <strong>1 point per hit</strong> for most weapons; tools take more from hard materials</li>
            <li>• When durability reaches <strong>zero</strong>, the item becomes unusable until repaired</li>
            <li>• <strong>Repair at the Workbench:</strong> Costs a small amount of the base material (free in some modes)</li>
            <li>• <strong>Repair before it breaks</strong> — broken items cost more to fix</li>
            <li>• Gear found in the world often has <strong>partial durability</strong> — repair it before use</li>
            <li>• Higher-tier gear (Iron, Steel) has <strong>higher max durability</strong> but costs more to repair</li>
            <li>• Durability can be <strong>disabled</strong> in Custom difficulty settings</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Stagger System</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Every enemy has a <strong>hidden stagger bar</strong> that builds up when you hit them</li>
            <li>• Heavy attacks and special skills fill the stagger bar faster</li>
            <li>• When the bar fills, the enemy is <strong>stunned</strong> and takes bonus damage</li>
            <li>• <strong>Stun Arrows</strong> are the most efficient way to build stagger on bosses</li>
            <li>• Bosses have high stagger thresholds — need sustained pressure or specialized builds</li>
            <li>• While staggered, the enemy cannot attack — this is your DPS window</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'food-buffs',
    title: 'Food & Buff System',
    icon: <Heart className="w-5 h-5" />,
    summary: '10 food categories, 3 food slots, Dessert Stomach skill, and the three-food-buff engine.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Unlike traditional survival games, Enshrouded has <strong className="text-[var(--text-primary)]">no hunger or thirst meter</strong>. 
          Food provides <strong className="text-[var(--text-gold)]">timed stat buffs</strong> instead. You have 3 food slots 
          (4 with the Dessert Stomach skill), and strategic food stacking is essential for combat and exploration.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Food Slot Rules</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• You start with <strong>3 food slots</strong> shown in the top-left of your HUD</li>
            <li>• <strong>Dessert Stomach</strong> skill (Survivor tree) unlocks a <strong>4th slot</strong></li>
            <li>• Only <strong>one food of each category</strong> can be active at a time</li>
            <li>• Eating two fruits = the first is overwritten (sound + notification)</li>
            <li>• A food slot can be <strong>refreshed/overwritten</strong> with 20% duration remaining</li>
            <li>• Food buff durations range from <strong>5 minutes to 50+ minutes</strong></li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">10 Food Categories</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Category</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Buff</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Best For</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Meats</td><td>+Max Health</td><td>Every build / tanky play</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Grains</td><td>+Melee Damage</td><td>Melee fighters</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Mushrooms</td><td>+Magic Damage</td><td>Mages</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Vegetables</td><td>+Ranged & Dagger Damage</td><td>Rangers / rogues</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-blue-400">Herbs</td><td>+Mana</td><td>Mages / spellcasters</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-pink-400">Fruits</td><td>+Health Regeneration</td><td>Sustained fights</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-cyan-400">Liquids</td><td>+Stamina & Stamina Regen</td><td>Climbing, dodging, stamina builds</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Sweets</td><td>+Stamina Regen (burst)</td><td>Stamina or mana upkeep</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-teal-400">Fish</td><td>+Max Oxygen (underwater)</td><td>Underwater exploration</td></tr>
              <tr><td className="py-1.5 font-bold text-gray-400">Night Plants</td><td>+Shroud Time</td><td>Deep Shroud runs</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recommended Loadouts by Build</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Melee Build</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Grain dish (Cooked Rice — +Melee Damage) + Meat (Beef Stew — +Max Health) + Liquid (Stamina drink — +Stamina Regen)</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Mage Build</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Mushroom dish (+Magic Damage) + Herb (+Mana) + Fruit (Health Regen for sustain)</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Ranger Build</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Vegetable dish (+Ranged Damage) + Meat (+Max Health) + Liquid (+Stamina)</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Underwater Exploration</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Fish dish (+Max Oxygen) + Fruit (+Health Regen) + Liquid (+Stamina)</p>
          </div>
        </div>

        <InfoBox title="Food Buff Tips" type="tip">
          1) Always eat before boss fights — the stat difference is massive 2) Heavier recipes (soups, stews) stack multiple effects on one plate 3) Carry diverse ingredients so you can adapt buffs to the situation 4) Refresh food buffs when they hit 20% duration remaining 5) Dessert Stomach skill is a high-value pick for any build — 4th slot = +25% more buffs 6) Grilled Yucca Fruit gives +20 Stamina Recharge for 7 minutes — best emergency stamina food early game
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'traversal',
    title: 'Traversal & Movement',
    icon: <Navigation className="w-5 h-5" />,
    summary: 'Glider tiers, Grappling Hook, Double Jump, Ancient Spires, and the traversal skill tree.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Embervale is a <strong className="text-[var(--text-primary)]">vertical world</strong> built to be climbed, leapt, and flown across. 
          Mastering the three traversal tools — <strong className="text-[var(--text-gold)]">Glider</strong>, 
          <strong className="text-[var(--text-gold)]"> Grappling Hook</strong>, and <strong className="text-[var(--text-gold)]">Double Jump</strong> — 
          transforms how you navigate the map.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Glider (4 Tiers)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Glider</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Range</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Speed</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Stamina/s</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Level</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold">Basic Glider</td><td>100%</td><td>10</td><td>4</td><td>Lv 5</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Advanced Glider</td><td>150%</td><td>15</td><td>4</td><td>Lv 10</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Extraordinary Glider</td><td>200%</td><td>20</td><td>5</td><td>Lv 20</td></tr>
              <tr><td className="py-1.5 font-bold text-purple-400">Ghost Glider</td><td>250%</td><td>25</td><td>5</td><td>Lv 30</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-[10px] text-[var(--text-muted)] mt-2">Unlock: Blacksmith "Glider" quest → craft at Workbench. Upgrades crafted at Carpenter.</div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Grappling Hook (2 Tiers)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Basic Grappling Hook</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Unlock:</strong> First time you collect Shroud Spores | <strong>Cost:</strong> 4 Metal Scraps + 7 String + 10 Shroud Spores at Workbench | <strong>Stamina:</strong> 40/use | Aim at glowing grapple points to swing/pull.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Improved Grappling Hook</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Unlock:</strong> "The Alchemist's Rumors" quest | <strong>Cost:</strong> 1 Shroud Core + 2 Shroud Liquid + 3 Shroud Spores + 1 Basic Hook at Carpenter | <strong>Stamina:</strong> 30/use | Longer activation range.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Double Jump</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• A <strong>skill</strong> (not an item) — costs <strong>4 skill points</strong> in the Survivor tree</li>
            <li>• As of Update 8, moved to the <strong>center of the skill tree</strong> — any build can grab it</li>
            <li>• Mid-air second jump to reach grapple points and gliding launch spots</li>
            <li>• Stacks with the glider for chaining height</li>
            <li>• <strong>Most impactful early unlock</strong> — prioritize those 4 points</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Ancient Spires</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>8 Ancient Spires</strong> across Embervale — one per major biome</li>
            <li>• Climb to the top and speak with <strong>The Flame</strong> to activate</li>
            <li>• Activated Spires become <strong>fast-travel points</strong></li>
            <li>• Reveals all <strong>Ancient Obelisks</strong> in that biome</li>
            <li>• Spires double as <strong>ideal glider launch points</strong> — fast travel → leap off → glide across biome</li>
            <li>• Each Spire contains puzzle rooms with traps, grapple points, and teleport pads</li>
            <li>• Albaneve Spire requires <strong>Flame Level 6</strong> to reach</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Traversal Skills</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Updraft (Ranger tree)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Glide into updrafts (wind columns near cliffs/peaks) to gain massive height. Essential for Albaneve exploration.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Airborne (Ranger tree)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Reduces fall damage and improves glider control.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Sprint Boost (Survivor tree)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Faster sprint speed, reduced stamina drain.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Splash Dash (Update 7)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Forward lunge while swimming or diving. Essential for Veilwater Basin.</p>
          </div>
        </div>

        <InfoBox title="Traversal Trio — Essential Skills" type="tip">
          Every player should grab: <strong>Double Jump</strong> (4 pts, Survivor) + <strong>Updraft</strong> (Ranger) + <strong>Airborne</strong> (Ranger). Combined with Glider, these let you reach nearly any point. Total cost: ~6 skill points. Best investment in the entire tree. Launch from an Ancient Spire with Ghost Glider + Double Jump and you can cross most of a biome in one flight.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'water-mechanics',
    title: 'Water Mechanics',
    icon: <Droplets className="w-5 h-5" />,
    summary: 'Update 7 water system — swimming, diving, fishing, oxygen, and underwater exploration.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-blue-400">Wake of the Water</strong> update (Update 7) added dynamically simulated water 
          to Embervale. Swimming, diving, fishing, and underwater exploration are now core mechanics — especially in the 
          <strong className="text-teal-400"> Veilwater Basin</strong> endgame biome.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Swimming & Diving</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Swimming is available to <strong>every player from the start</strong></li>
            <li>• <strong>Cannot attack while underwater</strong> — dodge and swim fast to avoid enemies</li>
            <li>• Enemies CAN attack you underwater (Drak are amphibious) — keep moving!</li>
            <li>• <strong>Oxygen meter</strong> limits dive time — surfaces automatically when depleted</li>
            <li>• <strong>Oxygen extensions:</strong> Gear, consumables, and the Angler's skills</li>
            <li>• <strong>Splash Dash skill:</strong> Forward lunge while swimming/diving</li>
            <li>• <strong>Wet Dog / Wetter Dog skills:</strong> Reduce Wet/Soaking Wet stamina penalty from 50% to 25%</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fishing</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Craft a <strong>fishing rod</strong> via the Angler NPC (Veilwater Basin)</li>
            <li>• Fishing uses a <strong>minigame</strong> — reel when the fish bites, release when line tension is high</li>
            <li>• <strong>Bait</strong> improves catch rate and quality</li>
            <li>• <strong>Fisherman's Resolve skill:</strong> +30% Fishing Endurance for extended battles</li>
            <li>• Fish provide <strong>powerful food buffs</strong> — especially underwater breathing and stamina</li>
            <li>• Different fish in different biomes and water types</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Underwater Exploration Gear</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Swimfins</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Crafted via Angler. Increases swim speed significantly. Essential for Veilwater Basin.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Diving Helmet</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Extends underwater time. Allows deeper dives to reach sunken temples and ruins.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Sieve</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">New item that lets you sift ground underwater for rare resources: pearls, gold, and other riches.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Wet & Soaking Wet Debuffs</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-blue-400">
          <p className="text-xs text-[var(--text-secondary)] mb-2">Update 7 introduced <strong className="text-blue-400">water-based status effects</strong> that reduce elemental resistance and enable unique weapon traits.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Wet:</strong> Reduces elemental resistance slightly. Applied when entering water or hit by water-based attacks.</li>
            <li>• <strong>Soaking Wet:</strong> Severe version. Reduces stamina regeneration by <strong>50%</strong> (25% with Wet Dog/Wetter Dog skills). Applied from prolonged water exposure.</li>
            <li>• <strong>Weapon traits vs Wet targets:</strong>
              <ul className="ml-4 mt-1">
                <li>— <strong>Opportunist:</strong> +10% Crit Chance vs Wet targets</li>
                <li>— <strong>Cruel:</strong> +30% Crit Damage vs Wet targets</li>
              </ul>
            </li>
            <li>• Dry off by staying out of water or using fire sources</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Water in Base Building</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Water Pump:</strong> Control water flow in your base</li>
            <li>• <strong>Spring:</strong> Creates a water source for rivers, aqueducts, pools</li>
            <li>• <strong>Dams & Water Wheels:</strong> Functional mechanics for base industry</li>
            <li>• <strong>Underwater Bases:</strong> New barriers make underwater construction possible</li>
            <li>• Water placed in bases is <strong>saved</strong>; world water is dynamic</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'death-respawn',
    title: 'Death & Respawn',
    icon: <Skull className="w-5 h-5" />,
    summary: 'Death mechanics, gravestone recovery, co-op revival, and the respec system.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Death in Enshrouded is <strong className="text-[var(--text-primary)]">not punishing</strong> — there is no permanent item loss, 
          no experience penalty, and no durability damage. Understanding the death and respawn systems removes the fear of exploration.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Death Mechanics</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>No permanent penalty.</strong> You lose nothing permanently on death.</li>
            <li>• <strong>Respawn:</strong> At the nearest Flame Altar or Flame Holder</li>
            <li>• <strong>Gravestone:</strong> Drops at death location with ALL your inventory items</li>
            <li>• Return to your gravestone to recover items — no time limit</li>
            <li>• If you die again before recovering, the <strong>old gravestone is overwritten</strong> (new one spawns)</li>
            <li>• <strong>Food buffs are lost on death</strong> (unless you have the Last Meal skill — persists at half duration)</li>
            <li>• <strong>Shroud death:</strong> Respawn at Altar, run back to gravestone in the Shroud (risky!)</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Co-op Revival</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Downed players enter a <strong>"bleeding out"</strong> state with a timer</li>
            <li>• Teammates can <strong>revive</strong> downed players by holding interact near them</li>
            <li>• If the timer expires, the player dies and respawns at the nearest Altar</li>
            <li>• If <strong>everyone dies</strong>, the team respawns at the nearest Altar</li>
            <li>• <strong>Shared Misery skill (Update 7):</strong> When receiving Shroud Damage, all players in 20m range get +15% Shroud Resistance for 30s</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Respec System</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Yes, you can respec!</strong> At any Flame Altar</li>
            <li>• Cost: <strong>Goo + biome-tier materials</strong> (no gold cost, no cooldown)</li>
            <li>• Respec Scrolls drop from Spire Altars and can be bought from Alchemist NPCs</li>
            <li>• Cost mid-game: ~1-2 gold + 1 Shroud Essence per scroll</li>
            <li>• <strong>One scroll resets your ENTIRE skill tree</strong> at once — partial respecs don't exist</li>
            <li>• <strong>No penalty</strong> for switching mid-character — try presets freely</li>
            <li>• Most players first respec at <strong>Level 30</strong> — early survival skills become dead weight</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Save System & World Slots</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Enshrouded has <strong>automatic saving</strong> — no manual save button needed</li>
            <li>• <strong>World Slots:</strong> You can create multiple worlds (separate save files) with different characters and progression</li>
            <li>• <strong>Character progress is tied to the world</strong> — your level, skills, and inventory are world-specific</li>
            <li>• <strong>World persistence:</strong> On dedicated servers, the world stays active 24/7 even when nobody is online</li>
            <li>• <strong>Backup saves:</strong> Dedicated servers support automatic world backups (configurable frequency)</li>
            <li>• <strong>Save transfer:</strong> You can download/upload world saves to move between servers or backup locally</li>
            <li>• <strong>Cross-server characters:</strong> Quest progression and character level carry between servers</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Skills You Should NEVER Respec Out Of</h3>
        <div className="game-panel corner-decor p-4">
          <div className="text-[10px] text-[var(--text-secondary)] space-y-1">
            <div>• <strong>Stamina Cap</strong> — more stamina = more dodges, more attacks</div>
            <div>• <strong>Double Jump</strong> — traversal essential</div>
            <div>• <strong>Updraft</strong> — glider synergy</div>
            <div>• <strong>Glider Stamina</strong> — longer flights</div>
            <div>• <strong>Battle Heal</strong> — combat survivability</div>
            <div>• <strong>Dessert Stomach</strong> — 4th food slot</div>
            <div className="text-[var(--text-muted)] mt-1">These "universal survivor core" skills cost ~25-30 points and are identical across every build.</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer & Co-op',
    icon: <Users className="w-5 h-5" />,
    summary: 'Up to 16 players, hosting, joining, shared progression, and server types.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded supports <strong className="text-[var(--text-primary)]">up to 16 players</strong> on a single server. 
          Co-op is the intended way to play — more hands make farming, building, and fighting vastly more efficient.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Game Modes</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Private (Solo)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Play offline by yourself. Your world is saved locally. Perfect for learning the game at your own pace.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Host (Co-op Server)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Host a multiplayer game saved locally. Up to 16 players. Set a password to keep it private for friends.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Join (Public Servers)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Join an active public server. Browse available servers and jump into ongoing worlds.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Co-op Mechanics</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Shared world:</strong> All players share the same world state, buildings, and progression</li>
            <li>• <strong>Individual loot:</strong> Each player gets their own drops from enemies and chests</li>
            <li>• <strong>Individual quests:</strong> Quest progress is tracked per-player</li>
            <li>• <strong>Shared bases:</strong> Everyone can build, craft, and use stations in any base</li>
            <li>• <strong>Revival system:</strong> Downed players can be revived by teammates</li>
            <li>• <strong>No PvP:</strong> Enshrouded is co-op only — no player vs player combat</li>
            <li>• <strong>Dedicated servers:</strong> Stay online 24/7 even when the host logs off</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Server Types</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Local Host</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">You host from your machine. World exists only while you're online. Best for small friend groups.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Dedicated Server</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Runs 24/7 on a separate machine. World persists even when nobody is online. Best for long-term communities.</p>
          </div>
        </div>

        <InfoBox title="Co-op Tips" type="tip">
          1) Split roles — one player farms while another stocks the kitchen 2) Assign someone as the "builder" who designs the base layout 3) Share boss drops evenly — communicate who needs what 4) Place Flame Holders as team checkpoints during dangerous expeditions 5) Use voice chat to call out enemy positions and boss mechanics 6) Revival takes time — protect the reviver while they're helping a downed teammate
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'leveling-progression',
    title: 'Leveling & Progression',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Character level, Flame Level, skill points, XP sources, and the two progression axes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded has <strong className="text-[var(--text-primary)]">two independent progression axes</strong>: 
          <strong className="text-[var(--text-gold)]"> Character Level</strong> (combat stats) and 
          <strong className="text-[var(--text-gold)]"> Flame Level</strong> (world-state progression). Understanding both is essential 
          for efficient advancement.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Character Level (1-35, cap 45 with Update 7)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Leveling grants:</strong> +Skill points, +Base HP, +Stamina, +Mana</li>
            <li>• <strong>XP Sources:</strong> Killing enemies, completing quests, clearing dungeons, discovering locations</li>
            <li>• <strong>Fastest XP:</strong> Kindlewastes (Lv 20-30) — dense enemy spawns + multiple Hollow Halls</li>
            <li>• Each level bracket grants ~<strong>10 skill points</strong></li>
            <li>• <strong>Max level:</strong> 35 (base) / 45 (with Update 7's Veilwater Basin)</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Flame Level (1-9)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>World-state progression</strong> separate from character level</li>
            <li>• Raised by feeding <strong>Flame Sanctum Shrines</strong> with Shroud Cores</li>
            <li>• Each Flame Level unlocks: new crafting tiers, biome access, longer Shroud time, more altars</li>
            <li>• <strong>Two upgrade tracks:</strong> Strengthen the Flame (9 levels) + Expand Altar Area (4 levels)</li>
            <li>• Boss heads are required for major Flame upgrades</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Skill Points Distribution</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Level Range</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">XP Needed</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Skill Points</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Flame Progression</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">1-5</td><td>~12,000</td><td>+8</td><td>Flame 1 → 2</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">5-10</td><td>~15,000</td><td>+10</td><td>Flame 2 → 3</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">10-15</td><td>~18,000</td><td>+10</td><td>Flame 3 → 4</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">15-20</td><td>~20,000</td><td>+10</td><td>Flame 4 → 5</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">20-25</td><td>~20,000+</td><td>+10</td><td>Flame 5 → 6</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">25-30</td><td>~25,000+</td><td>+10</td><td>Flame 6 → 7</td></tr>
              <tr><td className="py-1.5">30-35+</td><td>~30,000+</td><td>+10</td><td>Flame 7 → 9</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Total Skill Points: 184 (Update 7)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Leveling:</strong> ~120 skill points from reaching max level (Lv 45)</li>
            <li>• <strong>Shroud Roots:</strong> ~64+ skill points from destroying Shroud Roots across all biomes</li>
            <li>• <strong>Total: 184 skill points</strong> available — enough to max 2-3 skill trees</li>
            <li>• Plan your build carefully — you cannot max everything</li>
            <li>• The "universal core" (Double Jump, Updraft, Stamina, Battle Heal, Dessert Stomach) costs ~30 points</li>
            <li>• Leaves ~150 points for your main build specialization</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Chest Respawn Changes (Update 7)</h3>
        <div className="game-panel corner-decor p-4 mb-3 border-l-2 border-yellow-400">
          <p className="text-xs text-[var(--text-secondary)] mb-2">A major change in Update 7: <strong> Chests no longer reset on logout.</strong> This significantly changes how legendary farming works.</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Before Update 7:</strong> Logging out and back in reset all chests — easy legendary farming</li>
            <li>• <strong>After Update 7:</strong> Chests have <strong>fixed respawn timers</strong> (~20-30 minutes real time)</li>
            <li>• This makes legendary item farming require <strong>more time investment</strong></li>
            <li>• <strong>Implication:</strong> Choose your legendary gear carefully — you can't just reset chests to get perfect rolls</li>
            <li>• The best farming method is now <strong>route optimization</strong> — hit all chests in a biome, wait for respawn, repeat</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">XP Farming Tips</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Boss Farm Loop (Best XP/hour)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Kindlewastes Altar → Fell Thunderbrute (5 min) → Spire glide to Wispwyvern (10 min) → Fast travel to Critter Queen (5 min) → Repeat. Most efficient overall farm.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Hollow Halls Runs</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Each Hollow Halls clear grants significant XP + unique materials + legendary loot. Run all 6 Halls on rotation.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Elixir Wells</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">19 wells across all biomes. Each clear grants XP + 3 skill points. One-time but substantial.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Ancient Spires</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Each Spire activation grants XP + reveals the entire biome's POIs on your map.</p>
          </div>
        </div>

        <InfoBox title="Progression Priority" type="tip">
          1) Match character level to biome band (within 5 levels of target) 2) Keep Flame Level high enough for the biome's crafting tier 3) Climb every Ancient Spire when entering a new biome — it reveals everything 4) Clear all Elixir Wells for skill points 5) Don't over-grind lower biomes — the XP curve punishes staying too long 6) Upgrade gear every 5-10 levels — weapon damage scales hard with level
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'difficulty-settings',
    title: 'Difficulty & Settings',
    icon: <Settings className="w-5 h-5" />,
    summary: '5 difficulty presets, 30+ custom parameters, world settings, and quest color coding.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded offers <strong className="text-[var(--text-primary)]">5 difficulty presets</strong> and over 
          <strong className="text-[var(--text-primary)]">30 customizable parameters</strong> for fine-tuning your experience. 
          Settings are chosen at world creation and can be changed later by restarting the server.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Difficulty Presets (5)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Relaxed</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Fewer enemies, more loot and resources. Perfect for players focused on base building and lighthearted exploration. Enemies are less aggressive.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Default</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Standard balanced experience. Recommended for first-time players. Normal enemy density, standard resource rates, no hunger penalties.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Hard</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">More enemies that are more aggressive. Tighter resources. Combat is genuinely dangerous. For groups that want a real challenge.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Survival</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Starvation debuff enabled (lose health when hungry), harsher death penalties, tougher enemies. The closest thing to hardcore mode.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Custom</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Unlocks 30+ individual settings for full manual tuning. Required if you want to adjust specific parameters.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Key Custom Parameters</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Category</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Setting</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Range</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-blue-400" rowSpan={3}>Player</td><td>Player Health</td><td>0.25x - 4x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Player Mana</td><td>0.25x - 4x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Player Stamina</td><td>0.25x - 4x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400" rowSpan={4}>Enemies</td><td>Enemy Damage</td><td>0.25x - 5x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Enemy Health</td><td>0.25x - 4x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Enemy Spawn Amount</td><td>Few / Normal / Many / Extreme</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Pacify Enemies</td><td>true / false</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400" rowSpan={2}>Bosses</td><td>Boss Damage</td><td>0.5x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Boss Health</td><td>0.2x - 5x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400" rowSpan={3}>Survival</td><td>Shroud Time</td><td>0.5x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Enable Starvation</td><td>true / false</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Food Buff Duration</td><td>0.5x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400" rowSpan={2}>Death</td><td>Loot Loss on Death</td><td>AddBackpackMaterials / Everything / NoTombstone</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Weapon Durability</td><td>true / false</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400" rowSpan={3}>Resources</td><td>Mining Damage/Yield</td><td>0.5x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Plant Growth Speed</td><td>0.25x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Loot Amount</td><td>0.25x - 2x</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-cyan-400" rowSpan={3}>Environment</td><td>Day Duration</td><td>2 min - 60 min</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td>Night Duration</td><td>2 min - 60 min</td></tr>
              <tr><td>Weather Frequency</td><td>Disabled / Rare / Normal / Often</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quest Color Coding</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-green-400">Green text:</strong> Information and lore entries</li>
            <li><strong className="text-cyan-400">Light Blue text:</strong> Resource references and material names</li>
            <li><strong className="text-blue-400">Dark Blue text:</strong> Location tags and place names</li>
            <li><strong className="text-orange-400">Orange text:</strong> Action references — things you need to DO</li>
            <li>Quest descriptions use these colors to highlight key information at a glance</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">NPC Shelter Requirements</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• NPCs require a <strong>roof over their head</strong> to function at full capacity</li>
            <li>• Without shelter, NPCs provide <strong>reduced crafting options</strong></li>
            <li>• NPCs need their <strong>crafting stations nearby</strong> — place workstations within their shelter area</li>
            <li>• The <strong>Summoning Staff</strong> is used to place and relocate NPCs in your base</li>
            <li>• Each NPC has a <strong>specific shelter requirement</strong> (size, furniture, lighting)</li>
            <li>• Well-sheltered NPCs offer <strong>better recipes and faster crafting</strong></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'weather-system',
    title: 'Weather & Environment',
    icon: <CloudRain className="w-5 h-5" />,
    summary: 'The dynamic weather system — wetness debuffs, rain stealth bonuses, deep snow, slippery ice, body heat, and how to turn the weather to your advantage.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Dynamic weather arrived with the <strong className="text-[var(--text-gold)]">Souls of the Frozen Frontier update (November 2024)</strong> and it is far more than visual flair — weather changes how you fight, sneak, travel, and survive.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">How Weather Works</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• Weather shifts <strong className="text-[var(--text-primary)]">dynamically over time</strong> across all of Embervale — no two sessions play out the same</li>
            <li>• <strong className="text-[var(--text-primary)]">Altitude decides the type:</strong> lowlands like the Springlands and Revelwood get rain; the same system becomes snow at higher elevations</li>
            <li>• Fog, rain, snow, and storms each carry their own visibility and survival implications</li>
            <li>• Don't like the rain? <strong className="text-[var(--text-primary)]">Weather frequency can be tuned in the world's difficulty settings</strong></li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Wetness — Rain's Hidden Mechanic</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• Being caught in rain applies a <strong className="text-[var(--text-primary)]">Wetness debuff</strong> — a slight but real penalty until you dry off</li>
            <li>• Rain <strong className="text-[var(--text-primary)]">extinguishes small fires</strong> in the world — exposed campfires and torches go out</li>
            <li>• Shelter, or simply waiting it out indoors, clears the effect</li>
          </ul>
        </div>

        <InfoBox title="Rain Is a Thief's Best Friend" type="tip">
          During rainfall, <strong>enemy perception is reduced</strong> — sneaking into camps is measurably easier in a downpour. If a camp is giving you trouble, wait for storm clouds and turn the weather into your infiltration tool.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Snow, Ice & Body Heat</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• <strong className="text-[var(--text-primary)]">Deep snow slows you considerably</strong> — plan Albaneve routes around roads and ridgelines, or budget extra time</li>
            <li>• <strong className="text-[var(--text-primary)]">Slippery ice plains</strong> cut both ways: harder to control your movement, but sliding can carry you across flats fast if you lean into it</li>
            <li>• Freezing conditions <strong className="text-[var(--text-primary)]">drain body heat</strong> — this stacks with the biome's hypothermia threat (see The Shroud System for frost resistance details)</li>
            <li>• Warmth sources: <strong className="text-[var(--text-primary)]">campfires and torches</strong> give on-the-go heat; specialized cold armor and warming foods are the permanent solution</li>
          </ul>
        </div>

        <InfoBox title="Weather-Proof Your Base" type="info">
          Rain and storms make exposed outdoor work miserable — but anything under a roof is unaffected. Townsfolk need shelter to work at full capacity anyway, so roofing your crafting courtyard pays double: dry workers and uninterrupted production regardless of the forecast.
        </InfoBox>
      </div>
    ),
  },
];
