import { NextResponse } from "next/server";
import { getProgress } from "@/lib/progress";

export async function GET() {
  try {
    const progress = await getProgress();
    return NextResponse.json(progress);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load progress" },
      { status: 500 }
    );
  }
}
