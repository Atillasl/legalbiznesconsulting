import { FiArrowRight, FiShield } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'
import heroBg from '../../assets/WhatsApp Image 2026-06-03 at 07.13.33.jpeg'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-[#00969A]/25" />
      <img
        src={heroBg}
        alt="Legal Business Consulting"
        className="pointer-events-none absolute right-8 top-8 hidden h-[65vh] max-w-[40%] object-cover opacity-90 md:block"
      />
      <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-100 shadow-sm shadow-slate-950/20">
        <FiShield /> Legal Business Consulting
      </div>
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20">
        <div className="w-full max-w-2xl text-left">
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.05]">
            {t('home.hero.titleBefore')} <span className="text-teal-300">{t('home.hero.titleAccent1')}</span> {t('home.hero.titleMiddle')} <span className="text-teal-300">{t('home.hero.titleAccent2')}</span> {t('home.hero.titleAfter')}
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            {t('home.hero.description')}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-600"
            >
              {t('home.hero.cta.onlineApp')} <FiArrowRight />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/10 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/15"
            >
              {t('home.hero.cta.ourServices')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
