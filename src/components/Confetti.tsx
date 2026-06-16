import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface ConfettiProps {
  /** Called once the burst animation has finished so the parent can unmount it. */
  onComplete?: () => void
  /** Number of confetti pieces. */
  count?: number
}

const COLORS = ['#ADD8E6', '#7EC8E3', '#FFD166', '#EF476F', '#06D6A0', '#FFFFFF']

// Deterministic-ish pseudo random so each piece differs without needing a seed lib.
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Confetti({ onComplete, count = 80 }: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(7, 14),
        color: COLORS[Math.floor(rand(0, COLORS.length))],
        delay: rand(0, 0.4),
        duration: rand(1.6, 2.8),
        drift: rand(-120, 120),
        rotate: rand(180, 900),
        round: Math.random() > 0.5,
      })),
    [count],
  )

  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 3200)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-5%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.round ? '9999px' : '2px',
          }}
          initial={{ y: '-10vh', x: 0, opacity: 1, rotate: 0 }}
          animate={{ y: '110vh', x: p.drift, opacity: [1, 1, 0], rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}
