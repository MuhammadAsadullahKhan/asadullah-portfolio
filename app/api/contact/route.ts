import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Placeholder: in a real app you could send this to an email service or store it.
  console.log("Contact form submission", body);

  return NextResponse.json({ ok: true }, { status: 200 });
}

