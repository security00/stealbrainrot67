import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Steal Brainrot 67 Guides & Tips - Strategies',
  description: 'Complete guides and tips for Steal Brainrot 67. Learn how to collect all items, unlock item 67, complete challenges, and master the game strategies.',
  keywords: 'steal brainrot, steal brainrot 67, brainrot 67, guides, tips, walkthrough, item 67 guide',
  openGraph: {
    title: 'Steal Brainrot 67 Guides & Tips - Strategies',
    description: 'Complete guides and tips for Steal Brainrot 67. Learn game strategies and unlock legendary items.',
    url: 'https://stealbrainrot67.com/guides',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stealbrainrot67.com/guides',
  }
};

export default function Guides() {
  const guides = [
    {
      title: 'Beginner\'s Guide - Getting Started',
      content: 'Start your meme collection journey with these essential tips. Learn the basic controls, understand the game mechanics, explore the starting village, and collect your first meme items. This guide covers everything you need to know in the first 30 minutes of gameplay.',
      tips: [
        'Click on objects to collect items and interact with the environment',
        'Use the inventory system to manage your collected memes efficiently',
        'Visit the tutorial area first to unlock basic rewards and achievements',
        'Collect all starting items for bonus experience points and coins',
        'Talk to NPCs to unlock side quests and special events'
      ]
    },
    {
      title: 'Item Collection Complete List',
      content: 'Discover all 50+ rare meme items in Steal Brainrot 67. Each item has unique properties and collection value. This comprehensive guide lists all items, their rarity levels, locations, and collection requirements. Master the art of meme gathering.',
      tips: [
        'Common items: Found in starting areas, easy to collect, good for beginners',
        'Rare items: Located in dungeons, require special keys or achievements to obtain',
        'Legendary items: Only 5 exist, hidden in secret locations requiring puzzle solving',
        'Item 67: The ultimate legendary item, requires completing all major story quests',
        'Track your collection progress in the inventory to find missing items'
      ]
    },
    {
      title: 'How to Unlock Item 67 - Complete Walkthrough',
      content: 'This is the ultimate guide to obtaining the legendary item 67. Follow our step-by-step instructions to reach the final boss battle and claim your prize. The path to greatness starts here.',
      tips: [
        'Complete all main story quests to reach level 20 minimum',
        'Collect 30 different rare items from various locations throughout the map',
        'Solve the ancient puzzle in the Meme Temple using collected item clues',
        'Defeat the Brainrot Guardian boss in an epic final battle',
        'Claim your legendary item 67 trophy and unlock special abilities'
      ]
    },
    {
      title: 'Daily Challenges & Daily Quests',
      content: 'Maximize your rewards by completing daily challenges. These tasks reset every 24 hours and provide exclusive rewards, bonus experience, and climbing the global leaderboard opportunities. Learn strategies to complete challenges efficiently.',
      tips: [
        'Log in daily for cumulative bonuses and streak multipliers',
        'Complete at least 3 daily quests for maximum reward potential',
        'Focus on challenge objectives that match your current collection needs',
        'Weekly challenges offer rare items and special cosmetics as rewards',
        'Seasonal events provide limited-time exclusive items and achievements'
      ]
    },
    {
      title: 'Advanced Strategies - Pro Tips',
      content: 'Master the game with advanced strategies used by top players. Learn time management, resource optimization, and battle tactics. Climb the leaderboard and prove your skills with these pro-level techniques.',
      tips: [
        'Prioritize collecting items that unlock hidden areas with more rare items',
        'Use the fast travel system to optimize your farming routes and save time',
        'Trade with other players strategically to complete your collection faster',
        'Master boss attack patterns to defeat them with minimal resource usage',
        'Participate in seasonal tournaments to earn exclusive rewards and titles'
      ]
    },
    {
      title: 'Multiplayer Guide - Trading & Battles',
      content: 'Connect with other players worldwide. Learn trading strategies, participate in multiplayer battles, and join player factions. Teamwork makes the dream work in Steal Brainrot 67\'s social economy.',
      tips: [
        'Build a trade network with other collectors for better deals and exchanges',
        'Join a faction to participate in group events and earn faction-exclusive rewards',
        'Challenge other players to 1v1 battles for bragging rights and rare items',
        'Participate in global events and community tournaments for special rewards',
        'Help new players and earn mentor badges for helping the community grow'
      ]
    }
  ];

  return (
    <>
      <BackgroundAnimation />
      <Header />

      <main className="min-h-screen pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <section className="text-center mb-12 mt-8">
            <h1 className="text-5xl md:text-6xl font-black neon-text mb-4">
              STEAL BRAINROT GUIDES
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Master <strong>steal brainrot</strong> and <strong>steal brainrot 67</strong> with our comprehensive guides, tips, and strategies.
              These <strong>steal brainrot 67</strong> walkthroughs cover beginner to pro routes so you unlock item 67 faster.
            </p>
          </section>

          {/* Guides Grid */}
          <div className="space-y-8 mb-16">
            {guides.map((guide, index) => (
              <article
                key={index}
                className="bg-purple-900/20 border border-cyan-500/50 rounded-lg p-8 hover:border-cyan-400 transition-colors"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                  {guide.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {guide.content}
                </p>
                <div className="bg-black/40 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-4">
                    ✨ Key Tips:
                  </h3>
                  <ul className="space-y-3">
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-400 mb-8">❓ Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Is Steal Brainrot 67 free to play?',
                  a: 'Yes! The game is completely free. No pay-to-win mechanics. All content is accessible without spending money.'
                },
                {
                  q: 'How long does it take to reach item 67?',
                  a: 'Average playtime is 20-40 hours depending on your skill level and playstyle. Casual players might take longer, speedrunners less.'
                },
                {
                  q: 'Can I trade items with other players?',
                  a: 'Yes, multiplayer trading is available once you reach level 5. Visit the Trading Post to exchange items with other collectors.'
                },
                {
                  q: 'Are there mobile and PC versions?',
                  a: 'The game runs in your browser on any device. No separate downloads needed for mobile or PC - just visit the website!'
                },
                {
                  q: 'How do I report bugs or suggest features?',
                  a: 'Contact us at support@stealbrainrot67.com with detailed information. Community feedback helps us improve the game.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-4">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Master the Game?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Use these guides to level up your skills and unlock all secrets. Start playing now!
            </p>
            <a
              href="/"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              🎮 Play Now
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
