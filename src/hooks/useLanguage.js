import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContextValue'

export function useLanguage() {
  return useContext(LanguageContext)
}
