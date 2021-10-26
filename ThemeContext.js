import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export default ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(() => theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
