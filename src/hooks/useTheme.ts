import { useEffect, useCallback } from 'react'

type Theme = 'light'

export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const toggleTheme = useCallback(() => {
    // Intentionally no-op: theme switching has been removed.
  }, [])

  const setTheme = useCallback((_newTheme: Theme) => {
    // Intentionally no-op: light mode is the only supported theme.
  }, [])

  return { theme: 'light' as Theme, isDark: false, toggleTheme, setTheme }
}
