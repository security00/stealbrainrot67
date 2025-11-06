import { Metadata } from 'next';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import GameFrame from './components/GameFrame';
import BackgroundAnimation from './components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Steal Brainrot 67 - Play Free Meme Game Online',
  description: 'Play Steal Brainrot 67 online for free. Collect rare Roblox memes and unlock the legendary item 67. No download required, play instantly in your browser.',
  keywords: 'steal brainrot, steal brainrot 67, brainrot 67, roblox brainrot, free online game, meme game',
  openGraph: {
    title: 'Steal Brainrot 67 - Play Free Meme Game Online',
    description: 'Play Steal Brainrot 67 online for free. Collect rare Roblox memes and unlock the legendary item 67.',
    url: 'https://stealbrainrot67.com/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/',
  }
};

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          {/* Game Section - Top Priority */}
          <section className="mb-12 md:mb-16">
            <GameFrame src="https://steal-brainrot.io/steal-brainrot.embed" title="Steal Brainrot 67 - Play Now" />
          </section>

          {/* Hero Section - Below Game */}
          <section className="text-center mb-16 md:mb-20 mt-8 md:mt-12">
            <div className="mb-8 md:mb-12">
              <h1 className="text-5xl md:text-7xl font-black neon-text mb-6 md:mb-8">
                STEAL BRAINROT 67
              </h1>
              <p className="text-lg md:text-2xl text-cyan-300 mb-4 md:mb-6 font-bold">
                The Rarest Meme Collection Game
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Embark on an epic adventure to collect rare Roblox memes and unlock the legendary item 67.
                Play free online, no download needed. Join thousands of meme collectors worldwide and play
                <span className="mx-1 font-semibold text-cyan-300">steal brainrot 67</span> right in your browser.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto mb-16 md:mb-20">
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black text-cyan-400">1M+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">Players</div>
              </div>
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black text-purple-400">50+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">Items</div>
              </div>
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black text-magenta-400">100%</div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">Free</div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20 md:mb-24 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black neon-text text-center mb-12 md:mb-16">
              Why Players Love Steal Brainrot 67
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">馃幃</div>
                <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3">Instant Play</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Play directly in your browser. No downloads, no installations. Start playing in seconds and collect memes immediately.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">猸?/div>
                <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-3">Rare Items</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Discover 50+ collectible meme items including the legendary item 67. Each item has unique properties and hidden bonuses.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">馃弳</div>
                <h3 className="text-lg md:text-xl font-bold text-magenta-400 mb-3">Daily Challenges</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Complete daily quests and challenges to earn bonus points, unlock achievements, and climb the global leaderboard.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">馃寪</div>
                <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3">Cross-Platform</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Play on desktop, tablet, or mobile. Responsive design ensures smooth gameplay on any device with internet connection.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">馃懃</div>
                <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-3">Multiplayer</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Connect with players worldwide. Trade items, join factions, and compete in real-time multiplayer battles for glory.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">馃攼</div>
                <h3 className="text-lg md:text-xl font-bold text-magenta-400 mb-3">Secure & Safe</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Your account and progress are protected. No viruses, no malware. Play worry-free with our advanced security systems.
                </p>
              </div>
            </div>
          </section>

          {/* How to Get Item 67 */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 md:p-12 mb-20 md:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-400 mb-8 md:mb-10">馃幆 How to Unlock Item 67</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">1</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Reach Level 20</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Complete the main story mode and reach at least level 20 to unlock advanced locations.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">2</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Collect 30 Rare Items</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Gather 30 different rare meme items by exploring hidden locations and completing side quests.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">3</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Solve the Puzzle</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Find and solve the ancient puzzle hidden in the deepest dungeon of the meme realm.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">4</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Defeat the Boss</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Defeat the final boss and claim your legendary item 67 reward in the spectacular battle.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO: About Steal Brainrot */}
          <section className="bg-black/40 border border-cyan-500/30 rounded-lg p-8 md:p-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">About Steal Brainrot</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Steal Brainrot is a fast-paced, browser-based meme collection game where you explore, trade, and battle to complete your collection.
              In Steal Brainrot 67, your quest centers on unlocking the legendary item 67 while mastering puzzles and boss fights. Whether you are
              brand new to <strong>steal brainrot</strong> or a veteran chasing perfect runs, you can play instantly on any device鈥攏o download required.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Play <strong>steal brainrot</strong> free online, discover rare items, and team up with friends to climb the leaderboard. Our
              <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 font-semibold"> steal brainrot guides </Link>
              cover efficient routes, trading tips, and late鈥慻ame strategies so you can progress faster in <strong>steal brainrot 67</strong>. Jump in now and start collecting.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Looking for the fastest way to get started? Just launch the game above and enjoy <strong>steal brainrot 67</strong> with zero setup.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black neon-text mb-6 md:mb-8">
              Ready to Become a Brainrot Master?
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Join over 1 million players in the ultimate meme collection adventure. Play free now, no account required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg neon-border inline-block text-center"
              >
                馃幃 Play Now
              </Link>
              <Link
                href="/guides"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg inline-block text-center"
              >
                馃摉 View Guides
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}


