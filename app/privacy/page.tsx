import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Privacy Policy - Steal Brainrot 67',
  description: 'Privacy Policy for Steal Brainrot 67. Learn how we protect your personal information and data.',
  robots: { index: true, follow: true }
};

export default function Privacy() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8">
            <h1 className="text-4xl font-black neon-text mb-8">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly (account details, email) and information collected automatically
                  (device type, IP address, gameplay data). We use cookies and similar technologies to enhance your experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. How We Use Your Information</h2>
                <p>
                  Your information is used to provide, maintain, and improve our game, process transactions, send updates,
                  comply with legal obligations, and ensure account security. We do not sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Data Security</h2>
                <p>
                  We implement industry-standard security measures including encryption, secure servers, and regular security audits
                  to protect your data from unauthorized access, modification, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Third-Party Services</h2>
                <p>
                  We use Google AdSense for advertising. Google's advertising partners may collect data about your browsing habits.
                  Please review their privacy policies for more information about their data practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You can manage your account settings
                  or contact us at privacy@stealbrainrot67.com to exercise these rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Children's Privacy</h2>
                <p>
                  Our game is intended for users aged 13 and above. We do not knowingly collect information from children under 13.
                  If we learn we've collected such information, we'll delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Policy Changes</h2>
                <p>
                  We may update this policy occasionally. We'll notify you of significant changes via email or prominent notice on our website.
                  Continued use of the game constitutes acceptance of updated policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">8. Contact Us</h2>
                <p>
                  For privacy concerns, contact us at privacy@stealbrainrot67.com.
                  Last updated: October 29, 2025
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}