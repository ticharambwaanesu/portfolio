import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || prefersReduced) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setHoveringInteractive(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setHoveringInteractive(false);
      }
    };

    let raf;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-green)] pointer-events-none"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border transition-[width,height,border-color] duration-200 ease-out ${
          hoveringInteractive
            ? "h-10 w-10 border-[var(--color-green)]"
            : "h-6 w-6 border-[var(--color-blue)]/70"
        }`}
      />
    </>
  );
}
