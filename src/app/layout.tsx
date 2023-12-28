import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description:
    "Hi, I'm a Frontend Engineer with 2+ years of experience with a strong drive and dedication to building fast, reliable, and modern web applications with Next.js & Typescript. With a history of contributions to projects in both corporate and freelance capacities, I have developed strong collaboration and communication skills, along with an innovative and adaptable approach that allows me to perform well under pressure. I'm also always looking for new ways to learn and improve further following events and innovations in open-source space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="preload"
          href="/hero-image.webp"
          as="image"
          imageSrcSet={`/hero-image.webp?q=70 400, 
          /hero-image.webp?w=200?q=70 200w,
          /hero-image.webp?w=400?q=70 400w, 
          /hero-image.webp?w=800?q=70 400w, 
          /hero-image.webp?w=1024?q=70 400w`}
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased light",
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
