import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "ANESU TICHARAMBWA";

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 18 + 6);
        if (next >= 100) clearInterval(interval);
        return next;
      });
    }, 140);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 650);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onDone]);

  const letters = NAME.split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--color-bg)]"
        >
          <div className="flex flex-wrap justify-center px-6 font-display text-3xl font-semibold tracking-[0.08em] sm:text-5xl">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.25 + i * 0.035, duration: 0.5, ease: "easeOut" }}
                className={char === " " ? "w-3" : "text-[var(--color-text)]"}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 font-mono text-xs tracking-[0.35em] text-[var(--color-blue-soft)]"
          >
            COMPUTER ENGINEER
          </motion.p>

          <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-[var(--color-text-dim)]">
            {Math.floor(progress).toString().padStart(3, "0")}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
