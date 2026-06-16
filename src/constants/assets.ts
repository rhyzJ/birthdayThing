// 🔁 Replace these with real file paths or URLs.
// Drop real files into src/assets/ and import them, or point these at public/ paths or remote URLs.
// Anything left as an empty string ('') falls back to a built-in emoji / placeholder.

// Resolves a file in /public against Vite's base path so it works both
// locally (base '/') and on GitHub Pages (base '/birthdayThing/').
// Empty strings pass through untouched so the emoji fallbacks still kick in.
const asset = (path: string) =>
  path ? `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}` : ''

export const DAKOTA_PHOTO = asset('/dakotaFace.png') // Dakota's photo — hero/avatar on the reveal screen
export const RHY_PHOTO = asset('/rhya.png') // Rhy's photo — used in the gift screen + "Who is cooler?" step
export const NOODLE_PHOTO = asset('/noodle.png') // Noodle the dog — Q3 ranking option
export const BACKGROUND_IMAGE = '' // Optional background image or pattern (CSS url value)
export const WRONG_ANSWER_GIF = '' // Funny reaction GIF for wrong answers
export const CELEBRATION_GIF = '' // Celebration GIF for the final screen

// 🤪 Reaction faces for wrong answers.
export const HATE_ME_FACE = asset('/doYouHateMe.png') // Q1 — said it's NOT their birthday
export const GRIMACE_FACE = asset('/grimace.png') // Q2 — wrong name
export const MLEM_FACE = asset('/mlem.png') // Q2 — used a nickname instead of full name

// 😜 Emoji fallbacks used when the matching photo above is empty.
export const DAKOTA_EMOJI = '🦖'
export const RHY_EMOJI = '✨'

// 🎂 Theme color (kept here too for convenience / JS access).
export const THEME_COLOR = '#ADD8E6'
