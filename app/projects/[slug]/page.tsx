import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { ProjectContent } from '@/components/projects/project-content'
import { PasswordProtected } from '@/components/ui/password-protected'
import { serialize } from 'next-mdx-remote/serialize'
import { draftMode } from 'next/headers'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

// Only generate static params for non-protected content
export async function generateStaticParams() {
  const projects = await getProjects()
  return projects
    .filter(project => !project.protected)
    .map((project) => ({
      slug: project.slug,
    }))
}

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const serializedContent = await serialize(project.content)

  if (project.protected) {
    return (
      <PasswordProtected password="franklin2024">
        <ProjectContent project={project} serializedContent={serializedContent} />
      </PasswordProtected>
    )
  }

  return <ProjectContent project={project} serializedContent={serializedContent} />
} 