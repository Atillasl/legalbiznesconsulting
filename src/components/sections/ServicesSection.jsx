import { useState } from 'react'
import { useTranslation } from '../../context/LanguageProvider'
import { 
  FiBriefcase, FiCpu, FiCode, FiSmartphone, FiGlobe, 
  FiShield, FiCheck, FiArrowRight 
} from 'react-icons/fi'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('legal')
  const { t } = useTranslation()

  // Data identifikatorları saxlayır, kontent JSON-dan gəlir
  const legalServices = [
    { id: "corporate", icon: <FiBriefcase size={18} /> },
    { id: "contract", icon: <FiBriefcase size={18} /> },
    { id: "tax-bank", icon: <FiBriefcase size={18} /> },
    { id: "litigation", icon: <FiBriefcase size={18} /> }
  ]

  const techServices = [
    { id: "web-dev", icon: <FiGlobe size={18} /> },
    { id: "app-dev", icon: <FiSmartphone size={18} /> },
    { id: "it-consulting", icon: <FiCode size={18} /> },
    { id: "tech-law", icon: <FiShield size={18} /> }
  ]

  // Aktiv massivi seçirik
  const currentServices = activeTab === 'legal' ? legalServices : techServices

  return (
    <section id="services" className="bg-[#f8fafc] py-20 transition-all dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BÖLMƏ BAŞLIĞI */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3.5 py-1.5 rounded-full dark:bg-[#00969A]/20">
            {t('services.badge')}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('services.mainTitle')}
          </h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('legal')}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === 'legal'
                  ? 'bg-[#00969A] text-white shadow-md shadow-[#00969A]/10'
                  : 'text-slate-600 hover:text-[#00969A] dark:text-slate-400 dark:hover:text-[#00969A]'
              }`}
            >
              <FiBriefcase size={16} /> {t('services.tabs.legal')}
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === 'tech'
                  ? 'bg-[#00969A] text-white shadow-md shadow-[#00969A]/10'
                  : 'text-slate-600 hover:text-[#00969A] dark:text-slate-400 dark:hover:text-[#00969A]'
              }`}
            >
              <FiCpu size={16} /> {t('services.tabs.tech')}
            </button>
          </div>
        </div>

        {/* XİDMƏTLƏR GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          {currentServices.map((service) => {
            // "services.items.corporate.features.0" tipli massiv datalarını oxumaq üçün helper path-lər
            const itemKey = `services.items.${service.id}`;
            const features = t(`${itemKey}.features`) || [];

            return (
              <div key={service.id} className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-[#00969A]/20 hover:shadow-md dark:border-slate-900 dark:bg-slate-900">
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00969A]/10 text-xl text-[#00969A] dark:bg-[#00969A]/20">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-[#00969A] transition-colors dark:text-white">
                    {t(`${itemKey}.title`)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {t(`${itemKey}.desc`)}
                  </p>
                  
                  <ul className="mt-5 space-y-2 border-t border-slate-50 pt-4 dark:border-slate-800/60">
                    {Array.isArray(features) && features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <FiCheck className="text-[#00969A] shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-2">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00969A] hover:underline">
                    {t('services.applyBtn')} <FiArrowRight size={12} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}