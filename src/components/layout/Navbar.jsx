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

  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services', dropdown: true },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const servicesMenu = [
    { name: t('footer.services.corporate'), icon: <FiBriefcase className="text-base" /> },
    { name: t('footer.services.contract'), icon: <FiCode className="text-base" /> },
    { name: t('footer.services.property'), icon: <FiBriefcase className="text-base" /> },
    { name: t('footer.services.tax'), icon: <FiCode className="text-base" /> },
    { name: t('footer.tech.web'), icon: <FiCpu className="text-base" /> },
    { name: t('footer.tech.app'), icon: <FiCpu className="text-base" /> },
  ]

  const languages = LANGUAGES
  const currentLanguage = languages.find((lang) => lang.code === currentLang) ?? languages[0]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-500/5 bg-white/70 backdrop-blur-md transition-all dark:border-slate-900/40 dark:bg-slate-950/70 antialiased">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO SAHƏSİ */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#059aa2] text-white shadow-lg shadow-[#059aa2]/10">
              <FiLayers className="text-base" />
            </div>
            <span className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
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
                    className={`flex items-center gap-1 text-xs font-medium tracking-wide transition-colors ${
                      location.pathname === item.href
                        ? 'text-[#059aa2] font-semibold'
                        : 'text-slate-500 hover:text-[#059aa2] dark:text-slate-400 dark:hover:text-[#59c9ca]'
                    }`}
                  >
                    {item.name}
                    <FiChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* BAĞLANMA PROBLEMİNİ HƏLL EDƏN HİSSƏ: mt-2 silindi, pt-5 əlavə edildi */}
                  {isServicesOpen && (
                    <div className="absolute left-0 top-full w-64 pt-5 origin-top-left animate-fadeIn">
                      {/* Əsl vizual qutu bura daxil edildi, kənarları lüks və incədir */}
                      <div className="rounded-xl border border-slate-500/10 bg-white/95 p-3.5 shadow-xl backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/95">
                        <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-2 px-2">
                          {t('footer.titles.legal')}
                        </div>
                        <div className="space-y-0.5">
                          {servicesMenu.slice(0, 4).map((service, idx) => (
                            <Link
                              key={idx}
                              to="/services"
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-xs text-slate-500 transition-colors hover:bg-[#059aa2]/5 hover:text-[#059aa2] dark:text-slate-400 dark:hover:bg-slate-900/60"
                            >
                              <span className="text-[#059aa2]/80">{service.icon}</span>
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        
                        <div className="border-t border-slate-500/5 mt-3 pt-3 dark:border-slate-800/40">
                          <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-2 px-2">
                            {t('footer.titles.tech')}
                          </div>
                          <div className="space-y-0.5">
                            {servicesMenu.slice(4).map((service, idx) => (
                              <Link
                                key={idx}
                                to="/services"
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-xs text-slate-500 transition-colors hover:bg-[#059aa2]/5 hover:text-[#059aa2] dark:text-slate-400 dark:hover:bg-slate-900/60"
                              >
                                <span className="text-[#059aa2]/80">{service.icon}</span>
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#059aa2] font-semibold'
                      : 'text-slate-500 hover:text-[#059aa2] dark:text-slate-400 dark:hover:text-[#59c9ca]'
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
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-500/5 bg-slate-50/30 px-3 py-1.5 text-xs font-medium text-slate-500 transition-all hover:bg-slate-50 dark:border-slate-800/60 dark:bg-slate-900/30 dark:text-slate-400 dark:hover:bg-slate-900"
              >
                <FiGlobe className="text-slate-400 text-xs" />
                <span className="uppercase tracking-wider text-[10px]">{currentLanguage.label}</span>
                <FiChevronDown className={`text-xs transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dil menyusuna da eyni şəkildə qoruyucu pt-4 və zərif animasiya verildi */}
              {isLangOpen && (
                <div className="absolute right-0 top-full w-32 pt-4 origin-top-right animate-fadeIn">
                  <div className="rounded-xl border border-slate-500/5 bg-white/95 p-1 shadow-xl backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/95">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          switchLang(lang.code)
                          setIsLangOpen(false)
                        }}
                        className={`flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                          currentLang === lang.code
                            ? 'bg-[#059aa2]/10 font-medium text-[#059aa2] dark:bg-[#059aa2]/20'
                            : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900'
                        }`}
                      >
                        {lang.displayName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA MÜRACİƏT DÜYMƏSİ - Daha zərif korporativ ölçü */}
            <Link to="/contact" className="rounded-xl bg-[#059aa2] px-4 py-2 text-xs font-medium text-white shadow-lg shadow-[#059aa2]/5 transition-all hover:bg-[#047d82]">
              {t('nav.consultation')}
            </Link>
          </div>

          {/* MOBİL MENYU DÜYMƏSİ */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => switchLang(currentLang === 'az' ? 'en' : currentLang === 'en' ? 'ru' : 'az')}
              className="rounded-xl border border-slate-500/5 px-2.5 py-1.5 text-[10px] font-medium uppercase text-slate-500 dark:border-slate-800 dark:text-slate-400"
            >
              {currentLanguage.label}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-slate-500/5 p-2 text-slate-500 dark:border-slate-800 dark:text-slate-400"
            >
              {isOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBİL PANEL */}
      {isOpen && (
        <div className="border-t border-slate-500/5 bg-white/95 px-6 py-4 md:hidden backdrop-blur-md dark:border-slate-900 dark:bg-slate-950/95">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300"
                    >
                      {item.name}
                      <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-3 space-y-0.5 border-l border-slate-500/5 pl-3 dark:border-slate-800/40">
                        {servicesMenu.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400"
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
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-500/5 dark:border-slate-900">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl bg-[#059aa2] py-2.5 text-center text-xs font-medium text-white"
            >
              {t('nav.consultation')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}