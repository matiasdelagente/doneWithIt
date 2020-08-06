import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return <LottieView source={require("../assets/animations/loader.json")} loop autoPlay />;
};

export default ActivityIndicator;
