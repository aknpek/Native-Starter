import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignScreen from "../screens/sign/SignScreen";
import EntranceScreen from "../screens/entrance/EntranceScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrance">
        <Stack.Screen
          name="Entrance"
          component={EntranceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
