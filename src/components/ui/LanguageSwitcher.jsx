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

  const toggleDropdown = useCallback(() => setIsOpen((p) => !p), [])

  const handleLanguageSelect = useCallback((langCode) => {
    switchLang(langCode)
    setIsOpen(false)
  }, [switchLang])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="group flex items-center gap-2 rounded-full border border-slate-500/10 bg-white/50 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-all duration-300 hover:border-[#059aa2]/30 hover:text-[#059aa2] backdrop-blur-md dark:bg-slate-900/50 dark:border-white/5"
      >
        <FiGlobe size={12} className="text-[#059aa2]" />
        {currentLang.toUpperCase()}
        <FiChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={12}
        />
      </button>

      {/* DROPDOWN MENU - Şüşə effekti */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-32 origin-top-right overflow-hidden rounded-2xl border border-slate-500/10 bg-white/70 p-1.5 shadow-2xl shadow-slate-900/5 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 dark:bg-slate-900/80">
          <div className="space-y-0.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex w-full items-center justify-center rounded-xl px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  currentLang === lang.code
                    ? 'bg-[#059aa2] text-white shadow-lg shadow-[#059aa2]/20'
                    : 'text-slate-400 hover:bg-[#059aa2]/5 hover:text-[#059aa2]'
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