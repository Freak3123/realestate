// app/api/save-proj/route.ts
import { NextResponse } from "next/server";
import {connectDB} from "@/config/connectDB";   
import Enquiry from "@/lib/models/enquiries";


export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const newEnquiry = {
        projectTitle: body.project.title,
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
    }

    const enquiry = new Enquiry(newEnquiry);
    await enquiry.save();

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error sending Enquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

