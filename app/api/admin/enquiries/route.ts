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

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json(
        { success: false, error: "Enquiry ID is required" },
        { status: 400 }
        );
    }
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) {
        return NextResponse.json(
        { success: false, error: "Enquiry not found" },
        { status: 404 }
        );
    }
    return NextResponse.json(
        { success: true, data: deletedEnquiry },
        { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}