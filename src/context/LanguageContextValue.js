import { createContext } from 'react'

export const LanguageContext = createContext({
  currentLang: 'az',
  switchLang: () => {},
  t: (key) => key,
})
