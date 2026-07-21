import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { academicResults, gradePoints, isTopGrade } from "../data/academics.js";

const LEVELS = [1, 2, 3];

export default function Academics() {
  const [activeLevel, setActiveLevel] = useState("all");

  const filtered =
    activeLevel === "all"
      ? academicResults
      : academicResults.filter((r) => r.level === activeLevel);

  const aCount = academicResults.filter((r) => isTopGrade(r.grade)).length;

  return (
    <section id="academics" className="relative border-t border-[var(--color-border)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — ACADEMIC RECORD"
          title="Grades from three years of coursework."
          description={`${aCount} A-grade results across embedded systems, networking, and software modules — logged here in full, not curated.`}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {["all", ...LEVELS].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                activeLevel === lvl
                  ? "border-[var(--color-green)] text-[var(--color-green)]"
                  : "border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-blue)]/50"
              }`}
            >
              {lvl === "all" ? "ALL LEVELS" : `LEVEL ${lvl}`}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <div className="hidden grid-cols-[1fr_auto_140px] gap-4 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-3 font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-dim)] sm:grid">
            <span>COURSE</span>
            <span>GRADE</span>
            <span>SCORE</span>
          </div>

          <div>
            {filtered.map((row, i) => {
              const top = isTopGrade(row.grade);
              const pts = gradePoints[row.grade] ?? 2;
              return (
                <motion.div
                  key={`${row.course}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.4) }}
                  className={`grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[var(--color-border)] px-6 py-3.5 last:border-b-0 sm:grid-cols-[1fr_auto_140px] ${
                    top ? "bg-[var(--color-green)]/[0.04]" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm text-[var(--color-text)]">{row.course}</p>
                    <p className="mt-0.5 font-mono text-[10px] tracking-wide text-[var(--color-text-dim)]">
                      LEVEL {row.level} · SEM {row.semester}
                    </p>
                  </div>
                  <span
                    className={`w-fit rounded-md px-2.5 py-1 text-center font-mono text-xs font-semibold ${
                      top
                        ? "bg-[var(--color-green)]/15 text-[var(--color-green)]"
                        : "bg-white/5 text-[var(--color-text-muted)]"
                    }`}
                  >
                    {row.grade}
                  </span>
                  <div className="col-span-2 mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5 sm:col-span-1 sm:mt-0">
                    <div
                      className={`h-full rounded-full ${top ? "bg-[var(--color-green)]" : "bg-[var(--color-blue)]"}`}
                      style={{ width: `${(pts / 4) * 100}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
