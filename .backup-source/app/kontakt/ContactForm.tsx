'use client';

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank für Ihre Nachricht! Wir melden uns bei Ihnen.'); }}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">E-Mail *</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Betreff *</label>
        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white">
          <option value="">Bitte wählen...</option>
          <option>Allgemeine Anfrage</option>
          <option>MSR-Technik</option>
          <option>Gebäudeautomation</option>
          <option>Energiemanagement</option>
          <option>Instandhaltung</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Nachricht *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:from-primary-800 hover:to-primary-900 transition-all duration-300 shadow-lg shadow-primary-800/25 hover:-translate-y-0.5"
      >
        Nachricht senden
        <svg className="w-5 h-5 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  );
}