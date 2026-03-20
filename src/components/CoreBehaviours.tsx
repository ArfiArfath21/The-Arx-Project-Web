import ScrollReveal from "./ScrollReveal";
import { CORE_BEHAVIOURS } from "../lib/constants";

export default function CoreBehaviours() {
  const layoutClasses = [
    "lg:col-span-5",
    "lg:col-span-7",
    "lg:col-span-7",
    "lg:col-span-5",
  ];

  return (
    <section id="behaviours" className="px-5 py-24 sm:px-6 md:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-text-muted">
            {CORE_BEHAVIOURS.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2
            className="mt-5 max-w-3xl font-heading font-semibold leading-[0.94] text-text"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.75rem)" }}
          >
            {CORE_BEHAVIOURS.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {CORE_BEHAVIOURS.behaviours.map((behaviour, i) => (
            <ScrollReveal
              key={behaviour.title}
              delay={i * 0.12}
              className={layoutClasses[i]}
            >
              <div
                className={`h-full rounded-[1.9rem] border border-white/10 p-6 backdrop-blur-xl md:p-7 ${
                  behaviour.title === "Thread"
                    ? "bg-[radial-gradient(circle_at_top,rgba(159,212,255,0.16),rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.02)_100%)]"
                    : "bg-white/[0.035]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-heading text-4xl leading-none text-accent-strong md:text-5xl">
                    0{i + 1}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.32em] text-text-muted">
                    {behaviour.title}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-2xl font-semibold text-text md:text-3xl">
                  {behaviour.title}
                </h3>
                {"example" in behaviour && behaviour.example ? (
                  <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-7">
                    <p className="max-w-[30rem] text-base leading-relaxed text-text-muted">
                      {behaviour.description}
                    </p>
                    <div className="mt-5 border-l border-white/10 pl-5 text-left lg:mt-0 lg:self-start">
                      <p className="text-[0.58rem] uppercase tracking-[0.28em] text-text-muted">
                        Example
                      </p>
                      <p className="mt-3 text-sm italic leading-relaxed text-text/80">
                        "{behaviour.example}"
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 max-w-[28rem] text-base leading-relaxed text-text-muted">
                    {behaviour.description}
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
