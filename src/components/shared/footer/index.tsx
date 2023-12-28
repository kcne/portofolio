import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/navItems";
interface Props {}

function Footer({}: Props) {
  return (
    <footer className="bg-zinc-50/50 backdrop-blur-sm rounded-lg shadow m-4 z-10 mt-32">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-start items-center gap-7">
          <Link href="/" className="md:-m-1.5 p-1.5 ml-3">
            <span className="sr-only">kcne.</span>
            <h1 className="text-2xl text-zinc-950">kcne.</h1>
          </Link>
        </div>

        <ul className="flex flex-wrap items-center mt-3 text-sm text-zinc-600 sm:mt-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  " md:me-6 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-300/50"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
