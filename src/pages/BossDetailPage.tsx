import { usePage } from '../App';
import { Crown, ChevronRight, Home, Skull, Swords, MapPin, Shield, Clock, Star, Zap, Heart, Users, AlertTriangle, Lightbulb, Info } from 'lucide-react';
import PageLayout from './PageLayout';
import { DIFFICULTY_COLORS, FACTION_COLORS } from '../data/bossesDataUnified';
import { bossDetails } from '../data/bossDetailData';
import SectionGallery from '../components/SectionGallery';
import { bossDetailImages } from '../data/bossesEnemiesImages';
import type { BossDetail } from '../data/bossDetailData';

const DIFFICULTY_LABELS: Record<string, string> = {
  Easy: 'Beginner', Medium: 'Moderate', Hard: 'Challenging',
  'Very Hard': 'Difficult', Extreme: 'Maximum',
};

export default function BossDetailPage({ bossName }: { bossName: string }) {
  const { navigate } = usePage();
  const boss: BossDetail | undefined = (bossDetails as Record<string, BossDetail>)[bossName];

  if (!boss) {
    return (
      <PageLayout title="Boss Not Found" subtitle="" icon={<Skull className="w-6 h-6" />}>
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Skull className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg mb-4">Boss not found</p>
          <button onClick={() => navigate('bosses')} className="text-[var(--text-gold)] hover:underline">
            Return to Bosses
          </button>
        </div>
      </PageLayout>
    );
  }

  const dc = DIFFICULTY_COLORS[boss.difficulty] || DIFFICULTY_COLORS['Hard'];
  const fc = FACTION_COLORS[boss.faction] || 'text-gray-400';

  return (
    <PageLayout
      title={boss.name}
      subtitle={`${boss.faction} — Level ${boss.level} — ${boss.difficulty}`}
      icon={<Crown className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" /> Home
        </button>
        <ChevronRight className="w-3 h-3" />
        <button onClick={() => navigate('bosses')} className="hover:text-[var(--text-gold)] transition-colors">
          Bosses
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">{boss.name}</span>
      </div>

      {/* Hero Stats Bar */}
      <div className="game-panel corner-decor p-6 mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className={`bg-[var(--bg-secondary)] px-3 py-1 rounded text-xs font-cinzel font-bold border border-[var(--border-gold-dim)] ${fc}`}>
            {boss.faction}
          </span>
          <span className="text-xs text-[var(--text-muted)]">Lv.{boss.level}</span>
          <span className={`flex items-center gap-1 text-xs ${dc.text}`}>
            <span className={`w-2 h-2 rounded-full ${dc.dot}`} />
            {boss.difficulty} ({DIFFICULTY_LABELS[boss.difficulty]})
          </span>
          {boss.flameAltar && boss.flameAltar !== '—' && (
            <span className="text-xs text-[var(--text-gold)] bg-[var(--text-gold)]/10 px-2 py-0.5 rounded border border-[var(--text-gold)]/20">
              Flame Altar {boss.flameAltar}
            </span>
          )}
          {boss.quest && boss.quest !== '—' && (
            <span className="text-xs text-[var(--accent-green)] bg-[var(--accent-green)]/10 px-2 py-0.5 rounded border border-[var(--accent-green)]/20">
              Quest: {boss.quest}
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{boss.summary}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Description */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4" /> Description
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{boss.desc}</p>
          </div>

          {/* Attacks */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-3 flex items-center gap-2">
              <Swords className="w-4 h-4" /> Attack Patterns
            </h3>
            <div className="space-y-3">
              {boss.attacks.map((atk) => (
                <div key={atk.name} className="border-l-2 border-[var(--border-gold-dim)] pl-3">
                  <div className="text-sm font-bold text-[var(--text-primary)]">{atk.name}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">{atk.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-sm font-bold text-[#6a9ad0] mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" /> Combat Strategy
            </h3>
            <ul className="space-y-2">
              {boss.strategy.map((s) => (
                <li key={s} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--text-gold)] mt-1">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solo vs Co-Op */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="game-panel corner-decor p-5">
              <h3 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-2 flex items-center gap-2">
                <Heart className="w-3 h-3" /> Solo Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{boss.soloTips}</p>
            </div>
            <div className="game-panel corner-decor p-5">
              <h3 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2 flex items-center gap-2">
                <Users className="w-3 h-3" /> Co-Op Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{boss.coOpTips}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-4">
          {/* Damage Resistance */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 flex items-center gap-2">
              <Shield className="w-3 h-3" /> Damage Resistance
            </h3>
            <div className="space-y-1.5">
              {boss.resistanceChart.map((r) => (
                <div key={r.type} className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">{r.type}</span>
                  <span className={`font-bold ${
                    r.value === 'Effective' ? 'text-green-400' :
                    r.value === 'Resisted' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drops */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-xs font-bold text-[var(--accent-green)] mb-3 flex items-center gap-2">
              <Star className="w-3 h-3" /> Drops
            </h3>
            <ul className="space-y-2">
              {boss.drops.map((d) => (
                <li key={d} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--accent-green)] mt-0.5">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-3 h-3" /> Preparation
            </h3>
            <ul className="space-y-1.5">
              {boss.preparation.map((p) => (
                <li key={p} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5">⚡</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="game-panel corner-decor p-5">
            <h3 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Locations
            </h3>
            <ul className="space-y-1.5">
              {boss.locations.map((l) => (
                <li key={l} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                  <MapPin className="w-3 h-3 text-[var(--text-gold)] flex-shrink-0 mt-0.5" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Respawn & Trivia */}
          <div className="game-panel corner-decor p-5">
            <div className="flex items-center gap-2 mb-2 text-xs text-[var(--text-muted)]">
              <Clock className="w-3 h-3" />
              <span>{boss.respawn}</span>
            </div>
            {boss.trivia && (
              <div className="mt-3 pt-3 border-t border-[var(--border-gold-dim)]">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-3 h-3 text-[var(--text-gold)]" />
                  <span className="text-[10px] font-cinzel font-bold text-[var(--text-gold)] uppercase">Trivia</span>
                </div>
                <p className="text-[10px] text-[var(--text-muted)] leading-relaxed italic">{boss.trivia}</p>
              </div>
            )}
          </div>
        </div>

        {/* Boss Gallery */}
        <SectionGallery images={bossDetailImages[bossName]} />
      </div>
    </PageLayout>
  );
}
