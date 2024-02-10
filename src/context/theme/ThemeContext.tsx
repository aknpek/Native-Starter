import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { Theme, lightTheme, darkTheme } from "./themes";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): React.ReactElement => {
  // const deviceTheme = Appearance.getColorScheme(); // can be 'dark', 'light' or 'no-preference'
  const deviceTheme: string = "light";
  const initialTheme = deviceTheme === "dark" ? darkTheme : lightTheme;
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const themeChangeListener = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
      }
    );

    return () => themeChangeListener.remove();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
