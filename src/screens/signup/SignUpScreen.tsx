import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AppleLogoSvg from "../../components/svg/svg"; // Ensure you have an SVG for the Apple logo

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country Code"
          // Other props like onChangeText
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          // Other props like onChangeText
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.appleButton}>
        <AppleLogoSvg width={24} height={24} />
        <Text style={styles.appleButtonText}>Sign up with Apple</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        This site is protected by Lorem Ipsum and the Google{" "}
        <Text style={styles.linkText}>Privacy Policy</Text> and{" "}
        <Text style={styles.linkText}>Terms of Service</Text> apply.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16, // Use padding for spacing
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32, // Space below the header
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16, // Space below the input container
  },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 25,
    padding: 16,
    marginBottom: 8, // Space between inputs
  },
  button: {
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    padding: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 16, // Space below the button
  },
  buttonText: {
    // Styles for the text inside the button
  },
  orText: {
    // Styles for the 'or' text
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 25,
    width: "100%",
    shadowColor: "#000", // For shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  appleButtonText: {
    marginLeft: 8, // Space between the Apple logo and text
  },
  footerText: {
    position: "absolute",
    bottom: 16,
    textAlign: "center",
  },
  linkText: {
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
