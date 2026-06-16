import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { RHY_PHOTO, RHY_EMOJI } from '../constants/assets'
import BlossomFlowers from './BlossomFlowers'

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
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
  )

  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      {/* Magical night garden — full-screen backdrop */}
      <BlossomFlowers />

      {/* Basketball rain over the scene */}
      <div className="pointer-events-none fixed inset-0 z-20">
        {balls.map((b) => (
          <motion.span
            key={b.id}
            className="absolute top-[-10%]"
            style={{ left: `${b.left}%`, fontSize: b.size }}
            initial={{ y: '-15vh', x: 0, opacity: 0, rotate: 0 }}
            animate={{ y: '115vh', x: b.drift, opacity: [0, 1, 1, 0.9], rotate: b.spin }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              ease: 'easeIn',
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          >
            🏀
          </motion.span>
        ))}
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-8 z-30 flex justify-center px-4">
      <motion.div
        className="pointer-events-auto flex w-[min(90vw,28rem)] flex-col items-center gap-4 rounded-5xl border border-white/15 bg-white/10 px-8 py-7 text-center shadow-2xl backdrop-blur-md"
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.4 }}
      >
        <motion.h1
          className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Surprise! 💐
        </motion.h1>

        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-pink-200/40 shadow-lg ring-4 ring-white/60"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.8 }}
          >
            {RHY_PHOTO ? (
              <img src={RHY_PHOTO} alt="Rhy" className="h-full w-full object-cover" />
            ) : (
              <span className="text-4xl">{RHY_EMOJI}</span>
            )}
          </motion.div>

          <motion.p
            className="text-lg font-semibold text-white/90 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            From Rhy (the cooler one) 😘
          </motion.p>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
