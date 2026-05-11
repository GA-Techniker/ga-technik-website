import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const services = [
  {
    title: 'MSR-Technik',
    subtitle: 'Messen · Steuern · Regeln',
    desc: 'Professionelle MSR-Lösungen für industrielle Prozesse und technische Gebäudeausrüstung. Wir planen, installieren und optimieren Steuerungsanlagen für maximale Präzision und Effizienz.',
    details: [
      { label: 'Prozessautomatisierung', desc: 'Automatisierung komplexer industrieller Prozesse mit modernen SPS- und DCS-Systemen.' },
      { label: 'Sensortechnik', desc: 'Einsatz hochpräziser Sensoren für Temperatur, Druck, Durchfluss und weitere Messgrößen.' },
      { label: 'Regelungstechnik', desc: 'Entwicklung und Implementierung von Regelalgorithmen für optimale Prozessführung.' },
      { label: 'Datenerfassung', desc: 'Erfassung und Aufbereitung relevanter Prozessdaten für Analyse und Dokumentation.' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    accent: 'text-blue-700',
    border: 'border-blue-200',
  },
  {
    title: 'Gebäudeautomation',
    subtitle: 'Smart Building Solutions',
    desc: 'Intelligente Steuerung aller gewerkübergreifenden Funktionen in Ihrem Gebäude. Von der Heizungs- und Lüftungssteuerung bis zum zentralen Gebäudemanagement.',
    details: [
      { label: 'HVAC-Steuerung', desc: 'Automatisierte Heizungs-, Lüftungs- und Klimatechnik für optimalen Raumkomfort.' },
      { label: 'Beleuchtungsmanagement', desc: 'Tageslichtabhängige und präsenzgerechte Beleuchtungssteuerung zur Energieeinsparung.' },
      { label: 'Zutrittskontrolle', desc: 'Moderne Zugangssysteme für Sicherheit und Komfort in Ihrem Gebäude.' },
      { label: 'Brandmeldeanlagen', desc: 'Zertifizierte Brandmelde- und Evakuierungssysteme für höchste Sicherheitsanforderungen.' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-indigo-500 to-indigo-700',
    bg: 'bg-indigo-50',
    accent: 'text-indigo-700',
    border: 'border-indigo-200',
  },
  {
    title: 'Energiemanagement',
    subtitle: 'Nachhaltig · Effizient · Transparent',
    desc: 'Nachhaltige Optimierung Ihres Energieverbrauchs mit modernen Analyse-Tools. Wir identifizieren Einsparpotenziale und setzen Maßnahmen zur nachhaltigen Kostensenkung um.',
    details: [
      { label: 'Verbrauchsanalyse', desc: 'Detaillierte Erfassung und Auswertung aller Energieverbräuche mit modernen Monitoring-Systemen.' },
      { label: 'Lastmanagement', desc: 'Optimierung der Lastgänge zur Senkung von Spitzenlasten und Netznutzungsentgelten.' },
      { label: 'Energierückgewinnung', desc: 'Nutzung von Abwärme und regenerativen Energiequellen zur Effizienzsteigerung.' },
      { label: 'Reporting & Monitoring', desc: 'Transparente Dashboards und Berichte für kontinuierliche Energiecontrolling-Prozesse.' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  {
    title: 'Instandhaltung',
    subtitle: '24/7 Service & Support',
    desc: 'Wartung, Reparatur und 24/7-Support für Ihre technischen Anlagen. Präventive Instandhaltung reduziert Ausfallzeiten und verlängert die Lebensdauer Ihrer Systeme.',
    details: [
      { label: 'Präventive Wartung', desc: 'Regelmäßige Inspektionen und vorbeugende Maßnahmen zur Vermeidung von Anlagenausfällen.' },
      { label: 'Störungsbeseitigung', desc: 'Schnelle und zuverlässige Behebung von Störungen durch erfahrenes Fachpersonal.' },
      { label: 'Ersatzteilmanagement', desc: 'Zentrale Beschaffung und Lagerung von Ersatzteilen für kurze Reaktionszeiten.' },
      { label: 'Dokumentation', desc: 'Vollständige Dokumentation aller Wartungs- und Instandhaltungsmaßnahmen.' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-amber-500 to-amber-700',
    bg: 'bg-amber-50',
    accent: 'text-amber-700',
    border: 'border-amber-200',
  },
];

const processSteps = [
  { step: '01', title: 'Analyse', desc: 'Wir analysieren Ihre bestehende Anlage und identifizieren Optimierungspotenziale.' },
  { step: '02', title: 'Konzeption', desc: 'Basierend auf der Analyse entwickeln wir ein maßgeschneidertes Lösungskonzept.' },
  { step: '03', title: 'Umsetzung', desc: 'Professionelle Installation und Inbetriebnahme durch unser erfahrenes Team.' },
  { step: '04', title: 'Betreuung', desc: 'Kontinuierliches Monitoring und Instandhaltung für langfristigen Erfolg.' },
];

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              Leistungen
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Ganzheitliche Lösungen für MSR-Technik und Gebäudeautomation — von der Analyse bis zur Instandhaltung.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={service.title} id={service.title.toLowerCase().replace(/[äöüß]/g, '').replace(/[^a-z0-9]/g, '-')} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-5 gap-8 lg:gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left: Icon + Title */}
                  <div className="lg:col-span-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                      {service.icon}
                    </div>
                    <span className={`inline-block px-3 py-1 ${service.bg} ${service.accent} text-sm font-semibold rounded-full mb-4`}>
                      {service.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Right: Details */}
                  <div className="lg:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.details.map((detail) => (
                        <div key={detail.label} className={`${service.bg} rounded-xl p-5 border ${service.border} hover:shadow-md transition-shadow duration-300`}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                            <h4 className={`font-semibold ${service.accent}`}>{detail.label}</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{detail.desc}</p>
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
              Unser Prozess
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              So arbeiten wir — <span className="gradient-text">von der Idee zur Lösung</span>
            </h2>
            <p className="text-lg text-gray-600">
              Unser strukturierter Ansatz sorgt für transparente, effiziente Projektabwicklung in vier Phasen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center group">
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-primary-300 to-primary-100" />
                )}
                <div className="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-lg shadow-primary-800/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
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
                Welche Lösung passt zu Ihnen?
              </h2>
              <p className="text-primary-200 text-lg mb-8">
                Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Gebäudetechnik optimieren können.
              </p>
              <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-primary-900/25 hover:-translate-y-0.5">
                Kostenlose Beratung anfragen
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