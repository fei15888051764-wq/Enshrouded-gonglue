import { usePage } from '../App';
import { ChevronRight, Home, Shield, Star } from 'lucide-react';
import PageLayout from './PageLayout';
import { armorSubSections } from '../data/armorData';
import type { ArmorPiece } from '../data/armorData';
import { TIER_COLORS, TYPE_COLORS } from '../data/armorData';

function ArmorMiniCard({ armor, onClick }: { armor: ArmorPiece; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="game-panel corner-decor p-3 text-left hover:border-[var(--border-gold-light)] transition-all group cursor-pointer w-full"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center text-[var(--text-gold)] group-hover:bg-[var(--text-gold)]/20 transition-colors flex-shrink-0">
          {armor.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors truncate">
              {armor.name}
            </h4>
            <span className={`text-[9px] font-bold ${TIER_COLORS[armor.tier]}`}>{armor.tier}-Tier</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-[var(--text-muted)] mb-1">
            <span className={`px-1.5 py-0.5 rounded border ${TYPE_COLORS[armor.type]}`}>{armor.type}</span>
            <span>Lv.{armor.level}</span>
            <span>{armor.defense} DEF</span>
          </div>
          <p className="text-[10px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">{armor.description}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-gold)] transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

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

      {/* Armor Categories */}
      <div className="space-y-8">
        {armorSubSections.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--border-gold)]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[var(--text-gold)]" />
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">{section.title}</h3>
                <p className="text-[10px] text-[var(--text-muted)]">{section.description}</p>
              </div>
              <div className="ml-auto text-[10px] text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-1 rounded">
                {section.armor.length} {section.armor.length === 1 ? 'set' : 'sets'}
              </div>
            </div>

            <div className={`grid gap-3 ${section.armor.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {section.armor.map((armor) => (
                <ArmorMiniCard
                  key={armor.id}
                  armor={armor}
                  onClick={() => navigate('armor', armor.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
