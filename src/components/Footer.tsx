import { FOOTER } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="relative px-5 pb-8 pt-4 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-4 border-t border-white/8 pt-6 text-[0.72rem] uppercase tracking-[0.26em] text-text-muted/65 md:flex-row md:items-center md:justify-between">
        <span>{FOOTER.text}</span>
        <span>{FOOTER.tag}</span>
      </div>
    </footer>
  );
}
