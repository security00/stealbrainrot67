import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Steal a Brainrot Items - Rarity, Source, Income',
  description: 'Browse key items from Steal a Brainrot. Filter by source and rarity. See income per second, cost, drop rate, and links to guides.',
  openGraph: {
    title: 'Steal a Brainrot Items - Rarity, Source, Income',
    description: 'Browse items with stats and sources. Jump into 67 details and related guides.',
    url: 'https://stealbrainrot67.com/items',
    type: 'website'
  },
  alternates: { canonical: 'https://stealbrainrot67.com/items' }
};

export default function ItemsIndex() {
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, url: 'https://stealbrainrot67.com/items/67', name: 'Item 67', description: 'Secret item from Admin Lucky Blocks; ~0.25% drop rate; high income per second.' }
    ]
  } as const;

  const items = [
    { id: '67', name: 'Item 67', source: 'Admin Lucky Blocks (Admin Abuse)', rarity: 'Secret', dropRate: '~0.25%', income: '$7,500,000 / s', cost: '$1,200,000,000', href: '/items/67' }
  ];

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black neon-text mb-6">Items</h1>
          <p className="text-gray-400 mb-6">Key items with sources and stats. Select an item to view details.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((it) => (
              <Link key={it.id} href={it.href} className="block border border-cyan-500/40 rounded-lg p-4 hover:border-cyan-400">
                <div className="text-xl font-bold text-cyan-400 mb-1">{it.name}</div>
                <div className="text-gray-300 text-sm">Source: {it.source}</div>
                <div className="text-gray-300 text-sm">Rarity: {it.rarity}</div>
                <div className="text-gray-300 text-sm">Drop rate: {it.dropRate}</div>
                <div className="text-gray-300 text-sm">Income: {it.income}</div>
                <div className="text-gray-300 text-sm">Cost: {it.cost}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <Footer />
    </>
  );
}

