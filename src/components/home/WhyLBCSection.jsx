import { FiCheckCircle, FiClock, FiGlobe, FiShield } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function WhyLBCSection() {
  const { t } = useLanguage()

  const items = [
    {
      icon: <FiShield className="text-xl" />,
      title: t('home.premium.why.items.executive.title'),
      description: t('home.premium.why.items.executive.description')
    },
    {
      icon: <FiClock className="text-xl" />,
      title: t('home.premium.why.items.speed.title'),
      description: t('home.premium.why.items.speed.description')
    },
    {
      icon: <FiGlobe className="text-xl" />,
      title: t('home.premium.why.items.crossBorder.title'),
      description: t('home.premium.why.items.crossBorder.description')
    },
    {
      icon: <FiCheckCircle className="text-xl" />,
      title: t('home.premium.why.items.clientFocus.title'),
      description: t('home.premium.why.items.clientFocus.description')
    }
  ]

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-20 dark:border-slate-800 dark:bg-[#0e1215] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#059aa2]">{t('home.premium.why.badge')}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {t('home.premium.why.title')}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {t('home.premium.why.description')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#059aa2]/40 hover:shadow-lg dark:border-slate-800 dark:bg-[#111111]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#059aa2]/10 text-[#059aa2]">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
