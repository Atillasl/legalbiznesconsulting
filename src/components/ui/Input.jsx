import { memo } from 'react'

const INPUT_BASE_STYLES = `
  w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-300 ease-out outline-none
  disabled:cursor-not-allowed disabled:opacity-50
`

function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = '',
  isTextarea = false,
  rows = 4,
  className = '',
  ...props
}) {
  
  // Premium Vurğular
  const validationStyles = error
    ? 'border-red-500/50 bg-red-500/[0.02] focus:ring-2 focus:ring-red-500/10'
    : 'border-slate-500/10 bg-white/50 focus:border-[#059aa2] focus:bg-white focus:ring-4 focus:ring-[#059aa2]/5 dark:bg-slate-900/50 dark:border-slate-800'

  return (
    <div className={`w-full space-y-2 group ${className}`}>
      {label && (
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-[#059aa2]">
          {label} {required && <span className="text-[#059aa2]">*</span>}
        </label>
      )}
      
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${INPUT_BASE_STYLES} ${validationStyles} resize-none dark:text-white`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${INPUT_BASE_STYLES} ${validationStyles} dark:text-white`}
          {...props}
        />
      )}
      
      {error && (
        <p className="text-[10px] font-bold uppercase tracking-wider text-red-500 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default memo(Input)