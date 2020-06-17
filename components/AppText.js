import React from "react";
import { Text } from "react-native";

const AppText = (props) => {
  return <Text style={[styles.screen, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  screen: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
