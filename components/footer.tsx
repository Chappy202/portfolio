import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { GithubIcon, LinkedInIcon, UnsplashIcon } from '@/components/icons';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 py-6 mt-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} J.B. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            aria-label="Github"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
            href={siteConfig.links.github}
            target="_blank"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
            href={siteConfig.links.linkedin}
            target="_blank"
          >
            <LinkedInIcon className="w-5 h-5" />
          </Link>
          <Link
            aria-label="Unsplash"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
            href={siteConfig.links.unsplash}
            target="_blank"
          >
            <UnsplashIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
