import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { notFound } from 'next/navigation';
import { findBySlug, items, roiSeconds, roiHuman, slugify } from '../../../data/items';

// Pre-generate all item detail pages (SSG)
export function generateStaticParams() {
  // Emit unique slugs for id, name and aliases to be robust across links
  const set = new Set<string>();
  items.forEach(it => {
    set.add(it.id);
    set.add(slugify(it.name));
    (it.aliases || []).forEach(a => set.add(slugify(a)));
  });
  return Array.from(set).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const { slug } = await params;
  return { alternates: { canonical: "https://stealbrainrot67.com/items/" + slug } };
}

export default async function ItemDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const it = findBySlug(slug) ||
    items.find(x => x.id === slug || x.name === slug || (x.aliases || []).some(a => a === slug));
    if (!it) {
    notFound();
  }

  const roi = roiHuman(roiSeconds(it));

  const alts = items
    .filter(x => x.id !== it.id && ((x.source && it.source && x.source === it.source) || (x.cost && it.cost && Math.abs(x.cost - it.cost) <= (it.cost * 0.25))))
    .slice(0,3);

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/items" className="hover:text-cyan-400">Items</Link> <span className="mx-2">/</span>
            <span className="text-cyan-400">{it.name}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">{it.name}</h1>
          <p className="text-gray-500 text-xs mb-4">Last verified: {it.lastVerified || '-'}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">Source</div><div className="text-gray-200">{it.source || '-'}</div></div>
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">Rarity</div><div className="text-gray-200">{it.rarity || '-'}</div></div>
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">Cost</div><div className="text-gray-200">{it.costText || (it.cost ? it.cost.toLocaleString() : '-')}</div></div>
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">Income/s</div><div className="text-gray-200">{it.incomeText || (it.incomePerSecond ? it.incomePerSecond.toLocaleString() : '-')}</div></div>
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">Drop rate</div><div className="text-gray-200">{it.dropRateText || (it.dropRate ? `${(it.dropRate*100).toFixed(2)}%` : '-')}</div></div>
            <div className="border border-cyan-500/40 rounded-lg p-4"><div className="text-sm text-gray-400">ROI</div><div className="text-gray-200">{roi}</div></div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">How to Get</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Source: {it.source || 'Check events and announcements in-game.'}</li>
              {it.source && it.source.includes('Admin Lucky Blocks') && (
                <>
                  <li>Admin Lucky Blocks often appear during Admin Abuse events.</li>
                  <li>Buy blocks when available (around $100m each) and roll for this item.</li>
                </>
              )}
              {it.source && it.source.toLowerCase().includes('taco') && (
                <>
                  <li>Taco Tuesday lasts about 30 minutes; traits boost earnings.</li>
                  <li>Play in a private server or with friends to reduce competition.</li>
                </>
              )}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Best Time and Strategy</h2>
            <p className="text-gray-300">Use Admin Abuse and Taco Tuesday windows to maximize earnings and block availability. Prepare budget and clear inventory before events.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Alternatives</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              {alts.map(alt => (
                <li key={alt.id}><Link href={`/items/${slugify(alt.id)}`} className="text-cyan-400 hover:underline">{alt.name}</Link> - ROI {roiHuman(roiSeconds(alt))}</li>
              ))}
              {alts.length === 0 && <li>No close alternatives found.</li>}
            </ul>
          </section>

          {it.id === '67' && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">Fastest Route</h2>
              <p className="text-gray-300">Read the <Link href="/guides/how-to-get-67#fastest-route" className="text-cyan-400 hover:underline">How to Get 67</Link> guide for a step-by-step plan.</p>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Sources</h2>
            <p className="text-gray-500 text-xs">Community data; subject to change with updates.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
