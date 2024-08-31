import { Projects } from '@/components/content/projects';
import { HeroLanding } from '@/components/ui/hero/landing-hero';

export default function Home() {
  return (
    <section className="relative flex flex-col gap-4 items-center py-8 md:py-10 overflow-hidden min-h-screen">
      <HeroLanding />
      <Projects />
    </section>
  );
}
