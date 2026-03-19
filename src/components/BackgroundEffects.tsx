import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(159,212,255,0.1), transparent 30%), radial-gradient(circle at 78% 22%, rgba(217,236,255,0.08), transparent 28%), linear-gradient(180deg, #040404 0%, #06080b 44%, #040404 100%)",
        }}
      />

      <motion.div
        className="absolute -top-[18rem] left-[8%] h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(159,212,255,0.16) 0%, rgba(159,212,255,0.04) 45%, transparent 75%)",
        }}
        animate={{
          x: [0, 26, -18, 0],
          y: [0, -20, 24, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[6%] top-[18%] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,236,255,0.14) 0%, rgba(217,236,255,0.04) 38%, transparent 72%)",
        }}
        animate={{
          x: [0, -22, 18, 0],
          y: [0, 28, -18, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-10rem] left-[34%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(118,152,180,0.18) 0%, rgba(118,152,180,0.05) 40%, transparent 74%)",
        }}
        animate={{
          x: [0, 18, -22, 0],
          y: [0, -16, 20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "min(11vw, 120px) min(11vw, 120px)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 82%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/10 lg:block" />
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/10 lg:block" />
      <div className="absolute left-0 right-0 top-[18%] hidden h-px bg-white/8 lg:block" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.48) 100%)",
        }}
      />
    </div>
  );
}
