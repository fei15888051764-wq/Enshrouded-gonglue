import { usePage } from '../App';
import { Search, Menu, X, Twitter, Mail, ChevronRight, Flame, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type FuseResult } from 'fuse.js';
import { siteSearch, type SearchItem } from '../data/searchIndex';
import LatestUpdates from './LatestUpdates';

const sections = [
  { id: 'beginner', title: "Beginner's Guide", description: 'Essential tips, first steps, and survival basics', icon: '/images/game-icons/beginner.webp' },
  { id: 'skills', title: 'Skills & Builds', description: 'Skill trees and character build guides', icon: '/images/game-icons/skills.webp' },
  { id: 'builds', title: 'Character Builds', description: 'Meta builds with skills, gear, and strategies', icon: '/images/game-icons/builds.webp' },
  { id: 'weaponsdb', title: 'Weapons', description: 'Complete weapon database with stats and drop info', icon: '/images/game-icons/weapons.webp' },
  { id: 'armor-pieces', title: 'Armor Pieces', description: 'All individual armor pieces — helmets, chests, gloves, legs, boots, and shields with full stats', icon: '/images/game-icons/armor-pieces.webp' },
  { id: 'armor', title: 'Armor Sets', description: '82 complete armor sets with full piece lists, set bonuses, and crafting locations', icon: '/images/game-icons/armor-sets.webp' },
  { id: 'items', title: 'Items & Materials', description: 'Consumables, materials, and key items', icon: '/images/game-icons/items.webp' },
  { id: 'crafting', title: 'Crafting', description: 'Crafting stations and recipes', icon: '/images/game-icons/crafting.webp' },
  { id: 'bosses', title: 'Bosses', description: 'Boss strategies and tactics', icon: '/images/game-icons/bosses.webp' },
  { id: 'enemies', title: 'Enemies', description: 'Creature guide and enemy info', icon: '/images/game-icons/enemies.webp' },
  { id: 'map', title: 'Map & Locations', description: 'Regions and points of interest', icon: '/images/game-icons/map.webp' },
  { id: 'quests', title: 'Quests', description: 'Main and side quest guides', icon: '/images/game-icons/quests.webp' },
  { id: 'lore', title: 'Lore & Story', description: 'The world of Embervale and the Flameborn', icon: '/images/game-icons/lore.webp' },
  { id: 'walkthrough', title: 'Walkthrough', description: 'Step-by-step game guide', icon: '/images/game-icons/walkthrough.webp' },
  { id: 'tips', title: 'Tips & Tricks', description: 'Advanced tips and secrets', icon: '/images/game-icons/tips.webp' },
  { id: 'updates', title: 'Patch Notes', description: 'Game updates and patch history', icon: '/images/game-icons/updates.webp' },
  { id: 'fishing', title: 'Fishing', description: 'Fishing rods, bait, and locations', icon: '/images/game-icons/fishing.webp' },
  { id: 'base', title: 'Base Building', description: 'Base construction and survivor management', icon: '/images/game-icons/base.webp' },
  { id: 'mechanics', title: 'Game Mechanics', description: 'Combat, gliding, Shroud, and systems', icon: '/images/game-icons/mechanics.webp' },
  { id: 'troubleshoot', title: 'Troubleshooting', description: 'Fix crashes, lag, and technical issues', icon: '/images/game-icons/tech.webp' },
  { id: 'screenshots', title: 'Game Screenshots', description: 'Real in-game captures — combat, biomes, bases, bosses, and the Shroud', icon: '/images/game-icons/screenshots.webp' },
];

export default function HomePage() {
  const { navigate } = usePage();
  const routerNavigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FuseResult<SearchItem>[]>([]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSearchResults(siteSearch(value, 8));
  };

  const handleSelectResult = (item: SearchItem) => {
    setSearchQuery('');
    setSearchResults([]);
    if (item.href) {
      routerNavigate(item.href);
      return;
    }
    if (item.route.sub) {
      navigate(item.route.page as any, item.route.sub);
    } else {
      navigate(item.route.page as any);
    }
  };

  return (
    <div className="game-bg min-h-screen">
      {/* ===== Navigation ===== */}
      <nav className="game-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
              <div className="w-8 h-8 rounded-sm border border-[var(--border-gold)] bg-gradient-to-br from-[#2a2010] to-[#1a1408] flex items-center justify-center">
                <Flame className="w-4 h-4 text-[var(--text-gold)]" />
              </div>
              <span className="font-cinzel font-bold text-sm tracking-[0.12em] text-[var(--text-gold)]">
                ENSHROUDED<span className="text-[var(--text-primary)]">GUIDE</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <NavLink onClick={() => navigate('about')}>About</NavLink>
              <NavLink href="https://x.com/GEBILAOWANG_WYF" external>Follow on X</NavLink>
            </div>
            <button className="md:hidden p-2 text-[var(--text-secondary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-gold-dim)] px-4 py-3 space-y-2 bg-[var(--bg-primary)]">
            <button onClick={() => { navigate('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-[var(--text-secondary)] hover:text-[var(--text-gold)] text-sm">About</button>
            <a href="https://x.com/GEBILAOWANG_WYF" target="_blank" rel="noopener noreferrer" className="block py-2 text-[var(--text-secondary)] hover:text-[var(--text-gold)] text-sm">Follow on X</a>
          </div>
        )}
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-80 h-80 bg-[#1a3050]/30 rounded-full blur-[100px]" />
          <div className="absolute top-20 right-[15%] w-60 h-60 bg-[#3a2040]/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 game-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green-glow)] animate-pulse" />
            The Definitive Enshrouded Resource — Continuously Updated
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-wide">
            <span className="text-[var(--text-primary)]">The Ultimate</span>
            <br />
            <span className="text-[var(--text-gold)]" style={{ textShadow: '0 0 30px rgba(196,168,90,0.3)' }}>Enshrouded Guide</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            The professional companion for every Flameborn — meticulously researched guides, comprehensive databases, and expert strategies to master Embervale and conquer the Shroud.
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 md:gap-12 mb-8">
            {[
              { value: 'In-Depth', label: 'Guides & Databases' },
              { value: 'Expert', label: 'Strategies & Builds' },
              { value: 'Always', label: 'Kept Up to Date' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-cinzel font-bold text-[var(--text-gold)]">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--border-gold)]" />
            <input
              type="text"
              placeholder="Search guides, weapons, armor, bosses..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onBlur={() => setTimeout(() => setSearchResults([]), 200)}
              className="w-full pl-11 pr-4 py-3 bg-[var(--panel-inner)] border border-[var(--border-gold-dim)] rounded-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--border-gold)] text-sm transition-colors"
            />

            {/* Live results dropdown */}
            {searchQuery.trim().length >= 2 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#0a0e17] border border-[var(--border-gold)]/30 rounded-lg shadow-2xl shadow-black/50 overflow-hidden text-left">
                {searchResults.length === 0 ? (
                  <div className="px-4 py-3 text-xs text-[var(--text-muted)]">
                    No results for &quot;{searchQuery.trim()}&quot; — try different keywords
                  </div>
                ) : (
                  searchResults.map(({ item }) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--border-gold)]/10 transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[9px] px-1 py-0.5 rounded bg-[var(--border-gold)]/10 text-[var(--text-gold)]/80 flex-shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] truncate mt-0.5">{item.description}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--border-gold-dim)] group-hover:text-[var(--text-gold)] flex-shrink-0 mt-1" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Divider ===== */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-gold-dim)] to-transparent" />
      </div>

      {/* ===== Latest Updates ===== */}
      <LatestUpdates />

      {/* ===== Divider ===== */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-gold-dim)] to-transparent" />
      </div>

      {/* ===== Cards Grid ===== */}
      <section className="py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-title text-xl md:text-2xl">Choose Your Path</h2>
            <p className="text-[var(--text-secondary)] text-sm mt-4">{sections.length} guide categories</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {sections.map((section, index) => (
              <div
                key={section.id}
                onClick={() => navigate(section.id)}
                className="inv-slot corner-decor cursor-pointer group p-4 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* Game Icon */}
                <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-sm border border-[var(--border-gold-dim)] bg-gradient-to-br from-[#1a2030] to-[#141c2c] group-hover:border-[var(--border-gold)] transition-colors p-1.5">
                  <img 
                    src={section.icon} 
                    alt={section.title}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-cinzel font-semibold text-[var(--text-primary)] text-xs md:text-sm leading-tight mb-1.5 group-hover:text-[var(--text-gold)] transition-colors">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-[11px] leading-snug line-clamp-2 mb-2">
                  {section.description}
                </p>

                {/* Arrow */}
                <ChevronRight className="w-4 h-4 text-[var(--border-gold-dim)] group-hover:text-[var(--text-gold)] group-hover:translate-x-1 transition-all mt-auto" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== Beginner Banner ===== */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="game-panel corner-decor p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-1">New to Enshrouded?</h3>
                <p className="text-[var(--text-secondary)] text-sm">Begin your journey with our comprehensive starter guide.</p>
              </div>
              <button onClick={() => navigate('beginner')} className="game-btn whitespace-nowrap flex items-center gap-2">
                Beginner's Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Divider ===== */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-gold-dim)] to-transparent" />
      </div>

      {/* ===== Author Section ===== */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="game-panel corner-decor p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-sm border border-[var(--border-gold-dim)] overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#1a2030] to-[#141c2c]">
                <img 
                  src="/images/avatars/author.webp" 
                  alt="GEBILAOWANG" 
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-0.5">GEBILAOWANG</h3>
                <p className="text-[var(--accent-green-glow)] text-[10px] font-medium mb-2 tracking-wider">FOUNDER & CONTENT CREATOR</p>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">
                  Independent digital content creator, researcher, and online lexicographer building authoritative niche websites and in-depth content across gaming culture, social media trends, technology, and internet linguistics. Active in the field since 2024.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <a href="https://x.com/GEBILAOWANG_WYF" target="_blank" rel="noopener noreferrer" className="game-btn text-[10px] py-1.5 px-3 flex items-center gap-1">
                    <Twitter className="w-3 h-3" /> @GEBILAOWANG_WYF
                  </a>
                  <a href="mailto:fei15888051764@gmail.com" className="game-btn text-[10px] py-1.5 px-3 flex items-center gap-1">
                    <Mail className="w-3 h-3" /> Email
                  </a>
                  <a href="https://about.me/GEBILAOWANG" target="_blank" rel="noopener noreferrer" className="game-btn text-[10px] py-1.5 px-3 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> about.me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-[var(--border-gold-dim)] bg-[#080c14] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-sm border border-[var(--border-gold)] bg-gradient-to-br from-[#2a2010] to-[#1a1408] flex items-center justify-center">
                  <Flame className="w-3 h-3 text-[var(--text-gold)]" />
                </div>
                <span className="font-cinzel font-bold text-sm text-[var(--text-gold)]">ENSHROUDEDGUIDE</span>
              </div>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                The most comprehensive Enshrouded guide hub. Built for players, by players.
              </p>
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-semibold text-[var(--text-gold)] mb-3 tracking-wider">QUICK LINKS</h4>
              <div className="space-y-1.5">
                {sections.slice(0, 5).map(s => (
                  <button key={s.id} onClick={() => navigate(s.id)} className="block text-[var(--text-secondary)] hover:text-[var(--text-gold)] text-xs transition-colors">
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-semibold text-[var(--text-gold)] mb-3 tracking-wider">CONNECT</h4>
              <div className="space-y-2">
                <a href="https://x.com/GEBILAOWANG_WYF" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-gold)] text-xs transition-colors">
                  <Twitter className="w-3.5 h-3.5" /> @GEBILAOWANG_WYF
                </a>
                <a href="mailto:fei15888051764@gmail.com" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-gold)] text-xs transition-colors">
                  <Mail className="w-3.5 h-3.5" /> fei15888051764@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--border-gold-dim)] pt-4 text-center">
            <p className="text-[var(--text-secondary)]/50 text-[10px]">
              Enshrouded Guide is an unofficial fan site. Not affiliated with Keen Games. &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===== Sub Components ===== */

function NavLink({ children, onClick, href, external }: { children: React.ReactNode; onClick?: () => void; href?: string; external?: boolean }) {
  const className = "px-3 py-1.5 text-xs font-cinzel tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-gold)] transition-colors";
  if (external && href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }
  if (onClick) {
    return <button onClick={onClick} className={className}>{children}</button>;
  }
  return <a href={href} className={className}>{children}</a>;
}


