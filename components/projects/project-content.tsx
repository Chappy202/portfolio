'use client'

import { Project } from '@/types/project'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '@/mdx-components'
import { Suspense } from 'react'

interface ProjectContentProps {
  project: Project
  serializedContent: MDXRemoteSerializeResult
}

export function ProjectContent({ project, serializedContent }: ProjectContentProps) {
  const components = useMDXComponents({})

  return (
    <article className="container py-8 md:py-10 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <Suspense fallback={<div>Loading content...</div>}>
          <MDXRemote {...serializedContent} components={components} />
        </Suspense>
      </div>
    </article>
  )
} 