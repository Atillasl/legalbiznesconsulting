import { FiArrowRight, FiLayers, FiShield, FiCheckCircle } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function HeroSection() {
  const { t } = useLanguage()

  const proofCards = [
    {
      tag: t('home.premium.hero.proofs.trust.tag'),
      title: t('home.premium.hero.proofs.trust.title'),
      desc: t('home.premium.hero.proofs.trust.desc')
    },
    {
      tag: t('home.premium.hero.proofs.alignment.tag'),
      title: t('home.premium.hero.proofs.alignment.title'),
      desc: t('home.premium.hero.proofs.alignment.desc')
    }
  ]

  const panelItems = [
    {
      label: t('home.premium.hero.panelItems.regulatory.label'),
      detail: t('home.premium.hero.panelItems.regulatory.detail')
    },
    {
      label: t('home.premium.hero.panelItems.governance.label'),
      detail: t('home.premium.hero.panelItems.governance.detail')
    },
    {
      label: t('home.premium.hero.panelItems.digital.label'),
      detail: t('home.premium.hero.panelItems.digital.detail')
    }
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-[#059aa2]/20" />
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#059aa2]/10 blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#0ea2a6]/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 shadow-sm shadow-slate-950/20">
              <FiShield className="text-base" />
              {t('home.premium.hero.badge')}
            </span>

            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.96]">
              {t('home.premium.hero.title')}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {t('home.premium.hero.description')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#059aa2] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#059aa2]/25 transition duration-200 hover:bg-[#027f82]"
              >
                {t('home.premium.hero.cta.primary')} <FiArrowRight />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-7 py-4 text-sm font-semibold text-slate-100 transition duration-200 hover:border-[#059aa2] hover:bg-slate-800/70"
              >
                {t('home.premium.hero.cta.secondary')}
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {proofCards.map((card) => (
                <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{card.tag}</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-[#059aa2]/10 blur-3xl" />
            <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#59c9ca]">
                <FiLayers className="text-xl" /> {t('home.premium.hero.panelTitle')}
              </div>
              <div className="mt-8 space-y-6">
                {panelItems.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#059aa2]/10 text-[#059aa2]">
                        <FiCheckCircle className="text-base" />
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
