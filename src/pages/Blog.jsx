import { useState, useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import BlogHeader from '../components/blog/BlogHeader'
import BlogFilters from '../components/blog/BlogFilters'
import BlogPostsGrid from '../components/blog/BlogPostsGrid'
import { blogCategories, blogPosts } from '../data/blogData'

export default function Blog() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // useMemo istifadə edərək performansı optimallaşdırırıq
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020617] transition-colors duration-700">
      
      {/* Məzmunun nəfəs alması üçün konteyner */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        
        {/* HEADER BÖLMƏSİ */}
        <div className="mb-20">
          <BlogHeader />
        </div>

        {/* FİLTRLƏR - Şüşə effekti ilə */}
        <div className="sticky top-24 z-30 mb-12">
          <div className="rounded-2xl border border-slate-500/10 bg-white/60 p-4 backdrop-blur-xl dark:bg-slate-900/60 shadow-lg shadow-slate-900/5">
            <BlogFilters
              categories={blogCategories}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
              t={t}
            />
          </div>
        </div>

        {/* POSTLAR GRID */}
        {filteredPosts.length > 0 ? (
          <BlogPostsGrid posts={filteredPosts} t={t} />
        ) : (
          <div className="text-center py-32">
            <h3 className="text-xl font-light text-slate-400">
              {t('blog.noResults') || 'Məqalə tapılmadı...'}
            </h3>
          </div>
        )}

      </main>
    </div>
  )
}