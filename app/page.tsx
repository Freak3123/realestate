import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCounter } from "@/components/animated-counter";
import { HeroCarousel } from "@/components/hero-carousel";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "Downtown District",
    type: "Residential",
    status: "Ongoing",
    image: "/placeholder-ll1hv.png",
    description:
      "Luxury residential complex with 200 units featuring modern amenities and panoramic city views.",
    completion: "Q2 2025",
  },
  {
    id: 2,
    title: "Green Valley Mall",
    location: "Suburban Center",
    type: "Commercial",
    status: "Completed",
    image: "/modern-shopping-mall.png",
    description:
      "State-of-the-art shopping center with sustainable design and premium retail spaces.",
    completion: "Completed 2025",
  },
  {
    id: 3,
    title: "Oceanview Towers",
    location: "Coastal Area",
    type: "Mixed-Use",
    status: "Ongoing",
    image: "/coastal-towers-mixed-use.png",
    description:
      "Mixed-use development combining residential, commercial, and recreational facilities.",
    completion: "Q4 2025",
  },
];

const stats = [
  { icon: Building2, label: "Projects Completed", value: "150+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: TrendingUp, label: "Years Experience", value: "15+" },
];

const values = [
  {
    title: "Integrity & Transparency",
    description:
      "We believe trust is the foundation of long-term partnerships.",
    icon: Building2, 
  },
  {
    title: "Quality First",
    description:
      "Every project is delivered with precision, safety, and durability.",
    icon: TrendingUp, 
  },
  {
    title: "Innovation & Sustainability",
    description: "We embrace modern technologies and eco-friendly practices.",
    icon: Users,
  },
  {
    title: "Community Impact",
    description: "Our work is designed to uplift communities and create lasting value.",
    icon: Award,
  },
]

// const services = [
//   {
//     title: "Residential Development",
//     description:
//       "Creating modern living spaces that combine comfort, style, and functionality for families and individuals.",
//     icon: Building2,
//   },
//   {
//     title: "Commercial Projects",
//     description:
//       "Developing innovative commercial spaces that drive business growth and community engagement.",
//     icon: TrendingUp,
//   },
//   {
//     title: "Mixed-Use Development",
//     description:
//       "Integrating residential, commercial, and recreational spaces for vibrant community living.",
//     icon: Users,
//   },
// ];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
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
              <Image
                src="/modern-real-estate-rendering.png"
                alt="Modern real estate development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section> */}
      <HeroCarousel />

      {/* Stats Section */}
      <AnimatedSection className="py-12 bg-primary text-primary-foreground">
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
      </AnimatedSection>

      {/* About us */}
      <AnimatedSection className="py-14 bg-muted/30">
        <div className="md:flex justify-between items-center gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Journey of Transformation
            </h2>
            <p className="text-xl text-muted-foreground mx-auto">
              Our journey began in 2022, when we incorporated the company in
              Odisha with a vision to redefine infrastructure consulting. By
              2023, we had taken on our first major consulting assignments
              across residential and commercial projects, marking an important
              milestone in our growth. In 2024, we expanded our services to
              offer complete project management and execution support,
              strengthening our role as a trusted partner in the real estate
              sector. The year 2025 saw us diversifying into civil
              infrastructure projects and extending our regional presence,
              further solidifying our commitment to building lasting value for
              our clients and communities.
            </p>
            <Button size="lg" variant="default" className="text-lg px-8 w-fit">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
          </div>
          <div className="w-[250vw] h-full my-10">
            <Image
              src={"Construction.svg"}
              alt="construction image"
              height={1500}
              width={1000}
              className="lg:h-full md:block hidden"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Discover our latest developments that showcase innovation,
              quality, and attention to detail in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
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
                    <span className="text-sm font-medium">
                      {project.completion}
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 text-foreground">
            <Button size="lg" variant="outline" className="bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/25">
              View All Projects
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we
              undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
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
      </AnimatedSection>

      {/* Services Section */}
      {/* <AnimatedSection className="py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential complexes to commercial developments, we bring
              expertise and innovation to every project type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
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
      </AnimatedSection> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Let's discuss how we can bring your vision to life with our
            expertise and commitment to excellence.
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
    </div>
  );
}
