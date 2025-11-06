import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { items, roiSeconds, roiHuman, slugify } from '../../data/items';

export const metadata: Metadata = {
  title: 'Steal a Brainrot Items - Rarity, Source, Cost, Income & ROI',
  description: 'Browse Steal a Brainrot items with cost, income per second, drop rate and ROI. Data-driven list updated with last verified date.',
  openGraph: { title: 'Steal a Brainrot Items', description: 'Items with stats and ROI.', url: 'https://stealbrainrot67.com/items', type: 'website' },
  alternates: { canonical: 'https://stealbrainrot67.com/items' }
};

export default function ItemsIndex() {
  const rows = [...items]
    .sort((a, b) => (roiSeconds(a) ?? Number.POSITIVE_INFINITY) - (roiSeconds(b) ?? Number.POSITIVE_INFINITY));

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black neon-text mb-2">Items</h1>
          <p className="text-gray-400 mb-2">Cost, income per second, drop rate (if known) and calculated ROI. Click an item for details.</p>
          <p className="text-gray-500 text-xs mb-6">Last verified: {items[0]?.lastVerified}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300 border border-cyan-500/30">
              <thead className="bg-black/40">
                <tr>
                  <th className="p-2 border-b border-cyan-500/30">Item</th>
                  <th className="p-2 border-b border-cyan-500/30">Source</th>
                  <th className="p-2 border-b border-cyan-500/30">Cost</th>
                  <th className="p-2 border-b border-cyan-500/30">Income/s</th>
                  <th className="p-2 border-b border-cyan-500/30">Drop rate</th>
                  <th className="p-2 border-b border-cyan-500/30">ROI</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((it) => {
                  const roi = roiHuman(roiSeconds(it));
                  return (
                    <tr key={it.id} className="hover:bg-black/30">
                      <td className="p-2 border-b border-cyan-500/20">
                        <Link href={`/items/${it.id}`} className="text-cyan-400 hover:underline">{it.name}</Link>
                      </td>
                      <td className="p-2 border-b border-cyan-500/20">{it.source || '鈥?}</td>
                      <td className="p-2 border-b border-cyan-500/20">{it.costText || (it.cost ? it.cost.toLocaleString() : '鈥?)}</td>
                      <td className="p-2 border-b border-cyan-500/20">{it.incomeText || (it.incomePerSecond ? it.incomePerSecond.toLocaleString() : '鈥?)}</td>
                      <td className="p-2 border-b border-cyan-500/20">{it.dropRateText || (it.dropRate ? `${(it.dropRate*100).toFixed(2)}%` : '鈥?)}</td>
                      <td className="p-2 border-b border-cyan-500/20">{roi}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

