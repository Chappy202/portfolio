'use client'

import { useMDXComponents } from '@/mdx-components'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({})

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
} 