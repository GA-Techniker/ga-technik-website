import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads | GA-Technik – Leistungsbeschreibungen & Dokumente',
  description: 'Laden Sie unsere Leistungsbeschreibungen und Dokumentationen herunter. MSR-Technik, Gebäudeautomation, Energiemanagement und mehr.',
};

const downloads = [
  {
    title: 'Leistungsbeschreibung MSR-Technik',
    desc: 'Umfassende Übersicht unserer MSR-Dienstleistungen – von der Planung bis zur Inbetriebnahme.',
    category: 'MSR-Technik',
    format: 'PDF',
    available: false,
  },
  {
    title: 'Leistungsbeschreibung Gebäudeautomation',
    desc: 'Details zu unseren Gebäudeautomations-Lösungen mit BACnet, KNX, LON und Modbus.',
    category: 'Gebäudeautomation',
    format: 'PDF',
    available: false,
  },
  {
    title: 'Leistungsbeschreibung Energiemanagement',
    desc: 'Unsere Energiemanagement-Dienstleistungen für nachhaltige und effiziente Gebäudetechnik.',
    category: 'Energiemanagement',
    format: 'PDF',
    available: false,
  },
  {
    title: 'Leistungsbeschreibung Instandhaltung',
    desc: 'Wartungs- und Servicevereinbarungen für maximale Anlagenverfügbarkeit.',
    category: 'Instandhaltung',
    format: 'PDF',
    available: false,
  },
  {
    title: 'Unternehmensprofil GA-Technik',
    desc: 'Überblick über unser Unternehmen, unsere Werte und Referenzen.',
    category: 'Unternehmen',
    format: 'PDF',
    available: false,
  },
];

export default function Downloads() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              Downloads
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dokumente & <span className="text-primary-200">Downloads</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Hier finden Sie unsere Leistungsbeschreibungen und Dokumentationen zum Download.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-6">
            {downloads.map((dl) => (
              <div key={dl.title} className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.25A2.25 2.25 0 003 4.5v15a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19.5v-9a2.25 2.25 0 00-2.25-2.25h-6.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{dl.title}</h3>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">
                      {dl.format}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{dl.desc}</p>
                </div>
                <div className="shrink-0">
                  {dl.available ? (
                    <button className="btn-primary !py-2.5 !px-5 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-medium rounded-lg cursor-default">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="mt-12 card p-8 md:p-10 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dokumente noch nicht verfügbar?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Die detaillierten Leistungsbeschreibungen werden aktuell erstellt. Kontaktieren Sie uns für vorab Informationen!</p>
                <a href="/kontakt" className="btn-primary !py-2.5 text-sm">
                  Beratungsgespräch anfragen
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}