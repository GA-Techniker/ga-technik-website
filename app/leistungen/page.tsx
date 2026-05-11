import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const services = [
  {
    title: 'MSR-Technik',
    subtitle: 'Messen · Steuern · Regeln',
    desc: 'Präzise Steuerung für industrielle Prozesse und technische Gebäudeausrüstung. Wir implementieren maßgeschneiderte MSR-Lösungen für maximale Effizienz und Prozesssicherheit.',
    details: ['Prozessautomatisierung', 'Sensortechnik & Messdatenerfassung', 'Regelungstechnik & Optimierung', 'Leittechnik & Visualisierung'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Gebäudeautomation',
    subtitle: 'Intelligent · Vernetzt · Effizient',
    desc: 'Smart Building Lösungen für maximale Effizienz. Intelligente Steuerung aller gewerkübergreifenden Funktionen – von HVAC bis Zutrittskontrolle.',
    details: ['HVAC-Steuerung & Optimierung', 'Beleuchtungsmanagement', 'Zutrittskontrolle & Sicherheit', 'Brandmeldeanlagen-Integration'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-700',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
  },
  {
    title: 'Energiemanagement',
    subtitle: 'Analysieren · Optimieren · Einsparen',
    desc: 'Nachhaltige Optimierung Ihres Energieverbrauchs mit modernen Analyse-Tools. Senken Sie Kosten und reduzieren Sie Ihren CO₂-Fußabdruck.',
    details: ['Verbrauchsanalyse & Monitoring', 'Lastmanagement & Spitzenbegrenzung', 'Energierückgewinnung', 'Reporting & Compliance'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-amber-500 to-amber-700',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
  },
  {
    title: 'Instandhaltung',
    subtitle: 'Warten · Reparieren · Absichern',
    desc: 'Wartung und Support rund um die Uhr. Präventive Wartung für maximale Verfügbarkeit und minimale Ausfallzeiten Ihrer Anlagen.',
    details: ['Präventive Wartung & Inspektion', 'Störungsbeseitigung 24/7', 'Ersatzteilmanagement', 'Dokumentation & Reporting'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-700',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Analyse',
    desc: 'Wir analysieren Ihre bestehende Anlage und identifizieren Optimierungspotenziale.',
  },
  {
    step: '02',
    title: 'Konzeption',
    desc: 'Basierend auf der Analyse erstellen wir ein maßgeschneidertes Lösungskonzept.',
  },
  {
    step: '03',
    title: 'Umsetzung',
    desc: 'Professionelle Installation und Inbetriebnahme durch unsere zertifizierten Techniker.',
  },
  {
    step: '04',
    title: 'Betrieb',
    desc: 'Kontinuierliches Monitoring, Wartung und Optimierung für dauerhaften Erfolg.',
  },
];

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              Unsere Leistungen
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Kompetenz für <span className="text-primary-200">Ihre Gebäude</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Von der MSR-Technik bis zum Energiemanagement – ganzheitliche Lösungen für intelligente Gebäude.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div key={service.title} className="card overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Icon area */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:col-span-1 flex items-center justify-center`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-10 md:col-span-4">
                    <span className={`inline-block px-3 py-1 ${service.bgLight} ${service.textColor} text-xs font-semibold rounded-full mb-3`}>
                      {service.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shrink-0`} />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-4">
              Unser Vorgehen
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Von der Analyse zum <span className="gradient-text">Erfolg</span>
            </h2>
            <p className="text-lg text-gray-600">
              Unser bewährter Vier-Phasen-Ansatz sorgt für reibungslose Projekte und nachhaltige Ergebnisse.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center group">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-primary-300 to-primary-100" />
                )}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-800/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interesse an unseren Leistungen?
              </h2>
              <p className="text-primary-200 text-lg mb-8">
                Lassen Sie uns gemeinsam Ihr Projekt besprechen. Wir beraten Sie gerne unverbindlich.
              </p>
              <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-primary-900/25 hover:-translate-y-0.5">
                Jetzt anfragen
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}