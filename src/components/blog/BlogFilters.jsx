import { FiSearch } from 'react-icons/fi'

export default function BlogFilters({ categories, selectedCategory, searchQuery, onCategoryChange, onSearchChange, t }) {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-8">
      {/* Sərt border xətti tam minimalist mikroskopik xəttlə əvəzləndi */}
      <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* CATEGORIES - Ultra-Minimalist Tab İnteqrasiyası */}
        <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                // Sərt fon qutuları silindi; keçid tam zərif yazı rəngi və alt xətlə idarə olunur
                className={`relative pb-1.5 text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap ${
                  isSelected
                    ? 'text-[#059aa2] font-semibold'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {t(`blog.categories.${cat}`)}
                
                {/* Seçilmiş kateqoriyanın altındakı ipək kimi incə premium xətt */}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#059aa2] rounded-full animate-fadeIn" />
                )}
              </button>
            )
          })}
        </div>

        {/* SEARCH BAR - Minimalist Premium Input Sistem */}
        <div className="relative w-full md:w-64 lg:w-80 group md:flex-grow-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3 text-slate-400 transition-colors duration-300 group-focus-within:text-[#059aa2]">
            <FiSearch className="text-sm md:text-base" />
          </div>
          <input
            type="text"
            placeholder={t('blog.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full border-none bg-slate-100/70 py-2.5 md:py-3 pl-8 md:pl-10 pr-3 text-xs md:text-sm font-light tracking-wide text-slate-900 transition-all placeholder-slate-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#059aa2]/20 dark:bg-slate-900/70 dark:text-white dark:placeholder-slate-500"
          />
        </div>

      </div>
    </section>
  )
}