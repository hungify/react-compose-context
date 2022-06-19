export { default as ThemeProvider } from './ThemeProvider';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;
