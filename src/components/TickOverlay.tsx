import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface TickOverlayProps {
  onComplete: () => void
  message?: string
}

export default function TickOverlay({ onComplete, message = 'Obviously 😌' }: TickOverlayProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2500)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-green-500/95 p-6 text-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 16 }}
      >
        <span className="text-7xl font-bold text-green-500">✓</span>
      </motion.div>
      <motion.p
        className="text-4xl font-bold text-white drop-shadow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {message}
      </motion.p>
    </motion.div>
  )
}
