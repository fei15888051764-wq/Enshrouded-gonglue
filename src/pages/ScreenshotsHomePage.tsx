import { usePage } from '../App';
import { ChevronRight, Home, Camera } from 'lucide-react';
import PageLayout from './PageLayout';
import SubsectionCards from '../components/SubsectionCards';
import { screenshotsSubSections } from '../data/screenshotsData';
import { screenshotsImages } from '../data/screenshotsImages';

export default function ScreenshotsHomePage() {
  const { navigate } = usePage();

  const totalShots = Object.values(screenshotsImages).reduce((n, arr) => n + arr.length, 0);

  return (
    <PageLayout
      title="Game Screenshots"
      subtitle="Real in-game captures from across Embervale — combat, biomes, bases, bosses, the Shroud, and more"
      icon={<Camera className="w-6 h-6 text-[var(--text-gold)]" />}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)]">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 hover:text-[var(--text-gold)] transition-colors">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-gold)]">Game Screenshots</span>
      </div>

      {/* Introduction */}
      <div className="game-panel corner-decor p-6 mb-8">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Every image in this gallery is a <strong className="text-[var(--text-primary)]">real in-game capture</strong> — official in-engine
          shots from the Steam store alongside our own gameplay library. Browse by theme: combat, biomes, base building,
          the Shroud, bosses, gliding, gear systems, co-op, and official key art. Want to shoot your own? Craft
          the <strong className="text-[var(--text-primary)]">Camera</strong> at a Workbench (1 Metal Scrap + 2 Wood Logs) and
          press <strong className="text-[var(--text-primary)]">Tab</strong> to enter Photo Mode — added in Update 8, <em>Forging the Path</em>.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{totalShots}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Screenshots</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">{screenshotsSubSections.length}</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Galleries</div>
        </div>
        <div className="game-panel corner-decor p-4 text-center">
          <div className="text-2xl font-cinzel font-bold text-[var(--text-gold)]">9</div>
          <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Biomes Shown</div>
        </div>
      </div>

      {/* Gallery Cards */}
      <SubsectionCards
        page="screenshots"
        sections={screenshotsSubSections}
        images={screenshotsImages}
        heading="Screenshot Galleries"
      />
    </PageLayout>
  );
}
