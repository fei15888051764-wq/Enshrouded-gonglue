import { Skull, Flame, Swords, Star, MapPin, Shield, Crown } from 'lucide-react';
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

function BossCard({ name, faction, level, region, quest, flameAltar, difficulty, effective, resisted, drops, desc, attacks, strategy, soloTips, coOpTips }: {
  name: string; faction: string; level: string; region: string; quest?: string; flameAltar?: string; difficulty: string;
  effective?: string; resisted?: string; drops: string; desc: string; attacks: string[]; strategy: string; soloTips?: string; coOpTips?: string;
}) {
  const diffColors: Record<string, string> = {
    'Easy': 'text-green-400',
    'Medium': 'text-yellow-400',
    'Hard': 'text-orange-400',
    'Very Hard': 'text-red-400',
    'Extreme': 'text-red-500',
  };
  const factionColors: Record<string, string> = {
    'Fell': 'text-purple-400',
    'Scavenger': 'text-orange-400',
    'Vukah': 'text-green-400',
    'Hollow': 'text-blue-400',
    'Cyclops': 'text-cyan-400',
    'Drak': 'text-teal-400',
  };
  return (
    <div className="game-panel corner-decor p-4 mb-4 border border-[var(--border-gold)]/30" id={name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-cinzel text-sm font-bold text-[var(--text-gold)]">{name}</h4>
        <span className={`text-[10px] font-bold uppercase ${diffColors[difficulty] || 'text-gray-400'}`}>{difficulty}</span>
      </div>
      <div className="flex gap-2 text-[10px] text-[var(--text-muted)] mb-2 flex-wrap">
        <span className={factionColors[faction] || 'text-[var(--text-muted)]'}>{faction}</span>
        <span>•</span>
        <span>Level: {level}</span>
        <span>•</span>
        <span className="text-orange-400 flex items-center gap-0.5"><MapPin className="w-3 h-3" />{region}</span>
        {quest && <><span>•</span><span className="text-[var(--accent-green)]">Quest: {quest}</span></>}
        {flameAltar && <><span>•</span><span className="text-[var(--text-gold)]">Flame Altar: {flameAltar}</span></>}
      </div>
      <p className="text-xs text-[var(--text-secondary)] mb-3">{desc}</p>
      {(effective || resisted) && (
        <div className="flex gap-3 text-[10px] mb-2">
          {effective && <span className="text-green-400">Effective: {effective}</span>}
          {resisted && <span className="text-red-400">Resisted: {resisted}</span>}
        </div>
      )}
      <div className="text-xs text-[var(--accent-green)] mb-3"><strong>Drops:</strong> {drops}</div>
      <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Attack Patterns</div>
      <ul className="text-xs text-[var(--text-secondary)] space-y-0.5 mb-3 list-disc list-inside">
        {attacks.map((a) => <li key={a}>{a}</li>)}
      </ul>
      <div className="text-xs text-[#6a9ad0] mb-2"><strong>Strategy:</strong> {strategy}</div>
      {soloTips && <div className="text-[10px] text-yellow-400/80 mb-1"><strong>Solo:</strong> {soloTips}</div>}
      {coOpTips && <div className="text-[10px] text-green-400/80"><strong>Co-op:</strong> {coOpTips}</div>}
    </div>
  );
}

export const bossesSubSections: SubSection[] = [
  {
    id: 'boss-overview',
    title: 'Boss Overview',
    icon: <Skull className="w-5 h-5" />,
    summary: 'All 13 bosses in Embervale — progression order, locations, difficulty, and what each unlocks.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">13 major boss encounters</strong> across Embervale. 
          Defeating them is the core progression system — most bosses drop a <strong className="text-[var(--text-gold)]">head</strong> used to 
          upgrade your <strong className="text-[var(--text-gold)]">Flame Altar</strong>, increasing Shroud survival time and unlocking new areas. 
          Some bosses are <strong className="text-[var(--text-primary)]">Quest Bosses</strong> required for crafting stations and NPC progression.
        </p>

        <InfoBox title="Boss Factions" type="info">
          <ul className="space-y-1">
            <li>• <strong className="text-purple-400">Fell (7 bosses):</strong> Shroud-corrupted abominations. The main boss faction. Most drop Flame Altar upgrade heads.</li>
            <li>• <strong className="text-orange-400">Scavenger (1 boss):</strong> Human boss — Scavenger Matron. Early game gatekeeper.</li>
            <li>• <strong className="text-green-400">Vukah (1 boss):</strong> Beastman champion — Vukah Brawler. Ceremony Hill guardian.</li>
            <li>• <strong className="text-blue-400">Hollow (1 boss):</strong> Undead giant — Hollow Cyclops. Hollow Halls final chamber guardian.</li>
            <li>• <strong className="text-cyan-400">Cyclops (1 boss):</strong> One-eyed giant — regular Cyclops. Albaneve caves threat.</li>
            <li>• <strong className="text-teal-400">Drak (1 boss):</strong> Reptilian deity — Hydrak'Dal. Veilwater Basin endgame.</li>
          </ul>
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Boss Progression Order</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">#</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Boss</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Level</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Difficulty</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Flame Altar</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Location</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">1</td><td className="font-bold text-purple-400">Fell Thunderbrute</td><td>5</td><td className="text-yellow-400">Medium</td><td>—</td><td>Springlands</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">2</td><td className="font-bold text-orange-400">Scavenger Matron</td><td>8</td><td className="text-green-400">Easy</td><td>Lv 3</td><td>Springlands</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">3</td><td className="font-bold text-green-400">Vukah Brawler</td><td>8</td><td className="text-yellow-400">Medium</td><td>—</td><td>Low Meadows</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">4</td><td className="font-bold text-purple-400">Fell Critter Queen</td><td>15</td><td className="text-orange-400">Hard</td><td>—</td><td>Revelwood</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">5</td><td className="font-bold text-purple-400">Fell Wispwyvern</td><td>15</td><td className="text-orange-400">Hard</td><td>Lv 3</td><td>Revelwood</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">6</td><td className="font-bold text-blue-400">Hollow Cyclops</td><td>18</td><td className="text-orange-400">Hard</td><td>—</td><td>Hollow Halls</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">7</td><td className="font-bold text-purple-400">Fell Monstrosity</td><td>18</td><td className="text-orange-400">Hard</td><td>Lv 4</td><td>Nomad Highlands</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">8</td><td className="font-bold text-purple-400">Fell Sicklescythe</td><td>25</td><td className="text-red-400">Very Hard</td><td>Lv 5</td><td>Kindlewastes</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">9</td><td className="font-bold text-orange-400">Scavenger Tyrant</td><td>25</td><td className="text-orange-400">Hard</td><td className="text-[var(--text-muted)]">Quest</td><td>Albaneve</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">10</td><td className="font-bold text-cyan-400">Cyclops</td><td>30</td><td className="text-red-400">Very Hard</td><td>—</td><td>Albaneve</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">11</td><td className="font-bold text-purple-400">Fell Cyclops</td><td>35</td><td className="text-red-400">Very Hard</td><td>Lv 6</td><td>Albaneve</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">12</td><td className="font-bold text-purple-400">Fell Dragon Youngling</td><td>35</td><td className="text-red-500">Extreme</td><td>Lv 8</td><td>Albaneve</td></tr>
              <tr><td className="py-1.5">13</td><td className="font-bold text-teal-400">Hydrak'Dal</td><td>40+</td><td className="text-red-500">Extreme</td><td>Lv 9</td><td>Veilwater Basin</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Flame Altar Upgrade Path" type="tip">
          The Flame Altar upgrades from Level 2 to Level 9, with almost every step requiring a specific boss head: 
          <strong className="text-orange-400">Scavenger Matron</strong> (Lv 3) → <strong className="text-purple-400">Fell Wispwyvern</strong> (Lv 3) → 
          <strong className="text-purple-400">Fell Monstrosity</strong> (Lv 4) → <strong className="text-purple-400">Fell Sicklescythe</strong> (Lv 5) → 
          <strong className="text-purple-400">Fell Cyclops</strong> (Lv 6) → <strong className="text-purple-400">Fell Dragon Youngling</strong> (Lv 8) → 
          <strong className="text-teal-400">Hydrak'Dal</strong> (Lv 9). Each upgrade increases max Shroud Time by ~1 minute.
        </InfoBox>

        <InfoBox title="Boss Preparation Checklist" type="warning">
          Before any boss fight: 1) Repair all gear at Workbench 2) Eat 3 food buffs 3) Craft 10+ healing potions 4) Set respawn at nearby Flame Altar 5) Check boss weakness/resistance chart 6) Bring appropriate resistance gear 7) In co-op: assign roles (tank, healer, DPS)
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'early-bosses',
    title: 'Early Game Bosses',
    icon: <Flame className="w-5 h-5" />,
    summary: 'First 5 bosses: Thunderbrute, Matron, Vukah Brawler, Critter Queen, and Wispwyvern.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-[var(--text-gold)]">early game bosses</strong> (Levels 5-15) introduce core mechanics and gate 
          your first Flame Altar upgrades. Master these fights and you'll have the skills to handle everything that follows.
        </p>

        <BossCard
          name="Fell Thunderbrute"
          faction="Fell"
          level="5"
          region="Springlands, Low Meadows, Revelwood, Nomad Highlands, Kindlewastes"
          difficulty="Medium"
          effective="Fire, Shroud"
          resisted="Ice"
          drops="Fell Thunderbrute Head, Shroud Core ×1, Runes ×22, Fell Commander's Bow (rare)"
          desc="Enshrouded's first proper miniboss — a hulking brute posted to guard Elixir Wells and Shroud Roots across nearly every biome. Serves as your first real gear check."
          attacks={['Three-hit melee combo ending with ground slam — dodge sideways', 'Lightning-charged slam with massive AoE shockwave', 'Enrage at 30% HP — attack speed increases significantly']}
          strategy="Bait a heavy swing, dodge through it, and punish the recovery. Ranged attacks are safest between combos. The Ancient Bridge Thunderbrute can drop the Fell Commander Bow — an excellent early ranged weapon."
          soloTips="Use fire arrows from distance. When he raises both arms, dodge sideways immediately. Save stamina for emergency dodges."
          coOpTips="Spread out to avoid both getting hit by the slam. One player can bait while others attack from behind."
        />

        <BossCard
          name="Scavenger Matron"
          faction="Scavenger"
          level="8"
          region="Springlands, Revelwood, Nomad Highlands, Kindlewastes"
          quest="The Blacksmith"
          flameAltar="Lv 3"
          difficulty="Easy"
          drops="Scavenger Matron Head (Flame Altar Lv 3), Blacksmith NPC unlock"
          desc="The second boss most players face — a hulking Scavenger matriarch who appears as two forms: the poison-spitting Gorger and the reinforcement-summoning Grizzler. Her head upgrades the Flame Altar to level 3."
          attacks={['Gorger variant: throws poison in three directions toward you — sidestep out of the middle cone', 'Grizzler variant: summons Scavenger adds — focus them down before they swarm', 'Heavy melee swipes with slow wind-up — easy to dodge with proper timing']}
          strategy="Read the variant first: the Gorger punishes standing still with three-way poison, the Grizzler drowns you in adds. Bring Poison resistance for the Gorger and AoE or fast weapon to clear the Grizzler's summons. A shield and clean dodge timing carry the fight."
          soloTips="Fight from a perch using ranged attacks — you can plink her health down before the adds become a problem. She melts quickly to ranged fire."
          coOpTips="One player tanks and draws aggro, others attack from behind. Prioritize killing adds when Grizzler variant spawns."
        />

        <BossCard
          name="Vukah Brawler"
          faction="Vukah"
          level="8"
          region="Low Meadows, Nomad Highlands, Kindlewastes"
          quest="Vukah Ceremony"
          difficulty="Medium"
          effective="Fire, Shroud"
          resisted="Blunt, Ice"
          drops="Vukah Brawler Head, Jezmina's Apotheosis (at Vukah Arena), Animal Fur, Resin"
          desc="The champion of the Vukah gladiator pits — a beastman far larger than a common Vukah, crowned in the arenas their warrior sect runs. Vukah language and culture skills won't pacify him."
          attacks={['Two-Hit Chain: a chain of two heavy blows — every hit staggers, so never trade hits', 'Leap Rush: when you back off, he leaps into the air and rushes your position', 'Heavy melee combos with high stagger threshold']}
          strategy="Don't try to tank him — every hit stuns, so dodge the two-hit chain and punish between combos. Backing away invites his leap rush, so hold mid-range and re-engage on your terms. He shrugs off Blunt and Ice but takes extra from Fire and Shroud."
          soloTips="Shield + Bleed build works well. Dodge through his attacks and counter on recovery frames. Never trade blows."
          coOpTips="Tank pulls aggro, mage controls, archer focuses on weak points. Frost → Arcane Burst → Melee Finish = maximum DPS."
        />

        <BossCard
          name="Fell Critter Queen"
          faction="Fell"
          level="15-25 (scales)"
          region="Revelwood, Nomad Highlands, Kindlewastes"
          difficulty="Hard"
          drops="Giant Critter Scales ×1-4, Legendary Runes ×2-5, Runes ×10-20"
          desc="A miniboss that defends Elixir Wells, Shroud Roots, and other Shroud points of interest across the mid-to-late biomes. A repeatable Shroud guardian rather than a set-piece — expect to fight several."
          attacks={['Spawns small Fell critters constantly throughout the fight', 'Melee swipes with poison claws — applies poison DOT', 'Ground pound AoE that applies poison to anyone in range']}
          strategy="Clear its smaller critters first, watch the Shroud timer while you're in the lair, and harvest the Giant Critter Scales it drops for crafting. AoE damage is essential — you need to clear the adds while damaging the boss."
          soloTips="Fire staff with Meteor or greatsword with Whirlwind Crescendo works well. Save stamina for dodging the poison ground-pound."
          coOpTips="One player focuses on boss, others clear adds. Coordinate to burst her down during recovery frames."
        />

        <BossCard
          name="Fell Wispwyvern"
          faction="Fell"
          level="15"
          region="Revelwood — The Pike, above Pikemead's Reach"
          quest="Reach The Capital, Pikemead's Reach"
          flameAltar="Lv 3"
          difficulty="Hard"
          drops="Fell Wispwyvern Head (Flame Altar Lv 3), Shroud Cores, Legendary Runes, Commander's Ring, Key to The Pike"
          desc="The wyvern nesting at The Pike above Pikemead's Reach in Revelwood. Downing it completes the quest and its head feeds the Flame Altar's third upgrade."
          attacks={['Shroud Spray: rears up and rains Shroud projectiles on reticle-marked ground', 'Shroud Breath: a Shroud-damage cone in front — roll to its flank', 'Pounce: leaps up and slams down on your original position — keep moving', 'Tail Sweep: melee tail swipes when you are at its rear', 'Summon Fell Beetles: roars to call Fell Beetles — hit it in the open mouth mid-roar to stun and cancel the summon']}
          strategy="The roar is your opening: strike its open mouth while it summons to stun it and skip the Fell Beetle swarm entirely. Otherwise stick to its flanks, dodge the pounce by leaving your marker, and clear beetles the moment they land. Shroud-resistant gear tames the spray chip."
          soloTips="Stay at its flanks at all times. The tail sweep is less dangerous than the breath. When it roars, rush to the mouth and attack."
          coOpTips="One player baits the pounce while others attack from the rear. Call out when it starts the roar so someone can cancel the beetle summon."
        />
      </div>
    ),
  },
  {
    id: 'mid-bosses',
    title: 'Mid Game Bosses',
    icon: <Swords className="w-5 h-5" />,
    summary: 'Hollow Cyclops, Fell Monstrosity, Fell Sicklescythe, and Scavenger Tyrant — the difficulty spike begins.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-[var(--text-gold)]">mid game bosses</strong> (Levels 18-25) represent a significant difficulty spike. 
          These bosses test your build optimization, mechanical skill, and preparation. Each unlocks critical Flame Altar upgrades.
        </p>

        <BossCard
          name="Hollow Cyclops"
          faction="Hollow"
          level="18"
          region="Revelwood, Nomad Highlands, Kindlewastes — Hollow Halls dungeons"
          difficulty="Hard"
          effective="Blunt"
          resisted="—"
          drops="Hollow Cyclops Head, Giant Bones, Ectoplasm Shard, Bone Key materials"
          desc="Cyclops once ruled the mountaintops of Embervale until the Flame cursed them and banished them to the Hollow Halls during the reign of King Gormander. Now they guard the final chamber of every Hollow Halls dungeon."
          attacks={['Club Melee: basic overhead club strikes at close range', 'Thrust: rapid forward jabs — roll to the side, not backward', 'Cleave: a wide arcing swing that catches flankers — dodge on the wind-up', 'Stomp: ground impact with its left leg; back off when it plants', 'Hollow Breath: frontal Hollow damage — stay off its centreline']}
          strategy="Effective vs Blunt, so a mace or hammer is your best friend here. Punish the recovery after its Cleave and Stomp, leave marked ground before Hollow Eruption launches you, and keep the Reanimator adds off your back if you're deep in a Hollow Halls run."
          soloTips="Medium armor with a mace/shield combo. Stay at mid-range, bait the cleave, then punish. Watch out for the thrust — it has deceptive range."
          coOpTips="Tank faces the Cyclops away from the party. Ranged DPS attacks from the sides. Healer watches for the stomp AoE and prepares group heals."
        />

        <BossCard
          name="Fell Monstrosity"
          faction="Fell"
          level="18"
          region="Nomad Highlands, Kindlewastes — beside calcified statues"
          quest="A Black Cauldron For The Alchemist"
          flameAltar="Lv 4"
          difficulty="Hard"
          drops="Fell Monstrosity Head (Flame Altar Lv 4), Monstrous Ribs ×1-3, Shroud Nexus, Legendary Runes"
          desc="A horror stitched together by the sorcerer Ikora, who experimented on Shroud Spores with the Black Cauldron. It looms beside calcified statues across the mid-to-late biomes; its head unlocks the Flame Altar's fourth upgrade."
          attacks={['Shroud Spray: leans back and lobs Shroud projectiles at marked ground — keep moving off the reticles', 'Shroud Breath: exhales Shroud damage in a straight line ahead — strafe out of the lane, do not back-pedal', 'Ground slam AoE with massive damage radius', 'Spawns Shroud pools on ground that drain health while standing in them']}
          strategy="A stationary-artillery fight: circle-strafe to dodge the Shroud Spray volleys and never stand in the breath lane. Shroud-resistance armor keeps the chip damage manageable while you burn it down. The unique Cauldron only drops from the Cradle of Dusk lair. Vulnerable to fire."
          soloTips="Two-handed fire-enchanted weapons are best. Stay mobile — the pools expand over time. Save stamina for dodging the breath attack."
          coOpTips="One player on pool duty (destroying Shroud pools), others focus DPS. The breath attack is telegraphed — call it out so everyone can strafe."
        />

        <BossCard
          name="Fell Sicklescythe"
          faction="Fell"
          level="25"
          region="Kindlewastes — Haunted Sun Temple, Hollow Halls"
          quest="Sun Temple Stories"
          flameAltar="Lv 5"
          difficulty="Very Hard"
          drops="Fell Sicklescythe Head (Flame Altar Lv 5), Shroud Nexus, Mist of a Fell Sicklescythe ×1-3, Legendary Runes ×6-8"
          desc="A scythe-limbed Fell boss that haunts the Shrouded ruins of the Kindlewastes — from the Haunted Sun Temple to the Kindlewastes Hollow Halls. Its head unlocks the Flame Altar's fifth upgrade. The most mechanically complex Fell boss."
          attacks={['Dual scythe combo (5 hits) — learn the rhythm and dodge through', 'Teleport behind player after 3rd combo — listen for audio cue', 'Leaves scythe traps on ground in Phase 2 — stepping applies bleed', 'Cloaks in Shroud in Phase 3 — nearly invisible, audio cues indicate attacks']}
          strategy="Respect its reach — dodge inside the wide scythe swings and punish between them, in level-25+ gear the Kindlewastes expects. It also guards the finale of the Kindlewastes Hollow Halls. The audio cue for teleport is critical — learn it."
          soloTips="Medium armor minimum — light armor users die in 2 hits. Fire AoE attacks to reveal position in Phase 3. This is the first serious gear check."
          coOpTips="Assign one player to call out teleports. Frost → Arcane Burst → Melee Finish = maximum DPS. Stay spread to avoid multiple players getting hit by scythe traps."
        />

        <BossCard
          name="Scavenger Tyrant"
          faction="Scavenger"
          level="25"
          region="Albaneve Summits — Forge of Obsidia, Rothstep"
          quest="A Blast Furnace For The Blacksmith"
          difficulty="Hard"
          drops="Bellows (Blast Furnace crafting), Scavenger equipment, Legendary Runes"
          desc="A powerful Scavenger leader guarding the Forge of Obsidia in Albaneve Summits. This is a Quest Boss — defeating him does NOT provide a Flame Altar upgrade head, but is required to obtain the Bellows for crafting the Blast Furnace, the Blacksmith's final crafting station."
          attacks={['Heavy melee combo with massive weapon — high stagger on every hit', 'Ground slam AoE that knocks back all nearby players', 'Summons Scavenger Berserker and Ranged adds during fight', 'Enrage at 40% HP — attack speed increases, calls more reinforcements']}
          strategy="A tough Scavenger boss with high stagger threshold. He hits hard and fast — never trade blows. Prioritize clearing the adds he summons, as they can overwhelm you while you focus on the boss. Fire damage is effective against all Scavenger types."
          soloTips="Bring AoE fire attacks to handle adds efficiently. Use a shield to block his heavy combos. Clear adds first, then focus on the Tyrant during his recovery frames."
          coOpTips="Tank holds the Tyrant's aggro while DPS clears adds. Healer must keep tank topped off — the heavy combos deal massive damage. Save burst damage for the enrage phase at 40%."
        />
      </div>
    ),
  },
  {
    id: 'late-bosses',
    title: 'Late Game Bosses',
    icon: <Star className="w-5 h-5" />,
    summary: 'Cyclops, Fell Cyclops, Fell Dragon Youngling — the hardest challenges in Embervale.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-[var(--text-gold)]">late game bosses</strong> (Levels 30-35) are the ultimate tests of skill and gear. 
          Each requires maxed Flame Altar, top-tier equipment, and extensive preparation. These are the fights you'll remember.
        </p>

        <BossCard
          name="Cyclops"
          faction="Cyclops"
          level="30"
          region="Albaneve Summits — caves near Everfrore Keep, Howling Peak, Wildwater Basin, Lake Luma"
          difficulty="Very Hard"
          effective="Fire, Shroud"
          resisted="Blunt, Ice"
          drops="Cyclops Head, Giant Bones, Raw Game, Legendary Runes"
          desc="A one-eyed giant that stalks the frozen caverns of the Albaneve Summits — you'll meet it in five lairs near Everfrore Keep, Howling Peak, Wildwater Basin, and Lake Luma. NOT the Fell Cyclops — this is the regular Cyclops, a repeatable hostile fauna."
          attacks={['Heavy slow melee swings with massive club', 'Stomp AoE that shakes the ground', 'Eye glare — telegraphs a charged attack', 'Blocks narrow cave passages — must be defeated to proceed']}
          strategy="The Cyclops shrugs off Blunt and Ice but takes extra punishment from Fire and Shroud — bring a fire staff or a Shroud-damage weapon and stay mobile between its heavy, slow melee swings. Circle to its flank and punish the recovery after each big wind-up."
          soloTips="Fire-enchanted weapons are essential. Stay at mid-range, bait the swing, then punish. The caves restrict movement — use the environment to your advantage."
          coOpTips="Tank draws aggro in open areas. Ranged DPS kites while melee flanks. Beware of the stomp — it has a larger radius than it appears."
        />

        <BossCard
          name="Fell Cyclops"
          faction="Fell"
          level="35"
          region="Albaneve Summits — Frozen Elixir Well"
          quest="Ignite The Coldest Elixir Well"
          flameAltar="Lv 6"
          difficulty="Very Hard"
          effective="Fire, Shroud"
          resisted="Blunt, Ice"
          drops="Fell Cyclops Head (Flame Altar Lv 6), Enshrouded Cyclops Eye"
          desc="A Shroud-corrupted Cyclops guarding a frozen Elixir Well high in the Albaneve Summits. Its head is a key ingredient for the Flame Altar's sixth upgrade. Same resistance profile as its uncorrupted kin but far more dangerous."
          attacks={['Club swings and stomp AoE — ice breath in frontal cone', 'Eye beam — tracking ice laser that freezes player after 3 seconds of contact', 'Phase 3: summons ice pillars that block movement, eye beam sweeps entire arena']}
          strategy="Same resistance profile as the regular Cyclops: Fire and Shroud are Effective, Blunt and Ice are Resisted. Lead with fire damage, roll through its slow melee, and stagger it whenever the opening appears. Pack Fire and cold resistance for the summit fight."
          soloTips="Fire resistance armor REQUIRED. Stay behind him — the eye beam only fires forward. In Phase 3, destroy ice pillars quickly to maintain mobility."
          coOpTips="Full 4-player team recommended. Tank faces Cyclops away from party. Ranged DPS destroys ice pillars in Phase 3 while melee DPS focuses on the boss."
        />

        <BossCard
          name="Fell Dragon Youngling"
          faction="Fell"
          level="35"
          region="Albaneve Summits — Howling Peak"
          quest="Slaying The Corrupted Beast"
          flameAltar="Lv 8 (Final)"
          difficulty="Extreme"
          drops="Fell Dragon Youngling Head (Flame Altar Lv 8), 5× Shroud Cores, Legendary Runes, Legendary Weapon (chance)"
          desc="The corrupted beast brooding atop Howling Peak, the highest point in Embervale. Slaying it completes 'Slaying The Corrupted Beast' and yields the ingredient for the Flame Altar's eighth and final upgrade. The canonical final boss of the main progression."
          attacks={['Fell Fire Meteors: spins in a circle unleashing a wave of Fell Fire Meteors — can be deflected back', 'Fell Fire Breath: rotates while breathing fire on the platform, or sweeps left-to-right', 'Fell Fire Strafe: flies forward breathing fire in a lane directly ahead', 'Wing Beat: close-range knockback — do not get greedy staying under its wings', 'Summons Fell Draconian Vultures at 50% HP']}
          strategy="Its damage is heavily reduced until you stun it, so build for stagger and unload during the grounded windows. Deflect the meteor ring back, dodge the fire-breath sweeps, and clear the summoned Vultures fast. Fire resistance gear plus warm clothing for the altitude makes the fight survivable."
          soloTips="Bring 150-200 Stun Arrows and a Bow — this allows any build to knock down the boss. Use a shield for perfect parries on the meteors. Updraft skill is mandatory for recovering from Wing Beat knockback."
          coOpTips="Party composition: 1 Tank, 1 Healer (Water Aura + group heal), 2 DPS (ranged preferred). Spread out in Phase 2 to minimize meteor overlap. When stunned, everyone unloads damage."
        />
      </div>
    ),
  },
  {
    id: 'endgame-bosses',
    title: 'Endgame Boss',
    icon: <Crown className="w-5 h-5" />,
    summary: "Hydrak'Dal — the true final boss of Veilwater Basin.",
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Beyond the main campaign lies <strong className="text-teal-400">Hydrak'Dal</strong> — the endgame boss of the Veilwater Basin update. 
          This is the hardest encounter in the game, designed for max-level characters with legendary gear.
        </p>

        <BossCard
          name="Hydrak'Dal"
          faction="Drak"
          level="40+"
          region="Veilwater Basin — Drak'Dal Temple"
          quest="Vengeance"
          flameAltar="Lv 9"
          difficulty="Extreme"
          drops="Hydrak'Dal Head (Flame Altar Lv 9), Underwater Grappling Hook"
          desc="The mini-boss of the Drak'Dal Temple in Veilwater Basin. He has a ranged earthquake attack that hits pretty hard. Defeating him provides the head needed to upgrade your Flame Altar to level 9 — the current maximum."
          attacks={['Ranged earthquake attack — yellow glow beneath you signals incoming rocks', 'Whirlwind AoE in large radius — triggered when players get close', 'Yellow glowing hands telegraph attacks 1-2 seconds before they happen', 'Two crocodile-like Drak adds in the arena that harass you throughout the fight']}
          strategy="The best way to beat Hydrak'Dal is by moving constantly. As you enter the room, buff with Elixir, Pray Scroll, and double check food and healing potions. The room has four pads for quick movement and mud that slows you down. The center pillar can be circled to avoid the boss face to face."
          soloTips="Range kill the two crocodile adds before the boss comes out. Kite him with Golden Steel Arrows. Double jump is key — when you see yellow glow beneath you, jump and glide to a safe position."
          coOpTips="One player kites the boss while others clear adds. Use the center pillar for cover and healing. Coordinate burst damage during his long animation recovery."
        />

        <InfoBox title="Veilwater Basin Preparation" type="warning">
          Before attempting Hydrak'Dal: 1) Upgrade Flame Altar to Level 8 2) Complete the 'Vengeance' questline 3) Craft Drak Soulward Flask (10 Drak Scales + 10 Drak Teeth + 10 Drak Claws + 10 Drak Blood) 4) Bring Golden Steel Arrows 5) Equip Frost Resistance gear 6) Have Swimfins and Diving Helmet for Basin exploration
        </InfoBox>

        <InfoBox title="Flame Altar Level 9 Materials" type="info">
          Upgrading to Flame Altar Level 9 requires: 60 Sparks, 60 Gold Ore, 60 Green Vitriol Dust, 30 Passionflower, 60 Aquamarine, 30 Pearl, and <strong className="text-teal-400">1 Hydrak'Dal Head</strong>. Passionflower only spawns at night. Aquamarine is mined from blue veins in Veilwater Basin. Pearls come from underwater Clamshells or Drak drops.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'boss-strategies',
    title: 'Boss Strategies',
    icon: <Shield className="w-5 h-5" />,
    summary: 'Universal boss combat tips, build recommendations, and co-op strategies.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Boss encounters in Enshrouded reward preparation, mechanical skill, and build knowledge. 
          These universal strategies apply to all 12 bosses.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Recommended Boss-Killing Builds</h3>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-red-400 mb-2">Solo Build: Sword & Board Tank</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">The safest solo boss build. Heavy armor + shield + one-handed sword. Prioritize Constitution and Endurance.</p>
          <div className="text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--text-primary)]">Key Skills:</strong> Shield Mastery, Iron Will, Counterstrike, Constitution max, Battle Heal<br/>
            <strong className="text-[var(--text-primary)]">Gear:</strong> Bulwark of the North + Aegis of the Flame + fire-enchanted sword<br/>
            <strong className="text-[var(--text-primary)]">Strategy:</strong> Block everything. Parry when you see white flash. Counterstrike for damage. Heal when below 50%.
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-2">Solo Build: Fire Mage</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Ranged DPS build. Kill bosses from outside their attack range. Staff fire spells + wand backup.</p>
          <div className="text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--text-primary)]">Key Skills:</strong> Spell Mastery, Fireball, Meteor, Mana Pool, Quick Charge, Elemental Fury<br/>
            <strong className="text-[var(--text-primary)]">Gear:</strong> Archmage's Robes + Phoenix Staff + Elder Wand<br/>
            <strong className="text-[var(--text-primary)]">Strategy:</strong> Max range at all times. Fireball spam → Meteor on cooldown. Wand when OOM. Never let them close.
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-2">Solo Build: Stun Archer</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">The easiest Dragon-killing build. Stun lock bosses with Stun Arrows then switch to explosive for damage.</p>
          <div className="text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--text-primary)]">Key Skills:</strong> Skillshot, Multi-Shot, Spread, Trigger, Backstab, Backstab Mastery<br/>
            <strong className="text-[var(--text-primary)]">Gear:</strong> Forsaken Bow + 150-200 Stun Arrows + Explosive Arrows<br/>
            <strong className="text-[var(--text-primary)]">Strategy:</strong> Spam Stun Arrows to fill stagger bar → boss falls → switch to Explosive → attack from rear for +55% damage.
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-2">Co-op Team Composition (4 Players)</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">The optimal boss-killing team for the hardest encounters:</p>
          <div className="text-xs text-[var(--text-muted)] space-y-1">
            <div><strong className="text-[var(--text-primary)]">Tank (Warrior):</strong> Heavy armor + sword/shield. Holds aggro, blocks attacks, calls out boss mechanics.</div>
            <div><strong className="text-[var(--text-primary)]">Healer (Mage):</strong> Robes + healing staff. Water Aura + Waters of Life on cooldown. Keeps team alive.</div>
            <div><strong className="text-[var(--text-primary)]">Ranged DPS (Ranger):</strong> Medium armor + bow. Headshots from safe distance. Stun arrows for stagger.</div>
            <div><strong className="text-[var(--text-primary)]">Flex (Battlemage):</strong> Mix of melee and magic. Adapts to boss phase. Burst damage specialist.</div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Universal Boss Tips</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Preparation</h4>
            <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
              <li>• Repair ALL gear at Workbench before the fight</li>
              <li>• Eat 3 food buffs (health regen + stamina + damage)</li>
              <li>• Craft 10+ healing potions (Health Potion + bandages)</li>
              <li>• Set respawn at nearest Flame Altar</li>
              <li>• Check the boss's damage resistance chart — bring effective damage type</li>
              <li>• Bring resistance potions for the boss's element (fire/shroud/frost)</li>
            </ul>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">During Combat</h4>
            <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
              <li>• Learn the boss attack patterns — do not panic-dodge</li>
              <li>• White flash = parry opportunity. Red glow = unblockable — dodge!</li>
              <li>• Save stamina for emergencies — do not spam heavy attacks</li>
              <li>• Heal at 60% HP, not 10%. Getting greedy kills you.</li>
              <li>• Boss enrage (usually 25-30%) = burn all cooldowns immediately</li>
              <li>• If you get lit on fire, dodge or blink to put it out</li>
            </ul>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Co-op Communication</h4>
            <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
              <li>• Call out when boss targets you ("Aggro on me!")</li>
              <li>• Warn about AoE attacks ("Dodge left!" / "Meteor incoming!")</li>
              <li>• Healer: announce cooldowns ("Heal in 3... 2... 1...")</li>
              <li>• Assign roles before engaging (who tanks, who heals, who DPS)</li>
              <li>• Split adds between players — do not let them swarm the healer</li>
            </ul>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Boss Respawn & Farming</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• <strong className="text-[var(--text-primary)]">Standard bosses:</strong> Respawn after 2-3 in-game hours (~20-30 minutes real time)</li>
            <li>• <strong className="text-[var(--text-primary)]">Shroud Elites:</strong> Only respawn after server restart or region reset</li>
            <li>• <strong className="text-[var(--text-primary)]">Event bosses:</strong> Time-limited updates (e.g. "Thralls of Twilight" — new elite variants)</li>
            <li>• <strong className="text-[var(--text-primary)]">Farm loop:</strong> Thunderbrute → Matron → Wispwyvern → Critter Queen. Use glider routes and build teleport beacons near arenas. This maximizes Runes and materials per hour.</li>
          </ul>
        </div>

        <InfoBox title="Death & Retry" type="info">
          There is no death penalty in Enshrouded other than respawning at your Flame Altar and running back to your gravestone to recover items. Do not get discouraged by deaths on hard bosses — learning attack patterns takes attempts. Each try makes you better. The most rewarding victories are the ones that took 5+ attempts.
        </InfoBox>
      </div>
    ),
  },
];
