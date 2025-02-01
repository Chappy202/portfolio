'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Timeline } from '../ui/timeline/timeline';

import { cn } from '@/lib/utils';

interface JourneyProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Journey: FC<JourneyProps> = ({ className }) => {
  const data = [
    {
      title: '2024',
      content: (
        <div className={cn(className)}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Starting 2024 I got placed on a new project at a Bank where I formed part of a payments
            related team that deals with industry related payment types such as the new{' '}
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            In 2023, I largely worked on a project at a Bank where I formed part of the
            &quot;Everyday banking payments&quot; teams, where I mostly worked on Spring Boot
            microservices running on kubernetes clusters. Technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>Java / Spring Boot</li>
              <li>Kubernetes</li>
              <li>AWS Services</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
            </ul>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            In my spare time I also embarked on a journey to build various other projects for myself
            and for freelance projects. Some of the technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>ReactJS & NextJS</li>
              <li>React Native/Expo</li>
              <li>AWS Services</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
            </ul>
          </div>
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
            , while completing my final year at University. As part of my first year at Entelect, I
            went through their{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://www.culture.entelect.co.za/graduate-programme/boot-camp-work-hard-play-hard/"
              rel="noopener noreferrer"
              target="_blank"
            >
              graduate boot camp
            </Link>
            , which was a 2 month intensive training program that covered a lot of the technologies
            I use today.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            After completing the boot camp, I started working on a new project at a Bank where I
            formed part of the &quot;Everyday banking payments&quot; teams, where I mostly worked on
            Spring Boot microservices running on kubernetes clusters. Technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>Java / Spring Boot</li>
              <li>Kubernetes</li>
              <li>AWS Services</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            2021 was my final theoretical year at University. As part of my final year, I
            participated in an{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://www.belgiumcampus.ac.za/mega-project/"
              rel="noopener noreferrer"
              target="_blank"
            >
              International Mega Project
            </Link>
            , where we collaborated with students from other universities and the{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://www.openremote.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open Remote Company
            </Link>{' '}
            to build an interactive web application and machine learning solution to predict solar
            radiation and potential energy produced by solar panels.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            Technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>ReactJS</li>
              <li>Spring Boot</li>
              <li>C# / .NET Framework</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>OVH Cloud</li>
            </ul>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            Outside of my studies, I managed and experimented with network equipment and various
            server setups for a company called{' '}
            <Link
              className="text-foreground hover:text-zinc-500 underline underline-offset-4 dark:text-foreground dark:hover:text-zinc-400 transition-colors"
              href="https://febcon.co.za/"
            >
              FEB Consulting
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      title: 'Pre',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Before and while I was at University, I also worked on various projects for myself and
            for freelance projects. Some of the technologies I used include:
          </p>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <ul className="list-disc text-xs">
              <li>ReactJS</li>
              <li>C# / .NET Framework</li>
              <li>Javascript / Typescript</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>C (Arduino)</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>HTML / CSS</li>
              <li>MSSQL</li>
              <li>Linux</li>
            </ul>
          </div>
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
