import ScrollReveal from "./ScrollReveal";
import { HOW_IT_WORKS } from "../lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-24 sm:px-6 md:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
            {HOW_IT_WORKS.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2
            className="mt-5 max-w-3xl font-heading font-semibold leading-[0.94] text-text"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.75rem)" }}
          >
            {HOW_IT_WORKS.headline}
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="font-heading text-6xl leading-none text-accent-strong md:text-7xl">
                      {String(step.number).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.32em] text-text-muted">
                      Phase {step.number}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3 className="font-heading text-2xl font-semibold text-text md:text-[1.9rem]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[18rem] text-base leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
