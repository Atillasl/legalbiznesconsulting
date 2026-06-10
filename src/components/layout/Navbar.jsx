import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { LANGUAGES } from '../../data/languages'
import { FiMenu, FiX, FiGlobe, FiChevronDown, FiLayers, FiBriefcase, FiCpu, FiCode } from 'react-icons/fi'

export default function Navbar() {
  const { currentLang, switchLang, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const langMenuRef = useRef(null)
  const servicesMenuRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Navigation data with clean names (no "nav." prefix)
  const navigationItems = [
    { name: t('nav.home'), href: '/', label: 'Home' },
    { name: t('nav.services'), href: '/services', label: 'Services', dropdown: true },
    { name: t('nav.blog'), href: '/blog', label: 'Blog' },
    { name: t('nav.contact'), href: '/contact', label: 'Contact' },
  ]

  // Services dropdown menu
  const servicesMenu = [
    { name: t('footer.services.corporate'), icon: <FiBriefcase className="text-lg" /> },
    { name: t('footer.services.contract'), icon: <FiCode className="text-lg" /> },
    { name: t('footer.services.property'), icon: <FiBriefcase className="text-lg" /> },
    { name: t('footer.services.tax'), icon: <FiCode className="text-lg" /> },
    { name: t('footer.tech.web'), icon: <FiCpu className="text-lg" /> },
    { name: t('footer.tech.app'), icon: <FiCpu className="text-lg" /> },
  ]

  const languages = LANGUAGES
  const currentLanguage = languages.find((lang) => lang.code === currentLang) ?? languages[0]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-[#f7f3ee]/90 backdrop-blur-md transition-all dark:border-slate-800/80 dark:bg-[#161412]/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO SAHƏSİ */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00969A] text-white shadow-md shadow-[#00969A]/20">
              <FiLayers className="text-xl" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              LBC
            </span>
          </Link>

          {/* DESKTOP NAVİQASİYA LİNK-LƏRİ */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => 
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  ref={servicesMenuRef}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-[#0f766e] font-semibold'
                        : 'text-slate-600 hover:text-[#0f766e] dark:text-slate-300 dark:hover:text-[#33d6c0]'
                    }`}
                  >
                    {item.name}
                    <FiChevronDown className={`text-xs transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-60 origin-top-left rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 z-50">
                      <div className="p-3">
                        <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {t('footer.titles.legal')}
                        </div>
                        {servicesMenu.slice(0, 4).map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0f766e] dark:text-slate-300 dark:hover:bg-slate-800"
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        ))}
                        <div className="border-t border-slate-200 px-3 py-2 mt-3 dark:border-slate-800">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                            {t('footer.titles.tech')}
                          </div>
                          {servicesMenu.slice(4).map((service, idx) => (
                            <Link
                              key={idx}
                              to="/services"
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0f766e] dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                              {service.icon}
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#00969A] font-semibold'
                      : 'text-slate-600 hover:text-[#00969A] dark:text-slate-300 dark:hover:text-[#00969A]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* DESKTOP SAĞ HİSSƏ */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* MULTI-LANGUAGE DROPDOWN */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="inline-flex min-w-[5.5rem] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <FiGlobe className="text-slate-400" />
                <span className="uppercase">{currentLanguage.label}</span>
                <FiChevronDown className={`text-xs transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-2xl border border-slate-100 bg-slate-50 p-1.5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLang(lang.code)
                        setIsLangOpen(false)
                      }}
                      className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#00969A]/10 font-semibold text-[#00969A] dark:bg-[#00969A]/20'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                    >
                      {lang.displayName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA MÜRACİƏT DÜYMƏSİ */}
            <Link to="/contact" className="rounded-xl bg-[#00969A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#007A7E]">
              {t('nav.consultation')}
            </Link>
          </div>

          {/* MOBİL MENYU DÜYMƏSİ */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => switchLang(currentLang === 'az' ? 'en' : currentLang === 'en' ? 'ru' : 'az')}
              className="min-w-[4.5rem] rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold uppercase text-slate-600 dark:border-slate-800 dark:text-slate-400"
            >
              {currentLanguage.label}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBİL RESPONSIVE PANEL */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-[#f7f3ee] px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950 animate-fadeIn">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#00969A] dark:text-slate-300 dark:hover:bg-slate-900"
                    >
                      {item.name}
                      <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {servicesMenu.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#00969A] dark:text-slate-400 dark:hover:bg-slate-900"
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#00969A] dark:text-slate-300 dark:hover:bg-slate-900"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl bg-[#00969A] py-3.5 text-center text-sm font-semibold text-white shadow-sm"
            >
              {t('nav.consultation')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}