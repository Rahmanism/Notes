import { useLocalStorage } from 'hooks/useLocalStorage'
import { createContext, useContext, useMemo, useState } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [currentColorTheme, setCurrentColorTheme] = useLocalStorage(
    'COLOR_THEME',
    'light'
  )
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const setColorTheme = (theme) => setCurrentColorTheme(theme)

  // Listen for changes in system theme
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (currentColorTheme === 'system') {
      const systemInEVENTTheme = e.matches ? 'dark' : 'light'
      setSystemTheme(systemInEVENTTheme)
    }
  })

  /**
   * Gets the dark or light based on the current color theme
   * which can be dark/light/system.
   */
  const colorTheme = useMemo(() => {
    let newTheme = 'light'
    switch (currentColorTheme) {
      case 'dark':
      case 'light':
        newTheme = currentColorTheme
        break
      case 'system':
        newTheme = systemTheme
        break
      default:
        newTheme = 'light'
        break
    }

    return newTheme
  }, [currentColorTheme, systemTheme])

  return (
    <DarkModeContext.Provider
      value={{ colorTheme, setColorTheme, currentColorTheme }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
