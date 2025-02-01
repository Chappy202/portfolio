'use client';

import { AnimatePresence, motion } from 'motion/react';
import { memo, useCallback, useMemo, useState } from 'react';

import { FadeInSection } from '../fade-in-section';
import C from '../icons/tech/c-sharp';
import JavaScript from '../icons/tech/javascript';
import TypeScript from '../icons/tech/typescript';
import Python from '../icons/tech/python';
import HTML5 from '../icons/tech/html';
import CSS from '../icons/tech/css';
import ReactIcon from '../icons/tech/react';
import Nextjs from '../icons/tech/nextjs';
import Spring from '../icons/tech/spring';
import Nestjs from '../icons/tech/nestjs';
import Expressjs from '../icons/tech/expressjs';
import Fastify from '../icons/tech/fastify';
import Tauri from '../icons/tech/tauri';
import Expo from '../icons/tech/expo';
import { Maven } from '../icons/tech/maven';
import { Gradle } from '../icons/tech/gradle';
import PostgreSQL from '../icons/tech/postgresql';
import MicrosoftSQLServer from '../icons/tech/mssql';
import MySQL from '../icons/tech/mysql';
import TailwindCSS from '../icons/tech/tailwind';
import { Jenkins } from '../icons/tech/jenkins';
import Git from '../icons/tech/git';
import { Jira } from '../icons/tech/jira';
import AmazonWebServices from '../icons/tech/aws';
import Kubernetes from '../icons/tech/kubernetes';
import Docker from '../icons/tech/docker';
import Linux from '../icons/tech/linux';
import Figma from '../icons/tech/figma';
import Photoshop from '../icons/tech/photoshop';
import Illustrator from '../icons/tech/illustrator';

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
  icon: React.ReactNode;
}

// Static card content to reduce re-renders
const CardContent = memo(({ tech }: { tech: TechItem }) => (
  <div className="flex items-center gap-2">
    {tech.icon}
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
    { name: 'Java', category: 'language', icon: <JavaIcon /> },
    { name: 'C#', category: 'language', icon: <C /> },
    { name: 'JavaScript', category: 'language', icon: <JavaScript /> },
    { name: 'TypeScript', category: 'language', icon: <TypeScript /> },
    { name: 'Python', category: 'language', icon: <Python /> },
    { name: 'HTML', category: 'language', icon: <HTML5 /> },
    { name: 'CSS', category: 'language', icon: <CSS /> },

    // Frameworks
    { name: 'ReactJS', category: 'framework', icon: <ReactIcon /> },
    { name: 'NextJS', category: 'framework', icon: <Nextjs /> },
    { name: 'Spring Boot', category: 'framework', icon: <Spring /> },
    { name: '.NET', category: 'framework', icon: <C /> },
    { name: 'NestJS', category: 'framework', icon: <Nestjs /> },
    { name: 'ExpressJS', category: 'framework', icon: <Expressjs /> },
    { name: 'Fastify', category: 'framework', icon: <Fastify /> },
    { name: 'Tauri', category: 'framework', icon: <Tauri /> },
    { name: 'React Native', category: 'framework', icon: <ReactIcon /> },
    { name: 'Expo', category: 'framework', icon: <Expo /> },
    { name: 'Maven', category: 'framework', icon: <Maven /> },
    { name: 'Gradle', category: 'framework', icon: <Gradle /> },
    { name: 'PostgreSQL', category: 'framework', icon: <PostgreSQL /> },
    { name: 'MSSQL', category: 'framework', icon: <MicrosoftSQLServer /> },
    { name: 'MySQL', category: 'framework', icon: <MySQL /> },
    { name: 'TailwindCSS', category: 'framework', icon: <TailwindCSS /> },

    // Tools
    { name: 'Jenkins', category: 'tool', icon: <Jenkins /> },
    { name: 'Git', category: 'tool', icon: <Git /> },
    { name: 'Jira', category: 'tool', icon: <Jira /> },
    { name: 'AWS', category: 'tool', icon: <AmazonWebServices /> },
    { name: 'Kubernetes', category: 'tool', icon: <Kubernetes /> },
    { name: 'Docker', category: 'tool', icon: <Docker /> },
    { name: 'Linux', category: 'tool', icon: <Linux /> },
    { name: 'Figma', category: 'tool', icon: <Figma /> },
    { name: 'Photoshop', category: 'tool', icon: <Photoshop /> },
    { name: 'Illustrator', category: 'tool', icon: <Illustrator /> },
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
