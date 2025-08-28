"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Building2,
  Mail,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Home,
  BarChart3,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

// Types
interface Project {
  id: string
  title: string
  location: string
  type: "Residential" | "Commercial" | "Mixed-Use"
  status: "Ongoing" | "Completed"
  description: string
  completion: string
  units: number
  floors: number
  price: string
  progress: number
  image?: string
}

interface Enquiry {
  id: string
  projectId: string
  projectTitle: string
  name: string
  email: string
  phone: string
  message: string
  date: string
  status: "New" | "Contacted" | "Closed"
}

// Sample data
const initialProjects: Project[] = [
  {
    id: "1",
    title: "Skyline Residences",
    location: "Downtown District",
    type: "Residential",
    status: "Ongoing",
    description: "Luxury residential complex with 200 units featuring modern amenities and panoramic city views.",
    completion: "Q2 2025",
    units: 200,
    floors: 25,
    price: "Starting from $450,000",
    progress: 65,
  },
  {
    id: "2",
    title: "Green Valley Mall",
    location: "Suburban Center",
    type: "Commercial",
    status: "Completed",
    description: "State-of-the-art shopping center with sustainable design and premium retail spaces.",
    completion: "Completed 2025",
    units: 150,
    floors: 3,
    price: "Retail spaces from $2,500/sqft",
    progress: 100,
  },
]

const initialEnquiries: Enquiry[] = [
  {
    id: "1",
    projectId: "1",
    projectTitle: "Skyline Residences",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    message: "Interested in a 2-bedroom unit with city view. Please contact me with available options.",
    date: "2025-01-15",
    status: "New",
  },
  {
    id: "2",
    projectId: "2",
    projectTitle: "Green Valley Mall",
    name: "Sarah Johnson",
    email: "sarah@business.com",
    phone: "+1 (555) 987-6543",
    message: "Looking for retail space for my boutique. What are the available sizes and pricing?",
    date: "2025-01-14",
    status: "Contacted",
  },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [enquiries, setEnquiries] = useState<Enquiry[]>(initialEnquiries)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem("admin_projects")
    const savedEnquiries = localStorage.getItem("admin_enquiries")

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
    if (savedEnquiries) {
      setEnquiries(JSON.parse(savedEnquiries))
    }
  }, [])

  // Save data to localStorage
  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects)
    localStorage.setItem("admin_projects", JSON.stringify(newProjects))
  }

  const saveEnquiries = (newEnquiries: Enquiry[]) => {
    setEnquiries(newEnquiries)
    localStorage.setItem("admin_enquiries", JSON.stringify(newEnquiries))
  }

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message })
    setTimeout(() => setAlert(null), 3000)
  }

  const handleDeleteProject = (id: string) => {
    const newProjects = projects.filter((p) => p.id !== id)
    saveProjects(newProjects)
    showAlert("success", "Project deleted successfully")
  }

  const handleUpdateEnquiryStatus = (id: string, status: Enquiry["status"]) => {
    const newEnquiries = enquiries.map((e) => (e.id === id ? { ...e, status } : e))
    saveEnquiries(newEnquiries)
    showAlert("success", "Enquiry status updated")
  }

  const stats = {
    totalProjects: projects.length,
    ongoingProjects: projects.filter((p) => p.status === "Ongoing").length,
    completedProjects: projects.filter((p) => p.status === "Completed").length,
    newEnquiries: enquiries.filter((e) => e.status === "New").length,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Alert */}
      {alert && (
        <div className="fixed top-4 right-4 z-50">
          <Alert variant={alert.type === "error" ? "destructive" : "default"} className="w-80">
            {alert.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">PrimeRealty Admin</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("overview")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={activeTab === "projects" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("projects")}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Projects
              </Button>
              <Button
                variant={activeTab === "enquiries" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("enquiries")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Enquiries
              </Button>
            </nav>
          </div>
          {/* <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div> */}
        </div>
      </header>

      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground">Manage your real estate projects and enquiries</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalProjects}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ongoing Projects</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.ongoingProjects}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedProjects}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Enquiries</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.newEnquiries}</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Latest project updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm text-muted-foreground">{project.location}</p>
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Enquiries</CardTitle>
                  <CardDescription>Latest customer enquiries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enquiries.slice(0, 3).map((enquiry) => (
                    <div key={enquiry.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{enquiry.name}</p>
                        <p className="text-sm text-muted-foreground">{enquiry.projectTitle}</p>
                      </div>
                      <Badge
                        variant={
                          enquiry.status === "New"
                            ? "destructive"
                            : enquiry.status === "Contacted"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {enquiry.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Projects Management</h1>
                <p className="text-muted-foreground">Add, edit, and manage your real estate projects</p>
              </div>
              <Button onClick={() => setIsAddingProject(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {project.title}
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{project.location}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingProject(project)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Type:</span> {project.type}
                      </div>
                      <div>
                        <span className="font-medium">Units:</span> {project.units}
                      </div>
                      <div>
                        <span className="font-medium">Floors:</span> {project.floors}
                      </div>
                      <div>
                        <span className="font-medium">Completion:</span> {project.completion}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                    {project.status === "Ongoing" && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Enquiries Tab */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Customer Enquiries</h1>
              <p className="text-muted-foreground">Manage customer enquiries and follow-ups</p>
            </div>

            <div className="grid gap-4">
              {enquiries.map((enquiry) => (
                <Card key={enquiry.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {enquiry.name}
                          <Badge
                            variant={
                              enquiry.status === "New"
                                ? "destructive"
                                : enquiry.status === "Contacted"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {enquiry.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          Interested in {enquiry.projectTitle} • {enquiry.date}
                        </CardDescription>
                      </div>
                      <Select
                        value={enquiry.status}
                        onValueChange={(value: Enquiry["status"]) => handleUpdateEnquiryStatus(enquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-medium">Email:</span> {enquiry.email}
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span> {enquiry.phone}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Message:</span>
                      <p className="text-muted-foreground mt-1">{enquiry.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Form Dialog */}
      <ProjectFormDialog
        project={editingProject}
        isOpen={!!editingProject || isAddingProject}
        onClose={() => {
          setEditingProject(null)
          setIsAddingProject(false)
        }}
        onSave={(project) => {
          if (editingProject) {
            const newProjects = projects.map((p) => (p.id === project.id ? project : p))
            saveProjects(newProjects)
            showAlert("success", "Project updated successfully")
          } else {
            const newProject = { ...project, id: Date.now().toString() }
            saveProjects([...projects, newProject])
            showAlert("success", "Project added successfully")
          }
          setEditingProject(null)
          setIsAddingProject(false)
        }}
      />
    </div>
  )
}

// Project Form Dialog Component
function ProjectFormDialog({
  project,
  isOpen,
  onClose,
  onSave,
}: {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onSave: (project: Project) => void
}) {
  const [formData, setFormData] = useState<Omit<Project, "id">>({
    title: "",
    location: "",
    type: "Residential",
    status: "Ongoing",
    description: "",
    completion: "",
    units: 0,
    floors: 0,
    price: "",
    progress: 0,
  })

  useEffect(() => {
    if (project) {
      setFormData(project)
    } else {
      setFormData({
        title: "",
        location: "",
        type: "Residential",
        status: "Ongoing",
        description: "",
        completion: "",
        units: 0,
        floors: 0,
        price: "",
        progress: 0,
      })
    }
  }, [project])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ ...formData, id: project?.id || "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
          <DialogDescription>
            {project ? "Update project information" : "Create a new real estate project"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value: Project["type"]) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Mixed-Use">Mixed-Use</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: Project["status"]) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">Units</Label>
              <Input
                id="units"
                type="number"
                value={formData.units}
                onChange={(e) => setFormData({ ...formData, units: Number.parseInt(e.target.value) || 0 })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="floors">Floors</Label>
              <Input
                id="floors"
                type="number"
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: Number.parseInt(e.target.value) || 0 })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Starting from $450,000"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="completion">Completion</Label>
              <Input
                id="completion"
                value={formData.completion}
                onChange={(e) => setFormData({ ...formData, completion: e.target.value })}
                placeholder="Q2 2025"
                required
              />
            </div>
          </div>

          {formData.status === "Ongoing" && (
            <div className="space-y-2">
              <Label htmlFor="progress">Progress (%)</Label>
              <Input
                id="progress"
                type="number"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: Number.parseInt(e.target.value) || 0 })}
              />
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              {project ? "Update Project" : "Add Project"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
