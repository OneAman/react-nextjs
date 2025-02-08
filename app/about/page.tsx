import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Mulecom Solutions</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Mulecom Solutions is a cutting-edge IT company dedicated to empowering businesses through innovative
                technology solutions. Founded in 2020, we've quickly established ourselves as a leader in digital
                transformation.
              </p>
              <p className="text-lg mb-6">
                Our team of expert developers, designers, and strategists work tirelessly to deliver custom solutions
                that drive growth and efficiency for our clients across various industries.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Our Team
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Mulecom team" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Constantly pushing the boundaries of what's possible in tech" },
              { title: "Collaboration", description: "Working closely with our clients to ensure their success" },
              { title: "Excellence", description: "Delivering high-quality solutions that exceed expectations" },
            ].map((value, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

