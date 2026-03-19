import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { CLOSING } from "../lib/constants";

export default function Closing() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="closing"
      className="relative overflow-clip py-20 md:py-28 lg:py-32"
    >
      <div className="scene-shell">
        <div className="glass-panel relative overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(154,198,255,0.15),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(77,135,255,0.18),transparent_24%)]" />
          <motion.div
            className="absolute left-1/2 top-6 h-48 w-48 -translate-x-1/2 rounded-full border border-white/8"
            animate={
              reducedMotion
                ? undefined
                : { scale: [1, 1.06, 1], opacity: [0.25, 0.5, 0.25] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <ScrollReveal>
              <div className="scene-kicker">{CLOSING.eyebrow}</div>
            </ScrollReveal>

            <div className="mt-8 space-y-1 md:space-y-2">
              {CLOSING.headline.map((line, index) => (
                <ScrollReveal key={line} delay={index * 0.08}>
                  <span className="display-line text-[clamp(2.7rem,7vw,6.8rem)] leading-[0.9]">
                    {line}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.18} className="mt-8 max-w-3xl">
              <p className="text-lg leading-8 text-text-muted md:text-[1.15rem]">
                {CLOSING.body}
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {CLOSING.notes.map((note, index) => (
                <ScrollReveal key={note} delay={0.24 + index * 0.06}>
                  <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-accent-soft/72">
                      {note}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
