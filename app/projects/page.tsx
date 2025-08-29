"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Home,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Geeta Residency",
    location:
      "Geeta Residency, Sahadevkhunta ,Near Chandmari field. In front of Biswswar shiva temple.",
    type: "Residential",
    status: "Ongoing",
    image: "/project1.jpg",
    description: "3BHK Premium Residences, Luxury Limited Apartments.",
    completion: "Q2 2025",
    bhk: 3,
    amenities: [
      "Lift",
      "Lobby",
      "24/7 Security",
    ],
    price: "Starting from $450,000",
    progress: 65,
  },

  // {
  //   id: 1,
  //   title: "Skyline Residences",
  //   location: "Downtown District",
  //   type: "Residential",
  //   status: "Ongoing",
  //   image: "/placeholder.svg?height=300&width=400&text=Skyline+Residences",
  //   description: "Luxury residential complex with 200 units featuring modern amenities and panoramic city views.",
  //   completion: "Q2 2025",
  //   units: 200,
  //   floors: 25,
  //   amenities: ["Swimming Pool", "Gym", "Rooftop Garden", "Parking", "24/7 Security"],
  //   price: "Starting from $450,000",
  //   progress: 65,
  // },
  {
    id: 2,
    title: "Green Valley Mall",
    location: "Suburban Center",
    type: "Commercial",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400&text=Green+Valley+Mall",
    description:
      "State-of-the-art shopping center with sustainable design and premium retail spaces.",
    completion: "Completed 2025",
    bhk: 1,
    floors: 3,
    amenities: [
      "Food Court",
      "Cinema",
      "Parking",
      "Green Spaces",
      "EV Charging",
    ],
    price: "Retail spaces from $2,500/sqft",
    progress: 100,
  },
  // {
  //   id: 3,
  //   title: "Oceanview Towers",
  //   location: "Coastal Area",
  //   type: "Mixed-Use",
  //   status: "Ongoing",
  //   image: "/placeholder.svg?height=300&width=400&text=Oceanview+Towers",
  //   description: "Mixed-use development combining residential, commercial, and recreational facilities.",
  //   completion: "Q4 2025",
  //   units: 300,
  //   floors: 35,
  //   amenities: ["Beach Access", "Marina", "Shopping", "Restaurants", "Spa"],
  //   price: "Starting from $650,000",
  //   progress: 40,
  // },
  // {
  //   id: 4,
  //   title: "Tech Hub Plaza",
  //   location: "Business District",
  //   type: "Commercial",
  //   status: "Ongoing",
  //   image: "/placeholder.svg?height=300&width=400&text=Tech+Hub+Plaza",
  //   description: "Modern office complex designed for tech companies with flexible workspaces.",
  //   completion: "Q1 2026",
  //   units: 50,
  //   floors: 20,
  //   amenities: ["Co-working Spaces", "Conference Rooms", "Cafeteria", "Parking", "Fiber Internet"],
  //   price: "Office spaces from $35/sqft/month",
  //   progress: 25,
  // },
  {
    id: 5,
    title: "Heritage Gardens",
    location: "Historic Quarter",
    type: "Residential",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400&text=Heritage+Gardens",
    description:
      "Boutique residential development preserving historic architecture with modern interiors.",
    completion: "Completed 2023",
    bhk: 2,
    floors: 8,
    amenities: [
      "Historic Courtyard",
      "Library",
      "Garden",
      "Concierge",
      "Wine Cellar",
    ],
    price: "Starting from $550,000",
    progress: 100,
  },
  // {
  //   id: 6,
  //   title: "Riverside Commons",
  //   location: "Waterfront",
  //   type: "Mixed-Use",
  //   status: "Ongoing",
  //   image: "/placeholder.svg?height=300&width=400&text=Riverside+Commons",
  //   description: "Waterfront development with residential units, retail spaces, and public promenade.",
  //   completion: "Q3 2025",
  //   units: 180,
  //   floors: 15,
  //   amenities: ["Waterfront Promenade", "Boat Dock", "Retail Spaces", "Park", "Cycling Path"],
  //   price: "Starting from $520,000",
  //   progress: 55,
  // },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  const ongoingProjects = projects.filter((p) => p.status === "Ongoing");
  const completedProjects = projects.filter((p) => p.status === "Completed");

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Enquiry submitted:", {
      project: selectedProject?.title,
      ...enquiryForm,
    });
    // Reset form
    setEnquiryForm({ name: "", email: "", phone: "", message: "" });
    // Close dialog
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PrimeRealty Logo"
                width={180}
                height={180}
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Badge variant="secondary">Our Portfolio</Badge>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore our comprehensive portfolio of residential, commercial,
              and mixed-use developments. Each project represents our commitment
              to quality, innovation, and community enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onEnquiry={setSelectedProject}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Ongoing Projects
                </h2>
                <p className="text-muted-foreground">
                  Currently under development
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoingProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onEnquiry={setSelectedProject}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Completed Projects
                </h2>
                <p className="text-muted-foreground">
                  Successfully delivered developments
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onEnquiry={setSelectedProject}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Enquire About {selectedProject?.title}</DialogTitle>
            <DialogDescription>
              Get more information about this project and schedule a
              consultation with our team.
            </DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Project Summary */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {selectedProject.location}
                  </span>
                  <Badge variant="outline" className="ml-auto">
                    {selectedProject.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{selectedProject.price}</span>
                  <span className="text-muted-foreground">
                    {selectedProject.completion}
                  </span>
                </div>
              </div>

              {/* Enquiry Form */}
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input
                      required
                      value={enquiryForm.name}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, name: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      required
                      type="tel"
                      value={enquiryForm.phone}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    required
                    type="email"
                    value={enquiryForm.email}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    value={enquiryForm.message}
                    onChange={(e) =>
                      setEnquiryForm({
                        ...enquiryForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your requirements, preferred unit size, budget, or any specific questions..."
                    rows={4}
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Enquiry
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
                Building exceptional spaces that enhance communities and exceed
                expectations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
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
            <p>&copy; 2025 PrimeRealty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  onEnquiry,
}: {
  project: (typeof projects)[0];
  onEnquiry: (project: (typeof projects)[0]) => void;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-[480] object-contain"
        />
        <Badge
          variant={project.status === "Completed" ? "default" : "secondary"}
          className="absolute top-4 left-4"
        >
          {project.status}
        </Badge>
        {/* {project.status === "Ongoing" && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-background/90 backdrop-blur rounded p-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
          </div>
        )} */}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge variant="outline">{project.type}</Badge>
        </div>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-8 w-8" />
          <div>{project.location}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-muted-foreground" />
            <span>{project.bhk} BHK</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span>{project.floors} floors</span>
          </div> */}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Key Amenities:</p>
          <div className="flex flex-wrap gap-1">
            {project.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {project.amenities.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="space-y-1">
            <p className="text-sm font-medium text-primary">{project.price}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {project.completion}
            </p>
          </div>
          <Button onClick={() => onEnquiry(project)} size="sm">
            Enquire Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
