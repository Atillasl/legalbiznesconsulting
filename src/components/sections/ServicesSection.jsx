import { useState } from 'react'
import { useTranslation } from '../../context/LanguageProvider'
import { 
  FiBriefcase, FiCpu, FiCode, FiSmartphone, FiGlobe, 
  FiShield, FiCheck, FiArrowRight 
} from 'react-icons/fi'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('legal')
  const { t } = useTranslation()

  const legalServices = [
    { id: "corporate", icon: <FiBriefcase size={20} /> },
    { id: "contract", icon: <FiBriefcase size={20} /> },
    { id: "tax-bank", icon: <FiBriefcase size={20} /> },
    { id: "litigation", icon: <FiBriefcase size={20} /> }
  ]

  const techServices = [
    { id: "web-dev", icon: <FiGlobe size={20} /> },
    { id: "app-dev", icon: <FiSmartphone size={20} /> },
    { id: "it-consulting", icon: <FiCode size={20} /> },
    { id: "tech-law", icon: <FiShield size={20} /> }
  ]

  const currentServices = activeTab === 'legal' ? legalServices : techServices

  return (
    <section id="services" className="relative py-24 antialiased overflow-hidden">
      {/* Arxa fon zərif işıq süzgəci */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[500px] w-[500px] bg-[#059aa2]/5 blur-[150px] rounded-full" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-[#059aa2]">
            <span className="h-1 w-1 rounded-full bg-[#059aa2]" />
            {t('services.badge')}
          </span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('services.mainTitle')}
          </h2>
        </div>

        {/* PREMIUM TAB NAVIGATION */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex rounded-xl bg-slate-200/20 p-1 backdrop-blur-xl border border-slate-500/10">
            {['legal', 'tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-lg px-8 py-3 text-xs font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <span className="absolute inset-0 bg-[#059aa2] rounded-lg shadow-sm" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === 'legal' ? <FiBriefcase size={14} /> : <FiCpu size={14} />} 
                  {t(`services.tabs.${tab}`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* XİDMƏTLƏR GRID - Şüşə effekti ilə */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentServices.map((service) => {
            const itemKey = `services.items.${service.id}`;
            const features = t(`${itemKey}.features`) || [];

            return (
              <div key={service.id} className="group relative flex flex-col rounded-2xl border border-slate-500/10 bg-white/40 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                  {t(`${itemKey}.title`)}
                </h3>
                <p className="text-[11px] font-light text-slate-500 leading-relaxed mb-6">
                  {t(`${itemKey}.desc`)}
                </p>
                
                <ul className="mt-auto space-y-3">
                  {Array.isArray(features) && features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                      <FiCheck size={12} className="text-[#059aa2]" /> {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#059aa2] group-hover:translate-x-1 transition-transform">
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