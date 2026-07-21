import { useEffect, useRef } from "react";

/**
 * Signature element: a canvas-drawn circuit board where signal "pulses"
 * travel along orthogonal traces between nodes, echoing PCB routing.
 * Pure canvas (no heavy 3D lib) so it stays cheap on mobile.
 */
export default function CircuitBackground({ density = 0.9 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let nodes = [];
    let traces = [];
    let pulses = [];
    let raf;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    function buildGrid() {
      const cols = Math.max(6, Math.round((width / 140) * density));
      const rows = Math.max(4, Math.round((height / 140) * density));
      nodes = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          if (Math.random() > 0.62) continue;
          nodes.push({
            x: (i / cols) * width + (Math.random() - 0.5) * 30,
            y: (j / rows) * height + (Math.random() - 0.5) * 30,
            r: Math.random() * 1.6 + 0.6,
          });
        }
      }
      // Connect nearby nodes orthogonally-ish (L-shaped) for a PCB feel
      traces = [];
      for (let i = 0; i < nodes.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < nodes.length && connections < 2; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 190 && Math.random() > 0.55) {
            traces.push({ a: nodes[i], b: nodes[j] });
            connections++;
          }
        }
      }
      pulses = traces
        .filter(() => Math.random() > 0.55)
        .map((t) => ({ trace: t, progress: Math.random(), speed: 0.0025 + Math.random() * 0.004, color: Math.random() > 0.5 ? "blue" : "green" }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Traces
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(148, 174, 196, 0.12)";
      traces.forEach(({ a, b }) => {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // Nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148, 174, 196, 0.35)";
        ctx.fill();
      });

      // Pulses traveling along the L-shaped trace
      pulses.forEach((p) => {
        const { a, b } = p.trace;
        const corner = { x: b.x, y: a.y };
        const legA = Math.hypot(corner.x - a.x, corner.y - a.y);
        const legB = Math.hypot(b.x - corner.x, b.y - corner.y);
        const total = legA + legB || 1;
        const dist = p.progress * total;
        let px, py;
        if (dist <= legA) {
          const t = legA === 0 ? 0 : dist / legA;
          px = a.x + (corner.x - a.x) * t;
          py = a.y + (corner.y - a.y) * t;
        } else {
          const t = legB === 0 ? 0 : (dist - legA) / legB;
          px = corner.x + (b.x - corner.x) * t;
          py = corner.y + (b.y - corner.y) * t;
        }
        const color = p.color === "blue" ? "62, 166, 255" : "57, 255, 157";
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, `rgba(${color}, 0.9)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        if (!prefersReduced) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
        }
      });
    }

    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      draw();
    } else {
      loop();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
    />
  );
}
