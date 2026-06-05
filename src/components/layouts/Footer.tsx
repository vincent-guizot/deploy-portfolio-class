"use client";

import Link from "next/link";

import socials from "@/constants/socials";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
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
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Another masterpiece by Edwin, trained at WebProgrammingHack
            bootcamp.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <Link
                key={index}
                href={social.href}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-sky-500
                  hover:text-sky-500
                "
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
