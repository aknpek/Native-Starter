import { useState, useEffect } from "react";
import * as Font from "expo-font";

export const useFonts = (fontMap: { [key: string]: string }) => {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      try {
        await Font.loadAsync(fontMap);
        setFontLoaded(true);
      } catch (error) {
        console.warn("Error loading fonts: ", error);
      }
    }

    loadFontsAsync();
  }, [fontMap]);

  return isFontLoaded;
};
