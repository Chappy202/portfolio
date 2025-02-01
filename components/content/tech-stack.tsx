'use client';

import { AnimatePresence, motion } from 'motion/react';
import { memo, useCallback, useMemo, useState } from 'react';

import { FadeInSection } from '../fade-in-section';

import { JavaIcon } from '@/components/icons/tech/java';
import ShineBorder from '@/components/shine-border';
import { Tabs } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface TechStackProps {
  className?: string;
}

interface TechItem {
  name: string;
  category: 'language' | 'framework' | 'tool';
}

// Static card content to reduce re-renders
const CardContent = memo(({ tech }: { tech: TechItem }) => (
  <div className="flex items-center gap-2">
    <JavaIcon className="w-5 h-5 text-neutral-300" />
    <p className="text-sm font-medium text-neutral-200">{tech.name}</p>
  </div>
));

CardContent.displayName = 'CardContent';

// Card with absolute positioning but simplified structure
const TechCard = memo(({ tech }: { tech: TechItem }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="basis-[calc(16.666%-14px)] min-w-[150px]"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ShineBorder className="min-h-0 min-w-0 w-full p-[1]">
        <CardContent tech={tech} />
      </ShineBorder>
    </motion.div>
  );
});

TechCard.displayName = 'TechCard';

// Container for cards with fixed height
const TechGrid = memo(({ techs }: { techs: TechItem[] }) => {
  return (
    <div className="flex flex-wrap content-start gap-4 w-full h-48">
      <AnimatePresence>
        {techs.map(tech => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </AnimatePresence>
    </div>
  );
});

TechGrid.displayName = 'TechGrid';

const TechStack = memo(({ className }: TechStackProps) => {
  const [activeCategory, setActiveCategory] = useState<'language' | 'framework' | 'tool'>(
    'language'
  );

  const tabs = useMemo(
    () => [
      { title: 'Languages', value: 'language' },
      { title: 'Frameworks', value: 'framework' },
      { title: 'Tools', value: 'tool' },
    ],
    []
  );

  const technologies: TechItem[] = [
    // Languages
    { name: 'Java', category: 'language' },
    { name: 'C#', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'HTML', category: 'language' },
    { name: 'CSS', category: 'language' },

    // Frameworks
    { name: 'ReactJS', category: 'framework' },
    { name: 'NextJS', category: 'framework' },
    { name: 'VueJS', category: 'framework' },
    { name: 'Spring Boot', category: 'framework' },
    { name: '.NET', category: 'framework' },
    { name: 'NestJS', category: 'framework' },
    { name: 'ExpressJS', category: 'framework' },
    { name: 'Fastify', category: 'framework' },
    { name: 'Tauri', category: 'framework' },
    { name: 'React Native', category: 'framework' },
    { name: 'Expo', category: 'framework' },
    { name: 'Maven', category: 'framework' },
    { name: 'Gradle', category: 'framework' },
    { name: 'PostgreSQL', category: 'framework' },
    { name: 'MSSQL', category: 'framework' },
    { name: 'MySQL', category: 'framework' },
    { name: 'TailwindCSS', category: 'framework' },

    // Tools
    { name: 'Jenkins', category: 'tool' },
    { name: 'Git', category: 'tool' },
    { name: 'Jira', category: 'tool' },
    { name: 'AWS', category: 'tool' },
    { name: 'Kubernetes', category: 'tool' },
    { name: 'Docker', category: 'tool' },
    { name: 'Linux', category: 'tool' },
    { name: 'Figma', category: 'tool' },
    { name: 'Photoshop', category: 'tool' },
    { name: 'Illustrator', category: 'tool' },
  ];

  const filteredTech = useMemo(
    () => technologies.filter(tech => tech.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value as typeof activeCategory);
  }, []);

  return (
    <FadeInSection className={cn('w-full max-w-7xl mx-auto px-4 pb-16', className)}>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
            Tech Stack
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl">
            Technologies I&apos;ve mastered along the way, from building enterprise solutions to
            crafting personal projects.
          </p>
        </div>

        <Tabs activeTab={activeCategory} tabs={tabs} onChange={handleCategoryChange} />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <TechGrid key={activeCategory} techs={filteredTech} />
          </AnimatePresence>
        </div>
      </div>
    </FadeInSection>
  );
});

TechStack.displayName = 'TechStack';

export { TechStack };
