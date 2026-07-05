import { useEffect, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiInfo } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'
import { getPublicContactSettings } from '../../lib/contactService'

export default function ContactInfoPanel() {
  const { t } = useLanguage()
  const [contact, setContact] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true

    getPublicContactSettings()
      .then((settings) => {
        if (active) {
          setContact(settings)
          setIsLoading(false)
        }
      })
      .catch(() => {
        if (active) {
          setContact(null)
          setIsLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <div className="space-y-4 antialiased">
      {/* ƏSAS MƏLUMAT QUTUSU - Şüşə effekti və incə material dizaynı */}
      <div className="rounded-2xl border border-slate-500/10 bg-white/40 p-6 backdrop-blur-md shadow-xl shadow-slate-500/[0.02] dark:bg-white/[0.01] sm:p-8">
        
        {/* PANEL BAŞLIĞI */}
        <div className="border-b border-slate-500/5 pb-4 mb-6">
          <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
            {t('contact.info.title')}
          </h3>
        </div>

        {/* MƏLUMAT SİYAHISI */}
        <div className="space-y-6">
          
          {/* TELEFON */}
          <div className="group flex items-center gap-4">
            {/* İkon qutusu hover anında zərifcə canlanır */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#059aa2] group-hover:text-white dark:bg-[#059aa2]/10">
              <FiPhone size={15} />
            </div>
            <div>
              <h4 className="text-[9px] font-medium text-slate-400 uppercase tracking-[0.15em]">{t('contact.info.phone')}</h4>
              {isLoading ? (
                <div className="mt-1 h-3 w-36 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
              ) : (
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 tracking-wide">{contact?.mobile || '-'}</p>
              )}
            </div>
          </div>

          {/* E-POÇT */}
          <div className="group flex items-center gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#059aa2] group-hover:text-white dark:bg-[#059aa2]/10">
              <FiMail size={15} />
            </div>
            <div>
              <h4 className="text-[9px] font-medium text-slate-400 uppercase tracking-[0.15em]">{t('contact.info.email')}</h4>
              {isLoading ? (
                <div className="mt-1 h-3 w-44 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
              ) : (
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 tracking-wide">{contact?.email || '-'}</p>
              )}
            </div>
          </div>

          {/* ÜNVAN */}
          <div className="group flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#059aa2] group-hover:text-white dark:bg-[#059aa2]/10 mt-0.5">
              <FiMapPin size={15} />
            </div>
            <div>
              <h4 className="text-[9px] font-medium text-slate-400 uppercase tracking-[0.15em]">{t('contact.info.addressTitle')}</h4>
              {isLoading ? (
                <div className="mt-1 space-y-1">
                  <div className="h-3 w-52 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
                  <div className="h-3 w-44 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
                </div>
              ) : (
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed tracking-wide">{contact?.address || '-'}</p>
              )}
            </div>
          </div>

          {/* İŞ SAATLARI */}
          <div className="group flex items-start gap-4 border-t border-slate-500/5 pt-6 dark:border-slate-800/40">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/5 bg-[#059aa2]/5 text-[#059aa2] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#059aa2] group-hover:text-white dark:bg-[#059aa2]/10 mt-0.5">
              <FiClock size={15} />
            </div>
            <div>
              <h4 className="text-[9px] font-medium text-slate-400 uppercase tracking-[0.15em]">{t('contact.info.hoursTitle')}</h4>
              {isLoading ? (
                <div className="mt-1 space-y-1">
                  <div className="h-3 w-40 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
                  <div className="h-3 w-32 animate-pulse rounded bg-slate-200/70 dark:bg-slate-700/70" />
                </div>
              ) : (
                <>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 tracking-wide">{contact?.hoursWeekdays || '-'}</p>
                  <p className="text-[11px] font-light text-slate-400 dark:text-slate-500 mt-0.5">{contact?.hoursWeekend || '-'}</p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* DISCLAIMER (MƏLUMAT NOTU) - Narıncı bağıran rəng ləğv edildi, tam minimalist redaksiya üslubuna gətirildi */}
      <div className="rounded-xl border border-slate-500/5 bg-slate-500/[0.02] p-4 dark:bg-white/[0.01]">
        <p className="flex gap-2.5 text-[11px] font-light leading-relaxed text-slate-400 dark:text-slate-500">
          <FiInfo className="shrink-0 mt-0.5 text-[#059aa2]/80" size={13} />
          <span>{t('contact.info.disclaimer')}</span>
        </p>
      </div>
    </div>
  )
}