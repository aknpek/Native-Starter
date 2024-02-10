import { useContext } from "react";
import { LocalizationContext } from "./LocalizationContext";

export const useTranslation = () => {
  return useContext(LocalizationContext);
};
