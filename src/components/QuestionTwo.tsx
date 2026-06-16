import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StepProps } from "../types";
import Confetti from "./Confetti";
import { GRIMACE_FACE, MLEM_FACE } from "../constants/assets";

export default function QuestionTwo({ onAdvance }: StepProps) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);
  const [errorShortName, setErrorShortName] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === "dakota") {
      setError(false);
      setConfetti(true);
      setTimeout(onAdvance, 1400);
    } else if (value.trim().toLowerCase() === "kota") {
      setErrorShortName(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
      {confetti && <Confetti onComplete={() => setConfetti(false)} />}

      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        What's your name? ✍️
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center gap-5"
      >
        <motion.input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type it in pls stoopid...x"
          autoFocus
          animate={shake ? { x: [0, -12, 12, -10, 10, -6, 6, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full rounded-4xl bg-white px-6 py-4 text-center text-xl font-medium text-slate-800 shadow-lg outline-none ring-2 transition placeholder:text-slate-400 ${
            error ? "ring-rose-400" : "ring-white/60 focus:ring-sky-300"
          }`}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-4xl bg-slate-800 px-10 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-900"
        >
          Continue ➡️
        </motion.button>
      </form>

      <AnimatePresence>
        {error && (
          <motion.div
            key="err"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {GRIMACE_FACE && (
              <img
                src={GRIMACE_FACE}
                alt="grimace"
                className="h-32 w-32 rounded-3xl object-cover shadow-lg"
              />
            )}
            <p className="text-lg font-medium text-rose-600">
              Nope. Not even close. Try again dumdum
            </p>
          </motion.div>
        )}
        {errorShortName && (
          <motion.div
            key="errShortName"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {MLEM_FACE && (
              <img
                src={MLEM_FACE}
                alt="mlem"
                className="h-32 w-32 rounded-3xl object-cover shadow-lg"
              />
            )}
            <p className="text-lg font-medium text-rose-600">
              Nada use proper name pls dumdum x
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
