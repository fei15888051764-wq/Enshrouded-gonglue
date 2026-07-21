import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  Gamepad2, Swords, Shield, CloudFog,
  Home, Wrench, MapPin, GitBranch, Utensils,
  Backpack, Zap, AlertTriangle, ChevronRight,
  ArrowUp, Flame, Compass, Users, Sun, CloudRain,
  Tractor, Hammer, Settings, Camera
} from 'lucide-react';
import PageLayout from './PageLayout';

interface GuideSection {
  id: string;
  title: string;
  icon: ReactNode;
}

const sections: GuideSection[] = [
  { id: 'getting-started', title: 'Getting Started', icon: <Flame className="w-4 h-4" /> },
  { id: 'basic-controls', title: 'Controls', icon: <Gamepad2 className="w-4 h-4" /> },
  { id: 'first-hour', title: 'First Hour', icon: <Compass className="w-4 h-4" /> },
  { id: 'combat', title: 'Combat', icon: <Swords className="w-4 h-4" /> },
  { id: 'shroud', title: 'The Shroud', icon: <CloudFog className="w-4 h-4" /> },
  { id: 'base-building', title: 'Base Building', icon: <Home className="w-4 h-4" /> },
  { id: 'crafting', title: 'Crafting', icon: <Wrench className="w-4 h-4" /> },
  { id: 'traversal', title: 'Traversal', icon: <MapPin className="w-4 h-4" /> },
  { id: 'skills', title: 'Skill Trees', icon: <GitBranch className="w-4 h-4" /> },
  { id: 'food', title: 'Food & Buffs', icon: <Utensils className="w-4 h-4" /> },
  { id: 'gear', title: 'Gear & Repair', icon: <Backpack className="w-4 h-4" /> },
  { id: 'fast-travel', title: 'Fast Travel', icon: <Zap className="w-4 h-4" /> },
  { id: 'mistakes', title: 'Tips & Mistakes', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'multiplayer', title: 'Multiplayer', icon: <Users className="w-4 h-4" /> },
  { id: 'day-night', title: 'Day & Night', icon: <Sun className="w-4 h-4" /> },
  { id: 'weather', title: 'Weather', icon: <CloudRain className="w-4 h-4" /> },
  { id: 'farming', title: 'Farming', icon: <Tractor className="w-4 h-4" /> },
  { id: 'advanced-building', title: 'Adv. Building', icon: <Hammer className="w-4 h-4" /> },
  { id: 'difficulty', title: 'Difficulty', icon: <Settings className="w-4 h-4" /> },
  { id: 'photo-mode', title: 'Photo Mode', icon: <Camera className="w-4 h-4" /> },
];

// Sub-navigation component
function SubNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-[57px] z-40 bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-gold)]/20 py-2">
      <div className="max-w-6xl mx-auto px-3 flex flex-wrap gap-1.5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider transition-all
              ${activeId === s.id
                ? 'bg-[var(--text-gold)]/20 text-[var(--text-gold)] border border-[var(--text-gold)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-gold)]/10 border border-transparent'
              }`}
          >
            {s.icon}
            <span>{s.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// Image component with game-panel styling
function GuideImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-4">
      <div className="game-panel corner-decor p-1 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full rounded border border-[var(--border-gold)]/20"
          loading="lazy" decoding="async"
        />
      </div>
      {caption && (
        <p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">{caption}</p>
      )}
    </div>
  );
}

// Section wrapper
function Section({ id, title, icon, children }: { id: string; title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-[120px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)]">
          {icon}
        </div>
        <h2 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

// Info box
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

// Stat card
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="game-panel corner-decor p-3 text-center">
      <div className="text-[var(--text-gold)] font-cinzel font-bold text-sm">{value}</div>
      <div className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ==================== SECTION 1: GETTING STARTED ====================
function GettingStartedSection() {
  return (
    <Section id="getting-started" title="Getting Started" icon={<Flame className="w-5 h-5" />}>
      <div className="game-panel corner-decor p-5">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Welcome to <strong className="text-[var(--text-primary)]">Embervale</strong> — a vast, dangerous, and beautiful world consumed by the Shroud. 
          As a <strong className="text-[var(--text-gold)]">Flameborn</strong>, you are the last hope for humanity. This guide will walk you through 
          everything you need to know to survive your first days, from basic controls to advanced traversal and combat techniques.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <StatCard label="Max Level" value="35+" />
          <StatCard label="Skill Points" value="184" />
          <StatCard label="Ancient Spires" value="16" />
          <StatCard label="NPCs to Rescue" value="6" />
        </div>
      </div>

      <InfoBox title="Before You Begin" type="info">
        Enshrouded is a <strong>classless</strong> survival action-RPG. There are no locked classes — you can wield any weapon, 
        cast any spell, and mix skill trees freely. Your build is defined entirely by where you spend your skill points. 
        You can respec at any Flame Altar for a small cost, so don&apos;t be afraid to experiment.
      </InfoBox>

      <GuideImage
        src="/images/guides/game-cover.webp"
        alt="Enshrouded Key Art"
        caption="Embervale awaits — a world of beauty and danger."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Character Creation</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          When you first start the game, you&apos;ll go through a brief character creation process. You can customize your 
          Flameborn&apos;s appearance including face, hair, body type, and voice. These choices are purely cosmetic — 
          they have no gameplay impact, so pick whatever looks good to you.
        </p>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Body Type:</strong> Purely cosmetic — does not affect hitbox or stats</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Voice:</strong> Cosmetic only — pick what you enjoy hearing during emotes</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Name:</strong> Your character name is displayed to other players in multiplayer</span></li>
        </ul>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Cinder Vault — Tutorial Area</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Your journey begins in the <strong className="text-[var(--text-primary)]">Cinder Vault</strong>, an underground chamber 
          where Flameborn are created. This serves as the game&apos;s tutorial. You&apos;ll learn basic movement, combat, 
          and the core lore of Embervale. Take your time here — explore every corner for lore notes and starter items.
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-[var(--accent-green)] flex-shrink-0" /><span>Walk forward and interact with the Flame to receive your first quest</span></li>
          <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-[var(--accent-green)] flex-shrink-0" /><span>Search all containers — you&apos;ll find your first weapon, armor pieces, and supplies</span></li>
          <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-[var(--accent-green)] flex-shrink-0" /><span>Read the lore notes to understand the world&apos;s backstory</span></li>
          <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-[var(--accent-green)] flex-shrink-0" /><span>Follow the path through the mine tunnel to exit into the Springlands</span></li>
        </ul>
      </div>

      <InfoBox title="Pro Tip" type="tip">
        Before leaving the Cinder Vault, make sure you&apos;ve looted everything. You can return later, but it&apos;s 
        more efficient to grab all starter items now. Pay special attention to lore notes — they provide valuable 
        context for the world and are permanently recorded in your journal.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 2: BASIC CONTROLS ====================
function BasicControlsSection() {
  return (
    <Section id="basic-controls" title="Basic Controls" icon={<Gamepad2 className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded uses a standard PC control scheme that will feel familiar to anyone who has played action-RPGs 
        or survival games. The controls are fully rebindable in the settings menu.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Movement</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Move Forward</span><span className="text-[var(--text-gold)] font-mono">W</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Move Backward</span><span className="text-[var(--text-gold)] font-mono">S</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Strafe Left</span><span className="text-[var(--text-gold)] font-mono">A</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Strafe Right</span><span className="text-[var(--text-gold)] font-mono">D</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Sprint</span><span className="text-[var(--text-gold)] font-mono">Shift</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Jump</span><span className="text-[var(--text-gold)] font-mono">Space</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Crouch / Slide</span><span className="text-[var(--text-gold)] font-mono">Ctrl</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Dodge / Roll</span><span className="text-[var(--text-gold)] font-mono">Alt</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Combat</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Light Attack</span><span className="text-[var(--text-gold)] font-mono">LMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Heavy Attack</span><span className="text-[var(--text-gold)] font-mono">Hold LMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Block / Parry</span><span className="text-[var(--text-gold)] font-mono">RMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Merciless Strike</span><span className="text-[var(--text-gold)] font-mono">E (when available)</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Aim (Bow)</span><span className="text-[var(--text-gold)] font-mono">Hold RMB</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Shoot (Bow)</span><span className="text-[var(--text-gold)] font-mono">LMB (while aiming)</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Use Item</span><span className="text-[var(--text-gold)] font-mono">LMB</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Menus & UI</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Inventory</span><span className="text-[var(--text-gold)] font-mono">Tab / I</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Crafting</span><span className="text-[var(--text-gold)] font-mono">V</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Skill Tree</span><span className="text-[var(--text-gold)] font-mono">K</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Map</span><span className="text-[var(--text-gold)] font-mono">M</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Journal / Quests</span><span className="text-[var(--text-gold)] font-mono">J</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Character</span><span className="text-[var(--text-gold)] font-mono">C</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3">Interaction</h4>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Interact</span><span className="text-[var(--text-gold)] font-mono">E</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Pickup / Loot</span><span className="text-[var(--text-gold)] font-mono">F</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Place Glider</span><span className="text-[var(--text-gold)] font-mono">Space (mid-air)</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Grappling Hook</span><span className="text-[var(--text-gold)] font-mono">Q</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Build Mode</span><span className="text-[var(--text-gold)] font-mono">B</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-primary)]">Chat</span><span className="text-[var(--text-gold)] font-mono">Enter</span></li>
          </ul>
        </div>
      </div>

      <InfoBox title="Controller Support" type="info">
        Enshrouded fully supports controllers on PC. The game also features Steam Deck optimization. 
        Controller bindings can be customized in the settings menu. Many players find the combat 
        feels more intuitive with a controller, while building and inventory management is easier with mouse and keyboard.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 3: YOUR FIRST HOUR ====================
function FirstHourSection() {
  return (
    <Section id="first-hour" title="Your First Hour" icon={<Compass className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        The first hour of Enshrouded is critical. The decisions you make now will set the foundation 
        for your entire playthrough. Follow this step-by-step guide to ensure you start strong.
      </p>

      <div className="space-y-3">
        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">01</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Exit the Cinder Vault</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                After speaking with the Flame, follow the path through the mine tunnel. You&apos;ll face 1-2 basic enemies. 
                Dispatch them with your starter weapon and continue through the Shrouded area. The tunnel leads to 
                the <strong className="text-[var(--text-primary)]">Springlands</strong> — the starting region.
              </p>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">02</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Gather 5 Stone</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Look for <strong className="text-[var(--text-primary)]">small gray stones</strong> on the ground near the quest marker. 
                Walk up to them and press <strong className="text-[var(--text-gold)]">E</strong> to collect. 
                You need exactly 5 stones to craft your first <strong className="text-[var(--text-gold)]">Flame Altar</strong>. 
                Larger rocks require a Pickaxe — ignore those for now.
              </p>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">03</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Place Your First Flame Altar</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Open the crafting menu (<strong className="text-[var(--text-gold)]">V</strong>), select the Flame Altar, 
                and place it at the quest marker location. This establishes your <strong className="text-[var(--text-primary)]">base area</strong> — 
                a 40x40x40 zone where you can build permanently. Interact with it to commune with the Flame and receive new quests.
              </p>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">04</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Craft Essential Tools</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Immediately craft these essential items at your Workbench:
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Construction Hammer</strong> — 1 Stone (enter build mode)</span></li>
                <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Workbench</strong> — 8 Wood Logs + 3 String (crafting station)</span></li>
                <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Stone Axe</strong> — 4 Twigs + 1 Stone + 1 String (chop trees)</span></li>
                <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Scrappy Pickaxe</strong> — unlock recipe by crafting axe first</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">05</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Gather Basic Resources</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Spend the next 15-20 minutes gathering these fundamental resources:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Wood Logs</strong> — Chop trees with Stone Axe</span></div>
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Plant Fiber</strong> — Gather from bushes (press E)</span></div>
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Stone</strong> — Collect small gray rocks on ground</span></div>
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">String</strong> — Craft from Plant Fiber at Workbench</span></div>
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Berries</strong> — Pick from bushes for food</span></div>
                <div className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Resin</strong> — Chop red-colored trees</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">06</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Craft a Bow</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The <strong className="text-[var(--text-primary)]">bow</strong> is your best friend in the early game. 
                It lets you engage enemies from a safe distance and is essential for surviving tougher encounters. 
                Craft it at your Workbench as soon as possible. Remember to craft arrows too!
              </p>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--text-gold)] font-cinzel font-bold text-lg flex-shrink-0">07</span>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Activate the First Ancient Spire</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Follow the quest marker to the <strong className="text-[var(--text-gold)]">Springlands Ancient Spire</strong>. 
                Climb to the top and interact with the Flame Beacon. This unlocks <strong className="text-[var(--text-primary)]">fast travel</strong> 
                and reveals the surrounding area on your map. From the top, you can glide to distant locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InfoBox title="Priority Checklist" type="tip">
        In your first hour, focus on: placing a Flame Altar → crafting tools → gathering resources → making a bow → 
        activating the Springlands Spire. Everything else can wait. Don&apos;t venture into deep Shroud areas yet — 
        you need better gear and Flame Altar upgrades first.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 4: COMBAT BASICS ====================
function CombatSection() {
  return (
    <Section id="combat" title="Combat Basics" icon={<Swords className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Combat in Enshrouded is real-time and skill-based. Understanding the core mechanics — 
        attacking, dodging, parrying, and stamina management — is essential for survival.
      </p>

      <GuideImage
        src="/images/guides/combat-dodge.webp"
        alt="Combat in the Shroud"
        caption="Dodging enemy attacks is critical — stamina management can mean the difference between life and death."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Light & Heavy Attacks</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">Light attacks</strong> (LMB) are fast and consume less stamina. 
            <strong className="text-[var(--text-primary)]"> Heavy attacks</strong> (hold LMB) are slower but deal significantly 
            more damage and fill the enemy&apos;s stun bar faster. Chain light attacks together, then finish with a heavy 
            for maximum damage output.
          </p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Blocking & Parrying</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Hold <strong className="text-[var(--text-gold)]">RMB</strong> to block with a shield. A <strong className="text-[var(--text-primary)]">well-timed block</strong> 
            just before an enemy hits you becomes a <strong className="text-[var(--text-gold)]">parry</strong>, which staggers the enemy and 
            opens them up for a <strong className="text-[var(--text-primary)]">Merciless Strike</strong>. Practice parry timing — 
            it&apos;s the most powerful defensive tool in the game.
          </p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Dodging & Rolling</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Press <strong className="text-[var(--text-gold)]">Alt</strong> to dodge roll. This grants brief invincibility frames 
            and repositions you. The <strong className="text-[var(--text-primary)]">Blink</strong> skill (Healer tree) replaces 
            your roll with a short-range teleport — instant repositioning with no recovery frames. 
            Always keep enough stamina for at least one dodge.
          </p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Merciless Strike</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            When you fill an enemy&apos;s <strong className="text-[var(--text-primary)]">stun bar</strong> (white circle under health), 
            they become <strong className="text-[var(--text-primary)]">overpowered</strong>. Press <strong className="text-[var(--text-gold)]">E</strong> to 
            execute a devastating Merciless Strike that deals massive damage. This is your primary burst damage tool 
            against tougher enemies.
          </p>
        </div>
      </div>

      <GuideImage
        src="/images/guides/combat-parry.webp"
        alt="Parrying an enemy"
        caption="A successful parry staggers the enemy, leaving them vulnerable to a Merciless Strike."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Stamina Management</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Every action in combat consumes <strong className="text-[var(--text-primary)]">stamina</strong> — attacking, 
          dodging, blocking, and sprinting. When stamina runs out, you cannot perform these actions. 
          <strong className="text-[var(--accent-red)]"> Running out of stamina while dodging in the Shroud is often fatal.</strong>
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Always keep at least <strong className="text-[var(--text-primary)]">30% stamina</strong> in reserve for emergency dodges</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Stamina regenerates faster when you&apos;re not blocking or attacking</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Invest in <strong className="text-[var(--text-gold)]">Endurance</strong> attribute and stamina skills for more total stamina</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Food buffs can significantly boost stamina regeneration</span></li>
        </ul>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Weapon Types Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-[var(--accent-red)] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">One-Handed + Shield</strong> — Balanced offense/defense. Great for beginners. Allows blocking and parrying.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Two-Handed Weapons</strong> — High damage, slow swings. Heavy stamina cost. Best for Barbarian builds.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Bow</strong> — Ranged combat. Essential for engaging from safety and pulling single enemies.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-[#6a9ad0] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Staff (Magic)</strong> — Spellcasting from range. Consumes mana. Powerful AoE potential.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Daggers</strong> — Fast, low stamina cost. Excels at burst damage from behind. Assassin builds.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Swords className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Wand + Orb</strong> — Magic melee hybrid. Allows spellcasting while keeping a hand free for utility.</div>
          </div>
        </div>
      </div>

      <InfoBox title="Combat Tip for Beginners" type="tip">
        Your bow is your best friend in the early game. Use it to pull single enemies from groups, 
        deal damage from safe positions, and chip away at tough foes before engaging in melee. 
        Always craft plenty of arrows before leaving your base.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 5: THE SHROUD EXPLAINED ====================
function ShroudSection() {
  return (
    <Section id="shroud" title="The Shroud Explained" icon={<CloudFog className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        The <strong className="text-[#6a9ad0]">Shroud</strong> is Enshrouded&apos;s signature mechanic and your greatest threat. 
        Understanding how it works is absolutely essential for survival.
      </p>

      <GuideImage
        src="/images/guides/shroud-gameplay.webp"
        alt="The Shroud in gameplay"
        caption="The Shroud appears as a teal-tinted fog. When you enter it, a timer appears at the top of your screen."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How the Shroud Timer Works</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          When you enter the Shroud, a <strong className="text-[var(--text-primary)]">timer</strong> appears at the top of your screen. 
          By default, you have <strong className="text-[var(--text-gold)]">5 minutes</strong>. When the timer reaches zero, you die. 
          The timer does not reset when you exit — it only refills when you return to a safe zone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#6a9ad0]/5 rounded border border-[#6a9ad0]/20">
            <h4 className="font-cinzel text-xs font-bold text-[#6a9ad0] mb-2">Blue Shroud (Normal)</h4>
            <p className="text-[var(--text-secondary)]">Standard Shroud areas. 5-minute timer drains slowly. Manageable with basic Flame Altar upgrades. Most early-game Shroud areas are this type.</p>
          </div>
          <div className="p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <h4 className="font-cinzel text-xs font-bold text-[var(--accent-red)] mb-2">Red Shroud (Deadly)</h4>
            <p className="text-[var(--text-secondary)]">Drains your timer almost instantly. Fatal without sufficient Flame Altar strength. Red Shroud turns blue as you upgrade your Flame Altar level.</p>
          </div>
        </div>
      </div>

      <GuideImage
        src="/images/guides/shroud-wood.webp"
        alt="Gathering Shroud Wood"
        caption="The Shroud contains unique resources like Shroud Wood that can only be found inside."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Extending Your Shroud Time</h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Flame className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Flame Altar Upgrades:</strong> Each level adds +1 minute to your Shroud timer. Level 1 = 5 min, Level 2 = 6 min, up to Level 6 = 10 min.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-4 h-4 rounded-full bg-orange-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Hourglass Capsules:</strong> Small containers with a reddish glow found inside the Shroud. Interact to refill your timer to maximum. Have a cooldown after use.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-4 h-4 rounded-full bg-[var(--accent-green)] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Return Beacons:</strong> Respawn points inside the Shroud. Standing near one replenishes your timer to full. Mark their locations!</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-4 h-4 rounded-full bg-purple-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Shroud Survival Flask:</strong> Loot from containers. Adds +2 minutes to your Shroud timer for 45 minutes. Extremely valuable for deep expeditions.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Shield className="w-4 h-4 text-[#6a9ad0] flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Shroud Filter Skill:</strong> A skill in the Trickster tree that slows Shroud timer drain by 30%. Worth taking if you explore Shroud areas frequently.</div>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Why Enter the Shroud?</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          The Shroud is dangerous, but it&apos;s also where the <strong className="text-[var(--text-gold)]">best rewards</strong> are found. 
          You should enter the Shroud regularly for these reasons:
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Shroud Roots:</strong> Destroy these with an axe for +1 skill point each (39 total across the map)</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Elixir Wells:</strong> Clearing one grants +3 skill points (57 total from 19 wells)</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Shroud Cores:</strong> Needed to upgrade your Flame Altar — only drop from Shroud bosses</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Unique Materials:</strong> Shroud Wood, Shroud Spores, and other Shroud-only crafting materials</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Best Loot:</strong> Higher-tier weapons, armor, and consumables are found in Shroud chests</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">NPC Rescue Missions:</strong> Several survivors are trapped inside Shroud areas</span></li>
        </ul>
      </div>

      <InfoBox title="Shroud Survival Golden Rule" type="warning">
        Always know your escape route before entering the Shroud. Look for the nearest safe zone, 
        Return Beacon, or Hourglass Capsule. Never explore deeper than you can retreat from. 
        If your timer drops below 60 seconds, start heading for the exit immediately.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 6: BASE BUILDING ====================
function BaseBuildingSection() {
  return (
    <Section id="base-building" title="Base Building" icon={<Home className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Base building is a core part of Enshrouded. Your base is your sanctuary — a place to craft, 
        store items, rest, and plan expeditions. The game uses a <strong className="text-[var(--text-primary)]">voxel-based building system</strong> 
        that gives you incredible creative freedom.
      </p>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Flame Altar</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          The <strong className="text-[var(--text-gold)]">Flame Altar</strong> is the heart of your base. It defines your 
          buildable area, acts as a fast travel point, and is where you upgrade your Flame level. 
          Everything you build within the Altar&apos;s radius is <strong className="text-[var(--text-primary)]">permanent</strong>. 
          Anything built outside resets after 30 minutes or on game restart.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          <StatCard label="Level 1" value="40³" />
          <StatCard label="Level 2" value="80³" />
          <StatCard label="Level 3" value="120³" />
          <StatCard label="Level 4" value="160³" />
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Each Altar upgrade doubles the buildable dimensions. Upgrading requires <strong className="text-[var(--text-primary)]">Shroud Cores</strong>, 
          which drop from Shroud bosses. You can place up to <strong className="text-[var(--text-gold)]">10 Flame Altars</strong> in the world.
        </p>
      </div>

      <InfoBox title="Base Location Tips" type="tip">
        Your first base location (near the Springlands quest marker) works fine for the early game. 
        However, consider these factors for future bases: flat terrain for easy building, proximity to resources, 
        near an Ancient Spire for fast travel access, and central location within a region.
      </InfoBox>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Strengthening the Flame</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          In addition to Altar size upgrades, you can <strong className="text-[var(--text-primary)]">Strengthen the Flame</strong> 
          at your Altar. This is the most important progression system in the game. Each Flame level provides:
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>+1 to <strong className="text-[var(--text-primary)]">all attributes</strong> (from Level 2 onward)</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>+1 minute to <strong className="text-[var(--text-primary)]">Shroud survival time</strong></span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Increased <strong className="text-[var(--text-primary)]">Shroud Passage Level</strong> (unlocks red Shroud areas)</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>+1 <strong className="text-[var(--text-primary)]">Character Attribute Bonus</strong></span></li>
        </ul>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-3">
          Flame Strengthening materials vary by level — they include mushrooms, bones, ore, glands, and boss heads. 
          Plan ahead and gather materials as you explore.
        </p>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Building System Basics</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Press <strong className="text-[var(--text-gold)]">B</strong> to enter Build Mode with your Construction Hammer. 
          The building system features:
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Voxel blocks:</strong> Place individual blocks for precise construction</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Pre-made pieces:</strong> Walls, floors, roofs, stairs, and decorative elements</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">No structural integrity:</strong> Buildings don&apos;t collapse — build floating castles if you want!</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Snapping:</strong> Press X to toggle snapping for aligned placement</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Terrain sculpting:</strong> Raise, lower, and paint terrain within your base area</span></li>
        </ul>
      </div>

      <InfoBox title="Building Tip" type="info">
        Start simple — a small shelter with a bed and storage chests is enough for the early game. 
        Expand gradually as you unlock new materials and NPC crafters. Don&apos;t try to build a massive 
        castle immediately; focus on functionality first.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 7: CRAFTING SYSTEM ====================
function CraftingSection() {
  return (
    <Section id="crafting" title="Crafting System" icon={<Wrench className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Crafting is how you turn raw materials into tools, weapons, armor, and base components. 
        Understanding the crafting system is essential for progression.
      </p>

      <GuideImage
        src="/images/guides/crafting-axe.webp"
        alt="Crafting menu interface"
        caption="The crafting menu shows required materials, output items, and crafting time."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Essential Crafting Stations</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Wrench className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Workbench</strong> — 8 Wood Logs + 3 String. Your primary crafting station for tools, weapons, and building blocks. Required for most recipes.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Flame className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Flame Altar</strong> — 5 Stone. The heart of your base. Also used for skill resets and Flame upgrades.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Home className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Construction Hammer</strong> — 1 Stone. Enters build mode. Essential for placing building pieces and sculpting terrain.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <div className="w-8 h-8 rounded bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0"><Utensils className="w-4 h-4 text-[var(--text-gold)]" /></div>
            <div><strong className="text-[var(--text-primary)]">Drying Rack</strong> — Unlocked via Hunter NPC. Dries meat and berries for preservation and buffs.</div>
          </div>
        </div>
      </div>

      <GuideImage
        src="/images/guides/crafting-loom.webp"
        alt="Loom crafting station"
        caption="Advanced crafting stations like the Loom (from the Tailor NPC) unlock higher-tier recipes."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Resource Gathering Guide</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Wood Logs</strong>
            <span className="text-[var(--text-secondary)]">Chop trees with Stone Axe. Red trees yield Resin. Large trees yield more logs.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Stone / Metal Ore</strong>
            <span className="text-[var(--text-secondary)]">Mine stone outcrops and ore veins with Pickaxe. Look for colored veins on cliff faces.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Plant Fiber → String</strong>
            <span className="text-[var(--text-secondary)]">Gather from bushes (press E). Craft into String at Workbench. Essential early material.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Shroud Wood</strong>
            <span className="text-[var(--text-secondary)]">Found only inside the Shroud. Chop dead trees with teal bark. Used for Glider and advanced items.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Animal Resources</strong>
            <span className="text-[var(--text-secondary)]">Kill wildlife for meat, fur, and bones. Different animals drop different resources.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-1">Metal Scraps</strong>
            <span className="text-[var(--text-secondary)]">Loot from abandoned towns and ruins. Used for Grappling Hook and metal crafting.</span>
          </div>
        </div>
      </div>

      <InfoBox title="Crafting Efficiency" type="tip">
        Pin recipes you use frequently by pressing F while hovering over them in the crafting menu. 
        Pinned recipes show at the top of the list, saving you from scrolling. Also, many crafting 
        stations can be operated by rescued NPCs — place them near your base for convenience.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 8: MOVEMENT & TRAVERSAL ====================
function TraversalSection() {
  return (
    <Section id="traversal" title="Movement & Traversal" icon={<MapPin className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Embervale is a massive vertical world. Mastering the traversal tools — <strong className="text-[var(--text-gold)]">Glider</strong>, 
        <strong className="text-[var(--text-gold)]"> Grappling Hook</strong>, and <strong className="text-[var(--text-gold)]">Double Jump</strong> — 
        will transform how you explore and dramatically reduce travel time.
      </p>

      <GuideImage
        src="/images/guides/glider-flying.webp"
        alt="Gliding over Embervale"
        caption="The Glider is your single biggest mobility upgrade — you can cross entire biomes in a single flight from a Spire."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Glider</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          The <strong className="text-[var(--text-primary)]">Glider</strong> unlocks via the Blacksmith&apos;s quest around level 5. 
          It deploys automatically when you jump from height — just press <strong className="text-[var(--text-gold)]">Space</strong> mid-air. 
          Higher-tier gliders are crafted at the Carpenter and offer dramatically improved range and speed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Glider Tier</th>
                <th className="text-center py-2 text-[var(--text-gold)] font-cinzel">Range</th>
                <th className="text-center py-2 text-[var(--text-gold)] font-cinzel">Speed</th>
                <th className="text-center py-2 text-[var(--text-gold)] font-cinzel">Stamina/s</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Basic Glider</td><td className="text-center">100%</td><td className="text-center">10</td><td className="text-center">4</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Advanced Glider</td><td className="text-center">150%</td><td className="text-center">15</td><td className="text-center">4</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Extraordinary Glider</td><td className="text-center">200%</td><td className="text-center">20</td><td className="text-center">5</td></tr>
              <tr><td className="py-1.5 text-[var(--text-gold)]">Ghost Glider</td><td className="text-center text-[var(--text-gold)]">250%</td><td className="text-center text-[var(--text-gold)]">25</td><td className="text-center">5</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--text-secondary)] mt-3">
          <strong className="text-[var(--text-primary)]">Recipe:</strong> 8 Shroud Wood + 2 Animal Fur + 2 String + 2 Shroud Spores. 
          Craft at the Workbench.
        </p>
      </div>

      <GuideImage
        src="/images/guides/glider-mountains.webp"
        alt="Flying over mountains with Glider"
        caption="With Updraft and Double Jump skills, you can chain flights to traverse the entire map without touching the ground."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The Grappling Hook</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          The <strong className="text-[var(--text-primary)]">Grappling Hook</strong> unlocks when you first collect 
          <strong className="text-[var(--text-primary)]"> Shroud Spores</strong> from Fell enemies. It allows you to latch onto 
          glowing grapple points and certain ledges to swing across gaps and climb vertical surfaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Basic Grappling Hook</h4>
            <p className="text-[var(--text-secondary)]">4 Metal Scraps + 7 String + 10 Shroud Spores. Stamina cost: 40 per use.</p>
          </div>
          <div className="p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-1">Improved Grappling Hook</h4>
            <p className="text-[var(--text-secondary)]">Learned from Alchemist&apos;s quest. 1 Shroud Core + 2 Shroud Liquid + 3 Shroud Spores + 1 Basic Hook. Stamina: 30.</p>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Essential Traversal Skills</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">4 SP</span>
            <div><strong className="text-[var(--text-primary)]">Double Jump</strong> — The single most impactful traversal skill. A mid-air second jump that lets you reach grapple points and glide launch spots you&apos;d otherwise miss. Essential for every build.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">2 SP</span>
            <div><strong className="text-[var(--text-primary)]">Updraft</strong> — Extends glider flight range and lets you ascend steep hills. Pair with Double Jump to climb mountains that would otherwise block your path.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">4 SP</span>
            <div><strong className="text-[var(--text-primary)]">Blink</strong> — Replaces dodge roll with a short-range teleport. Instant repositioning with no recovery frames. Amazing for both combat and traversal.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">2 SP</span>
            <div><strong className="text-[var(--text-primary)]">Airborne</strong> — Reduces stamina consumption while gliding. Lets you fly further before landing. From the Assassin tree.</div>
          </div>
        </div>
      </div>

      <InfoBox title="The Leap-Glide Method" type="tip">
        Fast travel to an Ancient Spire, climb to the top, deploy your Glider, and soar across the biome. 
        This is the fastest way to explore. With Double Jump + Updraft + a good Glider, you can cross 
        most of a biome in a single flight. Place a Flame Altar at your destination for a permanent return point.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 9: SKILL TREES & BUILDS ====================
function SkillsSection() {
  return (
    <Section id="skills" title="Skill Trees & Builds" icon={<GitBranch className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded features a <strong className="text-[var(--text-primary)]">single shared skill tree</strong> with 
        12 archetypes. There are no locked classes — you can invest in any combination of skill trees. 
        Every level grants <strong className="text-[var(--text-gold)]">2 skill points</strong>.
      </p>

      <GuideImage
        src="/images/guides/skill-tree-full.webp"
        alt="Complete skill tree"
        caption="The skill tree is arranged as a four-color ring — Red (melee), Blue (magic), Green (ranged), and Gold (mobility)."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How Skill Points Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <StatCard label="From Levels" value="88" />
          <StatCard label="From Shroud Roots" value="39" />
          <StatCard label="From Elixir Wells" value="57" />
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          <strong className="text-[var(--text-gold)]">Total: 184 skill points</strong> if you reach max level and complete all Roots and Wells. 
          The tree has more nodes than you can ever fill, so you will always make meaningful choices. 
          Prioritize Shroud Roots and Elixir Wells — they provide skill points outside of leveling.
        </p>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">The 12 Archetypes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-red-900/10 rounded border border-red-500/20">
            <strong className="text-red-400 block mb-0.5">Warrior</strong>
            <span className="text-[var(--text-secondary)]">Melee damage, Strength scaling. +10% melee damage from Warrior&apos;s Path.</span>
          </div>
          <div className="p-2 bg-red-900/10 rounded border border-red-500/20">
            <strong className="text-red-400 block mb-0.5">Tank</strong>
            <span className="text-[var(--text-secondary)]">Survivability, Constitution. +50 Health per point. Shiny Plates for +10% armor.</span>
          </div>
          <div className="p-2 bg-orange-900/10 rounded border border-orange-500/20">
            <strong className="text-orange-400 block mb-0.5">Barbarian</strong>
            <span className="text-[var(--text-secondary)]">Two-handed weapons, heavy strikes. Heavy Handed fills enemy stun bar 20% faster.</span>
          </div>
          <div className="p-2 bg-yellow-900/10 rounded border border-yellow-500/20">
            <strong className="text-yellow-400 block mb-0.5">Athlete</strong>
            <span className="text-[var(--text-secondary)]">Mobility, jumping. Crash Down Attack deals 50% more damage from mid-air.</span>
          </div>
          <div className="p-2 bg-blue-900/10 rounded border border-blue-500/20">
            <strong className="text-blue-400 block mb-0.5">Wizard</strong>
            <span className="text-[var(--text-secondary)]">Pure magic, Intelligence scaling. Frost, Lightning, and Fire spell branches.</span>
          </div>
          <div className="p-2 bg-indigo-900/10 rounded border border-indigo-500/20">
            <strong className="text-indigo-400 block mb-0.5">Battlemage</strong>
            <span className="text-[var(--text-secondary)]">Magic-melee hybrid. Wand + melee combos. Arcane Deflection restores mana on parry.</span>
          </div>
          <div className="p-2 bg-purple-900/10 rounded border border-purple-500/20">
            <strong className="text-purple-400 block mb-0.5">Healer</strong>
            <span className="text-[var(--text-secondary)]">Healing magic, support. Blink teleport, Water Aura self-healing, revive allies.</span>
          </div>
          <div className="p-2 bg-pink-900/10 rounded border border-pink-500/20">
            <strong className="text-pink-400 block mb-0.5">Trickster</strong>
            <span className="text-[var(--text-secondary)]">Debuffs, crowd control. Begone! stuns enemies. Counterstrike reflects damage.</span>
          </div>
          <div className="p-2 bg-green-900/10 rounded border border-green-500/20">
            <strong className="text-green-400 block mb-0.5">Ranger</strong>
            <span className="text-[var(--text-secondary)]">Bow mastery, Dexterity scaling. Sharpshooter, Eagle Eye for ranged precision.</span>
          </div>
          <div className="p-2 bg-teal-900/10 rounded border border-teal-500/20">
            <strong className="text-teal-400 block mb-0.5">Assassin</strong>
            <span className="text-[var(--text-secondary)]">Daggers, backstabs, stealth. Sneak Attack deals 900% damage from behind.</span>
          </div>
          <div className="p-2 bg-emerald-900/10 rounded border border-emerald-500/20">
            <strong className="text-emerald-400 block mb-0.5">Beastmaster</strong>
            <span className="text-[var(--text-secondary)]">Companions, poison resistance. Poison Resistance is valuable for Shroud exploration.</span>
          </div>
          <div className="p-2 bg-lime-900/10 rounded border border-lime-500/20">
            <strong className="text-lime-400 block mb-0.5">Survivor</strong>
            <span className="text-[var(--text-secondary)]">Utility, exploration. Double Jump, extra food slot (Dessert Stomach), stamina skills.</span>
          </div>
        </div>
      </div>

      <GuideImage
        src="/images/guides/skill-tree-ranger.webp"
        alt="Ranger skill tree build"
        caption="A focused Ranger build path — invest in Dexterity and bow damage skills for maximum ranged output."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Core Attributes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border-gold)]/20">
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Attribute</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Effect per Point</th>
                <th className="text-left py-2 text-[var(--text-gold)] font-cinzel">Best For</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Constitution</td><td>+50 Health</td><td>Tank, melee survivability</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Strength</td><td>+5% Melee damage</td><td>Warrior, Barbarian</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Dexterity</td><td>+5% Bow & Dagger damage</td><td>Ranger, Assassin</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Endurance</td><td>+10 Stamina</td><td>Survivor, mobile melee</td></tr>
              <tr className="border-b border-[var(--border-gold)]/10"><td className="py-1.5 text-[var(--text-primary)]">Spirit</td><td>+20 Mana</td><td>Wizard, Battlemage, Healer</td></tr>
              <tr><td className="py-1.5 text-[var(--text-primary)]">Intelligence</td><td>+5% Magic damage</td><td>Wizard, Battlemage</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Recommended: Universal First Skills</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Regardless of your build, these skills deliver value for every playstyle:
        </p>
        <ol className="space-y-1.5 text-xs text-[var(--text-secondary)] list-decimal list-inside">
          <li><strong className="text-[var(--text-primary)]">Double Jump</strong> (4 SP, Survivor) — Essential mobility</li>
          <li><strong className="text-[var(--text-primary)]">Updraft</strong> (2 SP, Survivor) — Glider synergy</li>
          <li><strong className="text-[var(--text-primary)]">Good Metabolism</strong> (2 SP, General) — More healing from consumables</li>
          <li><strong className="text-[var(--text-primary)]">Shiny Plates</strong> (2 SP, Tank) — +10% armor, cheapest defense</li>
          <li><strong className="text-[var(--text-primary)]">Blink</strong> (4 SP, Healer) — Teleport dodge</li>
        </ol>
        <p className="text-xs text-[var(--text-secondary)] mt-3">
          This foundation (14 SP total) gives you strong mobility, improved healing, and a defensive buffer 
          before you commit to a specific damage archetype.
        </p>
      </div>

      <InfoBox title="Respec is Cheap!" type="info">
        You can reset your entire skill tree at any Flame Altar for 1 Rune per spent skill point. 
        Runes are plentiful — they drop from Shroud enemies, chests, and gear salvage. 
        Don&apos;t be afraid to experiment with different builds. There is no penalty for switching.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 10: FOOD & BUFFS ====================
function FoodSection() {
  return (
    <Section id="food" title="Food & Buffs" icon={<Utensils className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Food is not just for survival in Enshrouded — it&apos;s a <strong className="text-[var(--text-gold)]">powerful buff system</strong>. 
        Always have food buffs active, as they provide massive stat boosts that can make or break difficult encounters.
      </p>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Food Types & Bonuses</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          There are 8 food categories, each providing different bonuses. You can have <strong className="text-[var(--text-primary)]">3 food buffs active</strong> 
          at once (4 with the Dessert Stomach skill). Each category gives a specific buff:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-red-900/10 rounded border border-red-500/20">
            <span className="text-red-400 font-bold flex-shrink-0">Meat</span>
            <span className="text-[var(--text-secondary)]">Health boost + melee damage bonus</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-green-900/10 rounded border border-green-500/20">
            <span className="text-green-400 font-bold flex-shrink-0">Vegetables</span>
            <span className="text-[var(--text-secondary)]">Ranged damage bonus</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-pink-900/10 rounded border border-pink-500/20">
            <span className="text-pink-400 font-bold flex-shrink-0">Fruits</span>
            <span className="text-[var(--text-secondary)]">Health regeneration</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-blue-900/10 rounded border border-blue-500/20">
            <span className="text-blue-400 font-bold flex-shrink-0">Liquids</span>
            <span className="text-[var(--text-secondary)]">Stamina bonus & regeneration</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-purple-900/10 rounded border border-purple-500/20">
            <span className="text-purple-400 font-bold flex-shrink-0">Herbs</span>
            <span className="text-[var(--text-secondary)]">Mana bonus</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-yellow-900/10 rounded border border-yellow-500/20">
            <span className="text-yellow-400 font-bold flex-shrink-0">Grains</span>
            <span className="text-[var(--text-secondary)]">Melee damage bonus</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-indigo-900/10 rounded border border-indigo-500/20">
            <span className="text-indigo-400 font-bold flex-shrink-0">Mushrooms</span>
            <span className="text-[var(--text-secondary)]">Magic damage bonus</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-orange-900/10 rounded border border-orange-500/20">
            <span className="text-orange-400 font-bold flex-shrink-0">Sweets</span>
            <span className="text-[var(--text-secondary)]">Short burst stamina regen</span>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Early Game Food Setup</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          As a beginner, you want a simple but effective food rotation. Here are easily accessible early foods:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-red-400 mb-1">Health</h4>
            <p className="text-[var(--text-secondary)]">Grilled Wolf Meat (craft at fire). Raw meat causes stamina penalty — always cook it!</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-1">Stamina</h4>
            <p className="text-[var(--text-secondary)]">Water (from wells or water pouch) or Honey (gathered from beehives for +30 stamina regen).</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-green-400 mb-1">Damage</h4>
            <p className="text-[var(--text-secondary)]">Berries for ranged damage, or Tomatoes/Bell Peppers found in the Springlands and Revelwood.</p>
          </div>
        </div>
      </div>

      <InfoBox title="Food Rules" type="warning">
        <ul className="space-y-1">
          <li>&#9679; You can only have ONE food from each category active at a time</li>
          <li>&#9679; Food buffs have limited durations — always re-buff before they expire</li>
          <li>&#9679; A food slot can be refreshed when it has 20% duration remaining</li>
          <li>&#9679; Raw meat causes -75 stamina penalty and negative regen — ALWAYS cook meat</li>
          <li>&#9679; The Dessert Stomach skill (Survivor tree) adds a 4th food slot</li>
        </ul>
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 11: GEAR & REPAIR ====================
function GearSection() {
  return (
    <Section id="gear" title="Gear & Repair" icon={<Backpack className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Your gear is your lifeline in Enshrouded. Understanding durability, repair, and upgrade systems 
        will save you from losing your best equipment at the worst possible moment.
      </p>

      <GuideImage
        src="/images/guides/inventory-backpack.webp"
        alt="Inventory and crafting menu"
        caption="Your inventory shows equipped gear, quick slots, and resource storage. Upgrade your backpack early for more carrying capacity."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Durability System</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          All weapons, tools, and armor have <strong className="text-[var(--text-primary)]">durability</strong>. 
          Using them decreases the durability bar shown below the item in your hotbar. When the bar turns red, 
          your gear is about to break. <strong className="text-[var(--accent-red)]">Items that reach zero durability are destroyed permanently.</strong>
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Weapons lose durability with each attack</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Tools lose durability when gathering resources</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Armor loses durability when you take damage</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>The Workbench also has durability (each use consumes some)</span></li>
        </ul>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How to Repair</h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--accent-green)]/20">
            <Wrench className="w-4 h-4 text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--text-primary)]">Workbench Repair (Primary Method)</strong>
              <p className="text-[var(--text-secondary)] mt-1">Simply interact with your Workbench. All equipped gear is <strong className="text-[var(--text-primary)]">fully repaired automatically</strong> at zero material cost. This is your go-to repair method.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <MapPin className="w-4 h-4 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--text-primary)]">Anvils (Field Repair)</strong>
              <p className="text-[var(--text-secondary)] mt-1">Anvils are found scattered in ruins across the world. Interacting with one repairs all equipped gear. Remember their locations for emergency repairs during long expeditions.</p>
            </div>
          </div>
        </div>
      </div>

      <InfoBox title="Critical Repair Warning" type="warning">
        <strong>Once an item breaks (0 durability), it is gone forever.</strong> There is no way to restore a broken item. 
        Make it a habit to repair at your Workbench every time you return to base. Carry backup weapons on long expeditions.
      </InfoBox>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Gear Upgrades</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          You can upgrade weapons and armor at crafter NPCs using <strong className="text-[var(--text-gold)]">Runes</strong>. 
          Higher quality items can be upgraded more times:
        </p>
        <div className="grid grid-cols-5 gap-2 text-xs text-center">
          <div className="game-panel corner-decor p-2"><div className="text-gray-400 font-bold">White</div><div className="text-[var(--text-muted)] text-[10px]">1 upgrade</div></div>
          <div className="game-panel corner-decor p-2"><div className="text-green-400 font-bold">Green</div><div className="text-[var(--text-muted)] text-[10px]">2 upgrades</div></div>
          <div className="game-panel corner-decor p-2"><div className="text-blue-400 font-bold">Blue</div><div className="text-[var(--text-muted)] text-[10px]">3 upgrades</div></div>
          <div className="game-panel corner-decor p-2"><div className="text-purple-400 font-bold">Purple</div><div className="text-[var(--text-muted)] text-[10px]">4 upgrades</div></div>
          <div className="game-panel corner-decor p-2"><div className="text-orange-400 font-bold">Orange</div><div className="text-[var(--text-muted)] text-[10px]">5 upgrades</div></div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Inventory Management</h3>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Backpack Upgrades:</strong> Craft Small Backpack (+8 slots) at the Hunter. Later backpacks add even more space.</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Cosmetic Slots:</strong> Unused cosmetic slots can hold armor pieces — use them as extra storage!</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Storage Chests:</strong> Build these at your base. Items in chests are safe and accessible by all characters in your world.</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Salvaging:</strong> Destroy unwanted gear to recover Runes. Always salvage low-level gear instead of dropping it.</span></li>
        </ul>
      </div>
    </Section>
  );
}

// ==================== SECTION 12: FAST TRAVEL ====================
function FastTravelSection() {
  return (
    <Section id="fast-travel" title="Fast Travel" icon={<Zap className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Efficient travel is key to enjoying Enshrouded. The game offers two fast travel systems that work together 
        to create a network of travel points across Embervale.
      </p>

      <GuideImage
        src="/images/guides/spire-map.webp"
        alt="Ancient Spire on the map"
        caption="Activated Ancient Spires appear as fast travel icons on your world map."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Ancient Spires</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
            Tall towers scattered across each region. Climb to the top and interact with the Flame Beacon to activate. 
            Once activated, they serve as <strong className="text-[var(--text-primary)]">permanent fast travel hubs</strong>.
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Free to use — no resource cost</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Reveals surrounding area on map</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Ideal glider launch points</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Cannot fast travel FROM inside the Shroud</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">Flame Altars</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
            Your placed Flame Altars also act as fast travel points. You start with 2 altar slots and gain more 
            by upgrading with Shroud Cores (up to 10 total).
          </p>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Place them strategically near resources</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Act as escape points from the Shroud</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Free to use with no cooldown</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)]">&#9679;</span><span>Can be renamed for easier navigation</span></li>
          </ul>
        </div>
      </div>

      <InfoBox title="Fast Travel Restrictions" type="warning">
        You <strong>cannot</strong> fast travel while inside the Shroud. If you need to escape, run to the nearest 
        Flame Altar at the edge of the Shroud, or use a Return Beacon. Plan your routes so you always have 
        an exit strategy.
      </InfoBox>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Death & Respawn</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          When you die, you respawn at your last activated Flame Altar. <strong className="text-[var(--text-primary)]">There is no death penalty</strong> 
          in Enshrouded — you don&apos;t lose experience, items, or skills. However, you do need to run back to your 
          <strong className="text-[var(--text-primary)]"> tombstone</strong> (where you died) to recover any items you were carrying.
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Your tombstone remains indefinitely — no time limit to recover</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Tombstones show your character name (helpful in multiplayer)</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Only YOU can loot your own tombstone</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>If you die again before recovering, the old tombstone is replaced</span></li>
        </ul>
      </div>
    </Section>
  );
}

// ==================== SECTION 13: COMMON MISTAKES & TIPS ====================
function MistakesSection() {
  return (
    <Section id="mistakes" title="Common Mistakes & Pro Tips" icon={<AlertTriangle className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Learn from the mistakes of others. These tips will save you hours of frustration and help you 
        progress efficiently through Embervale.
      </p>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--accent-red)] mb-3">Mistakes to Avoid</h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">01</span>
            <div><strong className="text-[var(--text-primary)]">Skipping Ancient Spires</strong> — This is the #1 mistake new players make. Every Spire you activate reveals Obelisks, Shroud Roots, and Flame Shrines on your map. Climb each Spire immediately when entering a new biome. It makes everything else faster.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">02</span>
            <div><strong className="text-[var(--text-primary)]">Ignoring the Bow</strong> — The bow is not optional — it&apos;s essential. Use it to pull single enemies, deal damage from safety, and chip away at tough foes before melee engagement. Always craft arrows before leaving base.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">03</span>
            <div><strong className="text-[var(--text-primary)]">Deep Shroud Too Early</strong> — The Shroud&apos;s deepest areas require Flame Level upgrades. Don&apos;t try to brute-force red Shroud zones. Upgrade your Flame Altar first, and the red zones will turn blue as your level increases.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">04</span>
            <div><strong className="text-[var(--text-primary)]">Letting Gear Break</strong> — Once durability hits zero, your item is gone forever. Repair at your Workbench every time you return to base. Set a mental alarm — red bar means repair NOW.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">05</span>
            <div><strong className="text-[var(--text-primary)]">Not Eating Food</strong> — Food buffs provide massive power increases. Three active food buffs can more than double your effective damage. Always keep buffs active — the materials are easy to gather.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">06</span>
            <div><strong className="text-[var(--text-primary)]">Forgetting to Upgrade Flame Altar</strong> — The Flame Altar is not just for base size. Flame Strengthening increases ALL your attributes, Shroud time, and unlocks red zones. Make this a constant priority.</div>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--accent-green)] mb-3">Pro Tips</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Pin Recipes:</strong> Press F on frequently used recipes to pin them to the top of your crafting menu.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Follow the Sparkles:</strong> In the Shroud, glowing sparkles and lampposts guide you toward safety and loot. Always follow them.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Use Difficulty Settings:</strong> If weapon durability annoys you, disable it in the server settings. Play the way you enjoy.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Build Forward Camps:</strong> Place small Flame Altars near biome borders. They act as fast travel anchors and save you from 10-minute corpse runs.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Rescue NPCs ASAP:</strong> Each rescued NPC unlocks new crafting stations and recipes. Prioritize the Carpenter (building), Hunter (leather), and Blacksmith (metal).</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Destroy Every Shroud Root:</strong> Each root destroyed gives +1 skill point. Even if the area feels dangerous, the extra skill points are always worth it.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Salvage, Don&apos;t Drop:</strong> Destroy unwanted gear at your Workbench to recover Runes. Dropping items on the ground causes them to despawn.</div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--accent-green)]/5 rounded border border-[var(--accent-green)]/20">
            <span className="text-[var(--accent-green)] font-bold flex-shrink-0">&#10003;</span>
            <div><strong className="text-[var(--text-primary)]">Red Trees = Resin:</strong> Trees with red bark yield Resin when chopped. Gather at least 5 whenever you see them — it&apos;s used in many important recipes.</div>
          </div>
        </div>
      </div>

      <InfoBox title="Final Advice" type="tip">
        Enshrouded is a game about exploration and experimentation. Don&apos;t stress about optimal builds 
        or perfect bases — respec is cheap, bases can be rebuilt, and there&apos;s no death penalty. 
        Take your time, enjoy the world, and learn as you go. The journey through Embervale is meant 
        to be savored, not rushed.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 14: MULTIPLAYER CO-OP ====================
function MultiplayerSection() {
  return (
    <Section id="multiplayer" title="Multiplayer Co-op" icon={<Users className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded supports <strong className="text-[var(--text-gold)]">up to 16 players</strong> in online co-op. 
        Playing with friends transforms the experience — you can tackle harder content together, 
        share resources, build communal bases, and revive each other in combat.
      </p>

      <GuideImage
        src="/images/guides/multiplayer-coop.webp"
        alt="Multiplayer co-op gameplay"
        caption="Team up with friends to explore the Ancient Spires and conquer tough bosses together."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How to Play Co-op</h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">Host</span>
            <div><strong className="text-[var(--text-primary)]">Hosting a Game:</strong> Start a world and open it to friends. Your world save is stored locally. Up to 16 players can join. You can set a password for private sessions.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">Join</span>
            <div><strong className="text-[var(--text-primary)]">Joining a Game:</strong> Use the Join menu to browse public servers or enter a friend&apos;s server IP directly. You can also join via Steam friends list.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">Save</span>
            <div><strong className="text-[var(--text-primary)]">Character Saves:</strong> Your character progress (skills, inventory) is saved separately from the world. You can take your character to different worlds!</div>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Multiplayer Benefits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--accent-green)]">&#9679;</span>
            <span><strong className="text-[var(--text-primary)]">Revive System:</strong> Downed players can be revived by allies. A Healer&apos;s revive skill works at range.</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--accent-green)]">&#9679;</span>
            <span><strong className="text-[var(--text-primary)]">Shared Bases:</strong> All players can build in the same Flame Altar zone. Coordinate for massive projects.</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--accent-green)]">&#9679;</span>
            <span><strong className="text-[var(--text-primary)]">Loot Sharing:</strong> Chest loot is per-player — everyone gets their own drops from containers.</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--accent-green)]">&#9679;</span>
            <span><strong className="text-[var(--text-primary)]">Combat Synergy:</strong> One player tanks with shield, another DPS with bow, a third heals. Much more effective than solo.</span>
          </div>
        </div>
      </div>

      <InfoBox title="Multiplayer Tip" type="tip">
        Assign roles in your group: one player focuses on melee/tanking, another on ranged DPS, 
        and a third on healing/support. The Healer&apos;s Water Aura and revive abilities are 
        incredibly powerful in group play. Communication is key for tough boss fights.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 15: DAY & NIGHT CYCLE ====================
function DayNightSection() {
  return (
    <Section id="day-night" title="Day & Night Cycle" icon={<Sun className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Embervale features a dynamic <strong className="text-[var(--text-gold)]">day/night cycle</strong> that 
        affects gameplay, enemy behavior, and exploration. Understanding how darkness changes the world 
        is essential for safe travel.
      </p>

      <GuideImage
        src="/images/guides/night-running.webp"
        alt="Nighttime exploration with torch"
        caption="Nighttime in Embervale is dangerous — visibility drops and enemy patrols change."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Day vs. Night Differences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-yellow-900/10 rounded border border-yellow-500/20">
            <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-2">Daytime</h4>
            <ul className="space-y-1 text-[var(--text-secondary)]">
              <li>&#9679; Full visibility across all regions</li>
              <li>&#9679; Standard enemy spawn rates</li>
              <li>&#9679; NPCs are active at their stations</li>
              <li>&#9679; Best time for exploration and building</li>
              <li>&#9679; Wildlife is more active and visible</li>
            </ul>
          </div>
          <div className="p-3 bg-indigo-900/10 rounded border border-indigo-500/20">
            <h4 className="font-cinzel text-xs font-bold text-indigo-400 mb-2">Nighttime</h4>
            <ul className="space-y-1 text-[var(--text-secondary)]">
              <li>&#9679; Significantly reduced visibility</li>
              <li>&#9679; Some enemies become more aggressive</li>
              <li>&#9679; Nocturnal creatures appear (moths, etc.)</li>
              <li>&#9679; Campfires and torches become essential</li>
              <li>&#9679; Ambient temperature drops</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Sleeping & Resting</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          You can <strong className="text-[var(--text-primary)]">sleep</strong> in a bed to skip the night and 
          rest until morning. Sleeping requires a bed placed in your base (within a Flame Altar zone). 
          Sleeping also provides a <strong className="text-[var(--text-gold)]">Rested buff</strong> that 
          increases stamina regeneration for a period of time after waking.
        </p>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Rested Buff:</strong> +15% stamina regen for 10 minutes after sleeping</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Sleep Requirements:</strong> Bed must be in a Flame Altar zone, not in combat</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Multiplayer:</strong> All players must be in bed to skip night</span></li>
        </ul>
      </div>

      <InfoBox title="Night Travel Tip" type="warning">
        If you must travel at night, carry torches or use the Torch equipment slot for hands-free lighting. 
        The Shroud is even harder to navigate in darkness — consider waiting until morning before entering 
        dangerous Shroud areas.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 16: WEATHER SYSTEM ====================
function WeatherSection() {
  return (
    <Section id="weather" title="Weather System" icon={<CloudRain className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Embervale has a dynamic <strong className="text-[var(--text-gold)]">weather system</strong> that 
        changes conditions across the world. Different weather types affect visibility, traversal, and 
        even enemy behavior.
      </p>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Weather Types</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <Sun className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Clear:</strong> Default weather. Full visibility, normal conditions. Best for exploration and combat.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <CloudRain className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Rain:</strong> Reduced visibility at distance. Ground becomes slippery. Some enemies take shelter. Crops grow faster.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <CloudFog className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <div><strong className="text-[var(--text-primary)]">Fog:</strong> Heavy visibility reduction. Easy to walk into enemy patrols. Use for stealth approaches.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-orange-500/20">
            <span className="text-orange-400 text-[10px] font-bold flex-shrink-0 mt-0.5">STORM</span>
            <div><strong className="text-[var(--text-primary)]">Sandstorm (Nomad Highlands):</strong> Extreme visibility reduction. Flying debris deals minor damage. Seek shelter immediately.</div>
          </div>
        </div>
      </div>

      <InfoBox title="Weather Tip" type="tip">
        Weather is region-specific — it can be raining in the Springlands while clear in the Nomad Highlands. 
        Use the map to check weather conditions before traveling. Rain makes gliding more difficult due to 
        wind resistance.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 17: FARMING & AGRICULTURE ====================
function FarmingSection() {
  return (
    <Section id="farming" title="Farming & Agriculture" icon={<Tractor className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Farming becomes available after rescuing the <strong className="text-[var(--text-gold)]">Farmer NPC</strong>. 
        Agriculture provides a <strong className="text-[var(--text-primary)]">renewable source of food and materials</strong>, 
        reducing the need for dangerous gathering expeditions.
      </p>

      <GuideImage
        src="/images/guides/farming-seedbed.webp"
        alt="Farming seedbed"
        caption="The Farmer NPC unlocks seedbeds and planting, allowing you to grow crops at your base."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How Farming Works</h3>
        <ol className="space-y-2 text-xs text-[var(--text-secondary)] list-decimal list-inside">
          <li><strong className="text-[var(--text-primary)]">Rescue the Farmer</strong> — Complete the Farmer&apos;s rescue quest to unlock farming capabilities</li>
          <li><strong className="text-[var(--text-primary)]">Craft a Seedbed</strong> — Build seedbeds at your base using wood and soil</li>
          <li><strong className="text-[var(--text-primary)]">Find Seeds</strong> — Collect seeds from plants in the wild or buy from the Farmer</li>
          <li><strong className="text-[var(--text-primary)]">Plant & Water</strong> — Place seeds in seedbeds and water them regularly</li>
          <li><strong className="text-[var(--text-primary)]">Harvest</strong> — Crops mature over time (real-time, not game-time). Harvest for food and materials</li>
        </ol>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Crop Types</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-green-900/10 rounded border border-green-500/20">
            <strong className="text-green-400 block mb-0.5">Wheat / Grain</strong>
            <span className="text-[var(--text-secondary)]">Used for bread and grain-based food buffs. Fast growing.</span>
          </div>
          <div className="p-2 bg-red-900/10 rounded border border-red-500/20">
            <strong className="text-red-400 block mb-0.5">Tomatoes</strong>
            <span className="text-[var(--text-secondary)]">Vegetable category food buff. Medium grow time.</span>
          </div>
          <div className="p-2 bg-yellow-900/10 rounded border border-yellow-500/20">
            <strong className="text-yellow-400 block mb-0.5">Corn</strong>
            <span className="text-[var(--text-secondary)]">Grain category. Used in multiple cooking recipes.</span>
          </div>
          <div className="p-2 bg-purple-900/10 rounded border border-purple-500/20">
            <strong className="text-purple-400 block mb-0.5">Herbs</strong>
            <span className="text-[var(--text-secondary)]">Used for mana-boosting food and alchemy recipes.</span>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Animal Husbandry</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          In addition to crops, you can raise animals at your base for renewable resources:
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Chickens:</strong> Provide eggs for cooking recipes</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Cows:</strong> Produce milk for dairy-based food buffs</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Sheep:</strong> Provide wool for crafting (Tailor recipes)</span></li>
        </ul>
      </div>

      <InfoBox title="Farming Efficiency" type="tip">
        Place your farm plots near a water source for easier watering. Rain automatically waters crops, 
        so planting before a storm saves time. Use the Drying Rack to preserve harvested food for 
        long-term storage and enhanced buffs.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 18: ADVANCED BUILDING ====================
function AdvancedBuildingSection() {
  return (
    <Section id="advanced-building" title="Advanced Building" icon={<Hammer className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Once you master the basics, Enshrouded&apos;s building system offers incredible depth. From 
        terrain sculpting to material upgrades and decorative elements, you can create truly 
        impressive structures.
      </p>

      <GuideImage
        src="/images/guides/building-house.webp"
        alt="Advanced building example"
        caption="With practice, you can build detailed structures like this timber-framed house with thatched roof."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Terrain Sculpting</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          In Build Mode (<strong className="text-[var(--text-gold)]">B</strong>), you can sculpt the terrain 
          within your Flame Altar zone. This allows you to flatten hills, fill gaps, create terraces, 
          and paint the ground with different textures.
        </p>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Raise/Lower:</strong> Click and drag to adjust terrain height</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Flatten:</strong> Hold Shift while clicking to level terrain to a target height</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Paint:</strong> Apply grass, dirt, stone, or snow textures to the ground</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Smooth:</strong> Blend terrain edges for natural transitions</span></li>
        </ul>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Material Tiers</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          As you progress, you unlock higher-tier building materials with different visual styles 
          and durability:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[#8b6914] mb-1">Wood Tier</h4>
            <p className="text-[var(--text-secondary)]">Basic wooden planks and logs. Early game material. Simple rustic appearance.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-gray-400 mb-1">Stone Tier</h4>
            <p className="text-[var(--text-secondary)]">Stone bricks and blocks. Medieval fortress style. Unlocked via Blacksmith.</p>
          </div>
          <div className="game-panel corner-decor p-3">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-1">Decorative Tier</h4>
            <p className="text-[var(--text-secondary)]">Ornate elements, banners, furniture. From Carpenter and Tailor NPCs.</p>
          </div>
        </div>
      </div>

      <InfoBox title="Building Pro Tip" type="tip">
        Press <strong>X</strong> to toggle snapping on/off. Snapping helps align blocks perfectly, 
        but disabling it allows for more organic, detailed placement. Use the Copy tool (middle-click) 
        to quickly duplicate frequently used building pieces.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 19: CUSTOM DIFFICULTY ====================
function DifficultySection() {
  return (
    <Section id="difficulty" title="Custom Difficulty" icon={<Settings className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded offers extensive <strong className="text-[var(--text-gold)]">customization options</strong> 
        when creating a world. You can tailor the difficulty to your preferred playstyle, from 
        relaxed building to hardcore survival.
      </p>

      <GuideImage
        src="/images/guides/multiplayer-menu.webp"
        alt="Game mode selection"
        caption="The Play Selection screen offers Private, Host, and Join options for different multiplayer experiences."
      />

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Difficulty Presets</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-3 p-3 bg-green-900/10 rounded border border-green-500/20">
            <span className="text-green-400 font-bold flex-shrink-0">Relaxed</span>
            <div>Reduced enemy damage, longer Shroud timer, no gear durability loss. Perfect for players who want to focus on building and exploration.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <span className="text-[var(--text-gold)] font-bold flex-shrink-0">Normal</span>
            <div>Standard game balance. Recommended for first playthroughs. All mechanics active at default values.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-orange-900/10 rounded border border-orange-500/20">
            <span className="text-orange-400 font-bold flex-shrink-0">Hard</span>
            <div>Increased enemy health and damage. Shorter Shroud timer. More challenging combat encounters.</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--accent-red)]/5 rounded border border-[var(--accent-red)]/20">
            <span className="text-[var(--accent-red)] font-bold flex-shrink-0">Survival</span>
            <div>Hardcore mode. Harsher survival mechanics, limited resources, maximum challenge for veteran players.</div>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Custom Server Settings</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          When hosting a world, you can fine-tune individual settings:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Weapon Durability</strong>
            <span className="text-[var(--text-secondary)]">On/Off toggle. Disable if you find repair management tedious.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Shroud Timer</strong>
            <span className="text-[var(--text-secondary)]">Adjust base duration from 5 minutes up to 30 minutes.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Enemy Damage</strong>
            <span className="text-[var(--text-secondary)]">Scale from 0.25x to 4x normal damage.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Resource Drops</strong>
            <span className="text-[var(--text-secondary)]">Multiply resource gathering rates from 0.5x to 5x.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Experience Gain</strong>
            <span className="text-[var(--text-secondary)]">Level up faster or slower. 0.5x to 5x multiplier.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Death Penalty</strong>
            <span className="text-[var(--text-secondary)]">Keep inventory on death (no tombstone recovery needed).</span>
          </div>
        </div>
      </div>

      <InfoBox title="Recommended Settings" type="tip">
        For your first playthrough, stick with Normal difficulty. If you find gear durability 
        management frustrating, you can disable it in settings without affecting other difficulty 
        parameters. Custom settings can be changed at any time from the pause menu.
      </InfoBox>
    </Section>
  );
}

// ==================== SECTION 20: PHOTO MODE ====================
function PhotoModeSection() {
  return (
    <Section id="photo-mode" title="Photo Mode" icon={<Camera className="w-5 h-5" />}>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        Enshrouded features a powerful <strong className="text-[var(--text-gold)]">Photo Mode</strong> that 
        lets you capture stunning screenshots of your adventures. The world of Embervale is incredibly 
        beautiful — Photo Mode helps you preserve those moments.
      </p>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">How to Activate</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          Press <strong className="text-[var(--text-gold)]">F10</strong> to enter Photo Mode at any time. 
          The game pauses and the camera detaches from your character, allowing free movement around the scene.
        </p>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">WASD:</strong> Move camera freely</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Mouse:</strong> Pan and tilt camera angle</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Scroll:</strong> Zoom in/out</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Space/Shift:</strong> Move camera up/down</span></li>
        </ul>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Photo Mode Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Hide UI</strong>
            <span className="text-[var(--text-secondary)]">Toggle all HUD elements on/off for clean shots.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Field of View</strong>
            <span className="text-[var(--text-secondary)]">Adjust FOV from 30mm to 120mm equivalent.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Depth of Field</strong>
            <span className="text-[var(--text-secondary)]">Add cinematic blur to backgrounds. Adjustable focus point.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Filters</strong>
            <span className="text-[var(--text-secondary)]">Apply color filters: Warm, Cool, B&amp;W, Vintage, etc.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Time of Day</strong>
            <span className="text-[var(--text-secondary)]">Change lighting conditions without exiting Photo Mode.</span>
          </div>
          <div className="p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
            <strong className="text-[var(--text-primary)] block mb-0.5">Character Pose</strong>
            <span className="text-[var(--text-secondary)]">Set your character to various poses for dramatic shots.</span>
          </div>
        </div>
      </div>

      <div className="game-panel corner-decor p-5">
        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3">Best Photo Spots</h3>
        <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Ancient Spire Peaks:</strong> Panoramic views of entire biomes</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Shroud Boundaries:</strong> Dramatic contrast between safe zones and teal fog</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Ancient Ruins:</strong> Atmospheric shots of overgrown structures</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Your Base:</strong> Document your building progress — great for before/after comparisons</span></li>
          <li className="flex items-start gap-2"><span className="text-[var(--text-gold)]">&#9679;</span><span><strong className="text-[var(--text-primary)]">Boss Arenas:</strong> Epic shots during or after boss encounters</span></li>
        </ul>
      </div>

      <InfoBox title="Screenshot Tip" type="tip">
        Use Photo Mode during boss fights for epic action shots — the game is paused, so you have 
        unlimited time to find the perfect angle. Combine depth of field with a low angle shot for 
        truly cinematic results. Screenshots are saved to your Steam screenshot folder.
      </InfoBox>
    </Section>
  );
}

// ==================== MAIN COMPONENT ====================
export default function BeginnerPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout
      title="Beginner's Guide"
      subtitle="Everything you need to survive your first days in Embervale"
      icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <SubNav />

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Hero intro */}
        <div className="game-panel corner-decor p-6 mb-8">
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Just starting your journey in <strong className="text-[var(--text-primary)]">Enshrouded</strong>? 
            This comprehensive beginner&apos;s guide covers everything from basic controls and your first hour 
            to advanced combat, base building, and the all-important Shroud mechanics. Each section is 
            designed to be read in order or jumped to via the navigation bar above. Let&apos;s survive Embervale together.
          </p>
        </div>

        <GettingStartedSection />
        <BasicControlsSection />
        <FirstHourSection />
        <CombatSection />
        <ShroudSection />
        <BaseBuildingSection />
        <CraftingSection />
        <TraversalSection />
        <SkillsSection />
        <FoodSection />
        <GearSection />
        <FastTravelSection />
        <MistakesSection />
        <MultiplayerSection />
        <DayNightSection />
        <WeatherSection />
        <FarmingSection />
        <AdvancedBuildingSection />
        <DifficultySection />
        <PhotoModeSection />
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--bg-panel)] border border-[var(--border-gold)]/30 
          flex items-center justify-center text-[var(--text-gold)] shadow-lg transition-all duration-300 hover:bg-[var(--border-gold)]/20
          ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </PageLayout>
  );
}
