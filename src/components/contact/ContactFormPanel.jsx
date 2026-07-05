import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { FiCheckCircle } from 'react-icons/fi'
import { submitContactMessage } from '../../lib/contactService'

export default function ContactFormPanel() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = t('contact.form.errors.nameRequired')
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid')
    }
    if (!formData.message.trim()) newErrors.message = t('contact.form.errors.messageRequired')

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    await submitContactMessage(formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    // Sərt fon ləğv edildi, incə minimalist kənarlıq və dumanlı material şüşə effekti gətirildi
    <div className="relative overflow-hidden rounded-2xl border border-slate-500/10 bg-white/40 p-6 backdrop-blur-md shadow-xl shadow-slate-500/[0.02] dark:bg-white/[0.01] sm:p-8 antialiased">
      
      {/* BACKGROUND ABSTRACT GLOW - Formanın daxilindən sızan zərif işıq həlqəsi */}
      <div className="absolute -bottom-24 -right-24 -z-10 h-48 w-48 rounded-full bg-[#059aa2]/5 blur-3xl pointer-events-none dark:bg-[#059aa2]/10" />

      {isSubmitted ? (
        // Məktub uğurla göndərildikdə çıxan premium minimalist ekran
          <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-fadeIn">
          {/* Yaşıl bağıran rəng yerinə, brend rəngində zərif, incə xətti ikon */}
          <FiCheckCircle className="text-[#059aa2] stroke-[1.1] animate-pulse" size={48} />
          <div className="space-y-1.5">
            <h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">
              {t('contact.form.successTitle')}
            </h3>
            <p className="mx-auto max-w-xs text-xs font-light leading-relaxed text-slate-400 dark:text-slate-500">
              {t('contact.form.successDesc')}
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* FORM TITLE - Ölçü qorundu, font hiyerarxiyası nəzakətli (font-medium) edildi */}
          <div className="border-b border-slate-500/5 pb-4">
            <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
              {t('contact.form.title')}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label={t('contact.form.labels.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.name')}
              required
              error={errors.name}
            />
            <Input
              label={t('contact.form.labels.email')}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.email')}
              required
              error={errors.email}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label={t('contact.form.labels.phone')}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.phone')}
            />
            <Input
              label={t('contact.form.labels.subject')}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.subject')}
            />
          </div>

          <Input
            label={t('contact.form.labels.message')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            isTextarea
            rows={4}
            placeholder={t('contact.form.placeholders.message')}
            required
            error={errors.message}
          />

          {/* DÜYMƏ STRUKTURU - Tam korporativ lüks, zərif keçidli düymə */}
          <div className="pt-2">
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full py-3.5 text-xs font-medium tracking-wide uppercase bg-[#059aa2] hover:bg-[#047d82] shadow-lg shadow-[#059aa2]/5 transition-all rounded-xl"
            >
              {t('contact.form.submitBtn')}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}