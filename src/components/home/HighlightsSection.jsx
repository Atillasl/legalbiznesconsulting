import { FiShield, FiBriefcase, FiCpu, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function HighlightsSection() {
  const { t } = useLanguage()

  const featureCards = [
    {
      icon: <FiShield className="text-base" />,
      title: t('home.highlights.cards.compliance.title'),
      desc: t('home.highlights.cards.compliance.desc')
    },
    {
      icon: <FiBriefcase className="text-base" />,
      title: t('home.highlights.cards.contracts.title'),
      desc: t('home.highlights.cards.contracts.desc')
    },
    {
      icon: <FiCpu className="text-base" />,
      title: t('home.highlights.cards.digital.title'),
      desc: t('home.highlights.cards.digital.desc')
    },
    {
      icon: <FiCheckCircle className="text-base" />,
      title: t('home.highlights.cards.growth.title'),
      desc: t('home.highlights.cards.growth.desc')
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32 antialiased relative overflow-hidden">
      
      {/* BREND DETALI: Arxa fonda süzülən zərif firuzəyi duman */}
      <div className="absolute left-[-10%] top-[30%] -z-10 h-[500px] w-[500px] rounded-full bg-[#059aa2]/5 blur-[130px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        
        {/* SOL TƏRƏF: BAŞLIQ VƏ XÜSUSİYYƏTLƏR */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Badge strukturu tam minimalist və redaksiya tərzinə gətirildi */}
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
              <span className="h-1 w-1 rounded-full bg-[#059aa2]" />
              {t('home.highlights.subtitle')}
            </span>
            <h2 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t('home.highlights.title')}
            </h2>
            <p className="max-w-2xl text-xs font-light leading-relaxed text-slate-500 dark:text-slate-400 tracking-wide pt-1">
              {t('home.highlights.description')}
            </p>
          </div>

          {/* KIÇIK XÜSUSİYYƏT KARTLARI */}
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((item, index) => (
              <div
                key={index}
                // Material şüşə effekti, mikro kənarlıq və zərif sol neon xətt tərtibatı
                className="group relative overflow-hidden rounded-xl border border-slate-500/10 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#059aa2]/30 hover:bg-white/60 hover:shadow-xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.01] dark:hover:bg-white/[0.02]"
              >
                <div className="flex items-center justify-between">
                  {/* İkon qutusu */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-colors duration-300 group-hover:bg-[#059aa2]/10">
                    {item.icon}
                  </div>
                  {/* Aktivlik oxu */}
                  <div className="text-slate-300/60 transition-all duration-300 group-hover:text-[#059aa2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-slate-700">
                    <FiArrowUpRight size={15} className="stroke-[1.5]" />
                  </div>
                </div>

                <h3 className="mt-5 text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-[#059aa2] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] font-light leading-relaxed text-slate-500 dark:text-slate-400 tracking-wide">
                  {item.desc}
                </p>

                {/* Kartın sol tərəfindən sızan zərif xətt */}
                <div className="absolute left-0 top-0 h-full w-[1.5px] bg-transparent transition-colors duration-500 group-hover:bg-[#059aa2]" />
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ TƏRƏF: KİNEMATİK ASILI PANELLƏR */}
        <div className="relative pt-6 lg:pt-0">
          <div className="absolute -left-12 top-20 -z-10 h-48 w-48 rounded-full bg-[#059aa2]/10 blur-3xl" />
          
          <div className="space-y-6">
            
            {/* PANEL 1 - İşıqlı/Açıq Tonlu Premium Qutu */}
            <div className="animate-float rounded-xl border border-slate-500/10 bg-white/70 p-8 shadow-xl shadow-slate-500/[0.03] backdrop-blur-md dark:bg-white/[0.02] transition-all duration-500 hover:border-[#059aa2]/20">
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#059aa2] block">
                {t('home.highlights.cardBadge1')}
              </span>
              <h3 className="mt-3 text-xl font-light tracking-tight text-slate-900 dark:text-white">
                {t('home.highlights.cardTitle1')}
              </h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-slate-500 dark:text-slate-400 tracking-wide">
                {t('home.highlights.cardDesc1')}
              </p>
            </div>
            
            {/* PANEL 2 - Tünd/Kontrast Lüks Qutu */}
            <div className="animate-float delay-150 rounded-xl border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/40 transition-all duration-500 hover:border-[#059aa2]/30">
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 block">
                {t('home.highlights.cardBadge2')}
              </span>
              <h3 className="mt-3 text-xl font-light tracking-tight text-white">
                {t('home.highlights.cardTitle2')}
              </h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-slate-400 tracking-wide">
                {t('home.highlights.cardDesc2')}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}