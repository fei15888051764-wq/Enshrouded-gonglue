import {
  Flame, Gamepad2, Compass, Swords, CloudFog,
  Home, Wrench, MapPin, GitBranch, Utensils,
  Backpack, Zap, AlertTriangle, Users, Sun,
  CloudRain, Tractor, Hammer, Settings, Camera
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

export const beginnerSubSections: SubSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Character creation, Cinder Vault tutorial, and key game statistics.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'basic-controls',
    title: 'Controls',
    icon: <Gamepad2 className="w-5 h-5" />,
    summary: 'Complete keybinds for movement, combat, menus, and interaction.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'first-hour',
    title: 'Your First Hour',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Step-by-step walkthrough of your first hour in Embervale.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'combat',
    title: 'Combat Basics',
    icon: <Swords className="w-5 h-5" />,
    summary: 'Attacking, dodging, parrying, stamina management, and weapon types.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'shroud',
    title: 'The Shroud',
    icon: <CloudFog className="w-5 h-5" />,
    summary: 'Timer mechanics, Shroud types, extending time, and why enter.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'base-building',
    title: 'Base Building',
    icon: <Home className="w-5 h-5" />,
    summary: 'Flame Altar, strengthening the Flame, and building system.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'crafting',
    title: 'Crafting',
    icon: <Wrench className="w-5 h-5" />,
    summary: 'Essential crafting stations and resource gathering guide.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'traversal',
    title: 'Traversal',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'Glider, Grappling Hook, Double Jump, and essential skills.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'skills',
    title: 'Skill Trees',
    icon: <GitBranch className="w-5 h-5" />,
    summary: '12 archetypes, attributes, and recommended first skills.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'food',
    title: 'Food & Buffs',
    icon: <Utensils className="w-5 h-5" />,
    summary: '8 food categories, buff system, and early game setup.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'gear',
    title: 'Gear & Repair',
    icon: <Backpack className="w-5 h-5" />,
    summary: 'Durability, repair methods, upgrades, and inventory tips.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'fast-travel',
    title: 'Fast Travel',
    icon: <Zap className="w-5 h-5" />,
    summary: 'Ancient Spires, Flame Altars, and death mechanics.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'mistakes',
    title: 'Tips & Mistakes',
    icon: <AlertTriangle className="w-5 h-5" />,
    summary: 'Common mistakes to avoid and pro tips for efficiency.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer',
    icon: <Users className="w-5 h-5" />,
    summary: '16-player co-op, hosting, joining, and team strategies.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'day-night',
    title: 'Day & Night',
    icon: <Sun className="w-5 h-5" />,
    summary: 'Day/night differences, sleeping, and nighttime survival.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'weather',
    title: 'Weather',
    icon: <CloudRain className="w-5 h-5" />,
    summary: 'Dynamic weather types and their effects on gameplay.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'farming',
    title: 'Farming',
    icon: <Tractor className="w-5 h-5" />,
    summary: 'Crops, seeds, harvesting, and animal husbandry.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'advanced-building',
    title: 'Adv. Building',
    icon: <Hammer className="w-5 h-5" />,
    summary: 'Terrain sculpting, material tiers, and pro techniques.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'difficulty',
    title: 'Difficulty',
    icon: <Settings className="w-5 h-5" />,
    summary: '4 presets and custom server settings for any playstyle.',
    content: null as unknown as ReactNode,
  },
  {
    id: 'photo-mode',
    title: 'Photo Mode',
    icon: <Camera className="w-5 h-5" />,
    summary: 'F10 activation, camera controls, filters, and best spots.',
    content: null as unknown as ReactNode,
  },
];
