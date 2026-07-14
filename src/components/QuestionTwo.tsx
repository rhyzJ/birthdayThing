import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StepProps } from "../types";
import TickOverlay from "./TickOverlay";
import { GRIMACE_FACE, MLEM_FACE } from "../constants/assets";

export default function QuestionTwo({ onAdvance }: StepProps) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [errorType, setErrorType] = useState<null | "wrong" | "shortName">(
    null,
  );
  const [showTick, setShowTick] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = value.trim().toLowerCase();

    if (name === "pookie") {
      setErrorType(null);
      setShowTick(true);
      return;
    }

    setErrorType(name === "jackie" ? "shortName" : "wrong");
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
            errorType ? "ring-rose-400" : "ring-white/60 focus:ring-sky-300"
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

      <AnimatePresence mode="wait">
        {showTick && (
          <TickOverlay
            key="tick"
            onComplete={onAdvance}
            message="iz correct"
          />
        )}
        {errorType === "wrong" && (
          <motion.div
            key="err"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-lg font-medium text-rose-600">
              Nope. Not even close.
            </p>
            {GRIMACE_FACE && (
              <img
                src={GRIMACE_FACE}
                alt="grimace"
                className="w-48 h-auto rounded-3xl shadow-lg"
              />
            )}
          </motion.div>
        )}
        {errorType === "shortName" && (
          <motion.div
            key="errShortName"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-lg font-medium text-rose-600">
              nahhh thats not what i call u pookie 🐱
            </p>
            {MLEM_FACE && (
              <img
                src={MLEM_FACE}
                alt="mlem"
                className="w-48 h-auto rounded-3xl shadow-lg"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
