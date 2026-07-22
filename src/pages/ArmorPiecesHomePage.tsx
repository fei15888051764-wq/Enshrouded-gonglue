import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate as useRouterNavigate } from 'react-router-dom';
import { usePage } from '../App';
import { ChevronRight, Home, Shield } from 'lucide-react';
import PageLayout from './PageLayout';
import SubPageHero from '../components/SubPageHero';
import { allArmorPieces, armorPieceCategories } from '../data/armorPiecesData';
import { SLOT_ICONS, SLOT_SUMMARIES, slugifySlot } from '../components/ArmorPieceCard';

export default function ArmorPiecesHomePage() {
  const { navigate } = usePage();
  const [searchParams] = useSearchParams();
  const routerNavigate = useRouterNavigate();

  // Deep-link support: /armor-pieces?q=<name> → jump to that piece's slot page
  useEffect(() => {
    const q = searchParams.get('q');
    if (!q) return;
    const needle = q.toLowerCase();
    const hit =
      allArmorPieces.find(p => p.name.toLowerCase() === needle) ||
      allArmorPieces.find(p => p.name.toLowerCase().includes(needle));
    if (hit) {
      routerNavigate(`/armor-pieces/${slugifySlot(hit.slot)}?q=${encodeURIComponent(q)}`, { replace: true });
    }
  }, [searchParams, routerNavigate]);

  const stats = useMemo(() => {
    const rareCount = allArmorPieces.filter(p => p.rarity === 'Rare').length;
    const slotCounts: Record<string, number> = {};
    armorPieceCategories.forEach(cat => {
      slotCounts[cat] = allArmorPieces.filter(p => p.slot === cat).length;
    });
    return {
      total: allArmorPieces.length,
      rare: rareCount,
      slots: armorPieceCategories.length,
      maxLevel: Math.max(...allArmorPieces.map(p => p.level)),
      slotCounts,
    };
  }, []);

  return (
    <PageLayout
      title="Armor Pieces"
      subtitle="Complete catalog of individual armor pieces — helmets, chests, gloves, legs, and boots with full stats"
      icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Armor Pieces</span>
      </div>

      <SubPageHero images={[{ src: '/images/beginner/character-customize.webp', caption: 'Every armor piece in the game — mix and match to forge your perfect build.' }]} />

      {/* Overview */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">{stats.total} individual armor pieces</strong> across{' '}
          <strong className="text-[var(--text-primary)]">5 equipment slots</strong>. Each piece provides{' '}
          <strong className="text-[var(--text-primary)]">Physical Armor</strong> and{' '}
          <strong className="text-[var(--text-primary)]">Magical Armor</strong>, plus unique stat effects.
          Mix and match pieces from different sets to create your optimal build. Pick a slot below to browse its full list.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-gray-400/10 text-gray-400 border border-gray-400/20">Common = Starter</span>
          <span className="px-2 py-1 rounded bg-green-400/10 text-green-400 border border-green-400/20">Uncommon = Mid-Tier</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">Rare = Best-in-Slot</span>
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Mix & Match for Builds</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.total}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Pieces</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">{stats.rare}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Rare</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stats.slots}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Categories</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-green-400">Lv.{stats.maxLevel}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Max Level</div>
        </div>
      </div>

      {/* Slot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {armorPieceCategories.map((slot) => (
          <button
            key={slot}
            onClick={() => navigate('armor-pieces', slugifySlot(slot))}
            className="game-panel corner-decor p-5 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
                {SLOT_ICONS[slot]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-gold)] transition-colors">
                  {slot}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">{SLOT_SUMMARIES[slot]}</p>
                <p className="text-[10px] text-[var(--text-gold)] mt-1.5">{stats.slotCounts[slot]} pieces</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
