import { NextResponse } from "next/server";
import { z } from "zod";

const demoRequestSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  businessType: z.string().optional(),
  locations: z.string().optional(),
  notes: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = demoRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid request payload", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      requestId: `DXP-${Date.now().toString(36).toUpperCase()}`,
      receivedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process request" }, { status: 500 });
  }
}
