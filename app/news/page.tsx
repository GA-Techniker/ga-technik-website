import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const articles = [
  {
    title: 'KI-gestützte Gebäudeautomation: Die Zukunft der Energieeffizienz',
    date: '10. Mai 2026',
    excerpt: 'Künstliche Intelligenz revolutioniert die Gebäudeautomation. Moderne KI-Systeme können Energieverbrauchsmuster in Echtzeit analysieren und optimieren, was zu Einsparungen von bis zu 40% führen kann.',
    category: 'KI & Automation',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    title: 'Smart Building Standards 2026: BACnet/SC und die neue Sicherheitsära',
    date: '5. Mai 2026',
    excerpt: 'Mit BACnet/SC (Secure Connect) kommt ein neuer Standard für sichere Gebäudekommunikation. Wir erklären, was sich ändert und wie Sie Ihre Systeme zukunftssicher machen.',
    category: 'Standards',
    color: 'bg-emerald-100 text-emerald-800',
  },
  {
    title: 'Predictive Maintenance mit Machine Learning',
    date: '28. April 2026',
    excerpt: 'Predictive Maintenance reduziert Ausfallzeiten um bis zu 50%. Durch den Einsatz von Machine Learning können Anlagenverschleiß und potenzielle Störungen frühzeitig erkannt werden.',
    category: 'Instandhaltung',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    title: 'Nachhaltigkeit in der Gebäudeautomation: Green Building Zertifizierung',
    date: '20. April 2026',
    excerpt: 'Green Building wird immer wichtiger. Wir zeigen, wie moderne Gebäudeautomation dabei hilft, Nachhaltigkeitsstandards zu erreichen und gleichzeitig Kosten zu senken.',
    category: 'Nachhaltigkeit',
    color: 'bg-amber-100 text-amber-800',
  },
];

const categories = ['Alle', 'KI & Automation', 'Standards', 'Instandhaltung', 'Nachhaltigkeit'];

export default function News() {
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
              News & Insights
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Aktuelles aus der <span className="text-primary-200">Branche</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Bleiben Sie informiert – Trends, Technologien und Entwicklungen in KI, Gebäudeautomation und MSR-Technik.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter visual */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default ${
                  idx === 0
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.title} className="card overflow-hidden group">
                {/* Decorative top bar */}
                <div className="h-1 bg-gradient-to-r from-primary-600 to-primary-400" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${article.color}`}>
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <span className="inline-flex items-center text-primary-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    Mehr lesen
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.25A2.25 2.25 0 003 4.5v15a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19.5V9.75m-7.5-7.5h3.375c.621 0 1.125.504 1.125 1.125V6.75" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Immer auf dem Laufenden
              </h2>
              <p className="text-primary-200 text-lg mb-8">
                Erfahren Sie als Erster von neuen Entwicklungen in der Gebäudeautomation und MSR-Technik.
              </p>
              <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-primary-900/25 hover:-translate-y-0.5">
                Kontakt aufnehmen
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