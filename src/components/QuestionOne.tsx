import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StepProps } from "../types";

export default function QuestionOne({ onAdvance }: StepProps) {
  const [shake, setShake] = useState(false);
  const [showSnark, setShowSnark] = useState(false);

  const handleNo = () => {
    setShowSnark(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Is it your birfday today?
      </motion.h1>

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAdvance}
          className="rounded-4xl bg-white px-8 py-4 text-xl font-semibold text-slate-800 shadow-lg ring-2 ring-white/60 transition hover:shadow-xl sm:flex-1"
        >
          Yezz tis
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={shake ? { x: [0, -12, 12, -10, 10, -6, 6, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleNo}
          className="rounded-4xl bg-slate-800/90 px-8 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-800 sm:flex-1"
        >
          No tis not
        </motion.button>
      </div>

      <AnimatePresence>
        {showSnark && (
          <motion.p
            key="snark"
            className="text-lg font-medium text-rose-600"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Are u stoopid? x
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
