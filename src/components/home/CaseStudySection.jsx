import { useLanguage } from '../../hooks/useLanguage'
import { techImages } from '../../assets'

export default function CaseStudySection() {
  const { t } = useLanguage()

  const points = [
    t('home.premium.caseStudy.points.0'),
    t('home.premium.caseStudy.points.1'),
    t('home.premium.caseStudy.points.2')
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-lg dark:border-slate-800 dark:bg-[#121212]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#059aa2]">{t('home.premium.caseStudy.badge')}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {t('home.premium.caseStudy.title')}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            {t('home.premium.caseStudy.description')}
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-[#059aa2]/10 text-[#059aa2]">{String(index + 1).padStart(2, '0')}</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#059aa2]/5 p-10 backdrop-blur-xl">
          <div className="rounded-[1.75rem] border border-[#059aa2]/15 bg-white p-8 shadow-xl shadow-slate-950/10 dark:bg-slate-950 dark:border-slate-800">
            {/* Decorative image (from assets) */}
            <div className="mb-6">
              <img src={techImages[0]} alt="case-study" className="w-full rounded-lg object-cover h-44 sm:h-56" loading="lazy" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#059aa2]">{t('home.premium.caseStudy.clientInsight')}</p>
            <p className="mt-6 text-2xl font-semibold leading-relaxed text-slate-950 dark:text-white">
              {t('home.premium.caseStudy.quote')}
            </p>
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
              {t('home.premium.caseStudy.quoteAuthor')}
            </p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">{t('home.premium.caseStudy.resultTag')}</p>
              <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{t('home.premium.caseStudy.resultTitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
