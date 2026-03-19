import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient — not flat black, subtle warm-to-cool shift */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #0d0b08 25%, #0a0a0e 50%, #0c0a08 75%, #0a0a0a 100%)",
        }}
      />

      {/* Ambient orb — top right, warm amber */}
      <motion.div
        className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.04) 0%, rgba(212,168,83,0.01) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient orb — center left, subtle cool tone */}
      <motion.div
        className="absolute top-[40%] -left-[300px] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(140,160,200,0.025) 0%, rgba(140,160,200,0.008) 40%, transparent 65%)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient orb — bottom, warm accent */}
      <motion.div
        className="absolute -bottom-[200px] right-[20%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
