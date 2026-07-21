import {
  Skull, Sword, Bug, Ghost, Bird, Cat, AlertTriangle, Diamond
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

function EnemyCard({ name, faction, biome, level, drops, desc, weak }: {
  name: string; faction: string; biome: string; level: string; drops: string; desc: string; weak?: string;
}) {
  return (
    <div className="game-panel corner-decor p-3 mb-2">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">{name}</h4>
        <span className="text-[9px] text-[var(--text-muted)]">Lv{level}</span>
      </div>
      <div className="text-[9px] text-[var(--text-muted)] mb-1">
        <span className="text-orange-400">{faction}</span> • <span className="text-[var(--accent-green)]">{biome}</span>
      </div>
      <p className="text-[10px] text-[var(--text-secondary)] mb-1">{desc}</p>
      <div className="text-[9px] text-[var(--text-gold)]">Drops: {drops}</div>
      {weak && <div className="text-[9px] text-red-400 mt-0.5">Weak: {weak}</div>}
    </div>
  );
}

function EnemyList({ items }: { items: { name: string; faction: string; biome: string; level: string; drops: string; desc: string; weak?: string }[] }) {
  return (
    <div className="space-y-1">
      {items.map((e) => (
        <EnemyCard key={e.name} name={e.name} faction={e.faction} biome={e.biome} level={e.level} drops={e.drops} desc={e.desc} weak={e.weak} />
      ))}
    </div>
  );
}

const fell_enemies = [
  { name: 'Fell Footsoldier', faction: 'Fell', biome: 'All Shroud areas', level: '1-10', drops: 'Shroud Spores, Torn Cloth, Rusty Sword', desc: 'Basic Fell infantry. Humanoid corrupted by Shroud. Most common enemy type. Attacks with rusty weapons.', weak: 'Fire, Cutting' },
  { name: 'Fell Beetle', faction: 'Fell', biome: 'All Shroud areas', level: '1-10', drops: 'Shroud Spores, Critter Parts', desc: 'Basic Fell creature. Slow but numerous. First enemy encountered.', weak: 'Fire, Cutting' },
  { name: 'Exploding Fell Beetle', faction: 'Fell', biome: 'Nomad Highlands, Kindlewastes', level: '15-25', drops: 'Shroud Spores, Black Powder', desc: 'Self-destructs when close. Kill at range. High damage.', weak: 'Fire, Ice' },
  { name: 'Fell Boar', faction: 'Fell', biome: 'Revelwood, Blackmire', level: '10-15', drops: 'Raw Game, Corrupted Boar Tusk', desc: 'Aggressive corrupted boar. Charges at player.', weak: 'Piercing, Fire' },
  { name: 'Fell Spitting Plant', faction: 'Fell', biome: 'Revelwood, mud pits', level: '10-15', drops: 'Poison Sack, Shroud Sack', desc: 'Stationary plant that shoots poison projectiles. Ranged threat.', weak: 'Fire, Cutting' },
  { name: 'Fell Knight', faction: 'Fell', biome: 'Kindlewastes', level: '20-30', drops: 'Metal Scraps, Corrosive Blood', desc: 'Heavily armored Fell warrior. Uses sword and shield.', weak: 'Blunt, Shock' },
  { name: 'Fell Commander', faction: 'Fell', biome: 'Kindlewastes, Albaneve', level: '25-35', drops: 'Legendary Runes, Corrosive Blood, Gems', desc: 'Elite Fell unit in full Guard of the North armor. Blocks attacks with shield.', weak: 'Blunt, Fire' },
  { name: 'Fell Banshee', faction: 'Fell', biome: 'Kindlewastes, Albaneve', level: '20-35', drops: 'Aerated Banshee Gel, Gems', desc: 'Flying Fell creature. Screams to disorient. Ranged magic attacks.', weak: 'Piercing, Ice' },
  { name: 'Fell Draconian Vulture', faction: 'Fell', biome: 'Kindlewastes', level: '20-30', drops: 'Raw Bird Meat, Enshrouded Vulture Talon', desc: 'Corrupted flying vulture. Attacks from above.', weak: 'Piercing, Fire' },
  { name: 'Fell Mushroom Crab', faction: 'Fell', biome: 'Nomad Highlands', level: '15-20', drops: 'Mint Mushroom Meat, Poison Sack', desc: 'Large crab-like creature with mushroom growths.', weak: 'Fire, Cutting' },
  { name: 'Fell Thunderbrute', faction: 'Fell (Boss)', biome: 'Springlands', level: '5', drops: 'Fell Thunderbrute Head, Shroud Core, Legendary Runes', desc: 'FIRST BOSS. Found at end of \'Clear the Elixir Well\' quest. Slow but powerful melee attacks.', weak: 'Dodge attacks, use bow/magic' },
  { name: 'Fell Monstrosity', faction: 'Fell (Boss)', biome: 'Nomad Highlands', level: '18', drops: 'Fell Monstrosity Head, Monstrous Ribs, Legendary Runes', desc: 'Massive hulking Fell beast. High health pool. Ground slam AOE.', weak: 'Fire, Cutting. Stay mobile.' },
  { name: 'Fell Sicklescythe', faction: 'Fell (Boss)', biome: 'Kindlewastes', level: '25', drops: 'Fell Sicklescythe Head, Mist, Legendary Runes', desc: 'Fast boss with dual scythes. Bleed damage. Debuffs player.', weak: 'Blunt, Shock. Bring bleed cure.' },
  { name: 'Fell Dragon Youngling', faction: 'Fell (Boss)', biome: 'Albaneve Summits', level: '30', drops: 'Fell Dragon Youngling Head, Dragon Scales, Legendary Runes', desc: 'Flying dragon boss. Fire breath and dive attacks. Hardest open-world boss.', weak: 'Ice, Piercing. Fire resist potion essential.' },
  { name: 'Fell Wispwyvern', faction: 'Fell (Boss)', biome: 'Pikemead\'s Reach', level: '20', drops: 'Fell Wispwyvern Head, Legendary Runes', desc: 'Once seen as a good omen before Shroud corruption. Agile flyer.', weak: 'Piercing, Ice' },
  { name: 'Fell Cyclops', faction: 'Fell (Boss)', biome: 'Albaneve Summits', level: '30', drops: 'Fell Cyclops Head, Legendary Runes, Giant Bones', desc: 'One-eyed giant corrupted by Shroud. Guards frozen Elixir Wells in Albaneve caves. Massive club attacks.', weak: 'Fire, Shroud damage' },
  { name: 'Fell Critter Queen', faction: 'Fell (Boss)', biome: 'Nomad Highlands', level: '18', drops: 'Rare crafting materials, Legendary Runes', desc: 'Massive insect queen. Spawns Fell Beetle adds.', weak: 'Fire, AOE attacks' },
];

const scavengers_enemies = [
  { name: 'Scavenger Berserker', faction: 'Scavenger', biome: 'All regions', level: '5-35', drops: 'Metal Scraps, Torn Cloth, Gems', desc: 'Dual-wielding melee fighter. Fast attacks. Most common Scavenger.', weak: 'Cutting, Fire' },
  { name: 'Scavenger Ranged', faction: 'Scavenger', biome: 'All regions', level: '5-30', drops: 'Metal Scraps, Wooden Arrows, Torn Cloth', desc: 'Archer that attacks from distance. Low health.', weak: 'Piercing, Rush and melee' },
  { name: 'Scavenger Scalper', faction: 'Scavenger', biome: 'All regions', level: '5-25', drops: 'Metal Scraps, Torn Cloth, Dagger', desc: 'Fast dagger wielder. High critical damage.', weak: 'Blunt, Fire' },
  { name: 'Scavenger Wolf', faction: 'Scavenger', biome: 'All regions', level: '5-25', drops: 'Raw Wolf Meat, Animal Fur', desc: 'Tamed wolf accompanying Scavengers. Fast and aggressive.', weak: 'Cutting, Fire' },
  { name: 'Scavenger Matron', faction: 'Scavenger (Boss)', biome: 'Nomad Highlands, Springlands', level: '15', drops: 'Scavenger Matron Helmet, Metal Scraps, Legendary Runes', desc: 'Large melee boss with massive health. Two variants: Gorger and Grizzler. Slow but devastating hits.', weak: 'Fire, Blunt. Hit from behind.' },
  { name: 'Scavenger Tyrant', faction: 'Scavenger (Boss)', biome: 'Rothstep settlement', level: '25', drops: 'Legendary Runes, Scavenger equipment', desc: 'Powerful Scavenger leader. Guards settlements.', weak: 'Fire, Shock' },
  { name: 'Elite Scavenger', faction: 'Scavenger', biome: 'All regions (rare)', level: '20-35', drops: 'Legendary Runes, Metal Scraps, Gems', desc: 'Rare elite version of Scavenger Berserker. Higher health and damage. Gold/unique appearance.', weak: 'Fire, Cutting' },
  { name: 'Scavenger Guard', faction: 'Scavenger', biome: 'Settlements', level: '10-25', drops: 'Metal Scraps, Torn Cloth', desc: 'Scavenger defending camps and settlements. Uses shield and spear.', weak: 'Blunt, Fire' },
];

const vukah_enemies = [
  { name: 'Vukah Brawler', faction: 'Vukah (Boss)', biome: 'Springlands, Nomad Highlands, Low Meadows', level: '8', drops: 'Vukah Brawler Head, Animal Fur, Resin', desc: 'Ancient beastman boss. Heavy melee attacks. High stagger threshold.', weak: 'Blunt, Cutting. Keep distance, use ranged.' },
  { name: 'Vukah Warrior', faction: 'Vukah', biome: 'Revelwood, Blackmire, Nomad Highlands', level: '10-20', drops: 'Animal Fur, Resin, Wooden Club', desc: 'Basic Vukah foot soldier. Uses primitive clubs and spears. territorial and aggressive.', weak: 'Fire, Cutting' },
  { name: 'Vukah Shaman', faction: 'Vukah', biome: 'Revelwood, Blackmire', level: '12-20', drops: 'Resin, Animal Fur, Shroud Spores', desc: 'Magic-using Vukah. Casts spells and buffs allies.', weak: 'Piercing, Shock' },
  { name: 'Vukah Berserker', faction: 'Vukah', biome: 'Revelwood, Nomad Highlands', level: '15-25', drops: 'Animal Fur, Resin, Gems', desc: 'Aggressive melee Vukah with high damage output.', weak: 'Blunt, Fire' },
  { name: 'Vukah Spear-thrower', faction: 'Vukah', biome: 'Blackmire', level: '12-18', drops: 'Resin, Animal Fur, Wooden Spears', desc: 'Ranged Vukah that throws spears from distance.', weak: 'Piercing, Rush' },
  { name: 'Vukah Skullguard', faction: 'Vukah', biome: 'Blackmire', level: '15-20', drops: 'Animal Fur, Resin, Metal Scraps', desc: 'Heavily armored Vukah wearing large skull masks.', weak: 'Blunt, Shock' },
];

const hollow_enemies = [
  { name: 'Hollow Hound', faction: 'Hollow', biome: 'Cemeteries, Catacombs, Hollow Halls', level: '10-30', drops: 'Bones, Salt, Ectoplasm Fragment', desc: 'Undead dog. Fast and aggressive. Found in all Hollow areas.', weak: 'Fire, Cutting' },
  { name: 'Hollow Skeleton', faction: 'Hollow', biome: 'Cemeteries, Catacombs, Hollow Halls', level: '10-35', drops: 'Bones, Salt, Ectoplasm Fragment', desc: 'Basic undead warrior. Uses sword and shield. Medium threat.', weak: 'Blunt, Fire' },
  { name: 'Hollow Reaper', faction: 'Hollow', biome: 'Revelwood Hollow Halls, Albaneve', level: '20-35', drops: 'Bones, Salt, Ectoplasm Shard, Gems', desc: 'Elite undead with scythe. High damage. Spawns in higher level Hollow Halls.', weak: 'Fire, Blunt' },
  { name: 'Hollow Wraith', faction: 'Hollow', biome: 'Hollow Halls endgame', level: '25-40', drops: 'Ectoplasm Crystal, Bones, Legendary Runes', desc: 'Ghostly apparition. Phases through attacks. High magic resistance.', weak: 'Shock, Fire' },
  { name: 'Hollow Cyclops', faction: 'Hollow (Boss)', biome: 'Nomad Highlands catacombs', level: '20', drops: 'Hollow Cyclops Head, Giant Bones, Ectoplasm Shard', desc: 'Massive one-eyed undead giant. Powerful melee attacks.', weak: 'Fire, Cutting. Attack legs.' },
  { name: 'Shroud Stalker', faction: 'Hollow/Shroud', biome: 'Deep Shroud, Hollow Halls', level: '20-40', drops: 'Ectoplasm Shard, Shroud Core', desc: 'Invisible until close. Ambush predator. High burst damage.', weak: 'Shock, Fire. Use detection.' },
  { name: 'Hollow Archer', faction: 'Hollow', biome: 'Cemeteries, Hollow Halls', level: '15-30', drops: 'Bones, Salt, Ectoplasm Fragment, Wooden Arrows', desc: 'Undead archer. Shoots arrows from distance. Low health but dangerous in groups.', weak: 'Fire, Piercing' },
  { name: 'Hollow Mage', faction: 'Hollow', biome: 'Hollow Halls, Albaneve', level: '25-35', drops: 'Ectoplasm Shard, Shroud Spores, Bones, Gems', desc: 'Undead spellcaster. Casts ice and dark magic. High magic resistance.', weak: 'Shock, Fire' },
  { name: 'Hollow Hound Alpha', faction: 'Hollow', biome: 'Hollow Halls endgame', level: '25-40', drops: 'Ectoplasm Crystal, Bones, Legendary Runes', desc: 'Larger, more powerful version of Hollow Hound. Leads packs. High damage.', weak: 'Fire, Blunt' },
];

const wildlife_enemies = [
  { name: 'Goat', faction: 'Wildlife (Passive)', biome: 'Springlands, Nomad Highlands', level: '1', drops: 'Raw Lean Meat, Animal Fur', desc: 'Passive herbivore. Runs when approached. Good early food source.', weak: 'N/A - Passive' },
  { name: 'Hophare', faction: 'Wildlife (Passive)', biome: 'Springlands', level: '1', drops: 'Raw Lean Meat, Animal Fur', desc: 'Rabbit-like creature. Tameable. Fast and skittish.', weak: 'N/A - Passive' },
  { name: 'Fae Deer', faction: 'Wildlife (Passive)', biome: 'Revelwood, Blackmire', level: '5', drops: 'Raw Game, Uncooked Fae Deer Milk', desc: 'Magical deer with glowing markings. Tameable.', weak: 'N/A - Passive' },
  { name: 'Capybara', faction: 'Wildlife (Passive)', biome: 'Veilwater Basin', level: '25', drops: 'Capybara Bristles, Raw Meat', desc: 'Large friendly rodent. Found near water.', weak: 'N/A - Passive' },
  { name: 'Flightless Redtail', faction: 'Wildlife (Passive)', biome: 'Nomad Highlands', level: '10', drops: 'Raw Bird Meat, Feathers, Flightless Redtail Egg', desc: 'Large flightless bird. Tameable. Runs fast when threatened.', weak: 'N/A - Passive' },
  { name: 'Frizzy Goat', faction: 'Wildlife (Passive)', biome: 'Albaneve Summits', level: '25', drops: 'Raw Lean Meat, Animal Fur, Frizzy Goat Milk', desc: 'Mountain goat with frizzy wool. Tameable. Hardy cold-weather animal.', weak: 'N/A - Passive' },
  { name: 'Yak', faction: 'Wildlife (Passive)', biome: 'Albaneve Summits', level: '25', drops: 'Raw Lean Meat, Animal Fur, Yak Milk', desc: 'Large mountain bovine. Tameable. Slow but provides abundant resources.', weak: 'N/A - Passive' },
  { name: 'Wolf', faction: 'Wildlife (Aggressive)', biome: 'Springlands, Nomad Highlands', level: '3-10', drops: 'Raw Wolf Meat, Animal Fur, Wolf Fur', desc: 'Packs of 3-5. Fast and dangerous for new players.', weak: 'Fire, Cutting' },
  { name: 'Boar', faction: 'Wildlife (Aggressive)', biome: 'Revelwood, Blackmire', level: '8-15', drops: 'Raw Game, Bones, Corrupted Boar Tusk', desc: 'Aggressive wild pig. Charges at player. Medium threat.', weak: 'Piercing, Fire' },
  { name: 'Sabertooth Tiger', faction: 'Wildlife (Aggressive)', biome: 'Nomad Highlands', level: '15-20', drops: 'Raw Game, Animal Fur, Sabertooth Fang', desc: 'Powerful predator. High burst damage. Stealth attacks.', weak: 'Fire, Piercing' },
  { name: 'Draconian Vulture', faction: 'Wildlife (Aggressive)', biome: 'Kindlewastes', level: '20-30', drops: 'Raw Bird Meat, Enshrouded Vulture Talon, Feathers', desc: 'Flying predator in desert. Attacks from above.', weak: 'Piercing, Ice' },
  { name: 'Dune Armadillo', faction: 'Wildlife (Passive/Aggressive)', biome: 'Kindlewastes', level: '20-25', drops: 'Raw Dune Armadillo Meat, Scales', desc: 'Armored desert creature. Rolls into ball when threatened.', weak: 'Blunt, Fire' },
  { name: 'Scorpion', faction: 'Wildlife (Aggressive)', biome: 'Kindlewastes', level: '20-25', drops: 'Venom Stinger, Chitin', desc: 'Poisonous desert predator. Sting causes poison DOT.', weak: 'Fire, Blunt' },
  { name: 'Snapjaw', faction: 'Wildlife (Aggressive)', biome: 'Blackmire', level: '10-15', drops: 'Reptile Hide, Raw Meat', desc: 'Alligator-like creature in mud/tar pits. Ambush predator.', weak: 'Piercing, Shock' },
  { name: 'Giant Wasp', faction: 'Wildlife (Aggressive)', biome: 'Blackmire', level: '10-15', drops: 'Bug Dust, Poison Sack', desc: 'Flying insect. Poison sting. Attacks in swarms.', weak: 'Fire, Cutting' },
  { name: 'Mushroom Crab', faction: 'Wildlife (Aggressive)', biome: 'Revelwood', level: '8-12', drops: 'Mushroom Flesh, Poison Sack', desc: 'Crab with mushroom growth. Not tameable.', weak: 'Fire, Cutting' },
  { name: 'Spitting Plant', faction: 'Wildlife (Aggressive)', biome: 'Revelwood, mud pits', level: '8-12', drops: 'Poison Sack, Shroud Sack', desc: 'Stationary plant. Shoots poison projectiles.', weak: 'Fire, Cutting' },
  { name: 'Bat', faction: 'Wildlife (Aggressive)', biome: 'Caves, Cemeteries', level: '1-10', drops: 'Fur Patch, Bat Wing', desc: 'Flying creature in dark areas. Attacks in groups.', weak: 'Fire, Cutting' },
  { name: 'Spider', faction: 'Wildlife (Aggressive)', biome: 'Crypts, Caves', level: '1-15', drops: 'Spider Gland, Critter Parts, String', desc: 'Web-shooting predator. Poison bite.', weak: 'Fire, Cutting' },
  { name: 'Rat', faction: 'Wildlife (Passive/Aggressive)', biome: 'Ruins, Settlements', level: '1-5', drops: 'Raw Lean Meat, Fur Patch', desc: 'Small rodent. Mostly passive but can bite.', weak: 'Any' },
  { name: 'Fire Fly', faction: 'Wildlife (Passive)', biome: 'Blackmire, Springlands', level: '1', drops: 'Glow Dust, Bug Dust', desc: 'Bioluminescent flying insect. Passive but produces Glow Dust when crushed.', weak: 'N/A - Passive' },
  { name: 'Moth', faction: 'Wildlife (Passive)', biome: 'Night areas, Shroud', level: '1', drops: 'Bug Dust, Fur Patch', desc: 'Night-flying insect attracted to light sources.', weak: 'N/A - Passive' },
  { name: 'Drak', faction: 'Wildlife (Aggressive)', biome: 'Albaneve Summits, Veilwater Basin', level: '25-35', drops: 'Drak Blood, Drak Claws, Drak Scales, Drak Teeth', desc: 'Powerful dragon-like creatures. High health and devastating attacks. Endgame threat.', weak: 'Ice, Piercing' },
  { name: 'Drak Slicer', faction: 'Wildlife (Aggressive)', biome: 'Veilwater Basin', level: '30-35', drops: 'Drak Scales, Drak Claws, Legendary Runes', desc: 'Fast draconic predator. Bleed attacks. Highly aggressive.', weak: 'Ice, Blunt' },
  { name: 'Drak Sniper', faction: 'Wildlife (Aggressive)', biome: 'Veilwater Basin', level: '30-35', drops: 'Drak Scales, Legendary Runes', desc: 'Ranged draconic creature. Spits projectiles from distance.', weak: 'Ice, Piercing' },
  { name: 'Drak Slinger', faction: 'Wildlife (Aggressive)', biome: 'Veilwater Basin', level: '30-35', drops: 'Drak Scales, Legendary Runes', desc: 'Draconic creature that throws objects. Ranged threat.', weak: 'Ice, Shock' },
  { name: 'Snow Leopard', faction: 'Wildlife (Aggressive)', biome: 'Albaneve Summits', level: '25-35', drops: 'Raw Game, Animal Fur, Snow Leopard Fang', desc: 'Elite predator of snowy peaks. Stealth attacks. High burst damage. Extremely dangerous.', weak: 'Fire, Piercing' },
  { name: 'Frost Wisp', faction: 'Wildlife (Aggressive)', biome: 'Albaneve Summits', level: '25-35', drops: 'Frost Essence, Shroud Spores', desc: 'Icy variant of Wisp. Splits into multiple hostiles. Deals frost damage.', weak: 'Fire, Shock' },
  { name: 'Frost Draconian Vulture', faction: 'Wildlife (Aggressive)', biome: 'Albaneve Summits', level: '25-35', drops: 'Raw Bird Meat, Frost Vulture Talon, Feathers', desc: 'Frozen variant of Draconian Vulture. Breathes ice. Highly dangerous.', weak: 'Fire, Piercing' },
  { name: 'Cyclops', faction: 'Wildlife (Aggressive)', biome: 'Albaneve Summits caves', level: '30-40', drops: 'Giant Bones, Raw Game, Legendary Runes', desc: 'One-eyed giant beast. NOT the Fell Cyclops boss. Powerful melee strikes.', weak: 'Fire, Piercing. Attack from behind.' },
  { name: 'Bees', faction: 'Wildlife (Aggressive)', biome: 'Springlands, meadows', level: '1-5', drops: 'Honey, Wax, Bug Dust', desc: 'Defends hives aggressively. Swarm attacks cause poison. Found near flowers.', weak: 'Fire, Cutting' },
  { name: 'Fell Cicada', faction: 'Fell', biome: 'Springlands, Nomad Highlands', level: '5-15', drops: 'Shroud Spores, Bug Dust', desc: 'Shroud-corrupted cicada. Flying insect. Attacks in swarms during Shroud events.', weak: 'Fire, Cutting' },
  { name: 'Red Beetle', faction: 'Fell', biome: 'Springlands', level: '1-5', drops: 'Shroud Spores, Critter Parts', desc: 'Smaller variant of Fell Beetle. Weaker but attacks in larger groups.', weak: 'Fire, Cutting' },
  { name: 'Corrupted Wolf', faction: 'Wildlife (Aggressive)', biome: 'Shroud areas', level: '5-15', drops: 'Raw Wolf Meat, Animal Fur, Shroud Spores', desc: 'Wolf corrupted by Shroud. More aggressive than normal wolves. Glows with Shroud energy.', weak: 'Fire, Cutting' },
  { name: 'Shroud Wolf', faction: 'Fell', biome: 'Deep Shroud', level: '15-25', drops: 'Raw Wolf Meat, Shroud Spores, Animal Fur', desc: 'Fully Shroud-corrupted wolf. High damage and speed. Dangerous in packs.', weak: 'Fire, Cutting' },
  { name: 'Tyger (Cat Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Orange tabby cat. Obtained via quest. Can be kept at your base as a companion.', weak: 'N/A - Pet' },
  { name: 'Captain Whiskers (Cat Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Grey cat with distinguished whiskers. Quest reward. Base companion.', weak: 'N/A - Pet' },
  { name: 'Sapphire (Cat Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Beautiful blue-eyed white cat. Rare quest reward. Base companion.', weak: 'N/A - Pet' },
  { name: 'Ruffles (Dog Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Scruffy loyal dog. Quest reward. Base companion that follows you around.', weak: 'N/A - Pet' },
  { name: 'Ikko (Dog Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Small energetic dog. Quest reward. Base companion.', weak: 'N/A - Pet' },
  { name: 'Pompom Jr. (Dog Pet)', faction: 'Pet', biome: 'Base/Quest', level: 'N/A', drops: 'N/A', desc: 'Fluffy dog with pom-pom like fur. Rare quest reward. Base companion.', weak: 'N/A - Pet' },
];

const drak_enemies = [
  { name: 'Drak Warrior', faction: 'Drak', biome: 'Veilwater Basin', level: '30-35', drops: 'Drak Blood, Drak Scales, Drak Claws, Raw Meat', desc: 'Basic Drak foot soldier. Reptilian humanoid. Uses crude weapons. Aggressive and territorial.', weak: 'Ice, Piercing' },
  { name: 'Drak Scout', faction: 'Drak', biome: 'Veilwater Basin', level: '30-35', drops: 'Drak Blood, Drak Scales, Feathers', desc: 'Fast Drak reconnaissance unit. Uses hit-and-run tactics. Often signals other Drak.', weak: 'Ice, Cutting' },
  { name: 'Drak Shaman', faction: 'Drak', biome: 'Veilwater Basin', level: '32-38', drops: 'Drak Blood, Drak Scales, Shroud Spores', desc: 'Drak spellcaster. Casts poison and dark magic. Buffs nearby Drak allies.', weak: 'Ice, Shock' },
  { name: 'Drak Brute', faction: 'Drak', biome: 'Veilwater Basin', level: '35-40', drops: 'Drak Blood, Drak Scales, Legendary Runes', desc: 'Massive hulking Drak. Extreme health and damage. Slow but devastating attacks.', weak: 'Ice, Blunt' },
  { name: 'Drak Elder', faction: 'Drak', biome: 'Veilwater Basin (deep)', level: '38-42', drops: 'Drak Blood, Drak Scales, Legendary Runes, Gems', desc: 'Ancient Drak leader. Powerful magic and melee. Commands other Drak in combat.', weak: 'Ice, Fire' },
  { name: 'Hydrak\'Dal', faction: 'Drak (Boss)', biome: 'Veilwater Basin', level: '40+', drops: 'Hydrak\'Dal Trophy, Legendary Runes, Endgame Materials', desc: 'THE FINAL BOSS. Massive draconic deity of the Drak. Most difficult encounter in game. Multiple phases.', weak: 'Ice, Shock. Max fire resistance. Co-op recommended.' },
];

const shroud_entities_enemies = [
  { name: 'Wisp', faction: 'Shroud Entity', biome: 'Blackmire, deep Shroud', level: '10-20', drops: 'Shroud Spores, Shroud Liquid', desc: 'Floating light that splits into multiple hostile creatures when approached.', weak: 'Fire, Shock' },
  { name: 'Shroud Root', faction: 'Shroud Entity', biome: 'All Shroud areas', level: 'Varies', drops: 'Shroud Spores, Shroud Liquid, Skill Point', desc: 'Large pulsating growth in Shroud. Destroying it grants a skill point.', weak: 'Fire, Cutting' },
];

export const enemiesSubSections: SubSection[] = [
  {
    id: 'enemy-overview',
    title: 'Enemy Overview',
    icon: <Skull className="w-5 h-5" />,
    summary: 'Complete bestiary — 90+ enemies across 7 factions with locations, drops, and weaknesses.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">90+ enemies</strong> across 
          <strong className="text-[var(--text-primary)]"> 7 factions</strong>. Understanding enemy types, locations, and weaknesses is critical for survival.
        </p>

        <InfoBox title="The 7 Enemy Factions" type="info">
          <div className="grid grid-cols-2 gap-2">
            <div><strong className="text-purple-400">Fell</strong> — Shroud-corrupted creatures. Most common threat.</div>
            <div><strong className="text-orange-400">Scavengers</strong> — Corrupted human survivors using Elixir.</div>
            <div><strong className="text-green-400">Vukah</strong> — Ancient beastman civilization.</div>
            <div><strong className="text-blue-400">Hollow</strong> — Undead cursed by The Flame.</div>
            <div><strong className="text-yellow-400">Wildlife</strong> — Animals (passive and aggressive).</div>
            <div><strong className="text-red-400">Shroud Entities</strong> — Pure Shroud manifestations.</div>
            <div><strong className="text-teal-400">Drak</strong> — Reptilian invaders (Veilwater Basin).</div>
            <div><strong className="text-pink-400">Pets</strong> — 6 tameable cats and dogs (quest rewards).</div>
          </div>
        </InfoBox>

        <InfoBox title="Combat Tips by Enemy Type" type="tip">
          <strong>Flying:</strong> Use bows or magic. Ground attacks miss. | <strong>Large:</strong> Attack legs, dodge stomps. | 
          <strong>Armored:</strong> Blunt weapons bypass armor. | <strong>Fast:</strong> Time parries, use shield. |
          <strong>Poison:</strong> Antiseptic cures poison. | <strong>Aggressive packs:</strong> Separate enemies, fight 1v1.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Bosses (13 Total)</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 5</div>
            <div className="text-xs font-bold">Fell Thunderbrute</div>
            <div className="text-[9px] text-[var(--text-muted)]">Springlands — First Boss</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-green-400">
            <div className="text-[10px] text-green-400 font-bold">Lv 8</div>
            <div className="text-xs font-bold">Vukah Brawler</div>
            <div className="text-[9px] text-[var(--text-muted)]">Springlands/Low Meadows</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <div className="text-[10px] text-orange-400 font-bold">Lv 15</div>
            <div className="text-xs font-bold">Scavenger Matron</div>
            <div className="text-[9px] text-[var(--text-muted)]">Nomad Highlands</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 18</div>
            <div className="text-xs font-bold">Fell Critter Queen</div>
            <div className="text-[9px] text-[var(--text-muted)]">Nomad Highlands — Insect Queen</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-blue-400">
            <div className="text-[10px] text-blue-400 font-bold">Lv 20</div>
            <div className="text-xs font-bold">Hollow Cyclops</div>
            <div className="text-[9px] text-[var(--text-muted)]">Nomad Highlands Catacombs</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 20</div>
            <div className="text-xs font-bold">Fell Wispwyvern</div>
            <div className="text-[9px] text-[var(--text-muted)]">Pikemead's Reach</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 25</div>
            <div className="text-xs font-bold">Fell Monstrosity</div>
            <div className="text-[9px] text-[var(--text-muted)]">Nomad Highlands/Kindlewastes</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 25</div>
            <div className="text-xs font-bold">Fell Sicklescythe</div>
            <div className="text-[9px] text-[var(--text-muted)]">Kindlewastes</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-orange-400">
            <div className="text-[10px] text-orange-400 font-bold">Lv 25</div>
            <div className="text-xs font-bold">Scavenger Tyrant</div>
            <div className="text-[9px] text-[var(--text-muted)]">Rothstep</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 30</div>
            <div className="text-xs font-bold">Fell Cyclops</div>
            <div className="text-[9px] text-[var(--text-muted)]">Albaneve Summits — Frozen Caves</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-purple-400">
            <div className="text-[10px] text-purple-400 font-bold">Lv 30</div>
            <div className="text-xs font-bold">Fell Dragon Youngling</div>
            <div className="text-[9px] text-[var(--text-muted)]">Albaneve Summits — Howling Peak</div>
          </div>
          <div className="game-panel corner-decor p-3 border-l-2 border-teal-400">
            <div className="text-[10px] text-teal-400 font-bold">Lv 40+</div>
            <div className="text-xs font-bold">Hydrak'Dal</div>
            <div className="text-[9px] text-[var(--text-muted)]">Veilwater Basin — FINAL BOSS</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'fell-creatures',
    title: 'Fell Creatures',
    icon: <Bug className="w-5 h-5" />,
    summary: '17 Fell enemies — the Shroud-corrupted. From basic Footsoldiers to Dragon Youngling.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-purple-400">Fell</strong> are the most common enemy faction. Creatures and humans corrupted by the Shroud. 
          Found in every Shroud area and most of the open world.
        </p>
        <EnemyList items={fell_enemies} />
      </div>
    ),
  },
  {
    id: 'scavengers',
    title: 'Scavengers',
    icon: <Sword className="w-5 h-5" />,
    summary: '8 Scavenger types — Elixir-corrupted human survivors. Armed and dangerous.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong className="text-orange-400">Scavengers</strong> are human survivors who consumed the Elixir for power. 
          They use weapons, armor, and tactics. Found in settlements and camps across all regions.
        </p>
        <InfoBox title="Scavenger Tactics" type="warning">
          Scavengers use <strong>group tactics</strong> — ranged support berserkers while wolves flank. 
          Prioritize ranged enemies first, then deal with melee. Scalpers have high crit — kill fast.
        </InfoBox>
        <EnemyList items={scavengers_enemies} />
      </div>
    ),
  },
  {
    id: 'vukah',
    title: 'Vukah',
    icon: <Cat className="w-5 h-5" />,
    summary: '6 Vukah types — ancient beastmen of Embervale.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-green-400">Vukah</strong> are an ancient beastman civilization. They predate the Shroud and have 
          adapted to it. Found primarily in <strong>Revelwood</strong> and <strong>Blackmire</strong>.
        </p>
        <InfoBox title="Vukah Strategy" type="tip">
          Vukah are <strong>tough and aggressive</strong>. Brawlers have high stagger resistance. 
          Shamans cast magic — kill them first. Use fire for extra damage.
        </InfoBox>
        <EnemyList items={vukah_enemies} />
      </div>
    ),
  },
  {
    id: 'hollow',
    title: 'Hollow',
    icon: <Ghost className="w-5 h-5" />,
    summary: '9 Hollow enemies — undead cursed by The Flame. Found in cemeteries and Hollow Halls.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-blue-400">Hollow</strong> are undead beings cursed by The Flame. They inhabit 
          <strong> cemeteries, catacombs, and Hollow Halls</strong>. Drop Ectoplasm used for Bone Keys.
        </p>
        <InfoBox title="Hollow Halls" type="info">
          Hollow Halls are <strong>endgame dungeons</strong> requiring Bone Keys (crafted by The Collector). 
          Inside you'll find powerful Hollow enemies and legendary loot. Recommended: Level 25+ with full gear.
        </InfoBox>
        <EnemyList items={hollow_enemies} />
      </div>
    ),
  },
  {
    id: 'wildlife',
    title: 'Wildlife',
    icon: <Bird className="w-5 h-5" />,
    summary: '35+ wildlife creatures — passive/aggressive animals, pets, and Albaneve creatures.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong className="text-yellow-400">Wildlife</strong> includes both passive animals (food/skins) and aggressive predators. 
          Understanding which are tameable and which are threats is essential.
        </p>
        <InfoBox title="Tameable Animals" type="tip">
          Goats, Hophares, Fae Deer, and Capybaras are <strong>tameable</strong> using the Beastmaster skill. 
          Tamed animals become allies and can assist in combat.
        </InfoBox>
        <EnemyList items={wildlife_enemies} />
      </div>
    ),
  },
  {
    id: 'drak',
    title: 'The Drak',
    icon: <Diamond className="w-5 h-5" />,
    summary: '6 Drak enemies — reptilian invaders from Veilwater Basin. Newest faction.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          The <strong className="text-teal-400">Drak</strong> are a hateful reptilian species that arrived with the Veilwater Basin update. 
          Descended from Vesztah the Broodmother, they have returned to reclaim Embervale. Divided into 4 tribes with deep rivalries. 
          They believe only the strongest rise to Ark Morgo, their afterlife realm.
        </p>
        <InfoBox title="Drak Combat Tips" type="warning">
          Drak are <strong>highly resistant to fire and poison</strong>. Ice damage is most effective. 
          They often fight in groups with Shamans buffing warriors. Prioritize Shamans, then Brutes.
        </InfoBox>
        <InfoBox title="Hydrak'Dal — Final Boss" type="info">
          Hydrak'Dal is the <strong>endgame boss</strong> of Veilwater Basin (Level 40+). Multi-phase fight with devastating AoE attacks. 
          Max fire resistance essential. Co-op highly recommended. Drops endgame crafting materials.
        </InfoBox>
        <EnemyList items={drak_enemies} />
      </div>
    ),
  },
  {
    id: 'shroud-entities',
    title: 'Shroud Entities',
    icon: <AlertTriangle className="w-5 h-5" />,
    summary: '2 Shroud entities — pure manifestations of the corruption.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong className="text-red-400">Shroud Entities</strong> are pure manifestations of Shroud energy. 
          They represent the core threat of Embervale.
        </p>
        <EnemyList items={shroud_entities_enemies} />
      </div>
    ),
  },
];
