import { NextResponse } from "next/server";
import {connectDB} from "@/config/connectDB";
import Enquiry from "@/lib/models/enquiries";

export async function GET() {
  try {
    await connectDB();
    const projects = await Enquiry.find();
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}