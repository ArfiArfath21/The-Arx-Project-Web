import ScrollReveal from "./ScrollReveal";
import { CORE_BEHAVIOURS } from "../lib/constants";

export default function CoreBehaviours() {
  return (
    <section id="behaviours" className="py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading font-semibold text-text leading-tight max-w-3xl"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {CORE_BEHAVIOURS.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CORE_BEHAVIOURS.behaviours.map((behaviour, i) => (
            <ScrollReveal key={behaviour.title} delay={i * 0.12}>
              <div className="h-full p-6 md:p-8 rounded-xl bg-surface border border-border">
                <h3 className="font-heading font-semibold text-accent text-lg">
                  {behaviour.title}
                </h3>
                <p className="mt-3 text-text-muted text-base leading-relaxed">
                  {behaviour.description}
                </p>
                {"example" in behaviour && behaviour.example && (
                  <p className="mt-4 pl-4 border-l-2 border-white/10 text-sm italic text-text-muted/70 leading-relaxed">
                    "{behaviour.example}"
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
