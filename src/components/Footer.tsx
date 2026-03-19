import { FOOTER } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <span className="text-sm text-text-muted/50">{FOOTER.text}</span>
      </div>
    </footer>
  );
}
