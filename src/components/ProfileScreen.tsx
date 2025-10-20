'use client';

import { motion } from 'framer-motion';

export function ProfileScreen() {
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2024-01-01',
    stats: {
      eventsAttended: 12,
      issuesReported: 5,
      clubsMember: 3,
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-semibold">
            {profile.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <div className="text-2xl font-bold text-blue-600">
            {profile.stats.eventsAttended}
          </div>
          <div className="text-sm text-gray-500">Events</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <div className="text-2xl font-bold text-blue-600">
            {profile.stats.issuesReported}
          </div>
          <div className="text-sm text-gray-500">Issues</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <div className="text-2xl font-bold text-blue-600">
            {profile.stats.clubsMember}
          </div>
          <div className="text-sm text-gray-500">Clubs</div>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-4">Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div>
              <p className="text-gray-600">Joined CivicSphere</p>
              <p className="text-sm text-gray-400">
                {new Date(profile.joinedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}