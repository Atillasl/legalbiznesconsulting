import { useParams, Link } from 'react-router-dom'
import { techImages } from '../assets'
import { FiArrowLeft, FiCheckCircle, FiBriefcase } from 'react-icons/fi'
import { allServices } from '../data/services'
import { categoryMap } from '../data/categories'
import { useLanguage } from '../hooks/useLanguage'

export default function ServiceDetail() {
  const { serviceId } = useParams()

  const bannerImage = techImages[1]

  // Find service from data; if not found, fallback to a default placeholder
  const service = allServices.find((s) => String(s.id) === serviceId) || {
    title: 'Xidmət tapılmadı',
    category: 'Xidmətlər',
    shortDesc: 'Seçilmiş xidmət məlumatı mövcud deyil.',
    image: bannerImage,
    longDesc: 'Bu xidmət üçün ətraflı məlumat yaxın vaxtlarda əlavə ediləcək.',
    benefits: [],
    process: []
  }

  const { t } = useLanguage()

  // localized overrides (use translations when available)
  const localizedTitle = t(`services.items.${service.id}.title`) || service.title
  const localizedLongDesc = t(`services.items.${service.id}.longDesc`) || service.longDesc || service.shortDesc
  const localizedBenefits = t(`services.items.${service.id}.benefits`) || service.benefits || []
  const localizedProcess = t(`services.items.${service.id}.process`) || service.process || [
    t('services.detailPage.processDefault.0') || 'Konsultasiya və tələblərin qiymətləndirilməsi',
    t('services.detailPage.processDefault.1') || 'Hüquqi strategiyanın hazırlanması',
    t('services.detailPage.processDefault.2') || 'Sənədlərin hazırlanması və təsdiqi'
  ]

  // Normalize fields if not present in data
  const longDesc = localizedLongDesc || service.longDesc || service.shortDesc || ''
  const benefits = localizedBenefits || service.benefits || []
  const process = localizedProcess || service.process || [
    'Konsultasiya və tələblərin qiymətləndirilməsi',
    'Hüquqi strategiyanın hazırlanması',
    'Sənədlərin hazırlanması və təsdiqi'
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-[#020617] dark:text-[#f1f5f9]">
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#059aa2] hover:opacity-70 transition-opacity mb-8">
            <FiArrowLeft size={12} /> {t('services.detailPage.backToServices') || 'Xidmətlərə qayıt'}
          </Link>

          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#059aa2] bg-[#059aa2]/5 px-4 py-1.5 rounded-full">
            {(() => {
              const key = categoryMap[service.category] || service.category
              return t(`services.categories.${key}`) || service.category
            })()}
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
            {localizedTitle}
          </h1>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-500/10 shadow-2xl">
            <img src={bannerImage} alt="service-banner" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#059aa2]/5 text-[#059aa2] mb-6">
                <FiBriefcase />
              </div>
              <h2 className="text-3xl font-semibold mb-6 text-slate-900 dark:text-white">{t('services.detailPage.aboutTitle')}</h2>
              <p className="text-base leading-8 text-slate-700 dark:text-slate-300 font-light">
                {longDesc}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-6 text-slate-900 dark:text-white">{t('services.detailPage.benefitsTitle')}</h2>
              <ul className="space-y-4">
                {benefits.length > 0 ? (
                  benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base text-slate-700 dark:text-slate-300">
                      <FiCheckCircle className="text-[#059aa2] shrink-0 mt-1" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-base text-slate-700 dark:text-slate-300">{t('services.detailPage.noBenefits') || 'Xidmət üçün əsas faydalar əlavə edilməyib.'}</li>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-slate-900 dark:text-white">{t('services.detailPage.processTitle')}</h3>
              <div className="space-y-8">
                {process.map((p, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#059aa2]/10 text-[#059aa2] text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/contact" className="inline-block rounded-3xl bg-[#059aa2] px-8 py-6 text-center text-white transition-colors hover:bg-[#047d82]">
              <p className="text-base font-medium">{t('services.detailPage.ctaTitle')}</p>
              <p className="mt-2 text-sm opacity-90">{t('services.detailPage.ctaDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
