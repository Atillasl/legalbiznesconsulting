import BlogCard from '../common/BlogCard'
import { FiInbox } from 'react-icons/fi'

export default function BlogPostsGrid({ posts, t }) {
  // Yazı tapılmadıqda çıxan ekran tamamilə minimalist və lüks üsluba gətirildi
  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="text-center py-10 rounded-2xl border border-slate-500/10 bg-white/30 backdrop-blur-md dark:bg-white/[0.01]">
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

  const placeholders = Array.from({ length: Math.max(0, 6 - posts.length) })

  return (
    // Boşluqlar daha sıxlandı, lakin kartlar hələ də hava alır
    <section className="mx-auto max-w-7xl min-h-[600px] px-6 py-8 sm:px-8 antialiased">
      <div className="grid grid-cols-3 gap-8">
        {posts.map((post) => (
          // İdeal oxunurluq və premium effektlər `BlogCard`-ın daxilinə ötürülür
          <div
            key={post.id}
            className="transition-all duration-500 hover:-translate-y-1.5"
          >
            <BlogCard post={post} />
          </div>
        ))}
        {placeholders.map((_, index) => (
          <div key={`placeholder-${index}`} className="invisible">
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-500/10 bg-white/40 backdrop-blur-md">
              <div className="aspect-[16/10] bg-slate-100" />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-slate-200" />
                  <div className="h-3 rounded-full bg-slate-200 w-5/6" />
                  <div className="h-3 rounded-full bg-slate-200 w-4/6" />
                </div>
                <div className="mt-6 h-10 border-t border-slate-500/5" />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}