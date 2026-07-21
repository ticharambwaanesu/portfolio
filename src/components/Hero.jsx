import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import CircuitBackground from "./CircuitBackground.jsx";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SOCIALS } from "../data/socials.js";

const ROLES = [
  "Data Science Vice President",
  "Computer Engineer",
  "Full-Stack Developer",
  "IoT & Embedded Systems",
  "ML Engineer",
  "Cybersecurity Enthusiast",
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-lines" />
      <CircuitBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/10 to-[var(--color-bg)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left: Text content ── */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-[var(--color-green)]"
            >
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[var(--color-green)]" />
              AVAILABLE FOR INDUSTRIAL ATTACHMENT · JUN 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
              className="font-display text-4xl font-semibold leading-[1.08] text-[var(--color-text)] sm:text-6xl lg:text-7xl"
            >
              Anesu Christian
              <br />
              <span className="text-gradient">Ticharambwa</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex h-8 items-center font-mono text-lg text-[var(--color-blue-soft)] sm:text-2xl"
            >
              <span>{role}</span>
              <span className="ml-1 h-6 w-[2px] animate-blink bg-[var(--color-blue-soft)] sm:h-7" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 max-w-xl text-[var(--color-text-muted)]"
            >
              I build systems end to end — from sensor to server to screen. Full-stack apps, IoT
              pipelines, and machine learning models that hold up outside the demo.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 font-mono text-sm font-medium text-[#04120a] transition-transform hover:scale-[1.03]"
              >
                View My Work
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: SOCIALS.github, label: "GitHub" },
                  { icon: LinkedinIcon, href: SOCIALS.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${SOCIALS.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue-soft)]"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
            whileHover="hover"
            className="group relative hidden flex-shrink-0 cursor-pointer lg:flex lg:items-center lg:justify-center"
          >
            {/* Outer glow - intensifies on hover */}
            <motion.div
              variants={{
                hover: { opacity: 0.8, scale: 1.15 },
              }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "9999px",
                background:
                  "radial-gradient(ellipse at center, rgba(0,255,136,0.28) 0%, rgba(56,189,248,0.20) 55%, transparent 75%)",
                filter: "blur(22px)",
                zIndex: 0,
                opacity: 0.5,
              }}
            />

            {/* Spinning gradient ring - speeds up slightly on hover */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "9999px",
                background:
                  "conic-gradient(from 0deg, var(--color-green), var(--color-blue), transparent, var(--color-green))",
                zIndex: 1,
              }}
            />

            {/* Dark mask ring to create border illusion */}
            <div
              style={{
                position: "absolute",
                inset: "2px",
                borderRadius: "9999px",
                background: "var(--color-bg)",
                zIndex: 2,
              }}
            />

            {/* Photo Frame Container with Spring Animation */}
            <motion.div
              variants={{
                hover: { scale: 1.05, rotate: 2, y: -4 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                position: "relative",
                width: "340px",
                height: "340px",
                borderRadius: "9999px",
                overflow: "hidden",
                zIndex: 3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Image with subtle zoom on hover */}
              <motion.img
                src="/profile.jpg"
                alt="Anesu Christian Ticharambwa"
                variants={{
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Floating available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              variants={{
                hover: { y: -2, scale: 1.05 },
              }}
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                background: "rgba(10,20,15,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,255,136,0.35)",
                borderRadius: "9999px",
                padding: "6px 18px",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,255,136,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "var(--color-green)",
                }}
              >
                ● AVAILABLE
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--color-text-dim)]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-8 w-px bg-gradient-to-b from-[var(--color-blue)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
