import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const offset = 34;
  const initial = {
    opacity: 0,
    filter: "blur(14px)",
    ...(direction === "up" && { y: offset }),
    ...(direction === "left" && { x: offset }),
    ...(direction === "right" && { x: -offset }),
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    filter: isInView ? "blur(0px)" : "blur(14px)",
    y: isInView ? 0 : direction === "up" ? offset : 0,
    x: isInView
      ? 0
      : direction === "left"
        ? offset
        : direction === "right"
          ? -offset
          : 0,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.2, 0.72, 0.2, 1],
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
