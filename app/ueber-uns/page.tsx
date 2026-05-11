import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns | GA-Technik – Ihr Partner für MSR-Technik & Gebäudeautomation',
  description: 'Seit über 20 Jahren Ihr zuverlässiger Partner für MSR-Technik und Gebäudeautomation. Innovation, Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.',
};

const values = [
  {
    title: 'Innovation',
    desc: 'Wir setzen auf modernste Technologien und kontinuierliche Weiterentwicklung. Proaktiv begleiten wir den technologischen Fortschritt, um unseren Kunden stets die besten Lösungen zu bieten.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Qualität',
    desc: 'Höchste Standards in Planung, Installation und Service prägen unser Handeln. Jedes Projekt wird mit Präzision und Liebe zum Detail umgesetzt.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Zuverlässigkeit',
    desc: 'Ein Partner, auf den Sie sich verlassen können. Termintreue, transparente Kommunikation und ein echtes Bekenntnis zur Kundenzufriedenheit.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];



export default function UeberUns() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              Über uns
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unsere Geschichte
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Seit über 20 Jahren stehen wir für Innovation, Qualität und zuverlässige Partnerschaft in der Gebäudetechnik.
            </p>
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-950 rounded-3xl -z-10" />
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  GA-Technik ist Ihr zuverlässiger Partner im Bereich Mess-, Steuer- und Regelungstechnik (MSR) mit besonderem Schwerpunkt auf Gebäudeautomation.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Seit vielen Jahren unterstützen wir Unternehmen und Gebäudebetreiber bei der Optimierung ihrer technischen Gebäudeausrüstung – von der Konzeption über die Installation bis hin zur kontinuierlichen Betreuung.
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
                Unsere Werte
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Was uns <span className="gradient-text">auszeichnet</span>
              </h2>
              
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline removed — add real milestones when available */}

      {/* Team section - improved with generic team */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full mb-4">
              Ihr Ansprechpartner
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Expertise, auf die Sie <span className="gradient-text">zählen können</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Unser erfahrenes Team aus Ingenieuren, Technikern und Beratern steht Ihnen mit Fachwissen und Engagement zur Seite.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Technische Beratung', role: 'Planung & Konzeption', desc: 'Langjährige Erfahrung in der Gebäudeautomation und strategischer Unternehmensentwicklung.', icon: '💡' },
              { name: 'Projektleitung', role: 'Umsetzung', desc: 'Zertifizierte Fachkräfte für MSR-Technik, Gebäudeautomation und Energiemanagement.', icon: '🛠️' },
              { name: 'Service & Support', role: 'Instandhaltung', desc: 'Rund um die Uhr für Sie da – für maximale Verfügbarkeit Ihrer Anlagen.', icon: '🔧' },
            ].map((member) => (
              <div key={member.name} className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full flex items-center justify-center text-3xl">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full mb-4">
                  {member.role}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA below team */}
          <div className="mt-12 text-center">
            <a href="/kontakt" className="btn-primary">
              Beratungsgespräch vereinbaren
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}