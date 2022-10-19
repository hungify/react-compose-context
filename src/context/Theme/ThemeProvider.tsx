import { createContext } from 'react';
import { Themes } from '~/constants/themes';
import { useLocalStorage } from '~/hooks';

export interface ThemeState {
  theme: Themes;
}

const initialValue: ThemeState = {
  theme: Themes.light,
};

interface ThemeContext {
  state: ThemeState;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  state: initialValue,
  setTheme: () => undefined,
});
ThemeContext.displayName = 'ThemeProvider';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage('theme', initialValue) as [
    theme: ThemeState,
    setTheme: (theme: ThemeState) => void,
  ];

  const _handleSetTheme = (theme: Themes) => {
    const dark = { theme: 'dark' } as ThemeState;
    const light = { theme: 'light' } as ThemeState;

    setTheme(theme === Themes.light ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ state: theme, setTheme: _handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
