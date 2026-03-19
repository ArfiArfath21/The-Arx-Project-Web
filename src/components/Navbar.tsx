import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const ids = ["hero", ...NAV.links.map((link) => link.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-36% 0px -48% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  function scrollToId(href: string) {
    setMobileOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:uppercase focus:tracking-[0.18em] focus:text-accent-soft"
      >
        Skip to content
      </a>

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "px-3 pt-3 md:px-5" : "px-0 pt-0"
        }`}
        aria-label="Main navigation"
      >
        <div
          className={`mx-auto flex max-w-[96rem] items-center justify-between rounded-none border-b border-white/8 px-5 py-4 transition-all duration-300 md:px-6 ${
            scrolled
              ? "rounded-[1.15rem] border border-white/10 bg-surface/82 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-[18px]"
              : "bg-transparent"
          }`}
        >
          <button
            onClick={() => scrollToId("#hero")}
            className="flex items-center gap-4 text-left"
            aria-label="Scroll to top"
          >
            <span className="text-[1.15rem] font-heading font-semibold uppercase tracking-[0.24em] text-white">
              {NAV.brand}
            </span>
            <span className="hidden h-px w-10 bg-white/12 md:block" />
            <span className="hidden text-[0.66rem] uppercase tracking-[0.28em] text-text-muted/68 md:block">
              {NAV.strap}
            </span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {NAV.links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <button
                  key={link.href}
                  onClick={() => scrollToId(link.href)}
                  className="group flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.26em] text-text-muted/72 transition-colors hover:text-accent-soft"
                >
                  <span className="text-text-muted/42 transition-colors group-hover:text-accent-soft/72">
                    {link.index}
                  </span>
                  <span className={isActive ? "text-accent-soft" : ""}>{link.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      isActive ? "bg-accent shadow-[0_0_18px_rgba(77,135,255,0.45)]" : "bg-white/12"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            className="flex items-center gap-3 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="text-[0.72rem] uppercase tracking-[0.3em] text-accent-soft/72">
              Menu
            </span>
            <div className="flex w-8 flex-col gap-1.5">
              <motion.span
                className="block h-px w-full bg-white"
                animate={mobileOpen ? { rotate: 32, y: 7 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-px w-full bg-white"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block h-px w-full bg-white"
                animate={mobileOpen ? { rotate: -32, y: -7 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(154,198,255,0.18),transparent_36%),linear-gradient(180deg,rgba(5,8,22,0.98),rgba(5,8,22,0.94))]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(146,185,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(146,185,255,0.08)_1px,transparent_1px)] bg-[size:54px_54px] opacity-35" />

            <div className="relative flex min-h-screen flex-col justify-between px-6 pb-8 pt-28">
              <div className="space-y-5">
                {NAV.links.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToId(link.href)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: index * 0.07 }}
                    className="flex w-full items-center justify-between border-b border-white/8 pb-5 text-left"
                  >
                    <div>
                      <p className="text-[0.66rem] uppercase tracking-[0.3em] text-text-muted/65">
                        {link.index}
                      </p>
                      <p className="mt-2 text-[2rem] font-heading font-semibold uppercase tracking-[-0.05em] text-white">
                        {link.label}
                      </p>
                    </div>
                    <span className="signal-dot" />
                  </motion.button>
                ))}
              </div>

              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent-soft/72">
                  {NAV.strap}
                </p>
                <p className="mt-4 text-base leading-7 text-text-muted">
                  A cinematic memory layer for people who want their curiosity to survive contact with time.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
