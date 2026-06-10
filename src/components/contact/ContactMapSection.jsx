import { clientLogos } from '../../assets'

export default function ContactMapSection() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-sm dark:border-slate-900 dark:bg-slate-900">
      <div className="mb-4 w-full rounded-2xl overflow-hidden">
        <img src={clientLogos[2]} alt="office" className="w-full h-44 object-cover rounded-lg" loading="lazy" />
      </div>
      <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!11m14!1m12!1m3!1d12154.51268305001!2d49.8485293!3d40.3946237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1700000000000!5m2!1saz!2saz"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none saturate-110 contrast-105"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LBC Office Location"
        />
      </div>
    </div>
  )
}
