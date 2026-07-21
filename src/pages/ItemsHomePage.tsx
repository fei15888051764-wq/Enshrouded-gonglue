import { useState, useMemo } from 'react';
import { usePage } from '../App';
import {
  Package, ChevronRight, Home, Pickaxe, TreePine, Shield,
  FlaskConical, Apple, Skull, Hammer, MapPin
} from 'lucide-react';
import PageLayout from './PageLayout';
import SubsectionCards from '../components/SubsectionCards';
import { allItems, itemCategories } from '../data/itemsDataUnified';
import type { ItemEntry } from '../data/itemsDataUnified';
import { itemsSubSections } from '../data/itemsData';
import { itemsImages } from '../data/baseCraftingItemsImages';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Ores & Metals': <Pickaxe className="w-4 h-4" />,
  'Wood & Fibers': <TreePine className="w-4 h-4" />,
  'Fabrics & Leather': <Shield className="w-4 h-4" />,
  'Shroud & Alchemy': <FlaskConical className="w-4 h-4" />,
  'Food & Ingredients': <Apple className="w-4 h-4" />,
  'Boss & Legendary': <Skull className="w-4 h-4" />,
  'Building & Crafting': <Hammer className="w-4 h-4" />,
};

const RARITY_COLORS: Record<string, { dot: string; name: string; border: string }> = {
  Common:    { dot: 'bg-gray-400',    name: 'text-gray-300',            border: 'border-gray-500/30' },
  Uncommon:  { dot: 'bg-green-400',   name: 'text-green-400',           border: 'border-green-500/30' },
  Rare:      { dot: 'bg-blue-400',    name: 'text-blue-400',            border: 'border-blue-500/30' },
  Epic:      { dot: 'bg-purple-400',  name: 'text-purple-400',          border: 'border-purple-500/30' },
  Legendary: { dot: 'bg-yellow-400',  name: 'text-yellow-400',          border: 'border-yellow-500/30' },
  Collectible: { dot: 'bg-pink-400',  name: 'text-pink-400',          border: 'border-pink-500/30' },
};

function ItemCard({ item }: { item: ItemEntry }) {
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

        {/* Source */}
        {item.source && (
          <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)]">
            <span className="text-[var(--text-muted)]"><MapPin className="w-3 h-3 inline" /></span>
            <span className="text-[var(--text-secondary)] ml-1">{item.source}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ItemsHomePage() {
  const { navigate } = usePage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = useMemo(() => {
    const uncommonCount = allItems.filter(p => p.rarity === 'Uncommon').length;
    const rareCount = allItems.filter(p => p.rarity === 'Rare').length;
    const epicCount = allItems.filter(p => p.rarity === 'Epic').length;
    const legendaryCount = allItems.filter(p => p.rarity === 'Legendary').length;
    const catCounts: Record<string, number> = {};
    itemCategories.forEach(cat => {
      catCounts[cat] = allItems.filter(p => p.category === cat).length;
    });
    return {
      total: allItems.length,
      uncommon: uncommonCount,
      rare: rareCount + epicCount + legendaryCount,
      categories: itemCategories.length,
      catCounts,
    };
  }, []);

  const filteredItems = useMemo(() => {
    let filtered = allItems;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return [...filtered].sort((a, b) => {
      if (activeCategory === 'All') {
        const catOrder: string[] = [...itemCategories];
        const catDiff = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
        if (catDiff !== 0) return catDiff;
      }
      return a.name.localeCompare(b.name);
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageLayout
      title="Items & Materials"
      subtitle="Complete catalog of 291 crafting materials, resources, and items across 7 categories"
      icon={<Package className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Items & Materials</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">292 total crafting materials</strong> across{' '}
          <strong className="text-[var(--text-primary)]">6 source biomes</strong>. Our database covers{' '}
          <strong className="text-[var(--text-gold)]">{stats.total} materials</strong> sourced from 5 community wikis — everything you need for crafting weapons, armor, food, and buildings.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
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
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Items</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">{stats.uncommon}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Uncommon</div>
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

      {/* Material guide pages */}
      <SubsectionCards
        page="items"
        sections={itemsSubSections}
        images={itemsImages}
        heading="Material Guides"
      />

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search items by name, type, description, or category..."
          className="w-full bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] rounded-sm px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-gold)]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border ${
            activeCategory === 'All'
              ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
          }`}
        >
          All ({stats.total})
        </button>
        {itemCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-sm text-[10px] font-cinzel font-bold uppercase tracking-wider transition-colors border flex items-center gap-1 ${
              activeCategory === cat
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border-[var(--text-gold)]/30'
                : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-gold-dim)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
            }`}
          >
            {CATEGORY_ICONS[cat]} {cat} ({stats.catCounts[cat]})
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="text-[10px] text-[var(--text-muted)] mb-4">
        Showing {filteredItems.length} of {stats.total} items
        {activeCategory !== 'All' && ` in ${activeCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredItems.map(item => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Package className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-sm">No items found matching your filters.</p>
        </div>
      )}
    </PageLayout>
  );
}
