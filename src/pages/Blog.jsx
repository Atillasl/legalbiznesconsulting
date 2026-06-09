import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import BlogHeader from '../components/blog/BlogHeader'
import BlogFilters from '../components/blog/BlogFilters'
import BlogPostsGrid from '../components/blog/BlogPostsGrid'
import { blogCategories, blogPosts } from '../data/blogData'

export default function Blog() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#f4efe8] text-[#0f172a] transition-all dark:bg-[#020617] dark:text-[#f1f5f9]">
      <BlogHeader />
      <BlogFilters
        categories={blogCategories}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        t={t}
      />
      <BlogPostsGrid posts={filteredPosts} t={t} />
    </div>
  )
}
