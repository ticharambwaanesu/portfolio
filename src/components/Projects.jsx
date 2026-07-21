import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { GithubIcon } from "./icons/BrandIcons.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-[var(--color-border)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 — SELECTED WORK"
          title="Systems I've built and released, not just sketched."
          description="A cross-section of the stack: embedded, mobile, ML, and security. Each one built and released under a real constraint — hardware limits, a hackathon clock, or a client's deadline."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card group flex flex-col rounded-2xl p-6 transition-colors hover:border-[var(--color-blue)]/40"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-green)]">
                {project.category.toUpperCase()}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>

              <p className="mt-4 font-mono text-[11px] text-[var(--color-blue-soft)]">
                {project.metric}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--color-border-strong)] px-2 py-1 text-[11px] text-[var(--color-text-dim)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-green)]"
                >
                  <GithubIcon size={14} />
                  Source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  Live demo
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
