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

  const offset = 30;
  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: offset }),
    ...(direction === "left" && { x: offset }),
    ...(direction === "right" && { x: -offset }),
  };

  const animate = {
    opacity: isInView ? 1 : 0,
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
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
