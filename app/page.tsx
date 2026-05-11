import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">GA-Technik</h1>
            <p className="text-xl md:text-2xl mb-8">Ihr Spezialist für MSR und Gebäudeautomation</p>
            <a href="/kontakt" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Kontaktieren Sie uns</a>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-light">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dark">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'MSR-Technik', desc: 'Messen, Steuern, Regeln für industrielle Prozesse' },
                { title: 'Gebäudeautomation', desc: 'Smart Building Lösungen für maximale Effizienz' },
                { title: 'Energiemanagement', desc: 'Optimierung Ihres Energieverbrauchs' },
                { title: 'Instandhaltung', desc: 'Wartung und Support rund um die Uhr' },
              ].map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}