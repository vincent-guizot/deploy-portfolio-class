"use client";

import { motion } from "framer-motion";
import brands from "@/constants/brands";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TrustedBrands() {
  return (
    <section className="border-y border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-medium tracking-wide text-zinc-500"
        >
          Trusted by leading companies worldwide
        </motion.p>

        {/* Logo Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand}
              variants={item}
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="flex items-center justify-center"
            >
              <div className="text-lg font-semibold tracking-wide text-zinc-600 transition-colors duration-300 hover:text-cyan-400">
                {brand}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
