import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Terms of Service for Steal Brainrot 67 Game',
  description: 'Terms of Service for Steal Brainrot 67. Learn your rights and responsibilities, account rules, and limitations when accessing and playing our online game.',
  keywords: 'Steal Brainrot 67 terms, terms of service, rules, account policy, legal',
  robots: { index: true, follow: true }
};

export default function Terms() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8">
            <h1 className="text-4xl font-black neon-text mb-8">Terms of Service</h1>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Steal Brainrot 67, you accept and agree to be bound by these terms.
                  If you do not agree with any part of these terms, please do not use our game.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. Game License</h2>
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to access and play Steal Brainrot 67.
                  This license is personal to you and cannot be sold, transferred, or assigned to others.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. User Conduct</h2>
                <p>
                  You agree not to use the game for illegal purposes, to harass or harm other players, share another's password,
                  cheat or use exploits, spam, or violate any laws or regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Age Restriction</h2>
                <p>
                  You must be at least 13 years old to use this game. If you're younger, you need parental consent.
                  We reserve the right to verify age and suspend accounts that violate this requirement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Account Responsibility</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password.
                  You agree to accept all activities that occur under your account. Notify us immediately of any unauthorized use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Content Rights</h2>
                <p>
                  All content in Steal Brainrot 67, including designs, graphics, and code, is owned by us or our licensors.
                  You may not reproduce, distribute, or transmit any content without our written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Modifications & Availability</h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue the game or any features at any time without notice.
                  We are not liable for any loss of data or gameplay due to these changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">8. Disclaimer of Warranties</h2>
                <p>
                  The game is provided "as is" without warranties of any kind. We do not guarantee the game will be error-free,
                  uninterrupted, or meet your specific needs. Play at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">9. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, we shall not be liable for indirect, incidental, consequential, or punitive damages
                  arising from your use of the game, even if advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Steal Brainrot 67 from any claims, damages, or costs (including legal fees)
                  arising from your violation of these terms or unauthorized use of the game.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">11. Termination</h2>
                <p>
                  We may terminate or suspend your account at any time for violating these terms, with or without notice.
                  Upon termination, your right to use the game immediately ceases.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">12. Governing Law</h2>
                <p>
                  These terms are governed by applicable laws. Any legal action or proceeding shall be resolved through binding arbitration
                  rather than in court, unless prohibited by local law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">13. Contact</h2>
                <p>
                  For questions about these terms, contact us at terms@stealbrainrot67.com.
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
