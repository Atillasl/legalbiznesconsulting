import { useLanguage } from '../../hooks/useLanguage'

export default function FooterCtaSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#059aa2] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/10 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100/80">{t('home.premium.cta.badge')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t('home.premium.cta.title')}</h2>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#059aa2] shadow-xl shadow-white/20 transition duration-200 hover:bg-slate-100"
        >
          {t('home.premium.cta.button')}
        </a>
      </div>
    </section>
  )
}
