import ServiceCard from '../common/ServiceCard'

export default function ServiceGrid({ services }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
