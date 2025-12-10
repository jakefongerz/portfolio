"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bold, Building, Calendar } from "lucide-react"
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

            <h2 className="text-xl font-semibold mt-6 mb-2">Responsibilities</h2>
            <ul>
              {job.responsibilities.map((resp: string, index: number) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>

          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <img src={job.image} alt={job.title} className="rounded-md" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Skills</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {job.skills.map((skill: string) => (
                    <li key={skill}>{skill}</li>
                  ))}
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
    id: "0",
    title: "Rock Climbing and Mountain biking Instructor",
    company: "Go West Camps",
    period: "Summer 2025",
    description:
      "Instructed children in rock climbing fundamentals, emphasizing safety, techniques, and equipment use.",
    skills: ["Safety briefing", "Team leadership", "Event planning"],
    responsibilities: ["Developed and delivered rock climbing and mountain biking safety training for staff, resulting in 100% incident-free sessions.", "Led and supervised groups of up to 15 children in rock climbing and mountain biking activities, ensuring safety and engagement."],
    image: "../images/instructor.JPG",
  },
  {
    id: "1",
    title: "Seasonal Wildland Firefighter",
    company: "Elko County Fire Protection District",
    period: "2023 - 2024",
    description:
      "Developed and communicated effective fire suppression tactics, ensuring proper execution by the crew and adjoining forces in high-risk situations.",
    skills: ["Wildland fire suppression", "Firstaid", "Incident command"],
    responsibilities: ["Executed fire suppression tactics in high-risk situations, ensuring crew safety and effective fire containment.", "Communicated effectively with team members and command staff to coordinate firefighting efforts.", "Maintained physical fitness and readiness to perform demanding tasks in challenging environments."],
    image: "../images/firefighter.jpeg",
  },
  {
    id: "2",
    title: "Package Handler",
    company: "FedEx Ground",
    period: "2022 - 2024",
    description:
      "Worked with heavy machinery and recording devices to handle and track packages.",
    skills: ["Team building", "Problem solving", "Time management"],
    responsibilities: ["Operated heavy machinery to load and unload packages efficiently and safely.", "Utilized tracking devices to ensure accurate package handling and delivery.", "Collaborated with team members to meet daily operational goals and deadlines."],
    image: "../images/fedex.png",
  },
  {
    id: "3",
    title: "Crew Lead",
    company: "All My Sons Moving & Storage",
    period: "2021 - 2021",
    description:
      "Directed crew members to safely and efficiently pack, load, and unload consumers belongings.",
    skills: ["Leadership", "Client satisfaction", "Logistics"],
    responsibilities: ["Led a team of movers to ensure efficient and safe packing, loading, and unloading of customer belongings.", "Coordinated logistics and scheduling to optimize moving operations and customer satisfaction.", "Provided training and support to crew members to enhance performance and teamwork."],
    image: "../images/AMS.jpeg",
  }
]
