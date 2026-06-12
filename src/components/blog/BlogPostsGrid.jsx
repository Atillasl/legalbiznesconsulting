import BlogCard from '../common/BlogCard'
import { FiInbox } from 'react-icons/fi'

export default function BlogPostsGrid({ posts, t }) {
  // Yazı tapılmadıqda çıxan ekran tamamilə minimalist və lüks üsluba gətirildi
  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="text-center py-16 rounded-2xl border border-slate-500/10 bg-white/30 backdrop-blur-md dark:bg-white/[0.01]">
          {/* Sərt emociya əvəzinə incə brend rəngində xətti ikon */}
          <FiInbox className="mx-auto text-2xl text-[#059aa2] stroke-[1.2] mb-3 animate-pulse" />
          {/* Oxunaqlı, zərif şrift */}
          <p className="text-sm font-light tracking-wide text-slate-500 dark:text-slate-400">
            {t('blog.noResults')}
          </p>
        </div>
      </div>
    )
  }

  return (
    // Boşluqlar (gap-10) artırıldı ki, hər bloq kartı özlüyündə bir jurnal səhifəsi kimi "nəfəs ala" bilsin
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 antialiased">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          // İdeal oxunurluq və premium effektlər `BlogCard`-ın daxilinə ötürülür
          <div 
            key={post.id} 
            className="transition-all duration-500 hover:-translate-y-1.5"
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  )
}