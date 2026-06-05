"use client";

import Image from "next/image";

import stats from "@/constants/stats";

export default function AboutStats() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT IMAGE */}
        <div className="relative">
          {/* glow */}
          <div className="absolute -left-8 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/office.jpg"
              alt="About Team"
              width={640}
              height={720}
              className="h-[620px] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Us
            </p>

            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Proven Results,
              <br />
              Measurable Impact
            </h2>

            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              We combine strategy, design, and engineering to deliver scalable
              digital experiences that transform businesses and accelerate
              growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 border-y border-white/10 py-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  index !== stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <h3 className="text-5xl font-bold text-white">{stat.number}</h3>

                <p className="mt-3 text-base text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
