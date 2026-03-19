import { motion, useReducedMotion } from "framer-motion";

const NODE_POSITIONS = [
  { left: "7%", top: "16%" },
  { left: "18%", top: "34%" },
  { left: "74%", top: "20%" },
  { left: "84%", top: "48%" },
  { left: "14%", top: "72%" },
  { left: "62%", top: "82%" },
];

export default function BackgroundEffects() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(91,129,255,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(124,225,255,0.14),transparent_24%),radial-gradient(circle_at_48%_88%,rgba(77,135,255,0.16),transparent_26%),linear-gradient(180deg,#050816_0%,#07101d_38%,#050816_100%)]" />

      <motion.div
        className="absolute -left-[18rem] top-[6rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(77,135,255,0.24),transparent_68%)] blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, 60, -20, 0], y: [0, 36, -18, 0] }}
        transition={{ duration: 22, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-[30%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(123,222,255,0.18),transparent_68%)] blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, -40, 20, 0], y: [0, -30, 22, 0] }}
        transition={{ duration: 18, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[26%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(154,198,255,0.16),transparent_68%)] blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, 26, -34, 0], y: [0, -16, 22, 0] }}
        transition={{ duration: 20, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-55"
        viewBox="0 0 1440 1600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 260 C180 220, 280 360, 420 320 S680 180, 860 260 1120 420, 1440 330"
          fill="none"
          stroke="rgba(154,198,255,0.16)"
          strokeWidth="1"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reducedMotion ? 0 : 3.2, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.path
          d="M140 860 C340 790, 460 980, 710 910 S1080 740, 1290 860"
          fill="none"
          stroke="rgba(216,232,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: reducedMotion ? 0 : 3.4,
            delay: reducedMotion ? 0 : 0.4,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        />
      </svg>

      {NODE_POSITIONS.map((node, index) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_22px_rgba(77,135,255,0.42)]"
          style={{ left: node.left, top: node.top }}
          animate={
            reducedMotion
              ? undefined
              : { scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55] }
          }
          transition={{
            duration: 2.4 + index * 0.3,
            repeat: reducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
