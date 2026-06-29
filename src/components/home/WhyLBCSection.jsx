import { FiCheckCircle, FiClock, FiGlobe, FiShield } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function WhyLBCSection() {
  const { t } = useLanguage()

  const items = [
    {
      icon: <FiShield className="text-lg text-[#059aa2]" />,
      title: t('home.premium.why.items.executive.title'),
      description: t('home.premium.why.items.executive.description')
    },
    {
      icon: <FiClock className="text-lg text-[#059aa2]" />,
      title: t('home.premium.why.items.speed.title'),
      description: t('home.premium.why.items.speed.description')
    },
    {
      icon: <FiGlobe className="text-lg text-[#059aa2]" />,
      title: t('home.premium.why.items.crossBorder.title'),
      description: t('home.premium.why.items.crossBorder.description')
    },
    {
      icon: <FiCheckCircle className="text-lg text-[#059aa2]" />,
      title: t('home.premium.why.items.clientFocus.title'),
      description: t('home.premium.why.items.clientFocus.description')
    }
  ]

  return (
    // İncə kənarlıq və fon tənzimləməsi ilə digər bölmələrlə vizual ahəng yaradır
    <section className="relative border-t border-slate-500/5 bg-transparent px-6 pt-8 pb-12 lg:pt-8 lg:pb-12 antialiased">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER - Minimalist və kompakt mərkəzləşdirilmiş struktur */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
            {t('home.premium.why.badge')}
          </span>
          <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t('home.premium.why.title')}
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light">
            {t('home.premium.why.description')}
          </p>
        </div>

        {/* MINIMALIST GRID - Bərabər ölçülü, lakonik qutular */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-500/10 bg-white/30 p-6 backdrop-blur-md dark:bg-white/[0.01]"
            >
              <div>
                {/* Minimalist İkon - Heç bir böyük arka fon qutusu olmadan, sadəcə zərif təmiz ikon */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#059aa2]/5 text-[#059aa2]">
                  {item.icon}
                </div>

                {/* Başlıq və Mətn - Font ölçüləri kiçildildi (Kompaktlıq üçün) */}
                <h3 className="mt-5 text-sm font-medium tracking-wide text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}