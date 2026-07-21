import { Lock } from 'lucide-react';
import PageLayout from './PageLayout';

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we handle your data"
      icon={<Lock className="w-5 h-5 text-[var(--text-gold)]" />}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Overview</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This Privacy Policy explains how EnshroudedGuide.com collects, uses, and protects your information when you visit our website. We are committed to ensuring your privacy and complying with applicable data protection regulations including GDPR.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Information We Collect</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This is a static informational website. We do not directly collect, store, or process any personal data from visitors. We do not use cookies, tracking pixels, or analytics tools that identify individual users. No account registration is required to access content.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Hosting & Third-Party Services</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This website is hosted on a static hosting platform. Our hosting provider may collect standard server logs (such as IP addresses, browser type, and access times) for operational and security purposes. This data is processed by the hosting provider under their own privacy policy and is not accessible to us for individual user tracking.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">External Links</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This website contains links to external sites (official game websites, social media profiles, etc.). We are not responsible for the privacy practices of these external websites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Your Rights (GDPR)</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, or restrict processing of your personal data. Since we do not collect personal data directly, these rights primarily apply to any data processed by our hosting provider. For inquiries about data processed by our hosting service, please contact us and we will direct you appropriately.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Changes to This Policy</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-sm font-bold text-[var(--text-gold)] mb-2">Contact Us</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:fei15888051764@gmail.com" className="text-[var(--text-gold)] hover:underline">fei15888051764@gmail.com</a>.
          </p>
        </section>

        <div className="pt-4 border-t border-[var(--border-gold-dim)]">
          <p className="text-[var(--text-muted)] text-[10px] text-center">
            Last updated: July 2026. This policy may be updated without notice.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
