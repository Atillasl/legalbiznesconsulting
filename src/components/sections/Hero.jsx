import { FiArrowRight, FiGlobe, FiShield, FiTrendingUp } from 'react-icons/fi'
import { useTranslation } from '../../context/LanguageProvider'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white dark:bg-[#050505] pt-20 overflow-hidden">
      {/* Fon bəzəyi - Nazik həndəsi fiqurlar */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-white/[0.02] -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#008080]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Sol mətn hissəsi */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#008080]" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#008080] uppercase">
                  {t('home.hero.badge')}
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[0.9] sm:leading-[0.95]">
                {t('home.hero.title')}
              </h1>
            </div>

            <p className="max-w-xl text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#008080] px-12 py-5 text-base font-bold text-white transition-all hover:bg-[#006666] hover:shadow-2xl hover:shadow-[#008080]/20 hover:-translate-y-1 active:scale-95"
              >
                {t('home.hero.cta.onlineApp')} 
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group flex items-center gap-3 text-base font-bold text-slate-900 dark:text-white"
              >
                <span className="border-b-2 border-slate-200 group-hover:border-[#008080] transition-all pb-1">
                  {t('home.hero.cta.ourServices')}
                </span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Güvən Göstəriciləri */}
            <div className="pt-12 flex items-center gap-8 border-t border-slate-100 dark:border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 dark:border-[#050505] dark:bg-slate-800" />
                ))}
              </div>
              <p className="text-sm text-slate-400 font-medium leading-tight">
                <span className="text-slate-900 dark:text-white font-bold block mb-0.5">+500 Müştəri Uğuru</span>
                Qlobal şirkətlər üçün strateji hüquqi tərəfdaş.
              </p>
            </div>
          </div>

          {/* Sağ vizual hissə - Bento Grid */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 group hover:shadow-[#008080]/5 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#008080]/10 flex items-center justify-center text-[#008080]">
                    <FiGlobe size={28} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Qlobal Əhatə</span>
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-end">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">10+ Ölkə</div>
                    <span className="text-xs font-bold text-[#008080]">USA • UAE • EU • AZ</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#008080] w-[88%] rounded-full transition-all duration-1000" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 dark:bg-[#008080] p-8 rounded-[3rem] text-white shadow-xl hover:-translate-y-2 transition-transform duration-500">
                <FiShield size={32} className="mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-1">100%</h3>
                <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest">Məxfilik</p>
              </div>

              <div className="bg-[#008080]/5 dark:bg-white/5 p-8 rounded-[3rem] border border-[#008080]/10 hover:-translate-y-2 transition-transform duration-500">
                <FiTrendingUp size={32} className="text-[#008080] mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">İnkişaf</h3>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">Strateji Dəstək</p>
              </div>

              {/* Parlama effekti */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#008080]/20 blur-[100px] -z-10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}