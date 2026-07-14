import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StepProps } from "../types";

// The one password that unlocks the card.
const CORRECT_PASSWORD = "6767";

export default function PasswordGate({ onAdvance }: StepProps) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === CORRECT_PASSWORD) {
      onAdvance();
      return;
    }
    setWrong(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col items-center gap-8 text-center"
    >
      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Enter the password
      </motion.h1>

      <motion.input
        type="password"
        inputMode="numeric"
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setWrong(false);
        }}
        animate={shake ? { x: [0, -12, 12, -10, 10, -6, 6, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-4xl bg-white px-8 py-4 text-center text-xl font-semibold text-slate-800 shadow-lg ring-2 ring-white/60 outline-none focus:ring-slate-800/40"
        placeholder="••••"
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-4xl bg-slate-800/90 px-8 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-800"
      >
        Unlock
      </motion.button>

      <AnimatePresence>
        {wrong && (
          <motion.p
            key="wrong"
            className="text-lg font-medium text-rose-600"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Wrong password, try again
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
