export interface Theme {
  background: string;
  text: string;
  logoBoxColor: string;
  entranceScreenBackgroundColor: string;
  signUpButtonBackgroundColor: string;
  alreadyMemberButtonBorderColor: string;
}

export const lightTheme: Theme = {
  background: "#FBF9F9",
  text: "#000000",
  logoBoxColor: "#E1E1E1", // Placeholder background for light theme

  // Entrance Screen
  entranceScreenBackgroundColor: "#FF6347",

  // Sign Up Screen

  signUpButtonBackgroundColor: "#FF6347", // Tomato color for sign up button in light theme
  alreadyMemberButtonBorderColor: "#A9A9A9", // DarkGray color for already member button in light theme
};

export const darkTheme: Theme = {
  background: "#000000",
  text: "#ffffff",
  logoBoxColor: "#4A4A4A", // Slightly lighter background for dark theme
  signUpButtonBackgroundColor: "#FF6347", // Tomato color for sign up button in dark theme (can be changed)
  alreadyMemberButtonBorderColor: "#ffffff", // White color for already member button in dark theme
};
