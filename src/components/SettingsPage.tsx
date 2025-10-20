'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface SettingsPageProps {
  onBack: () => void;
  onLogout: () => void;
}

export function SettingsPage({ onBack, onLogout }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-white">
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          <div className="p-4">
            <h2 className="font-medium mb-1">Notifications</h2>
            <p className="text-sm text-gray-500">
              Configure your notification preferences
            </p>
          </div>
          <div className="p-4">
            <h2 className="font-medium mb-1">Privacy</h2>
            <p className="text-sm text-gray-500">Manage your privacy settings</p>
          </div>
          <div className="p-4">
            <h2 className="font-medium mb-1">Account</h2>
            <p className="text-sm text-gray-500">Update your account details</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogout}
          className="w-full mt-6 py-3 text-red-600 font-medium rounded-xl border-2 border-red-600"
        >
          Log Out
        </motion.button>
      </div>
    </div>
  );
}