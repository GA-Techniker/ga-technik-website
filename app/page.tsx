import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Service icons
const serviceIcon = (type: string) => {
  const icons: Record<string, JSX.Element> = {
    msr: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    building: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    energy: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    maintenance: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };
  return icons[type] || icons.msr;
};

const services = [
  {
    title: 'MSR-Technik',
    desc: 'Messen, Steuern, Regeln für industrielle Prozesse und technische Gebäudeausrüstung. Präzise Steuerung für maximale Effizienz.',
    icon: 'msr',
  },
  {
    title: 'Gebäudeautomation',
    desc: 'Smart Building Lösungen für maximale Effizienz. BACnet, KNX, LON, Modbus – gewerkübergreifende Steuerung aller Funktionen.',
    icon: 'building',
  },
  {
    title: 'Energiemanagement',
    desc: 'Optimierung Ihres Energieverbrauchs mit modernen Analyse-Tools. Nachhaltig Kosten senken.',
    icon: 'energy',
  },
  {
    title: 'Instandhaltung',
    desc: 'Wartung und Support rund um die Uhr. Präventive Wartung für maximale Verfügbarkeit.',
    icon: 'maintenance',
  },
];

const protocols = [
  'BACnet', 'KNX', 'LON', 'Modbus', 'OPC-UA', 'DALI', 'EnOcean', 'M-Bus',
];

const manufacturers = [
  'Siemens', 'ABB', 'Beckhoff', 'Schneider Electric', 'Honeywell', 'Johnson Controls', 'Kieback&Peter', 'SAUTER',
];

const values = [
  { number: '20+', label: 'Jahre Erfahrung', desc: 'in MSR-Technik' },
  { number: '500+', label: 'Erfolgreiche', desc: 'Projekte' },
  { number: '50+', label: 'Zufriedene', desc: 'Kunden' },
  { number: '24/7', label: 'Support', desc: 'Rund um die Uhr' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient hero-pattern" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">BACnet · KNX · LON · Modbus</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              MSR-Planung &amp; Gebäudeautomation
              <span className="block text-primary-200">für Industrie &amp; Gewerbe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-200">
              Wir planen, installieren und optimieren Ihre Gebäudetechnik – von der Sensorik bis zum Energiemanagement. Für Betreiber, die maximale Effizienz erwarten.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <a href="/kontakt" className="btn-primary !bg-white !text-primary-800 hover:!bg-gray-100">
                Beratungsgespräch vereinbaren
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/leistungen" className="px-8 py-3.5 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
              Unser Leistungsspektrum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Kompetenz für Ihre <span className="gradient-text">technische Gebäudeausstattung</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Von der Planung bis zur Instandhaltung – wir begleiten Sie mit ganzheitlichen Lösungen für alle Bereiche der Gebäudetechnik.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.title}
                className="group card p-8 card-hover"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center text-primary-700 dark:text-primary-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {serviceIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols & Manufacturers */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Protocols */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
                Protokoll-Support
              </span>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Unterstützte <span className="gradient-text">Protokolle</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Wir beherrschen alle gängigen Gebäudeautomations-Protokolle für nahtlose Integration Ihrer Systeme.
              </p>
              <div className="flex flex-wrap gap-2">
                {protocols.map((p) => (
                  <span key={p} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            {/* Manufacturers */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
                Hersteller
              </span>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Zertifizierte <span className="gradient-text">Hersteller</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Erfahrung mit den führenden Herstellern der Gebäudeautomation – herstellerneutral beraten wir die beste Lösung.
              </p>
              <div className="flex flex-wrap gap-2">
                {manufacturers.map((m) => (
                  <span key={m} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-950 rounded-3xl -z-10" />
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((stat, idx) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-1">{stat.number}</div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
                Über GA-Technik
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ihr Partner für <span className="gradient-text">smarte Gebäudetechnik</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                GA-Technik ist Ihr zuverlässiger Partner im Bereich Mess-, Steuer- und Regelungstechnik mit besonderem Schwerpunkt auf Gebäudeautomation. Seit über 20 Jahren optimieren wir technische Gebäudeausrüstung für Unternehmen und Immobilienbetreiber.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Unsere Stärken liegen in der ganzheitlichen Betrachtung Ihrer Anlagen – von der Analyse über die Konzeption bis zur Umsetzung und kontinuierlichen Optimierung.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/ueber-uns" className="btn-secondary">
                  Mehr über uns
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/kontakt" className="btn-primary">
                  Beratungsgespräch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 dark:from-primary-900 dark:to-gray-900 rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für die Zukunft Ihrer Gebäudetechnik?
              </h2>
              <p className="text-primary-200 dark:text-primary-300 text-lg mb-8">
                Lassen Sie uns gemeinsam Ihre Anlagen analysieren und optimieren. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-primary-900/25 hover:-translate-y-0.5">
                  Beratungsgespräch vereinbaren
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+49123456789" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  📞 +49 (0) 123 456789
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