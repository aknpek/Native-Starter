import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import getStyles from "./styles";
import { useTheme } from "../../context/theme/useTheme"; // Adjust path as needed
import { useTranslation } from "../../context/locale/useLocalization";

interface CustomButtonProps {
  color: string;
  text: string;
  textColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  text,
  textColor,
  onPress,
}) => {
  const { theme } = useTheme(); // Use the theme hook
  const styles = getStyles(theme); // Pass the theme to get styles
  const { translations } = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {translations[text] || text}{" "}
        {/* Use translation if available, else fallback to provided text */}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
