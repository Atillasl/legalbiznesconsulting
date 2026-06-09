import { useEffect } from 'react'

export function useOutsideClick(ref, handler) {
  useEffect(() => {
    function handleMouseDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [handler, ref])
}
