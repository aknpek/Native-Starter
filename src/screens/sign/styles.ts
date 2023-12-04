import { StyleSheet, Dimensions } from "react-native";

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between", // Adjust the distribution
      backgroundColor: theme.backgroundColor, // Assuming your theme context provides this
      paddingHorizontal: 20,
      paddingBottom: Dimensions.get("window").height * 0.05, // Give a 5% bottom padding for buttons
    },
    buttonWrapper: {
      width: "100%",
      position: "absolute",
      bottom: Dimensions.get("window").height * 0.05, // Position 5% from the bottom
      alignItems: "center",
    },
    logoBox: {
      width: 150,
      height: 150,
      backgroundColor: theme.logoBoxColor || "#E1E1E1", // Fallback to gray if no logoBoxColor in theme
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
    },
    logoText: {
      fontSize: 24,
      color: theme.textColor, // Assuming your theme context provides this
    },
    signUpButton: {
      backgroundColor: theme.signUpButtonBackgroundColor || "#FF6347",
    },
    alreadyMemberButton: {
      backgroundColor: theme.alreadyMemberBackgroundColor || "#F3F3F3",
    },
  });

export default getStyles;
