import ScrollReveal from "./ScrollReveal";
import { PROBLEM } from "../lib/constants";

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading font-semibold text-text leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {PROBLEM.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-6">
          {PROBLEM.paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-text-muted">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={PROBLEM.paragraphs.length * 0.1 + 0.1}>
          <blockquote className="mt-12 pl-6 border-l-[3px] border-accent">
            <p className="text-lg md:text-xl italic text-text/90 leading-relaxed">
              "{PROBLEM.quote}"
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
