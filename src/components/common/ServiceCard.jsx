import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { categoryMap } from '../../data/categories'
import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ service }) {
  const { t } = useLanguage()

  if (!service) return null
  const localizedTitle = t(`services.items.${service.id}.title`) || service.title
  const localizedShort = t(`services.items.${service.id}.shortDesc`) || service.shortDesc || service.description || ''

  return (
    // Sərt kənarlıqlar və kölgələr ləğv edildi, tam minimalist şüşə-material effekti tətbiq olundu
    <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#059aa2]/30 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/40 dark:shadow-none">

      <div>
        {/* Image removed per request: services render without images */}

        {/* KART HEADER - İkon və Zərif Badge */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-xl text-[#059aa2] shadow-sm transition-all duration-300 group-hover:scale-105 dark:border-slate-700/70 dark:bg-slate-900">
            {service.icon}
          </div>
          
          {service.badge && (
            <span className="rounded-full border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-400">
              {service.badge}
            </span>
          )}
        </div>

        {/* KATEGORİYA - İncə və geniş aralıqlı şrift */}
        <span className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#059aa2]">
          {(() => {
            const key = categoryMap[service.category] || service.category
            return t(`services.categories.${key}`) || service.category
          })()}
        </span>
        {/* BAŞLIQ - Ölçü qorundu (text-lg), lakin font-medium ilə daha nəzakətli edildi */}
        <h3 className="text-lg font-medium tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#059aa2] dark:text-white">
          {localizedTitle}
        </h3>

        {/* QISA TƏSVİR - Oxunaqlı, lakin font-light ilə gözü yormayan mətn */}
        <p className="mt-2.5 text-xs font-light leading-relaxed tracking-wide text-slate-500 dark:text-slate-400">
          {localizedShort}
        </p>
      </div>

      {/* KEÇİD LİNKİ - İncə keçid xətti və sürüşən modern ox */}
      <div className="mt-6 border-t border-slate-200/70 pt-4 dark:border-slate-800/60">
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#059aa2] transition-all duration-300"
        >
          <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#059aa2] after:transition-all after:duration-300 group-hover:after:w-full">
            {t('services.readMore')}
          </span> 
          <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
    </div>
  )
}