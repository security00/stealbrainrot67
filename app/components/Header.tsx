'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-black neon-text animate-pulse">
            67
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold neon-text">BRAINROT</div>
            <div className="text-xs text-cyan-400">STEAL THE RAREST</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white hover:text-cyan-400 transition-colors font-semibold"
          >
            Play
          </Link>
          <Link
            href="/guides"
            className="text-white hover:text-cyan-400 transition-colors font-semibold"
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-cyan-400 transition-colors font-semibold"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-cyan-400"></div>
          <div className="w-6 h-0.5 bg-cyan-400"></div>
          <div className="w-6 h-0.5 bg-cyan-400"></div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/30 py-4">
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Play
          </Link>
          <Link
            href="/guides"
            className="block px-4 py-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}