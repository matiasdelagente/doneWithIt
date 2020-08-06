import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteBtn: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
