import {
  Flame, Users, Wrench, ScrollText, TowerControl,
  Skull, Package, Compass, ListChecks, Blocks,
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

function QuestCard({ title, trigger, objectives, reward, tip }: { title: string; trigger: string; objectives: string[]; reward: string; tip?: string }) {
  return (
    <div className="game-panel corner-decor p-4 mb-3">
      <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">{title}</h4>
      <div className="text-xs text-[var(--text-muted)] mb-2"><strong className="text-[var(--text-primary)]">Trigger:</strong> {trigger}</div>
      <ol className="space-y-1 text-xs text-[var(--text-secondary)] list-decimal list-inside mb-2">
        {objectives.map((obj) => (
          <li key={obj}>{obj}</li>
        ))}
      </ol>
      <div className="text-xs"><strong className="text-[var(--text-primary)]">Reward:</strong> <span className="text-[var(--accent-green)]">{reward}</span></div>
      {tip && <div className="text-xs text-orange-400 mt-1"><strong>Tip:</strong> {tip}</div>}
    </div>
  );
}

function NPCCard({ name, role, location, vault, unlocks, tip }: { name: string; role: string; location: string; vault: string; unlocks: string[]; tip: string }) {
  return (
    <div className="game-panel corner-decor p-4 mb-3">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-cinzel text-sm font-bold text-[var(--text-gold)]">{name}</span>
        <span className="text-[10px] bg-[var(--text-gold)]/10 text-[var(--text-gold)] px-2 py-0.5 rounded uppercase">{role}</span>
      </div>
      <div className="grid grid-cols-1 gap-1 text-xs">
        <div><strong className="text-[var(--text-primary)]">Location:</strong> <span className="text-[var(--text-secondary)]">{location}</span></div>
        <div><strong className="text-[var(--text-primary)]">Vault:</strong> <span className="text-[var(--text-secondary)]">{vault}</span></div>
        <div><strong className="text-[var(--text-primary)]">Unlocks:</strong></div>
        <ul className="space-y-0.5 text-[var(--text-secondary)] ml-4">
          {unlocks.map((u) => <li key={u}>• {u}</li>)}
        </ul>
        <div className="text-orange-400 mt-1"><strong>Priority:</strong> {tip}</div>
      </div>
    </div>
  );
}

export const questsSubSections: SubSection[] = [
  {
    id: 'main-story',
    title: 'Main Story Quests',
    icon: <Flame className="w-5 h-5" />,
    summary: 'The core Flameborn storyline that drives your journey from awakening to saving Embervale. 20+ quests with full step-by-step walkthrough.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-gold)]">Flameborn Quests</strong> form the backbone of Enshrouded&apos;s narrative. These quests guide you through the world, introducing core mechanics, unlocking new regions, and advancing the central story of the Shroud and the Flame. Marked with a <strong className="text-orange-400">flame icon</strong> in your journal, they are obtained automatically through the Flame Altar and key NPCs. <strong className="text-[var(--text-primary)]">You cannot miss them</strong> — they progress naturally as you play.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/story-of-fire-map.webp" alt="Main quest map locations" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Main story quest locations across the Springlands region</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Act I: Awakening</h3>

        <QuestCard
          title="01. Claim A Spot For Your Base"
          trigger="Automatically at game start"
          objectives={['Exit the Cinder Vault through the mine tunnel', 'Reach the Springlands surface', 'Gather 5 Stone from the ground', 'Open Crafting Menu (V) and craft a Flame Altar', 'Place the Flame Altar at the quest marker', 'Interact with the Flame Altar to commune']}
          reward="Recipe: Flame Altar, 150 XP, Base building unlocked"
          tip="The Flame Altar placement is permanent — choose a flat area with room to expand"
        />

        <QuestCard
          title="02. Find the Sleeping Survivor"
          trigger="Complete Claim A Spot For Your Base"
          objectives={['Follow the quest marker northeast of your base', 'Travel through the Shrouded area (timer: 5 minutes)', 'Locate the Ancient Vault entrance', 'Enter the vault and find the sealed survivor chamber', 'Interact with the Ancient Sarcophagus to awaken Oswald Anders', 'Return to your Flame Altar and commune']}
          reward="Survivor: Blacksmith (Oswald Anders), 150 XP, Summoning Staff recipe"
          tip="Bring a bow — you will encounter multiple Fell enemies in the Shroud"
        />

        <QuestCard
          title="03. Clear the Elixir Well"
          trigger="Speak to Blacksmith (Oswald Anders) after rescue"
          objectives={['Follow the quest marker to the Elixir Well', 'Enter the well by descending the spiral path', 'Fight through Fell enemies to reach the bottom', 'Destroy the Shroud Root at the base (use axe)', 'Defeat the Fell Thunderbrute boss', 'Collect the Fell Thunderbrute Head', 'Return to Flame Altar and commune']}
          reward="Runes, Fell Thunderbrute Head, 150 XP, Shroud Core, Unlock: Hollow Halls"
          tip="The Shroud Root is vulnerable to axe attacks. Dodge the Thunderbrute&apos;s slam attack — it has a long wind-up"
        />

        <QuestCard
          title="04. The Ancient Spires"
          trigger="Complete Clear the Elixir Well"
          objectives={['Travel to the Springlands Ancient Spire (marked on map)', 'Climb the spire — use grapple points and ledges', 'Reach the top platform', 'Interact with the Flame Beacon to activate', 'Learn the Spire knowledge']}
          reward="150 XP, Fast travel unlocked, Map reveal for surrounding area"
          tip="Look for glowing grapple points on the spire walls. The climb requires stamina management"
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Act II: Gathering Allies</h3>

        <QuestCard
          title="05. A Story of Fire"
          trigger="Complete The Ancient Spires"
          objectives={['Discover the Flame Obelisk in Springlands (marked on map)', 'Approach and read the Obelisk inscription', 'Return to Flame Altar and commune']}
          reward="75 XP, All Flame Shrine locations revealed on map"
          tip="Flame Shrines provide safe rest spots and are essential for Shroud survival"
        />

        <QuestCard
          title="06. A Story of Rot"
          trigger="Complete The Ancient Spires"
          objectives={['Discover the Shroud Obelisk in Springlands', 'Read the Obelisk to learn about the Shroud&apos;s nature', 'Return to Flame Altar']}
          reward="75 XP, All Shroud Root locations revealed on map"
          tip="Shroud Roots are marked as teal tree-like structures — destroying each gives +1 skill point"
        />

        <QuestCard
          title="07. Powerful Alchemy"
          trigger="Complete The Ancient Spires"
          objectives={['Follow the quest marker west to the Alchemist&apos;s Ancient Vault', 'Enter the vault through the Shrouded entrance', 'Navigate the vault chambers', 'Find and interact with Balthazar&apos;s Sarcophagus', 'Awaken the Alchemist']}
          reward="Survivor: Alchemist (Balthazar), 150 XP, Unlock: Mortar recipes"
          tip="The Alchemist&apos;s vault requires some Shroud traversal — bring Shroud survival potions"
        />

        <QuestCard
          title="08. Hunter Becomes The Hunted"
          trigger="Complete The Ancient Spires"
          objectives={['Travel east to the Hunter&apos;s Ancient Vault', 'Enter the vault and defeat the Fell ambush', 'Find Athalan Skree&apos;s sealed chamber', 'Awaken the Hunter']}
          reward="Survivor: Hunter (Athalan Skree), 150 XP, Unlock: Hand Spindle recipes"
          tip="The ambush inside the vault is tough — enter with full health and stamina"
        />

        <QuestCard
          title="09. Carpentry Assistance"
          trigger="Complete Powerful Alchemy (Alchemist rescued)"
          objectives={['Travel east to the Carpenter&apos;s Ancient Vault', 'Enter and navigate the vault', 'Find Cade Hawthorn&apos;s sealed chamber', 'Awaken the Carpenter']}
          reward="Survivor: Carpenter (Cade Hawthorn), 150 XP, Unlock: Table Saw recipes"
          tip="Carpenter unlocks wood building pieces and furniture — essential for base customization"
        />

        <QuestCard
          title="10. Growing Stronger Together"
          trigger="Complete Hunter Becomes The Hunted"
          objectives={['Travel north to the Farmer&apos;s Ancient Vault', 'Enter the vault and clear any Fell', 'Find Emily Fray&apos;s sealed chamber', 'Awaken the Farmer']}
          reward="Survivor: Farmer (Emily Fray), 150 XP, Unlock: Seedbed recipes"
          tip="Farmer unlocks cooking and farming — provides sustainable food sources"
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Act III: Deepening Power</h3>

        <QuestCard
          title="11. Salt Mine Location"
          trigger="Speak to Hunter (Athalan Skree) after rescue"
          objectives={['Follow the quest marker to the Salt Mine entrance', 'Clear the Shroud around the mine', 'Investigate the mine interior', 'Report back to the Hunter']}
          reward="75 XP, Salt Mine location unlocked for resource gathering"
          tip="Salt is used in many cooking and preservation recipes"
        />

        <QuestCard
          title="12. The Blacksmith's Request"
          trigger="Speak to Blacksmith (Oswald Anders) after all 5 NPCs rescued"
          objectives={['Speak to the Blacksmith about his past', 'Travel to the marked location to find his old forge', 'Search the forge for his personal items', 'Return the items to the Blacksmith']}
          reward="Unlocks: Advanced forge recipes, 150 XP"
          tip="This quest chain leads to endgame weapon crafting"
        />

        <QuestCard
          title="13. Reclaim The Wilderness"
          trigger="Speak to Farmer (Emily Fray) after rescue"
          objectives={['Help the Farmer clear Fell from her designated farmland area', 'Defeat all Fell in the marked zone', 'Plant the first crops in the cleared area', 'Report back to the Farmer']}
          reward="Unlocks: Cooking Station, Oven recipes, 150 XP"
          tip="Clearing the farmland also provides a safe zone for future farming"
        />

        <QuestCard
          title="14. Reach The Capital"
          trigger="Complete Reclaim The Wilderness"
          objectives={['Travel to the ancient capital city (far northeast)', 'Navigate through heavily Shrouded areas', 'Reach the capital gates', 'Defeat the Fell Wispwyvern guardian', 'Collect the Fell Wispwyvern Head']}
          reward="Fell Wispwyvern Head, 150 XP, Unlock: Capital region fast travel"
          tip="This is a long journey — set up multiple Flame Altars along the way"
        />

        <QuestCard
          title="15. Crucible Needed For A Smelter"
          trigger="Complete Reclaim The Wilderness (Blacksmith quest chain)"
          objectives={['Travel to the marked dungeon for the Crucible', 'Navigate the dungeon and defeat guardians', 'Retrieve the Ancient Crucible', 'Return to the Blacksmith']}
          reward="Unlocks: Smelter, Blast Furnace recipes, 150 XP"
          tip="The Smelter is essential for processing high-tier ores"
        />

        <QuestCard
          title="16. A Black Cauldron for the Alchemist"
          trigger="Complete The Blacksmith&apos;s Request"
          objectives={['Speak to the Alchemist about advanced alchemy', 'Travel to the marked dungeon for the Black Cauldron', 'Defeat the dungeon boss', 'Retrieve the Black Cauldron', 'Return to the Alchemist']}
          reward="Unlocks: Alchemy Station, Advanced potion recipes, 150 XP"
          tip="Alchemy Station unlocks permanent buff potions"
        />

        <QuestCard
          title="17. A Beehive Smoker"
          trigger="Complete Sun Temple Stories (lore quest chain)"
          objectives={['Speak to the Farmer about beekeeping', 'Gather materials for the Beehive Smoker', 'Craft the Beehive Smoker at the Farmer&apos;s station', 'Place beehives near flowering plants']}
          reward="Unlocks: Beehive Smoker recipes, Honey production, 150 XP"
          tip="Honey is a powerful food buff ingredient"
        />

        <QuestCard
          title="18. A Loom for the Hunter"
          trigger="Complete A Beehive Smoker"
          objectives={['Speak to the Hunter about textile crafting', 'Gather wood and fiber materials', 'Build the Loom at the Hunter&apos;s station', 'Craft your first cloth armor piece']}
          reward="Unlocks: Loom recipes, Cloth armor crafting, 150 XP"
          tip="Cloth armor is lighter than metal — good for ranged builds"
        />

        <QuestCard
          title="19. Cat Search"
          trigger="Complete Carpentry Assistance AND Farmer rescued"
          objectives={['Speak to the Alchemist about his missing cat', 'Search the marked areas for clues', 'Follow the cat&apos;s trail through the wilderness', 'Find the cat (Tyger) and return it to the Alchemist']}
          reward="Pet: Tyger the Cat, 150 XP"
          tip="Tyger follows you around your base as a cosmetic pet"
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Act IV: The Frozen Frontier &amp; Wake of the Water</h3>

        <QuestCard
          title="20. Explore The Hollow Halls"
          trigger="Alchemist quest — requires the Farmer's and Carpenter's first quests completed"
          objectives={['Speak to the Alchemist after his chain opens up', 'Travel to the Springlands Hollow Halls (southwest of the Springlands Spire)', 'Clear the dungeon and defeat the Hollow inside', 'Find Alden Crowley, the Collector, at the end of the Halls', 'Report back to the Alchemist']}
          reward="Survivor: Collector (Alden Crowley), Hollow Halls quest chain, 150 XP"
          tip="The Collector is the endgame crafting NPC — rescue him early to start banking Ectoplasm Press materials"
        />

        <QuestCard
          title="21. Master the Ancient Spires"
          trigger="Progresses naturally as you enter each new biome"
          objectives={['Climb and activate the Revelwood Spire (Lv 10-15)', 'Climb the Blackmire Spire in the swamp', 'Climb the Nomad Highlands Spire (Lv 15-20)', 'Climb the Kindlewastes Spire (Lv 20-30)', 'Climb the Albaneve Summits Spire (Lv 30-40, cold gear required)', 'Each spire reveals its biome and unlocks fast travel']}
          reward="Fast travel per spire, Skill Points, full map coverage"
          tip="Each spire has its own puzzle theme — bring a ranged weapon for switch puzzles and stamina food for climbs"
        />

        <QuestCard
          title="22. Emerald Shores and Sanguine Seas"
          trigger="Flame Level 8 + access to the Albaneve Summits Spire (Wake of the Water update)"
          objectives={['Fast travel to the Albaneve Summits Ancient Spire', 'Glide west ~1,000m toward Lake Heartblood', 'Enter the ruined fortress built into the mountainside', 'Follow the Shroud-filled tunnel through the mountain', 'Emerge at the Veilwater Basin Outlook', 'Place a Flame Altar near Dragondream Lake as your respawn']}
          reward="Veilwater Basin unlocked, leads into the Veilwater Spire quest"
          tip="The Updraft skill (Assassin tree) makes crossing the cliffs trivial. Bring Shroud resistance for the passage"
        />

        <QuestCard
          title="23. Master the Ancient Veilwater Basin Spire"
          trigger="Complete Emerald Shores and Sanguine Seas"
          objectives={['Swim down to one of the 4 underwater entrances around the spire base', 'Refill oxygen at the Return Beacon and take the central teleporter', 'Floor 1: time the electric sparks, cross the spike floor, climb the metal wall', 'Floor 2: zigzag the fireball corridor; solve the 6-lever door (gold pillars UP, stone pillars DOWN)', 'Floor 3: press the 3 hidden buttons (far corridor, southwest path, electricity alcove), then swing past the axes', 'Floor 4: dive the deep tunnel and press the underwater switch (oxygen refills at the button)', 'Ride the teleporter to the top and commune with the Flame']}
          reward="Veilwater fast travel, 5 Skill Points, 'Veilwater Basin Stargazer' achievement"
          tip="The dive exceeds 30s of air — commit fully; oxygen resets at the button. Dying is safe: you respawn outside with your bag at the water's edge. A silver chest hides behind the ceiling-switch door on Floor 2, and a golden chest behind the second dive"
        />

        <InfoBox title="Main Story Progression Path" type="tip">
          The recommended order is: Claim A Spot → Find Survivor → Clear Elixir Well → Ancient Spires → Rescue all 5 NPCs → Salt Mine → Reclaim Wilderness → Reach Capital → Explore The Hollow Halls → Master the Spires as you push each biome → Emerald Shores → Veilwater Spire. Each step unlocks new mechanics essential for the next.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'npc-rescue',
    title: 'NPC Rescue Quests',
    icon: <Users className="w-5 h-5" />,
    summary: 'Rescue the five core craftspeople of Embervale. Each rescue unlocks an entire crafting tree — weapons, armor, building, cooking, and more.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Enshrouded keeps almost all of its real crafting depth locked behind <strong className="text-[var(--text-gold)]">rescued craftspeople</strong>. Each survivor starts as a &quot;sleeping survivor&quot; sealed inside a specific <strong className="text-[var(--text-primary)]">Ancient Vault</strong>. Free them, then use the <strong className="text-[var(--text-gold)]">Summoning Staff</strong> (unlocked after rescuing the Blacksmith) to call them to your base. <strong className="text-[var(--accent-red)]">Rescuing all five NPCs is essential</strong> — without them, you cannot craft weapons, armor, buildings, potions, or food.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/alchemist-vault.webp" alt="NPC Ancient Vault rescue" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Ancient Vaults are scattered throughout Embervale — each contains a sealed survivor waiting to be awakened</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Five Core Craftspeople</h3>

        <NPCCard
          name="Oswald Anders"
          role="Blacksmith"
          location="North of starting Cinder Vault, Springlands"
          vault="Ancient Vault — relatively easy access"
          unlocks={['Melee weapons & armor crafting', 'Summoning Staff (essential for other NPCs)', 'Charcoal Kiln, Forge', 'Smelter, Blast Furnace', 'Weapon upgrade system']}
          tip="RESCUE FIRST — His vault is closest to spawn and he gates everything else. The Summoning Staff he provides is required to call other NPCs to your base."
        />

        <NPCCard
          name="Balthazar"
          role="Alchemist"
          location="Western Springlands"
          vault="Ancient Vault — requires some Shroud traversal"
          unlocks={['Magic armor & staves', 'Mortar & Grinding Stones', 'Alchemy Station (permanent buff potions)', 'Mill', 'Access to Hollow Halls dungeon']}
          tip="Strong second pick — Alchemy Station provides permanent buffs that stack with food buffs. Also gates the Hollow Halls dungeon."
        />

        <NPCCard
          name="Cade Hawthorn"
          role="Carpenter"
          location="Eastern Springlands"
          vault="Ancient Vault — guarded by Fell"
          unlocks={['Wood building pieces & furniture', 'Kiln', 'Table Saw', 'Masonry Tools', 'Base decoration & structural elements']}
          tip="Essential for base building — without the Carpenter, you cannot build walls, roofs, or furniture."
        />

        <NPCCard
          name="Athalan Skree"
          role="Hunter"
          location="East of Blacksmith vault, Springlands"
          vault="Ancient Vault — Fell ambush inside"
          unlocks={['Ranged armor & bows', 'Drying Rack (food preservation)', 'Tanning Station (leather)', 'Spinning Wheel & Loom (textiles)', 'Arrow crafting']}
          tip="The ambush inside his vault is tough — enter with full health and stamina. Leatherworking is essential for medium armor."
        />

        <NPCCard
          name="Emily Fray"
          role="Farmer"
          location="Northern Springlands"
          vault="Ancient Vault — surrounded by wildlife"
          unlocks={['Cooking & farming', 'Seedbed (crop growing)', 'Cooking Station & Oven', 'Beekeeping', 'Animal taming']}
          tip="Provides sustainable food sources. Cooking unlocks powerful food buffs that are essential for tough fights."
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Beyond the Core Five</h3>

        <p className="text-xs text-[var(--text-muted)]">Once the five core survivors are home, more NPCs open up — none of them are sealed in Ancient Vaults. They gate endgame crafting, cosmetics, and seasonal content rather than core progression.</p>

        <NPCCard
          name="Alden Crowley"
          role="Collector"
          location="Springlands Hollow Halls — southwest of the Springlands Ancient Spire"
          vault="Found at the end of a Hollow Halls dungeon, NOT an Ancient Vault — requires the Alchemist's 'Explore The Hollow Halls' quest (which itself needs the Farmer's and Carpenter's first quests done)"
          unlocks={['Ectoplasm Press (necromantic crafting)', 'Dark & mystical furniture', 'Special-energy foods', 'Hollow Halls artifact turn-ins', 'Endgame base-building loop']}
          tip="The natural 'endgame of base building'. Rescue him as soon as the Hollow Halls quest chain opens — his Ectoplasm Press converts dungeon materials into endgame supplies."
        />

        <NPCCard
          name="Valory"
          role="Bard"
          location="Sunken Ancient City, Blackmire (Revelwood)"
          vault="No vault — found in the sunken ruins of the Blackmire swamp"
          unlocks={['Instruments: Hand Drum, Flute, Lute, Harp', 'Music Sheets & party buffs', 'Travel tales & lore', 'Fossil & collectible quests']}
          tip="Pure flavor and buffs — no combat or building gates. Her music provides party-wide buffs, and her quest chain points you at fossils and cosmetics."
        />

        <NPCCard
          name="Elio Ricci"
          role="Barber"
          location="Added in a later update — unlockable villager"
          vault="No vault"
          unlocks={['Character appearance changes', 'Hairstyles & customization']}
          tip="Cosmetic only — visit him whenever you want a fresh look without rerolling your character."
        />

        <NPCCard
          name="Captain Melville Fontane"
          role="Fisher"
          location="Veilwater Basin fishing villages (Wake of the Water)"
          vault="No vault — met along the Veilwater coastline"
          unlocks={['Fishing gear & rods', 'Bait recipes', 'Fishing quests', 'Aquatic cooking ingredients']}
          tip="Your entry point into the fishing system — meet him early in Veilwater to gear up before exploring the underwater ruins."
        />

        <NPCCard
          name="Mei-Yin Chen"
          role="Seasonal Trader"
          location="Low Meadows (Springlands) — seasonal events only"
          vault="No vault — appears during Lunar New Year events"
          unlocks={['Lunar New Year crafting recipes', 'Event decorations & cosmetics']}
          tip="Event-dependent — if she isn't appearing, check the current patch's event schedule."
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">How Rescue Works</h3>

        <div className="game-panel corner-decor p-5">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong className="text-[var(--text-primary)]">Locate the Vault:</strong> Ancient Vaults are marked on your map once you activate nearby Ancient Spires. They appear as tower-like structures.</li>
            <li><strong className="text-[var(--text-primary)]">Enter the Vault:</strong> Vault entrances are often in Shrouded areas. You may need to fight through Fell to reach the door.</li>
            <li><strong className="text-[var(--text-primary)]">Navigate Inside:</strong> Each vault has a short dungeon-like layout with enemies and loot. Explore thoroughly for lore notes and supplies.</li>
            <li><strong className="text-[var(--text-primary)]">Find the Sarcophagus:</strong> The sealed survivor is in an Ancient Sarcophagus at the end of the vault. Interact to awaken them.</li>
            <li><strong className="text-[var(--text-primary)]">Return to Base:</strong> Fast travel back to your Flame Altar and commune with the Flame to register the rescue.</li>
            <li><strong className="text-[var(--text-primary)]">Summon to Base:</strong> Use the Summoning Staff (from Blacksmith) to call the rescued NPC to your base. Place their workstation nearby.</li>
          </ol>
        </div>

        <InfoBox title="Rescue Priority Order" type="tip">
          <strong>1. Blacksmith</strong> (Summoning Staff gates all others) → <strong>2. Alchemist</strong> (permanent buffs + Hollow Halls) → <strong>3. Carpenter</strong> (base building) → <strong>4. Hunter</strong> (leather + ranged) → <strong>5. Farmer</strong> (food sustainability). All five are in or near the Springlands — no deep Shroud required.
        </InfoBox>

        <InfoBox title="Warning" type="warning">
          You cannot craft weapons, armor, buildings, or food without the corresponding NPC. Do NOT venture into dangerous areas before rescuing at least the Blacksmith and Carpenter. The starting equipment will not suffice for long.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'survivor-tools',
    title: 'Survivor Tool Quests',
    icon: <Wrench className="w-5 h-5" />,
    summary: 'After rescuing NPCs, they give quest chains that unlock crafting stations, tools, recipes, and advanced equipment.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">After rescuing each craftsperson, they will offer a chain of <strong className="text-[var(--text-gold)]">Survivor Quests</strong> that unlock new crafting stations, recipes, and abilities. These are <strong className="text-[var(--accent-red)]">essential for progression</strong> — without completing them, you cannot craft better gear, build advanced structures, or create powerful consumables. Talk to each NPC regularly to check for new quests.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/flame-altar-crafting.webp" alt="Crafting stations at base" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">A fully developed base with all crafting stations from completed survivor quests</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Blacksmith Quest Chain (Oswald Anders)</h3>

        <QuestCard title="Forge a Weapon" trigger="Speak to Blacksmith after rescue" objectives={['Gather basic metal scraps and wood', 'Use the Forge to craft a Scrappy Sword or Spiked Club']} reward="Recipe: Scrappy Sword, Spiked Club, 75 XP" tip="Your first crafted weapon — significantly better than starter equipment" />
        <QuestCard title="Glider" trigger="Complete Forge a Weapon" objectives={['Gather Shroud Wood (from dead trees in Shroud)', 'Craft String from Plant Fiber', 'Build the Glider at the Workbench']} reward="Glider recipe — essential traversal tool" tip="The Glider is the single most impactful mobility upgrade in the game" />
        <QuestCard title="Grappling Hook" trigger="Complete Clear the Elixir Well" objectives={['Collect Shroud Spores from Fell enemies', 'Gather Metal Scraps from abandoned towns', 'Craft the Grappling Hook at the Workbench']} reward="Grappling Hook recipe" tip="Allows swinging across gaps and climbing vertical surfaces — pairs perfectly with Glider" />
        <QuestCard title="Salvage And Enhance" trigger="Complete The Ancient Spires" objectives={['Gather Runes from enemy drops and chests', 'Use the Blacksmith&apos;s upgrade menu', 'Upgrade a weapon to +1']} reward="Unlocks: Weapon upgrade system" tip="Weapon upgrades use Runes — salvage unwanted gear to get more" />
        <QuestCard title="Crucible Needed For A Smelter" trigger="Complete Reclaim The Wilderness (Farmer quest)" objectives={['Travel to the marked dungeon', 'Defeat the dungeon guardian', 'Retrieve the Ancient Crucible', 'Return to the Blacksmith']} reward="Unlocks: Smelter, Blast Furnace recipes, 150 XP" tip="Smelter processes high-tier ores into metal bars — essential for endgame gear" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Hunter Quest Chain (Athalan Skree)</h3>

        <QuestCard title="The Hunter's Hand Spindle" trigger="Speak to Hunter after rescue" objectives={['Gather Plant Fiber from bushes', 'Craft String at the Workbench', 'Build the Hand Spindle at the Hunter&apos;s station']} reward="Hand Spindle recipes, 150 XP" tip="Hand Spindle is the first step in textile crafting — leads to Spinning Wheel and Loom" />
        <QuestCard title="Salt Mine Location" trigger="Complete Hunter Becomes The Hunted" objectives={['Follow the quest marker to the Salt Mine', 'Clear surrounding Fell', 'Investigate the mine entrance']} reward="75 XP, Salt Mine location marked on map" tip="Salt is a key ingredient for food preservation and cooking" />
        <QuestCard title="A Loom for the Hunter" trigger="Complete A Beehive Smoker (Farmer quest)" objectives={['Gather Wood Logs and String', 'Build the Loom at the Hunter&apos;s station', 'Craft a piece of cloth armor']} reward="Unlocks: Loom recipes, Cloth armor crafting, 150 XP" tip="Cloth armor is lighter than metal — ideal for ranged and magic builds" />
        <QuestCard title="A Test Of Skill" trigger="Complete Table Saw quest (Carpenter)" objectives={['Speak to the Hunter about the Hunting Grounds', 'Travel to the marked Hunting Grounds', 'Defeat the target beasts within the time limit', 'Return to the Hunter']} reward="Unlocks: Advanced ranged weapon recipes, 150 XP" tip="Hunting Grounds are great for farming animal resources" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Alchemist Quest Chain (Balthazar)</h3>

        <QuestCard title="The Alchemist's Mortar" trigger="Complete Carpentry Assistance" objectives={['Gather stone and wood', 'Build the Mortar at the Alchemist&apos;s station', 'Grind basic herbs into powder']} reward="Mortar recipes, 150 XP" tip="Mortar is used to process herbs into alchemical ingredients" />
        <QuestCard title="An Eternal Spell" trigger="Speak to Alchemist after rescue" objectives={['Help the Alchemist research a permanent spell', 'Gather the requested magical ingredients', 'Witness the spell creation']} reward="75 XP, Unlock: Permanent buff potion recipes" tip="Permanent buffs last until death and stack with food buffs" />
        <QuestCard title="A Black Cauldron for the Alchemist" trigger="Complete The Blacksmith&apos;s Request" objectives={['Travel to the marked dungeon for the Black Cauldron', 'Defeat the dungeon boss', 'Retrieve the Black Cauldron', 'Return to the Alchemist']} reward="Unlocks: Alchemy Station, Advanced potion recipes, 150 XP" tip="Alchemy Station unlocks the most powerful consumables in the game" />
        <QuestCard title="Cat Search" trigger="Complete Carpentry Assistance + Farmer rescued" objectives={['Speak to Alchemist about his missing cat Tyger', 'Search the marked areas for clues', 'Follow the trail and find Tyger', 'Return Tyger to the Alchemist']} reward="Pet: Tyger the Cat (cosmetic), 150 XP" tip="Tyger wanders around your base — pure cosmetic, no gameplay effect" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Carpenter Quest Chain (Cade Hawthorn)</h3>

        <QuestCard title="Table Saw For The Carpenter" trigger="Speak to Carpenter after rescue" objectives={['Gather Wood Logs and Metal Scraps', 'Build the Table Saw at the Carpenter&apos;s station', 'Process wood into planks']} reward="Table Saw recipes, 150 XP" tip="Table Saw unlocks advanced building materials — stone bricks, refined wood" />
        <QuestCard title="The Queen's Tomb" trigger="Speak to Carpenter after Table Saw quest" objectives={['Investigate the marked tomb location', 'Navigate the tomb and solve the entrance puzzle', 'Defeat the tomb guardian', 'Claim the treasure']} reward="Pikemead&apos;s Bulwark (unique shield), 75 XP" tip="Pikemead&apos;s Bulwark is one of the best early-game shields" />
        <QuestCard title="Diadwyn And Its Building Blocks" trigger="Complete The Queen&apos;s Tomb" objectives={['Research the ancient architecture of Diadwyn', 'Collect samples of ancient building materials', 'Return to the Carpenter with findings']} reward="Unlocks: Decorative building pieces, 150 XP" tip="Decorative pieces let you customize your base appearance" />
        <QuestCard title="Vukah Ceremony" trigger="Complete Table Saw quest" objectives={['Investigate Vukah tribal markings near the marked location', 'Observe the Vukah ceremony without being detected', 'Report findings to the Carpenter']} reward="Unlocks: Vukah-themed decorations, 150 XP" tip="Vukah are hostile — use stealth or fight through" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Farmer Quest Chain (Emily Fray)</h3>

        <QuestCard title="Reclaim The Wilderness" trigger="Speak to Farmer after rescue" objectives={['Clear Fell from the designated farmland area', 'Defeat all enemies in the marked zone', 'Plant the first crops']} reward="Unlocks: Cooking Station, Oven recipes, 150 XP" tip="This quest creates a permanent safe farming zone" />
        <QuestCard title="A Beehive Smoker" trigger="Complete Sun Temple Stories (lore quest)" objectives={['Speak to Farmer about beekeeping', 'Gather materials for the Beehive Smoker', 'Place beehives near flowers']} reward="Unlocks: Beehive Smoker recipes, Honey production, 150 XP" tip="Honey is one of the best food buff ingredients — +stamina regen" />

        <InfoBox title="Quest Tip" type="tip">
          After completing each survivor quest, check ALL your rescued NPCs for new dialogue. Quests often chain across multiple NPCs — completing one Carpenter quest may unlock a Hunter quest.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'side-hidden',
    title: 'Side & Hidden Quests',
    icon: <ScrollText className="w-5 h-5" />,
    summary: 'Optional quests scattered across Embervale that reward unique items, lore, and crafting materials. Hidden quests require special trigger conditions.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Beyond the main storyline, Embervale is filled with <strong className="text-[var(--text-gold)]">optional quests</strong> that reward unique equipment, crafting materials, and deep lore. Some are clearly marked, while <strong className="text-[var(--accent-red)]">hidden quests</strong> require special trigger conditions — finding a specific note, talking to an NPC at the right time, or exploring obscure locations. These quests often have the <strong className="text-[var(--text-primary)]">best rewards</strong> in the game.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/abandoned-outpost.webp" alt="Side quest location" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Abandoned outposts and ruins often hide secret quests and valuable loot</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Notable Side Quests</h3>

        <QuestCard title="Scavenger's Stash" trigger="Read the note at Alchemist Ancient Vault" objectives={['Find the first clue near the Alchemist vault', 'Follow the trail of scavenger notes across the Springlands', 'Locate the hidden stash cache', 'Open the cache and claim the rewards']} reward="Rare crafting materials, Runes, 150 XP" tip="The stash contains high-tier materials normally found in dangerous areas" />

        <QuestCard title="Hidden Building Blocks" trigger="Obtain lore item in Woodgard (on top of church)" objectives={['Reach the top of the church in Woodgard', 'Find the hidden architect&apos;s journal', 'Follow the clues to find hidden building materials', 'Collect the rare building blocks']} reward="Unlocks: Rare building materials (marble, ornate stone), 150 XP" tip="These blocks are purely cosmetic but look incredible in builds" />

        <QuestCard title="Oswald Anders' Chest" trigger="Speak to Blacksmith after summoning Carpenter" objectives={['Listen to the Blacksmith&apos;s backstory', 'Travel to his old home location (marked on map)', 'Search the ruins for his personal chest', 'Return his belongings to him']} reward="Unlocks: Blacksmith personal recipes, 150 XP, Lore entry" tip="This quest reveals the Blacksmith&apos;s tragic backstory" />

        <QuestCard title="Gertrude's Dogs" trigger="Find Gertrude near her farm in Springlands" objectives={['Speak to Gertrude about her missing dogs', 'Search the surrounding area for the dogs', 'Lead the dogs back to Gertrude safely', 'Defend against the Fell ambush']} reward="Dog companions (cosmetic), food supplies, 150 XP" tip="The dogs will wander around your base after rescue — cosmetic only" />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Hidden Quests (Secret Triggers)</h3>

        <QuestCard title="The Glimpse of Eternity" trigger="Find the hidden shrine behind the waterfall in Springlands" objectives={['Locate the waterfall in northeastern Springlands', 'Swim behind the waterfall to find the hidden entrance', 'Interact with the ancient shrine', 'Solve the light puzzle (align the mirrors)', 'Claim the legendary reward']} reward="Glimpse of Eternity (Legendary ring: +50 Health, +50 Mana), 200 XP" tip="This is one of the best rings in the game — worth finding early" />

        <QuestCard title="Brittlebush Chests" trigger="Explore the Brittlebush canyon area" objectives={['Find the first chest in the canyon overlook', 'Follow the trail of chests deeper into the canyon', 'Solve the jumping puzzle to reach the final chest', 'Claim the legendary weapon inside']} reward="Legendary-tier weapon (scales to your level), 200 XP" tip="The jumping puzzle requires Double Jump + Glider — come prepared" />

        <QuestCard title="Noble's Rest" trigger="Enter the crypt beneath the church cemetery" objectives={['Find the hidden entrance to the crypt', 'Navigate the trapped corridors', 'Solve the burial chamber puzzle', 'Claim the Noble Cosmetic Set']} reward="Noble Cosmetic Set (5 pieces: crown, robes, gloves, boots, cape), 150 XP" tip="Cosmetic armor — changes appearance but provides no stats. Looks amazing though" />

        <QuestCard title="The Captain's Demise" trigger="Read the shipwreck log on the northern coast" objectives={['Find the shipwreck on the northern beach', 'Read the Captain&apos;s final log entry', 'Dive to find his sunken treasure', 'Defeat the sea creatures guarding it']} reward="Commander&apos;s Ring (+30 Mana, +30 Health), 200 XP" tip="One of the best early-game rings — +60 combined stats" />

        <InfoBox title="How to Find Hidden Quests" type="tip">
          1. Read <strong>every note and journal</strong> you find — they often contain quest clues. 2. Explore <strong>off the beaten path</strong> — waterfalls, caves, and high ledges hide secrets. 3. Talk to <strong>all NPCs repeatedly</strong> — new dialogue unlocks after completing other quests. 4. Check <strong>abandoned buildings thoroughly</strong> — basements and attics often have hidden items.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'dungeon-quests',
    title: 'Dungeon Quests',
    icon: <Skull className="w-5 h-5" />,
    summary: 'Explore dangerous dungeons including Hollow Halls, Ancient Tombs, and Elixir Wells for legendary loot and Shroud Cores.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]"><strong className="text-[var(--text-gold)]">Dungeons</strong> are large, instanced areas filled with powerful enemies, environmental puzzles, and legendary loot. Each dungeon has a <strong className="text-[var(--primary)]">guardian boss</strong> at the end that drops <strong className="text-[var(--text-gold)]">Shroud Cores</strong> (essential for Flame Altar upgrades) and unique equipment. Dungeons are marked on your map as castle-like icons once you activate nearby Ancient Spires.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/hollow-halls-entrance.webp" alt="Hollow Halls dungeon entrance" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Hollow Halls — the first major dungeon, accessible after rescuing the Alchemist</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Major Dungeons</h3>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Hollow Halls</h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <div><strong className="text-[var(--text-primary)]">Location:</strong> West of Springlands, near Alchemist vault</div>
            <div><strong className="text-[var(--text-primary)]">Unlock:</strong> Rescue the Alchemist (Balthazar)</div>
            <div><strong className="text-[var(--text-primary)]">Level:</strong> 8-12 recommended</div>
            <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Fell variants, Shroud elementals</div>
            <div><strong className="text-[var(--text-primary)]">Boss:</strong> Hollow Warden — slow but heavy-hitting</div>
            <div><strong className="text-[var(--text-primary)]">Rewards:</strong> Shroud Core, Magic staff recipes, Alchemy ingredients</div>
            <div className="text-orange-400 mt-1"><strong>Strategy:</strong> Bring fire-resistant gear. The boss has a ground-slam AoE — dodge roll away when he raises his arms.</div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Queen's Catacombs</h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <div><strong className="text-[var(--text-primary)]">Location:</strong> Southeast Springlands, beneath Pikemead</div>
            <div><strong className="text-[var(--text-primary)]">Unlock:</strong> Complete The Queen&apos;s Tomb (Carpenter quest)</div>
            <div><strong className="text-[var(--text-primary)]">Level:</strong> 10-15 recommended</div>
            <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Undead, Fell knights, Traps</div>
            <div><strong className="text-[var(--text-primary)]">Boss:</strong> Queen&apos;s Guardian — dual-wielding swords</div>
            <div><strong className="text-[var(--text-primary)]">Rewards:</strong> Pikemead&apos;s Bulwark (unique shield), Shroud Core, Ancient coins</div>
            <div className="text-orange-400 mt-1"><strong>Strategy:</strong> Watch for floor traps — they deal massive damage. Use a shield to block the boss&apos;s rapid sword combos.</div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Sun Temple</h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <div><strong className="text-[var(--text-primary)]">Location:</strong> Eastern mountains, above the Shroud line</div>
            <div><strong className="text-[var(--text-primary)]">Unlock:</strong> Complete Sun Temple Stories (lore collection)</div>
            <div><strong className="text-[var(--text-primary)]">Level:</strong> 15-20 recommended</div>
            <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Ancient constructs, Solar elementals</div>
            <div><strong className="text-[var(--text-primary)]">Boss:</strong> Solar Construct — ranged laser attacks</div>
            <div><strong className="text-[var(--text-primary)]">Rewards:</strong> Shroud Core, Golden weapon recipes, Sun Temple lore</div>
            <div className="text-orange-400 mt-1"><strong>Strategy:</strong> The boss is weak to ice damage. Use pillars for cover from laser beams.</div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Elixir Wells (Mini-Dungeons)</h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <div><strong className="text-[var(--text-primary)]">Location:</strong> Multiple across all regions (19 total)</div>
            <div><strong className="text-[var(--text-primary)]">Unlock:</strong> Discover as you explore</div>
            <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Fell variants, Shroud creatures</div>
            <div><strong className="text-[var(--text-primary)]">Boss:</strong> Well Guardian (varies by location)</div>
            <div><strong className="text-[var(--text-primary)]">Rewards:</strong> Shroud Core (+3 skill points per well), Legendary crafting materials</div>
            <div className="text-orange-400 mt-1"><strong>Strategy:</strong> Wells are short but intense. Enter with full Shroud timer. Destroy the Shroud Root first — it heals the boss.</div>
          </div>
        </div>

        <InfoBox title="Dungeon Preparation Checklist" type="tip">
          Before entering any dungeon: 1. Full durability on all gear. 2. Maximum food buffs active. 3. Full Shroud timer (if applicable). 4. Bring healing potions. 5. Set a Flame Altar nearby for quick return if you die. 6. Bring the right damage type (check boss weaknesses).
        </InfoBox>

        <InfoBox title="Important" type="warning">
          Dungeon bosses respawn after a cooldown (approximately 15 minutes real time). You can farm them for multiple Shroud Cores and legendary drops. Boss drops scale to your current level — it may be worth waiting until higher levels to claim certain rewards.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'lore-collection',
    title: 'Lore Collection Quests',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Explore Embervale to discover hundreds of collectible lore pages that reveal the world&apos;s deep history, myths, and tragedies.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Scattered throughout Embervale are <strong className="text-[var(--text-gold)]">hundreds of collectible lore pages</strong> — journals, letters, research notes, and ancient inscriptions that piece together the tragic history of the kingdom. These are organized into <strong className="text-[var(--text-primary)]">collection categories</strong> in your journal. Completing a collection often rewards unique items, recipes, or quest triggers. Lore quests are marked with a <strong className="text-purple-400">scroll icon</strong>.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/story-of-fire-map.webp" alt="Lore collection locations" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Lore pages are hidden in ruins, caves, and abandoned buildings across every region</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Lore Collection Categories</h3>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">The Shroud, Elixir, and Elixir Well</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Documents the discovery of the Elixir, the construction of the Wells, and the catastrophic release of the Shroud. Found primarily in mining areas and laboratories.</p>
          <div className="text-xs"><strong className="text-[var(--text-primary)]">Pages:</strong> ~25 total | <strong className="text-[var(--text-primary)]">Completion Reward:</strong> Shroud Survival Flask recipe</div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Ancients and the Flame</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">The history of the Ancient civilization, their mastery of the Flame, and the construction of the Ancient Spires. Found near Spires and ancient ruins.</p>
          <div className="text-xs"><strong className="text-[var(--text-primary)]">Pages:</strong> ~20 total | <strong className="text-[var(--text-primary)]">Completion Reward:</strong> Ancient Flame Charm (trinket: +5% fire damage)</div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">General / Survivor Accounts</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Personal accounts from survivors of the Shroud&apos;s fall — farmers, soldiers, nobles, and children. Found in abandoned homes and settlements.</p>
          <div className="text-xs"><strong className="text-[var(--text-primary)]">Pages:</strong> ~40 total | <strong className="text-[var(--text-primary)]">Completion Reward:</strong> Survivor&apos;s Medallion (+20 Health)</div>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Obelisk Writings</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Ancient inscriptions found on Obelisks scattered across the map. Reading an Obelisk reveals area information and lore. Triggered by the Obelisk Research quest.</p>
          <div className="text-xs"><strong className="text-[var(--text-primary)]">Pages:</strong> ~15 total | <strong className="text-[var(--text-primary)]">Completion Reward:</strong> 75 XP per Obelisk + map reveals</div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Lore Quest Chain</h3>

        <QuestCard title="Obelisk Research" trigger="Read any Obelisk Writing Lore Page" objectives={['Read the first Obelisk inscription', 'Report to the Alchemist about your findings', 'Travel to and read 15 Obelisks across Embervale', 'Compile the research and return to the Alchemist']} reward="75 XP per Obelisk, Complete map reveals, Unique lore entries" tip="Obelisks also reveal nearby points of interest on your map — prioritize them for exploration" />

        <QuestCard title="Searching For Hidden Tombs" trigger="Complete The Ancient Spires" objectives={['Investigate rumors of hidden burial sites', 'Locate 5 hidden tombs across the Springlands', 'Loot the tomb treasures', 'Return with your findings']} reward="Rare loot from each tomb, 200 XP total, Legendary recipe unlock" tip="Tombs are often hidden behind breakable walls or underwater entrances" />

        <QuestCard title="Scavenger's Stash" trigger="Read note at Alchemist Ancient Vault" objectives={['Follow the trail of scavenger notes', 'Solve the riddles at each clue location', 'Locate the final hidden cache', 'Claim the scavenger&apos;s hoard']} reward="High-tier crafting materials, Runes, 150 XP" tip="The final cache contains materials normally only found in endgame areas" />

        <QuestCard title="Vukah Ceremony" trigger="Speak to Carpenter after Table Saw quest" objectives={['Travel to the marked Vukah camp', 'Observe the ceremony from a hidden position', 'Sneak in and steal the ceremonial artifact', 'Return to the Carpenter']} reward="Vukah-themed decorations, 150 XP, Unique crafting material" tip="Use stealth — alerting the Vukah summons a large fighting force" />

        <InfoBox title="Lore Hunting Tips" type="tip">
          Lore pages emit a faint golden glow — look for sparkles in dark corners. Check <strong>bookshelves, desks, and dead bodies</strong> — they often hold journals. Read every <strong>sign and plaque</strong> on walls. Some lore is <strong>only accessible at night</strong> — certain doors and passages open after sunset.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'item-rewards',
    title: 'Item Reward Quests',
    icon: <Package className="w-5 h-5" />,
    summary: 'Special quests and exploration milestones that reward unique weapons, armor, and equipment found nowhere else in Embervale.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Throughout Embervale, certain quests and exploration milestones reward <strong className="text-[var(--text-gold)]">unique equipment</strong> that cannot be crafted or found elsewhere. These items often have special effects, unique appearances, or stats that make them <strong className="text-[var(--primary)]">best-in-slot</strong> for their level range. Many scale to your current level when obtained.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/quest-rewards.webp" alt="Quest reward items" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Unique quest rewards often have distinctive appearances and powerful special effects</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Legendary Quest Rewards</h3>

        {[
          { item: "Pikemead's Bulwark", type: "Shield", quest: "The Queen's Tomb (Carpenter quest)", loc: "Queen's Catacombs locked room", stats: "High block rating, +20% stagger resistance", tip: "One of the best early-game shields" },
          { item: "Ghost Glider", type: "Glider Lv.4", quest: "Ancient Spire treasure", loc: "Golden Chest near tower top", stats: "250% range, 25 speed, 5 stamina/s", tip: "The best glider in the game — cross entire biomes" },
          { item: "Shroud Weaver Staff", type: "Staff Lv.30-35", quest: "Golden monument chest", loc: "Guaranteed drop, upgradeable", stats: "High magic damage, Shroud damage bonus", tip: "Scales to your level — claim at max level for best stats" },
          { item: "Commander's Ring", type: "Legendary Ring", quest: "The Captain's Demise (hidden quest)", loc: "Northern coast shipwreck", stats: "+30 Mana, +30 Health", tip: "+60 combined stats — excellent for any build" },
          { item: "Fell Commander Bow", type: "Bow Lv.15", quest: "Ancient Bridge guardian", loc: "Defeat the Fell Thunderbrute", stats: "High ranged damage, poison effect", tip: "Poison stacks with food buffs for massive DPS" },
          { item: "Hailscourge", type: "Two-Handed Sword", quest: "Buried Curse collection", loc: "Cemetery of Lone Thistle grave", stats: "Ice damage, freeze proc on hit", tip: "Freeze effect locks enemies in place — amazing crowd control" },
          { item: "Golden Dragon Sword", type: "Sword Lv.18-23", quest: "Dungeon exploration", loc: "Golden chest in mid-tier dungeon", stats: "5x fire damage on hit", tip: "Fire damage bypasses armor — melts tough enemies" },
          { item: "Gemini Ring", type: "Ring", quest: "Mirror Image lore quest", loc: "From Fell Banshee at Moth's Grove", stats: "+25 Dexterity, +15% bow damage", tip: "Best-in-slot for Ranger builds" },
          { item: "Jezmina&apos;s Apotheosis", type: "Staff", quest: "Vukah Arena challenge", loc: "Loot from Vukah Brawler boss", stats: "+40 Intelligence, magic crit bonus", tip: "Best early-game staff for Wizards" },
          { item: "Noble Cosmetic Set", type: "Cosmetic Armor (5pc)", quest: "Noble&apos;s Rest (hidden quest)", loc: "Church crypt prison cells", stats: "Pure cosmetic — no stats", tip: "Crown, robes, gloves, boots, cape — full royal appearance" },
        ].map((item) => (
          <div key={item.item} className="game-panel corner-decor p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)]">{item.item}</h4>
              <span className="text-[10px] text-[var(--text-muted)]">{item.type}</span>
            </div>
            <div className="space-y-1 text-xs">
              <div><strong className="text-[var(--text-primary)]">Quest/Source:</strong> <span className="text-[var(--text-secondary)]">{item.quest}</span></div>
              <div><strong className="text-[var(--text-primary)]">Location:</strong> <span className="text-[var(--text-secondary)]">{item.loc}</span></div>
              <div><strong className="text-[var(--text-primary)]">Stats:</strong> <span className="text-[var(--accent-green)]">{item.stats}</span></div>
              <div className="text-orange-400"><strong>Tip:</strong> {item.tip}</div>
            </div>
          </div>
        ))}

        <InfoBox title="Item Scaling Warning" type="warning">
          Many unique items <strong>scale to your level when first obtained</strong>. For endgame-tier items like the Shroud Weaver Staff, it may be worth waiting until Level 30+ to claim them. Once obtained, their stats are locked and cannot be changed.
        </InfoBox>

        <InfoBox title="Legendary Farming" type="tip">
          Dungeon bosses and world bosses respawn after ~15 minutes. You can farm them repeatedly for multiple legendary drops. Each drop scales independently — farm at max level for the best possible rolls.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'bounty-board',
    title: 'Bounty Board Quests',
    icon: <TowerControl className="w-5 h-5" />,
    summary: 'Repeatable combat-focused quests posted on the Bounty Board for Runes, crafting materials, and unique rewards.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-gold)]">Bounty Board</strong> becomes available after rescuing the <strong className="text-[var(--text-primary)]">Hunter</strong> and completing his initial quest chain. Located at your base near the Hunter&apos;s station, the board offers <strong className="text-[var(--text-primary)]">repeatable combat-focused quests</strong> that refresh periodically. These are excellent for farming Runes, crafting materials, and unique rewards.</p>

        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/quests/bounty-barn.webp" alt="Bounty Board location" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The Bounty Board is located at the Bounty Barn — a large structure with a prominent board outside</p></div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">How Bounty Board Works</h3>

        <div className="game-panel corner-decor p-5">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong className="text-[var(--text-primary)]">Unlock:</strong> Complete The Hunter&apos;s Hand Spindle quest and the Salt Mine Location quest.</li>
            <li><strong className="text-[var(--text-primary)]">Access:</strong> Interact with the Bounty Board at the Bounty Barn (marked on map after unlocking).</li>
            <li><strong className="text-[var(--text-primary)]">Select:</strong> Choose from 3 available bounties (up to 5 can be active at once).</li>
            <li><strong className="text-[var(--text-primary)]">Complete:</strong> Fulfill the bounty objective — usually defeating specific enemies or collecting items.</li>
            <li><strong className="text-[var(--text-primary)]">Turn In:</strong> Return to the Bounty Board to claim rewards.</li>
            <li><strong className="text-[var(--text-primary)]">Refresh:</strong> New bounties appear every 20 minutes of real time.</li>
          </ol>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bounty Types</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Hunt Bounties</h4>
            <p className="text-[var(--text-secondary)] mb-2">Defeat a specific number of target creatures.</p>
            <div className="text-[var(--text-muted)]">Examples: Kill 10 wolves, Kill 5 Fell spitters, Kill 3 Vukah brutes</div>
            <div className="text-[var(--accent-green)] mt-1">Reward: Runes, leather, meat</div>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Gather Bounties</h4>
            <p className="text-[var(--text-secondary)] mb-2">Collect specific resources from the world.</p>
            <div className="text-[var(--text-muted)]">Examples: Gather 20 Plant Fiber, Mine 15 Copper Ore, Chop 10 Hardwood</div>
            <div className="text-[var(--accent-green)] mt-1">Reward: Runes, bonus resources</div>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Elite Bounties</h4>
            <p className="text-[var(--text-secondary)] mb-2">Defeat powerful named enemies or bosses.</p>
            <div className="text-[var(--text-muted)]">Examples: Defeat the Shroudbeast of Blackmire, Slay the Vukah Chieftain</div>
            <div className="text-[var(--accent-green)] mt-1">Reward: Large Rune cache, legendary materials</div>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Exploration Bounties</h4>
            <p className="text-[var(--text-secondary)] mb-2">Discover locations or activate points of interest.</p>
            <div className="text-[var(--text-muted)]">Examples: Activate 3 Ancient Spires, Discover 2 Elixir Wells</div>
            <div className="text-[var(--accent-green)] mt-1">Reward: Runes, map reveals</div>
          </div>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bounty Reward Tiers</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Tier</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Difficulty</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Runes</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Bonus Rewards</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-green-400">Bronze</td><td>Easy</td><td>5-10</td><td>Basic materials</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-gold)]">Silver</td><td>Medium</td><td>15-25</td><td>Rare materials, food</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-orange-400">Gold</td><td>Hard</td><td>30-50</td><td>Epic materials, recipes</td></tr>
              <tr><td className="py-1.5 text-purple-400">Platinum</td><td>Very Hard</td><td>75-100</td><td>Legendary materials, unique items</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bounty Board Tips</h3>

        <div className="game-panel corner-decor p-5">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#10003;</span><span><strong className="text-[var(--text-primary)]">Stack bounties:</strong> Pick multiple bounties with overlapping objectives (e.g., &quot;Kill wolves&quot; + &quot;Gather meat&quot;)</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#10003;</span><span><strong className="text-[var(--text-primary)]">Refresh timer:</strong> Board refreshes every 20 min — check back frequently for Platinum bounties</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#10003;</span><span><strong className="text-[var(--text-primary)]">Rune farming:</strong> Bounties are the most efficient way to farm Runes for weapon upgrades</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#10003;</span><span><strong className="text-[var(--text-primary)]">Elite bounties:</strong> These target world bosses that also drop legendary gear — double rewards</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#10003;</span><span><strong className="text-[var(--text-primary)]">Multiplayer:</strong> Bounty progress is shared in co-op — complete them 4x faster with a full party</span></li>
          </ul>
        </div>

        <InfoBox title="Bounty Board Efficiency" type="tip">
          The most efficient bounty strategy: Accept 5 bounties at once → Plan a route that hits all objectives → Complete in a single expedition → Turn in all at once. With a full party of 4, you can clear a full board refresh (5 bounties) in under 30 minutes.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'npc-quest-chains',
    title: 'NPC Quest Chains',
    icon: <ListChecks className="w-5 h-5" />,
    summary: 'Complete quest lines for every survivor — Hunter, Alchemist, Carpenter, Farmer, Collector, and Bard chains at a glance.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Every rescued survivor runs a <strong className="text-[var(--text-gold)]">personal quest chain</strong> that progressively unlocks their crafting stations. Chains always start with a <strong className="text-[var(--text-primary)]">&quot;Needs Shelter&quot;</strong> quest (build them a roof over their station) and end with their top-tier station. This page lists every chain in order — work through them in parallel as materials allow.</p>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-orange-400">Oswald Anders — Blacksmith</h4>
            <span className="text-[9px] bg-orange-400/10 text-orange-400 px-2 py-0.5 rounded uppercase">Smelter line</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Blacksmith Needs Shelter</li>
            <li>The Blacksmith&apos;s Request</li>
            <li>Crucible Needed For A Smelter</li>
            <li>Blast Furnace follow-ups (endgame metal gear)</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: Smelter → Blast Furnace — the endgame weapon/armor pipeline.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-green-400">Athalan Skree — Hunter</h4>
            <span className="text-[9px] bg-green-400/10 text-green-400 px-2 py-0.5 rounded uppercase">9 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Hunter Needs Shelter</li>
            <li>Growing Stronger Together</li>
            <li>Salt Mine Location</li>
            <li>Man&apos;s Best Friend</li>
            <li>The Hunter&apos;s Hand Spindle</li>
            <li>In Need Of A Tanning Station</li>
            <li>Loom For The Hunter</li>
            <li>Using The Spinning Wheel</li>
            <li>An Improved Spinning Wheel For The Hunter</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: tanning → textiles → upgraded bags (carrying capacity). Finish her line before heavy armor farming.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-purple-400">Balthazar — Alchemist</h4>
            <span className="text-[9px] bg-purple-400/10 text-purple-400 px-2 py-0.5 rounded uppercase">12 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Cat Search</li>
            <li>Staffs And Spells</li>
            <li>Carpentry Assistance</li>
            <li>An Eternal Spell</li>
            <li>The Alchemist&apos;s Mortar</li>
            <li>The Alchemist&apos;s Rumors</li>
            <li>Craft The Improved Grappling Hook</li>
            <li>A Black Cauldron For The Alchemist</li>
            <li>Scientific Instruments For A Laboratory</li>
            <li>Among Bluejays</li>
            <li>Explore The Hollow Halls</li>
            <li>Alchemic Wisdom</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Key gate: <strong className="text-orange-400">Explore The Hollow Halls</strong> only opens after the Farmer&apos;s and Carpenter&apos;s first quests — it leads to the Collector. Also the source of the Improved Grappling Hook.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-amber-400">Cade Hawthorn — Carpenter</h4>
            <span className="text-[9px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded uppercase">9 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Carpenter Needs Shelter</li>
            <li>The Queen&apos;s Tomb</li>
            <li>Craft The Improved Grappling Hook</li>
            <li>Table Saw For The Carpenter</li>
            <li>A Graceful Flight</li>
            <li>Finding Masonry Tools</li>
            <li>Helping Hands</li>
            <li>Sun Temple Stories</li>
            <li>Ringing In The New Year</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: Table Saw → Masonry Tools — the full building/furniture catalog. Sun Temple Stories feeds into the Kindlewastes temples.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-lime-400">Emily Fray — Farmer</h4>
            <span className="text-[9px] bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded uppercase">8 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Farmer Needs Shelter</li>
            <li>Animal Farming (Animal Bait Recipes → Animal Food Recipes)</li>
            <li>Reclaim The Wilderness</li>
            <li>Fireplace For The Farmer</li>
            <li>Almanac of Plants and Seedlings For The Farmer</li>
            <li>A Beehive Smoker</li>
            <li>Gathering Wool In The Albaneve Summits</li>
            <li>Cooking Warm Food</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: cooking → beekeeping → animal husbandry → wool. The Albaneve wool quests are your entry into cold-weather gear.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-cyan-400">Alden Crowley — Collector</h4>
            <span className="text-[9px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded uppercase">6 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Collector Needs Shelter</li>
            <li>Ectoplasm Press For The Collector</li>
            <li>Finding Hollow Halls Artifacts</li>
            <li>The Nomad Highlands Hollow Halls</li>
            <li>The Kindlewastes Hollow Halls</li>
            <li>A Skeleton Cyclops Collection</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: Ectoplasm Press + Hollow Halls artifact turn-ins (Dark Crystals, Golden Urns, Tomes). His chain is the Hollow Halls endgame loop.</p>
        </div>

        <div className="game-panel corner-decor p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-cinzel text-xs font-bold text-pink-400">Valory — Bard</h4>
            <span className="text-[9px] bg-pink-400/10 text-pink-400 px-2 py-0.5 rounded uppercase">9 quests</span>
          </div>
          <ol className="space-y-1 text-xs list-decimal list-inside">
            <li>Bard Needs Shelter</li>
            <li>Daggers For The Bard</li>
            <li>Hand Drum For The Bard</li>
            <li>Music Sheets</li>
            <li>Eternally Piercing</li>
            <li>Finding Fossils</li>
            <li>Finding Cosmetic Items</li>
            <li>Rare Instruments</li>
            <li>Finding Music Sheets In The Albaneve Summits</li>
          </ol>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Unlocks: instruments (Hand Drum, Flute, Lute, Harp) and music buffs. Her quests double as a fossil/cosmetic treasure hunt.</p>
        </div>

        <InfoBox title="Chain Strategy" type="tip">
          Rescue order matters more than chain order: Blacksmith first (Summoning Staff), then Alchemist + Farmer + Carpenter together — their early quests gate the Hollow Halls and the Collector. Hunter and Bard chains can lag behind; the Farmer&apos;s Albaneve wool quests should start the moment you reach the Summits.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'building-blocks',
    title: 'Building Block Quests',
    icon: <Blocks className="w-5 h-5" />,
    summary: 'Hidden quests that unlock every building block style — Bone, Half-Timbered, Citywall, Obsidian, and 7 bonus blocks.',
    content: (
      <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Scattered across Embervale are <strong className="text-[var(--text-gold)]">hidden exploration quests</strong> whose rewards are <strong className="text-[var(--text-primary)]">building block recipes</strong> — new wall, roof, and decoration styles for your base. Most trigger automatically when you enter a specific ruin, tomb, or settlement. If you care about base building, these are the most valuable side quests in the game.</p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Block Reward Quests</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Quest</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Block Reward</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Where It Triggers</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Searching for Hidden Tombs</td><td className="text-[var(--accent-green)]">Bone Block</td><td>Hidden Tombs (4 worldwide)</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Ruined Netherton</td><td className="text-[var(--accent-green)]">Roughly Cut Stone Block</td><td>Netherton ruins</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Diadwyn And Its Building Blocks</td><td className="text-[var(--accent-green)]">Half-Timbered Block</td><td>Diadwyn village</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">A Tower To The Stars</td><td className="text-[var(--accent-green)]">Citywall Block</td><td>Tower ruin</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Fortification</td><td className="text-[var(--accent-green)]">Castle Wall Stone Block</td><td>Fortress ruins</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Hidden Building Blocks</td><td className="text-[var(--accent-green)]">Stone Shingle Roof Block</td><td>Hidden structure</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">A Rumble In The Catacombs</td><td className="text-[var(--accent-green)]">Weathered Stone Block</td><td>Mistbury Catacombs</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Caravan Raid</td><td className="text-[var(--accent-green)]">Limestone Block</td><td>Caravan ambush site</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Mixed Stones</td><td className="text-[var(--accent-green)]">Regular Stone Block</td><td>Quarry ruins</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Emily Fray&apos;s Tavern</td><td className="text-[var(--accent-green)]">Desert City Wall Block</td><td>Tavern reconstruction</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Well Blocks</td><td className="text-[var(--accent-green)]">Well Block</td><td>Village wells</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Derelict Kindlewastes</td><td className="text-[var(--accent-green)]">Desert Temple Block</td><td>Kindlewastes ruins</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5">Mixed Sandstone Block</td><td className="text-[var(--accent-green)]">Sandstone Block</td><td>Desert quarry</td></tr>
              <tr><td className="py-1.5">Path To Darkness</td><td className="text-[var(--accent-green)]">Obsidian Block</td><td>Deep Shroud route</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bonus Blocks</h3>
        <div className="flex flex-wrap gap-2">
          {['Fancy Stone Block', 'Brick-Timbered Block', 'Highly Polished Stone Block', 'Red Marble Block', 'Ectoplasm Block', 'Vukah Temple Stones', 'Polished Granite Stone Block'].map(b => (
            <span key={b} className="px-2.5 py-1.5 rounded-sm text-[10px] font-cinzel font-bold bg-purple-400/10 text-purple-400 border border-purple-400/20">{b}</span>
          ))}
        </div>
        <p className="text-[10px] text-[var(--text-muted)]">Bonus blocks come from rare chests, the Collector&apos;s Ectoplasm line, and dungeon completions rather than dedicated quests.</p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">XP-Only Exploration Quests</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-1 text-xs">
            <li>• <strong className="text-[var(--text-primary)]">Obelisk Research</strong> — 75 XP (read Ancient Obelisks)</li>
            <li>• <strong className="text-[var(--text-primary)]">A Test Of Skill</strong> — 75 XP (combat challenge)</li>
            <li>• <strong className="text-[var(--text-primary)]">Beds And Shelter</strong> — 75 XP (base comfort)</li>
            <li>• <strong className="text-[var(--text-primary)]">Finding A Garden Gnome</strong> — 75 XP (hidden collectible)</li>
            <li>• <strong className="text-[var(--text-primary)]">Hidden Crafting Recipes</strong> — 75 XP (Springlands)</li>
            <li>• <strong className="text-[var(--text-primary)]">Hidden Crafting Recipes – Blackmire</strong> — 75 XP</li>
            <li>• <strong className="text-[var(--text-primary)]">Scouting Mission To The Obelisk</strong> — 75 XP</li>
          </ul>
        </div>

        <InfoBox title="Block Hunter Tips" type="tip">
          Block quests trigger on proximity — walk INTO every ruin, tomb, and named settlement you pass, even briefly. The Obsidian Block (Path To Darkness) is the rarest style; the Bone Block requires finding the 4 Hidden Tombs, so climb spires first to reveal their surroundings. Check the Map &amp; Locations section for tomb and catacomb locations.
        </InfoBox>
      </div>
    ),
  },
];
