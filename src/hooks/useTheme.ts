// hooks/useTheme.ts
'use client';

import { useState, useEffect } from 'react';
import { config } from '../config';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Only enable if the feature flag is true
    if (!config.features.darkMode) return;

    // Check for system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
  }, []);

  const toggleTheme = () => {
    if (!config.features.darkMode) return;

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return { theme, toggleTheme, isDarkModeEnabled: config.features.darkMode };
}