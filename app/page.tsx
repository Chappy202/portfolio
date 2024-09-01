import { Journey } from '@/components/content/journey';
import { Projects } from '@/components/content/projects';
import { HeroLanding } from '@/components/ui/hero/landing-hero';

export default function Home() {
  return (
    <>
      <section className="py-8 md:py-10">
        <HeroLanding />
        <Projects />
        <Journey />
      </section>
    </>
  );
}
