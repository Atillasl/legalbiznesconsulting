import { useLanguage } from '../../hooks/useLanguage'
import { clientLogos } from '../../assets'

export default function HomePlaceholders() {
  const { t } = useLanguage()

  return (
    <div className="antialiased">
      {/* SEKSİYA 1: TƏRƏFDAŞLAR / MÜŞTƏRİ LOQOLARI */}
      <section className="relative border-y border-slate-500/5 bg-white/20 py-12 backdrop-blur-md dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          {/* Kiçik üst başlıq */}
          <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
            {t('home.testimonials.title')}
          </span>
          
          {/* Loqo Şeriti: Sərt kəsikli çərçivələr silindi, zərif və dumanlı axış gətirildi */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 dark:opacity-40">
            {clientLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="group flex h-10 w-32 items-center justify-center transition-all duration-300 hover:opacity-100"
              >
                <img 
                  src={logo} 
                  alt={`brand-logo-${idx}`} 
                  // Loqolar standart olaraq monoxrom durur, üzərinə gəldikdə lüks şəkildə canlanır
                  className="max-h-full max-w-full object-contain filter grayscale contrast-200 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 dark:brightness-200 dark:group-hover:brightness-100" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKSİYA 2: KONTAKT VİZUAL YERLİYİ */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:py-12">
        <div className="relative overflow-hidden rounded-xl border border-slate-500/10 bg-white/40 p-8 backdrop-blur-md shadow-xl shadow-slate-500/[0.02] dark:bg-white/[0.01] sm:p-12">
          
          {/* Arxa fonda sızan zərif firuzəyi işıq */}
          <div className="absolute -right-16 -top-16 -z-10 h-36 w-36 rounded-full bg-[#059aa2]/5 blur-2xl pointer-events-none dark:bg-[#059aa2]/10" />

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Sol tərəf: Mətn */}
            <div className="space-y-3 text-left">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
                <span className="h-1 w-1 rounded-full bg-[#059aa2]" />
                {t('home.contactPlaceholder.badge') || 'CONNECT'}
              </span>
              <h2 className="text-xl font-light tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                {t('home.contactPlaceholder.title')}
              </h2>
            </div>

            {/* Sağ tərəf: Vizual element qutusu */}
            <div className="flex h-36 items-center justify-center rounded-xl border border-slate-500/5 bg-slate-500/[0.02] p-6 transition-all duration-500 hover:border-[#059aa2]/20 dark:bg-white/[0.01]">
              <img 
                src={clientLogos[0]} 
                alt="contact-visual" 
                className="h-20 object-contain opacity-40 filter grayscale transition-opacity duration-300 hover:opacity-70 dark:invert" 
                loading="lazy" 
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}