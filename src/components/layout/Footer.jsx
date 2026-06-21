import { useLanguage } from '../../hooks/useLanguage'
import { Link } from 'react-router-dom'
import { FiLayers, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const allServices = [
    { name: t('footer.services.corporate'), to: '/services/corporate' },
    { name: t('footer.services.contract'), to: '/services/contract' },
    { name: t('footer.services.property'), to: '/services' },
    { name: t('footer.services.tax'), to: '/services' },
    { name: t('footer.tech.web'), to: '/services/web-dev' },
    { name: t('footer.tech.app'), to: '/services/app-dev' },
  ]

  const quickLinks = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.services'), to: '/services' },
    { name: t('nav.blog'), to: '/blog' },
    { name: t('nav.contact'), to: '/contact' },
  ]

  return (
    // Footer styling with Hero-like gradient background colors
      <footer className="relative overflow-hidden border-t border-slate-700/30 bg-slate-50 text-slate-700 transition-all dark:border-slate-700/30 dark:bg-slate-950 dark:text-slate-100 antialiased">
      
      {/* Dark gradient background overlay - Hero kimi (Daha yüngül versiya) */}
        {/* Replace background overlays with logo-matching teal gradient (higher contrast) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f7f82] via-[#159fa2] to-[#59c9ca] opacity-85 pointer-events-none block" />
      
      {/* Decorative blur circle */}
      <div className="absolute right-[-10%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-[#059aa2]/8 blur-[100px] pointer-events-none block" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8 text-white">
        
        {/* MAIN LAYOUT GRID - Şaquli uzanmanın qarşısını alan kompakt üfüqi düzülüş */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:items-start pb-10">
          
          {/* SOL TƏRƏF - Loqo, Təsvir və Əlaqə məlumatları bir qutuda sıxlaşdırıldı */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <FiLayers className="text-lg text-white" />
              <span className="text-sm font-semibold tracking-wide text-white drop-shadow-sm">
                Legal Business Consulting
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/95 font-light tracking-wide">
              {t('footer.description')}
            </p>
            {/* Əlaqə məlumatları artıq ayrıca sətir deyil, bura kompakt ikon siyahısı kimi əlavə olundu */}
            <div className="space-y-2 pt-2 text-sm font-light font-mono text-white/95">
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#059aa2] text-sm" />
                <span>+994 (50) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-[#059aa2] text-sm" />
                <span>info@legalbiznes.az</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#059aa2] text-sm" />
                <span>Baku, Narimanov r.</span>
              </div>
            </div>
          </div>

          {/* SAĞ TƏRƏF - Linklər yan-yana çox yığcam sütunlar şəklindədir */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            
            {/* Xidmətlər Sütunu */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white drop-shadow-sm">
                {t('nav.services')}
              </h3>
              <ul className="space-y-2 text-sm font-light text-white/95">
                {allServices.map((service, i) => (
                  <li key={i}>
                    <Link to={service.to} className="transition-colors duration-200 hover:text-white hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sürətli Keçidlər Sütunu */}
            <div className="space-y-3 lg:pr-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white drop-shadow-sm">
                {t('footer.titles.links')}
              </h3>
              <ul className="space-y-2 text-sm font-light text-white/95">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to} className="transition-colors duration-200 hover:text-white hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR - Müəllif hüquqları və sənədlər (Tək bir incə sətirdə) */}
        <div className="border-t border-white/12 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/95 font-light tracking-wide">&copy; {currentYear} Legal Business Consulting. {t('footer.allRightsReserved')}</p>
          <div className="flex items-center gap-5 text-[12px] text-white/95 font-light">
            <a href="#" className="transition-colors duration-200 hover:text-white hover:underline">{t('footer.privacy')}</a>
            <a href="#" className="transition-colors duration-200 hover:text-white hover:underline">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}