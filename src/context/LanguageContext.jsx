import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContextValue'
import { LANGUAGE_CODES } from '../data/languages'
import az from '../locales/az.json'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

const translations = { az, en, ru }

const getNestedTranslation = (obj, path) => {
  if (!path) return undefined
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

function getInitialLanguage() {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return 'az'
  }

  const savedLang = localStorage.getItem('lbc_lang')
  return LANGUAGE_CODES.includes(savedLang) ? savedLang : 'az'
}

function isSupportedLanguage(lang) {
  return LANGUAGE_CODES.includes(lang)
}

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(getInitialLanguage)

  const switchLang = (newLang) => {
    if (!isSupportedLanguage(newLang)) {
      return
    }

    setCurrentLang(newLang)
    localStorage.setItem('lbc_lang', newLang)
  }

  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  const contextValue = useMemo(
    () => ({
      currentLang,
      switchLang,
      t: (key) =>
        getNestedTranslation(translations[currentLang] ?? translations.az, key) ??
        getNestedTranslation(translations.az, key) ??
        key,
    }),
    [currentLang]
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}
