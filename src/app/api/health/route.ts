import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "dxp-site",
    timestamp: new Date().toISOString(),
  });
}
