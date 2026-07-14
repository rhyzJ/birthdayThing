import { motion } from 'framer-motion'
import type { StepProps } from '../types'
import { JACKIE_PHOTO, JACKIE_EMOJI } from '../constants/assets'

export default function BirthdayReveal({ onAdvance }: StepProps) {
  return (
    <motion.div
      className="flex w-full max-w-md flex-col items-center gap-6 text-center"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 16 }}
    >
      <motion.div
        className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl ring-4 ring-white/70"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 }}
      >
        {JACKIE_PHOTO ? (
          <img src={JACKIE_PHOTO} alt="Jackie" className="h-full w-full object-cover" />
        ) : (
          <span className="text-7xl">{JACKIE_EMOJI}</span>
        )}
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Happy Birthday pookie 🐱🎉
      </motion.h1>

      <motion.p
        className="text-lg font-medium text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        hehe you old unc now 🐾
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
