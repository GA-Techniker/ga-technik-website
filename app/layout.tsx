import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'GA-Technik | MSR-Planung & Gebäudeautomation für Industrie- und Gewerbeimmobilien',
  description: 'GA-Technik ist Ihr Spezialist für MSR-Technik und Gebäudeautomation. BACnet, KNX, LON, Modbus – wir planen, installieren und optimieren Ihre Gebäudetechnik. Siemens, ABB, Beckhoff und mehr.',
  keywords: 'MSR-Technik, Gebäudeautomation, BACnet, KNX, LON, Modbus, Siemens, ABB, Beckhoff, Smart Building, Energiemanagement, Instandhaltung',
  openGraph: {
    title: 'GA-Technik | MSR-Planung & Gebäudeautomation',
    description: 'Ihr Spezialist für MSR-Technik und Gebäudeautomation – BACnet, KNX, LON, Modbus. Industrie- und Gewerbeimmobilien.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.ga-technik.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GA-Technik GmbH',
    description: 'Spezialist für MSR-Technik und Gebäudeautomation für Industrie- und Gewerbeimmobilien',
    url: 'https://www.ga-technik.com',
    telephone: '+49123456789',
    email: 'Info@Ga-Technik.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Musterstadt',
      postalCode: '12345',
      addressCountry: 'DE',
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    serviceArea: {
      '@type': 'Country',
      name: 'Germany',
    },
    knowsAbout: ['MSR-Technik', 'Gebäudeautomation', 'BACnet', 'KNX', 'LON', 'Modbus', 'Energiemanagement'],
  };

  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}