import { useLanguage } from '../hooks/useLanguage'
import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import ContactFormPanel from '../components/contact/ContactFormPanel'
import ContactMapSection from '../components/contact/ContactMapSection'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 transition-colors duration-500 dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* 1. HEADER: Minimalist və Geniş */}
      <section className="relative py-32 text-center">
        {/* Zərif işıq süzgəci */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00969A]/5 via-transparent to-transparent" />
        
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#00969A] bg-[#00969A]/5 px-4 py-1.5 rounded-full">
            {t('contact.badge')}
          </span>
          <h1 className="mt-8 text-4xl md:text-6xl font-light tracking-tight text-slate-900 dark:text-white">
            {t('contact.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT: Bento-Grid Estetikası */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Sol Panel: Məlumatlar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <ContactInfoPanel />
            </div>
          </div>

          {/* Sağ Panel: Forma */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-500/10 bg-white/50 p-8 md:p-12 backdrop-blur-md shadow-sm dark:bg-white/[0.02]">
              <ContactFormPanel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP: Şəffaf və Şüşəvari */}
      <section className="mx-auto max-w-7xl px-6 py-12 mb-20">
        <div className="overflow-hidden rounded-3xl border border-slate-500/10 bg-white/30 backdrop-blur-sm p-2 shadow-2xl shadow-slate-900/5">
          <ContactMapSection />
        </div>
      </section>
      
    </div>
  )
}