import { useState, useEffect } from 'react';
import { usePage } from '../App';
import { Clock, ChevronRight, Home, ArrowUp } from 'lucide-react';
import PageLayout from './PageLayout';
import { updatesSubSections } from '../data/updatesData';
import SectionGallery from '../components/SectionGallery';
import { updatesImages } from '../data/tipsUpdatesTroubleArmorImages';

interface UpdatesSubPageProps {
  subId: string;
}

function SubNav({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {updatesSubSections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeId === s.id
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            <span>{s.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function UpdatesSubPage({ subId }: UpdatesSubPageProps) {
  const { navigate } = usePage();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => { navigate('updates', id); };
  const section = updatesSubSections.find((s) => s.id === subId);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!section) {
    return (
      <PageLayout title="Not Found" subtitle="" icon={<Clock className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This skill topic could not be found.</p>
          <button onClick={() => navigate('updates')} className="game-btn px-4 py-2 text-xs">Back to Updates & Builds</button>
        </div>
      </PageLayout>
    );
  }

  const idx = updatesSubSections.findIndex((s) => s.id === subId);
  const prev = idx > 0 ? updatesSubSections[idx - 1] : null;
  const next = idx < updatesSubSections.length - 1 ? updatesSubSections[idx + 1] : null;

  return (
    <PageLayout title={section.title} subtitle="Updates & Builds" icon={<>{section.icon}</>}>
      <SubNav activeId={subId} onNavigate={handleNav} />
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" /><span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('updates')} className="hover:text-[var(--text-gold)] transition-colors">Updates</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-gold)]">{section.title}</span>
        </div>
        <div className="max-w-4xl">{section.content}</div>
        <SectionGallery images={updatesImages[section.id]} />
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => handleNav(prev.id)} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev.title}</span>
                </div>
              </button>
            ) : <div />}
            {next ? (
              <button onClick={() => handleNav(next.id)} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{next.title}</span>
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
