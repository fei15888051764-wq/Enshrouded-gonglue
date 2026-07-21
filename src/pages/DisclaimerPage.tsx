import { Shield } from 'lucide-react';
import PageLayout from './PageLayout';

export default function DisclaimerPage() {
  return (
    <PageLayout
      title="Disclaimer"
      subtitle="Legal notices and terms of use"
      icon={<Shield className="w-5 h-5 text-[var(--text-gold)]" />}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Unofficial Fan Site</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            EnshroudedGuide.com is an unofficial fan-created website and is not affiliated with, endorsed by, or connected to Keen Games or any of its partners. All game content, including but not limited to names, images, logos, and trademarks, are the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Copyright & Trademarks</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            "Enshrouded" and all related game assets, characters, story elements, and visual materials are trademarks and/or registered trademarks of Keen Games. This website uses these materials under fair use for informational and educational purposes only. No copyright infringement is intended.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Accuracy of Information</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            While every effort is made to ensure the accuracy of the information provided on this website, we make no guarantees about completeness, reliability, or timeliness. Game mechanics, stats, and features may change with updates, and some information may become outdated. Users are encouraged to verify critical information independently.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">No Liability</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            The creators of this website shall not be held liable for any damages, losses, or issues arising from the use of information provided herein. This includes but is not limited to: game account issues, data loss, software conflicts, or any other technical problems resulting from following guides or advice on this site. Use all information at your own risk.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">External Links</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This website may contain links to external websites (such as official game sites, social media, or partner platforms). We are not responsible for the content, privacy practices, or availability of these external sites. Visiting external links is at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Contact for Issues</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            If you are a rights holder and believe any content on this website infringes upon your intellectual property rights, or if you have any other legal concerns, please contact us at <a href="mailto:fei15888051764@gmail.com" className="text-[var(--text-gold)] hover:underline">fei15888051764@gmail.com</a>. We will address all legitimate concerns promptly.
          </p>
        </section>

        <div className="pt-4 border-t border-[var(--border-gold-dim)]">
          <p className="text-[var(--text-muted)] text-[10px] text-center">
            Last updated: July 2026. This disclaimer may be updated without notice.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
