"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { skillCategories } from "@/lib/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[#1a1a1a]">
      <div className="max-content">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[#444]"
        >
          About
        </motion.p>

        {/* About text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-2xl text-lg leading-relaxed text-[#aaa] md:text-xl"
        >
          {siteContent.about.body}
        </motion.p>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              className="group rounded-sm border border-[#1a1a1a] p-6 transition-colors duration-200 hover:border-[#333]"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#444] transition-colors duration-200 group-hover:text-[#666]">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-block border border-[#222] px-2.5 py-1 text-xs text-[#888] transition-colors duration-200 hover:border-[#444] hover:text-[#bbb]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
