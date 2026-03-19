import ScrollReveal from "./ScrollReveal";
import { HERO } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="font-heading font-bold text-text leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            {HERO.headline}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
            {HERO.subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-4 text-text-muted/70 text-base">
            {HERO.supporting}
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll hint — always visible, bounce animation provides motion */}
      <div className="absolute bottom-8">
        <div className="flex flex-col items-center gap-2 text-text-muted/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}

function ScrollArrow() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      className="animate-bounce"
      aria-hidden="true"
    >
      <path
        d="M8 4v14m0 0l-5-5m5 5l5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
