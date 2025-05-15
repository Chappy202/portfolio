import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
        <Image
          src={project.coverImage}
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
} 