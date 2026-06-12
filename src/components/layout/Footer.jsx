import { useLanguage } from '../../hooks/useLanguage'
import { Link } from 'react-router-dom'
import { FiLayers, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const allServices = [
    { name: t('footer.services.corporate'), to: '/services' },
    { name: t('footer.services.contract'), to: '/services' },
    { name: t('footer.services.property'), to: '/services' },
    { name: t('footer.services.tax'), to: '/services' },
    { name: t('footer.tech.web'), to: '/services' },
    { name: t('footer.tech.app'), to: '/services' },
  ]

  const quickLinks = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.services'), to: '/services' },
    { name: t('nav.blog'), to: '/blog' },
    { name: t('nav.contact'), to: '/contact' },
  ]

  return (
    // Sərt fon keçidləri yerinə birbaşa saytın öz fona uyğunlaşan şəffaf lüks kənarlıq
    <footer className="border-t border-slate-500/5 bg-transparent text-slate-500 transition-all dark:text-slate-400 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* MAIN LAYOUT GRID - Şaquli uzanmanın qarşısını alan kompakt üfüqi düzülüş */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:items-start pb-10">
          
          {/* SOL TƏRƏF - Loqo, Təsvir və Əlaqə məlumatları bir qutuda sıxlaşdırıldı */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <FiLayers className="text-lg text-[#059aa2]" />
              <span className="text-sm font-medium tracking-wide text-slate-900 dark:text-white">
                Legal Business Consulting
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-slate-400 dark:text-slate-500 font-light">
              {t('footer.description')}
            </p>
            {/* Əlaqə məlumatları artıq ayrıca sətir deyil, bura kompakt ikon siyahısı kimi əlavə olundu */}
            <div className="space-y-2 pt-2 text-xs font-light font-mono text-slate-400 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#059aa2]/60 text-sm" />
                <span>+994 (50) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-[#059aa2]/60 text-sm" />
                <span>info@legalbiznes.az</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#059aa2]/60 text-sm" />
                <span>Baku, Narimanov r.</span>
              </div>
            </div>
          </div>

          {/* SAĞ TƏRƏF - Linklər yan-yana çox yığcam sütunlar şəklindədir */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            
            {/* Xidmətlər Sütunu */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                {t('nav.services')}
              </h3>
              <ul className="space-y-2 text-xs font-light">
                {allServices.map((service, i) => (
                  <li key={i}>
                    <Link to={service.to} className="transition-colors hover:text-[#059aa2] dark:hover:text-[#059aa2]">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sürətli Keçidlər Sütunu */}
            <div className="space-y-3 lg:pr-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                {t('footer.titles.links')}
              </h3>
              <ul className="space-y-2 text-xs font-light">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to} className="transition-colors hover:text-[#059aa2] dark:hover:text-[#059aa2]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR - Müəllif hüquqları və sənədlər (Tək bir incə sətirdə) */}
        <div className="border-t border-slate-500/5 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-light">
            &copy; {currentYear} Legal Business Consulting. {t('footer.allRightsReserved')}
          </p>
          <div className="flex items-center gap-5 text-[11px] text-slate-400 dark:text-slate-500 font-light">
            <a href="#" className="transition-colors hover:text-[#059aa2]">{t('footer.privacy')}</a>
            <a href="#" className="transition-colors hover:text-[#059aa2]">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}