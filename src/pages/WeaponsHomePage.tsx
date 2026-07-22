import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate as useRouterNavigate } from 'react-router-dom';
import { usePage } from '../App';
import { ChevronRight, Home, Sword, Star } from 'lucide-react';
import PageLayout from './PageLayout';
import SubPageHero from '../components/SubPageHero';
import { allWeapons, weaponCategories } from '../data/weaponsDatabaseData';
import {
  WEAPON_CATEGORY_ICONS,
  WEAPON_CATEGORY_SUMMARIES,
  slugifyWeaponCat,
} from '../components/WeaponCard';

export default function WeaponsHomePage() {
  const { navigate } = usePage();
  const [searchParams] = useSearchParams();
  const routerNavigate = useRouterNavigate();

  // Deep-link support: /weaponsdb?q=<name> → jump to that weapon's category page
  useEffect(() => {
    const q = searchParams.get('q');
    if (!q) return;
    const needle = q.toLowerCase();
    const hit =
      allWeapons.find(w => w.name.toLowerCase() === needle) ||
      allWeapons.find(w => w.name.toLowerCase().includes(needle));
    if (hit) {
      routerNavigate(`/weaponsdb/${slugifyWeaponCat(hit.category)}?q=${encodeURIComponent(q)}`, { replace: true });
    }
  }, [searchParams, routerNavigate]);

  const stats = useMemo(() => {
    const legendary = allWeapons.filter(w => w.isLegendary).length;
    return {
      total: allWeapons.length,
      legendary,
      maxLevel: Math.max(...allWeapons.map(w => w.level)),
      categories: weaponCategories.length,
    };
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    weaponCategories.forEach(cat => {
      counts[cat] = allWeapons.filter(w => w.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <PageLayout
      title="Weapon Database"
      subtitle="Complete catalog of all weapons with full stats, perks, and drop locations"
      icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Weapon Database</span>
      </div>

      <SubPageHero images={[{ src: '/images/beginner/combat-boss.webp', caption: 'Every weapon in Embervale — from crude clubs to legendary greatswords.' }]} />

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">{stats.total} weapons</strong> across{' '}
          <strong className="text-[var(--text-primary)]">{stats.categories} categories</strong>. Each weapon scales with a core
          attribute — <strong className="text-red-400">STR</strong> for melee,{' '}
          <strong className="text-green-400">DEX</strong> for ranged, <strong className="text-blue-400">INT</strong> for magic.
          Legendary weapons carry named perks that can define your build. Pick a category below to browse its full list.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-red-400/10 text-red-400 border border-red-400/20">STR = Melee</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">DEX = Ranged</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">INT = Magic</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
            <Star className="w-2.5 h-2.5 inline" /> = Legendary
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Weapons</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-yellow-400">{stats.legendary}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Legendary</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">{stats.categories}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Categories</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">Lv.{stats.maxLevel}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Max Level</div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {weaponCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate('weaponsdb', slugifyWeaponCat(cat))}
            className="game-panel corner-decor p-5 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
                {WEAPON_CATEGORY_ICONS[cat]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-gold)] transition-colors">
                  {cat}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">{WEAPON_CATEGORY_SUMMARIES[cat]}</p>
                <p className="text-[10px] text-[var(--text-gold)] mt-1.5">{categoryCounts[cat]} weapons</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
