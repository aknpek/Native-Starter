import React from "react";
import MainNavigator from "./src/navigations/MainNavigation";
import { ThemeProvider } from "./src/context/theme/ThemeContext";
import { LocalizationProvider } from "./src/context/locale/LocalizationContext";
import AppLoading from "expo-app-loading";
import { useFonts } from "./src/utils/font/useFonts";
import { fontMap } from "./src/utils/font/fontMap";

const App = () => {
  const isFontLoaded = useFonts(fontMap);

  // If fonts aren't loaded, display the AppLoading screen
  if (!isFontLoaded) {
    return <AppLoading />;
  }

  // Once fonts are loaded, render your app's main content
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <MainNavigator />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
