import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/Button";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.screen}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What you Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton color="primary" title="LOGIN" />
        <AppButton color="secondary" title="REGISTER" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
