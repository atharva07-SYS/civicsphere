'use client';

import { motion } from 'framer-motion';

export function ImpactDashboard() {
  const stats = [
    { label: 'Projects', value: '24' },
    { label: 'Volunteers', value: '512' },
    { label: 'Communities', value: '8' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24">
      <h2 className="text-2xl font-bold mb-6">Impact Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
          >
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Recent Impact</h3>
        <div className="space-y-4">
          {/* Placeholder for impact visualization */}
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Impact Visualization
          </div>
        </div>
      </div>
    </div>
  );
}