import { StackNavigationProp } from "@react-navigation/stack";

type EntranceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Entrance"
>;

type RootStackParamList = {
  Entrance: undefined;
  SignIn: undefined;
  // ... other routes
};

export { EntranceScreenNavigationProp, RootStackParamList };
