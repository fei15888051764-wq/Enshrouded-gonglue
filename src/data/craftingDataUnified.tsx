export interface CraftingEntry {
  name: string;
  category: string;
  type: string;
  materials: string;
  source: string;
  desc: string;
  rarity: string;
}

export const craftingCategories = [
  'NPC Artisans',
  'Crafting Stations',
  'Weapon Recipes',
  'Armor Recipes',
  'Potion Recipes',
  'Food Recipes',
  'Material Processing',
] as const;

export const categoryIcons: Record<string, string> = {
  'NPC Artisans': 'Users',
  'Crafting Stations': 'Hammer',
  'Weapon Recipes': 'Sword',
  'Armor Recipes': 'Shield',
  'Potion Recipes': 'Beaker',
  'Food Recipes': 'Apple',
  'Material Processing': 'TreePine',
};

export const allCraftingItems: CraftingEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // NPC ARTISANS (9 total)
  // ═══════════════════════════════════════════════════════════
  { name: 'Blacksmith', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Springlands — Northeast Ancient Vault', desc: 'The MOST IMPORTANT NPC. Unlocks Grappling Hook, Glider, Forge, Smelter, and all metal crafting. Rescue immediately after starting.', rarity: 'Essential' },
  { name: 'Alchemist', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Springlands — Southeast Ancient Vault', desc: 'Essential for survival. Unlocks Health Potions, Mana Potions, offensive spells, explosives, and the Laboratory.', rarity: 'Essential' },
  { name: 'Hunter', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Springlands — Low Meadows Ancient Vault', desc: 'Unlocks ranged combat, leather armor, bow crafting, tanning, and fabric production. Essential for Ranger builds.', rarity: 'Essential' },
  { name: 'Carpenter', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Nomad Highlands — Ancient Vault', desc: 'Transforms base building. Unlocks Table Saw, Kiln, furniture, storage, Glider upgrades, and Water Well.', rarity: 'High' },
  { name: 'Farmer', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Springlands — Central Ancient Vault', desc: 'Unlocks sustainable food production, farming plots, cooking stations, and advanced food buffs.', rarity: 'High' },
  { name: 'Collector', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Ancient Vault', source: 'Revelwood — Ancient Vault', desc: 'Essential for Hollow Halls dungeons. Crafts Bone Keys required to enter endgame dungeons for legendary gear.', rarity: 'High' },
  { name: 'Barber', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Settlement', source: 'Revelwood — Settlement', desc: 'Purely cosmetic. Change hairstyle, facial hair, and character appearance. Low priority.', rarity: 'Low' },
  { name: 'Bard', category: 'NPC Artisans', type: 'Survivor', materials: 'Rescue from Settlement', source: 'Revelwood — Settlement', desc: 'Crafts musical instruments for base decoration and roleplay. Purely for fun.', rarity: 'Low' },
  { name: 'Lunar New Year Trader', category: 'NPC Artisans', type: 'Survivor', materials: 'Event Questline', source: 'Event-only Location', desc: 'Seasonal NPC during Lunar New Year event. Offers unique limited-time recipes and festival decorations.', rarity: 'Event' },

  // ═══════════════════════════════════════════════════════════
  // CRAFTING STATIONS (29 total)
  // ═══════════════════════════════════════════════════════════
  // Blacksmith Stations (4)
  { name: 'Charcoal Kiln', category: 'Crafting Stations', type: 'Blacksmith Station', materials: 'Stone x15 + Wood Log x8', source: 'Built at Workbench', desc: 'Produces Charcoal from wood. Also makes Wood Acid and Tar as byproducts. Essential fuel production.', rarity: 'Common' },
  { name: 'Smelter', category: 'Crafting Stations', type: 'Blacksmith Station', materials: 'Stone x20 + Wood Log x10', source: 'Built at Workbench', desc: 'Converts ore into metal bars. Crafts Iron, Copper, Bronze, Tin Bars and Glass.', rarity: 'Common' },
  { name: 'Forge', category: 'Crafting Stations', type: 'Blacksmith Station', materials: 'Iron Bar x5 + Stone x30', source: 'Blacksmith NPC', desc: 'Advanced metal crafting. Weapons, armor, metal tools, shields, and metal sheets.', rarity: 'Common' },
  { name: 'Blast Furnace', category: 'Crafting Stations', type: 'Blacksmith Station', materials: 'Iron Bar x10 + Stone x40 + Coal x20', source: 'Blacksmith NPC', desc: 'High-heat furnace for Steel Bars and Silver Bars. Required for endgame metal crafting.', rarity: 'Uncommon' },
  // Alchemist Stations (5)
  { name: 'Grinding Stones', category: 'Crafting Stations', type: 'Alchemist Station', materials: 'Stone x10 + Wood Log x5', source: 'Alchemist NPC', desc: 'Grinds materials into powder. Bonemeal, Flour, Fossilized Bone Dust, Coal Powder, Glow Dust, Bug Dust.', rarity: 'Common' },
  { name: 'Mortar', category: 'Crafting Stations', type: 'Alchemist Station', materials: '5 Sand + 10 Lump of Clay + 3 Sulfur + 2 Nitrate + 5 Charcoal', source: 'Alchemist NPC', desc: 'Grinds materials into fine powder for advanced alchemy. Required for Laboratory construction.', rarity: 'Common' },
  { name: 'Alchemy Station', category: 'Crafting Stations', type: 'Alchemist Station', materials: 'Wood Log x10 + Shroud Spore x5', source: 'Alchemist NPC', desc: 'Brews potions and magical components. Health/Mana potions, Alchemical Base, Antiseptic.', rarity: 'Common' },
  { name: 'Laboratory', category: 'Crafting Stations', type: 'Alchemist Station', materials: 'Iron Bar x4 + Wood Log x10 + Glass x4', source: 'Alchemist NPC', desc: 'Advanced alchemical crafting. Explosives, Nitrate, Black Powder, Enshrouded Oil, Spice, Paper, Mauveine.', rarity: 'Uncommon' },
  { name: 'Scientific Instruments', category: 'Crafting Stations', type: 'Alchemist Station', materials: '10 Glass + 10 Bronze Bars + 5 Iron Bars + 20 Charcoal', source: 'Alchemist NPC', desc: 'Advanced alchemical equipment for complex recipes. Required for Laboratory.', rarity: 'Uncommon' },
  // Carpenter Stations (3)
  { name: 'Kiln', category: 'Crafting Stations', type: 'Carpenter Station', materials: 'Stone x20 + Wood Log x10', source: 'Carpenter NPC', desc: 'Fires clay into bricks. Produces Fired Brick for construction.', rarity: 'Common' },
  { name: 'Table Saw', category: 'Crafting Stations', type: 'Carpenter Station', materials: 'Iron Bar x3 + Wood Log x15', source: 'Carpenter NPC', desc: 'Precision woodworking. Converts Wood Logs into Wood Planks for furniture and building.', rarity: 'Common' },
  { name: 'Spinning Wheel', category: 'Crafting Stations', type: 'Carpenter Station', materials: 'Wood Log x8 + Iron Bar x2', source: 'Carpenter NPC', desc: 'Upgraded thread production. Makes fine Linen, String, and Wool for textiles.', rarity: 'Common' },
  // Hunter Stations (6)
  { name: 'Drying Rack', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x8 + String x4', source: 'Hunter NPC', desc: 'Preserves food and cures hides. Dried Fur, Dried Purple Berry, Dried Meat.', rarity: 'Common' },
  { name: 'Hand Spindle', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x5 + Stone x2', source: 'Hunter NPC', desc: 'Basic textile processing. Converts Flax into Linen thread.', rarity: 'Common' },
  { name: 'Tanning Station', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x8 + Iron Bar x2', source: 'Hunter NPC', desc: 'Converts dried hides into Leather. Also makes Reptile Leather.', rarity: 'Common' },
  { name: 'Loom', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x10 + String x6', source: 'Hunter NPC', desc: 'Weaves thread into Fabric. Essential for clothing and armor crafting.', rarity: 'Common' },
  { name: 'Coloring Station', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x5 + Stone x3', source: 'Hunter NPC', desc: 'Dyes fabrics different colors. Red, Blue, Green, Yellow, Violet Fabric.', rarity: 'Common' },
  { name: 'Spinning Machine', category: 'Crafting Stations', type: 'Hunter Station', materials: 'Wood Log x10 + Iron Bar x4 + String x4', source: 'Hunter NPC', desc: 'Automated thread and yarn production. Faster than Spinning Wheel.', rarity: 'Uncommon' },
  // Farmer Stations (9)
  { name: 'Seedbed', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Wood Log x5 + Soil x10', source: 'Farmer NPC', desc: 'Grows crops from seeds. Wheat, berries, vegetables, and rice (Veilwater).', rarity: 'Common' },
  { name: 'Cooking Station', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Flintstone x2 + Kettle x1 + Stone x4 + Metal Scraps x2', source: 'Farmer NPC', desc: 'Automated food preparation. Cooks meat, stews, soups, and buff foods.', rarity: 'Common' },
  { name: 'Oven', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Stone x15 + Iron Bar x3 + Wood Log x5', source: 'Farmer NPC', desc: 'Baking and advanced cooking. Bread, pastries, roasted foods.', rarity: 'Common' },
  { name: 'Beehive', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Wood Log x8 + Plant Fiber x10', source: 'Farmer NPC', desc: 'Produces Honey and Wax over time. Essential for cooking and crafting.', rarity: 'Common' },
  { name: 'Seafood Grill', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Stone x10 + Iron Bar x2 + Wood Log x5', source: 'Farmer NPC', desc: 'Specialized station for cooking fish and seafood dishes.', rarity: 'Common' },
  { name: 'Coffee Drum Roaster', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Iron Bar x3 + Stone x5 + Wood Log x3', source: 'Farmer NPC', desc: 'Roasts raw Coffee Beans into Roasted Coffee Beans.', rarity: 'Common' },
  { name: 'Coffee Brewery', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Iron Bar x2 + Glass x2 + Wood Log x3', source: 'Farmer NPC', desc: 'Brews coffee drinks from roasted beans. Provides stamina buffs.', rarity: 'Common' },
  { name: 'Butter Churn', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Wood Log x6 + Iron Bar x1', source: 'Farmer NPC', desc: 'Converts milk into butter. Used in advanced cooking recipes.', rarity: 'Common' },
  { name: 'Kitchen', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Stone x20 + Iron Bar x5 + Wood Log x10', source: 'Farmer NPC', desc: 'Advanced cooking station for complex recipes and feast platters.', rarity: 'Uncommon' },
  // Collector Station (1)
  { name: 'Ectoplasm Press', category: 'Crafting Stations', type: 'Collector Station', materials: 'Iron Bar x5 + Wood Log x10', source: 'Collector NPC', desc: 'Extracts Ectoplasm from crystals found in Hollow Halls. Essential for endgame.', rarity: 'Uncommon' },

  { name: 'Athanor', category: 'Crafting Stations', type: 'Alchemist Station', materials: '10 Glass + 10 Bronze Bars + 5 Lump of Clay', source: 'Alchemist NPC', desc: 'Specialized furnace for alchemical reactions. Required for Laboratory and advanced potion crafting.', rarity: 'Uncommon' },
  { name: 'Mill', category: 'Crafting Stations', type: 'Alchemist Station', materials: 'Wood Log x15 + Iron Bar x4 + Stone x10', source: 'Alchemist NPC', desc: 'Grinds grain into flour. Also processes herbs and seeds for cooking and alchemy.', rarity: 'Common' },
  { name: 'Sawblade', category: 'Crafting Stations', type: 'Blacksmith Station', materials: 'Iron Bar x3 + Steel Bar x1', source: 'Blacksmith NPC', desc: 'Circular sawblade for advanced woodworking. Used with Table Saw for precision cuts.', rarity: 'Uncommon' },
  { name: 'Fireplace', category: 'Crafting Stations', type: 'Farmer Station', materials: 'Stone x20 + Iron Bar x2 + Wood Log x5', source: 'Farmer NPC', desc: 'Provides warmth and comfort. Also used for basic cooking and producing Tar.', rarity: 'Common' },
  { name: 'Water Well', category: 'Crafting Stations', type: 'Carpenter Station', materials: '20 Linen + 100 Stone + 1 Wooden Bucket', source: 'Carpenter NPC', desc: 'Provides unlimited water source for crafting and drinking. Essential for any base.', rarity: 'Common' },
  { name: 'Improved Water Well', category: 'Crafting Stations', type: 'Carpenter Station', materials: '20 Linen + 100 Sandstone + 1 Wooden Bucket + 2 Iron Bars', source: 'Carpenter NPC', desc: 'Upgraded well with faster water production and cleaner output. Produces Purified Water.', rarity: 'Uncommon' },
  { name: 'Woodworking Bench', category: 'Crafting Stations', type: 'Carpenter Station', materials: 'Wood Log x20 + Iron Bar x2 + String x4', source: 'Carpenter NPC', desc: 'Advanced woodworking station. Crafts furniture, doors, windows, and decorative items.', rarity: 'Common' },
  { name: 'Stone Cutter', category: 'Crafting Stations', type: 'Carpenter Station', materials: 'Stone x30 + Iron Bar x4 + Wood Log x10', source: 'Carpenter NPC', desc: 'Cuts and shapes stone blocks. Required for advanced building blocks and structures.', rarity: 'Uncommon' },

  // ═══════════════════════════════════════════════════════════
  // WEAPON RECIPES
  // ═══════════════════════════════════════════════════════════
  // One-Handed Weapons
  { name: 'Iron Sword', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Iron Bar x3 + Leather x1', source: 'Forge (Blacksmith)', desc: 'Balanced one-handed weapon. Good damage and speed for early-mid game.', rarity: 'Rare' },
  { name: 'Iron Axe', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Iron Bar x3 + Wood Log x1', source: 'Forge (Blacksmith)', desc: 'One-handed axe. Slower than sword but higher damage per hit.', rarity: 'Rare' },
  { name: 'Iron Mace', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Iron Bar x4 + Wood Log x1', source: 'Forge (Blacksmith)', desc: 'Heavy one-handed weapon. High damage, good armor penetration.', rarity: 'Rare' },
  { name: 'Steel Longsword', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Steel Bar x3 + Leather x2', source: 'Forge (Blacksmith)', desc: 'Superior one-handed sword. High damage and excellent scaling.', rarity: 'Epic' },
  { name: 'Steel Battleaxe', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Steel Bar x3 + Hardwood x1', source: 'Forge (Blacksmith)', desc: 'Powerful one-handed axe. Devastating damage with good speed.', rarity: 'Epic' },
  { name: 'Frostbite Dagger', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Iron Bar x2 + Ice Crystal x1 + Leather x1', source: 'Forge (Blacksmith)', desc: 'Fast dagger with ice damage. Applies frost slow effect to enemies.', rarity: 'Epic' },
  { name: 'Flamebrand Sword', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Steel Bar x3 + Fire Gem x1 + Leather x2', source: 'Forge (Blacksmith)', desc: 'Legendary fire sword. Deals massive fire damage and ignites enemies.', rarity: 'Legendary' },
  { name: 'Shadowstrike Dagger', category: 'Weapon Recipes', type: 'One-Handed', materials: 'Steel Bar x2 + Shroud Core x1 + Leather x2', source: 'Forge (Blacksmith)', desc: 'Legendary shadow dagger. Critical hits deal massive bonus damage.', rarity: 'Legendary' },
  // Two-Handed Weapons
  { name: 'Iron Greatsword', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Iron Bar x5 + Leather x2', source: 'Forge (Blacksmith)', desc: 'Large two-handed sword. Wide swings hit multiple enemies.', rarity: 'Rare' },
  { name: 'Iron Greataxe', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Iron Bar x5 + Wood Log x2', source: 'Forge (Blacksmith)', desc: 'Massive two-handed axe. Slow but devastating damage.', rarity: 'Rare' },
  { name: 'Iron Warhammer', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Iron Bar x6 + Wood Log x1', source: 'Forge (Blacksmith)', desc: 'Heavy two-handed hammer. Highest armor penetration.', rarity: 'Rare' },
  { name: 'Steel Greatsword', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Steel Bar x5 + Leather x3', source: 'Forge (Blacksmith)', desc: 'Elite two-handed sword. Excellent reach and damage.', rarity: 'Epic' },
  { name: 'Earthsplitter Hammer', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Steel Bar x6 + Fossilized Bone x2 + Hardwood x2', source: 'Forge (Blacksmith)', desc: 'Legendary hammer. Ground slam AoE attack. Massive damage.', rarity: 'Legendary' },
  { name: 'Stormcaller Greatsword', category: 'Weapon Recipes', type: 'Two-Handed', materials: 'Steel Bar x5 + Lightning Gem x1 + Leather x3', source: 'Forge (Blacksmith)', desc: 'Legendary greatsword. Chain lightning on hit. Devastating.', rarity: 'Legendary' },
  // Bows
  { name: 'Shortbow', category: 'Weapon Recipes', type: 'Bow', materials: 'Wood Log x3 + String x2', source: 'Hunter NPC', desc: 'Basic bow for ranged combat. Low damage but easy to craft early.', rarity: 'Common' },
  { name: 'Longbow', category: 'Weapon Recipes', type: 'Bow', materials: 'Hardwood x4 + Sinew x2 + Iron Bar x1', source: 'Hunter NPC', desc: 'Improved bow with better range and damage. Good mid-game option.', rarity: 'Rare' },
  { name: 'Recurve Bow', category: 'Weapon Recipes', type: 'Bow', materials: 'Hardwood x5 + Sinew x3 + Steel Bar x1', source: 'Hunter NPC', desc: 'Advanced bow with excellent damage and firing speed.', rarity: 'Epic' },
  { name: 'Dragonbone Bow', category: 'Weapon Recipes', type: 'Bow', materials: 'Hardwood x6 + Dragon Bone x2 + Steel Bar x2 + Sinew x3', source: 'Hunter NPC', desc: 'Legendary bow. Highest ranged damage. Fire enchanted arrows.', rarity: 'Legendary' },
  // Staffs & Wands
  { name: 'Apprentice Wand', category: 'Weapon Recipes', type: 'Wand', materials: 'Wood Log x1 + Resin x1', source: 'Alchemist NPC', desc: 'Basic magic weapon. Low spell power but essential for mages.', rarity: 'Common' },
  { name: 'Fire Wand', category: 'Weapon Recipes', type: 'Wand', materials: 'Hardwood x2 + Fire Gem x1 + Resin x1', source: 'Alchemist NPC', desc: 'Fire magic wand. Casts fireball spells. Good against ice enemies.', rarity: 'Rare' },
  { name: 'Ice Wand', category: 'Weapon Recipes', type: 'Wand', materials: 'Hardwood x2 + Ice Crystal x1 + Resin x1', source: 'Alchemist NPC', desc: 'Ice magic wand. Freezes enemies. Good against fire enemies.', rarity: 'Rare' },
  { name: 'Lightning Wand', category: 'Weapon Recipes', type: 'Wand', materials: 'Hardwood x2 + Lightning Gem x1 + Resin x1', source: 'Alchemist NPC', desc: 'Lightning magic wand. Chain lightning attacks. High DPS.', rarity: 'Epic' },
  { name: 'Archmage Staff', category: 'Weapon Recipes', type: 'Staff', materials: 'Hardwood x4 + Shroud Core x1 + Resin x2 + Gem x1', source: 'Alchemist NPC', desc: 'Legendary staff. Massive spell power. Ultimate mage weapon.', rarity: 'Legendary' },
  // Shields
  { name: 'Wooden Shield', category: 'Weapon Recipes', type: 'Shield', materials: 'Wood Log x3 + Metal Scraps x1', source: 'Forge (Blacksmith)', desc: 'Basic shield. Blocks frontal attacks. Essential for melee builds.', rarity: 'Common' },
  { name: 'Iron Tower Shield', category: 'Weapon Recipes', type: 'Shield', materials: 'Iron Bar x6 + Wood Log x2', source: 'Forge (Blacksmith)', desc: 'Heavy shield with high block value. Reduces movement speed.', rarity: 'Rare' },
  { name: 'Steel Bulwark Shield', category: 'Weapon Recipes', type: 'Shield', materials: 'Steel Bar x6 + Hardwood x2 + Leather x2', source: 'Forge (Blacksmith)', desc: 'Elite shield. Excellent block with damage reduction bonus.', rarity: 'Epic' },

  // ═══════════════════════════════════════════════════════════
  // PLAYER CRAFTING (Essential early game recipes)
  // ═══════════════════════════════════════════════════════════
  { name: 'Flame Altar', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Stone x5', source: 'Inventory Crafting', desc: 'The heart of your base. Used for summoning NPCs and expanding base radius. Craft immediately upon starting.', rarity: 'Essential' },
  { name: 'Workbench', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'String x3 + Wood Log x8', source: 'Inventory Crafting', desc: 'First crafting station. Builds other stations, repairs equipment, and unlocks building blocks.', rarity: 'Essential' },
  { name: 'Construction Hammer', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Stone x1', source: 'Inventory Crafting', desc: 'Tool for placing building blocks and rotating structures. Always keep one equipped when building.', rarity: 'Essential' },
  { name: 'Summoning Staff', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Wood Log x1', source: 'Inventory Crafting', desc: 'Used to summon rescued NPCs to your base. Must be placed near a Flame Altar.', rarity: 'Essential' },
  { name: 'Axe', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Twigs x4 + Stone x1 + String x1', source: 'Inventory Crafting', desc: 'Basic axe for chopping trees. Upgrade to felling axe later for faster harvesting.', rarity: 'Common' },
  { name: 'Pickaxe', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Twigs x4 + Stone x1 + String x1', source: 'Inventory Crafting', desc: 'Basic pickaxe for mining ore and stone. Upgrade for better mining speed.', rarity: 'Common' },
  { name: 'Campfire', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Wood Log x2', source: 'Inventory Crafting', desc: 'Basic light source and warmth provider. Also used for simple cooking.', rarity: 'Common' },
  { name: 'Torch', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Twigs x1 + Plant Fiber x1', source: 'Inventory Crafting', desc: 'Portable light source. Essential for cave exploration and nighttime activities.', rarity: 'Common' },
  { name: 'Bandage', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Torn Cloth x1 + String x1', source: 'Inventory Crafting', desc: 'Basic healing item. Restores small amount of HP and stops bleeding.', rarity: 'Common' },
  { name: 'Lockpick', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Metal Scraps x2', source: 'Inventory Crafting', desc: 'Opens locked chests and doors. Carry a stack when exploring ruins.', rarity: 'Common' },
  { name: 'String', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Plant Fiber x3', source: 'Inventory Crafting', desc: 'Basic crafting material. Used for bows, armor, and station construction.', rarity: 'Common' },
  { name: 'Wooden Arrow x10', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Twigs x2', source: 'Inventory Crafting', desc: 'Basic arrows for the Bow. Low damage but easy to mass produce.', rarity: 'Common' },
  { name: 'Glider', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Wood Log x5 + Fabric x2 + String x4', source: 'Workbench (Blacksmith)', desc: 'Allows gliding from heights. TRANSFORMS exploration. Rescue Blacksmith to unlock recipe.', rarity: 'Essential' },
  { name: 'Grappling Hook', category: 'Weapon Recipes', type: 'Player Crafting', materials: 'Iron Bar x3 + Wood Log x2 + String x4', source: 'Workbench (Blacksmith)', desc: 'Pulls you to anchor points. TRANSFORMS traversal. Rescue Blacksmith to unlock.', rarity: 'Essential' },
  { name: 'Improved Grappling Hook', category: 'Weapon Recipes', type: 'Tool Upgrade', materials: 'Steel Bar x3 + Hardwood x2 + Leather x2', source: 'Carpenter NPC', desc: 'Upgraded grappling hook with longer range and faster pull speed.', rarity: 'Rare' },
  { name: 'Improved Glider', category: 'Weapon Recipes', type: 'Tool Upgrade', materials: 'Steel Bar x2 + Fabric x4 + Hardwood x2', source: 'Carpenter NPC', desc: 'Upgraded glider with better lift and longer glide distance.', rarity: 'Rare' },

  // Arrow Recipes
  { name: 'Iron Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Iron Bar x1 + Wood Log x1 + Feather x2', source: 'Hunter NPC', desc: 'Mid-tier arrows with improved damage. Good balance of cost and effectiveness.', rarity: 'Uncommon' },
  { name: 'Steel Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Steel Bar x1 + Hardwood x1 + Feather x2', source: 'Hunter NPC', desc: 'High-tier arrows with excellent damage. Best standard arrows for endgame.', rarity: 'Rare' },
  { name: 'Fire Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Wooden Arrow x10 + Fire Gem x1 + Resin x1', source: 'Hunter NPC', desc: 'Arrows that set enemies on fire. Effective against ice-type enemies.', rarity: 'Rare' },
  { name: 'Ice Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Wooden Arrow x10 + Ice Crystal x1 + Resin x1', source: 'Hunter NPC', desc: 'Arrows that freeze enemies. Slows movement and attack speed.', rarity: 'Rare' },
  { name: 'Explosive Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Steel Arrow x10 + Black Powder x2 + Metal Casing x1', source: 'Hunter NPC', desc: 'Arrows that explode on impact. AoE damage against groups.', rarity: 'Epic' },
  { name: 'Ectoplasm Arrow x10', category: 'Weapon Recipes', type: 'Arrow', materials: 'Steel Arrow x10 + Ectoplasm x1 + Shroud Core x1', source: 'Collector NPC', desc: 'Endgame arrows with Shroud damage. Devastating against all enemy types.', rarity: 'Legendary' },

  // ═══════════════════════════════════════════════════════════
  // ARMOR RECIPES
  // ═══════════════════════════════════════════════════════════
  // Heavy Armor (Blacksmith)
  { name: 'Rising Fighter Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Torn Cloth x8 + Metal Scraps x4', source: 'Forge (Blacksmith)', desc: 'Starter heavy armor. Basic protection for new players.', rarity: 'Common' },
  { name: 'Fur Armor Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Animal Fur x10 + Leather x4 + String x4', source: 'Forge (Blacksmith)', desc: 'Early heavy armor. Good cold resistance. Made from animal pelts.', rarity: 'Common' },
  { name: 'Iron Plate Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Iron Bar x12 + Leather x6', source: 'Forge (Blacksmith)', desc: 'Mid-game heavy armor. Solid physical defense.', rarity: 'Rare' },
  { name: 'Guardian Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Iron Bar x15 + Leather x8 + Steel Bar x3', source: 'Forge (Blacksmith)', desc: 'Advanced heavy armor. High defense and good set bonuses.', rarity: 'Rare' },
  { name: 'Steel Bulwark Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Steel Bar x15 + Leather x8 + Hardwood x4', source: 'Forge (Blacksmith)', desc: 'Endgame heavy armor. Maximum physical protection.', rarity: 'Epic' },
  { name: 'Warden Set', category: 'Armor Recipes', type: 'Heavy Armor', materials: 'Steel Bar x18 + Leather x10 + Iron Bar x5', source: 'Forge (Blacksmith)', desc: 'Elite heavy armor. Best-in-class defense with stamina bonus.', rarity: 'Epic' },
  // Medium Armor (Hunter)
  { name: 'Scout Set', category: 'Armor Recipes', type: 'Medium Armor', materials: 'Leather x6 + Cloth x4 + String x4', source: 'Hunter NPC', desc: 'Light medium armor. Good balance of protection and mobility.', rarity: 'Common' },
  { name: 'Ranger Set', category: 'Armor Recipes', type: 'Medium Armor', materials: 'Leather x8 + Cloth x4 + String x4', source: 'Hunter NPC', desc: 'Improved medium armor. Good for ranged combat builds.', rarity: 'Rare' },
  { name: 'Hunter Set', category: 'Armor Recipes', type: 'Medium Armor', materials: 'Leather x10 + Cloth x6 + Dye x2', source: 'Hunter NPC', desc: 'Advanced medium armor. Excellent for archers and rangers.', rarity: 'Rare' },
  { name: 'Deadeye Set', category: 'Armor Recipes', type: 'Medium Armor', materials: 'Hardened Leather x12 + Cloth x8 + Padding x4', source: 'Hunter NPC', desc: 'Elite medium armor. Best for ranged DPS builds.', rarity: 'Epic' },
  { name: 'Assassin Set', category: 'Armor Recipes', type: 'Medium Armor', materials: 'Hardened Leather x15 + Cloth x8 + Shroud Silk x4', source: 'Hunter NPC', desc: 'Legendary medium armor. Critical strike focus. High dexterity.', rarity: 'Legendary' },
  // Magic Armor (Alchemist)
  { name: 'Herbalist Set', category: 'Armor Recipes', type: 'Magic Armor', materials: 'Cloth x8 + Shroud Spore x4 + Plant Fiber x6', source: 'Alchemist NPC', desc: 'Basic magic armor. Mana regeneration bonus.', rarity: 'Common' },
  { name: 'Healer Set', category: 'Armor Recipes', type: 'Magic Armor', materials: 'Cloth x10 + Shroud Liquid x4 + Gem x2', source: 'Alchemist NPC', desc: 'Magic armor for healers. Boosts healing power.', rarity: 'Rare' },
  { name: 'Mage Set', category: 'Armor Recipes', type: 'Magic Armor', materials: 'Cloth x10 + Shroud Core x2 + Gem x2', source: 'Alchemist NPC', desc: 'Advanced magic armor. Increases spell damage.', rarity: 'Rare' },
  { name: 'Archmage Set', category: 'Armor Recipes', type: 'Magic Armor', materials: 'Cloth x15 + Shroud Core x4 + Crystal x3 + Gem x2', source: 'Alchemist NPC', desc: 'Legendary magic armor. Maximum spell power and spell crit.', rarity: 'Legendary' },
  { name: 'Warlock Set', category: 'Armor Recipes', type: 'Magic Armor', materials: 'Cloth x12 + Ectoplasm x4 + Shroud Core x3', source: 'Alchemist NPC', desc: 'Dark magic armor. Boosts dark/shadow damage spells.', rarity: 'Epic' },

  // ═══════════════════════════════════════════════════════════
  // POTION RECIPES
  // ═══════════════════════════════════════════════════════════
  // Healing Potions
  { name: 'Small Health Potion', category: 'Potion Recipes', type: 'Healing', materials: 'Aloe x2 + Water x1', source: 'Alchemy Station', desc: 'Restores 50 HP. Basic healing for early game.', rarity: 'Common' },
  { name: 'Health Potion', category: 'Potion Recipes', type: 'Healing', materials: 'Aloe x3 + Red Mushroom x1 + Water x1', source: 'Alchemy Station', desc: 'Restores 100 HP. Standard healing potion.', rarity: 'Common' },
  { name: 'Greater Health Potion', category: 'Potion Recipes', type: 'Healing', materials: 'Honey x1 + Water x1 + Chamomile x1 + Purple Berries x1', source: 'Alchemy Station', desc: 'Restores 200 HP. Strong healing for mid-game.', rarity: 'Uncommon' },
  { name: 'Superior Health Potion', category: 'Potion Recipes', type: 'Healing', materials: 'Aloe x5 + Red Mushroom x3 + Ectoplasm x1', source: 'Alchemy Station', desc: 'Restores 350 HP. Powerful healing for late game.', rarity: 'Rare' },
  // Mana Potions
  { name: 'Small Mana Potion', category: 'Potion Recipes', type: 'Mana', materials: 'Blue Mushroom x2 + Water x1', source: 'Alchemy Station', desc: 'Restores 30 Mana. Basic mana regeneration.', rarity: 'Common' },
  { name: 'Mana Potion', category: 'Potion Recipes', type: 'Mana', materials: 'Blue Mushroom x3 + Shroud Spore x1 + Water x1', source: 'Alchemy Station', desc: 'Restores 60 Mana. Standard mana potion.', rarity: 'Common' },
  { name: 'Large Mana Potion', category: 'Potion Recipes', type: 'Mana', materials: 'Blue Mushroom x4 + Shroud Core Fragment x1 + Water x1', source: 'Alchemy Station', desc: 'Restores 120 Mana. Strong mana regeneration.', rarity: 'Uncommon' },
  // Buff Potions
  { name: 'Strength Elixir', category: 'Potion Recipes', type: 'Buff', materials: 'Bear Claw x1 + Fire Root x2 + Water x1', source: 'Alchemy Station', desc: '+10 Strength for 10 minutes. Increases melee damage.', rarity: 'Uncommon' },
  { name: 'Dexterity Elixir', category: 'Potion Recipes', type: 'Buff', materials: 'Swiftleaf x2 + Spider Silk x1 + Water x1', source: 'Alchemy Station', desc: '+10 Dexterity for 10 minutes. Increases ranged damage.', rarity: 'Uncommon' },
  { name: 'Intelligence Elixir', category: 'Potion Recipes', type: 'Buff', materials: 'Mooncap x2 + Shroud Spore x1 + Water x1', source: 'Alchemy Station', desc: '+10 Intelligence for 10 minutes. Increases spell damage.', rarity: 'Uncommon' },
  { name: 'Speed Potion', category: 'Potion Recipes', type: 'Buff', materials: 'Swiftleaf x3 + Water x1', source: 'Alchemy Station', desc: '+20% Movement Speed for 5 minutes. Great for exploration.', rarity: 'Rare' },
  // Resistance Potions
  { name: 'Shroud Survival Flask', category: 'Potion Recipes', type: 'Resistance', materials: 'Shroud Spore x2 + Shroud Liquid x1 + Purified Water x1', source: 'Alchemy Station', desc: '+5 minutes Shroud timer. Essential for Shroud exploration.', rarity: 'Rare' },
  { name: 'Fire Resistance Flask', category: 'Potion Recipes', type: 'Resistance', materials: 'Fire Root x2 + Obsidian Dust x1 + Water x1', source: 'Alchemy Station', desc: 'Fire resistance for 10 minutes. Protects against fire enemies.', rarity: 'Uncommon' },
  // Explosives (Laboratory)
  { name: 'Shroud Bomb', category: 'Potion Recipes', type: 'Explosive', materials: 'Shroud Core x1 + Black Powder x3 + Metal Casing x1', source: 'Laboratory', desc: 'AoE Shroud damage. Effective against groups of enemies.', rarity: 'Rare' },
  { name: 'Black Powder', category: 'Potion Recipes', type: 'Explosive', materials: '7 Nitrate + 1 Sulfur + 2 Coal Powder', source: 'Laboratory', desc: 'Explosive powder. Used for bombs and explosives crafting.', rarity: 'Common' },
  { name: 'Nitrate', category: 'Potion Recipes', type: 'Explosive', materials: '5 Sand + 5 Salt + 1 Wood Acid + 1 Alchemical Base', source: 'Laboratory', desc: 'Dangerous substance for explosives and gunpowder.', rarity: 'Common' },
  // Missing potions
  { name: 'Alchemical Base', category: 'Potion Recipes', type: 'Material', materials: '1 Shroud Liquid + 1 Mycelium + 1 Shroud Spores + 1 Water', source: 'Alchemy Station', desc: 'Foundation for all advanced potions and alchemical crafting. Always keep a stockpile.', rarity: 'Common' },
  { name: 'Antiseptic', category: 'Potion Recipes', type: 'Material', materials: '1 Wood Acid + 1 Aloe', source: 'Alchemy Station', desc: 'Cures poison status effect. Also used as crafting component for healing items.', rarity: 'Common' },
  { name: 'Enshrouded Oil', category: 'Potion Recipes', type: 'Material', materials: '1 Shroud Liquid + 1 Alchemical Base + 1 Nitrate', source: 'Laboratory', desc: 'Dark oil with Shroud properties. Used in advanced crafting and magic items.', rarity: 'Uncommon' },
  { name: 'Spice', category: 'Potion Recipes', type: 'Material', materials: '1 Red Mushroom + 1 Yellow Flower + 1 Wood Acid', source: 'Laboratory', desc: 'Cooking spice that enhances food buffs. Required for advanced cooking recipes.', rarity: 'Common' },
  { name: 'Mauveine', category: 'Potion Recipes', type: 'Material', materials: '1 Alchemical Base + 1 Purple Berries + 1 Nitrate', source: 'Laboratory', desc: 'Purple dye and alchemical component. Used for Violet Fabric and potions.', rarity: 'Common' },
  { name: 'Invisibility Potion', category: 'Potion Recipes', type: 'Buff', materials: '2 Shadowcap + 1 Shroud Liquid + 1 Water', source: 'Alchemy Station', desc: 'Grants invisibility for 30 seconds. Enemies cannot detect you. 10 min cooldown.', rarity: 'Epic' },
  { name: 'Smoke Bomb', category: 'Potion Recipes', type: 'Explosive', materials: '2 Shadowcap + 1 Black Powder + 1 Cloth', source: 'Laboratory', desc: 'Creates smoke screen for 10 seconds. Blocks enemy line of sight. Escape tool.', rarity: 'Uncommon' },
  { name: 'Flashbang', category: 'Potion Recipes', type: 'Explosive', materials: '2 Brightcap + 2 Black Powder + 1 Metal Casing', source: 'Laboratory', desc: 'Stuns enemies for 5 seconds in a radius. Perfect for crowd control.', rarity: 'Rare' },
  { name: 'Wisp of Light', category: 'Potion Recipes', type: 'Tool', materials: '1 Bug Dust + 1 Glow Dust + 1 Resin', source: 'Alchemy Station', desc: 'Portable light source that follows you. Lasts 30 minutes. Essential for caves.', rarity: 'Common' },
  { name: 'Eternal Chain Lightning', category: 'Potion Recipes', type: 'Spell Charge', materials: '1 Ectoplasm Shard', source: 'Collector NPC', desc: 'Staff charge: lightning bolt bounces between multiple enemies. High DPS.', rarity: 'Rare' },
  { name: 'Eternal Heal Channel', category: 'Potion Recipes', type: 'Spell Charge', materials: '1 Ectoplasm Crystal', source: 'Collector NPC', desc: 'Staff charge: continuous healing beam on ally. Essential for support mages.', rarity: 'Rare' },
  { name: 'Eternal Fireball', category: 'Potion Recipes', type: 'Spell Charge', materials: '1 Ectoplasm Crystal', source: 'Collector NPC', desc: 'Staff charge: exploding fire projectile. Massive AoE damage.', rarity: 'Rare' },
  { name: 'Eternal Ice Bolt', category: 'Potion Recipes', type: 'Spell Charge', materials: '1 Ectoplasm Crystal', source: 'Collector NPC', desc: 'Staff charge: freezing ice projectile. Slows and damages enemies.', rarity: 'Rare' },
  { name: 'Eternal Shroud Meteor', category: 'Potion Recipes', type: 'Spell Charge', materials: '1 Ectoplasm Crystal', source: 'Collector NPC', desc: 'Staff charge: devastating meteor strike. Highest single-target damage.', rarity: 'Epic' },

  // ═══════════════════════════════════════════════════════════
  // FOOD RECIPES
  // ═══════════════════════════════════════════════════════════
  // Meat Dishes
  { name: 'Grilled Steak', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x2 + Salt x1', source: 'Cooking Station', desc: '+5 Strength for 15 minutes. Basic strength buff.', rarity: 'Common' },
  { name: 'Meat Stew', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x2 + Potato x1 + Water x1', source: 'Cooking Station', desc: '+10 Strength for 20 minutes. Good combat buff.', rarity: 'Common' },
  { name: 'Hearty Stew', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x3 + Potato x2 + Carrot x1 + Water x1', source: 'Cooking Station', desc: '+15 Strength for 25 minutes. Best strength food buff.', rarity: 'Uncommon' },
  { name: 'Spiced Meat', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x2 + Spice x1', source: 'Cooking Station', desc: '+12 Strength for 20 minutes. Requires Spice from Laboratory.', rarity: 'Uncommon' },
  { name: 'Bacon and Eggs', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x1 + Egg x2 + Salt x1', source: 'Cooking Station', desc: '+8 STR, +5 END for 20 min. Balanced combat buff.', rarity: 'Common' },
  // Vegetable Dishes
  { name: 'Roasted Vegetables', category: 'Food Recipes', type: 'Vegetable', materials: 'Potato x1 + Carrot x1 + Onion x1', source: 'Cooking Station', desc: '+5 Intelligence for 15 minutes. Basic INT buff.', rarity: 'Common' },
  { name: 'Vegetable Soup', category: 'Food Recipes', type: 'Vegetable', materials: 'Potato x1 + Carrot x1 + Onion x1 + Water x1', source: 'Cooking Station', desc: '+8 Intelligence for 20 minutes. Good mage buff.', rarity: 'Common' },
  { name: 'Vegetable Stir-fry', category: 'Food Recipes', type: 'Vegetable', materials: 'Mixed Vegetables x2 + Oil x1 + Spice x1', source: 'Cooking Station', desc: '+12 Intelligence for 20 minutes. Best INT buff.', rarity: 'Uncommon' },
  // Baked Goods
  { name: 'Bread', category: 'Food Recipes', type: 'Baked', materials: 'Flour x2 + Water x1 + Yeast x1', source: 'Oven', desc: '+5 Endurance for 15 minutes. Basic endurance buff.', rarity: 'Common' },
  { name: 'Honey Bread', category: 'Food Recipes', type: 'Baked', materials: 'Flour x2 + Water x1 + Honey x1', source: 'Oven', desc: '+8 Endurance for 20 minutes. Better endurance buff.', rarity: 'Common' },
  { name: 'Meat Pie', category: 'Food Recipes', type: 'Baked', materials: 'Flour x1 + Raw Meat x2 + Potato x1', source: 'Oven', desc: '+10 STR, +5 END for 20 min. Excellent combat buff.', rarity: 'Uncommon' },
  // Advanced Cooking
  { name: 'Feast Platter', category: 'Food Recipes', type: 'Advanced', materials: 'Raw Meat x3 + Vegetables x2 + Bread x1 + Wine x1', source: 'Kitchen', desc: '+15 All Stats for 30 minutes. Ultimate pre-boss food.', rarity: 'Rare' },
  { name: 'Energizing Coffee', category: 'Food Recipes', type: 'Advanced', materials: 'Coffee Beans x1 + Water x1', source: 'Coffee Brewery', desc: '+20% Stamina Regen for 10 minutes. Great for long fights.', rarity: 'Common' },
  // Missing food
  { name: 'Stuffed Pepper', category: 'Food Recipes', type: 'Vegetable', materials: 'Bell Pepper x2 + Rice x1 + Tomato x1', source: 'Cooking Station', desc: '+10 Intelligence for 20 minutes. Filling vegetable dish with rice filling.', rarity: 'Common' },
  { name: 'Berry Pie', category: 'Food Recipes', type: 'Baked', materials: 'Purple Berries x3 + Flour x1 + Sugar x1', source: 'Oven', desc: '+8 Intelligence for 20 minutes. Sweet dessert that provides a mental boost.', rarity: 'Common' },
  { name: 'Mushroom Soup', category: 'Food Recipes', type: 'Vegetable', materials: 'Mushroom x3 + Onion x1 + Water x1', source: 'Cooking Station', desc: '+5 Endurance for 15 minutes. Warm soup that restores stamina.', rarity: 'Common' },
  { name: 'Fish Pie', category: 'Food Recipes', type: 'Baked', materials: 'Flour x1 + Fish x2 + Herb x1', source: 'Oven', desc: '+10 Dexterity for 20 minutes. Seafood pastry for ranged fighters.', rarity: 'Common' },
  { name: 'Vegetable Pie', category: 'Food Recipes', type: 'Baked', materials: 'Flour x1 + Mixed Vegetables x2', source: 'Oven', desc: '+10 Intelligence for 20 minutes. Simple but effective mage food.', rarity: 'Common' },
  { name: 'Trail Mix', category: 'Food Recipes', type: 'Advanced', materials: 'Nuts x1 + Dried Berries x1 + Seeds x1', source: 'Cooking Station', desc: '+5 Endurance and increased Stamina Regen for 15 minutes. Portable snack.', rarity: 'Common' },
  { name: 'Royal Banquet', category: 'Food Recipes', type: 'Advanced', materials: 'Raw Meat x4 + Fish x2 + Vegetables x2 + Bread x2 + Wine x2 + Spice x1', source: 'Kitchen', desc: '+20 All Stats for 30 minutes. Ultimate pre-boss meal. Most powerful food buff.', rarity: 'Legendary' },
  { name: 'Kebab', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x2 + Onion x1 + Pepper x1', source: 'Cooking Station', desc: '+10 Strength, +5 Dexterity for 20 minutes. Balanced combat buff.', rarity: 'Common' },
  { name: 'Smoked Meat', category: 'Food Recipes', type: 'Meat Dish', materials: 'Raw Meat x2 + Wood Chips x1', source: 'Drying Rack', desc: '+8 Strength for 20 minutes. Preserved meat that lasts longer than cooked.', rarity: 'Common' },
  { name: 'Flatbread', category: 'Food Recipes', type: 'Baked', materials: 'Flour x1 + Water x1', source: 'Oven', desc: 'Basic bread. Small health regeneration. Simple emergency food.', rarity: 'Common' },
  { name: 'Cooked Fish', category: 'Food Recipes', type: 'Seafood', materials: 'Fish x1', source: 'Seafood Grill', desc: '+5 Dexterity for 15 minutes. Basic seafood buff from the grill.', rarity: 'Common' },
  { name: 'Honey Glazed Fish', category: 'Food Recipes', type: 'Seafood', materials: 'Fish x2 + Honey x1 + Herb x1', source: 'Seafood Grill', desc: '+10 Dexterity for 20 minutes. Sweet and savory seafood dish.', rarity: 'Uncommon' },
  { name: 'Butter', category: 'Food Recipes', type: 'Ingredient', materials: 'Milk x2', source: 'Butter Churn', desc: 'Cooking ingredient. Used in advanced baking and cooking recipes.', rarity: 'Common' },

  // ═══════════════════════════════════════════════════════════
  // MATERIAL PROCESSING
  // ═══════════════════════════════════════════════════════════
  { name: 'Metal Bar Smelting', category: 'Material Processing', type: 'Metal Chain', materials: 'Ore + Charcoal at Smelter', source: 'Smelter / Blast Furnace', desc: 'Copper/Tin/Iron Ore + Charcoal = Metal Bar. Iron Ore + Coal at Blast Furnace = Steel Bar.', rarity: 'Common' },
  { name: 'Leather Processing', category: 'Material Processing', type: 'Leather Chain', materials: 'Multi-step process', source: 'Hunter Stations', desc: 'Fur Patch x10 + String x2 = Animal Fur → Drying Rack + Salt = Dried Fur → Tanning Station + Salt + Ammonia = Leather', rarity: 'Common' },
  { name: 'Textile Processing', category: 'Material Processing', type: 'Textile Chain', materials: 'Multi-step process', source: 'Hunter Stations', desc: 'Flax x2 = Linen (Hand Spindle) → Linen x2 = Fabric (Loom) → Fabric + Dye = Colored Fabric', rarity: 'Common' },
  { name: 'Wood Processing', category: 'Material Processing', type: 'Wood Chain', materials: 'Wood Log at Table Saw', source: 'Carpenter Station', desc: 'Wood Log → Wood Planks (Table Saw). Clay + Log = Fired Brick (Kiln).', rarity: 'Common' },
  { name: 'Alchemy Processing', category: 'Material Processing', type: 'Alchemy Chain', materials: 'Multi-step process', source: 'Alchemist Stations', desc: 'Shroud Spores + Shroud Liquid + Water + Mycelium = Alchemical Base → Base + Herbs = Potions', rarity: 'Common' },
  { name: 'Ectoplasm Processing', category: 'Material Processing', type: 'Endgame Chain', materials: 'Ectoplasm Fragments at Press', source: 'Collector Station', desc: 'Ectoplasm Fragments/Shards/Crystal + Cloth + Charcoal = Ectoplasm → Bone Keys for Hollow Halls', rarity: 'Uncommon' },
  { name: 'Coffee Processing', category: 'Material Processing', type: 'Food Chain', materials: 'Multi-step process', source: 'Farmer Stations', desc: 'Coffee Beans → Ground Coffee Beans (Grinding Stones) → Roasted Coffee Beans (Coffee Drum Roaster) → Coffee (Coffee Brewery)', rarity: 'Common' },
  { name: 'Glass Processing', category: 'Material Processing', type: 'Material Chain', materials: 'Sand + Charcoal at Smelter', source: 'Smelter', desc: 'Sand x30 + Charcoal x5 = Glass. Used for Laboratory, windows, and vials.', rarity: 'Common' },
  { name: 'Farm Soil Production', category: 'Material Processing', type: 'Farming Chain', materials: 'Dirt + Bonemeal at Farmer', source: 'Farmer NPC', desc: 'Dirt x7 + Bonemeal x3 = Farm Soil. Sand x10 + Fossilized Bone Dust x2 + Nitrate x3 = Fertilised Farm Soil.', rarity: 'Common' },
  // Missing processing chains
  { name: 'Charcoal Production', category: 'Material Processing', type: 'Fuel Chain', materials: 'Wood Log at Charcoal Kiln', source: 'Charcoal Kiln', desc: 'Wood Log x1 = Charcoal x1. Also produces Wood Acid and Tar as byproducts. Takes ~5 minutes real time.', rarity: 'Common' },
  { name: 'Bone Key Crafting', category: 'Material Processing', type: 'Endgame Chain', materials: 'Ectoplasm + Biome Materials at Collector', source: 'Collector NPC', desc: 'Ectoplasm + specific biome materials = Bone Keys. Revelwood/Nomad Highlands/Kindlewastes keys open Hollow Halls.', rarity: 'Epic' },
  { name: 'Coffee Bean Processing', category: 'Material Processing', type: 'Food Chain', materials: 'Multi-step process', source: 'Farmer Stations', desc: 'Coffee Beans → Ground Coffee (Grinding Stones) → Roasted Coffee (Coffee Drum Roaster) → Coffee (Coffee Brewery)', rarity: 'Common' },
  { name: 'Purified Water Production', category: 'Material Processing', type: 'Water Chain', materials: 'Water at Improved Water Well', source: 'Improved Water Well', desc: 'Improved Water Well produces Purified Water. Required for high-tier potions and cooking.', rarity: 'Common' },
  { name: 'Glass Production', category: 'Material Processing', type: 'Material Chain', materials: 'Sand + Charcoal at Smelter', source: 'Smelter', desc: 'Sand x30 + Charcoal x5 = Glass. Used for Laboratory, Scientific Instruments, windows, and vials.', rarity: 'Common' },
  { name: 'Wool Processing', category: 'Material Processing', type: 'Textile Chain', materials: 'Yak Wool at Spinning Wheel', source: 'Spinning Wheel', desc: 'Yak Wool → Wool Thread (Spinning Wheel) → Wool Fabric (Loom). Warm fabric for cold regions.', rarity: 'Common' },
  { name: 'Brick Production', category: 'Material Processing', type: 'Building Chain', materials: 'Clay + Wood Log at Kiln', source: 'Kiln', desc: 'Lump of Clay x1 + Wood Log x1 = Fired Brick. Essential building material for sturdy structures.', rarity: 'Common' },
  { name: 'Tar Production', category: 'Material Processing', type: 'Fuel Chain', materials: 'Wood Log excess at Charcoal Kiln', source: 'Charcoal Kiln', desc: 'Excess wood in Charcoal Kiln produces Tar. Used for waterproofing and crafting.', rarity: 'Common' },
];

