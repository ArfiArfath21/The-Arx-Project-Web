import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROBLEM } from "../lib/constants";
import { useSectionProgress } from "../lib/useSectionProgress";

const SHARD_POSITIONS = [
  "left-[4%] top-[12%]",
  "left-[26%] top-[72%]",
  "left-[52%] top-[22%]",
  "left-[56%] top-[76%]",
  "right-[22%] top-[12%]",
  "right-[6%] top-[44%]",
  "right-[24%] top-[72%]",
  "left-[12%] top-[42%]",
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useSectionProgress(ref);

  const headingY = reducedMotion ? 0 : interpolate(progress, [0, 0.45, 1], [80, 0, -48]);
  const bodyY = reducedMotion ? 0 : interpolate(progress, [0, 0.45, 1], [120, 0, -36]);
  const quoteScale = reducedMotion ? 1 : interpolate(progress, [0.15, 0.45, 0.8], [0.94, 1, 1.02]);
  const quoteOpacity = interpolate(progress, [0.1, 0.32, 0.9], [0.35, 1, 1]);

  return (
    <section
      id="problem"
      ref={ref}
      className="relative min-h-[175svh] overflow-clip py-16 md:py-24"
    >
      <div className="scene-shell sticky top-20">
        <div className="relative grid min-h-[calc(100svh-5rem)] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <motion.div style={{ y: headingY }} className="relative z-10">
            <div className="scene-kicker">{PROBLEM.eyebrow}</div>

            <div className="mt-8 space-y-2">
              {PROBLEM.headline.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.span
                    className="display-line text-[clamp(2.9rem,6.6vw,6.4rem)] leading-[0.92] text-white"
                    style={{
                      opacity: 1 - index * 0.08,
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-text-muted md:text-lg">
              The problem is not curiosity. The problem is how quickly your memory turns rich input into unusable residue.
            </p>

            <div
              className="relative mt-12 hidden h-[26rem] rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] lg:block"
              aria-hidden="true"
            >
              {PROBLEM.shards.map((item, index) => (
                <motion.span
                  key={item}
                  className={`absolute ${SHARD_POSITIONS[index]} max-w-[12rem] text-xs uppercase tracking-[0.26em] text-text-muted/52`}
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          y: [0, index % 2 === 0 ? -18 : 14, 0],
                          opacity: [0.32, 0.82, 0.32],
                        }
                  }
                  transition={{
                    duration: 7 + index * 0.65,
                    repeat: reducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: bodyY }} className="relative z-10">
            <div className="grid gap-4 md:grid-cols-2">
              {PROBLEM.paragraphs.map((paragraph, index) => (
                <article
                  key={paragraph}
                  className={`glass-panel p-5 md:p-6 ${
                    index === 1 || index === 4 ? "md:translate-y-10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-accent-soft/64">
                    <span className="signal-dot h-1.5 w-1.5" />
                    <span>{`Fragment 0${index + 1}`}</span>
                  </div>
                  <p className="mt-4 text-[1rem] leading-7 text-text-muted md:text-[1.02rem]">
                    {paragraph}
                  </p>
                </article>
              ))}
            </div>

            <motion.blockquote
              style={{ scale: quoteScale, opacity: quoteOpacity }}
              className="glass-panel relative mt-6 overflow-hidden border-accent/25 p-6 md:mt-8 md:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,rgba(154,198,255,0.2),rgba(77,135,255,0.95),rgba(154,198,255,0.2))]" />
              <p className="text-[1.35rem] leading-[1.3] tracking-[-0.04em] text-white md:text-[2rem]">
                "{PROBLEM.quote}"
              </p>
              <p className="mt-5 text-[0.72rem] uppercase tracking-[0.28em] text-text-muted/70">
                The failure state Arx is built against.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function interpolate(value: number, input: number[], output: number[]) {
  if (input.length !== output.length) return output[0] ?? 0;
  if (value <= input[0]) return output[0];

  for (let index = 1; index < input.length; index += 1) {
    if (value <= input[index]) {
      const startInput = input[index - 1];
      const endInput = input[index];
      const startOutput = output[index - 1];
      const endOutput = output[index];
      const progress = (value - startInput) / (endInput - startInput || 1);
      return startOutput + (endOutput - startOutput) * progress;
    }
  }

  return output[output.length - 1];
}
