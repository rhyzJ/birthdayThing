import { motion } from "framer-motion";
import BlossomFlowers from "./BlossomFlowers";

export default function GiftAnimation() {
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
          <p className="text-2xl font-semibold text-white drop-shadow-md sm:text-2xl">
            sum flowers for you
          </p>
          <p className="text-sm font-semibold text-white drop-shadow-md sm:text-sm">
            (pls appreciate my animation skills it took ages i am not good
            animator)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
