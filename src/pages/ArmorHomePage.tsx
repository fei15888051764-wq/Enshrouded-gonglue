import { usePage } from '../App';
import { ChevronRight, Home, Shield, Star } from 'lucide-react';
import PageLayout from './PageLayout';
import { armorSubSections } from '../data/armorData';

export default function ArmorHomePage() {
  const { navigate } = usePage();

  const totalArmor = armorSubSections.reduce((acc, s) => acc + s.armor.length, 0);
  const sTierArmor = armorSubSections.flatMap((s) => s.armor).filter((a) => a.tier === 'S').length;

  return (
    <PageLayout
      title="Armor Sets"
      subtitle="Complete collection of 82 armor sets — each with 5 matching pieces, set bonuses, and crafting locations"
      icon={<Shield className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Armor Tier List</span>
      </div>

      {/* Overview Panel */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          Enshrouded features <strong className="text-[var(--text-primary)]">{totalArmor} complete armor sets</strong>, each composed of{' '}
          <strong className="text-[var(--text-primary)]">5 matching pieces</strong> — Helmet, Chest, Gloves, Legs, and Boots. 
          Collecting and wearing a full set unlocks powerful <strong className="text-[var(--text-gold)]">set bonuses</strong> tailored to specific playstyles, 
          from tanky frontline bulwarks to glass-cannon mages. Sets are ranked <strong className="text-yellow-400">S</strong> through{' '}
          <strong className="text-gray-400">C</strong> based on their endgame viability, stat scaling, and build-defining potential.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">S-Tier = Best-in-Slot</span>
          <span className="px-2 py-1 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20">A-Tier = Strong Specialist</span>
          <span className="px-2 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">B-Tier = Solid Mid-Game</span>
          <span className="px-2 py-1 rounded bg-gray-400/10 text-gray-400 border border-gray-400/20">C-Tier = Starter / Cosmetic</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{totalArmor}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Armor Sets</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-yellow-400">{sTierArmor}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">S-Tier Best</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-blue-400">3</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Archetypes</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-purple-400">5pc</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Per Set</div>
        </div>
      </div>

      {/* Tier Legend */}
      <div className="game-panel corner-decor p-4 mb-8">
        <h3 className="font-cinzel text-xs font-bold text-[var(--text-primary)] mb-3 tracking-wider uppercase">Tier Guide</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px]">
          {[
            { tier: 'S', color: 'text-yellow-400', desc: 'Best-in-slot endgame armor. Meta-defining performance.' },
            { tier: 'A', color: 'text-purple-400', desc: 'Strong specialist armor. Excellent in its role.' },
            { tier: 'B', color: 'text-blue-400', desc: 'Solid mid-game sets. Good but outclassed.' },
            { tier: 'C', color: 'text-gray-400', desc: 'Early game / starter armor. Replace ASAP.' },
          ].map((t) => (
            <div key={t.tier} className="flex items-start gap-2">
              <Star className={`w-3.5 h-3.5 ${t.color} flex-shrink-0 mt-0.5`} />
              <div>
                <span className={`font-bold ${t.color}`}>{t.tier}-Tier</span>
                <p className="text-[var(--text-muted)] mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {armorSubSections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigate('armor', section.id)}
            className="game-panel corner-decor p-5 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-gold)] transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">{section.description}</p>
                <p className="text-[10px] text-[var(--text-gold)] mt-1.5">
                  {section.armor.length} {section.armor.length === 1 ? 'set' : 'sets'}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
