import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import GameFrame from './components/GameFrame';
import BackgroundAnimation from './components/BackgroundAnimation';
import Script from 'next/script';
import YouTubeLite from './components/YouTubeLite';
import { getVideos } from '../data/videos';

export const metadata: Metadata = {
  title: '67 Steal a Brainrot Game - Play Free Online',
  description: 'Play 67 Steal a Brainrot Game online for free. Launch the browser game instantly, learn about item 67, and follow quick Roblox 67 tips.',
  keywords: '67 steal a brainrot game, steal a brainrot 67, steal a brainrot 67 free, steal a brainrot roblox 67, steal brainrot 67, how to get 67',
  openGraph: {
    title: '67 Steal a Brainrot Game - Play Free Online',
    description: 'Play 67 Steal a Brainrot Game online for free. Launch instantly in your browser and follow quick item 67 tips.',
    url: 'https://stealbrainrot67.com/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/',
  }
};

export default function Home() {
  const homeVideos = getVideos('67').slice(0, 4);
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          {/* Game Section - Top Priority */}
          <section className="mb-12 md:mb-16">
            <GameFrame src="https://yoplay.io/steal-a-brainrot.embed" title="67 Steal a Brainrot Game - Play Now" />
          </section>

          {/* 67 Quick Guide - Directly Under Game Embed */}
          <section className="mb-12 md:mb-14" aria-labelledby="home-67-quick">
            <div className="bg-black/50 border border-cyan-500/40 rounded-lg p-6 md:p-8">
              <h2 id="home-67-quick" className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
                How To Get 67 in Steal a Brainrot (Quick Guide)
              </h2>
              <p className="text-gray-300 mb-4">
                Landing here from searching <strong>&quot;67 steal a brainrot game&quot;</strong> or <strong>&quot;steal a brainrot 67&quot;</strong>? Here&apos;s the short version for players chasing item 67:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Build a cash-producing base by buying Brainrots and protecting them from raids.</li>
                <li>Use Rebirth and event windows to increase income, slots, and gear options.</li>
                <li>Buy Admin Lucky Blocks when available and roll for 67. Community tables list about a 1.5% Admin Lucky Block chance, but this can change.</li>
                <li>Alternatively, watch for Sammy&apos;s Base Event routes or steal/trade with players when the game allows it.</li>
              </ol>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* Primary: Official Roblox CTA */}
                <a
                  href="https://www.roblox.com/discover/?Keyword=Steal%20a%20Brainrot"
                  target="_blank"
                  rel="noopener nofollow"
                  aria-label="Play Steal a Brainrot on Roblox (opens in new tab)"
                  className="bg-yellow-300 hover:bg-yellow-400 text-black font-extrabold px-6 py-3 rounded-lg text-center"
                  title="Play on Roblox"
                  data-analytics-id="home_cta_roblox"
                >
                  Play on Roblox
                </a>
                <Link
                  href="/items/67"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-3 rounded-lg text-center"
                >
                  View 67 Item Details
                </Link>
                <Link
                  href="/guides/how-to-get-67"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg text-center"
                >
                  Step-by-Step Guide
                </Link>
              </div>
            </div>
          </section>

          {/* Festive Lucky Block Entry Point */}
          <section className="mb-12 md:mb-14" aria-labelledby="home-festive">
            <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 id="home-festive" className="text-2xl md:text-3xl font-black text-cyan-400 mb-2">
                    Festive Lucky Block (Christmas Event)
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base">
                    Community-reported Lucky Block costs, event-only blocks, and how 67 fits into the Admin Lucky Block pool.
                  </p>
                </div>
                <Link
                  href="/lucky-blocks"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-5 py-3 rounded-lg text-center"
                >
                  View Lucky Blocks Guide
                </Link>
              </div>
            </div>
          </section>

          {/* 67 Related Videos - Increase Exposure */}
          {homeVideos.length > 0 && (
            <section className="mb-12 md:mb-16" aria-labelledby="home-videos">
              <div className="mb-4 flex items-end justify-between">
                <h2 id="home-videos" className="text-2xl md:text-3xl font-black text-cyan-400">Watch Steal Brainrot 67 Guides & Videos</h2>
                <Link href="/videos/67" className="text-cyan-400 hover:underline text-sm md:text-base">See all related videos -&gt;</Link>
              </div>
              <p className="text-gray-400 text-sm md:text-base mb-4">Popular community videos about getting 67 in <strong>steal brainrot 67</strong> and understanding events. Click to play inline without cookies.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeVideos.map((v, i) => (
                  <YouTubeLite key={v.id + i} id={v.id} title={v.title} analyticsId="video_home" />
                ))}
              </div>
              <Script
                id="home-videos-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    itemListElement: homeVideos.map((v, idx) => ({
                      '@type': 'VideoObject',
                      position: idx + 1,
                      name: v.title,
                      description: v.title,
                      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
                      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
                    })),
                  }),
                }}
              />
            </section>
          )}

          {/* Hero Section - Below Game */}
          <section className="text-center mb-16 md:mb-20 mt-8 md:mt-12">
            <div className="mb-8 md:mb-12">
              <h1 className="text-5xl md:text-7xl font-black neon-text mb-6 md:mb-8">
                67 STEAL A BRAINROT GAME
              </h1>
              <p className="text-lg md:text-2xl text-cyan-300 mb-4 md:mb-6 font-bold">
                Play Free Online
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Embark on an epic adventure to collect rare Roblox memes and unlock the legendary item 67.
                Play the <strong>67 steal a brainrot game</strong> online for free, no download needed. Join thousands of meme
                collectors worldwide and play <span className="mx-1 font-semibold text-cyan-300">steal a brainrot 67</span> right in your browser.
              </p>
              <div className="max-w-3xl mx-auto">
                <Image
                  src="/hero-67.svg"
                  alt="Steal a Brainrot 67 game preview with item 67 highlight"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="w-full rounded-lg border border-cyan-500/40 shadow-lg bg-black/40"
                />
              </div>
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

          {/* Hot Events / Search Intent Section */}
          <section className="mb-20 md:mb-24 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black neon-text text-center mb-12 md:mb-16">
              Hot Right Now: 67 Routes & Event Blocks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* 67 Quick Route */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3">How to get 67 (Roblox)</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Step-by-step route to unlock item 67 for free. Covers Admin Abuse, Taco Tuesday boosts, and drop math.
                  </p>
                </div>
                <Link href="/guides/how-to-get-67" className="mt-4 inline-block text-cyan-400 hover:underline font-semibold">
                  Open the 67 guide -&gt;
                </Link>
              </div>

              {/* Festive Lucky Block */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-3">Festive Lucky Block (Christmas)</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    $400M / 799 Robux in recent community tables, with event-only availability and rotating drop pools.
                  </p>
                </div>
                <Link href="/lucky-blocks/festive-lucky-block" className="mt-4 inline-block text-cyan-400 hover:underline font-semibold">
                  View Lucky Blocks -&gt;
                </Link>
              </div>

              {/* Codes & Myths */}
              <div className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-magenta-400 mb-3">Codes, Myths & Safety</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    No official &quot;67 code&quot; exists - avoid fakes. Use legit events to fund blocks. Read lore if you searched how to &quot;kill/steal 67&quot;.
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Link href="/guides/how-to-get-67#codes" className="text-cyan-400 hover:underline font-semibold">
                    See codes & free routes -&gt;
                  </Link>
                  <Link href="/lore/67#faqs" className="text-cyan-400 hover:underline font-semibold">
                    Read 67 lore FAQ -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get Item 67 */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 md:p-12 mb-20 md:mb-24">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-400 mb-8 md:mb-10">How to Chase Item 67</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">1</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Build Cash Flow</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Buy Brainrots, defend your base, and steal from weaker targets so your income can fund event blocks.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">2</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Use Rebirth Wisely</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Rebirth resets most progress but unlocks stronger multipliers, more slots, and better gear routes.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">3</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Target Admin Lucky Blocks</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Admin Lucky Blocks are the clearest community-reported source for 67, with each block costing around $100M when available.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black text-sm md:text-base">4</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">Steal or Trade When Possible</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">67 can also appear through stealing or special event routes, so keep the page focused on current sources instead of fake codes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO: About Steal Brainrot */}
          <section className="bg-black/40 border border-cyan-500/30 rounded-lg p-8 md:p-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">About Steal Brainrot</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Steal Brainrot is a chaotic Roblox base game where you buy Brainrots, steal from other players, generate money, rebirth, and unlock gear.
              On this site, the focus is the rare item 67 plus the systems players search most: Lucky Blocks, events, income, item stats, and codes. Whether you are
              brand new to <Link href="/steal-brainrot" className="text-cyan-400 hover:text-cyan-300 font-semibold">steal brainrot</Link> or a veteran chasing perfect runs, you can play instantly on any device-no download required.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Play <strong>steal brainrot</strong> free online, discover rare items, and team up with friends to climb the leaderboard. Our
              <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 font-semibold"> steal brainrot guides </Link>
              cover efficient routes, trading tips, and late-game strategies so you can progress faster in <strong>steal brainrot 67</strong>. Jump in now and start collecting.
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
                Play Now
              </Link>
              <Link
                href="/guides"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg inline-block text-center"
              >
                View Guides
              </Link>
            </div>
          </section>
        </div>

          {/* Optional: 67 FAQ JSON-LD for SEO */}
          <Script
            id="home-67-faq"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  { '@type': 'Question', name: 'How to get 67?', acceptedAnswer: { '@type': 'Answer', text: "Farm cash, play events, then buy Admin Lucky Blocks when available. Community sources also list Sammy's Base Event and stealing as possible routes." } },
                  { '@type': 'Question', name: 'What is the 67 drop rate?', acceptedAnswer: { '@type': 'Answer', text: 'Community tables list about 1.5% from Admin Lucky Blocks, also described as 1 in 67 by the community wiki. Verify in-game because updates can change rates.' } },
                  { '@type': 'Question', name: 'What is the fastest way to get 67?', acceptedAnswer: { '@type': 'Answer', text: 'Play during Admin Abuse and Taco Tuesday, use a private server, pre-farm budget, then roll blocks efficiently.' } }
                ]
              })
            }}
          />

          <section className="mb-10">
            <div className="text-center">
              <Link href="/items/67" className="text-cyan-400 hover:underline font-semibold">Featured: See Steal Brainrot 67 item details -&gt;</Link>
              </div>
            </section>
</main>

      <Footer />
    </>
  );
}

