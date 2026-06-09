import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ service }) {
  const { t } = useLanguage()

  if (!service) return null

  return (
    <div className="group relative rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between overflow-hidden">
      
      <div className="absolute top-0 right-0 h-24 w-24 bg-[#00969A]/5 rounded-bl-full group-hover:bg-[#00969A]/10 transition-colors duration-300" />

      <div>
        {/* Kart Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00969A]/10 text-2xl text-[#00969A] transition-colors group-hover:bg-[#00969A] group-hover:text-white dark:bg-[#00969A]/20">
            {service.icon}
          </div>
          {service.badge && (
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              {service.badge}
            </span>
          )}
        </div>

        <span className="text-[10px] font-extrabold tracking-wider text-[#00969A]/80 uppercase block mb-1">
          {service.category}
        </span>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00969A] transition-colors dark:text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-slate-400 dark:text-slate-400 line-clamp-3">
          {service.shortDesc}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-50 dark:border-slate-800/50">
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#00969A] group-hover:gap-3 transition-all"
        >
          {t('services.readMore')} <FiArrowRight size={14} />
        </Link>
      </div>
      
    </div>
  )
}