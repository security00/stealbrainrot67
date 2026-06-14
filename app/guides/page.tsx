import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Steal Brainrot Guides - 67, Lucky Blocks, Items & Beginner Tips',
  description:
    'Steal Brainrot guide index for beginner strategy, Lucky Blocks, item stats, 67 routes, code warnings, and Roblox gameplay basics.',
  keywords: [
    'steal brainrot guides',
    'steal brainrot 67 guide',
    'how to get 67',
    'lucky blocks guide',
    'steal a brainrot tips',
  ].join(', '),
  openGraph: {
    title: 'Steal Brainrot Guides - 67, Lucky Blocks, Items & Beginner Tips',
    description:
      'Current Steal Brainrot guide index for 67 routes, Lucky Blocks, item stats, beginner strategy, and code warnings.',
    url: 'https://stealbrainrot67.com/guides',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/guides',
  },
};

const guides = [
  {
    title: 'Steal Brainrot Hub',
    content:
      'Start here if you searched the main keyword. This page explains the official buy, steal, earn, Rebirth, and gear loop before sending you into specific systems.',
    href: '/steal-brainrot',
    label: 'Open hub',
    tips: [
      'Best for broad search intent.',
      'Covers gameplay basics and source notes.',
      'Links into items, Lucky Blocks, and 67 routes.',
    ],
  },
  {
    title: 'How to Get 67',
    content:
      'Focused route for 67 with current community-reported sources, Admin Lucky Block odds, Sammy\'s Base Event notes, stealing routes, and code warnings.',
    href: '/guides/how-to-get-67',
    label: 'Read 67 guide',
    tips: [
      '67 is listed as a Secret Brainrot.',
      'Community sources list $1.25B cost and $7.5M/s income.',
      'Drop rates are update-sensitive, so verify in-game.',
    ],
  },
  {
    title: 'Lucky Blocks',
    content:
      'Overview of regular, Admin Abuse, Taco Tuesday, and seasonal Lucky Blocks with reported costs and availability notes.',
    href: '/lucky-blocks',
    label: 'Read Lucky Blocks',
    tips: [
      'Admin Lucky Block is the key 67 route.',
      'Lucky Blocks do not generate money before opening.',
      'Some blocks are event-only or region-restricted.',
    ],
  },
  {
    title: 'Item Database',
    content:
      'Compare Brainrot cost, income, source, rarity, drop rate, and ROI from the site item table.',
    href: '/items',
    label: 'Browse items',
    tips: [
      'Use item pages for exact stats.',
      'Check source labels before planning a route.',
      'Use ROI only as a directional comparison.',
    ],
  },
] as const;

export default function Guides() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-12 mt-8">
            <h1 className="text-4xl md:text-6xl font-black neon-text mb-4">
              STEAL BRAINROT GUIDES
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Current guide entry points for <strong>steal brainrot</strong>, <strong>item 67</strong>,
              Lucky Blocks, and item stats. These pages are written as update-sensitive guides, not fixed lore.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-6 md:p-8 hover:border-cyan-400 transition-colors"
              >
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  {guide.title}
                </h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {guide.content}
                </p>
                <div className="bg-black/40 rounded-lg p-5 mb-5">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">
                    Key Notes
                  </h3>
                  <ul className="space-y-2">
                    {guide.tips.map((tip) => (
                      <li key={tip} className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold flex-shrink-0">-</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={guide.href} className="text-cyan-400 hover:underline font-semibold">
                  {guide.label} -&gt;
                </Link>
              </article>
            ))}
          </div>

          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-6 md:p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Guide Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Steal Brainrot changes through updates and events, so route pages should show the checked date,
                distinguish official gameplay from community data, and avoid fake code promises.
              </p>
              <p>
                For the next restart cycle, the strongest content path is:
                <Link href="/steal-brainrot" className="text-cyan-400 hover:underline"> main keyword hub</Link>,
                {' '}then <Link href="/lucky-blocks" className="text-cyan-400 hover:underline">Lucky Blocks</Link>,
                {' '}then <Link href="/guides/how-to-get-67" className="text-cyan-400 hover:underline">67 route</Link>.
              </p>
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Test the Route?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Start with the embedded game entry, then come back to the guides when you need exact item or block data.
            </p>
            <Link
              href="/"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Play Now
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
