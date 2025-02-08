import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our projects, learn more about us, or get in touch to start your digital transformation journey.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/20">
              <Link href="/about">
                Learn About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/20">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

