import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { CORE_BEHAVIOURS } from "../lib/constants";

const PANEL_LAYOUT = [
  "lg:col-span-7 lg:min-h-[26rem]",
  "lg:col-span-5 lg:min-h-[22rem] lg:translate-y-16",
  "lg:col-span-4 lg:min-h-[22rem] lg:-translate-y-12",
  "lg:col-span-8 lg:min-h-[26rem]",
] as const;

export default function CoreBehaviours() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="behaviours" className="relative overflow-clip py-20 md:py-24">
      <div className="scene-shell">
        <ScrollReveal>
          <div className="scene-kicker">{CORE_BEHAVIOURS.eyebrow}</div>
        </ScrollReveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-end">
          <ScrollReveal>
            <h2 className="max-w-lg text-[clamp(2.5rem,5.4vw,5.8rem)] font-heading font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-white">
              {CORE_BEHAVIOURS.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} direction="left">
            <p className="max-w-xl justify-self-end text-base leading-7 text-text-muted md:text-lg md:leading-8">
              {CORE_BEHAVIOURS.intro}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {CORE_BEHAVIOURS.behaviours.map((behaviour, index) => (
            <ScrollReveal
              key={behaviour.title}
              delay={index * 0.08}
              className={PANEL_LAYOUT[index]}
            >
              <motion.article
                whileHover={reducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass-panel group relative h-full overflow-hidden p-6 md:p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,135,255,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_72%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent-soft/68">
                        {behaviour.kicker}
                      </p>
                      <h3 className="mt-3 text-[clamp(2rem,3vw,3.4rem)] font-heading font-semibold uppercase leading-[0.94] tracking-[-0.06em] text-white">
                        {behaviour.title}
                      </h3>
                    </div>
                    <span className="signal-chip">{behaviour.signal}</span>
                  </div>

                  <div className="mt-6 flex-1">
                    <p className="max-w-2xl text-base leading-7 text-text-muted md:text-lg md:leading-8">
                      {behaviour.description}
                    </p>

                    {"example" in behaviour && behaviour.example && (
                      <div className="mt-6 rounded-[1.25rem] border border-accent/18 bg-accent/6 p-5">
                        <p className="text-sm uppercase tracking-[0.22em] text-accent-soft/65">
                          Automatic Thread
                        </p>
                        <p className="mt-3 text-base leading-7 text-accent-soft/92">
                          "{behaviour.example}"
                        </p>
                      </div>
                    )}
                  </div>

                  <BehaviourVisual id={behaviour.id} reducedMotion={reducedMotion} />
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BehaviourVisual({
  id,
  reducedMotion,
}: {
  id: string;
  reducedMotion: boolean | null;
}) {
  if (id === "capture") {
    return (
      <div className="mt-8 flex items-end justify-between gap-3">
        {[40, 70, 54, 84, 46, 62].map((height, index) => (
          <motion.div
            key={height}
            className="w-full rounded-full bg-gradient-to-t from-accent-strong/25 to-accent-soft/70"
            style={{ height }}
            animate={reducedMotion ? undefined : { opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.12 }}
          />
        ))}
      </div>
    );
  }

  if (id === "recall") {
    return (
      <div className="mt-8 grid grid-cols-3 gap-3">
        {["Context", "Sources", "Connections"].map((label, index) => (
          <motion.div
            key={label}
            className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-4 text-center"
            animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.16 }}
          >
            <div className="mx-auto h-2 w-2 rounded-full bg-accent" />
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-accent-soft/72">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    );
  }

  if (id === "thread") {
    return (
      <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-5">
        <svg viewBox="0 0 220 90" className="h-24 w-full" aria-hidden="true">
          <motion.path
            d="M10 54 C54 54, 52 20, 98 20 S148 72, 210 40"
            fill="none"
            stroke="rgba(154,198,255,0.86)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reducedMotion ? 1 : 0.2, opacity: 0.5 }}
            animate={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
          />
          {[10, 98, 210].map((cx, index) => (
            <circle
              key={cx}
              cx={cx}
              cy={index === 1 ? 20 : index === 2 ? 40 : 54}
              r="5"
              fill="rgba(216,232,255,0.95)"
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.24em] text-accent-soft/72"
          animate={reducedMotion ? undefined : { x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
        >
          {index === 0 && "Recent input"}
          {index === 1 && "Connected thread"}
          {index === 2 && "What to revisit"}
        </motion.div>
      ))}
    </div>
  );
}
