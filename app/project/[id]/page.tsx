"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default  function ProjectPage() {
  const params =  useParams()
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
          <p>{project.details || "Please See Git Repo for more information"}</p>
        </div>

      </div>
    </div>
  )
}

const projects = [
  {
    id: "1",
    title: "AnteAI: Poker Tutor",
    description: "Developed an interactive AI-powered poker tutor using Python and OpenAI’s API to teach foundational concepts such as hand rankings and strategy.",
    image: "/images/AnteAILogo.png",
    technologies: ["Artifial Intelligence", "Command-line", "OpenAI API"],
    link: "https://github.com/jakefongerz/AnteAI",
    details: "AnteAI helps beginners learn how to think through their decisions in poker. This prototype runs in the command line with a simple user interface. Poker is a game of skill, requiring an understanding of probability, game theory, and psychology. Many beginners struggle to make optimal decisions because they lack feedback on their gameplay. AnteAI aims to give players that crucial feedback. AnteAI has 3 set lessons: Poker Basics & Rules, Starting Hand Selection, and Pot Odds & Equity. Each lesson is broken down into sub lessons that incorporate both multiple choice questions and open ended questions. Outside of the lessons, AnteAI has practice scenarios to help with in-game decisions and SideKick for asking AnteAI questions about poker. "
  },
  {
    id: "2",
    title: "Fong Dong Fitness App",
    description: "Mobile application for tracking workouts.",
    image: "/images/FongDongFitness.png",
    technologies: ["MongoDB", "React", "Express"],
    link: "https://github.com/jakefongerz/FongDong",
    details: ""
  },
  {
    id: "3",
    title: "Zestimate Challenge",
    description: "This project is based on the Zillow Prize Kaggle competition, where participants aim to improve the accuracy of Zillow's Zestimate® algorithm for predicting home values.",
    image: "/images/ZestimateProject.jpeg",
    technologies: ["Machine Learning", "Data Science", "Express"],
    link: "https://github.com/EthanDGee/ZillowZestimateErrorPrediction",
    details: ""
  },
  {
    id: "4",
    title: "Spy Chat",
    description: "A real-time encrypted messaging app using React, TypeScript, Express, and Socket.IO, implementing end-to-end encryption with user-supplied passphrases for secure communication.",
    image: "/images/spyChat.png",
    technologies: ["React", "Socket.io", "TypeScript"],
    link: "https://github.com/jakefongerz/spyChat",
    details: "Messages are encrypted with a passphrase before being sent, and recipients must enter the correct passphrase to decrypt and read them. Without the correct passphrase, messages remain unreadable!",
  },
  {
    id: "5",
    title: "Your Weight In Gold",
    description: "This project consists of a Django-powered API that provides unit conversions and a web app that calculates the worth of a user's weight in gold. It integrates a third-party API (Nasdaq Data Link) to fetch the latest gold prices.",
    image: "/images/weight.png",
    technologies: ["Django", "RESTful API", "Python"],
    link: "https://github.com/jakefongerz/weightInGold",
    details: "",
  },
]

