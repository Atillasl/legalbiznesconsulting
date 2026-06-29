import { useState, useMemo, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import BlogHeader from '../components/blog/BlogHeader'
import BlogFilters from '../components/blog/BlogFilters'
import BlogPostsGrid from '../components/blog/BlogPostsGrid'
import BlogPagination from '../components/blog/BlogPagination'
import { blogCategories, blogPosts } from '../data/blogData'

export default function Blog() {
  const { t, currentLang } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const blogGridRef = useRef(null)

  useEffect(() => {
    if (blogGridRef.current) {
      blogGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [currentPage])

  // useMemo istifadə edərək performansı optimallaşdırırıq
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const title = typeof post.title === 'string' ? post.title : (post.title[currentLang] || post.title.az || '')
      const excerpt = typeof post.excerpt === 'string' ? post.excerpt : (post.excerpt[currentLang] || post.excerpt.az || '')
      const matchesSearch =
        query === '' ||
        title.toLowerCase().includes(query) ||
        excerpt.toLowerCase().includes(query)
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, currentLang])

  const handleSearchChange = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage))
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-700">
      
      {/* Məzmunun nəfəs alması üçün konteyner */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        
        {/* HEADER BÖLMƏSİ */}
        <div className="mb-10">
          <BlogHeader />
        </div>

        {/* FİLTRLƏR - Şüşə effekti ilə */}
        <div className="sticky top-20 z-30 mb-10">
          <div className="rounded-2xl border border-slate-500/10 bg-white/60 p-4 backdrop-blur-xl dark:bg-slate-900/60 shadow-lg shadow-slate-900/5">
            <BlogFilters
              categories={blogCategories}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onCategoryChange={handleCategoryChange}
              onSearchChange={handleSearchChange}
              t={t}
            />
          </div>
        </div>

        {/* POSTLAR GRID */}
        {currentPosts.length > 0 ? (
          <>
            <div ref={blogGridRef}>
              <BlogPostsGrid posts={currentPosts} t={t} />
            </div>
            <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-light text-slate-400">
              {t('blog.noResults') || 'Məqalə tapılmadı...'}
            </h3>
          </div>
        )}

      </main>
    </div>
  )
}