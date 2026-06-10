import { useLanguage } from '../../hooks/useLanguage'

export default function TrustBarSection() {
  const { t } = useLanguage()

  const metrics = [
    {
      label: t('home.premium.trust.metrics.retainers.label'),
      value: t('home.premium.trust.metrics.retainers.value')
    },
    {
      label: t('home.premium.trust.metrics.launches.label'),
      value: t('home.premium.trust.metrics.launches.value')
    },
    {
      label: t('home.premium.trust.metrics.governance.label'),
      value: t('home.premium.trust.metrics.governance.value')
    },
    {
      label: t('home.premium.trust.metrics.crossBorder.label'),
      value: t('home.premium.trust.metrics.crossBorder.value')
    }
  ]

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#059aa2]">{t('home.premium.trust.badge')}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {t('home.premium.trust.title')}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {t('home.premium.trust.description')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
          {/* client logos removed as requested */}
        </div>
      </div>
    </section>
  )
}
