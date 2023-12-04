import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseUnit = width < height ? width : height; // Use the smaller dimension for base calculations to handle landscape/portrait modes

const getStyles = (theme: any) =>
  StyleSheet.create({
    button: {
      width: baseUnit * 0.8, // Reduced to 70% of the base dimension for lesser width
      height: baseUnit * 0.12, // Increased to 12% of the base dimension for more height
      justifyContent: "center",
      alignItems: "center",
      borderRadius: baseUnit * 0.05, // Increased for rounder corners
      marginBottom: baseUnit * 0.03,
      backgroundColor: theme.buttonBackgroundColor,
    },
    buttonText: {
      fontFamily: "Lato-Regular",
      fontSize: baseUnit * 0.04,
      fontWeight: "bold",
      color: theme.buttonTextColor,
      letterSpacing: 1, // Adjust this value to your liking
    },
  });

export default getStyles;
