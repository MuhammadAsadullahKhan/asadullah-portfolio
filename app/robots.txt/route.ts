import { NextResponse } from "next/server";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: https://example.com/sitemap.xml", // replace with real domain when deployed
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

