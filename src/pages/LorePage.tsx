import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  BookOpen, MapPin, Skull, Flame,
  Droplets, Users, Scroll, TowerControl, Clock,
  Sparkles, BookMarked, Compass, ArrowUp
} from 'lucide-react';
import PageLayout from './PageLayout';

interface LoreSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

// Sub-navigation component
function SubNav() {
  const sections = [
    { id: 'overview', title: 'Overview', icon: <MapPin className="w-3.5 h-3.5" /> },
    { id: 'the-shroud', title: 'The Shroud', icon: <Skull className="w-3.5 h-3.5" /> },
    { id: 'the-flameborn', title: 'Flameborn', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'the-ancients', title: 'Ancients', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'the-elixir', title: 'The Elixir', icon: <Droplets className="w-3.5 h-3.5" /> },
    { id: 'the-flame', title: 'The Flame', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'ancient-spires', title: 'Spires', icon: <TowerControl className="w-3.5 h-3.5" /> },
    { id: 'cinder-vault', title: 'Cinder Vault', icon: <BookMarked className="w-3.5 h-3.5" /> },
    { id: 'timeline', title: 'Timeline', icon: <Clock className="w-3.5 h-3.5" /> },
    { id: 'regions', title: 'Regions', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'factions', title: 'Factions', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'characters', title: 'Characters', icon: <BookOpen className="w-3.5 h-3.5" /> },
  ];

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
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

// Section wrapper with anchor id
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

const loreSections: LoreSection[] = [

  {
    id: 'overview',
    title: 'World of Embervale',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'A fallen kingdom where beauty and ruin exist side by side. Once a thriving medieval fantasy realm, now consumed by the Shroud.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/world-of-embervale.webp" alt="Map of the vast and diverse lands of Embervale" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The vast and diverse lands of Embervale await exploration.</p></div>
        <p className="text-[var(--text-primary)]">Embervale was once a thriving medieval fantasy kingdom, home to humans and an ancient race known as the <strong className="text-[var(--text-gold)]">Ancients</strong>. The land was rich with diverse cultures, towering castles, bustling villages, and wonders both magical and mundane.</p>
        <p>Everything changed when a mysterious stranger brought knowledge of the <strong className="text-[var(--text-gold)]">Elixir</strong> — a powerful magical substance found deep beneath the earth. Humans and Ancients alike became obsessed with its power, building vast mining operations called <strong className="text-[var(--text-primary)]">Elixir Wells</strong> to extract more of the precious resource.</p>
        <p>But their greed came at a terrible cost. From the emptied wells rose <strong className="text-[#6a9ad0]">the Shroud</strong> — a deadly, corrupting fog that consumed everything in its path. Kingdoms fell. Cities were swallowed whole. The great civilization of Embervale crumbled into ruin.</p>
        <p>Now, the world is a shattered remnant of its former glory. Abandoned castles stand silent in overgrown forests. Once-proud cities lie buried beneath the Shroud. And yet, amid the decay, there are still places of breathtaking beauty — forests that glow with ethereal light, deserts of shifting sand and ancient mystery, and mountain peaks that pierce the clouds.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Key Facts About Embervale</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Setting:</strong> Medieval fantasy turned post-apocalyptic survival</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Inhabitants:</strong> Two primary races — Humans and the ancient Ancients</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Cause of Fall:</strong> The Shroud, which rose from depleted Elixir Wells</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Regions:</strong> 9 distinct biomes to explore, each with unique environments</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Storytelling:</strong> Lore told through environmental details, scattered notes, and NPC dialogue</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Current State:</strong> Early Access — lore and regions still expanding</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          "Embervale was once a land of wonder and magic. Now it is a graveyard of dreams, swallowed by the Shroud. But where there is Flame, there is hope." — Ancient Inscription
        </p>
      </div>
    )
  },
  {
    id: 'the-shroud',
    title: 'The Shroud',
    icon: <Skull className="w-5 h-5" />,
    summary: 'A deadly teal-tinted fog that consumes the land, warps creatures into fell beasts, and drives survivors into hiding.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/shroud.webp" alt="The deadly teal fog of the Shroud consuming everything in its path" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The Shroud manifests as a deadly teal fog that consumes everything in its path.</p></div>
        <p className="text-[var(--text-primary)]">The Shroud is the central antagonist of Enshrouded — not a creature or a villain with motives, but a <strong className="text-[#6a9ad0]">force of nature</strong> that devours everything it touches. This teal-tinted fog is produced by pathogenic fungi that spread from the Elixir Wells deep underground.</p>
        <p>When the Shroud rolls across the land, it does not simply kill — it <strong className="text-[var(--text-primary)]">transforms</strong>. Plants wither and mutate. Animals become twisted, aggressive versions of themselves. Humans who are exposed for too long are consumed entirely, their bodies broken down and reformed into monstrous <strong className="text-[var(--accent-red)]">Fell creatures</strong>.</p>
        <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Shroud&apos;s Effects on Living Things</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Skull className="w-4 h-4 text-[var(--accent-red)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Corruption</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Transforms living creatures into aggressive Fell beasts. The longer the exposure, the more severe the mutation.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Skull className="w-4 h-4 text-[var(--accent-red)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Consumption</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Breaks down organic matter and reconstitutes it into new, hostile forms. Nothing biological is safe.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Time Limit</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Players can survive in the Shroud for a limited duration. Stay too long, and the fog will claim you.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">The Flame Resists</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">The Flame is the only known force that can push back the Shroud. Ancient Spires emit Flame-light that clears the fog nearby.</p>
          </div>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">The Shroud in Gameplay</h4>
          <p className="text-xs leading-relaxed mb-3">The Shroud is not just a story element — it is a core gameplay mechanic. When you enter the Shroud, a timer begins counting down. You must accomplish your goals and escape before time runs out.</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>The Shroud guards the best loot, rarest materials, and most dangerous secrets</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Different Shroud zones have different danger levels and time limits</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Upgrading your Flame Altar increases your Shroud survival time</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Certain potions and abilities can extend your time in the Shroud</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>The deepest Shroud zones contain the most powerful bosses and legendary loot</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          "The Shroud looms. War rages. Smothered and devoured by obscurity. Spores and sickness spread. Metamorphism takes hold." — The Alchemist&apos;s Theories II
        </p>
      </div>
    )
  },
  {
    id: 'the-flameborn',
    title: 'The Flameborn',
    icon: <Flame className="w-5 h-5" />,
    summary: 'Beings forged by fire, created by the alliance of Humans and Ancients as the last hope to save Embervale from the Shroud.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/flameborn.webp" alt="The Flameborn warriors created from human and Ancient powers" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The Flameborn are humanity's last hope against the encroaching darkness.</p></div>
        <p className="text-[var(--text-primary)]">You are the <strong className="text-[var(--text-gold)]">Flameborn</strong> — a being created through the fusion of human and Ancient powers, brought to life by the <strong className="text-[var(--text-gold)]">Flame</strong> itself. When the Shroud consumed Embervale and neither Humans nor Ancients could stop it alone, the wisest among both races came together in a desperate alliance.</p>
        <p>Using ancient magic, they created the Flameborn — beings with a <strong className="text-[var(--text-primary)]">human shell</strong> infused with the <strong className="text-[var(--text-primary)]">powers of the Ancients</strong>. The Flameborn were designed to withstand the corrupting effects of the Shroud (for a limited time) and possess the strength to fight where their creators could not.</p>
        <p>As a Flameborn, your purpose is clear: <strong className="text-[var(--text-gold)]">reignite the Ancient Flame</strong>, push back the Shroud&apos;s advance, and reclaim the lost kingdom of Embervale. Along the way, you will rescue trapped survivors, uncover the realm&apos;s secrets, and forge your own legend in a world on the brink of total annihilation.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Flameborn Traits & Abilities</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Hybrid Nature:</strong> Combination of Human and Ancient biology, granting unique resilience</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Shroud Resistance:</strong> Can survive in the Shroud for limited periods, unlike normal humans</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Classless System:</strong> Can learn any skill and use any weapon — no locked classes</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Flame Affinity:</strong> Able to harness the power of the Flame at shrines and altars</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Ancient Connection:</strong> Can activate Ancient technology including Spires and Vaults</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Ultimate Mission:</strong> Tasked with reigniting the Ancient Flame to save Embervale</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">The Creation Ritual</h4>
          <p className="text-xs leading-relaxed mb-3">The Flameborn are not born — they are <strong className="text-[var(--text-primary)]">made</strong>. The creation ritual requires:</p>
          <ol className="space-y-1.5 text-xs list-decimal list-inside">
            <li>A <strong className="text-[var(--text-primary)]">human vessel</strong> — a volunteer who gives their body to the cause</li>
            <li><strong className="text-[var(--text-primary)]">Ancient magic</strong> — rituals and incantations known only to the Ancients</li>
            <li>The <strong className="text-[var(--text-gold)]">Flame</strong> itself — the sacred fire that gives the Flameborn their power</li>
            <li>An <strong className="text-[var(--text-primary)]">Ancient Vault</strong> — a specially prepared chamber deep underground</li>
          </ol>
          <p className="text-xs leading-relaxed mt-3">The ritual is dangerous and not always successful. The Cinder Vault where you awaken contains evidence of previous attempts — some more successful than others.</p>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          "The Ancients and humans allied to create you, the Flameborn, to save Embervale. You are the last hope for humanity." — Opening Narration
        </p>
      </div>
    )
  },
  {
    id: 'the-ancients',
    title: 'The Ancients',
    icon: <Users className="w-5 h-5" />,
    summary: 'An ancient race of intelligent beings who lived alongside humans in Embervale. Their knowledge and power were key to creating the Flameborn.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/ancient-ruins.webp" alt="Ancient ruins dotting the landscape of Embervale" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Ancient ruins dot the landscape, remnants of a once-great civilization.</p></div>
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-primary)]">Ancients</strong> are a mysterious, intelligent race that coexisted with humans in Embervale long before the Shroud came. Unlike humans, the Ancients functioned with a <strong className="text-[var(--text-primary)]">hive-mind-like consciousness</strong> — they collected and shared knowledge collectively, making them less interested in individual human pursuits but immensely powerful in their understanding of magic and the world.</p>
        <p>When the Elixir was discovered and the Shroud began to rise, the Ancients recognized the danger immediately. They saw the end coming and knew that neither race alone could prevent it. In a historic alliance, the Ancients combined their magical knowledge with human determination to create the <strong className="text-[var(--text-gold)]">Flameborn</strong> — a fusion of both races&apos; strengths.</p>
        <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Ancient Civilization & Technology</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <TowerControl className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Ancient Spires</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Towering structures that serve as beacons of light, fast travel points, and glider launch platforms. Each Spire is a marvel of engineering.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Flame Shrines</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Sacred sites where the power of the Flame can be harnessed for skill resets, altar upgrades, and ability unlocks.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Ancient Vaults</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Underground chambers designed for specific purposes — creating Flameborn, storing knowledge, or containing dangerous experiments.</p>
          </div>
          <div className="game-panel corner-decor p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scroll className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">Rune Magic</h5>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Ancient runes found throughout the world contain knowledge, warnings, and instructions for those who can read them.</p>
          </div>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">What We Know About the Ancients</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Possessed a hive-mind consciousness and collective knowledge spanning generations</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Coexisted with humans for centuries before the Shroud, though relations were sometimes strained</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Allied with humans to create the Flameborn as a last-ditch effort to save both races</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Built Ancient Spires and Flame Shrines that still function today</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Their fate after the Shroud remains largely unknown — most vanished with the fall of civilization</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Left behind Ancient Vaults containing knowledge, experiments, and warnings for the future</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          "The Ancients understood what we could not. They saw the truth in the Wells long before we did. If only we had listened..." — Lore Note: Pillars of Creation Research Site
        </p>
      </div>
    )
  },
  {
    id: 'the-elixir',
    title: 'The Elixir',
    icon: <Droplets className="w-5 h-5" />,
    summary: 'A powerful magical substance mined from deep underground. The pursuit of the Elixir led directly to the rise of the Shroud.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/elixir-well.webp" alt="An Elixir Well constructed by the Ancients deep beneath the earth" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Elixir Wells were constructed by the Ancients deep beneath the earth.</p></div>
        <p className="text-[var(--text-primary)]"><strong className="text-[var(--text-gold)]">The Elixir</strong> is a mysterious, magical substance found deep beneath the surface of Embervale. When a stranger brought knowledge of the Elixir to the kingdom, its power quickly captivated both Humans and Ancients. The substance granted incredible abilities — enhanced strength, magical prowess, and seemingly limitless potential.</p>
        <p>But the Elixir was also <strong className="text-[var(--accent-red)]">addictive</strong>. The more people consumed, the more they craved. Factions raced to build mines and extract as much Elixir as possible, driven by greed and the desire for power. These extraction sites became known as <strong className="text-[var(--text-primary)]">Elixir Wells</strong> — massive drilling operations that plunged deep into the earth.</p>
        <p>The mining continued until the Wells ran dry. And from those emptied wells, something far worse than depleted resources emerged: <strong className="text-[#6a9ad0]">the Shroud</strong>. The Elixir had been acting as a seal, keeping the Shroud contained deep underground. With the Elixir extracted, the seal broke, and the Shroud rose to consume the world above.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">The Elixir Chronology</h4>
          <div className="space-y-3 text-xs">
            <div className="flex gap-3"><span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-4">1.</span><div><span className="text-[var(--text-primary)] font-semibold">Discovery:</span> <span className="text-[var(--text-secondary)]">A stranger brings knowledge of the Elixir to Embervale</span></div></div>
            <div className="flex gap-3"><span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-4">2.</span><div><span className="text-[var(--text-primary)] font-semibold">Fascination:</span> <span className="text-[var(--text-secondary)]">Humans and Ancients become captivated by its power</span></div></div>
            <div className="flex gap-3"><span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-4">3.</span><div><span className="text-[var(--text-primary)] font-semibold">The Boom:</span> <span className="text-[var(--text-secondary)]">Massive Elixir Wells are constructed across the kingdom</span></div></div>
            <div className="flex gap-3"><span className="text-orange-400 font-bold font-cinzel flex-shrink-0 w-4">4.</span><div><span className="text-[var(--text-primary)] font-semibold">Addiction:</span> <span className="text-[var(--text-secondary)]">Society becomes dependent on Elixir for power and magic</span></div></div>
            <div className="flex gap-3"><span className="text-orange-400 font-bold font-cinzel flex-shrink-0 w-4">5.</span><div><span className="text-[var(--text-primary)] font-semibold">Depletion:</span> <span className="text-[var(--text-secondary)]">Wells are bled dry in the endless pursuit of more</span></div></div>
            <div className="flex gap-3"><span className="text-[var(--accent-red)] font-bold font-cinzel flex-shrink-0 w-4">6.</span><div><span className="text-[var(--text-primary)] font-semibold">The Breaking:</span> <span className="text-[var(--text-secondary)]">The Shroud rises from the emptied Wells</span></div></div>
            <div className="flex gap-3"><span className="text-[var(--accent-red)] font-bold font-cinzel flex-shrink-0 w-4">7.</span><div><span className="text-[var(--text-primary)] font-semibold">The Fall:</span> <span className="text-[var(--text-secondary)]">Embervale is consumed by the Shroud</span></div></div>
          </div>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Elixir Wells Today</h4>
          <p className="text-xs leading-relaxed mb-3">The abandoned Elixir Wells still dot the landscape of Embervale. They serve as:</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-red)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Danger Zones:</strong> Wells are often at the center of heavy Shroud areas</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Loot Sources:</strong> Remaining Elixir deposits can be harvested for rare crafting materials</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Lore Sites:</strong> Notes and journals found near Wells reveal the history of the fall</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Boss Locations:</strong> The most powerful Shroud creatures often guard the largest Wells</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          &quot;A stranger brought the knowledge of the Elixir to Embervale. Everyone went mad, demanding more and bleeding Elixir Wells dry. From the empty Wells emerged the Shroud.&quot; — Opening Cutscene
        </p>
      </div>
    )
  },
  {
    id: 'the-flame',
    title: 'The Flame',
    icon: <Sparkles className="w-5 h-5" />,
    summary: 'The ancient force that resists the Shroud. The Flame empowers the Flameborn and offers the only hope of reclaiming Embervale.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/flame-shrine.webp" alt="A Flame Shrine where the Flames power can be felt most strongly" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Flame Shrines are sacred sites where the Flame's power can be felt most strongly.</p></div>
        <p className="text-[var(--text-primary)]"><strong className="text-[var(--text-gold)]">The Flame</strong> is an ancient, mystical force that serves as the only known power capable of resisting the Shroud&apos;s advance. When the Shroud consumed Embervale and neither Humans nor Ancients could stop it alone, they turned to the Flame as their last hope.</p>
        <p>The Flame is not merely fire — it is a <strong className="text-[var(--text-primary)]">sentient, magical energy</strong> that burns with golden light. It has the power to push back the Shroud, cleanse corrupted areas, and empower those who wield it. The Ancients understood the Flame&apos;s properties and built their civilization around harnessing its power.</p>
        <p>When the alliance between Humans and Ancients created the <strong className="text-[var(--text-gold)]">Flameborn</strong>, it was the Flame itself that gave them life. The Flameborn carry a spark of this ancient fire within them, allowing them to survive in the Shroud and fight against the corruption. As a Flameborn, your ultimate mission is to <strong className="text-[var(--text-gold)]">reignite the Ancient Flame</strong> at its source and push the Shroud back forever.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Flame Lore</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>The only known force that can resist the Shroud&apos;s corrupting influence</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Used by the Ancients to power their civilization and technology</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Gave life to the Flameborn through the ancient creation ritual</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Flame Shrines allow the Flameborn to harness its power for various purposes</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>The Ancient Flame at the central Spire is the key to saving Embervale</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Flame Shrines</h4>
          <p className="text-xs leading-relaxed mb-3">Scattered throughout Embervale are <strong className="text-[var(--text-primary)]">Flame Shrines</strong> — sacred sites built by the Ancients where the Flame&apos;s power can be harnessed. At these shrines, the Flameborn can:</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><Flame className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Reset Skills:</strong> Reallocate all skill points and attribute points</span></li>
            <li className="flex items-start gap-2"><Flame className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Upgrade Flame Altar:</strong> Increase Shroud survival time and unlock new tiers</span></li>
            <li className="flex items-start gap-2"><Flame className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Unlock Abilities:</strong> Access new crafting tiers and special abilities</span></li>
            <li className="flex items-start gap-2"><Flame className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Fast Travel:</strong> Many Flame Shrines serve as travel points</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          &quot;Where the Flame burns, the Shroud cannot stand. It is our only light in the darkness.&quot; — Ancient Proverb
        </p>
      </div>
    )
  },
  {
    id: 'ancient-spires',
    title: 'Ancient Spires',
    icon: <TowerControl className="w-5 h-5" />,
    summary: 'Towering structures built by the Ancients that serve as beacons of light, fast travel points, and glider launch platforms across Embervale.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/spire-climb.webp" alt="Ancient Spires towering above the landscape as beacons of light and fast travel points" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Ancient Spires tower above the landscape, serving as beacons of light and fast travel points.</p></div>
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-gold)]">Ancient Spires</strong> are towering structures built by the Ancients that dot the landscape of Embervale. These magnificent towers serve multiple critical functions: they act as <strong className="text-[var(--text-primary)]">beacons of Flame-light</strong> that push back the Shroud in their immediate vicinity, <strong className="text-[var(--text-primary)]">fast travel points</strong> that allow the Flameborn to teleport between discovered Spires, and <strong className="text-[var(--text-primary)]">glider launch platforms</strong> from which players can soar across the landscape.</p>
        <p>Each Ancient Spire is a marvel of Ancient engineering. Constructed from materials that have withstood the test of time and the corrupting influence of the Shroud, these towers rise high above the surrounding terrain, their peaks often piercing the clouds. When activated by a Flameborn, the Spire ignites with golden Flame-light that can be seen from great distances — a symbol of hope amid the darkness.</p>
        <p>Activating an Ancient Spire requires the Flameborn to climb to its summit and interact with the <strong className="text-[var(--text-gold)]">Flame Beacon</strong> at the top. Once activated, the Spire becomes a permanent fast travel point and creates a zone of Shroud-free area around its base. This safe zone often becomes a natural hub for exploration, resource gathering, and planning expeditions into nearby dangerous territories.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">All Ancient Spires in Embervale</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">1.</span>
              <div><strong className="text-[var(--text-primary)]">Springlands Spire</strong> — The first Spire most players activate, located in the starting region</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">2.</span>
              <div><strong className="text-[var(--text-primary)]">Carpenter Spire</strong> — Near the Carpenter&apos;s workshop in the forested hills</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">3.</span>
              <div><strong className="text-[var(--text-primary)]">Blackmire Spire</strong> — Deep in the swamp region, surrounded by dangerous creatures</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">4.</span>
              <div><strong className="text-[var(--text-primary)]">Nomad Spire</strong> — Located in the desert highlands, offering views of the shifting sands</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">5.</span>
              <div><strong className="text-[var(--text-primary)]">Hunter Spire</strong> — Nestled in the hunting grounds, surrounded by wildlife</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">6.</span>
              <div><strong className="text-[var(--text-primary)]">Alchemist Spire</strong> — Near the Alchemist&apos;s laboratory in the volcanic region</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">7.</span>
              <div><strong className="text-[var(--text-primary)]">Farrier Spire</strong> — Close to the Farrier&apos;s forge in the mountain passes</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">8.</span>
              <div><strong className="text-[var(--text-primary)]">Farwatch Spire</strong> — Positioned at the edge of the map, overlooking the frontier</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">9.</span>
              <div><strong className="text-[var(--text-primary)]">Braelyn Spire</strong> — Located near Braelyn&apos;s Bridge, a key crossing point</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">10.</span>
              <div><strong className="text-[var(--text-primary)]">Loom Spire</strong> — In the highlands near the Loom, a region of ancient textile production</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">11.</span>
              <div><strong className="text-[var(--text-primary)]">Umber Spire</strong> — Deep in the Umberlands, one of the most dangerous regions</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">12.</span>
              <div><strong className="text-[var(--text-primary)]">Velgrave Spire</strong> — In the shadow of Velgrave Castle, a major landmark</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">13.</span>
              <div><strong className="text-[var(--text-primary)]">Pikemead Spire</strong> — Near the farming settlement of Pikemead</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">14.</span>
              <div><strong className="text-[var(--text-primary)]">Diademy Spire</strong> — Close to the Diademy, an ancient center of learning</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">15.</span>
              <div><strong className="text-[var(--text-primary)]">Lone Spire</strong> — Isolated in the northern wastes, a testament to Ancient determination</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-gold)]/10">
              <span className="text-[var(--text-gold)] font-bold flex-shrink-0 w-5">16.</span>
              <div><strong className="text-[var(--text-primary)]">Capital Spire</strong> — The final and largest Spire, located at the ancient capital</div>
            </div>
          </div>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Spire Benefits</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Fast Travel:</strong> Teleport between any two activated Spires instantly</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Glider Launch:</strong> Use Gliders from the top to travel long distances quickly</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Shroud Clearance:</strong> Creates a safe zone around the Spire base</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Map Reveal:</strong> Activating a Spire reveals the surrounding area on your map</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Navigation:</strong> Lit Spires serve as visible landmarks for orienting yourself</span></li>
          </ul>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          &quot;The Spires were our greatest achievement — towers of light that pierced the darkness. May they guide the Flameborn to victory.&quot; — Ancient Inscription
        </p>
      </div>
    )
  },
  {
    id: 'cinder-vault',
    title: 'The Cinder Vault',
    icon: <BookMarked className="w-5 h-5" />,
    summary: 'The underground chamber where Flameborn are created. This is where your journey begins — awakened from ancient slumber to save Embervale.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/cinder-vault.webp" alt="The Cinder Vault where every Flameborns journey begins" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The Cinder Vault is where every Flameborn's journey begins.</p></div>
        <p className="text-[var(--text-primary)]">The <strong className="text-[var(--text-gold)]">Cinder Vault</strong> is where every Flameborn&apos;s journey begins. This ancient underground chamber, built by the alliance of Humans and Ancients, serves as both a <strong className="text-[var(--text-primary)]">creation facility</strong> for new Flameborn and a <strong className="text-[var(--text-primary)]">preservation chamber</strong> where completed Flameborn are kept in stasis until the time is right for their awakening.</p>
        <p>When you first open your eyes in Enshrouded, you are deep within the Cinder Vault. The chamber around you is filled with the remnants of ancient experiments — notes, equipment, and the bodies of less successful attempts at Flameborn creation. The walls bear Ancient runes that pulse with faint golden light, and the air is thick with the smell of old magic and dormant fire.</p>
        <p>As you explore the Cinder Vault, you gradually piece together what happened. The Vault was sealed when the Shroud consumed the surface world, its creators either dead or fled. You were meant to be awoken earlier — part of a coordinated deployment of Flameborn — but something went wrong. Now you awaken alone, the last (or perhaps only) hope for Embervale&apos;s salvation.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">The Cinder Vault Tutorial</h4>
          <p className="text-xs leading-relaxed mb-3">The Cinder Vault serves as the game&apos;s tutorial area. Here, players learn:</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Basic Movement:</strong> Walking, running, jumping, and climbing</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Combat Basics:</strong> Attacking, dodging, and using your first weapon</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Looting:</strong> Searching containers and finding your first items</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">The Shroud:</strong> Your first encounter with the deadly fog</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">Lore Introduction:</strong> Finding notes that explain the world&apos;s history</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span><strong className="text-[var(--text-primary)]">First Exit:</strong> Leaving the Vault to emerge into the Springlands</span></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">What You Find in the Cinder Vault</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="game-panel corner-decor p-4">
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Lore Notes</h5>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Scattered journals explain the creation of the Flameborn, the alliance between races, and the desperation that led to your creation.</p>
            </div>
            <div className="game-panel corner-decor p-4">
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Failed Experiments</h5>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Evidence of previous attempts — some partially successful, others tragic failures. A reminder of the cost of hope.</p>
            </div>
            <div className="game-panel corner-decor p-4">
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Ancient Technology</h5>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Working Ancient devices that teach you about the Spires, the Flame, and the technology you&apos;ll use throughout your journey.</p>
            </div>
            <div className="game-panel corner-decor p-4">
              <h5 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-2">Starter Equipment</h5>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Your first weapon, armor pieces, and survival items — left by those who hoped you would one day awaken.</p>
            </div>
          </div>
        </div>
        <p className="text-xs italic border-l-2 border-[var(--border-gold-dim)] pl-4 py-2 bg-[var(--border-gold-dim)]/5 rounded-r">
          &quot;The Flameborn sleeps in the Cinder Vault, waiting for the day when Embervale needs a hero. That day has come.&quot; — Vault Inscription
        </p>
      </div>
    )
  },
  {
    id: 'timeline',
    title: 'Historical Timeline',
    icon: <Clock className="w-5 h-5" />,
    summary: 'The complete chronology of Embervale — from the discovery of the Elixir to the rise of the Shroud and the creation of the Flameborn.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/timeline.webp" alt="Timeline of Embervales history from prosperity to ruin" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The ruins of Embervale tell the story of a civilization that flew too close to the sun.</p></div>
        <p className="text-[var(--text-primary)]">The history of Embervale spans countless generations, from the peaceful coexistence of Humans and Ancients to the catastrophic rise of the Shroud. Understanding this timeline is key to comprehending the world you are tasked with saving. The lore of Enshrouded is told through environmental storytelling, scattered notes, and NPC dialogue — piecing it together reveals a tragedy of greed, ambition, and lost hope.</p>

        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-4 tracking-wider uppercase">The Fall of Embervale: A Complete Timeline</h4>
          <div className="space-y-4 text-xs">
            <div className="flex gap-3">
              <span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era I</span>
              <div className="flex-1 border-l-2 border-[var(--border-gold)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Age of Coexistence</strong>
                <span className="text-[var(--text-secondary)]">Humans and Ancients live together in Embervale for centuries. The Ancients share their knowledge of magic and technology, while Humans provide ingenuity and labor. Great cities are built, trade flourishes, and the kingdom reaches heights of prosperity. The Ancient Spires are constructed, and the Flame is harnessed as a source of power.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era II</span>
              <div className="flex-1 border-l-2 border-[var(--border-gold)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Discovery</strong>
                <span className="text-[var(--text-secondary)]">A mysterious stranger arrives in Embervale bearing knowledge of the Elixir — a magical substance deep beneath the earth that grants incredible power. Both Humans and Ancients are fascinated. Initial experiments show promising results: enhanced strength, magical abilities, and seemingly unlimited potential. The stranger&apos;s identity remains unknown.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--text-gold)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era III</span>
              <div className="flex-1 border-l-2 border-[var(--border-gold)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Elixir Boom</strong>
                <span className="text-[var(--text-secondary)]">Feverish mining operations begin across Embervale. Massive Elixir Wells are constructed, plunging deep into the earth. Factions compete for control of the richest deposits. The Elixir transforms society — magic becomes commonplace, and those who consume the most gain immense power. The Ancients warn of imbalance, but their warnings go unheeded.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold font-cinzel flex-shrink-0 w-20 text-right">Era IV</span>
              <div className="flex-1 border-l-2 border-orange-400/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Addiction</strong>
                <span className="text-[var(--text-secondary)]">Society becomes dependent on Elixir. Those who consume it crave more, and withdrawal is devastating. Crime rises as people do anything to obtain more. The Ancients grow increasingly concerned, noting that the Wells are being depleted at an alarming rate. Tensions rise between Humans and Ancients as blame is cast.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold font-cinzel flex-shrink-0 w-20 text-right">Era V</span>
              <div className="flex-1 border-l-2 border-orange-400/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Depletion</strong>
                <span className="text-[var(--text-secondary)]">The largest Elixir Wells run dry. Panic spreads through the kingdom as the primary source of power runs out. Desperate miners dig ever deeper, creating unstable tunnels and dangerous conditions. Strange phenomena are reported near depleted Wells — odd sounds, unnatural growths, and a creeping teal fog that no fire can disperse.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent-red)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era VI</span>
              <div className="flex-1 border-l-2 border-[var(--accent-red)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Breaking</strong>
                <span className="text-[var(--text-secondary)]">The Shroud erupts from the depleted Elixir Wells. The teal fog spreads rapidly, consuming everything in its path. Cities fall within days. The great castles and fortifications offer no protection. Panic turns to terror as people witness their loved ones transformed into monstrous Fell creatures. Evacuations are attempted, but the Shroud moves too fast.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent-red)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era VII</span>
              <div className="flex-1 border-l-2 border-[var(--accent-red)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Fall</strong>
                <span className="text-[var(--text-secondary)]">Embervale collapses. The great civilization that took centuries to build is destroyed in months. Survivors flee to high ground, remote islands, and areas near Flame Shrines where the Shroud cannot reach. The Ancients and Humans realize too late the cost of their greed. Both races are decimated, their cultures on the brink of extinction.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent-green)] font-bold font-cinzel flex-shrink-0 w-20 text-right">Era VIII</span>
              <div className="flex-1 border-l-2 border-[var(--accent-green)]/30 pl-3 pb-2">
                <strong className="text-[var(--text-primary)] block mb-1">The Alliance & The Creation</strong>
                <span className="text-[var(--text-secondary)]">In the darkest hour, the remaining Ancients and Humans forge an unprecedented alliance. Combining Ancient magic with human determination, they create the Flameborn — beings infused with the power of the Flame, designed to survive the Shroud and fight back against the corruption. You are placed in the Cinder Vault, to awaken when the time is right.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Collectible Lore Items</h4>
          <p className="text-xs leading-relaxed mb-3">Throughout Embervale, you can find lore items that reveal more about the world&apos;s history:</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><BookOpen className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Journals & Diaries:</strong> Personal accounts of the fall from various perspectives</span></li>
            <li className="flex items-start gap-2"><Scroll className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Research Notes:</strong> Scientific observations about the Elixir and Shroud</span></li>
            <li className="flex items-start gap-2"><BookMarked className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Ancient Runes:</strong> Messages left by the Ancients, often containing warnings</span></li>
            <li className="flex items-start gap-2"><MapPin className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">Letters:</strong> Correspondence between characters during the fall</span></li>
            <li className="flex items-start gap-2"><Sparkles className="w-3 h-3 mt-0.5 text-[var(--text-gold)] flex-shrink-0" /><span><strong className="text-[var(--text-primary)]">The Alchemist&apos;s Theories:</strong> A multi-volume work on the nature of the Shroud</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'regions',
    title: 'Regions of Embervale',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Nine distinct biomes make up the world of Embervale, each with unique environments, creatures, resources, and challenges to overcome.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/regions-map.webp" alt="Map of Embervales nine distinct regions in the fallen kingdom" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Embervale's world map reveals the scope of the fallen kingdom.</p></div>
        <p className="text-[var(--text-primary)]">Embervale is a vast and diverse land composed of <strong className="text-[var(--text-gold)]">nine distinct regions</strong>, each with its own unique environment, climate, wildlife, resources, and dangers. From lush forests to scorching deserts, from murky swamps to frozen peaks, every region offers new challenges to overcome and secrets to discover. As you progress through the game, you will venture deeper into increasingly dangerous territories, unlocking new crafting materials, encountering tougher enemies, and uncovering more of the world&apos;s tragic history.</p>
        <p>Each region is designed with a recommended level range, though the open-world nature of Enshrouded allows players to explore beyond their current capabilities — at their own risk. The regions are interconnected, with no loading screens between them, creating a seamless and immersive world that rewards curiosity and careful exploration.</p>

        <div className="space-y-4 mt-4">
          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--accent-green)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Springlands</h4>
              <span className="text-[10px] bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-2 py-0.5 rounded font-cinzel ml-auto">Levels 1-8</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">The starting region of Enshrouded, the Springlands are a lush, green area filled with rolling hills, scattered ruins, and abundant wildlife. This is where you emerge from the Cinder Vault and begin your journey. The region serves as a gentle introduction to the game&apos;s mechanics, offering plenty of resources for basic crafting and relatively forgiving enemies.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Ancient Spire, Flame Shrine, abandoned farms</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Wood, stone, fiber, berries, clay</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Wolves, boars, basic Fell creatures</div>
              <div><strong className="text-[var(--text-primary)]">NPCs:</strong> The Carpenter (rescue mission)</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--accent-green)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Low Meadows</h4>
              <span className="text-[10px] bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-2 py-0.5 rounded font-cinzel ml-auto">Levels 5-12</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A verdant lowland area that connects the Springlands to more dangerous regions. The Low Meadows are characterized by wide-open grasslands, shallow rivers, and the remnants of agricultural communities. Scarecrows still stand in abandoned fields, and farmhouses lie empty — their inhabitants long gone or transformed.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Abandoned villages, farmland, fishing spots</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Wheat, vegetables, copper ore, leather</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Bandits, wild dogs, Fell scavengers</div>
              <div><strong className="text-[var(--text-primary)]">Dangers:</strong> First encounters with organized human enemies</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--text-gold)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Revelwood</h4>
              <span className="text-[10px] bg-[var(--text-gold)]/20 text-[var(--text-gold)] px-2 py-0.5 rounded font-cinzel ml-auto">Levels 10-18</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A dense, ancient forest that was once the heart of Embervale&apos;s lumber industry. Towering trees create a canopy that filters sunlight into golden shafts. The forest is beautiful but dangerous — fallen logs create natural obstacles, and the dense vegetation hides both resources and threats. Ancient ruins are scattered throughout, overgrown with moss and vines.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Massive trees, ancient ruins, hidden caves</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Hardwood, mushrooms, resin, iron ore</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Giant spiders, forest Fell, corrupted wildlife</div>
              <div><strong className="text-[var(--text-primary)]">NPCs:</strong> The Hunter (rescue mission)</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--text-gold)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Blackmire</h4>
              <span className="text-[10px] bg-[var(--text-gold)]/20 text-[var(--text-gold)] px-2 py-0.5 rounded font-cinzel ml-auto">Levels 15-22</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A dark, fetid swamp where the Shroud&apos;s influence is particularly strong. Murky water covers much of the terrain, and poisonous plants thrive in the humid atmosphere. Ancient willows droop over stagnant pools, and the air is thick with insects. The Blackmire was once a center of alchemical research — traces of this history can still be found in abandoned laboratories.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Swamp villages, alchemy labs, ancient trees</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Alchemical herbs, swamp reeds, tar, amber</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Swamp Fell, giant leeches, poison creatures</div>
              <div><strong className="text-[var(--text-primary)]">NPCs:</strong> The Alchemist (rescue mission)</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-orange-400" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Nomad Highlands</h4>
              <span className="text-[10px] bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded font-cinzel ml-auto">Levels 20-28</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A vast desert of shifting sands and rocky outcrops, the Nomad Highlands are a stark contrast to the green regions of Embervale. By day, the sun beats down mercilessly; by night, temperatures plummet. Ancient tombs and buried ruins lie beneath the sand, remnants of a civilization that thrived here long before the Shroud. Sandstorms are a constant hazard, reducing visibility to near zero.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Desert ruins, underground tombs, oases</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Sandstone, gold ore, salt, desert herbs</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Desert Fell, scorpions, sand burrowers</div>
              <div><strong className="text-[var(--text-primary)]">Hazards:</strong> Sandstorms, extreme temperatures, quicksand</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-orange-400" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Kindlewastes</h4>
              <span className="text-[10px] bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded font-cinzel ml-auto">Levels 25-32</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A volcanic wasteland of lava flows, ash-covered plains, and sulfurous vents. The Kindlewastes are among the most dangerous regions in Embervale, where the ground itself can be deadly. Rivers of molten rock carve paths through the terrain, and geysers of superheated steam erupt without warning. Despite the danger, the region holds valuable resources for those brave enough to seek them.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Volcanoes, lava flows, mining settlements</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Obsidian, volcanic stone, sulfur, rare metals</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Fire-resistant Fell, lava creatures, ash elementals</div>
              <div><strong className="text-[var(--text-primary)]">NPCs:</strong> The Blacksmith (rescue mission)</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--accent-red)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Shroud Region</h4>
              <span className="text-[10px] bg-[var(--accent-red)]/20 text-[var(--accent-red)] px-2 py-0.5 rounded font-cinzel ml-auto">Levels 30+</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">Not a single geographic region but rather the areas where the Shroud is thickest and most concentrated. These zones represent the epicenters of the Shroud&apos;s expansion — usually centered around the largest depleted Elixir Wells. The terrain is warped and corrupted, with organic growths that pulse with teal energy. Visibility is extremely limited, and the most powerful Fell creatures make their homes here.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Massive Elixir Wells, corrupted landscapes</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Shroud-infused materials, legendary crafting components</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Elite Fell, Shroud bosses, corrupted guardians</div>
              <div><strong className="text-[var(--text-primary)]">Rewards:</strong> Best loot in the game, legendary weapons and armor</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#6a9ad0]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Pike</h4>
              <span className="text-[10px] bg-[#6a9ad0]/20 text-[#6a9ad0] px-2 py-0.5 rounded font-cinzel ml-auto">Endgame</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A treacherous coastal region of jagged cliffs, rocky beaches, and storm-wracked waters. The Pike is home to the remnants of Embervale&apos;s navy and fishing communities, now long abandoned. Shipwrecks litter the coastline, and sea caves hold secrets best left undisturbed. The Shroud has mixed with sea spray here, creating unique and terrifying marine Fell creatures.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Shipwrecks, sea caves, lighthouse ruins</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Pearl, coral, saltwater fish, ship salvage</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Marine Fell, seabirds, tidal creatures</div>
              <div><strong className="text-[var(--text-primary)]">Hazards:</strong> Tides, slippery cliffs, storm conditions</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#6a9ad0]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Alchemic Mountain</h4>
              <span className="text-[10px] bg-[#6a9ad0]/20 text-[#6a9ad0] px-2 py-0.5 rounded font-cinzel ml-auto">Endgame</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">The highest peaks of Embervale, where the air is thin and the weather is merciless. Snow and ice cover the upper reaches, while the lower slopes are home to ancient monasteries and research outposts. The Alchemic Mountain is said to hold the key to understanding the Elixir and the Shroud — the Ancients&apos; greatest secrets are buried here, along with their most dangerous experiments.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key Features:</strong> Monasteries, research sites, the highest Spire</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Crystals, rare herbs, ancient materials</div>
              <div><strong className="text-[var(--text-primary)]">Enemies:</strong> Mountain Fell, ice creatures, ancient guardians</div>
              <div><strong className="text-[var(--text-primary)]">Significance:</strong> Final storyline destination, ultimate challenges</div>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Region Progression Tips</h4>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Stick to the recommended level ranges for each region to avoid frustration</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Activate Ancient Spires in each region before deep exploration — they serve as fast travel and safe zones</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Each region has unique resources — you&apos;ll need to return to earlier regions even in the late game</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>Some regions have environmental hazards (sandstorms, lava, poison) — prepare appropriate gear</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--accent-green)] mt-0.5">&#9679;</span><span>The Shroud zones within each region contain the best loot but are the most dangerous</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'factions',
    title: 'Factions & Creatures',
    icon: <Users className="w-5 h-5" />,
    summary: 'The various groups and creatures that inhabit Embervale — from the corrupted Fell to surviving human factions and mysterious wild tribes.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/fell-monstrosity.webp" alt="A Fell monstrosity twisted creature born from the Shrouds corruption" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">The Fell are twisted creatures born from the Shroud's corruption.</p></div>
        <p className="text-[var(--text-primary)]">The world of Embervale is populated by a diverse array of <strong className="text-[var(--text-gold)]">factions and creatures</strong>, each with their own behaviors, territories, and roles in the ecosystem. Understanding these groups is essential for survival — knowing which creatures are hostile, which can be hunted for resources, and which factions might pose a threat can mean the difference between life and death in the Shroud.</p>

        <div className="space-y-4 mt-4">
          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Skull className="w-4 h-4 text-[var(--accent-red)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Fell</h4>
              <span className="text-[10px] bg-[var(--accent-red)]/20 text-[var(--accent-red)] px-2 py-0.5 rounded font-cinzel ml-auto">Hostile</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">The <strong className="text-[var(--accent-red)]">Fell</strong> are the primary enemy in Enshrouded — creatures corrupted and transformed by prolonged exposure to the Shroud. Once human, animal, or Ancient, the Fell are now twisted monstrosities that exist only to destroy. They come in many forms, from shambling humanoids to massive beasts, each adapted to their environment and the level of corruption they have endured.</p>
            <p className="text-xs leading-relaxed mb-3">The Fell are drawn to the Flameborn, seemingly able to sense the Flame within them. They attack on sight with relentless aggression, showing no fear or self-preservation instinct. The deeper the Shroud, the more powerful the Fell become — elite variants can be found in the most corrupted zones, possessing devastating abilities and immense durability.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Types:</strong> Fellbrutes, Fellspitters, Fellmonarchs, Fellwisps</div>
              <div><strong className="text-[var(--text-primary)]">Weakness:</strong> Fire damage, Flame-enhanced weapons</div>
              <div><strong className="text-[var(--text-primary)]">Drops:</strong> Shroud-infused materials, Fell organs, corruption samples</div>
              <div><strong className="text-[var(--text-primary)]">Behavior:</strong> Aggressive, patrol Shroud areas, drawn to Flameborn</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-orange-400" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Scavengers</h4>
              <span className="text-[10px] bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded font-cinzel ml-auto">Hostile</span>
            </div>
            <p className="text-xs leading-relaxed mb-3"><strong className="text-[var(--text-primary)]">Scavengers</strong> are human survivors who have turned to banditry and raiding to survive. Unlike the Fell, they retain their humanity and intelligence — which makes them arguably more dangerous. Scavenger groups have established camps throughout Embervale, preying on travelers and competing with each other for territory and resources.</p>
            <p className="text-xs leading-relaxed mb-3">Scavengers use weapons and armor scavenged from the ruins of civilization. Some have developed crude but effective tactics, setting ambushes and coordinating attacks. They are particularly dangerous in groups, where their numbers can overwhelm an unprepared Flameborn.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Types:</strong> Scavenger scouts, Scavenger brutes, Scavenger leaders</div>
              <div><strong className="text-[var(--text-primary)]">Equipment:</strong> Scavenged weapons, makeshift armor</div>
              <div><strong className="text-[var(--text-primary)]">Drops:</strong> Weapons, armor pieces, crafting materials, food</div>
              <div><strong className="text-[var(--text-primary)]">Behavior:</strong> Set ambushes, guard camps, patrol trade routes</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[var(--accent-green)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Wildlife</h4>
              <span className="text-[10px] bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-2 py-0.5 rounded font-cinzel ml-auto">Mixed</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">Not all creatures in Embervale are hostile. Various forms of <strong className="text-[var(--accent-green)]">wildlife</strong> still roam the land, some peaceful and others dangerous. These animals serve as important sources of food, leather, and other crafting materials. Learning which animals are safe to approach and which will attack on sight is an important survival skill.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Passive:</strong> Deer, rabbits, birds, fish — sources of meat and hides</div>
              <div><strong className="text-[var(--text-primary)]">Hostile:</strong> Wolves, bears, boars — attack if approached or cornered</div>
              <div><strong className="text-[var(--text-primary)]">Resources:</strong> Meat, leather, fur, bones, feathers</div>
              <div><strong className="text-[var(--text-primary)]">Note:</strong> Some wildlife in Shroud areas may be corrupted</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Skull className="w-4 h-4 text-[#6a9ad0]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Undead</h4>
              <span className="text-[10px] bg-[#6a9ad0]/20 text-[#6a9ad0] px-2 py-0.5 rounded font-cinzel ml-auto">Hostile</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">The <strong className="text-[#6a9ad0]">Undead</strong> are remnants of those who died in the Shroud but were not fully transformed into Fell. These tragic creatures exist in a state between life and death, driven by fragments of their former memories and an endless hunger. They are most commonly found near ancient battlefields, mass graves, and sites of great tragedy.</p>
            <p className="text-xs leading-relaxed mb-3">Unlike the Fell, the Undead sometimes retain a flicker of their former selves. Some can be heard muttering names or fragments of conversations from their past lives. Putting them to rest is considered an act of mercy by the survivors of Embervale.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Types:</strong> Skeletons, wraiths, revenants, spectral remnants</div>
              <div><strong className="text-[var(--text-primary)]">Weakness:</strong> Holy damage, fire, blunt weapons</div>
              <div><strong className="text-[var(--text-primary)]">Drops:</strong> Ancient coins, burial goods, ectoplasm</div>
              <div><strong className="text-[var(--text-primary)]">Habitat:</strong> Ruins, cemeteries, battlefields, Shroud zones</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-[var(--text-gold)]" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Survivors</h4>
              <span className="text-[10px] bg-[var(--text-gold)]/20 text-[var(--text-gold)] px-2 py-0.5 rounded font-cinzel ml-auto">Friendly</span>
            </div>
            <p className="text-xs leading-relaxed mb-3"><strong className="text-[var(--text-gold)]">Survivors</strong> are the remnants of Embervale&apos;s population who have managed to eke out an existence in the post-Shroud world. These hardy individuals have established small settlements in areas the Shroud cannot reach, living off the land and defending themselves against the constant threats that surround them.</p>
            <p className="text-xs leading-relaxed mb-3">Many survivors have valuable skills — carpentry, blacksmithing, alchemy, hunting — and can teach these skills to the Flameborn in exchange for rescued. Finding and rescuing these survivors is a key part of the game&apos;s progression, as each rescued NPC unlocks new crafting recipes, abilities, and services at your base.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Key NPCs:</strong> Carpenter, Hunter, Alchemist, Blacksmith, Farmer</div>
              <div><strong className="text-[var(--text-primary)]">Services:</strong> Crafting stations, skill training, trade, quests</div>
              <div><strong className="text-[var(--text-primary)]">Locations:</strong> Hidden settlements, Flame Shrine areas, high ground</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Each survivor has a rescue mission and side quests</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-purple-400" />
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Vukah</h4>
              <span className="text-[10px] bg-purple-400/20 text-purple-400 px-2 py-0.5 rounded font-cinzel ml-auto">Hostile</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">The <strong className="text-purple-400">Vukah</strong> are a mysterious, tribal people who inhabited Embervale long before the Shroud came. Little is known about their origins or culture — they are fiercely territorial, hostile to outsiders, and possess a deep, primal connection to the land that seems almost magical. Their settlements are crude but strategically placed, and they fight with surprising ferocity using primitive but effective weapons.</p>
            <p className="text-xs leading-relaxed mb-3">Some scholars among the survivors theorize that the Vukah may have tried to warn the kingdom about the dangers of the Elixir Wells, their hostility toward miners perhaps an attempt to protect the natural balance. If so, their warnings went unheeded, and now they defend what remains of their homeland against all intruders — including the Flameborn.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Types:</strong> Vukah warriors, Vukah shamans, Vukah chieftains</div>
              <div><strong className="text-[var(--text-primary)]">Abilities:</strong> Tribal magic, poison weapons, summoning rituals</div>
              <div><strong className="text-[var(--text-primary)]">Drops:</strong> Tribal artifacts, rare herbs, unique crafting materials</div>
              <div><strong className="text-[var(--text-primary)]">Territory:</strong> Forests, hills, areas near Elixir Wells</div>
            </div>
          </div>
        </div>

        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Faction Interaction Tips</h4>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Fell creatures are always hostile — there is no way to peacefully interact with them</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Scavengers can sometimes be avoided by taking alternate routes around their camps</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Hunting wildlife is essential for food and materials — but some animals fight back</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>Rescuing Survivor NPCs should be a priority — they provide crucial services</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--text-gold)] mt-0.5">&#9679;</span><span>The Vukah drop unique items but are among the toughest non-boss enemies</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'characters',
    title: 'Key Characters',
    icon: <BookOpen className="w-5 h-5" />,
    summary: 'The important NPCs of Embervale — six specialist survivors who can be rescued, plus other significant figures you will encounter on your journey.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <div className="my-4"><div className="game-panel corner-decor p-1 overflow-hidden"><img src="/images/lore/npc-rescue.webp" alt="Rescuing survivors trapped in the Shroud to unlock new crafting capabilities" className="w-full rounded border border-[var(--border-gold)]/20" loading="lazy" decoding="async"/></div><p className="text-[11px] text-[var(--text-muted)] mt-2 text-center italic">Rescuing survivors is essential for unlocking new crafting capabilities.</p></div>
        <p className="text-[var(--text-primary)]">Throughout your journey in Embervale, you will encounter a cast of memorable <strong className="text-[var(--text-gold)]">characters</strong> who play important roles in the story and your progression. The most significant are the <strong className="text-[var(--text-primary)]">six specialist survivors</strong> — skilled individuals who can be rescued from dangerous situations and brought back to your base. Each survivor unlocks new crafting capabilities, services, and quests that are essential for advancing through the game.</p>
        <p>Beyond the survivors, you will meet other characters through environmental storytelling — the authors of the journals you find, the builders of the ruins you explore, and the tragic figures whose fates are recorded in the lore notes scattered throughout the world. Piecing together their stories adds depth and emotional resonance to your journey through the fallen kingdom.</p>

        <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">The Six Specialist Survivors</h4>

        <div className="space-y-4">
          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#8b6914]" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Carpenter</h5>
              <span className="text-[10px] bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-2 py-0.5 rounded font-cinzel ml-auto">First to Rescue</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A skilled woodworker who was trapped in the Revelwood when the Shroud advanced. The Carpenter is usually the first specialist survivors players rescue, and his skills are fundamental to base building. He can craft advanced furniture, storage containers, building components, and decorative items that transform your base from a simple camp into an impressive stronghold.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Trapped in the Revelwood region</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Advanced building pieces, furniture, storage</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Wood gathering, building projects, tool upgrades</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Practical, hardworking, nostalgic for better days</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[var(--accent-green)]" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Hunter</h5>
              <span className="text-[10px] bg-[var(--text-gold)]/20 text-[var(--text-gold)] px-2 py-0.5 rounded font-cinzel ml-auto">Early Game</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A master tracker and wilderness survival expert, the Hunter was caught in a Fell ambush while scouting the northern forests. Her rescue unlocks the tanning station, leatherworking capabilities, and advanced hunting tools. She also teaches the player about tracking wildlife and provides valuable information about the creatures of Embervale.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Northern forest areas, trapped by Fell</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Tanning station, leather armor, hunting traps</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Hunting challenges, tracking missions, fur collection</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Independent, knowledgeable, respects nature</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-purple-400" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Alchemist</h5>
              <span className="text-[10px] bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded font-cinzel ml-auto">Mid Game</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A brilliant but eccentric scholar who was studying the Shroud when his laboratory was overrun. The Alchemist is the key to unlocking potion crafting, status effect resistance, and magical enhancement items. His knowledge of the Elixir and the Shroud is unmatched among the survivors, and his questline reveals crucial lore about the nature of the corruption.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Overrun laboratory in the swamp region</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Alchemy station, potions, resistance buffs</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Research missions, ingredient gathering, Shroud studies</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Brilliant, obsessive, haunted by knowledge</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Skull className="w-4 h-4 text-orange-400" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Blacksmith</h5>
              <span className="text-[10px] bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded font-cinzel ml-auto">Mid Game</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A gruff but skilled metalworker who was besieged in his forge when the Shroud spread. The Blacksmith is essential for advanced weapon and armor crafting. He can forge steel and higher-tier equipment, repair damaged items, and upgrade your gear with special modifications. His forge becomes the centerpiece of any well-equipped base.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Besieged forge in the volcanic region</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Forge, metal weapons, heavy armor, upgrades</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Ore gathering, weapon forging, armor repairs</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Gruff, loyal, takes pride in his work</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-4 h-4 text-[#6a9ad0]" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Farmer</h5>
              <span className="text-[10px] bg-[#6a9ad0]/20 text-[#6a9ad0] px-2 py-0.5 rounded font-cinzel ml-auto">Late Game</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A gentle soul who managed to keep crops growing even after the Shroud came, the Farmer is found hiding in an underground greenhouse. His rescue unlocks agriculture — the ability to grow crops, raise animals, and establish a sustainable food source. Farming becomes increasingly important in the late game, providing renewable resources that don&apos;t require dangerous expeditions.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Hidden underground greenhouse</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Farming plots, crop seeds, animal husbandry</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Seed gathering, crop cultivation, livestock care</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Gentle, hopeful, connected to the land</div>
            </div>
          </div>

          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-3">
              <BookMarked className="w-4 h-4 text-[var(--text-gold)]" />
              <h5 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">The Tailor</h5>
              <span className="text-[10px] bg-purple-400/20 text-purple-400 px-2 py-0.5 rounded font-cinzel ml-auto">Late Game</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">A refined craftsperson who survived by hiding in the ruins of a grand estate, the Tailor specializes in cloth armor, bags, and decorative items. Her rescue unlocks the loom, enabling players to craft light armor with magical properties, expand their inventory with custom bags, and add aesthetic touches to their bases and characters.</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><strong className="text-[var(--text-primary)]">Location:</strong> Ruined estate in the highlands</div>
              <div><strong className="text-[var(--text-primary)]">Unlocks:</strong> Loom, cloth armor, bags, decorative banners</div>
              <div><strong className="text-[var(--text-primary)]">Quests:</strong> Material gathering, outfit crafting, restoration projects</div>
              <div><strong className="text-[var(--text-primary)]">Personality:</strong> Refined, artistic, remembers the old world</div>
            </div>
          </div>
        </div>

        <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Other Notable Figures</h4>

        <div className="game-panel corner-decor p-5">
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-gold)] mt-0.5">&#9679;</span>
              <div>
                <strong className="text-[var(--text-primary)]">The Mysterious Stranger:</strong> The unknown figure who brought knowledge of the Elixir to Embervale. Their true identity and motives remain one of the game&apos;s central mysteries. Some lore suggests they may not have been entirely human.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-gold)] mt-0.5">&#9679;</span>
              <div>
                <strong className="text-[var(--text-primary)]">The Last King of Embervale:</strong> References to a monarch who ruled during the fall can be found in royal decrees and personal letters. His fate is unknown, though some suggest he may have been among the first to consume the Elixir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-gold)] mt-0.5">&#9679;</span>
              <div>
                <strong className="text-[var(--text-primary)]">The Ancient Council:</strong> The leaders of the Ancients who argued against Elixir extraction. Their warnings were ignored, but their knowledge survived in the runes and vaults they left behind.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-gold)] mt-0.5">&#9679;</span>
              <div>
                <strong className="text-[var(--text-primary)]">The Alchemist&apos;s Theories Author:</strong> An unnamed scholar who wrote extensively about the Shroud&apos;s properties. Their multi-volume work is the most comprehensive scientific study of the corruption available to survivors.
              </div>
            </li>
          </ul>
        </div>

        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Survivor Rescue Priority</h4>
          <p className="text-xs leading-relaxed mb-3">While you can rescue the survivors in any order, the following sequence is recommended for smooth progression:</p>
          <ol className="space-y-1.5 text-xs list-decimal list-inside">
            <li><strong className="text-[var(--text-primary)]">Carpenter</strong> — Essential for base building and storage</li>
            <li><strong className="text-[var(--text-primary)]">Hunter</strong> — Leather armor and tanning capabilities</li>
            <li><strong className="text-[var(--text-primary)]">Alchemist</strong> — Potions and resistance for harder regions</li>
            <li><strong className="text-[var(--text-primary)]">Blacksmith</strong> — Metal weapons and heavy armor</li>
            <li><strong className="text-[var(--text-primary)]">Farmer</strong> — Sustainable food and renewable resources</li>
            <li><strong className="text-[var(--text-primary)]">Tailor</strong> — Light armor with magic properties and bags</li>
          </ol>
        </div>
      </div>
    )
  },

];

// ==================== MAIN COMPONENT ====================
export default function LorePage() {
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
      title="Game Lore & Story"
      subtitle="The complete history, mythology, and narrative of Enshrouded"
      icon={<BookOpen className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <SubNav />

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Introduction */}
        <div className="game-panel corner-decor p-6 mb-8">
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Enshrouded&apos;s lore is a rich tapestry of tragedy, ambition, and hope. The story of Embervale — 
            a kingdom brought low by the pursuit of power and saved only by the creation of the Flameborn — 
            is told through environmental storytelling, scattered journals, ancient runes, and the words of 
            the survivors you encounter. This section contains a comprehensive guide to the world&apos;s history, 
            its key elements, and the characters who inhabit it.
          </p>
        </div>

        {/* Sections */}
        <Section id="overview" title="World of Embervale" icon={<MapPin className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'overview')?.content}
        </Section>

        <Section id="the-shroud" title="The Shroud" icon={<Skull className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'the-shroud')?.content}
        </Section>

        <Section id="the-flameborn" title="The Flameborn" icon={<Flame className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'the-flameborn')?.content}
        </Section>

        <Section id="the-ancients" title="The Ancients" icon={<Sparkles className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'the-ancients')?.content}
        </Section>

        <Section id="the-elixir" title="The Elixir" icon={<Droplets className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'the-elixir')?.content}
        </Section>

        <Section id="the-flame" title="The Flame" icon={<Flame className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'the-flame')?.content}
        </Section>

        <Section id="ancient-spires" title="Ancient Spires" icon={<TowerControl className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'ancient-spires')?.content}
        </Section>

        <Section id="cinder-vault" title="The Cinder Vault" icon={<BookMarked className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'cinder-vault')?.content}
        </Section>

        <Section id="timeline" title="Historical Timeline" icon={<Clock className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'timeline')?.content}
        </Section>

        <Section id="regions" title="Regions of Embervale" icon={<Compass className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'regions')?.content}
        </Section>

        <Section id="factions" title="Factions & Creatures" icon={<Users className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'factions')?.content}
        </Section>

        <Section id="characters" title="Key Characters" icon={<BookOpen className="w-5 h-5" />}>
          {loreSections.find(s => s.id === 'characters')?.content}
        </Section>

        {/* Bottom Note */}
        <div className="game-panel corner-decor p-5 mt-6">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2 tracking-wider uppercase">Note: Early Access Content</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Enshrouded is currently in Early Access, and the lore is still expanding. New regions, 
                characters, and story elements are being added with each major update. This guide covers 
                all content available as of the latest update. Check back regularly for additions as the 
                game&apos;s story continues to unfold. Some lore details may be subject to change as the 
                developers refine the narrative based on community feedback.
              </p>
            </div>
          </div>
        </div>
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
