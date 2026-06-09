import { FiBriefcase, FiCpu } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

export default function DepartmentsSection() {
  const { t } = useLanguage()

  const departments = [
    {
      id: 'legal',
      icon: <FiBriefcase />, 
      title: t('home.departments.legal.title'),
      desc: t('home.departments.legal.desc')
    },
    {
      id: 'tech',
      icon: <FiCpu />,
      title: t('home.departments.tech.title'),
      desc: t('home.departments.tech.desc')
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('home.departments.title')}</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{t('home.departments.subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {departments.map((item) => (
          <div key={item.id} className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all hover:border-[#00969A]/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00969A]/10 text-xl text-[#00969A] dark:bg-[#00969A]/20">
              {item.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-[#00969A]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
