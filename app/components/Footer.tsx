'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-cyan-500/30 mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-4">STEAL BRAINROT 67</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Steal Brainrot is the ultimate rare meme collection game. Play online, collect legendary items, and become the ultimate brainrot master.
              Play <span className="font-semibold text-cyan-300">steal brainrot 67</span> free in your browser.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:support@stealbrainrot67.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Steal Brainrot 67. All rights reserved. | Not affiliated with Roblox Corporation.
          </p>
          <p className="text-center text-gray-600 text-xs mt-2">
            This website is powered by Google AdSense advertising technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
