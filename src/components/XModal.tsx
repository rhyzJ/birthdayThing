import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface XModalProps {
  message: string
  onDismiss: () => void
}

export default function XModal({ message, onDismiss }: XModalProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 2000)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex w-full max-w-sm flex-col items-center gap-5 rounded-5xl bg-white px-8 py-10 text-center shadow-2xl"
        initial={{ scale: 0.6, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100"
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 14, delay: 0.1 }}
        >
          <span className="text-6xl font-bold text-red-500">✗</span>
        </motion.div>
        <p className="text-2xl font-semibold text-red-500">{message}</p>
      </motion.div>
    </motion.div>
  )
}
