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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
} from "lucide-react";
import Link from "next/link";
import axios from "axios";

import { supabase } from "../lib/supabaseClient";
import { set } from "mongoose";
import LoaderComp from "./LoaderComp";
import { useRouter } from "next/navigation";

// Types
interface Project {
  _id: string;
  title: string;
  location: string;
  type: "Residential" | "Commercial" | "Mixed-Use";
  status: "Ongoing" | "Completed";
  description: string;
  completion: string;
  bhk: string;
  floors: number;
  price: string;
  progress: number;
  image?: string;
  images?: string[];
  amenities?: string[];
  featured: boolean;
  shortdesc: string;
}

interface Enquiry {
  _id: string;
  projectTitle: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}



export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [projects, setProjects] = useState<Project[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/admin/save-proj");
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const fetchEnquiries = async () => {
      try {
        const response = await axios.get("/api/admin/enquiries");
        if (response.data.success) {
          setEnquiries(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };
    fetchEnquiries();
    fetchProjects();

    setIsLoading(false);
        
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderComp />
      </div>
    );}

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleDeleteProject = async (id: string) => {
    try{
      const res= await axios.delete(`/api/admin/save-proj?id=${id}`);
      if (res.status===200){
        const newProjects = projects.filter((p) => p._id !== id);
        setProjects(newProjects);
        showAlert("success", "Project deleted successfully");
      }

    }catch(err){
      console.log(err)
      showAlert("error", "Error deleting project");
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    try{

      const res= await axios.delete(`/api/admin/enquiries?id=${id}`);
      if (res.status===200){
        const newEnquiries = enquiries.filter((e) => e._id !== id);
        setEnquiries(newEnquiries);
        showAlert("success", "Enquiry deleted successfully");
      }
    }catch(err){
      console.log(err)
      showAlert("error", "Error deleting enquiry");
    }
  };


  const stats = {
    totalProjects: projects.length,
    ongoingProjects: projects.filter((p) => p.status === "Ongoing").length,
    completedProjects: projects.filter((p) => p.status === "Completed").length,
    newEnquiries: enquiries.length,
  };

  return (
    <div className="min-h-screen bg-background ">
      {/* Fixed Alert */}
      {alert && (
        <div className="fixed top-4 right-4 z-50">
          <Alert
            variant={alert.type === "error" ? "destructive" : "default"}
            className="w-80"
          >
            {alert.type === "success" ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Header */}
      <header className="border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            
            <nav className="hidden md:flex items-center gap-6 ">
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

      <div className="p-6 ">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Dashboard Overview
              </h1>
              <p className="text-muted-foreground">
                Manage your real estate projects and enquiries
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Projects
                  </CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.totalProjects}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Ongoing Projects
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.ongoingProjects}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Projects
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.completedProjects}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Enquiries
                  </CardTitle>
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
                    <div
                      key={project._id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {project.location}
                        </p>
                      </div>
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
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
                    <div
                      key={enquiry._id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{enquiry.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {enquiry.projectTitle}
                        </p>
                      </div>
                      
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
                <h1 className="text-3xl font-bold text-foreground">
                  Projects Management
                </h1>
                <p className="text-muted-foreground">
                  Add, edit, and manage your real estate projects
                </p>
              </div>
              <Button onClick={() => setIsAddingProject(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project._id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {project.title}
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{project.location}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProject(project._id)}
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
                        <span className="font-medium">Type:</span>{" "}
                        {project.type}
                      </div>
                      <div>
                        <span className="font-medium">Units:</span>{" "}
                        {project.bhk}
                      </div>
                      <div>
                        <span className="font-medium">Floors:</span>{" "}
                        {project.floors}
                      </div>
                      <div>
                        <span className="font-medium">Completion:</span>{" "}
                        {project.completion}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {project.description}
                    </p>
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
              <h1 className="text-3xl font-bold text-foreground">
                Customer Enquiries
              </h1>
              <p className="text-muted-foreground">
                Manage customer enquiries and follow-ups
              </p>
            </div>

            <div className="grid gap-4">
              {enquiries.map((enquiry) => (
                <Card key={enquiry._id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex justify-between items-center gap-2">
                          {enquiry.name}
                          
                          
                        </CardTitle>
                        <CardDescription className="flex w-full justify-evenly">
                          <div>
                          Interested in {enquiry.projectTitle} • {enquiry.date}
                          </div>
                          
                        </CardDescription>
                        
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteEnquiry(enquiry._id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-medium">Email:</span>{" "}
                        {enquiry.email}
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span>{" "}
                        {enquiry.phone}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Message:</span>
                      <p className="text-muted-foreground mt-1">
                        {enquiry.message}
                      </p>
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
          setEditingProject(null);
          setIsAddingProject(false);
        }}
        onSave={(project) => {
          if (editingProject) {
            const newProjects = projects.map((p) =>
              p._id === project._id ? project : p
            );
            setProjects(newProjects);
            showAlert("success", "Project updated successfully");
          } else {
            const newProject = { ...project, id: Date.now().toString() };
            setProjects([newProject, ...projects]);
            showAlert("success", "Project added successfully");
          }
          setEditingProject(null);
          setIsAddingProject(false);
        }}
      />
    </div>
  );
}

// Project Form Dialog Component
function ProjectFormDialog({

  isOpen,
  onClose,
  onSave,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Residential",
    image:"",
    status: "Ongoing",
    description: "",
    shortdesc:"",
    completion: "",
    bhk: "",
    floors: 0,
    price: "",
    progress: 0,
    amenities: [],
    images: [],
    featured: false,
  });
  const [amenity, setAmenity] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [ isUploading, setUploading] = useState(false);
  
  const router = useRouter();


  const handleAddAmenity = () => {
    if (amenity.trim() && !amenities.includes(amenity)) {
      setAmenities([...amenities, amenity.trim()]);
      setAmenity("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setUploading(true);
      const form = new FormData();
      images.forEach((file) => form.append("files", file));
      form.append("title", formData.title);
      

      const res = await fetch("/api/upload", { method: "POST", body: form });

      if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);

      const { urls } = await res.json();

      const imageUrl=urls[0] || "";

      const payload = { ...formData, amenities, images: urls, image:imageUrl };

      console.log("Payload to save:", payload);

      const saveRes = await axios.post("/api/admin/save-proj", payload);
      

      if (saveRes.status === 201 || saveRes.status === 200) {
        window.location.reload();  
        
      }

      setUploading(false);

    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Add New Project
          </DialogTitle>
          <DialogDescription>
            Create a new real estate project
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value: Project["type"]) =>
                  setFormData({ ...formData, type: value })
                }
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
                onValueChange={(value: Project["status"]) =>
                  setFormData({ ...formData, status: value })
                }
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
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.shortdesc}
              onChange={(e) =>
                setFormData({ ...formData, shortdesc: e.target.value })
              }
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">BHK</Label>
              <Input
                id="units"
                type="text"
                value={formData.bhk}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bhk: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="floors">Floors</Label>
              <Input
                id="floors"
                type="number"
                value={formData.floors}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    floors: Number.parseInt(e.target.value) || 0,
                  })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                placeholder="Starting from $450,000"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="completion">Completion</Label>
              <Input
                id="completion"
                value={formData.completion}
                onChange={(e) =>
                  setFormData({ ...formData, completion: e.target.value })
                }
                placeholder="Q2 2025"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="text-sm font-medium text-gray-700">
                Mark as Featured
              </label>
            </div>

          </div>
          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="flex gap-2">
              <Input
                value={amenity}
                onChange={(e) => setAmenity(e.target.value)}
                placeholder="e.g., Lift"
              />
              <Button type="button" onClick={handleAddAmenity}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {amenities.map((a, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Project Images</Label>
            <Input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setImages((prev) => [...prev, ...Array.from(files)]);
                }
              }}
            />
            <div className="flex gap-2 mt-2 flex-wrap">
              {images.map((img, idx) => (
                <span key={idx} className="text-xs text-gray-600">
                  {img.name}
                </span>
              ))}
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    progress: Number.parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              {isUploading?"Uploading...":"Add Project"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
