'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Timeline } from '../ui/timeline/timeline';

interface JourneyProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Journey: FC<JourneyProps> = ({ className }) => {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Starting 2024 I got placed on a new project at Standard Bank where I formed part of a
            payments related team that deals with industry related payment types such as the new{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://www.payshap.co.za/#/home"
              rel="noopener noreferrer"
              target="_blank"
            >
              PayShap program
            </Link>
            . This project mostly involved working on Spring Boot microservices running in a
            serverless architecture on AWS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              height={500}
              src="/assets/journey/payshap.webp"
              width={500}
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-2">
            You can learn more about PayShap{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://entelect.co.za/insights/what-will-it-take-for-payshap-to-succeed/"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </Link>
            .
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            In my spare time I also embarked on a journey to build various other projects for myself
            and for freelance projects. Some of the technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>Spring Boot</li>
              <li>NestJS</li>
              <li>React Native/Expo</li>
              <li>Rust / Tauri</li>
            </ul>
            <ul className="list-disc text-xs">
              <li>MicroPython</li>
              <li>ReactJS & NextJS</li>
              <li>PostgreSQL</li>
              <li>Kubernetes & AWS Services</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In 2023, I largely worked on a project at Standard Bank where I formed part of the
            &quot;Everyday banking payments&quot; teams, where I mostly worked on Spring Boot
            microservices running on kubernetes clusters.
          </p>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            2022 was a year of growth for me. I started working at{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://entelect.co.za/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Entelect
            </Link>
            , while completing my final year at University.
          </p>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            2021 was my final theoretical year at University.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
