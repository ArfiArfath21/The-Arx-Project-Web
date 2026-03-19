import ScrollReveal from "./ScrollReveal";
import { CLOSING } from "../lib/constants";

export default function Closing() {
  return (
    <section id="closing" className="py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="font-heading font-semibold text-text leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {CLOSING.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mt-6 text-text-muted max-w-2xl mx-auto">
            {CLOSING.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
