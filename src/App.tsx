import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import HomePage from './sections/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import { pageMeta, applyPageMeta } from './data/seoMeta';
import LoreHomePage from './pages/LoreHomePage';
import LoreSubPage from './pages/LoreSubPage';
import SkillsHomePage from './pages/SkillsHomePage';
import SkillsSubPage from './pages/SkillsSubPage';
import MechanicsHomePage from './pages/MechanicsHomePage';
import MechanicsSubPage from './pages/MechanicsSubPage';
import BeginnerHomePage from './pages/BeginnerHomePage';
import BeginnerSubPage from './pages/BeginnerSubPage';
import WalkthroughHomePage from './pages/WalkthroughHomePage';
import WalkthroughSubPage from './pages/WalkthroughSubPage';
import ItemsHomePage from './pages/ItemsHomePage';
import ItemsSubPage from './pages/ItemsSubPage';
import CraftingHomePage from './pages/CraftingHomePage';
import CraftingSubPage from './pages/CraftingSubPage';
import BaseBuildingHomePage from './pages/BaseBuildingHomePage';
import BaseBuildingSubPage from './pages/BaseBuildingSubPage';
import UpdatesHomePage from './pages/UpdatesHomePage';
import UpdatesSubPage from './pages/UpdatesSubPage';
import EnemiesHomePage from './pages/EnemiesHomePage';
import EnemiesSubPage from './pages/EnemiesSubPage';
import BossesHomePage from './pages/BossesHomePage';
import BossesSubPage from './pages/BossesSubPage';
import BossDetailPage from './pages/BossDetailPage';
import { bossDetailData } from './data/bossDetailData';
import QuestsHomePage from './pages/QuestsHomePage';
import QuestsSubPage from './pages/QuestsSubPage';
import MapHomePage from './pages/MapHomePage';
import MapSubPage from './pages/MapSubPage';
import TipsHomePage from './pages/TipsHomePage';
import TipsSubPage from './pages/TipsSubPage';
import FishingHomePage from './pages/FishingHomePage';
import FishingSubPage from './pages/FishingSubPage';
import TroubleshootingHomePage from './pages/TroubleshootingHomePage';
import TroubleshootingSubPage from './pages/TroubleshootingSubPage';
import BuildHomePage from './pages/BuildHomePage';
import BuildSubPage from './pages/BuildSubPage';
import ArmorHomePage from './pages/ArmorHomePage';
import ArmorSubPage from './pages/ArmorSubPage';
import WeaponsHomePage from './pages/WeaponsHomePage';
import WeaponsSubPage from './pages/WeaponsSubPage';
import ArmorPiecesHomePage from './pages/ArmorPiecesHomePage';
import ArmorPiecesSubPage from './pages/ArmorPiecesSubPage';
import ScreenshotsHomePage from './pages/ScreenshotsHomePage';
import ScreenshotsSubPage from './pages/ScreenshotsSubPage';

export interface PageContextType {
  navigate: (page: string, sub?: string) => void;
}

import { createContext, useContext } from 'react';
import GlobalSearch from './components/GlobalSearch';
import { initAnalytics, trackPageView } from './utils/analytics';
import { initWebVitals } from './utils/webVitals';
import { initSEOMonitoring } from './utils/seoMonitoring';
import { seoConfig } from './config/seo';

const PageContext = createContext<PageContextType>({ navigate: () => {} });
export const usePage = () => useContext(PageContext);

/* ---- Simple page components (no sub-pages) ---- */
const simplePages: Record<string, React.ComponentType> = {
  privacy: PrivacyPage,
};

/* ---- Category home pages ---- */
const categoryHomePages: Record<string, React.ComponentType> = {
  lore: LoreHomePage,
  skills: SkillsHomePage,
  mechanics: MechanicsHomePage,
  beginner: BeginnerHomePage,
  walkthrough: WalkthroughHomePage,
  items: ItemsHomePage,
  crafting: CraftingHomePage,
  'base-building': BaseBuildingHomePage,
  updates: UpdatesHomePage,
  enemies: EnemiesHomePage,
  bosses: BossesHomePage,
  quests: QuestsHomePage,
  map: MapHomePage,
  tips: TipsHomePage,
  fishing: FishingHomePage,
  troubleshooting: TroubleshootingHomePage,
  builds: BuildHomePage,
  armor: ArmorHomePage,
  weaponsdb: WeaponsHomePage,
  'armor-pieces': ArmorPiecesHomePage,
  screenshots: ScreenshotsHomePage,
};

/* ---- Category sub pages ---- */
const categorySubPages: Record<string, React.ComponentType<{ subId: string }>> = {
  lore: LoreSubPage,
  skills: SkillsSubPage,
  mechanics: MechanicsSubPage,
  beginner: BeginnerSubPage,
  walkthrough: WalkthroughSubPage,
  items: ItemsSubPage,
  crafting: CraftingSubPage,
  'base-building': BaseBuildingSubPage,
  updates: UpdatesSubPage,
  enemies: EnemiesSubPage,
  bosses: BossesSubPage,
  quests: QuestsSubPage,
  map: MapSubPage,
  tips: TipsSubPage,
  fishing: FishingSubPage,
  troubleshooting: TroubleshootingSubPage,
  builds: BuildSubPage,
  armor: ArmorSubPage,
  weaponsdb: WeaponsSubPage,
  'armor-pieces': ArmorPiecesSubPage,
  screenshots: ScreenshotsSubPage,
};

/* ---- Resolve a sub-page component, with boss detail override ---- */
function SubPageResolver({ page, sub }: { page: string; sub: string }) {
  // Boss detail pages take priority over boss guide sections
  if (page === 'bosses' && bossDetailData[sub]) {
    return <BossDetailPage subId={sub} />;
  }
  const Component = categorySubPages[page];
  if (!Component) return null;
  return <Component subId={sub} />;
}

function AppShell() {
  const routerNavigate = useNavigate();
  const location = useLocation();
  const { page: urlPage, sub: urlSub } = useParams<{ page?: string; sub?: string }>();
  const currentPage = urlPage || 'home';
  const currentSub = urlSub || undefined;
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = (page: string, sub?: string) => {
    const path = page === 'home' ? '/' : sub ? `/${page}/${sub}` : `/${page}`;
    routerNavigate(path);
    window.scrollTo(0, 0);
  };

  // Scroll to top on every route change (handles back/forward too)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dynamic SEO meta tags per route (data-driven registry)
  useEffect(() => {
    applyPageMeta(pageMeta(currentPage, currentSub));
    trackPageView(location.pathname);
  }, [currentPage, currentSub, location.pathname]);

  // Global search keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={navigate} />;
    }

    // Category with sub-page
    if (currentSub && categorySubPages[currentPage]) {
      return <SubPageResolver page={currentPage} sub={currentSub} />;
    }

    // Category home
    if (categoryHomePages[currentPage]) {
      const Component = categoryHomePages[currentPage];
      return <Component />;
    }

    // Simple pages
    if (simplePages[currentPage]) {
      const Component = simplePages[currentPage];
      return <Component />;
    }

    // Fallback
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <PageContext.Provider value={{ navigate }}>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header
          currentPage={currentPage}
          currentSub={currentSub}
          onNavigate={navigate}
          onSearchOpen={() => setSearchOpen(true)}
        />
        <main>
          {renderContent()}
        </main>
        <Footer onNavigate={navigate} />
        <GlobalSearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onNavigate={navigate}
        />
      </div>
    </PageContext.Provider>
  );
}

export default function App() {
  useEffect(() => {
    initAnalytics(seoConfig.gaId);
    initWebVitals();
    initSEOMonitoring();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/:page" element={<AppShell />} />
        <Route path="/:page/:sub" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  );
}
