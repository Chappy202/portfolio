import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group relative block overflow-hidden rounded-xl bg-background/50 p-2 transition-all duration-300 hover:bg-background/80 hover:shadow-xl"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          src={project.coverImage}
          alt={project.title}
          className="object-cover transition-all duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="relative z-20 p-4">
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary transition-colors group-hover:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
} 