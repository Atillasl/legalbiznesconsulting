export default function BlogFilters({ categories, selectedCategory, searchQuery, onCategoryChange, onSearchChange, t }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-200/60 pb-8 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00969A] text-white shadow-md shadow-[#00969A]/10'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800'
              }`}
            >
              {t(`blog.categories.${cat}`)}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={t('blog.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm transition-all focus:border-[#00969A] focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:focus:border-[#00969A]"
          />
        </div>
      </div>
    </section>
  )
}
