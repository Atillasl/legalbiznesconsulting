import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { FiCalendar, FiClock, FiArrowRight, FiTag } from 'react-icons/fi'

export default function BlogCard({ post }) {
  const { t } = useLanguage()

  if (!post) return null

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00969A]/20 hover:shadow-md dark:border-slate-900 dark:bg-slate-900">
      
      {/* 1. Məqalə Şəkli & Kateqoriya Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={post.image} 
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-lg bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-slate-800 shadow-sm dark:bg-slate-950/95 dark:text-white">
          <FiTag className="text-[#00969A]" size={10} /> {t(`blog.categories.${post.category}`)}
        </span>
      </div>

      {/* 2. Məqalə Kontent Sahəsi */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Meta Məlumatlar */}
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <FiCalendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={12} /> {post.readTime} {t('blog.readTimeSuffix')}
            </span>
          </div>

          {/* Başlıq */}
          <h3 className="mt-3 text-base font-bold leading-snug text-slate-900 group-hover:text-[#00969A] transition-colors dark:text-white">
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h3>
          
          {/* Qısa Xülasə */}
          <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3 dark:text-slate-400">
            {post.excerpt}
          </p>
        </div>

        {/* 3. Keçid Linki */}
        <div className="mt-6 border-t border-slate-50 pt-4 dark:border-slate-800/60">
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00969A] hover:gap-2.5 transition-all"
          >
            {t('blog.readMore')} <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

    </article>
  )
}