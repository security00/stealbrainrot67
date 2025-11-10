import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import YouTubeLite from '../../components/YouTubeLite';
import { getVideos } from '../../../data/videos';

export const metadata: Metadata = {
  title: 'Steal Brainrot 67 Videos - Watch Guides & Explanations',
  description:
    'Curated videos for Steal a Brainrot item 67: fast routes, admin lucky blocks, taco tuesday and lore explanations. Click to play inline (privacy-friendly).',
  keywords:
    'steal brainrot, steal brainrot 67, brainrot 67 video, how to get 67, admin lucky block, taco tuesday, roblox brainrot, 67 lore',
  openGraph: {
    title: 'Steal Brainrot 67 Videos - Watch Guides & Explanations',
    description:
      'Curated videos that help you get item 67 faster and understand events.',
    url: 'https://stealbrainrot67.com/videos/67',
    type: 'website',
  },
  alternates: { canonical: 'https://stealbrainrot67.com/videos/67' },
};

export default function Videos67() {
  const videos = getVideos('67');
  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link> <span className="mx-2">/</span>
            <span className="text-cyan-400">67 Videos</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">67 Videos</h1>
          <p className="text-gray-400 mb-6">
            Watch community videos about <strong>how to get item 67</strong> in <strong>steal brainrot 67</strong>, event strategies and lore. Not affiliated. Videos load on click using
            privacy-friendly embeds.
          </p>

          {videos.length === 0 && (
            <p className="text-gray-500">No videos found. Check back soon.</p>
          )}

          {videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {videos.map((v, i) => (
                <YouTubeLite key={v.id + i} id={v.id} title={v.title} start={v.start} analyticsId="video_videos67" />
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guides/how-to-get-67#videos" className="text-cyan-400 hover:underline">More in the How-to guide -&gt;</Link>
            <Link href="/items/67" className="text-cyan-400 hover:underline">View 67 item details -&gt;</Link>
          </div>
        </div>
      </main>

      {/* JSON-LD: list of videos */}
      <Script
        id="videos-67-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Steal Brainrot 67 Videos',
            description:
              'Curated videos for Steal a Brainrot item 67: fast routes, admin lucky blocks, taco tuesday and lore explanations.',
            hasPart: getVideos('67').map((v) => ({
              '@type': 'VideoObject',
              name: v.title,
              description: v.title,
              thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
              embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
              uploadDate: v.published || undefined,
            })),
          }),
        }}
      />
      <Footer />
    </>
  );
}
