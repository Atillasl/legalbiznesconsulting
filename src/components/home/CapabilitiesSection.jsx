import { FiBriefcase, FiShield, FiCpu } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'
import { techImages, clientLogos } from '../../assets'

export default function CapabilitiesSection() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: <FiShield className="text-xl" />,
      title: t('home.premium.capabilities.cards.regulatory.title'),
      description: t('home.premium.capabilities.cards.regulatory.description')
    },
    {
      icon: <FiBriefcase className="text-xl" />,
      title: t('home.premium.capabilities.cards.governance.title'),
      description: t('home.premium.capabilities.cards.governance.description')
    },
    {
      icon: <FiCpu className="text-xl" />,
      title: t('home.premium.capabilities.cards.digital.title'),
      description: t('home.premium.capabilities.cards.digital.description')
    }
  ]

  return (
    <section id="capabilities" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#059aa2]">{t('home.premium.capabilities.badge')}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {t('home.premium.capabilities.title')}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            {t('home.premium.capabilities.description')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, idx) => {
            const cardImages = [techImages[0], techImages[1], clientLogos[2]]
            return (
              <div key={card.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:border-[#059aa2]/40 hover:shadow-2xl dark:border-slate-800 dark:bg-[#111111]">
                {/* Large card image (explicit mapping; third card uses client logo c7.png) */}
                <div className="mb-4 rounded-md overflow-hidden">
                  <img src={cardImages[idx]} alt={`cap-${idx}`} className="w-full h-36 object-cover rounded-md" loading="lazy" />
                </div>

                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#059aa2]/10 text-[#059aa2] shadow-sm shadow-[#059aa2]/10">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent dark:from-[#111111]/90" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
