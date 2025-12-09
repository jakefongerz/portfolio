"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          transform: `translateY(${scrollY * 0.7
          }px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 z-0"
            style={{
              opacity: Math.min(0.6 + scrollY * 0.001, 0.8),
            }}
          />
          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-54 md:h-54 mb-6 overflow-hidden rounded-full border-4 border-primary">
              <Image src="/images/profilePic.jpeg" alt="Profile Picture of Jacob Fonger" fill className="object-cover" priority />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">Jacob Fonger</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
              >
                <Link href="https://github.com/jakefongerz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
              >
                <Link href="https://www.linkedin.com/in/jacob-fonger/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
              >
                <Link href="mailto:jakefonger@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
       
        {/* Projects & Experience Section */}
        <section className="relative py-20 bg-background">

          <div className="container mx-auto px-4 md:px-6 flex items-center">
            <Tabs defaultValue="bio" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="bio">About Me</TabsTrigger>
                <TabsTrigger value="projects">Software Projects</TabsTrigger>
                <TabsTrigger value="experience">Work Experience</TabsTrigger>
              </TabsList>
              {/* Bio Tab */}
              <TabsContent value="bio" className="space-y-6">
              <div>
  <h2 className="text-2xl font-bold mb-4">About Me</h2>
  <p className="text-muted-foreground mb-4">
    I'm Jacob Fonger, a software developer with a focus on building dependable full stack systems. I work most with JavaScript, TypeScript, React, Node, and Python. I enjoy projects that mix clear UX needs with solid backend design. I like working with teams that value clean code, strong documentation, and predictable shipping cycles.
  </p>
  <p className="text-muted-foreground mb-4">
    I earned my BS in Computer Science from Utah State. My background includes web apps, real-time features, database work, and systems that need stable performance. Firefighting shaped how I handle pressure. It taught me how to stay organized, lead when needed, and adapt when plans shift.
  </p>
  <p className="text-muted-foreground mb-4">
   Outside work I stay active. I spend a lot of time on a mountain bike or a snowboard, and I lift weights regularly to keep a steady base for both. I like getting away on backpacking trips and the focus and risk that comes with spelunking and rock climbing. Time outside keeps me balanced and sharp when I’m back at a keyboard.
  </p>
<div className="flex gap-4 align-center">
  <div className="relative w-48 h-48 md:w-54 md:h-54 mb-6 overflow-hidden square-full border-4 border-primary">
    <Image src="/images/spelunking.JPG" alt="Thunder Shower Cave, Utah" fill className="object-cover" priority />
  </div>

  <div className="relative w-48 h-48 md:w-54 md:h-54 mb-6 overflow-hidden square-full border-4 border-primary">
    <Image src="/images/hiking.jpg" alt="Mount Roberts, Alaska" fill className="object-cover" priority />
  </div>

  <div className="relative w-48 h-48 md:w-54 md:h-54 mb-6 overflow-hidden square-full border-4 border-primary">
    <Image src="/images/mtb.JPG" alt="Competing in a Mountain Bike Enduro race (Ely, NV)" fill className="object-cover" priority />
  </div>
  <div className="relative w-48 h-48 md:w-54 md:h-54 mb-6 overflow-hidden square-full border-4 border-primary">
    <Image src="/images/climbing.JPG" alt="Climbing in Garden of the Gods, CO" fill className="object-cover" priority />
  </div>
  
</div>

          
  <h2 className="text-2xl font-bold mb-4">Subcontracting</h2>
  <p className="text-muted-foreground mb-4">
    I take subcontracting work and handle full stack needs across planning, development, and maintenance. I like projects that call for practical solutions, steady communication, and clear ownership.
  </p>

  <h3 className="text-xl font-bold mb-4">Home Renovation and General Contracting</h3>
  <p className="text-muted-foreground mb-4">
    I also work in home renovation and general contracting. I manage projects from start to finish and pay close attention to scope, structure, and quality. I’m open to subcontracting in the Colorado Springs area.
  </p>

  <p className="text-muted-foreground">
    Reach out if you want to talk through a project.
  </p>
</div>

              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <Link href={`/project/${project.id}`} key={project.id} className="group">
                      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={project.image || "/loading.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-100"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                          <div className="flex gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="inline-block px-2 py-1 text-xs rounded-full bg-muted">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              {/* Experience Tab */}
              <TabsContent value="experience" className="space-y-6">
                {jobs.map((job) => (
                  <Link href={`/job/${job.id}`} key={job.id} className="block group">
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="group-hover:text-primary transition-colors">{job.title}</CardTitle>
                            <CardDescription className="text-base">{job.company}</CardDescription>
                          </div>
                          <CardDescription>{job.period}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {job.skills.slice(0, 3).map((skill) => (
                            <span key={skill} className="inline-block px-2 py-1 text-xs rounded-full bg-muted">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-muted/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Jacob Fonger. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="ghost" size="icon">
                  <Link href="https://github.com/jakefongerz" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <Link href="https://linkedin.com/in/jacob-fonger" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <Link href="mailto:jakefonger@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </footer>
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
  },
  {
    id: "2",
    title: "Fong Dong Fitness App",
    description: "Mobile application for tracking workouts.",
    image: "/images/FongDongFitness.png",
    technologies: ["MongoDB", "React", "Express"],
  },
  {
    id: "3",
    title: "Zestimate Challenge",
    description: "This project is based on the Zillow Prize Kaggle competition, where participants aim to improve the accuracy of Zillow's Zestimate® algorithm for predicting home values.",
    image: "/images/ZestimateProject.jpeg",
    technologies: ["Machine Learning", "Data Science", "Express"],
  },
  {
    id: "4",
    title: "Spy Chat",
    description: "A real-time encrypted messaging app using React, TypeScript, Express, and Socket.IO, implementing end-to-end encryption with user-supplied passphrases for secure communication.",
    image: "/images/spyChat.png",
    technologies: ["React", "Socket.io", "TypeScript"],
  },
  {
    id: "5",
    title: "Your Weight In Gold",
    description: "This project consists of a Django-powered API that provides unit conversions and a web app that calculates the worth of a user's weight in gold. It integrates a third-party API (Nasdaq Data Link) to fetch the latest gold prices.",
    image: "/images/weight.png",
    technologies: ["Django", "RESTful API", "Python"],
  },
]

const jobs = [
  {
    id: "0",
    title: "Rock Climbing Instructor",
    company: "Go West Camps",
    period: "Summer 2025",
    description:
      "Instructed children in rock climbing fundamentals, emphasizing safety, techniques, and equipment use.",
    skills: ["Safety briefing", "Team leadership", "Event planning"],
  },
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
      "Directed crew members to safely and efficiently pack, load, and unload consumers\' belongings.",
    skills: ["Leadership", "clinic satisfacyion", "WordPress"],
  }
]

