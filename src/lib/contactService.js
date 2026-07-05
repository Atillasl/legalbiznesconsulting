import { supabase } from './supabaseClient'

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

export async function submitContactMessage(message) {
  if (!supabase) {
    return { ...message, id: Date.now(), created_at: new Date().toISOString() }
  }

  const payload = {
    name: message.name,
    email: message.email,
    phone: message.phone || null,
    subject: message.subject || null,
    message: message.message,
    status: 'new',
  }

  const { data, error } = await supabase.from('contact_messages').insert(payload).select('*').single()
  if (error) throw error

  return data
}
