import { memo } from 'react'

/**
 * Premium Button Component
 * - Zərif keçid effektləri (hover/active)
 * - İkonlar üçün avtomatik boşluq idarəçiliyi
 * - Yüksək keyfiyyətli "loading" və "disabled" dövlətləri
 */
function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  iconBefore = null,
  iconAfter = null,
  disabled = false,
  isLoading = false,
  ...props
}) {
  
  // Premium variantlar (Tailwind ilə birləşdirilmiş)
  const variants = {
    primary: "bg-[#059aa2] text-white hover:bg-[#04878f] shadow-lg shadow-[#059aa2]/20 border border-transparent",
    secondary: "bg-white/50 dark:bg-white/[0.03] backdrop-blur-md text-slate-700 dark:text-slate-200 border border-slate-500/10 hover:border-[#059aa2]/30 hover:bg-white/80",
    outline: "border border-[#059aa2]/30 text-[#059aa2] hover:bg-[#059aa2]/5"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative inline-flex items-center justify-center gap-2.5 
        px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] 
        transition-all duration-300 ease-out active:scale-[0.98]
        rounded-xl disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {/* İkonlar üçün zərif ölçü idarəçiliyi */}
      {iconBefore && <span className="flex items-center shrink-0 opacity-80">{iconBefore}</span>}
      
      <span className="relative z-10">{children}</span>
      
      {iconAfter && <span className="flex items-center shrink-0 opacity-80">{iconAfter}</span>}
      
      {/* Aktiv olduqda zərif işıq effekti (isteğe bağlı) */}
      {!disabled && !isLoading && (
        <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10" />
      )}
    </button>
  )
}

export default memo(Button)