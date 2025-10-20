'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ClubDetailProps {
  clubId: string;
  onBack: () => void;
  onViewProject: (projectId: string) => void;
}

export function ClubDetail({ clubId, onBack, onViewProject }: ClubDetailProps) {
  const club = {
    name: 'Environmental Warriors',
    description: 'Working together for a cleaner, greener future.',
    projects: [
      { id: '1', name: 'City Park Cleanup', status: 'Active' },
      { id: '2', name: 'Tree Planting Initiative', status: 'Planning' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-2xl mx-auto p-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Clubs
          </button>
          <h1 className="text-2xl font-bold mb-2">{club.name}</h1>
          <p className="text-white/90">{club.description}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {club.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer"
              onClick={() => onViewProject(project.id)}
            >
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.status}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}