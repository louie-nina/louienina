import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Louie Nina — Full-Stack Web Developer",
  description:
    "Full-stack web developer building modern, fast, and scalable web applications with Next.js, MongoDB, and Vercel. Dashboards, SaaS tools, internal apps, custom APIs.",
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "MongoDB developer",
    "React developer",
    "Vercel",
    "web application development",
    "freelance developer",
  ],
  openGraph: {
    title: "Louie Nina — Full-Stack Web Developer",
    description:
      "Modern, fast, and scalable web applications. Next.js · MongoDB · Vercel.",
    type: "website",
    url: "https://louienina.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louie Nina — Full-Stack Web Developer",
    description:
      "Modern, fast, and scalable web applications. Next.js · MongoDB · Vercel.",
    creator: "@LouieNinaweb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
