"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Building, Calendar } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function JobPage() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For this example, we're using the sample data
    const jobId = params.id as string
    const foundJob = jobs.find((j) => j.id === jobId)

    if (foundJob) {
      setJob(foundJob)
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

  if (!job) {
    return (
      <div className="container py-12 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
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

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2">
              <div className="flex items-center text-muted-foreground">
                <Building className="mr-2 h-4 w-4" />
                {job.company}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {job.period}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill: string) => (
              <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg">{job.description}</p>

            <h2>Responsibilities</h2>
            <ul>
              <li>Developed and maintained web applications using {job.skills.join(", ")}.</li>
              <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
              <li>Ensured the technical feasibility of UI/UX designs.</li>
              <li>Optimized applications for maximum speed and scalability.</li>
              <li>Participated in code reviews and mentored junior developers.</li>
            </ul>

            <h2>Achievements</h2>
            <ul>
              <li>Improved application performance by 40% through code optimization and refactoring.</li>
              <li>Led the migration from legacy systems to modern technology stack.</li>
              <li>Implemented automated testing that reduced bugs in production by 30%.</li>
              <li>Developed reusable component library that accelerated development across multiple projects.</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Key Projects</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Project 1: Redesigned the company's flagship product</li>
                  <li>Project 2: Built internal tools for team productivity</li>
                  <li>Project 3: Implemented new authentication system</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Technologies Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {job.skills.map((skill: string) => (
                    <li key={skill}>{skill}</li>
                  ))}
                  <li>Git & GitHub</li>
                  <li>Agile/Scrum methodology</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
const jobs = [
  {
    id: "1",
    title: "Seasonal Wildland Firefighter",
    company: "Elko County Fire Protection District",
    period: "2023 - 2024",
    description:
      "Developed and communicated effective fire suppression tactics, ensuring proper execution by the crew and adjoining forces in high-risk situations.",
    skills: ["Wildland fire suppression", "Firstaid", "Incident command"],
  },
  {
    id: "2",
    title: "Package Handler",
    company: "FedEx Ground",
    period: "2022 - 2024",
    description:
      "Worked with heavy machinery and recording devices to handle and track packages.",
    skills: ["Team building", "Problem solving", "Time management"],
  },
  {
    id: "3",
    title: "Crew Lead",
    company: "All My Sons Moving & Storage",
    period: "2021 - 2021",
    description:
      "Directed crew members to safely and efficiently pack, load, and unload consumers’ belongings.",
    skills: ["Leadership", "clinic satisfacyion", "WordPress"],
  },
  {
    id: "4",
    title: "Junior Developer",
    company: "Startup Ventures",
    period: "2014 - 2016",
    description:
      "Assisted in building MVPs for early-stage startups, working across the full stack to deliver functional prototypes.",
    skills: ["PHP", "jQuery", "MySQL"],
  }
]
