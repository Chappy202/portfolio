import { Journey } from '@/components/content/journey';
import { Projects } from '@/components/content/projects';
import { HeroLanding } from '@/components/ui/hero/landing-hero';
import { Blog } from '@/components/content/blog';
import { TechStack } from '@/components/content/tech-stack';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <section className="py-8 md:py-10">
        <HeroLanding />
        <Projects />
        <TechStack className="mt-20" />
        <Journey />
        <Blog className="mt-20" />
      </section>
      <Footer />
    </>
  );
}
