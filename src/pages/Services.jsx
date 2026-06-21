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

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 transition-colors duration-700 dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* HEADER: Premium Minimalist */}
      <section className="relative py-24 text-center">
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

      {/* Combined legal services list removed — individual services live in their own sections/pages */}

      {/* LAYOUT: Left sidebar with categories, right side shows services for selected category */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <aside className="md:col-span-3">
            <div className="sticky top-28 rounded-xl border border-slate-200/20 bg-white/40 p-4 backdrop-blur-md dark:bg-white/[0.02]">
              <h4 className="text-sm font-semibold mb-4">{t('services.subtitle')}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm ${activeTab === 'all' ? 'bg-[#059aa2] text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {t('services.tabs.all')}
                    <span className="ml-2 text-xs text-slate-400">({allServices.length})</span>
                  </button>
                </li>
                {/* Tech/IT moved to bottom for prominence; rendered after legal categories */}
                {legalCategories.map((c) => (
                  <li key={c.key}>
                    <button
                      onClick={() => setCategory(c.key)}
                      className={`w-full text-left rounded-lg px-3 py-3 text-base ${activeTab === c.key ? 'bg-[#059aa2] text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
                      {t(`services.categories.${c.key}`) || c.label}
                      <span className="ml-3 text-sm text-slate-600">({allServices.filter(s => (categoryMap[s.category]||s.category)===c.key).length})</span>
                    </button>
                  </li>
                ))}
                {/* Tech/IT placed last and shown with larger readable text */}
                <li>
                  <button
                    onClick={() => setCategory('tech')}
                    className={`w-full text-left rounded-lg px-3 py-3 text-base ${activeTab === 'tech' ? 'bg-[#059aa2] text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
                    {t('services.tabs.tech')}
                    <span className="ml-3 text-sm text-slate-600">({itServices.length})</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <div className="md:col-span-9">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                {activeTab === 'all' ? t('services.title') : (t(`services.categories.${activeTab}`) || t('services.title'))}
              </h2>
              <ServiceGrid services={filteredServices} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Şüşəvari (Glassmorphism) Fokus */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
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