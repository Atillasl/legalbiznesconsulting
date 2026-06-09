import { memo, useCallback, useContext, useRef, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContextValue'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'
import { LANGUAGES } from '../../data/languages'
import { useOutsideClick } from '../../hooks/useOutsideClick'

function LanguageSwitcher() {
  const { currentLang, switchLang } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useOutsideClick(dropdownRef, () => setIsOpen(false))

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState)
  }, [])

  const handleLanguageSelect = useCallback(
    (langCode) => {
      switchLang(langCode)
      setIsOpen(false)
    },
    [switchLang]
  )

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <FiGlobe className="text-[#00969A] text-sm" />
        <span>{currentLang.toUpperCase()}</span>
        <FiChevronDown
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          size={14}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 origin-top-right rounded-xl border border-slate-100 bg-white p-1 shadow-xl ring-1 ring-black/5 focus:outline-none animate-fade-in dark:border-slate-800 dark:bg-slate-900">
          <div className="py-1 space-y-0.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex w-full items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  currentLang === lang.code
                    ? 'bg-[#00969A]/10 text-[#00969A] dark:bg-[#00969A]/20'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(LanguageSwitcher)
