import { FiBriefcase, FiCpu, FiShield } from 'react-icons/fi'

export default function ServiceTabs({ activeTab, onChange, t }) {
  const tabs = [
    { id: 'all', icon: <FiShield size={14} />, label: t('services.tabs.all') },
    { id: 'legal', icon: <FiBriefcase size={14} />, label: t('services.tabs.legal') },
    { id: 'tech', icon: <FiCpu size={14} />, label: t('services.tabs.tech') }
  ]

  return (
    <div className="flex justify-center mb-16">
      {/* İncə, şəffaf şüşəvari arxa fon */}
      <div className="relative inline-flex rounded-xl bg-slate-200/20 p-1 backdrop-blur-md border border-slate-500/10 shadow-xl shadow-slate-500/[0.03]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2.5 rounded-lg px-8 py-3 text-xs font-medium transition-all duration-300 ease-out ${
              activeTab === tab.id 
                ? 'text-white' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {/* Aktiv tab üçün dinamik fon effekti */}
            {activeTab === tab.id && (
              <span className="absolute inset-0 bg-[#059aa2] rounded-lg shadow-md shadow-[#059aa2]/20" />
            )}
            
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}