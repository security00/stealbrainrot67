import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Steal Brainrot - Play Free Online, Guide, Items & 67 Routes',
  description:
    'Steal Brainrot hub for free online play, Roblox gameplay basics, Lucky Blocks, Rebirth, items, 67 routes, codes status, and beginner strategy.',
  keywords: [
    'steal brainrot',
    'steal a brainrot',
    'steal brainrot game',
    'steal brainrot online',
    'steal brainrot free',
    'steal brainrot guide',
    'steal brainrot 67',
    '67 steal a brainrot game',
  ].join(', '),
  openGraph: {
    title: 'Steal Brainrot - Play Free Online, Guide, Items & 67 Routes',
    description:
      'Play Steal Brainrot online, learn the core Roblox game loop, browse item stats, and follow practical 67 routes.',
    url: 'https://stealbrainrot67.com/steal-brainrot',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/steal-brainrot',
  },
};

const checkedDate = 'June 14, 2026';

const systemCards = [
  {
    title: 'Core game loop',
    body:
      'Buy Brainrots, steal from other players, generate money, Rebirth, then use stronger gear and base upgrades to scale faster.',
    href: '/',
    label: 'Play online',
  },
  {
    title: 'Lucky Blocks',
    body:
      'Lucky Blocks are RNG reward blocks. The block itself does not earn money, but the Brainrot you open from it can.',
    href: '/lucky-blocks',
    label: 'Read Lucky Blocks',
  },
  {
    title: 'Item 67',
    body:
      '67 is a Secret Brainrot listed by community sources at $1.25B cost, $7.5M/s income, and Admin Lucky Block routes.',
    href: '/items/67',
    label: 'See 67 stats',
  },
  {
    title: 'Rebirth',
    body:
      'Rebirth trades most money and Brainrots for long-term perks like multipliers, slots, controllers, and gear access.',
    href: '/guides/how-to-get-67',
    label: 'Use route guide',
  },
] as const;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I play Steal Brainrot online for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. This site provides a free browser play entry and guide hub for Steal Brainrot topics, including items, events, Lucky Blocks, and 67 routes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do you do in Steal Brainrot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The official Roblox page describes the loop as buying Brainrots, stealing Brainrots from other players, generating money, using Rebirth, and buying slaps or troll gear.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Steal Brainrot 67?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Steal Brainrot 67 refers to searches around the Secret Brainrot named 67, its item stats, drop route, and online play pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there active Steal Brainrot codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Recent public code roundups report no active code redemption feature. Treat 67 code claims as unconfirmed unless the game adds an official code menu.',
      },
    },
  ],
} as const;

export default function StealBrainrotPage() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan-400">Steal Brainrot</span>
          </nav>

          <section className="mb-12">
            <p className="text-cyan-300 font-bold mb-3">Guide hub and free play entry</p>
            <h1 className="text-4xl md:text-6xl font-black neon-text mb-5">
              STEAL BRAINROT
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
              Play <strong>Steal Brainrot</strong> online, learn the official Roblox gameplay loop, and jump into
              focused guides for <strong>Lucky Blocks</strong>, <strong>Rebirth</strong>, <strong>items</strong>,
              and <strong>Steal Brainrot 67</strong>. This page is the broad hub for the main keyword before users
              narrow down to item 67, codes, or event-specific searches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-3 rounded-lg text-center"
              >
                Play Steal Brainrot
              </Link>
              <Link
                href="/lucky-blocks"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg text-center"
              >
                Lucky Blocks Guide
              </Link>
              <Link
                href="/guides/how-to-get-67"
                className="border border-cyan-500/60 hover:bg-cyan-500/10 text-cyan-300 font-bold px-6 py-3 rounded-lg text-center"
              >
                How to Get 67
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {systemCards.map((card) => (
              <article key={card.title} className="bg-black/45 border border-cyan-500/40 rounded-lg p-5">
                <h2 className="text-xl font-bold text-cyan-400 mb-2">{card.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{card.body}</p>
                <Link href={card.href} className="text-cyan-400 hover:underline font-semibold">
                  {card.label} -&gt;
                </Link>
              </article>
            ))}
          </section>

          <section className="bg-purple-900/20 border border-cyan-500/40 rounded-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
              What Is Steal Brainrot?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The official Roblox page describes the core loop simply: buy a Brainrot, steal Brainrots from other
              players, generate money, Rebirth, and buy slaps or troll gear. That makes the game less like a linear
              story quest and more like a live base economy with raiding, defense, event windows, and rare item hunting.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our restart focus is to make this site answer that broad intent first, then move users into exact pages:
              the <Link href="/items" className="text-cyan-400 hover:underline">item database</Link>,
              {' '}the <Link href="/lucky-blocks" className="text-cyan-400 hover:underline">Lucky Blocks guide</Link>,
              {' '}and the <Link href="/items/67" className="text-cyan-400 hover:underline">67 stats page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-5">
              Systems Players Search For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ['Brainrots and rarities', 'Rarities rank Brainrots by rarity, cost, and income. Core tiers include Common, Rare, Epic, Legendary, Mythic, Brainrot God, Secret, and OG.'],
                ['Lucky Blocks', 'Bought, stolen, or event-spawned blocks that open into random Brainrots after a timer. Some are regular, some are event-only.'],
                ['Traits and mutations', 'Traits can stack and modify income or appearance. Mutations also modify income and appearance, but a Brainrot can only hold one mutation.'],
                ['Codes', 'Recent code pages report no active redemption feature, so code-heavy pages should clearly warn users instead of promising fake rewards.'],
              ].map(([title, body]) => (
                <article key={title} className="border border-cyan-500/30 rounded-lg p-5 bg-black/30">
                  <h3 className="text-lg font-bold text-purple-300 mb-2">{title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-5">
              Popular Steal Brainrot Searches We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ['steal brainrot', 'Broad game, play, item, and event intent. This page is the main hub.'],
                ['steal a brainrot', 'Alternate phrasing for players looking for the same Roblox game.'],
                ['steal brainrot 67', 'Focused searches around item 67, routes, drop rate, stats, and fake code checks.'],
                ['67 steal a brainrot game', 'Free online play intent that maps to the homepage game embed.'],
              ].map(([query, intent]) => (
                <div key={query} className="border border-cyan-500/30 rounded-lg p-4 bg-black/30">
                  <h3 className="text-lg font-bold text-purple-300 mb-1">{query}</h3>
                  <p className="text-sm text-gray-300">{intent}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
              Fast Start Checklist
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>Open the homepage and test the embedded Steal Brainrot play entry.</li>
              <li>Learn the base loop: buy, steal, defend, generate money, Rebirth, and upgrade gear.</li>
              <li>Check Lucky Blocks before chasing rare Brainrots, because event-only blocks rotate.</li>
              <li>For item 67, use the dedicated guide and compare rolling, event, stealing, and trade routes.</li>
            </ol>
          </section>

          <section className="bg-purple-900/20 border border-cyan-500/40 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
              Source Notes
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Last checked: {checkedDate}. Official gameplay wording comes from the Roblox game page. Exact item
              data, Lucky Block pools, traits, mutations, and codes are update-sensitive community or third-party
              references, so the site should keep them dated and phrased as reported data.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li><a href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Official Roblox page</a></li>
              <li><a href="https://stealabrainrot.fandom.com/wiki/67" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Steal a Brainrot Wiki: 67</a></li>
              <li><a href="https://stealabrainrot.fandom.com/wiki/Lucky_Blocks" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Steal a Brainrot Wiki: Lucky Blocks</a></li>
              <li><a href="https://www.bluestacks.com/blog/redeem-codes/steal-a-brainrot-redeem-codes-en.html" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">BlueStacks code status roundup</a></li>
            </ul>
          </section>
        </div>
      </main>

      <Script
        id="steal-brainrot-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Footer />
    </>
  );
}
