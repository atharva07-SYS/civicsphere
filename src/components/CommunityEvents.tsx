'use client';

import { motion } from 'framer-motion';

interface CommunityEventsProps {
  onViewEvent: (eventId: string) => void;
}

export function CommunityEvents({ onViewEvent }: CommunityEventsProps) {
  const events = [
    {
      id: '1',
      title: 'Community Cleanup Day',
      date: '2024-01-20',
      attendees: 45,
    },
    {
      id: '2',
      title: 'Local Food Drive',
      date: '2024-01-25',
      attendees: 30,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer"
            onClick={() => onViewEvent(event.id)}
          >
            <h3 className="font-medium">{event.title}</h3>
            <p className="text-sm text-gray-500">
              {new Date(event.date).toLocaleDateString()} • {event.attendees}{' '}
              attending
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}