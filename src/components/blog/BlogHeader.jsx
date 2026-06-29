import { useLanguage } from '../../hooks/useLanguage'

export default function BlogHeader() {
  const { t } = useLanguage()

  return (
    // Sərt fonlar ləğv edildi, tam minimalist və lüks alt xətt tənzimləməsi
    <section className="relative overflow-hidden bg-transparent py-12 text-center border-b border-slate-500/5 antialiased">
      
      {/* BACKGROUND LUXURY EFFECT - Arxada gizlənən iki fərqli dinamik brend işığı */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#059aa2]/5 blur-[100px] pointer-events-none dark:bg-[#059aa2]/10" />
      <div className="absolute top-1/3 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#59c9ca]/5 blur-[120px] pointer-events-none dark:bg-[#59c9ca]/5" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10 space-y-4">
        
        {/* BADGE - İncə kənarlıq və içində döyünən zərif nöqtə (Pulse) */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#059aa2]/20 bg-[#059aa2]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#059aa2] animate-pulse" />
          {t('blog.badge')}
        </span>

        {/* MAIN TITLE — use localized blog title for all languages */}
        <h1 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          {t('blog.title')}
        </h1>

        {/* DESCRIPTION - Kompakt ölçüdə, yüngül və oxunaqlı mətn */}
        <p className="mx-auto max-w-lg text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light tracking-wide">
          {t('blog.description')}
        </p>
        
      </div>
    </section>
  )
}