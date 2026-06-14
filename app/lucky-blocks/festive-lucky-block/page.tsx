import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import YouTubeLite from '../../components/YouTubeLite';
import { getVideos } from '../../../data/videos';

export const metadata: Metadata = {
  title: 'Festive Lucky Block - Cost & Drops | Steal Brainrot',
  description:
    'Festive Lucky Block notes for Steal a Brainrot: current community-reported $400M / 799 Robux cost, seasonal availability, and older leaked drop-table notes.',
  keywords: [
    'festive lucky block',
    'steal a brainrot festive lucky block',
    'christmas lucky block brainrot',
    'admin abuse festive block',
    'how to get festive lucky block'
  ].join(', '),
  openGraph: {
    title: 'Festive Lucky Block - Cost, Drops & Seasonal Notes',
    description:
      'Community-reported Festive Lucky Block cost, seasonal availability, and historical leaked drop-table notes.',
    url: 'https://stealbrainrot67.com/lucky-blocks/festive-lucky-block',
    type: 'article'
  },
  alternates: { canonical: 'https://stealbrainrot67.com/lucky-blocks/festive-lucky-block' }
};

const media = {
  laVacca: '/festive-lucky-block/la-vacca-presento-natalina.png',
  santa: '/festive-lucky-block/santa-chicleteira.png',
  ginger: '/festive-lucky-block/la-ginger-sekolah.png',
};

const drops = [
  { name: 'La Vacca Presento Natalina', income: '$600K / s', chance: '74%', status: 'Leaked (not confirmed)', img: media.laVacca },
  { name: 'Santa Chicleteira', income: '$35M / s', chance: '25%', status: 'Leaked (not confirmed)', img: media.santa },
  { name: 'La Ginger Sekolah', income: '$125M / s', chance: '1%', status: 'Leaked (not confirmed)', img: media.ginger },
];

export default function FestiveLuckyBlock() {
  const videos = getVideos('festive-lucky-block');
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Festive Lucky Block - Cost, Drops & Seasonal Notes',
    description:
      'Festive Lucky Block details from current community tables plus historical leak notes.',
    mainEntityOfPage: 'https://stealbrainrot67.com/lucky-blocks/festive-lucky-block',
    datePublished: new Date().toISOString()
  } as const;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does the Festive Lucky Block release?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recent community tables list the Festive Lucky Block as a seasonal Christmas event block. Availability can rotate, so verify in-game.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does the Festive Lucky Block cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recent community tables list the Festive Lucky Block at $400M / 799 Robux. Older leak notes used $500M, so verify in-game.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the leaked drops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Older leaked tables listed La Vacca Presento Natalina, Santa Chicleteira, and La Ginger Sekolah. Newer community tables use a broader seasonal pool, so treat older numbers as historical.'
        }
      }
    ]
  } as const;

  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link> <span className="mx-2">/</span>
            <span className="text-cyan-400">Festive Lucky Block</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black neon-text mb-3">Festive Lucky Block</h1>
          <p className="text-gray-300 mb-6">
            Recent community tables list the Festive Lucky Block at <strong>$400M / 799 Robux</strong> as a seasonal
            Christmas block. This page keeps the older leaked notes below for reference, but the broader
            <Link href="/lucky-blocks" className="text-cyan-400 hover:underline"> Lucky Blocks guide</Link>
            {' '}should be treated as the current overview.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Cost', value: '$400M / 799 Robux' },
              { label: 'Rarity', value: 'Festive' },
              { label: 'Has ritual?', value: 'No' },
              { label: 'Status', value: 'Seasonal / verify in-game' },
            ].map(card => (
              <div key={card.label} className="bg-black/50 border border-cyan-500/40 rounded-lg p-4">
                <div className="text-sm text-gray-400">{card.label}</div>
                <div className="text-xl font-bold text-cyan-300">{card.value}</div>
              </div>
            ))}
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Festive Lucky Block Release & How to Get It</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Recent community tables list the Festive Lucky Block as a Christmas seasonal block.</li>
              <li>Older leak notes mentioned Admin Abuse rotations and login rewards; treat those as historical until verified in-game.</li>
              <li>Prep tips: hold at least $400M+ cash, clear inventory, and stack income before the Festive Lucky Block window starts.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Appearance</h2>
            <p className="text-gray-300">
              The leaked Festive Lucky Block model looks like a wrapped Christmas present with a front question mark,
              decorative wings, and red/green detailing. Final textures may change at launch.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Older Leaked Drop Table (Historical)</h2>
            <p className="text-gray-400 text-sm mb-3">This older table is kept for historical context. Newer community tables show a broader Festive pool, so verify the live game before relying on these rates.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300 border border-cyan-500/30">
                <thead className="bg-black/40">
                  <tr>
                    <th className="p-2 border-b border-cyan-500/30">Image</th>
                    <th className="p-2 border-b border-cyan-500/30">Brainrot</th>
                    <th className="p-2 border-b border-cyan-500/30">Income</th>
                    <th className="p-2 border-b border-cyan-500/30">Chance</th>
                    <th className="p-2 border-b border-cyan-500/30">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {drops.map((d) => (
                    <tr key={d.name} className="hover:bg-black/30">
                      <td className="p-2 border-b border-cyan-500/20">
                        {d.img && (
                          <img
                            src={d.img}
                            alt={d.name}
                            loading="lazy"
                            className="h-16 w-auto rounded border border-cyan-500/20 bg-black/40"
                          />
                        )}
                      </td>
                      <td className="p-2 border-b border-cyan-500/20">{d.name}</td>
                      <td className="p-2 border-b border-cyan-500/20">{d.income}</td>
                      <td className="p-2 border-b border-cyan-500/20">{d.chance}</td>
                      <td className="p-2 border-b border-cyan-500/20 text-gray-400">{d.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              <p className="text-gray-400 mt-3">
                Other Christmas mentions (unconfirmed): Santa Chicleteira, Ballerina Peppermintina, and item 25.
                Treat everything as subject to change until the block is live.
              </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Best Prep & Farming Plan</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use Admin Abuse windows to stock cash before Christmas spawns begin.</li>
              <li>Jump in early during event start; high-demand drops will sell fast in trading hubs.</li>
              <li>Keep inventory slots open and track timers so you don&apos;t miss reroll chances.</li>
              <li>Pair with existing income boosters to recover the reported $400M cost faster.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">FAQs</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-cyan-300">Is the drop table confirmed?</p>
                <p className="text-gray-300">No. The older table is historical, and newer community tables differ. Verify in-game.</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-300">Can I get it outside Christmas?</p>
                <p className="text-gray-300">Recent tables treat it as seasonal. Admin Abuse or login references should be checked in the live game.</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-300">Is there a ritual?</p>
                <p className="text-gray-300">No ritual is listed; it behaves like other Lucky Blocks (open to roll a brainrot).</p>
              </div>
            </div>
          </section>

          {videos.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">Festive Lucky Block Videos</h2>
              <p className="text-gray-400 mb-4 text-sm">High-view community runs opening the Festive Lucky Block and showing the leaked drops.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videos.map((v, i) => (
                  <YouTubeLite key={v.id + i} id={v.id} title={v.title} analyticsId="video_festive" />
                ))}
              </div>
              <Script
                id="videos-festive-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    itemListElement: videos.map((v, idx) => ({
                      '@type': 'VideoObject',
                      position: idx + 1,
                      name: v.title,
                      description: v.title,
                      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
                      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`
                    })),
                  }),
                }}
              />
            </section>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="text-cyan-400 hover:underline">Play Steal Brainrot 67 -&gt;</Link>
            <Link href="/lucky-blocks" className="text-cyan-400 hover:underline">All Lucky Blocks -&gt;</Link>
            <Link href="/items/67" className="text-cyan-400 hover:underline">View item 67 stats -&gt;</Link>
          </div>
        </div>
      </main>

      <Script
        id="festive-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="festive-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Footer />
    </>
  );
}
