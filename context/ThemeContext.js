import { createContext } from 'react';

export const themes = {
   "light": {
      "type": "light",
      "fontColor": "#112244",
      "backgroundColor": "#f9f9ee"
   },
   "dark": {
      "type": "dark",
      "fontColor": "#f9f9ee",
      "backgroundColor": "#112244"
   },
}

export const ThemeContext = createContext({});