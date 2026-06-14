import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import YouTubeLite from '../../components/YouTubeLite';
import { getVideos } from '../../../data/videos';

export const metadata: Metadata = {
  title: 'How to Get 67 in Steal a Brainrot - Routes, Drop Rate & Codes',
  description:
    'How to get 67 in Steal a Brainrot with current community-reported routes: Admin Lucky Block, Sammy\'s Base Event, stealing, drop rate notes, cost, income, and code warnings.',
  keywords: [
    'how to get 67',
    'steal brainrot 67',
    'how to get 67 brainrot roblox',
    '67 drop rate',
    'admin lucky block 67',
    'steal a brainrot 67 game',
    '67 brainrot codes',
  ].join(', '),
  openGraph: {
    title: 'How to Get 67 in Steal a Brainrot - Routes, Drop Rate & Codes',
    description:
      'Current community-reported 67 routes: Admin Lucky Block, Sammy\'s Base Event, stealing, drop rate notes, cost, income, and code warnings.',
    url: 'https://stealbrainrot67.com/guides/how-to-get-67',
    type: 'article',
  },
  alternates: { canonical: 'https://stealbrainrot67.com/guides/how-to-get-67' },
};

const checkedDate = 'June 14, 2026';

const routeCards = [
  {
    title: 'Admin Lucky Block',
    body:
      'The clearest community-reported source for 67. Admin Lucky Blocks are event-only in many tables and are commonly listed around $100M per block when available.',
  },
  {
    title: "Sammy's Base Event",
    body:
      'The community wiki also lists Sammy\'s Base Event as a possible 67 source. Treat timing and availability as update-sensitive.',
  },
  {
    title: 'Stealing',
    body:
      'Because stealing is a core mechanic, 67 can also be chased by raiding or trading around players who already have it.',
  },
] as const;

export default function HowToGet67() {
  const relatedVideos = getVideos('67');

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get 67 in Steal a Brainrot',
    description:
      'A practical route for chasing 67 in Steal a Brainrot through Admin Lucky Blocks, event timing, cash farming, and stealing routes.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    supply: ['In-game cash', 'Admin Lucky Block access when available'],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Build cash flow',
        text:
          'Buy Brainrots, protect your base, steal from other players when possible, and build enough in-game cash for event blocks.',
      },
      {
        '@type': 'HowToStep',
        name: 'Watch event windows',
        text:
          'Join update, Admin Abuse, and special event windows where Admin Lucky Blocks or Sammy\'s Base Event routes may appear.',
      },
      {
        '@type': 'HowToStep',
        name: 'Roll Admin Lucky Blocks',
        text:
          'Use Admin Lucky Blocks when available. Community tables list 67 around a 1.5% chance, but update changes can affect this.',
      },
      {
        '@type': 'HowToStep',
        name: 'Use stealing routes',
        text:
          'If another player has 67, stealing and trading routes may be faster than pure rolling, depending on server competition.',
      },
    ],
    image: 'https://stealbrainrot67.com/og-image.jpg',
  } as const;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the 67 drop rate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Community tables list 67 at about 1.5% from Admin Lucky Block, while the community wiki describes it as a 1 in 67 recurring chance. Verify in-game after updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a code for 67?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No confirmed active 67 code is available. Recent code roundups report no active code redemption feature, so avoid fake code claims.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does 67 cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'The community wiki lists 67 as a Secret Brainrot with a $1.25B cost and $7.5M per second base income.',
        },
      },
    ],
  } as const;

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-cyan-400">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan-400">How to Get 67</span>
          </nav>

          <section className="mb-10">
            <p className="text-cyan-300 font-bold mb-3">Last checked: {checkedDate}</p>
            <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">
              How to Get 67 in Steal a Brainrot
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              <strong>67</strong> is a community-tracked Secret Brainrot. Current public sources list it with a
              <strong> $1.25B</strong> cost, <strong>$7.5M/s</strong> base income, and routes through
              <strong> Admin Lucky Block</strong>, <strong>Sammy&apos;s Base Event</strong>, and
              <strong> stealing</strong>. Because Steal a Brainrot changes through events, treat drop rates as
              community-reported and verify in-game.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {routeCards.map((card) => (
              <article key={card.title} className="bg-black/45 border border-cyan-500/40 rounded-lg p-5">
                <h2 className="text-xl font-bold text-cyan-400 mb-2">{card.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{card.body}</p>
              </article>
            ))}
          </section>

          <section id="quick-route" className="bg-purple-900/20 border border-cyan-500/40 rounded-lg p-6 md:p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">Fast Route</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>Build a stable base income by buying Brainrots and defending your highest earners.</li>
              <li>Use Rebirth when the multiplier, slots, or gear unlocks are worth the reset.</li>
              <li>Enter event windows where Admin Lucky Blocks or Sammy&apos;s Base Event routes can appear.</li>
              <li>Roll Admin Lucky Blocks when available. At a 1.5% community-reported chance, about 46 blocks is a rough 50% chance and about 153 blocks is a rough 90% chance.</li>
              <li>When another player has 67, stealing or trading can be faster than rolling if server competition is manageable.</li>
            </ol>
          </section>

          <section id="stats" className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">67 Stats Snapshot</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300 text-sm border border-cyan-500/30">
                <thead className="bg-black/40">
                  <tr>
                    <th className="p-3 border-b border-cyan-500/30">Stat</th>
                    <th className="p-3 border-b border-cyan-500/30">Current public value</th>
                    <th className="p-3 border-b border-cyan-500/30">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-cyan-500/20">Rarity</td>
                    <td className="p-3 border-b border-cyan-500/20">Secret</td>
                    <td className="p-3 border-b border-cyan-500/20">Community wiki</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-cyan-500/20">Cost</td>
                    <td className="p-3 border-b border-cyan-500/20">$1.25B</td>
                    <td className="p-3 border-b border-cyan-500/20">Community wiki</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-cyan-500/20">Income</td>
                    <td className="p-3 border-b border-cyan-500/20">$7.5M/s</td>
                    <td className="p-3 border-b border-cyan-500/20">Community wiki and guide tables</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-cyan-500/20">Admin Lucky Block chance</td>
                    <td className="p-3 border-b border-cyan-500/20">About 1.5%, also described as 1 in 67</td>
                    <td className="p-3 border-b border-cyan-500/20">Community-reported</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sources</td>
                    <td className="p-3">Admin Lucky Block, Sammy&apos;s Base Event, stealing</td>
                    <td className="p-3">Community wiki</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="codes" className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Codes and Fake Claims</h2>
            <p className="text-gray-300 leading-relaxed">
              Do not build the page around fake <strong>67 codes</strong>. Recent public code roundups report no active
              Steal a Brainrot code redemption feature, and the community wiki code page does not provide active 67
              codes. Use this page to answer the search intent directly, then send users back to legitimate event and
              block routes.
            </p>
          </section>

          {relatedVideos.length > 0 && (
            <section id="videos" className="mb-10">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-2">Related Videos</h2>
                  <p className="text-gray-400 text-sm">Community videos, not official sources. Use them for gameplay examples only.</p>
                </div>
                <Link href="/videos/67" className="text-cyan-400 hover:underline">All 67 videos -&gt;</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedVideos.map((v, i) => (
                  <YouTubeLite key={v.id + i} id={v.id} title={v.title} start={v.start} analyticsId="video_howto67" />
                ))}
              </div>
            </section>
          )}

          <section id="sources" className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Sources We Used</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>
                <a href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">
                  Official Roblox game page
                </a>
              </li>
              <li>
                <a href="https://stealabrainrot.fandom.com/wiki/67" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">
                  Steal a Brainrot Wiki: 67
                </a>
              </li>
              <li>
                <a href="https://www.eldorado.gg/blog/steal-a-brainrot-lucky-blocks/" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">
                  Eldorado Lucky Blocks table
                </a>
              </li>
              <li>
                <a href="https://www.bluestacks.com/blog/redeem-codes/steal-a-brainrot-redeem-codes-en.html" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">
                  BlueStacks code status roundup
                </a>
              </li>
            </ul>
          </section>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/items/67" className="text-cyan-400 hover:underline font-semibold">View 67 item page -&gt;</Link>
            <Link href="/lucky-blocks" className="text-cyan-400 hover:underline font-semibold">Read Lucky Blocks guide -&gt;</Link>
          </div>
        </div>
      </main>

      <Script
        id="how-to-get-67-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Script
        id="how-to-get-67-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Footer />
    </>
  );
}
