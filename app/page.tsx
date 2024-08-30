import { MagicCard } from '@/components/ui/cards/margic-card';
import { HeroLanding } from '@/components/ui/hero/landing-hero';

export default function Home() {
  return (
    <section className="relative flex flex-col gap-4 items-center py-8 md:py-10 overflow-hidden min-h-screen">
      <HeroLanding />
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
