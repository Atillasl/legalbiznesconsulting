import { FiBriefcase, FiCpu, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function DepartmentsSection() {
  const { t } = useLanguage()

  const departments = [
    {
      id: 'legal',
      icon: <FiBriefcase className="text-lg" />, 
      title: t('home.departments.legal.title'),
      desc: t('home.departments.legal.desc')
    },
    {
      id: 'tech',
      icon: <FiCpu className="text-lg" />,
      title: t('home.departments.tech.title'),
      desc: t('home.departments.tech.desc')
    }
  ]

  return (
    // Padding və şrift tənzimləmələri tam elit səviyyəyə gətirildi
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-12 antialiased">
      
      {/* BAŞLIQ BLOKU - Nəzakətli şrift hiyerarxiyası ilə ortalandı */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
          <span className="h-1 w-1 rounded-full bg-[#059aa2]" />
          {t('home.departments.badge') || 'Struktur'}
        </span>
        <h2 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t('home.departments.title')}
        </h2>
        <p className="text-xs font-light leading-relaxed text-slate-500 dark:text-slate-400 tracking-wide pt-1">
          {t('home.departments.subtitle')}
        </p>
      </div>

      {/* KARTLARIN TORU (GRID) - Boşluqlar zərifləşdirildi */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {departments.map((item) => (
          <div 
            key={item.id} 
            // Şəffaf material dizayn (backdrop-blur), zərif kənarlıq və ipək kimi hover keçidi
            className="group relative overflow-hidden rounded-xl border border-slate-500/10 bg-white/40 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#059aa2]/30 hover:bg-white/60 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.01] dark:hover:bg-white/[0.02]"
          >
            {/* ÜST HİSSƏ - İkon və İnteraktiv Ox */}
            <div className="flex items-center justify-between">
              {/* Brend rəngində mikro kənarlığı olan zərif ikon qutusu */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-colors duration-300 group-hover:bg-[#059aa2]/10">
                {item.icon}
              </div>
              {/* Lüks brendlərin imza detalı: Hover edəndə canlanan ox işarəsi */}
              <div className="text-slate-300 transition-all duration-300 group-hover:text-[#059aa2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-slate-700">
                <FiArrowUpRight size={16} className="stroke-[1.5]" />
              </div>
            </div>

            {/* MƏTN SAHƏSİ */}
            <div className="mt-6">
              <h3 className="text-base font-medium text-slate-900 transition-colors duration-300 group-hover:text-[#059aa2] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-slate-500 dark:text-slate-400 tracking-wide">
                {item.desc}
              </p>
            </div>

            {/* HOVER PRO-DETAL: Kartın sol kənarından sızan zərif neon firuzəyi xətt */}
            <div className="absolute left-0 top-0 h-full w-[1.5px] bg-transparent transition-colors duration-500 group-hover:bg-[#059aa2]" />
          </div>
        ))}
      </div>
    </section>
  )
}