import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-[var(--color-border)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — EXPERIENCE"
          title="Where the work actually happened."
          description="University projects, freelance delivery, and one hackathon that didn't leave much room to think — in the order it happened."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-1 h-[calc(100%-8px)] w-px bg-gradient-to-b from-[var(--color-blue)] via-[var(--color-border-strong)] to-transparent sm:left-[9px]" />

          <div className="flex flex-col gap-14">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-green)] bg-[var(--color-bg)] sm:-left-10" />

                <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-blue-soft)]">
                  {item.period.toUpperCase()}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text)]">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-dim)]">{item.org}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.points.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-green)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
