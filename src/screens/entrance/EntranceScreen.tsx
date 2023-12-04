import React, { useEffect } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { EntranceScreenNavigationProp } from "../../types/navigation";
import getStyles from "./styles";
import { useTheme } from "../../context/theme/useTheme"; // Adjust path as needed

const EntranceScreen = () => {
  const navigation = useNavigation<EntranceScreenNavigationProp>();
  const { theme } = useTheme(); // Use the theme hook
  const styles = getStyles(theme); // Pass the theme to get styles


  useEffect(() => {
    // This simulates the delay for the animation.
    setTimeout(() => {
      // Here, you would check if the user is signed in.
      // If they are, navigate to 'Main'. Otherwise, 'SignIn'.
      navigation.navigate("SignIn");
    }, 1000);
  }); // 3000ms = 3 seconds

  return (
    <View style={styles.container}>
      <Text>Welcome to App</Text>
      {/* <LottieView
        source={require("../assets/your-animation.json")}
        autoPlay
        loop
      /> */}
    </View>
  );
};

export default EntranceScreen;
