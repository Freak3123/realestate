import Project from "@/lib/models/projects";
import {connectDB} from "@/config/connectDB";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// GET /api/featured-projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({ featured: true }).limit(5);
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}