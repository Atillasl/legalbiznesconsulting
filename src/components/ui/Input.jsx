import { memo } from 'react'

const INPUT_BASE_STYLES = `
  w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 focus:outline-none
  disabled:cursor-not-allowed disabled:opacity-60
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
  const validationStyles = error
    ? 'border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500'
    : 'border-slate-200 bg-slate-50/50 focus:border-[#00969A] focus:bg-white dark:border-slate-800 dark:bg-slate-900 dark:focus:border-[#00969A] dark:focus:bg-slate-950'

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label} {required && <span className="text-red-500">*</span>}
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
          className={`${INPUT_BASE_STYLES} ${validationStyles} resize-none`}
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
          className={`${INPUT_BASE_STYLES} ${validationStyles}`}
          {...props}
        />
      )}
      {error && <p className="text-xs font-medium text-red-500 animate-fade-in">{error}</p>}
    </div>
  )
}

export default memo(Input)
