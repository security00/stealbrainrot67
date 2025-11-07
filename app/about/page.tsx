import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'About - Steal Brainrot 67',
  description: 'About this site: purpose, data methodology, accuracy notes, and how to provide feedback.',
  openGraph: {
    title: 'About - Steal Brainrot 67',
    description: 'Purpose, data methodology, accuracy notes, and feedback.',
    url: 'https://stealbrainrot67.com/about',
    type: 'website'
  },
  alternates: { canonical: 'https://stealbrainrot67.com/about' }
};

export default function AboutPage() {
  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link> <span className="mx-2">/</span>
            <span className="text-cyan-400">About</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">About</h1>
          <p className="text-gray-300 mb-6">
            This site tracks Steal a Brainrot items and strategies, with a focus on <strong>67</strong>.
            It aims to provide clear, data-first summaries: cost, income per second, drop rates (when known), and ROI.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">What We Publish</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Item details: source, rarity, cost, income/s, drop rate, ROI.</li>
              <li>Guides for efficient progression and special events.</li>
              <li>Lore pages collecting widely shared interpretations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Data Methodology</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Values include both measured data and community reports; some stats are estimates.</li>
              <li>Each item shows a <em>Last verified</em> date; things may change after updates.</li>
              <li>ROI is computed as <code>cost / incomePerSecond</code> when both are available.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Accuracy & Updates</h2>
            <p className="text-gray-300">
              Data can change with patches and events. If you find inaccuracies or have better numbers,
              please share them. We regularly update items and guides to reflect the latest state.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Feedback</h2>
            <p className="text-gray-300">
              Questions, fixes, or suggestions? Open an issue or reach out through your usual channel.
              You can also start at the <Link href="/items" className="text-cyan-400 hover:underline">Items</Link> page
              and leave notes alongside item names you care about.
            </p>
          </section>

          <div className="mt-12">
            <Link href="/items" className="text-cyan-400 hover:underline">Browse Items -&gt;</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
