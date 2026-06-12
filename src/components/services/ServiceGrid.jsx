import ServiceCard from '../common/ServiceCard'

export default function ServiceGrid({ services }) {
  return (
    // Grid strukturunu 'lg:grid-cols-3' edərək daha geniş və zərif nəfəs sahəsi yaradırıq
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[280px]">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className={`group relative transition-all duration-700 ease-out 
            ${index % 3 === 0 ? 'lg:col-span-2' : 'lg:col-span-1'} 
            overflow-hidden rounded-3xl border border-slate-500/10 bg-white/40 p-1 backdrop-blur-md 
            hover:border-[#059aa2]/30 hover:shadow-2xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.02]`}
        >
          {/* Kartın daxilindəki şəffaf material */}
          <div className="h-full w-full rounded-[22px] bg-white/50 p-6 dark:bg-white/[0.03]">
            <ServiceCard service={service} />
          </div>

          {/* HOVER EFEKTİ: Kartın küncündə zərif işıq sızması */}
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#059aa2]/10 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        </div>
      ))}
    </div>
  )
}