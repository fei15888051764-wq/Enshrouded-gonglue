import { Fish, Bug, MapPin, Lightbulb, Anchor, Trophy, Scroll, Gem } from 'lucide-react';
import type { ReactNode } from 'react';

// ==================== TYPE INTERFACES ====================

export interface FishingRod {
  name: string;
  tier: string;
  unlock: string;
  strength: number;
  endurance: number;
  special?: string;
  description: string;
}

export interface Bait {
  name: string;
  type: 'Wild' | 'Crafted';
  recipe: string;
  attracts: string[];
  description: string;
}

export interface FishData {
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic';
  locations: string[];
  bestBait: string[];
  uses: string;
  description: string;
}

export interface FishingLocation {
  name: string;
  region: string;
  fishAvailable: string[];
  notes: string;
}

export interface FishingTip {
  title: string;
  content: string;
}

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

// ==================== DATA: FISHING RODS ====================

export const fishingRods: FishingRod[] = [
  {
    name: 'Simple Fishing Rod',
    tier: 'Starter',
    unlock: 'Manual Crafting after accepting "Unknown Waters" quest from the Hunter',
    strength: 1,
    endurance: 30,
    description: 'Your first fishing rod. Basic stats suitable for common and uncommon fish. Struggles with rare and epic fish.',
  },
  {
    name: 'Cursed Fishing Rod',
    tier: 'Special',
    unlock: 'Reward from "A Cursed Catch" quest',
    strength: 1,
    endurance: 40,
    special: 'Higher chance to catch trash loot and other items (Wet Boot Weight: 5.0, Other Items: 4.0)',
    description: 'A cursed rod with unusual luck properties. Catches more non-fish items than other rods, making it interesting for treasure hunters.',
  },
  {
    name: 'Improved Fishing Rod',
    tier: 'Mid',
    unlock: 'Recipe unlocked by crafting Iron Bars',
    strength: 2,
    endurance: 45,
    description: 'A significant upgrade over the Simple Rod. The increased strength and endurance let you reliably catch rare fish.',
  },
  {
    name: 'Lucky Fishing Rod',
    tier: 'Mid-Game',
    unlock: 'Found in chest at Suspicious Drak\'dal Ruins in Veilwater Basin (during "Lucky Catch"), then craftable at the Fisher',
    strength: 2,
    endurance: 50,
    special: 'Very low Wet Boot chance (0.5) + high Other Items chance (4.0) — excellent for treasure fishing',
    description: 'One of the best rods in the game. Excellent stats and a bonus chance to pull up rare treasures alongside fish. Found by digging at the large cross marker in Suspicious Drak\'dal Ruins.',
  },
  {
    name: 'Excellent Fishing Rod',
    tier: 'Endgame',
    unlock: 'Obtained during "Nice Day For Fishing" quest from the Fisher, then craftable at the Fisher',
    strength: 2,
    endurance: 55,
    description: 'The ultimate fishing rod with the highest endurance in the game (+55). Makes catching epic fish much easier. Essential for endgame fishing.',
  },
];

// ==================== DATA: BAIT ====================

export const baits: Bait[] = [
  {
    name: 'Fire Fly',
    type: 'Wild',
    recipe: 'Collect at night in Springlands (natural spawn)',
    attracts: ['Shimmerfin (43%)', 'Lakehopper (43%)', 'Silverback (2%)', 'Sunscale (4%)', 'Stripetail (4%)', 'Whiskerfin (2%)'],
    description: 'Found only at night in Springlands. Best wild bait for catching common fish. Fireflies glow in the dark near water bodies.',
  },
  {
    name: 'Moth',
    type: 'Wild',
    recipe: 'Collect at night in Revelwood (natural spawn)',
    attracts: ['Stripetail (28%)', 'Sunscale (28%)', 'Whiskerfin (8%)', 'Shimmerfin (8%)', 'Lakehopper (8%)', 'Crimsonback (1%)', 'Waveleaper (1%)'],
    description: 'Found only at night in Revelwood. Targets uncommon fish with high probability. Essential for early uncommon fish farming.',
  },
  {
    name: 'Grasshopper',
    type: 'Wild',
    recipe: 'Collect in Nomad Highlands (any time)',
    attracts: ['Stripetail (15%)', 'Sunscale (15%)', 'Whiskerfin (22%)', 'Shimmerfin (3%)', 'Lakehopper (3%)', 'Crimsonback (2%)', 'Emberfin (4%)', 'Shadowtail (2%)', 'Waveleaper (4%)', 'Shockfin (1%)', 'Thornridge (1%)', 'Yellowfin (1%)'],
    description: 'Found throughout Nomad Highlands during day or night. Well-balanced bait with good uncommon fish odds and slight rare fish chances.',
  },
  {
    name: 'Scarab',
    type: 'Wild',
    recipe: 'Collect in Kindlewastes (any time)',
    attracts: ['Emberfin (24%)', 'Waveleaper (24%)', 'Crimsonback (4%)', 'Shadowtail (4%)', 'Stripetail (6%)', 'Sunscale (6%)', 'Whiskerfin (9%)', 'Shimmerfin (1%)', 'Lakehopper (1%)', 'Shockfin (2%)', 'Thornridge (2%)', 'Yellowfin (2%)'],
    description: 'Found in the desert Kindlewastes. Best wild bait for rare fish. Significantly boosts chances for Emberfin and Waveleaper.',
  },
  {
    name: 'Pillbug',
    type: 'Wild',
    recipe: 'Collect in Albaneve Summits (any time)',
    attracts: ['Crimsonback (19%)', 'Shadowtail (19%)', 'Emberfin (13%)', 'Waveleaper (13%)', 'Silverback (5%)', 'Stripetail (3%)', 'Sunscale (3%)', 'Whiskerfin (5%)', 'Shockfin (3%)', 'Thornridge (3%)', 'Yellowfin (3%)'],
    description: 'Found in the cold Albaneve Summits. Excellent for targeting Crimsonback and Shadowtail. Good alternative to Scarab for rare fish.',
  },
  {
    name: 'Frog',
    type: 'Wild',
    recipe: 'Collect in Veilwater Basin (any time)',
    attracts: ['Shockfin (17%)', 'Thornridge (17%)', 'Yellowfin (17%)', 'Crimsonback (10%)', 'Shadowtail (10%)', 'Emberfin (7%)', 'Waveleaper (7%)', 'Stripetail (2%)', 'Sunscale (2%)', 'Whiskerfin (5%)'],
    description: 'The most valuable wild bait in the game. Found in Veilwater Basin. Only wild bait with good odds for epic fish. Essential for Shockfin, Thornridge, and Yellowfin farming.',
  },
  {
    name: 'Simple Fishing Bait',
    type: 'Crafted',
    recipe: 'Manual Crafting: 1 Insect Material',
    attracts: ['Lakehopper (66%)', 'Shimmerfin (33%)'],
    description: 'The most basic crafted bait. Only catches common fish. Good for beginners learning the fishing mini-game.',
  },
  {
    name: 'Common Fishing Bait',
    type: 'Crafted',
    recipe: 'Fisher NPC: Fire Fly + Basic Materials',
    attracts: ['Lakehopper (27%)', 'Shimmerfin (27%)', 'Silverback (27%)', 'Sunscale (1%)', 'Stripetail (1%)', 'Whiskerfin (1%)', 'Crimsonback (1%)', 'Emberfin (1%)', 'Shadowtail (1%)', 'Waveleaper (1%)', 'Shockfin (1%)', 'Thornridge (1%)', 'Yellowfin (1%)'],
    description: 'Crafted at the Fisher NPC. Primarily targets common fish but has a small chance at all rarities.',
  },
  {
    name: 'Uncommon Fishing Bait',
    type: 'Crafted',
    recipe: 'Fisher NPC: Moth/Grasshopper + Basic Materials',
    attracts: ['Stripetail (27%)', 'Sunscale (27%)', 'Whiskerfin (27%)', 'Shimmerfin (1%)', 'Lakehopper (1%)', 'Silverback (1%)', 'Crimsonback (1%)', 'Emberfin (1%)', 'Shadowtail (1%)', 'Waveleaper (1%)', 'Shockfin (1%)', 'Thornridge (1%)', 'Yellowfin (1%)'],
    description: 'Crafted at the Fisher NPC. Targets uncommon fish species. Recipe unlocked through Fisher quests.',
  },
  {
    name: 'Rare Fishing Bait',
    type: 'Crafted',
    recipe: 'Fisher NPC: Scarab/Pillbug + Fish Bones + Gold Coins',
    attracts: ['Crimsonback (25%)', 'Waveleaper (25%)', 'Emberfin (19%)', 'Shadowtail (19%)', 'Shimmerfin (1%)', 'Lakehopper (1%)', 'Silverback (1%)', 'Sunscale (1%)', 'Stripetail (1%)', 'Whiskerfin (1%)', 'Shockfin (1%)', 'Thornridge (1%)', 'Yellowfin (1%)'],
    description: 'Crafted at the Fisher NPC. Requires Fish Bones from dismantling epic fish and Gold Coins from ruins. Best bait for rare fish farming.',
  },
  {
    name: 'Epic Fishing Bait',
    type: 'Crafted',
    recipe: 'Fisher NPC: Frog + Fish Bones + Fish Teeth + Capybara Bristles + Gold Coins',
    attracts: ['Shockfin (29%)', 'Thornridge (29%)', 'Yellowfin (29%)', 'Shimmerfin (1%)', 'Lakehopper (1%)', 'Silverback (1%)', 'Sunscale (1%)', 'Stripetail (1%)', 'Whiskerfin (1%)', 'Crimsonback (1%)', 'Emberfin (1%)', 'Shadowtail (1%)', 'Waveleaper (1%)'],
    description: 'The ultimate crafted bait. Requires Fish Bones, Fish Teeth (from epic fish), Capybara Bristles, and Gold Coins. Dramatically improves catch rate for all three epic fish.',
  },
];

// ==================== DATA: FISH ====================

export const fishList: FishData[] = [
  {
    name: 'Lakehopper',
    rarity: 'Common',
    locations: ['Springlands', 'All biomes (lower odds)'],
    bestBait: ['Simple Fishing Bait', 'Fire Fly', 'Common Fishing Bait'],
    uses: 'Basic cooking ingredient. Restores small amount of Health and Stamina.',
    description: 'A small common fish that hops near the water surface. Easily caught with basic gear. Perfect for learning the fishing mini-game.',
  },
  {
    name: 'Shimmerfin',
    rarity: 'Common',
    locations: ['Springlands', 'All biomes (lower odds)'],
    bestBait: ['Simple Fishing Bait', 'Fire Fly', 'Common Fishing Bait'],
    uses: 'Basic cooking ingredient. Restores small amount of Health and Stamina.',
    description: 'A shimmering fish with reflective scales. One of the most common catches for beginners.',
  },
  {
    name: 'Silverback',
    rarity: 'Common',
    locations: ['Springlands', 'All biomes (lower odds)'],
    bestBait: ['Common Fishing Bait', 'Pillbug'],
    uses: 'Cooking ingredient. Used in recipes providing Health and Stamina buffs.',
    description: 'A silvery fish with a distinctive dark back. Slightly harder to catch than other common fish.',
  },
  {
    name: 'Stripetail',
    rarity: 'Uncommon',
    locations: ['Revelwood', 'Nomad Highlands', 'All biomes (lower odds)'],
    bestBait: ['Moth', 'Uncommon Fishing Bait', 'Grasshopper'],
    uses: 'Cooking ingredient. Restores 30 Health and 20 Stamina when eaten.',
    description: 'A slender fish with distinctive black stripes running along its body. Requires better bait and timing to catch.',
  },
  {
    name: 'Sunscale',
    rarity: 'Uncommon',
    locations: ['Revelwood', 'Nomad Highlands', 'All biomes (lower odds)'],
    bestBait: ['Moth', 'Uncommon Fishing Bait', 'Grasshopper'],
    uses: 'Cooking ingredient. Restores 30 Health and 20 Stamina when eaten.',
    description: 'A golden-scaled fish that glitters in sunlight. Found in the warmer waters of Revelwood and Nomad Highlands.',
  },
  {
    name: 'Whiskerfin',
    rarity: 'Uncommon',
    locations: ['Revelwood', 'Nomad Highlands', 'All biomes (lower odds)'],
    bestBait: ['Grasshopper', 'Uncommon Fishing Bait', 'Moth'],
    uses: 'Cooking ingredient. Restores 30 Health and 20 Stamina when eaten.',
    description: 'A fish with long whisker-like barbels near its mouth. Prefers the flowing waters of Nomad Highlands.',
  },
  {
    name: 'Crimsonback',
    rarity: 'Rare',
    locations: ['Kindlewastes', 'Albaneve Summits', 'All biomes (lower odds)'],
    bestBait: ['Scarab', 'Rare Fishing Bait', 'Pillbug'],
    uses: 'Advanced cooking ingredient. Provides significant Health and Stamina regeneration buffs.',
    description: 'A striking fish with deep crimson coloring on its back. Found in the harsher environments of Kindlewastes and Albaneve Summits.',
  },
  {
    name: 'Emberfin',
    rarity: 'Rare',
    locations: ['Kindlewastes', 'Albaneve Summits', 'All biomes (lower odds)'],
    bestBait: ['Scarab', 'Rare Fishing Bait', 'Frog'],
    uses: 'Advanced cooking ingredient. Provides significant Health and Stamina regeneration buffs.',
    description: 'A fiery-colored fish with ember-like patterns on its fins. Thrives in the warm waters of Kindlewastes.',
  },
  {
    name: 'Shadowtail',
    rarity: 'Rare',
    locations: ['Kindlewastes', 'Albaneve Summits', 'All biomes (lower odds)'],
    bestBait: ['Pillbug', 'Rare Fishing Bait', 'Scarab'],
    uses: 'Advanced cooking ingredient. Provides significant Health and Stamina regeneration buffs.',
    description: 'A dark, elusive fish with shadowy coloration. Prefers the cold, deep waters of Albaneve Summits.',
  },
  {
    name: 'Waveleaper',
    rarity: 'Rare',
    locations: ['Kindlewastes', 'Albaneve Summits', 'All biomes (lower odds)'],
    bestBait: ['Scarab', 'Rare Fishing Bait', 'Pillbug'],
    uses: 'Advanced cooking ingredient. Provides significant Health and Stamina regeneration buffs.',
    description: 'An athletic fish known for leaping out of water. Catching it requires good timing in the fishing mini-game.',
  },
  {
    name: 'Shockfin',
    rarity: 'Epic',
    locations: ['Veilwater Basin', 'All biomes (very low odds)'],
    bestBait: ['Epic Fishing Bait', 'Frog'],
    uses: 'Crafting material for Electric Nerves (required for certain spells). Also used in top-tier cooking recipes.',
    description: 'An epic fish that crackles with electrical energy. The most valuable fish for crafting — required to make Electric Nerves for spellcasting. Only found reliably in Veilwater Basin.',
  },
  {
    name: 'Thornridge',
    rarity: 'Epic',
    locations: ['Veilwater Basin', 'All biomes (very low odds)'],
    bestBait: ['Epic Fishing Bait', 'Frog'],
    uses: 'Dismantle at the Angler to obtain Fish Bones (required for Epic Fishing Bait). Used in top-tier cooking.',
    description: 'A spiny epic fish with thorn-like ridges along its back. Dismantling it yields Fish Bones, a critical component for crafting Epic Fishing Bait.',
  },
  {
    name: 'Yellowfin',
    rarity: 'Epic',
    locations: ['Veilwater Basin', 'All biomes (very low odds)'],
    bestBait: ['Epic Fishing Bait', 'Frog'],
    uses: 'Dismantle at the Angler to obtain Fish Teeth (required for Epic Fishing Bait). Used in top-tier cooking.',
    description: 'A majestic epic fish with bright yellow fins. Dismantling it yields Fish Teeth, essential for crafting Epic Fishing Bait.',
  },
];

// ==================== DATA: FISHING LOCATIONS ====================

export const fishingLocations: FishingLocation[] = [
  {
    name: 'Springlands Lakes',
    region: 'Springlands',
    fishAvailable: ['Lakehopper', 'Shimmerfin', 'Silverback'],
    notes: 'The best starting location for new anglers. Calm waters and high spawn rates for common fish. Fire Flies can be gathered here at night for bait. Safe from dangerous enemies.',
  },
  {
    name: 'Revelwood Rivers',
    region: 'Revelwood',
    fishAvailable: ['Stripetail', 'Sunscale', 'Whiskerfin', 'Lakehopper', 'Shimmerfin'],
    notes: 'Flowing rivers with good uncommon fish spawn rates. Moths can be collected at night. Watch out for Fae enemies in the area.',
  },
  {
    name: 'Nomad Highlands Streams',
    region: 'Nomad Highlands',
    fishAvailable: ['Stripetail', 'Sunscale', 'Whiskerfin', 'Lakehopper', 'Shimmerfin', 'Silverback'],
    notes: 'High-altitude streams with clear water. Grasshoppers are abundant here. Good spot for farming uncommon fish while gathering other highland resources.',
  },
  {
    name: 'Kindlewastes Oasis',
    region: 'Kindlewastes',
    fishAvailable: ['Crimsonback', 'Emberfin', 'Shadowtail', 'Waveleaper', 'Stripetail', 'Sunscale'],
    notes: 'Rare oasis pools in the desert. Scarabs can be found here for bait. High rare fish spawn rate. Bring heat resistance gear.',
  },
  {
    name: 'Albaneve Summits Pools',
    region: 'Albaneve Summits',
    fishAvailable: ['Crimsonback', 'Shadowtail', 'Emberfin', 'Waveleaper', 'Silverback'],
    notes: 'Frozen alpine lakes with rare fish. Pillbugs are found here. Cold environment requires warm clothing. Excellent for Shadowtail farming.',
  },
  {
    name: 'Veilwater Basin Central Lake',
    region: 'Veilwater Basin',
    fishAvailable: ['Shockfin', 'Thornridge', 'Yellowfin', 'Crimsonback', 'Shadowtail'],
    notes: 'The ultimate fishing destination. Best spot for epic fish. Frogs can be collected here for wild bait. Underwater exploration nearby. Home to Captain Melville Fontane (the Fisher NPC).',
  },
  {
    name: 'Veilwater Basin Dock',
    region: 'Veilwater Basin',
    fishAvailable: ['Shockfin', 'Thornridge', 'Yellowfin', 'Emberfin', 'Waveleaper'],
    notes: 'Captain Melville Fontane\'s dock. Convenient fishing spot right next to the Fisher NPC for bait crafting and fish dismantling.',
  },
  {
    name: 'Suspicious Drak\'dal Ruins',
    region: 'Veilwater Basin',
    fishAvailable: ['Shockfin', 'Thornridge', 'Yellowfin'],
    notes: 'Notable for the buried chest containing the Lucky Fishing Rod. Look for the large cross on the ground and dig down. Good epic fishing spot nearby.',
  },
  {
    name: 'Player-Made Ponds',
    region: 'Any (Base Building)',
    fishAvailable: ['All fish types (biome-dependent odds)'],
    notes: 'You can fish in player-made ponds at your base. The fish spawn odds are determined by the biome your base is located in. Create your own personal fishing spot!',
  },
  {
    name: 'Hidden Cove (Secret)',
    region: 'Veilwater Basin',
    fishAvailable: ['Shockfin', 'Thornridge', 'Yellowfin'],
    notes: 'A secluded cove with exceptionally high epic fish spawn rates. Look for areas with visible fish ripples and bubbling water on the surface.',
  },
];

// ==================== DATA: FISHING TIPS ====================

export const fishingTips: FishingTip[] = [
  {
    title: 'Complete the Hunter\'s Quest First',
    content: 'Start with the "Unknown Waters" quest from the Hunter NPC. It teaches you fishing mechanics and rewards your first rod and bait recipe.',
  },
  {
    title: 'Find the Lucky Rod Early',
    content: 'Head to Suspicious Drak\'dal Ruins in Veilwater Basin as soon as you can. The Lucky Rod found there (dig at the large cross) has excellent stats and treasure-finding bonuses.',
  },
  {
    title: 'Match Bait to Biome',
    content: 'Each wild bait is tied to a biome and fish rarity. Fire Flies for common (Springlands), Moth/Grasshopper for uncommon (Revelwood/Nomad Highlands), Scarab/Pillbug for rare (Kindlewastes/Albaneve), and Frog for epic (Veilwater Basin).',
  },
  {
    title: 'Salvage Your First Epic Fish',
    content: 'Dismantle your first Thornridge and Yellowfin at the Angler NPC immediately. The Fish Bones and Fish Teeth they yield are required for Epic Fishing Bait, which dramatically improves your epic catch rate.',
  },
  {
    title: 'Master the Mini-Game',
    content: 'Pull in the OPPOSITE direction the fish is swimming (A or D keys). Click left mouse when segments complete. Watch both bars — green is your stamina, red is the fish\'s. Epic fish have more segments.',
  },
  {
    title: 'Fish at Night for Fire Flies and Moths',
    content: 'Fire Flies (Springlands) and Moths (Revelwood) only spawn at night. Plan your bait gathering runs accordingly.',
  },
  {
    title: 'Build a Smoker for Fish Recipes',
    content: 'Talk to the Farmer NPC to unlock fish cooking recipes. Build a Smoker at your base to expand your cooking options with fish.',
  },
  {
    title: 'Fish for Gems',
    content: 'Fishing is a reliable source of socketable gems for your weapons. The Lucky Rod has increased odds of catching treasure items including gems.',
  },
  {
    title: 'Use Epic Bait in Veilwater Basin',
    content: 'The only reliable way to catch Shockfin, Thornridge, and Yellowfin is using Epic Fishing Bait or Frogs in Veilwater Basin. Don\'t waste epic bait in other biomes.',
  },
  {
    title: 'Cook Fish for Diving Buffs',
    content: 'Fish-based meals grant extended breath capacity for underwater diving. This is crucial in Veilwater Basin where underwater exploration is central to progression.',
  },
  {
    title: 'Mount Fish as Trophies',
    content: 'Caught fish can be mounted as wall decorations in your base. Epic fish make impressive trophies to show off your fishing achievements.',
  },
  {
    title: 'The Bait Loop Strategy',
    content: 'Fish → Dismantle at Angler → Craft better bait → Catch rarer fish → Repeat. This positive feedback loop is the key to maxing out your fishing progression.',
  },
];

// ==================== SUBSECTIONS FOR ROUTING ====================

export const fishingSubSections: SubSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <Anchor className="w-5 h-5" />,
    summary: 'How to unlock fishing, the quest chain, and basic mechanics.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Fishing was introduced in the <strong className="text-[var(--text-gold)]">Wake of the Water update (Update 7)</strong>.
          It is a fully-fledged system with rods, bait tiers, hotspots, and valuable rewards including crafting materials,
          cooking ingredients, socketable gems, and wall trophies.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">How to Unlock Fishing</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li>Find the <strong className="text-[var(--text-primary)]">Hunter NPC</strong> and accept the <strong className="text-[var(--text-gold)]">"Unknown Waters"</strong> quest chain</li>
            <li>Complete the tutorial quests to learn casting, reeling, and landing mechanics</li>
            <li>You will receive a <strong>Simple Fishing Rod</strong> and <strong>Simple Fishing Bait</strong> recipe</li>
            <li>Later, find <strong>Captain Melville Fontane</strong> (the Fisher) in Veilwater Basin for advanced rods and bait recipes</li>
          </ol>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fishing Mini-Game Mechanics</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
            <li><strong>Equip bait:</strong> Put the rod on your hotbar, right-click to select bait</li>
            <li><strong>Cast:</strong> Hold left mouse button (longer = farther cast). Distance does not affect fish type.</li>
            <li><strong>Wait for bite:</strong> Watch the bobber, press left-click when a fish strikes</li>
            <li><strong>Reel:</strong> Pull in the <strong className="text-red-400">opposite direction</strong> the fish swims (A/D keys)</li>
            <li><strong>Click timing:</strong> Left-click each time a sub-segment on the red bar completes</li>
            <li><strong>Win/Lose:</strong> Green bar = your stamina, Red bar = fish stamina. Deplete the red bar to win!</li>
            <li><strong>Collect:</strong> Press E to keep the fish, or right-click to release it</li>
          </ol>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Key NPCs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">NPC</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Role</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Location</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlocks</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10">
                <td className="py-1.5 font-bold">Hunter</td>
                <td>Introduces fishing</td>
                <td>Early game</td>
                <td>Simple Rod, basic bait recipe</td>
              </tr>
              <tr>
                <td className="py-1.5 font-bold">Captain Melville Fontane (Fisher)</td>
                <td>Advanced fishing</td>
                <td>Veilwater Basin dock</td>
                <td>All rods, Epic bait recipes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'rods',
    title: 'Fishing Rods',
    icon: <Anchor className="w-5 h-5" />,
    summary: 'All 5 fishing rods with stats, unlock conditions, and special effects.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          There are <strong className="text-[var(--text-primary)]">5 fishing rods</strong> in Enshrouded, ranging from a basic starter to powerful endgame tools.
          Every rod has two core stats: <strong className="text-[var(--text-gold)]">Fishing Strength</strong> (how quickly fish stamina depletes)
          and <strong className="text-[var(--text-gold)]">Fishing Endurance</strong> (how long your stamina lasts during the mini-game).
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Rod Comparison Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Rod</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Tier</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Strength</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Endurance</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Unlock</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {fishingRods.map((rod) => (
                <tr key={rod.name} className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold text-[var(--text-primary)]">{rod.name}</td>
                  <td className="py-1.5">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      rod.tier === 'Starter' ? 'bg-green-900/30 text-green-400' :
                      rod.tier === 'Special' ? 'bg-purple-900/30 text-purple-400' :
                      rod.tier === 'Mid' ? 'bg-blue-900/30 text-blue-400' :
                      rod.tier === 'Mid-Game' ? 'bg-yellow-900/30 text-yellow-400' :
                      'bg-red-900/30 text-red-400'
                    }`}>{rod.tier}</span>
                  </td>
                  <td className="py-1.5">+{rod.strength}</td>
                  <td className="py-1.5">+{rod.endurance}</td>
                  <td className="py-1.5">{rod.unlock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Rod Details</h3>
        <div className="space-y-3">
          {fishingRods.map((rod) => (
            <div key={rod.name} className="game-panel corner-decor p-4">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">{rod.name}</h4>
              <p className="text-[10px] text-[var(--text-secondary)] mb-1">{rod.description}</p>
              {rod.special && (
                <p className="text-[10px] text-[var(--text-gold)]">Special: {rod.special}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-orange-400/5 border-l-2 border-orange-400 pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2 tracking-wider uppercase">Pro Tip</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Rod strength directly limits which fish you can catch. Using a Simple Fishing Rod against epic-tier fish
            in Veilwater Basin will almost always result in the line snapping before you land anything.
            Upgrade your rod before chasing epic fish!
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'bait',
    title: 'Bait Guide',
    icon: <Bug className="w-5 h-5" />,
    summary: 'All 11 bait types — 6 wild and 5 crafted — with recipes and fish attraction data.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Bait determines which fish you can catch. There are <strong className="text-[var(--text-primary)]">two categories</strong>:
          <strong className="text-green-400"> Wild Bait</strong> (collected from the environment as insects/amphibians)
          and <strong className="text-blue-400"> Crafted Bait</strong> (made at the Fisher NPC using collected materials).
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Wild Bait</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {baits.filter(b => b.type === 'Wild').map((bait) => (
            <div key={bait.name} className="game-panel corner-decor p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-900/30 text-green-400">Wild</span>
                <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">{bait.name}</h4>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] mb-2">{bait.description}</p>
              <p className="text-[10px] text-[var(--text-muted)] mb-1"><strong>Source:</strong> {bait.recipe}</p>
              <div className="text-[10px] text-[var(--text-gold)]">
                <strong>Attracts:</strong> {bait.attracts.slice(0, 4).join(', ')}{bait.attracts.length > 4 ? '...' : ''}
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Crafted Bait</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {baits.filter(b => b.type === 'Crafted').map((bait) => (
            <div key={bait.name} className="game-panel corner-decor p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-900/30 text-blue-400">Crafted</span>
                <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">{bait.name}</h4>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] mb-2">{bait.description}</p>
              <p className="text-[10px] text-[var(--text-muted)] mb-1"><strong>Recipe:</strong> {bait.recipe}</p>
              <div className="text-[10px] text-[var(--text-gold)]">
                <strong>Attracts:</strong> {bait.attracts.slice(0, 4).join(', ')}{bait.attracts.length > 4 ? '...' : ''}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#6a9ad0]/5 border-l-2 border-[#6a9ad0] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[#6a9ad0] mb-2 tracking-wider uppercase">Bait Gathering Tips</h4>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Fireflies and Moths only spawn at night — plan gathering runs accordingly</li>
            <li>• Frogs are the most valuable wild bait — only found in Veilwater Basin</li>
            <li>• Capybara Bristles (for Epic Bait) come from slain or tamed capybaras</li>
            <li>• Gold Coins for crafted bait are found in ruins throughout Embervale</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'fish',
    title: 'Fish Compendium',
    icon: <Fish className="w-5 h-5" />,
    summary: 'All 13 fish species with rarity, locations, best bait, and uses.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          There are <strong className="text-[var(--text-primary)]">13 fish species</strong> in Enshrouded across 4 rarity tiers.
          While all fish can technically appear in any body of water, spawn odds are heavily skewed toward specific biomes.
          Matching your bait to the right region is the fastest path to higher-rarity catches.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Fish by Rarity</h3>

        {/* Common */}
        <div className="mb-4">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-2 tracking-wider uppercase">Common Fish</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {fishList.filter(f => f.rarity === 'Common').map((fish) => (
              <div key={fish.name} className="game-panel corner-decor p-3 border-l-2 border-green-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-green-900/30 text-green-400">Common</span>
                  <h5 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{fish.name}</h5>
                </div>
                <p className="text-[9px] text-[var(--text-secondary)] mb-1">{fish.description}</p>
                <p className="text-[9px] text-[var(--text-gold)]"><strong>Best Bait:</strong> {fish.bestBait.join(', ')}</p>
                <p className="text-[9px] text-[var(--text-muted)]"><strong>Uses:</strong> {fish.uses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Uncommon */}
        <div className="mb-4">
          <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-2 tracking-wider uppercase">Uncommon Fish</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {fishList.filter(f => f.rarity === 'Uncommon').map((fish) => (
              <div key={fish.name} className="game-panel corner-decor p-3 border-l-2 border-blue-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-blue-900/30 text-blue-400">Uncommon</span>
                  <h5 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{fish.name}</h5>
                </div>
                <p className="text-[9px] text-[var(--text-secondary)] mb-1">{fish.description}</p>
                <p className="text-[9px] text-[var(--text-gold)]"><strong>Best Bait:</strong> {fish.bestBait.join(', ')}</p>
                <p className="text-[9px] text-[var(--text-muted)]"><strong>Uses:</strong> {fish.uses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rare */}
        <div className="mb-4">
          <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-2 tracking-wider uppercase">Rare Fish</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fishList.filter(f => f.rarity === 'Rare').map((fish) => (
              <div key={fish.name} className="game-panel corner-decor p-3 border-l-2 border-purple-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-purple-900/30 text-purple-400">Rare</span>
                  <h5 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{fish.name}</h5>
                </div>
                <p className="text-[9px] text-[var(--text-secondary)] mb-1">{fish.description}</p>
                <p className="text-[9px] text-[var(--text-gold)]"><strong>Best Bait:</strong> {fish.bestBait.join(', ')}</p>
                <p className="text-[9px] text-[var(--text-muted)]"><strong>Uses:</strong> {fish.uses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Epic */}
        <div className="mb-4">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2 tracking-wider uppercase">Epic Fish</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {fishList.filter(f => f.rarity === 'Epic').map((fish) => (
              <div key={fish.name} className="game-panel corner-decor p-3 border-l-2 border-orange-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-orange-900/30 text-orange-400">Epic</span>
                  <h5 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{fish.name}</h5>
                </div>
                <p className="text-[9px] text-[var(--text-secondary)] mb-1">{fish.description}</p>
                <p className="text-[9px] text-[var(--text-gold)]"><strong>Best Bait:</strong> {fish.bestBait.join(', ')}</p>
                <p className="text-[9px] text-[var(--text-muted)]"><strong>Uses:</strong> {fish.uses}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--accent-green)]/5 border-l-2 border-[var(--accent-green)] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-2 tracking-wider uppercase">Special Fish Crafting Uses</h4>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong className="text-orange-400">Shockfin</strong> → Craft <strong>Electric Nerves</strong> (required for certain spells)</li>
            <li>• <strong className="text-orange-400">Thornridge</strong> → Dismantle for <strong>Fish Bones</strong> (Epic Bait ingredient)</li>
            <li>• <strong className="text-orange-400">Yellowfin</strong> → Dismantle for <strong>Fish Teeth</strong> (Epic Bait ingredient)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'locations',
    title: 'Fishing Locations',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'Best fishing spots across all 6 biomes plus secret locations.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          All fish species can technically appear in any body of water, but <strong className="text-[var(--text-primary)]">spawn odds skew heavily toward specific biomes</strong>.
          Starter areas tend to have weaker fish, while later regions more often contain rare and epic fish.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Locations by Biome</h3>
        <div className="space-y-3">
          {fishingLocations.map((loc) => (
            <div key={loc.name} className="game-panel corner-decor p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">{loc.name}</h4>
                  <span className="text-[9px] text-[var(--text-gold)]">{loc.region}</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {loc.fishAvailable.slice(0, 4).map((fish) => {
                    const fishData = fishList.find(f => f.name === fish);
                    const rarityColor = fishData?.rarity === 'Common' ? 'bg-green-900/30 text-green-400' :
                      fishData?.rarity === 'Uncommon' ? 'bg-blue-900/30 text-blue-400' :
                      fishData?.rarity === 'Rare' ? 'bg-purple-900/30 text-purple-400' :
                      'bg-orange-900/30 text-orange-400';
                    return (
                      <span key={fish} className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${rarityColor}`}>
                        {fish}
                      </span>
                    );
                  })}
                  {loc.fishAvailable.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[var(--border-gold)]/10 text-[var(--text-muted)]">+{loc.fishAvailable.length - 4}</span>
                  )}
                </div>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)]">{loc.notes}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#6a9ad0]/5 border-l-2 border-[#6a9ad0] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[#6a9ad0] mb-2 tracking-wider uppercase">Fish Rarity by Biome Quick Reference</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="border-b border-[var(--border-gold)]/20">
                  <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Biome</th>
                  <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Common</th>
                  <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Uncommon</th>
                  <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Rare</th>
                  <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Epic</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold">Springlands</td>
                  <td className="py-1.5 text-green-400">High</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">Very Low</td>
                  <td className="py-1.5">None</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold">Revelwood</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5 text-blue-400">High</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">None</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold">Nomad Highlands</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5 text-blue-400">High</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">None</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold">Kindlewastes</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5 text-purple-400">High</td>
                  <td className="py-1.5">Very Low</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]/10">
                  <td className="py-1.5 font-bold">Albaneve Summits</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5 text-purple-400">High</td>
                  <td className="py-1.5">Very Low</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-bold">Veilwater Basin</td>
                  <td className="py-1.5">Low</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5">Medium</td>
                  <td className="py-1.5 text-orange-400">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'tips',
    title: 'Pro Tips & Strategies',
    icon: <Lightbulb className="w-5 h-5" />,
    summary: '12 advanced fishing tips to maximize your catches and efficiency.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Master these advanced strategies to become the most efficient angler in Embervale.
          From bait loops to treasure hunting, these tips will maximize your fishing rewards.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Essential Tips</h3>
        <div className="space-y-3">
          {fishingTips.map((tip, index) => (
            <div key={tip.title} className="game-panel corner-decor p-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--text-gold)]/10 flex items-center justify-center text-[var(--text-gold)] text-[10px] font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">{tip.title}</h4>
                  <p className="text-[10px] text-[var(--text-secondary)]">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-8 mb-3">Fishing Reward Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="game-panel corner-decor p-4 border-l-2 border-green-500">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-2">Cooking</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">
              Fish are ingredients in numerous recipes through the Farmer NPC. Fish dishes grant Health,
              Stamina, and extended underwater breath capacity. Build a Smoker for more options.
            </p>
          </div>
          <div className="game-panel corner-decor p-4 border-l-2 border-blue-500">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-2">Crafting Materials</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">
              Shockfin is required for Electric Nerves (spellcasting). Thornridge yields Fish Bones
              and Yellowfin yields Fish Teeth — both needed for Epic Fishing Bait.
            </p>
          </div>
          <div className="game-panel corner-decor p-4 border-l-2 border-purple-500">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-2">Gems</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">
              Fishing is a reliable source of socketable gems for weapons. The Lucky Rod and Cursed Rod
              have increased odds of catching treasure items including gems.
            </p>
          </div>
          <div className="game-panel corner-decor p-4 border-l-2 border-orange-500">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">Trophies</h4>
            <p className="text-[10px] text-[var(--text-secondary)]">
              Caught fish can be mounted as wall decorations in your base. Epic fish make impressive
              trophies to showcase your fishing achievements to other players.
            </p>
          </div>
        </div>

        <div className="bg-[var(--accent-green)]/5 border-l-2 border-[var(--accent-green)] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-2 tracking-wider uppercase">The Optimal Fishing Loop</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            1. Start with Simple Rod + Fire Flies in Springlands → catch common fish<br />
            2. Upgrade to Improved Rod, use Moth/Grasshopper → catch uncommon fish<br />
            3. Unlock Rare Bait, use Scarab/Pillbug in Kindlewastes/Albaneve → catch rare fish<br />
            4. Get Lucky Rod from Veilwater Basin ruins<br />
            5. Craft Epic Bait, use Frogs → catch Thornridge/Yellowfin<br />
            6. Dismantle epic fish → craft more Epic Bait → catch Shockfin<br />
            7. Use Shockfin for Electric Nerves, cook other fish for buffs
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'rewards',
    title: 'Rewards & Trophies',
    icon: <Trophy className="w-5 h-5" />,
    summary: 'Cooking recipes, crafting materials, gems, and wall trophies.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Fishing in Enshrouded is far more than a relaxing side activity.
          The right fish can net you <strong className="text-[var(--text-primary)]">rare crafting ingredients, powerful food buffs,
          socketable gems, and even wall trophies</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Cooking with Fish</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            Talk to the <strong className="text-[var(--text-primary)]">Farmer NPC</strong> to unlock fish cooking recipes.
            Building a <strong className="text-[var(--text-gold)]">Smoker</strong> at your base expands cooking options.
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Basic cooked fish: Restores Health and Stamina</li>
            <li>• Advanced recipes: Grant buffs to damage, movement speed, or resistance</li>
            <li>• Fish soup: Provides extended underwater breathing (crucial for Veilwater Basin)</li>
            <li>• Smoked fish: Longer-lasting buffs with better stat bonuses</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Crafting Materials from Fish</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Fish</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Material</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Used For</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10">
                <td className="py-1.5 font-bold text-orange-400">Shockfin</td>
                <td className="py-1.5">Electric Nerve</td>
                <td className="py-1.5">Spellcasting (certain spells require it)</td>
              </tr>
              <tr className="border-b border-[var(--border-gold)]/10">
                <td className="py-1.5 font-bold text-orange-400">Thornridge</td>
                <td className="py-1.5">Fish Bones</td>
                <td className="py-1.5">Epic Fishing Bait crafting</td>
              </tr>
              <tr>
                <td className="py-1.5 font-bold text-orange-400">Yellowfin</td>
                <td className="py-1.5">Fish Teeth</td>
                <td className="py-1.5">Epic Fishing Bait crafting</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Gems from Fishing</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            Fishing is a <strong className="text-[var(--text-primary)]">reliable source of socketable gems</strong> for your weapons.
            The type of gem depends on the biome and your rod's hidden "Other Items" stat.
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Lucky Rod</strong>: Best gem finder (Other Items: 4.0, low Wet Boot chance)</li>
            <li>• <strong>Cursed Rod</strong>: Also good for treasure (Other Items: 4.0, but high Wet Boot: 5.0)</li>
            <li>• Higher-tier locations yield better quality gems</li>
            <li>• Veilwater Basin has the best gem drops from fishing</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Wall Trophies</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            Any fish you catch can be <strong className="text-[var(--text-primary)]">mounted as a wall decoration</strong> in your base.
            Epic fish trophies are particularly impressive and showcase your fishing mastery.
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Common fish: Small wall mount</li>
            <li>• Uncommon/Rare fish: Medium decorative mount</li>
            <li>• Epic fish: Large prestigious trophy with unique visuals</li>
            <li>• Trophies can be placed on any wall in your base</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-green)]/5 border-l-2 border-[var(--accent-green)] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-2 tracking-wider uppercase">Why Fish?</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Fishing isn't just a relaxing pastime — it's a key activity for cooking, gems, and magic resources.
            The Wake of the Water update was designed to make fishing a meaningful part of the survival loop,
            not just a cosmetic addition. The crafting integration backs that up.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'quest-chain',
    title: 'Fishing Quest Chain',
    icon: <Scroll className="w-5 h-5" />,
    summary: 'The complete fishing quest walkthrough — Unknown Waters, A Cursed Catch, Lucky Catch, and Nice Day For Fishing, with every rod reward and unlock.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Every fishing rod in Enshrouded is tied to a quest. This is the full chain from your first cast to the endgame Excellent Rod — follow it in order and you will never need to grind for gear.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Quest 1: Unknown Waters (The Hunter)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Quest Giver:</strong> The Hunter (Athalan Skree) — accept her "Unknown Waters" tasks</li>
            <li><strong className="text-[var(--text-primary)]">What It Teaches:</strong> Core mechanics — casting, hooking, reeling, and landing your first fish</li>
            <li><strong className="text-[var(--text-primary)]">Reward:</strong> Unlocks <strong className="text-[var(--text-gold)]">Simple Fishing Rod</strong> crafting (2 Twigs + 2 Metal Scraps + 1 String) plus Simple Fishing Bait recipe</li>
            <li><strong className="text-[var(--text-primary)]">Priority:</strong> Do this as soon as it appears — early fishing means a steady supply of food buffs and gems before the harder biomes</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quest 2: A Cursed Catch</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Reward:</strong> <strong className="text-[var(--text-gold)]">Cursed Fishing Rod</strong> (+1 Strength / +40 Endurance)</li>
            <li><strong className="text-[var(--text-primary)]">Quirk:</strong> Hidden weights skew hard toward non-fish loot (Wet Boot 5.0, Other Items 4.0) — terrible for fish, fascinating for treasure hunters</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quest 3: Lucky Catch</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">The Hunt:</strong> Travel to the <strong className="text-[var(--text-gold)]">Suspicious Drak'dal Ruins</strong> in Veilwater Basin, find the large cross marked on the ground, and dig down to uncover a buried chest</li>
            <li><strong className="text-[var(--text-primary)]">Reward:</strong> <strong className="text-[var(--text-gold)]">Lucky Fishing Rod</strong> (+2 / +50) — after obtaining it, the recipe unlocks at the Fisher</li>
            <li><strong className="text-[var(--text-primary)]">Why It's Special:</strong> Lowest Wet Boot weight (0.5) plus high Other Items weight (4.0) — the best treasure-fishing rod without grinding late-game materials</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Quest 4: Nice Day For Fishing (The Fisher)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Quest Giver:</strong> <strong className="text-[var(--text-gold)]">Captain Melville Fontane</strong> — the old angler stationed at a dock in Veilwater Basin</li>
            <li><strong className="text-[var(--text-primary)]">Reward:</strong> <strong className="text-[var(--text-gold)]">Excellent Fishing Rod</strong> (+2 / +55 endurance — highest in the game), then craftable at the Fisher</li>
            <li><strong className="text-[var(--text-primary)]">Bonus:</strong> Fontane also teaches the crafted bait recipes and handles fish dismantling — tracking him down early is worth it</li>
          </ul>
        </div>

        <div className="bg-[#6a9ad0]/5 border-l-2 border-[#6a9ad0] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[#6a9ad0] mb-2 tracking-wider uppercase">Don't Forget the Improved Rod</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Between quests 2 and 3, the <strong>Improved Fishing Rod</strong> (+2 / +45) unlocks simply by crafting Iron Bars — no quest required. It bridges the gap perfectly while you work toward the Lucky and Excellent rods.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'loot-pools',
    title: 'Loot Pools & Hidden Mechanics',
    icon: <Gem className="w-5 h-5" />,
    summary: 'What the game never shows you — hidden rod weights, per-biome trash loot pools, the Wet Boot, night-only bait, and the fish salvage loop.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Beneath the visible Strength and Endurance stats, every rod carries <strong className="text-[var(--text-gold)]">two hidden weights</strong> that shape what actually lands on your hook. Understanding them turns fishing from luck into logistics.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">The Two Hidden Rod Stats</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Wet Boot Weight:</strong> How often you reel in the infamous Wet Boot junk item. Lower is better — the Lucky Rod (0.5) almost never boots you, while the Cursed Rod (5.0) is a boot magnet.</li>
            <li><strong className="text-[var(--text-primary)]">Other Items Weight:</strong> How often you pull up non-fish treasures (gems, valuables) instead of fish. Treasure hunters want this high; dinner hunters want it low.</li>
            <li><strong className="text-[var(--text-primary)]">Strength vs Endurance:</strong> Strength drains the fish's red stamina bar faster; Endurance slows your own green bar's drain. Epic fish have more bar segments — each completed segment requires another click — so Endurance decides long fights.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Per-Biome Trash Loot Pools</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            Every biome has its own fishing loot table — the "trash" you catch in the Springlands is not what you catch in Veilwater. Higher-tier biomes hide better salvage and rarer finds in their pools:
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• <strong className="text-[var(--text-primary)]">Springlands / Revelwood:</strong> Starter pools — basic salvage, common curios</li>
            <li>• <strong className="text-[var(--text-primary)]">Nomad Highlands / Kindlewastes:</strong> Mid-tier pools — better materials and valuables</li>
            <li>• <strong className="text-[var(--text-primary)]">Albaneve Summits / Veilwater Basin:</strong> End-game pools — the richest non-fish loot, best paired with the Lucky Rod</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Fish Salvage Loop</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Thornridge → Fish Bones:</strong> Required for Epic Fishing Bait</li>
            <li><strong className="text-[var(--text-primary)]">Yellowfin → Fish Teeth:</strong> Also required for Epic Fishing Bait</li>
            <li><strong className="text-[var(--text-primary)]">Shockfin → Electric Nerve:</strong> A spell-crafting ingredient, not just bait material</li>
            <li><strong className="text-[var(--text-primary)]">Crafted bait extras:</strong> Higher tiers also need Gold Coins (found in ruins) and Capybara Bristles (from Veilwater capybaras)</li>
          </ul>
        </div>

        <div className="bg-orange-400/5 border-l-2 border-orange-400 pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2 tracking-wider uppercase">Salvage Your First Epic Fish — Don't Eat It</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Fish Bones and Fish Teeth only come from dismantling epic fish, and Epic Fishing Bait is what dramatically improves your odds of catching <em>more</em> epic fish. Eating or mounting your first epic catch breaks the loop before it starts.
          </p>
        </div>

        <div className="bg-[var(--accent-green)]/5 border-l-2 border-[var(--accent-green)] pl-4 py-3 pr-3 rounded-r my-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-2 tracking-wider uppercase">Night Shift & Other Fine Print</h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Fireflies and Moths — two of the six wild baits — only appear after dark, so plan gathering runs accordingly. Frogs are the most valuable wild bait for epic fish. And ignore cast distance: holding the cast longer throws farther, but distance has zero effect on which species appear.
          </p>
        </div>
      </div>
    ),
  },
];
