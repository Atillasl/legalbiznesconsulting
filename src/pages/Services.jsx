import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { allServices, legalServices, itServices } from '../data/services'
import ServiceTabs from '../components/services/ServiceTabs'
import ServiceGrid from '../components/services/ServiceGrid'

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
    <div className="min-h-screen bg-[#f4efe8] text-[#0f172a] transition-all dark:bg-[#020617] dark:text-[#f1f5f9]">
      <section className="bg-[#f5f1ec] py-16 border-b border-slate-100 text-center dark:bg-slate-950 dark:border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-extrabold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3 py-1 rounded-full dark:bg-[#00969A]/20">
            {t('services.subtitle')}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            {t('services.title')}
          </h1>
          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
            {t('services.description')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ServiceTabs activeTab={activeTab} onChange={setActiveTab} t={t} />
        <ServiceGrid services={filteredServices} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-center relative overflow-hidden shadow-xl dark:bg-slate-950 border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00969A]/10 to-transparent pointer-events-none" />
          <h2 className="text-xl md:text-2xl font-extrabold text-white">{t('services.ctaTitle')}</h2>
          <p className="mt-3 text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            {t('services.ctaDesc')}
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00969A] text-white text-xs font-bold hover:bg-[#007a7e] transition-all shadow-lg shadow-[#00969A]/20"
            >
              {t('services.ctaBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
