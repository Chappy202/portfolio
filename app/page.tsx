import Link from 'next/link';

import { BackgroundParticles } from '@/components/animated/background/background-particles';
import { title } from '@/components/primitives';
import ShimmerButton from '@/components/ui/buttons/shimmer-button';
import { MagicCard } from '@/components/ui/cards/margic-card';

export default function Home() {
  return (
    <section className="relative flex flex-col gap-4 items-center py-8 md:py-10 overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <BackgroundParticles className="rounded-lg" quantity={150} />
      </div>
      <div className="relative z-10 max-w-xl flex flex-col text-center items-center justify-center flex-grow">
        <h1 className={`${title()} text-4xl md:text-5xl lg:text-6xl mb-4`}>I&apos;m JJ 👋</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer crafting web apps, mobile apps, backend systems & fintech solutions.
        </p>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8">
          Currently at{' '}
          <Link
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            href="https://entelect.co.za"
            rel="noopener noreferrer"
            target="_blank"
          >
            Entelect
          </Link>
          . Based in South Africa.
        </p>
        <div className="flex gap-3">
          <ShimmerButton borderRadius="50px" shimmerSize="0.1em">
            Get in touch
          </ShimmerButton>
        </div>
      </div>

      <div className="relative z-10 flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer border-none flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#262626'}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col border-[#232b1d] border-1 items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#232b1d'}
        >
          Card
        </MagicCard>
      </div>
    </section>
  );
}
