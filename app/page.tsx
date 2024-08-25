import { title } from '@/components/primitives';
import { BlurryBlob } from '@/components/animated/background/blurry-blob';
import { Dot } from '@/components/background/dot';
import ShimmerButton from '@/components/ui/buttons/shimmer-button';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Dot className="w-full z-0 flex flex-col justify-center items-center" spacing={10}>
        <div className="max-w-xl inline-block text-center justify-center mt-32">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: 'violet' })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>websites regardless of your design experience.</h1>
          <BlurryBlob
            className="rounded-xl opacity-45"
            firstBlobColor="bg-fuchsia-400"
            secondBlobColor="bg-blue-400"
          />
        </div>
      </Dot>
      <div className="flex gap-3 mb-[1000px]">
        <ShimmerButton borderRadius="50px" shimmerDuration="1.5s" shimmerSize="0.15em">
          Get in touch
        </ShimmerButton>
      </div>
    </section>
  );
}
