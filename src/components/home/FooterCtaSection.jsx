import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { FiArrowRight } from 'react-icons/fi'

export default function FooterCtaSection() {
  const { t } = useLanguage()

  return (
    // Orijinal parlaq firuzəyi fon və böyük padding qorundu
    <section className="bg-[#059aa2] px-4 py-10 text-white sm:px-6 lg:px-8 antialiased">
      {/* Orijinal böyük rounded-[2rem] qutu və yerləşmə strukturu saxlanıldı */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/10 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        
        {/* TEXT CONTENT - Tipoqrafiya minimalist və modern edildi */}
        <div className="space-y-2">
          {/* Badge daha incə və geniş tracking ilə zərifləşdirildi */}
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
            {t('home.premium.cta.badge')}
          </p>
          {/* Başlıq font-light və tracking-tight ilə modern korporativ üsluba gətirildi */}
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            {t('home.premium.cta.title')}
          </h2>
        </div>

        {/* BUTTON - Orijinal ağ düymə modern ox interaktivliyi ilə minimalistləşdirildi */}
        <div className="shrink-0">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#059aa2] shadow-xl shadow-slate-950/10 transition-all duration-300 hover:bg-slate-50 hover:scale-[1.02]"
          >
            <span>{t('home.premium.cta.button')}</span>
            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}