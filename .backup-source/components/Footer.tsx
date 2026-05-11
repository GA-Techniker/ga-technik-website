import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      {/* Top CTA bar */}
      <div className="bg-primary-800 dark:bg-primary-900">
        <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Bereit für smarte Gebäudeautomation?</h3>
            <p className="text-primary-200 dark:text-primary-300 text-sm">Lassen Sie uns gemeinsam Ihre Gebäudetechnik optimieren.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+49123456789" className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              📞 +49 (0) 123 456789
            </a>
            <Link href="/kontakt" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary-800 shrink-0">
              Beratungsgespräch buchen
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">GA-Technik</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ihr Spezialist für MSR-Technik und Gebäudeautomation. Seit über 20 Jahren optimieren wir technische Gebäudetechnik für maximale Effizienz.
            </p>
            {/* Direct contact in footer */}
            <div className="mt-6 space-y-2">
              <a href="mailto:Info@Ga-Technik.com" className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Info@Ga-Technik.com
              </a>
              <a href="tel:+49123456789" className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 (0) 123 456789
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/ueber-uns', label: 'Über uns' },
                { href: '/leistungen', label: 'Leistungen' },
                { href: '/news', label: 'News' },
                { href: '/kontakt', label: 'Kontakt' },
                { href: '/downloads', label: 'Downloads' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Leistungen</h4>
            <ul className="space-y-3">
              {['MSR-Technik', 'Gebäudeautomation', 'Energiemanagement', 'Instandhaltung'].map((item) => (
                <li key={item}>
                  <Link href="/leistungen" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Downloads */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Kontakt & Downloads</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Musterstraße 123, 12345 Musterstadt
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mo – Fr: 8:00 – 17:00 Uhr
              </li>
            </ul>
            <div className="mt-5">
              <Link href="/downloads" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Downloads & Dokumente
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} GA-Technik GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Impressum</span>
            <span>Datenschutz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}