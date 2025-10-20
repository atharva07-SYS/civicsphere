'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface EventDetailProps {
  eventId: string;
  onBack: () => void;
}

export function EventDetail({ eventId, onBack }: EventDetailProps) {
  const event = {
    title: 'Community Cleanup Day',
    date: '2024-01-20',
    time: '9:00 AM',
    location: 'Central Park',
    description:
      'Join us for a community-wide cleanup event. Together we can make our neighborhood cleaner and more beautiful.',
    attendees: 45,
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
            Back to Events
          </button>
          <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <span>
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-600">{event.description}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
        >
          Join Event ({event.attendees} attending)
        </motion.button>
      </div>
    </div>
  );
}