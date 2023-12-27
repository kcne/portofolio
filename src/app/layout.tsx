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
  title: "kcne | Home",
  description:
    "Hello and welcome! I'm Emin Kocan, a Frontend Engineer at PITON Technology, and this is my digital space. Here, you'll get a glimpse into my world of web development where creativity meets technology. From detailed blogs that share my experiences and insights to a gallery of my projects showcasing my skills with Next.js, Material-UI, and more, there's plenty to explore. Whether you're a fellow tech enthusiast, a potential collaborator, or just curious, I invite you to browse through my work, learn about the technologies I use, and maybe find some inspiration. Don't hesitate to reach out if you'd like to connect or discuss how we can work together. Happy browsing!",
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
