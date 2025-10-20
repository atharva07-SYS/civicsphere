'use client';

import { motion } from 'framer-motion';

interface ClubsPageProps {
  onViewClub: (clubId: string) => void;
}

export function ClubsPage({ onViewClub }: ClubsPageProps) {
  const clubs = [
    { id: '1', name: 'Environmental Warriors', members: 120 },
    { id: '2', name: 'Community Builders', members: 85 },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24">
      <h2 className="text-2xl font-bold mb-6">Local Clubs</h2>
      <div className="space-y-4">
        {clubs.map((club) => (
          <motion.div
            key={club.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer"
            onClick={() => onViewClub(club.id)}
          >
            <h3 className="font-medium">{club.name}</h3>
            <p className="text-sm text-gray-500">{club.members} members</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}