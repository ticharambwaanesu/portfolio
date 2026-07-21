import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Returns a ref + boolean for scroll-triggered reveal animations.
 */
export function useScrollReveal(options = { once: true, margin: "-80px" }) {
  const ref = useRef(null);
  const inView = useInView(ref, options);
  return [ref, inView];
}
