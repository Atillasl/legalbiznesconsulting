import { FiArrowRight, FiShield, FiCheckCircle } from 'react-icons/fi'
import { useTranslation } from '../../context/LanguageProvider' // hook-un yerləşdiyi yerə uyğun
import { techImages } from '../../assets'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center justify-start overflow-hidden bg-white px-4 py-20 text-left transition-all dark:bg-slate-950">
      
      {/* 1. BACKGROUND AESTHETICS */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00969A]/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />
      <div className="absolute bottom-10 right-10 -z-10 h-48 w-48 rounded-full bg-slate-100 blur-[60px] dark:bg-slate-900/50" />

      {/* 2. MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6 lg:pr-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#00969A]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#00969A] uppercase dark:bg-[#00969A]/20">
          <FiShield className="animate-pulse" /> Legal Business Consulting
        </div>

        {/* H1 Başlıq - json daxilində html tag işlətməmək üçün hissəli vermək daha yaxşıdır */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.15] dark:text-white">
          {t('hero.titleBefore')} <span className="relative inline-block text-[#00969A]">{t('hero.titleAccent1')}</span> {t('hero.titleMiddle')} <span className="text-[#00969A]">{t('hero.titleAccent2')}</span> {t('hero.titleAfter')}
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg md:text-xl dark:text-slate-400">
          {t('hero.description')}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[#00969A]" /> {t('hero.badges.consulting')}
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[#00969A]" /> {t('hero.badges.tech')}
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[#00969A]" /> {t('hero.badges.privacy')}
          </span>
        </div>

        {/* Call To Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#00969A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#00969A]/20 transition-all hover:bg-[#007A7E] hover:shadow-xl dark:shadow-none"
          >
            {t('hero.cta.onlineApp')} <FiArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {t('hero.cta.ourServices')}
          </a>
        </div>

        </div>

        {/* Large illustrative image for hero on wide screens */}
        <div className="hidden lg:flex items-center justify-center">
          <img src={techImages[1]} alt="hero-illustration" className="w-full max-w-2xl rounded-2xl object-cover shadow-xl" loading="lazy" />
        </div>
      </div>
    </section>
  )
}