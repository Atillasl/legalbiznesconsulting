import { supabase } from './supabaseClient'
import emailjs from '@emailjs/browser'

const EMPTY_CONTACT = {
  mobile: '',
  internal: '',
  whatsapp: '',
  email: '',
  address: '',
  hoursWeekdays: '',
  hoursWeekend: '',
  officeImage: '',
  mapEmbedUrl: '',
}

export async function getPublicContactSettings() {
  if (!supabase) {
    return EMPTY_CONTACT
  }

  const { data, error } = await supabase
    .from('contact_settings')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) throw error

  return data
    ? {
        mobile: data.mobile || '',
        internal: data.internal || '',
        whatsapp: data.whatsapp || '',
        email: data.email || '',
        address: data.address || '',
        hoursWeekdays: data.hours_weekdays || '',
        hoursWeekend: data.hours_weekend || '',
        officeImage: data.office_image || '',
        mapEmbedUrl: data.map_embed_url || '',
      }
    : EMPTY_CONTACT
}

// 🚀 HƏM BAZAYA YAZAN, HƏM MAİL ATAN TAM TƏMİZ VƏ XƏTASIZ FUNKSİYA
export async function submitContactMessage(message) {
  // 1. Öncə məlumatı Supabase bazasına yazırıq
  if (supabase) {
    const payload = {
      name: message.name,
      email: message.email,
      phone: message.phone || null,
      subject: message.subject || null,
      message: message.message,
      status: 'new',
    }

    const { error } = await supabase.from('contact_messages').insert(payload)
    if (error) throw error
  }

  // 2. İndi isə eyni məlumatı EmailJS ilə şirkət ünvanına göndəririk
  try {
    const templateParams = {
      user_name: message.name,
      user_email: message.email,
      user_phone: message.phone || 'Qeyd edilməyib',
      subject: message.subject || 'Ümumi Müraciət',
      message: message.message,
    }

    // Əgər .env qurmaq istəmirsənsə, birbaşa sətirləri bura da yaza bilərsən.
    // Təhlükəsiz və dinamik olması üçün .env konfiqurasiyası mütləqdir:
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service1'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_no277zg'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'TQXu8oMGWmlaoVm96'

    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    console.log('Mail bildirişi uğurla göndərildi!')
  } catch (mailError) {
    // Maildə xəta olsa belə bazaya yazıldığı üçün istifadəçiyə bildirmirik, log edirik
    console.error('EmailJS xətası:', mailError)
  }
}