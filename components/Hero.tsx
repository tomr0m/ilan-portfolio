"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          {...fadeUp(0)}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#555]"
        >
          {siteContent.location}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mb-4 text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteContent.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mb-6 text-xl font-light text-[#888] sm:text-2xl"
        >
          {siteContent.title}
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mb-12 text-base text-[#555] sm:text-lg"
        >
          {siteContent.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-full rounded-none border border-white bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-transparent hover:text-white sm:w-auto"
          >
            {siteContent.hero.cta.primary}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full rounded-none border border-[#333] bg-transparent px-8 py-3 text-sm font-medium text-[#888] transition-all duration-200 hover:border-white hover:text-white sm:w-auto"
          >
            {siteContent.hero.cta.secondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-transparent via-[#555] to-transparent"
        />
      </motion.div>
    </section>
  );
}
