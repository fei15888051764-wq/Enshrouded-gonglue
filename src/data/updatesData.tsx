import {
  Star, Zap, Hammer, Skull, Gem, Waves,
  MapPin, Rocket, Bug, Music, CloudSun, History
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

function PatchCard({ version, date, title, highlights, features, fixes }: {
  version: string; date: string; title: string;
  highlights?: string[]; features?: string[]; fixes?: string[];
}) {
  return (
    <div className="game-panel corner-decor p-4 mb-4">
      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
        <h4 className="font-cinzel text-sm font-bold text-[var(--text-gold)]">{title}</h4>
        <div className="text-[10px] text-[var(--text-muted)]">{version} &bull; {date}</div>
      </div>
      {highlights && highlights.length > 0 && (
        <>
          <div className="text-[10px] text-[var(--text-gold)] uppercase tracking-wider mb-1">Highlights</div>
          <ul className="text-xs text-[var(--text-secondary)] space-y-0.5 mb-2">
            {highlights.map((f, i) => <li key={`h-${i}`}>&bull; {f}</li>)}
          </ul>
        </>
      )}
      {features && features.length > 0 && (
        <>
          <div className="text-[10px] text-[var(--accent-green)] uppercase tracking-wider mb-1">New Features</div>
          <ul className="text-xs text-[var(--text-secondary)] space-y-0.5 mb-2">
            {features.map((f, i) => <li key={`f-${i}`}>&bull; {f}</li>)}
          </ul>
        </>
      )}
      {fixes && fixes.length > 0 && (
        <>
          <div className="text-[10px] text-[#6a9ad0] uppercase tracking-wider mb-1">Changes & Fixes</div>
          <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
            {fixes.map((f, i) => <li key={`x-${i}`}>&bull; {f}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

export const updatesSubSections: SubSection[] = [
  {
    id: 'early-access-launch',
    title: 'Early Access Launch',
    icon: <Star className="w-5 h-5" />,
    summary: 'The original Early Access release on January 24, 2024 — all launch content, day-one hotfixes, and initial patches.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded entered Steam Early Access on January 24, 2024. The launch was extremely successful, with over a million players in the first two weeks. The day-one experience was followed by a rapid series of hotfixes addressing stability and multiplayer issues.
        </p>

        <PatchCard
          version="v0.7.0"
          date="January 24, 2024"
          title="Early Access Launch"
          highlights={['4 launch biomes: Springlands, Revelwood, Nomad Highlands, Kindlewastes', 'Full combat system: melee, ranged, and magic', 'Voxel-based base building with structural support', '5 NPC artisans to rescue (Blacksmith, Hunter, Alchemist, Farmer, Carpenter)', '8 Flame Altar upgrade levels', '11 world bosses', 'Skill tree with 12 archetypes', 'Co-op multiplayer (up to 16 players)', 'Shroud survival system with timer', 'Glider and Grappling Hook traversal']}
          features={[]}
          fixes={[]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Day-One Hotfixes (January 24, 2024)</h3>
        <PatchCard
          version="Hotfix #1"
          date="January 24, 2024"
          title="Server List Crash Hotfix"
          features={[]}
          fixes={['Fixed server list crashes due to Steam limiting public P2P sessions to 50', 'Players advised to find friends through Steam friends list']}
        />
        <PatchCard
          version="Hotfix #2"
          date="January 24, 2024"
          title="Same-Day Stability Patch"
          features={[]}
          fixes={['Fixed several causes for random crashes', 'Fixed session invite popup remaining on screen incorrectly']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Week-One Hotfixes (January 25–29, 2024)</h3>
        <PatchCard
          version="Hotfix #3"
          date="January 25, 2024"
          title="AMD GPU & Multiplayer Fix"
          features={[]}
          fixes={['Fixed several crashes', 'Fixed rare crash in building menu', 'Fixed "Failed to initialize graphics system" on older AMD cards', 'CPUs without AVX can now host sessions with more than 2 players', 'Fixed mouse wheel skipping steps above 60fps']}
        />
        <PatchCard
          version="Hotfix #4"
          date="January 25, 2024"
          title="Silent Server-Only Fix"
          features={[]}
          fixes={['Server-side stability improvements (no client patch required)']}
        />
        <PatchCard
          version="Hotfix #5"
          date="January 26, 2024"
          title="Save Data Protection"
          features={[]}
          fixes={['Fixed rare issue causing world and character save data to stop updating', 'Improved save data protection to prevent corruption']}
        />

        <InfoBox title="Launch Success" type="tip">
          Enshrouded's Early Access launch was one of the biggest in Steam history for a survival game. Within the first week, over 2 million players had tried the game, and it consistently ranked among the top 10 most-played games on Steam. The rapid hotfix cadence (6 patches in the first week) demonstrated Keen Games' commitment to community feedback.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'update1-hollow-halls',
    title: 'Update 1: Hollow Halls',
    icon: <Skull className="w-5 h-5" />,
    summary: 'The first major content update (March 26, 2024) — Hollow Halls dungeons, new enemies, round doors, sitting, and hundreds of fixes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #1 (v0.7.1.0), also known as the Hollow Halls Update, was the first major content patch. It introduced the signature dungeon system that became a core part of the end-game experience.
        </p>

        <PatchCard
          version="v0.7.1.0"
          date="March 26, 2024"
          title="Hollow Halls Update"
          highlights={['Each biome gets a new "Hollow Halls" dungeon with biome-appropriate enemies and rewards', 'New questline starting from the Alchemist', 'A new survivor discovered within the Hollow Halls', 'New crafting station with exclusive recipes']}
          features={['Hollow Halls dungeons in every biome with escalating difficulty', 'New dungeon-exclusive enemies and encounters', 'New weapons, building blocks, furniture, and decorative props', 'Round doors and windows from the Carpenter (Hobbit-style)', 'Player characters can now sit on chairs, benches, thrones, and toilets', 'Potted plants from the Farmer (requires Kiln)', 'Tree seedlings can now be grown at the Seedbed', 'New shields added to progression', 'Willow Crush town in Revelwoods completely reworked', '60Hz display rate issue finally resolved', 'Ground fog no longer appears in player base (protected by Flame)']}
          fixes={['Multishot no longer consumes multiple special arrows', 'Leech stat fixed (Ring of Endless Life)', 'Bloodletting no longer triggered by Light Burst and Acid Cone', 'Acid Cone critical damage reduced', 'Begone and Sun Aura mana consumption fixed', 'Terror skill stun in multiplayer fixed', 'Necromancer companion follows more actively', 'Updraft skill can no longer be triggered multiple times per glider flight', 'Breach no longer triggers with arrows', 'Water Aura healing + Counterstrike interaction fixed', 'Shell Shock now works as described', 'Warden and Tower Aura no longer trigger while downed', 'Merciless Attack triggers faster after overpowering', 'Melee weapons lose durability slightly slower', 'Jumping from glider catapult glitch fixed', 'Hawk Boots stamina issue fixed', 'DoT no longer cancels grappling hook, climbing, or glider', 'Arrow/spell ammunition cycling fixed', 'Enemies better navigate door frames', 'Building undo works with hammer selected', 'Flower soil crafting from Emily', 'Tumbleweeds improved in Nomad Highlands', 'Flame shrines show ambient flame when regenerating']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Pre-Update Hotfixes (February 2024)</h3>
        <PatchCard
          version="v0.7.0.1"
          date="February 6, 2024"
          title="First Named Patch"
          features={[]}
          fixes={['Fixed several rare crashes', 'Fixed AMD GPU shader compilation crash', 'Improved performance across systems', 'Better stability monitoring logs', 'Dedicated server login fixes', 'Improved version mismatch error messages', 'Steam community content preferences for server list', 'World reset timer lowered to 30 minutes', 'Fixed blocked Cinder Vault door', 'More terrain material deposits', 'Improved amber node visibility', 'Polished points of interest', 'Fixed path-blocking dirt areas', 'Improved Revelwood ground fog']}
        />
        <PatchCard
          version="v0.7.0.2"
          date="February 26, 2024"
          title="Update #2"
          features={[]}
          fixes={['Fixed several rare crashes', 'Added save process security and protection', 'Reduced CPU load for idle dedicated servers', 'Improved performance in large bases and crop fields', 'Fixed server join issue after crashed sessions', 'Redistributed roaming enemies for better balance', 'Fixed enemies with incorrect regional levels', 'Fixed Flame Altar near Shroud Root causing global fog disappearance', 'Prevented save point activation in deadly Shroud', 'Increased jump attack stamina cost', 'Reduced twigs needed for arrows', 'Increased twig and feather yield', 'Lowered Flax for high-end armor crafting', 'Fixed crop saving on quit/restart', 'Castle Wall blocks stack to 5000', 'Construction hammer can no longer cut bedrock']}
        />

        <InfoBox title="Hollow Halls Legacy" type="tip">
          The Hollow Halls became the primary end-game content loop. Each biome's dungeon scales to its level range, with the final room containing 2 class-specific chests (warrior, ranger, or mage) that can be opened with Ectoplasm. Speed-running Hollow Halls for legendary drops remains a core farming strategy to this day.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (April 2024)</h3>
        <PatchCard
          version="Hotfix #9"
          date="March 26, 2024"
          title="Hotfix #9 — Same-Day Stability"
          features={[]}
          fixes={['Immediate stability fixes on Hollow Halls launch day']}
        />
        <PatchCard
          version="v0.7.1.1"
          date="April 17, 2024"
          title="Patch 3"
          features={[]}
          fixes={['Various fixes following Hollow Halls release', 'Continued stability improvements']}
        />
        <PatchCard
          version="Hotfix #10-11"
          date="March 27-28, 2024"
          title="Post-Hollow Halls Hotfixes"
          features={[]}
          fixes={['Hotfix #10: Stability fixes', 'Hotfix #11: Additional crash fixes and polish']}
        />
      </div>
    ),
  },
  {
    id: 'update2-melodies-mire',
    title: 'Update 2: Melodies of the Mire',
    icon: <Music className="w-5 h-5" />,
    summary: 'June 2024 update — the first named content drop after Hollow Halls, featuring the Mire region expansion and Blackmire swamp improvements.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #2 (Melodies of the Mire, v0.7.2.0) arrived on June 5, 2024. It was the first major content update following Hollow Halls, expanding the Blackmire swamp region and adding new content throughout the world.
        </p>

        <PatchCard
          version="v0.7.2.0"
          date="June 5, 2024"
          title="Melodies of the Mire"
          highlights={['Blackmire swamp region expanded and improved', 'New enemy encounters and combat tuning', 'Quality-of-life improvements', 'Preparation for larger future updates']}
          features={['Blackmire combat encounters improved', 'New points of interest in swamp regions', 'Enemy spawn distribution adjustments', 'Further polish and bug fixes']}
          fixes={['Enemy level corrections in various regions', 'Loot distribution balancing', 'Pathfinding improvements', 'Stability fixes']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (June 2024)</h3>
        <PatchCard
          version="v0.7.2.1"
          date="June 13, 2024"
          title="Patch 4"
          features={[]}
          fixes={['Fixes following Melodies of the Mire update', 'Stability and performance improvements']}
        />
        <PatchCard
          version="Hotfix #12-13"
          date="June 13-24, 2024"
          title="Post-Melodies Hotfixes"
          features={[]}
          fixes={['Hotfix #12 (June 6): Stability fixes', 'Hotfix #13 (June 24): Additional crash and bug fixes']}
        />

        <InfoBox title="The Bridge Update" type="info">
          Melodies of the Mire was a smaller "bridge" update between the major Hollow Halls and Back to the Shroud updates. It focused on improving existing content rather than adding massive new features, setting the stage for the larger updates that followed.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'back-to-shroud',
    title: 'Back to the Shroud',
    icon: <CloudSun className="w-5 h-5" />,
    summary: 'July 2024 update (v0.7.3.0) — focused on Shroud improvements, summer event, and quality-of-life changes between major content drops.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The Back to the Shroud update (v0.7.3.0) launched on July 29, 2024. It was a significant mid-year update that improved the Shroud experience, added seasonal content, and refined many systems ahead of the Albaneve Summits expansion.
        </p>

        <PatchCard
          version="v0.7.3.0"
          date="July 29, 2024"
          title="Back to the Shroud"
          highlights={['Shroud experience improvements', 'Summer event content', 'Quality-of-life changes', 'Balance adjustments']}
          features={['Shroud improvements and refinements', 'Summer event with seasonal content', 'Quality-of-life improvements across multiple systems', 'Combat balance adjustments', 'Building system refinements']}
          fixes={['Multiple crash fixes', 'Performance optimizations', 'Enemy behavior improvements', 'Loot system adjustments']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Hotfixes (July–August 2024)</h3>
        <PatchCard
          version="Hotfix #14"
          date="July 30, 2024"
          title="Hotfix #14"
          features={[]}
          fixes={['Fixes following Back to the Shroud update']}
        />
        <PatchCard
          version="Hotfix #15"
          date="July 31, 2024"
          title="Hotfix #15"
          features={[]}
          fixes={['Additional stability fixes']}
        />
        <PatchCard
          version="Hotfix #16"
          date="August 7, 2024"
          title="Hotfix #16"
          features={[]}
          fixes={['Crash fixes and performance improvements']}
        />
      </div>
    ),
  },
  {
    id: 'update3-pact-flame',
    title: 'Update 3: Pact of the Flame',
    icon: <Zap className="w-5 h-5" />,
    summary: 'January 2025 update — skill tree individual reset, building block decay, food placement, parry indicators, and the Dune Armadillo.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #3 (Pact of the Flame) arrived in January 2025, focusing on quality-of-life improvements, building enhancements, and combat feedback improvements. It also introduced the Barber NPC through a questline.
        </p>

        <PatchCard
          version="v0.7.3.x"
          date="January 2025"
          title="Pact of the Flame Update"
          highlights={['Skills can now be individually reset in the skill tree (no full respec required)', 'Building block decay tool for weathered visuals', 'Food and drink decorative placement on plates/boards/coasters', '70+ new craftable props including leather sofas, statues, vault doors', 'Visual parry indicators added to enemies and projectiles']}
          features={['New tool: Building block decay (craft at Collector NPC with Nomad Highlands materials)', 'Food/drink/potion placement props for decorative tables', '70+ new props: leather sofas, large statues, vault door, braziers, lamps, home decor', 'Two new building materials: yellow stained-glass and stone wall terrain', 'Lunar New Year trader for vanity items (permanent if invited)', 'Skill tree: individual skill reset without full respec', 'Parry opportunity visual indicators on enemies and projectiles', 'Dune Armadillo tammable in Kindlewastes', 'Improved villager and farm animal pathfinding', 'Dodge/blink available earlier during wand attacks']}
          fixes={['Pathfinding and behavioral issues for villagers and animals', 'Moth’s Grove, Saline Quarry, Netherton, Fox Chase, Rookmore, Fenrig’s Farm, Morwenna, Roostnook, Cloverbrook Farm, Mistbury Catacombs expanded', 'New Springlands settlements: Midhollow ruins, Wistful Fields farm', 'Blackmire combat encounters improved', 'Albaneve Summits combat encounters improved', 'Event Honor Hall added for building contest winners', 'Sound Occlusion: sounds behind objects correctly subdued', 'New UI sounds for equipping, notifications, upgrading', 'Voice chat sound sliders added']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (Feb 2025)</h3>
        <PatchCard
          version="Hotfix #21-22"
          date="January 29, 2025"
          title="Post-Pact Hotfixes"
          features={[]}
          fixes={['Hotfix #21: Fixed several crashes', 'Fixed enemies stopping movement in long play sessions', 'Fixed villagers getting unassigned from beds on quit/restart', 'Fixed Summoning Sceptre unusable after custom keybind', 'Reverted Shroud area changes near Fenrig’s Farm in Springlands', 'Reverted Revelwood tree visuals (interfered with player bases)', 'Reverted debris particles on building blocks', 'Fixed AMD graphics card VFX visual glitches', 'Fixed proximity voice chat to global voice chat switch on dedicated servers', 'Hotfix #22: Additional crash and bug fixes']}
        />
        <PatchCard
          version="v0.8.0.1"
          date="February 13, 2025"
          title="Patch 7 — Shader & Performance Update"
          highlights={['Shader compilation state shown on title screen', 'World map performance significantly improved', 'Steam API reversion for multiplayer stability']}
          features={[]}
          fixes={['Fixed several crashes and server crashes', 'Fixed crash when closing the game', 'Fixed crash with overgrowth building tool', 'Fixed crash when materials became wet by rain', 'Shader compilation state now shown on title screen', 'Shader compilation duration reduced on title screen load', 'Fixed graphical issues in title screen and game world', 'World map performance significantly improved', 'Reverted to previous Steam API version to investigate lag/stutter reports', 'Increased proximity voice chat UI range', 'Server list now shows servers with version mismatch', 'Microphones disabled by default in audio settings', 'Fixed text chat unread message counting', 'Text chat messages no longer hidden when minimized chat opened', 'Fixed overgrowth on roof materials (not supported)', 'Added UI hint for overgrowth tool', 'Fixed texture flickering on glowing blocks with overgrowth nearby', 'Fixed decayed building block visuals', 'Removed visual artifacts when switching graphics settings', 'Fixed cloth movement during dodge rolls and attacks', 'Fixed armor visual issues', 'Fixed Shell Shock skill deducting mana from wrong players in multiplayer', 'Fixed Skull Companion light flickering', 'Improved enemy pathfinding toward/following players']}
        />
        <PatchCard
          version="Hotfix #23"
          date="February 27, 2025"
          title="Hotfix #23"
          features={[]}
          fixes={['Additional stability fixes following Patch 7']}
        />
      </div>
    ),
  },
  {
    id: 'update5-frozen-frontier',
    title: 'Update 5: Souls of the Frozen Frontier',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'November 2024 update — the Albaneve Summits biome, dynamic weather, cold mechanics, Frost enemies, and Obsidian crafting tier.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #5 (Souls of the Frozen Frontier) was a major content drop, adding the Albaneve Summits — a snow-covered mountain biome with levels 30-40, dynamic weather, and a complete cold survival mechanic.
        </p>

        <PatchCard
          version="v0.7.5.x"
          date="September 2024"
          title="Souls of the Frozen Frontier"
          highlights={['NEW BIOME: Albaneve Summits (levels 30-40)', 'Dynamic weather system with cold mechanic', 'New boss: Fell Cyclops', 'Obsidian crafting tier', 'Glacial Blade legendary sword']}
          features={['Albaneve Summits: snow-covered mountain biome with 8 new enemy types', 'Dynamic weather: snowstorms, blizzards, and clear skies', 'Cold mechanic: players must stay warm or suffer effects', 'Fell Cyclops: massive new world boss', 'Glacial Blade: legendary ice-themed sword', 'Obsidian gear tier: new weapons, armor, and tools', 'Dragon nest exploration areas', 'Ice-themed building materials', 'New Frost variants of existing enemies', 'New cold-resistance mechanics and gear perks']}
          fixes={['Co-op boss health scaling rebalanced', 'Shroud timer display issues fixed', 'Glider physics improvements', 'Numerous crash fixes across all platforms']}
        />

        <InfoBox title="Albaneve Summits Impact" type="tip">
          Albaneve Summits extended the level range from 25 to 35+ and introduced the first environmental hazard (cold) that required specific gear and preparation. The Obsidian crafting tier became the new end-game standard, and the Fell Cyclops remains one of the most visually impressive boss fights in the game.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (Nov–Dec 2024)</h3>
        <PatchCard
          version="Hotfix #17-18"
          date="November 7, 2024"
          title="Post-Launch Hotfixes"
          features={[]}
          fixes={['Hotfix #17: Stability fixes', 'Hotfix #18: Additional crash and bug fixes']}
        />
        <PatchCard
          version="v0.7.4.1"
          date="November 21, 2024"
          title="Patch 5"
          features={[]}
          fixes={['Fixes following Frozen Frontier update', 'Performance improvements']}
        />
        <PatchCard
          version="v0.7.4.2"
          date="December 2, 2024"
          title="Patch 6"
          features={[]}
          fixes={['Continued stability improvements', 'Bug fixes and polish']}
        />
        <PatchCard
          version="Hotfix #19-20"
          date="December 2-11, 2024"
          title="December Hotfixes"
          features={[]}
          fixes={['Hotfix #19 (Dec 2): Crash fixes', 'Hotfix #20 (Dec 11): Additional stability improvements']}
        />
      </div>
    ),
  },
  {
    id: 'update6-thralls-twilight',
    title: 'Update 6: Thralls of Twilight',
    icon: <Gem className="w-5 h-5" />,
    summary: 'May 2025 update — Weapon Gem system, Shroud visual overhaul, Night Temples, Barber NPC, armor tinting, and 100+ new points of interest.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #6 (v0.8.1.0) was a transformative update that completely reworked the Shroud's visual identity, added the Weapon Gem system for weapon customization, introduced nighttime-exclusive content, and brought the long-awaited Barber NPC for character customization.
        </p>

        <PatchCard
          version="v0.8.1.0"
          date="May 13, 2025"
          title="Thralls of Twilight"
          highlights={['Shroud visual completely reworked with new volumetric renderer', 'Weapon Gem system for weapon customization', 'Night Temples (dusk-to-dawn exclusive dungeons)', 'Barber NPC for post-creation character customization', 'Armor tinting system', '100+ new points of interest in Shrouded zones']}
          features={['Shroud full visual rework: updated materials, textures, rewritten volumetric renderer', 'Shrouded landscapes overhauled: more variety, verticality, exploration incentives', '100+ new points of interest in Shrouded zones', 'New Shroud enemies including all-new creatures and deadly variants', 'Weapon Gem system: higher-rarity weapons can roll gem slots, gems drop from powerful enemies, socket at Gem Forges in the Shroud', 'Gem Forges: upgrade, recycle, slot, and remove gems', 'Exclusive Shroud resources: new armor sets, spell types, confusion grenades, critter bombs, mobile repair kits', 'Night Enemy Patrols: Scavengers roam roads at night', 'Fell groups spread Shroud above ground at night', 'Night-Blooming Flora: rare plants only appear at night', 'Night Temples: open dusk-to-dawn, filled with traps and puzzles', 'Barber NPC (Elio Ricci): full character customization after creation', 'New hairstyles, hair colors, eye colors, presets', 'Armor and vanity tinting through new coloring station', 'Nomad Highlands and Kindlewastes visual overhaul', '2 new channeled beam spells (healing and damage)', 'Wand projectiles significantly faster', 'Two distinct wand types: fast-firing and multi-projectile', 'Legendary Runes from elite/boss enemies for legendary weapon perks', 'Repair kits: craftable consumables for field weapon repair', 'Sleeping now slowly regenerates health', 'Item comparison widget in backpack/equipment', 'Fast travel list and survivor location overview on map', 'Quest difficulty ratings relative to player level']}
          fixes={['Enemy awareness system: enemies investigate noise before engaging', 'New enemy states: suspicious → active search → combat', 'Enemy UI widget showing awareness level', 'Enemy targeting reworked: more natural aggro', 'Enemies can now block wand projectiles', 'Enemies can occasionally dodge arrows and spells', 'Enemies better at flanking occupied players', 'Jump attack stamina cost: 25 → 50', 'Evasion stamina cost: 33 → 20', 'Parry timing made easier with better visual communication', 'Bow power inconsistencies fixed', 'Shroud Banshee hitbox reshaped for melee', 'Ranged controls refined: no accidental extra shots', 'Backwards combat movement slightly reduced', 'Directional hit reactions on many enemies', 'Player collision shrinks when sneaking/sitting (crawl through tight spaces)', 'Newly crafted backpacks add +1 row (re-craft to gain)', 'First backpack expansion available earlier', 'Sleep restores health over time', 'XP requirements increased to balance new XP sources', 'Several unique lore weapons in Albaneve', 'Server list split: player-hosted vs dedicated', 'World map loading fixed for 16:10, widescreen, 4K', 'Legendary weapon pickup center-screen message']}
        />

        <InfoBox title="Weapon Gems Explained" type="tip">
          Weapon Gems are a permanent weapon customization system. Higher-rarity weapons (Epic and Legendary) have a chance to roll with a gem slot when obtained. Gems add specific bonuses and perks — from flat stat boosts to unique effects like elemental damage conversion. Gems can be upgraded at Gem Forges, recycled when no longer needed, and moved between weapons. This system dramatically increased build diversity and gave players a long-term progression goal beyond simple gear upgrades.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (May–Aug 2025)</h3>
        <PatchCard
          version="Hotfix #24-25"
          date="May 13-15, 2025"
          title="Post-Thralls Hotfixes"
          features={[]}
          fixes={['Hotfix #24 (May 13): Stability fixes', 'Hotfix #25 (May 15): Additional crash and bug fixes']}
        />
        <PatchCard
          version="v0.8.1.1"
          date="May 22, 2025"
          title="Patch 8"
          features={[]}
          fixes={['Fixes and improvements following Thralls of Twilight']}
        />
        <PatchCard
          version="v0.8.1.2"
          date="June 5, 2025"
          title="Patch 9"
          features={[]}
          fixes={['Continued stability and balance improvements']}
        />
        <PatchCard
          version="Hotfix #26-29"
          date="June–August 2025"
          title="Summer Hotfixes"
          features={[]}
          fixes={['Hotfix #26 (June 6): Stability fixes', 'Hotfix #27 (June 25): Crash fixes', 'Hotfix #28 (July 15): Performance improvements', 'Hotfix #29 (Aug 25): Additional bug fixes']}
        />
      </div>
    ),
  },
  {
    id: 'update7-wake-water',
    title: 'Update 7: Wake of the Water',
    icon: <Waves className="w-5 h-5" />,
    summary: 'November 2025 update — swimming, diving, Veilwater Basin, greatswords, fishing, water building, and massive quality-of-life improvements.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #7 (Wake of the Water) was the largest update in Enshrouded's history at the time. It fundamentally expanded the game with water mechanics, a new tropical biome, a new weapon type, and massive system overhauls.
        </p>

        <PatchCard
          version="v0.8.x"
          date="November 2025"
          title="Wake of the Water"
          highlights={['Swimming and diving available from the start', 'NEW BIOME: Veilwater Basin (levels 35-45)', 'Greatsword weapon type', 'Complete fishing system with 20+ fish', 'Water building: pumps, springs, water wheels, gates', 'Level cap raised to 45']}
          features={['Swimming: available to all players immediately, no unlock required', 'Underwater exploration: cannot fight underwater but can swim, dive, and interact', 'The Sieve: new tool for searching underwater ground for rare resources (pearls, gold)', 'Flame Altar oxygen bubbles: allows underwater base teleportation and respawn', 'Veilwater Basin: tropical jungle biome, level 35-45 content', 'New enemy: The Drak (amphibious reptilian creatures)', 'Indiana Jones-style temples and ruins with puzzles and traps', 'Capybaras: tamable animals providing Capybara Bristles', 'Greatsword: new two-handed weapon type, slow but devastating damage', 'New Whirlwind Crescendo skill (spinning AOE attack)', 'Fishing system: fishing rod, bait types, fishing mini-game, 20+ fish species', 'Fisher NPC with quest chain for best fishing rod', 'Smoker cooking station for fish recipes', 'Water building: Water Pump, Springs, Water Wheels, Water Gates', 'Underwater bases possible with barrier blocks and Flame Altar bubbles', 'Flame Altar flood protection button', 'Editable signs with custom text', 'Watering can shows soil composition and accelerates crop growth', 'Weapon durability increased for all weapons', 'Chest loot completely reworked: higher epic/legendary drop rates', 'Chests save emptied state across logouts', 'Chests drop +1 additional item', 'Lore weapons craftable at every tier once unlocked', 'Recipe output unified: food = 5 items, building blocks = 100, roof = 50', 'Key binding customization', 'Visual improvements to water and lighting']}
          fixes={['Stamina system rebalanced: new values for food and buffs', 'HP/mana/stamina regeneration rebalanced: overall lower, more items provide regen boosts', 'Weapon durability scales correctly with level and quality', 'Multiplayer: dedicated server filtering tags (LookingForPlayers, BaseBuilding, etc.)', 'Ban players feature (persistent blacklist)', 'Visitor role: prevents terraforming outside bases (anti-griefing)', 'Improved network code for changing network conditions', 'Server permissions for water gameplay items', 'Improved item details UI: cleaner stat display', 'Pinned recipes shown when opening storage chests', 'Improved collections menu showing available items per slot', 'Food buff slot full warning message', 'Improved Survivor and animal pathfinding', 'Animals no longer reset resource production timer when hungry (paused instead)', 'Voxel buildings can have weathered appearance AND plant overgrowth', 'Improved building cursor responsiveness']}
        />

        <InfoBox title="Update 7 Changed Everything" type="tip">
          Update 7 fundamentally transformed Enshrouded. Water mechanics opened entirely new gameplay possibilities — from underwater bases to fishing as a core activity. The Veilwater Basin became the new end-game destination, and the greatsword gave melee players a third weapon archetype. Perhaps most importantly, the quality-of-life improvements (chest loot rework, recipe unification, editable signs) made the entire game feel more polished and player-friendly.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update Patches &amp; Hotfixes (Nov 2025–Jan 2026)</h3>
        <PatchCard
          version="Hotfix #30"
          date="November 11, 2025"
          title="Hotfix #30"
          features={[]}
          fixes={['Immediate stability fixes following Wake of the Water release']}
        />
        <PatchCard
          version="v0.9.0.1"
          date="November 13, 2025"
          title="Patch 10"
          features={[]}
          fixes={['Fixed a potential crash when playing in multiplayer near water areas', 'Additional crash fixes and improvements following Update 7']}
        />
        <PatchCard
          version="Hotfix #31-32"
          date="November 14-19, 2025"
          title="November Hotfixes"
          features={[]}
          fixes={['Hotfix #31 (Nov 14): Fixed a crash that could happen when exiting the game, plus further crash fixes', 'Hotfix #32 (Nov 19): Fixed an issue that could lead to black flickering artifacts or a void filling out the screen']}
        />
        <PatchCard
          version="v0.9.0.2"
          date="November 25, 2025"
          title="Patch 11 — Water Simulation Polish"
          features={[]}
          fixes={['Increased fluidity of flowing water (water simulation and visuals pass)', 'Continued improvements and fixes']}
        />
        <PatchCard
          version="Hotfix #33"
          date="December 5, 2025"
          title="Hotfix #33 — Nvidia Driver Crash Fix"
          features={[]}
          fixes={['Fixed crash in dynamic global illumination on latest Nvidia drivers']}
        />
        <PatchCard
          version="v0.9.0.3"
          date="December 16, 2025"
          title="Patch 12 — Holiday QoL Update"
          highlights={['Stamina regen buffed for early levels and food', 'Holiday decorations and Maritime furniture set', 'Tombstone pickup fix near interactable objects']}
          features={['Holiday decoration items for base building', 'Complete Maritime furniture set for bathrooms and nautical themes']}
          fixes={['Stamina regeneration increased for early levels', 'Stamina regen buffed for some food items', 'Fixed tombstone pickup blocked by nearby interactable objects (secret passages, teleporters, doors)', 'Various QoL improvements and fixes']}
        />
        <PatchCard
          version="Hotfix #34"
          date="December 16, 2025"
          title="Hotfix #34 — Water Barrier Crash Fix"
          features={[]}
          fixes={['Fixed a crash which occurred when placing and removing large numbers of Water Barriers']}
        />
        <PatchCard
          version="v0.9.0.4"
          date="January 2026"
          title="Patch 13 + Hotfix 35"
          features={[]}
          fixes={['Patch 13 (Jan 22): The final Update 7 patch — after this, the team shifted fully to Update 8 development', 'Hotfix 35 (Jan 26): Fixed graphical glitches in cloth physics simulation that caused flickering shapes']}
        />
        <PatchCard
          version="Hotfix #36 / v0.9.0.4"
          date="March 24, 2026"
          title="Hotfix #36 — Nvidia RTX 50 Series Fix"
          features={[]}
          fixes={['Fixed an issue with Nvidia RTX 50 series GPUs on driver version 595.79 causing crashes', 'Often misattributed as an Update 8 hotfix — it was actually the last Update 7 era patch, shipped a month before Forging the Path']}
        />
      </div>
    ),
  },
  {
    id: 'update8-forging-path',
    title: 'Update 8: Forging the Path',
    icon: <Hammer className="w-5 h-5" />,
    summary: 'May 2026 update — the largest overhaul ever: Adventure Sharing, Focus/Special Abilities, heavy attacks, equipment upgrades, skill tree revamp, and complete combat rework.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update #8 (v0.9.1.0) — Forging the Path — is the most transformative update in Enshrouded's history. It overhauled combat with Focus/Special Abilities and heavy attacks, added equipment upgrading for armor/shields/rings, completely reworked the skill tree, introduced Adventure Sharing, and added the Quick Stack Station. All characters had their skill trees reset on login.
        </p>

        <InfoBox title="Critical: Skill Tree Reset Required" type="warning">
          Upon loading Update 8 for the first time, ALL characters had their skill points refunded. You MUST re-spend all skill points before adventuring. The skill tree was significantly reworked — old builds may not be possible in the new tree. Additionally, default key bindings changed for several features. Check your key bindings after updating!
        </InfoBox>

        <PatchCard
          version="v0.9.1.0"
          date="May 2026"
          title="Forging the Path"
          highlights={['Adventure Sharing: upload/browse/download community worlds', 'Focus/Special Abilities: new combat resource building from attacks', 'Heavy attacks on all melee weapons (double damage/stun)', 'Armor, shields, wards, rings, tools now upgradeable with Runes', 'Skill tree completely reworked: 20+ new nodes, 80+ upgradeable skills', 'Advanced enemy stealth/awareness system', 'Quick Stack Station for automatic inventory sorting into chests']}
          features={['Adventure Sharing: upload your world for others, browse community creations, download and visit', 'Craftable camera item for taking base preview screenshots', 'Flame Altar visitor spawn point toggle', 'Focus resource: builds from regular attacks, fills a bar for Special Abilities', 'Special Abilities: weapon-specific devastating moves (unlocked via skills)', 'Heavy attacks on ALL melee weapons: hold attack button, double damage and stun', 'Pickaxe and wood axe also get Special Abilities using Focus', 'Reworked attack chains for 2H axes, hammers, and greatswords', 'Armor upgrade system: upgrade with Runes at class-appropriate NPC (Blacksmith=warrior, Huntress=ranger, Alchemist=mage)', 'Shield, ward, ring upgrades also available', 'Pickaxe and wood axe upgradeable', 'New perks: some increase skill level beyond skill tree cap', 'Armor calculation reworked: upgrading has noticeable impact, up to 80% damage mitigation (was 60%)', '20+ new skill nodes added', '80+ skills now upgradeable with multiple levels', 'Double Jump moved to center of tree (accessible to all)', 'Strategic Manever skill: dodge behind locked target in melee', 'Skill tree zoom in/out', 'XP pacing reworked: faster early levels, more XP from exploration/quests', 'HUD reminder to spend skill points on level up', 'Advanced enemy awareness: suspicious → search → combat', 'Enemy awareness UI widget', 'Enemy targeting completely reworked: more natural aggro', 'Enemies can flank players occupied with another enemy', 'Enemies can dodge arrows and spells occasionally', 'Dodge rolls and blink now have i-frames (invincibility frames)', 'Automatic camera distance adjustment in combat', 'Quick Stack Station: auto-deposits stackable items into nearby magic chests', 'Magic chests toggle for Quick Stack acceptance', 'Material Catalog in building menu: view, sort, select all materials', 'Sample material by pointing at building block/terrain', 'Building from magic chests: no longer need 1 item in backpack first', 'Two new crafting tables and factory for Farmer/Carpenter', 'Decoration Workbench with community-requested props', 'Chests show first 3 unique items as preview', 'Boss trophies have much higher comfort points', 'Spiral stair props added', 'Water dispensers work regardless of player distance', 'Water flows much further on flat surfaces (canals may flood)', 'Improved water barrier loading (no more water falling through on load)', 'Springlands visual overhaul: denser vegetation, improved details', 'Tutorial cave reworked', 'Revelwoods and Blackmire forest density upgraded to Veilwater level', '60Hz issue resolved', '3 new meat skewer recipes (one per class) for early food buffs', 'Quests split into Main and Side categories', 'Item Sets: collect all items from a group for XP rewards', 'Bases menu shows factory progress overview', 'World map additional zoom level', 'Editable signs, plaques, road-signs']}
          fixes={['Mage early-game buffs: wand range increased, wand durability +20%, Fireball T1 explosion radius increased, more resin in early loot', 'Armor distribution revised: warrior=more physical, mage=more magical, ranger=balanced', 'Hollow Halls end rooms: 2 class-specific chests (warrior/ranger/mage)', '15 new weapon models', 'All weapon durability increased (wands/daggers/shields +20%, melee/bows +10%)', 'Max durability loss per strike: 5 → 3 instances', 'Crafting resources show acquisition hints', 'Additional damage display reworked for perks', 'Setting to prevent auto-add to action bar on pickup', 'Blood Rose vanity set tintable', 'Late-game comfort accumulates slightly less efficiently (high comfort harder to push)', 'Water simulation: 20+ fixes for overflow, waterfalls, drains, performance', 'Enemy jump behavior improved', 'Reduced Fell melee run-in attack damage', 'Fixed several enemy rapid block-switching issues', 'Shroud Stalker weak points now attackable', 'Fell Monstrosity weak points fixed', 'Frost Bats now resistant to ice (was shock)', 'Fixed enemy trap avoidance', 'Increased "Few" enemy density setting', 'Numerous crash fixes and stability improvements']}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Update 8 Hotfixes &amp; Patches (May–June 2026)</h3>
        <PatchCard
          version="Hotfix #37 / v0.9.1.0"
          date="April 21, 2026"
          title="Hotfix #37 — Launch Day Fix"
          features={[]}
          fixes={['Released alongside Update 8 (same revision 999467, no version change)', 'Fixed an issue that prevented dismissing an error message', 'Note: Hotfix #36 was NOT an Update 8 patch — it shipped March 24, 2026 (v0.9.0.4) fixing Nvidia RTX 50 series GPU driver issues (see Update 7 section)']}
        />
        <PatchCard
          version="Hotfix #38 / v0.9.1.0"
          date="May 2026"
          title="Hotfix #38 — Texture & Water Fixes"
          features={[]}
          fixes={['Added internal support for better information collection for crashes', 'Fixed several randomly occurring crashes', 'Added potential fix for black textures reported by players', 'Fixed water rendering issues reported by players', 'Fixed chunks of water flying in big bases after loading']}
        />
        <PatchCard
          version="Hotfix #39 / v0.9.1.0"
          date="May 2026"
          title="Hotfix #39 — Equipment Recovery Fix"
          features={[]}
          fixes={['Fixed rare issue with lost equipment items when updating to Update 8', 'Previously, in very large item collections, some items did not convert to upgradable items correctly']}
        />
        <PatchCard
          version="Hotfix #40 / v0.9.1.1"
          date="May 2026"
          title="Hotfix #40 — Mining & Lake Performance"
          features={[]}
          fixes={['Fixed mining animation and mining sound breaking and getting out of sync', 'Fixed extreme rubberbanding and performance issues in bases near large lakes', 'Puddles now forming on streets again when it rains']}
        />
        <PatchCard
          version="Patch #14 / v0.9.1.1"
          date="May 2026"
          title="Patch #14 — World Loading & Skill Fixes"
          features={[]}
          fixes={['Fixed endless world loading issue reported by players', 'Fixed potential crash connected to NPC pathfinding', 'Fixed several randomly occurring crashes', 'Fixed Inner Fires skill adding incorrect amount of time in the Shroud', 'Fixed XP rewards for item sets (now grants as intended)', 'Improved controller support in Adventure Sharing menus']}
        />
        <PatchCard
          version="Hotfix #41 / v0.9.1.2"
          date="May 2026"
          title="Hotfix #41 — VFX Crash Fix"
          features={[]}
          fixes={['Fixed VFX issue that might lead to a crash', 'Improved crash detection for future diagnosis', 'Fixed dodge roll stuttering when standing still after the roll', 'Affected many VFX files — shader compilation may take longer than usual']}
        />
        <PatchCard
          version="Hotfix #42 / v0.9.1.2"
          date="June 2026"
          title="Hotfix #42 — Community Link Update"
          features={[]}
          fixes={['Updated links for bug reports, feedback and community spaces for Chinese (Simplified/Traditional), Japanese and Korean', 'No shader recompilation required', 'Dedicated servers do not need an update']}
        />

        <InfoBox title="Combat is Forever Changed" type="tip">
          Update 8's combat overhaul fundamentally changed how Enshrouded plays. The Focus/Special Abilities system added a new layer of depth — builds now revolve around generating Focus efficiently and choosing the right Special Ability for the encounter. Heavy attacks made slow weapons more viable by providing burst damage and guaranteed stun. I-frames on dodge rolls made skill expression more rewarding. Combined with the equipment upgrade system, Update 8 gave players more build diversity and power progression than ever before.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'update4-unmarked',
    title: 'Update 4: Unmarked Patch',
    icon: <Bug className="w-5 h-5" />,
    summary: 'The unmarked April 2024 patch that preceded Update 5 — primarily bug fixes, balance adjustments, and technical improvements between major content drops.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Between Update #3 (January 2025) and Update #5 (September 2024), there was a period of focused technical improvements and balance patches. While not given a major update name, these patches addressed critical issues and prepared the game for the Albaneve Summits expansion.
        </p>

        <PatchCard
          version="v0.7.4.x"
          date="April–August 2024"
          title="Inter-Update Patches"
          features={[]}
          fixes={['Continued stability improvements and crash fixes', 'Multiplayer synchronization refinements', 'NPC pathfinding improvements', 'Base building structural integrity fixes', 'Recipe and crafting balance adjustments', 'Enemy spawn and level distribution tuning', 'Performance optimizations for lower-end hardware', 'Shroud mechanic polish and timer adjustments', 'Preparation for Albaneve Summits biome integration']}
        />

        <InfoBox title="The Quiet Period" type="info">
          The months between Update #3 and Update #5 were focused on backend improvements. Keen Games spent this time rebuilding systems for the major biome additions, ensuring the game engine could handle dynamic weather, cold mechanics, and the significantly larger world area that Albaneve Summits would introduce. Players who experienced the game during this period noticed incremental improvements to stability and performance even without major new content.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'roadmap-future',
    title: 'Roadmap & Future',
    icon: <Rocket className="w-5 h-5" />,
    summary: 'The 2026 roadmap, 1.0 release plans, console versions, Adventure Sharing V2, and everything coming next for Enshrouded.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded is heading toward its 1.0 release in Autumn 2026. Keen Games has laid out an ambitious roadmap that includes console releases, new content, combat improvements, and the evolution of the Adventure Sharing system.
        </p>

        <InfoBox title="1.0 Release Date Announced" type="info">
          <strong>Enshrouded 1.0 will release on October 15, 2026</strong> — the date was officially revealed on June 25, 2026 with an announcement video. This marks the end of Early Access and the beginning of the full release. The 1.0 version will include all content from the Early Access period plus new locations, enemies, features, and significant improvements across all systems.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">2026 Content Roadmap</h3>
        <PatchCard
          version="Spring 2026"
          date="March–May 2026"
          title="Pre-1.0 Polish Update"
          highlights={['Adventure Sharing V1 released (share/download community worlds)', 'General polishing, bug fixes, and balancing', 'Combat tweaks and quality-of-life improvements']}
          features={['Adventure Sharing V1: upload your world, browse community creations, download and visit', 'Camera item for base preview screenshots', 'Flame Altar visitor spawn point toggle', 'Combat tweaks: damage number visibility, blocking/parry animations', 'Projectile spell/attack accuracy improvements', 'New vanity armor set', 'Exploding barrels less frequent']}
          fixes={[]}
        />
        <PatchCard
          version="v1.0.0"
          date="October 15, 2026"
          title="Enshrouded 1.0 Release"
          highlights={['Full release out of Early Access', 'New locations and enemies', 'Combat improvements: tactical depth, AI, greatsword rework', 'Adventure Sharing V2: enhanced with logic systems, puzzles, enemy spawning, traps', 'Console release: PlayStation 5', 'Optimization for lower-end PCs', 'Improved new player experience and quests']}
          features={['New map areas unlocked (previously blocked by Early Access barrier)', 'New locations with unique enemies and challenges', 'Combat system: added tactical depth, improved enemy AI and variety', 'Greatsword combat reworked for better feel', 'Adventure Sharing V2: logic systems for interactive elements, puzzles, enemy spawning, traps', 'Building system: new features and improvements', 'Optimized performance for lower-end hardware', 'Improved new player onboarding and quest flow', 'Post-launch content framework established']}
          fixes={[]}
        />
        <PatchCard
          version="Spring 2027"
          date="2027"
          title="Xbox Console Release"
          highlights={['Xbox Series X/S version', 'Cross-platform considerations', 'Continued content support']}
          features={['Xbox Series X/S full release', 'Feature parity with PC/PS5 version', 'Continued free content updates and paid expansions planned']}
          fixes={[]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Post-Launch Content Plans</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Free Content Updates:</strong> Keen Games has committed to ongoing free content drops post-1.0, including new biomes, enemies, weapons, building materials, and quality-of-life improvements.</li>
            <li><strong className="text-[var(--text-primary)]">Paid Expansions:</strong> Larger content additions will be released as paid expansions, similar to major DLC. These will add significant new areas, story content, and game systems.</li>
            <li><strong className="text-[var(--text-primary)]">Adventure Sharing Evolution:</strong> The long-term vision for Adventure Sharing includes player-created dungeons, logic-based puzzles, trap systems, and essentially a level editor within the game. This could transform Enshrouded into a platform for user-generated content.</li>
            <li><strong className="text-[var(--text-primary)]">Console Parity:</strong> All platforms (PC, PS5, Xbox) will receive the same content updates, with Keen Games committed to maintaining feature parity across all versions.</li>
            <li><strong className="text-[var(--text-primary)]">Shader Compilation:</strong> A key area of ongoing optimization. Keen Games has identified shader compilation stutter as a priority fix for post-launch updates.</li>
          </ul>
        </div>

        <InfoBox title="5 Million Players and Counting" type="tip">
          As of early 2026, Enshrouded has surpassed 5 million players. The game has maintained a strong community throughout Early Access, with consistent monthly updates and active developer communication. The 1.0 release on October 15, 2026 represents the culmination of nearly 3 years of development and community collaboration. With console releases and a robust post-launch content plan, Enshrouded is positioned to be one of the defining survival games of its generation.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'version-timeline',
    title: 'Complete Version Timeline',
    icon: <History className="w-5 h-5" />,
    summary: 'Every version at a glance — from the January 2024 Early Access launch to v0.9.1.2 and the October 2026 full release. Version numbers, dates, milestones, and hotfix ranges in one table.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The complete Enshrouded version history in one place. Keen Games uses two numbering systems: <strong>Updates</strong> (major content drops, officially numbered — Wake of the Water was Update 7, Forging the Path Update 8), <strong>Patches</strong> (medium fixes with content), and <strong>Hotfixes</strong> (small urgent fixes, numbered continuously across the game's life — 42 so far). The current live version is <strong>v0.9.1.2</strong>.
        </p>

        <div className="game-panel corner-decor p-4 overflow-x-auto">
          <table className="w-full text-xs text-[var(--text-secondary)]">
            <thead>
              <tr className="border-b border-[var(--text-muted)]/20">
                <th className="text-left py-2 pr-3 font-cinzel text-[var(--text-gold)]">Version</th>
                <th className="text-left py-2 pr-3 font-cinzel text-[var(--text-gold)]">Date</th>
                <th className="text-left py-2 pr-3 font-cinzel text-[var(--text-gold)]">Milestone</th>
                <th className="text-left py-2 font-cinzel text-[var(--text-gold)]">Patches &amp; Hotfixes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--text-muted)]/10">
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.1.x</td><td className="py-2 pr-3 whitespace-nowrap">Jan 24, 2024</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Early Access Launch</strong> — 1M+ players in two weeks</td><td className="py-2">Hotfixes #1–8 (launch week + Feb)</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.2.x</td><td className="py-2 pr-3 whitespace-nowrap">Mar 26, 2024</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Update 1: Hollow Halls</strong> — first major content drop</td><td className="py-2">Hotfixes #9–11</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.6.x</td><td className="py-2 pr-3 whitespace-nowrap">Jun 5, 2024</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Update 2: Melodies of the Mire</strong> — Blackmire expansion</td><td className="py-2">Hotfixes #12–13</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.7.3.0</td><td className="py-2 pr-3 whitespace-nowrap">Jul 2024</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Back to the Shroud</strong> — Shroud overhaul + summer event</td><td className="py-2">Hotfixes #14–16</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.7.4.x</td><td className="py-2 pr-3 whitespace-nowrap">Nov 5, 2024</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Souls of the Frozen Frontier</strong> — Albaneve Summits biome, cold mechanics</td><td className="py-2">Inter-update patches</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.8.x</td><td className="py-2 pr-3 whitespace-nowrap">Jan 2025</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Pact of the Flame</strong> — skill tree reset, block decay, parry indicators</td><td className="py-2">Feb 2025 patches</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.8.x</td><td className="py-2 pr-3 whitespace-nowrap">May 2025</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Thralls of Twilight</strong> — Weapon Gems, Night Temples, Barber</td><td className="py-2">Mid-2025 patches</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.0.0</td><td className="py-2 pr-3 whitespace-nowrap">Nov 11, 2025</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Update 7: Wake of the Water</strong> — swimming, Veilwater Basin, greatswords, fishing</td><td className="py-2">Hotfix #30</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.0.1</td><td className="py-2 pr-3 whitespace-nowrap">Nov 13, 2025</td><td className="py-2 pr-3">Patch #10 — post-launch crash fixes</td><td className="py-2">Hotfixes #31–32</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.0.2</td><td className="py-2 pr-3 whitespace-nowrap">Nov 25, 2025</td><td className="py-2 pr-3">Patch #11 — water simulation fluidity pass</td><td className="py-2">Hotfix #33 (Nvidia driver crash)</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.0.3</td><td className="py-2 pr-3 whitespace-nowrap">Dec 16, 2025</td><td className="py-2 pr-3">Patch #12 — holiday QoL, Maritime furniture, stamina buffs</td><td className="py-2">Hotfix #34 (Water Barrier crash)</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.0.4</td><td className="py-2 pr-3 whitespace-nowrap">Jan–Mar 2026</td><td className="py-2 pr-3">Patch #13 — final Update 7 patch; cloth physics fixes</td><td className="py-2">Hotfix #35 (Jan 26), Hotfix #36 (Mar 24, RTX 50 series fix)</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.1.0</td><td className="py-2 pr-3 whitespace-nowrap">Apr 21, 2026</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Update 8: Forging the Path</strong> — combat rework, gear upgrades, Adventure Sharing; skill trees reset</td><td className="py-2">Hotfixes #37–39</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.1.1</td><td className="py-2 pr-3 whitespace-nowrap">Apr 29, 2026</td><td className="py-2 pr-3">Patch #14 — world loading, Inner Fires, item set XP fixes</td><td className="py-2">Hotfix #40 (May 6, mining sync + lake performance)</td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v0.9.1.2</td><td className="py-2 pr-3 whitespace-nowrap">May 11, 2026</td><td className="py-2 pr-3">Hotfix #41 — VFX crash, dodge roll stutter</td><td className="py-2">Hotfix #42 (Jun 29, community links) — <strong className="text-[var(--text-primary)]">current version</strong></td></tr>
              <tr><td className="py-2 pr-3 whitespace-nowrap">v1.0.0</td><td className="py-2 pr-3 whitespace-nowrap">Oct 15, 2026</td><td className="py-2 pr-3"><strong className="text-[var(--text-primary)]">Full Release</strong> — announced Jun 25, 2026; PS5 launch, new areas, Adventure Sharing V2</td><td className="py-2">Upcoming</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Reading the Version Numbers" type="info">
          Enshrouded's version scheme: v0.<strong>major</strong>.<strong>minor</strong>.<strong>revision</strong>. The 0.7 era covered 2024's mid-year patches and Albaneve; 0.8 covered Pact of the Flame through Thralls of Twilight; 0.9.0.x is the Wake of the Water era; 0.9.1.x is the Forging the Path era. Hotfix numbers (1–42) never reset and span the entire Early Access period — that is why Hotfix #36 belongs to the Update 7 era even though it shipped just weeks before Update 8.
        </InfoBox>
      </div>
    ),
  },
];
