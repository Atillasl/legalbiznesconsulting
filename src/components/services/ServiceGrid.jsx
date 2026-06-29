import ServiceCard from '../common/ServiceCard'

export default function ServiceGrid({ services }) {
  return (
    // Grid strukturunu avto hündürlüklə tənzimləyirik ki, xidmət kartları mətni qırpmadan göstərə bilsin
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className="group relative flex h-full min-h-[360px] overflow-hidden rounded-3xl transition-all duration-500 ease-out hover:shadow-xl hover:shadow-slate-200"
        >
          <div className="flex h-full w-full rounded-[22px] bg-transparent p-0">
            <ServiceCard service={service} />
          </div>
        </div>
      ))}
    </div>
  )
}