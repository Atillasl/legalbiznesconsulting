import { useLanguage } from '../../hooks/useLanguage'
import { Link } from 'react-router-dom'
import { FiLayers, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const legalServices = [
    { name: t('footer.services.corporate'), to: '/services' },
    { name: t('footer.services.contract'), to: '/services' },
    { name: t('footer.services.property'), to: '/services' },
    { name: t('footer.services.tax'), to: '/services' },
  ]

  const techServices = [
    { name: t('footer.tech.web'), to: '/services' },
    { name: t('footer.tech.app'), to: '/services' },
    { name: t('footer.tech.consulting'), to: '/services' },
  ]

  const quickLinks = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.services'), to: '/services' },
    { name: t('nav.blog'), to: '/blog' },
    { name: t('nav.contact'), to: '/contact' },
  ]

  return (
    <footer className="border-t border-slate-200/70 bg-[#f7f3ee] text-slate-700 transition-all dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00969A] text-white shadow-lg shadow-[#00969A]/20">
                <FiLayers className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Legal Business Consulting</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t('footer.description')}
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">{t('footer.titles.legal')}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {t('footer.quickSummary.legal')}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">{t('footer.titles.tech')}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {t('footer.quickSummary.tech')}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('footer.titles.legal')}
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0 text-sm">
              {legalServices.map((service, i) => (
                <li key={i}>
                  <Link to={service.to} className="transition-colors hover:text-[#00969A] dark:hover:text-[#00969A]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('footer.titles.tech')}
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0 text-sm">
              {techServices.map((service, i) => (
                <li key={i}>
                  <Link to={service.to} className="transition-colors hover:text-[#00969A] dark:hover:text-[#00969A]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('footer.titles.links')}
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="transition-colors hover:text-[#00969A] dark:hover:text-[#00969A]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-y border-slate-100 py-8 sm:grid-cols-3 dark:border-slate-800/80">
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#00969A] dark:bg-slate-900">
              <FiPhone />
            </span>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">{t('contact.phone')}</p>
              <p className="text-xs text-slate-400 mt-0.5">+994 (50) 000-0000</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#00969A] dark:bg-slate-900">
              <FiMail />
            </span>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">{t('contact.email')}</p>
              <p className="text-xs text-slate-400 mt-0.5">info@legalbiznes.az</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#00969A] dark:bg-slate-900">
              <FiMapPin />
            </span>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">{t('contact.addressTitle')}</p>
              <p className="text-xs text-slate-400 mt-0.5">Baki sehri, Narimanov r.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/70 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">Copyright {currentYear} Legal Business Consulting. {t('footer.allRightsReserved')}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#" className="hover:text-[#00969A] transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-[#00969A] transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
