import ServiceCard from '../common/ServiceCard'

export default function ServiceGrid({ services }) {
  return (
    // Grid strukturunu avto hündürlüklə tənzimləyirik ki, xidmət kartları mətni qırpmadan göstərə bilsin
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}