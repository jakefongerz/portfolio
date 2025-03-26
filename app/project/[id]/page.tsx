"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { link } from "fs"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For this example, we're using the sample data
    const projectId = params.id as string
    const foundProject = projects.find((p) => p.id === projectId)

    if (foundProject) {
      setProject(foundProject)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container py-12 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <Button variant="ghost" className="mb-8" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={project.image || "/loading.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button asChild>
            </Button>
            <Button variant="outline" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-bold">Project Details</h2>

        <div className="prose max-w-none dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>
          <p>
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed
            euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>
          <h3>Challenges</h3>
          <ul>
            <li>Challenge 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Challenge 2: Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.</li>
            <li>Challenge 3: Eget aliquam nisl nisl sit amet nisl.</li>
          </ul>
          <h3>Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-2">Key Feature 1</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-2">Key Feature 2</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-2">Key Feature 3</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    id: "1",
    title: "AnteAI: Poker Tutor",
    description: "A full-featured online store with payment processing and inventory management",
    image: "/images/AnteAILogo.png",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/jakefongerz/AnteAI",
  },
  {
    id: "2",
    title: "MARCO KING: Nutrition Tracker",
    description: "Mobile application for tracking workouts, nutrition, and health metrics",
    image: "/images/MacoKing.jpeg",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/jakefongerz/macroKing",
  },
  {
    id: "3",
    title: "Zestimate Challenge",
    description: "Interactive dashboard for visualizing and analyzing financial data",
    image: "/images/ZestimateProject.jpeg",
    technologies: ["Vue.js", "D3.js", "Express"],
    link: "https://github.com/EthanDGee/ZillowZestimateErrorPrediction"
  },
  {
    id: "4",
    title: "jodi",
    description: "This is not mine, just a placeholder",
    image: "/images/project4.jpg",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
    link: "https://wwwwwwwww.jodi.org/"
    
  }
]

