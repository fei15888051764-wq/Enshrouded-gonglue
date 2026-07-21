import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { usePage } from '../App';
import {
  Shield, ChevronRight, Home, ArrowUp,
  Flame, CloudFog, Wrench, MapPin,
  Sun, CloudRain, Camera,
} from 'lucide-react';
import PageLayout from './PageLayout';
import { beginnerSubSections } from '../data/beginnerData';
import { beginnerImages } from '../data/beginnerImages';

interface BeginnerSubPageProps {
  subId: string;
}

// Sub-navigation for beginner sub-pages
function SubNav({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {beginnerSubSections.map((s) => (
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

export default function BeginnerSubPage({ subId }: BeginnerSubPageProps) {
  const { navigate } = usePage();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const section = beginnerSubSections.find((s) => s.id === subId);

  const handleNav = (id: string) => { navigate('beginner', id); };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!section) {
    return (
      <PageLayout title="Not Found" subtitle="" icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}>
        <div className="game-panel corner-decor p-6 text-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4">This topic could not be found.</p>
          <button onClick={() => navigate('beginner')} className="game-btn px-4 py-2 text-xs">
            Back to Beginner&apos;s Guide
          </button>
        </div>
      </PageLayout>
    );
  }

  // Render the actual section content based on id
  const renderContent = () => {
    switch (section.id) {
      case 'getting-started':
        return <GettingStartedContent />;
      case 'basic-controls':
        return <ControlsContent />;
      case 'first-hour':
        return <FirstHourContent />;
      case 'combat':
        return <CombatContent />;
      case 'shroud':
        return <ShroudContent />;
      case 'base-building':
        return <BaseBuildingContent />;
      case 'crafting':
        return <CraftingContent />;
      case 'traversal':
        return <TraversalContent />;
      case 'skills':
        return <SkillsContent />;
      case 'food':
        return <FoodContent />;
      case 'gear':
        return <GearContent />;
      case 'fast-travel':
        return <FastTravelContent />;
      case 'mistakes':
        return <MistakesContent />;
      case 'multiplayer':
        return <MultiplayerContent />;
      case 'day-night':
        return <DayNightContent />;
      case 'weather':
        return <WeatherContent />;
      case 'farming':
        return <FarmingContent />;
      case 'advanced-building':
        return <AdvancedBuildingContent />;
      case 'difficulty':
        return <DifficultyContent />;
      case 'photo-mode':
        return <PhotoModeContent />;
      default:
        return (
          <div className="game-panel corner-decor p-6 text-center">
            <p className="text-[var(--text-secondary)]">Content coming soon for {section.title}.</p>
          </div>
        );
    }
  };

  const idx = beginnerSubSections.findIndex((s) => s.id === subId);
  const prev = idx > 0 ? beginnerSubSections[idx - 1] : null;
  const next = idx < beginnerSubSections.length - 1 ? beginnerSubSections[idx + 1] : null;

  return (
    <PageLayout
      title={section.title}
      subtitle="Beginner's Guide"
      icon={<>{section.icon}</>}
    >
      <SubNav activeId={subId} onNavigate={handleNav} />

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] flex-wrap">
          <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
            <Home className="w-3 h-3" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('beginner')} className="hover:text-[var(--text-gold)] transition-colors">
            Beginner
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-gold)]">{section.title}</span>
        </div>

        {/* Content */}
        {renderContent()}

        {/* Screenshot Gallery */}
        <SectionGallery sectionId={section.id} />

        {/* Navigation Footer */}
        <div className="mt-10 pt-6 border-t border-[var(--border-gold)]/20">
          <div className="flex items-center justify-between">
            {prev ? (
              <button
                onClick={() => handleNav(prev.id)}
                className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group"
              >
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 rotate-180 text-[var(--text-gold)]" />
                  <span className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)]">{prev.title}</span>
                </div>
              </button>
            ) : <div />}
            {next ? (
              <button
                onClick={() => handleNav(next.id)}
                className="game-panel corner-decor p-3 text-right hover:border-[var(--border-gold-light)] transition-all group"
              >
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

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--bg-panel)] border border-[var(--border-gold)]/30 
          flex items-center justify-center text-[var(--text-gold)] shadow-lg transition-all duration-300 hover:bg-[var(--border-gold)]/20
          ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </PageLayout>
  );
}

// ==================== CONTENT COMPONENTS ====================

function SectionGallery({ sectionId }: { sectionId: string }) {
  const images = beginnerImages[sectionId];
  if (!images || images.length === 0) return null;
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-3">
        <Camera className="w-4 h-4 text-[var(--text-gold)]" />
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase">In-Game Gallery</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {images.map((img) => (
          <figure key={img.src} className="game-panel corner-decor overflow-hidden group">
            <div className="overflow-hidden">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="px-3 py-2 text-[10px] text-[var(--text-muted)] leading-snug">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="game-panel corner-decor p-3 text-center">
      <div className="text-[var(--text-gold)] font-cinzel font-bold text-sm">{value}</div>
      <div className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function InfoBox({ title, children, type = 'info' }: { title: string; children: ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const colors = {
    info: { border: 'border-[#6a9ad0]', bg: 'bg-[#6a9ad0]/5', icon: 'text-[#6a9ad0]' },
    warning: { border: 'border-orange-400', bg: 'bg-orange-400/5', icon: 'text-orange-400' },
    tip: { border: 'border-[var(--accent-green)]', bg: 'bg-[var(--accent-green)]/5', icon: 'text-[var(--accent-green)]' },
  };
  const c = colors[type];
  return (
    <div className={`${c.bg} border-l-2 ${c.border} pl-4 py-3 pr-3 rounded-r`}>
      <h4 className={`font-cinzel text-xs font-bold ${c.icon} mb-2 tracking-wider uppercase`}>{title}</h4>
      <div className="text-xs text-[var(--text-secondary)] leading-relaxed">{children}</div>
    </div>
  );
}

function GettingStartedContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Welcome to <strong className="text-[var(--text-primary)]">Embervale</strong>. As a <strong className="text-[var(--text-gold)]">Flameborn</strong>, you are the last hope for humanity.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <StatCard label="Max Level" value="35+" />
          <StatCard label="Skill Points" value="184" />
          <StatCard label="Ancient Spires" value="16" />
          <StatCard label="NPCs to Rescue" value="6" />
        </div>
      </div>
      <InfoBox title="Classless System" type="info">
        Enshrouded is a <strong>classless</strong> survival action-RPG. There are no locked classes — you can wield any weapon, cast any spell, and mix skill trees freely. You can respec at any Flame Altar for a small cost.
      </InfoBox>
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Character Creation</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Customize your Flameborn&apos;s appearance including face, hair, body type, and voice. These choices are purely cosmetic — they have no gameplay impact.
        </p>
      </div>
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Cinder Vault</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Your journey begins in the <strong className="text-[var(--text-primary)]">Cinder Vault</strong>, the game&apos;s tutorial area. Explore every corner for lore notes and starter items.
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Interact with the Flame to receive your first quest</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Search all containers for your first weapon and armor</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Read lore notes to understand the world&apos;s backstory</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Follow the mine tunnel to exit into the Springlands</span></li>
        </ul>
      </div>
      <InfoBox title="Pro Tip" type="tip">
        Before leaving the Cinder Vault, make sure you&apos;ve looted everything. Pay special attention to lore notes — they are permanently recorded in your journal.
      </InfoBox>
    </div>
  );
}

function ControlsContent() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded uses a standard PC control scheme. Controls are fully rebindable in settings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Movement</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Move</span><span className="text-[var(--text-gold)] font-mono">W A S D</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Sprint</span><span className="text-[var(--text-gold)] font-mono">Shift</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Jump</span><span className="text-[var(--text-gold)] font-mono">Space</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Crouch/Slide</span><span className="text-[var(--text-gold)] font-mono">Ctrl</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Dodge/Roll</span><span className="text-[var(--text-gold)] font-mono">Alt</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Combat</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Light Attack</span><span className="text-[var(--text-gold)] font-mono">LMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Heavy Attack</span><span className="text-[var(--text-gold)] font-mono">Hold LMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Block/Parry</span><span className="text-[var(--text-gold)] font-mono">RMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Merciless Strike</span><span className="text-[var(--text-gold)] font-mono">E</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Aim (Bow)</span><span className="text-[var(--text-gold)] font-mono">Hold RMB</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Menus</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Inventory</span><span className="text-[var(--text-gold)] font-mono">Tab / I</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Crafting</span><span className="text-[var(--text-gold)] font-mono">V</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Skill Tree</span><span className="text-[var(--text-gold)] font-mono">K</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Map</span><span className="text-[var(--text-gold)] font-mono">M</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Journal</span><span className="text-[var(--text-gold)] font-mono">J</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Interaction</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Interact</span><span className="text-[var(--text-gold)] font-mono">E</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Pickup/Loot</span><span className="text-[var(--text-gold)] font-mono">F</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Glider</span><span className="text-[var(--text-gold)] font-mono">Space (air)</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Grappling Hook</span><span className="text-[var(--text-gold)] font-mono">Q</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Build Mode</span><span className="text-[var(--text-gold)] font-mono">B</span></li>
          </ul>
        </div>
      </div>
      <InfoBox title="Controller Support" type="info">
        Enshrouded fully supports controllers on PC and features Steam Deck optimization. Controller bindings can be customized in settings.
      </InfoBox>
    </div>
  );
}

function FirstHourContent() {
  return (
    <div className="space-y-4">
      {[
        { num: '01', title: 'Exit the Cinder Vault', desc: 'Follow the path through the mine tunnel. Dispatch 1-2 basic enemies with your starter weapon. The tunnel leads to the Springlands.' },
        { num: '02', title: 'Gather 5 Stone', desc: 'Look for small gray stones on the ground near the quest marker. Press E to collect. You need exactly 5 stones for your first Flame Altar.' },
        { num: '03', title: 'Place Your Flame Altar', desc: 'Open crafting menu (V), select the Flame Altar, and place it at the quest marker. This establishes your 40x40x40 buildable base zone.' },
        { num: '04', title: 'Craft Essential Tools', desc: 'Craft Construction Hammer (1 Stone), Workbench (8 Wood + 3 String), Stone Axe (4 Twigs + 1 Stone + 1 String), and Scrappy Pickaxe.' },
        { num: '05', title: 'Gather Basic Resources', desc: 'Spend 15-20 minutes gathering: Wood Logs (chop trees), Plant Fiber (bushes), Stone (ground), String (craft from fiber), Berries (food), Resin (red trees).' },
        { num: '06', title: 'Craft a Bow', desc: 'The bow is your best friend early game. Craft it at the Workbench. Remember to craft plenty of arrows!' },
        { num: '07', title: 'Activate First Ancient Spire', desc: 'Follow the quest marker to the Springlands Spire. Climb to the top and interact with the Flame Beacon to unlock fast travel.' },
      ].map((step) => (
        <div key={step.num} className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">{step.num}</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">{step.title}</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
      <InfoBox title="Priority Checklist" type="tip">
        Flame Altar → Tools → Resources → Bow → Springlands Spire. Everything else can wait. Don&apos;t venture into deep Shroud yet.
      </InfoBox>
    </div>
  );
}

// Remaining content components (simplified for build)
function CombatContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <img src="/images/guides/combat-dodge.webp" alt="Combat" className="w-full rounded border border-[var(--border-gold)]/20 mb-4" loading="lazy" decoding="async" />
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Combat in Enshrouded is real-time and skill-based. Understanding attacking, dodging, parrying, and stamina management is essential.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Light & Heavy Attacks</h4>
          <p className="text-xs text-[var(--text-secondary)]">Light attacks (LMB) are fast, low stamina. Heavy attacks (hold LMB) deal more damage and fill stun bar faster. Chain light attacks then finish with heavy.</p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Blocking & Parrying</h4>
          <p className="text-xs text-[var(--text-secondary)]">Hold RMB to block. Well-timed block = parry, staggering the enemy. Opens them for a Merciless Strike (E key).</p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Dodging & Rolling</h4>
          <p className="text-xs text-[var(--text-secondary)]">Press Alt to dodge roll. Grants brief invincibility frames. Blink skill (Healer tree) replaces roll with teleport.</p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Merciless Strike</h4>
          <p className="text-xs text-[var(--text-secondary)]">Fill enemy stun bar (white circle) to overpower them. Press E for devastating burst damage.</p>
        </div>
      </div>
      <InfoBox title="Combat Tip" type="tip">Your bow is essential early game. Use it to pull single enemies and deal damage from safety. Always craft plenty of arrows.</InfoBox>
    </div>
  );
}

function ShroudContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <img src="/images/guides/shroud-gameplay.webp" alt="The Shroud" className="w-full rounded border border-[var(--border-gold)]/20 mb-4" loading="lazy" decoding="async" />
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">The <strong className="text-[#6a9ad0]">Shroud</strong> is Enshrouded&apos;s signature mechanic. A deadly teal fog that consumes everything in its path.</p>
      </div>
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Shroud Timer</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Entering the Shroud starts a timer. Default: 5 minutes. At zero, you die. Timer refills only in safe zones.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#6a9ad0]/5 rounded border border-[#6a9ad0]/20">
            <strong className="text-[#6a9ad0] block mb-1">Blue Shroud</strong>
            <span className="text-[var(--text-secondary)]">Standard areas. 5-min timer. Manageable with basic upgrades.</span>
          </div>
          <div className="p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <strong className="text-[var(--accent-red)] block mb-1">Red Shroud</strong>
            <span className="text-[var(--text-secondary)]">Drains timer instantly. Fatal without Flame Altar upgrades.</span>
          </div>
        </div>
      </div>
      <InfoBox title="Shroud Survival Rule" type="warning">Always know your escape route. If timer drops below 60 seconds, head for exit immediately.</InfoBox>
    </div>
  );
}

function BaseBuildingContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Flame Altar</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">The heart of your base. Defines buildable area, acts as fast travel point. Everything within radius is permanent.</p>
        <div className="grid grid-cols-4 gap-2 mb-3">
          <StatCard label="Level 1" value="40&sup3;" />
          <StatCard label="Level 2" value="80&sup3;" />
          <StatCard label="Level 3" value="120&sup3;" />
          <StatCard label="Level 4" value="160&sup3;" />
        </div>
        <p className="text-xs text-[var(--text-secondary)]">Up to 10 Flame Altars per world. Upgrades require Shroud Cores from bosses.</p>
      </div>
      <InfoBox title="Base Tip" type="tip">Start simple — a shelter with bed and storage is enough early game. Expand gradually as you unlock new materials.</InfoBox>
    </div>
  );
}

function CraftingContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <img src="/images/guides/crafting-axe.webp" alt="Crafting" className="w-full rounded border border-[var(--border-gold)]/20 mb-4" loading="lazy" decoding="async" />
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Essential Stations</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Wrench className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Workbench</strong> — 8 Wood + 3 String. Primary crafting for tools, weapons, building blocks.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Flame className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Flame Altar</strong> — 5 Stone. Heart of base. Skill resets and Flame upgrades.</div>
          </div>
        </div>
      </div>
      <InfoBox title="Crafting Tip" type="tip">Pin recipes with F for quick access. Many stations can be operated by rescued NPCs.</InfoBox>
    </div>
  );
}

function TraversalContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <img src="/images/guides/glider-flying.webp" alt="Glider" className="w-full rounded border border-[var(--border-gold)]/20 mb-4" loading="lazy" decoding="async" />
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Glider</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Unlocks via Blacksmith quest ~level 5. Press Space mid-air to deploy. Higher-tier gliders from Carpenter.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-[var(--border-gold)]/20"><th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Glider</th><th className="text-center py-2 text-[var(--text-gold)] font-cinzel">Range</th><th className="text-center py-2 text-[var(--text-gold)] font-cinzel">Speed</th></tr></thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Basic</td><td className="text-center">100%</td><td className="text-center">10</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Advanced</td><td className="text-center">150%</td><td className="text-center">15</td></tr>
              <tr><td className="py-1.5 text-[var(--text-gold)]">Ghost</td><td className="text-center text-[var(--text-gold)]">250%</td><td className="text-center text-[var(--text-gold)]">25</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <InfoBox title="Leap-Glide Method" type="tip">Fast travel to a Spire, climb to top, deploy Glider. With Double Jump + Updraft, cross entire biomes in one flight.</InfoBox>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <img src="/images/guides/skill-tree-full.webp" alt="Skill Tree" className="w-full rounded border border-[var(--border-gold)]/20 mb-4" loading="lazy" decoding="async" />
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Single shared skill tree with 12 archetypes. No locked classes. Every level grants 2 skill points.</p>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <StatCard label="From Levels" value="88" />
        <StatCard label="Shroud Roots" value="39" />
        <StatCard label="Elixir Wells" value="57" />
      </div>
      <p className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-gold)]">Total: 184 skill points</strong>. More nodes than you can fill — always make meaningful choices.</p>
      <InfoBox title="Universal First Skills" type="tip">Double Jump (4SP) → Updraft (2SP) → Good Metabolism (2SP) → Shiny Plates (2SP) → Blink (4SP). Foundation: 14 SP total.</InfoBox>
    </div>
  );
}

function FoodContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Food Buffs</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">8 food categories, each providing different bonuses. 3 buffs active at once (4 with Dessert Stomach skill).</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-red-900/10 rounded"><span className="text-red-400 font-bold">Meat</span><span className="text-[var(--text-secondary)]">Health + melee damage</span></div>
          <div className="flex items-start gap-2 p-2 bg-green-900/10 rounded"><span className="text-green-400 font-bold">Veg</span><span className="text-[var(--text-secondary)]">Ranged damage</span></div>
          <div className="flex items-start gap-2 p-2 bg-blue-900/10 rounded"><span className="text-blue-400 font-bold">Liquid</span><span className="text-[var(--text-secondary)]">Stamina regen</span></div>
          <div className="flex items-start gap-2 p-2 bg-purple-900/10 rounded"><span className="text-purple-400 font-bold">Herb</span><span className="text-[var(--text-secondary)]">Mana bonus</span></div>
        </div>
      </div>
      <InfoBox title="Food Rules" type="warning">Raw meat causes -75 stamina — ALWAYS cook it! One food per category. Refresh buffs before they expire.</InfoBox>
    </div>
  );
}

function GearContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Durability & Repair</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">All gear has durability. <strong className="text-[var(--accent-red)]">Zero durability = item destroyed forever.</strong></p>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <Wrench className="w-4 h-4 text-[var(--accent-green)] flex-shrink-0" />
            <div><strong className="text-[var(--text-primary)]">Workbench:</strong> Interact to fully repair all equipped gear at zero cost. Do this every time you return.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <MapPin className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0" />
            <div><strong className="text-[var(--text-primary)]">Anvils:</strong> Found in ruins. Repair all gear. Remember locations for emergency field repairs.</div>
          </div>
        </div>
      </div>
      <InfoBox title="Critical Warning" type="warning">Repair at your Workbench EVERY time you return to base. Red bar = repair NOW. Carry backup weapons on long expeditions.</InfoBox>
    </div>
  );
}

function FastTravelContent() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Ancient Spires</h4>
          <p className="text-xs text-[var(--text-secondary)]">Tall towers in each region. Climb top, activate Flame Beacon. Free fast travel. Reveals map. Glider launch points.</p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Flame Altars</h4>
          <p className="text-xs text-[var(--text-secondary)]">Your placed Altars = fast travel points. Start with 2 slots, up to 10. Free, no cooldown. Can be renamed.</p>
        </div>
      </div>
      <InfoBox title="Restriction" type="warning">You CANNOT fast travel from inside the Shroud. Run to nearest Flame Altar at edge, or use Return Beacon.</InfoBox>
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Death & Respawn</h3>
        <p className="text-xs text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">No death penalty</strong> — no XP/item loss. Respawn at last Flame Altar. Run back to tombstone to recover carried items. Tombstones remain indefinitely.</p>
      </div>
    </div>
  );
}

function MistakesContent() {
  return (
    <div className="space-y-4">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--accent-red)] mb-3">Mistakes to Avoid</h3>
        {[
          { n: '01', t: 'Skipping Ancient Spires', d: '#1 mistake! Every Spire reveals Roots, Wells, and Shrines on your map. Activate them immediately.' },
          { n: '02', t: 'Ignoring the Bow', d: 'The bow is not optional — it\'s essential. Use it to pull single enemies and chip tough foes.' },
          { n: '03', t: 'Deep Shroud Too Early', d: 'Red Shroud zones require Flame upgrades. Don\'t brute-force them.' },
          { n: '04', t: 'Letting Gear Break', d: 'Zero durability = gone forever. Repair at Workbench every return.' },
          { n: '05', t: 'Not Eating Food', d: 'Three food buffs can double your effective damage. Always keep them active.' },
          { n: '06', t: 'Forgetting Flame Upgrades', d: 'Flame Strengthening increases ALL attributes and unlocks red zones.' },
        ].map((m) => (
          <div key={m.n} className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20 mb-2">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">{m.n}</span>
            <div><strong className="text-[var(--text-primary)]">{m.t}:</strong> <span className="text-[var(--text-secondary)]">{m.d}</span></div>
          </div>
        ))}
      </div>
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--accent-green)] mb-3">Pro Tips</h3>
        {[
          'Pin recipes with F for quick crafting access',
          'Follow sparkles in the Shroud — they guide to safety and loot',
          'Use difficulty settings to disable weapon durability if desired',
          'Build forward camps near biome borders for fast travel anchors',
          'Rescue NPCs ASAP — each unlocks new crafting stations',
          'Destroy every Shroud Root for +1 skill point each',
          'Salvage unwanted gear at Workbench to recover Runes',
          'Red trees = Resin. Gather 5+ whenever you see them',
        ].map((tip) => (
          <div key={tip} className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded mb-1">
            <span className="text-[var(--accent-green)] font-bold">&#10003;</span>
            <span className="text-xs text-[var(--text-secondary)]">{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MultiplayerContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Supports <strong className="text-[var(--text-gold)]">up to 16 players</strong> in online co-op. Playing with friends transforms the experience.</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10"><strong className="text-[var(--text-primary)]">Revive:</strong> Downed players can be revived by allies</div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10"><strong className="text-[var(--text-primary)]">Shared Bases:</strong> All players build in same Altar zone</div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10"><strong className="text-[var(--text-primary)]">Loot:</strong> Per-player drops — everyone gets their own</div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10"><strong className="text-[var(--text-primary)]">Synergy:</strong> Tank + DPS + Healer roles</div>
      </div>
      <InfoBox title="Multiplayer Tip" type="tip">Assign roles: one tanks with shield, another ranged DPS, third heals. Healer&apos;s Water Aura and revive are incredibly powerful.</InfoBox>
    </div>
  );
}

function DayNightContent() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-yellow-900/10 rounded border border-yellow-500/20">
          <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-2">Daytime</h4>
          <ul className="space-y-1 text-[var(--text-secondary)]"><li>&#9679; Full visibility</li><li>&#9679; Standard spawns</li><li>&#9679; NPCs active</li><li>&#9679; Best for exploration</li></ul>
        </div>
        <div className="p-3 bg-indigo-900/10 rounded border border-indigo-500/20">
          <h4 className="font-cinzel text-xs font-bold text-indigo-400 mb-2">Nighttime</h4>
          <ul className="space-y-1 text-[var(--text-secondary)]"><li>&#9679; Reduced visibility</li><li>&#9679; More aggressive enemies</li><li>&#9679; Nocturnal creatures</li><li>&#9679; Need torches</li></ul>
        </div>
      </div>
      <InfoBox title="Sleeping" type="tip">Sleep in a bed to skip night and get Rested Buff (+15% stamina regen for 10 min). All players must be in bed in multiplayer.</InfoBox>
    </div>
  );
}

function WeatherContent() {
  return (
    <div className="space-y-4">
      {[
        { icon: <Sun className="w-4 h-4 text-yellow-400" />, name: 'Clear', desc: 'Full visibility, normal conditions. Best for exploration.' },
        { icon: <CloudRain className="w-4 h-4 text-blue-400" />, name: 'Rain', desc: 'Reduced visibility, slippery ground, crops grow faster.' },
        { icon: <CloudFog className="w-4 h-4 text-gray-400" />, name: 'Fog', desc: 'Heavy visibility reduction. Good for stealth approaches.' },
      ].map((w) => (
        <div key={w.name} className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
          {w.icon}
          <div><strong className="text-[var(--text-primary)]">{w.name}:</strong> <span className="text-xs text-[var(--text-secondary)]">{w.desc}</span></div>
        </div>
      ))}
      <InfoBox title="Weather Tip" type="tip">Weather is region-specific. Check map before traveling. Rain makes gliding harder due to wind resistance.</InfoBox>
    </div>
  );
}

function FarmingContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How Farming Works</h3>
        <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
          <li><strong className="text-[var(--text-primary)]">Rescue the Farmer</strong> NPC to unlock farming</li>
          <li><strong className="text-[var(--text-primary)]">Craft Seedbeds</strong> at your base</li>
          <li><strong className="text-[var(--text-primary)]">Find Seeds</strong> from wild plants or buy from Farmer</li>
          <li><strong className="text-[var(--text-primary)]">Plant & Water</strong> regularly</li>
          <li><strong className="text-[var(--text-primary)]">Harvest</strong> when mature (real-time growth)</li>
        </ol>
      </div>
      <InfoBox title="Farming Efficiency" type="tip">Place plots near water. Rain auto-waters crops. Use Drying Rack to preserve food for long-term storage.</InfoBox>
    </div>
  );
}

function AdvancedBuildingContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Terrain Sculpting</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">In Build Mode (B), sculpt terrain within your Flame Altar zone:</p>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>&#9679; <strong className="text-[var(--text-primary)]">Raise/Lower:</strong> Click and drag to adjust height</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Flatten:</strong> Hold Shift + click to level</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Paint:</strong> Apply grass, dirt, stone, snow textures</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Smooth:</strong> Blend edges for natural transitions</li>
        </ul>
      </div>
      <InfoBox title="Building Pro Tip" type="tip">Press X to toggle snapping. Middle-click to copy frequently used pieces. No structural integrity — build floating castles if you want!</InfoBox>
    </div>
  );
}

function DifficultyContent() {
  return (
    <div className="space-y-4">
      {[
        { label: 'Relaxed', color: 'text-green-400', bg: 'bg-green-900/10', border: 'border-green-500/20', desc: 'Reduced enemy damage, longer Shroud timer, no durability loss.' },
        { label: 'Normal', color: 'text-[var(--text-gold)]', bg: 'bg-[var(--bg-primary)]/50', border: 'border-[var(--border-gold)]/10', desc: 'Standard balance. Recommended for first playthrough.' },
        { label: 'Hard', color: 'text-orange-400', bg: 'bg-orange-900/10', border: 'border-orange-500/20', desc: 'Increased enemy HP/damage. Shorter Shroud timer.' },
        { label: 'Survival', color: 'text-[var(--accent-red)]', bg: 'bg-[var(--accent-red)]/5', border: 'border-[var(--accent-red)]/20', desc: 'Hardcore mode. Harsh survival, limited resources.' },
      ].map((d) => (
        <div key={d.label} className={`flex items-start gap-3 p-3 ${d.bg} rounded border ${d.border}`}>
          <span className={`${d.color} font-bold text-xs flex-shrink-0`}>{d.label}</span>
          <span className="text-xs text-[var(--text-secondary)]">{d.desc}</span>
        </div>
      ))}
      <InfoBox title="Recommended" type="tip">For first playthrough, stick with Normal. Disable weapon durability in settings if it frustrates you — doesn&apos;t affect other difficulty.</InfoBox>
    </div>
  );
}

function PhotoModeContent() {
  return (
    <div className="space-y-5">
      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How to Activate</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Press <strong className="text-[var(--text-gold)]">F10</strong> to enter Photo Mode. Game pauses, camera detaches for free movement.</p>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>&#9679; <strong className="text-[var(--text-primary)]">WASD:</strong> Move camera</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Mouse:</strong> Pan and tilt</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Scroll:</strong> Zoom</li>
          <li>&#9679; <strong className="text-[var(--text-primary)]">Space/Shift:</strong> Up/down</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded"><strong className="text-[var(--text-primary)]">Hide UI</strong><span className="text-[var(--text-secondary)]"> — Clean screenshots</span></div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded"><strong className="text-[var(--text-primary)]">Depth of Field</strong><span className="text-[var(--text-secondary)]"> — Cinematic blur</span></div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded"><strong className="text-[var(--text-primary)]">Filters</strong><span className="text-[var(--text-secondary)]"> — Warm, Cool, B&amp;W</span></div>
        <div className="p-2 bg-[var(--bg-primary)]/50 rounded"><strong className="text-[var(--text-primary)]">Time of Day</strong><span className="text-[var(--text-secondary)]"> — Change lighting</span></div>
      </div>
      <InfoBox title="Photo Tip" type="tip">Use Photo Mode during boss fights for epic action shots. Combine depth of field with low angle for cinematic results.</InfoBox>
    </div>
  );
}
