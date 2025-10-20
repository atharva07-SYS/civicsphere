'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface SettingsPageProps {
  onBack: () => void;
  onLogout: () => void;
}

export function SettingsPage({ onBack, onLogout }: SettingsPageProps) {
  const { theme, toggleTheme, isDarkModeEnabled } = useTheme();
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-2xl mx-auto p-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Profile
          </button>
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-background rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
          {isDarkModeEnabled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-medium mb-1">Appearance</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Toggle between light and dark mode
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-blue-500" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
          <div className="p-4">
            <h2 className="font-medium mb-1">Notifications</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Configure your notification preferences
            </p>
          </div>
          <div className="p-4">
            <h2 className="font-medium mb-1">Privacy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your privacy settings
            </p>
          </div>
          <div className="p-4">
            <h2 className="font-medium mb-1">Account</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your account details
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogout}
          className="w-full mt-6 py-3 text-red-600 dark:text-red-500 font-medium rounded-xl border-2 border-red-600 dark:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          Log Out
        </motion.button>
      </div>
    </div>
  );
}