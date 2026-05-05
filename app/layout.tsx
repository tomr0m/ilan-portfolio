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
  title: `${siteContent.name} — ${siteContent.title}`,
  description: siteContent.about.body,
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Israel",
  ],
  authors: [{ name: siteContent.name }],
  openGraph: {
    title: `${siteContent.name} — ${siteContent.title}`,
    description: siteContent.about.body,
    type: "website",
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
