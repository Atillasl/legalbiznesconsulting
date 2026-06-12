import { FiArrowRight, FiLayers, FiShield, FiCheck } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'
import t4Image from '../../assets/t4.png'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    // min-h-[80vh] və ya h-[85vh] tətbiq edərək ekranı vizual boğmaqdan xilas edirik
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-transparent text-white antialiased">
      
      {/* Background & Overlays */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none" style={{ backgroundImage: `url(${t4Image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-[#059aa2]/5 backdrop-blur-[1px] pointer-events-none" />
      <div className="absolute inset-0 bg-[#059aa2]/5 mix-blend-color pointer-events-none" />
      <div className="absolute right-[-5%] top-[-5%] h-[600px] w-[600px] rounded-full bg-[#059aa2]/10 blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#59c9ca]">
              <FiShield className="text-xs" /> {t('home.premium.hero.badge')}
            </span>

            {/* Başlıq ölçüləri bir tık kompaktlaşdırıldı və aradakı boşluq azaldıldı */}
            <h1 className="mt-4 text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.15] drop-shadow-md">
              {t('home.premium.hero.title')}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 font-light drop-shadow-md">
              {t('home.premium.hero.description')}
            </p>

            {/* Buttons - mt-10-dan mt-6-ya endirildi */}
            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#059aa2] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition duration-200 hover:bg-[#027f82] shadow-md shadow-[#059aa2]/10">
                {t('home.premium.hero.cta.primary')} <FiArrowRight className="text-xs" />
              </a>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3 text-xs font-semibold uppercase tracking-wider transition duration-200 hover:border-white/30 hover:bg-white/10">
                {t('home.premium.hero.cta.secondary')}
              </a>
            </div>

            {/* Proof Cards - Aşağıya doğru çox uzanmasın deyə incə kart dizaynına keçirildi */}
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              {[
                { tag: 'trust', title: 'trust.title', desc: 'trust.desc' },
                { tag: 'alignment', title: 'alignment.title', desc: 'alignment.desc' }
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#59c9ca]/70">{t(`home.premium.hero.proofs.${item.tag}.tag`)}</p>
                  <h2 className="mt-1 text-base font-medium text-slate-100">{t(`home.premium.hero.proofs.${item.title}`)}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 font-light">{t(`home.premium.hero.proofs.${item.desc}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Panel (Daha incə padding-lərlə minimalist etdik) */}
          <div className="relative w-full lg:pl-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-xl shadow-xl shadow-slate-950/40">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 border-b border-white/5 pb-4">
                <FiLayers className="text-base text-[#59c9ca]" /> {t('home.premium.hero.panelTitle')}
              </div>
              
              <div className="mt-4 space-y-4">
                {['regulatory', 'governance', 'digital'].map((key) => (
                  <div key={key} className="border-b border-white/5 pb-4 last:border-none last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-200">{t(`home.premium.hero.panelItems.${key}.label`)}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400 font-light">{t(`home.premium.hero.panelItems.${key}.detail`)}</p>
                      </div>
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#059aa2]/20 text-[#59c9ca]">
                        <FiCheck className="text-[10px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}