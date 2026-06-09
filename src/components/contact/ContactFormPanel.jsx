import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { FiCheckCircle } from 'react-icons/fi'

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

  const handleSubmit = (e) => {
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

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-900 dark:bg-slate-900">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in space-y-4">
          <FiCheckCircle className="text-emerald-500" size={56} />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('contact.form.successTitle')}</h3>
          <p className="text-sm text-slate-500 max-w-sm dark:text-slate-400">{t('contact.form.successDesc')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('contact.form.title')}</h3>
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
            rows={5}
            placeholder={t('contact.form.placeholders.message')}
            required
            error={errors.message}
          />

          <div className="pt-2">
            <Button type="submit" variant="primary" className="w-full py-4">
              {t('contact.form.submitBtn')}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
