"use client";

import brands from "@/constants/brands";

export default function TrustedBrands() {
  return (
    <section className="border-y border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <p className="mb-10 text-center text-sm font-medium tracking-wide text-zinc-500">
          Trusted by leading companies worldwide
        </p>

        {/* Logo row */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center justify-center">
              <div className="text-lg font-semibold tracking-wide text-zinc-600 transition-all duration-300 hover:text-cyan-400">
                {brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
