import { title } from '@/components/primitives';
import { BlurryBlob } from '@/components/animated/background/blurry-blob';
import { Dot } from '@/components/background/dot';
import ShimmerButton from '@/components/ui/buttons/shimmer-button';
import { MagicCard } from '@/components/ui/cards/margic-card';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Dot className="w-full z-0 flex flex-col justify-center items-center" spacing={10}>
        <div className="max-w-xl inline-block text-center justify-center mt-32">
          <h1 className={title()}>Lets&nbsp;</h1>
          <h1 className={title({ color: 'violet' })}>build&nbsp;</h1>
          <br />
          <h1 className={title()}>something amazing!</h1>
          <BlurryBlob
            className="opacity-45"
            firstBlobColor="bg-fuchsia-400"
            secondBlobColor="bg-blue-400"
          />
        </div>
      </Dot>
      <div className="flex gap-3">
        <ShimmerButton borderRadius="50px" shimmerSize="0.1em">
          Get in touch
        </ShimmerButton>
      </div>
      <div className={'flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row'}>
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
