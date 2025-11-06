import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundAnimation from '../../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: '67 Lore - The Story Behind the Rarest Brainrot',
  description:
    'Explore the fan-favorite 67: the candle and note, the night movement, the graveyard code, the hidden chamber, and the emotional truth behind 67.',
  keywords: [
    'steal a brainrot 67',
    'brainrot 67 lore',
    '67 story',
    'roblox brainrot 67',
    'lost 67s'
  ].join(', '),
  openGraph: {
    title: '67 Lore - The Story Behind the Rarest Brainrot',
    description:
      'Explore the mythos around 67: clues, puzzles, hidden areas, and the emotional reveal.',
    url: 'https://stealbrainrot67.com/lore/67',
    type: 'article'
  },
  alternates: { canonical: 'https://stealbrainrot67.com/lore/67' }
};

export default function Lore67() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '67 Lore - The Story Behind the Rarest Brainrot',
    description:
      'A spoiler-marked, fan-facing overview of 67: the candle and note, night behavior, graveyard code, hidden chamber, and the emotional core.',
    author: { '@type': 'Organization', name: 'Steal Brainrot 67' },
    inLanguage: 'en',
    mainEntityOfPage: 'https://stealbrainrot67.com/lore/67'
  } as const;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is 67 unique?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '67 is portrayed as uniquely numbered, which is central to its theme of loneliness and identity in popular interpretations.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the 8462 code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It is a commonly cited sequence tied to a hidden entrance in fan accounts, assembled from headstone numbers and an extra clue.'
        }
      }
    ]
  } as const;

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link> <span className="mx-2">/</span>
            <span className="text-cyan-400">67 Lore</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">67 Lore</h1>
          <p className="text-gray-400 mb-8">
            This page compiles widely shared interpretations about <strong>67</strong> - its clues, hidden places, and
            emotional undertones. For the gameplay route to unlock 67, follow the <Link href="/guides/how-to-get-67" className="text-cyan-400 hover:underline">How-to guide</Link>.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">The Candle and the Note</h2>
            <p className="text-gray-300">
              Near the player base, a lit candle and a short note - "I wish we were more" - hint at 67's solitude
              and identity. Fans read this as the seed of 67's motivation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Night Movement</h2>
            <p className="text-gray-300">
              At night, 67 is observed moving when unseen. Some reports describe empty tunnels where other brainrots avoid
              appearing - suggesting either fear of 67, or a bigger hidden event.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">The Graveyard and the Code</h2>
            <p className="text-gray-300">
              A secluded graveyard shows headstones labeled 65, 66, and 68 - noticeably missing 67. The prevailing theory:
              67 is still out there. A hidden hatch requires a four-digit code that fans assemble - commonly cited as
              <strong> 8462</strong> - from headstone numbers plus one extra clue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">The Hidden Chamber</h2>
            <p className="text-gray-300">
              Past the hatch, accounts mention a secret area and a confrontation that tries to keep 67's truth buried.
              Escaping leads deeper - toward a scientist, and to 67's confession of loneliness as the only numbered
              being among brainrots.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Lost 67s</h2>
            <p className="text-gray-300">
              The scientist machine symbolizes a hope to end solitude - if it worked, there would be more like 67:
              the "Lost 67s". Different tellings vary in detail, but the message resonates: identity, belonging,
              and a fresh start.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">FAQs</h2>
            <div className="text-gray-300 space-y-3">
              <p><strong>Does the lore change with updates?</strong> Specifics can shift; the themes remain consistent.</p>
              <p><strong>Is the code always the same?</strong> Treat it as a community-shared clue; verify after updates.</p>
            </div>
          </section>

          <div className="mt-12">
            <Link href="/guides/how-to-get-67" className="text-cyan-400 hover:underline">
              Go to the How-to guide -&gt;
            </Link>
          </div>
        </div>
      </main>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Footer />
    </>
  );
}

