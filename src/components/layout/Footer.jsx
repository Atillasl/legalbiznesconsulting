import { useEffect, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { Link } from 'react-router-dom'
import { FiLayers, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { getPublicContactSettings } from '../../lib/contactService'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [contact, setContact] = useState(null)
  const [isLoadingContact, setIsLoadingContact] = useState(true)

  useEffect(() => {
    let active = true

    getPublicContactSettings()
      .then((settings) => {
        if (active) {
          setContact(settings)
          setIsLoadingContact(false)
        }
      })
      .catch(() => {
        if (active) {
          setContact(null)
          setIsLoadingContact(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const allServices = [
    { name: t('footer.services.corporate'), to: '/services/commercial' },
    { name: t('footer.services.contract'), to: '/services/civil-contracts' },
    { name: t('footer.services.property'), to: '/services/civil-property' },
    { name: t('footer.services.tax'), to: '/services/civil-tax' },
    { name: t('footer.tech.web'), to: '/services/it-1' },
    { name: t('footer.tech.app'), to: '/services/it-2' },
  ]

  const quickLinks = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.services'), to: '/services' },
    { name: t('nav.blog'), to: '/blog' },
    { name: t('nav.contact'), to: '/contact' },
  ]

  return (
    // Footer styling with Hero-like gradient background colors
      <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900 transition-all antialiased dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* MAIN LAYOUT GRID - Şaquli uzanmanın qarşısını alan kompakt üfüqi düzülüş */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:items-start pb-10">
          
          {/* SOL TƏRƏF - Loqo, Təsvir və Əlaqə məlumatları bir qutuda sıxlaşdırıldı */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <FiLayers className="text-lg text-[#059aa2]" />
              <span className="text-sm font-semibold tracking-wide text-slate-900">
                Legal Business Consulting
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 font-light tracking-wide">
              {t('footer.description')}
            </p>
            {/* Əlaqə məlumatları artıq ayrıca sətir deyil, bura kompakt ikon siyahısı kimi əlavə olundu */}
            <div className="space-y-2 pt-2 text-sm font-light font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#059aa2] text-sm" />
                {isLoadingContact ? (
                  <span className="h-3 w-28 animate-pulse rounded bg-slate-200/80" />
                ) : (
                  <span>{contact?.mobile || '-'}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-[#059aa2] text-sm" />
                {isLoadingContact ? (
                  <span className="h-3 w-36 animate-pulse rounded bg-slate-200/80" />
                ) : (
                  <span>{contact?.email || '-'}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#059aa2] text-sm" />
                {isLoadingContact ? (
                  <span className="h-3 w-32 animate-pulse rounded bg-slate-200/80" />
                ) : (
                  <span>{contact?.address || '-'}</span>
                )}
              </div>
            </div>
          </div>

          {/* SAĞ TƏRƏF - Linklər yan-yana çox yığcam sütunlar şəklindədir */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            
            {/* Xidmətlər Sütunu */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-200">
                {t('nav.services')}
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-700">
                {allServices.map((service, i) => (
                  <li key={i}>
                    <Link to={service.to} className="transition-colors duration-200 hover:text-slate-900 hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sürətli Keçidlər Sütunu */}
            <div className="space-y-3 lg:pr-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-200">
                {t('footer.titles.links')}
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-700 dark:text-slate-300">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to} className="transition-colors duration-200 hover:text-slate-900 hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR - Müəllif hüquqları və sənədlər (Tək bir incə sətirdə) */}
        <div className="border-t border-slate-200 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-slate-500 font-light tracking-wide">&copy; {currentYear} Legal Business Consulting. {t('footer.allRightsReserved')}</p>
          <div className="flex items-center gap-5 text-[12px] text-slate-500 font-light">
            <a href="/contact" className="transition-colors duration-200 hover:text-slate-900 hover:underline">{t('footer.privacy')}</a>
            <a href="/contact" className="transition-colors duration-200 hover:text-slate-900 hover:underline">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}