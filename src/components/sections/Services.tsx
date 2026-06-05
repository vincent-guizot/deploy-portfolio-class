"use client";

import services from "@/constants/services";

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Innovative IT Solutions for Your Business Growth
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            We provide tailored, high-performance technology solutions to
            streamline operations, enhance security, and drive success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-transparent p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.02]"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.45)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
