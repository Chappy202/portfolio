import { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/project-card'
import { getProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'A showcase of my projects and work',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container py-8 md:py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
} 