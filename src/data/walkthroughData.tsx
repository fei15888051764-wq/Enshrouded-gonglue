import { Flame, Compass, Crown, Map, TreePine, Sun, Snowflake, Droplets, Star, ScrollText, Lightbulb, Swords, Castle } from 'lucide-react';
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

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="game-panel corner-decor p-3 mb-2">
      <div className="flex items-start gap-2">
        <span className="text-[10px] text-[var(--text-gold)] font-bold mt-0.5">{num}</span>
        <div>
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">{title}</h4>
          <p className="text-[10px] text-[var(--text-secondary)]">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export const walkthroughSubSections: SubSection[] = [
  {
    id: 'starting-out',
    title: 'Part I: Starting Out',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Lv 1-5 — Exit Cinder Vault, build base, rescue Blacksmith, clear first Elixir Well.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Your journey begins in the <strong className="text-[var(--text-gold)]">Cinder Vault</strong>. You are a Flameborn, 
          awakened to push back the Shroud. This section covers your first hours — exiting the vault, establishing your base, 
          rescuing the Blacksmith, and clearing your first Elixir Well.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: First Steps (Tutorial)</h3>
        <Step num="1" title="Exit the Cinder Vault" desc="Follow the tutorial path. Grab the Rusty Sword and Torch. Fight 3 basic Fell enemies to learn combat. Use explosive barrels to clear the blocked exit." />
        <Step num="2" title="Reach the Plains" desc="Exit the vault into Embervale. The quest 'Claim A Spot For Your Base' auto-starts. Follow the quest marker to a flat, open area." />
        <Step num="3" title="Gather Starter Resources" desc="Collect everything: Plant Fiber, Twigs, Stone, Wood Logs, Mushrooms, Berries. Find beehives on trees for Wax and Honey." />
        <Step num="4" title="Craft Essential Tools" desc="Press V for crafting. Craft 8 String first, then: Tiny Backpack, Pickaxe, Axe, and Bow. Craft 10 Wood Arrows. Equip the Tiny Backpack to expand inventory." />
        <Step num="5" title="Setup Action Bar" desc="Press B. Put Bow in Slot 1, Sword in Slot 2. Use Current Action Bar for weapons. Use ALT Switch for tools — place Pickaxe in row 2 column 3, Axe in column 4." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Build Your Base</h3>
        <Step num="6" title="Craft Flame Altar" desc="Press V, craft a Flame Altar (5 Stone). Place it in the center of a flat field — the yellow outline shows your build radius. Commune with the Flame." />
        <Step num="7" title="Build Workbench" desc="Craft a Workbench (3 String + 8 Wood Logs) next to the Flame Altar. This is your crafting hub — also repairs gear." />
        <Step num="8" title="Explore the Ruined Town" desc="Run southwest into the old town beyond the wooden fencing. Destroy wrapped boxes by wagons for Torn Cloth, String, etc. Use the well for water." />
        <Step num="9" title="Read the Red Book" desc="Find the red glowing book in the town. Read it for lore. Pick up food. Place Cooked Meat, Berries, and Water in slots 6-8 of your action bar. Use all 3." />
        <Step num="10" title="Find the Sleeping Survivor" desc="Follow quest marker northeast. Travel through a Shrouded area (5-min timer). Enter the Ancient Vault. Open the pod to rescue the Blacksmith — Oswald Anders." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Clear the Elixir Well</h3>
        <Step num="11" title="Accept Blacksmith Quests" desc="Talk to the Blacksmith. Accept 'Clear the Elixir Well' quest. He also gives quests for Nails, Resin, and more." />
        <Step num="12" title="Prepare for the Well" desc="Ensure you have: food buffs active, at least 5 bandages, weapon durability good, arrows crafted. Bring your bow — ranged is safest for wells." />
        <Step num="13" title="Descend into the Well" desc="Follow the quest marker to the Elixir Well. Enter the Shroud (timer starts). Fight through Fell enemies. Melee small insects, shoot archers from distance." />
        <Step num="14" title="Kill the Fell Thunderbrute" desc="This is your first boss encounter. ~800 HP. Bait heavy swings → dodge → counterattack. Ranged attacks are safest between combos. Fire arrows deal bonus damage." />
        <Step num="15" title="Open the Gold Chest" desc="After defeating the boss, open the gold chest in the well. It often drops blue/purple gear. Don't forget the silver chests too!" />
        <Step num="16" title="Upgrade Your Flame" desc="Teleport back to base. Use the Shroud Core from the boss to upgrade your Flame Altar to Level 2. Commune with the Flame." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Glider & Grappling Hook</h3>
        <Step num="17" title="Complete Blacksmith Quests" desc="Craft 6 Nails at the Blacksmith. Gather Resin from trees (use axe). Turn in quests to progress his storyline." />
        <Step num="18" title="Craft the Glider" desc="Blacksmith teaches you the Glider recipe. Craft it at the Workbench. Equip it — this transforms your traversal forever." />
        <Step num="19" title="Craft the Grappling Hook" desc="Also from the Blacksmith questline. Costs: 4 Metal Scraps + 7 String + 10 Shroud Spores. Aim at glowing blue grapple points to swing." />
        <Step num="20" title="Upgrade Your Base" desc="Craft a bed. Build a basic shelter (roof over your head = Rested buff). Place a campfire for warmth. Organize storage chests." />

        <InfoBox title="Starting Out Checklist" type="tip">
          Before leaving for Revelwood: Character Lv 5+ | Flame Lv 2 | Glider + Grappling Hook equipped | Basic shelter built | Bed placed | All starter quests from Blacksmith completed | At least 20 skill points spent | Iron-tier gear | 200+ arrows crafted
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'springlands',
    title: 'Part II: Springlands & Low Meadows',
    icon: <TreePine className="w-5 h-5" />,
    summary: 'Lv 5-10 — Rescue 4 more NPCs, climb Ancient Spire, clear Shroud Roots, defeat Vukah Brawler.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          With the Blacksmith rescued and your base established, it's time to expand. Rescue the remaining 4 core NPCs, 
          climb the Ancient Spire for fast travel, clear Shroud Roots for skill points, and defeat the 
          <strong className="text-green-400"> Vukah Brawler</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Secure the Ancient Spire</h3>
        <Step num="1" title="Climb the Springlands Spire" desc="Find the Ancient Spire (marked on map after base setup). Climb to the top using the Grappling Hook. Speak with The Flame to activate it. This reveals all Ancient Obelisks in the region." />
        <Step num="2" title="Get the Spark" desc="At the top of the Spire, claim the Spark. This is used for Flame Altar upgrades. Fast travel is now unlocked — you can teleport to this Spire from any Flame Altar." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Rescue the Alchemist</h3>
        <Step num="3" title="Accept 'Powerful Alchemy' Quest" desc="This quest activates after climbing the Spire and interacting with your Flame Altar. Follow the quest marker to the Alchemist's Ancient Vault." />
        <Step num="4" title="Enter the Shroud" desc="The vault is in a Shrouded area. You have 6 minutes (Flame Lv 2). Follow the path, kill Fell enemies, and enter the vault." />
        <Step num="5" title="Rescue the Alchemist" desc="Open the pod to release Balthazar the Alchemist. Teleport back to base. Use Summoning Staff to place him. Build his Mortar station." />
        <Step num="6" title="Craft Health Potions" desc="The Alchemist unlocks potion brewing. Craft Health Potions (Red Mushroom + Water Flask). These are essential for boss fights." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Rescue the Hunter</h3>
        <Step num="7" title="Accept 'Hunter Becomes the Hunted'" desc="Another Flame quest after the Alchemist rescue. Follow the marker to the Hunter's Ancient Vault in Low Meadows." />
        <Step num="8" title="Rescue Athalan Skree" desc="Enter the vault and free the Hunter. Summon him at your base. He unlocks: Tanning Station, Loom, bow crafting, leather armor." />
        <Step num="9" title="Craft a Better Bow" desc="Use the Hunter's station to craft an improved bow. Also craft Leather Armor for better defense than cloth." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Rescue the Carpenter & Farmer</h3>
        <Step num="10" title="Rescue the Carpenter" desc="Quest 'Carpentry Assistance' unlocks. The Carpenter's vault is in Low Meadows. Rescue Cade Hawthorn. He unlocks: Kiln, Table Saw, Masonry Tools, furniture crafting." />
        <Step num="11" title="Complete 'Growing Stronger Together'" desc="This quest leads you to the Farmer's Ancient Vault. Rescue the Farmer (Emily Fray). She unlocks: Cooking Station, Seed Bed, Oven, Beehive, farming." />
        <Step num="12" title="Start Farming" desc="Craft 2 Farm Soil (14 Springlands Dirt + 6 Bonemeal). Build 2 Seedbeds. Plant Wheat and Flax — these are crafting staples you'll need constantly." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 5: Clear Shroud Roots & Wells</h3>
        <Step num="13" title="Destroy Shroud Roots" desc="Shroud Roots are glowing purple tendrils in Shroud zones. Chop them with an axe (3-5 hits). Each destroyed root grants +1 skill point and temporarily clears the Shroud around it." />
        <Step num="14" title="Clear More Elixir Wells" desc="There are 3 Elixir Wells in Springlands. Each clear grants +3 skill points. Use explosive arrows to deal with groups efficiently." />
        <Step num="15" title="Read the Flame Obelisks" desc='Quests "A Story of Fire" and "A Story of Rot" lead you to Obelisks. Reading them reveals Flame Shrine and Shroud Root locations on your map.' />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 6: Vukah Brawler Boss</h3>
        <Step num="16" title="Travel to Vukah Ceremony Hill" desc="In Low Meadows, head to the Vukah Ceremony Hill. Clear the Vukah enemies at the base." />
        <Step num="17" title="Defeat the Vukah Brawler" desc="Optional mini-boss (Lv 8). Shoot the healers first. Dodge his leap attacks. Claim the Vuk'ahrrrr Blessing (+25 Health, +20% Melee Damage for 30 min) after victory." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 7: Going East</h3>
        <Step num="18" title="Rescue Mei-Yin Chen (Assistant)" desc="Travel east through the Shroud. Find the Assistant's Ancient Vault. Rescue Marianne Reed. She helps with alchemy quests." />
        <Step num="19" title="Clear Fox Chase Root" desc="Follow the road east to Fox Chase. Destroy the Shroud Root. Claim the gold chest." />
        <Step num="20" title="Final Preparations" desc="Teleport back to base. Repair all gear. Deposit items. Craft at least 200 Scrap Arrows. Stockpile health potions. Ensure all food buffs are active." />

        <InfoBox title="Springlands Completion Checklist" type="tip">
          Before heading to Revelwood: All 5 core NPCs rescued (Blacksmith, Alchemist, Hunter, Carpenter, Farmer) + Assistant | Ancient Spire climbed | All Springlands Elixir Wells cleared | 10+ Shroud Roots destroyed | Character Lv 10+ | Flame Lv 2 | 30+ skill points | Iron-tier weapons/armor | 200+ arrows | Health potions stockpiled | Glider + Grappling Hook equipped
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'revelwood',
    title: 'Part III: Revelwood',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Lv 10-15 — Climb Revelwood Spire, explore Pikemead, defeat Fell Wispwyvern.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Revelwood is a dense forest biome where the world opens up. You'll face tougher enemies, explore the capital 
          <strong className="text-yellow-400"> Pikemead's Reach</strong>, and defeat the <strong className="text-red-400">Fell Wispwyvern</strong> 
          to upgrade your Flame Altar to Level 3.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Enter Revelwood</h3>
        <Step num="1" title="Build a Forward Altar" desc="Head north from Springlands. Place a Flame Altar at the border between biomes. This gives you a respawn point and staging area for Revelwood exploration." />
        <Step num="2" title="Climb the Revelwood Spire" desc="First priority in any new biome. The Spire reveals all POIs and establishes fast travel. Requires Grappling Hook for vertical sections. Claim the Spark at the top." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: New Crafting Stations</h3>
        <Step num="3" title="Get the Spindle & Crucible" desc="Explore the area around the Spire. Find the Spindle for thread crafting and the Crucible for metal processing. These unlock better gear recipes." />
        <Step num="4" title="Craft Copper Gear" desc="Mine Copper Ore (found near the Spire). Smelt into Copper Bars. Craft Copper-tier weapons and armor — significant upgrade from Iron." />
        <Step num="5" title="Craft Advanced Glider" desc="At the Carpenter, upgrade from Basic to Advanced Glider (Lv 10 required). Range increases from 100% to 150%, speed from 10 to 15." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Explosive Arrows</h3>
        <Step num="6" title="Unlock Explosive Arrows" desc="The Alchemist teaches you to craft Explosive Arrows. These deal AOE fire damage and are game-changing for clearing groups and Shroud Roots." />
        <Step num="7" title="Craft a Stockpile" desc="Make at least 50 Explosive Arrows. They require Shroud Spores and other materials. Farm Shroud Spores from Fell enemies at night." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Explore Pikemead's Reach</h3>
        <Step num="8" title="Enter the Capital" desc="Pikemead's Reach is a massive ruined castle. Multiple quests, 2 Shroud Roots, a boss, and many loot chests. Place a Flame Altar just outside before entering." />
        <Step num="9" title="Clear the Roots" desc="There are 2 Shroud Roots inside Pikemead. Use Explosive Arrows to clear groups and destroy spawners first. Each root grants +3 skill points." />
        <Step num="10" title="Loot Everything" desc="Silver and gold chests are scattered throughout Pikemead. The Fell Commander Bow (legendary) has a chance to drop from a gold chest here." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 5: Fell Wispwyvern Boss</h3>
        <Step num="11" title="Reach The Pike" desc="The Fell Wispwyvern is at The Pike, a tower above Pikemead's Reach. Climb or glide to the entrance." />
        <Step num="12" title="Prepare for the Fight" desc="Bring: Health Potions (10+), Explosive Arrows (50+), food buffs active, fire resistance gear if available. This is a significant difficulty spike." />
        <Step num="13" title="Boss Strategy" desc="The Wispwyvern flies and dive-bombs. Use fire arrows for bonus damage. Dodge the dive attacks (roll sideways). When it lands, unload with melee or Explosive Arrows. Phase 2 adds Shroud projectiles — keep moving." />
        <Step num="14" title="Claim the Head" desc="Defeating the Wispwyvern drops its head — the material needed for Flame Altar Level 3. Also drops Legendary Runes and Shroud Cores." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 6: Strengthen the Flame</h3>
        <Step num="15" title="Upgrade to Flame Lv 3" desc="Teleport back to base. Use the Wispwyvern Head + other materials to upgrade your Flame Altar to Level 3. Shroud time increases to 7 minutes. Max altars: 6." />
        <Step num="16" title="Get Masonry Tools" desc="Complete the quest that leads to Masonry Tools. This unlocks stone block crafting and refined building materials." />
        <Step num="17" title="Craft a Water Well" desc="At the Carpenter, craft a Water Well (requires bucket first). This provides water for farming and crafting at your base." />

        <InfoBox title="Revelwood Priority Order" type="tip">
          1) Climb Revelwood Spire (reveals map) 2) Get Spindle + Crucible (crafting upgrades) 3) Craft Copper gear 4) Get Explosive Arrows (game-changer) 5) Explore Pikemead (loot + roots) 6) Defeat Fell Wispwyvern (Flame Lv 3) 7) Upgrade Flame before pushing to Blackmire
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'blackmire',
    title: 'Part IV: Blackmire',
    icon: <Map className="w-5 h-5" />,
    summary: 'Lv 13-15 — Navigate the swamp, rescue the Bard, clear Shroud Roots, get Eternal Frost Arrows.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Blackmire is the northwestern swamp sub-region of Revelwood. Dense trees, jungle-like environment, 
          and the home of the <strong className="text-pink-400">Bard</strong> NPC. This short section bridges Revelwood and the Nomad Highlands.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: The Passage</h3>
        <Step num="1" title="Enter Blackmire" desc="Travel northwest from Revelwood Spire. The terrain becomes swampy — dense trees, shallow water, and tougher enemies (Lv 13-15)." />
        <Step num="2" title="Climb Blackmire Spire" desc="Find and climb the Blackmire Ancient Spire. Short climb through swamp canopy. Unlocks fast travel for the region." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Rescue the Bard</h3>
        <Step num="3" title="Find the Bard's Prison" desc="The Bard is trapped deep within a Blackmire dungeon. Fight through Vukah and Fell enemies. The dungeon has poison traps — bring health potions." />
        <Step num="4" title="Rescue the Bard" desc="Open the prison pod. The Bard unlocks musical instruments and party buffs. Playing music near your base adds +2 minutes to the Rested buff." />
        <Step num="5" title="Summon at Base" desc="Use the Summoning Staff to place the Bard in your base. Build a designated music corner for maximum comfort." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Eternal Frost Arrows</h3>
        <Step num="6" title="Unlock Frost Arrows" desc="In Blackmire, you unlock the recipe for Eternal Frost Arrows. These slow enemies on hit — essential for fast enemies like the Vukah." />
        <Step num="7" title="Clear Shroud Roots" desc="Blackmire has several Shroud Roots. Use Explosive Arrows to deal with the dense enemy groups. Each root = +1 skill point." />
        <Step num="8" title="Farm Materials" desc="Collect: Mint Mushroom Meat (from green mushrooms), Shroud Adhesive (from tentacles), Ammonia Glands (from Giant Red Mushroom enemies). These are crafting staples for later." />

        <InfoBox title="Blackmire Tips" type="tip">
          Blackmire is a short section — don't overstay. Priority: 1) Rescue Bard 2) Climb Spire 3) Clear roots 4) Farm unique materials (Mushroom Meat, Adhesive). Once done, head east to the Nomad Highlands.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'nomad-highlands',
    title: 'Part V: Nomad Highlands',
    icon: <Sun className="w-5 h-5" />,
    summary: 'Lv 15-20 — Tanning Station, Dragon Sword, Collector quest, prepare for Kindlewastes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Nomad Highlands are sun-bleached limestone plateaus with ancient towers. The difficulty spikes here — 
          Vukah are tough, and the environment is harsher. You'll get the <strong className="text-[var(--text-gold)]">Dragon Sword</strong>, 
          unlock the <strong className="text-cyan-400">Collector</strong>, and prepare for the desert.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Tanning Station & Dragon Sword</h3>
        <Step num="1" title="Enter the Highlands" desc="East of Revelwood. Requires Flame Level 3. Build a forward Flame Altar near the Pillars of Creation." />
        <Step num="2" title="Get the Tanning Station" desc="Complete the quest 'In Need of a Tanning Station.' The station is in a hole/chamber in the ground. Process animal hides into Leather." />
        <Step num="3" title="Claim the Dragon Sword" desc="In a deep hole near a Flame Shrine, there's a Gold Chest containing the Dragon Sword. This replaces your current sword — a major weapon upgrade." />
        <Step num="4" title="Gather Sugarcane & Herbs" desc="Loot Sugarcane, Rooibos, Sage Leaves, Bell Pepper, and Aloe from the highlands. These are used in cooking and alchemy." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: New Armor & Flame Upgrade</h3>
        <Step num="5" title="Craft New Armor" desc="With the Tanning Station and Loom, craft the next tier of armor. You'll need Dried Fur (from the Drying Rack) and Linen." />
        <Step num="6" title="Strengthen the Flame" desc="Find Flame Shrines and claim Sparks. Upgrade your Flame Altar toward Level 4." />
        <Step num="7" title="Get Smithing Tools" desc="Quest 'The Blacksmith's Request' leads you to Jasper Isles. Find the Smithing Tools in a gold chest on a ledge below the bridge." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: The Collector</h3>
        <Step num="8" title="Start the Collector Quest" desc="The Alchemist points you toward the Collector. This quest leads to a Hollow Halls dungeon." />
        <Step num="9" title="Rescue Alden Crowley" desc="Fight through the Hollow Halls to find the Collector's prison. Rescue Alden Crowley. He crafts mystical furniture with high comfort values." />
        <Step num="10" title="Upgrade Comfort" desc="The Collector's furniture (Grandfather Clock, mystical chairs) has the highest comfort values in the game. Place them in your shelter for longer Rested buffs." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Clear Wells & Prepare</h3>
        <Step num="11" title="Clear Highlands Elixir Wells" desc="There are 4 Elixir Wells in the Nomad Highlands. Each grants +3 skill points. Use Explosive Arrows for the dense Vukah groups." />
        <Step num="12" title="Find Gem Forges" desc="Locate the Gem Forge in the highlands. Used to insert, extract, and upgrade gems in weapon sockets. Max gem level here: Lv 20-22." />
        <Step num="13" title="Farm for the Desert" desc="Stockpile: Iron Ore (for steel crafting), Leather, Linen, Health Potions, Food. You'll need extensive supplies for Kindlewastes." />

        <InfoBox title="Nomad Highlands Checklist" type="tip">
          Before entering Kindlewastes: Character Lv 20+ | Flame Lv 4 | Dragon Sword equipped | New armor set (Linen/Leather) | Smithing Tools placed | Collector rescued | Tanning Station active | All 4 Elixir Wells cleared | Health potions (15+) | Explosive Arrows (100+)
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'kindlewastes',
    title: 'Part VI: Kindlewastes',
    icon: <Star className="w-5 h-5" />,
    summary: 'Lv 20-30 — Mine Iron, defeat Fell Sicklescythe, clear Sun Temples, prepare for Albaneve.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Kindlewastes is a harsh sun-blasted desert split by the Shroud. This is the mid-to-late game grind region 
          where you finalize your build identity. <strong className="text-red-400">Iron Ore</strong> is the key resource, 
          and the <strong className="text-red-400">Fell Sicklescythe</strong> is the first serious gear-check boss.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Spire & Iron Mining</h3>
        <Step num="1" title="Enter Kindlewastes" desc="Requires Flame Level 4. Build a forward Flame Altar at the border." />
        <Step num="2" title="Climb the Spire" desc="First priority — climb the Kindlewastes Ancient Spire for map reveal and fast travel." />
        <Step num="3" title="Mine Iron at Ternion Mine" desc="Ternion Mine is your first major Iron source. Mine until the vein is depleted (respawns in 30 min)." />
        <Step num="4" title="Smelt Iron Bars" desc="Teleport back to base. Use the Smelter to convert Iron Ore into Iron Bars. This unlocks Iron-tier crafting." />
        <Step num="5" title="Craft Iron Tools" desc="Make Iron Pickaxe and Iron Axe. Delete the old ones — these are major upgrades." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Fell Sicklescythe Boss</h3>
        <Step num="6" title="Find the Boss" desc="The Fell Sicklescythe lurks in a cavern in the Kindlewastes Shroud. This is a level 25 encounter — the first real gear check." />
        <Step num="7" title="Boss Strategy" desc="18,000 HP. Throws shurikens (block with shield) and skull torpedoes (Blink sideways to dodge). Close quarters make this tough. Use Iron Arrows and Explosive Arrows. Medium armor minimum." />
        <Step num="8" title="Claim the Head" desc="Defeating the Sicklescythe drops its head — required for Flame Altar Level 5. Also drops Shroud Crystals and high-tier crafting materials. Don't forget the Gold Chest!" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Sun Temples & More Wells</h3>
        <Step num="9" title="Clear Sun Temples" desc="3 Sun Temples in Kindlewastes contain legendary weapon caches. The Sword of Radiance and Sun Axe are found here. Each temple has puzzle locks — solve them for the chests." />
        <Step num="10" title="Clear Remaining Wells" desc="4 Elixir Wells in Kindlewastes. Enemies are Lv 20-27. Each clear = +3 skill points." />
        <Step num="11" title="Mine More Iron" desc="Ridgeback Mine is the second major Iron source. Better yields but harder enemies. Ore veins respawn every 30 minutes." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Prepare for Albaneve</h3>
        <Step num="12" title="Craft Steel Gear" desc="With abundant Iron, craft Steel-tier weapons and armor. This is the minimum for Albaneve Summits." />
        <Step num="13" title="Stockpile Resources" desc="Gather: Saffron (desert flowers), Sulfur (yellow rocks), Sandstone, Salt. Also craft 200+ Iron/Steel Arrows." />
        <Step num="14" title="Upgrade Flame to Lv 5" desc="Use the Sicklescythe Head + materials to upgrade Flame Altar to Level 5. Shroud time: 9 minutes." />

        <InfoBox title="Kindlewastes Tips" type="tip">
          Priority: 1) Mine Iron extensively ( you'll need hundreds of bars) 2) Defeat Fell Sicklescythe (Flame Lv 5) 3) Clear all 3 Sun Temples (legendary gear) 4) Clear all 4 Elixir Wells (skill points) 5) Stockpile Saffron, Sulfur, Sandstone. This is the longest grind section — expect to spend significant time here.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'albaneve',
    title: 'Part VII: Albaneve Summits',
    icon: <Snowflake className="w-5 h-5" />,
    summary: 'Lv 30-40 — Frozen frontier, Fell Cyclops, endgame armor, Fell Dragon Youngling boss.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Albaneve Summits is the frozen alpine endgame region added in the <strong className="text-cyan-400">Souls of the Frozen Frontier</strong> update. 
          Dynamic weather, dragon territory, and the hardest bosses. The <strong className="text-red-500">Fell Dragon Youngling</strong> atop 
          Howling Peak is the canonical final boss of the main questline.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Enter the Summit</h3>
        <Step num="1" title="Reach Albaneve" desc="Requires Flame Level 5. The pass is north of Kindlewastes. Dynamic weather — the higher you climb, the colder it gets." />
        <Step num="2" title="Get Frost Resistance" desc="Frost Resistance is MANDATORY. Sources: Bulwark of the North armor set, frost resistance rings, Beef Stew (Raw Fatty Meat + Eggs + Tomatoes + Frizzy Goat Milk), Hunter's Pocket Heater." />
        <Step num="3" title="Climb North & South Spires" desc="Two Ancient Spires in Albaneve. Both essential for fast travel and map reveal. The North Spire requires Flame Level 6 to reach." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Endgame Armor</h3>
        <Step num="4" title="Farm Silver Ore" desc="Silver veins are found throughout Albaneve. Smelt into Silver Bars for the best armor in the game." />
        <Step num="5" title="Craft Endgame Armor" desc="You'll need: 128 Linen, 16 Leather, Silver Bars, Obsidian. The full set provides massive defense and frost resistance." />
        <Step num="6" title="Get Obsidian & Amethyst" desc="Mine Obsidian (black glass-like rocks) and Amethyst (purple crystals). Both are required for Flame Altar Level 8 upgrade." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Fell Cyclops</h3>
        <Step num="7" title="Find the Frozen Cyclops" desc="A Shroud-corrupted Cyclops guards a frozen Elixir Well. Its eye beam freezes you solid. Fire resistance REQUIRED." />
        <Step num="8" title="Boss Strategy" desc="Dodge the eye beam at all costs — getting frozen = death. Use fire-enchanted weapons. Attack from the sides. Co-op recommended. Drops Flame Altar Level 6 material." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Weapon Farming</h3>
        <Step num="9" title="Farm Hollow Halls" desc="Albaneve Hollow Halls is a single large chamber with elite enemies. Excellent XP and legendary loot. Gold chests respawn every 30 minutes (post-Update 7)." />
        <Step num="10" title="Get Legendary Weapons" desc="Farm for the Avalanche Staff (mage) or Forsaken Bow (ranger). These are the best weapons before the true endgame." />
        <Step num="11" title="Clear Remaining Roots" desc="Destroy all remaining Shroud Roots in Albaneve. With high-level gear, these are quick skill points." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 5: Fell Dragon Youngling — Final Boss</h3>
        <Step num="12" title="Prepare for the Fight" desc="Before attempting: Full legendary armor set | Health Potions (20+) | Explosive Arrows (200+) | Fire resistance maxed | Food buffs (3-4 slots) | Co-op team (highly recommended) | Flame Altar Level 7 minimum" />
        <Step num="13" title="Reach Howling Peak" desc="The highest point in Embervale. Climb/glided to the summit. Place a Flame Altar at the base as a respawn point." />
        <Step num="14" title="Phase 1: Ground Combat" desc="50,000 HP. The Dragon uses melee claw attacks and fire breath. Dodge roll is essential. Stay at its flanks — the tail is less dangerous than the head." />
        <Step num="15" title="Phase 2: Flight & Meteors" desc="At 60% HP, the Dragon takes flight. Meteors rain down — watch for red circles on the ground. Use ranged attacks (bow/magic) while it flies." />
        <Step num="16" title="Phase 3: Enrage" desc="At 25% HP, the Dragon enrages. Attack speed increases, fire breath becomes a continuous sweep. Use ALL consumables. Burn it down before it burns you." />
        <Step num="17" title="Claim Victory" desc="Defeating the Fell Dragon Youngling completes the main questline. Drops: Dragon Head (Flame Altar Lv 8), 5x Shroud Cores, Legendary Runes, Legendary Weapon (chance)." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 6: Upgrade to Flame Lv 8</h3>
        <Step num="18" title="Gather Materials" desc="Flame Altar Level 8 requires: 50 Sparks, 50 Obsidian, 50 Silver Bars, 50 Mauveine, 50 Wolfsbane, 50 Amethyst, Fell Dragon Youngling Head. Crafting Mauveine is the most time-intensive step." />
        <Step num="19" title="Upgrade the Altar" desc="Teleport back to base. Upgrade your Flame Altar to Level 8. Shroud time: 12 minutes. This unlocks Veilwater Basin access." />
        <Step num="20" title="Clean Up Quest Log" desc="With the main quest done, now is a great time to: expand your base, plant new fields, complete remaining side quests, get a second cat, complete Cyclops Skeleton collection." />

        <InfoBox title="Albaneve Survival Rules" type="warning">
          1) Frost Resistance is NOT optional — hypothermia kills in seconds 2) +1 Frost Resistance = 1 min 30 sec safe exploration 3) Check frost timer every minute at high altitude 4) If timer runs out, quit to menu immediately (resets position safely) 5) Co-op is highly recommended for the Dragon 6) Farm Hollow Halls for legendary gear BEFORE attempting the Dragon
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'veilwater',
    title: 'Part VIII: Veilwater Basin',
    icon: <Droplets className="w-5 h-5" />,
    summary: 'Lv 35-45 — Tropical endgame, swimming/diving, fishing, Hydrak Dal, Flame Lv 9.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Veilwater Basin is the true endgame biome added in the <strong className="text-blue-400">Wake of the Water</strong> update. 
          Tropical lakes, dynamically simulated water, swimming/diving mechanics, and the final boss 
          <strong className="text-teal-400"> Hydrak'Dal</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Phase 1: Enter the Basin</h3>
        <Step num="1" title="Unlock Veilwater" desc="Requires Flame Altar Level 8. The entrance is from western Albaneve." />
        <Step num="2" title="Reach Driftwood Wake" desc="The first settlement in Veilwater. Use Updraft to glide into the town. Read all notes on billboards for quests." />
        <Step num="3" title="Place a Flame Altar" desc="Place your Altar on the outskirts of Driftwood Wake. This is your staging area for the entire basin." />
        <Step num="4" title="Rescue Captain Fontane (Angler)" desc="Craft a bed and summon the Fisher NPC. He unlocks fishing rod crafting, bait recipes, and the fishing system. Accept all his quests." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 2: Swimming & Diving Gear</h3>
        <Step num="5" title="Craft Swimfins" desc="The Fisher teaches you to craft Swimfins. These increase swim speed dramatically. Essential for basin exploration." />
        <Step num="6" title="Get the Diving Helmet" desc="Extends underwater time. Allows reaching sunken temples and ruins that are too deep for normal swimming." />
        <Step num="7" title="Craft a Mining Sieve" desc="New item that lets you sift underwater ground for rare resources: pearls, gold, and other riches. Keep it in your hotbar." />
        <Step num="8" title="Craft Grilled Fish" desc="Grilled Lakehopper and Grilled Shimmerfin increase Maximum Oxygen — essential for deep dives." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 3: Basin Exploration</h3>
        <Step num="9" title="Climb the Basin Spire" desc="The Spire is accessed through underwater sections. Sprint-swim (hold Shift) through deep water to reach it. The puzzle involves levers and buttons." />
        <Step num="10" title="Gather Aquamarine" desc="Mine blue Aquamarine veins along the shore and underwater. Required for Flame Altar Level 9." />
        <Step num="11" title="Collect Passionflower" desc="Passionflower ONLY spawns at night. It is the rarest material for Flame Lv 9. Every time night falls, go hunting for it." />
        <Step num="12" title="Mine Pearls" desc="Use the Mining Sieve at Clamshell Beds (shallow waters) or kill Drak for Pearls. Required for Flame Lv 9." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 4: Drak & Underwater Combat</h3>
        <Step num="13" title="Craft Drak Soulward Flask" desc="At the Alchemist: 10 Drak Scales + 10 Drak Teeth + 10 Drak Claws + 10 Drak Blood. This protects against Drak-specific debuffs." />
        <Step num="14" title="Farm Drak Materials" desc="Drak camps are throughout the basin. Drak are amphibious — they can attack underwater but you cannot fight back underwater. Lure them to land." />
        <Step num="15" title="Explore Sunken Temples" desc="Underwater ruins with puzzles and legendary loot. Diving Helmet essential. Watch oxygen meter carefully." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 5: Hydrak'Dal — Final Boss</h3>
        <Step num="16" title="Prepare" desc="Before attempting: Flame Altar Lv 8 | Drak Soulward Flask | Swimfins + Diving Helmet | Golden Steel Arrows | Frost Resistance gear | Full consumables | Co-op team STRONGLY recommended" />
        <Step num="17" title="Reach Drak'Dal Temple" desc="The temple is in central Veilwater. Fight through Drak defenders to reach the inner chamber." />
        <Step num="18" title="Boss Strategy" desc="Hydrak'Dal is a massive draconic entity. Uses earthquake attacks (yellow glow beneath you = dodge), whirlwind AoE, and summons crocodile-like Drak adds. Range-kill the adds first, then focus on the boss." />
        <Step num="19" title="Claim the Head" desc="Defeating Hydrak'Dal drops its head — the final material for Flame Altar Level 9. Also drops the Underwater Grappling Hook." />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Phase 6: Flame Level 9</h3>
        <Step num="20" title="Gather Final Materials" desc="Flame Lv 9 requires: 60 Sparks, 60 Gold Ore, 60 Green Vitriol Dust, 30 Passionflower, 60 Aquamarine, 30 Pearl, 1 Hydrak'Dal Head." />
        <Step num="21" title="Max Your Flame" desc="Upgrade to Flame Altar Level 9 — the current maximum. Shroud time: ~15 minutes. Congratulations, you have completed the main progression of Enshrouded." />

        <InfoBox title="Veilwater Tips" type="tip">
          1) Drowning is the #1 cause of death in Veilwater — eat grilled fish for +Oxygen before deep dives 2) Passionflower ONLY spawns at night — plan farming routes accordingly 3) Drak cannot be fought underwater — always lure them to land 4) The Spire puzzle requires sprint-swimming — hold Shift the entire way 5) Co-op makes Hydrak'Dal infinitely easier
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'endgame',
    title: 'Part IX: Endgame & Beyond',
    icon: <Crown className="w-5 h-5" />,
    summary: 'Post-main quest — legendary farming, build perfection, 100% completion.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Defeating Hydrak'Dal and reaching Flame Altar Level 9 completes the main progression, but Enshrouded's 
          true endgame is just beginning. Here's everything you can pursue after the main questline.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Legendary Gear Farming</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Sun Temples (Kindlewastes):</strong> Sword of Radiance, Sun Axe — respawn every 30 min</li>
            <li>• <strong>Hollow Halls (Albaneve):</strong> Avalanche Staff, Forsaken Bow — best mage/ranger weapons</li>
            <li>• <strong>Fell Dragon Youngling:</strong> Re-farmable for legendary drops</li>
            <li>• <strong>Hydrak'Dal:</strong> Underwater Grappling Hook + endgame materials</li>
            <li>• <strong>Gold Chests:</strong> All over Embervale — 30-minute respawn timer post-Update 7</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">100% Completion Checklist</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)]">
            <div><strong className="text-[var(--text-primary)]">Flame:</strong> Altar Level 9</div>
            <div><strong className="text-[var(--text-primary)]">Level:</strong> Character Level 45</div>
            <div><strong className="text-[var(--text-primary)]">Spires:</strong> All 8 climbed</div>
            <div><strong className="text-[var(--text-primary)]">Wells:</strong> All 19 cleared</div>
            <div><strong className="text-[var(--text-primary)]">Roots:</strong> All 39 destroyed</div>
            <div><strong className="text-[var(--text-primary)]">NPCs:</strong> All 10 rescued</div>
            <div><strong className="text-[var(--text-primary)]">Bosses:</strong> 11 world bosses + Hydrak'Dal defeated</div>
            <div><strong className="text-[var(--text-primary)]">Halls:</strong> All 6 Hollow Halls cleared</div>
            <div><strong className="text-[var(--text-primary)]">Shrines:</strong> All 63 activated</div>
            <div><strong className="text-[var(--text-primary)]">Gear:</strong> Full legendary set</div>
            <div><strong className="text-[var(--text-primary)]">Base:</strong> Max Comfort (69)</div>
            <div><strong className="text-[var(--text-primary)]">Collectibles:</strong> All 50+ found</div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Build Perfection</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Max Comfort Base</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Build a shelter with all high-comfort furniture (Stone Fireplace 8, Chandelier 7, Canopy Bed 6, etc.) for the maximum 69 Comfort and 1h 14m Rested buff.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Farm Optimization</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Maximize farm plots with Fertilized Farm Soil. Automate water with Springs and Dams. Grow every crop type.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Animal Collection</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Tame all 8 animal species. Breed them in a Barn. Collect all 6 unique pets from questlines.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Seasonal Content</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Enshrouded receives <strong>regular content updates</strong> (like Wake of the Water)</li>
            <li>• New biomes, bosses, enemies, and mechanics are added over time</li>
            <li>• Seasonal events may appear with time-limited rewards</li>
            <li>• Check the <strong>Steam community page</strong> and <strong>official Enshrouded blog</strong> for update news</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Unique Legendary Weapons</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Wailing Blade (1H Sword)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Found in a cave in Springlands, inside the Scavengers Stash. Early-game legendary with high damage.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Fell Commander Bow</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Dropped by the Fell Thunderbrute boss on the Ancient Bridge. 12 Power, 0.6s Draw Speed, +7% Arrow Speed.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Shroud Weaver (Staff)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Found near the Sun Temple in Kindlewastes. Enter the mineshaft east of the temple, jump to a hidden platform.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Jezmina's Apotheosis (Axe)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Drop from the Vukah Brawler at Vukah Ceremony Hill. 187 Damage. Not guaranteed — may require multiple kills.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-cyan-400 mb-1">Avalanche Staff / Forsaken Bow</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Endgame legendary weapons from Albaneve Hollow Halls. Best mage/ranger weapons before true endgame.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Armor Progression Path</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Armor</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Level</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Source</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Ragged Set</td><td>1</td><td>7 Cordage + 9 Rags</td><td>Crafting</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Adventurer Set</td><td>3</td><td>Crafted</td><td>Chests/World</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Rising Fighter Set</td><td>8</td><td>Metal Plates from Forge</td><td>Blacksmith</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Copper Set</td><td>10</td><td>Copper Bars</td><td>Blacksmith</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Leather Set</td><td>12</td><td>Leather from Tanning Station</td><td>Hunter</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Iron Set</td><td>20</td><td>Iron Bars</td><td>Blacksmith</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Steel Set</td><td>25</td><td>Steel Bars</td><td>Blast Furnace</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Silver Set</td><td>30</td><td>Silver Bars</td><td>Blacksmith</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Bulwark of the North</td><td>30</td><td>Albaneve materials</td><td>Crafting</td></tr>
              <tr><td className="py-1.5">Endgame Legendary</td><td>35+</td><td>Various</td><td>Bosses/Chests</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Congratulations, Flameborn" type="tip">
          You have pushed back the Shroud, defeated the Fell Dragon Youngling, conquered Hydrak'Dal, and maxed your Flame Altar. Embervale is yours to explore, build, and defend. Whether you pursue 100% completion, build the ultimate base, or wait for the next content update — your journey as a Flameborn has only just begun. The world is vast. Go conquer it.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'side-quests',
    title: 'Side Quests Guide',
    icon: <ScrollText className="w-5 h-5" />,
    summary: 'Major side quests — rescue quests, crafting quests, exploration quests, and their rewards.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Beyond the main questline, Enshrouded features <strong className="text-[var(--text-primary)]">dozens of side quests</strong> 
          that unlock NPCs, crafting recipes, legendary gear, and skill points. Quests are color-coded: 
          <strong className="text-[var(--text-gold)]"> Gold</strong> = main quests, <strong className="text-blue-400"> Blue</strong> = NPC progression, 
          <strong className="text-green-400"> Green</strong> = easy optional content.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">NPC Rescue Quests (8 Total)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Find the Sleeping Survivor (Blacksmith)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Springlands Ancient Vault | <strong>Unlocks:</strong> Blacksmith NPC, Glider, Grappling Hook, Forge | <strong>Priority:</strong> HIGHEST — do this first</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Powerful Alchemy (Alchemist)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Springlands Ancient Vault | <strong>Unlocks:</strong> Alchemist NPC, Health Potions, Alchemy Station | <strong>Trigger:</strong> After climbing Spire + Flame Altar interaction</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Hunter Becomes the Hunted (Hunter)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Low Meadows Ancient Vault | <strong>Unlocks:</strong> Hunter NPC, Tanning Station, Loom, Bow crafting</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Carpentry Assistance (Carpenter)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Low Meadows Ancient Vault | <strong>Unlocks:</strong> Carpenter NPC, Kiln, Table Saw, Masonry Tools</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Growing Stronger Together (Farmer)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Springlands Ancient Vault | <strong>Unlocks:</strong> Farmer NPC, Cooking Station, Seed Bed, Oven, Beehive</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">The Melody of Mercy (Bard)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Blackmire dungeon | <strong>Unlocks:</strong> Bard NPC, musical instruments, +2 min Rested buff</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-cyan-400 mb-1">The Collector's Call (Collector)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Hollow Halls dungeon (quest from Alchemist) | <strong>Unlocks:</strong> Collector NPC, Ectoplasm Press, high-comfort furniture</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-teal-400 mb-1">Angler's Catch (Angler)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Location:</strong> Veilwater Basin Ancient Vault | <strong>Unlocks:</strong> Angler NPC, fishing rod, bait recipes, fishing system</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Key Crafting Quests</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Clear the Elixir Well</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Giver:</strong> Blacksmith | <strong>Reward:</strong> Shroud Core, Flame Lv 2 material, blue/purple gear | <strong>Location:</strong> Springlands</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">The Blacksmith's Request (Smithing Tools)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Giver:</strong> Blacksmith | <strong>Reward:</strong> Smithing Tools | <strong>Location:</strong> Jasper Isles</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">In Need of a Tanning Station</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Giver:</strong> Hunter | <strong>Reward:</strong> Tanning Station | <strong>Location:</strong> Nomad Highlands (hole in ground)</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">The Alchemist's Rumors (Improved Grappling Hook)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Giver:</strong> Alchemist | <strong>Reward:</strong> Improved Grappling Hook recipe | <strong>Location:</strong> Revelwood</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Exploration Quests</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">A Story of Fire / A Story of Rot</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Reward:</strong> Reveals Flame Shrine and Shroud Root locations on map | <strong>Location:</strong> Springlands Obelisks</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Ancient Spire Puzzles (8 Total)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Reward:</strong> Fast travel + Spark + map reveal per Spire | Each Spire has unique puzzle rooms with traps and grapple points</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Hollow Halls (6 Total)</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Reward:</strong> Legendary loot, unique materials (Ectoplasm, Toxic Slime, Giant Bones), 3 skill points each</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Boss Quests</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Slaying the Corrupted Beast</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Target:</strong> Fell Dragon Youngling | <strong>Reward:</strong> Dragon Head (Flame Lv 8), Legendary Weapon | <strong>Location:</strong> Howling Peak, Albaneve</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Vengeance</h4>
            <p className="text-[10px] text-[var(--text-secondary)]"><strong>Target:</strong> Hydrak'Dal | <strong>Reward:</strong> Hydrak'Dal Head (Flame Lv 9), Underwater Grappling Hook | <strong>Location:</strong> Veilwater Basin</p>
          </div>
        </div>

        <InfoBox title="Side Quest Priority" type="tip">
          1) Rescue ALL 8 NPCs ASAP — they unlock core crafting systems 2) Clear all Elixir Wells for skill points 3) Do Hollow Halls for legendary gear + unique materials 4) Climb every Ancient Spire for map reveal 5) Read all Obelisks for POI locations 6) Save boss heads for Flame upgrades 7) Complete crafting quests as they unlock — many gate progression
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'tips-tricks',
    title: 'Tips & Tricks',
    icon: <Lightbulb className="w-5 h-5" />,
    summary: '18 essential tips — combat, crafting, base building, exploration, progression, and pro tips.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          These <strong className="text-[var(--text-primary)]">18 essential tips</strong> are compiled from PinDrop.gg's community guide, 
          PineHosting's beginner guide, and KeenGamer's advanced tips. Master these and you'll avoid the mistakes 
          90% of new players make.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Combat Tips (4)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Tip 1: Parry over dodge against humanoids</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Humanoid enemies (Scavengers, Vukah) have slow, telegraphed attacks that are easy to parry. Parrying opens a counter-attack window and costs less stamina than multiple dodges.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Tip 2: Match damage type to enemy resistance</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Fell = weak to Fire (+30%). Shroud Entities = weak to Shroud magic. Fast enemies = weak to Ice (slows). Check your Bestiary before fights.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Tip 3: Carry two weapon types</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Slot a melee weapon AND a ranged weapon. Some enemies are dangerous up close (Fell Monstrosity) while others are hard to melee (Fell Wispwyvern).</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Tip 4: Stamina-regen food beats raw-damage food for solo</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">More stamina = more dodges = more survivability. Solo players should prioritize stamina-regeneration food over pure damage food.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Crafting Tips (4)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Tip 5: Respec is free — try every preset</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Flame Altar respec costs Goo + biome materials. No cooldown, no penalty. Experiment with different builds freely.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Tip 6: Upgrade tiers matter more than rarity</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">An upgraded Common Iron Sword often outperforms a rare un-upgraded one. Focus on upgrading your best-tier gear rather than chasing rarity colors.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Tip 7: Stockpile biome materials before leaving</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Before moving to the next biome, farm 2-3x the materials you think you need. You always need more than expected for crafting.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Tip 8: NPC crafting tier scales with Flame Level</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Higher Flame Level unlocks better recipes from NPCs. Strengthen the Flame before expecting endgame crafting options.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Base Building Tips (3)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Tip 9: Build small bases near every biome border</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Forward Altars at biome borders double as fast-travel anchors + storage hubs. Most under-prepared deaths happen because you ran 10 minutes from your respawn point.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Tip 10: Pin your first base inside a Spire's range circle</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Ancient Spires expand your Flame Altar's buildable range. Building inside the circle gives you maximum area.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Tip 11: Stagger workbenches across multiple bases</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">You don't need every workbench in every base. Put Blacksmith in one, Alchemist in another. Fast-travel between them is free.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Exploration Tips (3)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Tip 12: Climb the Ancient Spire FIRST in every new biome</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Spires reveal Obelisks → Shroud Roots → Flame Shrines on your map. Climbing the Spire first makes everything else in the biome faster to find.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Tip 13: Watch the glider's stamina meter</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Long glides drain stamina. Running out mid-glide drops you. Stockpile stamina-regen food before big traversals (Albaneve + Veilwater).</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Tip 14: Shroud Roots reveal POIs in their radius</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Destroying a Shroud Root fills in the surrounding map with chests, altars, and NPC routes. Prioritize roots over random enemy killing if you're a completionist.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Progression Tips (4)</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-400">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Tip 15: Don't out-level the biome</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Stay within 5 levels of the biome's recommended band. Over-leveling wastes the XP curve; under-leveling means one-shot deaths.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-400">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Tip 16: Hollow Halls drop unique end-game materials</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Ectoplasm, Toxic Slime, Giant Bones — only from Hollow Halls. These feed the Collector NPC's endgame crafting. Skip them and you block late-game gear.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-400">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Tip 17: Co-op scales loot but no fight requires a group</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Solo viable everywhere. Co-op = faster Hollow Halls clears + more drops per run. But you can defeat every boss alone with enough preparation.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-400">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Tip 18: Save Goo for Legendary upgrades only</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Goo is the bottleneck material for Legendary upgrade tier. Don't burn it on Common-to-Uncommon upgrades. Stockpile until you've decided which 5-piece set deserves the Legendary roll.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Pro Tips from the Community</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Free Repairs at Workbenches</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Interacting with ANY Workbench repairs ALL your equipped gear and inventory items for FREE. No resources required. Touch your Workbench before every expedition.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Cosmetic Slot Storage Trick</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Cosmetic armor slots can hold actual armor pieces. If your inventory fills while looting, unequip armor into cosmetic slots to free space. Emergency storage!</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Resource Respawn Farming</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Place a Flame Altar near valuable resources. Gather everything, return to main menu, reload. Resources respawn. Works for berries, minerals, even bosses.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Wands for Early Combat</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Wands require NO ammunition (unlike bows). Only consume durability. Keep a wand on your hotbar even if you prefer melee — some enemies are dangerous to approach.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Food Buffs Persist Through Sessions</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Stack long-duration food buffs before logging off. They persist through sessions, so you'll start your next play session with active buffs.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Flame Holders as Checkpoints</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">Flame Holders cost only 5 Stone. Place them as checkpoints during dangerous expeditions. They become respawn points if you die.</p>
          </div>
        </div>

        <InfoBox title="The #1 Rule of Enshrouded" type="warning">
          The worst mistake new players make is <strong>skipping Ancient Spires</strong>. Climb each Spire when entering a new biome — it reveals Obelisks, Shroud Roots, and Flame Shrines on your map, making everything else faster. Every minute spent climbing a Spire saves 30 minutes of wandering aimlessly.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'builds-guide',
    title: 'Builds Guide',
    icon: <Swords className="w-5 h-5" />,
    summary: '4 archetypes, 6 attributes, 15 rated builds — complete build system from PinDrop.gg.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded's <strong className="text-[var(--text-primary)]">skill tree</strong> branches into 4 major archetypes with 
          <strong className="text-[var(--text-primary)]"> 12+ class subtypes</strong>. With 184 total skill points, 
          you can fully master 2-3 trees. This guide covers the 4 archetypes, 6 core attributes, and 
          <strong className="text-[var(--text-gold)]"> 15 community-rated builds</strong> from PinDrop.gg.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">4 Major Archetypes</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Mage (Wizard) — Ranged Magic DPS</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Glass cannon build. High burst damage from range. Requires mana management and positioning.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Key Skills:</strong> Arcane Blast, Meteor, Chain Lightning, Mana Efficiency</div>
              <div><strong>Weapons:</strong> Staff, Wand, Spellbook</div>
              <div><strong>Armor:</strong> Light (robes) — high mana, low defense</div>
              <div><strong>Food:</strong> Mushroom dishes (+Magic Damage), Herbs (+Mana)</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Ranger — Ranged Physical DPS</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">High sustained damage from distance. Mobile and versatile. Best for solo play.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Key Skills:</strong> Multishot, Poison Arrow, Headshot, Stealth</div>
              <div><strong>Weapons:</strong> Bow, Crossbow, Dagger (backup)</div>
              <div><strong>Armor:</strong> Medium (leather) — balanced defense/mobility</div>
              <div><strong>Food:</strong> Vegetables (+Ranged Damage), Liquids (+Stamina)</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Survivor — Tank & Support</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Tank and support role. High survivability, crowd control, team buffs. Essential for co-op.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Key Skills:</strong> Shield Wall, Battle Heal, Taunt, Iron Will</div>
              <div><strong>Weapons:</strong> Sword + Shield, Mace + Shield</div>
              <div><strong>Armor:</strong> Heavy (plate) — maximum defense</div>
              <div><strong>Food:</strong> Meats (+Max Health), Grains (+Melee Damage)</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Warrior — Melee DPS</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Melee bruiser. High damage, close range. Relies on dodging and parrying rather than blocking.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Key Skills:</strong> Whirlwind, Berserker Rage, Heavy Strike, Second Wind</div>
              <div><strong>Weapons:</strong> Greatsword, Greataxe, Dual Wield</div>
              <div><strong>Armor:</strong> Medium/Heavy — damage + survivability balance</div>
              <div><strong>Food:</strong> Grains (+Melee Damage), Meats (+Max Health)</div>
            </div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">6 Core Attributes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Attribute</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Effect</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Best For</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Constitution</td><td>+Max Health, +Health Regen</td><td>All builds (survivability)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Strength</td><td>+Melee Damage, +Carry Weight</td><td>Warrior, Survivor</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Dexterity</td><td>+Ranged Damage, +Crit Chance</td><td>Ranger</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-yellow-400">Endurance</td><td>+Max Stamina, +Stamina Regen</td><td>All builds (quality of life)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Spirit</td><td>+Max Mana, +Mana Regen</td><td>Mage</td></tr>
              <tr><td className="py-1.5 font-bold text-blue-400">Intelligence</td><td>+Magic Damage, +Skill Effectiveness</td><td>Mage</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">15 Community-Rated Builds (PinDrop.gg)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Build</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Archetype</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Rating</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Key Feature</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Arcane Barrage Mage</td><td>Mage</td><td className="text-[var(--text-gold)]">S</td><td>Rapid-fire magic missiles, high burst</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Meteor Storm</td><td>Mage</td><td className="text-[var(--text-gold)]">S</td><td>AoE devastation, best for groups</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Sniper Ranger</td><td>Ranger</td><td className="text-[var(--text-gold)]">S</td><td>Extreme headshot damage, stealth</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Poison Assassin</td><td>Ranger</td><td className="text-yellow-400">A</td><td>Stacking DOT, stealth backstabs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Paladin Tank</td><td>Survivor</td><td className="text-[var(--text-gold)]">S</td><td>Max defense, team healing</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Battle Healer</td><td>Survivor</td><td className="text-yellow-400">A</td><td>Hybrid healing + melee</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Berserker</td><td>Warrior</td><td className="text-[var(--text-gold)]">S</td><td>Glass cannon melee, highest DPS</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Whirlwind Fighter</td><td>Warrior</td><td className="text-yellow-400">A</td><td>AoE melee, crowd control</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Dual Wielder</td><td>Warrior</td><td className="text-yellow-400">A</td><td>Fast attacks, high stagger</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-purple-400">Battlemage</td><td>Mage/Warrior</td><td className="text-yellow-400">A</td><td>Magic + melee hybrid</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-green-400">Trap Master</td><td>Ranger</td><td className="text-yellow-400">B</td><td>Trap-focused, defensive</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-orange-400">Shield Bearer</td><td>Survivor</td><td className="text-yellow-400">A</td><td>Pure tank, max block</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-blue-400">Summoner</td><td>Mage</td><td className="text-yellow-400">B</td><td>Minion-based combat</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-red-400">Juggernaut</td><td>Warrior</td><td className="text-yellow-400">A</td><td>Heavy armor, slow but unkillable</td></tr>
              <tr><td className="py-1.5 font-bold text-green-400">Scout</td><td>Ranger</td><td className="text-yellow-400">B</td><td>Speed-focused, hit-and-run</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">S-Tier Build Details</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Arcane Barrage Mage (S-Tier)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Rapid-fire low-cost spells with mana efficiency. Scales hard with Intelligence.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Core Skills:</strong> Arcane Missile, Mana Stream, Spell Mastery, Quick Cast</div>
              <div><strong>Weapon:</strong> Wand of the Archmage / Avalanche Staff</div>
              <div><strong>Armor:</strong> Archmage Robes (light, high mana)</div>
              <div><strong>Food:</strong> Mushroom Stew (+Magic Damage), Herbal Tea (+Mana)</div>
              <div><strong>Attribute Priority:</strong> Intelligence {'>'} Spirit {'>'} Endurance</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Sniper Ranger (S-Tier)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">One-shot headshots from stealth. Requires positioning and patience.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Core Skills:</strong> Headshot, Stealth, Eagle Eye, Multishot</div>
              <div><strong>Weapon:</strong> Forsaken Bow / Fell Commander Bow</div>
              <div><strong>Armor:</strong> Hunter's Leather (medium, crit bonus)</div>
              <div><strong>Food:</strong> Grilled Vegetables (+Ranged), Stamina Brew</div>
              <div><strong>Attribute Priority:</strong> Dexterity {'>'} Endurance {'>'} Constitution</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Paladin Tank (S-Tier)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Unkillable frontline with team healing. Best for co-op.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Core Skills:</strong> Shield Wall, Battle Heal, Iron Will, Aura of Protection</div>
              <div><strong>Weapon:</strong> Sword + Shield (Bulwark of the North)</div>
              <div><strong>Armor:</strong> Full Plate (max defense)</div>
              <div><strong>Food:</strong> Beef Stew (+Health), Bread (+Melee Damage)</div>
              <div><strong>Attribute Priority:</strong> Constitution {'>'} Strength {'>'} Endurance</div>
            </div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Berserker (S-Tier)</h4>
            <p className="text-[10px] text-[var(--text-secondary)] mb-1">Highest melee DPS in the game. Glass cannon — dodge or die.</p>
            <div className="text-[10px] text-[var(--text-muted)]">
              <div><strong>Core Skills:</strong> Berserker Rage, Whirlwind, Second Wind, Heavy Strike</div>
              <div><strong>Weapon:</strong> Greataxe / Greatsword (Dragon Slayer)</div>
              <div><strong>Armor:</strong> Medium (damage + mobility balance)</div>
              <div><strong>Food:</strong> Meat Platter (+Melee), Stamina Brew</div>
              <div><strong>Attribute Priority:</strong> Strength {'>'} Endurance {'>'} Constitution</div>
            </div>
          </div>
        </div>

        <InfoBox title="Build Selection Tips" type="tip">
          1) Solo play: Ranger or Mage — safest, most self-sufficient 2) Co-op: Paladin Tank (frontline) or Battle Healer (support) 3) First playthrough: Berserker or Sniper — straightforward mechanics 4) Respec freely — try multiple builds before committing 5) The "universal core" (Double Jump, Updraft, Stamina, Battle Heal, Dessert Stomach) costs ~30 points and works with ANY build 6) Max 2-3 trees with 184 points — don't spread too thin
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'flame-altar-guide',
    title: 'Flame Altar Guide',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Complete Flame Level 1-9 upgrade table — every material, boss head, Shroud timer, and farming shortcut.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">The Flame Altar is the heart of progression. <strong className="text-[var(--text-gold)]">Strengthening the Flame</strong> extends your Shroud survival timer, raises the Shroud passage level you can cross, grants attribute bonuses, and increases how many altars you can place. Upgrading is instant once you deliver the materials — the real work is the farming.</p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Strengthen the Flame — Full Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Lv</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Shroud</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Altars</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Passage</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Materials Required</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">1</td><td>5 min</td><td>2</td><td>1</td><td>Starting altar</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">2</td><td>6 min</td><td>4</td><td>2</td><td>5 Resin, 5 Red Mushroom, 5 Bones, 1 Shroud Liquid, 1 Spark, 5 Animal Fur, <strong className="text-red-400">Fell Thunderbrute Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">3</td><td>7 min</td><td>6</td><td>3</td><td>10 Wax, 10 Salt, 10 Shroud Wood, 10 Flintstone, 10 Charcoal, <strong className="text-red-400">Scavenger Matron Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">4</td><td>8 min</td><td>7</td><td>4</td><td>15 Goo, 15 Mycelium, 15 Indigo Plant, 15 Amber, 15 Copper Ore, <strong className="text-red-400">Fell Wispwyvern Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">5</td><td>9 min</td><td>8</td><td>5</td><td>20 Mint Mushroom Meat, 20 Fossilized Bone, 20 Ammonia Gland, 20 Tin Ore, 20 Rooibos, <strong className="text-red-400">Fell Monstrosity Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">6</td><td>10 min</td><td>9</td><td>6</td><td>40 Sulfur, 40 Saffron, 40 Iron Ore, 40 Lapislazuli, 40 Yucca Fruit, <strong className="text-red-400">Fell Sicklescythe Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">7</td><td>11 min</td><td>10</td><td>7</td><td>10 Survivors, 40 Spark, 40 Wool, 40 Gentian, 40 Ice, 40 Granite, 40 Coal, <strong className="text-red-400">Fell Cyclops Head</strong></td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 font-bold text-[var(--text-gold)]">8</td><td>12 min</td><td>10</td><td>8</td><td>12 Survivors, 40 Spark, 40 Obsidian, 40 Silver Bars, 40 Mauveine, 40 Wolfsbane, 40 Amethyst, <strong className="text-red-400">Fell Dragon Youngling Head</strong></td></tr>
              <tr><td className="py-1.5 font-bold text-[var(--text-gold)]">9</td><td>13 min</td><td>10</td><td>9</td><td>14 Survivors, 60 Spark, 60 Gold Ore, 60 Green Vitriol Dust, 30 Passionflower, 60 Aquamarine, 30 Pearl, <strong className="text-red-400">Hydrak&apos;Dal Head</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2 tracking-wider uppercase">Altar Area Track (Base Size)</h4>
          <ul className="space-y-1 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Level 1:</strong> 40×40×40 build volume (default)</li>
            <li>• <strong className="text-[var(--text-primary)]">Level 2:</strong> 80×80×80 — costs 1 Shroud Core</li>
            <li>• <strong className="text-[var(--text-primary)]">Level 3:</strong> 120×120×120 — costs 5 Shroud Cores</li>
            <li>• <strong className="text-[var(--text-primary)]">Level 4:</strong> 160×160×160 — costs 5 Shroud Nexus</li>
          </ul>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Tip: you can also reset skill points at the altar — 1 Rune per point.</p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Material Farming Shortcuts</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Sparks</h4>
            <p className="text-[10px]">Looted from Flame Shrines and Braziers scattered through villages — a quick shrine circuit nets 5-10 per run. You need 40/40/60 for Lv 7/8/9, so start banking early.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Green Vitriol Dust (Lv 9)</h4>
            <p className="text-[10px]">Crafted, not gathered: build the Mill (Blacksmith line) to grind Iron Ore into Iron Dust, then use the Laboratory formula — 3 Sulfur + 2 Iron Dust + 5 Water = 5 Green Vitriol Dust. Sulfur and Iron Ore come from Kindlewastes mines.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-teal-400 mb-1">Pearls (Lv 9)</h4>
            <p className="text-[10px]">Starfish Shores in the southwest Veilwater Basin — 4-5 clams respawn on the beach, each dropping 2-3 Pearls. Server-hop or revisit after respawn timers.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-pink-400 mb-1">Passionflower (Lv 9)</h4>
            <p className="text-[10px]">Night-only spawns with a distinctive pink glow — plan a night circuit along the basin shores. Bring a Shroud Blessing for comfort.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Aquamarine & Gold Ore (Lv 9)</h4>
            <p className="text-[10px]">Both mined in Veilwater — Aquamarine nodes cluster around Dragondream Lake. Bring a high-tier pickaxe and Shroud food for the deep nodes.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-amber-400 mb-1">Coal & Wool (Lv 7)</h4>
            <p className="text-[10px]">Coal: the mine just northwest of the Albaneve Spire (a short hop past Rothstep) has 7+ nodes within 200m. Wool: Farmer&apos;s &quot;Gathering Wool In The Albaneve Summits&quot; chain — tame sheep/goats first.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Boss Head Checklist</h3>
        <p className="text-xs text-[var(--text-muted)] mb-3">Every level from 2 upward needs a boss head — these are your real progression gates. In multiplayer every party member loots the head, so farm bosses together.</p>
        <div className="flex flex-wrap gap-2">
          {['Lv2 Fell Thunderbrute', 'Lv3 Scavenger Matron', 'Lv4 Fell Wispwyvern', 'Lv5 Fell Monstrosity', 'Lv6 Fell Sicklescythe', 'Lv7 Fell Cyclops', 'Lv8 Fell Dragon Youngling', "Lv9 Hydrak'Dal"].map(h => (
            <span key={h} className="px-2.5 py-1.5 rounded-sm text-[10px] font-cinzel font-bold bg-red-400/10 text-red-400 border border-red-400/20">{h}</span>
          ))}
        </div>

        <InfoBox title="Flame Level Strategy" type="tip">
          Never enter a new biome under-leveled on Flame — the passage level literally blocks you from deeper Shroud zones. The efficient loop: enter biome → climb Spire → clear Wells/Roots → kill the local boss for its head → upgrade Flame → push the next biome. Flame 9 also demands 14 survivors, so rescue everyone as you go.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'hollow-halls-guide',
    title: 'Hollow Halls Guide',
    icon: <Castle className="w-5 h-5" />,
    summary: 'All 6 Hollow Halls dungeons — bone keys, magick barriers, bone totems, loot tables, and the Collector loop.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-gold)]">Hollow Halls</strong> are instanced dungeon complexes built for co-op (soloable when over-geared) — and the endgame&apos;s best source of legendary weapons and Collector materials. This guide covers the shared mechanics, then each Halls in progression order.</p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Shared Mechanics</h3>
        <div className="space-y-2">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-cyan-400 mb-1">Magick Barriers & Blue Runes</h4>
            <p className="text-[10px]">Glowing barriers block key doors. Shatter them by collecting the floating blue runes nearby — or by killing the rune-marked mages channeling them. Explore side rooms thoroughly; missing one rune means backtracking the whole floor.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Bone Totems — Kill These First</h4>
            <p className="text-[10px]">Skeleton-spawning totems will flood the room if ignored. The moment you hear rattling, locate the totem (bone pile with a glowing core) and destroy it before engaging anything else.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Beacons & Repair Tables</h4>
            <p className="text-[10px]">Beacons act as in-dungeon checkpoints — activate every one. Repair tables let you fix gear mid-run, so don&apos;t bail out just because a weapon broke.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Ectoplasm Fragments</h4>
            <p className="text-[10px]">Mined from the green-glowing crystals and dropped by scythe-wielding undead. These craft the next biome&apos;s Bone Key and feed the Collector&apos;s Ectoplasm Press — never leave a crystal unmined.</p>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Springlands Hollow Halls (Lv 5-15)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1.5 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Entrance:</strong> southeast of the Springlands Ancient Spire — a red-brick structure built into the ravine rock face. Glide from the spire and look down.</li>
            <li>• <strong className="text-[var(--text-primary)]">Why rush it:</strong> completing it unlocks <strong className="text-cyan-400">Alden Crowley, the Collector</strong> — the endgame crafting NPC.</li>
            <li>• <strong className="text-[var(--text-primary)]">Notable loot:</strong> Silvershot Bow, Bonescourge Mace, Sinister Crescent Staff, Veilrift Axe, Legendary Snakespine Wand, Prayer of the Flame Scroll.</li>
            <li>• <strong className="text-[var(--text-primary)]">Quest:</strong> the Alchemist&apos;s &quot;Explore The Hollow Halls&quot; (needs Farmer&apos;s + Carpenter&apos;s first quests done).</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Revelwood Hollow Halls (Lv 15+)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1.5 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Key:</strong> Revelwood Bone Key — crafted from Ectoplasm Fragments farmed in the Springlands Halls.</li>
            <li>• <strong className="text-[var(--text-primary)]">Boss:</strong> the <strong className="text-red-400">Hollow Cyclops</strong> — arena fight; its head is a Collector prize.</li>
            <li>• <strong className="text-[var(--text-primary)]">Hazards:</strong> poison traps and Fell packs — bring antidotes and AoE.</li>
            <li>• <strong className="text-[var(--text-primary)]">Artifacts:</strong> Dark Crystal Cluster, Large Dark Crystal, Sparkling Dark Crystal.</li>
            <li>• <strong className="text-[var(--text-primary)]">Quest:</strong> starts &quot;Ectoplasm Press For The Collector&quot;.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Nomad Highlands & Kindlewastes Halls (Lv 15-30)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1.5 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Keys:</strong> each biome&apos;s Bone Key, crafted from the previous Halls&apos; fragments.</li>
            <li>• <strong className="text-[var(--text-primary)]">Nomad Highlands artifacts:</strong> Bejeweled, Foreboding & Inscribed Golden Urns.</li>
            <li>• <strong className="text-[var(--text-primary)]">Kindlewastes artifacts:</strong> Bound Tome, Mysterious Tome, Tome of Agony.</li>
            <li>• <strong className="text-[var(--text-primary)]">Both chain off the Collector&apos;s quest line</strong> — his &quot;Finding Hollow Halls Artifacts&quot; quest points you at each set in turn.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Albaneve & Veilwater Halls (Lv 30-45)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1.5 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Status:</strong> enterable now, but no Bone Key quest or teleporter yet — full support lands in a future patch.</li>
            <li>• <strong className="text-[var(--text-primary)]">Albaneve Halls:</strong> a single grand chamber hiding high-tier chests. Farming trick: clear it, return to the main menu, reload — the chests respawn.</li>
            <li>• <strong className="text-[var(--text-primary)]">Veilwater Halls:</strong> the hardest content in the game, with underwater sections — Swimfins and Diving Helmet mandatory.</li>
            <li>• <strong className="text-[var(--text-primary)]">Update 8 endgame:</strong> Lv 50 legendary chests await fully-geared parties.</li>
          </ul>
        </div>

        <InfoBox title="The Collector Loop" type="tip">
          The Halls feed a self-sustaining endgame loop: run Halls → mine Ectoplasm + gather artifacts → craft next Bone Key → turn artifacts in to the Collector → Ectoplasm Press converts surplus materials into endgame supplies. Bring a full party, activate every Beacon, and never skip the green crystals.
        </InfoBox>
      </div>
    ),
  },
];
