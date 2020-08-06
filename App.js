import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./components/navigation/AppNavigator";
import navigationTheme from "./components/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
