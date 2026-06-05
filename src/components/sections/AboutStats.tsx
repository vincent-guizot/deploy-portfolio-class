"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import stats from "@/constants/stats";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutStats() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="/images/office.jpg"
              alt="About Team"
              width={640}
              height={720}
              className="h-[620px] w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
          }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight lg:text-5xl"
            >
              Proven Results,
              <br />
              Measurable Impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-xl text-lg leading-8 text-zinc-400"
            >
              We combine strategy, design, and engineering to deliver scalable
              digital experiences that transform businesses and accelerate
              growth.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 border-y border-white/10 py-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                }}
                className={`flex flex-col items-center justify-center text-center ${
                  index !== stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <h3 className="text-5xl font-bold text-white">{stat.number}</h3>

                <p className="mt-3 text-base text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
