import { FiShield, FiBriefcase, FiCpu, FiCheckCircle } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function HighlightsSection() {
  const { t } = useLanguage()

  const featureCards = [
    {
      icon: <FiShield className="text-xl" />,
      title: t('home.highlights.cards.compliance.title'),
      desc: t('home.highlights.cards.compliance.desc')
    },
    {
      icon: <FiBriefcase className="text-xl" />,
      title: t('home.highlights.cards.contracts.title'),
      desc: t('home.highlights.cards.contracts.desc')
    },
    {
      icon: <FiCpu className="text-xl" />,
      title: t('home.highlights.cards.digital.title'),
      desc: t('home.highlights.cards.digital.desc')
    },
    {
      icon: <FiCheckCircle className="text-xl" />,
      title: t('home.highlights.cards.growth.title'),
      desc: t('home.highlights.cards.growth.desc')
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-teal-700">
            {t('home.highlights.subtitle')}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t('home.highlights.title')}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {t('home.highlights.description')}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00969A]/10 text-[#00969A]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#00969A]/10 blur-3xl" />
          <div className="space-y-6">
            <div className="animate-float rounded-[2rem] bg-slate-50/95 p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/60 dark:bg-slate-900/90 dark:ring-slate-700/60">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00969A]">{t('home.highlights.cardBadge1')}</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{t('home.highlights.cardTitle1')}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t('home.highlights.cardDesc1')}</p>
            </div>
            <div className="animate-float delay-150 rounded-[2rem] bg-slate-950/95 p-8 shadow-xl shadow-slate-950/20 ring-1 ring-slate-800/60 dark:bg-slate-900/90">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{t('home.highlights.cardBadge2')}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{t('home.highlights.cardTitle2')}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{t('home.highlights.cardDesc2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
