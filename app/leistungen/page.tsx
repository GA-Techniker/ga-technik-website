import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Leistungen() {
  const services = [
    {
      title: 'MSR-Technik',
      desc: 'Messen, Steuern und Regeln für industrielle Prozesse und technische Gebäudeausrüstung.',
      details: ['Prozessautomatisierung', 'Sensortechnik', 'Regelungstechnik', 'Datenerfassung'],
    },
    {
      title: 'Gebäudeautomation',
      desc: 'Intelligente Steuerung aller gewerkübergreifenden Funktionen in Ihrem Gebäude.',
      details: ['HVAC-Steuerung', 'Beleuchtungsmanagement', 'Zutrittskontrolle', 'Brandmeldeanlagen'],
    },
    {
      title: 'Energiemanagement',
      desc: 'Nachhaltige Optimierung Ihres Energieverbrauchs mit modernen Analyse-Tools.',
      details: ['Verbrauchsanalyse', 'Lastmanagement', 'Energierückgewinnung', 'Reporting'],
    },
    {
      title: 'Instandhaltung',
      desc: 'Wartung, Reparatur und 24/7-Support für Ihre technischen Anlagen.',
      details: ['Präventive Wartung', 'Störungsbeseitigung', 'Ersatzteilmanagement', 'Dokumentation'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Leistungen</h1>
        <div className="space-y-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.desc}</p>
              <ul className="grid md:grid-cols-2 gap-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}