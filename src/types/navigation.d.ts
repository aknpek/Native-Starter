import { StackNavigationProp } from "@react-navigation/stack";

type EntranceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Entrance"
>;

type SignScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SingUp",
  "AlreadyMember"
>;

type RootStackParamList = {
  Entrance: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AlreadyMember: undefined;
  // ... other routes
};

export {
  EntranceScreenNavigationProp,
  RootStackParamList,
  SignScreenNavigationProp,
};
