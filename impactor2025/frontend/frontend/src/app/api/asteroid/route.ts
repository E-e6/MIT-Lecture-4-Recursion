import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const asteroid = {
    name: "2025 MN",
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(asteroid);
}
