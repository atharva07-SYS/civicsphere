'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'hi';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    'nav.home': 'Home',
    'nav.clubs': 'Clubs',
    'nav.impact': 'Impact',
    'nav.community': 'Community',
    'nav.profile': 'Profile',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.clubs': 'Clubes',
    'nav.impact': 'Impacto',
    'nav.community': 'Comunidad',
    'nav.profile': 'Perfil',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.clubs': 'Clubs',
    'nav.impact': 'Impact',
    'nav.community': 'Communauté',
    'nav.profile': 'Profil',
  },
  hi: {
    'nav.home': 'होम',
    'nav.clubs': 'क्लब',
    'nav.impact': 'प्रभाव',
    'nav.community': 'समुदाय',
    'nav.profile': 'प्रोफ़ाइल',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}