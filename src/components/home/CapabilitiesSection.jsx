import { FiBriefcase, FiShield, FiCpu, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'
import { clientLogos } from '../../assets'

export default function CapabilitiesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <FiShield className="text-lg text-[#059aa2]" />,
      title: t('home.premium.capabilities.cards.regulatory.title'),
    },
    {
      icon: <FiBriefcase className="text-lg text-[#059aa2]" />,
      title: t('home.premium.capabilities.cards.governance.title'),
    },
    {
      icon: <FiCpu className="text-lg text-[#059aa2]" />,
      title: t('home.premium.capabilities.cards.digital.title'),
    }
  ]

  return (
    <section id="capabilities" className="relative bg-slate-500/[0.03] border-y border-slate-500/5 px-6 py-24 lg:py-32 antialiased">
      
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#059aa2]/5 blur-[120px] pointer-events-none dark:bg-[#059aa2]/10" />

      <div className="mx-auto max-w-7xl">
        {/* TƏK BÖYÜK PREMIUM PANEL */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-500/10 bg-white/60 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#059aa2]/30 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.02] lg:p-14">
          
          {/* BACKGROUND IMAGE - Bulanlıqlıq və maskalar tamamilə silindi, şəkil tam aydın edildi */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <img 
              src={clientLogos[2]} // c7.png şəkli
              alt="Capabilities Background" 
              // Opacity tam olaraq artırıldı (light modda 0.85, dark modda 0.40) və bulanıqlıq tamamilə yox edildi
              className="w-full h-full object-cover opacity-85 transition-transform duration-1000 ease-out group-hover:scale-105 dark:opacity-40" 
              loading="lazy" 
            />
          </div>

          {/* CONTENT GRID - Şəklin üstündə elementlərin ideal oxunması üçün arxa fonlarına zərif filterlər qoyuldu */}
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* LEFT SIDE - Info & Header */}
            <div className="space-y-4 rounded-2xl bg-white/40 p-6 backdrop-blur-md dark:bg-slate-950/40 border border-white/20">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
                {t('home.premium.capabilities.badge')}
              </span>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {t('home.premium.capabilities.title')}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-light">
                {t('home.premium.capabilities.description')}
              </p>
            </div>

            {/* RIGHT SIDE - Siyahı qutuları */}
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item flex items-center justify-between rounded-2xl border border-white/30 bg-white/70 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#059aa2]/40 hover:bg-white/90 dark:border-slate-500/10 dark:bg-slate-950/70 dark:hover:bg-slate-950/90"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-500/10 bg-white shadow-sm transition-colors duration-300 group-hover/item:bg-[#059aa2]/10 dark:bg-slate-900">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-medium tracking-wide text-slate-900 transition-colors duration-300 group-hover/item:text-[#059aa2] dark:text-slate-100">
                      {item.title}
                    </h3>
                  </div>

                  <FiArrowUpRight className="text-lg text-slate-500 opacity-0 transition-all duration-300 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 dark:text-slate-400" />
                </div>
              ))}
            </div>

          </div>

          {/* Breking Alt Xətti */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#059aa2] to-[#59c9ca] transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </section>
  )
}