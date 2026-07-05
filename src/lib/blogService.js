import { blogPosts } from '../data/blogData'
import { supabase } from './supabaseClient'

function formatDate(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('az-AZ').format(date)
}

function normalizeLocalizedText(value) {
  if (typeof value === 'string') {
    return { az: value, en: value, ru: value }
  }

  return {
    az: value?.az || value?.en || value?.ru || '',
    en: value?.en || value?.az || value?.ru || '',
    ru: value?.ru || value?.az || value?.en || '',
  }
}

function normalizeLocalizedContent(value) {
  if (typeof value === 'string') {
    return { az: [value], en: [value], ru: [value] }
  }

  const normalizeList = (items) => (Array.isArray(items) ? items.map((item) => String(item)).filter(Boolean) : [])

  const az = normalizeList(value?.az)
  const en = normalizeList(value?.en)
  const ru = normalizeList(value?.ru)

  return {
    az,
    en: en.length ? en : az,
    ru: ru.length ? ru : az,
  }
}

function mapBlogRow(row) {
  return {
    id: row.id,
    title: normalizeLocalizedText(row.title),
    excerpt: normalizeLocalizedText(row.excerpt),
    content: normalizeLocalizedContent(row.content),
    category: row.category || 'startup',
    date: formatDate(row.published_at || row.created_at),
    readTime: row.read_time || '5 dəq',
    image: row.image || row.cover_image || '',
    coverImage: row.image || row.cover_image || '',
  }
}

export async function listPublicBlogPosts() {
  if (!supabase) {
    return blogPosts
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) throw error

  return (data || []).map(mapBlogRow)
}
