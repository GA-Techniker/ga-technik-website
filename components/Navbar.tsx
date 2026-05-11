import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">GA-Technik</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-200 px-3 py-2">Startseite</Link>
            <Link href="/ueber-uns" className="hover:text-blue-200 px-3 py-2">Über uns</Link>
            <Link href="/leistungen" className="hover:text-blue-200 px-3 py-2">Leistungen</Link>
            <Link href="/news" className="hover:text-blue-200 px-3 py-2">News</Link>
            <Link href="/kontakt" className="hover:text-blue-200 px-3 py-2">Kontakt</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}