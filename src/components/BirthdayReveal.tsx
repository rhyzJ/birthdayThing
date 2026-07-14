import { motion } from 'framer-motion'
import type { StepProps } from '../types'
import { JACKIE_REVEAL_PHOTO, JACKIE_EMOJI } from '../constants/assets'

export default function BirthdayReveal({ onAdvance }: StepProps) {
  return (
    <motion.div
      className="flex w-full max-w-md flex-col items-center gap-6 text-center"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 16 }}
    >
      <motion.div
        className="flex w-56 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl ring-4 ring-white/70"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 }}
      >
        {JACKIE_REVEAL_PHOTO ? (
          <img src={JACKIE_REVEAL_PHOTO} alt="Jackie" className="h-auto w-full object-cover" />
        ) : (
          <span className="py-10 text-7xl">{JACKIE_EMOJI}</span>
        )}
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Happy 30th Birfday pooker
      </motion.h1>

      <motion.p
        className="text-lg font-medium text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        hehe you old wize unc now
      </motion.p>

      <motion.button
        onClick={onAdvance}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-2 animate-pulse-glow rounded-4xl bg-sky-card px-10 py-4 text-xl font-bold text-slate-800 shadow-lg"
      >
        Open Your Gift 🎁
      </motion.button>
    </motion.div>
  )
}
