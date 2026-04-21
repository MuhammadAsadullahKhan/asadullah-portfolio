import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getFutureFluxProjectJsonLd, getPersonJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Asadullah Khan · Portfolio",
  description:
    "BS Software Engineering student focused on React, Next.js, frontend development, video editing, and ML mini-projects.",
  metadataBase: new URL("https://example.com"), // replace with real domain when deployed
  openGraph: {
    title: "Muhammad Asadullah Khan · Portfolio",
    description:
      "Frontend-focused BS Software Engineering student building thoughtful web experiences with React, Next.js, and ML.",
    url: "https://example.com",
    siteName: "Muhammad Asadullah Khan · Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asadullah Khan · Portfolio",
    description:
      "Frontend-focused BS Software Engineering student building thoughtful web experiences with React, Next.js, and ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonJsonLd();
  const projectJsonLd = getFutureFluxProjectJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, projectJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
