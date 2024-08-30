'use client';

import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import ShimmerButton from '../buttons/shimmer-button';

import { title } from '@/components/primitives';
import { BackgroundParticles } from '@/components/animated/background/background-particles';
import PulsatingBadge from '@/components/animated/badge/pulsating-badge';

interface HeroLandingProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HeroLanding: FC<HeroLandingProps> = ({ className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={clsx('relative flex flex-col gap-4 items-center h-full w-full py-28', className)}
    >
      <div className="absolute inset-0 z-0 h-full">
        <BackgroundParticles key={isMobile ? 'mobile' : 'desktop'} quantity={isMobile ? 50 : 150} />
      </div>
      <div className="relative z-10 max-w-xl flex flex-col text-center items-center justify-center flex-grow">
        <h1 className={`${title()} text-4xl md:text-5xl lg:text-6xl mb-4`}>I&apos;m JJ 👋</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer crafting web apps, mobile apps, backend systems & fintech solutions.
        </p>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2">
          Currently at{' '}
          <Link
            className="text-foreground hover:text-zinc-500 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
            href="https://entelect.co.za"
            rel="noopener noreferrer"
            target="_blank"
          >
            Entelect
          </Link>
          . Based in South Africa.
        </p>
        <PulsatingBadge className="mb-12" text="Available for select freelance opportunities" />
        <div className="flex gap-3">
          <ShimmerButton borderRadius="50px" shimmerSize="0.1em">
            Get in touch
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};
