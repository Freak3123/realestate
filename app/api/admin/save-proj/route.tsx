// app/api/save-proj/route.ts
import { NextResponse } from "next/server";
import {connectDB} from "@/config/connectDB";   
import Project from "@/lib/models/projects";

// POST /api/save-proj
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const project = new Project(body);
    await project.save();

    return NextResponse.json(
      { success: true, data: project },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving project:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// (optional) GET /api/save-proj → list projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// (optional) DELETE /api/save-proj?id=... → delete project by ID
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json(
        { success: false, error: "Project ID is required" },
        { status: 400 }
        );
    }
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
        return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
        );
    }
    return NextResponse.json({ success: true, data: deletedProject });
    } catch (error: any) {
    return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
    );
  }
}
