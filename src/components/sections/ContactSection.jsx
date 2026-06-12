import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

export default function ContactSection() {
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('contact.successMessage'))
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative py-24 antialiased transition-colors duration-500 bg-[#fafafa] dark:bg-[#020617]">
      {/* Modern Arxa Fon Parıltısı */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-[#00969A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* BÖLMƏ BAŞLIĞI */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#00969A] uppercase bg-[#00969A]/5 px-4 py-1.5 rounded-full">
            {t('nav.contact')}
          </span>
          <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* SOL PANEL: MƏLUMATLAR (Lüks Şüşə Effekti) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-slate-500/10 bg-white/40 p-8 backdrop-blur-md dark:bg-white/[0.02]">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-8">
                {t('contact.directContact')}
              </h3>

              <div className="space-y-8">
                {[
                  { icon: <FiPhone />, label: t('contact.phone'), val: '+994 (50) 000-0000' },
                  { icon: <FiMail />, label: t('contact.email'), val: 'info@legalbiznes.az' },
                  { icon: <FiMapPin />, label: t('contact.addressTitle'), val: 'Bakı şəhəri, Nərimanov rayonu' },
                  { icon: <FiClock />, label: t('contact.workHours'), val: '09:00 - 18:00 (B.E - C.)' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00969A]/5 text-[#00969A] transition-colors group-hover:bg-[#00969A]/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</h4>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SAĞ PANEL: FORMA (Minimalist) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {['name', 'email'].map((field) => (
                  <div key={field} className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t(`contact.form.${field}`)}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-1 focus:ring-[#00969A] dark:border-slate-800 dark:bg-slate-900"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-1 focus:ring-[#00969A] dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-1 focus:ring-[#00969A] dark:border-slate-800 dark:bg-slate-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-[#00969A] px-8 py-4 text-xs font-bold text-white shadow-lg shadow-[#00969A]/20 hover:bg-[#007A7E] transition-all transform hover:-translate-y-0.5"
              >
                {t('contact.form.submit')} <FiSend size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}