import { useParams, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { useLanguage } from '../hooks/useLanguage'
import { 
  FiArrowLeft, FiCheckCircle, FiBriefcase, 
  FiGlobe, FiSmartphone, FiCornerDownRight 
} from 'react-icons/fi'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const { t } = useLanguage()

  // İkonlar dildən asılı olmadığı üçün lokal map obyekti daxilində saxlanılır
  const serviceIcons = {
    "corporate": <FiBriefcase />,
    "contract": <FiBriefcase />,
    "web-dev": <FiGlobe />,
    "app-dev": <FiSmartphone />
  }

  // Əgər gələn serviceId JSON daxilində yoxdursa, korporativ bölməni default seçirik
  const activeId = t(`services.details.${serviceId}.title`) ? serviceId : 'corporate'

  const itemKey = `services.details.${activeId}`
  const benefits = t(`${itemKey}.benefits`) || []
  const processSteps = t(`${itemKey}.process`) || []

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-all dark:bg-[#020617] dark:text-[#f1f5f9]">
      
      {/* HEADER BANNER */}
      <section className="relative overflow-hidden bg-[#f8f4ee] py-12 border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00969A] hover:underline mb-4"
            >
              <FiArrowLeft size={14} /> {t('services.detailPage.backToHome')}
            </Link>
            <span className="text-[10px] font-extrabold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3 py-1 rounded-full dark:bg-[#00969A]/20">
              {t(`${itemKey}.category`)}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t(`${itemKey}.title`)}
            </h1>
          </div>
        </div>
      </section>

      {/* ƏSAS KONTENT */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          
          {/* Sol Tərəf: Geniş İzah və Üstünlüklər */}
          <div className="md:col-span-2 space-y-10">
            {/* Təsvir */}
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00969A]/10 text-2xl text-[#00969A] mb-5 dark:bg-[#00969A]/20">
                {serviceIcons[activeId] || <FiBriefcase />}
              </div>
              <h2 className="text-xl font-bold mb-4">{t('services.detailPage.aboutTitle')}</h2>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {t(`${itemKey}.longDesc`)}
              </p>
            </div>

            {/* Üstünlüklər (Benefits) */}
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-6">{t('services.detailPage.benefitsTitle')}</h2>
              <ul className="space-y-4">
                {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <FiCheckCircle className="text-[#00969A] shrink-0 mt-0.5" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ Tərəf: İş Prosesi və Sürətli Müraciət */}
          <div className="space-y-6">
            {/* İş Prosesi (Step-by-Step) */}
            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-base font-bold mb-6 flex items-center gap-2">
                <FiCornerDownRight className="text-[#00969A]" /> {t('services.detailPage.processTitle')}
              </h3>
              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100 dark:before:bg-slate-800">
                {Array.isArray(processSteps) && processSteps.map((p, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="h-7 w-7 rounded-full bg-[#00969A]/10 text-[#00969A] text-xs font-bold flex items-center justify-center shrink-0 z-10 dark:bg-[#00969A]/20">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Kartı */}
            <div className="rounded-3xl bg-gradient-to-br from-[#00969A] to-[#007A7E] p-6 text-white text-center shadow-lg shadow-[#00969A]/10">
              <h3 className="text-base font-bold">{t('services.detailPage.ctaTitle')}</h3>
              <p className="text-xs text-white/80 mt-2 leading-relaxed">
                {t('services.detailPage.ctaDesc')}
              </p>
              <div className="mt-6">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full py-3 text-xs font-bold text-[#007A7E] bg-white hover:bg-slate-50">
                    {t('services.detailPage.ctaBtn')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}