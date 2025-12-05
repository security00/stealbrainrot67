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
    'Festive Lucky Block details for the Christmas update: $500M cost, festive rarity, leaked drops, and how to prep via Christmas/Admin Abuse/7-day login.',
  keywords: [
    'festive lucky block',
    'steal a brainrot festive lucky block',
    'christmas lucky block brainrot',
    'admin abuse festive block',
    'how to get festive lucky block'
  ].join(', '),
  openGraph: {
    title: 'Festive Lucky Block - Cost, Drops & Release Window',
    description:
      'What we know about the Festive Lucky Block: $500M cost, festive rarity, leaked model, rumored drop table, and preparation tips.',
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
    headline: 'Festive Lucky Block - Cost, Drops & Release Window',
    description:
      'Festive Lucky Block details from the Christmas update: $500M cost, festive rarity, leak notes, rumored drops, and how to prepare.',
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
          text: 'It is listed as upcoming for the Christmas update and can also appear during Admin Abuse or 7-day login rewards once live.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does the Festive Lucky Block cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The leaked infobox shows a $500M cost with festive rarity and no ritual requirement.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the leaked drops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The leaked table lists La Vacca Presento Natalina (74%), Santa Chicleteira (25%), and La Ginger Sekolah (1%); all are still unconfirmed.'
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
            $500M festive rarity Lucky Block leaked for the Christmas update (shown on Caylus&apos;s 11/29/25 stream).
            Listed as <strong>upcoming</strong> and obtainable via Christmas, Admin Abuse, or 7-day login once released.
            This page summarizes every known Festive Lucky Block detail, so you can prepare before the event starts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Cost', value: '$500M' },
              { label: 'Rarity', value: 'Festive' },
              { label: 'Has ritual?', value: 'No' },
              { label: 'Status', value: 'Upcoming / event-limited' },
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
              <li>Scheduled for the Christmas update; originally leaked on 11/29/25 (SpyderSammy on Caylus&apos;s stream).</li>
              <li>The Festive Lucky Block is expected via Christmas event, Admin Abuse rotations, and possible 7-day login reward.</li>
              <li>Prep tips: hold $500M+ cash, clear inventory, and stack multipliers before the Festive Lucky Block window starts.</li>
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
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Rumored Drop Table (Unconfirmed)</h2>
            <p className="text-gray-400 text-sm mb-3">From the leaked infobox; numbers may change on release. Treat all Festive Lucky Block drop rates as provisional.</p>
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
              <li>Pair with existing income boosters (e.g., Taco Tuesday multipliers) to recover the $500M cost faster.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">FAQs</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-cyan-300">Is the drop table confirmed?</p>
                <p className="text-gray-300">No. All numbers above come from the leaked infobox and may change on release.</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-300">Can I get it outside Christmas?</p>
                <p className="text-gray-300">The infobox lists Admin Abuse and a 7-day login option, so watch for those rotations.</p>
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
