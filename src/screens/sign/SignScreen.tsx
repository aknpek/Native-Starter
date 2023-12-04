import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/button/CustomButton"; // Update this import path
import getStyles from "./styles";
import { useTheme } from "../../context/theme/useTheme"; // Adjust path as needed

const SignScreen = () => {
  const { theme } = useTheme(); // Use the theme hook
  const styles = getStyles(theme); // Pass the theme to get styles

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          text="signUp"
          onPress={() => {
            /* Handle sign up */
          }}
          color="#FF6347"
        />

        <CustomButton
          text="alreadyMember"
          onPress={() => {
            /* Handle already a member */
          }}
          color="transparent"
        />
      </View>
    </View>
  );
};

export default SignScreen;
