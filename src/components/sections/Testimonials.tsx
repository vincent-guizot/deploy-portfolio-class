"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import testimonials from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-zinc-400">
            Real stories from businesses that have transformed with our IT
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-transparent p-8"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="min-h-[140px] leading-8 text-zinc-300">
                {item.review}
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-500">
            ←
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-500">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
