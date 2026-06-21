import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function BlogPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const visibleButtons = 5
  const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - visibleButtons + 1))
  const endPage = Math.min(totalPages, startPage + visibleButtons - 1)
  const pageNumbers = []

  for (let page = startPage; page <= endPage; page += 1) {
    pageNumbers.push(page)
  }

  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80 dark:text-slate-300 sm:flex-row">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        Səhifə {currentPage} / {totalPages}
      </p>

      <div className="inline-flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300/70 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
        >
          <FiChevronLeft size={16} /> Əvvəlki
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-xl border px-3 text-xs font-semibold transition-colors duration-200 ${
              page === currentPage
                ? 'border-[#059aa2] bg-[#059aa2]/10 text-[#059aa2]'
                : 'border-slate-300/70 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300/70 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
        >
          Sonrakı <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
