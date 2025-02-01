'use client';

import { Link } from '@heroui/link';
import { memo } from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

import { ContactForm } from '../ui/contact/contact-form';
import { FadeInSection } from '../fade-in-section';
import { GithubIcon } from '../icons';

import { cn } from '@/lib/utils';

interface ContactProps {
  className?: string;
}

const ContactInfo = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
        Contact Information
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Feel free to reach out through any of these channels.
      </p>
    </div>

    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        <Link
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
          href="mailto:hello@example.com"
        >
          hello@example.com
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          Cape Town, South Africa
        </span>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Follow Me</h3>
      <div className="flex gap-4">
        <Link
          isExternal
          className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
          href="https://github.com/yourusername"
        >
          <GithubIcon className="w-5 h-5" />
        </Link>
        <Link
          isExternal
          className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
          href="https://linkedin.com/in/yourusername"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
);

export const Contact = memo(({ className }: ContactProps) => {
  return (
    <>
      <FadeInSection
        className={cn('w-full max-w-7xl mx-auto px-4 scroll-mt-[100px]', className)}
        id="contact-section"
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
              Get in touch 👋
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl">
              Have a project in mind? Let&apos;s talk about how we can work together to bring your
              ideas to life.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12">
              <ContactInfo />
              <div className="border-t md:border-l md:border-t-0 border-neutral-200 dark:border-neutral-800 pt-8 md:pt-0 md:pl-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
});

Contact.displayName = 'Contact';
