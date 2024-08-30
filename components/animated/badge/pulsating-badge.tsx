import clsx from 'clsx';
import React from 'react';

interface PulsatingBadgeProps {
  text: string;
  className?: string;
}

const PulsatingBadge: React.FC<PulsatingBadgeProps> = ({ text, className }) => {
  return (
    <div
      className={clsx(
        className,
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-teal-800 dark:bg-zinc-900 dark:text-neutral-300'
      )}
    >
      <span className="flex h-2 w-2 mr-2">
        <span className="animate-slow-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
      </span>
      {text}
    </div>
  );
};

export default PulsatingBadge;
