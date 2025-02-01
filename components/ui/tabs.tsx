'use client';

import { motion } from 'motion/react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

type Tab = {
  title: string;
  value: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}

const TabButton = memo(
  ({
    tab,
    isActive,
    onClick,
    tabClassName,
  }: {
    tab: Tab;
    isActive: boolean;
    onClick: () => void;
    tabClassName?: string;
  }) => (
    <button
      className={cn(
        'relative px-4 py-2 rounded-md text-sm font-medium z-0',
        isActive
          ? 'text-neutral-900 dark:text-neutral-900'
          : 'text-neutral-600 dark:text-neutral-200',
        tabClassName
      )}
      onClick={onClick}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-white dark:bg-neutral-400 rounded-md -z-10"
          layoutId="activeTab"
          transition={{
            type: 'spring',
            bounce: 0.15,
            duration: 0.5,
          }}
        />
      )}
      <span className="relative block">{tab.title}</span>
    </button>
  )
);

TabButton.displayName = 'TabButton';

export const Tabs = memo(
  ({ tabs, activeTab, onChange, containerClassName, tabClassName }: TabsProps) => {
    return (
      <div
        className={cn(
          'flex gap-2 items-center justify-start bg-white/10 dark:bg-white/5 p-1 rounded-lg w-fit',
          containerClassName
        )}
      >
        {tabs.map(tab => (
          <TabButton
            key={tab.value}
            isActive={activeTab === tab.value}
            tab={tab}
            tabClassName={tabClassName}
            onClick={() => onChange(tab.value)}
          />
        ))}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
