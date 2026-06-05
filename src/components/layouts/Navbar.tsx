"use client"; // This is a client component because it uses state and interactivity

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-symbol.png"
            alt="Your Logo"
            width={32}
            height={32}
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            Your Logo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="rounded-full bg-cyan-500 px-6 text-black hover:bg-cyan-400">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white md:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="border-white/10 bg-black text-white"
          >
            <div className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg text-zinc-300 hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="mt-4 rounded-full bg-cyan-500 text-black hover:bg-cyan-400">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
