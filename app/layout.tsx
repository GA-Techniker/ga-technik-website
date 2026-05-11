import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GA-Technik | MSR & Gebäudeautomation',
  description: 'GA-Technik ist Ihr Spezialist für Messen, Steuern, Regeln (MSR) und Gebäudeautomation. Wir optimieren Ihre Gebäudetechnik mit modernsten Lösungen.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">{children}</body>
    </html>
  );
}