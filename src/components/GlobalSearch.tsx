import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Loader2, Wrench, Star, Clock, AlertTriangle, Swords, Compass, Home, Fish, Flame, TrendingUp, Users, Eye, ChefHat, Beaker, Sprout, Waves, Gauge, Shield, Bug, Server, Volume2, Gamepad2, Gpu, Save, Wifi, Monitor, MapPin, Rocket, Music, CloudSun, Hammer, Skull, Gem, Zap } from 'lucide-react';
import { type FuseResult } from 'fuse.js';
import { usePage } from '../App';
import { siteSearch, type SearchItem } from '../data/searchIndex';

const categoryIcons: Record<string, React.ReactNode> = {
  'Tips & Tricks': <Star className="w-4 h-4" />,
  'Patch Notes': <Clock className="w-4 h-4" />,
  'Troubleshooting': <AlertTriangle className="w-4 h-4" />,
  'Section': <Search className="w-4 h-4" />,
};

const subIcons: Record<string, React.ReactNode> = {
  'tips-beginner': <Shield className="w-4 h-4" />,
  'tips-combat': <Swords className="w-4 h-4" />,
  'tips-exploration': <Compass className="w-4 h-4" />,
  'tips-base': <Home className="w-4 h-4" />,
  'tips-crafting': <Wrench className="w-4 h-4" />,
  'tips-builds': <Users className="w-4 h-4" />,
  'tips-shroud': <Flame className="w-4 h-4" />,
  'tips-farming': <TrendingUp className="w-4 h-4" />,
  'tips-multiplayer': <Users className="w-4 h-4" />,
  'tips-secrets': <Eye className="w-4 h-4" />,
  'tips-cooking': <ChefHat className="w-4 h-4" />,
  'tips-alchemy': <Beaker className="w-4 h-4" />,
  'tips-agriculture': <Sprout className="w-4 h-4" />,
  'tips-fishing': <Fish className="w-4 h-4" />,
  'tips-update7': <Waves className="w-4 h-4" />,
  'tips-performance': <Gauge className="w-4 h-4" />,
  'tr-launch': <AlertTriangle className="w-4 h-4" />,
  'tr-perf': <Monitor className="w-4 h-4" />,
  'tr-mp': <Wifi className="w-4 h-4" />,
  'tr-save': <Save className="w-4 h-4" />,
  'tr-gpu': <Gpu className="w-4 h-4" />,
  'tr-audio': <Volume2 className="w-4 h-4" />,
  'tr-deck': <Gamepad2 className="w-4 h-4" />,
  'tr-server': <Server className="w-4 h-4" />,
  'tr-errors': <Bug className="w-4 h-4" />,
  'tr-maint': <Wrench className="w-4 h-4" />,
  'tr-stuck': <Loader2 className="w-4 h-4" />,
  'updates-launch': <Star className="w-4 h-4" />,
  'updates-u1': <Skull className="w-4 h-4" />,
  'updates-u2': <Music className="w-4 h-4" />,
  'updates-u3': <CloudSun className="w-4 h-4" />,
  'updates-u4': <Zap className="w-4 h-4" />,
  'updates-u5': <MapPin className="w-4 h-4" />,
  'updates-u6': <Gem className="w-4 h-4" />,
  'updates-u7': <Waves className="w-4 h-4" />,
  'updates-u8': <Hammer className="w-4 h-4" />,
  'updates-inter': <Bug className="w-4 h-4" />,
  'updates-roadmap': <Rocket className="w-4 h-4" />,
};

export default function GlobalSearch() {
  const { navigate } = usePage();
  const routerNavigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setResults(siteSearch(value, 12));
  }, []);

  const handleSelect = useCallback((item: SearchItem) => {
    setOpen(false);
    setQuery('');
    setResults([]);
    if (item.href) {
      routerNavigate(item.href);
      return;
    }
    if (item.route.sub) {
      navigate(item.route.page as any, item.route.sub);
    } else {
      navigate(item.route.page as any);
    }
  }, [navigate, routerNavigate]);

  // Keyboard shortcut: Cmd/Ctrl + K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, FuseResult<SearchItem>[]> = {};
    results.forEach(r => {
      const cat = r.item.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(r);
    });
    return groups;
  }, [results]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[var(--border-gold-dim)] bg-[var(--bg-panel)]/50 hover:border-[var(--border-gold)] hover:bg-[var(--bg-panel)] transition-all group"
        title="Search (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-gold)]" />
        <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">Search</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] font-mono bg-[var(--border-gold)]/10 text-[var(--text-muted)] border border-[var(--border-gold-dim)]">
          <span>Ctrl</span><span>+</span><span>K</span>
        </kbd>
      </button>

      {/* Search Dialog Overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div 
            className="w-full max-w-xl mx-4 bg-[#0a0e17] border border-[var(--border-gold)]/30 rounded-lg shadow-2xl shadow-black/50 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-gold-dim)]">
              <Search className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search guides, tips, patches, fixes..."
                value={query}
                onChange={e => handleSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none"
              />
              <button 
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-[var(--border-gold)]/10 text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim().length < 2 ? (
                <div className="p-6 text-center">
                  <p className="text-xs text-[var(--text-muted)] mb-3">Type at least 2 characters to search</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {['glider', 'boss', 'shroud', 'crafting', 'multiplayer', 'crash', 'fps', 'food'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleSearch(tag)}
                        className="px-2 py-1 rounded-sm text-[10px] bg-[var(--border-gold)]/5 text-[var(--text-secondary)] hover:bg-[var(--text-gold)]/10 hover:text-[var(--text-gold)] transition-colors border border-[var(--border-gold-dim)]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-sm text-[var(--text-muted)]">No results found for &quot;{query}&quot;</p>
                  <p className="text-[10px] text-[var(--text-muted)]/50 mt-1">Try different keywords</p>
                </div>
              ) : (
                Object.entries(groupedResults).map(([category, items]) => (
                  <div key={category}>
                    <div className="px-4 py-1.5 bg-[var(--border-gold)]/5 border-y border-[var(--border-gold-dim)]/30">
                      <span className="text-[10px] font-cinzel font-bold uppercase tracking-wider text-[var(--text-gold)]">{category}</span>
                    </div>
                    {items.map(({ item, score }) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--border-gold)]/10 transition-colors text-left group"
                      >
                        <div className="w-8 h-8 rounded flex items-center justify-center bg-[var(--border-gold)]/10 text-[var(--text-gold)] flex-shrink-0 mt-0.5">
                          {subIcons[item.id] || categoryIcons[category] || <Search className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors">
                              {item.title}
                            </span>
                            {score && score < 0.15 && (
                              <span className="text-[9px] px-1 py-0.5 rounded bg-[var(--accent-green)]/20 text-[var(--accent-green)]">Best Match</span>
                            )}
                          </div>
                          <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{item.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-[var(--border-gold-dim)] flex items-center justify-between text-[10px] text-[var(--text-muted)]/50">
              <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-[var(--border-gold)]/10">Enter</kbd> to select</span>
                <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-[var(--border-gold)]/10">Esc</kbd> to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
