'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg shadow-primary-800/20 group-hover:shadow-primary-800/40 transition-shadow duration-300">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight tracking-tight">GA-Technik</span>
        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest leading-none">MSR & Automation</span>
      </div>
    </Link>
  );
}

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/news', label: 'News' },
  { href: '/kontakt', label: 'Kontakt' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={theme === 'dark' ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
      title={theme === 'dark' ? 'Heller Modus' : 'Dunkler Modus'}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-18">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/kontakt" className="ml-3 btn-primary !py-2.5 !px-5 text-sm">
              Anfrage stellen
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menü"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96 border-t border-gray-100 dark:border-gray-800' : 'max-h-0'}`}>
        <div className="container-custom py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="block text-center btn-primary mt-3"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </nav>
  );
}