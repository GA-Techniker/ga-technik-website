import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from './ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | GA-Technik – MSR-Planung & Gebäudeautomation',
  description: 'Kontaktieren Sie GA-Technik für ein unverbindliches Beratungsgespräch. Tel: +49 (0) 123 456789 | E-Mail: Info@Ga-Technik.com. Wir freuen uns auf Ihre Anfrage!',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-Mail',
    value: 'Info@Ga-Technik.com',
    href: 'mailto:Info@Ga-Technik.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+49 (0) 123 456789',
    href: 'tel:+49123456789',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Adresse',
    value: 'GA-Technik GmbH, Musterstraße 123, 12345 Musterstadt',
    href: '#',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Geschäftszeiten',
    value: 'Mo – Fr: 8:00 – 17:00 Uhr',
    href: '#',
  },
];

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-6">
              Kontakt
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Lassen Sie uns <span className="text-primary-200">sprechen</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card p-6 text-center group hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center text-primary-700 dark:text-primary-300 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-primary-700 dark:text-primary-400 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Nachricht senden</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Füllen Sie das Formular aus und wir melden uns schnellstmöglich.</p>
                
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Karte wird geladen</p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">GA-Technik GmbH</p>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Schnellkontakt</h3>
                <div className="space-y-4">
                  <a href="mailto:Info@Ga-Technik.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">E-Mail</div>
                      <div className="font-medium">Info@Ga-Technik.com</div>
                    </div>
                  </a>
                  <a href="tel:+49123456789" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Telefon</div>
                      <div className="font-medium">+49 (0) 123 456789</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Öffnungszeiten</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Montag – Freitag</span>
                    <span className="font-medium text-gray-900 dark:text-white">8:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Samstag – Sonntag</span>
                    <span className="font-medium text-gray-400 dark:text-gray-500">Geschlossen</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      Notfall-Support 24/7 verfügbar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}