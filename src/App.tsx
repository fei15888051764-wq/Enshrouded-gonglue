import { createContext, useContext, useCallback, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate as useRouterNavigate, useLocation } from 'react-router-dom';
import { getSeoMeta } from './data/seoMeta';
import { SITE_URL } from './config';
import HomePage from './sections/HomePage';
import LoreHomePage from './pages/LoreHomePage';
import LoreSubPage from './pages/LoreSubPage';
import BeginnerHomePage from './pages/BeginnerHomePage';
import BeginnerSubPage from './pages/BeginnerSubPage';
import QuestsHomePage from './pages/QuestsHomePage';
import QuestsSubPage from './pages/QuestsSubPage';
import SkillsHomePage from './pages/SkillsHomePage';
import SkillsSubPage from './pages/SkillsSubPage';
import ItemsHomePage from './pages/ItemsHomePage';
import CraftingHomePage from './pages/CraftingHomePage';
import EnemiesHomePage from './pages/EnemiesHomePage';
import BossesHomePage from './pages/BossesHomePage';
import BossDetailPage from './pages/BossDetailPage';
import MapHomePage from './pages/MapHomePage';
import MapSubPage from './pages/MapSubPage';
import BaseHomePage from './pages/BaseHomePage';
import BaseSubPage from './pages/BaseSubPage';
import MechanicsHomePage from './pages/MechanicsHomePage';
import MechanicsSubPage from './pages/MechanicsSubPage';
import FishingHomePage from './pages/FishingHomePage';
import FishingSubPage from './pages/FishingSubPage';
import WalkthroughHomePage from './pages/WalkthroughHomePage';
import WalkthroughSubPage from './pages/WalkthroughSubPage';
import TipsHomePage from './pages/TipsHomePage';
import TipsSubPage from './pages/TipsSubPage';
import UpdatesHomePage from './pages/UpdatesHomePage';
import UpdatesSubPage from './pages/UpdatesSubPage';
import TroubleshootHomePage from './pages/TroubleshootHomePage';
import TroubleshootSubPage from './pages/TroubleshootSubPage';
import BuildHomePage from './pages/BuildHomePage';
import BuildSubPage from './pages/BuildSubPage';
import ArmorHomePage from './pages/ArmorHomePage';
import ArmorSubPage from './pages/ArmorSubPage';
import AboutPage from './pages/AboutPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPage';
import WeaponsDatabasePage from './pages/WeaponsDatabasePage';
import ArmorPiecesPage from './pages/ArmorPiecesPage';

interface PageContextType {
  currentPage: string;
  currentSub: string;
  navigate: (page: string, sub?: string) => void;
  goBack: () => void;
}

export const PageContext = createContext<PageContextType>({
  currentPage: 'home',
  currentSub: '',
  navigate: () => {},
  goBack: () => {},
});

export function usePage() {
  return useContext(PageContext);
}

// Top-level pages that don't have sub-pages
const simplePages: Record<string, React.ComponentType> = {
  home: HomePage,
  about: AboutPage,
  disclaimer: DisclaimerPage,
  privacy: PrivacyPage,
  weaponsdb: WeaponsDatabasePage,
  'armor-pieces': ArmorPiecesPage,
};

// Categories with sub-pages (new 3-layer architecture)
const categoryHomePages: Record<string, React.ComponentType> = {
  lore: LoreHomePage,
  beginner: BeginnerHomePage,
  quests: QuestsHomePage,
  skills: SkillsHomePage,
  items: ItemsHomePage,
  crafting: CraftingHomePage,
  enemies: EnemiesHomePage,
  bosses: BossesHomePage,
  map: MapHomePage,
  base: BaseHomePage,
  mechanics: MechanicsHomePage,
  fishing: FishingHomePage,
  walkthrough: WalkthroughHomePage,
  tips: TipsHomePage,
  updates: UpdatesHomePage,
  troubleshoot: TroubleshootHomePage,
  builds: BuildHomePage,
  armor: ArmorHomePage,
};

const categorySubPages: Record<string, React.ComponentType<{ subId: string }>> = {
  bosses: ({ subId }: { subId: string }) => <BossDetailPage bossName={subId} />,
  lore: LoreSubPage,
  beginner: BeginnerSubPage,
  quests: QuestsSubPage,
  skills: SkillsSubPage,
  crafting: CraftingHomePage,
  map: MapSubPage,
  base: BaseSubPage,
  mechanics: MechanicsSubPage,
  fishing: FishingSubPage,
  walkthrough: WalkthroughSubPage,
  tips: TipsSubPage,
  updates: UpdatesSubPage,
  troubleshoot: TroubleshootSubPage,
  builds: BuildSubPage,
  armor: ArmorSubPage,
};

function NotFoundPage() {
  const { navigate } = usePage();
  return (
    <div className="game-bg min-h-screen flex items-center justify-center px-4">
      <div className="game-panel corner-decor p-8 max-w-md w-full text-center">
        <h1 className="font-cinzel text-2xl font-bold text-[var(--text-gold)] mb-3">404 — Lost in the Shroud</h1>
        <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
          This page doesn't exist. It may have been moved, or the URL is incorrect.
        </p>
        <button onClick={() => navigate('home')} className="game-btn px-5 py-2 text-xs font-cinzel tracking-wider">
          Return to Homepage
        </button>
      </div>
    </div>
  );
}

function AppShell() {
  const { page = 'home', sub = '' } = useParams();
  const location = useLocation();
  const routerNavigate = useRouterNavigate();

  const currentPage = page;
  const currentSub = sub;

  // Unknown top-level routes must not render as soft-404s (Google penalty)
  const knownPage =
    currentPage === 'home' ||
    !!categorySubPages[currentPage] ||
    !!categoryHomePages[currentPage] ||
    !!simplePages[currentPage];

  // Scroll to top on every URL change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Unique SEO metadata per route (title, description, OG, canonical)
  useEffect(() => {
    const meta = getSeoMeta(location.pathname);
    document.title = meta.title;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = canonicalUrl;

    // Real 404 handling: noindex unknown routes instead of serving homepage content
    let robots = document.head.querySelector('meta[name="robots"]');
    if (!knownPage) {
      document.title = 'Page Not Found — Enshrouded Guide';
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, follow');
    } else if (robots) {
      robots.remove();
    }
  }, [location.pathname, knownPage]);

  const navigate = useCallback((targetPage: string, targetSub: string = '') => {
    if (targetPage === 'home' && !targetSub) {
      routerNavigate('/');
    } else {
      routerNavigate(targetSub ? `/${targetPage}/${targetSub}` : `/${targetPage}`);
    }
  }, [routerNavigate]);

  const goBack = useCallback(() => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) {
      routerNavigate(-1);
    } else if (currentSub) {
      // Landed directly on a sub-page — go up to its category
      routerNavigate(`/${currentPage}`);
    } else {
      routerNavigate('/');
    }
  }, [routerNavigate, currentPage, currentSub]);

  // Determine which component to render
  let PageComponent: React.ComponentType;

  if (currentSub && categorySubPages[currentPage]) {
    const SubComponent = categorySubPages[currentPage];
    PageComponent = () => <SubComponent subId={currentSub} />;
  } else if (categoryHomePages[currentPage]) {
    PageComponent = categoryHomePages[currentPage];
  } else {
    PageComponent = simplePages[currentPage] || NotFoundPage;
  }

  return (
    <PageContext.Provider value={{ currentPage, currentSub, navigate, goBack }}>
      <PageComponent />
    </PageContext.Provider>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />} />
      <Route path="/:page" element={<AppShell />} />
      <Route path="/:page/:sub" element={<AppShell />} />
      <Route path="*" element={<AppShell />} />
    </Routes>
  );
}

export default App;
