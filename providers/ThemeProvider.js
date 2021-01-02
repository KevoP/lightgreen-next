import { themes, ThemeContext } from '../context/ThemeContext';
import { useState, useContext, useMemo } from 'react';

export const ThemeProvider = ({children}) => {
   const [theme, setTheme] = useState(themes.light);

   const toggleTheme = () => {
      setTheme(theme.type === 'light'
          ? themes.dark
          : themes.light
      )
  }

  const themeApi = useMemo(() => {
      return {theme, toggleTheme}
   }, [theme, toggleTheme]);


   return <ThemeContext.Provider value={themeApi}>
        {children}
    </ThemeContext.Provider> 
}

export const useTheme = () => useContext(ThemeContext);

