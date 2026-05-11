export const metadata = {
  title: 'GA-Technik | MSR & Gebäudeautomation',
  description: 'GA-Technik ist Ihr Spezialist für Messen, Steuern, Regeln (MSR) und Gebäudeautomation. Wir optimieren Ihre Gebäudetechnik mit modernsten Lösungen.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}