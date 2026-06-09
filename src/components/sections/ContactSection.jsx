import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

export default function ContactSection() {
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
    <section id="contact" className="relative bg-white py-20 transition-all dark:bg-slate-950">
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-[#00969A]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BÖLMƏ BAŞLIĞI */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3.5 py-1.5 rounded-full dark:bg-[#00969A]/20">
            {t('nav.contact')}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* SOL PANEL */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#f8fafc] p-8 border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {t('contact.directContact')}
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00969A] shadow-sm dark:bg-slate-800">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{t('contact.phone')}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">+994 (50) 000-0000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00969A] shadow-sm dark:bg-slate-800">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{t('contact.email')}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">info@legalbiznes.az</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00969A] shadow-sm dark:bg-slate-800">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{t('contact.addressTitle')}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Bakı şəhəri, Nərimanov rayonu</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00969A] shadow-sm dark:bg-slate-800">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{t('contact.workHours')}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ PANEL: FORMA */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-2 focus:ring-[#00969A]/10 dark:border-slate-800 dark:bg-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-2 focus:ring-[#00969A]/10 dark:border-slate-800 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-2 focus:ring-[#00969A]/10 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#00969A] focus:ring-2 focus:ring-[#00969A]/10 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00969A] px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-[#00969A]/10 hover:bg-[#007A7E] transition-all"
              >
                {t('contact.form.submit')} <FiSend />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}