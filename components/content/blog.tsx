'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FadeInSection } from '../fade-in-section';

import { cn } from '@/lib/utils';

interface BlogProps {
  className?: string;
  style?: React.CSSProperties;
}

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
  tags: string[];
}

const generatePlaceholderSVG = (index: number) => {
  const colors = [
    ['#FDA4AF', '#FB7185'], // rose
    ['#93C5FD', '#60A5FA'], // blue
    ['#86EFAC', '#4ADE80'], // green
    ['#FDE047', '#FACC15'], // yellow
  ];
  const [primary, secondary] = colors[index % colors.length];

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad${index})" />
      <circle cx="300" cy="100" r="50" fill="${secondary}" opacity="0.5" />
      <circle cx="100" cy="300" r="70" fill="${primary}" opacity="0.5" />
    </svg>
  `)}`;
};

export const Blog: FC<BlogProps> = ({ className }) => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Building the Future of Web Development',
      description:
        'Exploring the latest trends in web development, from AI integration to advanced animation techniques. Learn how modern tools are shaping the way we build applications.',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      isFeatured: true,
      tags: ['Web Development', 'AI', 'Future Tech'],
    },
    {
      title: 'The Evolution of Authentication',
      description: 'Modern approaches to user authentication and security.',
      date: 'Mar 10, 2024',
      readTime: '5 min read',
      tags: ['Security', 'Backend'],
    },
    {
      title: 'Mastering React Performance',
      description: 'Advanced techniques for optimizing React applications.',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      tags: ['React', 'Performance'],
    },
    {
      title: 'The Future of Mobile Development',
      description: 'Cross-platform development trends and best practices.',
      date: 'Mar 1, 2024',
      readTime: '4 min read',
      tags: ['Mobile', 'Cross-platform'],
    },
  ];

  const featuredPost = blogPosts.find(post => post.isFeatured);
  const regularPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    <FadeInSection className={cn('w-full max-w-7xl mx-auto px-4', className)}>
      <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-12">
        Latest Articles
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[800px]">
        {/* Featured Post */}
        {featuredPost && (
          <div className="lg:h-full">
            <Link className="group block h-full" href="#">
              <article className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    fill
                    alt={featuredPost.title}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src={generatePlaceholderSVG(0)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="flex gap-2 mb-3">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{featuredPost.description}</p>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>{featuredPost.date}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Regular Posts */}
        <div className="lg:h-full flex flex-col gap-6">
          {regularPosts.map((post, index) => (
            <Link key={index} className="group flex-1" href="#">
              <article className="flex flex-col md:flex-row gap-6 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-4 h-full">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    fill
                    alt={post.title}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src={generatePlaceholderSVG(index + 1)}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};
