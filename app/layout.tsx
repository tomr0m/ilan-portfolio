import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteContent.name} | ${siteContent.title}`,
  description: siteContent.seoDescription,
  keywords: [
    "Full-Stack Developer",
    "AI-Powered Applications",
    "Claude API",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Israel",
  ],
  authors: [{ name: siteContent.name }],
  openGraph: {
    title: `${siteContent.name} | ${siteContent.title}`,
    description: siteContent.seoDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} | ${siteContent.title}`,
    description: siteContent.seoDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-primary antialiased">{children}</body>
    </html>
  );
}
