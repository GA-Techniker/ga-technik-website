import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function UeberUns() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Über uns</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            GA-Technik ist Ihr zuverlässiger Partner im Bereich Mess-, Steuer- und Regelungstechnik (MSR) mit besonderem Schwerpunkt auf Gebäudeautomation. Seit vielen Jahren unterstützen wir Unternehmen und Gebäudebetreiber bei der Optimierung ihrer technischen Gebäudeausrüstung.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p>Wir setzen auf modernste Technologien und kontinuierliche Weiterentwicklung.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Qualität</h3>
              <p>Höchste Standards in Planung, Installation und Service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Zuverlässigkeit</h3>
              <p>Partner, auf den Sie sich verlassen können.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}