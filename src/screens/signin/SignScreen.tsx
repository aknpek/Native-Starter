import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/button/CustomButton"; // Update this import path
import getStyles from "./styles";
import { useTheme } from "../../context/theme/useTheme"; // Adjust path as needed
import { useNavigation } from "@react-navigation/native";
import { SignScreenNavigationProp } from "../../types/navigation";

const SignScreen = () => {
  const navigation = useNavigation<SignScreenNavigationProp>();
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
            navigation.navigate("SignUp");
          }}
          color="#FF6347" // TODO: use primary secondary color for the button
          textColor="#EBEBEB"
        />

        <CustomButton
          text="alreadyMember"
          onPress={() => {
            /* Handle already a member */
          }}
          color="#EBE5E5" // TODO: use primary secondary color for the button
        />
      </View>
    </View>
  );
};

export default SignScreen;
