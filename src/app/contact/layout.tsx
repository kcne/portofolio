import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Contact",
  description:
    "Let's Connect! Whether you have a question, a project idea, or just want to say hello, I'm here to listen and respond. In the Contact section, you'll find a simple form to drop me a message. Just fill in your name, email, subject, and what you'd like to discuss, and I'll get back to you as soon as possible. Your thoughts, inquiries, and collaborations are always welcome. This space is dedicated to opening lines of communication between us, so don't hesitate to reach out. I'm looking forward to hearing from you and exploring the possibilities of how we can work together or share insights!",
};

function StackLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default StackLayout;
