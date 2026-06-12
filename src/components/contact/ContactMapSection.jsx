import { clientLogos } from '../../assets'

export default function ContactMapSection() {
  return (
    // Sərt fon ləğv edildi, əlaqə forması ilə tam eyni premium şüşəvari material tətbiq olundu
    <div className="group rounded-2xl border border-slate-500/10 bg-white/40 p-4 backdrop-blur-md shadow-xl shadow-slate-500/[0.02] dark:bg-white/[0.01] antialiased">
      
      {/* OFİS ŞƏKLİ PANELİ - Üzərinə gələndə zərif kinematik böyümə effekti ilə */}
      <div className="mb-4 w-full h-44 rounded-xl overflow-hidden border border-slate-500/5 bg-slate-100 dark:bg-slate-900">
        <img 
          src={clientLogos[2]} 
          alt="LBC Office" 
          className="w-full h-full object-cover filter grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
          loading="lazy" 
        />
      </div>

      {/* İNTERAKTİV XƏRİTƏ PANELİ */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden border border-slate-500/5 bg-slate-100 dark:bg-slate-900 shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!11m14!1m12!1m3!1d12154.51268305001!2d49.8485293!3d40.3946237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1700000000000!5m2!1saz!2saz"
          // MÖCÜZƏVİ FİLTR: Standart parlaq Google rənglərini ləğv edib elit monoxrom korporativ dizayna keçirir
          className="absolute inset-0 w-full h-full border-0 pointer-events-none transition-all duration-500 grayscale contrast-[1.15] opacity-85 group-hover:opacity-100 dark:invert dark:hue-rotate-180 dark:opacity-75 dark:group-hover:opacity-90"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LBC Office Location"
        />
        
        {/* Xəritənin künclərindən içəri doğru sızan zərif kölgə (Xəritəni qutuya tam oturtmaq üçün) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/[0.02] to-transparent pointer-events-none dark:from-black/[0.1]" />
      </div>
    </div>
  )
}