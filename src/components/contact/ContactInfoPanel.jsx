import { FiMail, FiPhone, FiMapPin, FiClock, FiInfo } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function ContactInfoPanel() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-900 dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">{t('contact.info.title')}</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00969A]/10 text-[#00969A] dark:bg-[#00969A]/20">
              <FiPhone size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t('contact.info.phone')}</h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">+994 77 347 79 59</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00969A]/10 text-[#00969A] dark:bg-[#00969A]/20">
              <FiMail size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t('contact.info.email')}</h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">info@legalbusiness.az</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00969A]/10 text-[#00969A] dark:bg-[#00969A]/20">
              <FiMapPin size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t('contact.info.addressTitle')}</h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed">{t('contact.info.address')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-slate-50 pt-6 dark:border-slate-800/60">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00969A]/10 text-[#00969A] dark:bg-[#00969A]/20">
              <FiClock size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t('contact.info.hoursTitle')}</h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{t('contact.info.hoursWeekdays')}</p>
              <p className="text-xs text-slate-400 mt-0.5">{t('contact.info.hoursWeekend')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-amber-50/60 border border-amber-100 p-4 dark:bg-amber-950/20 dark:border-amber-900/30">
        <p className="flex gap-2 text-xs leading-relaxed text-amber-800 dark:text-amber-400">
          <FiInfo className="shrink-0 mt-0.5" size={14} />
          {t('contact.info.disclaimer')}
        </p>
      </div>
    </div>
  )
}
