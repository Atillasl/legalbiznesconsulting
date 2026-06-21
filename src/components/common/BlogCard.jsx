import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { FiCalendar, FiClock, FiArrowRight, FiTag } from 'react-icons/fi'

export default function BlogCard({ post }) {
  const { t, currentLang } = useLanguage()

  if (!post) return null

  const title = typeof post.title === 'string' ? post.title : (post.title[currentLang] || post.title.az || '')
  const excerpt = typeof post.excerpt === 'string' ? post.excerpt : (post.excerpt[currentLang] || post.excerpt.az || '')

  return (
    // Qutu dizaynı incəldildi, sərt kölgələr (shadow-sm) minimalist xətlərlə əvəzləndi
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-500/10 bg-white/40 backdrop-blur-md transition-all duration-500 hover:border-[#059aa2]/30 hover:bg-white/80 hover:shadow-xl hover:shadow-[#059aa2]/5 dark:bg-white/[0.01] dark:hover:bg-white/[0.03]">
      
      {/* 1. MƏQALƏ ŞƏKLİ & PREMIUM BADGE */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img 
          src={post.image} 
          alt={post.title}
          // Şəkil ilk başda bir az lüks monoxrom (grayscale) kontrastda durur, hover anında canlanır
          className="h-full w-full object-cover filter grayscale-[30%] opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Şüşə effekti verən, mətni boğmayan minimalist kənarlıqlı kateqoriya nişanı */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium tracking-wider text-white uppercase shadow-sm">
          <FiTag className="text-[#59c9ca]" size={10} /> 
          {t(`blog.categories.${post.category}`)}
        </span>
      </div>

      {/* 2. MƏQALƏ KONTENT SAHƏSİ (Yazı ölçüləri qorundu, hiyerarxiya zərifləşdirildi) */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Meta Məlumatlar - Font font-mono üslubuna gətirildi */}
          <div className="flex items-center gap-4 text-[10px] font-medium tracking-wide text-slate-400 font-mono dark:text-slate-500">
            <span className="flex items-center gap-1">
              <FiCalendar size={11} className="text-[#059aa2]/70" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={11} className="text-[#059aa2]/70" /> {post.readTime}
            </span>
          </div>

          {/* Başlıq - İdeal 'text-base' ölçüsü qorundu, font-bold yerinə professional font-medium istifadə olundu */}
          <h3 className="mt-3 text-base font-medium leading-snug tracking-tight text-slate-900 group-hover:text-[#059aa2] transition-colors duration-300 dark:text-white">
            <Link to={`/blog/${post.id}`}>
              {title}
            </Link>
          </h3>
          
          {/* Qısa Xülasə - Oxunaqlı text-xs ölçüsündə, lakin font-light ilə daha zərif */}
          <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3 font-light tracking-wide dark:text-slate-400">
            {excerpt}
          </p>
        </div>

        {/* 3. KEÇİD LİNKİ - İncə border xətti və hərəkətli ox */}
        <div className="mt-6 border-t border-slate-500/5 pt-4 dark:border-slate-800/40">
          <Link 
            to={`/blog/${post.id}`} 
            // Ox işarəsinin lüks sürüşmə effekti (group-hover:translate-x-1)
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#059aa2] transition-all duration-300"
          >
            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#059aa2] after:transition-all after:duration-300 group-hover:after:w-full">
              {t('blog.readMore')}
            </span> 
            <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

    </article>
  )
}