import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePage } from '../App';
import { Shield, ChevronRight, Home, ArrowUp } from 'lucide-react';
import PageLayout from './PageLayout';
import ArmorPieceCard, { SLOT_ICONS, SLOT_SUMMARIES, slugifySlot } from '../components/ArmorPieceCard';
import { allArmorPieces, armorPieceCategories } from '../data/armorPiecesData';

const slotFromSlug = (slug?: string) =>
  slug ? armorPieceCategories.find(c => slugifySlot(c) === slug) : undefined;

function SubNav({ activeSlot, onNavigate }: { activeSlot: string; onNavigate: (slot: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {armorPieceCategories.map((s) => (
          <button
            key={s}
            onClick={() => onNavigate(s)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeSlot === s
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            {SLOT_ICONS[s]}
            <span>{s}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function ArmorPiecesSubPage({ subId }: { subId: string }) {
  const { navigate } = usePage();
  const [searchParams] = useSearchParams();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slot = slotFromSlug(subId);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const query = (searchParams.get('q') ?? '').toLowerCase();

  const pieces = useMemo(() => {
    if (!slot) return [];
    let list = allArmorPieces.filter(p => p.slot === slot);
    if (query) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.effect.toLowerCase().includes(query) ||
        (p.setName && p.setName.toLowerCase().includes(query))
      );
    }
    return [...list].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
  }, [slot, query]);

  if (!slot) {
    return (
      <PageLayout title="Not Found" subtitle="" icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This armor slot could not be found.</p>
          <button onClick={() => navigate('armor-pieces')} className="game-btn px-4 py-2 text-xs">Back to Armor Pieces</button>
        </div>
      </PageLayout>
    );
  }

  const idx = armorPieceCategories.indexOf(slot);
  const prev = idx > 0 ? armorPieceCategories[idx - 1] : null;
  const nextSlot = idx < armorPieceCategories.length - 1 ? armorPieceCategories[idx + 1] : null;
  const totalInSlot = allArmorPieces.filter(p => p.slot === slot).length;

  return (
    <PageLayout title={`${slot} Armor`} subtitle="Armor Pieces" icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}>
      <SubNav activeSlot={slot} onNavigate={(s) => navigate('armor-pieces', slugifySlot(s))} />
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" /><span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('armor-pieces')} className="hover:text-[var(--text-gold)] transition-colors">Armor Pieces</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-gold)]">{slot}</span>
        </div>

        {/* Slot heading */}
        <div className="game-panel corner-decor p-5 mb-5">
          <h2 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-1">
            {slot} Armor in Enshrouded
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            {SLOT_SUMMARIES[slot]}. All {totalInSlot} {slot.toLowerCase()} pieces with armor values, bonus effects, rarities, and set information.
          </p>
        </div>

        {query && (
          <div className="text-[10px] text-[var(--text-muted)] mb-4">
            Showing {pieces.length} of {totalInSlot} {slot.toLowerCase()} pieces matching "{searchParams.get('q')}"
          </div>
        )}

        {/* Pieces grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pieces.map(piece => (
            <ArmorPieceCard key={piece.name} piece={piece} />
          ))}
        </div>

        {pieces.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm">No armor pieces found in this slot.</p>
          </div>
        )}

        {/* Prev / Next */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => navigate('armor-pieces', slugifySlot(prev))} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev}</span>
                </div>
              </button>
            ) : <div />}
            {nextSlot ? (
              <button onClick={() => navigate('armor-pieces', slugifySlot(nextSlot))} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{nextSlot}</span>
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
