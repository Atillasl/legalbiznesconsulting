import { FiBriefcase, FiCpu, FiShield } from 'react-icons/fi'

export default function ServiceTabs({ activeTab, onChange, t }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
        <button
          onClick={() => onChange('all')}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-[#00969A] text-white shadow-md shadow-[#00969A]/10'
              : 'text-slate-600 hover:text-[#00969A] dark:text-slate-400 dark:hover:text-[#00969A]'
          }`}
        >
          <FiShield className="hidden sm:inline" /> {t('services.tabs.all')}
        </button>
        <button
          onClick={() => onChange('legal')}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
            activeTab === 'legal'
              ? 'bg-[#00969A] text-white shadow-md shadow-[#00969A]/10'
              : 'text-slate-600 hover:text-[#00969A] dark:text-slate-400 dark:hover:text-[#00969A]'
          }`}
        >
          <FiBriefcase size={16} /> {t('services.tabs.legal')}
        </button>
        <button
          onClick={() => onChange('tech')}
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
  )
}
