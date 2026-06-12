import { useParams, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { useLanguage } from '../hooks/useLanguage'
import { techImages } from '../assets'
import { FiArrowLeft, FiCheckCircle, FiBriefcase, FiGlobe, FiSmartphone, FiCornerDownRight } from 'react-icons/fi'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const { t } = useLanguage()

  const bannerImage = techImages[1]
  const serviceIcons = { "corporate": <FiBriefcase />, "contract": <FiBriefcase />, "web-dev": <FiGlobe />, "app-dev": <FiSmartphone /> }
  const activeId = t(`services.details.${serviceId}.title`) ? serviceId : 'corporate'
  const itemKey = `services.details.${activeId}`
  const benefits = t(`${itemKey}.benefits`) || []
  const processSteps = t(`${itemKey}.process`) || []

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 transition-colors duration-500 dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* HEADER: Editorial Üslubu */}
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#059aa2] hover:opacity-70 transition-opacity mb-8">
            <FiArrowLeft size={12} /> {t('services.detailPage.backToHome')}
          </Link>
          
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#059aa2] bg-[#059aa2]/5 px-4 py-1.5 rounded-full">
            {t(`${itemKey}.category`)}
          </span>
          
          <h1 className="mt-8 text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
            {t(`${itemKey}.title`)}
          </h1>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-500/10 shadow-2xl">
            <img src={bannerImage} alt="service-banner" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ƏSAS KONTENT: Grid Sistemi */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          
          {/* Sol Panel: Məzmun */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl border border-slate-500/10 bg-white/50 p-8 md:p-10 backdrop-blur-md dark:bg-white/[0.02]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#059aa2]/5 text-[#059aa2] mb-6">
                {serviceIcons[activeId] || <FiBriefcase />}
              </div>
              <h2 className="text-xl font-light mb-6">Service Overview</h2>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                {t(`${itemKey}.longDesc`)}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-500/10 bg-white/50 p-8 md:p-10 backdrop-blur-md dark:bg-white/[0.02]">
              <h2 className="text-xl font-light mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <FiCheckCircle className="text-[#059aa2] shrink-0 mt-0.5" size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ Panel: Proses və CTA */}
          <div className="space-y-8">
            {/* Proses */}
            <div className="rounded-3xl border border-slate-500/10 bg-white/50 p-8 backdrop-blur-md dark:bg-white/[0.02]">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                <FiCornerDownRight className="text-[#059aa2]" /> Process
              </h3>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#059aa2]/10">
                {processSteps.map((p, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="h-8 w-8 rounded-full bg-[#059aa2] text-white text-[10px] font-bold flex items-center justify-center shrink-0 z-10">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium CTA */}
            <div className="rounded-3xl bg-[#059aa2] p-8 text-center text-white shadow-xl shadow-[#059aa2]/20">
              <h3 className="text-lg font-light">Ready to start?</h3>
              <p className="text-xs text-white/70 mt-3 mb-8 leading-relaxed">Let's discuss how we can help your business grow.</p>
              <Link to="/contact">
                <Button variant="secondary" className="w-full py-4 text-[10px] font-bold uppercase tracking-widest border-none">
                  {t('services.detailPage.ctaBtn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}