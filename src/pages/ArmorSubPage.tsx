import { useState, useEffect } from 'react';
import { usePage } from '../App';
import {
  Shield, ChevronRight, Home, ArrowUp, Star, ChevronDown, ChevronUp, MapPin, Puzzle
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allArmor, armorSubSections, TIER_COLORS, TYPE_COLORS } from '../data/armorData';
import SectionGallery from '../components/SectionGallery';
import SubPageHero from '../components/SubPageHero';
import { armorTierImages } from '../data/tipsUpdatesTroubleArmorImages';

interface ArmorSubPageProps {
  subId: string;
}

function SubNav({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {allArmor.map((a) => (
          <button
            key={a.id}
            onClick={() => onNavigate(a.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeId === a.id
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            <span>{a.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function SectionToggle({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="game-panel corner-decor p-5 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full group"
      >
        <h3 className="font-cinzel text-xs font-bold text-[var(--text-primary)] tracking-wider uppercase group-hover:text-[var(--text-gold)] transition-colors">
          {title}
        </h3>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors" />
        )}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function ArmorSubPage({ subId }: ArmorSubPageProps) {
  const { navigate } = usePage();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => { navigate('armor', id); };
  const armor = allArmor.find((a) => a.id === subId);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!armor) {
    return (
      <PageLayout title="Armor Not Found" subtitle="" icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This armor set could not be found.</p>
          <button onClick={() => navigate('armor')} className="game-btn px-4 py-2 text-xs">Back to Armor</button>
        </div>
      </PageLayout>
    );
  }

  const idx = allArmor.findIndex((a) => a.id === subId);
  const prev = idx > 0 ? allArmor[idx - 1] : null;
  const next = idx < allArmor.length - 1 ? allArmor[idx + 1] : null;
  const section = armorSubSections.find((s) => s.armor.some((a) => a.id === armor.id));

  // Parse stat bonus for display
  const statBonuses = armor.statBonus.split(', ').filter(s => s.trim());

  return (
    <PageLayout title={armor.name} subtitle={`${armor.playstyle} · ${armor.tier}-Tier · Lv.${armor.level}`} icon={<>{armor.icon}</>}>
      <SubNav activeId={subId} onNavigate={handleNav} />
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" /><span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('armor')} className="hover:text-[var(--text-gold)] transition-colors">Armor</button>
          <ChevronRight className="w-3 h-3" />
          {section && (
            <>
              <span className="hover:text-[var(--text-gold)] transition-colors cursor-pointer">{section.title}</span>
              <ChevronRight className="w-3 h-3" />
            </>
          )}
          <span className="text-[var(--text-gold)]">{armor.name}</span>
        </div>

        <SubPageHero images={armorTierImages[armor.tier]} />
        <div className="max-w-4xl">
          {/* Armor Header */}
          <div className="game-panel corner-decor p-6 mb-6">
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] flex-shrink-0">
                {armor.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">{armor.name}</h2>
                  <span className={`text-xs font-bold ${TIER_COLORS[armor.tier]} bg-[var(--bg-secondary)] px-2 py-0.5 rounded border border-[var(--border-gold)]/20`}>
                    {armor.tier}-Tier
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${TYPE_COLORS[armor.type]}`}>
                    {armor.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[var(--text-muted)]">
                  <span><strong className="text-[var(--text-primary)]">Level:</strong> {armor.level}</span>
                  <span><strong className="text-[var(--text-primary)]">Physical DEF:</strong> {armor.defense}</span>
                  <span><strong className="text-[var(--text-primary)]">Magical DEF:</strong> {armor.mdefense}</span>
                  <span><strong className="text-[var(--text-primary)]">Playstyle:</strong> {armor.playstyle}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{armor.description}</p>
          </div>

          {/* Defense Stats */}
          <SectionToggle title="Defense Stats" defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="game-panel corner-decor p-4 text-center">
                <div className="text-2xl font-cinzel font-bold text-red-400">{armor.defense}</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Physical Defense</div>
              </div>
              <div className="game-panel corner-decor p-4 text-center">
                <div className="text-2xl font-cinzel font-bold text-blue-400">{armor.mdefense}</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Magical Defense</div>
              </div>
              <div className="game-panel corner-decor p-4 text-center">
                <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{armor.defense + armor.mdefense}</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Total Defense</div>
              </div>
              <div className="game-panel corner-decor p-4 text-center">
                <div className="text-2xl font-cinzel font-bold text-purple-400">{armor.level}</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Req. Level</div>
              </div>
            </div>
          </SectionToggle>

          {/* Set Pieces */}
          <SectionToggle title="Set Composition" defaultOpen={true}>
            <p className="text-[10px] text-[var(--text-muted)] mb-3">This armor set consists of the following pieces.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {armor.pieces?.map((piece) => (
                <div key={piece} className="flex items-center gap-2 bg-[var(--bg-secondary)]/30 border border-[var(--border-gold)]/10 rounded-lg p-3">
                  <Puzzle className="w-3.5 h-3.5 text-[var(--text-gold)] flex-shrink-0" />
                  <span className="text-[11px] text-[var(--text-secondary)] font-medium">{piece}</span>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Stat Bonuses */}
          <SectionToggle title="Stat Bonuses" defaultOpen={true}>
            <p className="text-[10px] text-[var(--text-muted)] mb-3">Individual piece bonuses when wearing the full set.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {statBonuses.map((bonus) => (
                <div key={bonus} className="flex items-start gap-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-gold)]/10 rounded-lg p-3">
                  <Star className="w-3.5 h-3.5 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{bonus}</span>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Set Bonus */}
          {armor.setBonus && (
            <SectionToggle title="Set Bonus Effect" defaultOpen={true}>
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{armor.setBonus}</p>
                </div>
              </div>
            </SectionToggle>
          )}

          {/* Location */}
          <SectionToggle title="How to Obtain" defaultOpen={true}>
            <div className="flex items-start gap-3 bg-[var(--bg-secondary)]/30 border border-[var(--border-gold)]/10 rounded-lg p-4">
              <MapPin className="w-5 h-5 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)] mb-1">Location</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{armor.location}</p>
              </div>
            </div>
          </SectionToggle>

          {/* Playstyle */}
          <SectionToggle title="Recommended Playstyle" defaultOpen={true}>
            <div className="bg-[var(--bg-secondary)]/50 border border-[var(--border-gold)]/10 rounded-lg p-4">
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{armor.playstyle}</p>
            </div>
          </SectionToggle>

          {/* Tier Comparison */}
          <SectionToggle title="Tier Context" defaultOpen={false}>
            <div className="text-[10px] text-[var(--text-muted)] space-y-2">
              <p>
                <strong className={TIER_COLORS[armor.tier]}>{armor.tier}-Tier</strong> armor is 
                {armor.tier === 'S' && ' considered best-in-slot for its role. Meta-defining performance that excels in all content.'}
                {armor.tier === 'A' && ' a strong specialist set. Excellent in its intended role but may be outperformed by S-Tier in specific scenarios.'}
                {armor.tier === 'B' && ' a solid mid-game option. Good performance but generally outclassed by higher tier sets in the same role.'}
                {armor.tier === 'C' && ' early game or starter armor. Use as a stepping stone — replace with B-Tier or higher as soon as possible.'}
              </p>
              <p>
                This armor is best suited for <strong className="text-[var(--text-primary)]">{armor.playstyle}</strong> builds.
                The armor provides a total defense rating of <strong className="text-[var(--text-primary)]">{armor.defense + armor.mdefense}</strong> at level {armor.level}.
              </p>
            </div>
          </SectionToggle>

          <SectionGallery images={armorTierImages[armor.tier]} skipFirst />
        </div>

        {/* Navigation */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => handleNav(prev.id)} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous Armor</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev.name}</span>
                </div>
              </button>
            ) : <div />}
            {next ? (
              <button onClick={() => handleNav(next.id)} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next Armor</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{next.name}</span>
                  <ChevronRight className="w-3 h-3 text-[var(--text-gold)]" />
                </div>
              </button>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--bg-panel)] border border-[var(--border-gold)]/30 flex items-center justify-center text-[var(--text-gold)] shadow-lg transition-all duration-300 hover:bg-[var(--border-gold)]/20 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </PageLayout>
  );
}
