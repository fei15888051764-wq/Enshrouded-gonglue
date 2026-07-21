import weaponsJson from './weapons.json';

export interface WeaponEntry {
  name: string;
  category: string;
  level: number;
  rarity: 'Common' | 'Uncommon' | 'Rare';
  isLegendary: boolean;
  damage: number;
  damageType: string;
  attackSpeed: string;
  parryPower: number;
  scaling: 'STR' | 'DEX' | 'INT';
  description: string;
  perks: string[];
  location: string;
}

// Cast the JSON data to our type
const allWeapons = weaponsJson as WeaponEntry[];

export const weaponCategories = [
  'Daggers',
  'One-handed Swords',
  'One-handed Axes',
  'One-handed Clubs',
  'Two-handed Greatswords',
  'Two-handed Axes',
  'Two-handed Hammers',
  'Two-handed Clubs',
  'Bows',
  'Throwing Weapons',
  'Wands',
  'Staves',
];

export { allWeapons };
