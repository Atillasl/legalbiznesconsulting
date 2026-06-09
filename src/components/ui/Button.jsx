import { memo } from 'react'
import { BUTTON_BASE_STYLES, BUTTON_VARIANTS } from '../../data/ui/buttonStyles'

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  iconBefore = null,
  iconAfter = null,
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON_BASE_STYLES} ${BUTTON_VARIANTS[variant]} ${className}`}
      {...props}
    >
      {iconBefore && <span className="flex items-center shrink-0">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="flex items-center shrink-0">{iconAfter}</span>}
    </button>
  )
}

export default memo(Button)
