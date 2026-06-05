"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-5">
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl"
            >
              Your Trusted IT Partner
              <br />
              for <span className="text-cyan-400">Digital Success</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-8 text-zinc-400"
            >
              We craft powerful digital solutions that accelerate business
              growth through innovative software, scalable systems, and
              cutting-edge development.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-cyan-500 px-7 py-6 text-black hover:bg-cyan-400">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-7 py-6 text-white hover:bg-white/10"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 pt-4 text-sm text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              Secure
            </div>

            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-400" />
              Fast Delivery
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT MOCKUP */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/phone-image.png"
              alt="Phone Mockup"
              width={540}
              height={540}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
