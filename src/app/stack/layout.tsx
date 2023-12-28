import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Technologies",
  description:
    "Step into the Technologies section, where I unravel the tools and frameworks that are central to my web development process. This area is dedicated to showcasing the cutting-edge technologies I use, such as Next.js, Sanity, Material-UI, GraphQL, and more. Each technology here is chosen for its ability to create efficient, responsive, and user-friendly web applications. Whether you're a fellow developer looking for insights or a client interested in understanding the building blocks of your project, this section provides a clear view of the technical foundations that drive my work. Explore to see how these technologies come together to deliver exceptional digital experiences and how they keep me at the forefront of web development innovation.",
};

function StackLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default StackLayout;
