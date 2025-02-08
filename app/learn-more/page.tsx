import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Learn More About Mulecom</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At Mulecom Solutions, we're passionate about leveraging technology to drive business growth and
              innovation. Our team of experts is dedicated to providing cutting-edge IT solutions that empower
              organizations to thrive in the digital age.
            </p>
            <p className="text-lg mb-6">
              Whether you're a startup looking to disrupt your industry or an established enterprise seeking digital
              transformation, we have the expertise and experience to guide you every step of the way.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Mulecom?</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Innovative solutions tailored to your unique needs</li>
              <li>Expert team with diverse industry experience</li>
              <li>Commitment to staying ahead of the latest tech trends</li>
              <li>Proven track record of successful projects</li>
              <li>Dedicated support throughout your digital journey</li>
            </ul>
            <p className="text-lg mb-8">
              Ready to take your business to the next level? Explore our services or get in touch with us to discuss how
              we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/20"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

