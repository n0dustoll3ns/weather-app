import { createContext } from 'react'

interface Props {
  theme: string;
  changeTheme: (theme: string) => void;

}

export const ThemeContext = createContext({
  theme: '',
  changeTheme: () => { },

});