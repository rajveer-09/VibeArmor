import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Submission from "@/lib/models/Submission";
import { isAuthenticated, isAdmin } from "@/lib/auth";

// GET all submissions for a problem (admin only)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const user = await isAuthenticated(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    await dbConnect();

    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const allUsers = url.searchParams.get("allUsers") === "true";
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const filter: any = { problemId: resolvedParams.id };

    if (!allUsers && !(await isAdmin(request))) {
      filter.userId = user._id;
    }

    if (status) {
      filter.status = status;
    }

    console.log("Filter being applied:", filter); // Debug log

    const submissions = await Submission.find(filter)
      .populate({
        path: "userId",
        select: "name email",
        model: "User",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(); // Convert to plain JavaScript objects

    const total = await Submission.countDocuments(filter);

    console.log("Submissions found:", submissions.length); // Debug log

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get submissions error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
