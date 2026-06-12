import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ service }) {
  const { t } = useLanguage()

  if (!service) return null

  return (
    // Sərt kənarlıqlar və kölgələr ləğv edildi, tam minimalist şüşə-material effekti tətbiq olundu
    <div className="group relative rounded-2xl border border-slate-500/10 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#059aa2]/30 hover:bg-white/80 hover:shadow-xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.01] dark:hover:bg-white/[0.03] flex flex-col justify-between overflow-hidden">
      
      {/* HOVER GLOW - Siçanı kartın üzərinə gətirəndə sağ küncdən zərif sızan brend işığı */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#059aa2]/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div>
        {/* XİDMƏT ŞƏKLİ - Əgər şəkil varsa, tam korporativ jurnal standartında yerləşir */}
        {service.image && (
          <div className="mb-5 overflow-hidden rounded-xl border border-slate-500/5 h-40">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover filter grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
              loading="lazy" 
            />
          </div>
        )}

        {/* KART HEADER - İkon və Zərif Badge */}
        <div className="flex items-center justify-between mb-5">
          {/* İkon qutusu artıq hover-da tam rəngə boyanmır, sadəcə zərifcə miqyası böyüyür */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-500/10 bg-white text-xl text-[#059aa2] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#059aa2]/20 group-hover:bg-[#059aa2]/5 dark:bg-slate-900">
            {service.icon}
          </div>
          
          {service.badge && (
            <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border border-slate-500/10 bg-slate-50 text-slate-400 dark:bg-slate-900 dark:text-slate-500">
              {service.badge}
            </span>
          )}
        </div>

        {/* KATEGORİYA - İncə və geniş aralıqlı şrift */}
        <span className="text-[9px] font-medium tracking-[0.2em] text-[#059aa2] uppercase block mb-1.5">
          {service.category}
        </span>

        {/* BAŞLIQ - Ölçü qorundu (text-lg), lakin font-medium ilə daha nəzakətli edildi */}
        <h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-[#059aa2] transition-colors duration-300 dark:text-white">
          {service.title}
        </h3>

        {/* QISA TƏSVİR - Oxunaqlı, lakin font-light ilə gözü yormayan mətn */}
        <p className="mt-2.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light tracking-wide line-clamp-3">
          {service.shortDesc}
        </p>
      </div>

      {/* KEÇİD LİNKİ - İncə keçid xətti və sürüşən modern ox */}
      <div className="mt-6 border-t border-slate-500/5 pt-4 dark:border-slate-800/40">
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#059aa2] transition-all duration-300"
        >
          {/* Hover anında yazının altından dolan ipək kimi xətt */}
          <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#059aa2] after:transition-all after:duration-300 group-hover:after:w-full">
            {t('services.readMore')}
          </span> 
          <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
    </div>
  )
}