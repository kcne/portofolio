import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description:
    "Welcome to my Projects section, where each build tells a story of innovation and technical prowess. In this space, I showcase a range of web development projects that demonstrate my expertise with Next.js, Sanity, and other cutting-edge technologies. From the dynamic and responsive design of Convaix.de to the interactive, data-centric features of SmartCity by Piton, each project reflects my commitment to modern web development practices. Dive into the ALFA System for a glimpse of complex, real-time application development, or explore Uni-Pass-23 to see how I blend robust development with creative design. Each project here is a testament to my ability to deliver engaging, efficient, and user-friendly web solutions. Read more about each project to understand the challenges faced, the technologies used, and the innovative solutions implemented.",
};

function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-page  bg-gradient-to-r from-rose-100 to-teal-100 pb-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default ProjectsLayout;
