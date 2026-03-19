import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HERO } from "../lib/constants";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-clip pt-24 pb-12 md:pt-28 lg:pt-32"
    >
      <div className="scene-shell">
        <div className="relative grid min-h-[108svh] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-end">
          <div className="relative z-10 max-w-5xl">
            <ScrollReveal>
              <div className="scene-kicker">{HERO.eyebrow}</div>
            </ScrollReveal>

            <div className="mt-8 space-y-2 md:space-y-3">
              {HERO.headline.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.span
                    className="display-line text-[clamp(3.8rem,11vw,10rem)] leading-[0.88]"
                    initial={{ y: "112%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.9,
                      delay: reducedMotion ? 0 : 0.08 + index * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.15} className="mt-8 max-w-2xl">
              <div className="grid gap-4 md:grid-cols-2">
                {HERO.summary.map((paragraph) => (
                  <p key={paragraph} className="scene-copy max-w-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24} className="mt-10">
              <div className="flex flex-wrap gap-3">
                {HERO.callouts.map((item) => (
                  <span key={item} className="signal-chip">
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} className="mt-10 max-w-xl">
              <div className="grid gap-3 border-l border-line pl-5">
                {HERO.supporting.map((line) => (
                  <p key={line} className="text-sm uppercase tracking-[0.24em] text-text-muted/80 md:text-[0.82rem]">
                    {line}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.24} direction="left" className="relative z-10">
            <div className="glass-panel relative overflow-hidden p-6 md:p-8 lg:min-h-[34rem]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-accent-soft/70">
                    Recall Surface
                  </p>
                  <h2 className="mt-3 max-w-xs text-2xl font-heading font-semibold uppercase tracking-[-0.05em] text-text md:text-3xl">
                    Information that stays connected.
                  </h2>
                </div>
                <span className="signal-dot mt-1" />
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5">
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.26em] text-text-muted/75">
                  <span>Memory Graph</span>
                  <span>Live Thread</span>
                </div>

                <div className="relative mt-6 h-48 overflow-hidden rounded-[1.25rem] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(154,198,255,0.18),transparent_55%),linear-gradient(180deg,rgba(10,18,34,0.95),rgba(6,12,24,0.78))]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(146,185,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(146,185,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-55" />

                  {[
                    { left: "16%", top: "58%" },
                    { left: "32%", top: "34%" },
                    { left: "48%", top: "66%" },
                    { left: "68%", top: "28%" },
                    { left: "80%", top: "52%" },
                  ].map((node, index) => (
                    <motion.span
                      key={`${node.left}-${node.top}`}
                      className="absolute h-3 w-3 rounded-full border border-accent-soft/60 bg-accent shadow-[0_0_20px_rgba(77,135,255,0.45)]"
                      style={{ left: node.left, top: node.top }}
                      animate={
                        reducedMotion
                          ? undefined
                          : {
                              scale: [1, 1.25, 1],
                              opacity: [0.7, 1, 0.7],
                            }
                      }
                      transition={{
                        duration: 2.8,
                        delay: index * 0.18,
                        repeat: reducedMotion ? 0 : Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M14 62 C24 62, 23 38, 33 38 S43 72, 49 68 64 22, 70 28 77 52, 84 53"
                      fill="none"
                      stroke="rgba(154,198,255,0.7)"
                      strokeWidth="0.55"
                      strokeLinecap="round"
                      initial={{ pathLength: reducedMotion ? 1 : 0, opacity: 0.45 }}
                      animate={{ pathLength: 1, opacity: 0.9 }}
                      transition={{
                        duration: reducedMotion ? 0 : 1.8,
                        delay: reducedMotion ? 0 : 0.35,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                    />
                    <motion.path
                      d="M30 38 C36 44, 45 52, 48 67"
                      fill="none"
                      stroke="rgba(216,232,255,0.58)"
                      strokeWidth="0.45"
                      strokeLinecap="round"
                      initial={{ pathLength: reducedMotion ? 1 : 0, opacity: 0.35 }}
                      animate={{ pathLength: 1, opacity: 0.75 }}
                      transition={{
                        duration: reducedMotion ? 0 : 1.4,
                        delay: reducedMotion ? 0 : 0.9,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  {
                    label: "Stored as structure",
                    value: "Entities, topics, and recall cues.",
                  },
                  {
                    label: "Returned as context",
                    value: "Usable in the moment, not buried later.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-white/6 bg-white/[0.02] p-4"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text-muted/70">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-accent-soft/90">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            {HERO.orbitLabels.map((label, index) => {
              const positions = [
                "left-[2%] top-[16%]",
                "left-[16%] top-[76%]",
                "left-[52%] top-[6%]",
                "right-[28%] top-[18%]",
                "right-[11%] top-[64%]",
                "right-[36%] top-[84%]",
              ];

              return (
                <motion.div
                  key={label}
                  className={`absolute ${positions[index]} text-[0.72rem] uppercase tracking-[0.28em] text-text-muted/42`}
                  animate={
                    reducedMotion
                      ? undefined
                      : { y: [0, index % 2 === 0 ? -10 : 10, 0] }
                  }
                  transition={{
                    duration: 6 + index,
                    repeat: reducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {label}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5 text-[0.7rem] uppercase tracking-[0.28em] text-text-muted/65">
          <span>Trace the thread below</span>
          <span>Scroll / Continue</span>
        </div>
      </div>
    </section>
  );
}
