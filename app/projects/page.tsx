import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform Overhaul",
    description: "Redesigned and optimized a major e-commerce platform, resulting in a 40% increase in conversions.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI-Powered Customer Service Bot",
    description: "Developed an AI chatbot that reduced customer service response times by 60%.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Blockchain Supply Chain Solution",
    description:
      "Implemented a blockchain-based supply chain management system for improved transparency and efficiency.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Ethereum", "Solidity", "Web3.js"],
  },
  {
    title: "Mobile Health Tracking App",
    description: "Created a comprehensive health tracking mobile app with integration to wearable devices.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Projects</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Explore some of our most innovative and impactful projects that have transformed businesses across
            industries.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/20">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

