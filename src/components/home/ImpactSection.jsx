import { FiCheckCircle, FiChevronRight } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function ImpactSection() {
  const { t } = useLanguage()

  const cards = [
    {
      number: '01',
      title: t('home.premium.impact.cards.clarity.title'),
      desc: t('home.premium.impact.cards.clarity.desc')
    },
    {
      number: '02',
      title: t('home.premium.impact.cards.alignment.title'),
      desc: t('home.premium.impact.cards.alignment.desc')
    },
    {
      number: '03',
      title: t('home.premium.impact.cards.execution.title'),
      desc: t('home.premium.impact.cards.execution.desc')
    }
  ]

  return (
    <section className="bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#59c9ca]">{t('home.premium.impact.badge')}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t('home.premium.impact.title')}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {t('home.premium.impact.description')}
            </p>
          </div>

          <div className="grid gap-5">
            {cards.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-[#059aa2]/30">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#059aa2]/10 text-[#59c9ca] font-semibold">{item.number}</div>
                  <FiCheckCircle className="text-2xl text-[#59c9ca]" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#59c9ca]">
                  <span>{t('home.premium.impact.learnMore')}</span>
                  <FiChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
