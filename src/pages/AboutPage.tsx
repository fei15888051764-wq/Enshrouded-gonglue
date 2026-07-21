import { Twitter, Mail, ExternalLink, User, Globe, Calendar, Award } from 'lucide-react';
import PageLayout from './PageLayout';

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      subtitle="Meet the creator"
      icon={<User className="w-5 h-5 text-[var(--text-gold)]" />}
    >
      <div className="max-w-2xl mx-auto">
        {/* Author Card */}
        <div className="game-panel corner-decor p-6 md:p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-20 h-20 rounded-sm border border-[var(--border-gold-dim)] overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#1a2030] to-[#141c2c]">
              <img 
                src="/images/avatars/author.webp" 
                alt="GEBILAOWANG" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="font-cinzel text-lg font-bold text-[var(--text-gold)] mb-0.5">GEBILAOWANG</h2>
              <p className="text-[var(--accent-green-glow)] text-xs font-medium mb-4 tracking-wider">FOUNDER & CONTENT CREATOR</p>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-5">
                Independent digital content creator, researcher, and online lexicographer building authoritative niche websites and in-depth content across gaming culture, social media trends, technology, and internet linguistics. Known for comprehensive slang dictionaries, digital trend analysis, and cultural documentation. Active in the field since 2024. For corrections, collaborations, or media inquiries: fei15888051764@gmail.com
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <a href="https://x.com/GEBILAOWANG_WYF" target="_blank" rel="noopener noreferrer" className="game-btn text-[10px] py-2 px-4 flex items-center gap-1.5">
                  <Twitter className="w-3 h-3" /> Follow on X
                </a>
                <a href="mailto:fei15888051764@gmail.com" className="game-btn text-[10px] py-2 px-4 flex items-center gap-1.5">
                  <Mail className="w-3 h-3" /> Email
                </a>
                <a href="https://about.me/GEBILAOWANG" target="_blank" rel="noopener noreferrer" className="game-btn text-[10px] py-2 px-4 flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3" /> about.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { icon: Globe, title: 'Global Audience', desc: 'Serving players worldwide' },
            { icon: Calendar, title: 'Regular Updates', desc: 'Updated with every patch' },
            { icon: Award, title: 'Player First', desc: 'Community-driven content' },
          ].map((item) => (
            <div key={item.title} className="inv-slot p-4 text-center">
              <item.icon className="w-5 h-5 text-[var(--text-gold)] mx-auto mb-2" />
              <h3 className="font-cinzel text-xs font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-[10px]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="game-panel corner-decor p-5 mb-6">
          <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Get in Touch</h3>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">
            For corrections, collaborations, media inquiries, or just to say hi. I read every message and appreciate feedback.
          </p>
          <div className="flex items-center gap-2 text-[var(--text-gold)] text-xs">
            <Mail className="w-3.5 h-3.5" />
            <a href="mailto:fei15888051764@gmail.com" className="hover:underline">fei15888051764@gmail.com</a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[var(--text-secondary)]/30 text-[10px] text-center">
          Enshrouded Guide is an unofficial fan site. Not affiliated with Keen Games. All game content and trademarks belong to their respective owners.
        </p>
      </div>
    </PageLayout>
  );
}
