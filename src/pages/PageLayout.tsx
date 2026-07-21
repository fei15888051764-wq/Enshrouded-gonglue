import { usePage } from '../App';
import { Home, Twitter, Mail, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import GlobalSearch from '../components/GlobalSearch';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, icon, children }: PageLayoutProps) {
  const { navigate, goBack } = usePage();

  useEffect(() => {
    const fullTitle = subtitle
      ? `${title} | ${subtitle} — Enshrouded Guide`
      : `${title} — Enshrouded Guide`;
    document.title = fullTitle;

    // 动态更新meta标签
    const description = subtitle
      ? `${title} - ${subtitle} | Enshrouded complete guide by GEBILAOWANG`
      : `${title} - Enshrouded complete guide by GEBILAOWANG`;

    // 更新 description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // 更新 og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    // 更新 og:description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // 更新 twitter:title（如果不存在则创建）
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twTitle) {
      twTitle = document.createElement('meta');
      twTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twTitle);
    }
    twTitle.setAttribute('content', fullTitle);

    // 更新 twitter:description（如果不存在则创建）
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twDesc) {
      twDesc = document.createElement('meta');
      twDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twDesc);
    }
    twDesc.setAttribute('content', description);
  }, [title, subtitle]);

  return (
    <div className="game-bg min-h-screen">
      {/* Header */}
      <header className="game-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <button 
                onClick={goBack}
                className="px-3 py-1.5 rounded-sm border border-[var(--border-gold-dim)] hover:border-[var(--border-gold)] text-[var(--text-secondary)] hover:text-[var(--text-gold)] transition-colors text-xs font-cinzel tracking-wider"
              >
                &larr; Back
              </button>
              <div className="flex items-center gap-2">
                {icon}
                <div>
                  <h1 className="font-cinzel font-bold text-sm text-[var(--text-gold)] tracking-wide">{title}</h1>
                  {subtitle && <p className="text-[10px] text-[var(--text-secondary)] hidden sm:block">{subtitle}</p>}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GlobalSearch />
              <button 
                onClick={() => navigate('home')}
                className="p-2 rounded-sm border border-[var(--border-gold-dim)] hover:border-[var(--border-gold)] text-[var(--text-secondary)] hover:text-[var(--text-gold)] transition-colors"
              >
                <Home className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="game-panel corner-decor p-6 md:p-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-gold-dim)] bg-[#080c14] py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-secondary)]/40 text-[10px]">&copy; {new Date().getFullYear()}</span>
            <button onClick={() => navigate('disclaimer')} className="text-[10px] text-[var(--text-secondary)]/40 hover:text-[var(--text-gold)] transition-colors">Disclaimer</button>
            <span className="text-[var(--text-secondary)]/20 text-[10px]">·</span>
            <button onClick={() => navigate('privacy')} className="text-[10px] text-[var(--text-secondary)]/40 hover:text-[var(--text-gold)] transition-colors">Privacy</button>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/GEBILAOWANG_WYF" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)]/40 hover:text-[var(--text-gold)] transition-colors" title="Follow on X (Twitter): @GEBILAOWANG_WYF">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="mailto:fei15888051764@gmail.com" className="text-[var(--text-secondary)]/40 hover:text-[var(--text-gold)] transition-colors" title="Email: fei15888051764@gmail.com">
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a href="https://about.me/GEBILAOWANG" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)]/40 hover:text-[var(--text-gold)] transition-colors" title="Author Profile: about.me/GEBILAOWANG">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
