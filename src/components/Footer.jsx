import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] tracking-wide text-[var(--color-text-dim)] sm:flex-row">
        <p>
          <motion.span
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[var(--color-green)]"
          >
            ©
          </motion.span>{" "}
          {year} Anesu Christian Ticharambwa. All rights reserved.
        </p>
        <p>Built with React, Tailwind & Framer Motion.</p>
      </div>
    </footer>
  );
}
