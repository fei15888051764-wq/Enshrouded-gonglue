import {
  Shield, Swords, Compass, Home, Wrench, User, Flame,
  TrendingUp, Users, Eye, ChefHat, Beaker, Sprout, Fish,
  Gauge, Waves, Hammer, KeyRound
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

function TipCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="game-panel corner-decor p-3 mb-2">
      <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-1">{title}</h4>
      <p className="text-xs text-[var(--text-secondary)]">{desc}</p>
    </div>
  );
}

export const tipsSubSections: SubSection[] = [
  {
    id: 'beginner-tips',
    title: 'Beginner Tips',
    icon: <Shield className="w-5 h-5" />,
    summary: 'Essential tips for your first 10 hours — NPC rescue priorities, early game mistakes to avoid, and how to progress efficiently.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Your first hours in Enshrouded set the foundation for everything that follows. These tips — collected and synthesized from the world's top Enshrouded guide sites — ensure you start strong and avoid the most common early-game mistakes.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Absolute Priority Checklist</h3>
        <TipCard title="Rescue the Blacksmith FIRST — Nothing Else Matters" desc="The Blacksmith is your #1 priority immediately after establishing a basic base. He unlocks the Grappling Hook and Glider schematics, which fundamentally transform how you explore Embervale. No other NPC or activity comes close in importance. Make this your singular goal." />
        <TipCard title="Get the Glider and Grappling Hook ASAP" desc="The Glider is widely considered the single most impactful item in the game (S-tier). It lets you traverse terrain 10x faster and reach previously inaccessible areas. The Grappling Hook allows instant vertical scaling. Together they change the entire game experience." />
        <TipCard title="Rescue NPCs in the Optimal Order" desc="Blacksmith (Glider/Grappling Hook) → Hunter (Fur Armor, bow upgrades) → Farmer (seeds, food sustainability) → Alchemist (potions, magic) → Carpenter (advanced building). This sequence maximizes your early-game power curve." />
        <TipCard title="Climb Every Ancient Spire You Find" desc="Ancient Spires are the tallest structures in each biome. Climbing them reveals the entire region on your map, unlocks permanent fast travel points, and grants skill points. This should be done FIRST when entering any new biome — before any other activities." />
        <TipCard title="Always Eat 3 Food Buffs Before Combat" desc="Food buffs make you 30–40% stronger. You can have 3 food buffs active simultaneously. Cooked Meat (HP regen) + Honey-Glazed Ribs (stamina) + a third buff matching your needs. Always eat before leaving your base — never fight hungry." />
        <TipCard title="Repair ALL Gear Before Every Expedition" desc="Items lose durability in combat. A broken weapon deals 50% reduced damage. A broken shield has zero block value. Repairs at the Workbench are completely free and instant. Make touching your Workbench a mandatory pre-departure ritual." />
        <TipCard title="Spend Skill Points Immediately — Do Not Hoard" desc="There is zero benefit to saving skill points. Respec costs are negligible (just 1 Rune per point refunded). Spend freely, experiment constantly, and change your build whenever you want. The game encourages build experimentation." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Common Beginner Mistakes to Avoid</h3>
        <div className="game-panel corner-decor p-4 border border-orange-400/20">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><span className="text-orange-400 mr-2">❌</span><strong>Wandering into high-level biomes underleveled</strong> — Check enemy levels before engaging. Areas like Kindlewastes have level 25+ enemies that will one-shot a new player.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Building your first base in a bad location</strong> — Pick flat terrain near water, wood, and stone. Avoid steep slopes and Shroud-covered areas.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Ignoring Shroud Roots</strong> — There are 39 Shroud Roots across the map. Each one destroyed grants a free skill point. That's 39 free levels of power — never skip them.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Salvaging legendary items</strong> — Legendary items often have unique perks that cannot be re-obtained. Store them in chests even if you cannot use them yet.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Fighting bees</strong> — Bees are disproportionately annoying for their reward. Just run past them. They are not worth the time or resources.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Neglecting the Flame Altar upgrades</strong> — Upgrading your Flame extends Shroud survival time, unlocks new crafting recipes, and increases your base radius. Prioritize Flame upgrades consistently.</li>
            <li><span className="text-orange-400 mr-2">❌</span><strong>Forgetting to place Campfires in the Shroud</strong> — Campfires create respawn points. When venturing into deep Shroud areas, place a Campfire first. If you die without one, you respawn at your base and lose all progress.</li>
          </ul>
        </div>

        <InfoBox title="The Best Early-Game Build" type="tip">
          For your first character, go <strong>Sword &amp; Board Tank</strong>. Invest heavily in Constitution and Endurance. Use an Iron Sword + Wooden Shield. This is the most forgiving build — you can block almost all attacks and heal with bandages. Do not worry about "optimal" damage builds until you have survived the early game. Survival always comes first.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Understanding the Flame &amp; Shroud</h3>
        <TipCard title="Upgrade the Flame Relentlessly" desc="The Flame is the core progression system. Each upgrade extends your Shroud survival timer (from 5 minutes to over 30 minutes), increases your base building radius, and unlocks new crafting tiers. Collect Spark, Shroud Cores, and other upgrade materials constantly." />
        <TipCard title="Never Stay in the Shroud Too Long" desc="The Shroud has a visible timer that counts down. When it hits zero, you take rapid damage until death. Always monitor your timer and have an escape route. Early-game Shroud time is very limited — plan expeditions carefully." />
        <TipCard title="Use Flame Altars to Push Into New Areas" desc="Placing Flame Altars in the Shroud creates safe zones with extended survival time. Use them as forward operating bases to push deeper into dangerous territory. They also serve as additional fast travel points." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">More Essential Tips</h3>
        <TipCard title="Use Cosmetic Slots as Extra Storage" desc="Inventory space is limited. A clever trick: equip unused armor pieces in your cosmetic/appearance slots. These slots function as free storage space for gear you are not currently wearing but want to keep. This hack saves precious inventory slots during long looting trips." />
        <TipCard title="Weapon Upgrades Are Limited by Rarity" desc="Weapons can be upgraded a number of times based on their color quality: White = 1 upgrade, Green = 2, Blue = 3, Purple = 4, Orange/Legendary = 5. Plan your upgrades accordingly — do not waste upgrade materials on low-rarity gear you will replace soon. Save your best materials for Purple and Legendary items." />
        <TipCard title="NPCs Need a Bed and Shelter to Function" desc="Every NPC craftsperson you rescue needs two things at your base: a bed placed for them, and a roof over their head (shelter). Without these, they will not offer their full range of services and recipes. Build a dedicated NPC house with beds and a roof before rescuing new NPCs." />
        <TipCard title="Upgrade to Magic Chests ASAP" desc="Once you rescue the Carpenter, craft Magic Chests to replace your standard wooden chests. Magic Chests offer dramatically more storage space and are a massive quality-of-life improvement. This should be one of your first crafting priorities after getting the Carpenter." />
        <TipCard title="Charcoal Kiln Is Essential" desc="The Charcoal Kiln (unlocked via the Carpenter) produces Charcoal from wood logs and dirt. Without it, your Forge and Smelter cannot operate — meaning no metal ingots, no weapon upgrades, and no armor crafting. Build a Kiln immediately after rescuing the Carpenter and keep it running constantly." />
        <TipCard title="Elixir Wells Grant 3 Skill Points Each" desc="In addition to Shroud Roots (1 skill point each), Elixir Wells scattered across the map grant 3 skill points each when activated. These are major power sources — hunting down every Elixir Well should be a priority. Use the interactive community map to locate them all." />
        <TipCard title="Craft a Better Torch" desc="The base torch has very low durability and breaks frequently. Once you unlock the Hunter, craft an upgraded torch immediately. Being stranded in a dark cave with a broken torch is extremely dangerous. Always carry spare torch materials or a backup light source." />
        <TipCard title="Use Mannequins for Armor Swaps" desc="Mannequins (unlocked via the Carpenter) can hold complete armor sets. Place multiple mannequins in your base, each loaded with a different armor setup. This lets you swap between builds instantly without searching through chests. A mannequin for your tank set, one for your DPS set, one for exploring — pure convenience." />
        <TipCard title="Customize Difficulty If Needed" desc="Enshrouded allows difficulty customization through the server menu. If you find weapon durability tedious, you can disable it. If you want a more relaxed experience, adjust enemy damage and HP. The game is meant to be fun — tweak settings to match your preferred experience." />

        <InfoBox title="Pro Tip: Check Enemy Levels" type="tip">
          Every enemy in the game displays a level indicator. If an enemy is 5+ levels above you, you deal drastically reduced damage and take massively increased damage. Enemies 10+ levels above you are essentially invincible. Use this information to decide which areas are safe to explore.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'combat-tips',
    title: 'Combat Mastery',
    icon: <Swords className="w-5 h-5" />,
    summary: 'Complete combat guide — blocking, dodging, elemental weaknesses, weapon types, boss strategies, and advanced fighting techniques.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded's combat rewards skill and preparation. Understanding the mechanics — from basic blocking to elemental matchups — can mean the difference between victory and a long corpse run.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Core Combat Mechanics</h3>
        <TipCard title="Master Blocking — It Is More Important Than Attacking" desc="Blocking with a shield or weapon negates 100% of physical damage if your stamina holds. A well-timed block costs far less stamina than getting hit. Against bosses, blocking is often mandatory — their attacks deal too much damage to tank without a block." />
        <TipCard title="Dodge Rolls Have Invincibility Frames" desc="The dodge roll grants brief invincibility (i-frames). With practice, you can roll through attacks completely unscathed. This is essential against large AOE attacks that cannot be blocked. Time your rolls to the moment the attack connects." />
        <TipCard title="Never Zero Your Stamina in Combat" desc="Always keep at least 20% stamina in reserve. Zero stamina means you cannot block, dodge, or sprint. Getting caught at zero stamina is a death sentence against tough enemies. Heavy attacks are for openings, not for spamming." />
        <TipCard title="Backstab for Massive Damage" desc="Attacking enemies from behind deals significantly increased damage (often 2x or more). Crouch to approach silently, or have a co-op partner draw aggro while you flank. Backstabs are the highest DPS tactic in the game." />
        <TipCard title="Parry System — Risk vs. Reward" desc="Perfectly timing your block just as an attack connects triggers a parry, staggering the enemy and opening them up for a critical hit. Parries require practice but trivialize many encounters once mastered. Start practicing against slow enemies like Fell Thunderbrutes." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Elemental Weakness System</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Enemies have distinct elemental weaknesses and resistances. Carrying multiple weapon types and switching mid-combat is a core skill:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-red-400">🔥 Fire:</strong> Devastating against Fell creatures (red, corrupted enemies), wooden constructs, and plant-based enemies. Weak against fire-resistant beasts.</li>
            <li><strong className="text-cyan-400">❄️ Ice:</strong> Highly effective against fire-elemental enemies, reptilian creatures, and enemies in hot biomes. Weak against ice-aligned enemies.</li>
            <li><strong className="text-yellow-400">⚡ Lightning:</strong> Strong against armored enemies, mechanical constructs, and water-based foes. Many bosses are vulnerable to lightning.</li>
            <li><strong className="text-gray-400">⚔️ Physical:</strong> Reliable all-rounder. No enemy is immune to physical damage. Best fallback when you are unsure of an enemy's weakness.</li>
            <li><strong className="text-purple-400">☠️ Poison:</strong> Applies damage over time. Excellent against high-HP enemies and bosses. Stacks with other damage sources.</li>
          </ul>
        </div>

        <InfoBox title="Always Carry Multiple Weapon Types" type="warning">
          The biggest mistake players make is using one weapon for everything. Always carry at minimum: a physical weapon (sword/axe), a fire weapon (torch or fire-enchanted), and a ranged weapon (bow). When you encounter resistance, swap immediately. Elemental matching often doubles your effective damage.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Weapon Type Breakdown</h3>
        <TipCard title="Swords — Balanced and Reliable" desc="The most versatile weapon type. Good damage, moderate speed, and compatible with shields. Best for beginners and a solid choice for all content. One-handed swords allow blocking; greatswords deal more damage but cannot be used with a shield." />
        <TipCard title="Axes — High Damage, Slower Swing" desc="Axes deal the highest per-hit damage among one-handed weapons but swing slower. Excellent for breaking shields and staggering enemies. The Greataxe variant deals massive damage but leaves you vulnerable during swings." />
        <TipCard title="Bows — Essential for Ranged Combat" desc="Bows are not optional — they are mandatory. Many enemies are extremely dangerous up close but trivial at range. The Hunter NPC unlocks bow upgrades. Always carry a full stack of arrows. Headshots deal critical damage." />
        <TipCard title="Staves — Magic Damage from Distance" desc="Unlocked through the Alchemist. Staves deal elemental magic damage and consume mana. They excel against enemies with high physical resistance. Mana regenerates slowly, so carry mana potions for extended fights." />
        <TipCard title="Wands — Fast, Low-Cost Magic" desc="Also from the Alchemist. Wands fire rapid, low-damage projectiles that cost minimal mana. Excellent for finishing low-HP enemies or applying elemental debuffs quickly." />
        <TipCard title="Greatswords — Massive Two-Handed Power (Update 7)" desc="A new weapon type added in Update 7. Greatswords swing slowly but deal devastating damage per hit. They have their own skill tree including the Whirlwind Crescendo AOE attack. Greatswords can be found as loot even in the first biome — try one early to see if you enjoy the playstyle. New armor pieces support greatsword builds specifically." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Boss Combat Strategies</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Study Attack Patterns:</strong> Every boss has a learnable attack pattern. Spend the first minute of the fight observing rather than attacking. Identify safe windows for damage.</li>
            <li><strong className="text-[var(--text-primary)]">Respec for the Encounter:</strong> Use the Rune respec system to adapt. Fighting a Fell boss? Spec into fire resistance and fire damage. Fighting the Ancient Warden? Lightning resistance is mandatory.</li>
            <li><strong className="text-[var(--text-primary)]">Buff Before Entering:</strong> Eat 3 food buffs, drink relevant resistance potions, and ensure all gear is repaired before triggering a boss fight. The 2 minutes of preparation saves 20 minutes of repeated attempts.</li>
            <li><strong className="text-[var(--text-primary)]">Use the Environment:</strong> Many boss arenas have pillars, ledges, or obstacles. Use them to block line-of-sight attacks or to create breathing room for healing.</li>
            <li><strong className="text-[var(--text-primary)]">Co-op Makes Bosses Easier:</strong> Boss HP scales with player count, but having a teammate to revive you and draw aggro more than compensates. The hardest bosses are significantly easier with even one co-op partner.</li>
          </ul>
        </div>

        <InfoBox title="Advanced: Roll Canceling" type="tip">
          You can cancel the recovery animation (end lag) of certain heavy attacks by rolling immediately after the damage connects. This technique, known as "roll canceling," dramatically increases your effective DPS while keeping you mobile. Practice with your weapon of choice — not all attacks can be canceled, but those that can become much more powerful.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'exploration',
    title: 'Exploration & Movement',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Master exploration with Glider mechanics, Grappling Hook tricks, Ancient Spire routes, fast travel optimization, and hidden area discovery.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Embervale is a massive world filled with secrets. Efficient movement and thorough exploration are the keys to finding the best loot, unlocking fast travel, and uncovering hidden areas.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Glider — The Game-Changing Tool</h3>
        <TipCard title="The Glider Is S-Tier — Priority Craft" desc="Across every major Enshrouded guide site, the Glider is unanimously rated as the single most impactful item in the game. It transforms exploration from a slog into a joy. From any high point, you can glide hundreds of meters, crossing ravines, rivers, and Shroud zones in seconds." />
        <TipCard title="Glider Launching Techniques" desc="Jump + Glider from any elevation to start gliding. The higher the starting point, the farther you travel. You can also glide off your own structures — build a tall tower near your base as a launch pad for exploring the surrounding area." />
        <TipCard title="Stamina Management While Gliding" desc="Gliding consumes stamina. If your stamina runs out mid-glide, you plummet. Monitor your stamina bar and plan landing spots. Eating stamina-buffing food before long glides effectively extends your range." />
        <TipCard title="Glide to Skip Dangerous Terrain" desc="One of the best uses of the Glider is bypassing dangerous ground-level areas entirely. Spot your destination from a high point, glide over enemies, and land at your objective. This saves time, resources, and frustration." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Grappling Hook Mastery</h3>
        <TipCard title="Instant Vertical Mobility" desc="The Grappling Hook lets you latch onto any wooden surface or designated anchor point and pull yourself up instantly. This turns cliff faces into elevators. Look for wooden beams, trees, and scaffolding — these are all valid grapple targets." />
        <TipCard title="Grapple + Glider Combos" desc="The ultimate movement combo: grapple upward to gain height, then immediately deploy the glider to cover massive horizontal distance. This combination allows you to traverse the entire map with remarkable speed once mastered." />
        <TipCard title="Escape Combat with Grapple" desc="If a fight goes bad, grapple to high ground. Most melee enemies cannot follow, giving you time to heal, regroup, or flee entirely. The Grappling Hook is as much a defensive tool as an exploration tool." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Ancient Spires — Your First Stop</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Map Revelation:</strong> Activating an Ancient Spire reveals the entire surrounding region on your map, including points of interest, enemy camps, and resource nodes.</li>
            <li><strong className="text-[var(--text-primary)]">Fast Travel Unlock:</strong> Each spire becomes a permanent fast travel point. Building a network of activated spires dramatically reduces travel time across Embervale.</li>
            <li><strong className="text-[var(--text-primary)]">Skill Points:</strong> Every spire grants skill points upon activation. These are free power — no combat required, just the climb.</li>
            <li><strong className="text-[var(--text-primary)]">Climbing Strategy:</strong> Most spires have climbing boards, grapple points, and resting ledges. Take your time, plan your route, and do not rush. Falling means starting over.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fast Travel Optimization</h3>
        <TipCard title="Unlock Every Fast Travel Point" desc="Ancient Spires, Flame Altars, and certain landmarks become fast travel points when discovered. Make it a habit to unlock every single one you encounter. The time investment pays off exponentially in reduced travel time later." />
        <TipCard title="Use Fast Travel to Reset Enemies" desc="Enemies respawn when you travel far enough away — roughly 2+ biomes of distance. Use fast travel to reset enemy camps for farming materials, or to reset a dungeon for another loot run." />
        <TipCard title="Place Flame Altars as Forward Bases" desc="In addition to your main base, place Flame Altars at strategic locations near difficult content — boss arenas, high-level dungeons, or resource-rich areas. These serve as both respawn points and fast travel destinations." />

        <InfoBox title="Exploration Tip: Climb Everything" type="tip">
          The best loot in Enshrouded is often hidden in hard-to-reach places. If you see a ledge, a rooftop, or a tall tree, there is probably something valuable up there. Use your Grappling Hook and Glider to investigate every elevated area. Developers consistently place rare chests and unique items in these spots to reward curious explorers.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Hidden Areas Worth Finding</h3>
        <TipCard title="Behind Breakable Walls" desc="Many areas have walls that look solid but can be broken with your weapon. These often hide chests, secret passages, or shortcuts. If a wall looks suspiciously different in texture, hit it — you might be rewarded." />
        <TipCard title="Underwater Exploration" desc="Certain areas have underwater sections containing chests and unique resources. Swim fins (unlocked later) make underwater exploration much faster. Until then, hold your breath and move quickly." />
        <TipCard title="False Walls in Dungeons" desc="Dungeons frequently contain false walls that reveal hidden rooms. These rooms often contain legendary-tier chests or unique crafting materials. Thoroughly explore every dead end — they are rarely truly dead." />
      </div>
    ),
  },
  {
    id: 'base-building',
    title: 'Base Building Guide',
    icon: <Home className="w-5 h-5" />,
    summary: 'Complete base building guide — location selection, construction systems, Comfort mechanics, support structures, decoration, and advanced building techniques.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Your base is your sanctuary in Enshrouded. A well-designed base provides powerful buffs, efficient crafting, and a safe respawn point. This guide covers everything from choosing the perfect location to advanced building techniques.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Choosing the Perfect Base Location</h3>
        <TipCard title="Prioritize Flat Terrain" desc="Building on flat ground saves enormous amounts of time and resources. Steep slopes require extensive foundation work and limit your building space. Look for wide, level areas with plenty of open space for expansion." />
        <TipCard title="Proximity to Key Resources" desc="The ideal base location is near: water (for farming), dense forests (for wood), stone deposits (for building materials), and ore veins (for metal). You will visit these resources thousands of times — being close saves hours." />
        <TipCard title="Avoid the Shroud" desc="While it might be tempting to build deep in the Shroud for the aesthetic, your base takes damage over time in Shroud-covered areas. Build just outside Shroud boundaries to stay safe while maintaining easy access to Shroud content." />
        <TipCard title="Consider Fast Travel Access" desc="Building near an Ancient Spire or a natural fast travel point dramatically improves quality of life. You will be fast-traveling to your base constantly — the less running required after teleporting, the better." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Comfort System — Free Power Buffs</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Comfort is one of the most powerful yet underutilized systems in Enshrouded. A high-comfort base provides substantial passive buffs:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Comfort Level 1–20:</strong> Slight HP regeneration boost.</li>
            <li><strong className="text-[var(--text-primary)]">Comfort Level 21–40:</strong> Moderate HP regen + stamina recovery increase.</li>
            <li><strong className="text-[var(--text-primary)]">Comfort Level 41–60:</strong> Significant HP regen + stamina recovery + minor damage boost.</li>
            <li><strong className="text-[var(--text-primary)]">Comfort Level 61–80:</strong> Strong HP regen + stamina recovery + damage boost + reduced status effect duration.</li>
            <li><strong className="text-[var(--text-primary)]">Comfort Level 80+:</strong> +20% HP regeneration, +15% stamina recovery, +10% damage, and significant status resistance. This is a massive power increase — invest in comfort.</li>
          </ul>
        </div>

        <InfoBox title="How to Maximize Comfort" type="tip">
          Build a dedicated "comfort room" containing: your best bed (highest tier), multiple furniture types (chairs, tables, shelves), lighting sources (lanterns, torches, chandeliers), and decorations (rugs, paintings, trophies). The variety and quality of items both contribute to the comfort score. Comfort applies to your entire base radius, so one well-furnished room buffs everything.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Construction System Essentials</h3>
        <TipCard title="Understand Structural Support" desc="Buildings in Enshrouded use a structural integrity system. Pieces have weight, and supports (walls, pillars, foundations) can only hold so much. If you exceed the support limit, pieces will collapse. Build strong foundations first, then expand upward and outward." />
        <TipCard title="Use Framework Blocks for Support" desc="Framework blocks (unlocked via the Carpenter) are structural pieces that provide exceptional support strength. Use them as the skeleton of large builds. They have high integrity values and can support massive structures when used correctly." />
        <TipCard title="Floors Have Height Limits" desc="There is a maximum vertical build height. Plan your multi-story buildings carefully. The height limit is generous but not infinite — extremely tall towers will hit the cap." />
        <TipCard title="Roofing Matters" desc="Enclosed rooms with proper roofing provide better comfort and protection. Open-air rooms have reduced comfort scores and offer no protection from environmental hazards. Always complete your rooms with proper roofs." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Essential Base Rooms to Build</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Crafting Hub:</strong> Central room containing all your crafting stations — Workbench, Furnace, Cooking Station, etc. Keep them close together to minimize walking between crafts.</li>
            <li><strong className="text-[var(--text-primary)]">Storage Room:</strong> Dedicated room with multiple chests, organized by item type. Label your chests (ores, food, weapons, armor, building materials, etc.).</li>
            <li><strong className="text-[var(--text-primary)]">Comfort Room:</strong> Your highest-comfort space with the best bed, furniture, and decorations. This is where your comfort buff originates.</li>
            <li><strong className="text-[var(--text-primary)]">Bedroom:</strong> Contains your respawn bed. Should be easily accessible from your base entrance — you will respawn here often.</li>
            <li><strong className="text-[var(--text-primary)]">Display Room:</strong> Late-game room for showcasing legendary weapons, trophies, and rare collectibles. Purely aesthetic but satisfying.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Advanced Building Techniques</h3>
        <TipCard title="Snap Alignment for Clean Builds" desc="Use the building snap system to align pieces perfectly. Hold the snap key while placing to align to grid. This creates professional-looking structures and ensures structural integrity is properly calculated." />
        <TipCard title="Material Swapping for Aesthetics" desc="You can replace the material of placed blocks without destroying and rebuilding. This allows you to construct the shape first with cheap materials, then upgrade the appearance with rare materials later." />
        <TipCard title="Defensive Building (PvE)" desc="While Enshrouded is primarily PvE, enemy raids can occur. Build choke points, elevated archer platforms, and sturdy outer walls. A moat (dig down and fill with water) is an effective barrier against ground-based enemies." />
        <TipCard title="Forward Outposts" desc="In addition to your main base, build small forward outposts near difficult content. These should contain: a Flame Altar, a bed, a crafting station, and a chest of emergency supplies. They serve as respawn points and resupply stations." />

        <InfoBox title="Building Pro Tip: Plan Before You Build" type="tip">
          Before placing a single block, stand at your build site and visualize the final structure. Consider: Where will the entrance be? Where are the crafting stations? Is there room to expand? The most impressive bases are planned, not improvised. Use cheap framework blocks to sketch the layout before committing expensive materials.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'crafting-gear',
    title: 'Crafting & Equipment',
    icon: <Wrench className="w-5 h-5" />,
    summary: 'Complete guide to crafting, equipment tiers, tool upgrades, armor sets, inventory management, and the legendary loot system.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Crafting and gear progression are at the heart of Enshrouded's power system. Understanding how to efficiently upgrade your tools, choose the right armor, and manage your inventory will dramatically accelerate your progression.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Tool Upgrade Priority</h3>
        <TipCard title="Upgrade Pickaxe and Axe First" desc="Your pickaxe and axe are used constantly. Every tier upgrade increases gathering speed and unlocks access to higher-tier materials. Prioritize these over combat gear early on — better tools mean faster resource acquisition, which means faster everything else." />
        <TipCard title="Unlock the Hammer and Hoe Early" desc="The Hammer (building repair and deconstruction) and Hoe (terrain modification) are unlocked through the Blacksmith. These transform your base-building capabilities. The Hoe lets you flatten terrain for perfect foundations; the Hammer lets you redesign without losing materials." />
        <TipCard title="Tool Quality Affects Gathering" desc="Higher-quality tools gather resources faster and yield more per node. A steel pickaxe gathers iron significantly faster than a stone pickaxe. The time savings add up enormously over hundreds of gathering sessions." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Equipment Rarity System</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Enshrouded uses a color-coded rarity system. Higher rarity means better base stats and more modifier slots:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-gray-400">Common (White):</strong> Basic stats, no modifiers. Vendor trash or early-game filler.</li>
            <li><strong className="text-green-400">Uncommon (Green):</strong> Slightly improved stats, 1 modifier. Usable in early game.</li>
            <li><strong className="text-blue-400">Rare (Blue):</strong> Good stats, 2 modifiers. Solid mid-game gear.</li>
            <li><strong className="text-purple-400">Epic (Purple):</strong> Excellent stats, 3 modifiers. End-game viable.</li>
            <li><strong className="text-yellow-400">Legendary (Gold):</strong> Best base stats, unique perks, 4 modifiers. The pursuit of legendaries is a core end-game activity.</li>
          </ul>
        </div>

        <InfoBox title="Never Salvage Legendary Items" type="warning">
          Legendary items often have unique perks that cannot be obtained any other way. Even if a legendary is not ideal for your current build, store it in a chest. You might respec into a build that uses it, or a future update might buff it. Legendaries are irreplaceable — treat them as collectibles.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Armor Types &amp; Mix-Matching</h3>
        <InfoBox title="Important: Armor Does NOT Have Set Bonuses" type="info">
          Unlike many RPGs, Enshrouded does <strong>not</strong> grant set bonuses for wearing complete armor sets. This means you can freely mix and match pieces from different sets without any penalty. A common effective strategy is using Blacksmith chest and legs for high HP, then equipping Hunter or Alchemist gloves and helmet for damage stats. Customize your armor loadout purely based on the individual piece stats.
        </InfoBox>
        <TipCard title="Heavy Armor — Max Defense" desc="Heavy armor pieces provide the highest physical defense and poise (resistance to being staggered). Ideal for tank builds and melee fighters who plan to block and trade hits. Heavy pieces typically boost Constitution and Strength." />
        <TipCard title="Medium Armor — Balanced" desc="Medium armor offers a solid balance of defense and mobility. Good for versatile builds that switch between melee and ranged combat. Most beginner-friendly option for new players still learning their preferred playstyle." />
        <TipCard title="Light Armor — Mobility Focus" desc="Light armor has the lowest defense but typically provides bonuses to Dexterity, Intelligence, or stamina recovery. Favored by ranged builds, magic users, and players who rely on dodge-rolling over blocking." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Inventory Management</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Use the Sort Button:</strong> Your inventory has a sort function that organizes items by type. Use it constantly — a sorted inventory is a fast inventory.</li>
            <li><strong className="text-[var(--text-primary)]">Dedicated Chest Organization:</strong> At your base, use separate chests for: ores/ingots, wood/building materials, food/potions, weapons, armor, and miscellaneous. Consistent organization saves hours of searching.</li>
            <li><strong className="text-[var(--text-primary)]">Sell Excess Gear:</strong> Merchants buy unwanted weapons and armor for gold. Gold is used for purchasing rare materials and recipes. Regular vendor runs keep your inventory clean and your wallet full.</li>
            <li><strong className="text-[var(--text-primary)]">Carry Only Essentials:</strong> When exploring, bring only what you need: your combat gear, repair materials, food buffs, healing items, and one spare weapon. Leave crafting materials and excess gear at base.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Legendary Farming Tips</h3>
        <TipCard title="Large Chests Have the Best Loot" desc="Large chests (the ornate, golden ones) have significantly higher chances of containing legendary items. They are typically found at the end of dungeons, on top of Ancient Spires, or in hidden areas. Prioritize finding these chests in every biome." />
        <TipCard title="Chests Reset Every 30 Minutes" desc="Non-legendary chests refresh their contents every 30 minutes of real time. Mark locations of large chests on your mental map and revisit them during long play sessions for repeated loot chances." />
        <TipCard title="Hollow Halls End Bosses Drop Legendaries" desc="Each Hollow Hall dungeon has a final boss that guarantees at least one high-tier item. At higher levels, these bosses have a significant chance to drop legendary gear. Speed-running Hollow Halls is a core end-game farming strategy." />
        <TipCard title="Check Hidden Loot Spots" desc="Developers place hidden chests in clever locations: behind waterfalls, under bridges, on inaccessible-looking ledges, and inside false-wall rooms. If an area looks like it might hide something, investigate thoroughly." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Update 7 Crafting Changes</h3>
        <TipCard title="Lore Weapons Now Craftable by Tier" desc="In Update 7, Lore weapons (unique named weapons with special perks) can be crafted at every tier once unlocked. Additional lore weapons were added. With rebalanced stats, they are now genuinely competitive end-game options rather than collector's items. If you find a lore weapon you love, you can craft upgraded versions as you progress." />
        <TipCard title="Durability Significantly Increased" desc="All weapons received a durability buff in Update 7, and durability now scales correctly with item level and quality. Higher-level weapons last noticeably longer than before. Less time at the repair bench, more time adventuring." />
        <TipCard title="Chest Loot Completely Reworked" desc="Silver and gold chests now have significantly higher chances of dropping epic and legendary items. They also drop +1 additional item. If you stopped checking chests because the loot felt underwhelming, start again — the difference is dramatic." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Gem Socketing System</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Certain weapons have gem sockets. Socketing gems provides permanent stat bonuses to that weapon. Key details:</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Gems come in multiple tiers</strong> with increasing stat bonuses.</li>
            <li><strong className="text-[var(--text-primary)]">Fishing is a reliable gem source</strong> — one of the few non-dungeon ways to obtain gems.</li>
            <li><strong className="text-[var(--text-primary)]">The Gem of Currents</strong> (found in Veilwater Basin) is a special end-game gem that synergizes with Shock bows and the Wet Dog passive for devastating damage.</li>
            <li><strong className="text-[var(--text-primary)]">Socketed gems can be removed and replaced</strong> — experiment freely with different gem combinations.</li>
          </ul>
        </div>

        <InfoBox title="Crafting Pro Tip: Upgrade Your Flame for Better Recipes" type="tip">
          Many crafting recipes are locked behind Flame upgrades. If you cannot craft an item despite having the materials, check your Flame level. Upgrading the Flame is often the gate to the next tier of gear. Prioritize Flame progression alongside gear upgrades — they work hand in hand.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'character-builds',
    title: 'Character Builds & Skills',
    icon: <User className="w-5 h-5" />,
    summary: 'Complete build guide — attribute allocation, skill trees, recommended builds for every playstyle, respeccing strategies, and progression planning.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded's build system offers tremendous flexibility. With free and cheap respecs, you can experiment freely. This guide covers optimal builds for every playstyle, from tanky melee to glass cannon magic.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Attribute Overview</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-red-400">Strength:</strong> Increases melee weapon damage (swords, axes, hammers). Required for heavy armor. Core stat for melee builds.</li>
            <li><strong className="text-green-400">Dexterity:</strong> Increases ranged weapon damage (bows, thrown weapons) and critical hit chance. Core stat for archer builds.</li>
            <li><strong className="text-blue-400">Intelligence:</strong> Increases magic damage (staves, wands) and mana pool. Also improves crafting quality. Core stat for mage builds.</li>
            <li><strong className="text-orange-400">Constitution:</strong> Increases maximum HP and physical defense. Every build benefits from some Constitution — dead characters deal no damage.</li>
            <li><strong className="text-yellow-400">Endurance:</strong> Increases maximum stamina and stamina recovery rate. Essential for melee builds that block and dodge frequently.</li>
            <li><strong className="text-purple-400">Spirit:</strong> Improves healing effectiveness, buff potency, and resistance to magical damage. Core for support builds and helpful for all.</li>
          </ul>
        </div>

        <InfoBox title="Intelligence Is NOT Useless" type="info">
          A common misconception is that Intelligence is only for mages. Intelligence also improves your crafting quality (higher stats on crafted gear) and unlocks certain crafting recipes. Even melee builds benefit from 10–15 points in Intelligence for the crafting bonuses.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recommended Build: Sword &amp; Board Tank</h3>
        <TipCard title="Stats: Heavy Constitution + Endurance" desc="40% Constitution, 30% Endurance, 20% Strength, 10% Spirit. This build maximizes survivability. You block most attacks, have a massive HP pool, and recover stamina quickly. Weapons: One-handed sword + shield. Armor: Heavy set." />
        <TipCard title="Skill Priorities: Defense &amp; Blocking" desc="Prioritize skills that improve block efficiency, reduce block stamina cost, increase HP regeneration, and boost physical defense. The 'Shield Bash' skill adds offense to your defense. Tank builds are the most forgiving for new players." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recommended Build: Berserker (Two-Handed)</h3>
        <TipCard title="Stats: Heavy Strength + Endurance" desc="50% Strength, 25% Endurance, 15% Constitution, 10% Dexterity. Maximum damage per hit. Great weapons and greataxes deal devastating damage but swing slowly. You rely on positioning and timing rather than blocking. Armor: Medium or Heavy." />
        <TipCard title="Skill Priorities: Damage &amp; Stamina" desc="Focus on heavy attack damage, charged attack speed, stamina cost reduction, and critical damage. The 'Battle Rage' skill line turns you into a sustained damage machine. Not recommended for beginners — requires good dodge timing." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recommended Build: Ranger (Bow Focus)</h3>
        <TipCard title="Stats: Heavy Dexterity + Constitution" desc="50% Dexterity, 25% Constitution, 15% Intelligence, 10% Endurance. Maximum bow damage and critical chance. You engage at range and avoid melee entirely. Armor: Light or Medium for mobility." />
        <TipCard title="Skill Priorities: Ranged Damage &amp; Critical Hits" desc="Bow damage, headshot damage, critical chance, and critical damage. The 'Trick Shot' skill allows arrows to ricochet between targets. Carry multiple arrow types (fire, ice, standard) for elemental matching." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recommended Build: Battle Mage</h3>
        <TipCard title="Stats: Intelligence + Constitution" desc="45% Intelligence, 25% Constitution, 15% Spirit, 15% Endurance. Wield a staff for ranged elemental damage and a one-handed weapon for melee fallback. Extremely versatile — match elements to enemies for maximum effectiveness." />
        <TipCard title="Skill Priorities: Magic Damage &amp; Mana" desc="Elemental damage boosts, mana pool, mana regeneration, and spell cost reduction. The 'Elemental Mastery' skill significantly boosts all elemental damage. Carry mana potions constantly — running out of mana turns you into a weak melee fighter." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Skill Tree Investment Priority</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">1. Survivability First:</strong> Regardless of build, invest early points in HP, stamina, and basic defense. A dead DPS deals no damage.</li>
            <li><strong className="text-[var(--text-primary)]">2. Damage Scaling:</strong> Once survivable, invest in your primary damage stat. Focus on percentage-based increases rather than flat bonuses — percentages scale better into late game.</li>
            <li><strong className="text-[var(--text-primary)]">3. Quality of Life:</strong> Movement speed, carry capacity, and gathering speed skills reduce tedium enormously. Invest in these for a smoother experience.</li>
            <li><strong className="text-[var(--text-primary)]">4. Loot Bonuses:</strong> Skills that increase drop rates, gold find, and rare item chance pay for themselves over time. Prioritize these once your core build is functional.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Optimal Respec Checkpoints</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Level 15 — Optional First Respec:</strong> Drop early-game-only survival skills if you have outgrown them and committed to a build archetype. Most players skip this respec — the skills are universally useful.</li>
            <li><strong className="text-[var(--text-primary)]">Level 30 — THE Major Respec:</strong> This is the most important respec in the game. Switch from early-game skills (Brute, basic resistances) to mid-game build cores (Multi-Shot, Blood Rage, Arsonist, Vigorous Deflection). Plan your build around your chosen archetype.</li>
            <li><strong className="text-[var(--text-primary)]">Level 40–45 — Endgame Transition:</strong> Drop level-band filler skills and pick up endgame capstones (Whirlwind Crescendo, Eternal Flame, Vigorous Deflection II, Multi-Shot Trigger). Final respec before tackling Veilwater Basin and the hardest Hollow Halls.</li>
            <li><strong className="text-[var(--text-primary)]">After Major Patches:</strong> When meta-defining skill nerfs or buffs land, respec to follow the new top tier. Update 8 shifted Battlemage and Berserker metas — always re-validate your picks after patches.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Universal Core Skills (Never Respec These)</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">These 5–6 skills are universally valuable for every build. They cost ~25–30 skill points total. When respeccing, never remove these:</p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Stamina Cap:</strong> Every archetype benefits. Pick it at Level 1, never drop it.</li>
            <li><strong className="text-[var(--text-primary)]">Double Jump + Updraft + Glider Stamina:</strong> The mobility triad. The top-voted advice in the entire Enshrouded community: 'Anything that makes travel easier... go for it.'</li>
            <li><strong className="text-[var(--text-primary)]">Battle Heal:</strong> Even pure DPS builds need self-sustain. Mid-fight HP top-up keeps your DPS uptime high.</li>
            <li><strong className="text-[var(--text-primary)]">Desert Stomach:</strong> Extra food slot = stackable buffs. Provides ~20% stat boost when consuming optimal food combinations.</li>
          </ul>
        </div>

        <InfoBox title="Respec Is Cheap — Experiment Freely" type="tip">
          Respeccing costs only 1 Rune per skill point refunded. Runes are common drops from bosses and chests. This means you can completely change your build for the cost of a few dungeon runs. Do not be afraid to try new builds — the game is designed around build experimentation. Respec before major boss fights to optimize for the encounter.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'shroud-survival',
    title: 'Shroud & Survival Mechanics',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Deep dive into the Shroud system — survival timers, death mechanics, Flame upgrades, Campfire placement, and strategies for surviving the deadliest zones.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Shroud is Enshrouded's signature mechanic — a deadly fog that covers much of the world. Understanding how it works, how to survive longer within it, and how to mitigate its dangers is essential for progression.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Understanding the Shroud Timer</h3>
        <TipCard title="The Timer Is Your Lifeline" desc="When you enter the Shroud, a visible timer begins counting down. When it reaches zero, you take rapid, unavoidable damage until death. Early game timer: ~5 minutes. Fully upgraded Flame: 30+ minutes. The timer pauses in safe zones (Flame Altars, Campfires, Ancient Spires)." />
        <TipCard title="Flame Level Directly Extends Timer" desc="Each Flame upgrade extends your Shroud survival time. This is the single most impactful way to increase Shroud exploration capability. Prioritize Flame upgrades above almost everything else — they unlock the entire map." />
        <TipCard title="Blue Shroud vs. Red Shroud" desc="Blue Shroud is the standard deadly fog — manageable with a reasonable timer. Red Shroud (found in the deepest areas) drains your timer significantly faster and contains the most dangerous enemies. Red Shroud areas are true end-game content." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Death and Respawn Mechanics (Updated for Update 7)</h3>
        <div className="game-panel corner-decor p-4 border border-orange-400/20">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-orange-400">Dying in the Shroud:</strong> If you die in the Shroud without a Campfire placed, you respawn at your base and must run back to recover your dropped inventory. Your backpack remains where you died, marked on the map.</li>
            <li><strong className="text-orange-400">Recovering Your Backpack:</strong> Your dropped inventory is marked on the map with a grave icon. You have unlimited time to retrieve it, but if you die again before recovering it, the previous backpack disappears permanently.</li>
            <li><strong className="text-orange-400">Campfire Respawn Points:</strong> Placing a Campfire in the Shroud creates a respawn point. If you die, you respawn at the nearest Campfire. Always place a Campfire before challenging content in the Shroud.</li>
            <li><strong className="text-orange-400">Flame Altar Safety:</strong> Standing near a Flame Altar pauses your Shroud timer and provides a safe zone. Use Flame Altars as resting points during long Shroud expeditions.</li>
            <li><strong className="text-orange-400">Save Point Respawning (Update 7):</strong> You now respawn at either your last-visited base OR your last-visited save point (Flame Altar, Campfire, or dungeon checkpoint). This lets parties take breaks during Hollow Hall runs and resume exactly where they left off — a massive quality-of-life improvement.</li>
          </ul>
        </div>

        <InfoBox title="Critical Rule: Always Place a Campfire" type="warning">
          The #1 cause of lost progress in Enshrouded is dying in the Shroud without a Campfire placed. The run back to your corpse can take 10+ minutes, and if you die en route, your items are gone forever. Before ANY risky activity in the Shroud — boss fights, deep exploration, difficult dungeons — place a Campfire. The 5 seconds it takes to place one can save hours of progress.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Flame Upgrade Guide</h3>
        <TipCard title="What Flame Upgrades Unlock" desc="Each Flame upgrade tier extends Shroud time, increases base building radius, unlocks new crafting recipes, and often grants direct stat bonuses. Flame upgrades require Spark (from Shroud Roots) and other materials. This is the core progression system of the entire game." />
        <TipCard title="How to Get Spark" desc="Spark is obtained primarily by destroying Shroud Roots (the large, pulsating growths in the Shroud). There are 39 Shroud Roots across the map — destroying all of them is a major end-game goal and provides massive Flame progress." />
        <TipCard title="Shroud Cores for Major Upgrades" desc="Major Flame upgrades require Shroud Cores, obtained from bosses and high-tier chests. These are the gating material for late-game Flame levels. Boss farming becomes necessary for maximum Flame upgrades." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Root Hunting</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Shroud Roots are your primary source of Spark and free skill points. A systematic hunting approach:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Plan a Route:</strong> After revealing a biome via Ancient Spire, mark all visible Shroud Roots on your map. Plan a loop that hits multiple roots in one expedition.</li>
            <li><strong className="text-[var(--text-primary)]">Build Forward Altars:</strong> Place Flame Altars near clusters of Shroud Roots. This creates safe zones to rest and reset your timer between roots.</li>
            <li><strong className="text-[var(--text-primary)]">Co-op Root Hunting:</strong> In co-op, one player can distract enemies while others attack the root. Shroud Roots are destroyed faster with multiple players attacking.</li>
            <li><strong className="text-[var(--text-primary)]">39 Roots = 39 Skill Points:</strong> Every root destroyed grants one skill point. This is 39 free levels of character power — equivalent to leveling up many times. Never skip Shroud Roots.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Surviving Deep Shroud Expeditions</h3>
        <TipCard title="Prepare Extensively" desc="Deep Shroud trips require: full food buffs (3), repaired gear, healing items, a spare weapon, and materials for emergency Campfires. Do not cut corners on preparation — the Shroud punishes carelessness." />
        <TipCard title="Know Your Escape Routes" desc="Before venturing deep, identify your escape route. Where is the nearest Flame Altar? Where is the nearest Ancient Spire for fast travel? Having an exit strategy prevents panic when things go wrong." />
        <TipCard title="Travel Light in Deep Shroud" desc="When exploring dangerous Shroud areas, carry only essentials. If you die, you want to minimize losses. Store valuable crafting materials and excess gear at your base before deep expeditions." />

        <InfoBox title="Campfire Placing Strategy" type="tip">
          Place Campfires at strategic locations throughout the Shroud: before boss arenas, at dungeon entrances, at resource-rich farming spots, and at the edge of Red Shroud zones. Think of Campfires as save points in a hardcore game — each one represents security. The more Campfires you have placed, the safer and more efficient your Shroud exploration becomes.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'farming-efficiency',
    title: 'Farming & Efficiency',
    icon: <TrendingUp className="w-5 h-5" />,
    summary: 'Optimized farming routes for materials, XP, Runes, and legendaries. Boss farm loops, dungeon speed runs, and time-efficient gathering strategies.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Efficiency separates casual players from power players. These farming routes and strategies — compiled from the most optimized Enshrouded guides — will maximize your materials, XP, and legendary drops per hour.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Boss Farm Loop (Runes &amp; Boss Materials)</h3>
        <TipCard title="Kindlewastes Thunderbrute → Wispwyvern → Critter Queen" desc="This is the most efficient boss farm loop in the game. Start at Kindlewastes Thunderbrute (5-minute fight), glide to Wispwyvern (10 minutes), then fast travel to Critter Queen (5 minutes). Each run yields ~15–20 Runes plus boss-specific crafting materials. Repeat every 20 minutes for optimal Rune income." />
        <TipCard title="Rune Income = Build Flexibility" desc="Runes are used for respeccing and purchasing rare items from merchants. A healthy Rune stockpile means you can swap builds for any encounter without worry. Boss farming is the fastest Rune generation method." />
        <TipCard title="Boss Respawn Timers" desc="Bosses respawn after a set real-time duration (typically 15–20 minutes). Use this timer to plan your loop. If a boss has not respawned yet, move to the next one and return later." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Hollow Halls Speed Runs (Legendary Farming)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Skip Trash Mobs:</strong> Once you outlevel a dungeon by 5+ levels, you can sprint past most enemies. Only fight what you must. The boss is the target.</li>
            <li><strong className="text-[var(--text-primary)]">Kindlewastes Hollow Halls (~8 min at level 35+):</strong> One of the fastest high-tier dungeons. The end boss has a strong legendary drop rate and drops Shroud Cores.</li>
            <li><strong className="text-[var(--text-primary)]">Revelwood Hollow Halls (~10 min at level 25+):</strong> Excellent for mid-tier legendary farming. Slightly slower but very consistent drops.</li>
            <li><strong className="text-[var(--text-primary)]">Co-op Speed Runs:</strong> With a coordinated group, dungeons clear 3x faster. One player pulls mobs, others rush to the boss. Communicate via voice for maximum efficiency.</li>
          </ul>
        </div>

        <InfoBox title="Dungeon Reset Method" type="tip">
          Dungeons reset when all players in the session have been outside the dungeon for several minutes. For solo players, fast traveling to your base and waiting ~5 minutes resets the dungeon. For co-op, one player staying outside while others clear can maintain a reset rhythm. Learn the reset timing for your target dungeon to minimize downtime.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Material Gathering Routes</h3>
        <TipCard title="Multi-Resource Loop Design" desc="The most efficient gathering routes hit multiple resource types in one trip. Example: a route that passes through a forest (wood), an iron deposit (ore), a berry patch (food), and an enemy camp (loot/gold) maximizes yield per minute vs. separate trips for each resource." />
        <TipCard title="Resource Node Respawn Timers" desc="Resource nodes (trees, ore veins, plants) respawn after a period of real-time. Learn the respawn timers for your most-needed resources and incorporate them into your route timing. If iron takes 15 minutes to respawn, plan your loop to return after that." />
        <TipCard title="Use Glider for Resource Routes" desc="Design your gathering routes with verticality in mind. Start from a high point, glide to resource nodes below, then use the Grappling Hook to climb back up. This is significantly faster than running on foot." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">XP Farming Strategies</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Enemy Camp Clearing:</strong> Enemy camps respawn when you travel far enough away. Fast travel between two camps on opposite sides of a biome for infinite XP farming.</li>
            <li><strong className="text-[var(--text-primary)]">Shroud Root Destruction:</strong> Each Shroud Root destroyed grants XP in addition to the skill point. A full Shroud Root clearing run provides a massive XP injection.</li>
            <li><strong className="text-[var(--text-primary)]">Boss Kills:</strong> Bosses grant substantial XP on each kill. The boss farm loop mentioned above is both a Rune farm and an XP farm.</li>
            <li><strong className="text-[var(--text-primary)]">Crafting XP:</strong> Crafting items grants small amounts of XP. Mass-crafting arrows, bandages, or building materials provides passive XP while preparing for other activities.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Chest Farming for Legendaries</h3>
        <TipCard title="Large Chests Have Higher Legendary Rates" desc="Focus your farming on large (golden) chests. These have the highest legendary drop rates in the game. Mark their locations and incorporate them into your farming routes." />
        <TipCard title="Chest Reset Timer: 30 Minutes" desc="Large chests refresh their contents every 30 minutes of real time. During a long play session, revisit chest locations after 30 minutes for additional rolls at legendaries." />
        <TipCard title="Hidden Chests Are Worth Finding" desc="The best chests are often hidden. Check behind waterfalls, on rooftops, inside false-wall rooms, and at the end of parkour sequences. These hidden chests have above-average drop rates to reward exploration." />

        <InfoBox title="Efficiency Mindset" type="tip">
          The most efficient Enshrouded players always combine objectives. A trip to farm iron becomes a trip that also clears enemy camps (XP/loot), picks up berries (food), and checks large chests (legendaries). Every expedition should have multiple goals. This mindset transforms the game from a grind into an optimization puzzle.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'multiplayer',
    title: 'Co-op & Multiplayer',
    icon: <Users className="w-5 h-5" />,
    summary: 'Complete multiplayer guide — co-op mechanics, shared resources, role specialization, communication strategies, and how co-op changes the game.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded is designed from the ground up for cooperative play. While fully playable solo, co-op transforms the experience — making bosses easier, exploration safer, and base building more collaborative. This guide covers everything you need to know about multiplayer.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">How Co-op Works</h3>
        <TipCard title="Session-Based Multiplayer (Not Dedicated Servers)”" desc="Enshrouded uses a session-based system. The host's world is the shared world. Friends join the host's session. Progress (builds, discoveries, Flame upgrades) is saved to the host's world. Joining players keep their character levels, skills, and inventory." />
        <TipCard title="Player Count: Up to 16" desc="Enshrouded supports up to 16 players in a single session. However, 2–4 players is the sweet spot — large enough to tackle any content, small enough to coordinate easily. Beyond 8 players, chaos tends to dominate." />
        <TipCard title="Difficulty Scales with Player Count" desc="Enemy HP increases with each additional player. However, the scaling is not perfectly proportional — having more players generally makes combat easier due to revive mechanics, aggro splitting, and combined damage output." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shared Resources &amp; Progression</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Flame of the Flameborn Is Shared:</strong> All players in a session share the same Flame level and base building radius. When the host upgrades the Flame, everyone benefits.</li>
            <li><strong className="text-[var(--text-primary)]">Base Building Is Collaborative:</strong> All players can build, modify, and place items in the shared base. Coordinate who builds what to avoid conflicts. Many hands make light work — large bases are built in a fraction of the time.</li>
            <li><strong className="text-[var(--text-primary)]">Loot Is Individual:</strong> Each player sees their own loot from chests and enemies. There is no loot competition — everyone gets their own drops. This eliminates loot drama.</li>
            <li><strong className="text-[var(--text-primary)]">Discovery Is Shared:</strong> Map revelation, Ancient Spire activation, and fast travel unlocks are shared. When one player discovers something, all players benefit.</li>
          </ul>
        </div>

        <InfoBox title="Communication Is Essential" type="tip">
          Voice chat transforms co-op Enshrouded from a fun experience into an exceptional one. Call out enemy positions, coordinate boss strategies, share resource discoveries, and plan building projects. Even simple callouts like "Shroud Root on my mark" or "Boss charging" dramatically improve team effectiveness. If voice chat is not an option, use the in-game ping system.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Role Specialization</h3>
        <TipCard title="Tank Role" desc="Build: Heavy Constitution + Endurance, sword and shield, heavy armor. Responsibility: Draw enemy aggro, block attacks, protect squishy teammates. The tank stands in front and controls the battlefield." />
        <TipCard title="DPS Role (Melee)" desc="Build: Heavy Strength, two-handed weapons or dual-wield. Responsibility: Deal maximum damage to enemies the tank is holding aggro on. Stay behind the enemy for backstab damage. Avoid taking aggro from the tank." />
        <TipCard title="DPS Role (Ranged)" desc="Build: Heavy Dexterity, bow focus, light/medium armor. Responsibility: Deal damage from safety, pick off ranged enemies, headshot priority targets. The ranged DPS handles enemies that the tank cannot easily reach." />
        <TipCard title="Support/Mage Role" desc="Build: Intelligence + Spirit, staves and healing abilities. Responsibility: Provide ranged elemental damage, healing allies, and buffing the party. The support keeps everyone alive and amplifies the team's damage." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Co-op Combat Strategies</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Flanking for Backstabs:</strong> While the tank holds the boss's attention, other players position behind for backstab damage. This multiplies the team's overall DPS by 2x or more.</li>
            <li><strong className="text-[var(--text-primary)]">Revive Priority:</strong> When a player goes down, the closest player should attempt revival immediately. The tank should maintain aggro during revives. Do NOT all rush to revive — someone needs to keep the enemy busy.</li>
            <li><strong className="text-[var(--text-primary)]">Aggro Management:</strong> DPS players should monitor their threat level. If you pull aggro from the tank, stop attacking briefly or use threat-reduction abilities. A scattered enemy is much harder to control.</li>
            <li><strong className="text-[var(--text-primary)]">Focus Fire:</strong> All players should target the same enemy. Splitting damage across multiple enemies is inefficient. Call targets and eliminate them one at a time.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Multiplayer Base Building</h3>
        <TipCard title="Divide and Conquer" desc="Assign building responsibilities: one player handles the crafting hub, another builds storage, a third works on comfort and decoration. Parallel construction completes the base in a fraction of the time." />
        <TipCard title="Shared Storage System" desc="Establish a clear organizational system for shared chests. Label chests by content type and agree on where things go. A well-organized shared base is a joy to use; a chaotic one wastes everyone's time." />

        <InfoBox title="Co-op Makes Everything Easier" type="tip">
          While enemy HP scales with player count, the presence of teammates more than compensates. Revives prevent deaths, shared discovery speeds up exploration, collaborative building creates better bases, and having specialists means everyone is better at their role than a solo player trying to do everything. If you are struggling with solo content, invite a friend — the difficulty drops dramatically.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'secrets-easter-eggs',
    title: 'Secrets & Hidden Mechanics',
    icon: <Eye className="w-5 h-5" />,
    summary: 'Hidden areas, secret items, developer references, hidden game mechanics, and things the game does not explicitly tell you.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded hides many secrets for curious players. From hidden areas with unique loot to undocumented mechanics that give you an edge, this section covers everything the game does not explicitly tell you.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Hidden Areas Worth Finding</h3>
        <TipCard title="The Secret Garden (Springlands)" desc="Behind a breakable wall in the southeastern Springlands. Contains a chest with early rare gear and a unique decorative flower that never wilts. Look for a wall section with a slightly different texture — it will break after a few hits." />
        <TipCard title="Developer Shrine (Howling Peak)" desc="At the very top of Howling Peak, hidden behind the Fell Dragon arena. A small shrine containing developer messages and a unique cosmetic item that cannot be obtained anywhere else. Requires the Glider to reach." />
        <TipCard title="Sunken Shipwreck (Veilwater Basin)" desc="Underwater in Veilwater Basin, east of the main island. Contains gold ore, a unique fishing rod, and a chest with mid-tier gear. Requires swim fins (unlocked later) for efficient exploration." />
        <TipCard title="The Hidden Forge (Kindlewastes Sun Temple)" desc="Behind a false wall in the Kindlewastes Sun Temple. Contains a legendary-tier crafting recipe not found in any other location. The false wall is in the second chamber — look for a wall with a faint crack pattern." />
        <TipCard title="Cave Behind the Waterfall" desc="Multiple waterfalls across Embervale hide cave entrances behind their curtains of water. These caves typically contain chests, rare ore deposits, and sometimes unique enemies. If you see a waterfall, check behind it." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Useful Hidden Mechanics</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Roll Canceling:</strong> You can cancel the end-recovery animation of certain attacks by rolling immediately after the damage number appears. This dramatically increases attack speed and mobility. Practice with your weapon — not all attacks can be canceled, but those that can become much more powerful.</li>
            <li><strong className="text-[var(--text-primary)]">Wall Jumping:</strong> With precise timing, you can climb certain walls without the Grappling Hook by jumping repeatedly against the wall at specific angles. This is situational but can save you if your Grappling Hook breaks or you are in a glider-only area.</li>
            <li><strong className="text-[var(--text-primary)]">Enemy Respawn Manipulation:</strong> Enemies respawn when you travel approximately 2 biomes away from their location. Use fast travel to reset enemy camps for farming. This is the core of efficient material and XP farming.</li>
            <li><strong className="text-[var(--text-primary)]">Chest Refresh Timer:</strong> Non-legendary chests refresh every 30 minutes of real time. Mark locations of large chests on your map and revisit them during long play sessions for repeated chances at good drops.</li>
            <li><strong className="text-[var(--text-primary)]">Food Buff Stacking:</strong> The game does not explicitly explain that certain food buffs stack in unexpected ways. Experiment with different food combinations — some provide synergistic effects greater than the sum of their parts.</li>
            <li><strong className="text-[var(--text-primary)]">NPC Crafting Bonuses:</strong> Certain NPCs provide hidden crafting bonuses when their stations are placed near crafting stations. The Blacksmith near a Forge improves metal crafting quality. Experiment with NPC placement in your base.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Developer Easter Eggs &amp; References</h3>
        <TipCard title="The Hidden Developer Message" desc="Scattered throughout the world are small stone tablets with messages from the development team. These are purely cosmetic but provide fun insights into the game's development. The most famous one is located on a tiny island in the far northwest corner of the map." />
        <TipCard title="Gaming References" desc="Enshrouded contains subtle references to other games in the survival/crafting genre. Keep an eye out for unusual item descriptions, environmental details, and NPC dialogue — the developers included numerous nods to the games that inspired them." />

        <InfoBox title="Explore Everything" type="tip">
          The Enshrouded development team has stated in interviews that they designed the world to reward thorough exploration. If an area looks like it might contain something — a suspicious wall, an odd ledge, a hidden path — it probably does. The players who find the most secrets are the ones who investigate every anomaly. No corner of Embervale was placed without purpose.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Undocumented Quality-of-Life Tricks</h3>
        <TipCard title="Quick Stack to Nearby Chests" desc="When interacting with a chest, you can quick-stack items from your inventory that already exist in that chest. This massively speeds up inventory management. No more dragging items one by one." />
        <TipCard title="Sort Button in Inventory" desc="Your personal inventory has a sort button that organizes items by category. Use it constantly — a sorted inventory lets you find what you need in seconds rather than minutes." />
        <TipCard title="Building Material Swap" desc="After placing building blocks, you can change their material type without destroying and rebuilding. This lets you prototype with cheap materials, then upgrade the appearance with rare materials once the design is finalized." />
        <TipCard title="Crouch to Reduce Enemy Detection" desc="Crouching significantly reduces the range at which enemies detect you. Use this to scout enemy camps, set up backstabs, or sneak past dangerous areas. Combined with the Glider, you can bypass most combat entirely if desired." />

        <InfoBox title="The Game Rewards Curiosity" type="tip">
          Enshrouded is built on a simple philosophy: curiosity is always rewarded. Climb that seemingly unreachable peak — there is probably a chest. Check behind that waterfall — there is probably a cave. Hit that suspicious wall — it might be breakable. Talk to that NPC again after progressing — new dialogue might unlock. The difference between a good player and a great player is simply the willingness to investigate.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'cooking-food',
    title: 'Cooking & Food Buffs',
    icon: <ChefHat className="w-5 h-5" />,
    summary: 'Complete food system guide — 8 ingredient categories, buff effects, cooking stations, recipes, and optimal food combinations for every build.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Unlike most survival games, food in Enshrouded is not about preventing starvation — you do not get hungry. Instead, food provides powerful buffs that directly impact combat performance. Understanding the food system is essential for maximizing your character's power.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Food Basics</h3>
        <TipCard title="You Can Have 3 Food Buffs Active (4 with Skill)" desc="You can eat up to 3 meals simultaneously, shown in your character menu. The 'Dessert Stomach' skill in the Survival tree unlocks a 4th food slot — a high-priority skill for all builds. Always have your maximum number of buffs active before combat." />
        <TipCard title="Food Poisoning Warning" desc="Certain foods will inflict Food Poisoning: all Raw Meats, Azure Russula mushroom, Uncooked Fae Deer Milk, and Yellow Shroud Mushroom. The debuff is -75 Stamina and -4 Stamina Regen for 45 seconds. Always cook your food." />
        <TipCard title="Each Food Category Buffs Different Stats" desc="The food system is organized by ingredient type, and each category provides distinct bonuses. Matching your food to your build is a core optimization strategy. A warrior eating mage food is wasting potential." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">8 Food Categories &amp; Their Buffs</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-red-400">🥩 Meat:</strong> Boosts Constitution (HP), physical damage, and Frost resistance. Buffs last ~50 minutes — the longest duration. Best for melee fighters and tanks. Recommended: Chicken Soup, Meat Wrap, Beef Stew.</li>
            <li><strong className="text-blue-400">🐟 Fish:</strong> Boosts Stamina and underwater breathing duration. Added in Update 7. Best for exploration and stamina-dependent builds. Recommended: Fish Soup, Sushi, Grilled Fish with Coconut Rice.</li>
            <li><strong className="text-green-400">🍎 Fruit:</strong> Provides health regeneration — essential for combat survival. Some heal slowly over a long time, others provide a quick burst. Recommended: Fruit Salad, Strawberry Milkshake, Plantain Curry.</li>
            <li><strong className="text-emerald-400">🥬 Vegetables:</strong> Boosts ranged damage and dagger damage. Perfect for archers and assassin-style builds. Grow them on your farm for sustainability. Recommended: Pumpkin Soup, Vegetable Puree, Taro Root Curry.</li>
            <li><strong className="text-cyan-400">🌿 Herbs:</strong> Regenerates mana. Many can be eaten raw without processing. Essential for all magic users. Recommended: Gentian, Seaweed, Grilled Seaweed Buds.</li>
            <li><strong className="text-purple-400">🍄 Mushrooms:</strong> Boosts magic damage and maximum mana. Best suited for mages. Grill or use in recipes for maximum effect. Recommended: Roasted Shiitake Mushroom, Seaweed Salad, Yellow Glow Soup.</li>
            <li><strong className="text-yellow-400">🌾 Grain:</strong> Boosts melee damage (Strength). Ideal for sword-and-board warriors and berserkers. Grains like rice and corn can be farmed. Recommended: Sandwich, Fried Rice, Creamy Mushroom Spaetzle.</li>
            <li><strong className="text-pink-400">🍰 Sweets:</strong> Provide short-duration bursts of stamina, mana, or health regeneration. High energy density but short-lived. Best for active combat situations. Recommended: Strawberry Cake, Purple Berry Cake, Honey-baked Banana.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Cooking Stations</h3>
        <TipCard title="Campfire — Basic Cooking" desc="Available from the start. Can grill raw meat and simple ingredients. Limited recipes but sufficient for early-game survival. Every forward base should have one." />
        <TipCard title="Fireplace — Intermediate Recipes" desc="Crafted at the Workbench. Unlocks more complex recipes requiring multiple ingredients. Many early-game buff foods are made here." />
        <TipCard title="Oven — Advanced Baking" desc="Unlocked through the Farmer NPC. Required for bread, cakes, and the most powerful grain-based dishes. Essential for melee builds seeking Strength buffs." />
        <TipCard title="Seafood Oven — Fish Specialization" desc="Also from the Farmer. Dedicated to fish recipes. If your build relies on stamina buffs, this station is mandatory." />
        <TipCard title="Almanac Recipes — End-Game Cooking" desc="Complete the Farmer's 'Almanac of Plants and Seedlings' quest to unlock the most powerful recipes in the game. These provide the highest-tier buffs and longest durations." />

        <InfoBox title="Drinks Are the 9th Category" type="tip">
          Drinks (tea, coffee, smoothies) provide universal buffs focused on stamina regeneration and endurance. They benefit every player regardless of build. Rooibos Tea, Coffee, and Coconana Smoothie are excellent all-rounders. Always carry a drink alongside your specialized food buffs.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Optimal Food Combinations by Build</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Melee Warrior (Sword &amp; Board):</strong> Meat (Constitution) + Grain (Strength) + Fruit (Health Regen). Drink: Coffee for stamina.</li>
            <li><strong className="text-[var(--text-primary)]">Berserker (Two-Handed):</strong> Grain (Strength) + Meat (Constitution) + Sweets (Stamina burst). Drink: Rooibos Tea.</li>
            <li><strong className="text-[var(--text-primary)]">Ranger (Bow):</strong> Vegetables (Ranged damage) + Meat (Constitution) + Fruit (Health Regen). Drink: Coconana Smoothie.</li>
            <li><strong className="text-[var(--text-primary)]">Battle Mage:</strong> Mushrooms (Magic damage) + Herbs (Mana regen) + Meat (Constitution). Drink: Any mana-regenerating tea.</li>
            <li><strong className="text-[var(--text-primary)]">Assassin (Daggers):</strong> Vegetables (Dagger damage) + Fruit (Health Regen) + Fish (Stamina). Drink: Coffee.</li>
          </ul>
        </div>

        <InfoBox title="Cooking Pro Tip: Farm Your Own Ingredients" type="tip">
          Once you rescue the Farmer and unlock the Seedbed, you can grow crops at your base. This eliminates the need to constantly forage for food ingredients. A self-sustaining farm provides an unlimited supply of vegetables, grains, herbs, and mushrooms. The initial setup time pays for itself hundreds of times over.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'alchemy-potions',
    title: 'Alchemy & Potions',
    icon: <Beaker className="w-5 h-5" />,
    summary: 'Complete alchemy guide — healing potions, Shroud flasks, buff potions, mana management, explosive powder, and the Alchemy Station.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Alchemist NPC unlocks the Alchemy Station, which provides some of the most powerful consumables in the game. From life-saving healing potions to Shroud survival flasks, alchemy is an essential system for all players.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Alchemy Station Essentials</h3>
        <TipCard title="Rescue the Alchemist for Potions" desc="The Alchemist is rescued from the Ancient Vault - Alchemist. Once placed at your base with the Summoning Staff, she unlocks the Alchemy Station. This station crafts: Healing Potions, Shroud Survival Flasks, Staff Charges, and Explosive Powder." />
        <TipCard title="Always Pick Up Mushrooms" desc="Mushrooms are the primary ingredient for healing potions. Every mushroom you see while exploring should be picked up immediately. A shortage of mushrooms means no healing potions, which means unnecessary deaths." />
        <TipCard title="Mushrooms Also Regenerate Mana" desc="Many herbs and mushrooms can be eaten raw for mana regeneration. As a mage, constantly forage for these while exploring. Gentian, Seaweed, and Azure Russula are particularly valuable." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Healing &amp; Combat Potions</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Healing Potions:</strong> Instant burst healing. Keep your action bar stocked with these at all times. They are your primary emergency heal in combat. Crafted at the Alchemy Station.</li>
            <li><strong className="text-[var(--text-primary)]">Health Regeneration Potions:</strong> Slower healing over time but more total HP restored. Use before combat or during safe moments, not as emergency heals.</li>
            <li><strong className="text-[var(--text-primary)]">Stamina Potions:</strong> Instantly restore stamina. Critical for melee builds that rely on blocking and dodging. A stamina potion can save you when you are caught at zero stamina.</li>
            <li><strong className="text-[var(--text-primary)]">Mana Potions:</strong> Restore mana for spellcasters. Essential for extended fights where natural mana regeneration is insufficient. Always carry a stack when using staves or wands.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shroud Survival Flasks</h3>
        <TipCard title="Flasks Extend Shroud Time" desc="Shroud Survival Flasks are consumed to temporarily extend your Shroud survival timer. Use them BEFORE entering the Shroud — using them after you are already in does not extend your timer as expected. Plan ahead." />
        <TipCard title="Higher Tier Flasks = Longer Extension" desc="As you progress, you unlock better flask recipes that provide longer Shroud survival extensions. Early flasks add a few minutes; late-game flasks can add 10+ minutes. Prioritize unlocking better flask recipes." />

        <InfoBox title="Action Bar Loadout for Combat" type="tip">
          Optimal action bar setup for difficult content: Slot 1 = Primary weapon, Slot 2 = Secondary weapon/bow, Slot 3 = Healing Potions (instant burst heal), Slot 4 = Blueberries (30-second health regeneration), Slot 5 = Water or Stamina Potion (10-minute stamina regeneration). This gives you both burst healing and sustained regeneration, plus stamina support for extended fights.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Explosive Powder &amp; Staff Charges</h3>
        <TipCard title="Explosive Powder for Arrows" desc="The Alchemy Station crafts Explosive Powder, which is used to craft explosive arrows. These arrows deal AOE damage and are devastating against groups of enemies and certain boss encounters. Stockpile Explosive Powder for difficult content." />
        <TipCard title="Staff Charges Power Magic Weapons" desc="Staves require Staff Charges to function — they are essentially ammo for magic weapons. The Alchemy Station produces these. If you are a mage build, ensure you always have a large supply of Staff Charges. Running out mid-combat renders your staff useless." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Mana Management for Mages</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Mana Regenerates Slowly:</strong> Base mana regeneration is slow. Do not spam spells — use them deliberately and let mana recover between casts.</li>
            <li><strong className="text-[var(--text-primary)]">Eat Herbs for Mana Regen:</strong> Raw herbs provide passive mana regeneration while their buff is active. Always have an herb buff running as a mage.</li>
            <li><strong className="text-[var(--text-primary)]">Mushrooms Increase Max Mana:</strong> Cooked mushrooms increase your maximum mana pool. Eat them before long fights where you will cast many spells.</li>
            <li><strong className="text-[var(--text-primary)]">Carry Mana Potions:</strong> Always. There is no worse feeling than having a boss at 10% HP and running out of mana. A full stack of mana potions prevents this.</li>
            <li><strong className="text-[var(--text-primary)]">Wands Cost Less Mana:</strong> If you are running low on mana frequently, use a wand as a backup. Wand shots cost minimal mana and provide consistent ranged damage.</li>
          </ul>
        </div>

        <InfoBox title="Potions Do Not Conflict with Food Buffs" type="tip">
          Potions and food buffs occupy completely separate systems. You can have 3 (or 4) food buffs AND multiple potion buffs active simultaneously. This means you should always have both food and potion buffs running before difficult content. The combination of food + potions makes you significantly more powerful than either alone.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'farming-agriculture',
    title: 'Farming & Agriculture',
    icon: <Sprout className="w-5 h-5" />,
    summary: 'Complete farming guide — crop types, soil preparation, Seedbed mechanics, animal taming, barn building, and self-sustaining homestead design.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Farming transforms Enshrouded from constant scavenging into a self-sustaining lifestyle. A well-developed farm provides unlimited food, alchemy ingredients, and crafting materials — freeing you to focus on exploration and combat.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Unlocking Farming</h3>
        <TipCard title="Rescue the Farmer NPC" desc="The Farmer is the fifth core NPC to rescue (after Blacksmith, Hunter, Alchemist, and Carpenter). She unlocks the Seedbed for growing crops and the Oven for advanced cooking. Prioritize her rescue when you are tired of constantly foraging for food." />
        <TipCard title="Craft the Seedbed" desc="The Seedbed is the core farming station. Place it at your base, add seeds and appropriate soil, and wait for crops to grow. Different crops require different soil types — match the soil to the seed for optimal growth speed." />
        <TipCard title="Farming Soil Accelerates Growth" desc="Special Farming Soil (crafted via the Farmer) significantly speeds up crop growth compared to regular dirt. The investment in crafting farming soil pays off through faster harvest cycles and more produce per unit of time." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Crop Types &amp; Their Uses</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Vegetables (Pumpkin, Beet, Tomato, Bell Pepper):</strong> Boost Dexterity and ranged/dagger damage when cooked. Essential for archer and assassin builds. Also used in many cooking recipes.</li>
            <li><strong className="text-[var(--text-primary)]">Grains (Corn, Rice, Wheat):</strong> Provide Strength buffs for melee builds. Used in bread, sandwiches, and fried rice recipes. Highly renewable with proper farm management.</li>
            <li><strong className="text-[var(--text-primary)]">Herbs (Chamomile, Saffron, Rooibos):</strong> Used for tea recipes that provide endurance and stamina regeneration. Also used in potion crafting. Many herbs can be eaten raw for mana regeneration.</li>
            <li><strong className="text-[var(--text-primary)]">Mushrooms (various types):</strong> Growable in specialized conditions. Provide Intelligence buffs and mana boosts for mages. Also the primary ingredient for healing potions.</li>
            <li><strong className="text-[var(--text-primary)]">Fruit (Strawberries, Purple Berries, Yucca):</strong> Provide health regeneration buffs. Used in desserts and fruit bowls. Quick to grow and excellent for combat healing support.</li>
            <li><strong className="text-[var(--text-primary)]">Flax:</strong> Used for crafting rope, fabric, and certain building materials. Flax farming eliminates the need to constantly scavenge for these crafting components.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Animal Taming &amp; Barns</h3>
        <TipCard title="Tame Animals for Resources" desc="Certain animals can be tamed and brought to your base. Tamed animals provide renewable resources: chickens provide eggs, goats provide milk, and certain creatures can be bred for materials. This adds another layer of self-sustainability to your homestead." />
        <TipCard title="Build a Barn for Animal Housing" desc="The Barn is a specialized building for housing tamed animals. Animals in a barn are safe from predators and produce resources regularly. Keep your barn well-maintained and your animals fed for maximum output." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Self-Sustaining Homestead Design</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Food Production:</strong> Farm plots for vegetables, grains, and fruit eliminate the need for constant hunting and foraging. A large farm can feed multiple co-op players indefinitely.</li>
            <li><strong className="text-[var(--text-primary)]">Alchemy Garden:</strong> Dedicate a section of your farm to mushrooms and herbs. This ensures a constant supply of healing potion ingredients and mana-regeneration food.</li>
            <li><strong className="text-[var(--text-primary)]">Material Farm:</strong> Grow Flax and other crafting crops to generate building materials. This reduces dependency on scavenging runs.</li>
            <li><strong className="text-[var(--text-primary)]">Animal Section:</strong> Tamed animals in a barn provide eggs, milk, and other animal products without requiring dangerous hunting trips.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Farming Tips</h3>
        <TipCard title="No Watering Required" desc="Unlike many farming games, Enshrouded crops do not require watering. Plant seeds in soil and they grow automatically. This makes farming much lower maintenance than expected — the main effort is harvesting and replanting." />
        <TipCard title="Crops Do Not Rot" desc="Harvested crops do not spoil or rot in your inventory. Stockpile harvests in dedicated chests and cook them as needed. A large food stockpile means you are always prepared for extended expeditions." />
        <TipCard title="Use the Watering Can (Update 7)" desc="The watering can (unlocked via the Farmer) shows soil composition and can accelerate crop growth. Use it to inspect your farm soil and optimize growth conditions. Some new crops added in Update 7 only grow when covered in water." />
        <TipCard title="Collect Rainwater" desc="Update 7 added rainwater collection barrels. Place these in open areas to collect water automatically during rain. The collected water can be used for irrigation, crafting recipes, or filling water pouches. A free and sustainable water source for your farm." />
        <TipCard title="Plan Crop Ratios for Your Build" desc="If you are a melee build, dedicate 60% of your farm to grains and meat animals. If you are a mage, prioritize mushrooms and herbs. Tailor your farm output to your actual consumption patterns to minimize waste." />

        <InfoBox title="Farming Transforms the Late Game" type="tip">
          Early game Enshrouded is about scavenging and survival. Late game is about prosperity and self-sufficiency. A fully developed farm eliminates the tedious resource-gathering loop and lets you focus on what matters: exploring dangerous content, fighting bosses, and building your dream base. Invest in farming infrastructure early — the payoff is enormous.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'fishing',
    title: 'Fishing Guide',
    icon: <Fish className="w-5 h-5" />,
    summary: 'Complete fishing guide — rods, bait types, the fishing mini-game, fish locations by biome, and why fishing is worth your time.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Fishing was introduced in Update 7 (Wake of the Water) and quickly became one of the most rewarding activities in Enshrouded. It provides cooking ingredients, crafting materials, socketable gems, and even trophies for your base. This guide covers everything you need to become a master angler.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Getting Started</h3>
        <TipCard title="Craft Your First Fishing Rod" desc="The basic fishing rod is craftable early in the game. Once you have it, place it on your hotbar. Right-click the equipped rod to open the bait selection menu. You need both a rod and bait to fish." />
        <TipCard title="Complete the Fisher NPC Quests" desc="Follow the quest chain from the Fisher NPC ('Nice Day for Fishing') to unlock the Excellent Fishing Rod — one of the best rods in the game. These quests also teach you bait crafting recipes and lead you to Fishing Island, which has abundant frog spawns (the best wild bait). Mark Fishing Island on your map." />
        <TipCard title="The Lucky Fishing Rod" desc="The Lucky Fishing Rod can be dug up from a specific location in the world. While it is excellent for fishing up treasures rather than fish, it is a fun alternative for players who enjoy the treasure-hunting aspect of fishing." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bait System</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-3">Bait determines the rarity of fish you catch. There are two categories:</p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Wild Bait ( gathered from environment):</strong>
              <br/>• <strong>Worms:</strong> Common everywhere — basic bait for common fish.
              <br/>• <strong>Fireflies:</strong> Appear only after dark. Boost uncommon fish chances.
              <br/>• <strong>Moths:</strong> Night-only. Boost uncommon fish chances.
              <br/>• <strong>Frogs:</strong> The best wild bait in the game. Massively boosts epic fish catch rate. Found abundantly on Fishing Island.
            </li>
            <li><strong className="text-[var(--text-primary)]">Crafted Bait (made via Fisher NPC):</strong>
              <br/>• Requires insects of matching rarity + additional materials (Fish Bones, Fish Teeth, Gold Coins, Capybara Bristles).
              <br/>• Higher-tier crafted bait dramatically improves catch rates for rare and epic fish.
              <br/>• <strong>Critical:</strong> Salvage your first epic fish immediately for Fish Bones and Fish Teeth — these are required for Epic Fishing Bait recipes.
            </li>
          </ul>
        </div>

        <InfoBox title="Fish Location Matters" type="tip">
          Bait rarity is not the only factor — location determines the maximum fish rarity available. Using the best frog bait in the Springlands will never yield an epic fish. Epic fish only appear in the Veilwater Basin and other high-level biomes. For advanced fishing, you must travel to appropriate biomes.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fishing Mini-Game Mastery</h3>
        <div className="game-panel corner-decor p-4">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong>Cast:</strong> Hold left-click to cast. Longer hold = farther cast. Distance does NOT affect fish type.</li>
            <li><strong>Wait for a bite:</strong> Watch the bobber. When a fish strikes, press left-click at the right moment to hook it.</li>
            <li><strong>Read the stamina bar:</strong> Green bar = your rod stamina. Red bar = fish resistance. The number of segments on the red bar tells you how many reel cycles the fight will take.</li>
            <li><strong>Pull opposite the fish:</strong> When the fish pulls right, press A (pull left). When it pulls left, press D (pull right).</li>
            <li><strong>Watch the meter, not the fish:</strong> The stamina meter is more accurate than the fish's visual position. Epic fish juggle directions rapidly — stay focused on the bar.</li>
            <li><strong>Re-hook timing:</strong> Each time a segment on the red bar completes, left-click to advance the reel. Listen for the audio cue.</li>
            <li><strong>Victory or escape:</strong> The mini-game ends when either your green stamina depletes (fish escapes) or the red bar empties (you win). Press E to collect or right-click to release.</li>
          </ol>
        </div>

        <InfoBox title="Pro Fishing Tip: The Secret to Epic Fish" type="tip">
          The key to catching epic fish is rapid direction switching. Epic fish change direction constantly — the moment the fish's stamina bar stops decreasing in one direction, switch to the opposite pull direction immediately. Never stay pulling one direction for long. Keep your eyes glued to the stamina meter, not the fish's visual position. With practice, epic fish become consistently catchable.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Why Fishing Is Worth Your Time</h3>
        <TipCard title="Cooking Ingredients" desc="Fish are core ingredients in numerous recipes unlocked through the Farmer NPC. The Smoker expands your cooking options even further. Fish-based dishes provide stamina buffs — essential for all builds." />
        <TipCard title="Crafting Materials" desc="Certain fish yield critical crafting materials. Shockfin is required for Electro Nerves (used in spells). Thornridge yields Fish Bones and Yellowfin yields Fish Teeth (both used in Epic Fishing Bait)." />
        <TipCard title="Socketable Gems" desc="Fishing is a reliable source of gems that can be socketed into weapons for stat boosts. This is one of the few ways to obtain gems outside of dungeon loot." />
        <TipCard title="Base Trophies" desc="Caught fish can be mounted as wall decorations in your base. Show off your biggest catches to visiting friends — the ultimate fishing bragging rights." />
        <TipCard title="Self-Sustaining Bait Loop" desc="Dismantle caught fish at the Angler NPC to obtain materials for better bait. Better bait catches rarer fish. Rarer fish dismantle into better materials. This positive feedback loop makes fishing increasingly rewarding the more you invest in it." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fishing Skill Tree Bonus</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)]">There is a +30% fishing stamina trait in the early skill tree. This is a high-value pickup for anyone planning to fish regularly — it makes catching epic fish significantly easier by extending your rod stamina. The trait pays for itself after just a few epic catches.</p>
        </div>

        <InfoBox title="Identify Fish Before Hooking" type="tip">
          You can identify which fish is about to bite before fully hooking it. Cast near yourself and watch the fish as they approach your bobber. Different fish species have distinct visual appearances when they jump near the bait. Learning to identify fish visually lets you release unwanted catches early and focus on the ones you actually need.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'update7-water',
    title: 'Update 7: Wake of the Water',
    icon: <Waves className="w-5 h-5" />,
    summary: 'Complete guide to Update 7 — swimming, diving, Veilwater Basin, greatswords, water building, new enemies, and all major gameplay changes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update 7 (Wake of the Water) was the largest update in Enshrouded's history, fundamentally expanding the game with water mechanics, a new biome, a new weapon type, and massive system overhauls. This guide covers every major addition and change.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Swimming &amp; Diving</h3>
        <TipCard title="Swimming Is Available from the Start" desc="Every player can swim immediately — no unlock required. Swimming lets you access previously unreachable areas in both old and new biomes. Revisit old areas to discover new underwater secrets." />
        <TipCard title="You Cannot Fight Underwater" desc="While underwater, you cannot use weapons or spells. You can only swim, dive, and interact with objects. Plan accordingly — underwater areas often have enemies on land nearby." />
        <TipCard title="The Sieve — Underwater Treasure Hunting" desc="The Sieve is a new tool that lets you search underwater ground for rare resources. Pearls, gold, and other treasures can be found by sieving the seabed. A relaxing and profitable activity." />
        <TipCard title="Flame Altar Oxygen Bubbles" desc="Flame Altars now generate oxygen bubbles around them underwater. This lets you teleport to and respawn safely at underwater bases. Essential for anyone building the legendary 'Atlantis base.'" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Veilwater Basin — The New Biome</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">High-Level Content (35+):</strong> Veilwater Basin is end-game content. Most enemies are above level 35. Do not attempt this biome until you are appropriately leveled and geared.</li>
            <li><strong className="text-[var(--text-primary)]">Tropical Theme:</strong> Dense jungle vegetation, massive lakes, and winding rivers. A completely different aesthetic from existing biomes.</li>
            <li><strong className="text-[var(--text-primary)]">New Enemy: The Drak:</strong> Amphibious reptilian creatures that attack both on land and in water. They are fast, aggressive, and a genuine threat. Stay out of the water when Drak are nearby.</li>
            <li><strong className="text-[var(--text-primary)]">New Dungeons &amp; Temples:</strong> Indiana Jones-style temples and ruins filled with puzzles, traps, and enemies. These offer some of the best loot in the game.</li>
            <li><strong className="text-[var(--text-primary)]">Capybaras:</strong> Adorable new animals in the Basin. They can be tamed and provide Capybara Bristles (used in crafted bait recipes).</li>
            <li><strong className="text-[var(--text-primary)]">New Materials &amp; Recipes:</strong> Dozens of new resources, building blocks, armors, furniture, and decorations unique to this biome.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Greatsword — New Weapon Type</h3>
        <TipCard title="Slow but Devastating" desc="The Greatsword is a new two-handed weapon type. It swings slowly but deals massive damage per hit. Even new players can find greatswords as loot in the first biome — you do not need to reach end-game to try one." />
        <TipCard title="New Skills &amp; Armor Support" desc="Update 7 added new skills specifically for greatsword builds, plus supportive armor pieces. The Whirlwind Crescendo skill is particularly powerful — a spinning AOE attack that hits all nearby enemies." />
        <TipCard title="Level Cap Raised to 45 (Character) / 50 (Weapons)" desc="The maximum character level is now 45, and weapons can reach level 50. This opens up new skill picks and more powerful gear tiers. Plan your skill tree accordingly." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Water Building System</h3>
        <TipCard title="Water Pump &amp; Springs" desc="Water can now be added, removed, and transported in your base using water pumps and springs. Build your own rivers, aqueducts, pools, and moats. This transforms base aesthetics and enables functional water systems." />
        <TipCard title="Water Wheels for Power" desc="Water wheels can be placed in flowing water to generate rotational force. This force powers new crafting factories — an alternative to windmills for automated production." />
        <TipCard title="Water Gates" desc="Water gates let you control the flow of water through your base. Create dams, flood chambers, or intricate water gardens. The system is surprisingly deep for a survival game." />
        <TipCard title="Underwater Bases" desc="Thanks to the new barrier blocks and Flame Altar oxygen bubbles, fully functional underwater bases are now possible. Build your own Atlantis — the ultimate flex base." />
        <TipCard title="Flame Altar Flood Protection" desc="The Flame Altar has a new button that removes all simulated water in your base radius with one press. Essential for when 'that one friend' floods the base while everyone is offline." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Major System Changes</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Treasure Chest Rework:</strong> Drop chances for epic and legendary weapons significantly increased in silver and gold chests. Chests now save their emptied state even after logging out. Chests also drop +1 additional item.</li>
            <li><strong className="text-[var(--text-primary)]">Weapon Durability Increased:</strong> All weapons now have higher durability, and durability scales correctly with item level and quality. Less time repairing, more time fighting.</li>
            <li><strong className="text-[var(--text-primary)]">HP/Mana/Stamina Rebalanced:</strong> Overall regeneration rate is lower, but more items provide regeneration boosts. This allows dedicated 'regeneration builds' for the first time.</li>
            <li><strong className="text-[var(--text-primary)]">Lore Weapons Craftable:</strong> Lore weapons can now be crafted at every tier once unlocked. Additional lore weapons were added. With rebalanced stats, they are now genuinely competitive options.</li>
            <li><strong className="text-[var(--text-primary)]">Recipe Output Unified:</strong> All food recipes now yield exactly 5 items. Building blocks yield 100. Roof blocks yield 50. No more inconsistent output numbers.</li>
            <li><strong className="text-[var(--text-primary)]">Save Point Respawning:</strong> You now respawn at either your last-visited base OR your last-visited save point (not just your base). This lets parties take breaks during dungeon runs and resume where they left off.</li>
            <li><strong className="text-[var(--text-primary)]">Editable Signs:</strong> Signs, plaques, and road-signs can now be edited with custom text. Label your storage rooms, name your base areas, leave messages for co-op friends.</li>
            <li><strong className="text-[var(--text-primary)]">Watering Can for Farming:</strong> The watering can shows soil composition and can accelerate crop growth. A practical farming tool that adds depth to agriculture.</li>
          </ul>
        </div>

        <InfoBox title="Server Visitor Role" type="tip">
          Server hosts can now set up a 'Visitor' default guest role. This role prevents terraforming outside the base, making it harder for trolls to cause mischief with water. If you run a public server, enable this role immediately.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'update8-forging',
    title: 'Update 8: Forging the Path',
    icon: <Hammer className="w-5 h-5" />,
    summary: 'Complete guide to Update 8 (v0.9.1.0) — the final major update before 1.0. Skill tree reset, gear upgrading with runes, Focus bar ultimates, heavy attacks, adventure sharing, and critical warnings for returning players.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update 8 (Forging the Path, v0.9.1.0) is the last major content update before Enshrouded 1.0. It reworks combat, the skill tree, and gear progression, adds adventure sharing and long-requested building tools, and quietly changes systems that can break old habits — or old bases. This guide covers everything that matters.
        </p>

        <InfoBox title="Returning Player? Read This First" type="warning">
          Your skill tree is <strong>automatically reset on first login</strong> after the patch, with all points refunded. Re-spend them <strong>before</strong> you pick a fight — enemies now have a proper awareness system and your old muscle memory no longer applies.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Skill Tree Rework</h3>
        <TipCard title="20+ New Nodes, 80+ Upgradable Skills" desc="The tree was rebuilt with over twenty new nodes, and more than eighty skills can now be upgraded across multiple ranks. The tree view is zoomable, making navigation far less painful." />
        <TipCard title="Double Jump Moved to the Center" desc="Double Jump — previously deep in a specific branch — now sits at the center of the tree, so every build can grab it early. Adjust your route accordingly." />
        <TipCard title="Armor Perks Can Break the Cap" desc="New armor perks can push individual skills beyond their normal level cap. Build planning now includes hunting the right armor pieces, not just spending points." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Combat Rework</h3>
        <TipCard title="Focus Bar & Weapon Ultimates" desc="Attacking builds a new Focus bar; when full, you can unleash a devastating ultimate unique to your weapon type. The exception: staves have no ultimate — mages get raw power buffs elsewhere instead." />
        <TipCard title="Every Melee Weapon Has a Heavy Attack" desc="Heavy attacks deal roughly double damage and heavy poise damage, and cannot be interrupted once started. Two-handed weapon attack chains were rebuilt from scratch." />
        <TipCard title="Dodge & Blink Now Have I-Frames" desc="Dodging and the Blink spell grant real invincibility frames, making reactive play far more reliable than pre-patch panic-rolling." />
        <TipCard title="Enemy Awareness System" desc="Enemies now move through suspicion → search → combat states instead of instantly aggroing. A crouching player can thin out camps and pick off stragglers before a real fight starts." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Gear Upgrade System</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Upgrade with Runes:</strong> Armor, shields, amulets, rings, and tools can now be upgraded using Runes. Bring gear to the right artisan: the Blacksmith handles warrior gear, the Huntress ranger gear, and the Alchemist mage gear.</li>
            <li><strong className="text-[var(--text-primary)]">Old Gear Auto-Converts:</strong> Pre-patch equipment is automatically converted into the new system — your legendaries are safe.</li>
            <li><strong className="text-[var(--text-primary)]">Salvage, Don't Sell:</strong> Unwanted gear can be salvaged into Runes. Hoard duplicates and low rolls — they are now upgrade fuel, not vendor trash.</li>
            <li><strong className="text-[var(--text-primary)]">Damage Reduction Cap Raised:</strong> The armor damage-reduction cap went from 60% to 80%, making tank builds genuinely viable.</li>
            <li><strong className="text-[var(--text-primary)]">Set Drops Moved:</strong> Elder, Radiant Paladin, and Eagle Eye sets now drop in the Albaneve Summits region instead of their old locations.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Adventure Sharing & Social</h3>
        <TipCard title="Upload & Download Whole Worlds" desc="The new adventure sharing system lets you upload your world for others to visit, or download community adventures. A camera prop lets creators set up screenshots, and hosts can toggle a dedicated visitor spawn point." />
        <TipCard title="Quest Log Split" desc="The journal now separates main and side quests, making it much easier to track what actually advances the story." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quality of Life & Building</h3>
        <TipCard title="Quick Stack Station" desc="A new station automatically deposits your carried materials into matching Magic Chests. One click after every farm run — no more sorting." />
        <TipCard title="Item Sets" desc="A new collections tab tracks themed item sets. Completing a set grants bonus XP, giving collectors a reason to keep one of everything." />
        <TipCard title="Building QoL Pack" desc="The construction hammer gained a full material catalogue with click-to-sample picking, and building now pulls directly from Magic Chests. New pieces include spiral staircases, 20+ potted plants, and street lamps." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Water, Glider & Early-Game Changes</h3>
        <TipCard title="Sprinklers Ignore Distance" desc="Sprinklers now water crops no matter how far they are from a water source — great for farms, but old bases with careless plumbing may flood. The Flame Altar flood-protection button from Update 7 is your emergency fix." />
        <TipCard title="Updraft Rework" desc="Glider updrafts now run on a charge mechanic: climbs cost charge, boosts cap at +15% height, and updrafts inside your base range work instantly. Old infinite-hop glider routes may need re-planning." />
        <TipCard title="Mage & Early-Game Buffs" desc="Staff range and durability increased by 20%, Fireball I has a bigger explosion, Resin is more common early on, three new meat-skewer recipes were added, and early-game XP was rebalanced for a smoother start." />
        <TipCard title="Small but Great" desc="Slow-walk toggle on [u] for precision ledge work, and two lock-on modes (hold or toggle) in the settings." />
      </div>
    ),
  },
  {
    id: 'performance',
    title: 'Performance & Settings',
    icon: <Gauge className="w-5 h-5" />,
    summary: 'Optimize your game — graphics settings, FPS fixes, CPU/VRAM tweaks, traversal stutter solutions, and settings for every PC tier.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded is surprisingly demanding for a stylized game. Dense fog, expensive lighting, and high foliage density can crush FPS — especially in certain biomes. These optimization settings are tested and proven to work in the current build.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Why Enshrouded Runs Heavy</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Dense volumetric fog</strong> across almost every biome</li>
            <li><strong className="text-[var(--text-primary)]">Expensive lighting effects</strong> inside caves and dungeons</li>
            <li><strong className="text-[var(--text-primary)]">Large vertical map streaming</strong> (UE traversal hitching)</li>
            <li><strong className="text-[var(--text-primary)]">High foliage density</strong> with shadows that hit VRAM</li>
            <li><strong className="text-[var(--text-primary)]">Physics load</strong> when building large bases</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Best Graphics Settings (Universal)</h3>
        <TipCard title="Display: Fullscreen (Not Borderless)" desc="Fullscreen mode eliminates 10–20% CPU latency compared to Borderless Windowed. Always use true Fullscreen for the best performance." />
        <TipCard title="Upscaling — Mandatory for Smooth FPS" desc="NVIDIA GPUs: Use DLSS Quality mode (+28% FPS boost). AMD GPUs: Use FSR 2 Quality mode. Intel Arc: Use XeSS Balanced. DLSS Quality keeps vegetation edges sharp while providing a substantial performance uplift." />
        <TipCard title="Shadows: Medium" desc="Shadows are the single heaviest setting in Enshrouded. Dropping from High to Medium yields a 6–7% FPS improvement with minimal visual loss. Quality is the sweet spot for mid-range PCs; Performance or Low for budget builds." />
        <TipCard title="Indirect Lighting: Quality (Mid-Range) / Performance (Low-End)" desc="Indirect lighting (global illumination) is ~15% slower at highest vs. lowest quality. 'Quality' is recommended for mid-range PCs (RTX 2060/3060). 'Performance' for low-end (GTX 1650/1050 Ti)." />
        <TipCard title="Foliage: Medium" desc="High foliage density hits both GPU and VRAM. Medium provides good visual density while maintaining stable frame times. Drop to Low only if you are VRAM-limited (4GB or less)." />
        <TipCard title="Post-Processing: Low" desc="Post-processing effects are visually subtle but surprisingly heavy. Setting this to Low provided the smoothest frame-time graphs in testing without noticeably degrading image quality." />
        <TipCard title="Effects: Medium" desc="Effects quality impacts fog rendering heavily. Medium is the optimal setting — Low makes fog look flat and unnatural, while High provides diminishing returns." />
        <TipCard title="Textures: High (6GB+ VRAM) / Medium (4GB VRAM)" desc="Texture quality is primarily VRAM-dependent. If you have 6GB+ VRAM, use High — it looks significantly better. With 4GB VRAM, use Medium to prevent stuttering from VRAM overflow." />
        <TipCard title="View Distance: Medium" desc="Medium view distance strikes the right balance — you can see landmarks and enemy camps at distance without the heavy performance cost of High or Ultra." />
        <TipCard title="Anti-Aliasing: TAA High" desc="TAA High provides the best image stability with minimal performance cost. The shimmering at lower TAA settings is more distracting than any FPS gain is worth." />
        <TipCard title="V-Sync: OFF" desc="V-Sync adds input latency and can cause stuttering. Keep it off. Use your GPU driver's frame limiter or G-Sync/FreeSync instead if you want to prevent screen tearing." />
        <TipCard title="Dynamic Resolution: OFF" desc="Dynamic Resolution causes visible image quality fluctuations during combat. It is distracting and often causes more harm than good. Keep it off and use upscaling (DLSS/FSR) instead." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Windows/System Optimizations</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Enable Resizable BAR:</strong> In your BIOS/UEFI settings. Provides a small but consistent FPS uplift in CPU-bound scenarios.</li>
            <li><strong className="text-[var(--text-primary)]">Windows Game Mode: ON</strong></li>
            <li><strong className="text-[var(--text-primary)]">Hardware-Accelerated GPU Scheduling (HAGS): ON</strong></li>
            <li><strong className="text-[var(--text-primary)]">Power Plan: High Performance</strong> (both Windows and GPU control panel)</li>
            <li><strong className="text-[var(--text-primary)]">Enable XMP/EXPO memory profile</strong> in BIOS for faster RAM speeds</li>
            <li><strong className="text-[var(--text-primary)]">Disable Steam Overlay, Discord Hardware Acceleration, and Xbox Game Bar</strong> — these cause CPU overhead and frame-time spikes</li>
            <li><strong className="text-[var(--text-primary)]">Close Chrome/Edge completely</strong> before playing — browsers use 1–2GB VRAM</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Critical Fix: Traversal Stutter</h3>
        <TipCard title="Clear Shader Cache" desc="Unreal Engine shader compilation causes stuttering when sprinting, gliding, or moving between biomes. The fix: Navigate to %LocalAppData%\Enshrouded\Saved\Shaders and delete the entire folder. Restart the game and let shaders recompile. This fix improved 1% lows from 47 FPS to 63 FPS in testing." />
        <TipCard title="Shader Compilation Disclaimer" desc="The developers acknowledge that shader compilation times are a major pain point and are actively working on improvements. Until a permanent fix arrives, periodically clearing the shader cache is the best workaround." />

        <InfoBox title="VRAM Is the Main Bottleneck" type="warning">
          In fog-dense areas and large bases, VRAM spikes are the primary cause of micro-stutters. If you experience hitching in the Shroud or around your base, your VRAM is likely maxed out. Lower Textures to Medium, reduce Foliage, and close all background applications (especially web browsers). These changes have a bigger impact than any CPU optimization.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Settings by PC Tier</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-3 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-green-400">Low-End (GTX 1050 Ti / GTX 1650 / RX 570):</strong>
              <br/>Resolution: 900p | Upscaler: FSR 2 Balanced | Shadows: Low | Textures: Medium | Foliage: Low | Expected: 40–55 FPS
            </li>
            <li><strong className="text-blue-400">Mid-Range (RTX 2060 / RX 6600 / RTX 3060):</strong>
              <br/>Resolution: 1080p | Upscaler: DLSS Quality | Shadows: Medium | Textures: High | Foliage: Medium | Expected: 75–95 FPS
            </li>
            <li><strong className="text-purple-400">High-End (RTX 3070–4070):</strong>
              <br/>Resolution: 1440p | Upscaler: DLSS Quality or Off | Shadows: High | Textures: High | Foliage: High | Expected: 110–145 FPS
            </li>
            <li><strong className="text-yellow-400">Ultra (RTX 4080+ / RX 7900 XTX):</strong>
              <br/>Resolution: 1440p or 4K | Upscaler: Off or DLSS Quality | All settings: High/Ultra | Expected: 100+ FPS at 4K, 150+ at 1440p
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'hidden-mechanics',
    title: 'Hidden Mechanics & Obscure Tricks',
    icon: <KeyRound className="w-5 h-5" />,
    summary: 'The mechanics Enshrouded never explains — cheap respecs, chest persistence, free repairs, magic chest logistics, bone totems, stealth states, and settings worth changing.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Some of Enshrouded's most useful systems are never spelled out in-game. These are the obscure mechanics and quiet tricks that veterans rely on — collected here so you do not have to learn them the hard way.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Progression Secrets</h3>
        <TipCard title="Respec Anytime, and It's Cheap" desc="You can reset your entire skill tree at the Flame Altar for a small Rune fee per point. Never suffer through a bad build — and after Update 8's automatic reset, experimenting costs nothing at all." />
        <TipCard title="Chests Never Forget" desc="Since Update 7, emptied chests stay emptied even after you log out — the classic 'relog to respawn loot' trick is dead. The trade-off: silver and gold chests drop +1 item with much better epic/legendary rates, so efficient farming means running chest routes across multiple points of interest." />
        <TipCard title="Free Repairs Forever" desc="Repairing gear at your base's workbenches and anvils costs nothing. Low durability is never a reason to discard loot — and repair stations inside the Hollow Halls let you fix up mid-dungeon." />
        <TipCard title="Bone Totems First" desc="In the Hollow Halls, Bone Totems continuously spawn enemies until destroyed. Ignore the mob, kill the totem, then clean up — fighting in the wrong order can turn a room into an endless wave." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Logistics & Storage</h3>
        <TipCard title="Magic Chests Are Global Storage" desc="Every crafting station in your base automatically pulls materials from any Magic Chest in range — you never need ingredients in your inventory. Update 8 extends this to the building hammer, and the new Quick Stack Station deposits your loot into the right chests with one click." />
        <TipCard title="Keep One of Everything" desc="The Update 8 Item Sets tab awards bonus XP for completing themed collections. Hoarding one copy of each oddity finally pays off." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Movement & Survival</h3>
        <TipCard title="Underwater Oxygen Pockets" desc="Certain underwater interactables — like the buttons inside the Veilwater spire — refill your breath meter when you reach them. Plan long dives around these pockets instead of surfacing." />
        <TipCard title="Slow Walk for Ledge Work" desc="Press [u] to toggle slow walk. Invaluable for precision jumps, narrow beams, and not sliding off your own roof while building." />
        <TipCard title="Read the Enemy Awareness" desc="Since Update 8, enemies visibly pass through suspicion and search states before committing to combat. Crouch, watch their behavior, and pick off isolated targets before the camp ever alerts." />
        <TipCard title="Two Lock-On Modes" desc="The settings menu offers both hold-to-lock and toggle lock-on. If camera fights feel worse after Update 8, you are probably on the wrong mode for your habits." />

        <InfoBox title="Salvage, Don't Sell" type="tip">
          Update 8 lets you break unwanted gear down into Runes — the currency of the new upgrade system. Duplicates and low rolls that used to be vendor trash are now the fuel that maxes out your favorite set.
        </InfoBox>
      </div>
    ),
  },
];
