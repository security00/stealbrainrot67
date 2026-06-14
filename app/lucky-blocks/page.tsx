import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Steal a Brainrot Lucky Blocks - Costs, Types & 67 Drop',
  description:
    'Steal a Brainrot Lucky Blocks guide with community-reported costs, regular blocks, Admin Abuse blocks, seasonal blocks, 67 drop notes, and safe source links.',
  keywords: [
    'steal a brainrot lucky blocks',
    'steal brainrot lucky blocks',
    'admin lucky block 67',
    'steal brainrot 67 drop rate',
    'festive lucky block',
    'lucky block costs',
  ].join(', '),
  openGraph: {
    title: 'Steal a Brainrot Lucky Blocks - Costs, Types & 67 Drop',
    description:
      'Community-reported Lucky Block costs, types, event availability, and how 67 fits into the Admin Lucky Block pool.',
    url: 'https://stealbrainrot67.com/lucky-blocks',
    type: 'article',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/lucky-blocks',
  },
};

const checkedDate = 'June 14, 2026';

const blockRows = [
  ['Mythic Lucky Block', '$2.5M / 175 Robux', 'Shop or Red Carpet', 'Obtainable'],
  ['Brainrot God Lucky Block', '$25M / 399 Robux', 'Shop or Red Carpet', 'Obtainable'],
  ['Secret Lucky Block', '$750M / 2399 Robux', 'Shop or Red Carpet', 'Obtainable'],
  ['Admin Lucky Block', '$100M', 'Admin Abuse', 'Event only'],
  ['Los Lucky Blocks', '$250M', 'Admin Abuse', 'Event only'],
  ['Taco Lucky Block', '$50M', 'Taco Tuesday', 'Event only'],
  ['Los Taco Blocks', '$300M', 'Taco Tuesday', 'Event only'],
  ['Spooky Lucky Block', '$350M', 'Halloween event', 'Seasonal'],
  ['Festive Lucky Block', '$400M / 799 Robux', 'Christmas event', 'Seasonal'],
  ['Heart Lucky Block', '$350M', 'Valentine event', 'Seasonal'],
  ['Leprechaun Lucky Block', '$400M / 649 Robux', 'St. Patrick event', 'Seasonal'],
  ['Egg Lucky Block', '$500M / 799 Robux', 'Easter event', 'Seasonal'],
] as const;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are Lucky Blocks in Steal a Brainrot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Lucky Blocks are lootbox-style items that can be bought, stolen, or obtained during events. After a timer, they open into a random Brainrot from that block pool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Lucky Blocks generate money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Lucky Block itself does not generate money. The Brainrot received after opening the block can generate money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can 67 drop from Admin Lucky Block?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Community sources list 67 as an Admin Lucky Block reward with about a 1.5% chance, also described by the community wiki as a 1 in 67 chance.',
      },
    },
  ],
} as const;

export default function LuckyBlocksPage() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/steal-brainrot" className="hover:text-cyan-400">Steal Brainrot</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan-400">Lucky Blocks</span>
          </nav>

          <section className="mb-10">
            <p className="text-cyan-300 font-bold mb-3">Community-reported data, last checked {checkedDate}</p>
            <h1 className="text-4xl md:text-6xl font-black neon-text mb-5">
              Steal a Brainrot Lucky Blocks
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
              Lucky Blocks are one of the biggest systems behind <strong>Steal Brainrot</strong> item hunting.
              They can be bought, stolen, or appear during events. Once the timer finishes, the block opens into
              a random Brainrot from its reward pool. Exact pools and event availability can change, so this page
              uses dated community-reported data instead of pretending the numbers are permanent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/how-to-get-67" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-3 rounded-lg text-center">
                How to Get 67
              </Link>
              <Link href="/items/67" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg text-center">
                View 67 Stats
              </Link>
              <Link href="/lucky-blocks/festive-lucky-block" className="border border-cyan-500/60 hover:bg-cyan-500/10 text-cyan-300 font-bold px-6 py-3 rounded-lg text-center">
                Festive Block Notes
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              ['Regular blocks', 'Mythic, Brainrot God, and Secret Lucky Blocks are the main always-check blocks in community tables.'],
              ['Admin and Taco blocks', 'Admin Lucky Block, Los Lucky Blocks, Taco Lucky Block, and Los Taco Blocks are event-only in many guides.'],
              ['Seasonal blocks', 'Spooky, Festive, Heart, Leprechaun, and Egg Lucky Blocks are tied to holiday or one-off events.'],
            ].map(([title, body]) => (
              <article key={title} className="bg-black/45 border border-cyan-500/40 rounded-lg p-5">
                <h2 className="text-xl font-bold text-cyan-400 mb-2">{title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
              </article>
            ))}
          </section>

          <section className="bg-purple-900/20 border border-cyan-500/40 rounded-lg p-6 md:p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
              Lucky Blocks and 67
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For this site, the most important Lucky Block is the <strong>Admin Lucky Block</strong>. Community tables
              list <strong>67</strong> as a Secret reward with about a <strong>1.5%</strong> chance and
              <strong> $7.5M/s</strong> income. The community wiki also describes the Admin Lucky Block route as a
              <strong> 1 in 67</strong> recurring chance. That makes 67 a high-intent long-tail topic, but the copy
              should always say community-reported.
            </p>
            <p className="text-gray-400 text-sm">
              Practical note: if a block is not showing, it may be outside its event window, unavailable in the current
              update, or restricted by local lootbox rules.
            </p>
          </section>

          <section id="costs" className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-5">
              Lucky Block Costs and Availability
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300 text-sm border border-cyan-500/30">
                <thead className="bg-black/40">
                  <tr>
                    <th className="p-3 border-b border-cyan-500/30">Lucky Block</th>
                    <th className="p-3 border-b border-cyan-500/30">Reported cost</th>
                    <th className="p-3 border-b border-cyan-500/30">How to get</th>
                    <th className="p-3 border-b border-cyan-500/30">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {blockRows.map(([name, cost, route, status]) => (
                    <tr key={name}>
                      <td className="p-3 border-b border-cyan-500/20 font-semibold text-purple-200">{name}</td>
                      <td className="p-3 border-b border-cyan-500/20">{cost}</td>
                      <td className="p-3 border-b border-cyan-500/20">{route}</td>
                      <td className="p-3 border-b border-cyan-500/20">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Costs and pools can move during updates. Use this as a page-level overview, then verify inside the live game.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <article className="bg-black/40 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">What Not to Claim</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Do not call Lucky Block odds official unless the game itself shows the rate.</li>
                <li>Do not promise active 67 codes. Recent public sources report no active redemption feature.</li>
                <li>Do not say every block is always available. Event-only and seasonal blocks rotate.</li>
              </ul>
            </article>
            <article className="bg-black/40 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">Internal Link Targets</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><Link href="/steal-brainrot" className="text-cyan-400 hover:underline">Steal Brainrot hub</Link> for broad game intent.</li>
                <li><Link href="/items/67" className="text-cyan-400 hover:underline">67 item stats</Link> for cost, income, and source.</li>
                <li><Link href="/guides/how-to-get-67" className="text-cyan-400 hover:underline">How to get 67</Link> for routes and code warnings.</li>
              </ul>
            </article>
          </section>

          <section className="bg-purple-900/20 border border-cyan-500/40 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-4">
              Sources
            </h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li><a href="https://stealabrainrot.fandom.com/wiki/Lucky_Blocks" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Steal a Brainrot Wiki: Lucky Blocks</a></li>
              <li><a href="https://stealabrainrot.fandom.com/wiki/67" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Steal a Brainrot Wiki: 67</a></li>
              <li><a href="https://www.eldorado.gg/blog/steal-a-brainrot-lucky-blocks/" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">Eldorado Lucky Blocks table</a></li>
              <li><a href="https://www.bluestacks.com/blog/redeem-codes/steal-a-brainrot-redeem-codes-en.html" target="_blank" rel="noopener nofollow" className="text-cyan-400 hover:underline">BlueStacks code status roundup</a></li>
            </ul>
          </section>
        </div>
      </main>

      <Script
        id="lucky-blocks-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Footer />
    </>
  );
}
