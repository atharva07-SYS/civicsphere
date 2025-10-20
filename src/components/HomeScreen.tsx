'use client';

import { motion } from 'framer-motion';

interface HomeScreenProps {
  onReportIssue: () => void;
  onViewIssue: (issueId: string) => void;
}

export function HomeScreen({ onReportIssue, onViewIssue }: HomeScreenProps) {
  const issues = [
    { id: '1', title: 'Park Cleanup', status: 'In Progress' },
    { id: '2', title: 'Community Garden', status: 'Planned' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Recent Issues</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReportIssue}
          className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Report Issue
        </motion.button>
      </div>
      <div className="space-y-4">
        {issues.map((issue) => (
          <motion.div
            key={issue.id}
            whileHover={{ scale: 1.02 }}
            className="bg-background p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 cursor-pointer hover:border-gray-200 dark:hover:border-gray-700"
            onClick={() => onViewIssue(issue.id)}
          >
            <h3 className="font-medium text-foreground">{issue.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{issue.status}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}