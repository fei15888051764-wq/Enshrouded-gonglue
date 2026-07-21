import { Settings } from 'lucide-react';
import PageLayout from './PageLayout';

export default function MechanicsPage() {
  return (
    <PageLayout
      title="Game Mechanics"
      subtitle="SUBGame Mechanics"
      icon={<Settings className="w-5 h-5 text-[var(--text-gold)]" />}
    >
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-5 rounded-sm border border-[var(--border-gold-dim)] bg-gradient-to-br from-[#1a2030] to-[#141c2c] flex items-center justify-center">
          <Settings className="w-8 h-8 text-[var(--border-gold)]" />
        </div>
        <h2 className="font-cinzel text-xl font-bold text-[var(--text-gold)] mb-3">Game Mechanics</h2>
        <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto mb-6">
          This section is currently being developed. Check back soon for comprehensive guides.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 game-tag">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green-glow)] animate-pulse" />
          Coming Soon
        </div>
      </div>
    </PageLayout>
  );
}
