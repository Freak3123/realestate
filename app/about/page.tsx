import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Phone, Mail, Users, Award, TrendingUp, ArrowLeft, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    bio: "With over 20 years in real estate development, Sarah founded PrimeRealty with a vision to create sustainable, community-focused developments.",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Chief Architect",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
    bio: "Award-winning architect specializing in sustainable design and innovative urban planning solutions.",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Project Director",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
    bio: "Expert in project management with a track record of delivering complex developments on time and within budget.",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Head of Sales",
    image: "/placeholder.svg?height=300&width=300&text=David+Thompson",
    bio: "Seasoned real estate professional with deep market knowledge and commitment to client satisfaction.",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Sustainability Officer",
    image: "/placeholder.svg?height=300&width=300&text=Lisa+Park",
    bio: "Environmental engineer focused on implementing green building practices and sustainable development strategies.",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Finance Director",
    image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
    bio: "Financial expert with extensive experience in real estate investment and development financing.",
    linkedin: "#",
    twitter: "#",
  },
]

const values = [
  {
    title: "Quality Excellence",
    description:
      "We never compromise on quality, ensuring every project meets the highest standards of construction and design.",
    icon: Award,
  },
  {
    title: "Community Focus",
    description:
      "Our developments are designed to enhance communities and create lasting positive impact for residents.",
    icon: Users,
  },
  {
    title: "Sustainable Development",
    description: "We prioritize environmental responsibility and sustainable practices in all our projects.",
    icon: TrendingUp,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and innovative approaches to create better living and working spaces.",
    icon: Building2,
  },
]

const milestones = [
  { year: "2009", event: "PrimeRealty founded with first residential project" },
  { year: "2012", event: "Completed first major commercial development" },
  { year: "2015", event: "Expanded to mixed-use developments" },
  { year: "2018", event: "Achieved LEED certification for sustainable building" },
  { year: "2020", event: "Launched affordable housing initiative" },
  { year: "2022", event: "Reached 100 completed projects milestone" },
  { year: "2025", event: "Opened new regional office and expanded team" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">


      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Badge variant="secondary">About Us</Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Building Dreams, Creating Communities</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, PrimeRealty has been at the forefront of innovative real estate development, creating
                exceptional spaces that enhance communities and exceed expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Company+Building"
                alt="PrimeRealty headquarters"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">From Vision to Reality</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by Sarah Johnson, PrimeRealty began with a simple yet powerful vision: to create
                  developments that don't just provide shelter or workspace, but truly enhance the communities they
                  serve.
                </p>
                <p>
                  What started as a small team with big dreams has grown into a leading real estate development company,
                  known for our commitment to quality, sustainability, and community impact. We've successfully
                  completed over 150 projects, ranging from luxury residential complexes to innovative commercial
                  spaces.
                </p>
                <p>
                  Today, we continue to push boundaries in design, sustainability, and community development, always
                  staying true to our core mission of building exceptional spaces that stand the test of time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Company Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet the Experts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of professionals brings together decades of experience in real estate development,
              architecture, and project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={member.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={member.twitter}>
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <Building2 className="h-8 w-8 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold">150+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <Award className="h-8 w-8 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold">25+</div>
              <div className="text-primary-foreground/80">Awards Won</div>
            </div>
            <div className="text-center space-y-2">
              <TrendingUp className="h-8 w-8 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground">
            Whether you're looking to invest, partner, or find your dream property, we're here to help make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
