import { FiSearch } from 'react-icons/fi'

export default function BlogFilters({ categories, selectedCategory, searchQuery, onCategoryChange, onSearchChange, t }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      {/* Sərt border xətti tam minimalist mikroskopik xəttlə əvəzləndi */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-500/10 pb-6 dark:border-slate-800/60">
        
        {/* CATEGORIES - Ultra-Minimalist Tab İnteqrasiyası */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                // Sərt fon qutuları silindi; keçid tam zərif yazı rəngi və alt xətlə idarə olunur
                className={`relative pb-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
                  isSelected
                    ? 'text-[#059aa2] font-semibold'
                    : 'text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200'
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
        <div className="relative w-full md:w-72 group">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 text-slate-400 transition-colors duration-300 group-focus-within:text-[#059aa2]">
            <FiSearch className="text-base" />
          </div>
          <input
            type="text"
            placeholder={t('blog.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            // Qalın kənarlıqlar ləğv edildi, tam şəffaf fonda zərif alt xətt (border-b) fəlsəfəsi tətbiq olundu
            className="w-full border-b border-slate-500/10 bg-transparent py-2 pl-7 pr-2 text-xs font-light tracking-wide text-slate-900 transition-all placeholder-slate-400 focus:border-[#059aa2] focus:outline-none dark:text-white dark:placeholder-slate-600"
          />
        </div>

      </div>
    </section>
  )
}