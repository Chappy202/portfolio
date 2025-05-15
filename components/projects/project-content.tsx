'use client'

import { Project } from '@/types/project'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '@/mdx-components'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Calendar, Clock, Tag } from 'lucide-react'

interface ProjectContentProps {
  project: Project
  serializedContent: MDXRemoteSerializeResult
}

export function ProjectContent({ project, serializedContent }: ProjectContentProps) {
  const components = useMDXComponents({})
  const readingTime = Math.ceil(project.content.split(/\s+/).length / 200) // Assuming 200 words per minute

  return (
    <>
      <ScrollProgress />
      <article className="relative mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />
        </div>

        {/* Header Section */}
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={project.publishedAt}>
                {new Date(project.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>{project.tags.length} technologies</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className={cn(
          "prose prose-lg dark:prose-invert max-w-none",
          "prose-headings:scroll-mt-32 prose-headings:font-bold prose-headings:tracking-tight",
          "prose-h2:text-3xl prose-h3:text-2xl",
          "prose-p:text-muted-foreground prose-p:leading-relaxed",
          "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
          "prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground",
          "prose-code:text-primary prose-code:font-normal",
          "prose-pre:bg-muted prose-pre:shadow-sm",
          "prose-img:rounded-lg prose-img:shadow-md prose-img:transition-all hover:prose-img:shadow-lg",
          "prose-hr:border-muted-foreground/20"
        )}>
          <Suspense fallback={
            <div className="flex h-32 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          }>
            <MDXRemote {...serializedContent} components={components} />
          </Suspense>
        </div>
      </article>
    </>
  )
} 