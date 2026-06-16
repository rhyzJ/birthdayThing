import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Step } from './types'
import { BACKGROUND_IMAGE } from './constants/assets'
import QuestionOne from './components/QuestionOne'
import QuestionTwo from './components/QuestionTwo'
import QuestionThree from './components/QuestionThree'
import BirthdayReveal from './components/BirthdayReveal'
import GiftAnimation from './components/GiftAnimation'

// Fade + slide transition shared by every step.
const variants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
}

export default function App() {
  const [step, setStep] = useState<Step>(Step.QuestionOne)

  const renderStep = () => {
    switch (step) {
      case Step.QuestionOne:
        return <QuestionOne onAdvance={() => setStep(Step.QuestionTwo)} />
      case Step.QuestionTwo:
        return <QuestionTwo onAdvance={() => setStep(Step.QuestionThree)} />
      case Step.QuestionThree:
        return <QuestionThree onAdvance={() => setStep(Step.Reveal)} />
      case Step.Reveal:
        return <BirthdayReveal onAdvance={() => setStep(Step.Gift)} />
      case Step.Gift:
        return <GiftAnimation />
    }
  }

  return (
    <main
      className="relative flex min-h-full w-full items-center justify-center overflow-hidden bg-sky-card px-6 py-10"
      style={
        BACKGROUND_IMAGE
          ? {
              backgroundImage: `url(${BACKGROUND_IMAGE})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Soft decorative blobs for depth (only when no custom background).
          Wrapped in a viewport-sized clipping layer so their off-screen bleed
          doesn't expand the page's scroll width and skew the centering. */}
      {!BACKGROUND_IMAGE && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        </div>
      )}

      <div className="relative z-10 flex w-full items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex w-full items-center justify-center"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
