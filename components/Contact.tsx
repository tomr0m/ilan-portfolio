"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteContent } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-[#1a1a1a]">
      <div className="max-content">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[#444]"
        >
          Contact
        </motion.p>

        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          >
            {siteContent.contact.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-10 text-base text-[#666]"
          >
            {siteContent.contact.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <a
              href={`mailto:${siteContent.email}`}
              className="group flex items-center gap-3 text-sm text-[#888] transition-colors duration-200 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#222] transition-colors duration-200 group-hover:border-[#444]">
                <FiMail size={15} />
              </span>
              <span>{siteContent.contact.emailLabel}</span>
            </a>

            {/* GitHub */}
            <a
              href={siteContent.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-[#888] transition-colors duration-200 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#222] transition-colors duration-200 group-hover:border-[#444]">
                <FiGithub size={15} />
              </span>
              <span>github.com/tomr0m</span>
            </a>

            {/* LinkedIn */}
            <a
              href={siteContent.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-[#888] transition-colors duration-200 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#222] transition-colors duration-200 group-hover:border-[#444]">
                <FiLinkedin size={15} />
              </span>
              <span>linkedin.com/in/ilan-keselman</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
