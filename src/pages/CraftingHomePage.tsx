import { useMemo } from 'react';
import { usePage } from '../App';
import {
  Wrench, ChevronRight, Home, Users, Hammer, Sword, Shield,
  FlaskConical, Apple, TreePine, MapPin
} from 'lucide-react';
import PageLayout from './PageLayout';
import SubsectionCards from '../components/SubsectionCards';
import { allCraftingItems, craftingCategories } from '../data/craftingDataUnified';
import type { CraftingEntry } from '../data/craftingDataUnified';
import { craftingSubSections } from '../data/craftingData';
import { craftingImages } from '../data/baseCraftingItemsImages';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'NPC Artisans': <Users className="w-4 h-4" />,
  'Crafting Stations': <Hammer className="w-4 h-4" />,
  'Weapon Recipes': <Sword className="w-4 h-4" />,
  'Armor Recipes': <Shield className="w-4 h-4" />,
  'Potion Recipes': <FlaskConical className="w-4 h-4" />,
  'Food Recipes': <Apple className="w-4 h-4" />,
  'Material Processing': <TreePine className="w-4 h-4" />,
};

const RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',    border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',   border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',    border: 'border-blue-500/30' },
  Epic:      { dot: 'bg-purple-400',  name: 'text-purple-400',  border: 'border-purple-500/30' },
  Legendary: { dot: 'bg-yellow-400',  name: 'text-yellow-400',  border: 'border-yellow-500/30' },
  Essential: { dot: 'bg-red-400',     name: 'text-red-400',     border: 'border-red-500/30' },
  High:      { dot: 'bg-orange-400',  name: 'text-orange-400',  border: 'border-orange-500/30' },
  Low:       { dot: 'bg-gray-500',    name: 'text-gray-400',    border: 'border-gray-600/30' },
  Event:     { dot: 'bg-pink-400',    name: 'text-pink-400',    border: 'border-pink-500/30' },
};

export function CraftingCard({ item }: { item: CraftingEntry }) {
  const rc = RARITY_COLORS[item.rarity] || RARITY_COLORS['Common'];
  return (
    <div className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${rc.border}`}>
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-cinzel text-xs font-bold truncate ${rc.name}`}>
            {item.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${rc.dot}`} />
            <span className={`text-[9px] ${rc.name}`}>{item.rarity}</span>
          </div>
        </div>

        {/* Type & Category */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-[var(--bg-secondary)] text-[var(--text-gold)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)]">
            {item.type}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            {CATEGORY_ICONS[item.category]} {item.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-2">
        {item.desc && (
          <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed mb-2 line-clamp-3">
            {item.desc}
          </p>
        )}

        {/* Materials */}
        {item.materials && (
          <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)] mb-1">
            <span className="text-[var(--text-muted)]">Materials: </span>
            <span className="text-[var(--text-secondary)]">{item.materials}</span>
          </div>
        )}

        {/* Source */}
        {item.source && (
          <div className="text-[10px] pt-1">
            <span className="text-[var(--text-muted)]"><MapPin className="w-3 h-3 inline" /></span>
            <span className="text-[var(--text-secondary)] ml-1">{item.source}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CraftingHomePage() {
  const { navigate } = usePage();
  const stats = useMemo(() => {
    const essentialCount = allCraftingItems.filter(p => p.rarity === 'Essential').length;
    const rareCount = allCraftingItems.filter(p => ['Rare', 'Epic', 'Legendary'].includes(p.rarity)).length;
    const catCounts: Record<string, number> = {};
    craftingCategories.forEach(cat => {
      catCounts[cat] = allCraftingItems.filter(p => p.category === cat).length;
    });
    return {
      total: allCraftingItems.length,
      essential: essentialCount,
      rare: rareCount,
      categories: craftingCategories.length,
      catCounts,
    };
  }, []);


  return (
    <PageLayout
      title="Crafting & Recipes"
      subtitle="Complete crafting guide with 120+ recipes, 29 stations, and 9 NPC artisans across 7 categories"
      icon={<Wrench className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Crafting & Recipes</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">9 NPC artisans</strong> that must be rescued,{' '}
          <strong className="text-[var(--text-primary)]">29 crafting stations</strong>, and{' '}
          <strong className="text-[var(--text-primary)]">120+ recipes</strong> across weapons, armor, potions, food, and materials. 
          Our database covers everything sourced from 5 community wikis.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">Essential = Priority</span>
          <span className="px-2 py-1 rounded bg-gray-400/10 text-gray-400 border border-gray-400/20">Common = Basic</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Uncommon = Special</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">Rare = Valuable</span>
          <span className="px-2 py-1 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20">Epic = Powerful</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Legendary = Unique</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Recipes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-red-400">{stats.essential}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Essential</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">{stats.rare}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Rare+</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.categories}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Categories</div>
        </div>
      </div>

      {/* Crafting guide pages */}
      <SubsectionCards
        page="crafting"
        sections={craftingSubSections}
        images={craftingImages}
        heading="Crafting Guides"
      />
    </PageLayout>
  );
}
