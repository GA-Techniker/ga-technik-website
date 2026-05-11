import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const articles = [
  {
    title: 'KI-gestützte Gebäudeautomation: Die Zukunft der Energieeffizienz',
    date: '10. Mai 2026',
    excerpt: 'Künstliche Intelligenz revolutioniert die Gebäudeautomation. Moderne KI-Systeme können Energieverbrauchsmuster in Echtzeit analysieren und optimieren, was zu Einsparungen von bis zu 40% führen kann. Erfahren Sie, wie Machine-Learning-Algorithmen prädiktive Steuerungsstrategien entwickeln und dabei den Komfort für die Gebäudenutzer sogar noch verbessern.',
    category: 'KI & Automation',
    color: 'bg-blue-100 text-blue-800',
    readTime: '5 Min.',
  },
  {
    title: 'Smart Building Standards 2026: BACnet/SC und die neue Sicherheitsära',
    date: '5. Mai 2026',
    excerpt: 'Mit BACnet/SC (Secure Connect) kommt ein neuer Standard für sichere Gebäudekommunikation. Die zunehmende Vernetzung erfordert robuste Sicherheitskonzepte. Wir erklären, was sich ändert, welche Protokolle jetzt relevant sind und wie Sie Ihre Systeme zukunftssicher machen.',
    category: 'Standards',
    color: 'bg-indigo-100 text-indigo-800',
    readTime: '7 Min.',
  },
  {
    title: 'Predictive Maintenance mit Machine Learning',
    date: '28. April 2026',
    excerpt: 'Predictive Maintenance reduziert Ausfallzeiten um bis zu 50% und senkt Wartungskosten erheblich. Durch den Einsatz von Machine Learning können Anlagenverschleiß und potenzielle Störungen frühzeitig erkannt werden — bevor sie zu teuren Ausfällen führen.',
    category: 'Instandhaltung',
    color: 'bg-amber-100 text-amber-800',
    readTime: '6 Min.',
  },
  {
    title: 'Nachhaltigkeit in der Gebäudeautomation: Green Building Zertifizierung',
    date: '20. April 2026',
    excerpt: 'Green Building wird immer wichtiger — nicht nur aus ökologischen, sondern auch aus wirtschaftlichen Gründen. Wir zeigen, wie moderne Gebäudeautomation dabei hilft, Nachhaltigkeitsstandards wie LEED, BREEAM und DGNB zu erreichen und gleichzeitig Betriebskosten zu senken.',
    category: 'Nachhaltigkeit',
    color: 'bg-emerald-100 text-emerald-800',
    readTime: '8 Min.',
  },
  {
    title: 'Digitaler Zwilling: Virtuelle Abbilder optimieren den Gebäudebetrieb',
    date: '12. April 2026',
    excerpt: 'Digitale Zwillinge erstellen exakte virtuelle Abbilder physischer Gebäude und eröffnen völlig neue Möglichkeiten für Planung, Betrieb und Optimierung. Echtzeitdaten aus Sensoren werden mit Simulationsmodellen verknüpft, um What-If-Szenarien durchzuspielen.',
    category: 'Digitalisierung',
    color: 'bg-purple-100 text-purple-800',
    readTime: '6 Min.',
  },
  {
    title: 'Edge Computing in der Gebäudeautomation: Dezentrale Intelligenz',
    date: '4. April 2026',
    excerpt: 'Edge Computing verlagert die Datenverarbeitung näher an die Sensoren und Aktoren. Die Vorteile: geringere Latenzen, höhere Ausfallsicherheit und reduzierte Cloud-Kosten. Ein Blick auf die Architektur der Zukunft.',
    category: 'Technologie',
    color: 'bg-cyan-100 text-cyan-800',
    readTime: '5 Min.',
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              News & Insights
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Aktuelles & Wissen
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Bleiben Sie informiert über die neuesten Entwicklungen in KI, Gebäudeautomation und MSR-Technik.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-600/30 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <span className={`inline-block px-3 py-1 ${articles[0].color} text-sm font-semibold rounded-full mb-4`}>
                    {articles[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {articles[0].title}
                  </h2>
                  <p className="text-primary-200 leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-primary-300">
                    <span>{articles[0].date}</span>
                    <span>·</span>
                    <span>{articles[0].readTime} Lesezeit</span>
                  </div>
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Warum KI die Gebäudeautomation transformiert</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Integration von Künstlicher Intelligenz in Gebäudeautomationssysteme markiert einen Wendepunkt für die Branche. Wo früher starre Regeln und Zeitpläne dominierten, lernen moderne Systeme kontinuierlich dazu und passen sich dynamisch an.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Echtzeit-Analyse von Verbrauchsmustern', 'Selbstoptimierende Regelalgorithmen', 'Prädiktive Anomalieerkennung', 'Bis zu 40% Energieeinsparung'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="btn-primary text-sm">
                    Ganzen Artikel lesen
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.title} className="card card-hover group">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 ${article.color} text-xs font-semibold rounded-full`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <button className="text-primary-700 font-semibold text-sm hover:underline flex items-center gap-1">
                      Weiterlesen
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-4">
              Stay informed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keine News mehr verpassen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Insights direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
              <button className="btn-primary whitespace-nowrap">
                Abonnieren
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}