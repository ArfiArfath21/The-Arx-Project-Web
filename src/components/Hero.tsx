import { motion } from "framer-motion";
import { HERO } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-[4.5rem] pt-28 sm:px-6 lg:px-10 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1400px] items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative z-10 flex flex-col justify-between lg:col-span-7 xl:col-span-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(159,212,255,0.75)]" />
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-text-muted">
                {HERO.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-4xl font-heading font-semibold leading-[0.88] text-text"
              style={{ fontSize: "clamp(4.2rem, 11vw, 8.8rem)" }}
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-text md:text-xl"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-sm uppercase tracking-[0.28em] text-text-muted"
            >
              {HERO.supporting}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {HERO.rail.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-[0.62rem] uppercase tracking-[0.32em] text-text-muted">
                  {item.label}
                </p>
                <p className="text-sm text-text">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.24, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5 xl:col-span-6"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-5 lg:min-h-[38rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(159,212,255,0.14),transparent_42%)]" />
            <div className="absolute inset-x-0 top-14 h-px bg-white/10" />
            <div className="absolute bottom-[12%] left-[12%] h-40 w-40 rounded-full border border-accent/20" />
            <div className="absolute right-[13%] top-[15%] h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(159,212,255,0.85)]" />
            <div className="absolute left-[16%] top-[32%] h-px w-[42%] bg-gradient-to-r from-accent/60 to-transparent" />
            <div className="absolute right-[22%] top-[48%] h-[28%] w-px bg-gradient-to-b from-accent/70 to-transparent" />

            <div className="relative flex items-center justify-between px-2">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                  Memory signal
                </p>
                <p className="mt-2 text-sm text-text">Personal graph / live context</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                Arx
              </span>
            </div>

            <div className="relative mt-10 space-y-4">
              {HERO.signals.map((signal, index) => (
                <motion.div
                  key={signal.stamp}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.12, duration: 0.7 }}
                  className={`relative max-w-[19rem] rounded-[1.5rem] border border-white/10 bg-bg-elevated/80 p-5 backdrop-blur-xl ${
                    index === 0
                      ? "ml-auto"
                      : index === 1
                        ? "ml-8"
                        : "mr-12"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl text-accent-strong">
                      {signal.stamp}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.34em] text-text-muted">
                      {signal.title}
                    </span>
                  </div>
                  <p className="mt-6 max-w-[14rem] text-sm leading-relaxed text-text">
                    {signal.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 rounded-[1.4rem] border border-accent/15 bg-gradient-to-br from-white/8 to-white/[0.03] px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-text-muted">
                  Retrieval state
                </p>
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-accent">
                  active
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text">
                Not a vault of notes. A usable memory surface with context still attached.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1400px] items-center gap-4 px-1 text-[0.62rem] uppercase tracking-[0.34em] text-text-muted">
        <span className="h-px flex-1 bg-white/10" />
        <span>Scroll for the system</span>
      </div>
    </section>
  );
}
