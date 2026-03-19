import ScrollReveal from "./ScrollReveal";
import { PROBLEM } from "../lib/constants";

export default function Problem() {
  return (
    <section id="problem" className="px-5 py-24 sm:px-6 md:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <ScrollReveal>
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
              {PROBLEM.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2
              className="mt-5 max-w-lg font-heading font-semibold leading-[0.92] text-text"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              {PROBLEM.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <blockquote className="mt-10 rounded-[1.8rem] border border-accent/15 bg-white/[0.03] p-6 backdrop-blur-xl">
              <p className="text-lg italic leading-relaxed text-text/90 md:text-xl">
                "{PROBLEM.quote}"
              </p>
            </blockquote>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-6 md:space-y-7">
            {PROBLEM.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="border-l border-white/10 pl-5 md:pl-7">
                  <p className="max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                    {paragraph}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
