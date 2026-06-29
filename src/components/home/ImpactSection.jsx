import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function ImpactSection() {
  const { t } = useLanguage()

  const cards = [
    {
      number: '01',
      title: t('home.premium.impact.cards.clarity.title'),
      desc: t('home.premium.impact.cards.clarity.desc')
    },
    {
      number: '02',
      title: t('home.premium.impact.cards.alignment.title'),
      desc: t('home.premium.impact.cards.alignment.desc')
    },
    {
      number: '03',
      title: t('home.premium.impact.cards.execution.title'),
      desc: t('home.premium.impact.cards.execution.desc')
    }
  ]

  return (
    // Sərt bg-slate-950 silindi. Saytın ana krem/tünd fonu ilə əriyən, lüks kənarlıqlar əlavə edildi
    <section className="relative border-b border-slate-500/5 bg-transparent px-6 py-12 lg:py-12 antialiased overflow-hidden">
      
      {/* Sağ tərəfdə arxada gizlənən incə, lüks bir neon işıq süzgəci */}
      <div className="absolute right-[-10%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#59c9ca]/5 blur-[120px] pointer-events-none dark:bg-[#59c9ca]/8" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* LEFT SIDE - Sticky Header Context */}
          <div className="lg:sticky lg:top-32 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#059aa2]/30 bg-[#059aa2]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#59c9ca] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#59c9ca] animate-pulse" />
              {t('home.premium.impact.badge')}
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t('home.premium.impact.title')}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light">
              {t('home.premium.impact.description')}
            </p>
          </div>

          {/* RIGHT SIDE - Ultra-Modern Interactive Process Flow */}
          <div className="relative pl-6 sm:pl-8">
            {/* Kartları bir-birinə bağlayan sol tərəfdəki premium dizayn xətti */}
            <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#059aa2] via-slate-300 to-transparent dark:via-slate-800" />

            <div className="space-y-6">
              {cards.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative rounded-2xl border border-slate-500/10 bg-white/40 p-6 backdrop-blur-md dark:bg-white/[0.01]"
                >
                  {/* Sol şaquli xətt üzərindəki dinamik birləşmə nöqtəsi (Bullet indicator) */}
                  <div className="absolute left-[-31px] sm:left-[-39px] top-7 flex h-4 w-4 items-center justify-center rounded-full bg-[#f4efe8] dark:bg-[#1a1713]">
                    <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>

                  {/* Header info bar inside card */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Monoxrom İndeks nömrəsi */}
                      <span className="font-mono text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 flex-shrink-0">{item.number}</span>
                      <h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <FiCheckCircle className="text-lg text-slate-400 dark:text-slate-600 flex-shrink-0 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-light">
                    {item.desc}
                  </p>

                  {/* Premium Action Trigger - Sağ aşağıda zərif link */}
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <span>{t('home.premium.impact.learnMore')}</span>
                    <FiArrowUpRight className="text-sm" />
                  </Link>

                  {/* Kartın sol kənarına incə rəng toxunuşu */}
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}