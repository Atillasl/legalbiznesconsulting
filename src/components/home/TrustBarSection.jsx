import { useLanguage } from '../../hooks/useLanguage'
import { FiTrendingUp, FiGlobe, FiBriefcase, FiAward } from 'react-icons/fi'

export default function TrustBarSection() {
  const { t } = useLanguage()

  // Hər metrikaya özünəməxsus premium ikon və vizual çəki qatdıq
  const metrics = [
    {
      label: t('home.premium.trust.metrics.retainers.label'),
      value: t('home.premium.trust.metrics.retainers.value'),
      icon: <FiBriefcase className="text-xl text-[#059aa2]" />,
      glow: "from-[#059aa2]/20 to-transparent"
    },
    {
      label: t('home.premium.trust.metrics.launches.label'),
      value: t('home.premium.trust.metrics.launches.value'),
      icon: <FiTrendingUp className="text-xl text-[#59c9ca]" />,
      glow: "from-[#59c9ca]/20 to-transparent"
    },
    {
      label: t('home.premium.trust.metrics.governance.label'),
      value: t('home.premium.trust.metrics.governance.value'),
      icon: <FiAward className="text-xl text-[#059aa2]" />,
      glow: "from-[#059aa2]/20 to-transparent"
    },
    {
      label: t('home.premium.trust.metrics.crossBorder.label'),
      value: t('home.premium.trust.metrics.crossBorder.value'),
      icon: <FiGlobe className="text-xl text-[#59c9ca]" />,
      glow: "from-[#59c9ca]/20 to-transparent"
    }
  ]

  return (
    <section className="relative border-t border-slate-500/10 bg-transparent px-6 py-24 lg:py-32 antialiased overflow-hidden">
      
      {/* Sol tərəfdən gələn böyük korporativ işıq süzgəci (Gözü bura cəlb etmək üçün) */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#059aa2]/5 blur-[120px] pointer-events-none dark:bg-[#059aa2]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#059aa2]/30 bg-[#059aa2]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#59c9ca] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#59c9ca] animate-pulse" /> {/* Canlı nöqtə effekti */}
              {t('home.premium.trust.badge')}
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t('home.premium.trust.title')}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light">
              {t('home.premium.trust.description')}
            </p>
          </div>

          {/* RIGHT SIDE - Ultra-Modern Göz Alıcı Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl border border-slate-500/10 bg-gradient-to-b from-white/60 to-white/20 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#059aa2]/40 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:from-white/[0.03] dark:to-transparent"
              >
                {/* Hover edəndə kartın küncündən sızan neon işıq şüası */}
                <div className={`absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${item.glow} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* İkon və İndikator sahəsi */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-500/10 bg-white/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#059aa2]/20 group-hover:bg-[#059aa2]/10 dark:bg-white/[0.02]">
                    {item.icon}
                  </div>
                  {/* Kiçik premium dizayn detalı: İndeks nömrəsi */}
                  <span className="text-[10px] font-mono text-slate-400/50 dark:text-slate-600">0{idx + 1}</span>
                </div>

                {/* Böyük, diqqətçəkən Gradient Rəqəmlər */}
                <p className="mt-6 text-4xl font-extralight tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#059aa2] group-hover:to-[#59c9ca] dark:from-white dark:to-slate-400">
                  {item.value}
                </p>
                
                {/* Açıqlama mətni */}
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-700 transition-colors duration-300 dark:text-slate-400 dark:group-hover:text-slate-300">
                  {item.label}
                </p>

                {/* Kartın altındakı incə yüklənmə xətti effekti (Hover-da canlanır) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#059aa2] to-[#59c9ca] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}