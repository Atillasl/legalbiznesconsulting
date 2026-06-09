export const BUTTON_BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

export const BUTTON_VARIANTS = {
  primary:
    'bg-[#00969A] text-white shadow-lg shadow-[#00969A]/10 hover:bg-[#007A7E] hover:shadow-xl dark:shadow-none',
  secondary:
    'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800',
  danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/10',
}
