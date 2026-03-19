import { FOOTER } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-white/10 pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="font-heading text-xs uppercase tracking-[0.32em] text-text">
          The Arx Project
        </span>
        <span className="text-text-muted/70">{FOOTER.text}</span>
      </div>
    </footer>
  );
}
