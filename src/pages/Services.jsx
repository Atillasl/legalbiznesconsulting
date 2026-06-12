import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { allServices, legalServices, itServices } from '../data/services'
import ServiceTabs from '../components/services/ServiceTabs'
import ServiceGrid from '../components/services/ServiceGrid'
import { Link } from 'react-router-dom'

export default function Services() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')

  const filteredServices =
    activeTab === 'all'
      ? allServices
      : activeTab === 'legal'
      ? legalServices
      : itServices

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

      {/* GRID: Bento-Grid ilə daha vizual */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ServiceTabs activeTab={activeTab} onChange={setActiveTab} t={t} />
        <div className="mt-12">
           <ServiceGrid services={filteredServices} />
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