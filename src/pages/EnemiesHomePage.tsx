import { useMemo } from 'react';
import { usePage } from '../App';
import {
  Skull, ChevronRight, Home, MapPin
} from 'lucide-react';
import PageLayout from './PageLayout';
import SubsectionCards from '../components/SubsectionCards';
import { allEnemies, enemyCategories, FACTION_COLORS } from '../data/enemiesDataUnified';
import type { EnemyEntry } from '../data/enemiesDataUnified';
import { enemiesSubSections } from '../data/enemiesData';
import { enemiesImages } from '../data/bossesEnemiesImages';

export function EnemyCard({ enemy }: { enemy: EnemyEntry }) {
  const fc = FACTION_COLORS[enemy.faction] || 'text-gray-400';
  const isPassive = enemy.type === 'Passive';
  return (
    <div className={`game-panel corner-decor transition-all hover:border-[var(--border-gold-light)] group ${isPassive ? 'border-green-500/20' : ''}`}>
      <div className="p-4">
        {/* Name & Level */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors truncate">
            {enemy.name}
          </h3>
          <span className="text-[10px] text-[var(--text-muted)] flex-shrink-0 ml-2">Lv.{enemy.level}</span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`bg-[var(--bg-secondary)] px-2 py-0.5 rounded text-[10px] font-cinzel font-bold border border-[var(--border-gold-dim)] ${fc}`}>
            {enemy.faction}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
            isPassive ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'
          }`}>
            {isPassive ? 'Passive' : enemy.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed mb-2 line-clamp-2">
          {enemy.desc}
        </p>

        {/* Drops & Weakness */}
        <div className="text-[10px] pt-2 border-t border-[var(--border-gold-dim)] space-y-1">
          <div>
            <span className="text-[var(--accent-green)]">Drops: </span>
            <span className="text-[var(--text-muted)]">{enemy.drops}</span>
          </div>
          {enemy.weak && enemy.weak !== 'N/A' && (
            <div>
              <span className="text-red-400">Weak: </span>
              <span className="text-[var(--text-muted)]">{enemy.weak}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-[var(--text-muted)]">
            <MapPin className="w-3 h-3" />
            <span>{enemy.biome}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnemiesHomePage() {
  const { navigate } = usePage();
  const stats = useMemo(() => {
    const factionCount = new Set(allEnemies.map(e => e.faction)).size;
    const aggressiveCount = allEnemies.filter(e => e.type !== 'Passive').length;
    const passiveCount = allEnemies.filter(e => e.type === 'Passive').length;
    const catCounts: Record<string, number> = {};
    enemyCategories.forEach(cat => {
      catCounts[cat] = allEnemies.filter(e => e.category === cat).length;
    });
    return {
      total: allEnemies.length,
      factions: factionCount,
      aggressive: aggressiveCount,
      passive: passiveCount,
      catCounts,
    };
  }, []);


  return (
    <PageLayout
      title="Enemies & Creatures"
      subtitle="Complete bestiary of 75+ enemies across 7 factions — all creatures, drops, and weaknesses"
      icon={<Skull className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" /><span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Enemies & Creatures</span>
      </div>

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Embervale is home to <strong className="text-[var(--text-primary)]">7 hostile factions</strong> and dozens of creature types. 
          From the Shroud-corrupted <strong className="text-purple-400">Fell</strong> to the reptilian <strong className="text-teal-400">Drak</strong> of Veilwater Basin, 
          each enemy has unique weaknesses and drop tables. Pick a faction below to browse its creatures, drops, and weaknesses. 
          <strong className="text-green-400"> Passive</strong> creatures are highlighted in green.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20">Fell</span>
          <span className="px-2 py-1 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">Scavenger</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Vukah</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">Hollow</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Wildlife</span>
          <span className="px-2 py-1 rounded bg-teal-400/10 text-teal-400 border border-teal-400/20">Drak</span>
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">Shroud Entity</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Creatures</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">{stats.factions}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Factions</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-red-400">{stats.aggressive}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Aggressive</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">{stats.passive}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Passive</div>
        </div>
      </div>

      {/* Faction guide pages */}
      <SubsectionCards
        page="enemies"
        sections={enemiesSubSections}
        images={enemiesImages}
        heading="Faction Guides"
      />
    </PageLayout>
  );
}
