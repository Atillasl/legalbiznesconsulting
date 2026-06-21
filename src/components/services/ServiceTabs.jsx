import { FiBriefcase, FiCpu, FiShield } from 'react-icons/fi'
import { categoryMap } from '../../data/categories'
import { useLanguage } from '../../hooks/useLanguage'

export default function ServiceTabs({ activeTab, onChange, t, categories = [] }) {
  const { t: translate } = useLanguage()
  // Build base tabs: All + Tech, then add legal categories dynamically
  const baseTabs = [
    { id: 'all', icon: <FiShield size={14} />, label: t('services.tabs.all') },
    { id: 'tech', icon: <FiCpu size={14} />, label: t('services.tabs.tech') }
  ]
  const categoryTabs = categories.map((c) => {
    const key = categoryMap[c] || c
    const label = translate(`services.categories.${key}`) || c
    return { id: key, icon: <FiBriefcase size={14} />, label }
  })
  const tabs = [...baseTabs, ...categoryTabs]

  return (
    <div className="flex justify-center mb-16">
      <div className="relative inline-flex rounded-xl bg-slate-200/20 p-1 backdrop-blur-md border border-slate-500/10 shadow-xl shadow-slate-500/[0.03]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2.5 rounded-lg px-6 py-3 text-xs font-medium transition-all duration-300 ease-out ${
              activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
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