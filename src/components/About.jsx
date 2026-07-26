import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

export default function About() {
  return (
    <section id="about" className="relative border-t border-[var(--color-border)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 — ABOUT"
          title="I think in systems, not screens."
          description="Every project below started as a constraint, not a template — a sensor that had to report in real time, a checkout that couldn't fail, a dataset that had to earn its predictions."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <p className="text-[var(--color-text)]">
              I'm a Computer Engineering student at Chinhoyi University of Technology, building
              toward a 2028 graduation with three years of built and released work already behind me. I don't
              treat "student project" as an excuse for sloppy engineering — the IoT monitor still
              has to hold a connection, the checkout flow still has to protect the card details.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              My work spans the stack in the literal sense: embedded firmware talking to sensors,
              backend services holding that data, and React front ends putting it in front of a
              user who doesn't care how any of it works — only that it does.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Outside of coursework, I freelance on full-stack mobile builds and compete in
              hackathons, which is less about the trophy and more about building and releasing something real
              under a clock that doesn't care about your excuses.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6">
              {[
                { value: "3+", label: "Years building" },
                { value: "8", label: "Released projects" },
                { value: "2028", label: "Graduation" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-[var(--color-green)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-[var(--color-text-dim)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: gi * 0.06 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-blue-soft)]">
                    {group.label.toUpperCase()}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--color-border-strong)] px-3 py-1 text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-green)]/60 hover:text-[var(--color-green-soft)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
