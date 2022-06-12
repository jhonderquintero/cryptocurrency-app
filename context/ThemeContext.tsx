import React, { createContext, useContext, useState } from 'react';

type ColorScheme = 'dark' | 'light';

interface ITheme {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ITheme | null>(null);

function getPreferredScheme(
  defaultColorScheme: ColorScheme = 'light'
): ColorScheme {
  if (typeof window !== 'undefined' && window.localStorage)
    if (
      localStorage['color-theme'] === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      return 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      return 'light';
    }
  return defaultColorScheme;
}

export function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() =>
    getPreferredScheme()
  );

  const colorSchemeIsDark: boolean = colorScheme === 'dark';

  const toggleColorScheme = () => {
    setColorScheme(colorSchemeIsDark ? 'light' : 'dark');
  };

  React.useEffect(() => {
    localStorage.setItem('color-theme', colorScheme);
    if (localStorage['color-theme'] === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  const value = { colorScheme, toggleColorScheme };

  // NOTE: probably in future we *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  // https://github.com/kentcdodds/old-kentcdodds.com/blob/319db97260078ea4c263e75166f05e2cea21ccd1/content/blog/how-to-optimize-your-context-value/index.md
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeProvider(): ITheme {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }
  return context;
}

export const Example = () => {
  const { toggleColorScheme } = useThemeProvider();

  return (
    <button
      onClick={(e) => {
        toggleColorScheme();
      }}
    >
      change color
    </button>
  );
};
