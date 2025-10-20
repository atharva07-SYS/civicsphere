'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'hi', label: 'HI' },
  ] as const;

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
            language === lang.code
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}