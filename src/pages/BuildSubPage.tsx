import { useState, useEffect } from 'react';
import { usePage } from '../App';
import {
  Sword, ChevronRight, Home, ArrowUp, Shield, Star, TrendingUp, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import PageLayout from './PageLayout';
import { allBuilds, buildSubSections } from '../data/buildData';
import { StatBar, SkillPriorityBadge } from '../data/buildData';
import { BuildMiniCard } from './BuildHomePage';
import SectionGallery from '../components/SectionGallery';
import SubPageHero from '../components/SubPageHero';
import { buildsImages } from '../data/skillsBuildsImages';

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: 'text-green-400 bg-green-400/10 border-green-400/20',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/20',
};

const TIER_COLORS: Record<string, string> = {
  S: 'text-yellow-400',
  A: 'text-purple-400',
  B: 'text-blue-400',
};

const STAT_COLORS: Record<string, string> = {
  strength: 'bg-red-500',
  dexterity: 'bg-green-500',
  intelligence: 'bg-blue-500',
  constitution: 'bg-yellow-500',
  spirit: 'bg-purple-500',
  endurance: 'bg-orange-500',
};

interface BuildSubPageProps {
  subId: string;
}

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

export default function BuildSubPage({ subId }: BuildSubPageProps) {
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
          <p className="text-[var(--text-secondary)] text-sm mb-4">This build could not be found.</p>
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
    <PageLayout title={build.buildName} subtitle={`${build.archetype} · ${build.difficulty} · ${build.tier}-Tier`} icon={<>{build.icon}</>}>
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

        {/* Build Header */}
        <SubPageHero images={buildsImages[build.id]} />
        <div className="max-w-4xl">
          <div className="game-panel corner-decor p-6 mb-6">
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] flex-shrink-0">
                {build.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">{build.buildName}</h2>
                  <span className={`text-xs font-bold ${TIER_COLORS[build.tier]} bg-[var(--bg-secondary)] px-2 py-0.5 rounded border border-[var(--border-gold)]/20`}>
                    {build.tier}-Tier
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${DIFFICULTY_COLORS[build.difficulty]}`}>
                    {build.difficulty}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[var(--text-muted)]">
                  <span><strong className="text-[var(--text-primary)]">Archetype:</strong> {build.archetype}</span>
                  <span><strong className="text-[var(--text-primary)]">Skills:</strong> {build.skills.length}</span>
                  <span><strong className="text-[var(--text-primary)]">Weapons:</strong> {build.weapons.length}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{build.summary}</p>
          </div>

          {/* Attribute Distribution */}
          <SectionToggle title="Attribute Distribution">
            <p className="text-[10px] text-[var(--text-muted)] mb-3">Recommended attribute priority for this build. Values are relative (1-10 scale).</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <StatBar label="Strength" value={build.stats.strength} color={STAT_COLORS.strength} />
              <StatBar label="Dexterity" value={build.stats.dexterity} color={STAT_COLORS.dexterity} />
              <StatBar label="Intelligence" value={build.stats.intelligence} color={STAT_COLORS.intelligence} />
              <StatBar label="Constitution" value={build.stats.constitution} color={STAT_COLORS.constitution} />
              <StatBar label="Spirit" value={build.stats.spirit} color={STAT_COLORS.spirit} />
              <StatBar label="Endurance" value={build.stats.endurance} color={STAT_COLORS.endurance} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[9px]">
              {build.stats.strength >= 6 && <span className="px-2 py-0.5 rounded bg-red-400/10 text-red-400 border border-red-400/20">Primary: STR</span>}
              {build.stats.dexterity >= 6 && <span className="px-2 py-0.5 rounded bg-green-400/10 text-green-400 border border-green-400/20">Primary: DEX</span>}
              {build.stats.intelligence >= 6 && <span className="px-2 py-0.5 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">Primary: INT</span>}
              {build.stats.constitution >= 6 && <span className="px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">Primary: CON</span>}
              {build.stats.spirit >= 6 && <span className="px-2 py-0.5 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20">Primary: Spirit</span>}
              {build.stats.endurance >= 6 && <span className="px-2 py-0.5 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">Primary: END</span>}
            </div>
          </SectionToggle>

          {/* Core Skills */}
          <SectionToggle title="Core Skills">
            <p className="text-[10px] text-[var(--text-muted)] mb-3">
              Skills marked <span className="text-red-400 font-bold">Core</span> are essential. 
              <span className="text-yellow-400 font-bold"> Important</span> skills significantly improve the build. 
              <span className="text-gray-400 font-bold"> Optional</span> skills are situational.
            </p>
            <div className="space-y-2">
              {build.skills.map((skill) => (
                <div key={skill.name} className="game-panel corner-decor p-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)]">{skill.name}</h4>
                      <span className="text-[9px] text-[var(--text-muted)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">{skill.tree}</span>
                    </div>
                    <SkillPriorityBadge priority={skill.priority} />
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Recommended Weapons */}
          <SectionToggle title="Recommended Weapons">
            <div className="space-y-2">
              {build.weapons.map((weapon) => (
                <div key={weapon.name} className="game-panel corner-decor p-3">
                  <div className="flex items-start gap-3">
                    <Sword className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)] mb-0.5">{weapon.name}</h4>
                      <span className="text-[9px] text-[var(--text-muted)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">{weapon.type}</span>
                      <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed mt-1.5">{weapon.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Recommended Armor */}
          <SectionToggle title="Recommended Armor">
            <div className="space-y-2">
              {build.armor.map((armor) => (
                <div key={armor.name} className="game-panel corner-decor p-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-cinzel text-[11px] font-bold text-[var(--text-primary)] mb-0.5">{armor.name}</h4>
                      <span className="text-[9px] text-[var(--text-muted)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">{armor.type}</span>
                      <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed mt-1.5">{armor.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Playstyle */}
          <SectionToggle title="Playstyle Guide">
            <div className="bg-[var(--bg-secondary)]/50 border border-[var(--border-gold)]/10 rounded-lg p-4">
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{build.playstyle}</p>
            </div>
          </SectionToggle>

          {/* Pros & Cons */}
          <SectionToggle title="Strengths & Weaknesses">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-cinzel text-[10px] font-bold text-green-400 mb-3 tracking-wider uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Strengths
                </h4>
                <ul className="space-y-1.5">
                  {build.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-[10px] text-[var(--text-secondary)]">
                      <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-cinzel text-[10px] font-bold text-red-400 mb-3 tracking-wider uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Weaknesses
                </h4>
                <ul className="space-y-1.5">
                  {build.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-[10px] text-[var(--text-secondary)]">
                      <AlertTriangle className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionToggle>

          {/* Tips */}
          <SectionToggle title="Pro Tips">
            <div className="space-y-2">
              {build.tips.map((tip) => (
                <div key={tip} className="flex items-start gap-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-gold)]/10 rounded-lg p-3">
                  <Star className="w-3.5 h-3.5 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </SectionToggle>

          {/* Build Gallery */}
          <SectionGallery images={buildsImages[build.id]} skipFirst />
        </div>

        {/* Navigation */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button onClick={() => handleNav(prev.id)} className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous Build</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev.buildName}</span>
                </div>
              </button>
            ) : <div />}
            {next ? (
              <button onClick={() => handleNav(next.id)} className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Next Build</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{next.buildName}</span>
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
