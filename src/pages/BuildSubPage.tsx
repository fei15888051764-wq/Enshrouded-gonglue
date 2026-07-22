import { useState, useEffect } from 'react';
import { usePage } from '../App';
import { Sword, ChevronRight, Home, ArrowUp } from 'lucide-react';
import PageLayout from './PageLayout';
import SectionGallery from '../components/SectionGallery';
import SubPageHero from '../components/SubPageHero';
import { buildImages } from '../data/baseCraftingItemsImages';
import { allBuilds, buildSubSections } from '../data/buildData';
import { StatBar, SkillPriorityBadge } from '../data/buildData';
import { BuildMiniCard } from './BuildHomePage';

function SubNav({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {allBuilds.map((b) => (
          <button
            key={b.id}
            onClick={() => onNavigate(b.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeId === b.id
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            <span>{b.buildName}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function BuildSubPage({ subId }: { subId: string }) {
  const { navigate } = usePage();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => { navigate('builds', id); };
  const build = allBuilds.find((b) => b.id === subId);
  const buildSection = buildSubSections.find((s) => s.id === subId);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Section page: /builds/ranged-dps etc. — lists every build in the category
  if (buildSection) {
    const sidx = buildSubSections.findIndex((s) => s.id === subId);
    const prevS = sidx > 0 ? buildSubSections[sidx - 1] : null;
    const nextS = sidx < buildSubSections.length - 1 ? buildSubSections[sidx + 1] : null;
    return (
      <PageLayout title={buildSection.title} subtitle="Character Builds" icon={<>{buildSection.icon}</>}>
        <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
          <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
            {buildSubSections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
                  ${subId === s.id
                    ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
                  }`}
              >
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </nav>
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
            <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
              <Home className="w-3 h-3" /><span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => navigate('builds')} className="hover:text-[var(--text-gold)] transition-colors">Builds</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[var(--text-gold)]">{buildSection.title}</span>
          </div>

          {/* Section intro */}
          <div className="game-panel corner-decor p-5 mb-5">
            <h2 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-1">
              {buildSection.title} Builds
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              {buildSection.description} {buildSection.builds.length} curated {buildSection.builds.length === 1 ? 'build' : 'builds'} — click any build for the full skill, gear, and playstyle guide.
            </p>
          </div>

          {/* Builds grid */}
          <div className={`grid gap-3 ${buildSection.builds.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            {buildSection.builds.map((b) => (
              <BuildMiniCard
                key={b.id}
                build={b}
                onClick={() => navigate('builds', b.id)}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
            <div className="flex items-center justify-between">
              {prevS ? (
                <button onClick={() => handleNav(prevS.id)} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                    <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prevS.title}</span>
                  </div>
                </button>
              ) : <div />}
              {nextS ? (
                <button onClick={() => handleNav(nextS.id)} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next</div>
                  <div className="flex items-center gap-2 justify-end">
                    <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{nextS.title}</span>
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

  if (!build) {
    return (
      <PageLayout title="Build Not Found" subtitle="" icon={<Sword className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This build guide could not be found.</p>
          <button onClick={() => navigate('builds')} className="game-btn px-4 py-2 text-xs">Back to Builds</button>
        </div>
      </PageLayout>
    );
  }

  const idx = allBuilds.findIndex((b) => b.id === subId);
  const prev = idx > 0 ? allBuilds[idx - 1] : null;
  const next = idx < allBuilds.length - 1 ? allBuilds[idx + 1] : null;
  const section = buildSubSections.find((s) => s.builds.some((b) => b.id === build.id));

  return (
    <PageLayout title={build.buildName} subtitle={build.subtitle} icon={<>{build.icon}</>}>
      <SubNav activeId={subId} onNavigate={handleNav} />
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" /><span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('builds')} className="hover:text-[var(--text-gold)] transition-colors">Builds</button>
          <ChevronRight className="w-3 h-3" />
          {section && (
            <>
              <button onClick={() => navigate('builds', section.id)} className="hover:text-[var(--text-gold)] transition-colors">{section.title}</button>
              <ChevronRight className="w-3 h-3" />
            </>
          )}
          <span className="text-[var(--text-gold)]">{build.buildName}</span>
        </div>

        <SubPageHero images={buildImages[build.id]} />

        {/* Build Header */}
        <div className="game-panel corner-decor p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="font-cinzel text-2xl font-bold text-[var(--text-gold)] mb-1">{build.buildName}</h1>
              <p className="text-sm text-[var(--text-muted)]">{build.subtitle}</p>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-cinzel font-bold ${build.tier === 'S' ? 'text-yellow-400' : build.tier === 'A' ? 'text-purple-400' : 'text-blue-400'}`}>
                {build.tier}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] uppercase">Tier</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px]">
            <span className="px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)]">{build.archetype}</span>
            <span className={`px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-gold-dim)] ${
              build.difficulty === 'Beginner' ? 'text-green-400' : build.difficulty === 'Intermediate' ? 'text-yellow-400' : 'text-red-400'
            }`}>{build.difficulty}</span>
            {build.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded bg-[var(--text-gold)]/10 text-[var(--text-gold)] border border-[var(--text-gold)]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="game-panel corner-decor p-5 mb-6">
          <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-4 uppercase tracking-wider">Stat Allocation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {build.stats.map((stat) => (
              <StatBar key={stat.name} name={stat.name} value={stat.value} max={stat.max} color={stat.color} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="game-panel corner-decor p-5 mb-6">
          <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-4 uppercase tracking-wider">Skill Priority</h3>
          <div className="space-y-3">
            {build.skills.map((skill) => (
              <SkillPriorityBadge key={skill.name} name={skill.name} priority={skill.priority} note={skill.note} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl">{build.content}</div>

        <SectionGallery images={buildImages[build.id]} skipFirst />

        {/* Prev / Next */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => handleNav(prev.id)} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev.buildName}</span>
                </div>
              </button>
            ) : <div />}
            {next ? (
              <button onClick={() => handleNav(next.id)} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{next.buildName}</span>
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
