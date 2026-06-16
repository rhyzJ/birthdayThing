// Shared step state for the birthday card flow.
export enum Step {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  Reveal,
  Gift,
}

// Common shape for a screen that advances the global flow.
export interface StepProps {
  onAdvance: () => void
}
