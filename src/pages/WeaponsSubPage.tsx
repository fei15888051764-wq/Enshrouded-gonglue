import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePage } from '../App';
import { Sword, ChevronRight, Home, ArrowUp } from 'lucide-react';
import PageLayout from './PageLayout';
import WeaponCard, {
  WEAPON_CATEGORY_ICONS,
  WEAPON_CATEGORY_SUMMARIES,
  slugifyWeaponCat,
} from '../components/WeaponCard';
import { allWeapons, weaponCategories } from '../data/weaponsDatabaseData';

const catFromSlug = (slug?: string) =>
  slug ? weaponCategories.find(c => slugifyWeaponCat(c) === slug) : undefined;

function SubNav({ activeCat, onNavigate }: { activeCat: string; onNavigate: (cat: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {weaponCategories.map((c) => (
          <button
            key={c}
            onClick={() => onNavigate(c)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeCat === c
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            {WEAPON_CATEGORY_ICONS[c]}
            <span>{c}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function WeaponsSubPage({ subId }: { subId: string }) {
  const { navigate } = usePage();
  const [searchParams] = useSearchParams();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const category = catFromSlug(subId);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const query = (searchParams.get('q') ?? '').toLowerCase();

  const weapons = useMemo(() => {
    if (!category) return [];
    let list = allWeapons.filter(w => w.category === category);
    if (query) {
      list = list.filter(w =>
        w.name.toLowerCase().includes(query) ||
        w.location.toLowerCase().includes(query)
      );
    }
    return [...list].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
  }, [category, query]);

  if (!category) {
    return (
      <PageLayout title="Not Found" subtitle="" icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This weapon category could not be found.</p>
          <button onClick={() => navigate('weaponsdb')} className="game-btn px-4 py-2 text-xs">Back to Weapon Database</button>
        </div>
      </PageLayout>
    );
  }

  const idx = weaponCategories.indexOf(category);
  const prev = idx > 0 ? weaponCategories[idx - 1] : null;
  const nextCat = idx < weaponCategories.length - 1 ? weaponCategories[idx + 1] : null;
  const totalInCat = allWeapons.filter(w => w.category === category).length;

  return (
    <PageLayout title={category} subtitle="Weapon Database" icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}>
      <SubNav activeCat={category} onNavigate={(c) => navigate('weaponsdb', slugifyWeaponCat(c))} />
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" /><span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('weaponsdb')} className="hover:text-[var(--text-gold)] transition-colors">Weapons</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-gold)]">{category}</span>
        </div>

        {/* Category heading */}
        <div className="game-panel corner-decor p-5 mb-5">
          <h2 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-1">
            {category} in Enshrouded
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            {WEAPON_CATEGORY_SUMMARIES[category]}. All {totalInCat} {category.toLowerCase()} with full stats, attribute scaling, attack speed, and exact drop locations.
          </p>
        </div>

        {query && (
          <div className="text-[10px] text-[var(--text-muted)] mb-4">
            Showing {weapons.length} of {totalInCat} {category.toLowerCase()} matching "{searchParams.get('q')}"
          </div>
        )}

        {/* Weapons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {weapons.map(weapon => (
            <WeaponCard key={weapon.name} weapon={weapon} />
          ))}
        </div>

        {weapons.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <Sword className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm">No weapons found in this category.</p>
          </div>
        )}

        {/* Prev / Next */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => navigate('weaponsdb', slugifyWeaponCat(prev))} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev}</span>
                </div>
              </button>
            ) : <div />}
            {nextCat ? (
              <button onClick={() => navigate('weaponsdb', slugifyWeaponCat(nextCat))} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{nextCat}</span>
                  <ChevronRight className="w-3 h-3 text-[var(--text-gold)]" />
                </div>
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--bg-panel)] border border-[var(--border-gold)]/30 flex items-center justify-center text-[var(--text-gold)] shadow-lg transition-all duration-300 hover:bg-[var(--border-gold)]/20 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`} aria-label="Back to top">
        <ArrowUp className="w-5 h-5" />
      </button>
    </PageLayout>
  );
}
