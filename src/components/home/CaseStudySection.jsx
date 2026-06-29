import { useLanguage } from '../../hooks/useLanguage'
import { techImages } from '../../assets'
import { FiArrowUpRight, FiCornerDownRight } from 'react-icons/fi'

export default function CaseStudySection() {
  const { t } = useLanguage()

  const points = [
    t('home.premium.caseStudy.points.0'),
    t('home.premium.caseStudy.points.1'),
    t('home.premium.caseStudy.points.2')
  ]

  return (
    <section className="relative border-b border-slate-500/5 bg-transparent px-6 py-12 lg:py-12 antialiased overflow-hidden">
      
      {/* Sol küncdən gələn incə, dərin brend işığı */}
      <div className="absolute left-[-5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#059aa2]/5 blur-[140px] pointer-events-none dark:bg-[#059aa2]/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          
          {/* LEFT SIDE - Editorial Text Content (Qutudan çıxarıldı, minimalist edildi) */}
          <div className="space-y-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
              {t('home.premium.caseStudy.badge')}
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t('home.premium.caseStudy.title')}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light">
              {t('home.premium.caseStudy.description')}
            </p>
            
            {/* Minimalist Siyahı sistemi */}
            <div className="mt-10 space-y-4 border-t border-slate-500/10 pt-8 max-w-xl">
              {points.map((point, index) => (
                <div key={index} className="group flex items-start gap-4 transition-all duration-300">
                  {/* İndeks nömrələri üçün lüks monoşrift dizayn */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center font-mono text-[11px] font-medium text-[#059aa2] border border-[#059aa2]/20 rounded-lg bg-[#059aa2]/5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-light group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Ultra-Premium Client Insight Dashboard */}
          <div className="relative">
            {/* Arxa fona dərinlik qatan lüks çərçivə (Double frame effect) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-slate-500/5 bg-slate-500/[0.02] pointer-events-none" />
            
            <div className="group relative overflow-hidden rounded-3xl border border-slate-500/10 bg-white/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#059aa2]/30 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.02] sm:p-10">
              
              {/* IMAGE SECTION - Tam çərçivəyə oturan, lüks süzgəcli şəkil qutusu */}
              <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-500/10 h-48 sm:h-56">
                <img 
                  src={techImages[0]} 
                  alt="case-study" 
                  className="w-full h-full object-cover filter grayscale opacity-80 contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>

              {/* Client Insight Content */}
              <div className="space-y-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
                  {t('home.premium.caseStudy.clientInsight')}
                </span>
                
                {/* Real Lüks Sitat İfadəsi */}
                <p className="text-xl font-light leading-relaxed tracking-wide text-slate-900 dark:text-white italic sm:text-2xl">
                  “{t('home.premium.caseStudy.quote')}”
                </p>
                
                {/* Müəllif */}
                <div className="flex items-center gap-2 pt-2">
                  <FiCornerDownRight className="text-xs text-slate-400" />
                  <p className="text-xs tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    {t('home.premium.caseStudy.quoteAuthor')}
                  </p>
                </div>
              </div>

              {/* RESULT COMPONENT - Ən aşağıdakı qiymətli nəticə kartı */}
              <div className="mt-8 rounded-2xl border border-slate-500/10 bg-[#f4efe8]/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-[#059aa2]/20 dark:bg-slate-950/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                      {t('home.premium.caseStudy.resultTag')}
                    </span>
                    <h4 className="mt-1.5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
                      {t('home.premium.caseStudy.resultTitle')}
                    </h4>
                  </div>
                  {/* Zərif Keçid Düyməsi */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-500/10 bg-white shadow-sm dark:bg-slate-900">
                    <FiArrowUpRight className="text-sm text-slate-400 dark:text-slate-500" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}