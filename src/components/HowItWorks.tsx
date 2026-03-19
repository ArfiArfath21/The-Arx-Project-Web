import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HOW_IT_WORKS } from "../lib/constants";
import { useSectionProgress } from "../lib/useSectionProgress";

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useSectionProgress(ref);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative overflow-clip py-16 md:py-24"
    >
      <div className="scene-shell md:hidden">
        <ScrollReveal>
          <div className="scene-kicker">{HOW_IT_WORKS.eyebrow}</div>
        </ScrollReveal>
        <ScrollReveal delay={0.08} className="mt-6 max-w-2xl">
          <h2 className="text-[clamp(2.4rem,9vw,4.4rem)] font-heading font-semibold uppercase leading-[0.92] tracking-[-0.06em] text-white">
            {HOW_IT_WORKS.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14} className="mt-4 max-w-xl">
          <p className="scene-copy">{HOW_IT_WORKS.intro}</p>
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {HOW_IT_WORKS.stages.map((stage, index) => (
            <ScrollReveal key={stage.number} delay={index * 0.08}>
              <article className="glass-panel overflow-hidden p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent-soft/68">
                      {stage.signal}
                    </p>
                    <h3 className="mt-3 text-2xl font-heading font-semibold uppercase tracking-[-0.05em] text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-4xl font-heading font-semibold tracking-[-0.08em] text-accent-soft/20">
                    {stage.number}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-text-muted">
                  {stage.description}
                </p>
                <ul className="mt-6 grid gap-2">
                  {stage.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full border border-white/7 bg-white/[0.02] px-4 py-2 text-sm text-accent-soft/82"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="scene-shell hidden md:block">
        <div className="min-h-[280svh]">
          <div className="sticky top-20 grid h-[calc(100svh-6rem)] grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] gap-10">
            <div className="flex flex-col justify-between py-6">
              <div>
                <div className="scene-kicker">{HOW_IT_WORKS.eyebrow}</div>
                <h2 className="mt-6 max-w-xl text-[clamp(3rem,5vw,5.6rem)] font-heading font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-white">
                  {HOW_IT_WORKS.headline}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-8 text-text-muted">
                  {HOW_IT_WORKS.intro}
                </p>
              </div>

              <div className="relative mt-8 rounded-[1.75rem] border border-white/6 bg-panel/35 p-5">
                <div className="absolute left-8 top-8 bottom-8 w-px bg-white/8" />
                <div className="space-y-5">
                  {HOW_IT_WORKS.stages.map((stage, index) => (
                    <ProcessMarker
                      key={stage.number}
                      progress={progress}
                      index={index}
                      label={stage.label}
                      title={stage.title}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,135,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(154,198,255,0.16),transparent_26%)]" />

              <div className="absolute inset-6 rounded-[1.8rem] border border-white/6 bg-[linear-gradient(180deg,rgba(5,10,22,0.72),rgba(7,13,28,0.18))]" />

              {HOW_IT_WORKS.stages.map((stage, index) => (
                <ProcessStage
                  key={stage.number}
                  stage={stage}
                  index={index}
                  progress={progress}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessMarker({
  progress,
  index,
  label,
  title,
}: {
  progress: number;
  index: number;
  label: string;
  title: string;
}) {
  const start = index / 3;
  const center = start + 1 / 6;
  const end = (index + 1) / 3;
  const opacity = interpolate(progress, [start, center, end], [0.35, 1, 0.4]);
  const x = interpolate(progress, [start, center, end], [0, 8, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="relative pl-8"
    >
      <span className="absolute left-[9px] top-2 h-3 w-3 rounded-full border border-accent-soft/60 bg-accent shadow-[0_0_18px_rgba(77,135,255,0.35)]" />
      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft/72">
        {label}
      </p>
      <p className="mt-2 max-w-xs text-lg font-heading font-medium uppercase tracking-[-0.04em] text-white">
        {title}
      </p>
    </motion.div>
  );
}

function ProcessStage({
  stage,
  index,
  progress,
  reducedMotion,
}: {
  stage: (typeof HOW_IT_WORKS.stages)[number];
  index: number;
  progress: number;
  reducedMotion: boolean | null;
}) {
  const segment = 1 / 3;
  const start = Math.max(0, index * segment - 0.06);
  const center = index * segment + segment / 2;
  const end = Math.min(1, (index + 1) * segment + 0.08);

  const opacity = interpolate(progress, [start, center, end], [0.24, 1, 0.18]);
  const y = reducedMotion ? 0 : interpolate(progress, [start, center, end], [96, 0, -110]);
  const scale = reducedMotion ? 1 : interpolate(progress, [start, center, end], [0.88, 1, 0.9]);

  return (
    <motion.article
      style={{
        opacity,
        y,
        scale,
        zIndex: 10 - index,
      }}
      className="absolute inset-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,30,0.84),rgba(11,20,38,0.72))] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.35)]"
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent-soft/72">
                {stage.signal}
              </p>
              <h3 className="mt-4 max-w-xl text-[clamp(2.3rem,3.2vw,4.1rem)] font-heading font-semibold uppercase leading-[0.92] tracking-[-0.06em] text-white">
                {stage.title}
              </h3>
            </div>
            <span className="text-[6rem] font-heading font-semibold leading-none tracking-[-0.09em] text-accent-soft/12">
              {stage.number}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            {stage.description}
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-5">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-accent-soft/72">
              State Shift
            </p>
            <div className="mt-5 flex h-28 items-center justify-center overflow-hidden rounded-[1.1rem] border border-white/6 bg-[radial-gradient(circle_at_center,rgba(154,198,255,0.14),transparent_60%),linear-gradient(180deg,rgba(4,8,19,0.9),rgba(9,14,27,0.7))]">
              <div className="flex items-center gap-4">
                <span className="signal-dot h-2.5 w-2.5" />
                <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                <span className="signal-dot h-2.5 w-2.5" />
                <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                <span className="signal-dot h-2.5 w-2.5" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {stage.details.map((detail) => (
              <div
                key={detail}
                className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-accent-soft/86"
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
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
