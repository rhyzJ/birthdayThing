import { useState } from 'react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import type { StepProps } from '../types'
import XModal from './XModal'
import TickOverlay from './TickOverlay'
import {
  RHY_PHOTO,
  NOODLE_PHOTO,
  DAKOTA_PHOTO,
  RHY_EMOJI,
} from '../constants/assets'

type Choice = 'rhy' | 'noodle' | 'dakota'

const CORRECT_ORDER: Choice[] = ['rhy', 'noodle', 'dakota']

const LABELS: Record<Choice, string> = {
  rhy: 'Rhy ',
  noodle: 'Lack of balls',
  dakota: 'Dahkodah',
}

const PHOTOS: Record<Choice, string> = {
  rhy: RHY_PHOTO,
  noodle: NOODLE_PHOTO,
  dakota: DAKOTA_PHOTO,
}

export default function QuestionThree({ onAdvance }: StepProps) {
  const [order, setOrder] = useState<Choice[]>(['dakota', 'rhy', 'noodle'])
  const [xMessage, setXMessage] = useState<string | null>(null)
  const [showTick, setShowTick] = useState(false)

  const handleDone = () => {
    if (order.every((c, i) => c === CORRECT_ORDER[i])) {
      setShowTick(true)
      return
    }
    setXMessage('How dare you')
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
      <motion.h1
        className="text-4xl font-bold text-slate-800 sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Order the following by gangsta-ness
      </motion.h1>

      <p className="text-base font-medium text-slate-500">
        Drag to reorder pls - most gangsta at the top lamest at the bottom.
      </p>

      <Reorder.Group
        axis="y"
        values={order}
        onReorder={setOrder}
        className="flex w-full flex-col gap-4"
      >
        {order.map((choice, index) => (
          <Reorder.Item
            key={choice}
            value={choice}
            whileDrag={{ scale: 1.04 }}
            className={`flex cursor-grab items-center gap-3 rounded-4xl px-8 py-4 text-xl font-semibold text-slate-800 shadow-lg ring-2 ring-white/60 active:cursor-grabbing ${
              choice === 'rhy'
                ? 'bg-gradient-to-r from-sky-300 to-sky-200'
                : 'bg-white'
            }`}
          >
            <span className="text-lg font-bold text-slate-400">
              {index + 1}.
            </span>
            {PHOTOS[choice] ? (
              <img
                src={PHOTOS[choice]}
                alt={choice}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
              />
            ) : (
              choice === 'rhy' && <span className="text-2xl">{RHY_EMOJI}</span>
            )}
            <span className="flex-1 text-left">{LABELS[choice]}</span>
            <span className="text-2xl text-slate-300">⠿</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDone}
        className="rounded-4xl bg-slate-800 px-10 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-900"
      >
        Done ✅
      </motion.button>

      <AnimatePresence>
        {xMessage && (
          <XModal message={xMessage} onDismiss={() => setXMessage(null)} />
        )}
        {showTick && <TickOverlay onComplete={onAdvance} />}
      </AnimatePresence>
    </div>
  )
}
