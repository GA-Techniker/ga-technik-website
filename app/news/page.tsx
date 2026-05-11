import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function News() {
  const articles = [
    {
      title: 'KI-gestützte Gebäudeautomation: Die Zukunft der Energieeffizienz',
      date: '10. Mai 2026',
      excerpt: 'Künstliche Intelligenz revolutioniert die Gebäudeautomation. Moderne KI-Systeme können Energieverbrauchsmuster in Echtzeit analysieren und optimieren, was zu Einsparungen von bis zu 40% führen kann.',
      category: 'KI & Automation',
    },
    {
      title: 'Smart Building Standards 2026: BACnet/SC und die neue Sicherheitsära',
      date: '5. Mai 2026',
      excerpt: 'Mit BACnet/SC (Secure Connect) kommt ein neuer Standard für sichere Gebäudekommunikation. Wir erklären, was sich ändert und wie Sie Ihre Systeme zukunftssicher machen.',
      category: 'Standards',
    },
    {
      title: 'Predictive Maintenance mit Machine Learning',
      date: '28. April 2026',
      excerpt: 'Predictive Maintenance reduziert Ausfallzeiten um bis zu 50%. Durch den Einsatz von Machine Learning können Anlagenverschleiß und potenzielle Störungen frühzeitig erkannt werden.',
      category: 'Instandhaltung',
    },
    {
      title: 'Nachhaltigkeit in der Gebäudeautomation: Green Building Zertifizierung',
      date: '20. April 2026',
      excerpt: 'Green Building wird immer wichtiger. Wir zeigen, wie moderne Gebäudeautomation dabei hilft, Nachhaltigkeitsstandards zu erreichen und gleichzeitig Kosten zu senken.',
      category: 'Nachhaltigkeit',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">News & Insights</h1>
        <p className="text-lg text-gray-600 mb-12">Aktuelle Entwicklungen in KI, Gebäudeautomation und MSR-Technik</p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">{article.category}</span>
                <span className="text-gray-500 ml-4">{article.date}</span>
              </div>
              <h2 className="text-2xl font-semibold text-dark mb-3">{article.title}</h2>
              <p className="text-gray-700">{article.excerpt}</p>
              <button className="mt-4 text-primary font-semibold hover:underline">Mehr lesen →</button>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}