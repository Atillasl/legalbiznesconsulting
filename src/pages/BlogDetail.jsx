import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi'
import { useLanguage } from '../hooks/useLanguage'
import { listPublicBlogPosts } from '../lib/blogService'

function decodeHtmlEntities(value) {
  if (typeof window === 'undefined') return value
  const textarea = document.createElement('textarea')
  textarea.innerHTML = value
  return textarea.value
}

function resolveLocalizedContent(content, lang) {
  if (Array.isArray(content)) return content.filter(Boolean)

  const byLang = Array.isArray(content?.[lang]) ? content[lang].filter(Boolean) : []
  if (byLang.length) return byLang

  const az = Array.isArray(content?.az) ? content.az.filter(Boolean) : []
  if (az.length) return az

  const en = Array.isArray(content?.en) ? content.en.filter(Boolean) : []
  if (en.length) return en

  const ru = Array.isArray(content?.ru) ? content.ru.filter(Boolean) : []
  return ru
}

function normalizeParagraphHtml(value) {
  const text = String(value || '').trim()
  if (!text) return ''

  if (/<\/?[a-z][\s\S]*>/i.test(text)) {
    return text
  }

  if (/&lt;\/?[a-z][\s\S]*&gt;/i.test(text)) {
    const decoded = decodeHtmlEntities(text)
    return /<\/?[a-z][\s\S]*>/i.test(decoded) ? decoded : `<p>${decoded}</p>`
  }

  return `<p>${text}</p>`
}

export default function BlogDetail() {
  const { postId } = useParams()
  const { t, currentLang } = useLanguage()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    listPublicBlogPosts()
      .then((items) => {
        if (active) setPosts(items)
      })
      .catch(() => {
        if (active) setPosts([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const post = useMemo(
    () => posts.find((article) => String(article.id) === postId),
    [posts, postId],
  )

  const currentIndex = useMemo(
    () => posts.findIndex((article) => String(article.id) === postId),
    [posts, postId],
  )

  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-[#f1f5f9] transition-colors duration-500">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Yuklenir...</h1>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-[#f1f5f9] transition-colors duration-500">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Məqalə tapılmadı</h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Bu məqalə mövcud deyil və ya səhv ünvanla daxil olmusunuz.
          </p>
          <Link
            to="/blog"
            className="mt-10 inline-flex rounded-xl bg-[#059aa2] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#047d82]"
          >
            Bloqa qayıt
          </Link>
        </div>
      </div>
    )
  }

  const localizedTitle = typeof post.title === 'string' ? post.title : (post.title[currentLang] || post.title.az || '')
  const localizedContent = resolveLocalizedContent(post.content, currentLang)

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-[#f1f5f9] transition-colors duration-500">
      <section className="relative pt-20 pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#059aa2] hover:opacity-80 transition-opacity"
          >
            <FiArrowLeft size={14} /> {t('blog.backToBlog') || 'Bloqa qayıt'}
          </Link>

          <div className="mt-6 space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#059aa2]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#059aa2]">
                  <FiTag className="text-[#059aa2]" size={12} />
                  {t(`blog.categories.${post.category}`)}
                </span>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  {localizedTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={13} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock size={13} /> {post.readTime}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900">
                <img src={post.image} alt={localizedTitle} className="h-60 w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-6 text-base leading-8 text-slate-700 dark:text-slate-300">
          {localizedContent.map((paragraph, idx) => (
            <div
              key={idx}
              className="last:mb-0"
              dangerouslySetInnerHTML={{ __html: normalizeParagraphHtml(paragraph) }}
            />
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {previousPost && (
            <Link
              to={`/blog/${previousPost.id}`}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-left transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Əvvəlki məqalə</p>
              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{typeof previousPost.title === 'string' ? previousPost.title : previousPost.title[currentLang] || previousPost.title.az}</h3>
            </Link>
          )}

          {nextPost && (
            <Link
              to={`/blog/${nextPost.id}`}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-left transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Növbəti məqalə</p>
              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{typeof nextPost.title === 'string' ? nextPost.title : nextPost.title[currentLang] || nextPost.title.az}</h3>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
