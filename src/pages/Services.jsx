import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { allServices, legalServices, itServices } from '../data/services'
import ServiceGrid from '../components/services/ServiceGrid'
import { Link, useSearchParams } from 'react-router-dom'
import { categoryMap } from '../data/categories'

export default function Services() {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()

  const activeTab = useMemo(() => {
    const category = searchParams.get('category')
    return category ? decodeURIComponent(category) : 'all'
  }, [searchParams])

  const setCategory = (tab) => {
    if (tab === 'all') {
      setSearchParams({}, { replace: true })
      return
    }

    setSearchParams({ category: tab }, { replace: true })
  }

  // Compute available legal categories (preserve original label and slug key)
  const legalCategories = useMemo(() => {
    const map = new Map()
    legalServices.forEach((s) => {
      const key = categoryMap[s.category] || s.category
      if (!map.has(key)) map.set(key, { key, label: s.category })
    })
    return Array.from(map.values())
  }, [])

  const filteredServices = useMemo(() => {
    if (activeTab === 'all') return allServices
    if (activeTab === 'tech') return itServices
    return allServices.filter((s) => (categoryMap[s.category] || s.category) === activeTab)
  }, [activeTab])

  const practiceAreas = [
    {
      title: t('services.practiceAreas.corporate.title'),
      items: [
        t('services.practiceAreas.corporate.items.0'),
        t('services.practiceAreas.corporate.items.1'),
        t('services.practiceAreas.corporate.items.2')
      ]
    },
    {
      title: t('services.practiceAreas.contract.title'),
      items: [
        t('services.practiceAreas.contract.items.0'),
        t('services.practiceAreas.contract.items.1'),
        t('services.practiceAreas.contract.items.2')
      ]
    },
    {
      title: t('services.practiceAreas.disputes.title'),
      items: [
        t('services.practiceAreas.disputes.items.0'),
        t('services.practiceAreas.disputes.items.1'),
        t('services.practiceAreas.disputes.items.2')
      ]
    },
    {
      title: t('services.practiceAreas.realEstate.title'),
      items: [
        t('services.practiceAreas.realEstate.items.0'),
        t('services.practiceAreas.realEstate.items.1'),
        t('services.practiceAreas.realEstate.items.2')
      ]
    },
    {
      title: t('services.practiceAreas.regulatory.title'),
      items: [
        t('services.practiceAreas.regulatory.items.0'),
        t('services.practiceAreas.regulatory.items.1'),
        t('services.practiceAreas.regulatory.items.2')
      ]
    },
    {
      title: t('services.practiceAreas.employment.title'),
      items: [
        t('services.practiceAreas.employment.items.0'),
        t('services.practiceAreas.employment.items.1'),
        t('services.practiceAreas.employment.items.2')
      ]
    }
  ]

  const industries = [
    t('services.industries.items.0'),
    t('services.industries.items.1'),
    t('services.industries.items.2'),
    t('services.industries.items.3'),
    t('services.industries.items.4'),
    t('services.industries.items.5'),
    t('services.industries.items.6'),
    t('services.industries.items.7'),
    t('services.industries.items.8'),
    t('services.industries.items.9'),
    t('services.industries.items.10'),
    t('services.industries.items.11'),
    t('services.industries.items.12'),
    t('services.industries.items.13'),
    t('services.industries.items.14'),
    t('services.industries.items.15')
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-700 dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* HEADER: Premium Minimalist */}
      <section className="relative py-12 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#059aa2] bg-[#059aa2]/5 px-4 py-1.5 rounded-full">
            {t('services.subtitle')}
          </span>
          <h1 className="mt-8 text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
            {t('services.title')}
          </h1>
          <p className="mt-6 text-sm font-light text-slate-500 max-w-lg mx-auto leading-relaxed dark:text-slate-400">
            {t('services.description')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl border border-slate-500/10 bg-white/70 p-8 shadow-sm shadow-slate-200/50 backdrop-blur-xl dark:bg-white/[0.03] md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
                {t('services.practiceAreas.badge')}
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {t('services.practiceAreas.title')}
              </h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-relaxed text-slate-500 dark:text-slate-400">
              {t('services.practiceAreas.description')}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 transition hover:border-[#059aa2]/20 hover:bg-white dark:border-slate-800/60 dark:bg-slate-950/40">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{area.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#059aa2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-light text-slate-500 dark:text-slate-400">
            {t('services.industries.description')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-500/10 bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-900/10 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#59c9ca]">
                {t('services.industries.badge')}
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t('services.industries.title')}
              </h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-relaxed text-slate-300">
              {t('services.industries.description')}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-sm shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800/60 dark:bg-white/[0.03] md:p-6">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCategory('all')} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === 'all' ? 'bg-[#059aa2] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300'}`}>
              {t('services.tabs.all')}
              <span className="ml-2 text-xs opacity-70">({allServices.length})</span>
            </button>
            {legalCategories.map((c) => (
              <button key={c.key} onClick={() => setCategory(c.key)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === c.key ? 'bg-[#059aa2] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300'}`}>
                {t(`services.categories.${c.key}`) || c.label}
                <span className="ml-2 text-xs opacity-70">({allServices.filter(s => (categoryMap[s.category]||s.category)===c.key).length})</span>
              </button>
            ))}
            <button onClick={() => setCategory('tech')} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === 'tech' ? 'bg-[#059aa2] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300'}`}>
              {t('services.tabs.tech')}
              <span className="ml-2 text-xs opacity-70">({itServices.length})</span>
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/70 px-5 py-4 dark:border-slate-800/60 dark:bg-slate-950/40">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {activeTab === 'all' ? t('services.title') : (t(`services.categories.${activeTab}`) || t('services.title'))}
                </h2>
                <p className="mt-1 text-sm font-light text-slate-500 dark:text-slate-400">
                  {t('services.heroLead')}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#059aa2]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#059aa2]">
                {filteredServices.length} {t('services.subtitle').toLowerCase()}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <ServiceGrid services={filteredServices} />
          </div>
        </div>
      </section>

      {/* CTA: Şüşəvari (Glassmorphism) Fokus */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-500/10 bg-white/40 p-12 text-center backdrop-blur-xl dark:bg-white/[0.02]">
          {/* İşıq effekti */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#059aa2]/10 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-2xl font-light text-slate-900 dark:text-white relative z-10">
            {t('services.ctaTitle')}
          </h2>
          <p className="mt-4 text-xs font-light text-slate-500 max-w-md mx-auto leading-relaxed relative z-10">
            {t('services.ctaDesc')}
          </p>
          
          <div className="mt-10 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#059aa2] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#04878f] transition-all duration-300 shadow-xl shadow-[#059aa2]/20 active:scale-[0.98]"
            >
              {t('services.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}