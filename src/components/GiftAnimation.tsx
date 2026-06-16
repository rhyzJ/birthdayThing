import { useMemo } from "react";
import { motion } from "framer-motion";
import BlossomFlowers from "./BlossomFlowers";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function GiftAnimation() {
  const balls = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(26, 54),
        delay: rand(0, 3),
        duration: rand(4.5, 8),
        drift: rand(-40, 40),
        spin: rand(360, 900) * (i % 2 === 0 ? 1 : -1),
      })),
    [],
  );

  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      {/* Magical night garden — full-screen backdrop */}
      <BlossomFlowers />

      {/* Sweet little message over the scene */}
      <motion.div
        className="pointer-events-none fixed left-1/2 top-[12%] z-30"
        initial={{ x: "-50%", y: -24, opacity: 0, scale: 0.9 }}
        animate={{ x: "-50%", y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 14 }}
      >
        <div className="rounded-4xl border border-white/40 bg-white/15 px-8 py-5 text-center shadow-xl backdrop-blur-md">
          <p className="text-2xl font-semibold text-white drop-shadow-md sm:text-3xl">
            sum flowers for you pookie 💐
          </p>
        </div>
      </motion.div>

      {/* Basketball rain over the scene */}
      <div className="pointer-events-none fixed inset-0 z-20">
        {balls.map((b) => (
          <motion.span
            key={b.id}
            className="absolute top-[-10%]"
            style={{ left: `${b.left}%`, fontSize: b.size }}
            initial={{ y: "-15vh", x: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: "115vh",
              x: b.drift,
              opacity: [0, 1, 1, 0.9],
              rotate: b.spin,
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              ease: "easeIn",
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          >
            🏀
          </motion.span>
        ))}
      </div>
    </div>
  );
}
