import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

const AppButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[props.color] }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
