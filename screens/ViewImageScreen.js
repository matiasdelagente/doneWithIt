import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={36} color="white" />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons name="trash-can-outline" size={36} color="white" />
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
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 20,
    alignItems: "center",
  },
  deleteBtn: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 20,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
