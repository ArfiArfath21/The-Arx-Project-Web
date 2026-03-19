import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const sectionIds = NAV.links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.getElementById(href.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-accent/50 focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-text"
      >
        Skip to content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/72 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="group inline-flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_rgba(159,212,255,0.8)]" />
            <span className="font-heading text-sm uppercase tracking-[0.32em] text-text">
              {NAV.brand}
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {NAV.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] ${
                  activeSection === link.href.replace("#", "")
                    ? "text-text"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full border border-accent/30 bg-white/6"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[0.65rem] uppercase tracking-[0.32em] text-text-muted">
              Built for recall
            </span>
          </div>

          <button
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 rounded-full bg-text origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 rounded-full bg-text"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 rounded-full bg-text origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg/96 px-5 pb-8 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-4">
              {NAV.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="font-heading text-2xl text-text">
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="max-w-xs text-sm text-text-muted">
                Dark, personal, and built around keeping what would normally
                disappear.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
