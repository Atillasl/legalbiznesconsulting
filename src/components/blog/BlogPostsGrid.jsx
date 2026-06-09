import BlogCard from '../common/BlogCard'

export default function BlogPostsGrid({ posts, t }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16 bg-[#f5f1ec] rounded-3xl border border-dashed border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        <span className="text-3xl block text-slate-300 dark:text-slate-700 mb-3">😕</span>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('blog.noResults')}</p>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
