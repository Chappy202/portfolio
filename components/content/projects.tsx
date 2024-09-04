'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Card, Carousel } from '../ui/carousel/apple-cards-carousel';

interface ProjectsProps {
  className?: string;
  style?: React.CSSProperties;
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to
              convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to
              capture every thought.
            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              height="500"
              src="https://assets.aceternity.com/macbook.png"
              width="500"
            />
          </div>
        );
      })}
    </>
  );
};

export const Projects: FC<ProjectsProps> = ({ className }) => {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className={clsx('relative flex flex-col h-full w-full py-28', className)}>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My latest projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

const data = [
  {
    category: 'Web Development',
    title: 'Partscorp Online store',
    src: '/assets/projects/partscorp-mock.webp',
    content: <DummyContent />,
  },
  {
    category: 'Full Stack / Mobile Development',
    title: 'FBCranes - Crane inspection and asset management',
    src: '/assets/projects/fbcranes-mock.webp',
    content: <DummyContent />,
  },
  {
    category: 'Web Development',
    title: 'Jaron Grobler - Dynamic videography portfolio',
    src: '/assets/projects/jaron-mock.webp',
    content: <DummyContent />,
  },

  {
    category: 'Mobile Development',
    title: 'Warranty Wallet - Mobile app for managing warranties',
    src: '/assets/projects/warranty_wallet-mock.webp',
    content: <DummyContent />,
  },
  {
    category: 'Backend Development',
    title: 'Headless Auth Service - Open-source authentication service',
    src: '/assets/projects/auth-api-mock.webp',
    content: <DummyContent />,
  },
  {
    category: 'Web Development',
    title: 'SME embedded HVAC Management dashboard',
    src: '/assets/projects/sme-mock.webp',
    content: <DummyContent />,
  },
];
