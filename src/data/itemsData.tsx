import {
  Apple, Gem, Pickaxe, FlaskConical, TreePine, Shield, Skull, Hammer
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

const RARITY_COLORS: Record<string, string> = {
  'Common': 'text-gray-400',
  'Uncommon': 'text-green-400',
  'Rare': 'text-blue-400',
  'Epic': 'text-purple-400',
  'Legendary': 'text-yellow-400',
};

function ItemCard({ name, type, source, desc, rarity }: {
  name: string; type: string; source: string; desc: string; rarity?: string;
}) {
  const rc = rarity ? (RARITY_COLORS[rarity] || RARITY_COLORS['Common']) : RARITY_COLORS['Common'];
  return (
    <div className="game-panel corner-decor p-2.5 mb-1.5">
      <div className="flex items-center justify-between mb-0.5">
        <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{name}</h4>
        {rarity && <span className={`text-[9px] font-bold uppercase ${rc}`}>{rarity}</span>}
      </div>
      <div className="text-[9px] text-[var(--text-muted)] mb-0.5">{type}</div>
      <p className="text-[10px] text-[var(--text-secondary)] mb-0.5">{desc}</p>
      <div className="text-[9px] text-orange-400">{source}</div>
    </div>
  );
}

function ItemList({ items }: { items: { name: string; type: string; source: string; desc: string; rarity?: string }[] }) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <ItemCard key={item.name} name={item.name} type={item.type} source={item.source} desc={item.desc} rarity={item.rarity} />
      ))}
    </div>
  );
}

const ores_metals = [
  { name: 'Stone', type: 'Ore', source: 'Mined from rock nodes worldwide', desc: 'Basic building material. Used in crafting stations, brick, and mortar.', rarity: 'Common' },
  { name: 'Copper Ore', type: 'Ore', source: 'Mined in Revelwood', desc: 'Copper ore veins in Revelwood. Smelt into Copper Bars at Smelter.', rarity: 'Common' },
  { name: 'Copper Bar', type: 'Metal', source: 'Smelted: 20x Copper Ore + 20x Charcoal', desc: 'Used for early game crafting and bronze production.', rarity: 'Common' },
  { name: 'Tin Ore', type: 'Ore', source: 'Mined in Nomad Highlands', desc: 'Combined with Copper to make Bronze at Smelter.', rarity: 'Common' },
  { name: 'Tin Bar', type: 'Metal', source: 'Smelted: 15x Tin Ore + 5x Charcoal + 2x Wood Acid', desc: 'Component for Bronze Bars.', rarity: 'Common' },
  { name: 'Bronze Bar', type: 'Metal', source: 'Smelted: 7x Copper Bar + 3x Tin Bar + 10x Charcoal', desc: 'Stronger than copper. Used for mid-tier weapons and armor.', rarity: 'Common' },
  { name: 'Iron Ore', type: 'Ore', source: 'Mined from veins worldwide', desc: 'Primary mid-game metal. Smelt into Iron Bars.', rarity: 'Common' },
  { name: 'Iron Bar', type: 'Metal', source: 'Smelted: 10x Iron Ore + 25x Charcoal', desc: 'Essential for steel production and mid-tier gear.', rarity: 'Common' },
  { name: 'Steel Bar', type: 'Metal', source: 'Blast Furnace: 20x Iron Ore + 50x Coal', desc: 'High-tier metal for endgame weapons and heavy armor.', rarity: 'Common' },
  { name: 'Silver Ore', type: 'Ore', source: 'Mined in Albaneve Summits', desc: 'Precious metal for jewelry and alchemical items.', rarity: 'Common' },
  { name: 'Silver Bar', type: 'Metal', source: 'Blast Furnace: 20x Silver Ore + 10x Coal', desc: 'Used for advanced alchemical recipes.', rarity: 'Common' },
  { name: 'Silver Dust', type: 'Material', source: 'Grind: 1x Silver Bar at Grinding Stones', desc: 'Fine powder for potions and wound ointments.', rarity: 'Common' },
  { name: 'Coal', type: 'Fuel', source: 'Mined in Albaneve Summits', desc: 'Superior fuel for Blast Furnace and high-heat crafting.', rarity: 'Common' },
  { name: 'Coal Powder', type: 'Material', source: 'Grind: 5x Charcoal at Grinding Stones', desc: 'Highly flammable powder for explosives.', rarity: 'Common' },
  { name: 'Charcoal', type: 'Fuel', source: 'Charcoal Kiln: 17x Wood Logs + 3x Dirt', desc: 'Basic fuel for smelting and cooking.', rarity: 'Common' },
  { name: 'Amber', type: 'Gem', source: 'Found in Shroud / Mined from Amber Nodes', desc: 'Petrified resin. Used in crafting and alchemy.', rarity: 'Common' },
  { name: 'Amethyst', type: 'Gem', source: 'Albaneve Summits', desc: 'Purple crystal for jewelry and magical crafting.', rarity: 'Common' },
  { name: 'Lapislazuli', type: 'Gem', source: 'Mined in Kindlewastes', desc: 'Magical catalyst gem for channeling and shielding.', rarity: 'Common' },
  { name: 'Obsidian', type: 'Gem', source: 'Albaneve Summits', desc: 'Volcanic glass. Sharp edges for smithing.', rarity: 'Common' },
  { name: 'Obsidian Dust', type: 'Material', source: 'Grind: 1x Obsidian at Grinding Stones', desc: 'Fine powder for alchemical recipes.', rarity: 'Common' },
  { name: 'Flintstone', type: 'Ore', source: 'Found in Springlands', desc: 'Soft rock that releases sparks. Used for fire-starting.', rarity: 'Common' },
  { name: 'Fossilized Bone', type: 'Material', source: 'West of Nomad Highlands Ancient Spire', desc: 'Hardened magical bones. High magical capacity.', rarity: 'Common' },
  { name: 'Fossilized Bone Dust', type: 'Material', source: 'Grind: 1x Fossilized Bone at Grinding Stones', desc: 'Frees magical attributes for crafting.', rarity: 'Common' },
  { name: 'Sandstone', type: 'Stone', source: 'Found in Kindlewastes', desc: 'Beautiful natural building material.', rarity: 'Common' },
  { name: 'Limestone', type: 'Stone', source: 'Nomad Highlands', desc: 'Basic stone for construction and crafting.', rarity: 'Common' },
  { name: 'Scales', type: 'Material', source: 'Kindlewaste deserts', desc: 'Hardened animal scales, as hard as stone.', rarity: 'Common' },
  { name: 'Ectoplasm Fragment', type: 'Material', source: 'Defeat Hollow enemies in Hollow Halls', desc: 'Small crystallized ectoplasm with life energy.', rarity: 'Uncommon' },
  { name: 'Ectoplasm Shard', type: 'Material', source: 'Defeat Hollow enemies in Hollow Halls', desc: 'Larger crystallized ectoplasm. Contains essence of vitality.', rarity: 'Uncommon' },
  { name: 'Ectoplasm Crystal', type: 'Material', source: 'Defeat Hollow enemies in Hollow Halls', desc: 'Sizeable crystal that stores life force for eons.', rarity: 'Uncommon' },
  { name: 'Giant Bones', type: 'Material', source: 'Defeat Hollow Cyclops', desc: 'Exceptionally sturdy oversized bones.', rarity: 'Uncommon' },
  { name: 'Ectoplasm Gem', type: 'Material', source: 'Crafted: 5x Flintstone + 2x Ectoplasm Fragment at Collector', desc: 'Faceted gemstone from refined frozen ectoplasm.', rarity: 'Common' },
  { name: 'Red Marble Fragment', type: 'Material', source: 'Found in Hollow Halls', desc: 'Can be processed into stunning Red Marble Blocks.', rarity: 'Common' },
  { name: 'Gold Ore', type: 'Ore', source: 'Mined in Albaneve Summits', desc: 'Precious gold ore for high-tier crafting.', rarity: 'Common' },
  { name: 'Gold Bars', type: 'Metal', source: 'Smelted from Gold Ore', desc: 'Refined gold for jewelry and trading.', rarity: 'Common' },
  { name: 'Gold Dust', type: 'Material', source: 'Grind Gold Bars', desc: 'Fine gold powder for alchemical uses.', rarity: 'Common' },
  { name: 'Iron Dust', type: 'Material', source: 'Grind Iron at Grinding Stones', desc: 'Fine iron powder for crafting.', rarity: 'Common' },
  { name: 'Chitin Powder', type: 'Material', source: 'Grind insect chitin', desc: 'Powdered insect exoskeleton.', rarity: 'Common' },
  { name: 'Granite', type: 'Stone', source: 'Albaneve Summits', desc: 'Hard igneous rock for construction.', rarity: 'Common' },
  { name: 'Fine Sand', type: 'Material', source: 'Beaches and shores', desc: 'Fine-grained sand for premium glass.', rarity: 'Common' },
  { name: 'Shell Limestone', type: 'Stone', source: 'Coastal areas', desc: 'Limestone formed from shell deposits.', rarity: 'Common' },
  { name: 'Aquamarine', type: 'Gem', source: 'Underwater in Veilwater Basin', desc: 'Blue-green gemstone from coastal waters. Used for jewelry and magical crafting.', rarity: 'Common' },
];

const wood_fibers = [
  { name: 'Wood Logs', type: 'Wood', source: 'Chop down trees', desc: 'Basic building and crafting material.', rarity: 'Common' },
  { name: 'Conifer Logs', type: 'Wood', source: 'Chop Conifer Trees', desc: 'Pine-scented wood from conifer trees.', rarity: 'Common' },
  { name: 'Hardwood', type: 'Wood', source: 'Chop trees in Revelwood', desc: 'Especially tough wood for advanced crafting.', rarity: 'Common' },
  { name: 'Palm Wood Logs', type: 'Wood', source: 'Chop palm trees in Kindlewastes', desc: 'Desert palm wood.', rarity: 'Common' },
  { name: 'Shroud Wood', type: 'Wood', source: 'Chop Shroud-infested trees', desc: 'Corrupted wood with altered properties.', rarity: 'Common' },
  { name: 'Resin', type: 'Material', source: 'Chop down trees', desc: 'Tree sap with many protective functions.', rarity: 'Common' },
  { name: 'Wood Planks', type: 'Processed', source: 'Table Saw: 1x Wood Logs', desc: 'Cut planks for building.', rarity: 'Common' },
  { name: 'Plant Fiber', type: 'Fiber', source: 'Gather shrubs and bushes', desc: 'Robust fibers for string production.', rarity: 'Common' },
  { name: 'Twigs', type: 'Wood', source: 'Use pickaxe on dens', desc: 'Small branches. Foundation of early crafting.', rarity: 'Common' },
  { name: 'Straw', type: 'Plant', source: 'Harvest wheat', desc: 'Natural plant remains for building material.', rarity: 'Common' },
  { name: 'Wheat Grains', type: 'Seed/Grain', source: 'Bounty Barn east of Ruined Bridge', desc: 'Cooking ingredient and field seed.', rarity: 'Common' },
  { name: 'Flour', type: 'Food Ingredient', source: 'Grind: 2x Wheat Grains at Grinding Stones', desc: 'Ground wheat for baking.', rarity: 'Common' },
  { name: 'Sugar Cane', type: 'Plant', source: 'Harvest in Nomad Highlands', desc: 'Sweet plant for sugar production.', rarity: 'Common' },
  { name: 'Sugar', type: 'Food Ingredient', source: 'Farmer: 2x Sugar Cane', desc: 'Recharges stamina regeneration.', rarity: 'Common' },
  { name: 'Tar', type: 'Material', source: 'Charcoal Kiln: 30x Wood Logs + 6x Dirt', desc: 'Useful for weatherproofing.', rarity: 'Common' },
  { name: 'Wood Acid', type: 'Material', source: 'Charcoal Kiln byproduct: 15x Wood Logs + 3x Dirt', desc: 'Byproduct with medicinal and alchemical uses.', rarity: 'Common' },
  { name: 'Fired Brick', type: 'Building', source: 'Carpenter: 1x Lump of Clay + 1x Wood Logs', desc: 'Hardened clay brick for construction.', rarity: 'Common' },
  { name: 'Bamboo Logs', type: 'Wood', source: 'Chop in Veilwater Basin', desc: 'Fast-growing bamboo wood.', rarity: 'Common' },
  { name: 'Blackmire Heartwood', type: 'Wood', source: 'Swamp trees', desc: 'Dense wood from swamp trees.', rarity: 'Common' },
  { name: 'Tropical Wood', type: 'Wood', source: 'Chop in Veilwater Basin', desc: 'Dense tropical hardwood.', rarity: 'Common' },
  { name: 'Palm Leaves', type: 'Plant', source: 'Palm trees', desc: 'Leaves from palm trees for crafting.', rarity: 'Common' },
  { name: 'Grapple Plant', type: 'Plant', source: 'Kindlewastes', desc: 'Plant with grapple-like tendrils.', rarity: 'Common' },
  { name: 'Hazelnut', type: 'Food', source: 'Revelwood trees', desc: 'Nutritious nut from hazel trees.', rarity: 'Common' },
  { name: 'Moss', type: 'Plant', source: 'Damp areas, caves', desc: 'Soft green moss for crafting.', rarity: 'Common' },
  { name: 'Paper Reed', type: 'Plant', source: 'Wetlands', desc: 'Reed for paper production.', rarity: 'Common' },
  { name: 'Pumpkin', type: 'Food', source: 'Farming', desc: 'Large squash for cooking.', rarity: 'Common' },
  { name: 'Stinging Nettle', type: 'Herb', source: 'Revelwood', desc: 'Herb with medicinal properties.', rarity: 'Common' },
  { name: 'Shadowbloom', type: 'Flower', source: 'Shaded areas', desc: 'Flower that grows in shadow.', rarity: 'Common' },
  { name: 'Gloomberry', type: 'Berry', source: 'Dark forests', desc: 'Berry from gloomy forest areas.', rarity: 'Common' },
  { name: 'Midnight Lily', type: 'Flower', source: 'Night-blooming', desc: 'Rare lily that blooms at midnight.', rarity: 'Uncommon' },
  { name: 'Penny Bun', type: 'Mushroom', source: 'Forests', desc: 'Edible forest mushroom.', rarity: 'Common' },
  { name: 'Pink Mushroom Meat', type: 'Mushroom', source: 'High level areas', desc: 'Pink-colored mushroom flesh.', rarity: 'Common' },
  { name: 'Acidic Mycelium', type: 'Mushroom', source: 'Nomad Highlands', desc: 'Acidic mushroom mycelium.', rarity: 'Common' },
  { name: 'Stapelia Starflower', type: 'Flower', source: 'Desert areas', desc: 'Star-shaped desert flower.', rarity: 'Common' },
  { name: 'Calla Luna', type: 'Flower', source: 'Nomad Highlands', desc: 'Moon-like calla flower.', rarity: 'Common' },
  { name: 'Climbing Rose', type: 'Flower', source: 'Nomad Highlands', desc: 'Rose vine that climbs surfaces.', rarity: 'Common' },
  { name: 'Ivy', type: 'Plant', source: 'Nomad Highlands', desc: 'Climbing ivy plant.', rarity: 'Common' },
  { name: 'Glimmer Gentian', type: 'Flower', source: 'Mountains', desc: 'Gentian that faintly glows.', rarity: 'Common' },
  { name: 'Wisteria', type: 'Plant', source: 'Veilwater Basin', desc: 'Beautiful flowering vine.', rarity: 'Common' },
  { name: 'Daylily', type: 'Flower', source: 'Veilwater Basin', desc: 'Bright day-blooming flower.', rarity: 'Common' },
  { name: 'Passionflower', type: 'Herb', source: 'Veilwater Basin', desc: 'Exotic flower with calming properties.', rarity: 'Common' },
  { name: 'Gleam Root', type: 'Plant', source: 'Veilwater Basin', desc: 'Root that faintly glows in darkness.', rarity: 'Common' },
  { name: 'Gleam Root Dust', type: 'Material', source: 'Grind Gleam Root', desc: 'Luminous powder from Gleam Root.', rarity: 'Common' },
  { name: 'Wolfsbane', type: 'Herb', source: 'Mountain areas', desc: 'Toxic herb with medicinal applications.', rarity: 'Uncommon' },
];

const fabrics_leather = [
  { name: 'Flax', type: 'Fiber', source: 'Found in Revelwood (blue flowers)', desc: 'Strong fibers for linen production.', rarity: 'Common' },
  { name: 'Linen', type: 'Fabric', source: 'Hand Spindle: 2x Flax', desc: 'Natural fiber from processed flax.', rarity: 'Common' },
  { name: 'Fabric', type: 'Fabric', source: 'Loom: 2x Linen', desc: 'Sturdy woven material for clothing.', rarity: 'Common' },
  { name: 'Torn Cloth', type: 'Fabric', source: 'Loot from humanoid Fell enemies', desc: 'Tattered remains for basic crafting.', rarity: 'Common' },
  { name: 'String', type: 'Fiber', source: 'Player Crafting: 3x Plant Fiber / Spinning Wheel: 2x Plant Fiber', desc: 'Essential binding material.', rarity: 'Common' },
  { name: 'Fur Patch', type: 'Leather', source: 'Kill small animals (bats, rabbits)', desc: 'Small shred of animal fur.', rarity: 'Common' },
  { name: 'Animal Fur', type: 'Leather', source: 'Crafted: 10x Fur Patch + 2x String at Hunter', desc: 'Warm and versatile resource.', rarity: 'Common' },
  { name: 'Dried Fur', type: 'Leather', source: 'Drying Rack: 1x Animal Fur + 3x Salt', desc: 'Sturdier and more durable fur.', rarity: 'Common' },
  { name: 'Leather', type: 'Leather', source: 'Tanning Station: 10x Dried Fur + 20x Salt + 2x Ammonia Gland', desc: 'Versatile, durable, waterproof material.', rarity: 'Common' },
  { name: 'Hardened Leather', type: 'Leather', source: 'Hunter: 1x Leather + 2x Wax', desc: 'More sturdy and enduring leather patch.', rarity: 'Common' },
  { name: 'Raw Wool', type: 'Fiber', source: 'Kill Yaks', desc: 'Fluffy, easily knotted wool.', rarity: 'Common' },
  { name: 'Wool', type: 'Fiber', source: 'Improved Spinning Wheel: 20x Raw Wool', desc: 'Refined wool for garments and padding.', rarity: 'Common' },
  { name: 'Padding', type: 'Armor Material', source: 'Hunter: 3x Fabric + 1x Leather + 2x Resin + 2x Linen', desc: 'Basic ingredient for advanced armor.', rarity: 'Common' },
  { name: 'Warm Padding', type: 'Armor Material', source: 'Hunter: 3x Fabric + 1x Leather + 2x Resin + 4x Wool', desc: 'Better insulated padding for cold protection.', rarity: 'Common' },
  { name: 'Blue Fabric', type: 'Fabric', source: 'Hunter: 1x Fabric + 1x Indigo Plant', desc: 'Blue-dyed fabric for clothing.', rarity: 'Common' },
  { name: 'Green Fabric', type: 'Fabric', source: 'Hunter: 1x Fabric + 1x Mint Mushroom Meat', desc: 'Green-dyed fabric, color of life.', rarity: 'Common' },
  { name: 'Red Fabric', type: 'Fabric', source: 'Hunter: 1x Fabric + 1x Sulfur', desc: 'Red-dyed fabric, color of the Flame.', rarity: 'Common' },
  { name: 'Violet Fabric', type: 'Fabric', source: 'Hunter: 1x Fabric + 1x Mauveine', desc: 'Luscious dyed fabric for fine garments.', rarity: 'Common' },
  { name: 'Yellow Fabric', type: 'Fabric', source: 'Hunter: 1x Fabric + 1x Saffron', desc: 'Yellow dyed fabric for clothing.', rarity: 'Common' },
];

const shroud_alchemy = [
  { name: 'Shroud Liquid', type: 'Alchemy', source: 'Gather from puffball mushrooms in Shroud', desc: 'Liquified Shroud essence for alchemical purposes.', rarity: 'Common' },
  { name: 'Shroud Spores', type: 'Alchemy', source: 'Loot from weak Shroud creatures', desc: 'Particles that create and power the Shroud.', rarity: 'Common' },
  { name: 'Shroud Sack', type: 'Alchemy', source: 'Drop from Fell Spitting Plants', desc: 'Organic bag with concentrated Shroud spores.', rarity: 'Common' },
  { name: 'Shroud Core', type: 'Alchemy', source: 'Alchemist: 10x Shroud Spores + 10x Shroud Liquid', desc: 'Stable energy form. Burn at Flame Altar for protection.', rarity: 'Common' },
  { name: 'Shroud Wood', type: 'Wood', source: 'Chop trees in Shroud', desc: 'Wood corrupted by Shroud infestation.', rarity: 'Common' },
  { name: 'Mycelium', type: 'Alchemy', source: 'Mine luminescent ground in Shroud', desc: 'Magical mushroom mycelium for alchemy.', rarity: 'Common' },
  { name: 'Goo', type: 'Alchemy', source: 'Alchemist: 1x Dirt + 1x Shroud Liquid + 1x Bug Dust', desc: 'Sticky paste for binding chemical substances.', rarity: 'Common' },
  { name: 'Alchemical Base', type: 'Alchemy', source: 'Alchemy Station: 1x Shroud Liquid + 1x Mycelium + 1x Water + 1x Shroud Spores', desc: 'Clear liquid for enhancing alchemical reactions.', rarity: 'Common' },
  { name: 'Nitrate', type: 'Alchemy', source: 'Laboratory: 5x Sand + 5x Salt + 1x Wood Acid + 1x Alchemical Base', desc: 'Dangerous substance for explosives.', rarity: 'Common' },
  { name: 'Sulfur', type: 'Alchemy', source: 'Found in hot areas (Kindlewastes)', desc: 'Yellow mineral for explosives and dye.', rarity: 'Common' },
  { name: 'Black Powder', type: 'Alchemy', source: 'Laboratory: 7x Nitrate + 1x Sulfur + 2x Coal Powder', desc: 'Dangerous explosive substance.', rarity: 'Common' },
  { name: 'Enshrouded Oil', type: 'Alchemy', source: 'Laboratory: 5x Shroud Spores + 5x Coal Powder + 5x Shroud Liquid + 1x Sulfur', desc: 'Mysterious oil with unknown uses.', rarity: 'Common' },
  { name: 'Flammable Goo', type: 'Alchemy', source: 'Laboratory: 5x Tar + 1x Alchemical Base + 1x Coal + 1x Goo', desc: 'Sticky, highly flammable substance.', rarity: 'Common' },
  { name: 'Mauveine', type: 'Alchemy', source: 'Laboratory: 5x Tar + 1x Alchemical Base + 1x Nitrate + 1x Sulfur', desc: 'Purple dye for fabric and healing.', rarity: 'Common' },
  { name: 'Glow Dust', type: 'Alchemy', source: 'Grind: 1x Fire Fly at Alchemist', desc: 'Magical glowing dust from crushed Fire Fly.', rarity: 'Common' },
  { name: 'Ammonia Gland', type: 'Alchemy', source: 'Defeat red mushroom enemies (Kindlewastes/Nomad Highlands)', desc: 'Concentrated substance for tanning furs.', rarity: 'Common' },
  { name: 'Bug Dust', type: 'Alchemy', source: 'Grind: 1x Critter Parts at Alchemist', desc: 'Protein-rich ingredient from crushed critter shells.', rarity: 'Common' },
  { name: 'Critter Parts', type: 'Alchemy', source: 'Defeat Fell Beetles and Spiders', desc: 'Remains of Shroud-dwelling pests.', rarity: 'Common' },
  { name: 'Antiseptic', type: 'Consumable', source: 'Alchemy Station: 1x Wood Acid + 1x Aloe', desc: 'Medical solution that cures all poison effects.', rarity: 'Uncommon' },
  { name: 'Wound Ointment', type: 'Consumable', source: 'Laboratory: 1x Antiseptic + 2x Chamomile + 2x Gentian + 1x Silver Dust', desc: 'Healing ointment for flesh wounds.', rarity: 'Common' },
  { name: 'Purified Slime', type: 'Alchemy', source: 'Ectoplasm Press: 3x Charcoal + 10x Salt + 3x Toxic Slime + 1x Wood Acid', desc: 'Cleansed green glowing material.', rarity: 'Common' },
  { name: 'Toxic Slime', type: 'Alchemy', source: 'Mine green waste in Hollow Halls', desc: 'Deadly slime from Hollow Halls. Handle with care.', rarity: 'Common' },
  { name: 'White Glowing Substance', type: 'Alchemy', source: 'Alchemist: 7x Dirt + 10x Mycelium + 20x Bonemeal + 1x Wood Acid', desc: 'Warm white glowing alchemical miracle.', rarity: 'Common' },
  { name: 'Ectoplasm', type: 'Alchemy', source: 'Ectoplasm Press: 10x Ectoplasm Fragment + 5x Torn Cloth + 1x Charcoal', desc: 'Strange material extracted from ectoplasm fragments.', rarity: 'Uncommon' },
  { name: 'Greater Ectoplasm', type: 'Alchemy', source: 'Ectoplasm Press: 10x Ectoplasm Shard + 10x Torn Cloth + 2x Charcoal', desc: 'Technically sterile liquid from crushed shards.', rarity: 'Uncommon' },
  { name: 'Excellent Ectoplasm', type: 'Alchemy', source: 'Ectoplasm Press: 10x Ectoplasm Crystal + 10x Torn Cloth + 1x Fabric + 10x Coal Powder', desc: 'Slimy broth from crushed ectoplasm crystals.', rarity: 'Uncommon' },
  { name: 'Aerated Banshee Gel', type: 'Alchemy', source: 'Defeat Banshee enemies', desc: 'Lightweight gel from Banshee creatures. Used in advanced alchemy.', rarity: 'Uncommon' },
  { name: 'Brittle Shroud Flakes', type: 'Shroud Material', source: 'Found in Shroud areas', desc: 'Flaky debris from Shroud growths.', rarity: 'Common' },
  { name: 'Brittle Shroud Petals', type: 'Shroud Material', source: 'Found in Shroud', desc: 'Fragile petals from Shroud growths.', rarity: 'Uncommon' },
  { name: 'Fresh Shroud Spore', type: 'Shroud Material', source: 'Gather in Shroud', desc: 'Freshly released Shroud spores.', rarity: 'Uncommon' },
  { name: 'Green Vitriol Dust', type: 'Alchemy', source: 'Alchemy processing', desc: 'Green crystalline powder for alchemical reactions.', rarity: 'Common' },
  { name: 'Mycelium (Overgrowth Material)', type: 'Shroud Material', source: 'Shroud overgrowth areas', desc: 'Dense mycelium from Shroud overgrowth.', rarity: 'Common' },
  { name: 'Shroom Mycelium', type: 'Shroud Material', source: 'Mine luminescent ground in Shroud', desc: 'Magical mushroom mycelium for alchemy and crafting.', rarity: 'Common' },
  { name: 'Shroud Adhesive', type: 'Shroud Material', source: 'Crafted from Shroud essence', desc: 'Sticky binding agent from Shroud essence.', rarity: 'Uncommon' },
  { name: 'Shroud Gelatin', type: 'Shroud Material', source: 'Process Shroud materials', desc: 'Gelatinous substance from Shroud processing.', rarity: 'Uncommon' },
  { name: 'Shroud Mushroom', type: 'Shroud Material', source: 'Shroud areas', desc: 'Mushroom that grows in Shroud environment.', rarity: 'Common' },
  { name: 'Shroud Nexus', type: 'Shroud Material', source: 'Hollow Halls endgame', desc: 'Concentrated Shroud energy node. Extremely powerful.', rarity: 'Epic' },
  { name: 'Shroud Particles', type: 'Shroud Material', source: 'Floating in dense Shroud', desc: 'Raw particles of Shroud energy.', rarity: 'Uncommon' },
  { name: 'Shroud Radiance', type: 'Shroud Material', source: 'Endgame Shroud areas', desc: 'Radiant Shroud energy. Extremely rare.', rarity: 'Epic' },
  { name: 'Shroud Relic', type: 'Shroud Material', source: 'Hollow Halls treasure', desc: 'Ancient relic imbued with Shroud power.', rarity: 'Uncommon' },
  { name: 'Shroud Slime', type: 'Shroud Material', source: 'Hollow Halls pools', desc: 'Slippery slime from Shroud pools.', rarity: 'Uncommon' },
  { name: 'Shroud Sludge', type: 'Shroud Material', source: 'Deep Shroud areas', desc: 'Thick sludge from concentrated Shroud.', rarity: 'Uncommon' },
  { name: 'Shroud Vapor', type: 'Shroud Material', source: 'Advanced Shroud zones', desc: 'Gaseous Shroud essence.', rarity: 'Rare' },
  { name: 'Active Mycelium', type: 'Shroud Material', source: 'Shroud overgrowth areas', desc: 'Active, living mycelium found in Shroud growths. Used in advanced crafting.', rarity: 'Common' },
  { name: 'Cursed Shroud Sack', type: 'Shroud Material', source: 'Advanced Shroud areas', desc: 'Cursed bag containing concentrated Shroud spores. Handle with extreme care.', rarity: 'Uncommon' },
  { name: 'Ectoplasm Cluster', type: 'Shroud Material', source: 'Hollow Halls endgame', desc: 'Large cluster of crystallized ectoplasm. Contains immense life energy.', rarity: 'Epic' },
  { name: 'Shroud Sand', type: 'Shroud Material', source: 'Shroud desert areas', desc: 'Sand corrupted by Shroud energy. Has unusual properties.', rarity: 'Common' },
];

const food_ingredients = [
  { name: 'Raw Lean Meat', type: 'Food', source: 'Kill Goat, Hophare, Rat', desc: 'Raw meat. Must be cooked over fire.', rarity: 'Common' },
  { name: 'Raw Game', type: 'Food', source: 'Kill Boar, Sabertooth Tiger', desc: 'Uncooked game meat.', rarity: 'Common' },
  { name: 'Raw Wolf Meat', type: 'Food', source: 'Kill Wolf', desc: 'Must be cooked for consumption.', rarity: 'Common' },
  { name: 'Raw Bird Meat', type: 'Food', source: 'Kill Draconian Vulture, Flightless Redtail', desc: 'Raw poultry. Cook before eating.', rarity: 'Common' },
  { name: 'Raw Dune Armadillo Meat', type: 'Food', source: 'Kill Dune Armadillo', desc: 'Tough desert meat.', rarity: 'Common' },
  { name: 'Grilled Wolf Meat', type: 'Food Buff', source: 'Cook at Fireplace: 1x Raw Wolf Meat', desc: 'Grilled ribs granting Constitution boost.', rarity: 'Uncommon' },
  { name: 'Flat Bread', type: 'Food Buff', source: 'Oven: 1x Salt + 1x Water + 1x Flour', desc: 'Simple meal granting Strength boost.', rarity: 'Common' },
  { name: 'Purple Berries', type: 'Food', source: 'Harvest in Springlands', desc: 'Tasty berries stimulating health regeneration.', rarity: 'Common' },
  { name: 'Strawberry', type: 'Food', source: 'Found in Revelwood or grown from seedlings', desc: 'Delicious aggregate fruit.', rarity: 'Common' },
  { name: 'Tomato', type: 'Food Buff', source: 'Found in Springlands', desc: 'Dexterity-enhancing red fruit.', rarity: 'Common' },
  { name: 'Corncob', type: 'Food Buff', source: 'Harvest in Kindlewastes or grow from seedlings', desc: 'Versatile crop. Strengthens consumer.', rarity: 'Common' },
  { name: 'Forest Beet', type: 'Food', source: 'Northwest of Revelwood Ancient Spire', desc: 'Edible forest root. Better as ingredient.', rarity: 'Common' },
  { name: 'Bell Pepper', type: 'Food Buff', source: 'West of Nomad Highlands Ancient Spire', desc: 'Grants Dexterity upon consumption.', rarity: 'Common' },
  { name: 'Eggs', type: 'Food Buff', source: 'Found in Nomad Highlands and Kindlewastes', desc: 'Protein source enhancing muscle mass.', rarity: 'Common' },
  { name: 'Milk', type: 'Food', source: 'Farm animals', desc: 'Fresh dairy.', rarity: 'Common' },
  { name: 'Honey', type: 'Food Buff', source: 'Beehive: 2x Water + 1x Sugar', desc: 'Recharges stamina.', rarity: 'Common' },
  { name: 'Wax', type: 'Material', source: 'Beehive: 3x Plant Fiber + 1x Water', desc: 'Smooth ingredient for illumination.', rarity: 'Common' },
  { name: 'Red Mushroom', type: 'Food Buff', source: 'Dropped from red mushroom creatures', desc: 'Stimulates brain. Increases Intelligence.', rarity: 'Common' },
  { name: 'Mint Mushroom Meat', type: 'Dye', source: 'Green mushrooms in Shrouded Nomad Highlands', desc: 'Dyes fabrics green. Do not eat!', rarity: 'Common' },
  { name: 'Sage Leaves', type: 'Food Buff', source: 'West of Nomad Highland Ancient Spire', desc: 'Bitter herb with enlightening abilities.', rarity: 'Common' },
  { name: 'Gentian', type: 'Food Buff', source: 'Northwest of Albaneve Summits', desc: 'Mountain flower granting Spirit.', rarity: 'Common' },
  { name: 'Aureolin Flower', type: 'Food Buff', source: 'Springlands terrain', desc: 'Yellow flower blessing the spirit.', rarity: 'Common' },
  { name: 'Chamomile', type: 'Herb', source: 'Found in woods and plains', desc: 'Wondrous flower for healing purposes.', rarity: 'Common' },
  { name: 'Chamomile Tea', type: 'Consumable', source: 'Farmer: 1x Chamomile + 1x Water', desc: 'Healthy beverage helping body recover.', rarity: 'Common' },
  { name: 'Rooibos', type: 'Herb', source: 'Nomad Highlands', desc: 'Interesting stimulating plant for tea.', rarity: 'Common' },
  { name: 'Saffron', type: 'Herb', source: 'Scattered across Kindlewastes desert', desc: 'Rare herbal plant from hot areas.', rarity: 'Common' },
  { name: 'Kindlewastes Flower', type: 'Herb', source: 'Grapple plants in Kindlewastes', desc: 'Crafting ingredient.', rarity: 'Common' },
  { name: 'Indigo Plant', type: 'Dye', source: 'Springlands and Revelwood', desc: 'Deep blue organic pigment plant.', rarity: 'Common' },
  { name: 'Aloe', type: 'Herb', source: 'Nomad Highlands desert plant', desc: 'Slimy liquid with medical applications.', rarity: 'Common' },
  { name: 'Water', type: 'Consumable', source: 'Wells or crafted Water Well', desc: 'Refreshing water granting Stamina.', rarity: 'Common' },
  { name: 'Spice', type: 'Food Ingredient', source: 'Laboratory: 1x Saffron + 1x Alchemical Base + 1x Chamomile + 1x Rooibos + 1x Kindlewastes Flower', desc: 'Makes food much more delicious!', rarity: 'Common' },
  { name: 'Fell Curse Cleansing Tonic', type: 'Consumable', source: 'Player Crafting: 2x Fresh Shroud Spore + 1x Water', desc: 'Cleanses Fell curse effects.', rarity: 'Common' },
  { name: 'Hemotoxin Antidote', type: 'Consumable', source: 'Player Crafting: 2x Spider Gland + 1x Moth', desc: 'Cures hemotoxin poison.', rarity: 'Common' },
  { name: 'Coconut', type: 'Food', source: 'Palm trees', desc: 'Tropical coconut with refreshing water.', rarity: 'Common' },
  { name: 'Coffee Beans', type: 'Food Ingredient', source: 'Veilwater Basin', desc: 'Raw coffee beans.', rarity: 'Common' },
  { name: 'Ground Coffee Beans', type: 'Food Ingredient', source: 'Grind Coffee Beans', desc: 'Ground coffee for brewing.', rarity: 'Common' },
  { name: 'Roasted Coffee Beans', type: 'Food Ingredient', source: 'Roast Coffee Beans', desc: 'Roasted coffee for maximum flavor.', rarity: 'Common' },
  { name: 'Raw Fatty Meat', type: 'Food', source: 'Fatty animals', desc: 'High-fat meat for cooking.', rarity: 'Common' },
  { name: 'Cooked Fae Deer Milk', type: 'Food', source: 'Crafted', desc: 'Processed Fae deer milk.', rarity: 'Common' },
  { name: 'Uncooked Fae Deer Milk', type: 'Food', source: 'Fae Deer', desc: 'Raw milk from magical Fae deer.', rarity: 'Common' },
  { name: 'Frizzy Goat Milk', type: 'Food', source: 'Goats', desc: 'Milk from frizzy-haired goats.', rarity: 'Common' },
  { name: 'Fish Bones', type: 'Material', source: 'Fish', desc: 'Bones from caught fish.', rarity: 'Common' },
  { name: 'Fish Teeth', type: 'Material', source: 'Predatory fish', desc: 'Sharp teeth from predatory fish.', rarity: 'Common' },
  { name: 'Piscine Ivory Dust', type: 'Material', source: 'Grind fish teeth', desc: 'Fine powder from fish ivory.', rarity: 'Common' },
  { name: 'Raw Meat and Corncob Skewer', type: 'Food', source: 'Player Crafting: Raw Meat + Corncob', desc: 'Uncooked meat and corncob on a stick.', rarity: 'Common' },
  { name: 'Raw Meat and Mushroom Skewer', type: 'Food', source: 'Player Crafting: Raw Meat + Mushroom', desc: 'Uncooked meat and mushroom on a stick.', rarity: 'Common' },
  { name: 'Raw Meat and Tomato Skewer', type: 'Food', source: 'Player Crafting: Raw Meat + Tomato', desc: 'Uncooked meat and tomato on a stick.', rarity: 'Common' },
  { name: 'Shortcrust Pastry Base', type: 'Food Ingredient', source: 'Crafted: Flour + Water + Fat', desc: 'Base for pies and pastries.', rarity: 'Common' },
];

const boss_legendary = [
  { name: 'Fell Dragon Youngling Head', type: 'Legendary Trophy', source: 'Defeat Fell Dragon Youngling', desc: 'Monstrous head with ice-cold shimmering scales.', rarity: 'Legendary' },
  { name: 'Fell Monstrosity Head', type: 'Legendary Trophy', source: 'Defeat Fell Monstrosity', desc: 'Despair and hatred grasping at everything.', rarity: 'Legendary' },
  { name: 'Fell Wispwyvern Head', type: 'Legendary Trophy', source: 'Defeat Fell Wispwyvern at Pikemead\'s Reach', desc: 'Once seen as a good omen before Shroud corruption.', rarity: 'Legendary' },
  { name: 'Hollow Cyclops Head', type: 'Legendary Trophy', source: 'Hollow Halls (Revelwood/Nomad Highlands)', desc: 'Single eye rolling in socket.', rarity: 'Legendary' },
  { name: 'Vukah Brawler Head', type: 'Legendary Trophy', source: 'Near large Vukah camps', desc: 'Dangerous tusks that don\'t dull after death.', rarity: 'Legendary' },
  { name: 'Fell Sicklescythe Head', type: 'Epic Trophy', source: 'Northwest of Kindlewaste Ancient Spire', desc: 'Faint glow behind its eyes.', rarity: 'Epic' },
  { name: 'Fell Thunderbrute Head', type: 'Rare Trophy', source: 'Ridgeback Mine', desc: 'Brain replaced by fungi and slush.', rarity: 'Rare' },
  { name: 'Scavenger Matron Helmet', type: 'Epic Trophy', source: 'Dropped from Scavenger Matron', desc: 'Less fearsome when headless. Acidic scent lingers.', rarity: 'Epic' },
  { name: 'Spark', type: 'Legendary', source: 'Flame Shrines', desc: 'Essence from the Flame! Feed to Flame Altar to strengthen.', rarity: 'Legendary' },
  { name: 'Fell Spitting Plant Head', type: 'Material', source: 'Defeat Fell Spitting Plant', desc: 'Source of Poison Sack and Shroud Sack.', rarity: 'Common' },
  { name: 'Poison Sack', type: 'Material', source: 'Spitting Plant drop', desc: 'One of the most dangerous materials. Don\'t touch directly!', rarity: 'Common' },
  { name: 'Drak Blood', type: 'Creature Drop', source: 'Defeat Drak creatures', desc: 'Blood from Drak beasts.', rarity: 'Common' },
  { name: 'Drak Claws', type: 'Creature Drop', source: 'Defeat Drak creatures', desc: 'Sharp claws from Drak beasts.', rarity: 'Common' },
  { name: 'Drak Scales', type: 'Creature Drop', source: 'Defeat Drak creatures', desc: 'Hardened scales from Drak beasts.', rarity: 'Common' },
  { name: 'Drak Teeth', type: 'Creature Drop', source: 'Defeat Drak creatures', desc: 'Powerful teeth from Drak beasts.', rarity: 'Common' },
  { name: 'Corrupted Boar Tusk', type: 'Creature Drop', source: 'Defeat Corrupted Boars', desc: 'Tusk from a Shroud-corrupted boar.', rarity: 'Common' },
  { name: 'Giant Critter Scales', type: 'Creature Drop', source: 'Defeat giant critters', desc: 'Oversized scales from giant creatures.', rarity: 'Common' },
  { name: 'Enshrouded Vulture Talon', type: 'Creature Drop', source: 'Defeat Enshrouded Vultures', desc: 'Sharp talon from corrupted vulture.', rarity: 'Common' },
  { name: 'Spider Gland', type: 'Creature Drop', source: 'Defeat spiders', desc: 'Gland from spider for antidote crafting.', rarity: 'Common' },
  { name: 'Frog', type: 'Creature', source: 'Wetlands', desc: 'Small amphibian for crafting.', rarity: 'Common' },
  { name: 'Grasshopper', type: 'Creature', source: 'Grassy areas', desc: 'Jumping insect for bait/crafting.', rarity: 'Common' },
  { name: 'Pillbug', type: 'Creature', source: 'Under rocks', desc: 'Small armored insect.', rarity: 'Common' },
  { name: 'Scarab', type: 'Creature', source: 'Deserts', desc: 'Desert beetle.', rarity: 'Common' },
  { name: 'Moth', type: 'Creature', source: 'Night areas', desc: 'Night-flying insect.', rarity: 'Common' },
  { name: 'Capybara Bristles', type: 'Material', source: 'Capybara', desc: 'Bristly fur from capybara.', rarity: 'Common' },
  { name: 'Fell Heart', type: 'Boss Drop', source: 'Defeat Fell creatures', desc: 'Heart of a powerful Fell being.', rarity: 'Rare' },
  { name: 'Bursting Fell Heart', type: 'Boss Drop', source: 'Defeat powerful Fell', desc: 'Overflowing with corrupted energy.', rarity: 'Rare' },
  { name: 'Monstrous Ribs', type: 'Boss Drop', source: 'Defeat Fell Monstrosity', desc: 'Massive ribs from the Fell Monstrosity.', rarity: 'Epic' },
  { name: 'Mist of a Fell Sicklescythe', type: 'Boss Drop', source: 'Fell Sicklescythe', desc: 'Corrupting mist from the Sicklescythe.', rarity: 'Rare' },
  { name: 'Hydrak\'Dal Head', type: 'Legendary Trophy', source: 'Defeat Hydrak\'Dal', desc: 'Head of the mighty Hydrak\'Dal.', rarity: 'Legendary' },
  { name: 'Fell Cyclops Head', type: 'Legendary Trophy', source: 'Defeat Fell Cyclops', desc: 'Single-eyed head of the Fell Cyclops.', rarity: 'Legendary' },
  { name: 'Enshrouded Cyclops Eye', type: 'Boss Drop', source: 'Enshrouded Cyclops', desc: 'Eye of the Enshrouded Cyclops.', rarity: 'Legendary' },
  { name: 'Corrosive Blood', type: 'Creature Drop', source: 'Defeat corrosive creatures', desc: 'Highly acidic blood from certain creatures.', rarity: 'Uncommon' },
  { name: 'Critter Carapace', type: 'Creature Drop', source: 'Defeat armored critters', desc: 'Hard shell from large critters.', rarity: 'Common' },
  { name: 'Critter Glands', type: 'Creature Drop', source: 'Defeat critters', desc: 'Glands extracted from critter enemies.', rarity: 'Common' },
  { name: 'Electric Nerve', type: 'Creature Drop', source: 'Electric creatures in Veilwater', desc: 'Nerve tissue from electrically-charged creatures.', rarity: 'Common' },
  { name: 'Feather', type: 'Creature Drop', source: 'Birds and winged creatures', desc: 'Lightweight feather for crafting and fletching.', rarity: 'Common' },
  { name: 'Fire Fly', type: 'Creature', source: 'Grassy areas in Springlands', desc: 'Bioluminescent insect. Crush for Glow Dust.', rarity: 'Common' },
  { name: 'Hydrak\'Dal Head', type: 'Legendary Trophy', source: 'Defeat Hydrak\'Dal boss', desc: 'Head of the serpentine Hydrak\'Dal.', rarity: 'Epic' },
  { name: 'Mae\'s Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Mae.', rarity: 'Collectible' },
  { name: 'Ony\'s Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Ony.', rarity: 'Collectible' },
  { name: 'Orpheus\' Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Orpheus.', rarity: 'Collectible' },
  { name: 'Polaris\' Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Polaris.', rarity: 'Collectible' },
  { name: 'The Dragons\' Map', type: 'Collectible', source: 'Combine all map pieces', desc: 'Complete map revealing dragon locations.', rarity: 'Legendary' },
  { name: 'Toxic Sack', type: 'Creature Drop', source: 'Toxic creatures in Shroud', desc: 'Sack containing toxic substance.', rarity: 'Common' },
  { name: 'Venom Stinger', type: 'Creature Drop', source: 'Venomous sea creatures', desc: 'Stinger from venomous aquatic creatures.', rarity: 'Common' },
  { name: 'Petriﬁed Shroud Stalker Shell', type: 'Material', source: 'Defeat Shroud Stalkers', desc: 'Hardened shell from a petrified Shroud Stalker.', rarity: 'Uncommon' },
  { name: 'Mae\'s Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Mae. Part of The Dragons\' Map.', rarity: 'Collectible' },
  { name: 'Ony\'s Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Ony. Part of The Dragons\' Map.', rarity: 'Collectible' },
  { name: 'Orpheus\' Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Orpheus. Part of The Dragons\' Map.', rarity: 'Collectible' },
  { name: 'Polaris\' Map Piece', type: 'Collectible', source: 'Quest reward', desc: 'Map fragment belonging to Polaris. Part of The Dragons\' Map.', rarity: 'Collectible' },
  { name: 'The Dragons\' Map', type: 'Collectible', source: 'Combine all 4 map pieces', desc: 'Complete map revealing secret dragon locations across Embervale.', rarity: 'Legendary' },
  { name: 'Water Pouch', type: 'Tool', source: 'Crafted', desc: 'Portable container for carrying water.', rarity: 'Common' },
  { name: 'Water Reptile Hide', type: 'Leather', source: 'Defeat aquatic reptiles', desc: 'Tough hide from water-dwelling reptiles.', rarity: 'Common' },
  { name: 'Water Reptile Leather', type: 'Leather', source: 'Tanning Station: Water Reptile Hide', desc: 'Processed leather from water reptile hide.', rarity: 'Common' },
  { name: 'Cyclops Head', type: 'Legendary Trophy', source: 'Defeat Cyclops boss', desc: 'Head of a mighty Cyclops. A fearsome trophy.', rarity: 'Legendary' },
  { name: 'Hydrak\'Dal Head', type: 'Epic Trophy', source: 'Defeat Hydrak\'Dal', desc: 'Head of the serpentine Hydrak\'Dal. A prized trophy.', rarity: 'Epic' },
  { name: 'Shroud Stalker Shell', type: 'Material', source: 'Defeat Shroud Stalkers', desc: 'Hardened shell from a Shroud Stalker.', rarity: 'Uncommon' },
];

const building_crafting = [
  { name: 'Dirt', type: 'Building', source: 'Dig ground anywhere', desc: 'Basic soil for building and farming.', rarity: 'Common' },
  { name: 'Sand', type: 'Building', source: 'Dig ground in Kindlewastes', desc: 'Glittering sand for glass and crafting.', rarity: 'Common' },
  { name: 'Lump of Clay', type: 'Building', source: 'North of Ancient Vault - Farmer', desc: 'Malleable material for construction.', rarity: 'Common' },
  { name: 'Farm Soil', type: 'Terrain', source: 'Farmer: 7x Dirt + 3x Bonemeal', desc: 'Healthy soil for faster plant growth.', rarity: 'Common' },
  { name: 'Fertilised Farm Soil', type: 'Terrain', source: 'Farmer: 10x Sand + 2x Fossilized Bone Dust + 3x Nitrate', desc: 'Greatly increases plant growing speed.', rarity: 'Common' },
  { name: 'Flower Soil', type: 'Terrain', source: 'Farmer: 7x Farm Soil + 3x Honey', desc: 'Perfect soil for beautiful flowers.', rarity: 'Common' },
  { name: 'Rubble', type: 'Building', source: 'Mine ruined buildings with pickaxe', desc: 'Dusty remains of building materials.', rarity: 'Common' },
  { name: 'Glass', type: 'Material', source: 'Smelter: 30x Sand + 5x Charcoal', desc: 'Transparent material for building and crafting.', rarity: 'Common' },
  { name: 'Glass Shards', type: 'Material', source: 'Mine in high-level regions (Kindlewastes)', desc: 'Sharp edges for weapon enhancement.', rarity: 'Common' },
  { name: 'Metal Scraps', type: 'Material', source: 'Chests, workbenches, destroy metal objects', desc: 'Remains of humanity\'s metal tools.', rarity: 'Common' },
  { name: 'Metal Sheets', type: 'Material', source: 'Forge: 2x Charcoal + 2x Metal Scraps', desc: 'Workable metal for processing.', rarity: 'Common' },
  { name: 'Nails', type: 'Material', source: 'Blacksmith: 1x Metal Scraps', desc: 'Sharp nails for tools and weapons.', rarity: 'Common' },
  { name: 'Bonemeal', type: 'Material', source: 'Grind: 1x Bones at Grinding Stones', desc: 'Useful for alchemical and magical purposes.', rarity: 'Common' },
  { name: 'Bones', type: 'Material', source: 'Kill Boar, Deer, Fell Boar, Goat, etc.', desc: 'Magical bones for alchemy.', rarity: 'Common' },
  { name: 'Reptile Hide', type: 'Leather', source: 'Dropped from Snapjaws', desc: 'Tough scaly reptile skin.', rarity: 'Common' },
  { name: 'Reptile Leather', type: 'Leather', source: 'Drying Rack: 1x Reptile Hide + 3x Salt', desc: 'Sturdy material for extravagant tailoring.', rarity: 'Common' },
  { name: 'Luminous Growth', type: 'Terrain', source: 'Cave south of Revelwood Ancient Spire', desc: 'Glowing moody light source from caves.', rarity: 'Common' },
  { name: 'Paper', type: 'Material', source: 'Laboratory: 1x Wood Logs + 1x Ammonia Gland', desc: 'Traditional tool for knowledge preservation.', rarity: 'Common' },
  { name: 'Old Books', type: 'Material', source: 'Grind: 1x Obsidian at Grinding Stones', desc: 'Ancient written knowledge.', rarity: 'Common' },
  { name: 'Lumberjack', type: 'Skill', source: 'Core Skill - 1pt', desc: 'Tools deal +10% damage against wood.', rarity: 'Common' },
  { name: 'Felling Axe Specialization', type: 'Skill', source: 'Core Skill - 3pt', desc: 'Unlocks Special Abilities of Felling Axes.', rarity: 'Common' },
  { name: 'Miner', type: 'Skill', source: 'Core Skill - 4pt', desc: '10% chance for additional resource when mining.', rarity: 'Common' },
  { name: 'Mason', type: 'Skill', source: 'Core Skill - 2pt', desc: 'Pickaxe +30% damage against stone.', rarity: 'Common' },
  { name: 'Quality Gear', type: 'Skill', source: 'Core Skill - 2pt', desc: 'Tools 20% chance to restore 1 durability on hit.', rarity: 'Common' },
  { name: 'Gold Coins', type: 'Currency', source: 'Trading, loot', desc: 'Currency for purchasing items from traders.', rarity: 'Common' },
  { name: 'Legendary Runes', type: 'Special', source: 'Endgame content', desc: 'Powerful runes for legendary crafting.', rarity: 'Legendary' },
  { name: 'Runes', type: 'Special', source: 'Various', desc: 'Magical runes for enchanting.', rarity: 'Rare' },
  { name: 'Archaic Essence', type: 'Special', source: 'Flame Shrines', desc: 'Ancient essence at different Flame levels (5, 13, 18, 25, 33, 40).', rarity: 'Common' },
  { name: 'Repair Kit', type: 'Tool', source: 'Crafted', desc: 'Repairs equipment durability.', rarity: 'Uncommon' },
  { name: 'Ice', type: 'Material', source: 'Albaneve Summits', desc: 'Frozen water from cold regions.', rarity: 'Common' },
  { name: 'Enshrouded Ice', type: 'Material', source: 'Shroud cold areas', desc: 'Ice infused with Shroud energy.', rarity: 'Common' },
  { name: 'Snow', type: 'Material', source: 'Albaneve Summits', desc: 'Fallen snow for crafting.', rarity: 'Common' },
  { name: 'Blackmire Dirt', type: 'Terrain', source: 'Swamp areas', desc: 'Dark soil from swamp regions.', rarity: 'Common' },
  { name: 'Pearl', type: 'Gem', source: 'Underwater', desc: 'Beautiful pearl from aquatic creatures.', rarity: 'Common' },
  { name: 'Mother-Of-Pearl', type: 'Gem', source: 'Shells', desc: 'Iridescent shell lining for crafting.', rarity: 'Common' },
  { name: 'Orange Fabric', type: 'Fabric', source: 'Hunter station', desc: 'Orange-dyed fabric.', rarity: 'Common' },
  { name: 'Aquamarine Dust', type: 'Material', source: 'Grind Aquamarine at Grinding Stones', desc: 'Powdered aquamarine gem for crafting.', rarity: 'Common' },
  { name: 'Nomad Highlands Dirt', type: 'Terrain', source: 'Nomad Highlands', desc: 'Soil from the Nomad Highlands region.', rarity: 'Common' },
  { name: 'Petriﬁed Shroud Stalker Shell', type: 'Material', source: 'Defeat Shroud Stalkers', desc: 'Hardened shell from a petrified Shroud Stalker.', rarity: 'Uncommon' },
  { name: 'Revelwood Dirt', type: 'Terrain', source: 'Revelwood region', desc: 'Soil from the Revelwood region.', rarity: 'Common' },
  { name: 'Salt', type: 'Material', source: 'Found in enshrouded valleys / evaporated seawater', desc: 'Essential mineral for preserving and cooking.', rarity: 'Common' },
  { name: 'Shroud Infused Farm Soil', type: 'Terrain', source: 'Crafted: Farm Soil + Shroud essence', desc: 'Farm soil enhanced with Shroud properties.', rarity: 'Common' },
  { name: 'Simple Fishing Bait', type: 'Tool', source: 'Player Crafting: Bug Dust + Plant Fiber', desc: 'Basic bait for fishing.', rarity: 'Common' },
  { name: 'Springlands Dirt', type: 'Terrain', source: 'Springlands region', desc: 'Soil from the Springlands region.', rarity: 'Common' },
  { name: 'Underwater Overgrowth', type: 'Plant', source: 'Underwater in Veilwater', desc: 'Aquatic plant overgrowth.', rarity: 'Common' },
  { name: 'Veilwater Basin Dirt', type: 'Terrain', source: 'Veilwater Basin region', desc: 'Soil from the Veilwater Basin.', rarity: 'Common' },
  { name: 'Veilwater Basin Sand', type: 'Terrain', source: 'Veilwater Basin shores', desc: 'Sand from Veilwater Basin beaches.', rarity: 'Common' },
  { name: 'Wet Boot', type: 'Junk', source: 'Fishing catch', desc: 'A soggy old boot. Why did you keep this?', rarity: 'Common' },
  { name: 'Fishing Bait', type: 'Tool', source: 'Crafted: Bug Dust + Plant Fiber', desc: 'Basic bait for catching fish. Essential for anglers.', rarity: 'Common' },
  { name: 'Common Fishing Bait', type: 'Tool', source: 'Crafted', desc: 'Standard bait for fishing in common waters.', rarity: 'Common' },
  { name: 'Uncommon Fishing Bait', type: 'Tool', source: 'Crafted', desc: 'Better bait for catching uncommon fish varieties.', rarity: 'Common' },
  { name: 'Rare Fishing Bait', type: 'Tool', source: 'Crafted', desc: 'Quality bait for catching rare fish species.', rarity: 'Common' },
  { name: 'Epic Fishing Bait', type: 'Tool', source: 'Crafted', desc: 'Premium bait for catching epic fish. Best results.', rarity: 'Common' },
];

export const itemsSubSections: SubSection[] = [
  {
    id: 'materials-overview',
    title: 'Materials Overview',
    icon: <Gem className="w-5 h-5" />,
    summary: 'Complete database of 162 crafting materials across 7 categories — where to find them and what they craft.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">292 total crafting materials</strong> across 
          <strong className="text-[var(--text-primary)]"> 6 source biomes</strong>. Our database covers 
          <strong className="text-[var(--text-gold)]"> 300+ materials</strong> you'll need for crafting weapons, armor, food, and buildings — sourced from 5 community wikis.
        </p>

        <InfoBox title="Material Rarity Tiers" type="info">
          <div className="grid grid-cols-5 gap-2 text-center">
            <div><span className="text-gray-400 font-bold">Common</span><br/><span className="text-[9px]">237 items</span></div>
            <div><span className="text-green-400 font-bold">Uncommon</span><br/><span className="text-[9px]">27 items</span></div>
            <div><span className="text-blue-400 font-bold">Rare</span><br/><span className="text-[9px]">5 items</span></div>
            <div><span className="text-purple-400 font-bold">Epic</span><br/><span className="text-[9px]">9 items</span></div>
            <div><span className="text-yellow-400 font-bold">Legendary</span><br/><span className="text-[9px]">9 items</span></div>
          </div>
        </InfoBox>

        <InfoBox title="Source Biomes" type="tip">
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>• <strong>Springlands</strong> — 25 materials (Starter area)</div>
            <div>• <strong>Revelwood</strong> — 26 materials (Lv 8-15)</div>
            <div>• <strong>Nomad Highlands</strong> — 28 materials (Lv 15-25)</div>
            <div>• <strong>Kindlewastes</strong> — 32 materials (Lv 20-30)</div>
            <div>• <strong>Albaneve Summits</strong> — 16 materials (Lv 25-35)</div>
            <div>• <strong>Veilwater Basin</strong> — 30 materials (Endgame)</div>
          </div>
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Material Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-1">Ores & Metals</h4>
            <p className="text-xs text-[var(--text-secondary)]">Copper → Bronze → Iron → Steel progression. Gems and fuels.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-500">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Wood & Plants</h4>
            <p className="text-xs text-[var(--text-secondary)]">All wood types, fibers, seeds, farming materials.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-1">Fabrics & Leather</h4>
            <p className="text-xs text-[var(--text-secondary)]">Flax → Linen → Fabric. Fur → Leather. Dyes.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-500">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Shroud & Alchemy</h4>
            <p className="text-xs text-[var(--text-secondary)]">Shroud materials, potions, explosives, ectoplasm.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-red-400">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Food & Ingredients</h4>
            <p className="text-xs text-[var(--text-secondary)]">Meats, vegetables, herbs, cooking ingredients.</p>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-yellow-500">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-1">Boss & Legendary</h4>
            <p className="text-xs text-[var(--text-secondary)]">Boss trophies, legendary drops, Spark essence.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ores-metals',
    title: 'Ores & Metals',
    icon: <Pickaxe className="w-5 h-5" />,
    summary: 'Complete ore and metal database — 32 items from Copper to Steel, plus gems and fuels.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Metal progression: <strong className="text-[var(--text-primary)]">Copper → Bronze → Iron → Steel</strong>. 
          Each tier requires the previous. Silver is for alchemical recipes. Gems for jewelry and magic.
        </p>
        <InfoBox title="Smelting Guide" type="info">
          <strong>Smelter:</strong> Copper Bar (20 Ore + 20 Charcoal) | Bronze Bar (7 Copper + 3 Tin + 10 Charcoal) | Iron Bar (10 Ore + 25 Charcoal)<br/>
          <strong>Blast Furnace:</strong> Steel Bar (20 Iron Ore + 50 Coal) | Silver Bar (20 Ore + 10 Coal)
        </InfoBox>
        <ItemList items={ores_metals} />
      </div>
    ),
  },
  {
    id: 'wood-fibers',
    title: 'Wood & Plant Fibers',
    icon: <TreePine className="w-5 h-5" />,
    summary: '17 wood types, fibers, and plant materials for building and crafting.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Multiple wood types from different biomes. <strong className="text-[var(--text-primary)]">Plant Fiber</strong> and 
          <strong className="text-[var(--text-primary)]"> Twigs</strong> are essential early game materials.
        </p>
        <ItemList items={wood_fibers} />
      </div>
    ),
  },
  {
    id: 'fabrics-leather',
    title: 'Fabrics & Leather',
    icon: <Shield className="w-5 h-5" />,
    summary: '19 fabric and leather items — from Flax to finished clothing materials.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Crafting chain: <strong className="text-[var(--text-primary)]">Flax → Linen → Fabric</strong>. 
          Leather chain: <strong className="text-[var(--text-primary)]">Fur Patch → Animal Fur → Dried Fur → Leather</strong>.
        </p>
        <InfoBox title="Dye Crafting" type="tip">
          Blue: Fabric + Indigo Plant | Green: Fabric + Mint Mushroom | Red: Fabric + Sulfur | 
          Violet: Fabric + Mauveine | Yellow: Fabric + Saffron
        </InfoBox>
        <ItemList items={fabrics_leather} />
      </div>
    ),
  },
  {
    id: 'shroud-alchemy',
    title: 'Shroud & Alchemy',
    icon: <FlaskConical className="w-5 h-5" />,
    summary: '26 Shroud materials, alchemical ingredients, potions, and explosives.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Shroud materials are found in the corrupted zones. Alchemy requires an <strong className="text-[var(--text-primary)]">Alchemy Station</strong> 
          and produces potions, explosives, and special materials.
        </p>
        <InfoBox title="Alchemy Station Recipes" type="info">
          <strong>Goo:</strong> Dirt + Shroud Liquid + Bug Dust | <strong>Alchemical Base:</strong> Shroud Liquid + Mycelium + Water + Shroud Spores<br/>
          <strong>Black Powder:</strong> 7 Nitrate + Sulfur + 2 Coal Powder | <strong>Enshrouded Oil:</strong> 5 Spores + 5 Coal Powder + 5 Liquid + Sulfur
        </InfoBox>
        <ItemList items={shroud_alchemy} />
      </div>
    ),
  },
  {
    id: 'food-ingredients',
    title: 'Food & Ingredients',
    icon: <Apple className="w-5 h-5" />,
    summary: '33 food items, ingredients, herbs, and cooking materials.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          You can have <strong className="text-[var(--text-gold)]">3 food buffs active simultaneously</strong>. 
          Combine different foods for maximum benefit. Raw meat must be cooked at a Fireplace.
        </p>
        <InfoBox title="Cooking Tips" type="tip">
          Cooked meat provides health regen. Vegetables grant stat boosts. 
          Combine Meat + Vegetable + Spice for best results. Keep Honey for stamina regen.
        </InfoBox>
        <ItemList items={food_ingredients} />
      </div>
    ),
  },
  {
    id: 'boss-legendary',
    title: 'Boss & Legendary Drops',
    icon: <Skull className="w-5 h-5" />,
    summary: '11 boss trophies, legendary drops, and special materials.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Boss heads are <strong className="text-[var(--text-primary)]">trophies</strong> that can be displayed. 
          <strong className="text-[var(--text-gold)]"> Spark</strong> from Flame Shrines upgrades your Flame Altar.
        </p>
        <ItemList items={boss_legendary} />
      </div>
    ),
  },
  {
    id: 'building-crafting',
    title: 'Building & Crafting',
    icon: <Hammer className="w-5 h-5" />,
    summary: '24 building materials, crafting station components, and utility items.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Building materials range from basic <strong className="text-[var(--text-primary)]">Dirt</strong> to processed 
          <strong className="text-[var(--text-primary)]"> Glass</strong> and <strong className="text-[var(--text-primary)]">Fired Brick</strong>.
        </p>
        <InfoBox title="Crafting Stations Required" type="info">
          <strong>Smelter:</strong> Ores → Metal Bars | <strong>Charcoal Kiln:</strong> Wood → Charcoal/Tar/Acid<br/>
          <strong>Loom:</strong> Linen → Fabric | <strong>Tanning Station:</strong> Dried Fur → Leather<br/>
          <strong>Alchemy Station:</strong> Potions/Alchemy | <strong>Laboratory:</strong> Explosives/Dyes
        </InfoBox>
        <ItemList items={building_crafting} />
      </div>
    ),
  },
];
