import { useLanguage } from '../../hooks/useLanguage'
import { clientLogos } from '../../assets'

export default function HomePlaceholders() {
  const { t } = useLanguage()

  return (
    <>
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">{t('home.testimonials.title')}</p>
          <div className="mt-6 h-32 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-400 dark:border-slate-800">
            <div className="flex items-center gap-6 overflow-x-auto px-4">
              {clientLogos.map((logo, idx) => (
                <img key={idx} src={logo} alt={`logo-${idx}`} className="h-20 w-auto object-contain" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">{t('home.contactPlaceholder.title')}</h2>
        </div>
        <div className="h-40 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-400 dark:border-slate-800">
          <img src={clientLogos[0]} alt="contact-placeholder" className="h-32 object-contain" loading="lazy" />
        </div>
      </section>
    </>
  )
}
