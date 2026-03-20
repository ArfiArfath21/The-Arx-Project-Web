import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HERO } from "../lib/constants";

const stageEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-24 pt-22 sm:px-6 lg:px-10 lg:pb-32 lg:pt-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="relative">
          <div className="grid min-h-[calc(100vh-6rem)] items-end gap-6 pb-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16 xl:gap-16">
            <div className="relative z-10 lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.82, ease: stageEase }}
                className="max-w-5xl font-heading font-semibold leading-[0.9] text-text"
                style={{ fontSize: "clamp(3rem, 6.8vw, 6.3rem)" }}
              >
                {HERO.headline}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.55, ease: stageEase }}
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(159,212,255,0.78)]" />
                <span className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
                  {HERO.eyebrow}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.82, ease: stageEase }}
              className="relative lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_34px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-6 lg:min-h-[24.5rem] lg:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(159,212,255,0.14),transparent_38%)]" />
                <div className="absolute left-[14%] top-[18%] h-px w-[28%] bg-gradient-to-r from-accent/60 to-transparent" />
                <div className="absolute right-[16%] top-[32%] h-[24%] w-px bg-gradient-to-b from-accent/70 to-transparent" />
                <div className="absolute bottom-[12%] left-[16%] h-32 w-32 rounded-full border border-accent/20 lg:h-40 lg:w-40" />
                <div className="absolute right-[14%] top-[14%] h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(159,212,255,0.85)]" />

                <div className="relative flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                      Memory signal
                    </p>
                    <p className="mt-2 text-sm text-text">
                      Personal graph / live context
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                    Arx
                  </span>
                </div>

                <div className="relative mt-4 grid gap-3 lg:min-h-[13.5rem] lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-2">
                  {HERO.signals.map((signal, index) => (
                    <motion.div
                      key={signal.stamp}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28 + index * 0.1, duration: 0.68, ease: stageEase }}
                      className={`relative rounded-[1.4rem] border p-4 backdrop-blur-xl ${
                        index === 0
                          ? "border-accent/20 bg-[linear-gradient(180deg,rgba(159,212,255,0.14),rgba(9,13,18,0.9))] lg:row-span-2 lg:flex lg:min-h-[13.5rem] lg:flex-col lg:justify-between"
                          : "border-white/10 bg-bg-elevated/78"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-heading text-3xl text-accent-strong">
                          {signal.stamp}
                        </span>
                        <span className="text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                          {signal.title}
                        </span>
                      </div>
                      <p className="mt-4 max-w-[13.5rem] text-sm leading-relaxed text-text">
                        {signal.text}
                      </p>
                    </motion.div>
                  ))}

                  <div
                    className="pointer-events-none absolute left-[46%] top-[18%] hidden h-px w-[12%] bg-gradient-to-r from-accent/45 to-transparent lg:block"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute left-[58%] top-[18%] hidden h-[34%] w-px bg-gradient-to-b from-accent/40 to-transparent lg:block"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65, ease: stageEase }}
            className="mt-6 flex flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.34em] text-text-muted lg:absolute lg:bottom-1 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
          >
            <span>Scroll to see what Arx means</span>
            <ScrollArrow />
          </motion.div>
        </div>

        <div className="mt-24 lg:mt-32">
          <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-14">
            <ScrollReveal className="lg:col-span-7">
              <div className="max-w-[44rem]">
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
                  What the hero means
                </p>
                <p className="mt-6 text-xl leading-relaxed text-text md:text-[1.55rem] md:leading-relaxed">
                  {HERO.subheadline}
                </p>
                <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.28em] text-text-muted">
                  {HERO.supporting}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.028] p-5 backdrop-blur-xl md:p-6">
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {HERO.rail.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <p className="text-[0.62rem] uppercase tracking-[0.32em] text-text-muted">
                        {item.label}
                      </p>
                      <p className="max-w-[12rem] text-sm leading-relaxed text-text">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollArrow() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      className="animate-bounce text-text-muted/80"
      aria-hidden="true"
    >
      <path
        d="M8 4v14m0 0l-5-5m5 5l5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
