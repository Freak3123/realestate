import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Phone, Mail, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "Downtown District",
    type: "Residential",
    status: "Ongoing",
    image: "/placeholder-ll1hv.png",
    description: "Luxury residential complex with 200 units featuring modern amenities and panoramic city views.",
    completion: "Q2 2025",
  },
  {
    id: 2,
    title: "Green Valley Mall",
    location: "Suburban Center",
    type: "Commercial",
    status: "Completed",
    image: "/modern-shopping-mall.png",
    description: "State-of-the-art shopping center with sustainable design and premium retail spaces.",
    completion: "Completed 2024",
  },
  {
    id: 3,
    title: "Oceanview Towers",
    location: "Coastal Area",
    type: "Mixed-Use",
    status: "Ongoing",
    image: "/coastal-towers-mixed-use.png",
    description: "Mixed-use development combining residential, commercial, and recreational facilities.",
    completion: "Q4 2025",
  },
]

const stats = [
  { icon: Building2, label: "Projects Completed", value: "150+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: TrendingUp, label: "Years Experience", value: "15+" },
]

const services = [
  {
    title: "Residential Development",
    description:
      "Creating modern living spaces that combine comfort, style, and functionality for families and individuals.",
    icon: Building2,
  },
  {
    title: "Commercial Projects",
    description: "Developing innovative commercial spaces that drive business growth and community engagement.",
    icon: TrendingUp,
  },
  {
    title: "Mixed-Use Development",
    description: "Integrating residential, commercial, and recreational spaces for vibrant community living.",
    icon: Users,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">PrimeRealty</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Building Tomorrow's Communities
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transforming Visions Into
                  <span className="text-primary"> Reality</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We create exceptional residential and commercial spaces that enhance communities and exceed
                  expectations. From concept to completion, we deliver excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  View Our Projects
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-real-estate-rendering.png"
                alt="Modern real estate development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 mx-auto mb-4 opacity-90" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest developments that showcase innovation, quality, and attention to detail in every
              project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="absolute top-4 left-4"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{project.completion}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">What We Do Best</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential complexes to commercial developments, we bring expertise and innovation to every project
              type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-primary-foreground/90">
            Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">PrimeRealty</span>
              </div>
              <p className="text-muted-foreground">
                Building exceptional spaces that enhance communities and exceed expectations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Residential Development</p>
                <p className="text-muted-foreground">Commercial Projects</p>
                <p className="text-muted-foreground">Mixed-Use Development</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@primerealty.com
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  123 Business District, City
                </p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PrimeRealty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
