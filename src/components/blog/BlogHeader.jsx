import { useLanguage } from '../../hooks/useLanguage'

export default function BlogHeader() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] py-16 text-center border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900">
      <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00969A]/5 blur-[80px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3 py-1 rounded-full dark:bg-[#00969A]/20">{t('blog.badge')}</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{t('blog.title')}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400">{t('blog.description')}</p>
      </div>
    </section>
  )
}
