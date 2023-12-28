import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Blog",
  description:
    "Discover my projects, learn from my experiences, and stay updated with industry insights that drive my professional journey. Ideal for peers, students, and enthusiasts seeking real-world perspectives in Web Development.",
};

function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default BlogLayout;
