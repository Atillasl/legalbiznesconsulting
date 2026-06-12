import { FiAward, FiShield, FiCpu, FiTrendingUp, FiTarget, FiUsers } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function About() {
  const { t } = useLanguage()

  const coreValues = [
    { icon: <FiShield />, title: t('about.values.secure.title'), desc: t('about.values.secure.desc') },
    { icon: <FiCpu />, title: t('about.values.innovative.title'), desc: t('about.values.innovative.desc') },
    { icon: <FiTrendingUp />, title: t('about.values.partnership.title'), desc: t('about.values.partnership.desc') }
  ]

  return (
    <div className="antialiased bg-[#fafafa] dark:bg-[#020617] transition-colors duration-500">
      
      {/* 1. PAGE HEADER - Minimalist və Zen tərzdə */}
      <section className="relative py-24 text-center border-b border-slate-500/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#059aa2]/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#059aa2]">LBC KONSALTINQ</span>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {t('about.pageTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light text-slate-500 leading-relaxed">
            {t('about.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT - Asimmetrik Layout */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-500/10 bg-white/50 p-8 backdrop-blur-md dark:bg-white/[0.02]">
              <FiAward className="text-[#059aa2] mb-4" size={28} />
              <h3 className="text-xl font-medium text-slate-900 dark:text-white">{t('about.ecosystem.title')}</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-slate-500">{t('about.ecosystem.desc')}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-500/5 bg-white/40 p-6 text-center backdrop-blur-sm">
                <p className="text-2xl font-medium text-[#059aa2]">99%</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">{t('about.stats.success')}</p>
              </div>
              <div className="rounded-2xl bg-[#059aa2] p-6 text-center text-white shadow-lg shadow-[#059aa2]/20">
                <p className="text-2xl font-medium">24/7</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#e0f2f1]">SUPPORT</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white">
              {t('about.whoWeAre.title')}
            </h2>
            <div className="space-y-6 text-sm font-light leading-relaxed text-slate-500 dark:text-slate-400">
              <p>{t('about.whoWeAre.p1')}</p>
              <p className="border-l border-[#059aa2] pl-6 italic">{t('about.whoWeAre.p2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - Kartların Modernizasiyası */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: <FiTarget />, title: t('about.mission.title'), desc: t('about.mission.desc') },
            { icon: <FiUsers />, title: t('about.vision.title'), desc: t('about.vision.desc') }
          ].map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-500/10 bg-white/40 p-8 backdrop-blur-md transition-all hover:border-[#059aa2]/20 dark:bg-white/[0.01]">
              <div className="mb-6 text-[#059aa2]/50 group-hover:text-[#059aa2] transition-colors">{item.icon}</div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-xs font-light leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE VALUES - Bento Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 dark:text-white">{t('about.values.title')}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {coreValues.map((val, idx) => (
            <div key={idx} className="group rounded-xl border border-slate-500/10 bg-white/30 p-8 backdrop-blur-md transition-all hover:bg-[#059aa2]/5 hover:border-[#059aa2]/20">
              <div className="mb-6 text-[#059aa2] group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
              <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">{val.title}</h4>
              <p className="text-[11px] font-light text-slate-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}