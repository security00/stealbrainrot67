import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'About Steal Brainrot 67 - Game Info',
  description: 'Learn about Steal Brainrot 67 - the ultimate meme collection game. Discover our mission, meet the team, and join our vibrant community of players worldwide.',
  keywords: 'About Steal Brainrot, game developer, community, mission, Roblox alternative',
  openGraph: {
    title: 'About Steal Brainrot 67 - Game Info',
    description: 'Learn about Steal Brainrot 67 - the ultimate meme collection game and our mission.',
    url: 'https://stealbrainrot67.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/about',
  }
};

export default function About() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <section className="text-center mb-12 mt-8">
            <h1 className="text-5xl md:text-6xl font-black neon-text mb-4">
              ABOUT US
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover the story behind Steal Brainrot 67 and our mission to bring joy
              through the ultimate meme collection gaming experience.
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-black text-purple-400 mb-6">🎯 Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              At Steal Brainrot 67, our mission is simple: bring entertainment, joy, and community
              to players worldwide. We believe in creating games that are free, fun, and addictive
              without compromising on quality or player experience. Our game celebrates internet meme
              culture and Roblox's creative community by building an engaging platform where players
              can collect, trade, and compete.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're dedicated to maintaining a safe, inclusive environment where players of all ages
              can enjoy gaming without worries about security or unfair practices. Every update, every
              feature, and every decision we make is focused on enhancing player satisfaction.
            </p>
          </section>

          {/* Why We Created This Game */}
          <section className="mb-12">
            <h2 className="text-3xl font-black neon-text mb-8">✨ Why We Created This Game</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Celebrate Meme Culture</h3>
                <p className="text-gray-400">
                  Internet memes are art. They represent creativity, humor, and community.
                  We wanted to create a game that celebrates this unique culture in an interactive way.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Create Community</h3>
                <p className="text-gray-400">
                  Gaming is better together. We built Steal Brainrot 67 with multiplayer features,
                  trading systems, and social elements that bring players together.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-magenta-400 mb-3">Break Down Barriers</h3>
                <p className="text-gray-400">
                  No installations. No paywalls. No hidden costs. Our game runs in your browser
                  on any device, making gaming accessible to everyone, everywhere.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Inspire Creativity</h3>
                <p className="text-gray-400">
                  We believe games should inspire. Through collecting items and completing challenges,
                  players can express themselves and be part of something larger than themselves.
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-black text-purple-400 mb-8">🚀 What Makes Us Different</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🎮</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">No Downloads Required</h3>
                  <p className="text-gray-400">
                    Play instantly in your browser. Steal Brainrot 67 works on desktop, tablet, and mobile
                    without any installation or configuration. Just visit and play!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Completely Free to Play</h3>
                  <p className="text-gray-400">
                    100% free with no pay-to-win mechanics. All content, including legendary items,
                    can be unlocked through gameplay. No hidden costs or surprise charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Thriving Community</h3>
                  <p className="text-gray-400">
                    Join over 1 million players worldwide. Trade items, participate in multiplayer battles,
                    join factions, and make friends in our vibrant gaming community.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Secure & Protected</h3>
                  <p className="text-gray-400">
                    Your data is safe with us. We use industry-standard encryption and security protocols.
                    No malware, no spyware. Just safe, clean gaming fun.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Global Accessibility</h3>
                  <p className="text-gray-400">
                    Playable from any country, any timezone. Multilingual support and global multiplayer
                    means you can connect with players from around the entire world.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Constant Updates</h3>
                  <p className="text-gray-400">
                    New items, new challenges, new events. We actively listen to community feedback
                    and regularly release updates to keep the game fresh and exciting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-cyan-500/10 border border-cyan-500/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-cyan-400 mb-2">1M+</div>
              <p className="text-gray-400 text-sm">Active Players</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-purple-400 mb-2">50+</div>
              <p className="text-gray-400 text-sm">Collectible Items</p>
            </div>
            <div className="bg-magenta-500/10 border border-magenta-500/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-magenta-400 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Server Uptime</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-cyan-400 mb-2">0$</div>
              <p className="text-gray-400 text-sm">Cost to Play</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-black text-purple-400 mb-6">📞 Get In Touch</h2>
            <p className="text-gray-400 mb-6">
              Have questions, suggestions, or found a bug? We'd love to hear from you!
              Our community feedback drives our development. Reach out anytime.
            </p>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-cyan-400 font-bold">Email:</span> support@stealbrainrot67.com
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400 font-bold">Discord:</span> Join our community Discord for updates and support
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400 font-bold">Twitter:</span> Follow us @StealBrainrot67 for news and announcements
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold neon-text mb-6">Join Our Community Today</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Become part of the Steal Brainrot 67 community. Meet players, collect items, and have fun!
            </p>
            <a
              href="/"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              🎮 Start Playing Now
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}