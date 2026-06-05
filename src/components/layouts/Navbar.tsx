"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: hidden ? -120 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <motion.div
          initial={{
            x: -30,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
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
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.4,
              }}
            >
              <Link
                href={item.href}
                className="text-sm text-zinc-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Button className="rounded-full bg-cyan-500 px-6 text-black hover:bg-cyan-400">
              Get Started
            </Button>
          </motion.div>
        </motion.div>

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
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-10 flex flex-col gap-6"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-lg text-zinc-300 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <Button className="mt-4 rounded-full bg-cyan-500 text-black hover:bg-cyan-400">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
