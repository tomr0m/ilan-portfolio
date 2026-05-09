"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { siteContent } from "@/lib/content";
import { projects } from "@/lib/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-[#1a1a1a]">
      <div className="max-content">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[#444]"
        >
          {siteContent.projects.heading}
        </motion.p>

        {/* Card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardVariants}
              className={[
                "group flex flex-col rounded-sm border p-6 transition-colors duration-200",
                project.featured
                  ? "border-t-white border border-[#2a2a2a] hover:border-t-white hover:border-[#444] hover:bg-[#0d0d0d] sm:col-span-2 lg:col-span-3 lg:flex-row lg:gap-10"
                  : "border-[#1a1a1a] hover:border-[#333] hover:bg-[#0f0f0f]",
              ].join(" ")}
            >
              {/* Left column for featured (name + description + links) */}
              <div className={project.featured ? "flex flex-col lg:w-1/2" : "flex flex-col flex-1"}>
                {/* Featured badge + name */}
                <div className="mb-3 flex items-center gap-3">
                  {project.featured && (
                    <span className="border border-[#333] px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#666]">
                      Featured
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-white">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#666]">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="flex items-center gap-1.5 text-xs text-[#555] transition-colors duration-150 hover:text-white"
                    >
                      <FiGithub size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="flex items-center gap-1.5 text-xs text-[#555] transition-colors duration-150 hover:text-white"
                    >
                      <FiExternalLink size={14} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right column for featured: tags stacked vertically */}
              <div
                className={[
                  "flex flex-wrap gap-1.5",
                  project.featured
                    ? "mt-5 lg:mt-0 lg:w-1/2 lg:content-start lg:self-start"
                    : "mt-5",
                ].join(" ")}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block border border-[#1e1e1e] px-2 py-0.5 text-[11px] text-[#555]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
