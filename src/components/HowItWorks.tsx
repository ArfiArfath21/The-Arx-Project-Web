import ScrollReveal from "./ScrollReveal";
import { HOW_IT_WORKS } from "../lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading font-semibold text-text leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {HOW_IT_WORKS.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-white/10 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  {/* Step number badge */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-accent text-bg font-heading font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </div>

                  <div className="pt-1">
                    <h3 className="font-heading font-semibold text-text text-lg md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-muted">
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
