import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.closeBtn}></View>
      <View style={styles.deleteBtn}></View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeBtn: {
    height: 50,
    width: 50,
    position: "absolute",
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
  },
  deleteBtn: {
    height: 50,
    width: 50,
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
