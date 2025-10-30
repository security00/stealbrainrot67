'use client';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Steal Brainrot 67',
    url: 'https://stealbrainrot67.com',
    description: 'Play Steal Brainrot 67 online - Collect rare Roblox memes and unlock the legendary item 67. Free unblocked game with guides and tips.',
    // Add target keywords to help search engines understand the site topic
    keywords: 'steal brainrot, steal brainrot 67, brainrot 67, roblox brainrot',
    alternateName: 'steal brainrot 67',
    image: {
      '@type': 'ImageObject',
      url: 'https://stealbrainrot67.com/og-image.jpg',
      width: 1200,
      height: 630
    },
    sameAs: [
      'https://twitter.com/StealBrainrot67',
      'https://discord.com/invite/stealbrainrot67'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
