import ScrollReveal from "./ScrollReveal";
import { CLOSING } from "../lib/constants";

export default function Closing() {
  return (
    <section id="closing" className="px-5 pb-24 pt-24 sm:px-6 md:pb-32 md:pt-32 lg:px-10">
      <div className="mx-auto max-w-[1400px] rounded-[2.2rem] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-xl md:px-10 md:py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <ScrollReveal className="lg:col-span-3">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
              {CLOSING.eyebrow}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-6 lg:col-span-6 lg:mt-0">
          <div>
            <h2
              className="max-w-4xl font-heading font-semibold leading-[0.9] text-text"
              style={{ fontSize: "clamp(2.6rem, 5.6vw, 6rem)" }}
            >
              {CLOSING.headline}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.2}
          className="mt-8 lg:col-span-3 lg:mt-0 lg:self-end"
        >
          <div>
            <p className="text-base leading-relaxed text-text-muted">
              {CLOSING.body}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
