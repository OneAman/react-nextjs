import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Shield, Zap, Smartphone, Database } from "lucide-react"

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs",
    icon: Code,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your enterprise",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security measures",
    icon: Shield,
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of AI to drive innovation",
    icon: Zap,
  },
  {
    title: "Mobile App Development",
    description: "Create stunning, high-performance mobile applications",
    icon: Smartphone,
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights",
    icon: Database,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Discover how Mulecom Solutions can transform your business with our comprehensive range of IT services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

