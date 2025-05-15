"use client"

import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { useState, useRef, useEffect, createContext, useContext } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

// Create a context for managing image sources
const ImageGalleryContext = createContext<{
  imageSources: string[]
  addImageSource: (src: string) => void
}>({
  imageSources: [],
  addImageSource: () => {},
})

// Provider component for the image gallery
function ImageGalleryProvider({ children }: { children: React.ReactNode }) {
  const [imageSources, setImageSources] = useState<string[]>([])

  const addImageSource = (src: string) => {
    setImageSources((prev) => {
      if (!prev.includes(src)) {
        return [...prev, src]
      }
      return prev
    })
  }

  return (
    <ImageGalleryContext.Provider value={{ imageSources, addImageSource }}>
      {children}
    </ImageGalleryContext.Provider>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: ({ src, alt, ...props }) => {
      const [open, setOpen] = useState(false)
      const { imageSources, addImageSource } = useContext(ImageGalleryContext)
      
      useEffect(() => {
        if (src) {
          addImageSource(src as string)
        }
      }, [src, addImageSource])

      const currentIndex = src ? imageSources.indexOf(src as string) : 0

      return (
        <div className="mdx-image-wrapper">
          <div
            className="relative w-full my-8 cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setOpen(true)}
          >
            <img
              className="w-full h-auto rounded-lg"
              src={src as string}
              alt={alt || 'Project image'}
              loading="lazy"
              {...props}
            />
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={imageSources.map(src => ({ src }))}
            plugins={[Zoom]}
            index={currentIndex}
          />
        </div>
      )
    },
    wrapper: ({ children }) => (
      <ImageGalleryProvider>
        <div className="mdx-wrapper">{children}</div>
      </ImageGalleryProvider>
    ),
    h1: (props) => (
      <div className="mdx-h1">
        <h1 className="text-4xl font-bold mb-4" {...props} />
      </div>
    ),
    h2: (props) => (
      <div className="mdx-h2">
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground" {...props} />
      </div>
    ),
    h3: (props) => (
      <div className="mdx-h3">
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />
      </div>
    ),
    p: (props) => (
      <div className="mdx-paragraph">
        <p className="text-lg leading-relaxed mb-6 text-muted-foreground" {...props} />
      </div>
    ),
    ul: (props) => (
      <div className="mdx-list">
        <ul className="list-inside list-disc pl-4 mb-6 space-y-2" {...props} />
      </div>
    ),
    li: (props) => (
      <div className="mdx-list-item">
        <li className="text-lg text-muted-foreground ml-2" {...props} />
      </div>
    ),
    a: ({ href, ...props }) => (
      <div className="mdx-link">
        <Link
          href={href || '#'}
          className="text-primary hover:underline"
          {...props}
        />
      </div>
    ),
    blockquote: (props) => (
      <div className="mdx-blockquote">
        <blockquote
          className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
          {...props}
        />
      </div>
    ),
    code: (props) => (
      <div className="mdx-code">
        <code
          className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono"
          {...props}
        />
      </div>
    ),
    pre: (props) => (
      <div className="mdx-pre">
        <pre
          className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-sm"
          {...props}
        />
      </div>
    ),
  }
} 