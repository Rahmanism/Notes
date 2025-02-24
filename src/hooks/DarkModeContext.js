import { useLocalStorage } from 'hooks/useLocalStorage'
import { createContext, useContext } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage('DARK_MODE', false)
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
