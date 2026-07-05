import { useEffect, useState } from 'react'
import { clientLogos } from '../../assets'
import { getPublicContactSettings } from '../../lib/contactService'

export default function ContactMapSection() {
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

  const officeImage = contact?.officeImage || clientLogos[2]
  const mapEmbedUrl = contact?.mapEmbedUrl || ''

  return (
    // Sərt fon ləğv edildi, əlaqə forması ilə tam eyni premium şüşəvari material tətbiq olundu
    <div className="group rounded-2xl border border-slate-500/10 bg-white/40 p-4 backdrop-blur-md shadow-xl shadow-slate-500/[0.02] dark:bg-white/[0.01] antialiased">
      
      {/* OFİS ŞƏKLİ PANELİ - Üzərinə gələndə zərif kinematik böyümə effekti ilə */}
      <div className="mb-4 w-full h-44 rounded-xl overflow-hidden border border-slate-500/5 bg-slate-100 dark:bg-slate-900">
        {isLoading ? (
          <div className="h-full w-full animate-pulse bg-slate-200/70 dark:bg-slate-700/70" />
        ) : (
          <img
            src={officeImage}
            alt="LBC Office"
            className="w-full h-full object-cover filter grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            loading="lazy"
          />
        )}
      </div>

      {/* İNTERAKTİV XƏRİTƏ PANELİ */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden border border-slate-500/5 bg-slate-100 dark:bg-slate-900 shadow-inner">
        {isLoading ? (
          <div className="absolute inset-0 animate-pulse bg-slate-200/70 dark:bg-slate-700/70" />
        ) : mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            className="absolute inset-0 w-full h-full border-0 transition-all duration-500 grayscale contrast-[1.15] opacity-85 group-hover:opacity-100 dark:invert dark:hue-rotate-180 dark:opacity-75 dark:group-hover:opacity-90"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LBC Office Location"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Xəritə linki hələ əlavə edilməyib.
          </div>
        )}
        
        {/* Xəritənin künclərindən içəri doğru sızan zərif kölgə (Xəritəni qutuya tam oturtmaq üçün) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/[0.02] to-transparent pointer-events-none dark:from-black/[0.1]" />
      </div>
    </div>
  )
}