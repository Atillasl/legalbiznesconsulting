import { useLanguage } from '../../hooks/useLanguage'
import { FiAward, FiShield, FiCpu, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi'

export default function About() {
  const { t } = useLanguage()

  const coreValues = [
    {
      icon: <FiShield className="text-xl text-[#00969A]" />,
      title: t('about.values.secure.title'),
      desc: t('about.values.secure.desc')
    },
    {
      icon: <FiCpu className="text-xl text-[#00969A]" />,
      title: t('about.values.innovative.title'),
      desc: t('about.values.innovative.desc')
    },
    {
      icon: <FiTrendingUp className="text-xl text-[#00969A]" />,
      title: t('about.values.partnership.title'),
      desc: t('about.values.partnership.desc')
    }
  ]

  const milestones = [
    { year: t('about.mission.title'), icon: <FiTarget />, text: t('about.mission.desc') },
    { year: t('about.vision.title'), icon: <FiUsers />, text: t('about.vision.desc') }
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-all dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* 1. PAGE HEADER */}
      <section className="relative overflow-hidden bg-white py-16 text-center border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900">
        <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00969A]/5 blur-[80px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#00969A] uppercase">
            LBC Konsaltinq
          </span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t('about.pageTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            {t('about.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-900 dark:bg-slate-900">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00969A]/10 text-[#00969A]">
                <FiAward size={24} />
              </div>
              <h3 className="mt-4 text-2xl font-bold">{t('about.ecosystem.title')}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                {t('about.ecosystem.desc')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 border border-slate-100 text-center shadow-sm dark:border-slate-900 dark:bg-slate-900">
                <p className="text-3xl font-bold text-[#00969A]">99%</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{t('about.stats.success')}</p>
              </div>
              <div className="rounded-2xl bg-[#00969A] p-6 text-center text-white shadow-lg shadow-[#00969A]/15 dark:shadow-none">
                <p className="text-3xl font-bold">24/7</p>
                <p className="mt-1 text-xs font-medium text-[#f1f5f9]/80">{t('about.stats.support')}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('about.whoWeAre.title')}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {t('about.whoWeAre.p1')}
            </p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t('about.whoWeAre.p2')}
            </p>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative rounded-3xl border border-slate-100 bg-[#f8fafc] p-8 dark:border-slate-900 dark:bg-slate-900">
                <div className="absolute top-6 right-6 text-3xl text-[#00969A]/20">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-[#00969A] uppercase tracking-wider">
                  {item.year}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES (Dəyərlərimiz) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">{t('about.values.title')}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('about.values.subtitle')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {coreValues.map((value, idx) => (
            <div key={idx} className="group rounded-2xl bg-white p-6 border border-slate-100 transition-all hover:border-[#00969A]/30 hover:shadow-sm dark:border-slate-900 dark:bg-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 transition-colors group-hover:bg-[#00969A]/10">
                {value.icon}
              </div>
              <h4 className="mt-5 text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#00969A]">
                {value.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}