import {
  Hammer, Users, Beaker, Sword, Shield, Apple, TreePine
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

function NPCCard({ name, role, location, unlocks, quest, desc }: {
  name: string; role: string; location: string; unlocks: string[]; quest: string; desc: string;
}) {
  return (
    <div className="game-panel corner-decor p-4 mb-3">
      <h4 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-1">{name}</h4>
      <div className="text-[10px] text-[var(--text-muted)] mb-2">{role} • <span className="text-orange-400">{location}</span></div>
      <p className="text-xs text-[var(--text-secondary)] mb-2">{desc}</p>
      <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Unlocks</div>
      <ul className="text-xs text-[var(--text-secondary)] space-y-0.5 mb-2">
        {unlocks.map((u) => <li key={u}>• {u}</li>)}
      </ul>
      <div className="text-xs text-[#6a9ad0]"><strong>Quest:</strong> {quest}</div>
    </div>
  );
}

function StationCard({ name, crafter, materials, desc, recipes }: {
  name: string; crafter: string; materials: string; desc: string; recipes: string[];
}) {
  return (
    <div className="game-panel corner-decor p-3 mb-2">
      <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">{name}</h4>
      <div className="text-[9px] text-[var(--text-muted)] mb-1">Crafter: <span className="text-[var(--text-gold)]">{crafter}</span> | Materials: {materials}</div>
      <p className="text-[10px] text-[var(--text-secondary)] mb-2">{desc}</p>
      <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Key Recipes</div>
      <div className="flex flex-wrap gap-1">
        {recipes.map((r) => <span key={r} className="text-[9px] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">{r}</span>)}
      </div>
    </div>
  );
}

function RecipeTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-[var(--border-gold)]/20">
            {headers.map((h) => <th key={h} className="text-left py-2 text-[var(--text-gold)] font-cinzel">{h}</th>)}
          </tr>
        </thead>
        <tbody className="text-[var(--text-secondary)]">
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-[var(--border-gold)]/10">
              {row.map((cell, j) => <td key={j} className="py-1.5">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const craftingSubSections: SubSection[] = [
  {
    id: 'npc-artisans',
    title: 'NPC Artisans (9 Total)',
    icon: <Users className="w-5 h-5" />,
    summary: 'Rescue 9 core NPCs — each unlocks an entire crafting tree. Full quest chains included.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">9 NPC artisans</strong> that must be rescued from Ancient Vaults. 
          Each NPC unlocks a major crafting tree. Rescue order matters for progression.
        </p>

        <InfoBox title="Rescue Priority Order" type="tip">
          <strong>1. Blacksmith</strong> (Grappling Hook + Glider) → <strong>2. Alchemist</strong> (Health Potions) → <strong>3. Hunter</strong> (Leather Armor + Bows) → <strong>4. Carpenter</strong> (Furniture + Comfort) → <strong>5. Farmer</strong> (Food + Farming) → <strong>6. Collector</strong> (Hollow Halls keys) → <strong>7. Barber</strong> (Character customization) → <strong>8. Bard</strong> (Instruments) → <strong>9. Lunar New Year Trader</strong> (Seasonal items)
        </InfoBox>

        <NPCCard name="Oswald Anders — The Blacksmith" role="Metalworking, Weapons, Tools" location="Springlands — Northeast Ancient Vault"
          unlocks={['Forge', 'Smelter', 'Charcoal Kiln', 'Grappling Hook', 'Glider', 'Metal Weapons', 'Heavy Armor', 'Tool Upgrades', 'Smithing Tools']}
          quest="Find the Sleeping Survivor → Clear Elixir Well → Defeat Vault Guardian → Rescue"
          desc="The MOST IMPORTANT NPC. Unlocks Grappling Hook and Glider which transform exploration. All metal crafting flows through him. Prioritize rescue immediately." />

        <NPCCard name="The Alchemist" role="Potions, Magic, Explosives" location="Springlands — Southeast Ancient Vault"
          unlocks={['Alchemy Station', 'Health Potions', 'Mana Potions', 'Shroud Survival Flask', 'Fireball Spell', 'Ice Bolt Spell', 'Shroud Core Crafting', 'Grinding Stones', 'Laboratory']}
          quest="Locate Alchemist Vault → Defeat guardian → Rescue"
          desc="Essential for survival. Health Potions alone make this NPC worth rescuing early. Also unlocks offensive spells and explosives." />

        <NPCCard name="The Hunter" role="Leatherworking, Bows, Fabrics" location="Springlands — Low Meadows Ancient Vault"
          unlocks={['Bow Crafting', 'Leather Armor', 'Arrow Crafting', 'Tanning Station', 'Drying Rack', 'Hand Spindle', 'Loom', 'Fabric Dyes', 'Padding']}
          quest="Travel to Low Meadows → Find Hunter Vault → Defeat Vukah guardian → Rescue"
          desc="Unlocks ranged combat and leather armor. The first real protective gear. Essential for Ranger builds." />

        <NPCCard name="The Carpenter" role="Woodworking, Furniture, Storage" location="Nomad Highlands — Ancient Vault"
          unlocks={['Table Saw', 'Kiln', 'Advanced Furniture', 'Storage Chests', 'Glider Upgrades', 'Improved Grappling Hook', 'Comfort Items', 'Water Well', 'Spinning Wheel']}
          quest="Find Carpenter Vault → Solve puzzle door → Rescue"
          desc="Transforms base building. Table Saw unlocks precision woodworking. Comfort items provide stat buffs." />

        <NPCCard name="The Farmer" role="Agriculture, Cooking, Food" location="Springlands — Central Ancient Vault"
          unlocks={['Farming Plots', 'Seed Bed', 'Cooking Station', 'Oven', 'Beehive', 'Fireplace', 'Advanced Cooking', 'Food Buffs', 'Drying Rack']}
          quest="Locate Farm Vault → Defeat Scavenger ambush → Rescue"
          desc="Unlocks sustainable food production. Advanced cooking provides powerful stat buffs." />

        <NPCCard name="The Collector" role="Hollow Halls, Rare Items" location="Revelwood — Ancient Vault"
          unlocks={['Ectoplasm Press', 'Bone Keys (Revelwood/Nomad/Kindlewastes)', 'Ectoplasm Products', 'Spirit Materials', 'Rare Components']}
          quest="Find Collector Vault → Defeat Hollow guardian → Rescue"
          desc="Essential for Hollow Halls dungeons. Crafts Bone Keys required to enter endgame dungeons." />

        <NPCCard name="The Barber" role="Character Customization" location="Revelwood — Settlement"
          unlocks={['Hairstyles', 'Facial Hair', 'Character Appearance Changes', 'Cosmetics']}
          quest="Rescue from settlement → Build Barber Station"
          desc="Purely cosmetic. Change your character's appearance anytime. Low priority but nice to have." />

        <NPCCard name="The Bard" role="Music, Entertainment" location="Revelwood — Settlement"
          unlocks={['Musical Instruments', 'Performance Items', 'Base Entertainment']}
          quest="Rescue from settlement → Build Bard Station"
          desc="Crafts musical instruments for base decoration and roleplay. Purely for fun." />

        <NPCCard name="Lunar New Year Trader" role="Seasonal Items" location="Event-only"
          unlocks={['Festival Decorations', 'Seasonal Items', 'Special Goods', 'Limited-time Recipes']}
          quest="Event questline"
          desc="Seasonal NPC that appears during Lunar New Year event. Offers unique limited-time items." />
      </div>
    ),
  },

  {
    id: 'crafting-stations',
    title: 'Crafting Stations (27 Total)',
    icon: <Hammer className="w-5 h-5" />,
    summary: 'Every crafting station — from Player Crafting to advanced Forge, Laboratory, and Water Well. 27 total.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded has <strong className="text-[var(--text-primary)]">22 crafting stations</strong> across 3 tiers: 
          Player Crafting (no station), Basic Stations (Workbench-built), and NPC Stations (require rescued artisans).
        </p>

        <InfoBox title="Station Tier System" type="info">
          <strong>Tier 1 — Player Crafting:</strong> No station needed. Basic tools and survival items.<br/>
          <strong>Tier 2 — Basic Stations:</strong> Built at Workbench. Smelter, Kiln, Grinding Stones, etc.<br/>
          <strong>Tier 3 — NPC Stations:</strong> Require rescued NPC. Forge, Alchemy Station, Table Saw, etc.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Tier 1 — Player Crafting</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Crafted directly from inventory. No station required.</p>
        <RecipeTable
          headers={['Item', 'Materials']}
          rows={[
            ['Flame Altar', 'Stone ×3'],
            ['Workbench', 'String ×3 + Wood Log ×8'],
            ['Construction Hammer', 'Wood Log ×2 + Stone ×2'],
            ['Summoning Staff', 'Wood Log ×1'],
            ['Axe', 'Twigs ×2 + Stone ×2 + String ×1'],
            ['Pickaxe', 'Twigs ×2 + Stone ×2 + String ×1'],
            ['Campfire', 'Wood Log ×2'],
            ['Torch', 'Wood Log ×1 + Resin ×1'],
            ['Bandage', 'Torn Cloth ×2'],
            ['Lockpick', 'Metal Scraps ×1'],
            ['String', 'Plant Fiber ×3'],
            ['Bow', 'Wood Log ×2 + String ×2'],
            ['Club', 'Wood Log ×2'],
            ['Wooden Arrow ×10', 'Wood Log ×1 + Feather ×2'],
            ['Wand', 'Wood Log ×1 + Resin ×1'],
            ['Staff', 'Wood Log ×2 + Resin ×1'],
            ['Shield', 'Wood Log ×2 + Metal Scraps ×1'],
            ['Rags Armor Set', 'Torn Cloth ×6 + String ×3'],
            ['Explosive Powder Ball', 'Shroud Spore ×1 + Shroud Liquid ×1'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Tier 2 — Basic Stations (Built at Workbench)</h3>
        <div className="grid grid-cols-1 gap-2">
          <StationCard name="Smelter" crafter="Player (Workbench)" materials="Stone ×20 + Wood Log ×10"
            desc="Converts ore into metal bars. Essential for all metal gear." 
            recipes={['Iron Bar', 'Copper Bar', 'Bronze Bar', 'Tin Bar', 'Glass']} />
          <StationCard name="Charcoal Kiln" crafter="Player (Workbench)" materials="Stone ×15 + Wood Log ×8"
            desc="Produces charcoal from wood. Also makes Wood Acid and Tar."
            recipes={['Charcoal', 'Wood Acid', 'Tar']} />
          <StationCard name="Grinding Stones" crafter="Alchemist" materials="Stone ×10 + Wood Log ×5"
            desc="Grinds materials into powder form."
            recipes={['Bonemeal', 'Flour', 'Fossilized Bone Dust', 'Coal Powder', 'Glow Dust', 'Bug Dust']} />
          <StationCard name="Hand Spindle" crafter="Hunter" materials="Wood Log ×5 + Stone ×2"
            desc="Basic textile processing. Makes thread and linen."
            recipes={['Linen', 'String']} />
          <StationCard name="Kiln" crafter="Carpenter" materials="Stone ×20 + Wood Log ×10"
            desc="Fires clay into bricks."
            recipes={['Fired Brick']} />
          <StationCard name="Drying Rack" crafter="Hunter" materials="Wood Log ×8 + String ×4"
            desc="Preserves food and cures hides."
            recipes={['Dried Fur', 'Dried Purple Berry', 'Dried Meat']} />
          <StationCard name="Tanning Station" crafter="Hunter" materials="Wood Log ×8 + Iron Bar ×2"
            desc="Converts dried hides into leather."
            recipes={['Leather', 'Reptile Leather']} />
          <StationCard name="Table Saw" crafter="Carpenter" materials="Iron Bar ×3 + Wood Log ×15"
            desc="Precision woodworking. Makes planks for furniture."
            recipes={['Wood Planks']} />
          <StationCard name="Loom" crafter="Hunter" materials="Wood Log ×10 + String ×6"
            desc="Weaves thread into fabric."
            recipes={['Fabric']} />
          <StationCard name="Spinning Wheel" crafter="Carpenter" materials="Wood Log ×8 + Iron Bar ×2"
            desc="Upgraded thread production. Makes fine thread and quality textiles."
            recipes={['Linen', 'String', 'Wool']} />
          <StationCard name="Alchemy Station" crafter="Alchemist" materials="Wood Log ×10 + Shroud Spore ×5"
            desc="Brews potions and magical components."
            recipes={['Antiseptic', 'Alchemical Base', 'Health Potion', 'Mana Potion']} />
          <StationCard name="Laboratory" crafter="Alchemist" materials="Iron Bar ×4 + Wood Log ×10 + Glass ×4"
            desc="Advanced alchemical crafting. Explosives and complex materials."
            recipes={['Nitrate', 'Black Powder', 'Enshrouded Oil', 'Spice', 'Paper', 'Mauveine']} />
          <StationCard name="Ectoplasm Press" crafter="Collector" materials="Iron Bar ×5 + Wood Log ×10"
            desc="Extracts ectoplasm from crystals found in Hollow Halls."
            recipes={['Ectoplasm', 'Greater Ectoplasm', 'Excellent Ectoplasm']} />
          <StationCard name="Forge" crafter="Blacksmith" materials="Iron Bar ×5 + Stone ×30"
            desc="Advanced metal crafting. Weapons, armor, and metal tools."
            recipes={['Metal Sheets', 'Iron Weapons', 'Steel Weapons', 'Shields']} />
          <StationCard name="Cooking Station" crafter="Farmer" materials="Flintstone ×2 + Kettle ×1 + Stone ×4 + Metal Scraps ×2"
            desc="Automated food preparation. Cooks multiple items at once."
            recipes={['Cooked Meat', 'Stews', 'Soups', 'Buff Foods']} />
          <StationCard name="Oven" crafter="Farmer" materials="Stone ×15 + Iron Bar ×3 + Wood Log ×5"
            desc="Baking and advanced cooking."
            recipes={['Bread', 'Pastries', 'Roasted Foods']} />
          <StationCard name="Beehive" crafter="Farmer" materials="Wood Log ×8 + Plant Fiber ×10"
            desc="Produces honey and wax over time."
            recipes={['Honey', 'Wax']} />
          <StationCard name="Seed Bed" crafter="Farmer" materials="Wood Log ×5 + Soil ×10"
            desc="Grows crops from seeds. Wheat, berries, vegetables."
            recipes={['Wheat', 'Berries', 'Vegetables', 'Rice (Veilwater)']} />
          <StationCard name="Coloring Station" crafter="Hunter" materials="Wood Log ×5 + Stone ×3"
            desc="Dyes fabrics different colors."
            recipes={['Red Fabric', 'Blue Fabric', 'Green Fabric', 'Yellow Fabric', 'Violet Fabric']} />
          <StationCard name="Mortar" crafter="Alchemist" materials="5 Sand + 10 Lump of Clay + 3 Sulfur + 2 Nitrate + 5 Charcoal"
            desc="Grinds materials into fine powder for advanced alchemy. Required for Laboratory."
            recipes={['Fine Powder', 'Herbal Extracts', 'Potion Bases']} />
          <StationCard name="Scientific Instruments" crafter="Alchemist" materials="10 Glass + 10 Bronze Bars + 5 Iron Bars + 20 Charcoal"
            desc="Advanced alchemical equipment for complex recipes. Required for Laboratory."
            recipes={['Advanced Potions', 'Enchanted Components', 'Magical Infusions']} />
          <StationCard name="Athanor" crafter="Alchemist" materials="10 Glass + 10 Bronze Bars + 5 Lump of Clay"
            desc="Specialized furnace for alchemical reactions. Required for Laboratory."
            recipes={['Fire Essence', 'Purified Materials', 'Magical Alloys']} />
          <StationCard name="Water Well" crafter="Carpenter" materials="20 Linen + 100 Stone + 1 Wooden Bucket"
            desc="Provides unlimited water source for crafting and drinking."
            recipes={['Water']} />
          <StationCard name="Improved Water Well" crafter="Carpenter" materials="20 Linen + 100 Sandstone + 1 Wooden Bucket + 2 Iron Bars"
            desc="Upgraded well with faster water production and cleaner output."
            recipes={['Purified Water']} />
        </div>

        <InfoBox title="Station Placement Tips" type="tip">
          Place ALL stations within your Flame Altar radius. Build a dedicated crafting room with stations in a circle. 
          Keep storage chests nearby for materials. This saves hours of running around.
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'weapon-recipes',
    title: 'Weapon Recipes',
    icon: <Sword className="w-5 h-5" />,
    summary: 'Complete weapon crafting recipes — from basic Wooden Club to Legendary gear. Forge + Hunter stations.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Weapons are crafted at the <strong className="text-[var(--text-primary)]">Forge</strong> (Blacksmith) for melee/magic 
          and <strong className="text-[var(--text-primary)]">Hunter station</strong> for ranged. Higher tier weapons require better materials.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">One-Handed Weapons (Forge)</h3>
        <RecipeTable
          headers={['Weapon', 'Materials', 'Tier']}
          rows={[
            ['Iron Sword', 'Iron Bar ×3 + Leather ×1', 'Rare'],
            ['Iron Axe', 'Iron Bar ×3 + Wood Log ×1', 'Rare'],
            ['Iron Mace', 'Iron Bar ×4 + Wood Log ×1', 'Rare'],
            ['Steel Longsword', 'Steel Bar ×3 + Leather ×2', 'Epic'],
            ['Steel Battleaxe', 'Steel Bar ×3 + Hardwood ×1', 'Epic'],
            ['Steel Morningstar', 'Steel Bar ×4 + Hardwood ×1', 'Epic'],
            ['Frostbite Dagger', 'Iron Bar ×2 + Ice Crystal ×1 + Leather ×1', 'Epic'],
            ['Flamebrand Sword', 'Steel Bar ×3 + Fire Gem ×1 + Leather ×2', 'Legendary'],
            ['Shadowstrike Dagger', 'Steel Bar ×2 + Shroud Core ×1 + Leather ×2', 'Legendary'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Two-Handed Weapons (Forge)</h3>
        <RecipeTable
          headers={['Weapon', 'Materials', 'Tier']}
          rows={[
            ['Iron Greatsword', 'Iron Bar ×5 + Leather ×2', 'Rare'],
            ['Iron Greataxe', 'Iron Bar ×5 + Wood Log ×2', 'Rare'],
            ['Iron Warhammer', 'Iron Bar ×6 + Wood Log ×1', 'Rare'],
            ['Steel Greatsword', 'Steel Bar ×5 + Leather ×3', 'Epic'],
            ['Steel Greataxe', 'Steel Bar ×5 + Hardwood ×2', 'Epic'],
            ['Steel Warhammer', 'Steel Bar ×6 + Hardwood ×1', 'Epic'],
            ['Earthsplitter Hammer', 'Steel Bar ×6 + Fossilized Bone ×2 + Hardwood ×2', 'Legendary'],
            ['Stormcaller Greatsword', 'Steel Bar ×5 + Lightning Gem ×1 + Leather ×3', 'Legendary'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Bows (Hunter)</h3>
        <RecipeTable
          headers={['Weapon', 'Materials', 'Tier']}
          rows={[
            ['Shortbow', 'Wood Log ×3 + String ×2', 'Common'],
            ['Longbow', 'Hardwood ×4 + Sinew ×2 + Iron Bar ×1', 'Rare'],
            ['Composite Bow', 'Hardwood ×4 + Sinew ×2 + Iron Bar ×1 + Leather ×1', 'Rare'],
            ['Recurve Bow', 'Hardwood ×5 + Sinew ×3 + Steel Bar ×1', 'Epic'],
            ['Dragonbone Bow', 'Hardwood ×6 + Dragon Bone ×2 + Steel Bar ×2 + Sinew ×3', 'Legendary'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Staffs & Wands (Alchemist/Forge)</h3>
        <RecipeTable
          headers={['Weapon', 'Materials', 'Tier']}
          rows={[
            ['Apprentice Wand', 'Wood Log ×1 + Resin ×1', 'Common'],
            ['Fire Wand', 'Hardwood ×2 + Fire Gem ×1 + Resin ×1', 'Rare'],
            ['Ice Wand', 'Hardwood ×2 + Ice Crystal ×1 + Resin ×1', 'Rare'],
            ['Lightning Wand', 'Hardwood ×2 + Lightning Gem ×1 + Resin ×1', 'Epic'],
            ['Apprentice Staff', 'Wood Log ×2 + Resin ×1', 'Common'],
            ['Fire Staff', 'Hardwood ×3 + Fire Gem ×1 + Resin ×2', 'Rare'],
            ['Ice Staff', 'Hardwood ×3 + Ice Crystal ×1 + Resin ×2', 'Rare'],
            ['Archmage Staff', 'Hardwood ×4 + Shroud Core ×1 + Resin ×2 + Gem ×1', 'Legendary'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Shields (Forge)</h3>
        <RecipeTable
          headers={['Shield', 'Materials', 'Tier']}
          rows={[
            ['Wooden Shield', 'Wood Log ×3 + Metal Scraps ×1', 'Common'],
            ['Iron Tower Shield', 'Iron Bar ×6 + Wood Log ×2', 'Rare'],
            ['Iron Round Shield', 'Iron Bar ×4 + Wood Log ×2 + Leather ×1', 'Rare'],
            ['Steel Bulwark Shield', 'Steel Bar ×6 + Hardwood ×2 + Leather ×2', 'Epic'],
            ['Flameguard Shield', 'Steel Bar ×6 + Fire Gem ×1 + Hardwood ×2', 'Legendary'],
          ]}
        />

        <InfoBox title="Weapon Upgrade Path" type="tip">
          Early game: Wood/Stone → Mid: Iron → Late: Steel → Endgame: Legendary (requires boss drops + rare gems). 
          Always keep your weapon upgraded to your current level for maximum damage.
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'armor-recipes',
    title: 'Armor Recipes',
    icon: <Shield className="w-5 h-5" />,
    summary: 'Complete armor crafting — Heavy (Forge), Medium (Hunter), Light (Hunter), and Magic (Alchemist).',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Armor comes in <strong className="text-[var(--text-primary)]">4 weight classes</strong>: Heavy (Forge), Medium (Hunter), 
          Light (Hunter), and Magic (Alchemist). Each suits different playstyles.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Heavy Armor (Forge — Blacksmith)</h3>
        <RecipeTable
          headers={['Armor Set', 'Materials', 'Defense']}
          rows={[
            ['Rising Fighter Set', 'Torn Cloth ×8 + Metal Scraps ×4', 'Low'],
            ['Fur Armor Set', 'Animal Fur ×10 + Leather ×4 + String ×4', 'Low-Med'],
            ['Iron Plate Set', 'Iron Bar ×12 + Leather ×6', 'Medium'],
            ['Guardian Set', 'Iron Bar ×15 + Leather ×8 + Steel Bar ×3', 'High'],
            ['Steel Bulwark Set', 'Steel Bar ×15 + Leather ×8 + Hardwood ×4', 'Very High'],
            ['Warden Set', 'Steel Bar ×18 + Leather ×10 + Iron Bar ×5', 'Very High'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Medium Armor (Hunter)</h3>
        <RecipeTable
          headers={['Armor Set', 'Materials', 'Weight']}
          rows={[
            ['Scout Set', 'Leather ×6 + Cloth ×4 + String ×4', 'Light'],
            ['Ranger Set', 'Leather ×8 + Cloth ×4 + String ×4', 'Medium'],
            ['Hunter Set', 'Leather ×10 + Cloth ×6 + Dye ×2', 'Medium'],
            ['Marksman Set', 'Leather ×12 + Cloth ×6 + Steel Buckle ×2', 'Medium'],
            ['Deadeye Set', 'Hardened Leather ×12 + Cloth ×8 + Padding ×4', 'Medium-Heavy'],
            ['Assassin Set', 'Hardened Leather ×15 + Cloth ×8 + Shroud Silk ×4', 'Medium'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Light Armor (Hunter)</h3>
        <RecipeTable
          headers={['Armor Set', 'Materials', 'Weight']}
          rows={[
            ['Cloth Wraps', 'Cloth ×6 + Thread ×4', 'Very Light'],
            ['Adventurer Set', 'Cloth ×8 + Leather ×4 + String ×4', 'Light'],
            ['Rogue Set', 'Cloth ×8 + Leather ×6 + Dye ×2', 'Light'],
            ['Mercenary Set', 'Cloth ×10 + Leather ×6 + Padding ×2', 'Light'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Magic Armor (Alchemist)</h3>
        <RecipeTable
          headers={['Armor Set', 'Materials', 'Bonus']}
          rows={[
            ['Herbalist Set', 'Cloth ×8 + Shroud Spore ×4 + Plant Fiber ×6', 'Mana Regen'],
            ['Healer Set', 'Cloth ×10 + Shroud Liquid ×4 + Gem ×2', 'Healing Power'],
            ['Mage Set', 'Cloth ×10 + Shroud Core ×2 + Gem ×2', 'Spell Damage'],
            ['Sage Set', 'Cloth ×12 + Shroud Core ×3 + Crystal ×2', 'Max Mana'],
            ['Archmage Set', 'Cloth ×15 + Shroud Core ×4 + Crystal ×3 + Gem ×2', 'Spell Crit'],
            ['Warlock Set', 'Cloth ×12 + Ectoplasm ×4 + Shroud Core ×3', 'Dark Damage'],
            ['Sage Cowl', 'Cloth ×2 + Fur ×3 + Shroud Core ×1', '+INT, +Mana'],
            ['Sage Tunic', 'Cloth ×4 + Fur ×5 + Shroud Core ×1 + Resin ×2', '+INT, +Mana Regen'],
            ['Sage Gloves', 'Cloth ×2 + Fur ×3 + Shroud Core ×1', '+Spell Power'],
            ['Sage Pants', 'Cloth ×3 + Fur ×4 + Shroud Core ×1 + Resin ×1', '+INT, +Spirit'],
            ['Sage Boots', 'Cloth ×2 + Fur ×3 + Shroud Core ×1', '+Movement Speed'],
          ]}
        />

        <InfoBox title="Armor Weight Effects" type="info">
          <strong>Heavy:</strong> +Defense, -Movement, +Stamina Cost | <strong>Medium:</strong> Balanced | 
          <strong>Light:</strong> +Movement, -Defense, -Stamina Cost | <strong>Magic:</strong> +Mana/Spell, -Physical Defense
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'potion-recipes',
    title: 'Potion & Consumable Recipes',
    icon: <Beaker className="w-5 h-5" />,
    summary: 'All potions, elixirs, and consumables — healing, buffs, resistance, and explosives.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Potions are crafted at the <strong className="text-[var(--text-primary)]">Alchemy Station</strong>. 
          Explosives and advanced items require the <strong className="text-[var(--text-primary)]">Laboratory</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Healing Potions (Alchemy Station)</h3>
        <RecipeTable
          headers={['Potion', 'Materials', 'Effect']}
          rows={[
            ['Small Health Potion', 'Aloe ×2 + Water ×1', 'Heal 50 HP'],
            ['Health Potion', 'Aloe ×3 + Red Mushroom ×1 + Water ×1', 'Heal 100 HP'],
            ['Greater Health Potion', 'Honey ×1 + Water ×1 + Chamomile ×1 + Purple Berries ×1', 'Heal 200 HP'],
            ['Large Health Potion', 'Aloe ×4 + Red Mushroom ×2 + Shroud Liquid ×1', 'Heal 200 HP'],
            ['Superior Health Potion', 'Aloe ×5 + Red Mushroom ×3 + Ectoplasm ×1', 'Heal 350 HP'],
            ['Revitalizing Health Potion', 'Honey ×1 + Aloe ×1 + Chamomile ×1 + Alchemical Base ×1', 'Heal 800 HP'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Mana Potions (Alchemy Station)</h3>
        <RecipeTable
          headers={['Potion', 'Materials', 'Effect']}
          rows={[
            ['Small Mana Potion', 'Blue Mushroom ×2 + Water ×1', 'Restore 30 Mana'],
            ['Mana Potion', 'Blue Mushroom ×3 + Shroud Spore ×1 + Water ×1', 'Restore 60 Mana'],
            ['Large Mana Potion', 'Blue Mushroom ×4 + Shroud Core Fragment ×1 + Water ×1', 'Restore 120 Mana'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Buff Potions (Alchemy Station)</h3>
        <RecipeTable
          headers={['Potion', 'Materials', 'Effect']}
          rows={[
            ['Strength Elixir', 'Bear Claw ×1 + Fire Root ×2 + Water ×1', '+10 STR for 10 min'],
            ['Dexterity Elixir', 'Swiftleaf ×2 + Spider Silk ×1 + Water ×1', '+10 DEX for 10 min'],
            ['Intelligence Elixir', 'Mooncap ×2 + Shroud Spore ×1 + Water ×1', '+10 INT for 10 min'],
            ['Endurance Elixir', 'Heartroot ×2 + Tough Moss ×1 + Water ×1', '+10 END for 10 min'],
            ['Speed Potion', 'Swiftleaf ×3 + Water ×1', '+20% Speed for 5 min'],
            ['Invisibility Potion', 'Shadowcap ×2 + Shroud Liquid ×1 + Water ×1', 'Invisibility 30 sec'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Resistance Potions (Alchemy Station)</h3>
        <RecipeTable
          headers={['Potion', 'Materials', 'Effect']}
          rows={[
            ['Fire Resistance Flask', 'Fire Root ×2 + Obsidian Dust ×1 + Water ×1', 'Fire Resist 10 min'],
            ['Ice Resistance Flask', 'Ice Crystal ×2 + Water ×1', 'Ice Resist 10 min'],
            ['Poison Resistance Flask', 'Antidote Herb ×2 + Shroud Liquid ×1', 'Poison Resist 10 min'],
            ['Shroud Survival Flask', 'Shroud Spore ×2 + Shroud Liquid ×1 + Purified Water ×1', 'Shroud Timer +5 min'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Explosives (Laboratory)</h3>
        <RecipeTable
          headers={['Item', 'Materials', 'Effect']}
          rows={[
            ['Shroud Bomb', 'Shroud Core ×1 + Black Powder ×3 + Metal Casing ×1', 'AOE Shroud Damage'],
            ['Flashbang', 'Brightcap ×2 + Black Powder ×2 + Metal Casing ×1', 'Stun enemies 5 sec'],
            ['Smoke Bomb', 'Shadowcap ×2 + Black Powder ×1 + Cloth ×1', 'Smoke screen 10 sec'],
            ['Frag Grenade', 'Iron Shards ×2 + Black Powder ×3 + Metal Casing ×1', 'AOE Physical Damage'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Staff Charges / Spell Ammunition (Alchemy Station)</h3>
        <RecipeTable
          headers={['Charge', 'Materials', 'Effect']}
          rows={[
            ['Eternal Chain Lightning', 'Ectoplasm Shard ×1', 'Bounces between enemies'],
            ['Eternal Lightning Channel', 'Ectoplasm Shard ×1', 'Continuous lightning beam'],
            ['Eternal Heal Channel', 'Ectoplasm Crystal ×1', 'Continuous healing beam on ally'],
            ['Eternal Chain Heal', 'Ectoplasm Crystal ×1', 'Chain healing between allies'],
            ['Eternal Fireball', 'Ectoplasm Crystal ×1', 'Exploding fire projectile'],
            ['Eternal Ice Bolt', 'Ectoplasm Crystal ×1', 'Freezing ice projectile'],
            ['Eternal Shroud Meteor', 'Ectoplasm Crystal ×1', 'Devastating meteor strike'],
            ['Wisp of Light', 'Bug Dust ×1 + Glow Dust ×1 + Resin ×1', 'Portable light source'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Special Consumables (Alchemy Station)</h3>
        <RecipeTable
          headers={['Item', 'Materials', 'Effect']}
          rows={[
            ['Antiseptic', 'Aloe ×2 + Chamomile ×1', 'Cures Poison'],
            ['Wound Ointment', 'Aloe ×3 + Chamomile ×2 + Gentian ×1', 'Cures Bleed'],
            ['Bandage (upgraded)', 'Cloth ×2 + Antiseptic ×1', 'Heal 75 HP + stop bleed'],
            ['Stamina Potion', 'Honey ×2 + Coffee Beans ×1 + Water ×1', 'Full Stamina Restore'],
            ['Flask of the Fell', 'Shroud Liquid ×1 + Strawberry ×1 + Forest Beet ×1', '+25% Stamina Regen for 10 min'],
          ]}
        />

        <InfoBox title="Potion Stacking Rules" type="warning">
          You can have <strong>ONE buff potion</strong> active at a time. Healing potions have a <strong>10-second cooldown</strong>. 
          Resistance potions can stack with buff potions. Shroud Survival Flask stacks with all.
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'food-recipes',
    title: 'Food & Cooking Recipes',
    icon: <Apple className="w-5 h-5" />,
    summary: 'All food recipes — meat, vegetable dishes, baked goods, and advanced cooking.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Food provides <strong className="text-[var(--text-primary)]">stat buffs</strong> that last 10-30 minutes. 
          Cook at <strong className="text-[var(--text-primary)]">Cooking Station</strong> or <strong className="text-[var(--text-primary)]">Oven</strong> (Farmer). 
          You can have <strong className="text-[var(--text-gold)]">3 food buffs active simultaneously</strong>.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Meat Dishes (Cooking Station)</h3>
        <RecipeTable
          headers={['Dish', 'Ingredients', 'Buff']}
          rows={[
            ['Cooked Meat', 'Raw Meat ×1', 'Small Health Regen'],
            ['Grilled Steak', 'Raw Meat ×2 + Salt ×1', '+5 STR for 15 min'],
            ['Meat Stew', 'Raw Meat ×2 + Potato ×1 + Water ×1', '+10 STR for 20 min'],
            ['Hearty Stew', 'Raw Meat ×3 + Potato ×2 + Carrot ×1 + Water ×1', '+15 STR for 25 min'],
            ['Smoked Meat', 'Raw Meat ×2 + Wood Chips ×1 (Drying Rack)', '+8 STR for 20 min'],
            ['Spiced Meat', 'Raw Meat ×2 + Spice ×1', '+12 STR for 20 min'],
            ['Bacon and Eggs', 'Raw Meat ×1 + Egg ×2 + Salt ×1', '+8 STR, +5 END for 20 min'],
            ['Kebab', 'Raw Meat ×2 + Onion ×1 + Pepper ×1', '+10 STR, +5 DEX for 20 min'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Vegetable Dishes (Cooking Station)</h3>
        <RecipeTable
          headers={['Dish', 'Ingredients', 'Buff']}
          rows={[
            ['Roasted Vegetables', 'Potato ×1 + Carrot ×1 + Onion ×1', '+5 INT for 15 min'],
            ['Vegetable Soup', 'Potato ×1 + Carrot ×1 + Onion ×1 + Water ×1', '+8 INT for 20 min'],
            ['Stuffed Pepper', 'Bell Pepper ×2 + Rice ×1 + Tomato ×1', '+10 INT for 20 min'],
            ['Vegetable Stir-fry', 'Mixed Vegetables ×2 + Oil ×1 + Spice ×1', '+12 INT for 20 min'],
            ['Mushroom Soup', 'Mushroom ×3 + Onion ×1 + Water ×1', '+5 END for 15 min'],
            ['Berry Pie', 'Purple Berries ×3 + Flour ×1 + Sugar ×1 (Oven)', '+8 INT for 20 min'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Baked Goods (Oven)</h3>
        <RecipeTable
          headers={['Item', 'Ingredients', 'Buff']}
          rows={[
            ['Flatbread', 'Flour ×1 + Water ×1', 'Small Health Regen'],
            ['Bread', 'Flour ×2 + Water ×1 + Yeast ×1', '+5 END for 15 min'],
            ['Honey Bread', 'Flour ×2 + Water ×1 + Honey ×1', '+8 END for 20 min'],
            ['Meat Pie', 'Flour ×1 + Raw Meat ×2 + Potato ×1', '+10 STR, +5 END for 20 min'],
            ['Fish Pie', 'Flour ×1 + Fish ×2 + Herb ×1', '+10 DEX for 20 min'],
            ['Vegetable Pie', 'Flour ×1 + Mixed Vegetables ×2', '+10 INT for 20 min'],
          ]}
        />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Advanced Cooking (Oven)</h3>
        <RecipeTable
          headers={['Dish', 'Ingredients', 'Buff']}
          rows={[
            ['Feast Platter', 'Raw Meat ×3 + Mixed Vegetables ×2 + Bread ×1 + Wine ×1', '+15 All Stats for 30 min'],
            ['Royal Banquet', 'Raw Meat ×4 + Fish ×2 + Vegetables ×2 + Bread ×2 + Wine ×2 + Spice ×1', '+20 All Stats for 30 min'],
            ['Trail Mix', 'Nuts ×1 + Dried Berries ×1 + Seeds ×1', '+5 END, Stamina Regen for 15 min'],
            ['Energizing Coffee', 'Coffee Beans ×1 + Water ×1', 'Stamina Regen +20% for 10 min'],
          ]}
        />

        <InfoBox title="Cooking Tips" type="tip">
          <strong>Best Early Game:</strong> Grilled Steak (+STR) | <strong>Best Mid Game:</strong> Hearty Stew (+15 STR) | 
          <strong>Best Endgame:</strong> Royal Banquet (+20 All Stats). Always cook before boss fights!
        </InfoBox>
      </div>
    ),
  },

  {
    id: 'material-processing',
    title: 'Material Processing Chains',
    icon: <TreePine className="w-5 h-5" />,
    summary: 'Complete production chains — from raw materials to finished goods. Every step documented.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded uses <strong className="text-[var(--text-primary)]">multi-step production chains</strong>. 
          Understanding these chains is critical for efficient crafting.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Metal Processing Chain</h3>
        <InfoBox title="Ore → Bar → Weapon" type="info">
          <strong>Step 1:</strong> Mine Ore (Copper/Tin/Iron) → <strong>Step 2:</strong> Smelt at Smelter (Ore + Charcoal = Bar) → <br/>
          <strong>Step 3:</strong> Bronze = Copper Bar ×7 + Tin Bar ×3 | Steel = Iron Ore ×20 + Coal ×50 at Blast Furnace → <br/>
          <strong>Step 4:</strong> Forge Bars into Weapons/Armor at Blacksmith's Forge
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Leather Processing Chain</h3>
        <InfoBox title="Hide → Leather → Armor" type="info">
          <strong>Step 1:</strong> Kill animal → Get Fur Patch → <strong>Step 2:</strong> 10 Fur Patch + 2 String = Animal Fur (Hunter) → <br/>
          <strong>Step 3:</strong> Drying Rack: Animal Fur + 3 Salt = Dried Fur → <br/>
          <strong>Step 4:</strong> Tanning Station: 10 Dried Fur + 20 Salt + 2 Ammonia Gland = Leather → <br/>
          <strong>Step 5:</strong> Hunter Station: 3 Fabric + 1 Leather + 2 Resin + 2 Linen = Padding → Armor
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Textile Processing Chain</h3>
        <InfoBox title="Plant → Thread → Fabric" type="info">
          <strong>Step 1:</strong> Harvest Flax (blue flowers in Revelwood) → <br/>
          <strong>Step 2:</strong> Hand Spindle: 2 Flax = Linen → <strong>Step 3:</strong> Loom: 2 Linen = Fabric → <br/>
          <strong>Upgrade:</strong> Spinning Wheel (Carpenter) for faster production → Wool from Yaks → Same chain
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Wood Processing Chain</h3>
        <InfoBox title="Log → Plank → Furniture" type="info">
          <strong>Step 1:</strong> Chop tree → Wood Log → <strong>Step 2:</strong> Table Saw (Carpenter): 1 Log = Wood Planks → <br/>
          <strong>Step 3:</strong> Kiln: Clay + Log = Fired Brick → <strong>Step 4:</strong> Carpenter crafts Furniture from Planks + Bricks
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Alchemy Processing Chain</h3>
        <InfoBox title="Raw → Base → Potion" type="info">
          <strong>Step 1:</strong> Gather Shroud Spores + Shroud Liquid → <br/>
          <strong>Step 2:</strong> Alchemy Station: Spores + Liquid + Water + Mycelium = Alchemical Base → <br/>
          <strong>Step 3:</strong> Base + specific herbs = Potions (Health/Mana/Buff) → <br/>
          <strong>Step 4:</strong> Laboratory: Base + Nitrate + Sulfur = Explosives
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Ectoplasm Processing Chain (Endgame)</h3>
        <InfoBox title="Crystal → Ectoplasm → Key" type="info">
          <strong>Step 1:</strong> Defeat Hollow enemies in Hollow Halls → Get Ectoplasm Fragment/Shard/Crystal → <br/>
          <strong>Step 2:</strong> Ectoplasm Press (Collector): Fragments + Cloth + Charcoal = Ectoplasm → <br/>
          <strong>Step 3:</strong> Collector crafts Bone Keys from Ectoplasm + specific biome materials → <br/>
          <strong>Result:</strong> Bone Key opens Hollow Halls dungeons for legendary gear!
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Key Processing Stations Overview</h3>
        <RecipeTable
          headers={['Input', 'Station', 'Output']}
          rows={[
            ['Ore + Charcoal', 'Smelter', 'Metal Bar'],
            ['Iron Ore + Coal', 'Blast Furnace', 'Steel Bar'],
            ['Wood Log', 'Table Saw', 'Wood Planks'],
            ['Log + Charcoal + Dirt', 'Charcoal Kiln', 'Charcoal + Wood Acid + Tar'],
            ['Fur + Salt', 'Drying Rack', 'Dried Fur'],
            ['Dried Fur + Salt + Ammonia', 'Tanning Station', 'Leather'],
            ['Flax ×2', 'Hand Spindle', 'Linen'],
            ['Linen ×2', 'Loom', 'Fabric'],
            ['Grain', 'Grinding Stones', 'Flour'],
            ['Ectoplasm Fragments', 'Ectoplasm Press', 'Ectoplasm'],
            ['Clay + Log', 'Kiln', 'Fired Brick'],
            ['Sand + Charcoal', 'Smelter', 'Glass'],
          ]}
        />
      </div>
    ),
  },
];
